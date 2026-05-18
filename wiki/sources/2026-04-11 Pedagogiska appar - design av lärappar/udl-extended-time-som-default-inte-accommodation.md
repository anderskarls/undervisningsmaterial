---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, UDL, tillganglighet, neurodiversitet]
source: Pedagogiska appar design research report 2026-04-11
---

# Utökad tid som default - inte som opt-in-accommodation

UDL Guidelines 3.0 (CAST, 2024) organiserar tillgänglighet runt tre principer: **engagement, representation, action/expression** - med en fundamental skiftning från "accommodation för vissa" till "design för alla". Den praktiska konsekvensen för quiz-appar är att "utökad tid" inte ska vara ett opt-in-stöd som kräver byråkrati från specialpedagog, utan en **default-inställning för alla elever**.

Systematic review i *Educational Research Review* (2024) om neurodiversitet i online learning bekräftar: de största klagomålen är oförutsägbara UI-layouter och autoplay-media. Standardfunktioner som timers, countdowns och accomplishments-under-tidspress taxar arbetsminnet extra hårt för elever med ADHD och autism. Att designa *ut* tidspress som default hjälper dessa elever utan att stigmatisera dem - och det skadar inte neurotypiska elever.

Detta är en pedagogisk och etisk omformulering: istället för "appen har en timer men dyslektiker kan få extra tid" är det "appen har ingen timer, den som vill kan välja att tidsbegränsa sig själv". Skillnaden är enorm i signalen: den första säger "normalen är snabbhet", den andra säger "normalen är förståelse".

## Implikationer för design
- Ingen default-timer på quiz.
- Om en timer behövs pedagogiskt (t.ex. ett muntligt test simulation): gör den opt-in, inte opt-out.
- Ingen "auto-advance" efter X sekunder.
- Ingen autoplay på video eller ljud.
- Erbjud native text-to-speech via webbläsarens screenreader, inte en egen implementation.
- Multiple means of representation: text + bild + ljud för samma innehåll där det är möjligt.

## Koppling till survey-platform
En designregel du kan formulera till dig själv: "om en feature bara hjälper elever som har formellt åtgärdsprogram, designa istället så att den hjälper alla". Det minskar både din kod och den administrativa bördan för specialpedagogen.

## Källa
- CAST (2024). "Universal Design for Learning Guidelines 3.0." https://udlguidelines.cast.org/
- *Educational Research Review* (2024). "Neurodiversity and cognitive load in online learning: A systematic review."
