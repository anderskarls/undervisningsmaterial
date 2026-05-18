---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, mobilanvandning, distraktion, gymnasium]
source: Pedagogiska appar design research report 2026-04-11
---

# Enbart närvaron av en personlig mobil skadar inlärning - även när den inte används

En av de mer obekväma fynden för "mobile-first"-doktrinen: Bottger et al. (2023) i en meta-analys visar att den blotta *närvaron* av en personlig smartphone skadar inlärning även när eleven inte aktivt använder den. PISA 2022 / OECD 2024 data bekräftar: elever som distraheras av klasskamraters telefoner i matematik scorade **0,75 skolår lägre**.

Detta skapar en designparadox för quiz-appar: forskningen säger *mobile-first* (one-question-per-screen slår allt annat, 85% vs 22% slutförande). Men samma mobil är en distraktionsmaskin. Upplösningen är att mobile-first bara är korrekt **om enheten är dedikerad åt uppgiften**. Om eleven öppnar quizen på sin personliga telefon, blir sociala notiser den dominanta distraktorn, och forskningens effektstorlekar krymper eller försvinner.

Praktisk slutsats: designa för den enhet som faktiskt används i klassrummet. I svenska gymnasier är det oftast Chromebook eller skolans bärbara - inte elevens privata telefon. Mobile-first ska uppfattas som "responsive för Chromebook-skärm ner till mobilstorlek", inte "optimerad för smartphone-som-primär-device".

## Implikationer för design
- Designa primärt för Chromebook/laptop, sekundärt responsivt till mobil.
- Undvik hover-beroende interaktioner (finns inte på touch).
- "Focus mode"-affordance kan övervägas men är sekundärt - problemet är sociala notiser, inte appen själv.
- Inga push-notifikationer från själva appen.
- Läraren ska kunna säga "öppna quizen på Chromebooken, lägg mobilen i väskan" - appen ska stötta det flödet.

## Koppling till survey-platform
Din realistiska deployment-miljö är Chromebook i klassrum. Mobile-first-rhetoriken är teknisk (responsiv CSS, en fråga per skärm) - inte en antydan om att elever ska göra läxor på telefon.

## Källa
- Böttger et al. (2023). Meta-analys av smartphone-närvaro och inlärning.
- OECD (2024). "Students, digital devices and success" - PISA 2022. https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/05/students-digital-devices-and-success_621829ff/9e4c0624-en.pdf
