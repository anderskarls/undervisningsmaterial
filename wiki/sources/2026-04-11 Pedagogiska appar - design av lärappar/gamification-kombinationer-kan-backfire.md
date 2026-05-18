---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, edtech, gamification, motivation, SDT]
source: Pedagogiska appar design research report 2026-04-11
---

# Levels + badges + leaderboards ger negativ effekt på akademisk prestation

Zeng et al. (2024) i *British Journal of Educational Technology* gjorde en meta-analys av gamification-studier 2008-2023 och hittade ett resultat som motsäger hela den populära "gamification is engaging"-berättelsen: kombinationen **Levels + Badges + Leaderboards** hade **negativ effekt** på akademisk prestation. Kombinationen "dynamics + esthetics" gav Hedges' g = **-3.16** - en enorm negativ effektstorlek, inte bara en noll-effekt.

Mekanismen verkar vara *overjustification*: när en tidigare intressant uppgift kopplas till yttre belöningar kannibaliseras den inre motivationen. Sailer & Homner (2020, bekräftat i 2023 års uppföljningar) visar att gamification faktiskt ökar upplevd autonomi och relatedness - eleverna *känner* sig mer motiverade - men har **minimal påverkan på kompetens** (det de faktiskt lär sig). Dah et al. (2024) identifierar sex felmodes, inklusive att absoluta leaderboards skapar socialt tryck på lågrankade elever som får dem att ge upp helt.

Ytterligare kontraintuition: korta gamification-interventioner (<1 vecka) överträffar långa (>20 veckor). Nyhet avtar snabbt, belöningar blir förväntade.

## Implikationer för design
- Inga absoluta leaderboards. Inga XP-ekonomier. Inga streaks som straffar avbrott.
- Om gamification används: scoppa till *korta* inslag, inte långsiktiga system.
- Använd SDT-triaden (autonomi, kompetens, relatedness) som designkriterium - varje feature ska stödja dessa, inte ersätta inre med yttre motivation.
- Lim et al. (2024) visar att SDT-informerade dashboards som visar personlig framgång (kompetens), låter eleven välja tempo (autonomi) och visar klassaktivitet utan rankning (relatedness) faktiskt ger mätbara engagemangsvinster.

## Koppling till survey-platform
Bygg aldrig in ett poängsystem i quizappen. Visa personlig progress ("Du kunde 8 av 10") - inte "Du är plats 17 i klassen". Läraren är relatedness-signalen, inte appen.

## Källa
- Zeng, J. et al. (2024). "Exploring the impact of gamification on students' academic performance: meta-analysis 2008-2023." *British Journal of Educational Technology*. https://bera-journals.onlinelibrary.wiley.com/doi/full/10.1111/bjet.13471
- Sailer & Homner (2020, konfirmerad 2023). *ETRD*.
- Dah et al. (2024). "Gamification is not Working: Why?" *Simulation & Gaming*.
