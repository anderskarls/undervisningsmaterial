---
created: 2026-04-12
updated: 2026-04-12
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - ai-feedback
  - hallucination
  - risk
  - RAG
  - designprincip
  - forskning
source: "Multiple sources 2024-2025 on LLM hallucination in educational feedback."
evidence-level: moderate
type: design-framework
---

# Hallucinationsrisker i utbildnings-AI - fem evidensbaserade motstrategier

LLM-hallucinationer i utbildningskontexter har tre sarskilt allvarliga konsekvenser som saknar motsvarighet i andra anvandningsomraden:

1. **Befastning av missforstaelser**: AI kan ge sjalvsaker men felaktig feedback som forstärker elevers felaktiga mentala modeller. Till skillnad fran en osaklig larare kan AI inte "se" att eleven blivit forvirrad.
2. **Inkonsekvent feedback**: Samma typ av elevsvar kan fa motstridiga AI-bedömningar vid olika tillfallen, vilket undergraver tilltron till feedbacksystemet.
3. **Sarskild risk i humaniora/samhallskunskap**: LLM:er genererar med storre sannolikhet faktiskt felaktiga pastaenden i amnen dar "korrekthet" ar kontextberoende och tolkande.

Forskningen identifierar fem evidensbaserade motstrategier:

**1. RAG (Retrieval-Augmented Generation)**: Förankra LLM-svar i verifierat kursmaterial. Istallet for att AI genererar feedback fran sin allmanna traning, hamtar den specifikt material som lararen godkant.

**2. Rubrikforankring**: Begransa feedbacken till fördefinierade rubrikkriterier. AI:n far inte "spekulera" utan maste relatera sin feedback till konkreta bedomningskriterier.

**3. Temperaturkontroll**: Lagre temperaturinställningar minskar kreativa men felaktiga output. For faktabaserad feedback bör temperaturen vara lag (0.1-0.3).

**4. Larargranskningslager**: Flagga svar med lag konfidens for mannisklig granskning. AI-feedback visas till eleven med markeringen "Din larare kommer ocksa ge kommentarer pa detta."

**5. Elevkallkritik**: Lar elever att utvardera AI-feedback kritiskt. Det ar i sig en pedagogisk aktivitet - elever som ifrågasatter AI-feedback övar amnesspecifik argumentation.

## Koppling till befintlig kunskap

- [[ai-features-i-larappar-ska-vara-smala-och-off-path]] - Hallucinationsrisken ar ett ytterligare argument for off-path-principen
- [[metakognitiv-lathet-ai-verktyg-risk]] - Strategi 5 (elevkallkritik) motverkar direkt metakognitiv lathet

## Kalla

- Forskningsöversikt fran AI Formative Feedback Research Report 2026-04-12
- Refererar till: RAG-studier, rubric-based prompting (ACM ICER 2025), larargranskningsmodeller
