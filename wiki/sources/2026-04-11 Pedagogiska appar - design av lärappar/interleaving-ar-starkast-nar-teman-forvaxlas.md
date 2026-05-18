---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, interleaving, historia, samhallskunskap]
source: Pedagogiska appar design research report 2026-04-11
---

# Interleaving fungerar bäst när frågorna är "tillräckligt lika för att förväxlas"

AERO (2024) syntetiserar interleaving-evidensen och pekar ut en mekanism som ofta missförstås: interleaving handlar inte om att blanda vad som helst. Det fungerar bäst när ämnena är **tillräckligt lika för att kunna förväxlas** - då tvingas eleven *diskriminera* mellan dem istället för att mekaniskt applicera en enskild procedur. I vissa studier fördubblade interleaving nästa-dags testscore.

Exempel som gäller historieundervisning: att blanda frågor om den amerikanska, franska och ryska revolutionen tvingar eleverna att hålla isär orsaker, aktörer och utfall. Att blanda historia med matematik hjälper inte - det är för olika för att förväxlingen ska ske. Interleaving är en *kontrastiv* övning, inte bara variation.

För samhällskunskap: blanda frågor om olika valsystem, olika ideologier, olika statsskick - inte samhällskunskap + svenska.

## Implikationer för design
- Decks bör som default interleava inom sitt tema, inte blocka kapitelvis.
- Ge läraren verktyg att tagga frågor med "förväxlingskluster" (t.ex. "revolutioner", "ideologier") så systemet vet vad som ska blandas.
- Varna läraren om ett deck bara har frågor från ett snävt block - flaggar upp "detta interleavar inte".

## Koppling till survey-platform
Ett smart feature: låt läraren tagga frågor med konceptkluster och låt systemet autoblanda frågor inom samma kluster vid repetition. Kräver minimal extra UX (en tagg), men ger reell pedagogisk vinst.

## Källa
- AERO Australian Education Research Organisation (2024). "Practice Guide: Vary Practice." https://www.edresearch.edu.au/sites/default/files/2024-11/AERO-practice-guide-vary-practice-aa.pdf
- *MIS Quarterly* (2024). "Interleaved Design for E-Learning."
