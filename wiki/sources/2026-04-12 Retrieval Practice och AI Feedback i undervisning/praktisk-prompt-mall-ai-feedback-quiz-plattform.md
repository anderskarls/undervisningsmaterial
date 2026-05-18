---
created: 2026-04-12
updated: 2026-04-12
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - ai-feedback
  - prompt-engineering
  - designprincip
  - quiz-plattform
  - praktisk
source: "AI Formative Feedback Research Report 2026-04-12. Section 3.2 and 11."
evidence-level: moderate
type: design-framework
---

# Praktisk prompt-mall for AI-feedback pa quiz-plattform - fem steg

Baserat pa syntesen av forskning om prompt-engineering for utbildningsfeedback identifieras en femstegs-promptmall for AI-feedback pa fritextsvar:

**Steg 1 - Kontext**: Ge uppgiftsfragan + rubrikens bedomningskriterier + nivaspecifika forvantningar (E/C/A i svensk gymnasiekontext).

**Steg 2 - Exempelsvar**: Inkludera 2-3 exempelsvar pa olika kvalitetsnivaer med modellfeedback. Few-shot-exempel forbattrar bade precision och konsistens i AI-feedbacken.

**Steg 3 - Feedbackfokus**: Specificera att feedbacken ska adressera (a) vad eleven gjorde bra, (b) vad som behover forbattras, och (c) foreslagna nasta steg.

**Steg 4 - Begransning**: "Ge inte svaret direkt. Led eleven mot forstaelse genom fragor och ledtradar." Denna begransning ar kritisk for att undvika kognitiv avlastning.

**Steg 5 - Sprakanpassning**: "Anpassa feedbackens sprak till elevens sprakliga niva." For svenska gymnasieelever innebar detta klar, konkret svenska utan akademisk jargong.

Praktisk prompt-struktur:
```
Du ar en amneslarare i [amne]. En elev har svarat pa folande fraga:
[FRAGA]

Bedomningskriterier:
[RUBRIK med E/C/A-nivaer]

Exempelsvar pa C-niva:
[EXEMPELSVAR + MODELLFEEDBACK]

Elevens svar:
[ELEVSVAR]

Ge formativ feedback som: (1) lyfter vad eleven gjort bra, 
(2) identifierar vad som saknas eller kan forbattras, 
(3) staller en fraga som leder eleven vidare.
Ge INTE det korrekta svaret. Skriv pa tydlig svenska.
```

Denna mall kan parametriseras sa att läraren bara behover fylla i fraga, rubrik och eventuella exempelsvar - resten ar systemmall.

## Koppling till befintlig kunskap

- [[rubrik-baserad-prompting-forbattrar-ai-feedback-112-procent]] - Steg 1-2 ar den praktiska implementationen av rubrikbaserad prompting
- [[cognitive-mirror-ramverk-ai-som-larbar-novis]] - Steg 4 implementerar Cognitive Mirror-princip M2 (sokratisk identifiering av luckor)

## Kalla

AI Formative Feedback Research Report 2026-04-12, Section 3.2 and 11
