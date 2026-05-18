---
created: 2026-04-12
updated: 2026-04-12
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - ai-feedback
  - formativ-bedomning
  - ramverk
  - designprincip
  - forskning
source: "Deeva et al. (2025). Unraveling the mechanisms and effectiveness of AI-assisted feedback. Education and Information Technologies."
evidence-level: moderate
type: design-framework
---

# Deeva-ramverket - fyra nivaer av AI-feedback fran ytuppgift till sjalvreglering

Deeva et al. (2025) genomforde en systematisk oversikt av 129 peer-reviewed artiklar (2014-2023) och identifierade att effektiv AI-feedback opererar over fyra nivaer, analogt med Hattie & Timperleys feedbackmodell:

1. **Uppgiftsniva (Task-level)**: Specifika rattelser och vagledning for den omedelbara uppgiften - "Du har inte adresserat det tredje argumentet i fragan"
2. **Processniva (Process-level)**: Vagledning om strategier och tillvagagangssatt - "Forsök jamfora de tva perspektiven istallet for att beskriva dem separat"
3. **Sjalvregleringsniva (Self-regulation)**: Metakognitiva uppmaningar for planering, övervakning och utvardering - "Innan du skriver vidare: vilka kriterier forsoker du uppfylla?"
4. **Sjalvniva (Self-level)**: Identitets- och motivationsstod - "Du visar god formaga att identifiera nyanser i fragan"

De flesta AI-feedbacksystem idag opererar nastan uteslutande pa niva 1 (uppgift) och delvis pa niva 2 (process). Niva 3 (sjalvreglering) ar den mest potenta for langsiktigt larande men kräver medveten design. Niva 4 (sjalv) ar den mest kontroversiella - identitetsbaserad feedback fran AI kan kanna sig tom eller manipulativ.

For en quiz-plattform innebar ramverket att feedbackdesignen bör vara *medveten om vilken niva den riktar sig till*. En effektiv feedback-prompt till AI:n kan specificera: "Ge feedback pa uppgiftsniva (vad saknas) och processniva (hur eleven kan forbattra strategin), men inkludera ocksa en sjalvregleringsprompt (fraga eleven vad de lamnade bort och varfor)."

## Koppling till befintlig kunskap

- [[fem-strategier-formativ-bedomning-wiliam-leahy]] - Wiliams fem strategier opererar pa samma nivaer men utan explicit AI-koppling
- [[djupa-vs-ytliga-framgangsskriterier]] - Niva 1 ar ytlig feedback, niva 2-3 ar djup feedback

## Kalla

Deeva, G. et al. (2025). "Unraveling the mechanisms and effectiveness of AI-assisted feedback in education: A systematic literature review." *Education and Information Technologies*. https://www.sciencedirect.com/science/article/pii/S2666557325000436
