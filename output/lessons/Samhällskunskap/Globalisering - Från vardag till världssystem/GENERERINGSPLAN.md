---
created: 2026-04-22
updated: 2026-04-28
created_by: claude-opus-4-7-1m
updated_by: claude-opus-4-7-1m
agent_version: 03.26
---

# GENERERINGSPLAN — Globalisering Sam 3

> **Syfte:** Instruera en frisk Claude-instans (efter `/clear`) att generera allt återstående material för momentet utan att fråga läraren mellan varje steg.

---

## 1. Kontext

| | |
|---|---|
| **Kurs** | Samhällskunskap 3 (SAMSAM03) |
| **Moment** | Globalisering — Från vardag till världssystem |
| **Omfattning** | 8 lektioner × 80 minuter (640 min totalt) |
| **Position i kursen** | Slutet — ska binda ihop och toppa |
| **Bygger på** | Källkritikmoment (AI och konspirationsteorier) direkt innan — källkritiken *används*, repeteras ej |
| **Elevgrupp** | 22 elever, klarar helklassdiskussioner, blandat samhällsintresse, vetenskapligt skrivande sitter inte trots övning |
| **Pedagogisk ansats** | Deliberativ flerskalanalys med inbyggd teoridebatt (L5). Rörelse: konkret → abstrakt → examination |
| **Teorier** | Globaliseringsdimensioner (Held), Centrum-periferi (Wallerstein), Realism/liberalism |
| **Examination** | Val: utredande text (2-3 sidor) *eller* muntlig presentation (8-10 min). Samma analyskrav. |
| **Gemensamt objekt** | T-shirt från Shein (L1-5). Eget objekt från L6. |

### Lärandemål

| LM | Innehåll |
|----|----------|
| **LM 1** | Redogöra för + kritiskt diskutera de tre teorierna (styrkor/svagheter med vetenskapsteoretisk källa) |
| **LM 2** | Tillämpa teorierna i flerskalanalys (individ → Sverige → värld) |
| **LM 3 ⭐** | Ge exempel på hur vetenskapliga begrepp används i samhällsdebatten (kursens särskilda betoning) |
| **LM 4** | Argumentera, värdera andras ståndpunkter, söka/granska källor, presentera skriftligt/muntligt |

Full lärandemålsformulering med E/C/A-progression finns i `momentplan.md`.

---

## 2. Filstruktur och platser

### Markdown (vaultet)
```
/home/anders/Second brain/Undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/
├── momentplan.md
├── lektion-N.md
├── elevuppgift-lektion-N.md
├── presentation-lektion-N.html
└── momentoversikt.html
```

### Word + HTML + Git-repo (utanför vault)
```
/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/
├── README.md
├── .gitignore
├── lektion-N.docx
├── elevuppgift-lektion-N.docx
├── presentation-lektion-N.html
└── momentoversikt.html
```

### GitHub
- Repo: `anderskarl929/sam3-globalisering-vardag-till-varldssystem` (privat)
- URL: https://github.com/anderskarl929/sam3-globalisering-vardag-till-varldssystem
- Branch: `main`
- Auth: gh CLI redan inloggad som `anderskarl929`

### Kursminne
`/home/anders/Second brain/.claude/planera-moment/minne/samhallskunskap-3.md` (finns inte ännu — ska skapas i slutet)

---

## 3. Redan klart — HOPPA ÖVER

