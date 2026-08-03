#!/usr/bin/env python3
"""
scholar.py - akademisk sokning mot oppna API:er, utan webblasare.

Ersatter Google Scholar for vaultets forskningspipeline. Alla kallor nedan
svarar over vanlig HTTP, kraver ingen inloggning och kan koras av flera
agenter parallellt - till skillnad fran Scholar, som drivs genom en enda
webblasarsession och stryps med CAPTCHA.

Kallor:
  OpenAlex   ~250M verk, framatcitering, OA-status. Ingen nyckel.
  Crossref   exakt citeringsmetadata per DOI. Ingen nyckel.
  Unpaywall  laglig oppen fulltext per DOI. Kraver e-post i URL.
  ERIC       utbildningsforskningens egen databas. Ingen nyckel.
  DiVA       svenska avhandlingar och uppsatser. CSV-export.
  Libris     svenska nationalbibliografin - bocker. xsearch-API.

Anropas av /scholar och /deep-research. Endast standardbiblioteket.
"""

import argparse
import csv
import io
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

MAILTO = "karlsson.magister@gmail.com"
TIMEOUT = 30
USER_AGENT = f"Cornelius-vault/1.0 (mailto:{MAILTO})"

OPENALEX = "https://api.openalex.org"
CROSSREF = "https://api.crossref.org"
UNPAYWALL = "https://api.unpaywall.org/v2"
ERIC = "https://api.ies.ed.gov/eric/"
DIVA = "https://www.diva-portal.org/smash/export.jsf"
LIBRIS = "https://api.libris.kb.se/xsearch"


# ---------------------------------------------------------------- transport

def _get(url, tries=3, raw=False):
    """GET med retry och artig user-agent. Returnerar dict eller text."""
    last = None
    for n in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
            with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
                body = r.read().decode("utf-8", errors="replace")
            return body if raw else json.loads(body)
        except urllib.error.HTTPError as e:
            last = f"HTTP {e.code}"
            if e.code in (429, 500, 502, 503):
                time.sleep(2 * (n + 1))
                continue
            break
        except Exception as e:                                  # noqa: BLE001
            last = str(e)
            time.sleep(1 + n)
    raise RuntimeError(f"Anropet misslyckades: {url}\n  {last}")


def _norm(s):
    """Normaliserar en titel for jamforelse: gemener, inga skiljetecken."""
    return re.sub(r"[^a-z0-9aao ]", "", (s or "").lower()).strip()


def _text(s):
    """DiVA levererar sammanfattningar med HTML i. Plocka bort taggarna."""
    s = re.sub(r"<[^>]+>", " ", s or "")
    s = (s.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
          .replace("&nbsp;", " ").replace("&quot;", '"'))
    return re.sub(r"\s+", " ", s).strip()


# ---------------------------------------------------------------- OpenAlex

def _oa_url(path, **params):
    params.setdefault("mailto", MAILTO)
    q = urllib.parse.urlencode({k: v for k, v in params.items() if v not in (None, "")})
    return f"{OPENALEX}/{path}?{q}"


def _oa_slim(w):
    """Plockar ut de falt vi faktiskt anvander ur ett OpenAlex-verk."""
    src = ((w.get("primary_location") or {}).get("source") or {})
    oa = w.get("open_access") or {}
    return {
        "id": (w.get("id") or "").rsplit("/", 1)[-1],
        "titel": w.get("display_name"),
        "ar": w.get("publication_year"),
        "doi": (w.get("doi") or "").replace("https://doi.org/", "") or None,
        "forfattare": [a["author"]["display_name"] for a in (w.get("authorships") or [])][:6],
        "publicerad_i": src.get("display_name"),
        "typ": w.get("type"),
        "citerad_av": w.get("cited_by_count", 0),
        "oppen": oa.get("is_oa", False),
        "oa_url": oa.get("oa_url"),
        "referenser": len(w.get("referenced_works") or []),
    }


