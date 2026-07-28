---
name: receptkort
description: Gör ett recept ur kokbokssamlingen till ett svenskt PDF-receptkort i output/recept/. Triggas av "receptkort", "spara receptet som pdf", "gör en pdf av receptet", eller när användaren ger ett recept-ID från kokboks-MCP:n och vill ha det utskrivet.
allowed-tools: Bash, Write, Read, mcp__kokbok__get_recipe, mcp__kokbok__search_recipes
---

# Receptkort

Hämtar ett recept ur kokbokssamlingen, översätter det till svenska och sätter
det som PDF i `output/recept/`. Verktyget ligger i `resources/receptkort/`.

## Process

1. **Hämta receptet.** Har användaren ett recept-ID, kör `get_recipe` direkt.
   Har hen bara en beskrivning, kör `search_recipes` först och stäm av vilket
   av träffarna som avses innan du sätter något.

2. **Översätt till svenska och räkna om måtten.** Recepten är på engelska med
   amerikanska mått. Skriv om till svensk matlagningssvenska med metriska mått:
   ounces och pounds till gram, cups och fluid ounces till deciliter,
   tablespoon/teaspoon till msk/tsk, Fahrenheit till Celsius, tum till cm.
   Behåll originalets röst och de tips som bär rätten - korta inte ned
   metoden till punktlista. Gramangivelser som redan står i parentes i
   originalet är författarens egna, använd dem.

3. **Skriv JSON.** Spara till en temporär fil (scratchpad-katalogen, inte
   vaultet). Schemat står i `resources/receptkort/README.md`, och
   `python3 receptkort.py --schema` skriver ut ett exempel. Fyll `meta` med
   `Kokbok · Författare · N portioner` och `kalla` med
   `Ur Författare, Kokbok. Hämtat ur kokbokssamlingen ÅÅÅÅ-MM-DD.`
   Lägg recept-ID:t som sista post i `noter` så kortet går att spåra tillbaka.

4. **Sätt och verifiera.** Kör alltid båda stegen:

   ```bash
   cd "$VAULT_BASE_PATH/resources/receptkort"
   python3 receptkort.py /sökväg/till/recept.json
   python3 verifiera.py "$VAULT_BASE_PATH/output/recept/<Slug>.pdf"
   ```

   `verifiera.py` avslutar med kod 1 om PDF:en är trasig. Rapportera aldrig
   kortet som klart utan att verifieringen sagt "INGA PROBLEM".

5. **Leverera.** Ge full sökväg och öppna mappen:
   `xdg-open "$VAULT_BASE_PATH/output/recept"`. Nämn kort vad du ändrat i
   översättningen om något krävde ett val (utbytta ostar, omräknade portioner).

## Att tänka på

- **Ingredienser som är svåra att få tag på i Sverige** - lägg en not om
  rimligt utbyte i `noter` i stället för att tyst byta ut dem i listan.
- **Taggen "vegetarisk" i samlingen är inte pålitlig.** Flera recept taggade
  vegetariska innehåller ansjovis eller fisksås. Läs ingredienslistan innan du
  kallar något vegetariskt för användaren.
- **Recepten är privata.** `output/recept/` hör inte till undervisnings-
  kunskapen. Skriv aldrig tillbaka receptinnehåll till `wiki/` och ta inte upp
  det i ingest eller query.
- Skriv med svenska tecken direkt och bindestreck i stället för tankstreck.
  Emoji och andra tecken utanför cp1252 kan inte sättas.
