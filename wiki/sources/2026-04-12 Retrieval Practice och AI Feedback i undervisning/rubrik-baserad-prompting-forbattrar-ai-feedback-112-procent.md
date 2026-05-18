---
created: 2026-04-12
updated: 2026-04-12
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - ai-feedback
  - prompt-engineering
  - rubrik
  - designprincip
  - forskning
source: "Rubric-Based LLM Evaluation (2025). ACM ICER; Prompt-Based LLMs for Scoring & Feedback (2025). Computers & Education."
evidence-level: moderate
type: empirical-finding
---

# Rubrikbaserad prompting forbattrar AI-feedbackkvalitet med over 100%

Forskning om prompt-engineering for utbildningsfeedback visar att det mest effektiva sattet att forbattra AI-feedbackens kvalitet ar att forankra prompten i explicita bedömningskriterier. GPT-4 med rubrikbaserade promptar uppnadde 112-114% forbattring i bedomningsprecision jämfort med GPT-3.5 med generiska promptar.

Tre specifika tekniker identifieras:

**1. Rubrik + instruktioner + forvantan**: Ge LLM:en uppgiftens fraga, rubrikens kriterier och niva-specifika forvantiningar. Fragspecifika rubriker presterar battre an generiska promptar for till exempel kodbedomning.

**2. Reflective Prompt Engineering (RPE)**: En iterativ process dar manniska och AI samarbetar genom diskussion och reflektion for att forbattra bedomningsprestanda. Prompt-designen ar alltsa inte en engangsinvestering utan en fortlöpande kalibrering.

**3. Chain-of-Thought + Active Learning (CoTAL)**: Utnyttjar Evidence-Centered Design for läroplansforankrad formativ bedomning. Strukturerade promptstrategier minskar signifikant risken for hallucinationer.

For en quiz-plattform i samhallskunskap innebar detta en konkret designprincip: varje fragettyp behover en tillhörande rubrik som inkluderas i AI-prompten. En generisk "ge feedback pa detta svar"-prompt ar otillracklig. Rubriken bör specificera vad som forvantas pa olika niva (E, C, A i gymnasiekontext), med 2-3 exempelsvar pa olika kvalitetsniva.

## Koppling till befintlig kunskap

- [[ai-features-i-larappar-ska-vara-smala-och-off-path]] - Rubrikforankring ar en konkret implementation av "smal scope"-principen
- [[djupa-vs-ytliga-framgangsskriterier]] - Rubrikens kvalitet avgör om AI-feedbacken triffar djupa eller bara ytliga kriterier

## Kalla

- Rubric-Based LLM Evaluation (2025). *ACM ICER*. https://dl.acm.org/doi/10.1145/3702652.3744220
- Prompt-Based LLMs for Scoring & Feedback (2025). *Computers & Education*. https://www.sciencedirect.com/science/article/pii/S0360131525002799
- Reflective Prompt Engineering (2025). *Int. J. Science Education*. https://www.tandfonline.com/doi/full/10.1080/09500693.2025.2523571
