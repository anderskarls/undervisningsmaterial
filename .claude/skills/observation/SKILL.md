---
name: observation
description: Fånga en elevobservation eller åtgärd till Elevlägesbilden. Triggas när användaren dikterar/skriver en observation om en elev med Elev-ID, t.ex. "observation MSA26A-07 ..." eller "åtgärd MSA26B-12 ...".
allowed-tools: Write, Bash
---

# Observation — infångning

Sparar en lärarfångad observation (eller åtgärd) som fil i `elevdata/HT26/observationer/`, redo för nästa undantagssyntes.

## Hårda regler

- **Endast Elev-ID** (format `GRUPP-NN`, t.ex. `MSA26A-07`). Om användaren råkar säga ett klarnamn: spara INTE namnet - be om Elev-ID:t, eller spara med `OKÄND` och flagga att användaren måste rätta ID:t. Klarnamn får aldrig hamna i filen.
- Redigera aldrig - fånga användarens formulering, snygga bara till talspråk vid diktering.

## Process

1. Identifiera Elev-ID och om det är en **observation** eller en **åtgärd** (prefix "åtgärd:").
2. Spara till `elevdata/HT26/observationer/YYYY-MM-DD-HHMM-ELEVID.md`:

```markdown
---
created: YYYY-MM-DD
type: observation
elev_id: GRUPP-NN
tags: [elevdata]
---

**YYYY-MM-DD** - GRUPP-NN - texten (för åtgärd: inled med `åtgärd:`)
```

3. Bekräfta kort: "Sparad - tas med i nästa undantagssyntes." Inget mer; infångning ska vara friktionsfri.

Flera elever i samma diktering → en fil per elev.
