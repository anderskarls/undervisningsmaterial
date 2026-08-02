#!/usr/bin/env python3
"""Bygg Arkiv v2.1-HTML ur ett läsmaterial i markdown.

Markdownfilen är sanningskällan. HTML:en genereras ur den, så att texten aldrig
skrivs två gånger och versionerna inte kan glida isär. Ändrar du bearbetningen,
kör om scriptet.

Designen ligger i arkiv-lasmaterial.css bredvid den här filen. Iterera där -
scriptet rör aldrig utseendet.

Konventioner i markdown som scriptet förstår:

    ==text==        ockermarkering (Arkiv-highlight) - använd på kausalkonnektiver
    __text__        bordeauxunderstruken nyckelmening
    **text**        fet
    *text*          kursiv
    > text          blockcitat; rad som börjar med "Källa:" blir citatrad
    – text          talstreck, sätts i serif kursiv
    » Term | text   marginalgloss, knyts till stycket närmast ovanför

Begrepp ur ordlistan markeras automatiskt vid sin första förekomst i den
bearbetade texten, och de fyra första får marginalgloss om ingen egen » angetts.

Användning:
    python3 bygg-html.py <lasmaterial.md> [--ut <fil.html>]
    python3 bygg-html.py --alla        # bygg om allt i output/lasmaterial/
"""
from __future__ import annotations

import html as htmlmod
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from refresh import VAULT  # noqa: E402

CSS_PATH = Path(__file__).resolve().parent / "arkiv-lasmaterial.css"
LASMATERIAL_DIR = VAULT / "output/lasmaterial"
FONTLANK = (
    '<link rel="preconnect" href="https://fonts.googleapis.com" />\n'
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
    '<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:'
    'ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter+Tight:wght@400;500;600;700'
    '&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet" />'
)
MAX_AUTOGLOSS = 4


def die(msg: str, code: int = 2) -> None:
    print(f"FEL: {msg}", file=sys.stderr)
    sys.exit(code)


# ------------------------------------------------------------------ parsning

def frontmatter(text: str) -> tuple[dict, str]:
    if not text.startswith("---"):
        return {}, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text
    fm = {}
    for line in parts[1].splitlines():
        m = re.match(r"^\s*([\w_]+)\s*:\s*(.*?)\s*$", line)
        if m:
            fm[m.group(1).lower()] = m.group(2).strip().strip('"\'')
    return fm, parts[2]


def sektioner(body: str) -> dict[str, str]:
    """Dela på H2. Returnerar {rubrik_gemener: innehåll}."""
    ut, aktuell, buf = {}, None, []
    for line in body.splitlines():
        m = re.match(r"^##\s+(?!#)(.+?)\s*$", line)
        if m:
            if aktuell:
                ut[aktuell] = "\n".join(buf).strip()
            aktuell, buf = m.group(1).strip().lower(), []
        elif aktuell:
            buf.append(line)
    if aktuell:
        ut[aktuell] = "\n".join(buf).strip()
    return ut


def hitta(sek: dict, *nycklar: str) -> str:
    for n in nycklar:
        for k, v in sek.items():
            if k.startswith(n):
                return v
    return ""


def underrubriker(block: str) -> list[tuple[str, str]]:
    """Dela ett H2-block på H3. Text före första H3 får rubriken ''."""
    ut, aktuell, buf = [], "", []
    for line in block.splitlines():
        m = re.match(r"^###\s+(.+?)\s*$", line)
        if m:
            ut.append((aktuell, "\n".join(buf).strip()))
            aktuell, buf = m.group(1).strip(), []
        else:
            buf.append(line)
    ut.append((aktuell, "\n".join(buf).strip()))
    return [(r, t) for r, t in ut if t or r]


def tabellrader(block: str) -> list[list[str]]:
    rader = []
    for line in block.splitlines():
        line = line.strip()
        if not line.startswith("|") or line.count("|") < 2:
            continue
        celler = [c.strip() for c in line.strip("|").split("|")]
        if any(c and set(c) <= set("-: ") for c in celler):
            continue
        rader.append(celler)
    return rader[1:] if rader else []      # första raden är tabellhuvud


