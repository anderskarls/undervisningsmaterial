---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, SDT, motivation, kompetens, feedback]
source: Pedagogiska appar design research report 2026-04-11
---

# Personlig progress ("8 av 10 idag, 5 av 10 förra gången") slår percentilrank som kompetenssignal

Lim et al. (2024) i *Journal of Computing in Higher Education* visar att SDT-informerade learning analytics dashboards - som explicit skiljer mellan att visa personlig progress (kompetens), låta eleven välja pacing (autonomi) och visa klassaktivitet utan rankning (relatedness) - genererar **mätbara engagemangsvinster** i autentiska klassrum.

Den kritiska distinktionen: **kompetenssignal ≠ jämförelsesignal**. SDT-ramen (Deci & Ryan) säger att kompetens är ett grundläggande psykologiskt behov - människor *behöver* känna att de blir bättre. Men det behovet tillfredställs inte av att se att man är "plats 17 av 30 i klassen". Det tillfredsställs av att se att jag var 5/10 förra veckan och är 8/10 idag.

Skillnaden är avgörande i praktiken eftersom:
- Rank straffar lågpresterare varje gång de loggar in.
- Rank signalerar att lärande är en tävling där den snabba vinner.
- Personlig progress är unikt för *varje elev* - alla kan få rörelse åt rätt håll.
- Personlig progress visar *inlärning*, medan rank visar *relativ position*.

Zeng et al. (2024) meta-analys bekräftar att leaderboards ger negativa effekter på akademisk prestation. Dah et al. (2024) pekar specifikt på att absoluta leaderboards skapar socialt tryck som får lågrankade elever att ge upp helt.

## Implikationer för design
- Student dashboard visar: "Denna vecka: 8/10. Förra veckan: 5/10. Trend: uppåt."
- Aldrig: "Din plats i klassen: 17 av 30."
- Teacher dashboard *kan* visa klassöversikt - men bara för läraren, aldrig synligt för elev.
- Inga "top 10"-listor i elev-vyn.
- "Streak" ska i så fall vara ärlig ("Du har praktiserat 3 dagar i rad") utan att straffa avbrott.

## Koppling till survey-platform
Bygg två helt separata UI:n - elevvy och lärarvy. Elevvy visar personlig progress och trend. Lärarvy visar klassöversikt med individuella elever. Aldrig korssiffring. Det är både bättre SDT och bättre GDPR (minsta möjliga exponering av elevdata).

## Källa
- Lim, L-A. et al. (2024). "From awareness to empowerment: self-determination theory-informed learning analytics dashboards." *Journal of Computing in Higher Education*. https://link.springer.com/article/10.1007/s12528-024-09416-2
- Zeng, J. et al. (2024). *British Journal of Educational Technology*.
- Dah et al. (2024). "Gamification is not Working: Why?"
