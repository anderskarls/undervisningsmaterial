---
description: Starta dialogdriven planering av ett komplett undervisningsmoment
allowed-tools: Read, Write, Edit, Bash(node:*), Bash(npm:*), Bash(python:*), Bash(pip:*), Bash(pdftoppm:*)
argument-hint: "[ämne (valfritt)]"
---

Tala svenska genom hela processen. Du är ett stöd för en professionell gymnasielärare — läraren fattar alla pedagogiska beslut, du hjälper att strukturera och producera material.

Läs in den pedagogiska skillen:
@${CLAUDE_PLUGIN_ROOT}/skills/svensk-gymnasiepedagogik/SKILL.md

Genomför en 7-stegsprocess för att planera ett komplett undervisningsmoment. Gå ALDRIG vidare till nästa steg utan lärarens uttryckliga godkännande. Vid varje steg: presentera konkreta förslag, invänta beslut, bekräfta beslutet genom att sammanfatta det.

Skapa en output-katalog för momentet. Namnge den `moment-[ämne]-[tema]` baserat på valen i steg 1 (t.ex. `moment-historia-franska-revolutionen`).

---

## Steg 1: Ämne, kurs och centralt innehåll

Om `$1` angavs, använd det som ämne. Annars fråga: "Vilket ämne vill du planera för? (samhällskunskap, historia eller juridik)"

Läs in ämnesplanerna:
@${CLAUDE_PLUGIN_ROOT}/skills/svensk-gymnasiepedagogik/references/amnesplaner.md

1. Presentera tillgängliga kurser för det valda ämnet. Låt läraren välja kurs.
2. Presentera det centrala innehållet för kursen, organiserat efter temaområde.
3. Fråga läraren vilka punkter ur det centrala innehållet som momentet ska täcka.
4. Fråga hur många lektioner (och hur långa) momentet ska omfatta.
5. Fråga om det finns ett särskilt tema eller en vinkel läraren vill ha (t.ex. "Kalla kriget med fokus på Berlinmuren" eller "Avtalsrätt genom verkliga rättsfall").

**Sammanfatta** valen och be läraren bekräfta innan du går vidare.

Uppdatera momentplanen:

```markdown
# Momentplan: [Tema]

## Grundinformation
- **Ämne/Kurs:** [val]
- **Centralt innehåll:** [valda punkter]
- **Antal lektioner:** [N] × [X] minuter
- **Tema/vinkel:** [ev. specificering]
```

Skriv momentplanen till `moment-[ämne]-[tema]/momentplan.md`.

---

## Steg 2: Lärandemål och kunskapskrav

Läs in Gy11-strukturen:
@${CLAUDE_PLUGIN_ROOT}/skills/svensk-gymnasiepedagogik/references/gy11-struktur.md

1. Identifiera de kunskapskrav som är relevanta för det valda centrala innehållet.
2. Föreslå 3-5 konkreta lärandemål. Varje lärandemål ska:
   - Använda observerbara verb från kunskapskraven (redogöra, analysera, resonera, jämföra, diskutera)
   - Visa progressionen genom att presentera E-, C- och A-nivå explicit
   - Vara direkt kopplade till det valda centrala innehållet
3. Presentera lärandemålen för läraren med E/C/A-progressionen synlig.
4. Fråga läraren om de vill ändra, lägga till eller ta bort mål.

**Sammanfatta** de beslutade lärandemålen och uppdatera momentplanen med dem.

---

## Steg 3: Pedagogiskt upplägg och metoder

Läs in metodreferensen:
@${CLAUDE_PLUGIN_ROOT}/skills/svensk-gymnasiepedagogik/references/pedagogiska-metoder.md

1. Föreslå **2-3 alternativa pedagogiska ansatser** som passar det valda innehållet och lärandemålen. Varje ansats ska vara en sammanhängande beskrivning, inte bara en metodlista:
   - Namn på ansatsen (t.ex. "Källkritisk undersökande ansats")
   - Kort beskrivning av upplägget
   - Pedagogisk motivering — varför den passar just detta moment
   - Forskningsstöd
   - Fördelar och nackdelar
   - Vilka metoder som ingår (EPA, seminarium, debatt, skriftlig analys osv.)

2. Låt läraren välja eller kombinera ansatser.

3. Diskutera **differentiering**: Hur stödjer vi elever som siktar på E? Hur utmanar vi elever som siktar på A? Be läraren om input.

4. Diskutera **formativa avstämningar**: Vilka formativa checkpoints ska finnas under momentet? (utgångsbiljetter, snabbskrivningar, lärpar)

**Sammanfatta** pedagogiskt upplägg, metoder och differentieringsstrategi. Uppdatera momentplanen.

---

## Steg 4: Lektionsstruktur med progression

