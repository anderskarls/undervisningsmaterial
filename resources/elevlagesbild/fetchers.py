"""Hämtare per signalkälla för pseudonymiseringsbryggan.

Varje hämtare tar identitetsmappningen (källidentitet -> Elev-ID, gemener)
och returnerar en JSON-serialiserbar struktur där alla elevidentiteter
REDAN är utbytta mot Elev-ID. Bryggans läckagekontroll är sista spärren,
inte första.
"""

import json
import re
import subprocess
from pathlib import Path

HAR = Path(__file__).resolve().parent
VAULT = HAR.parents[1]
CLASSROOM = VAULT / "resources" / "classroom-tool"
CONFIG = json.loads((HAR / "config.json").read_text(encoding="utf-8"))


def _kor(cmd, cwd=None, timeout=180):
    r = subprocess.run(cmd, capture_output=True, text=True, cwd=cwd, timeout=timeout)
    if r.returncode != 0:
        raise RuntimeError(f"{' '.join(map(str, cmd))}: {r.stderr.strip()[:300]}")
    return r.stdout


def classroom(mapp):
    """Google Classroom via classroom-tool: anonymiserad kurssammanställning.

    Endast metadata (inlämningsstatus) - aldrig read/dump (fritext = läckagerisk).
    'Elev N' översätts per kurs via aliases.json -> Google-userId -> Elev-ID.
    """
    aliases = json.loads((CLASSROOM / "aliases.json").read_text(encoding="utf-8"))
    ut, varningar = {}, []
    for ki in CONFIG["kursinstanser"]:
        cid = ki.get("classroom_course_id")
        if not cid:
            varningar.append(f"{ki['namn']}: classroom_course_id saknas i config.json")
            continue
        text = _kor([str(CLASSROOM / "run.sh"), "summary", str(cid)], cwd=CLASSROOM)
        alias_till_uid = {v: k for k, v in aliases.get(str(cid), {}).items()}

        def byt(m):
            uid = alias_till_uid.get(m.group(0), "")
            eid = mapp.get(uid.lower())
            if not eid:
                varningar.append(f"{ki['namn']}: omappad identitet '{m.group(0)}'")
                return f"OMAPPAD-{m.group(1)}"
            return eid

        ut[ki["namn"]] = re.sub(r"\bElev (\d+)\b", byt, text)
    return {"kursinstanser": ut, "varningar": varningar}


# Elevlista + progress hämtas en gång per survey-kurs och delas mellan
# survey-hämtaren och förmågeträningshämtaren (samma API-anrop bär båda).
_progress_cache = {}


def _progress_per_kurs(sid):
    """{username: {"student": listpost, "progress": get-progress-svar}} för en kurs."""
    if sid not in _progress_cache:
        cli = CONFIG["survey_cli"]
        elever = {}
        # --json --no-input, INTE --agent: --agent slår på --compact som
        # strippar bort number/username ur listsvaret.
        data = json.loads(_kor([cli, "courses", "students", "list", str(sid),
                                "--json", "--no-input"]))
        for s in data.get("results", []):
            p = json.loads(_kor([cli, "courses", "students", "get-progress",
                                 str(sid), str(s["number"]), "--json", "--no-input"]))
            elever[str(s.get("username", ""))] = {"student": s, "progress": p.get("results") or {}}
        _progress_cache[sid] = elever
    return _progress_cache[sid]


def _elev_id(mapp, username, ki_namn, nummer, varningar):
    eid = mapp.get(username.lower())
    if not eid:
        varningar.append(f"{ki_namn}: omappad identitet '{username.lower()}'")
        eid = f"OMAPPAD-{nummer}"
    return eid


def survey_plattformen(mapp):
    """Survey-plattformen: inlämningar per elev (titel, datum, poäng).

    Plattformen är namnfri by design; 'username' (t.ex. msa26a-7) översätts
    till Elev-ID via nyckelfilen. Aldrig svarstexterna - de kan innehålla
    självidentifierande uppgifter.
    """
    ut, varningar = {}, []
    for ki in CONFIG["kursinstanser"]:
        sid = ki.get("survey_course_id")
        if not sid:
            varningar.append(f"{ki['namn']}: survey_course_id saknas i config.json")
            continue
        elever = []
        for username, d in _progress_per_kurs(sid).items():
            eid = _elev_id(mapp, username, ki["namn"], d["student"].get("number"), varningar)
            elever.append({
                "elev_id": eid,
                "inlamningar": [
                    {
                        "titel": s.get("surveyTitle"),
                        "typ": s.get("mode"),
                        "inlamnad": s.get("respondedAt"),
                        "poang": s.get("score"),
                    }
                    for s in d["progress"].get("surveys", [])
                ],
            })
        ut[ki["namn"]] = elever
    return {"kursinstanser": ut, "varningar": varningar}


def formagetraningen(mapp):
    """Förmågeträningen: övningsaktivitet per elev - aggregat per delfärdighet
    och ISO-vecka (totalAttempts, lastAttemptAt, bySubskill, byWeek).

    Ansluten 2026-07-22 via progress-endpointen i survey-platform
    (samma username-identitet som survey-plattformen).
    """
    ut, varningar = {}, []
    for ki in CONFIG["kursinstanser"]:
        sid = ki.get("survey_course_id")
        if not sid:
            varningar.append(f"{ki['namn']}: survey_course_id saknas i config.json")
            continue
        elever = []
        for username, d in _progress_per_kurs(sid).items():
            eid = _elev_id(mapp, username, ki["namn"], d["student"].get("number"), varningar)
            traning = d["progress"].get("practice")
            if traning is None:
                varningar.append(f"{ki['namn']}: 'practice' saknas i API-svaret - "
                                 f"är survey-platform deployad med progress-utökningen?")
                traning = {"status": "okänd - äldre serverversion"}
            elever.append({"elev_id": eid, "traning": traning})
        ut[ki["namn"]] = elever
    return {"kursinstanser": ut, "varningar": varningar}


FETCHERS = {
    "classroom": classroom,
    "survey_plattformen": survey_plattformen,
    "formagetraningen": formagetraningen,
}
