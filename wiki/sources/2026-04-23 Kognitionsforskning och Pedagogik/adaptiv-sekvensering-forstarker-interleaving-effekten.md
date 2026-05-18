---
created: 2026-04-23
updated: 2026-04-23
created_by: claude-opus-4-7
updated_by: claude-opus-4-7
agent_version: 03.26
type: document-insight
source: Cognitive Mechanisms for Learning — Research Report 2026-04-23
tags: [kognitionsforskning, pedagogik, interleaving, adaptiv-sekvensering, spaced-repetition, Anki, diskriminering, digitala-verktyg]
---

# Adaptiv sekvensering förstärker interleaving-effekten — fasta veckoblad gör det inte

## Kärninsikt
En 2025-studie visar att **algoritmiskt val av nästa övningsobjekt** (baserat på elevens aktuella prestation) förstärker interleaving-effekten jämfört med fast sekvens. Mekanismen: diskrimineringssvårigheten är maximal när objekten är **precis förväxlingsbara** på elevens nuvarande nivå. Fasta interleaving-scheman missar detta moment. Implikation: Anki med ease-factor-justering implementerar redan detta — fasta papperskopior gör inte det.

## Empiriskt stöd
- **Studie:** (2025). *Tailoring Interleaved Practice: Does Adaptive Sequencing Boost the Interleaving Effect?* Learning and Instruction.
- **Metod/stickprov:** Experimentell jämförelse av adaptiv vs fast interleaving-sekvens, utfallsmått retention och transfer.
- **Effektstorlek/resultat:** Adaptiv sekvensering gav signifikant större interleaving-effekt än fast sekvensering. Effekten drivs av att diskrimineringssvårigheten kalibreras mot elevens aktuella förväxlingstendens.
- **DOI/URL:** https://www.sciencedirect.com/science/article/pii/S1041608025001803

## Mekanism
Interleaving-effekten bygger på att hjärnan tvingas **diskriminera** mellan liknande kategorier. Diskriminering är maximalt produktiv när kategorierna är **svåra att skilja på elevens nuvarande nivå** — inte så svåra att eleven ger upp, inte så lätta att diskriminering blir trivial. En fast sekvens presenterar samma svårighetsgrad för alla elever, oavsett var de befinner sig. En adaptiv algoritm väljer nästa objekt så att det är förväxlingsbart mot det som precis besvarats — maximerar produktiv svårighet individuellt. Detta är desirable-difficulty-principen konkretiserad till **per-elev-per-moment-kalibrering**.

## Implikation för gymnasieundervisning
- **Fasta frågeblad med interleaving är sub-optimala** — svårighetsgraden matchar inte elevens aktuella nivå.
- **Digitala verktyg med adaptivt val** (Anki, Quizlet med spaced-repetition, välutformad quiz-app) **utnyttjar principen**; papperskopior gör det inte.
- **Lärare som skapar quiz i LMS:** välj en variant med adaptiv svårighetsjustering om möjligt.
- **Kombinera med Hwang-fyndet:** adaptiv sekvens måste också respektera schema-first-regeln. Om eleven inte har grundschemat, kalibreras adaptiv algoritm mot för låg nivå och blir bara blockad träning (vilket är rätt för den eleven i den fasen).
- **Klassrumsdiskussion:** om du ser att en specifik elev förväxlar två begrepp systematiskt, skapa en mini-session med dessa två blandade — manuell adaptiv sekvensering.
- **Konkret i samhällskunskap:** om eleverna förväxlar socialism och socialdemokrati, skapa övning där exempel från båda blandas — tvinga diskriminering just där den är svag.

## Koppling till vault
- [[interleaving-skadar-lag-presterande-utan-initial-blockering]] — schema-first är förutsättning innan adaptiv interleaving blir effektiv
- [[interleaving-regelbaserat-vs-memorering-blockering-vinner-for-regler]] — adaptiv effekt gäller främst vid memorering/diskriminering
- [[interleaving-kraver-metakognitiv-instruktion-for-att-inte-saboteras]] — elevens buy-in är oberoende villkor
- [[spaced-review-2-4-dagar-later-ar-sweet-spot]] — spacing är en annan parameter som också bör adaptivt kalibreras
- [[desirable-difficulty-sweet-spot-60-till-85-procent]] — adaptiv sekvens håller eleven i sweet spot

## Kontrast/Kontrovers
Adaptiv sekvensering förutsätter teknisk infrastruktur som inte alla klasser har — inte alla skolor erbjuder spaced-repetition-verktyg. Manuell adaptation (läraren observerar och justerar) är möjlig men begränsad. Dessutom: algoritmer kan missa pedagogisk kontext (en elev kan ha en dålig dag, vilket algoritmen tolkar som sänkt nivå). Det är ett **förstärkande** verktyg, inte ett ersättande. Adaptiv interleaving utan etablerat schema är fortfarande oproduktivt (se Hwang 2025).
