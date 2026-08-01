---
created: 2026-07-28
updated: 2026-07-28
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: changelog
tags: [changelog, deep-research, sprakanpassning, sessionssammanfattning]
---

# SESSION SUMMARY - Deep Research: Språkanpassning av texter

**Datum:** 2026-07-28
**Läge:** Directed mode (`/deep-research "Språkanpassning av texter"`)
**Frågan:** Vad ska läraren göra när en text är för svår - förenkla texten eller bygga stöttning runt den?

---

## Uppläggets premiss

Sessionen riggades som en **prövning**, inte en litteratursökning. Anders har en dokumenterad hållning - "scaffolda proceduren, sänk aldrig språknivån" - och båda forskningsagenterna instruerades explicit att söka evidens som talar emot den lika aktivt som för.

Det visade sig vara rätt beslut. En bekräftande sökning hade missat både att hållningen inte håller som generell regel och att den behöver preciseras för att bli användbar.

---

## Fas 1: Research

Två parallella agenter, arbetsdelning efter forskningstradition:

| Rapport | Omfång | Innehåll |
|---|---|---|
| `resources/research/sprakanpassning-internationell-forskning-2026-07-28.md` | 942 rader | Simplification vs elaboration, kohesionsforskningen, läsbarhetsmåttens kritik, disciplinary literacy, andraspråk, LLM-baserad textanpassning 2026 |
| `resources/research/sprakanpassning-svensk-forskning-2026-07-28.md` | 58 kB | Reichenberg, lättläst och dess kritik, genrepedagogik, LIX, Gy25, historiska källtexter, Olvegård |

Båda rapporterna följer vaultets stilregler (noll em-dashes, korrekta svenska tecken) och redovisar explicit vad de **inte** kunnat verifiera.

---

## Fas 2: Extraktion

18 noter i `wiki/sources/2026-07-28 Språkanpassning av texter/`. Detaljerad extraktionslogg i sessionsmappens egen changelog.

Fördelning på evidensnivå: 7 hög, 8 medel, 3 låg. Noterna med låg evidensnivå är märkta som sådana i frontmatter och två av dem dokumenterar uttryckligen resonemang som inte är forskningsresultat.

---

## Fas 3: Kopplingar

**Dedup före skrivning.** Semantisk sökning mot fyra frågeformuleringar identifierade tre angränsande befintliga noter, som länkades in i stället för att dupliceras:

- `disciplinar-lasning-pa-yrkesprogram` (2026-06-09)
- `expertise-reversal-meta-analys-tetzlaff-2025` (2026-05-18)
- `forforstaelse-av-begrepp-sanker-intrinsic-load-i-historia` (2026-05-18)

**Konsiliensfyndet.** `reverse-cohesion-och-expertise-reversal-samma-mekanism` binder McNamaras läsforskning till cognitive load theory. McNamara (1996) fann att lågkunniga elever gynnas av hög kohesion medan högkunniga lär sig mer av låg. Tetzlaff m.fl. (2025) fann att scaffolding hjälper nybörjare (d = +0,51) och skadar experter (d = -0,43). Det är samma mekanism beskriven i två vokabulär av fält som sällan citerar varandra.

Konsekvensen är operativ: **kohesion är scaffolding inbyggd i texten och lyder därför under fading-plikten.** Att ge samma bearbetade text hela läsåret är samma fel som att aldrig plocka bort worked examples.

**Länkkontroll.** 28 unika länkmål, samtliga verifierade mot disk. Noll trasiga.

---

## Nyckelfynd

### 1. Hållningen preciseras, den bekräftas inte

Reichenberg (2000) motsäger inte "sänk aldrig språknivån" - hon skiljer två operationer som slarvigt buntas ihop:

- **Sänka begreppsnivån** (byta ut *civilrätt*): inget stöd, förstör ämnesinnehållet
- **Höja kohesion och röst** (sätta ut orsakssamband, tilltala läsaren): experimentellt stöd

