---
name: hamta-dn-artikel
description: Hämta och spara en paywallad DN-artikel som markdown i kunskapsbasen. Använd denna skill när användaren klistrar in en dn.se-URL och vill spara/arkivera/läsa artikeln, eller säger "hämta DN-artikel", "spara DN-artikel", "scrapea den här DN-artikeln", "ladda ner DN-artikel". Kräver giltig bnidtoken i .secrets/dn-cookies.json - inga andra tjänster behöver köras.
allowed-tools: Bash, Read
---

# Hämta DN-artikel

Denna skill hämtar en paywallad DN-artikel med ett rakt HTTP-anrop med användarens `bnidtoken`-cookie och sparar resultatet som en källnot i `raw/articles/`.

**Ingenting behöver startas först.** Skillen körde tidigare via en lokal Firecrawl-container; den kopplades bort 2026-08-01 sedan det visat sig att DN gaterar serverside - skickas cookien levereras brödtexten direkt i HTML:en, utan headless browser.

## När skillen ska triggas

- Användaren klistrar in en URL som börjar med `https://www.dn.se/` eller `https://dn.se/` och säger hämta/spara/läs/scrapea/arkivera
- Användaren säger "hämta DN-artikel", "spara DN-artikel", "scrapea artikeln"
- Användaren refererar till en DN-artikel de vill läsa men inte kan komma åt i sin browser just nu

## Förutsättningar

Bara en sak behöver vara på plats:

1. **Giltig `bnidtoken` i `.secrets/dn-cookies.json`** - detta sköts automatiskt.
   - `fetch.py` anropar `refresh.py` före varje hämtning och förnyar token vid behov.
   - Kontrollera läget: `python3 refresh.py --status`
   - Förnya manuellt: `python3 refresh.py`

### Hur den automatiska förnyelsen fungerar

DN redirectar själv stale sessioner till Bonnier News refresh-endpoint:

```
https://www.dn.se/  ->  307  ->  https://id.bonniernews.se/refresh/?returnUri=...
```

Endpointen svarar med `Set-Cookie: bnidtoken` (~24h) plus långlivade `bnrefresh`/`bnauthtoken`.
`refresh.py` provar i tur och ordning:

1. Lagrade refresh-cookies i `.secrets/dn-cookies.json` - ingen browser behövs
2. Firefox `cookies.sqlite` (`~/.config/mozilla/firefox/*.default*/`) - bootstrap och återhämtning

### VIKTIGT: `bnrefresh` roterar

Refresh-token är en engångstoken. Används en redan förbrukad `bnrefresh` tolkar Bonnier
det som replay och **loggar ut hela sessionen** (redirect till `/bn/id/after-logout`).

Konsekvens: bara **en** konsument kan äga kedjan. Läser du DN i samma Firefox-profil som
skriptet bootstrappade från kommer de förr eller senare att slå ut varandra. Händer det:
logga in på dn.se i Firefox igen och kör `python3 refresh.py` en gång för att ta om kedjan.
Vill du slippa krocken helt - läs DN i en annan browser/profil än den skriptet läser från.

## Körning

Kör helper-scriptet med URL:en som argument:

```bash
python3 "${VAULT_BASE_PATH:-/home/anders/Second brain}/.claude/skills/hamta-dn-artikel/fetch.py" "<dn-url>"
```

Lägg till `--stdout` för att skriva artikeln till terminalen i stället för att spara den.

Scriptet:
1. Läser `bnidtoken` från `.secrets/dn-cookies.json`, förnyar den vid behov
2. Hämtar artikelsidan över HTTP med cookien satt
3. Extraherar brödtexten ur `div.article__content` (`extract.py`) och gör markdown
4. Läser titel, ingress, datum och skribent ur sidans ld+json / byline
5. Genererar YAML-frontmatter och sparar till `raw/articles/YYYY-MM-DD-slug.md`

### DN:s två betalväggar

| Typ | Beteende | Konsekvens |
|-----|----------|------------|
| Mjuk | Brödtexten serverrenderas åt alla; låsöverlägget läggs på av JavaScript | Går att hämta även utan cookie |
| Hård | Brödtexten utelämnas ur HTML:en för utloggade | Kräver giltig `bnidtoken` |

Verifierat 2026-08-01 mot sju artiklar i debatt, ekonomi, sport och världen - båda typerna förekommer, och båda fungerar med cookien.

### Firecrawl som fallback

`fetch.py` provar Firecrawl på `localhost:3002` **bara** om direktvägen ger under 400 tecken *och* containern råkar vara igång. I normalfallet anropas den aldrig, och den behöver inte startas. Skulle DN lägga om till klientrendering är fallbacken redan på plats - starta den då med `cd /home/anders/firecrawl && docker compose up -d`.

## Exit codes och felhantering

| Exit | Betydelse | Åtgärd |
|------|-----------|--------|
| 0 | OK, artikel sparad | Rapportera sökvägen till användaren |
| 2 | Ogiltig URL eller saknat argument | Be användaren ge en dn.se-URL |
| 3 | Token kunde inte förnyas automatiskt | Sessionen är slut - be användaren logga in på dn.se i Firefox, kör sedan `python3 refresh.py` |
| 4 | Nätverksfel mot dn.se | Kontrollera internetanslutningen |
| 5 | DN svarade med fel, eller extraherad text misstänkt kort (<400 tecken) | Troligen token-problem - kör `python3 refresh.py --status` |

Vid **exit 3** har både lagrade refresh-cookies och Firefox-kedjan slutat gälla. Be användaren:
1. Logga in på dn.se i Firefox
2. Kör `python3 .claude/skills/hamta-dn-artikel/refresh.py`

DevTools-kopiering behövs inte längre - den vägen är ersatt av refresh-endpointen.

## Efter lyckad hämtning

Rapportera kort till användaren:
- Sökväg till den sparade filen
- Titel
- Storlek (antal tecken)

Om användaren ber dig sen läsa/sammanfatta artikeln, läs den sparade filen direkt från `raw/articles/`.

## Säkerhet

- **Aldrig** logga eller skriva ut `bnidtoken`-värdet
- **Aldrig** committa `.secrets/`-mappen (redan gitignored)
- Om token skulle läcka: användaren bör logga ut och in igen på dn.se för att invalidera gammal token

## Integration med andra skills

Denna skill producerar markdown-filer som kan konsumeras av:
- `document-insight-extractor` — för att bygga research-bas från DN-artiklar (t.ex. betygsdebatten)
- `create-article` — för att citera DN-källor i artiklar
- `recall` / `search-vault` — för att söka bland sparade artiklar
