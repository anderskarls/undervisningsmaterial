---
created: 2026-07-28
updated: 2026-07-28
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: changelog
tags: [changelog, extraction, sprakanpassning]
---

# CHANGELOG - Språkanpassning av texter, extraktion 2026-07-28

## Uppdrag

`/deep-research "Språkanpassning av texter"`. Directed mode.

Frågan formulerades som en prövning, inte en bekräftelse: användaren har en dokumenterad hållning ("scaffolda proceduren, sänk aldrig språknivån") och båda forskningsagenterna instruerades att aktivt söka evidens som talar emot den.

## Källor

Två forskningsöversikter beställda och producerade i samma session:

- `resources/research/sprakanpassning-internationell-forskning-2026-07-28.md` (942 rader) - simplification vs elaboration, kohesionsforskningen, läsbarhetsmått, disciplinary literacy, LLM-baserad textanpassning
- `resources/research/sprakanpassning-svensk-forskning-2026-07-28.md` (58 kB) - Reichenberg, lättläst-kritiken, genrepedagogik, LIX, Gy25, historiska källtexter, Olvegård

## Resultat

**18 noter skapade.** 28 unika wikilänkar, samtliga verifierade mot disk - noll brutna.

### Huvudfyndet: hållningen preciseras, den bekräftas inte

Den centrala upptäckten är att Reichenberg **inte** motsäger hållningen utan skiljer två operationer som slarvigt buntas ihop:

- Sänka **begreppsnivån** (byta ut *civilrätt*) - inget stöd, förstör ämnesinnehållet
- Höja **kohesion och röst** (sätta ut orsakssamband, tilltala läsaren) - experimentellt stöd

Hennes egna ord: ämnesspecifika ord ersattes inte, "i stället har dessa ord försetts med en förklaring". Regeln blir: förklara begreppen, byt inte ut dem; skriv ut orsakssambanden, förutsätt dem inte.

Samtidigt håller hållningen **inte** som generellt förståelsepåstående. Förenkling vinner ofta på korttidsförståelse, om än med små effekter.

### Korsdomänfynd

`reverse-cohesion-och-expertise-reversal-samma-mekanism` binder ihop McNamaras läsforskning (1996) med Tetzlaffs CLT-metaanalys (2025). Samma mekanism, två fält som sällan citerar varandra. Kohesion är scaffolding inbyggd i texten - och ska därmed fadas som all annan stöttning.

### Negativa fynd (noter som dokumenterar vad man *inte* ska hävda)

- `den-direkta-jamforelsen-saknas` - ingen har jämfört förenklad text utan stöttning mot originaltext med stöttning. Frågan är obesvarad, inte besvarad.
- `lattlast-cementerar-inte-forvantningar-obelagt-argument` - utbrett argument utan svensk empirisk grund.
- `scaffolding-vilar-pa-auktoritet-mer-an-effektforskning` - Gibbons är praktikerbok, inte effektstudie; genrepedagogikens svenska evidensbas är tunn.

### Faktakorrigering

**Gy25 gäller sedan 1 juli 2025**, inte "på väg". Elever som började HT25 och HT26 läser Gy25. Varken historia eller samhällskunskap ställer några krav på textsvårighet, och det finns inga nationella prov i ämnena på gymnasiet - alltså ingen extern kalibreringspunkt alls.

## Noter skapade

| Not | Evidensnivå |
|---|---|
| forenkling-och-elaborering-konvergerar-mot-kohesion | hög |
| reverse-cohesion-och-expertise-reversal-samma-mekanism | hög |
| reichenberg-forklarar-amnesbegrepp-byter-inte-ut-dem | hög |
| rost-och-kausalitet-utraderade-andrasprakgapet | medel |
| lix-stiger-nar-texten-blir-begripligare | medel |
| lattlast-ar-bade-lattare-och-svarare | medel |
| lattlast-cementerar-inte-forvantningar-obelagt-argument | låg |
| olvegard-amnesspraket-inte-svenskan-ar-troskeln | medel |
| primarkallans-sprak-ar-studieobjektet | medel |
| tre-nivaer-av-kallanpassning | låg |
| gy25-staller-inga-krav-pa-textsvarighet | hög |
| ingen-extern-kalibrering-av-textsvarighet | hög |
| lasstrategiundervisning-gynnar-svaga-lasare-mest | hög |
| metakognitiv-forkunskap-slar-amnesforkunskap | medel |
| llm-forenkling-har-en-tyst-felmod | medel |
| den-direkta-jamforelsen-saknas | hög |
| scaffolding-vilar-pa-auktoritet-mer-an-effektforskning | hög |
| reisman-svara-kallor-forbattrade-allman-lasforstaelse | medel |

## Dedup

Semantisk sökning kördes före extraktion mot fyra frågeformuleringar. Tre angränsande befintliga noter identifierades och länkades in i stället för att dupliceras: `disciplinar-lasning-pa-yrkesprogram`, `expertise-reversal-meta-analys-tetzlaff-2025` och `forforstaelse-av-begrepp-sanker-intrinsic-load-i-historia`.

## Avvikelser från skillens instruktion

`/deep-research` skrevs före omstruktureringen till LLM-Wiki-mönstret och pekar på fyra sökvägar som inte längre finns (`Brain/Document Insights/`, `Brain/05-Meta/Changelogs/`, `knowledge-base-analysis.md`, `Brain/CHANGELOG.md`). Ingen av de tre subagenterna den anropar (`research-specialist`, `document-insight-extractor`, `connection-finder`) finns i `.claude/agents/`. Sökvägarna översattes till nuvarande struktur och generella agenter användes för research. Skillen bör uppdateras.

Skillens ämnesinriktning (arXiv, NeurIPS, "AI Agents-hubben") passade heller inte ämnet och ersattes med läs- och språkdidaktisk inriktning.

## Kontroll

- Samtliga 18 noter har fullständig frontmatter enligt schemat
- 28/28 länkmål verifierade mot disk
- Stilregler kontrollerade i båda rapporterna: noll em-dashes, korrekta svenska tecken, ingen mojibake