def oa_search(query, antal=10, fran=None, till=None, endast_oa=False,
              typ=None, fulltext=False):
    """Sok verk.

    Standard ar titel och sammanfattning. OpenAlex kan ocksa soka i hela
    fulltexten (--fulltext), men da matchar enskilda ord var som helst i
    artikeln och traffbilden blir obrukbar for en avgransad fraga - en
    sokning pa historiedidaktik ger da metodartiklar som rakar namna
    "historical" och "thinking" i olika stycken.
    """
    filters = [f"{'fulltext' if fulltext else 'title_and_abstract'}.search:{query}"]
    if fran:
        filters.append(f"from_publication_date:{fran}-01-01")
    if till:
        filters.append(f"to_publication_date:{till}-12-31")
    if endast_oa:
        filters.append("is_oa:true")
    if typ:
        filters.append(f"type:{typ}")
    url = _oa_url("works", per_page=min(antal, 50),
                  filter=",".join(filters), sort="relevance_score:desc")
    d = _get(url)
    return d["meta"]["count"], [_oa_slim(w) for w in d["results"]]


def oa_resolve(ref, alla=False):
    """Loser en referens (W-id, DOI eller titel) till ett eller flera verk.

    alla=True returnerar samtliga poster vars titel matchar - OpenAlex har
    ofta dubbletter av samma verk, och deras citeringar ar da uppdelade.
    """
    ref = ref.strip()
    if re.fullmatch(r"[Ww]\d+", ref):
        return [_oa_slim(_get(_oa_url(f"works/{ref.upper()}")))]
    if ref.lower().startswith("10.") or "doi.org/" in ref:
        doi = ref.split("doi.org/")[-1]
        return [_oa_slim(_get(_oa_url(f"works/https://doi.org/{doi}")))]

    d = _get(_oa_url("works", filter=f"title.search:{ref}", per_page=25,
                     sort="cited_by_count:desc"))
    hits = [_oa_slim(w) for w in d["results"]]
    if not hits:
        return []
    if not alla:
        return hits[:1]
    mal = _norm(hits[0]["titel"])
    return [h for h in hits if _norm(h["titel"]) == mal] or hits[:1]


def oa_cited_by(ids, antal=15, fran=None, sortera="cited_by_count:desc"):
    """Framatcitering. Flera id:n slas ihop med | sa dubbletter tacks."""
    filters = ["cites:" + "|".join(ids)]
    if fran:
        filters.append(f"from_publication_date:{fran}-01-01")
    url = _oa_url("works", filter=",".join(filters),
                  per_page=min(antal, 50), sort=sortera)
    d = _get(url)
    return d["meta"]["count"], [_oa_slim(w) for w in d["results"]]


# ---------------------------------------------------------------- ovriga

def crossref(query=None, doi=None):
    if doi:
        d = _get(f"{CROSSREF}/works/{urllib.parse.quote(doi)}?mailto={MAILTO}")
        items = [d["message"]]
    else:
        url = (f"{CROSSREF}/works?query.bibliographic="
               f"{urllib.parse.quote(query)}&rows=5&mailto={MAILTO}")
        items = _get(url)["message"]["items"]
    out = []
    for m in items:
        dp = ((m.get("issued") or {}).get("date-parts") or [[None]])[0]
        out.append({
            "titel": (m.get("title") or [None])[0],
            "ar": dp[0] if dp else None,
            "doi": m.get("DOI"),
            "typ": m.get("type"),
            "publicerad_i": (m.get("container-title") or [None])[0],
            "forlag": m.get("publisher"),
            "forfattare": [f"{a.get('family','')}, {a.get('given','')}".strip(", ")
                           for a in (m.get("author") or [])][:6],
            "referenser": m.get("reference-count"),
            "citerad_av_crossref": m.get("is-referenced-by-count"),
        })
    return out


def unpaywall(doi):
    d = _get(f"{UNPAYWALL}/{urllib.parse.quote(doi)}?email={MAILTO}")
    best = d.get("best_oa_location") or {}
    return {
        "titel": d.get("title"), "ar": d.get("year"),
        "oppen": d.get("is_oa"), "status": d.get("oa_status"),
        "pdf": best.get("url_for_pdf"), "landningssida": best.get("url"),
        "version": best.get("version"), "vard": best.get("host_type"),
        "alla": [l.get("url_for_pdf") or l.get("url")
                 for l in (d.get("oa_locations") or [])][:5],
    }


