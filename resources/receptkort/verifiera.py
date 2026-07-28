#!/usr/bin/env python3
"""Kontrollerar en PDF från receptkort.py.

Eftersom PDF:en skrivs för hand finns ingen bibliotekskod som fångar misstag.
Det här skriptet följer xref-tabellen, packar upp innehållsströmmarna och
rekonstruerar textlayouten för att fånga trasiga offsets, döda referenser,
fel strömlängder, text utanför marginalerna och tappade svenska tecken.

    python3 verifiera.py kort.pdf

Avslutar med kod 1 om något är fel.
"""
import os
import re
import sys
import zlib

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from receptkort import SB, SH, MV, MH, MU, textbredd  # noqa: E402

RAD_MONSTER = (
    r"BT /F(\w) ([\d.]+) Tf [\d.\s]+rg ([\d.]+) ([\d.]+) Td \((.*?)\) Tj ET"
)


def avescapa(s):
    return s.replace("\\(", "(").replace("\\)", ")").replace("\\\\", "\\")


def kontrollera(sokvag, pratsam=True):
    data = open(sokvag, "rb").read()
    fel = []

    def saga(*a):
        if pratsam:
            print(*a)

    # 1. xref -------------------------------------------------------------
    m = re.search(rb"startxref\s+(\d+)", data)
    if not m:
        return ["ingen startxref - filen är trunkerad"]
    start = int(m.group(1))
    if data[start:start + 4] != b"xref":
        fel.append("startxref pekar inte på xref-tabellen")
    antal = int(re.match(rb"xref\s+0\s+(\d+)\s+", data[start:]).group(1))
    poster = re.findall(rb"(\d{10}) (\d{5}) ([nf])", data[start:])
    saga(f"xref: {antal} poster deklarerade, {len(poster)} hittade")
    if len(poster) != antal:
        fel.append(f"xref-antal stämmer inte: {len(poster)} != {antal}")
    for i, (off, _, sort) in enumerate(poster):
        if sort == b"f":
            continue
        off = int(off)
        vantat = b"%d 0 obj" % i
        if data[off:off + len(vantat)] != vantat:
            fel.append(f"obj {i}: offset {off} pekar på {data[off:off+16]!r}")

    # 2. objektgraf -------------------------------------------------------
    objekt = {int(m.group(1)): m.group(2) for m in
              re.finditer(rb"(\d+) 0 obj\n(.*?)\nendobj\n", data, re.S)}
    saga(f"objekt: {len(objekt)}")
    for num, kropp in objekt.items():
        for ref in re.findall(rb"(\d+) 0 R", kropp):
            if int(ref) not in objekt:
                fel.append(f"obj {num} refererar till obefintligt obj {int(ref)}")

    slap = re.search(rb"trailer\s*<<(.*?)>>", data, re.S).group(1)
    rot = int(re.search(rb"/Root (\d+) 0 R", slap).group(1))
    sidtrad = int(re.search(rb"/Pages (\d+) 0 R", objekt[rot]).group(1))
    barn = [int(k) for k in re.findall(
        rb"(\d+) 0 R",
        re.search(rb"/Kids \[(.*?)\]", objekt[sidtrad], re.S).group(1))]
    deklarerat = int(re.search(rb"/Count (\d+)", objekt[sidtrad]).group(1))
    saga(f"katalog -> {deklarerat} sidor")
    if deklarerat != len(barn):
        fel.append("/Count matchar inte antalet /Kids")

    # 3. layout -----------------------------------------------------------
    all_text = []
    for nr, kid in enumerate(barn, start=1):
        kropp = objekt[kid]
        if b"/Parent %d 0 R" % sidtrad not in kropp:
            fel.append(f"sida {nr} har fel /Parent")
        cid = int(re.search(rb"/Contents (\d+) 0 R", kropp).group(1))
        ra = objekt[cid]
        strom = ra.split(b"stream\n", 1)[1].rsplit(b"\nendstream", 1)[0]
        langd = int(re.search(rb"/Length (\d+)", ra).group(1))
        if langd != len(strom):
            fel.append(f"sida {nr}: /Length {langd} != faktisk {len(strom)}")
        ops = zlib.decompress(strom)
        all_text += re.findall(rb"\((.*?)\) Tj", ops)

        rader = re.findall(RAD_MONSTER, ops.decode("latin-1"))
        if not rader:
            fel.append(f"sida {nr} innehåller ingen text")
            continue
        yv = []
        for stil, storlek, x, y, txt in rader:
            x, y, storlek = float(x), float(y), float(storlek)
            yv.append(y)
            if not (0 <= x <= SB and 0 <= y <= SH):
                fel.append(f"sida {nr}: text utanför sidan ({x:.0f},{y:.0f})")
            if y < MU - 14:
                fel.append(f"sida {nr}: text under nedre marginalen (y={y:.0f})")
            hoger = x + textbredd(avescapa(txt), stil, storlek)
            if hoger > SB - MH + 0.5:
                fel.append(f"sida {nr}: raden går ut över högermarginalen "
                           f"({hoger:.1f} > {SB-MH:.1f}): {avescapa(txt)[:40]!r}")
        saga(f"sida {nr}: {len(rader)} textrader, "
             f"y-spann {min(yv):.0f}-{max(yv):.0f}")

    # 4. tecken -----------------------------------------------------------
    ihop = b" ".join(all_text).decode("cp1252")
    if not any(c in ihop for c in "åäöÅÄÖ"):
        fel.append("inga svenska tecken i strömmen - kontrollera kodningen")
    else:
        saga("svenska tecken överlever kodningen")
    if "?" in ihop:
        traffar = [ihop[max(0, i - 20):i + 20]
                   for i, c in enumerate(ihop) if c == "?"][:3]
        saga("obs: frågetecken i texten (kan vara avsiktliga): " + str(traffar))

    return fel


def main():
    if len(sys.argv) < 2:
        sys.exit("användning: python3 verifiera.py kort.pdf")
    fel = kontrollera(sys.argv[1])
    print("\n" + ("PROBLEM:" if fel else "INGA PROBLEM"))
    for f in fel:
        print(" -", f)
    sys.exit(1 if fel else 0)


if __name__ == "__main__":
    main()