Läs in lektionsplaneringsreferensen:
@${CLAUDE_PLUGIN_ROOT}/skills/svensk-gymnasiepedagogik/references/lektionsplanering.md

1. Föreslå en **lektion-för-lektion-struktur** för hela momentet. Varje lektion får:
   - Nummer och arbetstitel
   - Huvudinnehåll
   - Primär aktivitet/metod
   - Vilka lärandemål den adresserar

2. Gör **progressionen explicit**: Förklara varför lektionerna kommer i just denna ordning. Visa hur det analytiska kravet ökar genom momentet.

3. Identifiera:
   - Var retrieval practice-moment återkopplar till tidigare lektioner (spaced practice)
   - Var den mest kognitivt krävande lektionen ligger — är det rätt placering?
   - Var det finns naturliga stoppunkter om läraren behöver anpassa

4. Presentera strukturen som en numrerad lista och fråga läraren om de vill ändra ordning, lägga till, ta bort eller modifiera lektioner.

**Sammanfatta** den godkända strukturen och uppdatera momentplanen.

---

## Steg 5: Detaljerade lektionsplaner (Word-dokument)

Läs in docx-skillen:
@${CLAUDE_PLUGIN_ROOT}/skills/docx/SKILL.md

Säkerställ att `docx`-paketet är installerat: `npm install -g docx`

Generera **en lektion i taget**. Använd mallen från referensfilen.

Varje lektionsplan ska innehålla:

- **Lektion N: [Titel]**
- **Lärandemål för lektionen** — vilka av momentets mål som adresseras
- **Förberedelse** — vad läraren behöver göra innan lektionen
- **Tidsplanering** — minut-för-minut med fas, aktivitet och beskrivning
- **Lärarinstruktioner** — vad läraren säger/gör vid nyckelmoment, diskussionsfrågor, hur grupparbete faciliteras
- **Elevaktiviteter** — specifika instruktioner med tydliga steg
- **Differentiering** — konkreta stödstrukturer (mot E) och utmaningar (mot A)
- **Material som behövs** — allt som krävs
- **Koppling till kunskapskrav** — hur lektionen bidrar till E/C/A-progressionen

Kvalitetskontroll innan du presenterar varje lektionsplan:
- Har lektionen retrieval practice-koppling till föregående lektion?
- Överstiger elevaktiv tid 50% av total tid?
- Är differentieringen konkret (inte "stöd svagare elever")?
- Finns [VERIFIERA]-taggar vid osäkra faktapåståenden?
- Kopplar lektionen framåt till nästa?

Presentera lektionsplanen och fråga: "Vill du justera något i denna lektionsplan, eller ska jag gå vidare till nästa?"

**Generera som Word-dokument (.docx):**
Skapa varje godkänd lektionsplan som ett professionellt Word-dokument med `docx-js`. Använd:
- A4-format (11906 × 16838 DXA) med 1"-marginaler
- Rubrik: "Lektion N: [Titel]" som Heading 1
- Underrubriker (Lärandemål, Förberedelse, Tidsplanering, etc.) som Heading 2
- Tidsplaneringen som en formaterad tabell med kolumnerna: Tid, Fas, Aktivitet, Beskrivning
- Bullet-listor med `LevelFormat.BULLET` (aldrig unicode-bullets)
- Sidfot med kursnamn och momentets titel
- Teckensnitt: Arial, 12pt brödtext

Skriv ett Node.js-script som genererar .docx-filen och kör det.
Validera filen med `python ${CLAUDE_PLUGIN_ROOT}/scripts/office/validate.py`.
Spara till `moment-[ämne]-[tema]/lektion-[N].docx`.

---

## Steg 6: Presentationer (PowerPoint)

Läs in presentationsreferensen och pptx-skillen:
@${CLAUDE_PLUGIN_ROOT}/skills/svensk-gymnasiepedagogik/references/presentationsteknik.md
@${CLAUDE_PLUGIN_ROOT}/skills/pptx/SKILL.md
@${CLAUDE_PLUGIN_ROOT}/skills/pptx/pptxgenjs.md

Säkerställ att `pptxgenjs` är installerat: `npm install -g pptxgenjs`

Generera presentationer för varje lektion som har ett instruktions-/presentationsmoment. Generera **en presentation i taget**.

Varje presentation ska innehålla:
- Slide-titlar formulerade som frågor (inte påståenden)
- Max 3 nyckelpunkter per slide
- Diskussionsslides inbäddade var 3-4:e slide
- Talarnoter för varje slide (via `slide.addNotes()`)
- Tidsuppskattning i talarnoterna

**Generera som PowerPoint (.pptx) med pptxgenjs:**

