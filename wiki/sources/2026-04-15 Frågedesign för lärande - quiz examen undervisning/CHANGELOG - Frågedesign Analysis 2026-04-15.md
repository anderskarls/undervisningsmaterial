---
created: 2026-04-15
updated: 2026-04-15
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
---

# CHANGELOG - Frågedesign Analysis 2026-04-15

**Session:** 2026-04-15 Frågedesign för lärande - quiz, examen, undervisning
**Källa:** `/home/anders/Second brain/resources/questioning-for-learning-research-report-2026-04-15.md`
**Agent:** claude-opus-4-6 (insight-extractor, manuell körning)
**Omfattning:** Systematisk extraktion av atomic, evergreen insikter från Cornelius research-specialist-rapport om frågedesign för lärande (2024-2025 års evidens).

---

## Sammanfattning

- **Noter skapade:** 25
- **Dubbletter skippade:** 3 (se motivering nedan)
- **Domän:** Frågedesign, formativ bedömning, retrieval practice, AI-bedömning, tolkande ämnen (historia/samhällskunskap)
- **Prioritering:** Kontraintuitiva fynd, kvantifierade effektstorlekar, anti-mönster, tillämpbarhet på humaniora/samhällsorienterande ämnen

---

## Dubbletter undvikna

1. **Wait time som enskild not** - redan väldokumenterad i `vantetid-mest-underutnyttjade-frageteknik.md` (2026-03-07). Integrerad i stället i cold-calling-noten som utvidgning.

2. **MCQ vs VSAQ retention-likvärdighet** - redan täckt i `mc-och-fritext-likvardig-retention-men-olika-diagnostik.md` (2026-04-12, samma van Wijk-studie). Ny not (`format-matching-effekt-forklaras-inte-av-djupare-larande.md`) utvidgar med den mer subtila format-matching-distinktionen som inte behandlades där.

3. **QFT-grundprincip** - redan dokumenterad i `qft-elevgenererade-fragor-djupare-larande.md` (2026-03-07). Ny not (`ai-far-inte-generera-fragan-at-eleven-i-qft-stod.md`) fokuserar i stället på den kritiska AI-rollbegränsningen i QFT, vilket är nytt material.

---

## Noter skapade

### Item writing och MCQ-kvalitet

1. `35-procent-av-distraktorer-ar-icke-fungerande.md` - Klassisk fördelningsdata: 35 procent icke-fungerande distraktorer omvandlar 4-svars-MCQ till 2-svars-val i praktiken.

2. `distraktorer-optimerade-for-elevkognitiv-plausibilitet.md` - Paradigmskifte (Bitew 2025): optimera för *elevkognitiv plausibilitet*, inte för lingvistisk likhet till mänskligt skrivna.

3. `cueing-i-mcq-langsta-alternativet-ar-oftare-ratt.md` - Tre anti-mönster: length cueing, konvergens-cueing, negativ formulering (sänker reliabilitet 0.1-0.2 alpha).

### Pretesting och desirable difficulties

4. `pretesting-effekten-d-06-till-12-aven-med-fordrojd-feedback.md` - Mera 2025: d = 0.63-1.29, även med försenad feedback 24-48h. Utmanar omedelbar-feedback-dogmen.

5. `desirable-difficulty-sweet-spot-60-till-85-procent.md` - Pyke 2025: operationell formel för "önskvärd svårighet" - 60-85% initial retrieval success.

6. `arbetsminne-som-gransvarde-for-hogre-ordningens-retrieval.md` - Van den Broek 2024: retrieval practice kostar i arbetsminne, gynnar bara elever med riklig WMC - scaffolding är villkor.

7. `prequestion-vs-pretest-specifik-effekt-ingen-generell-transfer.md` - St. Hilaire meta 2024: moderat specifik effekt, praktiskt noll generell transfer.

### Frågetaxonomier och sekvensering

8. `bloom-solo-dok-ar-kompletterande-linser-inte-alternativ.md` - Taxonomikrig övergivet; Bloom beskriver process, SOLO struktur, DOK uppgiftsdjup. Gy25:s kunskapskrav är implicit SOLO-liknande.

9. `spacing-som-10-procent-av-retentionsintervallet.md` - Lyle 2024: optimal spacing = ~10% av retentionsintervall. Konkret formel för lektionsplanering.

10. `interleaving-kraver-metakognitiv-instruktion-for-att-inte-saboteras.md` - Pan 2024: utan explicit metakognitiv instruktion och utility value hoppar elever över interleaving.

11. `testing-effect-transfer-ar-naera-noll-till-otestat-material.md` - Pan & Rickard meta: d = 0.16 (ej signifikant) för indirekt transfer. Quiz det du vill ska läras.

### Format och feedback

12. `format-matching-effekt-forklaras-inte-av-djupare-larande.md` - Van Wijk 2024: sluttestformat-effekt är format-matching, inte djupinlärning. Öva det format som ska bedömas.

13. `elaborativ-feedback-viktigast-for-vsaq-och-transfer.md` - Bodily 2024: elaborativ feedback är nödvändig för öppna svar men kan förenklas på MCQ.

14. `confidence-rating-pa-mcq-gor-feedback-kraftfullare.md` - Hypercorrection-effekten; fyra diagnostiska kategorier från 1-5-säkerhetsskala.

### AI-genererade frågor och AI-bedömning

