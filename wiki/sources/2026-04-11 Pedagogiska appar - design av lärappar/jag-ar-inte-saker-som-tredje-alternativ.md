---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, metakognition, confidence, UX]
source: Pedagogiska appar design research report 2026-04-11
---

# "Jag är inte säker" som tredje alternativ fångar metakognition utan att straffa

Ett designdrag som rapporten rekommenderar och som följer av självregleringsforskningen (Say 2024, Yan 2024): erbjud **"Jag är inte säker"** som ett legitimt tredje alternativ bredvid svarsalternativen. Det gör två saker samtidigt:

1. **Confidence-signal för datasystemet.** Skillnad mellan "fel med hög konfidens" (misconception - kräver omlärande) och "fel med låg konfidens" (brist på kunskap - kräver exposure) är pedagogiskt avgörande. Ett "jag är inte säker"-alternativ fångar detta utan dyr Bayesian-modellering.

2. **Lärande-att-lära-återkoppling för eleven.** Yan et al. (2024) visar att inbäddade frågor förbättrar självreglering. En eksplicit "I don't know" gör det *kognitivt billigare* för eleven att erkänna osäkerhet istället för att gissa - vilket minskar skam och ökar ärlighet i lärprocessen.

Praktiskt: visar systemet att eleven svarat "jag är inte säker", kan nästa steg vara scaffolding (mini-förklaring, länk till kapitel) snarare än att visa rätt svar och gå vidare. Missade-frågor-som-gissning ska behandlas annorlunda än missade-frågor-som-osäkerhet.

## Implikationer för design
- Alla MCQ har alltid ett "Jag är inte säker"-alternativ underst.
- Svar "osäker" ska inte räknas som "fel" i progress-statistik - det är en egen kategori.
- Uppföljningen efter "osäker" är läromaterial, inte bara rätt svar.
- I spaced review: frågor där eleven svarat "osäker" prioriteras för återkomst.

## Koppling till survey-platform
Enkel feature med stor pedagogisk vinst. Kräver ett extra fält på svar ("confidence"), och en ikon/knapp till. Men datan det genererar låter läraren skilja på "klassen har missförstått" och "klassen har inte lärt sig än" - två helt olika interventioner.

## Källa
- Say, B. H. et al. (2024). *Journal of Computer-Assisted Learning*.
- Yan, V. X. et al. (2024). "Immediate Versus Delayed Low-Stakes Questioning." *Technology, Knowledge and Learning*. https://link.springer.com/article/10.1007/s10758-024-09746-1
