---
created: 2026-04-11
updated: 2026-07-11
created_by: claude-opus-4-6
updated_by: claude-fable-5
agent_version: "04.26"
tags: [pedagogik, larappar, cognitive-load, Mayer, multimedia]
source: Pedagogiska appar design research report 2026-04-11
---

# Dekorativa bilder och "seductive details" ranker lägst i Mayers 2024-metaanalys

Wang et al. (2025) i *Educational Research Review* - en metaanalys över Richard Mayers multimediaforskning - bekräftar att de största effektstorlekarna för inlärning kommer från följande principer, i prioritetsordning:

1. **Att ta bort "seductive details"** (intressanta men irrelevanta fakta/bilder).
2. **Modality-principen**: narration + visualisering slår text + visualisering.
3. **Personalisering**: konversationsliknande ton slår formell.
4. **Coherence på meningsnivå**: täta, fokuserade meningar.

**Rankat lägst**: animationer och dekorativa grafiska element. De lägger på extraneous cognitive load utan att bidra till schema-formation. Detta är särskilt kontraintuitivt eftersom en stor del av modern UX-praxis tenderar att lägga på "delight details" (animerade illustrationer, lottie-animationer, bakgrundsgrafik) för att appen ska "kännas modern".

Skulmowski & Xu (2021) utvidgar taxonomin: digitala miljöer genererar en *ny* kategori extraneous load från **interaktivitet, disfluency, realism och redundans**. Var och en av dessa kan boosta motivation samtidigt som de skadar inlärning - en trade-off som designern måste hantera medvetet, inte av misstag.

## Implikationer för design
- Inga dekorativa illustrationer i själva quiz-flödet.
- Inga bakgrundsbilder bakom frågor.
- Inga animationer utom där de förklarar något (t.ex. en karta som visar territoriella förändringar över tid).
- Bilder i frågor ska *alltid* vara pedagogiskt relevanta - om bilden kan tas bort utan att frågan förändras, ta bort den.
- "Personalisering" betyder konversationston, inte fancy grafik. "Välj det alternativ du tror är rätt" är bättre än "SVARA:".

## Koppling till survey-platform
Motstå impulsen att göra appen "snygg" med illustrationer, emoji-headings, bakgrundsmönster. Varje bild måste förtjäna sin plats pedagogiskt. Minimalism är inte estetisk preferens här - det är evidensbaserat.

## Koppling till escape rooms: narrativ som seductive detail

Escape room-litteraturens "chocolate-covered broccoli"-felmode - ett stämningsfullt narrativ eller tema som inte faktiskt krävs för att lösa pusslet - är i CLT-termer exakt samma mekanism som seductive details: intressant men innehållsmässigt ovidkommande material som konkurrerar om arbetsminnet utan att bidra till schemabildning. Se [[choklad-overdragen-brokkoli-pussel-maste-vara-blooms-matta]] och [[karaktarsperspektiv-som-narrativ-teknik-i-historia-escape-rooms]], som varnar specifikt för att ett rikt historiskt karaktärsnarrativ kan "dölja" snarare än bära den historiska kunskap pusslet ska pröva. Skillnaden mot en quiz-app är intressant: i escape room-fältets egen lösning ska inte narrativet tas bort (till skillnad från dekorativa bilder i en quizapp) - istället görs pusslet beroende av narrativet på ett sätt som tvingar innehållsbearbetning. Samma underliggande princip, två olika designstrategier beroende på om mediet tillåter obligatorisk interaktion (escape room) eller inte (statisk quiz-fråga).

## Källa
- Wang et al. (2025). "A meta-analysis of Richard Mayer's multimedia learning research." *Educational Research Review*. https://www.sciencedirect.com/science/article/pii/S1747938X25000673
- Skulmowski & Xu (2021). "Understanding Cognitive Load in Digital and Online Learning." *Educational Psychology Review*. https://link.springer.com/article/10.1007/s10648-021-09624-7
