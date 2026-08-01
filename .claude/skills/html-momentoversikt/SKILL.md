---
description: >
  This skill should be used when the user wants to create an HTML overview
  page for students - a "momentoversikt", "elevsida", or "HTML-sida" that
  summarizes a teaching module with lessons, goals, dates, and preparation
  tasks. Trigger phrases include "skapa en momentoversikt for eleverna",
  "gor en HTML-sida med lektionerna", "publicera momentet pa Google Sites",
  "gor en elevsida", "skapa en oversikt som eleverna kan se", and
  "momentoversikt". This skill builds on data from a completed moment plan
  and produces a single self-contained HTML file designed for publishing
  via Google Sites or similar platforms.
allowed-tools: Read, Write, Edit, Bash(node:*), Bash(python:*)
---

# HTML-momentoversikt for elever

Denna skill genererar en **self-contained HTML-fil** som ger gymnasieelever en tydlig, visuellt tilltalande oversikt av ett helt undervisningsmoment.

---

## 1. Design Thinking - pedagogisk kontext

### Malgrupp
Gymnasieelever (16-19 ar). De ar vana vid moderna, mobilanpassade granssnitt och tappar snabbt intresset for trakig eller rorig design. Sidan ska kannas som nagot de *vill* anvanda - inte bara annu en PDF.

### Ton och kansla
- **Tydlig** - all information ska vara lattskummad, med tydlig hierarki
- **Modern** - ren typografi, avskalade farger, medvetna whitespace-val
- **Inbjudande** - inte steril eller "skolig", utan varm och motiverande
- **Professionell** - eleverna ska kanna att momentet ar genomtankt och serioust

### Designprinciper
1. **Innehallet forst** - designen ska framhava informationen, inte konkurrera med den
2. **Visuell hierarki** - amne/tema > momentoversikt > individuella lektioner > detaljer
3. **Scanningsbar** - elever ska kunna hitta "vad hander nasta lektion?" pa sekunder
4. **Progressionskansla** - layouten ska visuellt formedla att momentet ror sig framat
5. **Minimalism med varme** - avskalat men inte kallt; anvand farg och typografi medvetet

---

## 2. Struktur och innehall

### Header-sektion
- Kursnamn och momentets titel (stort, tydligt)
- Kort beskrivning av momentet (2-3 meningar)
- Tidsperiod (startdatum - slutdatum)

### Larandemal
- Momentets overgripande mal i kortform
- Formulerade sa att elever forstar dem (inte kunskapskravssprak)

### Lektionsoversikt
Varje lektion visas som ett visuellt kort/block med:
- **Lektionsnummer och titel**
- **Datum** (tydligt formaterat)
- **Innehall** - kort beskrivning av vad lektionen handlar om (2-3 meningar)
- **Forberedelser** - vad eleven ska gora/ha med sig (om tillampligt; visa bara om det finns forberedelser)
- **Fokus-mal** - vilket/vilka av momentets mal som adresseras (valfritt, kan utelamnas om lararen foredrar)

### Footer
- Lararens namn (valfritt)
- Kursnamn
- Genererat datum

---

## 3. Estetiska riktlinjer

### Fargpalett
Valj **en** sammanhallen palett som matchar amnet. Undvik generiska bla/gra-scheman.

| Amne | Forslag |
|------|---------|
| Historia | Varma toner - terracotta, sand, morkrod |
| Samhallskunskap | Moderna toner - teal, slate, vit |
| Juridik | Professionella toner - navy, guld, ljusgra |

Paletterna ska ha:
- **En dominant bakgrundsfarg** (ljus - sidan ska vara lattlast)
- **En accentfarg** for rubriker och interaktiva element
- **En mork textfarg** (aldrig pure black `#000` - anvand `#1a1a2e` eller liknande)
- **En subtil sekundarfarg** for kort-bakgrunder, borders, och hover-effekter

### Typografi
Anvand Google Fonts via `<link>`-taggar. Forslag:

| Anvandning | Exempel |
|------------|---------|
| Rubriker | Inter, Outfit, Plus Jakarta Sans, Sora |
| Brodtext | Inter, Source Sans 3, Nunito Sans |

Regler:
- Rubrik 1 (momenttitel): 2-2.5rem, bold
- Rubrik 2 (sektionsrubriker): 1.3-1.5rem, semibold
- Brodtext: 1rem (16px baseline), line-height 1.6
- Max radbredd: 70ch for lopande text
- Anvand `font-display: swap` for att undvika FOIT

