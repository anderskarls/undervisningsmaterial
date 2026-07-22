#!/usr/bin/env python3
"""Pseudonymiseringsbrygga för Elevlägesbilden (ADR 0001, 0003).

Hämtar färsk signaldata från källsystemen, byter alla källidentiteter mot
Elev-ID via den lokala nyckelfilen och skriver pseudonymiserad JSON till
out/. LLM läser ENDAST filerna i out/ - aldrig nyckelfilen, aldrig rådata.

Körs lokalt utan LLM: ./run_brygga.sh
"""

import csv
import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

VAULT = Path(__file__).resolve().parents[2]
NYCKELFIL = VAULT / ".secrets" / "elevnyckel" / "nyckelfil.csv"
OUT_DIR = Path(__file__).resolve().parent / "out"


def las_nyckel():
    """Läs nyckelfilen. Returnerar (mappning källidentitet->elev_id, alla klarnamn)."""
    if not NYCKELFIL.exists():
        sys.exit(f"FEL: nyckelfilen saknas: {NYCKELFIL}\n"
                 f"Kopiera nyckelfil-mall.csv till nyckelfil.csv och fyll i eleverna.")
    mapp = {}
    klarnamn = []
    with open(NYCKELFIL, newline="", encoding="utf-8") as f:
        for rad in csv.DictReader(f):
            eid = rad["elev_id"].strip()
            if not eid:
                continue
            klarnamn.append(rad["klarnamn"].strip())
            for falt in ("google_userid", "survey_username"):
                varde = (rad.get(falt) or "").strip().lower()
                if varde:
                    mapp[varde] = eid
    return mapp, klarnamn


def pseudonymisera(text, mapp):
    """Byt varje känd källidentitet i en textmassa mot dess Elev-ID."""
    for kalla, eid in sorted(mapp.items(), key=lambda p: -len(p[0])):
        text = re.sub(re.escape(kalla), eid, text, flags=re.IGNORECASE)
    return text


def lackagekontroll(text, klarnamn):
    """Sista spärren: leta klarnamn och e-postadresser i det som ska skrivas.

    Returnerar lista med problem (utan att avslöja innehållet)."""
    problem = []
    for namn in klarnamn:
        for del_ in namn.replace(",", " ").split():
            if len(del_) >= 4 and re.search(re.escape(del_), text, re.IGNORECASE):
                problem.append("klarnamnsfragment funnet")
                break
    if re.search(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text):
        problem.append("omappad e-postadress funnen")
    return problem


def hamta_kallor(mapp):
    """Hämta per signalkälla - se fetchers.py. Hämtarna byter själva ut
    identiteter mot Elev-ID; läckagekontrollen nedan är sista spärren."""
    from fetchers import FETCHERS
    data = {}
    for namn, fetcher in FETCHERS.items():
        try:
            data[namn] = fetcher(mapp)
            print(f"  ✓ {namn}")
        except Exception as e:
            data[namn] = {"fel": str(e)}
            print(f"  ✗ {namn}: {e}", file=sys.stderr)
    return data


def main():
    print("Läser nyckelfil ...")
    mapp, klarnamn = las_nyckel()
    print(f"  {len(set(mapp.values()))} elever, {len(mapp)} källidentiteter")

    print("Hämtar signalkällor ...")
    rakost = hamta_kallor(mapp)

    text = json.dumps(rakost, ensure_ascii=False, indent=2)
    text = pseudonymisera(text, mapp)

    problem = lackagekontroll(text, klarnamn)
    if problem:
        sys.exit("AVBRYTER - läckagekontrollen slog larm: " + ", ".join(sorted(set(problem))) +
                 ". Komplettera nyckelfilen (alla elever, alla källidentiteter) och kör om.")

    OUT_DIR.mkdir(exist_ok=True)
    utfil = OUT_DIR / f"signaler-{date.today().isoformat()}.json"
    utfil.write_text(text, encoding="utf-8")
    print(f"Klart: {utfil}")


if __name__ == "__main__":
    main()
