#!/usr/bin/env python3
"""Bygg ett maskinläsbart index över momentplanerna i output/lessons/.

Momentplanerna är skrivna för människor: kursen står i brödtext, inte i
frontmatter, och inget moment har datumfält. Det här skriptet plockar ut det
som går att extrahera mekaniskt och lämnar resten till modellen.

Sökorden fylls INTE i av skriptet. Att avgöra vilka begrepp i ett moment som
är sökbara i nyhetsflödet kräver ämnesomdöme. Modellen fyller i dem en gång
per moment, och de cachas i indexet.

Användning:
    python3 momentindex.py            # bygg/uppdatera index, visa sammanfattning
    python3 momentindex.py --json     # skriv hela indexet till stdout
    python3 momentindex.py --saknar   # lista moment som saknar sökord
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from refresh import VAULT  # noqa: E402

LESSONS_DIR = VAULT / "output/lessons"
INDEX_PATH = VAULT / "output/planering/momentindex.json"


def _frontmatter(text: str) -> dict:
    if not text.startswith("---"):
        return {}
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}
    fm = {}
    for line in parts[1].splitlines():
        m = re.match(r"^\s*([\w_]+)\s*:\s*(.+?)\s*$", line)
        if m:
            fm[m.group(1).lower()] = m.group(2).strip().strip('"\'')
    return fm


def _course(text: str, fm: dict) -> str:
    """Kursen står i frontmatter ibland, i brödtext oftast."""
    for key in ("kurs", "course", "amne", "ämne"):
        if fm.get(key):
            return fm[key]
    m = re.search(r"\*\*Ämne/Kurs:\*\*\s*(.+)", text)
    if m:
        return re.sub(r"\s+", " ", m.group(1)).strip()
    return ""


def _bullets(text: str, heading_pattern: str, limit: int = 12) -> list[str]:
    """Plocka listpunkter eller tabellrader under en rubrik."""
    m = re.search(heading_pattern, text, re.I)
    if not m:
        return []
    chunk = text[m.end():]
    nxt = re.search(r"\n##\s", chunk)
    if nxt:
        chunk = chunk[:nxt.start()]
    out = []
    for line in chunk.splitlines():
        line = line.strip()
        if line.startswith(("- ", "* ", "+ ")):
            out.append(line[2:].strip())
        elif line.startswith("|") and line.count("|") >= 3:
            cells = [c.strip() for c in line.strip("|").split("|")]
            # hoppa över tabellhuvud och separatorrader
            if any(set(c) <= set("-: ") for c in cells) or not cells:
                continue
            longest = max(cells, key=len)
            if len(longest) > 15:
                out.append(longest)
    clean = []
    for b in out:
        b = re.sub(r"\*\*|\*|`|⭐", "", b)
        b = re.sub(r"\s+", " ", b).strip()
        if len(b) > 12:
            clean.append(b[:400])
    return clean[:limit]


def _field(text: str, label: str) -> str:
    m = re.search(rf"\*\*{label}:?\*\*\s*(.+)", text)
    return re.sub(r"\s+", " ", m.group(1)).strip() if m else ""


def _brottningsfraga(text: str) -> str:
    """Momentets bärande fråga. Finns bara i planer enligt Momentplaneringsramverket,
    men är det enskilt rikaste innehållssignalen när den finns."""
    m = re.search(r"###\s*Root:\s*Brottningsfråga\s*\n(.+?)(?=\n#{2,3}\s)", text, re.S)
    if not m:
        return ""
    body = re.sub(r"[*>`]", "", m.group(1))
    body = re.sub(r"\s+", " ", body).strip()
    return body[:400]


def _innehallssignal(text: str) -> list[str]:
    """Samla det som beskriver VAD momentet handlar om, oavsett planformat.

    Nyare planer följer Momentplaneringsramverket (Designval, Lärandemål).
    Äldre har Centralt innehåll eller bara måltitlar. Vi tar det som finns.
    """
    sig: list[str] = []
    sig += _bullets(text, r"\n##\s*Centralt innehåll[^\n]*\n")
    sig += _bullets(text, r"\n##\s*Kärnmål[^\n]*\n", limit=4)
    # Måltitlar: "### Mål 1: Demokratins kris"
    sig += [re.sub(r"\s+", " ", m).strip()
            for m in re.findall(r"^###\s*Mål\s*\d+:\s*(.+)$", text, re.M)]
    # Lektionsrubriker: "### Lektion 3: Propagandans makt (Mål 2, 3)"
    sig += [re.sub(r"\s*\([^)]*\)\s*$", "", m).strip()
            for m in re.findall(r"^###\s*Lektion\s*\d+:\s*(.+)$", text, re.M)]
    # Alla H3-rubriker utom ramverkets egna etiketter. Momentplanerna följer två
    # olika format och rubrikerna är det enda som finns i båda - de fungerar som
    # innehållskarta där de mer specifika mönstren ovan inte träffar.
    BOILERPLATE = re.compile(
        r"^(Root:|Nivå\s*\d|Tvärgående|Vald ansats|Bedömning|Examination|"
        r"Förutsättningar|Frågetypologi|Hess-gate|Rollsekvens|Brottningsform)", re.I)
    sig += [re.sub(r"\s+", " ", h).strip()
            for h in re.findall(r"^###\s*(.+)$", text, re.M)
            if not BOILERPLATE.match(h.strip())]
    seen, out = set(), []
    for s in sig:
        s = re.sub(r"\*\*|\*|`|⭐", "", s).strip()
        if len(s) > 8 and s.lower() not in seen:
            seen.add(s.lower())
            out.append(s[:300])
    return out[:20]


def scan() -> list[dict]:
    moments = []
    for path in sorted(LESSONS_DIR.rglob("momentplan.md")):
        text = path.read_text(encoding="utf-8", errors="replace")
        fm = _frontmatter(text)
        rel = path.relative_to(VAULT)
        moments.append({
            "moment": path.parent.name,
            "amnesmapp": path.parent.parent.name,
            "sokvag": str(rel),
            "kurs": _course(text, fm),
            "tema": _field(text, r"Tema/vinkel"),
            "position": _field(text, r"Position i kursen"),
            "brottningsfraga": _brottningsfraga(text),
            "innehallssignal": _innehallssignal(text),
            "sokord": [],          # fylls av modellen, se docstring
            "sektioner": [],       # DN-sektioner att skanna, fylls av modellen
        })
    return moments


def merge(new: list[dict], old_path: Path) -> list[dict]:
    """Behåll sökord och sektioner som modellen redan fyllt i."""
    if not old_path.exists():
        return new
    try:
        old = {m["sokvag"]: m for m in json.loads(old_path.read_text(encoding="utf-8"))["moment"]}
    except Exception:
        return new
    for m in new:
        prev = old.get(m["sokvag"])
        if prev:
            m["sokord"] = prev.get("sokord", [])
            m["sektioner"] = prev.get("sektioner", [])
    return new


def main() -> None:
    moments = merge(scan(), INDEX_PATH)
    payload = {
        "genererad_av": "momentindex.py",
        "antal": len(moments),
        "moment": moments,
    }

    if "--json" in sys.argv:
        print(json.dumps(payload, ensure_ascii=False, indent=2))
        return

    INDEX_PATH.parent.mkdir(parents=True, exist_ok=True)
    INDEX_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    if "--lista" in sys.argv:
        for m in moments:
            print(f"{m['moment']:46s}  {m['kurs'] or '(kurs okänd)'}")
        return

    saknar = [m for m in moments if not m["sokord"]]
    if "--saknar" in sys.argv:
        for m in saknar:
            print(f"{m['amnesmapp']}/{m['moment']}  [{m['kurs'] or 'kurs okänd'}]")
        return

    print(f"✓ Index: {INDEX_PATH}")
    print(f"  {len(moments)} moment, {len(moments) - len(saknar)} med sökord")
    utan_kurs = [m for m in moments if not m["kurs"]]
    if utan_kurs:
        print(f"  {len(utan_kurs)} utan kursangivelse: "
              + ", ".join(m["moment"] for m in utan_kurs))
    if saknar:
        print(f"  {len(saknar)} saknar sökord - kör med --saknar för lista")


if __name__ == "__main__":
    main()