# ------------------------------------------------------------------ inline

def inline(s: str) -> str:
    s = htmlmod.escape(s, quote=False)
    s = re.sub(r"==(.+?)==", r"<mark>\1</mark>", s)
    s = re.sub(r"__(.+?)__", r'<span class="def">\1</span>', s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<!\*)\*([^*\n]+?)\*(?!\*)", r"<em>\1</em>", s)
    s = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', s)
    s = re.sub(r"\[\[([^\]|]+)(?:\|([^\]]+))?\]\]", lambda m: m.group(2) or m.group(1), s)
    return s


def stycken(block: str) -> list[tuple[str, str]]:
    """Dela ett textblock i (typ, innehåll). Typ: p, quote, talstreck, gloss, h4, li."""
    ut: list[tuple[str, str]] = []
    for rå in re.split(r"\n\s*\n", block):
        rå = rå.strip()
        # Avgränsare och tabellrester ska inte bli innehåll.
        rå = "\n".join(l for l in rå.splitlines()
                       if not re.fullmatch(r"\s*([-*_]\s*){3,}", l))
        rå = rå.strip()
        if not rå or rå.startswith("|"):
            continue
        if rå.startswith("»"):
            ut.append(("gloss", rå.lstrip("» ").strip()))
        elif rå.startswith(">"):
            ut.append(("quote", " ".join(l.lstrip("> ").strip() for l in rå.splitlines())))
        elif rå.startswith("–"):
            ut.append(("talstreck", " ".join(l.strip() for l in rå.splitlines())))
        elif rå.startswith("####") or rå.startswith("###"):
            ut.append(("h4", rå.lstrip("# ").strip()))
        elif re.match(r"^[-*]\s+", rå):
            for l in rå.splitlines():
                if re.match(r"^[-*]\s+", l.strip()):
                    ut.append(("li", re.sub(r"^[-*]\s+", "", l.strip())))
        elif re.match(r"^\d+\.\s+", rå):
            for l in rå.splitlines():
                if re.match(r"^\d+\.\s+", l.strip()):
                    ut.append(("oli", re.sub(r"^\d+\.\s+", "", l.strip())))
        else:
            ut.append(("p", " ".join(l.strip() for l in rå.splitlines())))
    return ut


# Svenska böjningsändelser. Ordlistan skriver "Utsläppsrätt" men texten säger
# "utsläppsrätter", och "Civilskyddsmekanismen" möter "civilskyddsmekanism".
# Därför matchas ordstammen plus valfri ändelse, åt båda hållen.
ANDELSE = r"(?:erna|arna|orna|ernas|er|ar|or|en|et|na|ns|ts|n|t|s)?"


def _stam(ord_: str) -> str:
    kort = re.sub(r"(erna|arna|orna|er|ar|or|en|et|na|n|t|s)$", "", ord_, flags=re.I)
    return kort if len(kort) >= 5 else ord_


def _termmonster(term: str) -> re.Pattern:
    term = re.sub(r"\s*\([^)]*\)", "", term).strip()      # "(gratisrätter)" bort
    delar = [re.escape(_stam(o)) + ANDELSE for o in term.split()]
    return re.compile(r"(?<![\w-])" + r"\s+".join(delar) + r"(?![\w-])", re.I)


