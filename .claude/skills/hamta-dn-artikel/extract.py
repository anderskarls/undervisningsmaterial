#!/usr/bin/env python3
"""Extrahera brödtext och metadata ur en DN-artikelsida (rå HTML -> markdown).

DN har en *mjuk* betalvägg: hela brödtexten serverrenderas även för utloggade,
och låsöverlägget läggs på av JavaScript i browsern. Därför behövs varken
headless browser eller Firecrawl - en rak HTTP-förfrågan med bnidtoken räcker.

Artikeln sitter i en eller flera <div class="article__content">. DN pekar
själv ut containern i sin ld+json (hasPart -> cssSelector: ".article__content"),
så vi följer sidans egen markering i stället för att gissa med textmarkörer.

Kan köras fristående för felsökning:
    python3 extract.py <fil.html>
"""
from __future__ import annotations

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

# Containers vars innehåll utgör artikeln.
CAPTURE_CLASSES = ("article__content",)

# Subträd som aldrig ska med i brödtexten.
SKIP_TAGS = {"script", "style", "svg", "button", "form", "noscript", "iframe", "aside"}
SKIP_CLASS_PATTERNS = (
    "article__tools",
    "ds-text-btn",
    "ds-share",
    "ds-ad",
    "article__related",
    "article__tags",
    "ds-byline__actions",
    "article__teaser",
    "ds-newsletter",
    "premium-box",
    "paywall",
    "login-infobox",      # "Få ut mer av DN som inloggad"-rutan
    "ds-modal",
    "slideshow",          # bildgalleri som dubblerar artikelbilderna sist
    "article__print-copyright",
    "visually-hidden",
    "article__footer",
    "ds-correction-notice",   # "Har du upptäckt ett fel?"-widgeten (ej faktarutan "Rättelse")
    "tags__",                 # "Ämnen i artikeln"
    "bylines",                # plockas separat till frontmattern
)

# Block som markerar att artikeln är slut - allt härefter kapas.
END_BLOCK_PREFIXES = (
    "Läs fler artiklar från",
    "Läs mer:",
    "Har du upptäckt ett fel",
    "## Ämnen i artikeln",
)

BLOCK_TAGS = {"p", "h1", "h2", "h3", "h4", "li", "figcaption", "div", "section"}


def _classes(attrs: dict) -> str:
    return attrs.get("class", "") or ""


class _DNParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.blocks: list[str] = []
        self.buf: list[str] = []
        self.capture_depth = 0   # >0 = vi står inne i en artikelcontainer
        self.skip_depth = 0      # >0 = vi står inne i ett bortvalt subträd
        self.depth = 0
        self._capture_stack: list[int] = []
        self._skip_stack: list[int] = []
        self._quote_stack: list[int] = []
        self._list_stack: list[int] = []
        self.in_quote = 0
        self.in_list = 0

    # ---------------------------------------------------------- blockhantering
    def _flush(self) -> None:
        text = "".join(self.buf)
        self.buf.clear()
        text = re.sub(r"[ \t]+", " ", text).strip()
        if not text:
            return
        if self.in_quote:
            text = "> " + text
        elif self.in_list:
            text = "- " + text
        if self.blocks and self.blocks[-1] == text:
            return  # DN dubblerar ibland lead-stycket
        self.blocks.append(text)

    # ------------------------------------------------------------------ taggar
    def handle_starttag(self, tag: str, attrs_list) -> None:
        attrs = {k: (v or "") for k, v in attrs_list}
        self.depth += 1

        if self.skip_depth:
            return

        cls = _classes(attrs)
        if tag in SKIP_TAGS or any(p in cls for p in SKIP_CLASS_PATTERNS):
            self.skip_depth = self.depth
            self._skip_stack.append(self.depth)
            return

        if any(c in cls for c in CAPTURE_CLASSES):
            self._capture_stack.append(self.depth)
            self.capture_depth = len(self._capture_stack)
            self._flush()
            return

        if not self.capture_depth:
            return

        if tag in BLOCK_TAGS:
            self._flush()
        if tag == "blockquote":
            self._flush()
            self._quote_stack.append(self.depth)
            self.in_quote = len(self._quote_stack)
        elif tag in ("ul", "ol"):
            self._flush()
            self._list_stack.append(self.depth)
            self.in_list = len(self._list_stack)
        elif tag in ("h1", "h2", "h3", "h4"):
            self.buf.append("## " if tag in ("h1", "h2") else "### ")
        elif tag in ("strong", "b"):
            self.buf.append("**")
        elif tag in ("em", "i"):
            self.buf.append("*")
        elif tag == "br":
            self.buf.append(" ")
        elif tag == "a":
            href = attrs.get("href", "")
            self.buf.append("[")
            self._href = href
        elif tag == "img":
            src = attrs.get("src") or attrs.get("data-src") or ""
            if src and not src.startswith("data:"):
                self._flush()
                self.blocks.append(f"![]({src})")

    def handle_endtag(self, tag: str) -> None:
        if self._skip_stack and self.depth <= self._skip_stack[-1]:
            self._skip_stack.pop()
            self.skip_depth = self._skip_stack[-1] if self._skip_stack else 0
            self.depth -= 1
            return

        if not self.skip_depth and self.capture_depth:
            if tag in ("strong", "b"):
                self.buf.append("**")
            elif tag in ("em", "i"):
                self.buf.append("*")
            elif tag == "a":
                href = getattr(self, "_href", "")
                self.buf.append(f"]({href})" if href else "]")
            elif tag in BLOCK_TAGS or tag == "blockquote":
                self._flush()

        if self._quote_stack and self.depth <= self._quote_stack[-1]:
            self._flush()
            self._quote_stack.pop()
            self.in_quote = len(self._quote_stack)
        if self._list_stack and self.depth <= self._list_stack[-1]:
            self._flush()
            self._list_stack.pop()
            self.in_list = len(self._list_stack)
        if self._capture_stack and self.depth <= self._capture_stack[-1]:
            self._flush()
            self._capture_stack.pop()
            self.capture_depth = len(self._capture_stack)

        self.depth -= 1

    def handle_data(self, data: str) -> None:
        if self.capture_depth and not self.skip_depth:
            self.buf.append(data)


