---
name: slides
description: >
  Skapa HTML-baserade presentationer i designsystemet Arkiv v2.1 — akademisk, lugn,
  bokig känsla med varm papperston, serif-rubriker, stor och fet text, aktiv färg.
  Använd denna skill när användaren vill skapa slides, en presentation,
  ett bildspel, eller en HTML-presentation för en lektion. Triggas av fraser som
  "skapa slides", "gör en presentation", "skapa ett bildspel",
  "gör slides till lektionen", "presentationsslides", "HTML-slides",
  "skapa en presentation om [ämne]", eller när användaren beskriver
  lektionsinnehåll och vill ha visuellt stöd att projicera i klassrummet.
  Även när användaren säger "visa på projektorn", "klassrumspresentation",
  eller "slides till [ämne/lektion]". Denna skill är optimerad för
  samhällskunskap, historia och juridik med stöd för tidslinjer, citat,
  källkritik och diskussionsslides.
  Ska INTE användas för PowerPoint (.pptx) — använd pptx-skillen istället.
allowed-tools: Read, Write, Edit, Bash(node:*), Bash(python:*)
---

# Slides — Arkiv v2.1-presentationer för klassrummet

Skapa self-contained HTML-presentationer i designsystemet **Arkiv v2.1**. Ämnesområde: samhällskunskap & historia, gymnasiet. Format: 16:9 · 1280 × 720 px. Ton: akademisk och lugn, **med större och fetare text optimerad för projektion**.

