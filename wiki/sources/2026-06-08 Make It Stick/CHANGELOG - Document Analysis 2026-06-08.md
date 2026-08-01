---
created: 2026-06-08
updated: 2026-06-08
created_by: claude-opus-4-8
updated_by: claude-opus-4-8
agent_version: 04.26
type: changelog
---

# CHANGELOG - Document Analysis 2026-06-08: Make It Stick

## Källa

- **Bok:** Peter C. Brown, Henry L. Roediger III & Mark A. McDaniel, *Make It Stick: The Science of Successful Learning* (Belknap Press / Harvard University Press, 2014). 328 sidor, 8 kapitel.
- **Råfil:** `raw/books/Make It Stick_ The Science of Successful L - Peter C. Brown (Author) (1).pdf`
- **Extraktion:** `pdfplumber` -> `.tmp/make-it-stick-full.txt` (576 305 tecken, sidmarkörer per PDF-sida).

## Process

- **Trigger:** Användarbegäran "Det ligger nu en bok i /raw Make it stick bearbeta den".
- **PDF-extraktion:** Read-verktygets PDF-stöd (pdftoppm) saknas på maskinen; `pdfplumber` (installerat) användes för textextraktion i stället.
- **Läsning:** Kap. 1 läst direkt; kap. 2-8 djupbearbetade av sju parallella läsagenter (en per kapitel) som drog ut bok-specifikt råmaterial (vignetter, namngivna studier med siffror, ordagranna citat).
- **Verifiering:** Fem befintliga sidor lästa för att säkra att motsägelseflaggorna är korrekta innan de skrevs.
- **Diskussion:** Synteser + motsägelsekarta presenterade för användaren. Val: "Full ingest (~14 noter)" + "Ja, flagga i berörda sidor".

## Ramning (varför ingesten ser ut som den gör)

Boken är **ursprungskällan** till stora delar av wikins befintliga lärandevetenskap (46+ retrieval-noter m.m.). Ingesten re-extraherar därför inte "testning funkar", utan: (1) förankrar ursprunget, (2) extraherar det bok-specifika wikin saknade, (3) **flaggar var nyare källor sprungit förbi 2014-boken.**

## Sidor skapade (14 atomära + denna changelog)

Sessionsmapp: `wiki/sources/2026-06-08 Make It Stick/`

**Ankarnot (1):** [[make-it-stick-ursprungskalla-till-wikins-larandevetenskap]]

**Kärnbegrepp boken saknade egen sida för (8):** [[reflektion-ar-retrieval-practice-plus-elaboration]], [[desirable-difficulties-bjork-karnparadoxen]], [[generation-effekten-losa-fore-undervisning]], [[elaboration-koppla-till-forkunskap-och-metaforer]], [[illusions-of-knowing-fluency-och-kalibrering]], [[larstilsmyten-pashler-2008-ingen-evidens]], [[structure-building-gernsbacher-inbaddade-fragor]], [[rule-learners-vs-example-learners]]

**Bedömning och kursdesign (3):** [[successful-intelligence-och-dynamic-testing-sternberg]], [[lararplaybook-make-it-stick-kapitel-8]], [[high-structure-kurser-minskar-prestationsgapet]]

**Minnesteknik (1):** [[minnespalats-och-mnemonik-organiserar-larande]]

**Motsägelse-/uppdateringskarta (1):** [[vad-make-it-stick-fick-ratt-och-vad-som-overspelats]]

## Befintliga sidor uppdaterade (5, korslänkar + ursprungs-/motsägelseflagga + `updated`-bump)

- [[understanding-how-we-learn-sex-strategier]] -> ankarnot (dinglande Make It Stick-referens uppfylld)
- [[retrieval-practice-som-dubbelt-formativt-verktyg]] -> ursprung: testningseffekten (Roediger/McDaniel)
- [[desirable-difficulty-sweet-spot-60-till-85-procent]] -> ursprung: Bjork desirable difficulties
- [[interleaving-skadar-lag-presterande-utan-initial-blockering]] -> "boken översäljer interleaving"
- [[growth-mindset-teorin-har-kollapsat-2025]] -> "Make It Stick 2014 hyllade detta oförbehållsamt"

## Motsägelser och uppdateringar (kärnan i ingesten)

Tre påståenden i boken (2014) är **överspelade** av wikins nyare källor: growth mindset (kollapsat, d ≈ 0), "lös innan du undervisas"/generation (replikerar ej i SO/humaniora), deliberate practice/10 000-timmar (förklarar mindre varians än hävdat). Tre är **nyanserade**: desirable difficulties (sweet spot + CLT-villkor), interleaving (gränsvillkor), testning->högre tänkande (smal transfer). Fyra **håller** brett: retrieval, spacing, lärstilsmyten, illusions of knowing. Full karta: [[vad-make-it-stick-fick-ratt-och-vad-som-overspelats]].

## Epistemisk status

Populärvetenskaplig syntes av peer-reviewad kognitionsforskning, skriven av två av fältets ledande forskare (Roediger, McDaniel) plus berättare (Brown). Hög tillförlitlighet på minnesmekanismerna; lägre på motivations- och domänpåståendena, som tiden delvis sprungit förbi. Varje sida markerar detta i `evidence-level`.

## MOC-status

Ingen ny MOC skapad (14 noter, under 15-tröskeln). Men sessionen stärker ytterligare argumentet för en samlande **MOC - Lärandevetenskap/kognition** som skulle binda ihop kandidatsessionerna Retrieval Practice (46), Kognitionsforskning (34), Frågedesign (25), CLT (21) och denna. Flaggad som MOC-kandidat i index.

## Huvudtes

*Make It Stick är 2014:s definitiva populärsyntes av lärandevetenskap - och därmed wikins rot. Dess kärna (retrieval, spacing, kalibrering) är tidlös; dess kringpåståenden (mindset, 10k-timmar, generation-överallt) är daterade. Wikins värde är att hålla skillnaden synlig.*
