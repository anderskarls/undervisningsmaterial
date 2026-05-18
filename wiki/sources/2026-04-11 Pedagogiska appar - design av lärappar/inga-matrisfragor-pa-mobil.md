---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, UX, mobile, fragetyper]
source: Pedagogiska appar design research report 2026-04-11
---

# Matrisfrågor är det sämst presterande frågeformatet på mobila enheter

Flera 2023-studier (Survey Practice, Survey Methods Insights) visar att matrisfrågor (grid-format där eleven kryssar flera rader med samma skala) är det **sämst presterande frågeformatet på mobil**. Orsaken är kombinationen av små tap-targets, horisontell scrolling, och kognitiv överbelastning från att hålla skalan i minnet medan man scrollar genom rader.

Detta är särskilt problematiskt eftersom matrisfrågor är en av de vanligaste formaten i traditionella enkäter (Likert-skalor för attityder, värderingar, självskattning). Reflexmässigt migrerar designers dem direkt till mobil, och förlorar dramatiska andelar av respondenterna.

Lösningen: **dekomponera matrisfrågan** till en rad per skärm. "Hur upplevde du momentet? A: Intresserad, B: Svårt, C: Viktigt, D: Relevant" blir fyra one-per-screen-frågor med samma skala. Det är längre flöde men *högre slutförande* (per Liu & Wronski: färre frågor har bättre slutförande, men per SurveySparrow: konversationsformat slår traditionellt även vid samma antal frågor).

Detta är särskilt relevant för samhällskunskapslärare som ofta kör attityd-/värderingsenkäter för diskussionsunderlag - exakt den typ av fråga där matriser är frestande och skadliga.

## Implikationer för design
- Appen tillåter inte matrisfrågor som format.
- Om läraren vill ställa "bedöm dessa fem saker på skala 1-5", renderas de som fem separata frågor i flödet.
- Läraren kan gruppera dem som ett "batch" med gemensam introduktion men separat rendering.
- Resultatvisning aggregerar batchen tillbaka för läraren (hen får tabelloversikten) men utan att exponera eleven för den.

## Koppling till survey-platform
En designregel: ditt frågeredigerings-UI har inte en "matrix"-knapp. Om någon importerar från Google Forms där matrix finns, dekomponera automatiskt till separata frågor. Lärarens aggregation happens på display, inte på input. Detta är en av de enkla win:sen som signifikant förbättrar mobil slutförande.

## Källa
- Liu, M. & Wronski, L. (2018). "Examining Completion Rates in Web Surveys via Over 25,000 Real-World Surveys." *Social Science Computer Review*.
- Survey Methods Insights (2023). "Device effects on survey response quality." https://surveyinsights.org/?p=13585
- SurveySparrow (2024). "Mobile Survey Completion Rates synthesis."
