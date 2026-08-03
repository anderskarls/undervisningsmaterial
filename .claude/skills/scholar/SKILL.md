---
name: scholar
description: Akademisk sökning mot öppna API:er - OpenAlex, Crossref, ERIC, DiVA, Libris och Unpaywall. Framåtcitering ("vem har citerat den här studien sedan dess och sa att den inte håller"), exakt citeringsmetadata, laglig öppen fulltext, svenska avhandlingar. Använd när ett påstående ska spåras till sin primärkälla, när du vill veta om ett fynd replikerats eller motsagts, eller när nordisk ämnesdidaktisk litteratur ska hittas. Anropas av /deep-research. Ingen webbläsare, ingen inloggning, kan köras parallellt.
argument-hint: '[sökfråga, eller "citerad-av <titel|DOI>", eller "fulltext <DOI>"]'
allowed-tools: Bash, Read, Write, Grep, Glob, WebFetch
---

# Scholar

Akademisk sökning genom `resources/scholar-api/scholar.py` - en CLI mot sex öppna API:er. Ingen webbläsare, ingen inloggning, ingen CAPTCHA, inga API-nycklar. **Flera agenter kan köra den samtidigt.**

Detta är inte Google Scholar och ska inte presenteras som det. Scholar har ingen API; det som finns här är den strukturerade litteraturdatan bakom, och för verifieringsarbete är den bättre - men den räknar annorlunda. Se "Vad datan inte är" nedan.

**Indata:** `$ARGUMENTS`

---

## Kommandon

Kör från vaultroten. Lägg `--json` **före** kommandot när utdatan ska läsas maskinellt.

```bash
S="resources/scholar-api/scholar.py"

python3 $S sok "historical thinking instruction" --antal 10 --fran-ar 2015
python3 $S citerad-av "Principles of Instruction" --fran-ar 2021
python3 $S metadata 10.3102/0034654307313795
python3 $S fulltext 10.3102/0034654307313795
python3 $S eric "source work history classroom" --antal 10
python3 $S diva "historiedidaktik gymnasiet" --antal 10
python3 $S libris "historiedidaktik"
python3 $S dubbletter "Basic Principles of Curriculum and Instruction"
python3 $S --json sok "formative assessment" --antal 20
```

| Kommando | Källa | Vad det ger |
|----------|-------|-------------|
| `sok` | OpenAlex | Verk med citeringsantal, år, OA-status. Söker i titel och sammanfattning; `--fulltext` vidgar till hela artikeltexten och blir mycket bruskigare |
| `citerad-av` | OpenAlex | **Framåtcitering.** Skillens skarpaste verktyg |
| `metadata` | OpenAlex + Crossref | Exakt citering från två oberoende register. Skiljer de sig är det ett fynd |
| `fulltext` | Unpaywall | Laglig öppen version per DOI |
| `eric` | ERIC | Utbildningsforskningens egen databas, med peer review-flagga |
| `diva` | DiVA | Svenska avhandlingar, uppsatser och Nordidactica-artiklar |
| `libris` | Libris | Svenska nationalbibliografin - böcker, som de andra saknar |
| `dubbletter` | OpenAlex | Alla poster för samma verk plus summerade citeringar |

Flaggor: `--antal`, `--fran-ar`, `--till-ar`, `--oa`, `--typ`, `--sortera`, `--json`.

---

## Att välja källa

Fel källa ger tomt resultat som ser ut som ett fynd. Det är den vanligaste felkällan här.

| Frågan | Källa |
|--------|-------|
| Har detta fynd hållit sedan dess? | `citerad-av` |
| Vad säger internationell utbildningsforskning? | `eric` först, sedan `sok` |
| Vad har gjorts i Sverige och Norden? | `diva`. OpenAlex indexerar svenska avhandlingar dåligt |
| Vad står i den svenska läromedels- och facklitteraturen? | `libris` - böcker saknas i de övriga |
| Stämmer den här citeringen? | `metadata` |
| Kommer jag åt texten lagligt? | `fulltext` |

Är frågan svensk och ämnesdidaktisk: kör `diva` och `eric` **parallellt** och jämför. De överlappar nästan inte alls.

---

## citerad-av - så läses resultatet

Detta är skillens skäl att finnas. `WebSearch` hittar vad som skrivits *om* en studie; bara framåtcitering visar vad som byggt *på* den.