def markera_begrepp(text: str, termer: list[str], träffade: set) -> str:
    """Markera första förekomsten av varje ordlisteterm.

    Texten innehåller redan HTML, så sökningen görs bara i textnoderna -
    annars kan en term träffa inuti ett attributvärde eller en redan satt tagg.
    """
    bitar = re.split(r"(<[^>]+>)", text)
    for term in termer:
        nyckel = term.lower()
        if nyckel in träffade:
            continue
        mönster = _termmonster(term)
        djup = 0
        for i, bit in enumerate(bitar):
            if bit.startswith("<"):
                if bit.startswith("<span") or bit.startswith("<a"):
                    djup += 1
                elif bit.startswith("</span") or bit.startswith("</a"):
                    djup = max(0, djup - 1)
                continue
            if djup:                      # står redan inuti en märkning
                continue
            m = mönster.search(bit)
            if m:
                bitar[i] = (bit[:m.start()]
                            + f'<span class="begrepp">{m.group(0)}</span>'
                            + bit[m.end():])
                träffade.add(nyckel)
                break
    return "".join(bitar)


# ------------------------------------------------------------------ artikeln

def bygg_artikel(block: str, ordlista: list[tuple[str, str]], markera: bool) -> str:
    termer = sorted((t for t, _ in ordlista), key=len, reverse=True)
    förklaring = {t.lower(): f for t, f in ordlista}
    träffade: set = set()
    ut: list[str] = []
    väntande_gloss: list[str] = []
    autogloss = 0

    delar = stycken(block)
    for i, (typ, txt) in enumerate(delar):
        if typ == "gloss":
            väntande_gloss.append(txt)
            continue
        if typ == "quote":
            m = re.match(r"^(.*?)\s*(?:Källa|Citat)\s*:\s*(.+)$", txt, re.S)
            kropp, cit = (m.group(1), m.group(2)) if m else (txt, "")
            ut.append(f"<blockquote>{inline(kropp.strip())}"
                      + (f"<cite>{inline(cit.strip())}</cite>" if cit else "")
                      + "</blockquote>")
            continue
        if typ == "talstreck":
            ut.append(f'<p class="talstreck">{inline(txt)}</p>')
            continue
        if typ == "h4":
            ut.append(f"<h4>{inline(txt)}</h4>")
            continue
        if typ in ("li", "oli"):
            ut.append(f"<!--{typ}-->{inline(txt)}")
            continue

        kropp = inline(txt)
        gloss_html = ""

        # Explicit angivna glossar gäller stycket ovanför dem.
        nästa = delar[i + 1] if i + 1 < len(delar) else ("", "")
        egna = [nästa[1]] if nästa[0] == "gloss" else []
        for g in egna:
            term, _, förkl = g.partition("|")
            gloss_html += (f'<aside class="gloss"><b>{inline(term.strip())}</b>'
                           f'{inline(förkl.strip())}</aside>')

        if markera:
            före = set(träffade)
            kropp = markera_begrepp(kropp, termer, träffade)
            nya = träffade - före
            if nya and not egna and autogloss < MAX_AUTOGLOSS:
                term = next(iter(nya))
                orig = next((t for t in termer if t.lower() == term), term)
                gloss_html += (f'<aside class="gloss"><b>{inline(orig)}</b>'
                               f'{inline(förklaring.get(term, ""))}</aside>')
                autogloss += 1

        ut.append(f'<div class="stycke"><p>{kropp}</p>{gloss_html}</div>')

    return samla_listor("\n  ".join(ut))


def samla_listor(s: str) -> str:
    """Slå ihop intilliggande <!--li--> till en <ul>, <!--oli--> till en <ol>."""
    for märke, tagg in (("li", "ul"), ("oli", "ol")):
        s = re.sub(
            rf"(?:\s*<!--{märke}-->(?:(?!<!--)[^\n])*\n?)+",
            lambda m: f"<{tagg}>"
                      + "".join(f"<li>{x.strip()}</li>"
                                for x in re.findall(rf"<!--{märke}-->(.*)", m.group(0)))
                      + f"</{tagg}>\n  ",
            s)
    return s


# ------------------------------------------------------------------- montering

