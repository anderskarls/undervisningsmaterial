---
created: 2026-04-23
updated: 2026-04-23
created_by: claude-opus-4-7
updated_by: claude-opus-4-7
agent_version: 03.26
type: document-insight
source: Metakognition, Förkroppsligad & Social Kognition — Research Report 2026-04-23
tags: [ai-i-undervisning, metakognition, kalibrering, feedback, tolkning]
---

# AI-kalibreringsfeedback måste tolka - bara rätta svar räcker inte

## Kärninsikt
2025 års CHI-studie testade AI-verktyg som ger metakognitiv kalibreringsfeedback och visade att *tolkad* feedback (inte bara rätt svar) ökade lärandevinst med 8.9% över kontrollgrupp. Bara att ge korrekt prestationsfeedback räcker inte; AI måste *förklara* vad skillnaden mellan elevens uppskattning och faktiska prestation betyder. Detta är ett viktigt designkriterium när lärare bedömer AI-verktyg: "visar rätt svar" är inte samma som "stödjer metakognitiv kalibrering".

## Empiriskt stöd
- **Studie:** Learning Behaviors Mediate the Effect of AI-powered Support for Metacognitive Calibration on Learning Outcomes. *Proceedings of the 2025 CHI Conference*.
- **Metod/stickprov:** Experimentell jämförelse av AI-feedbacktyper med kontrollgrupp
- **Effektstorlek/resultat:** Tolkad AI-feedback ökade lärandevinst med 8.9% jämfört med kontrollgrupp. Korrekt prestationsfeedback *utan* tolkning gav inte denna effekt.
- **DOI/URL:** 10.1145/3706598.3713960

## Mekanism
Metakognitiv kalibrering kräver inte bara faktainformation ("ditt svar var fel") utan meta-information ("du underskattade din osäkerhet här - du trodde du visste 80%, men bara 40% var rätt"). Tolkande feedback pekar ut mönster: *varför* eleven överskattar, *vilka* frågetyper hen ofta missar, *vad* det säger om elevens självkännedom. Detta är den information som bygger bättre monitoring över tid. Råa svar utan tolkning ger eleven prestationsdata men inte metakognitiv utveckling.

## Implikation för gymnasieundervisning
- **Utvärdera AI-verktyg på deras tolkningskapacitet** - inte bara om de "svarar rätt"
- **Design-prompt för AI som feedback-verktyg:** "Jämför elevens säkerhetsskattning med faktiskt resultat. Peka ut mönster över flera uppgifter. Förklara vad gapet mellan känd och faktisk kunskap tyder på."
- **Undvik AI-verktyg som bara rättar** - de ger prestationsdata men inte kalibrering
- **Använd AI strategiskt i kalibreringsträning:**
  1. Elev gör quiz + anger säkerhet per fråga
  2. AI ger tolkande feedback ("du är systematiskt övermodig på EU-relaterade frågor")
  3. Nästa quiz används för att testa om kalibreringen förbättras
- **Viktig kombination:** AI-kalibreringsfeedback *plus* explicit klassrumsdiskussion av mönster - inte bara individuell AI-interaktion
- **Motverkar Dunning-Kruger:** systematisk AI-tolkad feedback är ett nytt verktyg specifikt för att motverka övermod i t.ex. samhällskunskap (se kompletterande note om DKE politisk kunskap)
- **Varning från arxiv 2510.16019:** Passiv AI-användning *deaktiverar* System 2 och minskar lärande. AI-kalibreringsverktyg måste vara *aktivt strukturerade* - inte konsumtion av svar

## Koppling till vault
- [[dunning-kruger-politisk-kunskap-bestar-ak-7-till-10]] - AI-tolkning är en motåtgärd mot DKE
- [[sjalvbedomning-kalibrering-kravs-traning]] - primär mekanism: kalibrering kräver återkommande feedback
- [[enkel-aterkoppling-slar-utforliga-forklaringar]] - kontrast: för *innehållsfeedback* är enkelhet bra; för *kalibrerings*feedback krävs tolkning
- [[de-neys-logical-intuition-system-1-kan-vara-korrekt]] - tolkad feedback bygger bättre System 1-intuitioner över tid

## Kontrast/Kontrovers
8.9% förbättring är modest - det är inte en revolutionerande effekt. Boundary condition: studien var kort och utfördes i experimentell miljö; klassrumsimplementation kan ha andra effekter. Generellare varning: arxiv 2510.16019 (2025) visar att AI-verktyg generellt *minskar* kunskap och skapar "over-reliance". Det specifika designvalet av tolkande kalibreringsfeedback är alltså ett av få positiva AI-fynd - det handlar om *designen*, inte om AI i sig. Lärare som experimenterar med AI-feedback måste aktivt välja verktyg med denna tolkande kapacitet, inte standardchattbottar.
