---
created: 2026-04-11
updated: 2026-07-11
created_by: claude-opus-4-6
updated_by: claude-fable-5
agent_version: "04.26"
tags: [pedagogik, larappar, gamification, novelty-effect, motivation]
source: Pedagogiska appar design research report 2026-04-11
---

# Kort gamification (<1 vecka) slår lång (>20 veckor) - nyhetseffekten avtar snabbt

Ett fynd som motsäger intuitionen att "ett bra gamification-system bara måste få tid att sätta sig": meta-analytisk evidens i rapporten visar att gamification-interventioner **under 1 vecka överträffar** dem över 20 veckor. Mekanismen är **novelty decay**: det som är spännande första gången blir förväntat andra gången och grundläggande tredje gången. Samtidigt sätter overjustification-effekten in: yttre belöningar börjar kannibalisera inre motivation ju längre de pågår.

Kombinationen betyder att gamification-features i en *permanent* läroapp är särskilt dåligt positionerade: appen lever i månader och år, precis den tidsskala där nyheten är borta och kannibaliseringen är som störst. Kortvariga gamifierade events (en "quiz-dag" per termin, en tematisk utmaning en vecka) kan fungera - men en permanent poäng/badge-ekonomi i appen är nästan garanterat pedagogiskt destruktivt på termins-skala.

Det här förklarar varför stora appar som Duolingo har en till synes välfungerande gamification men ändå i forskningslitteraturen får ljumma effektresultat: användarna stannar kvar, men det de *lär sig* i relation till tiden de spenderar är underwhelming jämfört med mer pedagogiskt designade system.

## Implikationer för design
- Bygg inga permanenta poäng/XP/badge-system.
- Om gamification används: kortvariga events, tydligt tidsbegränsade.
- Lärare kan skapa en "vecko-utmaning" eller "termins-projekt" som har gamification-inslag - men det är opt-in på lektionsnivå, inte appens default.
- Inga trophies som "samlas" över hela användningen.

## Koppling till survey-platform
Här är en smart designfigur: bygg appen utan gamification som default, men ge läraren verktyg att *opt-in* en kortvarig utmaning ("denna vecka kör vi poäng på klassens frågor om franska revolutionen"). Läraren bestämmer när nyhetseffekten ska användas. Det är mer autonomistöd, mer flexibelt och undviker permanenta anti-mönster.

## Koppling till escape rooms

Escape rooms är strukturellt sett en *engångshändelse* snarare än ett permanent system - vilket, om nyhetseffektens logik stämmer, borde vara en styrka: novelty decay hinner aldrig sätta in. Detta stärker argumentet för att använda escape rooms sparsamt (ett par gånger per termin) snarare än som återkommande veckorutin, se [[tidskostnad-och-brusrisk-escape-rooms-kontra-direktundervisning]]. Samma logik gäller formatvalet: [[fjarrformat-underpresterar-synkrona-format-vinner-over-asynkrona]] visar att escape rooms tappar effekt när de görs asynkrona/oövervakade (t.ex. en läxa-länk) - ett annat sätt att förlora den "engångshändelse"-kvalitet som gör formatet motivationsmässigt kraftfullt i första hand.

## Källa
- Zeng, J. et al. (2024). "Exploring the impact of gamification on students' academic performance: meta-analysis 2008-2023." *British Journal of Educational Technology*.
- Sailer & Homner (2020). *ETRD*.
- Frontiers in Education (2024). "The ghost effect: how gamification can hinder genuine learning."