def eric(query, antal=10, endast_fulltext=False):
    q = f'search={urllib.parse.quote(query)}'
    if endast_fulltext:
        q = f'search={urllib.parse.quote(query + " AND fulltext:true")}'
    fields = "id,title,author,publicationdateyear,source,description,subject,peerreviewed"
    url = f"{ERIC}?{q}&format=json&rows={antal}&fields={fields}"
    r = _get(url)["response"]
    out = []
    for d in r.get("docs", []):
        out.append({
            "id": d.get("id"),
            "titel": d.get("title"),
            "ar": d.get("publicationdateyear"),
            "forfattare": (d.get("author") or [])[:6],
            "publicerad_i": d.get("source"),
            "granskad": d.get("peerreviewed"),
            "amnesord": (d.get("subject") or [])[:6],
            "sammanfattning": (d.get("description") or "")[:300],
            "url": f"https://eric.ed.gov/?id={d.get('id')}",
        })
    return r.get("numFound", 0), out


def diva(query, antal=10, endast_fulltext=False):
    aq = json.dumps([[{"freeText": query}]], ensure_ascii=False)
    params = {
        "format": "csvall2", "addFilename": "true", "aq": aq,
        "aqe": "[]", "aq2": "[[]]",
        "onlyFullText": "true" if endast_fulltext else "false",
        "noOfRows": str(antal), "sortOrder": "dateIssued_sort_desc",
        "sortOrder2": "title_sort_asc",
    }
    body = _get(f"{DIVA}?{urllib.parse.urlencode(params)}", raw=True)
    rows = list(csv.DictReader(io.StringIO(body.lstrip("﻿"))))
    # DiVA speglar samma verk fran flera larosatesarkiv. Sla ihop pa DOI,
    # annars pa normaliserad titel, och behall posten med fulltextlank.
    unika = {}
    for r in rows:
        nyckel = (r.get("DOI") or "").strip().lower() or _norm(r.get("Title"))
        if not nyckel:
            continue
        if nyckel not in unika or (r.get("FullTextLink") and not unika[nyckel].get("FullTextLink")):
            unika[nyckel] = r
    out = []
    for r in list(unika.values())[:antal]:
        out.append({
            "titel": r.get("Title"),
            "ar": r.get("Year"),
            "forfattare": [n.strip() for n in (r.get("Name") or "").split(";") if n.strip()][:6],
            "typ": r.get("PublicationType"),
            "niva": r.get("ThesisLevel") or None,
            "publicerad_i": r.get("Journal") or r.get("HostPublication") or None,
            "doi": r.get("DOI") or None,
            "fulltext": r.get("FullTextLink") or None,
            "granskad": r.get("Reviewed") or None,
            "sammanfattning": _text(r.get("Abstract"))[:300],
        })
    # DiVA:s CSV-export ger ingen total traffsiffra - bara de rader vi bad om.
    # Returnera None hellre an att hitta pa ett tal som ser ut som en total.
    return None, out


def libris(query, antal=10):
    url = (f"{LIBRIS}?query={urllib.parse.quote(query)}"
           f"&format=json&n={antal}")
    d = _get(url)["xsearch"]
    out = []
    for r in d.get("list", []):
        out.append({
            "titel": r.get("title"), "ar": r.get("date"),
            "forfattare": [r.get("creator")] if r.get("creator") else [],
            "typ": r.get("type"), "isbn": r.get("isbn"),
            "forlag": r.get("publisher"), "sprak": r.get("language"),
            "url": r.get("identifier"),
        })
    return d.get("records", 0), out


# ---------------------------------------------------------------- utskrift

def _f(post):
    """En trafflista-post som lasbar text."""
    fa = ", ".join(post.get("forfattare") or []) or "-"
    if len(fa) > 60:
        fa = fa[:57] + "..."
    rader = [f"  {post.get('titel') or '(utan titel)'}"]
    meta = f"    {fa} | {post.get('ar') or '-'}"
    if post.get("publicerad_i"):
        meta += f" | {post['publicerad_i']}"
    rader.append(meta)
    flagg = []
    if post.get("citerad_av") is not None:
        flagg.append(f"citerad {post['citerad_av']}")
    if post.get("granskad"):
        flagg.append(f"granskad: {post['granskad']}")
    if post.get("niva"):
        flagg.append(post["niva"])
    if post.get("typ"):
        flagg.append(post["typ"])
    if post.get("oppen"):
        flagg.append("OPPEN")
    if post.get("id"):
        flagg.append(post["id"])
    if post.get("doi"):
        flagg.append(f"doi:{post['doi']}")
    if flagg:
        rader.append("    " + " | ".join(str(x) for x in flagg))
    for nyckel in ("oa_url", "fulltext", "pdf", "url"):
        if post.get(nyckel):
            rader.append(f"    -> {post[nyckel]}")
            break
    if post.get("sammanfattning"):
        rader.append(f"    {post['sammanfattning'][:200]}")
    return "\n".join(rader)


