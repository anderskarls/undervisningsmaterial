#!/usr/bin/env python3
"""Automatisk förnyelse av DN:s bnidtoken.

DN redirectar själv stale sessioner till Bonnier News refresh-endpoint:

    https://www.dn.se/  ->  307  ->  https://id.bonniernews.se/refresh/?returnUri=...

Den endpointen svarar med Set-Cookie för bnidtoken (~24h giltig) plus
långlivade bnrefresh/bnauthtoken. Vi lagrar de långlivade och kan därefter
förnya utan browser.

Två vägar, i prioritetsordning:
  1. Lagrade refresh-cookies i .secrets/dn-cookies.json  (ingen browser behövs)
  2. Firefox cookies.sqlite                              (bootstrap/återhämtning)

Kan köras fristående:  python3 refresh.py [--status]

Exit codes: 0 OK | 3 kunde inte förnya (kräver ny inloggning)

Säkerhet: skriver aldrig ut cookie- eller tokenvärden. JWT:n innehåller
namn och e-post - bara utgångstid loggas.
"""
from __future__ import annotations

import base64
import http.cookies
import json
import os
import shutil
import sqlite3
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

VAULT = Path(os.environ.get("VAULT_BASE_PATH", "/home/anders/Second brain"))
COOKIES_PATH = VAULT / ".secrets/dn-cookies.json"
FIREFOX_PROFILE_GLOBS = [
    Path.home() / ".config/mozilla/firefox",
    Path.home() / ".mozilla/firefox",
]
REFRESH_URL = "https://id.bonniernews.se/refresh/?returnUri=https%3A%2F%2Fwww.dn.se%2F"
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0"

# Cookies som behövs för att förnya. bnrefresh är den bärande.
REFRESH_COOKIE_NAMES = {
    "bnrefresh", "bnauthtoken", "bnsessionid", "bnidtoken",
    "bnacid", "bnasid", "bnlocale",
}
# Marginal: förnya innan token faktiskt dör.
RENEW_MARGIN_SECONDS = 15 * 60


class RefreshError(Exception):
    pass


# ---------------------------------------------------------------- JWT-hjälp

def jwt_exp(token: str) -> float:
    """Returnera exp-claim som unix-tid. Kastar vid trasig token."""
    payload = token.split(".")[1]
    payload += "=" * (-len(payload) % 4)
    return float(json.loads(base64.urlsafe_b64decode(payload))["exp"])


def token_is_fresh(token: str, margin: float = RENEW_MARGIN_SECONDS) -> bool:
    try:
        return jwt_exp(token) - margin > time.time()
    except Exception:
        return False


# ------------------------------------------------------------ lagrat tillstånd

def load_state() -> dict:
    if not COOKIES_PATH.exists():
        return {}
    try:
        return json.loads(COOKIES_PATH.read_text())
    except json.JSONDecodeError:
        return {}


def save_state(state: dict) -> None:
    COOKIES_PATH.parent.mkdir(parents=True, exist_ok=True)
    COOKIES_PATH.write_text(json.dumps(state, indent=2, ensure_ascii=False) + "\n")
    os.chmod(COOKIES_PATH, 0o600)


# ------------------------------------------------------------------- Firefox

def firefox_cookies() -> dict:
    """Läs Bonnier/DN-cookies ur Firefox. Tom dict om profil saknas."""
    profile = None
    for root in FIREFOX_PROFILE_GLOBS:
        if not root.is_dir():
            continue
        for cand in sorted(root.glob("*.default*")):
            if (cand / "cookies.sqlite").exists():
                profile = cand / "cookies.sqlite"
                break
        if profile:
            break
    if not profile:
        return {}

    # cookies.sqlite är låst medan Firefox kör - jobba på en kopia.
    tmp = Path(os.environ.get("TMPDIR", "/tmp")) / f"dn-cookies-{os.getpid()}.sqlite"
    try:
        shutil.copy(profile, tmp)
        for ext in ("-wal", "-shm"):
            src = Path(str(profile) + ext)
            if src.exists():
                shutil.copy(src, Path(str(tmp) + ext))
        con = sqlite3.connect(tmp)
        rows = con.execute(
            "select name, value from moz_cookies "
            "where host like '%dn.se%' or host like '%bonnier%'"
        ).fetchall()
        con.close()
        return {n: v for n, v in rows if n in REFRESH_COOKIE_NAMES}
    except Exception:
        return {}
    finally:
        for p in (tmp, Path(str(tmp) + "-wal"), Path(str(tmp) + "-shm")):
            try:
                p.unlink()
            except OSError:
                pass


# ------------------------------------------------------------------- refresh

