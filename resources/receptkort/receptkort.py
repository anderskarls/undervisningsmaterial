#!/usr/bin/env python3
"""Receptkort - sätter ett recept som PDF i ett rent serif-format.

Inga externa beroenden. PDF:en skrivs för hand med base14-fonten Times, så
ingen font bäddas in och ingen PDF-motor (weasyprint, LaTeX, webbläsare)
behöver finnas på maskinen.

    python3 receptkort.py recept.json [--ut sökväg.pdf]

Indata är JSON, se README.md för schemat. Kör med --schema för ett exempel.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import zlib

HERE = os.path.dirname(os.path.abspath(__file__))
VAULT = os.path.abspath(os.path.join(HERE, "..", ".."))
STANDARD_UT = os.path.join(VAULT, "output", "recept")

BASE14 = {"R": "Times-Roman", "B": "Times-Bold", "I": "Times-Italic"}

AFM_KATALOGER = [
    "/run/host/fonts/type1/urw-base35",
    "/usr/share/fonts/type1/urw-base35",
    "/usr/share/fonts/urw-base35",
    "/usr/share/fonts/X11/Type1",
]
AFM_FILER = {
    "R": "NimbusRoman-Regular.afm",
    "B": "NimbusRoman-Bold.afm",
    "I": "NimbusRoman-Italic.afm",
}
EXTRA_GLYFER = {
    0x92: "quoteright", 0x91: "quoteleft", 0x93: "quotedblleft",
    0x94: "quotedblright", 0x95: "bullet", 0x96: "endash", 0x97: "emdash",
    0xB0: "degree", 0xBD: "onehalf", 0xBC: "onequarter", 0xB7: "periodcentered",
    0xC5: "Aring", 0xC4: "Adieresis", 0xD6: "Odieresis", 0xE5: "aring",
    0xE4: "adieresis", 0xF6: "odieresis", 0xE9: "eacute", 0xE8: "egrave",
    0xFC: "udieresis", 0xE0: "agrave", 0xE7: "ccedilla", 0xF8: "oslash",
    0xE6: "ae", 0xAB: "guillemotleft", 0xBB: "guillemotright",
}


def _las_afm(sokvag):
    kod, namn = {}, {}
    with open(sokvag, "r", encoding="latin-1") as fh:
        for rad in fh:
            m = re.match(r"C\s+(-?\d+)\s*;\s*WX\s+(\d+)\s*;\s*N\s+(\S+)", rad)
            if m:
                c, wx, n = int(m.group(1)), int(m.group(2)), m.group(3)
                namn[n] = wx
                if c >= 0:
                    kod[c] = wx
    return kod, namn


def ladda_metriker():
    """Bundlad metrics.json först, AFM på systemet som reserv."""
    bundlad = os.path.join(HERE, "metrics.json")
    if os.path.isfile(bundlad):
        with open(bundlad, encoding="utf-8") as fh:
            rad = json.load(fh)
        return {s: {int(k): v for k, v in t.items()} for s, t in rad.items()}

    katalog = next(
        (d for d in AFM_KATALOGER if os.path.isfile(os.path.join(d, AFM_FILER["R"]))),
        None,
    )
    if not katalog:
        sys.exit(
            "Hittar varken metrics.json bredvid skriptet eller URW-fonternas "
            "AFM-filer på systemet. Kopiera med metrics.json från vaultet."
        )
    ut = {}
    for stil, fil in AFM_FILER.items():
        kod, namn = _las_afm(os.path.join(katalog, fil))
        t = {c: kod.get(c, 500) for c in range(32, 127)}
        t[39] = namn.get("quotesingle", 200)
        t[96] = namn.get("grave", 333)
        for c, n in EXTRA_GLYFER.items():
            if n in namn:
                t[c] = namn[n]
        ut[stil] = t
    return ut


BREDDER = ladda_metriker()


def textbredd(s, stil, storlek):
    t = BREDDER[stil]
    return sum(t.get(b, 500) for b in s.encode("cp1252", "replace")) * storlek / 1000.0


def bryt(s, stil, storlek, maxbredd):
    rader, aktuell = [], ""
    for ord_ in str(s).split():
        forsok = f"{aktuell} {ord_}".strip()
        if aktuell and textbredd(forsok, stil, storlek) > maxbredd:
            rader.append(aktuell)
            aktuell = ord_
        else:
            aktuell = forsok
    if aktuell:
        rader.append(aktuell)
    return rader or [""]


def escapa(s):
    ut = s.encode("cp1252", "replace")
    for a, b in ((b"\\", b"\\\\"), (b"(", b"\\("), (b")", b"\\)")):
        ut = ut.replace(a, b)
    return ut


# --------------------------------------------------------------- utseende

SB, SH = 595.28, 841.89          # A4
MV, MH, MO, MU = 62.0, 62.0, 64.0, 62.0
KOLUMN = SB - MV - MH

BLACK = (0.13, 0.12, 0.11)
DAMPAD = (0.42, 0.40, 0.37)
AKCENT = (0.55, 0.24, 0.14)
LINJE = (0.80, 0.77, 0.72)

BROD, BRODLED = 10.5, 14.5


class Kort:
    def __init__(self):
        self.sidor = []
        self.ny_sida()

    def ny_sida(self):
        self.ops = []
        self.sidor.append(self.ops)
        self.y = SH - MO

    def luft(self, h):
        self.y -= h

    def plats(self, h):
        if self.y - h < MU:
            self.ny_sida()

    def _text(self, s, x, y, stil, storlek, farg):
        r, g, b = farg
        self.ops.append(
            b"BT /F%s %.2f Tf %.3f %.3f %.3f rg %.2f %.2f Td (%s) Tj ET"
            % (stil.encode(), storlek, r, g, b, x, y, escapa(s))
        )

    def stycke(self, s, stil="R", storlek=BROD, led=BRODLED, farg=BLACK, indrag=0.0):
        for rad in bryt(s, stil, storlek, KOLUMN - indrag):
            self.plats(led)
            self.y -= led
            self._text(rad, MV + indrag, self.y, stil, storlek, farg)

    def centrerad(self, s, stil, storlek, led, farg=BLACK):
        for rad in bryt(s, stil, storlek, KOLUMN):
            self.plats(led)
            self.y -= led
            x = MV + (KOLUMN - textbredd(rad, stil, storlek)) / 2.0
            self._text(rad, x, self.y, stil, storlek, farg)

    def linje(self, bredd=KOLUMN, tjocklek=0.6, farg=LINJE, centrerad=False):
        self.plats(8)
        self.y -= 6
        r, g, b = farg
        x0 = MV + (KOLUMN - bredd) / 2.0 if centrerad else MV
        self.ops.append(
            b"%.3f %.3f %.3f RG %.2f w %.2f %.2f m %.2f %.2f l S"
            % (r, g, b, tjocklek, x0, self.y, x0 + bredd, self.y)
        )
        self.y -= 4

    def rubrik(self, s):
        self.plats(46)
        self.luft(12)
        self.stycke(s.upper(), "B", 9.5, led=13.0, farg=AKCENT)
        self.luft(3)

    def underrubrik(self, s):
        self.plats(30)
        self.luft(7)
        self.stycke(s, "B", 10.0, led=13.5, farg=BLACK)
        self.luft(1)

    def punkt(self, s):
        for i, rad in enumerate(bryt(s, "R", BROD, KOLUMN - 16)):
            self.plats(BRODLED)
            self.y -= BRODLED
            if i == 0:
                self._text("•", MV + 3, self.y, "R", BROD, AKCENT)
            self._text(rad, MV + 16, self.y, "R", BROD, BLACK)

    def steg(self, nummer, s):
        for i, rad in enumerate(bryt(s, "R", BROD, KOLUMN - 22)):
            self.plats(BRODLED)
            self.y -= BRODLED
            if i == 0:
                self._text(f"{nummer}.", MV, self.y, "B", BROD, AKCENT)
            self._text(rad, MV + 22, self.y, "R", BROD, BLACK)
        self.y -= 4

    # ------------------------------------------------------------ skrivning
    def skriv(self, sokvag, titel):
        objekt = []

        def lagg(kropp):
            objekt.append(kropp)
            return len(objekt)

        fonter = {
            s: lagg(
                b"<< /Type /Font /Subtype /Type1 /BaseFont /%s /Encoding "
                b"/WinAnsiEncoding >>" % b.encode()
            )
            for s, b in BASE14.items()
        }
        resurser = b"<< /Font << " + b" ".join(
            b"/F%s %d 0 R" % (s.encode(), fonter[s]) for s in ("R", "B", "I")
        ) + b" >> >>"

        sidtrad = len(objekt) + 1
        objekt.append(b"")  # platshållare, fylls i när sidorna är kända
        sid_ids = []
        for ops in self.sidor:
            strom = zlib.compress(b"\n".join(ops))
            sid = lagg(
                b"<< /Length %d /Filter /FlateDecode >>\nstream\n" % len(strom)
                + strom + b"\nendstream"
            )
            sid_ids.append(lagg(
                b"<< /Type /Page /Parent %d 0 R /MediaBox [0 0 %.2f %.2f] "
                b"/Resources %s /Contents %d 0 R >>"
                % (sidtrad, SB, SH, resurser, sid)
            ))
        objekt[sidtrad - 1] = (
            b"<< /Type /Pages /Count %d /Kids [%s] >>"
            % (len(sid_ids), b" ".join(b"%d 0 R" % i for i in sid_ids))
        )
        info = lagg(b"<< /Title (%s) /Producer (Cornelius receptkort) >>"
                    % escapa(titel))
        rot = lagg(b"<< /Type /Catalog /Pages %d 0 R >>" % sidtrad)

        ut = bytearray(b"%PDF-1.4\n%\xe5\xe4\xf6\n")
        offsetar = []
        for i, kropp in enumerate(objekt, start=1):
            offsetar.append(len(ut))
            ut += b"%d 0 obj\n" % i + kropp + b"\nendobj\n"
        xref = len(ut)
        ut += b"xref\n0 %d\n0000000000 65535 f \n" % (len(objekt) + 1)
        for off in offsetar:
            ut += b"%010d 00000 n \n" % off
        ut += (b"trailer\n<< /Size %d /Root %d 0 R /Info %d 0 R >>\n"
               b"startxref\n%d\n%%%%EOF\n"
               % (len(objekt) + 1, rot, info, xref))
        with open(sokvag, "wb") as fh:
            fh.write(bytes(ut))
        return len(ut)


# --------------------------------------------------------------- innehåll

def _poster(varde, faltnamn):
    """Tillåter både ['a','b'] och [{'rubrik':..,'poster':[..]}, ...]."""
    if not isinstance(varde, list):
        sys.exit(f"Fältet '{faltnamn}' måste vara en lista.")
    grupper = []
    losa = []
    for post in varde:
        if isinstance(post, dict):
            if losa:
                grupper.append((None, losa))
                losa = []
            grupper.append((post.get("rubrik"), list(post.get("poster", []))))
        else:
            losa.append(str(post))
    if losa:
        grupper.append((None, losa))
    return grupper


def slugga(s):
    tabell = str.maketrans("åäöÅÄÖéèüÉÈÜøæ", "aaoAAOeeuEEUoa")
    s = s.translate(tabell)
    s = re.sub(r"[^A-Za-z0-9]+", "-", s).strip("-")
    return s or "receptkort"


def bygg(recept, ut_sokvag):
    if "titel" not in recept:
        sys.exit("JSON:en saknar obligatoriskt fält 'titel'.")
    if not recept.get("steg"):
        sys.exit("JSON:en saknar obligatoriskt fält 'steg'.")

    k = Kort()
    k.luft(6)
    k.centrerad(recept["titel"], "B", 22, 26)
    if recept.get("undertitel"):
        k.centrerad(recept["undertitel"], "I", 14.5, 20, farg=DAMPAD)
    k.luft(8)
    k.linje(bredd=130, tjocklek=1.0, farg=AKCENT, centrerad=True)
    k.luft(4)
    if recept.get("meta"):
        k.centrerad(recept["meta"], "R", 9.5, 13, farg=DAMPAD)
    k.luft(14)

    if recept.get("intro"):
        k.stycke(recept["intro"], "I", 10.5, led=15.0, farg=DAMPAD)

    if recept.get("ingredienser"):
        k.rubrik("Ingredienser")
        k.linje()
        for rubrik, poster in _poster(recept["ingredienser"], "ingredienser"):
            if rubrik:
                k.underrubrik(rubrik)
            for p in poster:
                k.punkt(p)

    k.rubrik(recept.get("steg_rubrik", "Gör så här"))
    k.linje()
    for rubrik, poster in _poster(recept["steg"], "steg"):
        if rubrik:
            k.underrubrik(rubrik)
        for i, s in enumerate(poster, start=1):
            k.steg(i, s)

    if recept.get("noter"):
        k.rubrik("Noter")
        k.linje()
        for rubrik, poster in _poster(recept["noter"], "noter"):
            if rubrik:
                k.underrubrik(rubrik)
            for p in poster:
                k.punkt(p)

    if recept.get("kalla"):
        k.luft(16)
        k.linje()
        k.stycke(recept["kalla"], "I", 8.5, led=12.0, farg=DAMPAD)

    storlek = k.skriv(ut_sokvag, recept["titel"])
    return storlek, len(k.sidor)


EXEMPEL = {
    "titel": "Rättens namn",
    "undertitel": "valfri underrubrik",
    "meta": "Kokbok · Författare · N portioner",
    "intro": "Valfri kort ingress i kursiv stil.",
    "ingredienser": [
        "200 g något",
        {"rubrik": "Till såsen", "poster": ["1 dl grädde", "2 vitlöksklyftor"]},
    ],
    "steg": ["Första steget.", "Andra steget."],
    "noter": ["Valfria tips och byten."],
    "kalla": "Ur Författare, Kokbok. Hämtat ur kokbokssamlingen ÅÅÅÅ-MM-DD.",
}


def main():
    p = argparse.ArgumentParser(
        description="Sätter ett recept som PDF-receptkort.")
    p.add_argument("json", nargs="?", help="receptet som JSON-fil ('-' = stdin)")
    p.add_argument("--ut", help="full sökväg till PDF:en")
    p.add_argument("--mapp", default=STANDARD_UT,
                   help=f"utmapp när --ut utelämnas (standard: {STANDARD_UT})")
    p.add_argument("--schema", action="store_true",
                   help="skriv ut ett exempel på indata och avsluta")
    a = p.parse_args()

    if a.schema:
        print(json.dumps(EXEMPEL, ensure_ascii=False, indent=2))
        return
    if not a.json:
        p.error("ange en JSON-fil (eller --schema)")

    text = sys.stdin.read() if a.json == "-" else open(
        a.json, encoding="utf-8").read()
    try:
        recept = json.loads(text)
    except json.JSONDecodeError as e:
        sys.exit(f"Kan inte tolka JSON: {e}")

    ut = a.ut or os.path.join(a.mapp, slugga(recept.get("titel", "")) + ".pdf")
    os.makedirs(os.path.dirname(os.path.abspath(ut)), exist_ok=True)
    storlek, sidor = bygg(recept, ut)
    print(f"OK {ut} ({storlek} byte, {sidor} sidor)")


if __name__ == "__main__":
    main()
