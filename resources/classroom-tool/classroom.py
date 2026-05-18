"""CLI för Classroom-verktyget. Anonymiserar elev-data via per-kurs-pseudonymer.

Användning:
  python classroom.py list                                   # Lista mina aktiva kurser
  python classroom.py list --all                             # Inkludera arkiverade
  python classroom.py summary <course-id>                    # Anonymiserad metadata-sammanställning
  python classroom.py summary <id> -o file.md                # Spara till fil
  python classroom.py key <course-id>                        # HTML-nyckel (alias -> namn)
  python classroom.py read <course-id> <work-id> <Elev N>    # Läs en elevs inlämning (Drive eller Forms)
  python classroom.py dump <course-id> <work-id>             # Läs hela klassens inlämningar (Drive eller Forms)
  python classroom.py feedback <course-id> <work-id> --rubric <fil>   # AI-feedback per elev → POSTar till surveyappen
  python classroom.py cache --clear | --purge                # Hantera Drive-text-cache

`read`/`dump` detekterar automatiskt om uppgiften är en Forms-uppgift och
hämtar svar via Forms API istället för Drive.

Auth hanteras av `gws` (Google Workspace CLI). Logga in med `gws auth login`.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


def cmd_list(args: argparse.Namespace) -> int:
    import gws_client

    courses = gws_client.list_courses(active_only=not args.all)
    if not courses:
        print("Inga kurser hittades.")
        return 0
    width = max(len(c.get("id", "")) for c in courses)
    for c in courses:
        cid = c.get("id", "").ljust(width)
        name = c.get("name", "")
        section = c.get("section", "")
        suffix = f"  ({section})" if section else ""
        print(f"{cid}  {name}{suffix}")
    return 0


def cmd_summary(args: argparse.Namespace) -> int:
    from summary import build_summary

    md = build_summary(args.course_id)
    if args.out:
        Path(args.out).write_text(md, encoding="utf-8")
        print(f"Skrev {args.out}", file=sys.stderr)
    else:
        sys.stdout.write(md)
    return 0


def cmd_key(args: argparse.Namespace) -> int:
    from key import build_key

    out_path = build_key(args.course_id)
    print(f"Nyckel skriven: {out_path}", file=sys.stderr)
    print("Öppna i browser, skriv ut fysiskt, radera filen efteråt.", file=sys.stderr)
    return 0


def cmd_read(args: argparse.Namespace) -> int:
    from submissions import build_read

    md = build_read(
        args.course_id,
        args.coursework_id,
        args.alias,
        use_cache=not args.no_cache,
    )
    if args.out:
        Path(args.out).write_text(md, encoding="utf-8")
        print(f"Skrev {args.out}", file=sys.stderr)
    else:
        sys.stdout.write(md)
    return 0


def cmd_dump(args: argparse.Namespace) -> int:
    from submissions import build_dump

    md = build_dump(args.course_id, args.coursework_id, use_cache=not args.no_cache)
    if args.out:
        Path(args.out).write_text(md, encoding="utf-8")
        print(f"Skrev {args.out}", file=sys.stderr)
    else:
        sys.stdout.write(md)
    return 0


def cmd_feedback(args: argparse.Namespace) -> int:
    from feedback import build_feedback, FeedbackError

    try:
        result = build_feedback(
            course_id=args.course_id,
            work_id=args.coursework_id,
            rubric_path=Path(args.rubric),
            feedback_title=args.title,
            prompt_path=Path(args.prompt) if args.prompt else None,
            send=args.send,
            dry_run=args.dry_run,
            limit=args.limit,
        )
    except FeedbackError as e:
        print(f"FEL: {e}", file=sys.stderr)
        return 1

    print("", file=sys.stderr)
    print(f"Klar. {result['succeeded']} feedback genererade, {result['failed']} fel.", file=sys.stderr)
    print(f"Granskning: {result['review_path']}", file=sys.stderr)
    if result["posted"]:
        print("✓ POSTat till surveyappen.", file=sys.stderr)
    elif args.send:
        print("✗ Ingen POST gjord (inget att skicka).", file=sys.stderr)
    else:
        print("(körd utan --send — ingen POST gjord)", file=sys.stderr)
    return 0


def cmd_cache(args: argparse.Namespace) -> int:
    import cache

    if args.clear:
        n = cache.clear_all()
        print(f"Raderade {n} cachade filer.", file=sys.stderr)
        return 0
    n = cache.purge_expired()
    print(f"Raderade {n} expiderade cachade filer.", file=sys.stderr)
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(prog="classroom", description=__doc__)
    sub = parser.add_subparsers(dest="cmd", required=True)

    p_list = sub.add_parser("list", help="Lista mina kurser")
    p_list.add_argument("--all", action="store_true", help="Inkludera ej aktiva kurser")
    p_list.set_defaults(func=cmd_list)

    p_sum = sub.add_parser("summary", help="Anonymiserad sammanställning")
    p_sum.add_argument("course_id", help="Kurs-ID (från `list`)")
    p_sum.add_argument("-o", "--out", help="Skriv till fil istället för stdout")
    p_sum.set_defaults(func=cmd_summary)

    p_key = sub.add_parser("key", help="Skriv ut HTML-nyckel (alias -> riktiga namn)")
    p_key.add_argument("course_id", help="Kurs-ID")
    p_key.set_defaults(func=cmd_key)

    p_read = sub.add_parser("read", help="Läs en elevs inlämning (anonymiserad)")
    p_read.add_argument("course_id", help="Kurs-ID")
    p_read.add_argument("coursework_id", help="Uppgifts-ID (från `summary`-länk eller API)")
    p_read.add_argument("alias", help="Alias, t.ex. 'Elev 7' eller bara '7'")
    p_read.add_argument("-o", "--out", help="Skriv till fil istället för stdout")
    p_read.add_argument("--no-cache", action="store_true", help="Hoppa över Drive-text-cache")
    p_read.set_defaults(func=cmd_read)

    p_dump = sub.add_parser("dump", help="Läs alla inlämningar för en uppgift")
    p_dump.add_argument("course_id", help="Kurs-ID")
    p_dump.add_argument("coursework_id", help="Uppgifts-ID")
    p_dump.add_argument("-o", "--out", help="Skriv till fil istället för stdout")
    p_dump.add_argument("--no-cache", action="store_true", help="Hoppa över Drive-text-cache")
    p_dump.set_defaults(func=cmd_dump)

    p_fb = sub.add_parser(
        "feedback",
        help="Generera AI-feedback per elev → POSTar till surveyappen",
    )
    p_fb.add_argument("course_id", help="Kurs-ID")
    p_fb.add_argument("coursework_id", help="Uppgifts-ID")
    p_fb.add_argument(
        "--rubric",
        required=True,
        help="Path till bedömningsmatris-fil (markdown).",
    )
    p_fb.add_argument(
        "--title",
        required=True,
        help="Rubrik för feedback-inlägget (visas för eleven i surveyappen).",
    )
    p_fb.add_argument(
        "--prompt",
        help="Override prompt-template (default: prompts/feedback-default.md).",
    )
    p_fb.add_argument(
        "--send",
        action="store_true",
        help="POSTa till surveyappen efter generering (annars: bara dump till Brain/00-Inbox).",
    )
    p_fb.add_argument(
        "--dry-run",
        action="store_true",
        help="Hoppa över claude-anrop, använd placeholder-feedback. För att testa flödet.",
    )
    p_fb.add_argument(
        "--limit",
        type=int,
        help="Begränsa till första N elever (för pilot).",
    )
    p_fb.set_defaults(func=cmd_feedback)

    p_cache = sub.add_parser("cache", help="Hantera Drive-text-cache (cache/)")
    grp = p_cache.add_mutually_exclusive_group()
    grp.add_argument("--clear", action="store_true", help="Radera all cache")
    grp.add_argument("--purge", action="store_true", help="Radera expirerad cache (default)")
    p_cache.set_defaults(func=cmd_cache)

    args = parser.parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