def call_refresh(cookies: dict) -> dict:
    """Anropa Bonnier News refresh-endpoint. Returnera nya cookies."""
    if not cookies:
        raise RefreshError("inga cookies att förnya med")

    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *args, **kwargs):
            return None

    req = urllib.request.Request(
        REFRESH_URL,
        headers={
            "Cookie": "; ".join(f"{k}={v}" for k, v in cookies.items()),
            "User-Agent": UA,
            "Accept": "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "sv-SE,sv;q=0.9,en;q=0.8",
            "Referer": "https://www.dn.se/",
        },
    )
    opener = urllib.request.build_opener(NoRedirect)
    try:
        resp = opener.open(req, timeout=30)
        headers = resp.headers
    except urllib.error.HTTPError as e:
        headers = e.headers
    except Exception as e:
        raise RefreshError(f"nätverksfel mot refresh-endpoint: {type(e).__name__}") from e

    fresh: dict[str, str] = {}
    for raw in headers.get_all("Set-Cookie") or []:
        jar = http.cookies.SimpleCookie()
        try:
            jar.load(raw)
        except http.cookies.CookieError:
            continue
        for name, morsel in jar.items():
            if name in REFRESH_COOKIE_NAMES and morsel.value:
                fresh[name] = morsel.value

    if "bnidtoken" not in fresh:
        raise RefreshError("refresh-endpoint returnerade ingen bnidtoken")
    if not token_is_fresh(fresh["bnidtoken"], margin=0):
        raise RefreshError("refresh-endpoint returnerade en redan utgången token")
    return fresh


def refresh_token(verbose: bool = True) -> str:
    """Skaffa en färsk bnidtoken och persistera den. Kastar RefreshError."""
    state = load_state()
    stored = {k: v for k, v in (state.get("refresh_cookies") or {}).items() if v}
    if state.get("bnidtoken"):
        stored.setdefault("bnidtoken", state["bnidtoken"])

    attempts = [("lagrade refresh-cookies", stored)]
    ff = firefox_cookies()
    if ff:
        attempts.append(("Firefox", ff))

    errors = []
    for label, cookies in attempts:
        if not cookies:
            continue
        try:
            fresh = call_refresh(cookies)
        except RefreshError as e:
            errors.append(f"{label}: {e}")
            continue

        state["bnidtoken"] = fresh["bnidtoken"]
        # Slå ihop, ersätt inte: endpointen skickar inte tillbaka alla cookies
        # varje varv, och en cookie som tappas kan bryta kedjan nästa gång.
        merged = dict(state.get("refresh_cookies") or {})
        merged.update({k: v for k, v in fresh.items() if k != "bnidtoken"})
        state["refresh_cookies"] = merged
        meta = state.setdefault("_meta", {})
        meta["last_refresh"] = time.strftime("%Y-%m-%d %H:%M:%S")
        meta["refresh_source"] = label
        meta["expires"] = time.strftime(
            "%Y-%m-%d %H:%M:%S", time.localtime(jwt_exp(fresh["bnidtoken"]))
        )
        save_state(state)
        if verbose:
            print(f"✓ Token förnyad via {label} - giltig till {meta['expires']}")
        return fresh["bnidtoken"]

    raise RefreshError(
        "kunde inte förnya token. Försök: " + " | ".join(errors or ["inga cookies alls"])
    )


def get_valid_token(verbose: bool = True) -> str:
    """Returnera en giltig bnidtoken, förnya vid behov."""
    state = load_state()
    token = (state.get("bnidtoken") or "").strip()
    if token and token_is_fresh(token):
        return token
    return refresh_token(verbose=verbose)


def main() -> None:
    if "--status" in sys.argv:
        state = load_state()
        token = (state.get("bnidtoken") or "").strip()
        if not token:
            print("bnidtoken: SAKNAS")
            sys.exit(3)
        try:
            exp = jwt_exp(token)
        except Exception:
            print("bnidtoken: TRASIG")
            sys.exit(3)
        left = exp - time.time()
        status = "GILTIG" if left > 0 else "UTGÅNGEN"
        print(f"bnidtoken: {status} (går ut {time.strftime('%Y-%m-%d %H:%M', time.localtime(exp))}, "
              f"{left / 3600:+.1f}h)")
        print(f"refresh-cookies lagrade: {sorted((state.get('refresh_cookies') or {}).keys()) or 'inga'}")
        print(f"firefox tillgänglig: {'ja' if firefox_cookies() else 'nej'}")
        sys.exit(0 if left > 0 else 3)

    try:
        refresh_token()
    except RefreshError as e:
        print(f"FEL: {e}", file=sys.stderr)
        print(
            "\nDu behöver logga in på nytt: öppna dn.se i Firefox, logga in, "
            "och kör detta kommando igen.",
            file=sys.stderr,
        )
        sys.exit(3)


if __name__ == "__main__":
    main()