Kommandot slår automatiskt ihop dubblettposter av samma verk. Gör det inte det underräknas citeringarna systematiskt - Tylers *Basic Principles* ligger i fyra OpenAlex-poster med 3041, 1566, 705 och 410 citeringar. Den som läser den högsta missar 47 procent.

**En framåtciteringslista är inte en lista över stöd.** Läs sammanfattningarna och sortera träffarna i fyra fack:

- **Replikeringar**, lyckade och misslyckade. En misslyckad replikering väger tyngre än tjugo bekräftande citeringar
- **Metaanalyser** som inkluderar studien. De har nästan alltid en annan effektstorlek än originalet, och det är den som gäller
- **Metodkritik** - artiklar som citerar studien för att invända mot den. Sök efter "response to", "comment on", "revisited", "reconsidered" i titlarna
- **Ritualcitering** - nämns i inledningen, används aldrig. Det vanligaste utfallet, och det betyder ingenting

Redovisa vilket fack träffarna föll i. "Citerad 327 gånger" utan den läsningen är ett meningslöst tal.

Två flaggor som gör jobbet: `--fran-ar` för att bara se vad som kommit **efter** studien du prövar, och `--sortera publication_date:desc` för att se det allra senaste först i stället för det mest citerade.

---

## Vad datan inte är

Skriv aldrig något som förutsätter motsatsen.

**Citeringsantalen är inte Google Scholars.** OpenAlex ger Rosenshine 2012 **327** citeringar; Scholar ger flera tusen. Skillnaden är verklig och systematisk: Scholar räknar allt - lärarhandledningar, uppsatser, bloggar - medan OpenAlex bygger på indexerade referenslistor. För verifieringsarbete är OpenAlex-talet det du vill ha, men det får aldrig kallas "Scholar-siffran" eller jämföras med en sådan.

**Praktikerlitteratur underrepresenteras.** Ett fynd som är stort i lärarrummet och litet i tidskrifterna ser litet ut här. Det är precis vad Praktikern-lensen finns för att fånga.

**Citeringsantal är inte kvalitet.** Det mäter uppmärksamhet. En hårt citerad studie kan vara hårt citerad för att den är fel - Sweller-svaret i exemplet ovan är just det.

**Peer review-status måste avgöras separat.** OpenAlex indexerar preprints, rapporter och kapitel utan att alltid märka dem. ERIC har en explicit `granskad`-flagga; DiVA har `Reviewed`. Använd dem.

**Registren är inte överens.** OpenAlex daterar Sweller-svaret till 2023, Crossref till 2024. Kör `metadata` när årtalet bär vikt, och rapportera skillnaden i stället för att välja tyst.

---

## Fulltext

`fulltext` frågar Unpaywall efter en **laglig** öppen version. Finns ingen är rätt svar att texten inte gick att nå - i verifieringen blir det domen `OVERIFIERAT`, och den domen är hederlig.

Innan du ger upp: `diva` för svenska verk (fulltextlänk följer med i träffen), `eric` för amerikansk utbildningsforskning (ED-nummer är nästan alltid fria), och forskarens egen institutionssida.

**Inga skuggbibliotek.** Sci-Hub och liknande används inte här och ska inte föreslås.

---

## Vakter

- **Tomma fält är tomma.** Svarar API:et inte med ett årtal, en DOI eller ett citeringsantal fyller du det aldrig ur eget minne
- **Noll träffar är ett resultat.** Vidga en gång - byt från `--fulltext` till standard, eller från `sok` till `eric`. Ger det fortfarande noll är det ett fynd: litteraturen finns inte
- **Rapportera vilken källa svaret kom ur.** "Enligt ERIC" och "enligt DiVA" är olika påståenden med olika täckning
- **Verktyget ersätter inte primärkällan.** Det är en karta över var den ligger och vad som hänt med den sedan. Öppna originalet

## När det går fel

**`FEL: Anropet misslyckades`.** CLI:n försöker om tre gånger med paus. Kvarstår felet är API:et nere eller nätet borta - säg det, gå vidare med `WebSearch`, och skriv i rapporten att citeringsdatan saknas.

**Semantic Scholar.** Medvetet inte med. Den strypte oss direkt på delad kvot och kräver en gratis API-nyckel för att vara användbar. Vill du ha den senare är det en nyckel och ett kommando till.

**SwePub.** Ingen användbar publik API - jag prövade OAI, `/api/v1`, `/api/v2`, POST-varianten och Libris-motorn 2026-08-03; tjänsten är en JavaScript-klient hela vägen ned. DiVA täcker det mesta av samma material, eftersom SwePub aggregerar därifrån.