- [x] `momentplan.md` (steg 1-4 komplett)
- [x] `lektion-1.md` + `lektion-1.docx` (hook: vardagsobjektet)
- [x] `elevuppgift-lektion-1.md` + `.docx`
- [x] `presentation-lektion-1.html` (fas 3: T-shirt-story + 3-skalamodell)
- [x] `presentation-lektion-1-modellering.html` (worked example för uppgift 3)
- [x] `lektion-2.md` + `lektion-2.docx` (Held's fyra dimensioner)
- [x] Git-repot skapat, README + 6 commits pushade

---

## 4. Att generera (i ordning)

För varje uppgift: generera markdown i vaultet + .docx i undervisningsmaterial, commit + push efter varje lektion är komplett (lektionsplan + elevuppgift + ev. presentation).

### 4.1 Lektion 2 — fortsätt
1. `elevuppgift-lektion-2.md` + `.docx` — Frayer-modeller (4 dimensioner) + eget objekt-uppgift + begreppslista
2. `presentation-lektion-2.html` — fas 3: Held's fyra dimensioner

### 4.2 Lektion 3: Produktionskedjan — vem vinner, vem förlorar? (Wallerstein)
3. `lektion-3.md` + `.docx`
4. `elevuppgift-lektion-3.md` + `.docx` — två motstridiga källor om Bangladesh + källanalys-mall
5. `presentation-lektion-3.html` — fas 3: produktionskedjans makt + centrum-periferi

### 4.3 Lektion 4: Sverige i världsekonomin (meso-fokus)
6. `lektion-4.md` + `.docx`
7. `elevuppgift-lektion-4.md` + `.docx` — jämförelsematris Sverige-USA-Kina + aktuell händelse-analys
8. `presentation-lektion-4.html` — fas 3: Sveriges position i världssystemet

### 4.4 Lektion 5: Teoridebatt ⚠️ (mest krävande)
9. `lektion-5.md` + `.docx`
10. `elevuppgift-lektion-5.md` + `.docx` — debattregler + roll-kort (realism vs. liberalism) + case-beskrivning
11. `presentation-lektion-5.html` — fas 3: Realism vs. liberalism

### 4.5 Lektion 6: Vetenskap i samhällsdebatten ⭐ + examinationsstart
12. `lektion-6.md` + `.docx`
13. `elevuppgift-lektion-6.md` + `.docx` — debattinlägg-analys + instruktion för slutuppgiften + val av format/objekt
14. `presentation-lektion-6.html` — fas 3: hur begrepp används i debatten + examinationsinstruktion
15. `presentation-lektion-6-modellering.html` — worked example: hur läraren börjar en utredande text (både skriftligt och muntligt spår)

### 4.6 Lektion 7: Arbetslektion med handledning
16. `lektion-7.md` + `.docx`
17. `elevuppgift-lektion-7.md` + `.docx` — peer-feedback-checklista (baserad på kunskapskraven) + källhanteringsmall + presentationsmall
    — Ingen presentation för L7 (arbetslektion)

### 4.7 Lektion 8: Presentation, inlämning, syntes
18. `lektion-8.md` + `.docx`
19. `elevuppgift-lektion-8.md` + `.docx` — lyssnarmall för muntliga presentationer + slutreflektionsformulär
20. `presentation-lektion-8.html` — kort syntes-presentation (5-6 slides)

### 4.8 Slutmaterial
21. `examination-instruktion.md` + `.docx` — komplett slutuppgift med kunskapskravsmatris (E/C/A), instruktioner för båda format, exempel på bra frågeställning
22. `momentoversikt.html` — elevsidan (skillen `html-momentoversikt`). Använd palett: historia-tema eller demokrati-tema (mörk bakgrund funkar). Datum: **hoppa över** (lämna som "datum kommer"), lärarens namn: **hoppa över** (fråga inte)
23. Frågor till frågeappen (steg 5b) — försök MCP `survey-platform`, annars spara som CSV i repo

### 4.9 Kursminne
24. Skapa `/home/anders/Second brain/.claude/planera-moment/minne/samhallskunskap-3.md` med lärdomar från detta moment (se avsnitt 8 för vad som ska finnas med).

---

## 5. Innehållsspecifikation per lektion

### Lektion 2 — Globaliseringens fyra dimensioner

- **Retrieval review (8 min):** visa L1:s exit ticket-fördelning på tavlan (3 högar: ekonomiskt fokus / kulturellt-politiskt-socialt / flera). Öppning beror på vilken hög som dominerar.
- **Fas 3 (15 min):** Held's fyra dimensioner med exempel: ekonomisk (T-shirt), politisk (EU/FN/WTO), kulturell (K-pop/film), social (migration/studenter).
- **Fas 4 (30 min):** Frayer-modell parvis för tilldelad dimension (10 min) + gemensam T-shirt-kartläggning i 4 kolumner på tavla (20 min, EPA).
- **Fas 5 (15 min):** eget objekt från urval (kaffekopp / Netflix-serie / fotbollsmatch / McDonalds-meny), skriv 2-3 meningar per dimension.
- **Exit ticket:** *"Vilken dimension dominerar i din egen mobiltelefon? Motivera kort med ett exempel."*
- **Elevuppgift-innehåll:** Frayer-arbetsblad (fyra Frayer-modeller, en per dimension, förifylld mall för en — "ekonomisk"), eget objekt-analys-mall (fyra dimensioner), ordlista med 8-10 begrepp (från alla dimensioner).

### Lektion 3 — Produktionskedjan (Wallerstein)

- **Retrieval review:** baserat på L2:s exit ticket om mobilen — om hög 1 (svag motivering) dominerar, 2-3 min repetition av dimensionerna först.
- **Fas 3 (15 min):** Produktionskedjan i detalj (T-shirten). Introducera centrum-periferi (Wallerstein) som *kritiskt verktyg* — vem vinner, vem förlorar? Semi-periferi som koncept.
- **Fas 4 (30 min):** Källanalys i par av **två motstridiga perspektiv** på Bangladesh-fabrikerna (företagets/ägarens perspektiv vs. fabriksarbetarnas/fackförenings perspektiv). Använd källkritik från föregående moment — "vem? när? varför? vad säger den inte?". EPA-diskussion.
- **Fas 5 (15 min):** Tillämpa centrum-periferi på T-shirten — vem är centrum, vem är periferi, vem är semi-periferi?
- **Exit ticket:** *"Vem är centrum och vem är periferi i T-shirtens kedja? Vilken aktör har mest makt?"*
- **Elevuppgift-innehåll:** Två källtexter (ca ½ A4 vardera) — skriv realistiska men fiktiva texter: (A) pressmeddelande från ett stort modeföretag om "lokalt partnerskap i Dhaka", (B) intervju med en fackrepresentant för textilarbetare; källanalysmall (vem/när/varför/vad); centrum-periferi-kartläggning av T-shirten.

### Lektion 4 — Sverige i världsekonomin (meso)

- **Retrieval review:** baserat på L3:s exit ticket om centrum/periferi.
- **Fas 3 (15 min):** Sveriges roll — exportnation, hög-teknologisk semi-periferi eller centrum? Aktuell händelse: **Trumps tullar mot EU 2024-25** (import/exportchock) OCH **elpriser/Ukraina-kriget** (energi-globalisering). Använd Held + Wallerstein parallellt.
- **Fas 4 (30 min):** Jämförande analys av Sverige-USA-Kina på olika dimensioner. Strukturerad jämförelsematris.
- **Fas 5 (15 min):** Skriftlig kort analys: "Hur påverkas Sverige av [en av dessa händelser]? Använd både dimensionsbegreppen och centrum-periferi."
- **Exit ticket:** *"Vilken teori förklarar bäst Sveriges roll — Held's dimensioner eller Wallersteins centrum-periferi? Motivera."*
- **Elevuppgift-innehåll:** Jämförelsematris Sverige/USA/Kina; fakta-rutor om Trumps tullar och Ukraina-kriget-el (korta, 2-3 meningar vardera, sakliga); skrivmall för den korta analysen (stödmeningar).

### Lektion 5 — Teoridebatt ⚠️

- **Retrieval review:** baserat på L4:s exit ticket om teorier.
- **Fas 3 (15 min):** Realism vs. liberalism (IR-teori). Realism: stater agerar för egen vinning, maktbalans, säkerhet. Liberalism: samarbete möjligt, institutioner, handel skapar fred. Modellerad analys av en aktuell händelse ur båda perspektiv.
- **Fas 4 (30 min):** **Teoridebatt.** Klassen delas i två lag. Lag A tilldelas realism, lag B tilldelas liberalism. Case: "Ska Sverige stödja fortsatt vapenexport till [land X]?" eller "Ska EU införa tullar på kinesiska elbilar?". 10 min förberedelse i lag, 15 min debatt (3 rundor om 5 min), 5 min meta-reflektion.
- **Fas 5 (15 min):** Individuell skrivning: "Vilken teori stämmer bäst med din egen syn? Motivera med ETT konkret exempel."
- **Exit ticket:** *"Vilken teori passar bäst med din egen syn — och varför? Ge ETT argument."*
- **Elevuppgift-innehåll:** Debattregler (talartid, turordning, vad som är OK/inte OK), roll-kort för realism (bullet-lista med argument), roll-kort för liberalism (motsvarande), case-beskrivning med fakta om situationen, meta-reflektionsfrågor, skrivmall för fas 5.

### Lektion 6 — Vetenskap i debatten ⭐ + examinationsstart

- **Retrieval review:** baserat på L5:s exit ticket. Öppna med "Igår argumenterade ni för tilldelade teorier. Idag kliver vi ur det och tittar UTANPÅ — hur används teoretiska begrepp i verkliga debatter?"
- **Fas 3 (15 min):** Textanalys av ett debattinlägg om globalisering (skriv ett fiktivt realistiskt exempel — t.ex. en ledare om frihandel). Identifiera: vilka begrepp används? vilka teorier finns implicit? vilka antaganden? vad sägs inte? Introducera examinationsinstruktionen (båda format). Presentera worked example-slide (se `presentation-lektion-6-modellering.html`).
- **Fas 4 (30 min):** Analys i par av ett debattinlägg (eleverna får analysera). Kort helklassdiskussion.
- **Fas 5 (15 min):** Eleverna **väljer sitt eget objekt** för slutuppgiften och **väljer format** (text eller muntligt). Skriver en **första frågeställning** och motiverar valet.
- **Exit ticket:** *"Vilket objekt väljer du för slutuppgiften, vilken teori tror du blir viktigast, och varför?"*
- **Elevuppgift-innehåll:** Debattinläggs-exempel (fiktivt men realistiskt, ca 1 A4) om frihandel eller globalisering; analys-mall (begrepp/teorier/antaganden/luckor); examinationsinstruktion kort sammanfattning (full version i `examination-instruktion.docx`); mall för att välja objekt/teori/format.

### Lektion 7 — Arbetslektion

- **Retrieval review:** baserat på L6:s val av objekt/format.
- **Fas 3 (15 min):** **Kort repetition av källhantering** (bygger vidare på tidigare källkritikmoment): hur man hänvisar korrekt, vad som ska finnas med. Presentera peer-feedback-process.
- **Fas 4 (30 min):** Individuellt arbete med slutuppgiften. Läraren cirkulerar och handleder. Efter 20 min: 10 min peer-feedback i par (text-elever läser varandras, muntligt-elever gör kort draft-presentation för varandra).
- **Fas 5 (15 min):** Fortsatt individuellt arbete.
- **Exit ticket:** *"Vilka två källor har du hittills använt? Motivera varför de är relevanta för din frågeställning."*
- **Elevuppgift-innehåll:** Peer-feedback-checklista (baserad på kunskapskraven E/C/A, 5-7 frågor per nivå); källhanteringsmall (hur man citerar olika källor: webbartikel, bok, vetenskaplig artikel, statistik); mall för muntlig presentation (struktur: inledning / huvuddel / slutsats / tid); tidslinjemall (plan fram till L8).

### Lektion 8 — Presentation, inlämning, syntes

- **Retrieval review:** kort återblick på hela momentet.
- **Fas 3 (10 min):** **Kort** — introducera strukturen för lektionen. Läraren minns att texter ska lämnas in innan lektionen (eller samma dag).
- **Fas 4 (45 min — längre än vanligt för denna lektion):** Muntliga presentationer för de som valt det. 8-10 min per elev, 2-3 min frågor. Lyssnare använder lyssnarmall. Om fler än ~5 muntliga: dela klass i två grupper.
- **Fas 5 (15 min):** **Syntessession.** Koppling tillbaka till utility-value-övningen från L1: "Ni skrev varför detta kan vara relevant. Har det blivit det?" Gemensam brainstorm: vad har vi lärt oss?
- **Fas 6 (10 min):** Slutlig exit ticket + självreflektion.
- **Exit ticket:** *"Vad visste du inte vid lektion 1 som du vet nu? Ge ett konkret exempel. Och: vilken av de tre teorierna tyckte du var mest användbar?"*
- **Elevuppgift-innehåll:** Lyssnarmall för muntliga presentationer (vad lyssnaren noterar — struktur, teorianvändning, källhantering, frågor); slutreflektionsformulär (3-4 frågor om lärande); bedömningskriterier för egen självvärdering.

---

## 6. Regler för generering

1. **Följ sex-fas-modellen** för varje lektion (retrieval review, målaktivering, explicit instruktion, guidad övning, självständig övning, avslut). Tidsbudget för 80 min: ca 8+5+15+30+15+7.
2. **Elevaktiv tid >50%** (mål: 70%+). Guidad övning är längsta fasen.
3. **INGA [VERIFIERA]-taggar i presentationer** (eleverna ser dem). OK i lektionsplaner (för läraren) och i talarnoter.
4. **Svenska tecken direkt** (å, ä, ö) i alla filer. Använd UTF-8.
5. **Exit ticket-slingan:** varje lektions exit ticket informerar nästa lektions retrieval review — beskriv kopplingen explicit i nästa lektionsplan.
6. **Differentiering**: alltid konkret stöd mot E (stödmeningar, mallar, förifyllda exempel, pararbete med starkare elev) och utmaning mot A (⭐-frågor om paradoxer/flera perspektiv, fördjupningsmaterial).
7. **UDL**: minst en alternativ representationsform per lektion (visuellt, auditivt, textbaserat).
8. **Väv in källkritik** — eleverna har precis gått klart ett källkritikmoment, repetera inte grunderna, referera och använd.
9. **Punkt 3 (vetenskap i samhällsdebatten)** är kursens särskilda betoning — integrera i L4, L5, huvudfokus i L6.
10. **Commit + push efter varje lektion är komplett** till GitHub-repot.
11. **Inga emojis som ikoner** i presentationer — använd SVG (se slides-skillen). OK att använda ⭐ i text för A-utmaningar.
12. **Lärarens namn:** använd inte lärarens personliga namn i elev-material (läraren har inte angett att det ska visas).

---

## 7. Stilkrav

### Presentationer (reveal.js + Arkiv v2)

**Designsystem:** Arkiv v2 — användarens egna designsystem som ska användas i ALLT undervisningsmaterial. Akademisk/bokig estetik. Aldrig den gamla mörka samhällskunskap-paletten (rosa/teal/gul) — det är fasat ut sedan 2026-04-23.

**Full referens:** `resources/sam3-globalisering-vardag-till-varldssystem/Arkiv-deck-spec-v2.md` + `Mitt Designsystem.html`. Använd dem som sanning vid tveksamhet.

**Färgtokens (CSS custom properties):**
```css
--ink: #1F1A15;        --ink-2: #4A3F33;
--paper: #F4EDE1;      --paper-2: #EBE1CF;     /* aldrig ren vit */
--rule: #2A221A;
--bordeaux: #7A2E2E;   /* signaturaccent, cover, varning */
--marin: #2C3E55;      /* fakta, data */
--oliv: #5A6A3A;       /* tips, naturvetenskap */
--ocker: #B8862F;      /* highlight, eyebrow */
--mossgron: #3E5A3E;   /* fråga, diskussion */
--kritbla: #5A7A9A;    --tegel: #C96442;
```

**Typografi:** Cormorant Garamond (serif H1/H2/citat), Inter Tight (sans brödtext), JetBrains Mono (eyebrows/metadata/versaler med 2 px letter-spacing).

**Fyra layoutmönster** — varje slide följer ett:
- **A** Papper + accent (paper-bakgrund, färg bara i detaljer)
- **B** Färgad helyta (kapitelfärg full-bleed, text i paper)
- **C** Delad 50/50 eller 60/40 (paper-kolumn + färgad kolumn)
- **D** Ramad (färgad ram runt paper-yta — cover, callout)

**Inline-formattering** (Markdown-syntax → CSS):
- `*kursiv*` → Cormorant kursiv 600
- `**fet**` → vikt 800
- `==highlight==` → ocker-bakgrund 40 % alpha, vikt 700
- `__understreck__` → bordeaux 4 px tjockt, offset 6 px

**Slide-typer (10):** Cover (D), Section (B), Question (B mossgrön), Content (A), ContentHighlight (C), Timeline (A), Quote (B bläck), Callout (D), Data (A), Discuss (B mossgrön).

**Konventioner:**
- Canvas 1920×1080 (16:9), reveal.js-init med `width: 1280, height: 720` skalas
- Frågor som slide-titlar (aktiverar tänkande)
- Ett kursivt nyckelord per rubrik via `<em>` — aldrig bold
- Typografiska tecken: `▸ ● ▪ § №` — INGA emojis som ikoner
- Talarnoter på **varje** slide (`<aside class="notes">`)
- Fragment-avslöjande (`.fragment`) för progressiv uppbyggnad — använd särskilt på text-tunga matriser och listor så elever inte läser i förväg
- 10–14 slides per lektion (rimligt för 15 min fas 3)
- Max 3 nyckelpunkter per textlista
- Mastrhead + baseline (mono-versaler 16/15 px, 2 px letter-spacing) på varje slide för konsistent chrome
- INGA `[VERIFIERA]`-taggar i slides som elever ser. OK i talarnoter och lektionsplaner.

**Referensimplementation:** `presentation-lektion-4.html` är referenslektion för Arkiv v2 i Sam 3-momentet — 11 slides som täcker 7 av 10 slide-typerna.

### .docx
- A4 (11906 x 16838 DXA), 1"-marginaler (1440 DXA)
- Arial 12pt brödtext (size: 24 i docx)
- Rubriker: Heading 1 (36), Heading 2 (28), Heading 3 (24)
- Tabeller: `WidthType.DXA` (aldrig PERCENTAGE), `ShadingType.CLEAR` (aldrig SOLID), dubbla widths (columnWidths + cell width)
- Bullets: `LevelFormat.BULLET` (aldrig unicode-bullets)
- Sidfot: `"Lektion N | Sida X"` med `PageNumber.CURRENT`
- Sidhuvud: `"Samhällskunskap 3 — Globalisering — Från vardag till världssystem"` höger-justerad, grå
- Validera varje .docx med Python xml.etree (dokumentet finns redan i chain) eller `python3 resources/office-scripts/validate.py` om `defusedxml` är installerat

### Markdown
Frontmatter-krav enligt CLAUDE.md:
```yaml
---
created: 2026-04-22
updated: 2026-04-22
created_by: <modellnamn>
updated_by: <modellnamn>
agent_version: 03.26
---
```

---

## 8. Kursminnets innehåll

Efter att allt är genererat, skapa `/home/anders/Second brain/.claude/planera-moment/minne/samhallskunskap-3.md` med följande innehåll (analysera konversationen för justeringar och preferenser — om få justeringar skedde, dokumentera det):

```markdown
---
created: <datum>
updated: <datum>
created_by: <modellnamn>
updated_by: <modellnamn>
agent_version: 03.26
---

# Kursminne: Samhällskunskap 3

## Generella preferenser (från moment 1: Globalisering)

### Pedagogisk ansats
- Föredrar **deliberativ flerskalanalys** med worked examples och EPA som ryggrad
- Uppskattar **inbyggd teoridebatt** (kombinera ansatser) snarare än renodlade format
- Exit ticket-slinga är viktig — data från en lektion informerar nästa

### Skrivande
- Eleverna har ofta **övat vetenskapligt skrivande** men det sitter inte
- Behöver **konkreta stödstrukturer per moment** (inte generella skrivövningar)
- Worked examples (modellering) är effektiv metod

### Examination
- Uppskattar **val mellan skriftligt och muntligt** — differentiering av format, inte innehåll
- Samma kunskapskrav i båda spåren

### Grupp-karakteristik
- Klass om ~22 elever, klarar helklassdiskussioner
- Blandat samhällsintresse — hälften engagerade, hälften inte
- **Hookar behöver nå oengagerade** — vardagsobjekt + aktuella händelser fungerar

### Material-preferenser
- Vill ha **både .md (vault) och .docx (utanför vault)** parallellt
- Vill ha **presentationer (reveal.js)** för fas 3 i lektioner med tydlig instruktion
- Vill ha **worked example-presentationer** separerade från huvudpresentationen
- **INGA [VERIFIERA]-taggar** i slides som elever ser (OK i lektionsplaner och talarnoter)

### GitHub-workflow
- Pushar material till separata privat-repo per moment
- Namngivningsmönster: `sam3-<moment-slug>` eller motsvarande

### Slide-design
- Uppskattar samhällskunskap-paletten (mörk bakgrund, rosa/teal/gul accenter)
- Gradient-text på nyckelbegrepp
- 3-skalamodell (individ → Sverige → värld) fungerar bra som röd tråd

## Specifikt för nästa moment i Sam 3

- Bygg vidare på **de tre teorierna** som nu är inarbetade
- Referera till globaliseringsmomentets **3-skalamodell** som igenkänd struktur
- Elevernas slutuppgift (text/muntligt) fungerar som referens för kommande examinationer
```

Uppdatera baserat på faktiska observationer från konversationen — t.ex. ordningsändringar (T-shirtens produktionssteg) och explicit feedback (VERIFIERA-taggar borttagna).

---

## 9. Git-workflow

Efter varje lektion är komplett (lektionsplan + elevuppgift + ev. presentation):

```bash
cp "/home/anders/Second brain/Undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/presentation-lektion-N.html" "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/presentation-lektion-N.html"

cd "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem"

git add lektion-N.docx elevuppgift-lektion-N.docx presentation-lektion-N.html

git commit -m "Add lektion N: <kort titel>

<kort sammanfattning>"

git push
```

.md-filer behöver inte pushas (de ligger i vaultet som har eget repo). Bara .docx och .html ska till detta repo.

---

## 10. Prompt att ge Claude efter `/clear`

Klistra in exakt detta efter `/clear`:

> Kör igenom generering av alla återstående lektioner, elevuppgifter och presentationer för momentet "Globalisering — Från vardag till världssystem" i Samhällskunskap 3. Följ planen i `/home/anders/Second brain/Undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/GENERERINGSPLAN.md`. Läs planen noggrant först, och konsultera även `momentplan.md`, `lektion-1.md`, `lektion-2.md` och `presentation-lektion-1.html` som referens för stil och nivå. Fråga mig inte mellan varje lektion — generera allt i planen (avsnitt 4), pusha till GitHub-repot efter varje komplett lektion, och informera mig vid större beslut som inte framgår av planen. När allt är klart (inkl. examination-instruktion, momentoversikt, frågor till frågeappen, och kursminne), presentera en komplett sammanfattning av allt som genererats.

---

## 11. Slutlig leverans-checklista

- [ ] 7 lektionsplaner (.md + .docx för L2-8 — L1 klar)
- [ ] 8 elevuppgifter (.md + .docx för L1-8 — L1 klar)
- [ ] 7 presentationer (.html för L2-6, L8 — L1 klar, L7 saknar)
- [ ] 1 extra worked example-presentation för L6 (`presentation-lektion-6-modellering.html`)
- [ ] `examination-instruktion.md` + `.docx`
- [ ] `momentoversikt.html`
- [ ] Frågor exporterade (databas eller CSV)
- [ ] `samhallskunskap-3.md` i minnet
- [ ] Allt pushat till GitHub-repot
- [ ] Sammanfattning presenterad för läraren
