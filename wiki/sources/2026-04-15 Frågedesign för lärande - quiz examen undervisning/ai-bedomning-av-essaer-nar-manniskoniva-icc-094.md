---
created: 2026-04-15
updated: 2026-04-15
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - AI-bedomning
  - ICC
  - rubrik
  - essabedomning
  - reliabilitet
  - LLM
  - formativ-bedomning
source: questioning-for-learning-research-report-2026-04-15
---

# AI-bedömning av essäer når mänsklig inter-rater-nivå (ICC 0.94-0.97) - men bara för formativ användning

Yavuz med flera (2025, British Journal of Educational Technology, DOI 10.1111/bjet.13494) jämförde 15 erfarna EFL-lärare med ChatGPT (default och fine-tuned) och Bard på rubrik-baserad essäbedömning. Resultaten är häpnadsväckande: ChatGPT default ICC = 0.947, ChatGPT fine-tuned ICC = 0.972, Bard ICC = 0.919. Alla tre LLM presterar *lika bra eller bättre* än paneler av mänskliga bedömare. Detta är i nivå med god inter-human reliability och överstiger den vanliga tröskeln för "excellent agreement".

Ett strukturellt skifte har skett någon gång mellan 2022 och 2025. Tidigare studier visade LLM som under mänsklig nivå; 2024-2025 års studier visar LLM *i nivå med eller över*. Bannan med flera (2026, medicinsk kontext) genomförde tre iterationer av GPT-4-bedömning mellan april 2024 och februari 2025 och förbättrade kappa från 0.65-0.75 till 0.88-0.94 ("nästan perfekt") - och nyckeln var *iterativ rubrikrefinering mot AI-feedback*, inte modellbytet i sig.

Rapportens begränsningar är viktiga: LLM-bedömning är opak (vi vet inte alltid varför ett svar får ett visst betyg), känslig för promptvariationer, och har tendens att övervikta vissa rubrikdimensioner. AutoSCORE (2025, arXiv 2509.21910) föreslår multi-agent-bedömning där olika LLM-instanser bedömer olika dimensioner separat för att minska obalansen. Rubric-aligned Chain-of-Thought (2025, Preprints.org) är en närbesläktad teknik.

Den operationella gränsen i slutet av 2025 är klar: AI-bedömning är tillräckligt reliabel för *formativ* användning och för lärarkalibrering av egen bedömning. Summativ användning utan human-in-the-loop är inte redo. Skillnaden är inte teknisk - AI har redan mänsklig nivå i aggregat - utan juridisk och legitimerande. Ett högstakesbetyg ska kunna motiveras i klarspråk.

## Varför det spelar roll

Du kan använda AI som andra bedömare för att kalibrera din egen rättning. Skriv en rubrik, låt AI rätta en essä, jämför med din egen bedömning och identifiera dimensioner där ni skiljer er åt. Det är en form av kollegial kalibrering utan kollega - och just det som iterativ rubrikrefinering handlar om. För summativa moment: använd AI som "första läsning" och låt eleverna få snabbare formativ feedback före slutversion, men rätta själv det som blir betyg.

## Källa

Yavuz, F., Celik, O., & Yavas Celik, G. (2025). Utilizing large language models for EFL essay grading: An examination of reliability and validity in rubric-based assessments. *British Journal of Educational Technology*. DOI: 10.1111/bjet.13494.

AutoSCORE authors (2025). AutoSCORE: Enhancing Automated Scoring with Multi-Agent Large Language Models via Structured Component Recognition. arXiv 2509.21910.

## Kopplingar

- [[iterativ-rubrikrefinering-mot-ai-hojer-kappa-fran-065-till-094]]
- [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]]
- [[ai-genererade-fragor-31-procent-forkastningstakt]]
- [[hybrid-feedback-ai-plus-larare-overtraffar-bada-ensamma]]
- [[rubrik-baserad-prompting-forbattrar-ai-feedback-112-procent]]
