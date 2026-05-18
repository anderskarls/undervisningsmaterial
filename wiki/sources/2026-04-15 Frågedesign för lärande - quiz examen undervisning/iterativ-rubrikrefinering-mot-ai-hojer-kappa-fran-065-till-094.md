---
created: 2026-04-15
updated: 2026-04-15
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - rubrik
  - AI-bedomning
  - iterativ-forbattring
  - kalibrering
  - LLM
  - feedback
source: questioning-for-learning-research-report-2026-04-15
---

# Iterativ rubrikrefinering mot AI-feedback höjer bedömarkappa från 0.65-0.75 till 0.88-0.94

Det mest praktiskt användbara fyndet i Bannan med fleras studie (2026, medicinsk kontext) är att nyckeln till AI-bedömningens imponerande reliabilitet *inte ligger i modellen* utan i rubrikutvecklingsprocessen. Mellan april 2024 och februari 2025 körde teamet tre iterationer av GPT-4-bedömning mot human experts. Efter varje iteration analyserade de divergenser, förtydligade rubriktexten och körde igen. Kappa förbättrades från 0.65-0.75 (början) till 0.88-0.94 ("nästan perfekt") efter tre rundor.

Detta är en metod vilken lärare som helst kan använda utan medicinsk kontext. Rubriken börjar som hypotes om vad som ska mätas. AI bedömer ett antal svar. Du jämför. Där ni avviker är oftast fel hos *rubriken* - den var otillräckligt specificerad för att styra bedömningen åt ett enda håll. Omformulera, testa igen, iterera. Efter tre eller fyra rundor har rubriken blivit tillräckligt specifik för att både du och AI ska landa i samma bedömning - vilket ger dig en rubrik som andra bedömare också kan använda.

Den bredare principen här är att *rubriker är inte statiska dokument utan iterativa artefakter*. En rubrik som inte har kalibrerats mot faktiska elevsvar är bara en önskelista. En rubrik som har kalibrerats tre gånger är ett bedömningsverktyg. AI är den snabbaste sparringpartnern för denna iteration - tidigare krävdes tre kollegor och en eftermiddag.

## Varför det spelar roll

Före varje större bedömningsuppgift: skriv rubriken, välj fem provsvar från förra årets kurs, be AI bedöma dem mot rubriken, jämför med din egen bedömning, identifiera vilka rubriktexter som var tvetydiga, formulera om. Kostnad: en timme. Avkastning: en rubrik som dels styr din rättning säkrare, dels är kommunicerbar till eleverna i förväg, dels klarar inspektion från kollega eller Skolverket.

## Källa

Bannan, B., et al. (2026). Iterative rubric refinement with GPT-4 for medical assessment. (Refererad i questioning-for-learning-research-report-2026-04-15.)

Yavuz, F., Celik, O., & Yavas Celik, G. (2025). Utilizing large language models for EFL essay grading. *British Journal of Educational Technology*. DOI: 10.1111/bjet.13494.

## Kopplingar

- [[ai-bedomning-av-essaer-nar-manniskoniva-icc-094]]
- [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]]
- [[rubrik-baserad-prompting-forbattrar-ai-feedback-112-procent]]
- [[tvadelade-rubriker-for-tolkande-amnen-innehall-plus-argumentation]]
