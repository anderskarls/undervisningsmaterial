---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, tillganglighet, dyslexi, typografi, WCAG]
source: Pedagogiska appar design research report 2026-04-11
---

# "Dyslexi-typsnitt" är inte empiriskt bättre än välutformade sans-serif-typsnitt

Den pedagogiska konsensusen 2024 motsäger en utbredd föreställning: **OpenDyslexic, Dyslexie och liknande specialtypsnitt har ingen bevisad fördel** jämfört med välutformade sans-serifs med bra spacing (Section508.gov 2024; Rello & Baeza-Yates-översikter). Det som faktiskt hjälper läsare med dyslexi är:

- **Bokstavsdifferentiering** - "Il1" och "O0" ska inte vara förvirrande.
- **Generös spacing** - radavstånd ≥1,5, bokstavsavstånd ≥0,12em, ordavstånd ≥0,16em (WCAG 1.4.12).
- **Vänsterjusterat**, aldrig marginaljusterat.
- **16px+ brödtext**.
- **Kontrastfärger** - inte ren svart på vitt. Använd #222 på #fafafa, eller erbjud en grädde-bakgrund.

Rekommenderade typsnitt från aktuell konsensus: **Atkinson Hyperlegible**, **Inter**, **Lexend** (det sistnämnda är testat specifikt för läsflyt). Dessa är fria, webbkompatibla och välutformade.

Implikationen är att man inte behöver bygga in ett "dyslexi-läge" med specialtypsnitt. En bra default-typografi hjälper *alla* läsare, inklusive dyslektiker, utan att skapa ett stigmatiserande opt-in.

## Implikationer för design
- Använd Atkinson Hyperlegible eller Lexend som default-brödtext, 16-18px.
- Radavstånd 1,5 som baseline, inte 1,2.
- Färgerna #222 på #fafafa istället för ren svart/vit.
- Inget separat "dyslexi-läge" - rätt default är rätt för alla.
- Erbjud gärna ett "varm bakgrund"-tema (cream) som alternativ.

## Koppling till survey-platform
En enkel win: ställ in Atkinson Hyperlegible som default via Google Fonts, 16px+ brödtext, #222 på #fafafa. Detta är en 10-minutersändring som förbättrar tillgänglighet för alla elever - inte bara dem med diagnos.

## Källa
- Section508.gov (2024). "Accessible Fonts and Typography." https://www.section508.gov/develop/fonts-typography/
- WCAG 2.2 (W3C, oktober 2023). Riktlinje 1.4.12 (Text Spacing).
- Rello & Baeza-Yates (översikter citerade i Section508 2024).
