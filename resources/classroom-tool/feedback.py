"""Generera AI-feedback per elev och posta till surveyappens AssignmentFeedback-inkorg.

Flöde:
  1. Hämta råa svar (Drive eller Forms) per elev
  2. Anropa `claude -p` med (rubric + prompt-template + elevsvar) per elev
  3. Skriv pre-send dump till Brain/00-Inbox/ (för granskning i efterhand)
  4. Mappa Elev N → surveyappens student_number (course-mappings/<courseId>.json)
  5. POSTa via `survey-platform-pp-cli courses assignment-feedback create --stdin`

Konventioner:
  - Rubrik bor i vaultet: Brain/Bedömningsmallar/<kurskod>/<work-slug>.md (--rubric overrideable)
  - Prompt-template: prompts/feedback-default.md (--prompt overrideable)
  - Mappning per kurs: course-mappings/<courseId>.json (gitignored)
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path

import gws_client
import drive
import forms
from anonymize import CourseAliases

ROOT = Path(__file__).resolve().parent
MAPPING_DIR = ROOT / "course-mappings"
DEFAULT_PROMPT_PATH = ROOT / "prompts" / "feedback-default.md"
VAULT_INBOX = Path("/home/anders/Second brain/Brain/00-Inbox")
SURVEY_CLI_BINARY = "/tmp/survey-platform-cli"


class FeedbackError(Exception):
    pass


def _alias_num(alias: str) -> int:
    return int(alias.split()[1])


def _slug(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[^a-z0-9åäö]+", "-", s)
    return s.strip("-")[:60] or "uppgift"


def _collect_drive_responses(course_id: str, work_id: str) -> list[dict]:
    submissions = gws_client.list_submissions(course_id, work_id)
    aliases = CourseAliases(course_id)
    for s in submissions:
        if s.get("userId"):
            aliases.alias_for(s["userId"])
    aliases.save()

    out: list[dict] = []
    for s in submissions:
        uid = s.get("userId")
        if not uid:
            continue
        if s.get("state") in ("CREATED", "NEW"):
            continue
        alias = aliases.alias_for(uid)
        body = drive.fetch_submission_text(s, use_cache=True)
        text_parts: list[str] = []
        for p in body["parts"]:
            t = p["text"].rstrip()
            if t:
                text_parts.append(t)
        text = "\n\n---\n\n".join(text_parts).strip()
        if not text:
            continue
        out.append({"alias": alias, "alias_num": _alias_num(alias), "text": text})
    out.sort(key=lambda r: r["alias_num"])
    return out


def _collect_form_responses(course_id: str, form_id: str) -> list[dict]:
    form_data, responses = forms._fetch_data(form_id)
    questions = forms._extract_questions(form_data)
    annotated, _orphans = forms._annotate_responses(course_id, responses)

    out: list[dict] = []
    for _, alias, response in annotated:
        ans_by_qid = response.get("answers") or {}
        blocks: list[str] = []
        for q in questions:
            ans = ans_by_qid.get(q["question_id"])
            text = forms._format_answer(ans)
            blocks.append(f"**Fråga {q['index']}: {q['title']}**\n\n{text}")
        text = "\n\n".join(blocks).strip()
        if text:
            out.append({"alias": alias, "alias_num": _alias_num(alias), "text": text})
    out.sort(key=lambda r: r["alias_num"])
    return out


def collect_responses(course_id: str, work_id: str) -> tuple[dict, dict, list[dict]]:
    """Returnerar (course, work, responses)."""
    course = gws_client.get_course(course_id)
    work = gws_client.get_coursework(course_id, work_id)
    form_id = forms.extract_form_id(work)
    if form_id:
        return course, work, _collect_form_responses(course_id, form_id)
    return course, work, _collect_drive_responses(course_id, work_id)


def _ensure_mapping_template(course_id: str, course_name: str, aliases: list[str]) -> Path:
    """Skapar tom mappnings-mall om den saknas. Returnerar path."""
    MAPPING_DIR.mkdir(parents=True, exist_ok=True)
    path = MAPPING_DIR / f"{course_id}.json"
    if path.exists():
        return path
    payload = {
        "course_id": course_id,
        "course_name": course_name,
        "_help": (
            "Fyll i student_number för varje alias. Numret hittar du i "
            "keys/Survey platform användarnamn.xls (jämför med key.html för "
            "att se vilket Elev N som är vem). Använd null för elever som "
            "inte ska få feedback (de hoppas över)."
        ),
        "mapping": {alias: None for alias in aliases},
    }
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    return path


def load_mapping(course_id: str, required_aliases: list[str], course_name: str) -> dict[str, int]:
    """Returnerar {alias: student_number} för aliases där mapping är ifylld."""
    path = MAPPING_DIR / f"{course_id}.json"
    if not path.exists():
        created = _ensure_mapping_template(course_id, course_name, required_aliases)
        raise FeedbackError(
            f"Mappnings-fil saknas. En tom mall skapades:\n  {created}\n"
            f"Fyll i student_number per alias (slå upp i keys/) och kör kommandot igen."
        )
    data = json.loads(path.read_text(encoding="utf-8"))
    raw = data.get("mapping") or {}

    missing_aliases = [a for a in required_aliases if a not in raw]
    if missing_aliases:
        for a in missing_aliases:
            raw[a] = None
        data["mapping"] = raw
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
        raise FeedbackError(
            f"Nya alias hittade som saknas i {path.name}: {', '.join(missing_aliases)}\n"
            f"Fyll i numren och kör igen."
        )

    result: dict[str, int] = {}
    for alias, num in raw.items():
        if num is None:
            continue
        if not isinstance(num, int) or num < 1:
            raise FeedbackError(
                f"Ogiltig student_number för {alias} i {path.name}: {num!r}"
            )
        result[alias] = num
    return result


def _render_prompt(template: str, rubric: str, assignment_title: str, response: str) -> str:
    return (
        template
        .replace("{rubric}", rubric)
        .replace("{assignment_title}", assignment_title)
        .replace("{response}", response)
    )


def _call_claude(prompt: str) -> str:
    """Subprocess-anrop till claude CLI. Returnerar feedback-text eller höjer."""
    try:
        result = subprocess.run(
            ["claude", "-p", prompt],
            capture_output=True,
            text=True,
            timeout=180,
        )
    except FileNotFoundError as e:
        raise FeedbackError(f"`claude` CLI hittas inte i PATH: {e}") from e
    except subprocess.TimeoutExpired as e:
        raise FeedbackError(f"claude-anrop timeout efter 180s: {e}") from e
    if result.returncode != 0:
        raise FeedbackError(
            f"claude returnerade {result.returncode}: {result.stderr.strip()[:500]}"
        )
    text = result.stdout.strip()
    if not text:
        raise FeedbackError("claude returnerade tom output")
    return text


def _write_review_dump(
    course: dict,
    work: dict,
    feedbacks: list[dict],
    failures: list[dict],
) -> Path:
    VAULT_INBOX.mkdir(parents=True, exist_ok=True)
    ts = datetime.now().strftime("%Y-%m-%d-%H%M")
    course_slug = _slug(course.get("name") or course.get("id") or "kurs")
    work_slug = _slug(work.get("title") or work.get("id") or "uppgift")
    path = VAULT_INBOX / f"feedback-{course_slug}-{work_slug}-{ts}.md"

    lines: list[str] = []
    lines.append(f"# Feedback-granskning: {work.get('title', '(utan titel)')}")
    lines.append("")
    lines.append(
        "> Detta är en pre-send-dump av AI-genererad feedback. "
        "Filen sparades innan POST till surveyappen — om något ser fel ut, "
        "ta bort i surveyappen via admin-vyn."
    )
    lines.append("")
    lines.append(f"_Kurs:_ {course.get('name', '—')} · `{course.get('id', '—')}`  ")
    lines.append(f"_Uppgift-ID:_ `{work.get('id', '—')}`  ")
    lines.append(f"_Genererad:_ {datetime.now().strftime('%Y-%m-%d %H:%M')}  ")
    lines.append(f"_Elever med feedback:_ {len(feedbacks)}  ")
    if failures:
        lines.append(f"_Misslyckade anrop:_ {len(failures)}  ")
    lines.append("")
    lines.append("---")
    lines.append("")

    for fb in feedbacks:
        lines.append(f"## {fb['alias']}")
        if fb.get("student_number") is not None:
            lines.append(f"_student_number: {fb['student_number']}_")
        lines.append("")
        lines.append(fb["content"])
        lines.append("")
        lines.append("---")
        lines.append("")

    if failures:
        lines.append("## Misslyckade")
        for f in failures:
            lines.append(f"- **{f['alias']}**: {f['error']}")
        lines.append("")

    path.write_text("\n".join(lines), encoding="utf-8")
    return path


def _post_to_survey(course_id: str, feedbacks: list[dict]) -> dict:
    payload = {
        "feedbacks": [
            {
                "student_number": fb["student_number"],
                "title": fb["title"],
                "content": fb["content"],
            }
            for fb in feedbacks
            if fb.get("student_number") is not None
        ]
    }
    if not payload["feedbacks"]:
        raise FeedbackError("Inga elever har student_number satt — inget att posta.")
    if not Path(SURVEY_CLI_BINARY).exists():
        raise FeedbackError(
            f"survey-platform-cli saknas på {SURVEY_CLI_BINARY}. Bygg med:\n"
            f"  cd /home/anders/printing-press/library/survey-platform && "
            f"PATH=\"/home/anders/.local/go/bin:$PATH\" /home/anders/.local/go/bin/go build "
            f"-o {SURVEY_CLI_BINARY} ./cmd/survey-platform-pp-cli/"
        )
    try:
        result = subprocess.run(
            [
                SURVEY_CLI_BINARY,
                "courses",
                "assignment-feedback",
                "create",
                course_id,
                "--stdin",
                "--agent",
            ],
            input=json.dumps(payload),
            capture_output=True,
            text=True,
            timeout=60,
        )
    except subprocess.TimeoutExpired as e:
        raise FeedbackError(f"survey-platform-cli timeout: {e}") from e
    if result.returncode != 0:
        raise FeedbackError(
            f"survey-platform-cli returnerade {result.returncode}: "
            f"stdout={result.stdout.strip()[:500]} stderr={result.stderr.strip()[:500]}"
        )
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return {"raw": result.stdout}


def build_feedback(
    course_id: str,
    work_id: str,
    rubric_path: Path,
    feedback_title: str,
    prompt_path: Path | None = None,
    send: bool = False,
    dry_run: bool = False,
    limit: int | None = None,
) -> dict:
    """Huvudorkestrator. Returnerar status-dict med review_path och eventuellt post_result."""
    rubric_path = Path(rubric_path)
    if not rubric_path.exists():
        raise FeedbackError(f"Rubrik-fil saknas: {rubric_path}")
    rubric = rubric_path.read_text(encoding="utf-8")

    prompt_template_path = Path(prompt_path) if prompt_path else DEFAULT_PROMPT_PATH
    if not prompt_template_path.exists():
        raise FeedbackError(f"Prompt-template saknas: {prompt_template_path}")
    prompt_template = prompt_template_path.read_text(encoding="utf-8")

    course, work, responses = collect_responses(course_id, work_id)
    if not responses:
        raise FeedbackError("Inga elevsvar hittades för uppgiften.")

    if limit:
        responses = responses[:limit]
        print(f"[limit] Bearbetar {len(responses)} elever (av totalt fler)", file=sys.stderr)

    aliases_needed = [r["alias"] for r in responses]
    mapping: dict[str, int] = {}
    if send:
        mapping = load_mapping(course_id, aliases_needed, course.get("name", ""))

    feedbacks: list[dict] = []
    failures: list[dict] = []

    if dry_run:
        print("[dry-run] Skippar claude-anrop, använder placeholder-feedback", file=sys.stderr)

    for r in responses:
        if dry_run:
            content = f"[DRY-RUN] Feedback-placeholder för {r['alias']} ({len(r['text'])} tecken inlämning)"
        else:
            prompt = _render_prompt(
                prompt_template,
                rubric=rubric,
                assignment_title=work.get("title") or "(utan titel)",
                response=r["text"],
            )
            print(f"[claude] Genererar feedback för {r['alias']}…", file=sys.stderr)
            try:
                content = _call_claude(prompt)
            except FeedbackError as e:
                failures.append({"alias": r["alias"], "error": str(e)})
                continue

        feedbacks.append(
            {
                "alias": r["alias"],
                "student_number": mapping.get(r["alias"]) if send else None,
                "title": feedback_title,
                "content": content,
            }
        )

    review_path = _write_review_dump(course, work, feedbacks, failures)
    print(f"[dump] Granskning sparad: {review_path}", file=sys.stderr)

    result: dict = {
        "review_path": str(review_path),
        "succeeded": len(feedbacks),
        "failed": len(failures),
        "posted": False,
    }

    if send and feedbacks:
        postable = [fb for fb in feedbacks if fb.get("student_number") is not None]
        skipped_no_number = [fb["alias"] for fb in feedbacks if fb.get("student_number") is None]
        if skipped_no_number:
            print(
                f"[mapping] Hoppade över (saknar student_number): {', '.join(skipped_no_number)}",
                file=sys.stderr,
            )
        if not postable:
            print("[post] Inget att POSTa (alla saknar mappning).", file=sys.stderr)
        else:
            print(f"[post] POSTar {len(postable)} feedback-rader till kurs {course_id}…", file=sys.stderr)
            post_result = _post_to_survey(course_id, postable)
            result["post_result"] = post_result
            result["posted"] = True

    return result