def bygg(md_path: Path) -> str:
    fm, body = frontmatter(md_path.read_text(encoding="utf-8"))
    sek = sektioner(body)

    titel = fm.get("title") or md_path.stem
    kurs = fm.get("kurs") or "Läsmaterial"
    publicerad = (fm.get("published") or "")[:10]
    forfattare = fm.get("author", "")

    # Innan du läser
    innan = underrubriker(hitta(sek, "innan du läser"))
    kontext = procedur = ""
    ordlista: list[tuple[str, str]] = []
    for rubrik, txt in innan:
        r = rubrik.lower()
        if "behöver du veta" in r or "först" in r:
            kontext = "".join(f"<p>{inline(t)}</p>"
                              for typ, t in stycken(txt) if typ == "p")
        elif "ord" in r:
            ordlista = [(re.sub(r"\*+", "", c[0]).strip(), c[1])
                        for c in tabellrader(txt) if len(c) >= 2]
        elif "när du läser" in r or "läser" in r:
            procedur = "".join(f"<p>{inline(t)}</p>"
                               for typ, t in stycken(txt) if typ in ("p", "li"))

    ordlista_html = "".join(
        f"<dt>{inline(t)}</dt><dd>{inline(f)}</dd>" for t, f in ordlista)

    # Artikeln, med eventuell faktaruta avskild
    artikel_block = hitta(sek, "artikeln")
    fakta_html = ""
    m = re.search(r"^###\s*Fakta[:\s].*$", artikel_block, re.M)
    if m:
        fakta_txt = artikel_block[m.end():]
        artikel_block = artikel_block[:m.start()]
        punkter = [t for typ, t in stycken(fakta_txt) if typ == "li"]
        if punkter:
            fakta_html = (
                '<section><div class="ruta fakta">'
                '<h3 class="rubrik">Fakta</h3><ul>'
                + "".join(f"<li>{inline(p)}</li>" for p in punkter)
                + "</ul></div></section>")

    bearbetad = bygg_artikel(artikel_block, ordlista, markera=True)
    original = bygg_artikel(hitta(sek, "originalet"), ordlista, markera=False)

    efter = [t for typ, t in stycken(hitta(sek, "efter läsningen"))
             if typ in ("oli", "li", "p")]
    efter_html = "".join(f"<li>{inline(t)}</li>" for t in efter)

    # Kontroll (lärarsektionen)
    kontroll_block = hitta(sek, "kontroll")
    rader = tabellrader(kontroll_block)
    kontroll_rader = "".join(
        f"<tr><td>{inline(r[0])}</td><td>{inline(r[1])}</td>"
        f'<td class="ja">{inline(r[2])}</td></tr>'
        for r in rader if len(r) >= 3)
    resultat = fm.get("kontroll", "")
    kontroll_text = "".join(
        f"<p>{inline(t)}</p>" for typ, t in stycken(kontroll_block)
        if typ == "p" and not t.startswith("|"))

    css = CSS_PATH.read_text(encoding="utf-8")
    return f"""<!doctype html>
<html lang="sv">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{htmlmod.escape(titel)} - läsmaterial</title>
{FONTLANK}
<style>
{css}</style>
</head>
<body>

<header class="omslag">
  <div class="rad">
    <span class="etikett">{htmlmod.escape(kurs)}</span>
    <span class="etikett">{htmlmod.escape(fm.get('source', 'Dagens Nyheter'))}{' · ' + publicerad if publicerad else ''}</span>
    <span class="etikett">Läsmaterial</span>
  </div>
  <h1>{inline(titel)}</h1>
  {f'<p class="ingress">{inline(fm.get("description", ""))}</p>' if fm.get("description") else ''}
  <p class="byline">{('Text ' + htmlmod.escape(forfattare) + ' · ') if forfattare else ''}Bearbetad version med stöd</p>
</header>

<main>

<section>
  <h2>Innan du <em>läser</em></h2>
  {f'<div class="ruta"><h3 class="rubrik">Det här behöver du veta först</h3>{kontext}</div>' if kontext else ''}
  {f'<h3 class="rubrik">Ord du behöver</h3><dl class="ordlista">{ordlista_html}</dl>' if ordlista_html else ''}
  {f'<div class="ruta procedur" style="margin-top:26px"><h3 class="rubrik">När du läser</h3>{procedur}</div>' if procedur else ''}
</section>

<div class="vaxel">
  <div class="knappar" role="group" aria-label="Välj version av artikeln">
    <button type="button" id="btn-stod" aria-pressed="true">Med stöd</button>
    <button type="button" id="btn-orig" aria-pressed="false">Originalet</button>
  </div>
  <p class="vaxelnot" id="vaxelnot">Orsakssambanden är utskrivna och begreppen förklarade.</p>
</div>

<article class="artikel" id="version-stod" aria-label="Artikeln med stöd">
  {bearbetad}
</article>

<article class="artikel" id="version-orig" aria-label="Artikeln i original" hidden>
  {original}
</article>

{fakta_html}

{f'<section><div class="efter"><h3 class="rubrik">Efter läsningen</h3><ol>{efter_html}</ol></div></section>' if efter_html else ''}

{f'''<details class="larare">
  <summary>Kontroll av bearbetningen · för läraren</summary>
  {kontroll_text}
  <div class="tabellyta"><table>
    <thead><tr><th>#</th><th>Fråga ställd på originalet</th><th>Besvarbar ur bearbetningen</th></tr></thead>
    <tbody>{kontroll_rader}</tbody>
  </table></div>
  {f'<p class="resultat">{htmlmod.escape(resultat)}</p>' if resultat else ''}
</details>''' if kontroll_rader else ''}

</main>

<footer>
  <p><em>Bearbetningen är en stötta, inte en permanent version. Den som klarar den bearbetade texten ska få originalet nästa gång. Stöd som aldrig fasas ut slutar vara stöd.</em></p>
  <p class="kalla">Källa: {htmlmod.escape(fm.get('source', 'Dagens Nyheter'))}{' ' + publicerad if publicerad else ''}{', text ' + htmlmod.escape(forfattare) if forfattare else ''} · <a href="{htmlmod.escape(fm.get('source_url', ''))}">Originalartikeln</a> är oförändrad och nås via växeln ovan</p>
</footer>

<script>
(function(){{
  var stod=document.getElementById('version-stod'), orig=document.getElementById('version-orig'),
      bS=document.getElementById('btn-stod'), bO=document.getElementById('btn-orig'),
      not=document.getElementById('vaxelnot');
  function visa(medStod){{
    stod.hidden=!medStod; orig.hidden=medStod;
    bS.setAttribute('aria-pressed',String(medStod));
    bO.setAttribute('aria-pressed',String(!medStod));
    not.textContent = medStod
      ? 'Orsakssambanden är utskrivna och begreppen förklarade.'
      : 'Artikeln som den publicerades. Klarar du den behöver du inte stödversionen.';
  }}
  bS.addEventListener('click',function(){{visa(true);}});
  bO.addEventListener('click',function(){{visa(false);}});
}})();
</script>
</body>
</html>
"""


def main() -> None:
    argv = sys.argv[1:]
    if "--alla" in argv:
        filer = sorted(LASMATERIAL_DIR.glob("*.md"))
        if not filer:
            die("inga markdownfiler i output/lasmaterial/")
        for f in filer:
            ut = f.with_suffix(".html")
            ut.write_text(bygg(f), encoding="utf-8")
            print(f"✓ {ut.relative_to(VAULT)}")
        return

    args = [a for a in argv if not a.startswith("--")]
    if not args:
        die("Användning: bygg-html.py <lasmaterial.md> [--ut <fil.html>]")
    md = Path(args[0])
    if not md.is_absolute():
        md = (VAULT / md) if (VAULT / md).exists() else md.resolve()
    if not md.exists():
        die(f"hittar inte {md}")

    ut = Path(argv[argv.index("--ut") + 1]) if "--ut" in argv else md.with_suffix(".html")
    ut.write_text(bygg(md), encoding="utf-8")
    print(f"✓ {ut}")


if __name__ == "__main__":
    main()
