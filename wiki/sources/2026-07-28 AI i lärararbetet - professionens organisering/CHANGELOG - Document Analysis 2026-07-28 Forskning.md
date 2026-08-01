---
created: 2026-07-28
updated: 2026-07-28
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: source
tags: [changelog, dokumentanalys, ai-i-lärararbetet]
source: AI-i-lararabetet-Fortbildning-Forskning-Research-Report-2026-07-28.md
---

# CHANGELOG - Document Analysis 2026-07-28 (Forskningsspåret)

**Källa:** `resources/AI-i-lararabetet-Fortbildning-Forskning-Research-Report-2026-07-28.md` (783 rader)
**Område:** empirin om lärares AI-användning, tidsbesparingsfrågan, kompetensramverk, fortbildning, den kritiska professionsforskningen, ämnesskillnader.
**Avgränsning:** lärarledda nätverk, fackförbund, myndighets- och policydokument samt svenska/nordiska förhållanden hanteras av systeragenter och har medvetet lämnats utanför. TALIS-siffran för Sverige (31 procent) nämns bara som referenspunkt i den internationella jämförelsen.

## Skapade noter (8)

1. **larares-ai-anvandning-2024-2026-siffror-som-spretar** - de stora enkäterna (RAND 25 → 53 %, Gallup/Walton N = 2 232, TALIS 2024 55 system, Pew N = 2 531) och varför siffrorna inte är jämförbara: indikatorglidning, frekvens kollapsad till binärt, adoption mäts men aldrig avveckling.
2. **bedomning-lagst-i-alla-matningar-professionens-egen-grans** - rangordningen av användningsområden (planering 64-68 %, bedömning 26 %) plus CHI 2026-studien om att lärare aktivt förhandlar snarare än adopterar eller motstår.
3. **tidsbesparingen-25-minuter-mot-59-timmar** - Gallups additiva självskattning mot EEF:s RCT (259 lärare, 25,3 min/vecka), METR-gapet med dess omklassning 2026, Yu m.fl. efficiency-gain illusion (N = 2 691), Selwyns dolda arbete och Marshall & Pressleys upplevda arbetsbörda. Rapportens evidensstyrketabell bevarad.
4. **deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data** - analogin (miniräknaren, handskriften, stavningskontrollen) markerad som hypotes, med rapportens skarpare omformulering: risken är inte att sluta kunna göra jobbet utan att sluta kunna bedöma när det är dåligt gjort. Selwyns upskilling-motargument redovisat parallellt.
5. **automation-bias-hos-larare-experimentellt-bekraftad** - Du, Liu & Xian 2026, N = 214, samma uppsats, ηp² = 0,579-0,745. Med den praktiska slutsatsen att human-in-the-loop inte skyddar om människan ser maskinens svar först.
6. **llm-bedomarreliabilitet-spannet-030-080** - syntesen över 65 studier, konstruktberoendet, de fem bias-typerna, self-enhancement bias som validitetshot i historia, och det motstridiga fyndet QWK 0,75-0,86 för finjusterade system.
7. **ai-stod-i-tolkande-amnen-konstaterad-evidenslucka** - RAND:s ämnesskillnad (som går tvärtemot förväntan), Kestins fysikeffekter 0,73-1,3 SD, den explicit konstaterade frånvaron av humanioraevidens, MLA:s bias-oro och OECD:s 48/17/80-siffror.
8. **relationen-larare-elev-lararens-eget-ai-bruk-ar-omatt** - trust transfer-experimentet (N = 320), EDUCAUSE erosion of trust, och rapportens konstaterande att lärarens eget bruk är obesvarat medan fuskmisstanken är det enda belagda relationshotet.

## Dubblettkontroll

`grep -ril` mot hela `wiki/` gav noll träffar på automation bias, deskilling, TPACK, Selwyn, Gallup och TALIS-som-lärarenkät. Följande befintliga noter lästes och kompletteras i stället för att dupliceras:

- `metakognitiv-lathet-ai-verktyg-risk` - handlar om **elevens** kognitiva outsourcing. Deskilling-noten är dess lärarmotsvarighet och länkar dit i stället för att upprepa mekanismen.
- `bearman-evaluative-judgement-genai-tid` - evaluative judgement som konstrukt. Nya noter länkar till den som "det som ska bevaras" respektive som ram för granskningsarbetet, utan att återge Bearmans argument.
- `lararfortbildning-digitalt-sarbarhetsgap` - 2020-2025-data om samma gap mellan vilja och kapacitet. Kompetensramverksnoten refererar till den som föregångare.
- `detektionsparadigmets-sammanbrott-2024-2026` - detektorernas otillförlitlighet. Automation bias-noten bygger vidare: även en otillförlitlig siffra styr bedömningen.

## Vad som valdes bort och varför

- **Turnitins reviderade falsk-positiv-frekvens (1 → 4 procent, 5-12 för gränsfall) och universitetens avstängningar.** Täcks redan av `detektionsparadigmets-sammanbrott-2024-2026`. Bara Vanderbilt-räkneexemplet (750 felaktigt anklagade arbeten vid 75 000 inlämningar) hade tillfört något, och det är en detalj, inte en not.
- **Egen not om självstyrd fortbildning (TechTrends 2025).** Enda fyndet är att ChatGPT motiverar lärare till självstyrd utveckling. För tunt för egen sida; ligger inbakat i ramverksnoten.
- **Egen not om EU-kommissionens lärarenkät (N = 1 130).** Det intressantaste fyndet - att lärare inte har inflytande över verktygsvalet - är en organisationsfråga som gränsar till systeragenternas område. Placerat som spänning i två noter i stället.
- **Egen not om Marshall & Pressleys strukturella modell.** Resultatet (AI minskar upplevd men inte faktisk arbetsbörda) är preliminärt och bygger på en enda studie redovisad i Education Week, inte i en granskad tidskrift. Ingår i tidsnoten där det hör hemma.
- **Siffrorna om att automation bias stod för 51 procent av besluten** togs med men flaggades explicit: rapporten anger själv att källan är svagt specificerad och bör verifieras före citering.
- **AI-TPACK-instrumenten var för sig** (TAICS, ELT-AIR, de tre AI-TPACK-skalorna). Fragmenteringen är poängen, inte de enskilda instrumenten. Redovisade som lista inne i ramverksnoten.

## Epistemisk hantering

Rapportens egen märkning ([FYND] / [HYPOTES] / [RESONEMANG]) är bevarad genomgående. Särskilt viktigt i tre fall: deskilling-tesen är analogi och inte data, relationsbrytare/relationsmäklare-tesen är hypotes, och tidsbesparingsrekommendationerna i fortbildningslitteraturen är oprövade. Motstridiga resultat (Gallup mot EEF mot Selwyn; QWK 0,30-0,80 mot 0,75-0,86; lärares uttryckta AI-skepsis mot deras faktiska följsamhet) redovisas som motstridiga i respektive not, inte sammanjämkade.
