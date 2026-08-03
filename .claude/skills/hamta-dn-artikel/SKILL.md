---
name: hamta-dn-artikel
description: Hämta paywallade DN-artiklar och bygg automatiskt bearbetat läsmaterial för elever. Kan också leta upp artiklar själv utifrån vilket moment som är aktivt i kurserna. Använd när användaren klistrar in en dn.se-URL och vill spara/arkivera/läsa artikeln, säger "hämta DN-artikel", "spara DN-artikel", "scrapea den här DN-artikeln", eller frågar "hitta artiklar till mitt moment", "finns det nåt i DN som passar", "vad kan jag använda i Sh1b den här veckan". Kräver giltig bnidtoken i .secrets/dn-cookies.json - inga andra tjänster behöver köras.
allowed-tools: Bash, Read, Write
---

# Hämta DN-artikel

Skillen har två lägen.

**Läge A - användaren ger en URL.** Skillen hämtar artikeln med ett rakt HTTP-anrop med `bnidtoken`-cookien, sparar den som källnot i `raw/articles/`, och bearbetar den automatiskt till elevanpassat läsmaterial i `output/lasmaterial/`: röst och utskriven kausalitet, ämnesbegreppen kvar och förklarade, stödapparat runt originalet. Bearbetningen körs efter varje lyckad hämtning om inte användaren säger annat, eftersom många i grupperna möter ämnesspråket som ett andraspråk.

**Läge B - skillen letar själv.** Den läser av vilket moment som är aktivt i varje kurs, skannar DN:s sektionssidor och föreslår artiklar som passar undervisningen. De tre starkaste hämtas och bearbetas direkt, resten listas.

Läge B beskrivs först nedan eftersom det oftast leder in i Läge A.

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

## Läge B: hitta artiklar till det aktiva momentet

Utöver "här är en URL" kan skillen köras baklänges: leta upp artiklar som passar det som faktiskt undervisas just nu. Triggas av "hitta artiklar till mitt moment", "finns det nåt i DN som passar", "vad kan jag använda i Sh1b den här veckan".

### Steg 1: läs av läget och hämta artikellistan

```bash
python3 "${VAULT_BASE_PATH:-/home/anders/Second brain}/.claude/skills/hamta-dn-artikel/hitta-artiklar.py"
```

Ett anrop ger allt: vad som är aktivt i varje grupp, kopplat till respektive momentplan, plus dagens artiklar från `sverige`, `varlden`, `ekonomi` och `politik`. Byt sektioner med `--sektioner ekonomi,kultur` när momentet kräver det.

Källan till kursläget är `output/planering/aktivt.md`. Den filen är sanningskällan, inte ditt minne av tidigare samtal.

**Är momentkolumnen tom** skriver scriptet "INGET AKTIVT MOMENT" till stderr men listar artiklarna ändå. Fråga då användaren vad hen kör, och erbjud att fylla i filen samtidigt - den är avsedd att underhållas.

### Steg 2: bedöm relevans

Scriptet rankar inte. Nyckelordsmatchning missar både det uppenbara och det intressanta, så bedömningen är din.

Läs momentplanen som `momentplan`-fältet pekar på när innehållssignalen i indexet är tunn. Väg sedan varje rubrik mot momentet och fråga:

- **Ger artikeln något momentet faktiskt behöver?** Ett samtida exempel på en mekanism, en konflikt som visar begreppet i bruk, en siffra att räkna på. Att ämnet nuddas räcker inte.
- **Går den att arbeta med?** En artikel som bara refererar ett beslut ger mindre än en som visar aktörer som vill olika saker. Motsättningar är arbetsmaterial.
- **Passar den brottningsfrågan?** När momentet har en, är den det skarpaste filtret. En artikel som gör frågan svårare är bättre än en som bekräftar ett svar.

Undvik rena nyhetsnotiser, personporträtt och recensioner. De ser relevanta ut på rubriken och bär sällan något att undervisa på.

### Steg 3: hämta topp 3, lista resten

Användarens beslut 2026-08-01: **de tre starkaste träffarna hämtas och bearbetas direkt**, utan att fråga. Kör `fetch.py` på var och en och gör läsmaterialet enligt Läge A steg 2.

Presentera därefter resten som en kortlista, fem till åtta rader:

```
Hämtade och bearbetade (3):
  1. <rubrik> - <varför den passar, en rad>
  ...
Övriga träffar - säg till om du vill ha någon:
  4. <rubrik> - <varför den kan passa>
  ...
```

Motiveringen ska knyta an till momentet, inte till artikeln. "Visar hur utsläppsrätter blir en konflikt mellan medlemsländer" är användbart. "Handlar om EU och klimat" är det inte.

Hittar du inte tre som håller måttet, hämta färre och säg varför. Tre svaga artiklar är sämre än en stark.

### Momentindexet

`hitta-artiklar.py` läser `output/planering/momentindex.json`. Bygg om det när momentplaner tillkommit eller ändrats:

```bash
python3 .claude/skills/hamta-dn-artikel/momentindex.py          # bygg om
python3 .claude/skills/hamta-dn-artikel/momentindex.py --lista  # alla moment och kurser
```

Indexet har två fält som scriptet aldrig fyller i: `sokord` och `sektioner`. Fyll dem när du arbetat med ett moment och vet vilka begrepp som är sökbara i nyhetsflödet och vilka sektioner som brukar ge träff. De bevaras vid ombyggnad.

---

## Läge A: hämta en känd URL

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

