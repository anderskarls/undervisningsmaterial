---
created: 2026-04-15
updated: 2026-04-15
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - MCQ
  - confidence-rating
  - hypercorrection
  - metakognition
  - feedback
  - bedomning
source: questioning-for-learning-research-report-2026-04-15
---

# Confidence rating på MCQ gör feedback kraftfullare - hypercorrection ger starkare minnesspår

Hypercorrection-effekten är ett välkänt paradoxalt fynd i minnesforskning: när elever är *högt säkra* på ett fel svar och får det korrigerat, kvarstår korrigeringen *starkare* i minnet än när de var osäkra från början. Den emotionella reaktionen på att ha haft fel - den där lilla "oj"-smällen - skapar en mer distinkt minnesspår än en neutral korrigering av ett osäkert svar. Detta utnyttjar flervalsfrågor särskilt väl: eleven tvingas committa till ett alternativ, och en confidence rating tillför en metakognitiv dimension på toppen.

Praktisk implementation: lägg till en 1-5-skala "Hur säker är du?" vid varje MCQ. Detta gör två saker. För det första: det tvingar eleven att metakognitivt bedöma sin egen kunskap, vilket är en träning i sig. För det andra: det producerar fyra diagnostiska kategorier efteråt i stället för två:

- **Hög säkerhet + rätt svar**: konsoliderad kunskap, ingen åtgärd behövs
- **Hög säkerhet + fel svar**: *missuppfattning under hög säkerhet* - guld för riktad feedback, hypercorrection-effekten maximeras
- **Låg säkerhet + rätt svar**: gissning som råkade gå bra - eleven behöver befästa
- **Låg säkerhet + fel svar**: klassisk kunskapslucka, normal korrigering

De verkligt viktiga eleverna att rikta individuell feedback mot är de i kategori 2 - hög säkerhet, fel svar. De är övertygade om något fel och kommer annars att bära missuppfattningen vidare. En gymnasielärare med 30 elever kan inte ge individuell feedback till alla, men kan till de fem som låg fel på högt konfidensnivå.

## Varför det spelar roll

Lägga till en 1-5-ruta på varje MCQ kostar ingenting och ger en diagnostisk superkraft. Quiz-plattformar som Kahoot och Mentimeter har detta som funktion men få lärare använder det systematiskt. Börja med att fråga confidence på bara de tre svåraste frågorna i en quiz - så att inte hela övningen blir tung. Använd resultatet för att identifiera vilka elevmissförstånd som är mest resistenta (hög säkerhet, fel svar), och adressera dessa först i nästa lektion.

## Källa

Bodily, R., et al. (2024). Systematisk översyn av feedback-timing och -typ. Refererad i questioning-for-learning-research-report-2026-04-15.

Butterfield, B., & Metcalfe, J. (Klassisk hypercorrection-forskning, ca 2001, fortsatt replikerad 2024.)

## Kopplingar

- [[35-procent-av-distraktorer-ar-icke-fungerande]]
- [[jag-ar-inte-saker-som-tredje-alternativ]]
- [[metakognitiva-fragor-sjalvreglerat-larande]]
- [[sjalvbedomning-kalibrering-kravs-traning]]
- [[missuppfattningskorrigering-genom-retrieval-och-aterkoppling]]
