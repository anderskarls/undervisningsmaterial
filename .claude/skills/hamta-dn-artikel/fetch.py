#!/usr/bin/env python3
"""Hämta paywallade DN-artiklar via lokal Firecrawl + bnidtoken-cookie.

Användning: python3 fetch.py <dn-url>

Exit codes:
  0  OK - artikel sparad
  2  Felaktigt argument / ogiltig URL
  3  bnidtoken har gått ut - behöver förnyas
  4  Firecrawl/nätverksfel
  5  DN svarade med fel (ej paywall)
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from refresh import RefreshError, get_valid_token, refresh_token  # noqa: E402

VAULT = Path("/home/anders/Second brain")
OUTPUT_DIR = VAULT / "raw/articles"
FIRECRAWL_URL = "http://localhost:3002/v1/scrape"


def die(code: int, msg: str) -> None:
    print(f"FEL: {msg}", file=sys.stderr)
    sys.exit(code)


def obtain_token(force: bool = False) -> str:
    """Hämta giltig bnidtoken - förnyas automatiskt mot Bonnier News."""
    try:
        return refresh_token(verbose=True) if force else get_valid_token(verbose=True)
    except RefreshError as e:
        die(3, f"{e}\nLogga in på dn.se i Firefox och kör sedan om.")


def scrape(url: str, token: str) -> dict:
    body = json.dumps({
        "url": url,
        "formats": ["markdown"],
        "headers": {"Cookie": f"bnidtoken={token}"},
        "onlyMainContent": True,
    })
    try:
        result = subprocess.run(
            ["curl", "-sS", "-X", "POST", FIRECRAWL_URL,
             "-H", "Content-Type: application/json",
             "-d", body],
            capture_output=True, text=True, check=True, timeout=120,
        )
    except subprocess.CalledProcessError as e:
        die(4, f"Firecrawl curl misslyckades: {e.stderr}")
    except subprocess.TimeoutExpired:
        die(4, "Firecrawl timeout (120s)")
    try:
        data = json.loads(result.stdout)
    except json.JSONDecodeError:
        die(4, f"Firecrawl returnerade ogiltig JSON: {result.stdout[:200]}")
    if not data.get("success"):
        die(4, f"Firecrawl misslyckades: {data.get('error', data)}")
    return data["data"]


BOILERPLATE_PATTERNS = [
    r"^\s*SparaSparad\s*$",
    r"^\s*Dela\s*$",
    r"^\s*Hoppsan!\s*$",
    r"^-+\s*$",  # "----" markdown underlines (när isolerade rader)
    r"^\s*Något gick fel\. Testa gärna igen\.\s*$",
    r"^\s*OK, stäng\s*$",
    r"^\s*Bild \d+ av \d+\s*$",
    r"^\[\]\(https://facebook\.com/sharer.*\)\s*$",
    r"^\[\]\(mailto:.*\)\s*$",
    r"^\[\]\(https://www\.dn\.se/.*#\)\s*$",
    r"^\[\]\(https://twitter\.com.*\)\s*$",
    r"^\[\]\(https://x\.com.*\)\s*$",
]


def extract_article_body(markdown: str) -> str:
    """Klipp ut huvudartikeln genom att hitta DN:s utskriftsmarkör och 'Relaterade artiklar'.

    DN inkluderar 'En utskrift från Dagens Nyheter' före varje artikel när
    onlyMainContent är aktivt. Huvudartikeln börjar där och slutar vid
    'Relaterade artiklar' eller nästa 'En utskrift'-markör.

    Efter avgränsning strippas kända boilerplate-rader (share-knappar,
    'Hoppsan!'-modal, bildräknare) med regex.
    """
    start_marker = "En utskrift från Dagens Nyheter"
    first = markdown.find(start_marker)
    if first == -1:
        body = markdown
    else:
        second = markdown.find(start_marker, first + len(start_marker))
        body = markdown[first:second] if second != -1 else markdown[first:]

    end_markers = [
        "\nRelaterade artiklar\n",
        "\nFå ut ännu mer av DN\n",
        "\nFå ut mer av DN\n",
        "\n### Få ut mer av DN",
    ]
    for marker in end_markers:
        idx = body.find(marker)
        if idx != -1:
            body = body[:idx]

    compiled = [re.compile(p) for p in BOILERPLATE_PATTERNS]
    kept = []
    for line in body.split("\n"):
        if any(p.match(line) for p in compiled):
            continue
        kept.append(line)

    cleaned = "\n".join(kept)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
    return cleaned.strip()


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
    author = (metadata.get("author") or metadata.get("ogAuthor") or "").strip()
    published = (metadata.get("publishedTime") or metadata.get("articlePublishedTime") or "").strip()

    frontmatter = f"""---
created: {today}
updated: {today}
created_by: hamta-dn-artikel
updated_by: hamta-dn-artikel
agent_version: "03.26"
type: artikel
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


def main() -> None:
    if len(sys.argv) != 2:
        die(2, "Användning: fetch.py <dn-url>")
    url = sys.argv[1].strip()
    if not url.startswith(("https://www.dn.se/", "https://dn.se/")):
        die(2, f"URL måste börja med https://www.dn.se/ eller https://dn.se/ (fick: {url})")

    # Första försöket med lagrad/förnyad token. Ser resultatet paywallat ut
    # kan token ha hunnit dö serverside - tvinga då fram en ny och gör om.
    body = ""
    data: dict = {}
    for attempt, force in enumerate([False, True], start=1):
        token = obtain_token(force=force)
        data = scrape(url, token)

        status = data.get("metadata", {}).get("statusCode")
        if status and status >= 400:
            if attempt == 1:
                print(f"  DN svarade {status} - förnyar token och försöker igen...")
                continue
            die(5, f"DN svarade {status}. Artikeln kan vara borttagen.")

        markdown = data.get("markdown", "")
        body = extract_article_body(markdown) if markdown else ""
        if len(body) >= 200:
            break
        if attempt == 1:
            print(f"  Kort text ({len(body)} tecken) - förnyar token och försöker igen...")
            continue
        die(5, f"Artikeltext misstänkt kort ({len(body)} tecken) - paywall kan ha blockerat")

    metadata = data.get("metadata", {})
    title = (metadata.get("title") or "Okänd titel").strip()
    path = save_article(url, title, body, metadata)

    print(f"✓ Sparad: {path}")
    print(f"  Titel:   {title}")
    print(f"  Storlek: {len(body)} tecken")


if __name__ == "__main__":
    main()
