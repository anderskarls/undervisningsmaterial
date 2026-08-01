---
created: 2026-05-21
updated: 2026-07-28
created_by: claude-opus-4-7
updated_by: claude-opus-5
agent_version: 04.26
type: source
tags: [ai-detektion, examination, bedömning, validitet, sadasivan, ai-säkra-prov]
source: AI-Sakra-Examinationsformer-Research-Report-2026-05-21.md
citation: "Sadasivan et al. (2024), MDPI Information 16(10):905 (2025), EyeSift/Hastewire Benchmarks (2026), arXiv 2507.15286 (2025)."
---

# Detektionsparadigmets sammanbrott 2024-2026

## Kärninsikt
Den empiriska litteraturen 2024-2026 har stängt frågan om AI-detektion som primärt försvar mot AI-fusk. Sadasivan et al. (2024) visar både informationsteoretiskt och empiriskt att SOTA-detektorer (watermarking, neurala klassificerare, zero-shot, retrieval-baserade) inte är robusta - en rekursiv parafrasattack sänker accuracy med 20-30 % efter 3-5 omskrivningar. MDPI Information (2025) drar i peer-reviewad metaanalys slutsatsen att **ingen detektor är pålitlig som primärt försvar**. EyeSift/Hastewires benchmark av över 10 000 essäer rapporterar falska positiva 15-45 %, med Turnitin upp till 50 % FP på ESL-text. TEQSA, JISC, UKÄ och UNESCO konvergerar mot rekommendationen att detektion inte ensam kan utgöra grund för disciplinärenden.

## Mekanism
Detektorerna baseras på statistiska mönster (perplexity, burstiness, n-gram-fördelningar) som AI-genererad text har när den lämnas oredigerad. Två brytpunkter har inträffat: (1) LLM:erna har blivit bättre på att imitera mänsklig stilvariation, så in-domain-signaturen har försvagats; (2) eleverna har lärt sig parafrasera, redigera och prompta för "humanisering". GPTZero rapporterar 0,24 % FP men 55-75 % detection på humaniserad text — bra på pappret, fel på det som faktiskt cirkulerar i klassrummet. Cross-domain-utvärderingar (arXiv 2507.15286) visar substantiellt generaliseringsmisslyckande under distributionsshift.

## Empiri
- **Sadasivan, Kumar, Balasubramanian, Wang & Feizi (2024)**, "Can AI-Generated Text Be Reliably Detected?", arXiv:2303.11156 (uppdaterad). Teoretisk och empirisk omöjlighet att robust detektera.
- **MDPI Information 16(10):905 (2025)**, "Evaluating the Effectiveness and Ethical Implications of AI Detection Tools in Higher Education".
- **EyeSift/Hastewire Benchmarks (2026)**: 10 000+ essäer; FP-rate 15-45 %; Turnitin upp till 50 % på ESL.
- **arXiv 2507.15286 (2025)**, "Beyond Easy Wins: A Text Hardness-Aware Benchmark".
- Vanderbilt, Yale, Michigan State, UT Austin har **avaktiverat Turnitins AI-detektor** under 2024.

## Implikation för klassrummet
- **Sluta använda detektorer som bevis.** Skolinspektionen 2026 är på samma linje — skriftliga AI-riktlinjer kan inte luta på detektion.
- **Ompröva betygsunderlag som produceras hemma.** Om läraren inte kan särskilja AI- och elevproducerad text, kan inte hemarbeten vara primärt betygsunderlag (Skolverkets linje sedan 2023).
- **Bygg validitet strukturellt, inte forensiskt.** Se [[corbin-strukturella-vs-diskursiva-bedomningsandringar]].
- ~~**Använd detektion bara som ett av flera signaler i en pedagogisk korrigering**~~ - som danska Danske Gymnasier rekommenderar för förstagångsfusk. **Detta råd faller 2026-07-28.** Det vilar på antagandet att en människa kan vikta en opålitlig signal lågt. Du, Liu och Xian (2026, N = 214) mätte att hon inte kan: en fiktiv detektionsrapport som visade 7 mot 87 procent förändrade lärarnas kvalitetsbedömning och poängsättning av **samma uppsats** med ηp² = 0,579-0,745, och enbart rödmarkeringen hade självständig effekt (ηp² = 0,297). Effektstorlekarna innebär att en detektionssiffra i praktiken sätter betyget även när läraren tror att den är ett bidrag bland flera - vilket var precis vad deltagarna i experimentet trodde. Se [[automation-bias-hos-larare-experimentellt-bekraftad]]. Sidans övriga slutsatser står oförändrade.

## Spänningar
Detektorbranschen (Turnitin, GPTZero, Originality) fortsätter publicera marknadsföringssiffror som inte reproduceras i oberoende benchmarks. Skolledningar som köpt licenser har incitament att tro på dem. Pedagogiskt motivet att *visa* att man "gör något åt AI-fusk" kan överleva det empiriska underlaget.

## Kopplingar
- [[ai-detektor-bias-mot-esl-elever]] — den mest sårbara FP-gruppen
- [[dawson-validitet-slar-fusk-som-central-fraga]] — varför detektion är fel ram
- [[corbin-strukturella-vs-diskursiva-bedomningsandringar]] — vad som faktiskt skyddar validitet
- [[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]] — analog kritik mot teknokratiska bedömningsverktyg
- [[automation-bias-hos-larare-experimentellt-bekraftad]] — varför "ett av flera signaler" inte är en möjlig hållning
- [[sverige-valde-manskliga-bedomare-framfor-ai-rattning]] — vad staten valde när samma fråga ställdes skarpt
- [[MOC - Bedömning och betygssättning]]
- [[MOC - Källkritik och digital kompetens]]

## Källa
Sadasivan, V., Kumar, A., Balasubramanian, S., Wang, W. & Feizi, S. (2024). *Can AI-Generated Text Be Reliably Detected?* arXiv:2303.11156. https://arxiv.org/abs/2303.11156