# ------------------------------------------------------------------ metadata

def article_metadata(html: str) -> dict:
    """Plocka metadata ur sidans ld+json NewsArticle + <title>."""
    meta: dict = {}
    for m in re.finditer(
        r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S
    ):
        try:
            data = json.loads(m.group(1))
        except json.JSONDecodeError:
            continue
        for item in (data if isinstance(data, list) else [data]):
            if not isinstance(item, dict) or item.get("@type") != "NewsArticle":
                continue
            meta["title"] = (item.get("headline") or "").strip()
            meta["description"] = (item.get("description") or "").strip()
            meta["publishedTime"] = (item.get("datePublished") or "").strip()
            meta["modifiedTime"] = (item.get("dateModified") or "").strip()
            meta["paywalled"] = item.get("isAccessibleForFree") is False
            author = item.get("author")
            if isinstance(author, dict):
                meta["author"] = (author.get("name") or "").strip()
            elif isinstance(author, list):
                names = [a.get("name", "") for a in author if isinstance(a, dict)]
                meta["author"] = ", ".join(n for n in names if n)

    if not meta.get("title"):
        m = re.search(r"<title[^>]*>(.*?)</title>", html, re.S)
        if m:
            meta["title"] = re.sub(r"\s+", " ", m.group(1)).strip()
    if not meta.get("author"):
        meta["author"] = byline_author(html)
    return meta


def byline_author(html: str) -> str:
    """Plocka skribentnamnet ur DN:s byline-block längst ned i artikeln.

    Blocket ser ut ungefär så här efter taggstrippning:
        "Text  Filip Johnsson,  professor i energisystem, Chalmers, ...  Dela"
    Vi vill ha namnet, inte titeln - alltså fram till första kommatecknet.
    """
    m = re.search(
        r'class="[^"]*bylines__alternate-byline[^"]*"[^>]*>(.*?)</div>', html, re.S
    )
    if not m:
        return ""
    text = re.sub(r"<[^>]+>", " ", m.group(1))
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"^(Text|Foto|Bild)\s+", "", text)   # rollprefix
    name = text.split(",")[0].strip()
    return name if 2 <= len(name) <= 60 else ""


def html_to_markdown(html: str) -> str:
    p = _DNParser()
    p.feed(html)
    p._flush()

    blocks = []
    for b in p.blocks:
        if any(b.lstrip("*# ").startswith(e.lstrip("*# ")) for e in END_BLOCK_PREFIXES):
            break
        blocks.append(b)

    body = "\n\n".join(blocks)
    body = re.sub(r"\*\*\s*\*\*", "", body)      # tomma fetstilar
    body = re.sub(r"\[\]\(\s*\)", "", body)      # tomma länkar
    body = re.sub(r" +([,.])", r"\1", body)      # blanksteg före skiljetecken
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body.strip()


def main() -> None:
    if len(sys.argv) != 2:
        print("Användning: extract.py <fil.html>", file=sys.stderr)
        sys.exit(2)
    html = Path(sys.argv[1]).read_text(encoding="utf-8", errors="replace")
    meta = article_metadata(html)
    body = html_to_markdown(html)
    print(json.dumps(meta, ensure_ascii=False, indent=2))
    print("-" * 60)
    print(body)


if __name__ == "__main__":
    main()