def visa(rubrik, total, poster, som_json=False):
    if som_json:
        print(json.dumps({"rubrik": rubrik, "totalt": total, "traffar": poster},
                         ensure_ascii=False, indent=2))
        return
    print(f"\n{rubrik}")
    print(f"{'-' * len(rubrik)}")
    if total is not None:
        print(f"Totalt i indexet: {total}   Visar: {len(poster)}\n")
    if not poster:
        print("  Inga traffar. Det ar ett resultat - vidga en gang, sedan ar det ett fynd.\n")
        return
    for i, p in enumerate(poster, 1):
        print(f"{i}.{_f(p)[1:]}")
        print()


# ---------------------------------------------------------------- kommandon

def cmd_sok(a):
    total, r = oa_search(a.fraga, a.antal, a.fran_ar, a.till_ar, a.oa, a.typ, a.fulltext)
    omfang = "fulltext" if a.fulltext else "titel och sammanfattning"
    visa(f"OpenAlex ({omfang}): {a.fraga}", total, r, a.json)


def cmd_citerad_av(a):
    verk = oa_resolve(a.referens, alla=not a.ingen_hopslagning)
    if not verk:
        print(f"Hittade inget verk for: {a.referens}", file=sys.stderr)
        sys.exit(2)
    ids = [v["id"] for v in verk]
    if not a.json:
        print(f"\nUtgangsverk ({len(ids)} post{'er' if len(ids) > 1 else ''}):")
        for v in verk:
            print(f"  {v['id']} | {v['ar']} | citerad {v['citerad_av']} | {v['titel'][:60]}")
        if len(ids) > 1:
            print(f"  OBS: OpenAlex har flera poster for detta verk. Citeringarna"
                  f"\n  slas ihop nedan - annars underraknas de systematiskt.")
    total, r = oa_cited_by(ids, a.antal, a.fran_ar, a.sortera)
    visa(f"Citerat av (totalt {total})", total, r, a.json)
    if not a.json and r:
        print("Las listan, referera den inte. Sok efter: replikeringar (lyckade och")
        print("misslyckade), metaanalyser som ger annan effektstorlek, metodkritik.")
        print("Resten ar ritualcitering och betyder ingenting.\n")


def cmd_metadata(a):
    ref = a.referens
    doi = ref.split("doi.org/")[-1] if ("doi.org/" in ref or ref.lower().startswith("10.")) else None
    if not doi:
        v = oa_resolve(ref)
        if v and v[0].get("doi"):
            doi = v[0]["doi"]
        visa("OpenAlex", None, v, a.json)
    if doi:
        visa(f"Crossref: {doi}", None, crossref(doi=doi), a.json)
    elif not a.json:
        print("Ingen DOI kunde loses - Crossref hoppades over. Verk utan DOI")
        print("(rapporter, bocker, praktikerlitteratur) finns anda i OpenAlex.\n")


def cmd_fulltext(a):
    doi = a.doi.split("doi.org/")[-1]
    try:
        u = unpaywall(doi)
    except RuntimeError as e:
        print(f"Unpaywall svarade inte: {e}", file=sys.stderr)
        sys.exit(2)
    if a.json:
        print(json.dumps(u, ensure_ascii=False, indent=2))
        return
    print(f"\n{u['titel'] or doi}  ({u['ar'] or '-'})")
    print(f"Oppen: {u['oppen']}  |  status: {u['status']}")
    if u["pdf"]:
        print(f"PDF:            {u['pdf']}")
    if u["landningssida"]:
        print(f"Landningssida:  {u['landningssida']}  ({u['vard']}, {u['version']})")
    if not u["oppen"]:
        print("\nIngen laglig oppen version. Prova ERIC, DiVA eller forskarens")
        print("institutionssida. Nas texten inte ar OVERIFIERAT ratt dom.")
    print()


def cmd_eric(a):
    total, r = eric(a.fraga, a.antal, a.fulltext)
    visa(f"ERIC: {a.fraga}", total, r, a.json)


