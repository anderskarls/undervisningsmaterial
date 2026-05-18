---
created: 2026-04-12
updated: 2026-04-12
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - ai-feedback
  - feedback-beroende
  - scaffolding
  - sjalvreglering
  - designprincip
source: "Risk taxonomy from AI Formative Feedback Research Report 2026-04-12; Xu (2025). BJET."
evidence-level: moderate
type: design-framework
---

# Feedback-beroende ar en real risk - fading scaffolding som motatgard

Forskning identifierar "feedback-beroende" (feedback dependency) som en medelallvarlig risk med AI-feedback: elever kan sluta utveckla oberoende revideringsformaga om de alltid har tillgang till extern feedback. Risken ar störst nar AI-feedback ar omedelbar, detaljerad och alltid tillganglig - precis de egenskaper som gör den attraktiv.

Motatgarden ar "fading scaffolding" - gradvis minskning av AI-stöd over tid:

**Fas 1 (Introduktion)**: Full AI-feedback med detaljerade forklaringar och specifika förslag. Eleven ar ny i amnet och behover maximal stallning.

**Fas 2 (Utveckling)**: AI ger ledtradar istallet for svar. "Nagot saknas i din analys - kan du identifiera vad?" istallet for "Du har missat perspektivet om ekonomisk ojamlikhet."

**Fas 3 (Sjalvstandighet)**: AI ger bara en kvantitativ bedomning (t.ex. "2 av 4 kriterier uppfyllda") utan specifik vagledning. Eleven maste sjalv identifiera vad som saknas.

**Fas 4 (Oberoende)**: Eleven bedommar forst sitt eget svar, ser sedan AI:ns bedomning for kalibrering. Feedback ar enbart metakognitiv.

Denna progression matchar Vygotskys Zone of Proximal Development: stallningen minskar nar eleven utvecklar kompetens. For en quiz-plattform kan fading implementeras automatiskt baserat pa elevens prestation over tid - men med möjligheten att "backa" om eleven börjar prestera samre.

Kombinerat med sjalvbedomning fore AI-feedback och reflektionsprompts bygger detta en komplett metakognitiv utvecklingsslinga snarare an bara en feedback-leveranskanal.

## Koppling till befintlig kunskap

- [[srl-undervisas-sallan-explicit-trots-hog-effekt]] - Fading scaffolding ar en konkret implementation av explicit SRL-undervisning
- [[metakognitiv-stallning-sjalvbedomning-fore-ai-feedback]] - Fas 3-4 bygger pa sjalvbedomning fore feedback-principen

## Kalla

- Risk taxonomy fran AI Formative Feedback Research Report 2026-04-12
- Xu, Y. (2025). *BJET*. https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.13599
