---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, UX, feedback, test-angest, sprak]
source: Pedagogiska appar design research report 2026-04-11
---

# Använd neutral språk om fel svar ("Det stämmer inte riktigt") istället för röd X

Ett designdetalj som rapporten lyfter explicit: aldrig visa en prominent röd **X** för fel svar. Använd neutral text som **"Det stämmer inte riktigt - vill du försöka igen?"** istället. Motivationen kommer från två forskningslinjer:

1. **Testångest är utbredd** även i lågstakes-kontext. 38,5% av undergraduates rapporterar testångest någon gång (*CBE-Life Sciences Education*, 2021). Visuella straffsignaler (rött kors, "WRONG", skakande animation) triggar samma affektiva respons som ett riktigt prov - även när insatserna är obefintliga.

2. **SDT-autonomi** kräver att eleven upplever sig som aktör snarare än objekt för bedömning. "Det stämmer inte riktigt - vill du försöka igen?" behandlar eleven som samtalspartner. Röd X behandlar eleven som föremål som ska bedömas.

Detta är inte "coddling" eller "deltagandepriser". Det är att ta bort brus som inte bidrar till lärande. Den informationen eleven behöver är "mitt svar var inte rätt" - inte "appen är arg på mig". Den neutrala formuleringen levererar exakt samma information men utan affektivt överskott.

Relaterat: Fitton & Read (2024) ["Dark Patterns of Cuteness"] lyfter hur emotionellt laddade feedback-signaler (ledsna maskotar, besvikna animationer) manipulerar barn och unga. Neutral feedback är både mer respektfull och mer forskningsgrundad.

## Implikationer för design
- Inga röda X. Inga "WRONG". Inga explosioner.
- Neutral ton: "Det stämmer inte riktigt - vill du försöka igen?"
- Grönt bockmarke för rätt svar är ok (positiv kompetenssignal) men ska vara diskret, inte firande.
- Inga ljud vid fel svar. Inga vibrationer. Inga skakningar.
- På svenska: "Inte riktigt" hellre än "Fel!". "Nu stämmer det" hellre än "Rätt!!!".

## Koppling till survey-platform
En liten men viktig detalj för din app: granska alla feedback-strängar och formulera dem neutralt-varmt på svenska. Det signalerar att appen är gjord av någon som faktiskt tänker på gymnasieelever som människor, inte som testobjekt. Lärare märker det direkt.

## Källa
- *CBE-Life Sciences Education* (2021). "Student Anxiety and Perception of Difficulty Impact Performance and Persistence." https://www.lifescied.org/doi/10.1187/cbe.17-12-0284
- Deci & Ryan - Self-Determination Theory (teoretisk ram).
- Fitton & Read (2024). "Dark Patterns of Cuteness."
