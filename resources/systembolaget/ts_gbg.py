#!/usr/bin/env python3
"""Lista viner i Systembolagets tillfälliga sortiment som finns i Göteborgsbutiker.

Auth: ingen — Systembolagets publika APIM-nyckel extraheras automatiskt från
deras Next.js-bundle vid varje körning.

Exempel:
    python ts_gbg.py                          # alla viner, alla 12 butiker
    python ts_gbg.py --color rött --max-price 200
    python ts_gbg.py --stores 1404,1410 --min-stock 3 --sort price
    python ts_gbg.py --output md --limit 50   # snabb testkörning
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable

import requests

BASE = "https://api-extern.systembolaget.se/sb-api-ecommerce/v1"
ORIGIN = "https://www.systembolaget.se"

GBG_STORES = {
    "1404": "Avenyn",
    "1406": "Kungstorget 1",
    "1407": "Olskroken",
    "1409": "Torpavallsgatan 4",
    "1410": "Nordstan",
    "1411": "Linnégatan 28 B",
    "1412": "Kapellplatsen 4",
    "1413": "Gårda",
    "1414": "Backaplan",
    "1415": "Karl Johansgatan 85",
    "1417": "Eriksberg",
    "1418": "Gamlestaden",
}

COLOR_MAP = {
    "rött": "Rött vin",
    "rod": "Rött vin",
    "red": "Rött vin",
    "vitt": "Vitt vin",
    "white": "Vitt vin",
    "rosé": "Rosévin",
    "rose": "Rosévin",
    "mousserande": "Mousserande vin",
    "sparkling": "Mousserande vin",
    "champagne": "Champagne",
    "starkvin": "Starkvin",
    "dessert": "Dessertvin",
    "alla": None,
    "all": None,
}


def fetch_apim_key(session: requests.Session) -> str:
    """Extrahera den publika APIM-subscription-nyckeln från Systembolagets JS."""
    home = session.get("https://www.systembolaget.se/", timeout=15).text
    chunks = sorted(set(re.findall(r"/_next/static/chunks/[A-Za-z0-9_-]+\.js", home)))
    for path in chunks:
        js = session.get(f"https://www.systembolaget.se{path}", timeout=15).text
        m = re.search(r'NEXT_PUBLIC_API_KEY_APIM:"([a-f0-9]{20,})"', js)
        if m:
            return m.group(1)
    raise RuntimeError("Kunde inte hitta APIM-nyckeln i Systembolagets JS-bundles")


@dataclass
class Wine:
    product_number: str
    name: str
    producer: str
    category2: str  # Rött vin, Vitt vin, etc.
    category3: str  # Friskt & Bärigt, etc.
    country: str
    region: str
    vintage: str | None
    price: float
    volume_ml: float
    alcohol: float
    is_organic: bool
    url: str
    stock: dict[str, int] = field(default_factory=dict)  # siteId -> antal flaskor

    @property
    def total_stock(self) -> int:
        return sum(self.stock.values())

    @property
    def price_per_liter(self) -> float:
        return round(self.price / (self.volume_ml / 1000), 2) if self.volume_ml else 0.0


def fetch_all_ts_wines(session: requests.Session, key: str) -> list[Wine]:
    """Paginera produktsökningen och returnera alla viner i tillfälliga sortimentet."""
    headers = {"Ocp-Apim-Subscription-Key": key, "Origin": ORIGIN, "User-Agent": "ts-gbg/1.0"}
    wines: list[Wine] = []
    page = 1
    while True:
        params = {
            "categoryLevel1": "Vin",
            "assortmentText": "Tillfälligt sortiment",
            "page": page,
            "size": 30,
        }
        r = session.get(f"{BASE}/productsearch/search", params=params, headers=headers, timeout=20)
        r.raise_for_status()
        data = r.json()
        for p in data.get("products", []):
            name = " ".join(filter(None, [p.get("productNameBold"), p.get("productNameThin")]))
            url_slug = p.get("friendlyUrl") or ""
            wines.append(Wine(
                product_number=p["productNumber"],
                name=name.strip(),
                producer=p.get("producerName") or "",
                category2=p.get("categoryLevel2") or "",
                category3=p.get("categoryLevel3") or "",
                country=p.get("country") or "",
                region=p.get("originLevel1") or "",
                vintage=str(p.get("vintage")) if p.get("vintage") else None,
                price=float(p.get("price") or 0),
                volume_ml=float(p.get("volume") or 0),
                alcohol=float(p.get("alcoholPercentage") or 0),
                is_organic=bool(p.get("isOrganic")),
                url=f"{ORIGIN}/produkt/vin/{url_slug}/" if url_slug else "",
            ))
        meta = data.get("metadata", {})
        next_page = meta.get("nextPage", -1)
        total = meta.get("docCount", "?")
        print(f"  hämtade sida {page} ({len(wines)}/{total})", file=sys.stderr, end="\r")
        if next_page <= 0 or next_page == page:
            break
        page = next_page
    print(file=sys.stderr)
    return wines


def fetch_stock(session: requests.Session, key: str, site_id: str, product_no: str) -> int:
    headers = {"Ocp-Apim-Subscription-Key": key, "Origin": ORIGIN, "User-Agent": "ts-gbg/1.0"}
    try:
        r = session.get(
            f"{BASE}/stockbalance/store/{site_id}/{product_no}",
            headers=headers, timeout=15,
        )
        if r.status_code != 200:
            return 0
        data = r.json()
        if not data.get("isInStoreAssortment", False):
            return 0
        return int(data.get("stock") or 0)
    except (requests.RequestException, ValueError):
        return 0


def enrich_with_stock(
    wines: list[Wine],
    session: requests.Session,
    key: str,
    site_ids: list[str],
    workers: int = 15,
) -> None:
    """Fyll på .stock för varje vin × butik. Modifierar vinerna in-place."""
    jobs = [(w, sid) for w in wines for sid in site_ids]
    done = 0
    total = len(jobs)
    t0 = time.time()
    with ThreadPoolExecutor(max_workers=workers) as ex:
        futs = {ex.submit(fetch_stock, session, key, sid, w.product_number): (w, sid)
                for w, sid in jobs}
        for f in as_completed(futs):
            w, sid = futs[f]
            w.stock[sid] = f.result()
            done += 1
            if done % 200 == 0 or done == total:
                rate = done / max(time.time() - t0, 0.01)
                eta = (total - done) / max(rate, 0.01)
                print(f"  lagersaldo {done}/{total} ({rate:.0f}/s, ~{eta:.0f}s kvar)",
                      file=sys.stderr, end="\r")
    print(file=sys.stderr)


def filter_wines(
    wines: Iterable[Wine],
    color: str | None,
    min_price: float,
    max_price: float,
    min_stock: int,
    only_organic: bool,
) -> list[Wine]:
    out = []
    for w in wines:
        if color and w.category2 != color:
            continue
        if not (min_price <= w.price <= max_price):
            continue
        if w.total_stock < min_stock:
            continue
        if only_organic and not w.is_organic:
            continue
        out.append(w)
    return out


def sort_wines(wines: list[Wine], by: str) -> list[Wine]:
    keys = {
        "price": lambda w: w.price,
        "ppl": lambda w: w.price_per_liter,
        "stock": lambda w: -w.total_stock,
        "name": lambda w: w.name.lower(),
        "country": lambda w: (w.country, w.region, w.name.lower()),
    }
    return sorted(wines, key=keys.get(by, keys["price"]))


def write_csv(wines: list[Wine], path: Path, store_ids: list[str]) -> None:
    with path.open("w", newline="", encoding="utf-8") as f:
        cols = [
            "produktnummer", "namn", "producent", "typ", "stil", "land", "region",
            "årgång", "pris", "volym_ml", "kr_per_liter", "alkohol_%", "ekologisk",
            "totalt_lager", *[GBG_STORES[s] for s in store_ids], "url",
        ]
        w = csv.writer(f)
        w.writerow(cols)
        for x in wines:
            w.writerow([
                x.product_number, x.name, x.producer, x.category2, x.category3,
                x.country, x.region, x.vintage or "", x.price, x.volume_ml,
                x.price_per_liter, x.alcohol, "ja" if x.is_organic else "",
                x.total_stock, *[x.stock.get(s, 0) for s in store_ids], x.url,
            ])


def write_md(wines: list[Wine], path: Path, store_ids: list[str]) -> None:
    with path.open("w", encoding="utf-8") as f:
        f.write(f"# Tillfälliga sortimentet — Göteborg ({len(wines)} viner)\n\n")
        f.write(f"_Genererat {time.strftime('%Y-%m-%d %H:%M')}._\n\n")
        for x in wines:
            stock_parts = [f"{GBG_STORES[s]} ({x.stock[s]})"
                          for s in store_ids if x.stock.get(s, 0) > 0]
            f.write(f"## {x.name}  \n")
            meta = [x.category2, x.country]
            if x.region: meta.append(x.region)
            if x.vintage: meta.append(x.vintage)
            if x.is_organic: meta.append("ekologisk")
            f.write(f"_{' · '.join(meta)}_  \n")
            f.write(f"**{x.price:.0f} kr** · {x.volume_ml:.0f} ml · {x.alcohol:.1f}% · "
                   f"{x.price_per_liter:.0f} kr/L  \n")
            f.write(f"Lager: {', '.join(stock_parts) if stock_parts else '(slut)'}  \n")
            if x.url:
                f.write(f"[{x.product_number}]({x.url})\n\n")
            else:
                f.write(f"`{x.product_number}`\n\n")


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--color", default="alla",
                   help=f"Vinttyp: {', '.join(sorted(set(k for k in COLOR_MAP)))}")
    p.add_argument("--min-price", type=float, default=0)
    p.add_argument("--max-price", type=float, default=1e9)
    p.add_argument("--min-stock", type=int, default=1,
                   help="Min antal flaskor totalt över valda butiker (default: 1)")
    p.add_argument("--stores", default=",".join(GBG_STORES),
                   help="Komma-separerade siteIds. Default: alla 12 Gbg-butiker")
    p.add_argument("--only-organic", action="store_true")
    p.add_argument("--sort", default="price",
                   choices=["price", "ppl", "stock", "name", "country"])
    p.add_argument("--limit", type=int, default=0,
                   help="Slumpa N viner före lagerkoll (för snabb test)")
    p.add_argument("--workers", type=int, default=15, help="Parallella HTTP-trådar")
    p.add_argument("--output", default="both", choices=["csv", "md", "both"])
    p.add_argument("--outdir", default=str(Path(__file__).parent / "output"))
    p.add_argument("--cache", action="store_true",
                   help="Använd vinlistans cache om den finns (max 24h)")
    args = p.parse_args()

    if args.color not in COLOR_MAP:
        p.error(f"--color måste vara en av: {sorted(COLOR_MAP)}")
    color = COLOR_MAP[args.color]
    store_ids = [s.strip() for s in args.stores.split(",") if s.strip()]
    bad = [s for s in store_ids if s not in GBG_STORES]
    if bad:
        p.error(f"Okända siteId: {bad}. Giltiga: {sorted(GBG_STORES)}")

    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    cache_path = outdir / "ts_wines_cache.json"

    session = requests.Session()
    print("1/4 hämtar APIM-nyckel från systembolaget.se ...", file=sys.stderr)
    key = fetch_apim_key(session)
    print(f"     nyckel: {key[:8]}...", file=sys.stderr)

    print("2/4 hämtar viner i tillfälliga sortimentet ...", file=sys.stderr)
    if args.cache and cache_path.exists() and (time.time() - cache_path.stat().st_mtime) < 86400:
        wines = [Wine(**w) for w in json.loads(cache_path.read_text())]
        print(f"     använder cache ({len(wines)} viner)", file=sys.stderr)
    else:
        wines = fetch_all_ts_wines(session, key)
        cache_path.write_text(json.dumps([{**w.__dict__} for w in wines],
                                          ensure_ascii=False, indent=2))
        print(f"     {len(wines)} viner hittade · cache sparad", file=sys.stderr)

    if args.limit:
        import random
        random.seed(42)
        wines = random.sample(wines, min(args.limit, len(wines)))
        print(f"     limit aktiv: {len(wines)} viner", file=sys.stderr)

    print(f"3/4 hämtar lagersaldo för {len(wines)} viner × {len(store_ids)} butiker "
          f"= {len(wines) * len(store_ids)} anrop ...", file=sys.stderr)
    enrich_with_stock(wines, session, key, store_ids, workers=args.workers)

    print("4/4 filtrerar och sorterar ...", file=sys.stderr)
    wines = filter_wines(wines, color, args.min_price, args.max_price,
                         args.min_stock, args.only_organic)
    wines = sort_wines(wines, args.sort)

    stamp = time.strftime("%Y-%m-%d")
    label = args.color if args.color != "alla" else "alla"
    base = outdir / f"ts-gbg-{label}-{stamp}"
    if args.output in ("csv", "both"):
        write_csv(wines, base.with_suffix(".csv"), store_ids)
        print(f"  -> {base.with_suffix('.csv')}", file=sys.stderr)
    if args.output in ("md", "both"):
        write_md(wines, base.with_suffix(".md"), store_ids)
        print(f"  -> {base.with_suffix('.md')}", file=sys.stderr)

    print(f"\nKlart: {len(wines)} viner matchar filtren.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
