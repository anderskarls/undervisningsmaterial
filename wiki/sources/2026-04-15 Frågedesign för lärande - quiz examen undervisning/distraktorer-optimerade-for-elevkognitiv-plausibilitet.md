---
created: 2026-04-15
updated: 2026-04-15
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - MCQ
  - distraktorsdesign
  - AI-genererade-fragor
  - LLM
  - pedagogik
source: questioning-for-learning-research-report-2026-04-15
---

# Distraktorer ska optimeras för elevkognitiv plausibilitet - inte för att likna mänskligt skrivna

Bitew med flera (ACL 2025, arXiv 2501.13125) föreslår ett paradigmskifte i hur distraktorer bedöms. Klassisk automatisk distraktorsgenerering optimerar för att *likna* mänskligt skrivna distraktorer - en intern metrik som inte säger något om huruvida distraktorerna lockar elever att välja fel. Deras alternativ är att träna en LLM att *förutsäga vilka distraktorer elever faktiskt väljer*, baserat på historisk svarsdata. Metriken blir elevkognitiv plausibilitet i stället för lingvistisk likhet.

Detta förändrar vad som räknas som en bra distraktor. En lingvistiskt välformulerad distraktor som ingen väljer är värdelös. En klumpigt formulerad distraktor som fångar ett verkligt missförstånd är guld. Alhazmi med fleras systematiska översikt (2024, 60 studier) identifierar tre generationer av metoder - regelbaserade, embedding-baserade, LLM-baserade - och pekar på att LLM-generationen har högst plausibilitet men fortfarande kräver mänsklig innehållsvaliditetsgranskning.

För en enskild lärare utan elevresponsdatabas finns en pragmatisk genväg: prompta LLM:n med *"skapa tre distraktorer som representerar vanliga elevmissförstånd för denna fråga"* i stället för *"skapa tre distraktorer"*. Det aktiverar modellens interna representation av missförstånd snarare än random felgenerering - och ger märkbart bättre distraktorer.

## Varför det spelar roll

Det subtila skiftet från "plausibla distraktorer" till "distraktorer som elever faktiskt väljer" förändrar hur du använder AI som frågeassistent. Be inte om distraktorer - be om *missförstånd*. Kombinera med en växande missförstånd-bank du samlar från varje provrättning, så får AI ett verkligt empiriskt underlag att generera mot.

## Källa

Bitew, S. K., et al. (2025). Generating Plausible Distractors for Multiple-Choice Questions via Student Choice Prediction. arXiv 2501.13125, ACL 2025 Long Papers.

Alhazmi, R., et al. (2024). Automatic distractor generation in multiple-choice questions: a systematic literature review. https://pmc.ncbi.nlm.nih.gov/articles/PMC11623049/

## Kopplingar

- [[35-procent-av-distraktorer-ar-icke-fungerande]]
- [[felklimat-felaktiga-svar-som-lararresurs]]
- [[ai-genererade-fragor-31-procent-forkastningstakt]]
- [[praktisk-prompt-mall-ai-feedback-quiz-plattform]]