### Layout
- **CSS Grid eller Flexbox** - aldrig tabeller for layout
- **Responsiv**: fungerar pa mobil (360px), tablet (768px) och desktop (1200px+)
- **Lektionskort**: visa som vertikala kort pa mobil, grid (2-3 kolumner) pa desktop
- **Generosa marginaler**: minst 1rem padding i containern, 1.5rem+ pa desktop
- **Max-width**: 900-1000px for innehallscontainern, centrerad

### Visuella detaljer
- Subtila `box-shadow` pa lektionskort (inte flat, inte overdone)
- Rundade horn (`border-radius: 8-12px`) pa kort
- Mjuka fargoverganger om bakgrundsfargerna anvands
- Lektionsnummer som visuellt element (t.ex. stor siffra eller badge)
- Datum tydligt markerat (t.ex. liten badge eller etikett)
- Ikonliknande visuella markorer for forberedelser (t.ex. en bok-emoji eller liknande) - hall det minimalt

---

## 4. Tekniska krav

### Self-contained HTML
- **En enda `.html`-fil** - all CSS och JS ska vara inline (`<style>` och `<script>`)
- **Inga externa beroenden** forutom Google Fonts (laddas via `<link>` i `<head>`)
- Filen ska fungera om man oppnar den direkt i en webblasare
- Filen ska fungera inbaddad via Google Sites "Embed code"-funktion

### HTML-standard
- Korrekt `<!DOCTYPE html>` och `<html lang="sv">`
- Semantisk HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Korrekt `<meta charset="UTF-8">` och `<meta name="viewport" ...>`
- Tillganglig: kontrastvarden uppfyller WCAG AA (4.5:1 for text)

### Responsiv design
- Mobile-first media queries
- Testa mentalt mot tre breakpoints: 360px, 768px, 1200px
- Lektionskort staplas vertikalt pa mobil, grid pa storre skarmar
- Rubriker skalas ner pa mobil (clamp() eller media queries)

### Google Sites-kompatibilitet
- Filen ska kunna klistras in i Google Sites via "Badda in" > "Embed code"
- Undvik JavaScript som kraver extern data (fetch, AJAX)
- All interaktivitet ska vara enkel och fristaende (CSS-only eller minimal JS)

---

## 5. Anti-patterns - undvik dessa

### Generisk AI-estetik
- **Ingen gradient-overload** - max en subtil gradient, och bara om det verkligen behovs
- **Inga generiska hero-sektioner** med enorm text och knappar som inte leder nagononstans
- **Inget "startup-template-utseende"** - sidan ska se ut som den designats *for detta moment*, inte som en mallanpassning
- **Inga onodiga animationer** - subtila transitions ar OK, men inget ska "bouncas" eller "floata" in

### Rorig design
- **Inte for mycket farg** - begransa paletten till 3-4 farger
- **Inte for manga typsnitt** - max 2 (ett for rubriker, ett for brodtext)
- **Inte for tatt** - generost med whitespace, speciellt mellan lektionskort
- **Inte for litet** - brodtext aldrig under 16px, rubriker aldrig under 18px

### Dalig informationsarkitektur
- **Ingen information overload** - bara det eleven behover veta, inte lararens interna planering
- **Inga kunskapskravsformuleringar** - skriv om mal till elevanligt sprak
- **Ingen duplicering** - visa inte samma information pa flera stallen

---

## 6. Exempelfil

Se `examples/momentoversikt-example.html` for ett komplett fungerande exempel (Historia 1b - Kalla kriget). Anvand den som referens for struktur, designkvalitet och ton - men anpassa alltid fargpalett och typografi till det aktuella amnet.

---

## 7. Genereringsprocess

1. **Samla data** fran momentplanen:
   - Amne, kurs, tema
   - Larandemal (omformulera till elevsprak)
   - Lektionsstruktur med titlar och innehallsbeskrivningar
   - Pedagogiska metoder (namn bara de som ar relevanta for eleven)

2. **Fraga lararen** om kompletterande information:
   - Datum for varje lektion
   - Forberedelser som eleverna behover gora infor specifika lektioner
   - Om lararens namn ska visas
   - Om det finns nagot extra lararen vill kommunicera till eleverna

3. **Valj fargpalett och typografi** baserat pa amne - presentera valet for lararen

4. **Generera HTML-filen**:
   - Skriv HTML-koden direkt (ingen templating-motor behovs)
   - All CSS inline i `<style>`-block
   - Eventuell JS inline i `<script>`-block (minimalt)
   - Validera mentalt mot tekniska krav och estetiska riktlinjer

5. **Presentera for lararen**:
   - Visa en kort beskrivning av vad sidan innehaller
   - Oppna filen i webblasare om mojligt, annars beskriv layouten
   - Fraga om justeringar (farg, formuleringar, ordning)

## Output

Spara till `Undervisningsmaterial/[Amne]/[Tema]/momentoversikt.html`.
