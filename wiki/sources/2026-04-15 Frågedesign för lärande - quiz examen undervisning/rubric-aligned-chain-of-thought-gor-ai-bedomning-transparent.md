---
created: 2026-04-15
updated: 2026-04-15
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - AI-bedomning
  - chain-of-thought
  - rubrik
  - transparens
  - LLM
  - reliabilitet
source: questioning-for-learning-research-report-2026-04-15
---

# Rubric-aligned chain-of-thought gör AI-bedömning transparent - adressera opacitetsproblemet direkt

En central kritik mot LLM-bedömning är opacitet: vi vet inte alltid *varför* ett svar får ett visst betyg. Modellen ger ett tal eller ett omdöme utan att visa arbetet, och om den avviker från lärarens bedömning går det inte att spåra hur. Rubric-aligned Chain-of-Thought (2025, Preprints.org) föreslår en teknisk lösning som är enkel att implementera: be LLM:n följa rubriken stegvis i en chain-of-thought, där *varje rubrikkriterium bedöms explicit* innan helhetsbetyget sätts.

Praktiskt betyder det att prompten struktureras som:

1. "Här är rubriken med N dimensioner."
2. "Bedöm dimension 1. Citera exakt från texten. Motivera på 2 meningar."
3. "Bedöm dimension 2. Citera exakt från texten. Motivera på 2 meningar."
4. "Sammanväg till slutbetyg. Förklara hur dimensionerna viktades."

Detta gör två saker samtidigt. För det första: det tvingar modellen att faktiskt arbeta mot varje kriterium separat, vilket minskar risken att en dominerande faktor (t ex språkligt flyt) sväljer hela bedömningen. För det andra: det producerar ett spårbart dokument som läraren kan granska i efterhand. Om AI och lärare skiljer sig kan du peka på *exakt* dimension där de divergerar.

AutoSCORE (2025, arXiv 2509.21910) tar detta ett steg längre genom multi-agent-bedömning: olika LLM-instanser bedömer olika rubrikdimensioner helt separat, utan att se varandras omdömen. Detta är ännu starkare mot den ena-dimensionen-dominerar-bias som annars drabbar holistisk LLM-bedömning.

## Varför det spelar roll

När du använder AI för formativ bedömning: strukturera din prompt som en steg-för-steg-checklista snarare än "ge ett omdöme på denna essä". Det är en gratis uppgradering i transparens. Resultatet blir en AI-bedömning du kan visa eleven, kollegan och eventuell inspektion - och som går att korrigera dimension för dimension när den är fel. Det är skillnaden mellan AI som svart låda och AI som spårbart arbete.

## Källa

Rubric-aligned Chain-of-Thought authors (2025). *Preprints.org*.

AutoSCORE authors (2025). AutoSCORE: Enhancing Automated Scoring with Multi-Agent Large Language Models via Structured Component Recognition. arXiv 2509.21910.

## Kopplingar

- [[ai-bedomning-av-essaer-nar-manniskoniva-icc-094]]
- [[iterativ-rubrikrefinering-mot-ai-hojer-kappa-fran-065-till-094]]
- [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]]
- [[rubrik-baserad-prompting-forbattrar-ai-feedback-112-procent]]
- [[hallucinationsrisker-ai-feedback-utbildning-fem-motstrategier]]
