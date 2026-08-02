#!/usr/bin/env python3
"""Lista dagens DN-artiklar tillsammans med vad som är aktivt i kurserna.

Skriptet gör det mekaniska: läser av vad som körs just nu, hämtar DN:s
sektionssidor med prenumerationscookien och plockar ut rubriker och länkar.

Det gör INTE relevansbedömningen. Att avgöra om "Bryssel mildrar utsläppskrav"
hör hemma i ett moment om ungas ekonomi kräver ämnesomdöme, och nyckelordsmatchning
missar både det uppenbara och det intressanta. Modellen får hela listan och väljer.

Användning:
    python3 hitta-artiklar.py                      # allt: aktivt läge + artiklar
    python3 hitta-artiklar.py --sektioner ekonomi,varlden
    python3 hitta-artiklar.py --bara-aktivt        # visa bara kursläget
"""
from __future__ import annotations

import json
import re
import sys
import urllib.error
import urllib.request
from datetime import date, timedelta
from html import unescape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from refresh import UA, VAULT, RefreshError, get_valid_token  # noqa: E402

AKTIVT_PATH = VAULT / "output/planering/aktivt.md"
INDEX_PATH = VAULT / "output/planering/momentindex.json"

# Sektioner med undervisningsvärde i Sh och Hi. Kultur, sport och nöje utelämnas
# medvetet - de ger nästan bara brus i de här ämnena.
DEFAULT_SEKTIONER = ["sverige", "varlden", "ekonomi", "politik"]

# Rubriker kortare än så här är nästan alltid navigation, inte artiklar.
MIN_RUBRIK = 18


def die(code: int, msg: str) -> None:
    print(f"FEL: {msg}", file=sys.stderr)
    sys.exit(code)


# ------------------------------------------------------------------ kursläget

def las_aktivt() -> list[dict]:
    """Läs tabellen i aktivt.md. Tomma momentceller betyder 'inget aktivt'."""
    if not AKTIVT_PATH.exists():
        return []
    rader = []
    for line in AKTIVT_PATH.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line.startswith("|") or line.count("|") < 4:
            continue
        celler = [c.strip() for c in line.strip("|").split("|")]
        if len(celler) < 4:
            continue
        if any(set(c) <= set("-: ") and c for c in celler):
            continue
        if celler[0].lower() in ("kurs", "ämne"):
            continue
        if not celler[2]:                      # ingen moment angiven
            continue
        rader.append({
            "kurs": celler[0], "grupp": celler[1],
            "moment": celler[2], "sedan": celler[3],
        })
    return rader


def koppla_moment(aktiva: list[dict]) -> list[dict]:
    """Koppla varje aktiv rad till sin momentplan i indexet, om den finns."""
    if not INDEX_PATH.exists():
        return aktiva
    try:
        index = json.loads(INDEX_PATH.read_text(encoding="utf-8"))["moment"]
    except Exception:
        return aktiva
    for rad in aktiva:
        namn = rad["moment"].lower()
        träff = next((m for m in index if m["moment"].lower() == namn), None)
        if not träff:   # tillåt delvis match, momentnamn skrivs sällan exakt
            träff = next((m for m in index
                          if namn in m["moment"].lower() or m["moment"].lower() in namn), None)
        if träff:
            rad["momentplan"] = träff["sokvag"]
            rad["tema"] = träff.get("tema", "")
            rad["brottningsfraga"] = träff.get("brottningsfraga", "")
            rad["innehallssignal"] = träff.get("innehallssignal", [])[:8]
            rad["sokord"] = träff.get("sokord", [])
        else:
            rad["momentplan"] = None
            rad["fritext"] = rad["moment"]
    return aktiva


# ------------------------------------------------------------------- artiklar

ANCHOR = re.compile(
    r'<a[^>]+href="(/[a-z0-9\-]+/[a-z0-9\-]{15,}/)"[^>]*>(.*?)</a>', re.S | re.I)
TAGS = re.compile(r"<[^>]+>")

# Länktexten på sektionssidan innehåller mer än rubriken: fotobyline före,
# publiceringstid och sektionsetikett efter.
# DN skriver "Foto: Förnamn Efternamn" eller "Foto: Förnamn Efternamn/BYRÅ".
# Två tokens täcker båda; en enstaka kvarbliven namndel är ofarligt brus.
FOTOBYLINE = re.compile(r"^(?:Foto|Bild)\s*:\s*\S+\s+\S+\s+")
TIDSSTAMPEL = re.compile(
    r"\s*(?:I\s+går|I\s+dag|Igår|Idag)?\s*\d{1,2}[:.]\d{2}\s*[•·]\s*[\wÅÄÖåäö\- ]+\s*$")
