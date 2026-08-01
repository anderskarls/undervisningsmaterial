# Gymnasie-Planeraren

Dialogdriven momentplanering för gymnasielärare. Skapar kompletta undervisningsmoment med lektionsplaner och presentationer grundade i Gy11.

## Komma igång

Installera pluginen och kör:

```
/planera-moment
```

Eller ange ämne direkt:

```
/planera-moment historia
```

## Vad pluginen gör

Pluginen leder dig genom en 7-stegsprocess där du fattar alla pedagogiska beslut:

| Steg | Vad som händer |
|------|----------------|
| 1 | Välj ämne, kurs och centralt innehåll |
| 2 | Formulera lärandemål kopplade till kunskapskrav (E/C/A) |
| 3 | Välj pedagogiskt upplägg och metoder |
| 4 | Strukturera momentet i lektioner med progression |
| 5 | Generera detaljerade lektionsplaner (Word-dokument) |
| 6 | Skapa presentationer (PowerPoint) |
| 7 | Generera momentöversikt för elever (HTML) |

## Ämnen

- Samhällskunskap (1b, 2)
- Historia (1a1, 1b)
- Juridik

## Output

Varje moment genererar en katalog med:

```
moment-[ämne]-[tema]/
├── momentplan.md                    # Översikt med alla beslut
├── lektion-1.docx                   # Detaljerad lektionsplan (Word)
├── lektion-2.docx
├── ...
├── presentation-lektion-1.pptx      # Klassrumspresentation (PowerPoint)
├── presentation-lektion-2.pptx
├── ...
└── momentoversikt.html              # Momentöversikt för elever (HTML)
```

Lektionsplanerna är Word-dokument, presentationerna PowerPoint-filer och momentöversikten en HTML-sida som kan publiceras via Google Sites.

## Pedagogisk grund

- **Gy11** och Skolverkets ämnesplaner
- **Backward design** (Wiggins & McTighe)
- **Constructive alignment** (Biggs)
- Evidensbaserade lärandestrategier: retrieval practice, spaced practice, interleaving (Brown, Roediger & McDaniel)

## Komponenter

| Komponent | Fil | Syfte |
|-----------|-----|-------|
| Kommando | `commands/planera-moment.md` | 7-stegsprocessen |
| Skill | `skills/svensk-gymnasiepedagogik/SKILL.md` | Pedagogisk kärnkunskap |
| Skill | `skills/docx/SKILL.md` | Word-dokumentgenerering |
| Skill | `skills/pptx/SKILL.md` | PowerPoint-generering |
| Skill | `skills/html-momentoversikt/SKILL.md` | HTML-momentöversikt för elever |
| Referens | `skills/svensk-gymnasiepedagogik/references/gy11-struktur.md` | Kunskapskrav och progressionsord |
| Referens | `skills/svensk-gymnasiepedagogik/references/amnesplaner.md` | Centralt innehåll per kurs |
| Referens | `skills/svensk-gymnasiepedagogik/references/pedagogiska-metoder.md` | Undervisningsmetoder |
| Referens | `skills/svensk-gymnasiepedagogik/references/lektionsplanering.md` | Lektionsplansmall |
| Referens | `skills/svensk-gymnasiepedagogik/references/presentationsteknik.md` | Presentationsdesign |