### Steg 1: rapportera hämtningen

Kort, till användaren:
- Sökväg till den sparade filen
- Titel
- Storlek (antal tecken)

### Steg 2: bygg läsmaterialet

**Detta steg körs automatiskt.** Fråga inte om lov - användaren har beslutat att varje hämtad artikel ska få det (2026-08-01).

Läs `bearbetning.md` i denna mapp och följ proceduren där. Kortfattat:

1. Läs originalet, kartlägg ämnesbegrepp, underförstådd referensram och orsakskedja
2. Bygg stödapparaten: kontextruta, ordlista, läsprocedur
3. Bearbeta texten med röst och utskriven kausalitet - ämnesbegreppen stannar och förklaras
4. Skriv till `output/lasmaterial/` enligt `mall-lasmaterial.md`, med Arkiv-märkningen (`==`, `__`, `»`)
5. Kör obesvarbarhetstestet: sex frågor ställda på originalet, besvarade enbart ur bearbetningen
6. Bygg HTML-versionen: `python3 bygg-html.py "output/lasmaterial/<fil>.md"`
7. Redovisa kontrollresultatet i filen

Varje artikel ger alltså två filer med samma namn: `.md` som arbetsversion i vaultet och `.html` för elevleverans i Arkiv v2.1. **Markdownen är sanningskällan och HTML:en genereras ur den** - skriv aldrig HTML för hand, då glider versionerna isär vid första rättelsen. Ändras bearbetningen, kör om scriptet.

De två versionerna har olika publik och innehåller därför inte samma sak. **Obesvarbarhetstestet skrivs bara i markdownen** - dess tabell besvarar frågor som eleven ska besvara själv under "Efter läsningen". I HTML:en följer bara utfallet med, som en rad i sidfoten om att bearbetningen är kontrollerad. Skriv därför alltid `kontroll: x/6 besvarbara` i frontmattern; den raden är det enda generatorn har att gå på.

Designen ligger i `arkiv-lasmaterial.css` bredvid scriptet, urlyft för att kunna ändras utan att Python rörs. Kör `python3 bygg-html.py --alla` efteråt så slår ändringen igenom på allt befintligt läsmaterial. Sidan har ett mörkt läge i tre steg: läsarens egen knapp i växeln vinner, annars gäller systeminställningen (`prefers-color-scheme`), annars pappersljust. Valet sparas i `localStorage` och sätts i `<head>` innan sidan ritas ut, så ingen bakgrund hinner blinka förbi. Utskrift tvingas alltid till papper.

Bearbetningen görs av dig som modell, inte av `fetch.py`. Skriptet kan inte bedöma vilka begrepp en Sh1b-elev kan eller om ett orsakssamband överlevde.

**Tre regler som aldrig får brytas:**
- Skriv aldrig till `raw/` - det lagret är immutabelt, bearbetningen är en artefakt
- Skriv aldrig om text inom citattecken - ett omskrivet citat tillskriver en verklig människa ord hen inte sagt
- Blev bearbetningen kortare än originalet har du raderat, inte bearbetat - gå tillbaka

**Hoppa över steg 2 när:**
- Användaren säger "bara hämta", "spara bara", "jag vill bara läsa den själv"
- Artikeln uppenbart saknar undervisningsvärde (nöje, sport, recensioner) - fråga då i stället för att anta

### Steg 3: rapportera läsmaterialet

- Sökväg till båda filerna, markdown och HTML
- Vilka ämnesbegrepp som togs upp i ordlistan
- Kontrollresultatet (x/6) och vad som eventuellt fick återställas

Nämn att HTML-filen kan delas med eleverna eller läggas på Google Sites som den är. Den är självständig så när som på fonterna, som hämtas från Google Fonts.

Om användaren ber dig sen läsa/sammanfatta artikeln, läs den sparade filen direkt från `raw/articles/`.

## Säkerhet

- **Aldrig** logga eller skriva ut `bnidtoken`-värdet
- **Aldrig** committa `.secrets/`-mappen (redan gitignored)
- Om token skulle läcka: användaren bör logga ut och in igen på dn.se för att invalidera gammal token

## Forskningsförankring

Bearbetningen är inte "gör texten lättare". Den vilar på `wiki/sources/2026-07-28 Språkanpassning av texter/` och särskilt på fyra noter:

- [[primarkallans-sprak-ar-studieobjektet]] - varför nyhetstext får bearbetas men primärkällor inte
- [[rost-och-kausalitet-utraderade-andrasprakgapet]] - vilka två operationer som faktiskt stängde gapet
- [[reichenberg-forklarar-amnesbegrepp-byter-inte-ut-dem]] - varför begreppen stannar
- [[llm-forenkling-har-en-tyst-felmod]] - varför obesvarbarhetstestet finns

Läs `bearbetning.md` för hela resonemanget. Där står också vad som **inte** är belagt: [[den-direkta-jamforelsen-saknas]] visar att ingen jämfört förenklad text mot originaltext med stöttning. Proceduren är välgrundad, inte bevisad.

## Integration med andra skills

Denna skill producerar markdown-filer som kan konsumeras av:
- `document-insight-extractor` - för att bygga research-bas från DN-artiklar (t.ex. betygsdebatten)
- `create-article` - för att citera DN-källor i artiklar
- `recall` / `search-vault` - för att söka bland sparade artiklar
- `/planera-moment` - läsmaterialet i `output/lasmaterial/` är färdigt att lägga in som lektionsunderlag