SEKTIONSSVANS = re.compile(r"\s*[•·]\s*[\wÅÄÖåäö\- ]{3,20}\s*$")


# Publiceringsdatum ligger sist i länktexten på äldre artiklar. Sektionssidorna
# blandar in "mest lästa" flera år tillbaka, så datumet behövs för att sålla.
DATUM = re.compile(r"\s*(\d{4}-\d{2}-\d{2})\s*$")


def _stada_rubrik(text: str) -> tuple[str, str]:
    text = FOTOBYLINE.sub("", text)
    text = TIDSSTAMPEL.sub("", text)
    m = DATUM.search(text)
    datum = m.group(1) if m else ""
    if m:
        text = text[:m.start()]
    text = SEKTIONSSVANS.sub("", text)
    return text.strip(" -–—•·"), datum


def hamta_sektion(sektion: str, token: str) -> list[dict]:
    url = f"https://www.dn.se/{sektion}/"
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8",
        "Cookie": f"bnidtoken={token}",
        "Referer": "https://www.dn.se/",
    })
    try:
        with urllib.request.urlopen(req, timeout=45) as resp:
            html = resp.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        print(f"  varning: {sektion} svarade {e.code}", file=sys.stderr)
        return []
    except Exception as e:
        print(f"  varning: {sektion} gav {type(e).__name__}", file=sys.stderr)
        return []

    seen, artiklar = set(), []
    for href, inner in ANCHOR.findall(html):
        rubrik = unescape(TAGS.sub(" ", inner))
        rubrik = re.sub(r"\s+", " ", rubrik).strip()
        rubrik, datum = _stada_rubrik(rubrik)
        if len(rubrik) < MIN_RUBRIK or href in seen:
            continue
        seen.add(href)
        artiklar.append({
            "rubrik": rubrik[:200],
            "url": "https://www.dn.se" + href,
            "sektion": href.strip("/").split("/")[0],
            "datum": datum,          # tom = ligger högt på sektionssidan, alltså färsk
        })
    return artiklar


# ----------------------------------------------------------------------- main

def main() -> None:
    argv = sys.argv[1:]
    sektioner = DEFAULT_SEKTIONER
    max_alder = 30
    for i, a in enumerate(argv):
        if a == "--sektioner" and i + 1 < len(argv):
            sektioner = [s.strip() for s in argv[i + 1].split(",") if s.strip()]
        if a == "--max-alder" and i + 1 < len(argv):
            max_alder = int(argv[i + 1])

    aktiva = koppla_moment(las_aktivt())

    if "--bara-aktivt" in argv:
        print(json.dumps({"aktivt": aktiva}, ensure_ascii=False, indent=2))
        return

    if not aktiva:
        print("INGET AKTIVT MOMENT.", file=sys.stderr)
        print(f"Fyll i momentkolumnen i {AKTIVT_PATH.relative_to(VAULT)} "
              "eller ange momentet direkt i samtalet.", file=sys.stderr)
        # Fortsätt ändå - artikellistan är användbar även utan kursläge.

    try:
        token = get_valid_token(verbose=False)
    except RefreshError as e:
        die(3, f"{e}\nLogga in på dn.se i Firefox och kör refresh.py.")

    artiklar, per_sektion = [], {}
    for s in sektioner:
        träffar = hamta_sektion(s, token)
        per_sektion[s] = len(träffar)
        artiklar += träffar

    # Samma artikel ligger ofta på flera sektionssidor.
    unika, seen = [], set()
    for a in artiklar:
        if a["url"] not in seen:
            seen.add(a["url"])
            unika.append(a)

    # Sektionssidorna länkar ut till motor, kultur och nöje. De hör inte hit om
    # de inte begärts uttryckligen.
    bortsorterade = {"fel_sektion": 0, "for_gammal": 0}
    if "--alla-sektioner" not in argv:
        före = len(unika)
        unika = [a for a in unika if a["sektion"] in sektioner]
        bortsorterade["fel_sektion"] = före - len(unika)

    # DN blandar in "mest lästa" flera år tillbaka. Artiklar utan datum ligger
    # högt på sektionssidan och är därmed färska.
    gräns = (date.today() - timedelta(days=max_alder)).isoformat()
    före = len(unika)
    unika = [a for a in unika if not a["datum"] or a["datum"] >= gräns]
    bortsorterade["for_gammal"] = före - len(unika)

    print(json.dumps({
        "aktivt": aktiva,
        "skannade_sektioner": per_sektion,
        "bortsorterade": bortsorterade,
        "max_alder_dagar": max_alder,
        "antal_artiklar": len(unika),
        "artiklar": unika,
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
