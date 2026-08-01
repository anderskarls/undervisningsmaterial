---
created: 2026-05-21
updated: 2026-05-21
created_by: claude-opus-4-7
updated_by: claude-opus-4-7
agent_version: 04.26
type: source
tags: [ai-detektion, equity, esl, npf, dyslexi, likvärdighet, liang]
source: AI-Sakra-Examinationsformer-Research-Report-2026-05-21.md
citation: "Liang et al. (2023) Patterns; PMC ChatGPT-polished study (2025); Hastewire/EyeSift Benchmarks (2026)."
---

# AI-detektorers bias mot ESL-elever och atypisk prosa

## Kärninsikt
AI-detektorers falska positiva drabbar systematiskt de elevgrupper som har minst resurser att överklaga: ESL-elever (engelska/svenska som andraspråk), neurodivergerande elever, elever med dyslexi och elever med atypisk skrivstil. Liang et al. (2023) visade att sju ledande detektorer konsekvent klassificerade icke-modersmålstexter som AI-genererade. Hastewire/EyeSift (2026) rapporterar att Turnitin når **upp till 50 % falska positiva på ESL-text**. PMC-studie 2025 visar att biasen kvarstår efter LLM-utvecklingen 2024-2025. Detta är inte en buggfix-fråga utan en strukturell egenskap: detektorerna är tränade på "typisk" engelsk prosa och flaggar avvikelse, oavsett orsak.

## Mekanism
LLM:er och icke-modersmålsskribenter har en delvis överlappande statistisk signatur: lägre lexikal variation, mer regelbunden syntax, färre idiom, högre genomsnittlig per-token-sannolikhet. Detektorerna mäter "förutsägbarhet" och klassar förutsägbar text som AI. ESL-elever skriver förutsägbart eftersom de använder förrådets säkra mönster. Resultatet: korrekt skriven men icke-idiomatisk svenska/engelska från en flerspråkig elev flaggas - och eleven har minst social kapital att försvara sig.

## Empiri
- **Liang, W. et al. (2023)**, "GPT Detectors Are Biased Against Non-Native English Writers". *Patterns*. Sju detektorer testade på TOEFL-essäer.
- **PMC (2025)**, "ChatGPT-polished scientific writing": bias kvarstår även när texten är polerad efter LLM-utvecklingen 2024-2025.
- **Hastewire/EyeSift Benchmarks (2026)**: Turnitin FP upp till 50 % på ESL.
- **SDLR (2024)** och liknande studier: neurodivergerande elever (autism, ADHD) flaggas oftare pga repetitiv eller "monoton" stil.

## Implikation för klassrummet
- **Aldrig agera disciplinärt enbart på detektorutslag.** Det är ett krav från equity-perspektiv, inte bara från evidens.
- **Skriftliga AI-riktlinjer måste explicit utesluta detektorbevis som ensam grund.** Skolinspektionens tillsyn 2025-2026 bör fånga detta.
- **Flerspråkiga klasser är särskilt utsatta.** I en SH/SO-klass med många elever som har svenska som andraspråk innebär detektoranvändning aktiv diskriminering.
- **Pedagogisk korrigering före anklagelse.** Den danska modellen (Danske Gymnasier 2024): vid förstagångsfusk samtal och omdoning, inte direkt påföljd. Skyddar mot FP-fall.
- **Bygg in samtalskontroll istället.** 5-minuters muntligt utkasts-samtal särskiljer säkrare än någon detektor.

## Spänningar
Skolor som *redan* har detektorer i drift kan ha svårt att backa offentligt. Säkrare att skifta från "vi använder X för att hitta fusk" till "vi använder X som ett av flera signaler" och sedan fasa ut.

## Kopplingar
- [[detektionsparadigmets-sammanbrott-2024-2026]] — den övergripande empiriska bilden
- [[Kulturella feedbackskript i flerspråkiga klassrum]] — paralleller från feedback-fältet
- [[ai-som-accommodation-paradox]] — det andra equity-spåret
- [[Lärarnas ser likvärdighetsproblemet tydligare än den offentliga debatten antyder]] — analog struktur: systemfel ojämlikt fördelat
- [[MOC - Bedömning och betygssättning]]

## Källa
Liang, W. et al. (2023). *GPT Detectors Are Biased Against Non-Native English Writers.* Patterns.