def cmd_diva(a):
    total, r = diva(a.fraga, a.antal, a.fulltext)
    visa(f"DiVA: {a.fraga}", total, r, a.json)


def cmd_libris(a):
    total, r = libris(a.fraga, a.antal)
    visa(f"Libris: {a.fraga}", total, r, a.json)


def cmd_dubbletter(a):
    v = oa_resolve(a.titel, alla=True)
    if a.json:
        print(json.dumps({"poster": v, "summa": sum(x["citerad_av"] for x in v)},
                         ensure_ascii=False, indent=2))
        return
    print(f"\nOpenAlex-poster som matchar \"{a.titel}\":\n")
    for x in v:
        print(f"  {x['id']} | {x['ar']} | citerad {str(x['citerad_av']).rjust(6)} | {x['titel'][:58]}")
    print(f"\n  Summa citeringar over {len(v)} post(er): {sum(x['citerad_av'] for x in v)}")
    if len(v) > 1:
        print("  Anvand summan, inte den hogsta enskilda posten.")
    print()


# ---------------------------------------------------------------- cli

def main():
    p = argparse.ArgumentParser(
        prog="scholar",
        description="Akademisk sokning mot oppna API:er. Ingen webblasare, "
                    "ingen CAPTCHA, kan koras parallellt.")
    p.add_argument("--json", action="store_true", help="maskinlasbar utdata")
    sub = p.add_subparsers(dest="kommando", required=True)

    s = sub.add_parser("sok", help="sok verk i OpenAlex")
    s.add_argument("fraga")
    s.add_argument("--antal", type=int, default=10)
    s.add_argument("--fran-ar", dest="fran_ar")
    s.add_argument("--till-ar", dest="till_ar")
    s.add_argument("--oa", action="store_true", help="bara oppet tillgangliga")
    s.add_argument("--typ", help="article, book, dissertation, report ...")
    s.add_argument("--fulltext", action="store_true",
                   help="sok i hela artikeltexten i stallet for titel och "
                        "sammanfattning. Bredare men mycket bruskigare")
    s.set_defaults(func=cmd_sok)

    s = sub.add_parser("citerad-av", help="framatcitering - vem har citerat verket sedan dess")
    s.add_argument("referens", help="OpenAlex-id (W123...), DOI eller titel")
    s.add_argument("--antal", type=int, default=15)
    s.add_argument("--fran-ar", dest="fran_ar", help="bara citeringar fran och med detta ar")
    s.add_argument("--sortera", default="cited_by_count:desc",
                   help="cited_by_count:desc (standard) eller publication_date:desc")
    s.add_argument("--ingen-hopslagning", action="store_true",
                   help="sla inte ihop dubblettposter av samma verk")
    s.set_defaults(func=cmd_citerad_av)

    s = sub.add_parser("metadata", help="exakt citeringsmetadata via OpenAlex och Crossref")
    s.add_argument("referens")
    s.set_defaults(func=cmd_metadata)

    s = sub.add_parser("fulltext", help="laglig oppen fulltext via Unpaywall")
    s.add_argument("doi")
    s.set_defaults(func=cmd_fulltext)

    s = sub.add_parser("eric", help="sok ERIC - utbildningsforskning")
    s.add_argument("fraga")
    s.add_argument("--antal", type=int, default=10)
    s.add_argument("--fulltext", action="store_true")
    s.set_defaults(func=cmd_eric)

    s = sub.add_parser("diva", help="sok DiVA - svenska avhandlingar och uppsatser")
    s.add_argument("fraga")
    s.add_argument("--antal", type=int, default=10)
    s.add_argument("--fulltext", action="store_true")
    s.set_defaults(func=cmd_diva)

    s = sub.add_parser("libris", help="sok Libris - svenska nationalbibliografin, bocker")
    s.add_argument("fraga")
    s.add_argument("--antal", type=int, default=10)
    s.set_defaults(func=cmd_libris)

    s = sub.add_parser("dubbletter", help="visa alla OpenAlex-poster for samma verk")
    s.add_argument("titel")
    s.set_defaults(func=cmd_dubbletter)

    a = p.parse_args()
    try:
        a.func(a)
    except RuntimeError as e:
        print(f"FEL: {e}", file=sys.stderr)
        sys.exit(1)
    except BrokenPipeError:
        pass


if __name__ == "__main__":
    main()