**Vad är nytt i v2.1 (vs v2):**
1. **Text ytterligare uppskalad.** Brödtext 28 px, H1 72-116 px, metadata 15-17 px. Inget under 15 px.
2. **Fetare vikter.** Brödtext 500 (inte 400), bold 700-800, meta 600-700. Optimerat för läsbarhet bakifrån klassrummet.
3. **Smalare sidomarginaler.** Horisontell padding 56 px (från 64), ger mer utrymme åt innehåll.
4. **Kanonisk referens:** `references/slides.jsx` i skillen — samt [källan på GitHub](https://github.com/anderskarl929/sam3-globalisering-vardag-till-varldssystem/blob/main/slides.jsx). React-komponenterna är source-of-truth för exakta mått, vikter och padding.

**Bärs över från v2:**
- **Fyra betoningsverktyg:** `<em>` kursiv, `<strong>` bold, `<mark>` ocker-highlight, `<u>` bordeaux-understreck.
- **Fyra färgmönster** (A/B/C/D) — färg används aktivt, inte bara som accent.
- **Tre accentfärger:** Kritblå, Mossgrön, Tegel.
- **Två slide-typer:** `content-highlight` (60/40 stat-split) och `data` (enda stor siffra).

---

## 1. Designprinciper

1. **Max 3 accentfärger per slide.** Bordeaux är signatur.
2. **Max 2 betonade ord per rubrik.** Max 5 per brödtextstycke. Olika verktyg för olika hierarkier — t.ex. `<u>begreppet</u>` för definitioner, `<mark>årtalet</mark>` för data, `<strong>huvudpoängen</strong>` för slutsatser, `<em>nyckelordet</em>` för nyans.
3. **Rubriker bär mening.** Inte "Inledning" utan "*Varför* började det?". Frågor som rubrik är systemets signaturdrag.
4. **Max 3 nyckelpunkter per slide.** Mer och eleverna slutar bearbeta.
5. **Diskussionspaus var 3-4:e slide.** Bädda in `discuss` eller `question` regelbundet.
6. **Metadata är diskret** men inte liten. 15-17 px i mono-versaler, font-weight 600-700.
7. **Inga emojis.** Typografiska tecken: `▸ ● ▪ § № ›`.
8. **Citera källor.** Arkiv är ett källkritiskt system.
9. **Luft.** Ge rubriken minst 40 px luft nedåt.
10. **Brödtextbredd:** max 32 em (v2.1-strammare för läsbarhet på stor storlek).

### Presentationsflöde

| Fas | Slide-typ | Syfte |
|-----|-----------|-------|
| Öppning | `cover` → `question` | Ramverk, dagens fråga som krok |
| Innehållsblock | `section` → 2-3 av `content`/`content-highlight`/`data`/`twocol`/`timeline`/`quote`/`callout`/`table` | Undervisa |
| Diskussionspaus | `discuss` eller `question` | Bearbeta, aktivera |
| Avslutning | `close` | Sammanfatta, läxa, nästa lektion |

---

## 2. Designtokens v2.1

### Färger

| Roll          | Namn      | Hex       | Användning                                            |
| ------------- | --------- | --------- | ----------------------------------------------------- |
| Bakgrund      | Papper    | `#F4EDE1` | Standardbakgrund                                      |
| Bakgrund alt. | Papper 2  | `#EBE1CF` | Informationsrutor, sekundära ytor                     |
| Text primär   | Bläck     | `#1F1A15` | All primär text                                       |
| Text sekundär | Bläck 2   | `#4A3F33` | Metadata, bildtexter                                  |
| Linje         | Regel     | `#2A221A` | Ramar, skiljelinjer                                   |
| Accent 1      | Bordeaux  | `#7A2E2E` | Signaturfärg · rubriker · varning · understreck       |
| Accent 2      | Marin     | `#2C3E55` | Fakta · analys · statistik                            |
| Accent 3      | Oliv      | `#5A6A3A` | Tips · reflektion · "bra exempel"                     |
| Accent 4      | Ocker     | `#B8862F` | Highlight-markering · årtal · viktigt begrepp         |
| Accent 5      | Kritblå   | `#5A7A9A` | Bakgrundsfärg för tema-slides                         |
| Accent 6      | Mossgrön  | `#3E5A3E` | Djup bakgrund för frågor/reflektion                   |
| Accent 7      | Tegel     | `#C96442` | Varm highlight, när ocker är för blek                 |

### Typografi — v2.1 (stor och fet)

| Roll          | Font                  | v2.1 storlek     | Vikt / Stil              |
| ------------- | --------------------- | ---------------- | ------------------------ |
| Cover H1      | Cormorant Garamond    | **116 px**       | 600, tight lineheight    |
| Section H1    | Cormorant Garamond    | **96 px**        | 600                      |
| Question H1   | Cormorant Garamond    | **104 px**       | 600                      |
| Content H1    | Cormorant Garamond    | **72 px**        | 600                      |
| Timeline/Discuss/CH/Close H1 | Cormorant G.  | **62-64 px**  | 600                      |
| Callout H1    | Cormorant Garamond    | **64 px**        | 600 italic               |
| Quote body    | Cormorant Garamond    | **62 px**        | 600 italic               |
| H2/Ingress    | Cormorant Garamond    | **32-36 px**     | 500 italic (lede)        |
| H3/Eyebrow    | JetBrains Mono        | **18 px**        | 700 uppercase, 2 px ls   |
| Brödtext      | Inter Tight           | **28/40**        | **500**                  |
| Brödtext stor | Inter Tight           | **30-34 px**     | 500, för frågor/citat    |
| Bullets       | Inter Tight           | **28 px**        | 500, index 24 px mono 700|
| Masthead meta | JetBrains Mono        | **16 px**        | 600 versaler, 2 px ls    |
| Baseline meta | JetBrains Mono        | **15 px**        | 600 versaler, 2 px ls    |
| Citat-attrib  | Inter Tight           | **30 px**        | 700 ocker                |
| Siffror XL (stat) | Cormorant G.      | **190 px**       | 600, för content-highlight |
| Siffror XXL (data)| Cormorant G.      | **260 px**       | 600, för data-slide      |
| Siffror bakgrund (section) | Cormorant G. | **340 px**    | 500, opacity 0.2         |
| Quote-mark    | Cormorant Garamond    | **240 px**       | 600 ocker                |

**Minsta storlek på slide:** 15 px (baseline-metadata). Allt innehåll minst 22 px, brödtext minst 26 px. Inga ord ska vara svåra att läsa från bakre raden.

**Google Fonts-import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter+Tight:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
```

### Betoning — fyra verktyg

| HTML           | Visuell effekt                                                       |
| -------------- | -------------------------------------------------------------------- |
| `<em>ord</em>` | Kursiv Cormorant (i sans-brödtext → serif-kursiv inline, weight 600) |
| `<strong>ord</strong>` | Bold (font-weight 700-800)                                   |
| `<mark>ord</mark>` | Ocker markeringsfärg bakom (`rgba(184,134,47,.4)`), padding 0 8px, weight 700 |
| `<u>ord</u>`   | Bordeaux understreck, 4 px tjockt, 6 px offset, weight 700           |

Regel: max 2 per rubrik, max 5 per stycke. Blanda inte bold + kursiv på samma ord.

---

## 3. Fyra färgmönster

Så här används färg i Arkiv v2.1:

### Mönster A · Papper + accent (standard)
Ljus paper-bakgrund, en accentfärg som rubrikkulör eller detalj.
**Används för:** `content`, `timeline`, `table`, `close`, `data` (när siffran är fokus).

### Mönster B · Färgad helyta
Hela bakgrunden är en djup accentfärg; typografin blir ljus paper-färg.
**Används för:** `section`, `question`, `quote`, `discuss`.
**Kombinationer:**
- `#7A2E2E` (bordeaux) + papper → historiska/dramatiska teman
- `#2C3E55` (marin) + papper → samhälle/analys
- `#3E5A3E` (mossgrön) + papper → reflektion/diskussion
- `#1F1A15` (bläck) + papper → tunga/allvarliga ämnen

### Mönster C · Delad yta (60/40 eller 55/45)
Slidan delas i två färgzoner. Vänster papper, höger accent med stor stat-siffra (190 px).
**Används för:** `content-highlight`, `twocol` (varianten colored).

### Mönster D · Ramad/randig
Bred färgad ram (36 px) runt en paper-yta.
**Används för:** `callout` (färg = variant), `cover` (bordeaux-ram).

---

## 4. Layoutregler

- **Padding (chrome):** 32 px topp · 28 px botten · **56 px vänster/höger** (v2.1 — stramare än v2:s 64).
- **Cover-padding (inre):** 56 px topp/botten · 72 px vänster/höger.
- **Callout-padding (inre):** 56 px topp/botten · 72 px vänster/höger.
- **Linjer (regler):** 2 px. På paper-bakgrund: `#2A221A`. På mörk bakgrund: `rgba(244,237,225,0.27)` (motsv. `{t.paper}44`).
- **Masthead:** `meta_left` vänster (kurs · moment), `meta_right` höger (lektion/termin). Mono **16 px**, versaler, 2 px letter-spacing, weight 600. Paddig-bottom 12 px.
- **Baseline:** `"Arkiv · v2"` vänster, sidnummer `XX / YY` höger. Mono **15 px**, weight 600. Padding-top 12 px.
- **Eyebrow:** Mono **18 px**, weight 700, 2 px letter-spacing. Prefix `▸ ` på content-slides, `§ Kapitel NN` på section.
- **Body-padding (inre):** 32 px topp/botten (mellan chrome och innehåll).
- **Huvudinnehåll** vertikalt centrerat mellan masthead och baseline.

---

## 5. HTML-grundmall v2.1

Varje presentation är en **self-contained HTML-fil** med reveal.js + full Arkiv v2.1-CSS. Använd denna mall som kanoniskt ramverk.

```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Presentationstitel]</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter+Tight:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --ink: #1F1A15; --ink-2: #4A3F33;
      --paper: #F4EDE1; --paper-2: #EBE1CF;
      --rule: #2A221A;
      --bordeaux: #7A2E2E; --marin: #2C3E55; --oliv: #5A6A3A; --ocker: #B8862F;
      --kritbla: #5A7A9A; --mossgron: #3E5A3E; --tegel: #C96442;
      --serif: "Cormorant Garamond", Georgia, serif;
      --sans: "Inter Tight", system-ui, sans-serif;
      --mono: "JetBrains Mono", ui-monospace, monospace;
    }
    html, body { background: var(--ink); }
    .reveal { font-family: var(--sans); color: var(--ink); font-size: 28px; font-weight: 500; }
    .reveal .slides { text-align: left; }
    .reveal .slides section { background: var(--paper); padding: 0; height: 100%; }
    .reveal .slides section.present { display: flex !important; flex-direction: column; }

    /* Gemensam chrome — v2.1 padding 56 horisontellt */
    .chrome { width: 100%; height: 100%; padding: 32px 56px 28px; display: flex; flex-direction: column; position: relative; overflow: hidden; }
    .chrome.paper { background: var(--paper); color: var(--ink); }
    .chrome.dark { color: var(--paper); }
    .chrome .masthead { display: flex; justify-content: space-between; align-items: baseline; font-family: var(--mono); font-size: 16px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; flex-shrink: 0; padding-bottom: 12px; }
    .chrome .baseline { display: flex; justify-content: space-between; align-items: baseline; font-family: var(--mono); font-size: 15px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; flex-shrink: 0; padding-top: 12px; }
    .chrome.paper .masthead { color: var(--ink-2); border-bottom: 2px solid var(--rule); }
    .chrome.paper .baseline { color: var(--ink-2); border-top: 2px solid var(--rule); }
    .chrome.dark .masthead { color: var(--paper); opacity: 0.7; border-bottom: 2px solid rgba(244,237,225,0.27); }
    .chrome.dark .baseline { color: var(--paper); opacity: 0.7; border-top: 2px solid rgba(244,237,225,0.27); }
    .chrome .body { flex: 1; display: flex; flex-direction: column; min-height: 0; padding: 32px 0; overflow: hidden; }

    /* Typografi */
    .reveal h1, .reveal h2, .reveal h3 { font-family: var(--serif); color: inherit; font-weight: 600; letter-spacing: -0.015em; text-transform: none; margin: 0; }
    .reveal h1 { line-height: 1; }
    .reveal h3 { font-family: var(--sans); font-size: 22px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; }
    .reveal em { font-style: italic; font-family: var(--serif); font-weight: 600; }
    .reveal strong, .reveal b { font-weight: 800; }
    .reveal mark { background: rgba(184,134,47,0.4); color: inherit; padding: 0 8px; border-radius: 2px; font-weight: 700; }
    .reveal u { text-decoration: underline; text-decoration-color: var(--bordeaux); text-decoration-thickness: 4px; text-underline-offset: 6px; font-weight: 700; }
    .chrome.dark mark { background: rgba(184,134,47,0.55); }
    .chrome.dark u { text-decoration-color: var(--ocker); }

    .eyebrow { font-family: var(--mono); font-size: 18px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700; margin-bottom: 16px; color: var(--bordeaux); }
    .eyebrow::before { content: "▸ "; }
    .chrome.dark .eyebrow { color: var(--ocker); }
    .lede { font-family: var(--serif); font-style: italic; font-weight: 500; font-size: 32px; line-height: 1.3; margin-top: 22px; color: var(--ink-2); max-width: 32ch; }
    .chrome.dark .lede { color: var(--paper); opacity: 0.9; }
    .body-text { font-family: var(--sans); font-size: 28px; line-height: 1.45; max-width: 32em; font-weight: 500; }

    /* Slide-typer — se sektion 6 för fullständig CSS per typ. Kopiera från presentation-lektion-1.html (piloten) för exakta styles. */

    .reveal .progress { color: var(--bordeaux); }
    .reveal .controls { color: var(--ink-2); }
  </style>
</head>
<body>
  <div class="reveal">
    <div class="slides">
      <!-- Slides här -->
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.js"></script>
  <script>
    Reveal.initialize({
      hash: true,
      slideNumber: false,
      width: 1280,
      height: 720,
      margin: 0,
      transition: 'fade',
      controls: true,
      progress: true
    });
  </script>
</body>
</html>
```

**Tips:** Börja ALLTID från en befintlig Arkiv v2.1-presentation som referens (t.ex. `presentation-lektion-1.html` i sam3-globalisering-repot) och kopiera hela `<style>`-blocket — det innehåller alla slide-typspecifika klasser. Eller läs `references/slides.jsx` i denna skill för exakta React-komponentspecifikationer.

---

## 6. Slide-typer (13 st) — v2.1-mått

Alla slides har masthead + baseline chrome. Variera mönster A/B/C/D efter rytm — minst **3 slides** per deck ska ha färgad bakgrund (Mönster B eller C).

### `cover` — Omslag (Mönster D)

```html
<section class="cover-outer">
  <div class="cover-inner">
    <div class="top">
      <span>Arkiv · v2 · Kursomslag</span>
      <span>Historia 2a</span>
    </div>
    <div>
      <h1>Kalla <em>kriget</em></h1>
      <div class="subtitle">En värld delad av <strong>två</strong> stormakter</div>
    </div>
    <div class="bottom">
      <span>Vt 2026 · Lektion 01 / 12</span>
      <span>01 / 12</span>
    </div>
  </div>
</section>
```
Bordeaux-ram (36 px) runt paper-yta (56/72 padding). **H1 116 px** weight 600, letter-spacing -2. Subtitle 36 px serif italic weight 500. Top/bottom mono 17 px bordeaux weight 700 (top), ink-2 weight 600 (bottom).

### `section` — Kapitelstart (Mönster B)

```html
<section style="background: var(--bordeaux) !important;">
  <div class="chrome dark" style="background: var(--bordeaux);">
    <div class="masthead">...</div>
    <div class="body section-slide">
      <div class="big-num">02</div>
      <div>
        <div class="kapitel">§ Kapitel 02</div>
        <h1>Avspänningens <em>år</em></h1>
        <div class="lede">Hur en värld på randen lärde sig att leva sida vid sida.</div>
      </div>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
Bakgrundssiffra **340 px Cormorant**, weight 500, **opacity 0.2**, letter-spacing -8. Kapitel-eyebrow 18 px mono ocker weight 700. **H1 96 px** weight 600 papper. Lede 32 px serif italic weight 500, opacity 0.9, max-width 26ch.

### `question` — Dagens fråga (Mönster B — mossgrön)

```html
<section style="background: var(--mossgron) !important;">
  <div class="chrome dark" style="background: var(--mossgron);">
    <div class="masthead">...</div>
    <div class="body question-slide">
      <div class="eyebrow">Dagens fråga</div>
      <h1>Hur kan man <strong>vinna</strong> ett krig som <mark>aldrig</mark> utkämpas?</h1>
      <div class="lede">Från 1947 till 1991 stod stormakterna mot varandra utan att skjuta ett skott.</div>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
**H1 104 px** weight 600 papper, max-width 15ch. Eyebrow 18 px mono ocker weight 700. Lede 34 px serif italic weight 500, max-width 38ch.

### `content` — Innehållsslide (Mönster A)

```html
<section>
  <div class="chrome paper">
    <div class="masthead">...</div>
    <div class="body content-slide">
      <div class="eyebrow">02 · Järnridån</div>
      <h1>En <u>linje</u> tvärs genom <em>Europa</em></h1>
      <p class="body-text"><strong>Churchill</strong> myntade uttrycket i Fulton, Missouri, år <mark>1946</mark>.</p>
      <ul class="bullets">
        <li class="fragment"><span class="index">01</span><span><strong>Väst:</strong> marknadsekonomi, flerparti, NATO.</span></li>
        <li class="fragment"><span class="index">02</span><span><strong>Öst:</strong> planekonomi, enparti, Warszawapakten.</span></li>
        <li class="fragment"><span class="index">03</span><span><mark>Neutrala</mark>: Sverige, Finland, Schweiz.</span></li>
      </ul>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
Eyebrow 18 px mono bordeaux weight 700. **H1 72 px** weight 600, max-width 18ch, margin-bottom 36 px. Body-text **28 px weight 500**, max-width 32em. Bullets **28 px weight 500**, index 24 px mono ocker weight 700 width 44 px, divider 2 px `ink-2` med 33 % alpha, padding 16 px.

### `content-highlight` — 60/40 split (Mönster C)

```html
<section style="background: var(--paper) !important;">
  <div class="ch-grid">
    <div class="ch-left">
      <div class="meta-top">Historia 2a · Kalla kriget</div>
      <div class="content">
        <div class="eyebrow">03 · NATO</div>
        <h1>Tolv länder, <strong>ett</strong> försvar</h1>
        <div class="body-text">NATO bildades 1949 som svar på sovjetisk expansion. Principen: <mark>kollektivt försvar</mark>.</div>
      </div>
      <div class="meta-bot">Arkiv · v2</div>
    </div>
    <div class="ch-right" style="background: var(--marin);">
      <div class="meta-top">05 / 12</div>
      <div class="stat">
        <div class="stat-label">Medlemsländer 1949</div>
        <div class="stat-number">12</div>
        <div class="stat-caption">Idag har NATO <u>32 medlemmar</u>.</div>
      </div>
      <div class="meta-bot">05 / 12</div>
    </div>
  </div>
</section>
```
Grid **1.3fr/1fr** (ca 57/43). Vänster papper 32/56 padding. **H1 62 px** weight 600 max-width 14ch, body 25 px weight 500. Höger färg 32/48 padding. Stat-label 16 px mono ocker weight 700. **Stat-number 190 px** serif weight 600 letter-spacing -4. Stat-caption 26 px serif italic weight 500.

### `timeline` — Tidslinje (Mönster A)

```html
<section>
  <div class="chrome paper">
    <div class="masthead">...</div>
    <div class="body timeline-slide">
      <h1>Kalla kriget i <em>fem årtal</em></h1>
      <div class="timeline-h">
        <div class="events">
          <div class="event fragment">
            <div class="dot"></div>
            <div class="year">1947</div>
            <div class="title">Trumandoktrinen</div>
            <div class="note">USA lovar stödja länder mot kommunism.</div>
          </div>
          <!-- fler events -->
        </div>
      </div>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
**H1 62 px** weight 600 margin-bottom 60 px. Ocker **4 px** linje top 34 px. Dot 22×22 radius 11, paper-fyllning + **5 px bordeaux-border**. **Year 26 px** mono bordeaux weight 700 letter-spacing 1. **Title 32 px** serif italic weight 600 margin-top 8. **Note 22 px** weight 500 margin-top 12.

### `quote` — Citat (Mönster B — bläck eller bordeaux)

```html
<section style="background: var(--ink) !important;">
  <div class="chrome dark" style="background: var(--ink);">
    <div class="masthead">...</div>
    <div class="body quote-slide">
      <div class="mark-open">"</div>
      <blockquote>Vi kommer att <u>begrava</u> er.</blockquote>
      <div class="attribution">Nikita Chrusjtjov</div>
      <div class="context">För västerländska diplomater · Moskva 1956</div>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
Body paddar vänster 96 px. **Quote-mark 240 px** serif ocker weight 600 absolut positionerad top -40/left -10. **Quote 62 px** serif italic weight 600 papper, max-width 22ch, letter-spacing -0.5. **Attribution 30 px weight 700 ocker** margin-top 44. Context 16 px mono papper (opacity 0.8) weight 600.

### `callout` — Informationsruta (Mönster D)

```html
<section class="callout-outer fakta">
  <div class="callout-inner">
    <div class="top">
      <span>▸ Fakta</span>
      <span>Lektion 03 / 12</span>
    </div>
    <div>
      <h1>Vad är en <em>primärkälla</em>?</h1>
      <div class="body-text">En källa som uppstått i samma tid som den händelse den beskriver — brev, dagböcker, foton. <strong>Inte</strong> analyser eller läroböcker.</div>
    </div>
    <div class="bottom">
      <span>Arkiv · v2 · Callout</span>
      <span>07 / 12</span>
    </div>
  </div>
</section>
```
Outer-ram 36 px variantfärg. Inner paper-2 bakgrund, 56/72 padding. Label-top mono **18 px weight 800** i variantfärg. **H1 64 px serif italic weight 600** max-width 22ch. Body **30 px weight 500** max-width 26em margin-top 28.

Varianter: `fakta` (marin), `tips` (oliv), `varning` (bordeaux), `kalla` (bläck), `begrepp` (ocker). Ramfärg = variant.

### `data` — Enskild stor siffra (Mönster A eller B)

```html
<section>
  <div class="chrome paper">
    <div class="masthead">...</div>
    <div class="body data-slide">
      <div class="d-eyebrow">Kärnvapenlager · 1986</div>
      <div class="d-number">64 449</div>
      <div class="d-caption">stridsspetsar på <em>höjden</em> av kalla kriget</div>
      <div class="d-body">Fördelat mellan USA och Sovjetunionen. Idag är antalet cirka <mark>12 100</mark>.</div>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
Eyebrow 18 px mono ink-2 weight 700. **Number 260 px** Cormorant weight 600 letter-spacing -6 line-height 0.85, bordeaux (eller `.data-slide.ocker` / `.tegel`). **Caption 46 px serif italic weight 600** max-width 24ch margin-top 14. Body 26 px weight 500 max-width 36em margin-top 22.

### `twocol` — Tvåspalt (Mönster A eller C)

```html
<section>
  <div class="chrome paper">
    <div class="masthead">...</div>
    <div class="body twocol-slide">
      <h1>Två <em>berättelser</em> om 1989</h1>
      <div class="twocol">
        <div class="col fragment">
          <div class="col-label">Västern</div>
          <div class="col-body"><strong>Seger.</strong> Demokratin vinner över diktaturen.</div>
        </div>
        <div class="divider"></div>
        <div class="col fragment">
          <div class="col-label">Östern</div>
          <div class="col-body"><em>Sammanbrott.</em> Systemet kollapsar inifrån.</div>
        </div>
      </div>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
**H1 62 px** weight 600. Kolumnlabels mono 18 px weight 700: vänster bordeaux, höger marin. **Col-body 26 px weight 500**.

### `table` — Tabell (Mönster A)

```html
<section>
  <div class="chrome paper">
    <div class="masthead">...</div>
    <div class="body table-slide">
      <h1>Jämförelse av <em>blocken</em></h1>
      <table class="arkiv-table">
        <thead><tr><th>Fråga</th><th>Väst</th><th>Öst</th></tr></thead>
        <tbody>
          <tr><td>Ekonomi</td><td>Marknad</td><td>Planekonomi</td></tr>
          <tr><td>Politik</td><td>Flerparti</td><td>Enparti</td></tr>
          <tr><td>Allians</td><td>NATO</td><td><mark>Warszawapakten</mark></td></tr>
        </tbody>
      </table>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
Header mono 18 px versaler weight 700. Celler 26 px serif weight 500. Första kolumnen weight 700.

### `discuss` — Diskussionsfrågor (Mönster B — mossgrön)

```html
<section style="background: var(--mossgron) !important;">
  <div class="chrome dark" style="background: var(--mossgron);">
    <div class="masthead">...</div>
    <div class="body discuss-slide">
      <div class="eyebrow">Diskutera</div>
      <h1>Fyra frågor att <em>vända och vrida</em> på</h1>
      <ol class="questions">
        <li class="fragment"><span class="roman">I.</span><span>Hade Kubakrisen kunnat sluta annorlunda?</span></li>
        <li class="fragment"><span class="roman">II.</span><span>Vilken sida tog <strong>störst</strong> risk?</span></li>
      </ol>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
**H1 62 px** weight 600 papper letter-spacing -0.8 margin-bottom 40. Eyebrow 18 px ocker weight 700. **Roman 40 px serif italic weight 600 ocker** width 60 px. **Question 30 px weight 500** papper.

### `close` — Avslutning (Mönster A)

```html
<section>
  <div class="chrome paper">
    <div class="masthead">...</div>
    <div class="body close-slide">
      <div class="eyebrow">Sammanfattning</div>
      <h1><em>Sammanfattning</em></h1>
      <ul class="takeaways">
        <li class="fragment">Kalla kriget var ideologiskt, ekonomiskt och militärt — <em>samtidigt</em>.</li>
        <li class="fragment">Ingen direkt strid; däremot <strong>ställföreträdande</strong> krig.</li>
      </ul>
      <div class="next-steps">
        <div class="next-box">
          <div class="label">Läxa</div>
          <div class="text">Läs s. 142–156. <em>Två frågor</em> om Kubakrisen.</div>
        </div>
        <div class="next-box">
          <div class="label">Nästa lektion</div>
          <div class="text">Lektion 05 — Avspänningens <em>diplomati</em>.</div>
        </div>
      </div>
    </div>
    <div class="baseline">...</div>
  </div>
</section>
```
**H1 64 px** weight 600. Takeaways 28 px weight 500 med bordeaux ▪-bullet. Två färgade rutor (ocker + marin ram). Label mono 18 px weight 700.

---

## 7. Progressiv avslöjning (fragments)

Reveal.js `class="fragment"` visar element ett åt gången när läraren klickar. **Standard i Arkiv v2.1** för sekvenser.

**Applicera på:**
- `.bullets li`, `.timeline-h .event`, `.twocol .col`, `.questions li`, `.takeaways li`, `.scale-card`
- Callout-rutor när flera visas sekventiellt

**Använd INTE på:**
- `cover`, `section`, `question`, `quote` — enskilda "tänk"-slides ska visas helt
- Enskild callout, rubriker, eyebrow, ingress, masthead/baseline, tabellrader

**Tangentbindning:**
- **Mellanslag / →** — nästa fragment
- **←** — föregående
- **N / P** — hoppa slide (skippar kvarvarande fragments)

---

## 8. Copywriting-ton

- **Svenska, gymnasial nivå.** Undvik fackjargong utan förklaring.
- **Rubriker bär mening.** "*Varför* började det?", inte "Inledning".
- **Max 2 betonade ord per rubrik.** Blanda verktyg: kursiv för nyans, bold för poäng, highlight för data, understreck för definitioner.
- **Fråga gärna.** Frågor som rubrik är systemets signaturdrag.
- **Citera källor.** Arkiv är källkritiskt.
- **Inga emojis.** `▸ ● ▪ § № ›` är ikonspråket.
- **Em-dash (—)** är tillåtet i rendering (designelement). Undvik i annan kommunikation.

---

## 9. Talarnoter

Lägg på VARJE slide:

```html
<section>
  ...
  <aside class="notes">
    Vad läraren ska säga, förklara eller göra.
    Tryck S i presentationsläget för notesvyn.
  </aside>
</section>
```

Påminn användaren: **F** helskärm, **S** talarnoter, **Esc** översikt.

---

## 10. Arbetsflöde

### Från idé till HTML

1. **Klargör omfattning.** Kurs, moment, antal slides, lektion i serie.
2. **Skissa flödet.** `cover` → `question` → 3-5 innehållsslides med inströdd `discuss` → `close`. Max 8-12 slides per lektion.
3. **Bestäm färgrytm.** Minst 3 slides med färgad bakgrund (Mönster B/C). Variera mossgrön (question/discuss), bordeaux (section), marin (stat-split), bläck (quote).
4. **Skriv rubriker först.** Med max 2 betonade ord — välj verktyg medvetet.
5. **Fyll i innehåll.** Max 3 punkter per slide. Brödtext under 32 em (v2.1).
6. **Välj slide-typer.** Variera — inte två `content` i rad.
7. **Bygg HTML** från piloten (kopiera hela `<style>`-blocket). Läs `references/slides.jsx` för exakta mått vid tveksamhet.
8. **Fragments** på listor/tidslinjer/kolumner.
9. **Talarnoter** på varje slide.

---

## 11. Output

### Filnamn

Kebab-case: `kalla-kriget-oversikt.html`, `globalisering-lektion-01.html`.

### Leverans

1. Skriv HTML-filen till användarens katalog.
2. Öppna mappen: `xdg-open /path/to/folder` (Linux) eller `open /path/to/folder` (macOS).
3. Informera: "Öppna i Chrome/Firefox. **F** helskärm, **S** talarnoter, **Esc** översikt."

---

## 12. Kvalitetskontroll v2.1

Före leverans, verifiera:

### Designtokens
- [ ] Bakgrundsfärg enligt slide-typens mönster (papper #F4EDE1 eller färgad helyta)
- [ ] Cormorant Garamond + Inter Tight + JetBrains Mono laddade (weights upp till 700-800)
- [ ] H1 minst **62 px** (72-116 px beroende på slide-typ)
- [ ] Brödtext **28 px weight 500**, metadata 15-17 px weight 600-700
- [ ] Padding **32 px 56 px 28 px** (v2.1, inte v2:s 64)
- [ ] Max 3 accentfärger per slide; bordeaux är signatur
- [ ] Mörk chrome (class="dark") när bakgrund är färgad helyta

### Typografi & betoning
- [ ] Max 2 betonade ord per rubrik (kombinera `<em>`/`<strong>`/`<mark>`/`<u>`)
- [ ] Max 5 betonade ord per brödtextstycke
- [ ] Inga bold + kursiv på samma ord
- [ ] Frågor som titlar där möjligt
- [ ] Brödtext max **32 em** bred
- [ ] `<strong>` weight 700-800, `<mark>` weight 700, `<u>` weight 700 + 4 px streck

### Struktur
- [ ] Masthead (meta_left + meta_right) på varje slide — mono 16 px weight 600
- [ ] Baseline ("Arkiv · v2" + sidnummer) på varje slide — mono 15 px weight 600
- [ ] Eyebrow 18 px mono weight 700
- [ ] Min 40 px luft under rubriker
- [ ] Max 3 nyckelpunkter per slide
- [ ] Diskussionspaus var 3-4:e slide (`discuss` eller `question`)
- [ ] **Fragments** på `.bullets li`, `.timeline-h .event`, `.twocol .col`, `.questions li`, `.takeaways li`, `.scale-card`

### Färgrytm
- [ ] Minst 3 slides med färgad bakgrund (Mönster B eller C)
- [ ] Variation — inte två `content` i rad

### Innehåll
- [ ] Inga emojis — bara `▸ ● ▪ § № ›`
- [ ] Talarnoter på varje slide
- [ ] HTML-filen är self-contained (bara Google Fonts + reveal.js CDN)
