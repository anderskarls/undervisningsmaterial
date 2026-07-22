# elevdata/ — Elevlägesbilden

Vaultets fjärde lager, med egen livscykel (se `docs/adr/0002-elevdata-bor-i-vaultet-med-gallring.md`).
Elevdata är operativ, pseudonymiserad och **gallras vid läsårsslut** - den ackumuleras inte som wiki-kunskap.

## Regler (bindande)

1. **Endast Elev-ID** - klarnamn förekommer aldrig i denna mapp (ADR 0001). Formatet är `GRUPP-NN`, t.ex. `MSA26A-07`. Kopplingen namn↔ID finns bara i nyckelfilen (`.secrets/elevnyckel/`, lokal och osyncad - LLM läser den aldrig).
2. **Slutsatser, inte rådata** (ADR 0003) - elevakter innehåller observationer, åtgärder och syntesens veckobedömningar med beläggscitat (datapunkt + datum). Aldrig kopior av källsystemens rådata.
3. **Gallring** - vid läsårsslut arkiveras eller raderas hela läsårsmappen. Inget härifrån flyttas till `wiki/`.

## Struktur

```
elevdata/
├── README.md            Denna fil
├── _mallar/             Mallar (elevakt, observation)
└── HT26/                Läsåret 2026/2027 - gallras sommaren 2027
    ├── elevakter/       En sida per Elev-ID (t.ex. MSA26A-07.md)
    ├── synteser/        Veckovisa undantagssynteser (2026-v34-undantagssyntes.md)
    └── observationer/   Infångade observationer, väntar på syntes
        └── behandlade/  Observationer som redan förts in i elevakt
```

## Flöden

- **Observation**: dikteras/skrivs med Elev-ID redan vid infångning ("MSA26A-07 räckte upp handen för första gången på tre veckor") → sparas som fil i `HT26/observationer/`. Vid nästa syntes förs den in i elevakten och filen flyttas till `behandlade/`.
- **Åtgärd**: loggas samma väg som en observation, med prefix `åtgärd:` ("åtgärd: MSA26B-12 samtal efter lektionen om inlämningarna").
- **Undantagssyntes**: veckovis körning via `/undantagssyntes`. Hämtar färsk signaldata via pseudonymiseringsbryggan (`resources/elevlagesbild/`), läser elevakter + nya observationer, skriver rapport till `synteser/` och för in veckobedömningar i berörda elevakter.

## Pilot HT26

Historia 1b i MSA26A + MSA26B (~60 elever). Datamodellen omfattar alla 6 kursinstanser.
Utvärdering v.44 - nedläggning är ett acceptabelt utfall om systemet inte visar något nytt.

Signalkällor v1: förmågeträningen, classroom-tool, survey-plattformen, egna observationer. Skola24 (frånvaro) är utanför v1.
