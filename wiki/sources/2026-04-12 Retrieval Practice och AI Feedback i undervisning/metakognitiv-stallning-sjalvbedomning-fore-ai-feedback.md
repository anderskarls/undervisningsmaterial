---
created: 2026-04-12
updated: 2026-04-12
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - ai-feedback
  - metakognition
  - sjalvreglering
  - designprincip
  - forskning
source: "Xu (2025). BJET; Cognitive Mirror Framework (2025). Frontiers; AI-powered Metacognitive Calibration (2025). CHI."
evidence-level: moderate
type: design-framework
---

# Metakognitiv stallning - krav sjalvbedomning fore AI-feedback

Forskning om metakognition i AI-miljöer visar att AI *kan* stodja metakognitiv utveckling - men enbart med medveten design. Utan skyddsatgarder forsamras sjalvövervakningen.

**Positiva fynd:**
- AI kan forbattra *metakognitiv övervakningsprecision* genom att ge objektiv extern data som kalibrerar sjalvbedomningsbias
- Metakognitivt stod har *signifikanta fordelar for sjalvreglerat larande* i generativa AI-miljöer (Xu, 2025)
- AI-feedback med *kvantitativ utvardering* fungerar som kritisk extern data for metakognitiv precision

**Negativa fynd utan skydd:**
- Elever visade *relativt lag sjalvövervakning* i AI-assisterade larandemiljöer
- Konventionell "AI som orakel"-design framjar kognitiv avlastning - elever omdirigerar anstrangning fran intern problemlosning till verktygsberoendet
- Detta undertrycker retrieval practice, kunskapsrekonstruktion och felanalys

Baserat pa Cognitive Mirror-ramverket och relaterad forskning identifieras sex designprinciper for metakognitiv stallning:

1. **Krav sjalvbedomning fore AI-feedback** - eleven förutsager sin egen prestation/kvalitet innan feedbacken visas
2. **Stallad avslöjande** - börja med ledtradar, progress till specifik feedback enbart vid behov
3. **Reflektionsuppmaningar** - "Vad larde du dig?" "Vad skulle du göra annorlunda?"
4. **Jämforelseuppgifter** - eleven jämfor sin sjalvbedomning med AI-feedbacken
5. **Utfasning** - gradvis minskning av AI-stallning nar eleven utvecklar sjalvreglering
6. **Teaching Quality Index** - kvantitativ metakognitiv feedback pa forklaringskvalitet

For en quiz-plattform ar princip 1 den enklaste att implementera: efter att eleven svarat pa en fritextfraga, visa forst fragan "Hur saker ar du pa ditt svar? (1-5)" *innan* AI-feedbacken syns. Over tid bygger detta kalibrering.

## Koppling till befintlig kunskap

- [[sjalvbedomning-kalibrering-kravs-traning]] - Metakognitiv stallning ar den tekniska implementationen av sjalvbedomningstraning
- [[metakognitiva-fragor-sjalvreglerat-larande]] - Reflektionsuppmaningar (princip 3) ar samma teknik i digitalt format

## Kalla

- Xu, Y. (2025). "Enhancing self-regulated learning and learning experience in generative AI environments." *BJET*. https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.13599
- Cognitive Mirror Framework (2025). *Frontiers in Education*. https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1697554/full
- AI-powered Metacognitive Calibration (2025). *CHI*. https://dl.acm.org/doi/10.1145/3706598.3713960
