---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, edtech, formativ-bedomning, aterkoppling, metakognition]
source: Pedagogiska appar design research report 2026-04-11
---

# Enkel rätt/fel-återkoppling slår utförliga förklaringar i formativa quiz

Den starkaste kontraintuitiva fyndet i 2024 års återkopplingslitteratur: när elever får minimal återkoppling (bara "rätt" eller "fel") visar de *bättre* självreglering och jämförbar inlärning med elever som får full elaborativ förklaring. Say et al. (2024) visar i *Journal of Computer-Assisted Learning* att utförliga förklaringar verkar "outsourca" metakognitionen till appen: eleven slutar tänka själv kring varför svaret var fel eftersom appen redan gjort arbetet. Frontiers in Education (2025) replikerar mönstret för språkinlärning.

Ryan et al. (2024) i *Medical Education* lägger till en andra kontraintuition: återkopplingens *timing* spelar nästan ingen roll i lågstakes-quiz - omedelbar och fördröjd ger likvärdiga resultat. Det betyder att valet mellan "visa direkt" och "visa efter deck" kan göras utifrån UX-skäl, inte inlärningsteori.

Narciss taxonomi (KR/KCR/EF) är fortfarande fältets ram: Knowledge-of-Response (rätt/fel), Knowledge-of-Correct-Response (visar rätt svar), Elaborative Feedback (förklarar varför). Evidensen 2024 lutar starkt mot KR och KCR för formativa sammanhang.

## Implikationer för design
- Defaulta till KCR - visa rätt svar efter inlämning, inget mer.
- Förklaringar som on-demand via en "Förklara"-knapp, inte pushad text.
- På fel svar: föredra "ledtråd + ny chans" framför omedelbart avslöjande (Huang et al. 2022).
- Undvik att lägga energi på långa AI-genererade felanalyser - det är sannolikt slöseri.
- Mät metakognition separat: erbjud "Jag är inte säker" som tredje alternativ.

## Koppling till survey-platform
För din Next.js quizapp: bygg inte ett elaborerat feedback-lager som default. Visa rätt svar, låt "Förklara" vara en liten länk elever kan klicka när de själva vill ha mer. Sparar utvecklingstid och är pedagogiskt bättre.

## Källa
- Say, B. H. et al. (2024). "Where less is more: Limited feedback in formative online multiple-choice tests improves student self-regulation." *Journal of Computer-Assisted Learning*. https://onlinelibrary.wiley.com/doi/10.1111/jcal.12868
- Ryan et al. (2024). "Timing's not everything." *Medical Education*.
- Frontiers in Education (2025). "From belief to evidence: simpler immediate feedback."
