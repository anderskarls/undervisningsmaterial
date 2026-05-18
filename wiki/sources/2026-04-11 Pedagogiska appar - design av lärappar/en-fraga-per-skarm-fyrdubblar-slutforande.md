---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, UX, mobile-first, slutforande, quiz-design]
source: Pedagogiska appar design research report 2026-04-11
---

# En fråga per skärm fyrdubblar slutförande jämfört med traditionella formulär

Det mest dramatiska UX-fyndet i hela rapporten: konversationell single-question-format visar **85% slutförande** jämfört med **22%** för traditionella multi-question-formulär (SurveySparrow 2024 syntes av Liu & Wronski-data). Per-fråga-dropoff är **3% i konversationsformat vs 18% i traditionellt**.

Liu & Wronski (2018), baserat på >25 000 verkliga webenkäter, visar att enkätlängd är den *överlägset* största prediktorn för avhopp: 1-3 frågor ger ~83% slutförande, 4-8 ger ~65%, 15+ ger ~42%. Men längden är inte den enda faktorn - *presentationsformatet* matrisfrågor är specifikt destruktivt för mobilanvändning (Survey Practice, Survey Methods Insights 2023).

Nuansen: *inom* en konceptuell enhet slår en enda scrollbar sida paginerade flöden. Men för långa quiz vinner segmentering i bitar om 5-8 frågor med tydliga pauspunkter över en enda jätte-sida.

## Implikationer för design
- En fråga per skärm som default, single column.
- Primärknapp i tumläge underst (minst 44px touch target, WCAG 2.2 minimum 24px).
- Inga matrisfrågor på mobil - de är det sämst presterande formatet.
- Segmentera långa quiz i 5-8-frågor-bitar med tydliga pauspunkter.
- Optimera för Chromebook + telefon; undvik hover-beroende interaktioner.

## Koppling till survey-platform
Detta är sannolikt det enskilt mest impactfulla designvalet för din plattform. En fråga per skärm, stor knapp i botten, ingen matris. Skillnaden mellan 22% och 85% slutförande avgör om dina elever faktiskt gör quizen.

## Källa
- Liu, M. & Wronski, L. (2018). "Examining Completion Rates in Web Surveys via Over 25,000 Real-World Surveys." *Social Science Computer Review*. https://journals.sagepub.com/doi/abs/10.1177/0894439317695581
- SurveySparrow (2024) "Mobile Survey Completion Rates synthesis"
