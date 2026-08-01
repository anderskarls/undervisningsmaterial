# Eval-rapport: Parallell lektionsgenerering i /planera-moment

**Datum:** 2026-03-10
**Status:** Eval klar, skill-ändring ej implementerad

## Bakgrund

Användaren vill att steg 5-6 i `/planera-moment` (generering av lektionsplaner + presentationer) ska köras parallellt med en agent per lektion, istället för sekventiellt.

## Testupplägg

- **Momentplan:** "Ungas ekonomi" (Samhällskunskap 1a1, 5 lektioner x 60 min)
- **Baseline:** Sekventiell generering med nuvarande skill (en agent kör alla lektioner)
- **Parallell:** 5 separata agenter, en per lektion, genererar både docx + pptx

## Resultat

| Mätvärde | Sekventiell | Parallell | Skillnad |
|----------|------------|-----------|----------|
| **Väggklocka** | 17.3 min | 8.7 min | **2x snabbare** |
| Tokens | 128k | 524k | 4x mer |
| Tool-anrop | 57 | 257 | 4.5x mer |
| Filer genererade | 10 | 10 | Samma |

## Kvalitetsjämförelse

### Lektionsplaner (docx)
- Parallella planer är **15-25% mer detaljerade** (mer text per lektion)
- Båda följer sex-fas Rosenshine-strukturen
- Båda klarar AI-svaghetschecken
- Parallella planer inkluderar explicit E/C/A-progression i varje fil

### Presentationer (pptx)
- **Problem: Visuell inkonsistens** - varje agent valde sin egen färgpalett och design
  - Lektion 1: Teal/grön accent
  - Lektion 3: Ocean blue med mörklila footer
  - Lektion 4: Terracotta/guld med vertikal linje
  - Sekventiella presentationerna hade konsekvent mörkblå palett genom alla 5
- **Problem: Teckenfel** - Lektion 3 parallell: "Racker" istället för "Räcker" (svenska tecken tappades)

### Innehåll
- Parallella planer har mer konkreta exempel och siffror per lektion
- Sekventiella planer har bättre koherens mellan lektioner (gemensam röd tråd)
- Risk för duplicering av aktiviteter i parallellt läge (ingen helhetsöverblick)

## Identifierade fixes för parallell version

1. **Gemensam färgpalett** - Specificera färgpalett + typografi i prompten till varje agent (väljs i steg 4 eller nytt steg 4b)
2. **Teckenkodning** - Explicit krav på svenska tecken (å, ä, ö) i agentpromptarna
3. **Koherens** - Inkludera hela exit ticket-kedjan + retrieval review-kopplingar i varje agentprompt
4. **Helhetsöverblick** - Nytt steg efter parallell generering där orchestrator granskar koherens

## Planerad skill-ändring

### Nytt flöde (steg 5-6 ersätts):

**Steg 5a: Lektionsöversikt för godkännande**
- Presentera sammanfattning av alla lektioner (innehåll, metod, exit tickets, differentiering)
- Välj gemensam färgpalett + typografi för presentationer
- Läraren godkänner

**Steg 5b: Parallell generering**
- Spawna en agent per lektion
- Varje agent genererar BÅDE docx och pptx
- Varje agent får: momentplan, sin lektionsbeskrivning, exit ticket-kedjan, pedagogiskt ramverk, vald färgpalett
- Alla agenter körs parallellt

**Steg 5c: Koherenskontroll + presentation**
- Orchestrator samlar resultat
- Kontrollerar: konsekvent terminologi, exit ticket-kedja hänger ihop, ingen duplicering
- Presenterar allt för läraren
- Läraren ger feedback på det som behöver justeras

## Filsökvägar

- Workspace: `.claude/skills/planera-moment-workspace/`
- Sekventiella outputs: `iteration-1/eval-sequential-generation/with_skill/outputs/`
- Parallella outputs: `iteration-1/eval-parallel-generation/with_skill/outputs/`
- Slide-bilder (parallella): `/tmp/eval-slides/par/`
- Slide-bilder (sekventiella): `iteration-1/eval-sequential-generation/with_skill/outputs/slides/`
