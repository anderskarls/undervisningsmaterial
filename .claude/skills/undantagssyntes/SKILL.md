---
name: undantagssyntes
description: Veckovis undantagssyntes för Elevlägesbilden - hämtar pseudonymiserad signaldata via bryggan, bedömer avvikelser (varning/lyft/osynlig elev) per kursinstans, skriver rapport och uppdaterar elevakter. Triggas av "undantagssyntes", "veckosyntes", "kör elevlägesbilden".
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Undantagssyntes

Det primära gränssnittet mot Elevlägesbilden: en veckovis, bedömande rapport som endast lyfter avvikelser. Elever utan avvikelse nämns inte. Se `CONTEXT.md` (glossar) och `docs/adr/0001-0003` för domändefinitioner - de är bindande.

## Hårda regler

- **Endast Elev-ID.** Om någon datakälla mot förmodan innehåller något som liknar ett klarnamn eller en e-postadress: avbryt, rapportera till användaren, skriv ingenting.
- **Absolut beläggskrav.** Varje avvikelse citerar specifika signaler med datum. En bedömning utan belägg får inte skrivas.
- **Max ~5 avvikelser per kursinstans.** Taket tvingar urvalet att vara skarpt. Hellre 2 skarpa än 5 tunna.
- **Läs aldrig nyckelfilen** (`.secrets/elevnyckel/nyckelfil.csv`) eller källsystemens rådata direkt - all signaldata går via bryggan.
- **Ingen ärendehantering.** Inga statusar, inga påminnelser. Uppföljning sker i bedömningen (känd varning under åtgärd vs. ny varning; åtgärd utan förändring flaggas).

## Process

### 1. Hämta signaldata via bryggan

```bash
cd "$VAULT_BASE_PATH/resources/elevlagesbild" && ./run_brygga.sh
```

Bryggan hämtar färsk data från förmågeträningen, classroom-tool och survey-plattformen, byter alla källidentiteter mot Elev-ID via nyckelfilen (lokalt, utan LLM) och skriver pseudonymiserad JSON till `resources/elevlagesbild/out/signaler-YYYY-MM-DD.json`. Läs den filen - inget annat.

Om bryggan rapporterar omappade identiteter: stanna och be användaren komplettera nyckelfilen först.

### 2. Läs kontext

- Nya observationer/åtgärder: `elevdata/HT26/observationer/*.md` (ej `behandlade/`)
- Elevakter för elever som förekommer i signaler eller observationer: `elevdata/HT26/elevakter/`
- Föregående syntes: senaste filen i `elevdata/HT26/synteser/`

### 3. Bedöm avvikelser per kursinstans

Bedömningen är kontextuell (mönster över signalkällor), inte regelstyrd, men sker inom explicita kriterierubriker:

- **Varning** - negativt mönster (fallande resultat, uteblivna inlämningar, negativa observationer, åtgärd som inte gett förändring)
- **Lyft** - positiv vändning värd att bekräfta
- **Osynlig elev** - inga signaler i någon källa på ~3 veckor. Frånvaro av signaler är själv en avvikelse.

Observationer väger tyngst för tidig varning. Skilj **ny varning** från **känd varning under åtgärd** (kolla åtgärdsloggen i elevakten).

### 4. Skriv syntesrapporten

Fil: `elevdata/HT26/synteser/YYYY-vNN-undantagssyntes.md`. Struktur:

```markdown
---
created: YYYY-MM-DD
type: undantagssyntes
vecka: YYYY-vNN
tags: [elevdata]
---

# Undantagssyntes YYYY-vNN

## MSA26A - Historia 1b

### ⚠ MSA26A-07 - varning (ny)
- **Bedömning:** ...
- **Belägg:** förmågeträningen: 0 övningar sedan 2026-09-02; classroom: uppgift X ej inlämnad (deadline 2026-09-05)
- **Föreslaget nästa steg:** ...

### ↑ MSA26A-13 - lyft
...

## MSA26B - Historia 1b
...

## Restlista (fakta, ingen bedömning)
| Kursinstans | Elev-ID | Rest | Deadline |
|---|---|---|---|
```

Restlistan är en ren faktasektion (administrativt läge är stödjande, inte kärnan).

### 5. Uppdatera elevakter

För varje elev som lyfts som avvikelse: skapa elevakt från `elevdata/_mallar/elevakt-mall.md` om den saknas, för in veckobedömningen under `## Veckobedömningar`, uppdatera `## Aktuell lägesbild`.

För varje ny observation/åtgärd i `observationer/`: för in i rätt elevakts `## Observationer`/`## Åtgärder`, flytta sedan filen till `observationer/behandlade/`.

### 6. Avsluta

- Logga i `log.md`: `## [YYYY-MM-DD] syntes | Undantagssyntes vNN - X avvikelser (Y varningar, Z lyft, W osynliga)`
- Presentera rapporten kort för användaren: antal avvikelser per kursinstans och de viktigaste förslagen på nästa steg.