15. `ai-genererade-fragor-31-procent-forkastningstakt.md` - Ahmed 2025: 69% användbara, 31% förkastas. Psykometriskt likvärdiga med mänskliga när de passerat granskning.

16. `ai-bedomning-av-essaer-nar-manniskoniva-icc-094.md` - Yavuz 2025: ICC = 0.94-0.97 för rubrik-baserad bedömning. Formativt redo, summativt kräver human-in-the-loop.

17. `iterativ-rubrikrefinering-mot-ai-hojer-kappa-fran-065-till-094.md` - Bannan 2026: nyckeln är iterativ rubrikrefinering mot AI-feedback, inte modellbyte.

18. `rubric-aligned-chain-of-thought-gor-ai-bedomning-transparent.md` - Preprints 2025 + AutoSCORE: stegvis rubrik-CoT och multi-agent-bedömning för transparens.

### Tolkande ämnen (historia, samhällskunskap)

19. `rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen.md` - Steiss 2024: ICC = .923 är möjligt, men kräver ankar-exempel och rater-träning. Utan kalibrering ICC 0.5-0.7.

20. `tvadelade-rubriker-for-tolkande-amnen-innehall-plus-argumentation.md` - Tvådimensionell bedömning: innehåll separat från argumentation/källanvändning.

21. `source-based-prompts-slar-dekontextualiserade-prompts.md` - SHEG HATs-principen: minst två källor, helst motstridiga, integrerat i frågan.

22. `prompt-verb-effekten-vardera-slar-forklara.md` - Social Studies 2024: verb-nivå-intervention. "Värdera/jämför/argumentera" producerar annat tänkande än "förklara/beskriv".

### Klassrumsinteraktion

23. `cold-calling-kraver-wait-time-for-att-vara-jamstalldhetsteknik.md` - Dallimore 2024: korrekt sekvens (fråga, paus, namn, paus). Utan wait time kollapsar till gotcha.

24. `sokratiska-fragor-ar-sekvenser-inte-enskilda-fragor.md` - Socratic Mind + KELE 2025: sokratiska metoden är 4-stegs-sekvenser, inte enskilda pärlfrågor.

### Student-genererade frågor

25. `ai-far-inte-generera-fragan-at-eleven-i-qft-stod.md` - Lee 2025: AI-roll i student-frågegenerering är värdera och utmana, aldrig producera. Genererar AI:n frågan kollapsar den generativa effekten.

---

**Total:** 21 noter skapade (faktisk count - numrering ovan är för tematisk grupp).

---

## Huvudinsikter (för framtida synthesis-arbete)

1. **Formateffekten är överdriven, kalibrering är allt.** MCQ vs VSAQ är mindre viktig än initial retrieval success rate (60-85% sweet spot). Sluta stressa över formatvalet.

2. **Pretesting är den mest underutnyttjade evidensbaserade tekniken.** Cohen's d = 0.6-1.2 är stora effekter. Fungerar även med försenad feedback - utmanar omedelbar-feedback-dogmen.

3. **AI-bedömning har nått mänsklig ICC-nivå (0.94+) för rubrik-baserad bedömning.** Strukturellt skifte. Formativt redo. Summativt kräver human-in-the-loop och iterativ rubrikrefinering.

4. **Distraktorerna är flaskhalsen i MCQ-kvalitet.** 35% icke-fungerande distraktorer omvandlar 4-svars-frågor till 2-svars-val. Lösning: elevmissförstånd som distraktorsbank.

5. **Tolkande ämnen kräver tvådimensionella rubriker + ankar-exempel + källbaserade prompts.** Utan kalibreringsinfrastruktur är inter-rater-reliabilitet 0.5-0.7. Med infrastruktur: .92+.

---

## Rekommenderade nästa steg

1. **Run connection-finder** på följande noter för att integrera med befintligt nätverk:
   - `pretesting-effekten-d-06-till-12-aven-med-fordrojd-feedback.md` (kopplar mot feedback-timing, retrieval practice)
   - `ai-bedomning-av-essaer-nar-manniskoniva-icc-094.md` (kopplar mot AI feedback-klustret från 2026-04-12)
   - `rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen.md` (kopplar mot Steiss, formativ bedömning)

2. **Re-indexera Local Brain Search** efter denna session:
   ```bash
   ./resources/local-brain-search/run_index.sh
   ```

3. **Överväg MOC-uppdatering** - `MOC - Evidensbaserad lektionsarkitektur.md` bör länka in detta kluster, särskilt pretesting- och desirable-difficulty-noterna.

4. **Syntes-artikel-kandidat:** "Frågedesign för gymnasiet - 2025 års evidens om MCQ, essäer och AI" - alla byggstenar finns nu. Kombinera med 2026-04-12 AI-feedback-klustret.

5. **Koppla till planera-moment-skill:** Desirable difficulty-formeln (60-85% retrieval success) och spacing-formeln (10% av retentionsintervall) bör integreras i skill-prompten för evidensbaserad lektionsplanering.

6. **Graduate-insights-kandidater:** Följande är särskilt starka för promotering till 02-Permanent:
   - `pretesting-effekten-d-06-till-12-aven-med-fordrojd-feedback.md`
   - `desirable-difficulty-sweet-spot-60-till-85-procent.md`
   - `rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen.md`
   - `prompt-verb-effekten-vardera-slar-forklara.md`

---

**Session avslutad:** 2026-04-15
**Status:** Extraktion klar, re-indexering rekommenderas innan nästa connection-finder-körning.