Hennes egna ord: ämnesspecifika ord ersattes inte, "i stället har dessa ord försetts med en förklaring".

### 2. Men den håller inte som generellt förståelsepåstående

Yano, Long och Ross (1994) fick högst förståelse för de förenklade texterna. Guidroz m.fl. (2025, n = 4 563) pekar åt samma håll, +3,9 procentenheter. Effekterna är små men riktningen är emot hållningen.

### 3. Förenkling och elaborering är inte motsatser

Crossley, Allen och McNamara (2014): förenklade texter har i praktiken **högre kohesion**. Båda strategierna fungerar genom samma mekanism. Den farliga operationen är att stryka kausalkonnektiver, inte att korta meningar.

### 4. Primärkällan är ett specialfall

I historia är källans språk studieobjektet. Sourcing kräver att man kan avläsa vem som talar. Här är hållningen en ämnesmässig nödvändighet, inte en pedagogisk avvägning. Men detta gäller **inte** lärobokstext, statistik eller nyhetstext - och sammanblandningen är den vanligaste felkällan i frågan.

### 5. Faktakorrigering: Gy25 gäller redan

Gy25 gäller sedan 1 juli 2025. Elever som började HT25 och HT26 läser Gy25. Varken historia eller samhällskunskap ställer krav på textsvårighet, och det finns inga nationella prov i ämnena på gymnasiet. **Ingen extern kalibreringspunkt existerar** - vilket gör likvärdighetsproblemet strukturellt.

---

## Vad sessionen medvetet dokumenterar som obelagt

Tre noter finns till för att förhindra överanvändning:

1. `den-direkta-jamforelsen-saknas` - ingen har jämfört förenklad text utan stöttning mot originaltext med stöttning. Frågan är obesvarad.
2. `lattlast-cementerar-inte-forvantningar-obelagt-argument` - utbrett argument utan svensk empirisk grund. Bör inte användas.
3. `scaffolding-vilar-pa-auktoritet-mer-an-effektforskning` - Gibbons är praktikerbok; genrepedagogikens svenska evidensbas är tunn; textstruktureffekter försvann vid fördröjt eftertest.

---

## Synteser som ligger nära

**Momentöversikt eller artikel: "Vad gör man med en för svår text?"** Noterna räcker för en praktiskt användbar text med tre beslutsvägar (primärkälla / lärobokstext / rapport och statistik). Materialet finns; det som saknas är Anders eget ställningstagande.

**Kandidat för ny topic.** Sessionen tangerar `MOC - Källkritik och digital kompetens` och `MOC - Historiedidaktik och kontroversiella frågor` men bildar inte egen domän på 18 noter. Vid ytterligare en session om läsning och textarbete bör en MOC övervägas.

**Uppdatering av momentplaneringsramverket.** `ramverk-momentdesign-utkast-3` innehåller ingen textvalsdimension. Fading av kohesionsstöd vore ett naturligt tillägg - men ramverket styr `/planera-moment` och är Anders designbeslut, inte något en agent ska skriva in.

---

## Metodproblem att åtgärda

`/deep-research` är skriven före omstruktureringen till LLM-Wiki-mönstret:

- Fyra sökvägar existerar inte: `Brain/Document Insights/`, `Brain/05-Meta/Changelogs/`, `knowledge-base-analysis.md`, `Brain/CHANGELOG.md`
- Tre anropade subagenter finns inte i `.claude/agents/`: `research-specialist`, `document-insight-extractor`, `connection-finder`
- Ämnesinriktningen (arXiv, NeurIPS, "de 6 primära hubbarna Consciousness/Dopamine/Flow States") är arvegods från en generisk second-brain-mall och passar inte vaultets faktiska innehåll

Sökvägarna översattes och generella agenter användes. Skillen bör skrivas om innan nästa körning.

Ett mindre fynd: `resources/local-brain-search/search.py` kraschar i utskriftsvägen (`KeyError: 'intent'`, rad 411) vid icke-JSON-output. Träffarna hittas men visas inte. `--json` fungerar.
