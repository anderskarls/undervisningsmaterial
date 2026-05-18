---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, aterkoppling, UX, formativ-bedomning]
source: Pedagogiska appar design research report 2026-04-11
---

# Ledtråd-och-ny-chans slår omedelbart-avslöja på felaktiga svar

Huang et al. (2022) i *ETRD* visar att **multi-try-with-hints** överträffar **multi-try-with-correct-response** i e-learning-quiz. När en elev svarar fel är default i de flesta quizappar att direkt visa rätt svar. Det är sämre pedagogik än att ge en ledtråd och låta eleven försöka igen. Ledtråden bevarar den "produktiva kampen" (productive struggle) som är där lärandet sker.

Detta kopplar till Say (2024) och principen "less is more" i återkoppling: för mycket information kortsluter elevens egen tänkande. En ledtråd ger precis nog scaffolding för att eleven själv ska kunna navigera till rätt svar - utan att outsourca metakognitionen till appen.

Praktisk designmall:
1. Elev svarar fel.
2. App: "Det stämmer inte riktigt. Ledtråd: [mekanism, inte svar]. Vill du försöka igen?"
3. Elev försöker igen.
4. Om fortfarande fel: visa rätt svar (KCR) + "Förklara"-knapp för den som vill.

## Implikationer för design
- Varje MCQ-fråga behöver ett fält för *ledtråd* utöver *rätt svar* och *förklaring*.
- Det är extra arbete för frågeskapare, så erbjud det som frivilligt: utan ledtråd faller flödet tillbaka till direkt KCR.
- AI kan genererera ledtrådar från rätt svar + fråga om läraren vill - här är en legitim, smal AI-feature.
- Aldrig röd "X" prominent. Neutral text: "Det stämmer inte riktigt - vill du försöka igen?"

## Koppling till survey-platform
Ett frågeformulär för läraren: "fråga", "alternativ", "rätt svar", "ledtråd (valfritt)", "förklaring (valfritt)". Det är tre nya fält bortom basen - och de mappar direkt till evidensbaserad pedagogik.

## Källa
- Huang, Y-M. et al. (2022). "E-learning with multiple-try-feedback: Can hints foster students' achievement." *Educational Technology Research and Development* (ETRD). https://link.springer.com/article/10.1007/s11423-022-10105-z
- Say, B. H. et al. (2024). *Journal of Computer-Assisted Learning*.
