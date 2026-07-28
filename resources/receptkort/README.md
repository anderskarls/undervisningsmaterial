# Receptkort

Sätter ett recept som ett PDF-receptkort i rent serif-format. Används av
skillen `/receptkort`, men går lika bra att köra för hand.

## Varför ett eget skript

Obsidian-sandboxen saknar PDF-motor. Varken weasyprint, wkhtmltopdf, LaTeX,
LibreOffice eller en headless webbläsare finns installerad, och
`flatpak-spawn --host` är blockerat så värdmaskinens verktyg går inte att nå.
`receptkort.py` skriver därför PDF-formatet direkt: text sätts i base14-fonten
Times, som varje PDF-läsare redan har, så ingen font behöver bäddas in.

Radbrytningen behöver riktiga teckenbredder. De ligger i `metrics.json`,
extraherade ur URW-fonten NimbusRoman (metriskt identisk med Times). Saknas
filen letar skriptet upp AFM-filerna på systemet i stället - båda vägarna ger
byte-identisk PDF. Kopierar du mappen till en annan maskin räcker det att
`metrics.json` följer med.

## Användning

```bash
python3 receptkort.py recept.json                  # -> output/recept/<slug>.pdf
python3 receptkort.py recept.json --ut ~/kort.pdf  # egen sökväg
python3 receptkort.py recept.json --mapp ~/Skrivbordet
cat recept.json | python3 receptkort.py -          # från stdin
python3 receptkort.py --schema                     # exempel på indata
```

Verifiera alltid resultatet efteråt:

```bash
python3 verifiera.py output/recept/Kortets-namn.pdf
```

## Indataschema

Bara `titel` och `steg` är obligatoriska.

```json
{
  "titel": "Rättens namn",
  "undertitel": "valfri underrubrik i kursiv",
  "meta": "Kokbok · Författare · N portioner",
  "intro": "Kort ingress, sätts i kursiv dämpad stil.",
  "ingredienser": ["200 g något", "1 msk annat"],
  "steg": ["Första steget.", "Andra steget."],
  "noter": ["Tips, byten, skalning."],
  "kalla": "Ur Författare, Kokbok. Hämtat ur kokbokssamlingen ÅÅÅÅ-MM-DD."
}
```

`ingredienser`, `steg` och `noter` kan grupperas under underrubriker genom att
en post skrivs som objekt i stället för sträng. Formerna får blandas fritt i
samma lista:

```json
"ingredienser": [
  "500 g gula ärter",
  {"rubrik": "Till serveringen", "poster": ["Skarp senap", "Timjan"]}
]
```

Grupperade steg numreras om från 1 i varje grupp, vilket passar recept med
faser ("Dagen innan", "Samma dag"). Vill du ha löpande numrering genom hela
receptet, håll `steg` som en platt lista. Rubriken över stegen är "Gör så här"
och kan bytas med fältet `steg_rubrik`.

## Skrivregler

Följ vaultets stil: svenska tecken direkt i filen, bindestreck i stället för
tankstreck. Texten kodas som cp1252 vid utskrift, vilket täcker svenska,
vanlig romansk diakritik och typografiska tecken som `·`, `°` och `½`. Tecken
utanför det (till exempel emoji eller grekiska) blir frågetecken i PDF:en -
`verifiera.py` varnar om den hittar frågetecken.

## Verifieringen

PDF-formatet skrivs för hand, så ingen bibliotekskod fångar misstag.
`verifiera.py` följer xref-tabellen och kontrollerar att varje offset pekar på
rätt objekt, att inga referenser är döda, att strömlängderna stämmer, att ingen
text hamnar utanför sidan eller marginalerna, och att svenska tecken överlever
kodningen. Den avslutar med kod 1 om något är fel och är billig att köra, så
kör den varje gång.
