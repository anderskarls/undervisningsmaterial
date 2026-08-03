---
created: 2026-08-03
updated: 2026-08-03
created_by: claude-sonnet-5
updated_by: claude-sonnet-5
agent_version: 04.26
type: changelog
tags: [changelog, effektstorlek, historiskt-evidensresonemang, kallkritik-av-egen-wiki]
---

# CHANGELOG - Effektstorlek d=2,05 extraction 2026-08-03

## Uppdrag

Extrahera atomära wiki-noter om temat **"vad d=2,05 faktiskt är, och vad fallet lär om effektstorlekar i allmänhet"**, som en av tre parallella extraktorer i sessionen "Historiskt evidensresonemang". De andra två tar "vad som faktiskt fungerar" respektive "historiens egen evidenslogik och styrdokumenten" - detta uppdrag rör uteslutande effektstorleksfrågan: Kraft-benchmarken, mätmetodologi, och en explicit HYPOTES om kognitiv stöttning.

## Källor

1. `resources/research/historiskt-evidensresonemang-VERIFIERING-2026-08-03.md` (44 KB) - **auktoritativ**, sex verifieringsagenter mot primärkällor
2. `resources/research/historiskt-evidensresonemang-forskaren-2026-08-03.md` (16 KB) - lens: Forskaren
3. `resources/research/historiskt-evidensresonemang-skeptikern-2026-08-03.md` (16 KB) - lens: Skeptikern

Befintlig wiki-täckning genomläst före skrivning: `evidence-based-reasoning-intervention-d-205-historia.md` (den felaktiga sidan - rörs inte, rättas av annan agent), `chatgpt-metaanalys-2025-stor-effekt-men-metodkritik.md`, `MOC - Lärandevetenskap och kognition.md`, samt `lab-till-klassrum-effektstorlekar-krymper.md`.

## Antal noter

16 nya noter i `wiki/sources/2026-08-03 Historiskt evidensresonemang/`.

## Huvudfyndet i klartext

d=2,05 är **exakt korrekt återgivet** som siffra ur Du, H. & List, A. (2024) - men nästan varje ord i den ursprungliga wiki-notens tolkning runt siffran var fel: fel författarnamn (Kraft heter Matthew A., inte Thomas; Du heter Hongcui, inte C.), fel population (amerikanska collegestudenter i pedagogisk psykologi, inte gymnasieelever i historia), och en jämförelse mot en benchmark (Kraft 2020) vars författare själv använder exakt detta effektstorleksintervall (d=1,0-2,0, Blooms "2 sigma") som sitt varnande paradexempel på orealistiskt uppblåsta effekter. Den generella lärdomen är starkare än fallet självt: en korrekt siffra garanterar ingenting om det som omger den, och samma verifieringslogik (design matchar benchmark? mått oberoende? attributionskedja kontrollerad?) gäller varje effektstorlek som dyker upp i undervisningslitteraturen.

## Korsdomänfynd

Ingen av de fem historiedidaktiska/psykologiska lensgranskningarna av wiki-sidan var en kognitionsforskare i CLT-mening. Tre av fem lenser efterlyste oberoende av varandra en bedömning av om evidenstaxonomin ändå kunde fungera som kognitiv stöttning (schema, avlastning av extraneous load) - men ingen ställde frågan i CLT-termer, trots att vaultet har en egen MOC för exakt detta (`MOC - Lärandevetenskap och kognition`). Noten `blindflacken-fungerar-evidenstaxonomin-som-kognitiv-stottning-hypotes` formulerar detta explicit som en HYPOTES med falsifieringskriterier, inte som ett svar.

## Negativa fynd (separat)

- Studien prövade **inte** historieundervisning och **inte** gymnasieelever (`studien-handlar-inte-om-historia-eller-gymnasieelever`).
- Det finns **inget vedertaget namn** på felet att blanda within-subjects-d med between-groups-tröskelvärden (`inget-vedertaget-namn-pa-felet-att-blanda-within-och-between-subjects-d`) - beskrivet, inte döpt.
- Kraft förbjuder inte jämförelsen explicit i så många ord - att within-subjects-d inte kan läggas mot hans 0,20-tröskel är en rimlig slutsats av hans standardiseringslogik, markerad som RESONEMANG (`krafts-riktvarde-galler-en-specifik-studieklass-inte-within-subjects-labbstudier`).
- Cheung & Slavins 2:1-förhållande mellan forskarkonstruerade och oberoende mått vilar på bara 34 av 645 studier - ett obalanserat underlag som författarna själva flaggar (`cheung-slavin-2-1-forhallande-forskarkonstruerade-matt-obalanserat-underlag`).
- Sala & Gobets "fjärrtransfer är noll" gäller den placebo- och biaskorrigerade modellen - råmodellen visar en liten signifikant effekt (`fjarrtransfer-forsvinner-bara-efter-kontroll-for-placebo-sala-gobet`).
- Willinghams position är mer nyanserad än "kan inte undervisas" - han medger att riktad praktik minskar svårigheten (`willingham-kritiskt-tankande-svart-inte-omojligt`).

## Länkverifiering

Kommando kört mot samtliga filer i sessionsmappen (delad med parallella extraktorer):

```
grep -oh "\[\[[^]]*\]\]" wiki/sources/2026-08-03\ Historiskt\ evidensresonemang/*.md | sort -u | ...
```

Resultat för de 16 noter som skapades i detta uppdrag: samtliga wikilänkar (till egna noter i sessionen, till `MOC - Lärandevetenskap och kognition`, och till befintliga CLT-noter som `process-worked-examples-slar-product-worked-examples`, `schema-first-discrimination-later-meta-principen`, `expertise-reversal-meta-analys-tetzlaff-2025`, `paas-1-9-skala-fortfarande-mest-validerade-belastningsmatt`, `lab-till-klassrum-effektstorlekar-krymper`) löste mot en fil på disk. **0 av cirka 30 unika länkar saknades.** En falsk träff ("SAKNAS: ^") uppstod av att en annan extraktors changelog-fil citerade själva grep-kommandot som exempeltext - ingen faktisk trasig länk.

## Deduplicering

Sökningar körda mot `run_search.sh` för samtliga huvudpåståenden innan skrivning (effektstorlek/benchmark, within-subjects/between-groups, forskarkonstruerat mått, far transfer, Willingham, publikationsbias, evidenstaxonomi). Inga befintliga noter täckte Kraft-benchmarkens gränser, Cheung & Slavin, Sala & Gobet-nyansen, Du & Lists egen 2022-RCT eller OEBR-måttets ursprung - samtliga 16 noter är nya tillägg, ingen dublett skapad.
