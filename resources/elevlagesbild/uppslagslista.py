#!/usr/bin/env python3
"""Skriv utskrivbara uppslagslistor (klarnamn ↔ Elev-ID) per undervisningsgrupp.

KÖRS ENDAST LOKALT AV ANVÄNDAREN - utdata innehåller klarnamn och hamnar
därför i .secrets/elevnyckel/, som aldrig läses av LLM och aldrig syncas.
Används för att skriva ut och laminera placeringskort/uppslagskort.
"""

import csv
import os
import sys
from collections import defaultdict
from pathlib import Path

if os.environ.get("CLAUDECODE"):
    sys.exit("STOPP: detta skript hanterar klarnamn och får inte köras av en "
             "LLM-session. Kör det själv i en vanlig terminal.")

VAULT = Path(__file__).resolve().parents[2]
NYCKELDIR = VAULT / ".secrets" / "elevnyckel"

grupper = defaultdict(list)
with open(NYCKELDIR / "nyckelfil.csv", newline="", encoding="utf-8") as f:
    for rad in csv.DictReader(f):
        if rad["elev_id"].strip():
            grupper[rad["undervisningsgrupp"].strip()].append(rad)

for grupp, elever in sorted(grupper.items()):
    ut = NYCKELDIR / f"uppslagslista-{grupp}.html"
    rader = "\n".join(
        f"<tr><td>{e['elev_id']}</td><td>{e['klarnamn']}</td></tr>"
        for e in sorted(elever, key=lambda e: e["elev_id"])
    )
    ut.write_text(f"""<!doctype html><meta charset="utf-8">
<title>{grupp}</title>
<style>body{{font-family:Georgia,serif;margin:2rem}}table{{border-collapse:collapse}}
td{{border:1px solid #999;padding:.3rem .8rem;font-size:14pt}}</style>
<h2>{grupp} - uppslagslista (KÄNSLIG - lämna aldrig framme)</h2>
<table>{rader}</table>""", encoding="utf-8")
    print(f"Skrev {ut} ({len(elever)} elever)")
