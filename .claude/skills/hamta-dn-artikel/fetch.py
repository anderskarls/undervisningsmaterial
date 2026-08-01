#!/usr/bin/env python3
"""Hämta paywallade DN-artiklar direkt över HTTP med bnidtoken-cookie.

Användning: python3 fetch.py <dn-url> [--stdout]

DN gaterar serverside: skickas en giltig bnidtoken med förfrågan levereras
brödtexten i HTML:en. Ingen headless browser behövs, och därmed ingen
Firecrawl-container att starta. Firecrawl finns kvar som fallback och används
bara om direktvägen ger misstänkt kort text *och* containern råkar vara igång.

Exit codes:
  0  OK - artikel sparad
  2  Felaktigt argument / ogiltig URL
  3  bnidtoken kunde inte förnyas - kräver ny inloggning
  4  Nätverksfel mot dn.se
  5  DN svarade med fel, eller texten blev misstänkt kort (betalvägg)
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
import urllib.error
import urllib.request
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from extract import article_metadata, html_to_markdown  # noqa: E402
from refresh import UA, VAULT, RefreshError, get_valid_token, refresh_token  # noqa: E402

OUTPUT_DIR = VAULT / "raw/articles"
FIRECRAWL_URL = "http://localhost:3002/v1/scrape"
AGENT_VERSION = "04.26"

# Under så här många tecken utgår vi från att betalväggen tog texten.
MIN_BODY_CHARS = 400


def die(code: int, msg: str) -> None:
    print(f"FEL: {msg}", file=sys.stderr)
    sys.exit(code)


def obtain_token(force: bool = False) -> str:
    """Hämta giltig bnidtoken - förnyas automatiskt mot Bonnier News."""
    try:
        return refresh_token(verbose=True) if force else get_valid_token(verbose=True)
    except RefreshError as e:
        die(3, f"{e}\nLogga in på dn.se i Firefox och kör sedan om.")


# --------------------------------------------------------------- hämtning

def fetch_html(url: str, token: str) -> str:
    """Hämta artikelsidan med prenumerationscookien satt."""
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8",
            "Cookie": f"bnidtoken={token}",
            "Referer": "https://www.dn.se/",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=45) as resp:
            raw = resp.read()
    except urllib.error.HTTPError as e:
        if e.code in (401, 403):
            return ""          # tolkas som betalvägg -> trigga tokenförnyelse
        die(5, f"DN svarade {e.code}. Artikeln kan vara borttagen.")
    except Exception as e:
        die(4, f"nätverksfel mot dn.se: {type(e).__name__}: {e}")
    return raw.decode("utf-8", errors="replace")


def fetch_via_firecrawl(url: str, token: str) -> str:
    """Fallback: gå via lokal Firecrawl om den råkar vara igång. Tom sträng annars."""
    body = json.dumps({
        "url": url,
        "formats": ["rawHtml"],
        "headers": {"Cookie": f"bnidtoken={token}"},
    })
    try:
        result = subprocess.run(
            ["curl", "-sS", "-m", "120", "-X", "POST", FIRECRAWL_URL,
             "-H", "Content-Type: application/json", "-d", body],
            capture_output=True, text=True, check=True, timeout=130,
        )
        data = json.loads(result.stdout)
    except Exception:
        return ""
    if not data.get("success"):
        return ""
    return data.get("data", {}).get("rawHtml", "") or ""


# ----------------------------------------------------------------- sparning

def slugify(text: str, max_len: int = 80) -> str:
    text = text.lower()
    text = text.replace("å", "a").replace("ä", "a").replace("ö", "o")
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_-]+", "-", text).strip("-")
    return text[:max_len]


def save_article(url: str, title: str, body: str, metadata: dict) -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    today = date.today().isoformat()
    slug = slugify(title) or "dn-artikel"
    path = OUTPUT_DIR / f"{today}-{slug}.md"

    # Undvik överskrivning
    counter = 2
    while path.exists():
        path = OUTPUT_DIR / f"{today}-{slug}-{counter}.md"
        counter += 1

    safe_title = title.replace('"', "'")
    description = (metadata.get("description") or "").replace('"', "'").strip()
    author = (metadata.get("author") or "").strip()
    published = (metadata.get("publishedTime") or "").strip()

    frontmatter = f"""---
created: {today}
updated: {today}
created_by: hamta-dn-artikel
updated_by: hamta-dn-artikel
agent_version: "{AGENT_VERSION}"
type: source
source: Dagens Nyheter
source_url: {url}
title: "{safe_title}"
author: "{author}"
published: "{published}"
retrieved: {today}
description: "{description}"
tags: [artikel, dn, källa]
---

# {title}

"""
    path.write_text(frontmatter + body + "\n", encoding="utf-8")
    return path


# --------------------------------------------------------------------- main

def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    to_stdout = "--stdout" in sys.argv
    if len(args) != 1:
        die(2, "Användning: fetch.py <dn-url> [--stdout]")
    url = args[0].strip()
    if not url.startswith(("https://www.dn.se/", "https://dn.se/")):
        die(2, f"URL måste börja med https://www.dn.se/ eller https://dn.se/ (fick: {url})")

    # Försök 1: lagrad token. Blir texten kort kan token vara död serverside -
    # tvinga då fram en ny och gör om. Först därefter provas Firecrawl.
    html = body = ""
    for attempt, force in enumerate([False, True], start=1):
        token = obtain_token(force=force)
        html = fetch_html(url, token)
        body = html_to_markdown(html) if html else ""
        if len(body) >= MIN_BODY_CHARS:
            break
        if attempt == 1:
            print(f"  Kort text ({len(body)} tecken) - förnyar token och försöker igen...")

    if len(body) < MIN_BODY_CHARS:
        fc_html = fetch_via_firecrawl(url, token)
        if fc_html:
            fc_body = html_to_markdown(fc_html)
            if len(fc_body) > len(body):
                print("  Direktvägen gav kort text - använde Firecrawl-fallback.")
                html, body = fc_html, fc_body

    if len(body) < MIN_BODY_CHARS:
        die(5, f"Artikeltext misstänkt kort ({len(body)} tecken) - betalväggen kan ha "
               f"blockerat. Kontrollera token med: python3 refresh.py --status")

    metadata = article_metadata(html)
    title = (metadata.get("title") or "Okänd titel").strip()

    if to_stdout:
        print(body)
        return

    path = save_article(url, title, body, metadata)
    print(f"✓ Sparad: {path}")
    print(f"  Titel:   {title}")
    if metadata.get("author"):
        print(f"  Skribent: {metadata['author']}")
    print(f"  Storlek: {len(body)} tecken")


if __name__ == "__main__":
    main()