Designprinciper:
- Välj en färgpalett som matchar ämnet (se pptx-skillens paletförslag)
- 16:9 layout (`LAYOUT_16x9`)
- Tydlig typografi: rubriker 36pt bold, brödtext 16pt, bildtexter 12pt
- Variera slide-layouter: använd inte samma layout för varje slide. Blanda:
  - Titelslides med mörk bakgrund
  - Innehållsslides med ljus bakgrund
  - Diskussionsslides med distinkt bakgrundsfärg och stor frågetext
  - Jämförelseslides med tvåkolumnslayout
  - Källslides med citat/källa centrerat
- Använd `bullet: true` för punktlistor (aldrig unicode-bullets)
- Använd `breakLine: true` mellan textrader
- Använd ALDRIG `#` i hexfärger — skriv `"2C5F2D"` inte `"#2C5F2D"`
- Skapa ALDRIG om option-objekt mellan slides — använd factory-funktioner

Skriv ett Node.js-script som genererar .pptx-filen och kör det.

Kvalitetskontroll (obligatorisk):
1. Konvertera till bilder och inspektera visuellt:
   ```bash
   python ${CLAUDE_PLUGIN_ROOT}/scripts/office/soffice.py --headless --convert-to pdf output.pptx
   pdftoppm -jpeg -r 150 output.pdf slide
   ```
2. Granska varje slide-bild: Överlappar element? Är texten läsbar? Har diskussionsslides rätt stil?
3. Åtgärda problem och verifiera igen.
4. Kontrollera innehåll: `python -m markitdown output.pptx`

Presentera och fråga om feedback innan du går vidare till nästa presentation.

Spara till `moment-[ämne]-[tema]/presentation-lektion-[N].pptx`.

---

## Steg 7: Momentöversikt för elever (HTML)

Läs in HTML-momentöversikt-skillen:
@${CLAUDE_PLUGIN_ROOT}/skills/html-momentoversikt/SKILL.md

Momentöversikten är en fristående HTML-sida som ger eleverna en samlad överblick av hela momentet — datum, innehåll, förberedelser och mål. Sidan kan publiceras via Google Sites eller liknande.

### 7a: Samla kompletterande information

Du har redan all pedagogisk data från steg 1–4. Fråga läraren om:

1. **Datum för varje lektion** — presentera lektionslistan och be läraren ange datum (t.ex. "Lektion 1: ?, Lektion 2: ?, ..."). Acceptera valfritt datumformat.
2. **Förberedelser** — "Finns det något eleverna ska förbereda eller ha med sig inför någon specifik lektion? (t.ex. läsa en text, ta med dator, repetera begrepp)"
3. **Lärarens namn** — "Vill du att ditt namn ska visas på sidan?" (valfritt)
4. **Övrigt meddelande** — "Finns det något extra du vill kommunicera till eleverna på sidan?" (valfritt)

### 7b: Generera HTML

Baserat på data från steg 1–4 och kompletteringarna ovan:

1. Välj en färgpalett och typografi som matchar ämnet (se skillen). Presentera valet kort för läraren.
2. Omformulera lärandemålen till **elevvänligt språk** — inga kunskapskravsformuleringar, utan konkreta beskrivningar av vad eleven ska kunna.
3. Generera en **self-contained HTML-fil** enligt skillens specifikation:
   - All CSS inline i `<style>`-block
   - Semantisk HTML med korrekt `lang="sv"`
   - Responsiv design (mobil, tablet, desktop)
   - Google Fonts via `<link>` (enda tillåtna externa resursen)
   - Lektionskort med nummer, titel, datum, innehåll och ev. förberedelser
   - Header med kursnamn, momenttitel och tidsperiod
   - Lärandemål i elevvänlig formulering
4. Presentera resultatet för läraren och fråga om justeringar.

Spara till `moment-[ämne]-[tema]/momentoversikt.html`.

---

## Avslutning

När alla steg är klara:

1. Presentera en **översikt** av allt genererat material med fillista:
   - `momentplan.md` — översiktsplanering
   - `lektion-N.docx` — detaljerade lektionsplaner (Word)
   - `presentation-lektion-N.pptx` — klassrumspresentationer (PowerPoint)
   - `momentoversikt.html` — momentöversikt för elever (HTML)
2. Fråga om läraren vill justera något.
3. Nämn kort vad som kan byggas vidare i framtiden: flashcards, elevmaterial, formativa bedömningsuppgifter.
4. Tipsa om att `momentoversikt.html` kan publiceras via Google Sites: skapa en ny sida, välj "Bädda in" > "Embed code" och klistra in HTML-koden, eller ladda upp filen och länka till den.

Avsluta med: "Ditt moment är klart! Alla filer finns i katalogen `moment-[ämne]-[tema]/`. Lektionsplanerna är Word-dokument, presentationerna är PowerPoint-filer och momentöversikten är en HTML-sida som du kan dela med eleverna via Google Sites — redo att använda direkt. Lycka till med undervisningen!"
