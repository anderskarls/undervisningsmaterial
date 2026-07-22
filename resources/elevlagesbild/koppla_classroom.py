#!/usr/bin/env python3
"""Fyll i google_userid-kolumnen i nyckelfilen genom att matcha
Classroom-rostern (riktiga namn, hämtas lokalt via gws) mot klarnamnen.

KÖRS ENDAST AV ANVÄNDAREN - skriptet hanterar klarnamn och vägrar därför
köra inne i en LLM-session. Användning:

    python3 koppla_classroom.py <classroom_course_id> [fler ids ...]
"""

import csv
import os
import sys
import unicodedata
from pathlib import Path

if os.environ.get("CLAUDECODE"):
    sys.exit("STOPP: detta skript hanterar klarnamn och får inte köras av en "
             "LLM-session. Kör det själv i en vanlig terminal.")

HAR = Path(__file__).resolve().parent
VAULT = HAR.parents[1]
NYCKELFIL = VAULT / ".secrets" / "elevnyckel" / "nyckelfil.csv"
sys.path.insert(0, str(VAULT / "resources" / "classroom-tool"))

import gws_client  # noqa: E402


def norm(s):
    s = unicodedata.normalize("NFKD", s.lower().strip())
    return " ".join(sorted(s.replace(",", " ").split()))


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)

    rader = list(csv.DictReader(open(NYCKELFIL, newline="", encoding="utf-8")))
    falt = rader and list(rader[0].keys())
    per_namn = {norm(r["klarnamn"]): r for r in rader if r["klarnamn"].strip()}

    traffar, missar = 0, []
    for cid in sys.argv[1:]:
        for student in gws_client.list_students(cid):
            profil = (student.get("profile") or {})
            namn = ((profil.get("name") or {}).get("fullName")) or ""
            rad = per_namn.get(norm(namn))
            if rad is not None:
                rad["google_userid"] = student.get("userId", "")
                traffar += 1
            else:
                missar.append(f"{namn}  (kurs {cid})")

    with open(NYCKELFIL, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=falt)
        w.writeheader()
        w.writerows(rader)

    print(f"Kopplade {traffar} elever.")
    if missar:
        print("Ingen match i nyckelfilen (kontrollera stavning, lägg till rad, kör om):")
        for m in missar:
            print(f"  - {m}")


if __name__ == "__main__":
    main()
