# Handoff: Att följa hela momentet (elevvyer)

## Översikt
Det här paketet beskriver två nya elevytor för survey-platform:

1. **Momentvägen** (`/student` eller ny route, t.ex. `/student/moment/[id]`) — en översikt över ett *helt moment* (t.ex. "Antikens Grekland") som en vertikal tidslinje, lektion för lektion. Eleven ser var hen är, vad som är klart, vad som pågår och vad som kommer.
2. **Uppgiftsflödet** (`/student/att-gora`) — ytan eleven återvänder till för att se vad som är kvar att göra och om något missats. Övningsuppgifterna från varje lektion, statusgrupperade.

Takten är **självgående**: allt är öppet, inget låses. Lektionerna har *rekommenderade* datum så eleven ser vad som ligger kvar, men kan jobba i egen takt och ta igen missat när som helst.

Designen är gjord i samma lugna, akademiska "Studio"-stil som er befintliga elevdashboard — **samma palett, samma komponentklasser**. Den är tänkt att ersätta/utöka dagens platta survey-lista (`src/app/student/page.tsx`) med en sammanhållande momentnivå ovanför de enskilda quizen.

---

## Om designfilerna
Filerna i `design/` är **designreferenser skrivna i HTML/React (Babel-in-browser)** — prototyper som visar avsett utseende och beteende, **inte produktionskod att kopiera rakt av**. Uppgiften är att **återskapa ytorna i den befintliga Next.js-/Tailwind-miljön** med era etablerade mönster (server components, `BaseSidebar`, `card`/`btn-primary`-klasserna, Prisma).

Designen drivs av mockdata (`design/shared/moment-data.jsx`). I produktion ska den datan komma från Prisma — se **Datamodell** nedan för vad som saknas i nuvarande schema.

Öppna `design/Antiken - Hela momentet.html` i en webbläsare för att se alla vyer sida vid sida (desktop A/B + mobil för båda ytorna). Klicka en artboard-etikett för helskärm.

## Fidelity
**Hi-fi.** Färger, typografi, spacing och status-logik är slutgiltiga och matchar redan ert designsystem. Bygg pixel-troget med era befintliga Tailwind-klasser — ni behöver i princip inte införa nya tokens (se mappning nedan).

---

## Mappning mot er befintliga kod (viktigt — läs först)

Er `globals.css` har **redan exakt den palett designen använder**. Designens CSS-variabler mappar 1:1:

| Design-variabel (i HTML) | Er token (`globals.css`) | Värde |
|---|---|---|
| `--bg` | `--background` | `#f8f6f1` |
| `--surface` | `--surface` | `#ffffff` |
| `--surface-2` | `--surface-muted` | `#f3efe8` |
| `--line` / `--line-strong` | `--border-light` / `--border` | `#ece8e0` / `#e2dcd2` |
| `--ink` | `--foreground` | `#1c1917` |
| `--primary` | `--primary` / `--sidebar-bg` | `#1a3a2a` |
| `--primary-soft` | `--primary-light` | `#e6f0eb` |
| `--accent` | `--accent` | `#b7791f` |
| `--accent-soft` | `--accent-light` | `#fef9ee` |
| `--success` | `--success` | `#16a34a` |
| `--success-soft` | `--success-light` | `#dcfce7` |
| `--danger` | `--error` | `#dc2626` |
| `--muted` | `--muted` | `#78716c` |

**Slutsats:** använd era `bg-primary`, `text-muted`, `bg-success-light`, `border-border-light` osv. rakt av. Den enda nyans designen lägger till är en "missad"-bakgrund `#fbf0ec` / kant `#e8c3b6` — härled gärna ur `--error-light` istället, eller lägg till som `--error-bg`.

Komponentklasser som redan finns och ska återanvändas: **`.card`**, **`.btn-primary`**, **`.btn-accent`**, **`.btn-secondary`**, **`.badge`**, **`.input-field`**, **`.animate-fade-in`**.

Typografi i designen använder Fraunces (serif-display) för rubriker + JetBrains Mono för småetiketter. **Er kodbas använder Bricolage Grotesque (`--font-bricolage`) + Geist Mono.** Behåll era fonter — använd `font-sans` för rubriker (de är redan `font-weight: 700`, tracking `-0.01em`) och `font-mono` för de versala småetiketterna (vecka, datum, uppgiftstyp). Designens serif är bara en prototyp-skin; tvinga inte in den.

Sidebar: designens egen sidebar är bara en mock. **Återanvänd `BaseSidebar` + skapa en `StudentSidebar`** (analogt med `CourseSidebar.tsx`) med länkarna: Momentet, Att göra (badge = antal kvar + missade), Resultat, Att öva på, Kurser. Klasserna `bg-sidebar-bg` / `bg-sidebar-active` / `bg-sidebar-hover` finns redan.

> Notera: dagens `student/layout.tsx` har en topbar + smal `max-w-2xl`-kolumn, inte en sidebar. De nya ytorna är bredare och sidebar-baserade. Ni kan antingen byta elev-layouten till `BaseSidebar`-mönstret (som admin) eller behålla topbaren — men designen förutsätter sidebar-navigering och mer bredd (`max-w` runt 940–1100px för innehållet).

---

## Skärmar / vyer

### 1. Momentvägen — Variant A (öppen tidslinje) · `design/...` artboard `path-a`
**Syfte:** Eleven ser hela momentet på en gång och kan hoppa in var som helst.

**Layout:** Sidebar (240px) + huvudyta (`max-w` ~1100px, padding 48/56px). Huvudytan:
- **Header:** liten mono-rad `HISTORIA 1B · MOMENT · ca 800–300 f.Kr.`, stor rubrik "Antikens Grekland" (~46px), höger: dagens datum + lärarnamn.
- **Missat-varning** (om missade > 0): full bredd, bakgrund `#fbf0ec`, kant `#e8c3b6`, flagg-ikon, text "Du har **N missad uppgift** … du kan ta igen den när som helst", knapp "Visa →".
- **Tvåkolumns-grid** `1fr 312px`:
  - **Vänster — tidslinjen:** rubrik "Lektion för lektion" + "N LEKTIONER". Varje lektion = en rad med:
    - **Nod-kolumn (44px):** cirkel (38px) med lektionsnummer; klar = grön ifylld med check; aktiv/idag = accent-fylld med glow-ring (`box-shadow: 0 0 0 5px var(--accent-soft)`); kommande = ofylld med grå kant. Vertikal linje mellan noder (grön om föregående är klar, annars `--border`).
    - **Innehåll:** mono-rad `v.17 · må 21 apr` + ev. chip "Du är här"; lektionstitel (~20px display); summering (en mening, `text-muted`); sedan uppgiftslistan. Aktiv lektion får sina uppgifter i ett inramat `.card` med `border-color: var(--primary)`; övriga utan ram.
  - **Höger (sticky):** *Ditt läge i momentet*-kort (stor %-siffra, progressbar, 2×2-ruta: att göra / missade / lektioner / kommande) + *Mål med momentet*-kort (3 numrerade lärandemål, momentnivå).

### 2. Momentvägen — Variant B (fokuserad/guidad) · artboard `path-b`
**Syfte:** Mindre överväldigande — guidar eleven framåt.
**Layout:** Centrerad kolumn (`max-w` ~820px). Hero med stor rubrik (~50px) + tre lärandemål i rad + en slim framstegsmätare med knapp "Fortsätt där du var →". Sedan tidslinjen **grupperad per vecka** (mono-avdelare "V.16" + linje). Lektioner är **hopfällda till en rad** (datum + titel + "Alla klara" / "Öppnas …") utom den aktiva, som är **utfälld** i ett upphöjt `.card` (primär kant + skugga) med summering och uppgiftsrader.

> Rekommendation: börja med **Variant B** som default elevvy — den skalar bäst när momentet växer och håller fokus på "nästa steg". Erbjud A som "visa allt".

### 3. Uppgiftsflödet — Variant A (Att göra-hub) · artboard `tasks-a`
**Syfte:** "Vad har jag kvar? Har jag missat något?"
**Layout:** Sidebar + huvudyta (`max-w` ~940px).
- Header: mono `ATT GÖRA · ANTIKENS GREKLAND`, rubrik "Vad du har kvar", ingress.
- **Summeringsrad:** 4-kolumns-ruta (att göra / missade / klara / kommande) i en delad `.card`-grid.
- **Grupper i ordning:**
  1. **Gör härnäst** (accent) — stora kort, ett per uppgift: stor statusprick (42px), typ + lektion (mono), titel (display ~19px), meta (antal frågor / pågår 11/14), knapp "Börja"/"Fortsätt →". Aktiv uppgift får primär kant.
  2. **Missat — ta igen** (danger) — `.card` med bakgrund `#fbf0ec`, en rad per missad uppgift.
  3. **Kommande** (muted) — dämpad lista.
  4. **Klart** (success) — lista med resultat (t.ex. 8/8).

### 4. Uppgiftsflödet — Variant B (uppgiftslogg) · artboard `tasks-b`
**Syfte:** Tät, skannbar översikt — "var har jag varit / vad är kvar".
**Layout:** Sidebar + huvudyta (`max-w` ~960px). Filterrad med pills (Alla / Att göra / Missat / Klart med antal; aktiv = `bg-primary text-white`). Sedan en **logg grupperad per lektion**: vänsterkolumn (150px) med lektionsnummer + titel + datum, högerkolumn med uppgiftsrader (typ-tagg · titel · status-chip · åtgärdsknapp). Kommande lektioner dämpade.

### 5–6. Mobilvyer · artboards `path-m`, `tasks-m` (390×780)
Grön header-block (`bg-primary`) med rubrik + framstegsbar (accent-fylld) + summeringsrad. Sedan samma tidslinje respektive att göra-grupper i en kolumn. Aktiv lektions uppgifter fälls ut inline; klara/kommande visas komprimerat ("3/4 klara", "öppnas …"). Använd er befintliga mobil-meny från `BaseSidebar` (hamburger-topbar).

---

## Interaktioner & beteende
- **Tidslinjenoder:** klick på en lektion → expandera/scrolla till den (eller navigera till en avsnittsvy om ni bygger en sådan senare).
- **Knappar per uppgift:** `todo` → "Börja" (→ `/student/quiz/[surveyId]`); `active` → "Fortsätt" (öppnar sparat utkast — ni har redan `DraftResponse`); `missed` → "Ta igen"; `done` → "Repetera".
- **Self-paced:** inget låses; "Kommande" är klickbart men dämpat (kan öppnas tidigt).
- **Missat-banner:** länkar till Uppgiftsflödets missat-grupp.
- **Animationer:** återanvänd `.animate-fade-in` på vyn; progressbar `transition-all duration-500` (finns redan).
- **Responsivt:** sidebar kollapsar till hamburger < `md` (samma som `BaseSidebar`); tvåkolumns-grids blir enkolumn.

## State / datahämtning
Allt kan hämtas server-side (som dagens `student/page.tsx`). Per moment behövs:
- Lektioner i ordning, var och en med sina uppgifter.
- Per uppgift: status härledd ur `Response`/`DraftResponse`/datum (se nedan) + ev. mastery%/resultat (ni har `calculateMastery` i `src/lib/mastery.ts`).
- Aggregat: antal klara/att göra/missade/kommande, momentprocent, antal klara lektioner.

---

## Datamodell — vad som saknas i nuvarande schema (måste lösas)
Dagens `prisma/schema.prisma` har **ingen gruppering av Survey i moment/lektioner, inga datum och ingen 'missad'-status**. Survey hänger direkt på Course. För att bygga "följa hela momentet" behövs minst:

**Föreslagna tillägg (minsta möjliga):**
```prisma
model Module {            // "Moment", t.ex. Antikens Grekland
  id        Int      @id @default(autoincrement())
  title     String
  period    String?  // "ca 800–300 f.Kr."
  goals     String[] // lärandemål på momentnivå
  order     Int
  courseId  Int
  course    Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  lessons   Lesson[]
}

model Lesson {            // en lektion / ett steg på tidslinjen
  id            Int      @id @default(autoincrement())
  title         String
  summary       String?
  order         Int
  recommendedAt DateTime?   // rekommenderat datum (self-paced, ej lås)
  moduleId      Int
  module        Module   @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  surveys       Survey[]    // övningsuppgifterna (= era quiz) för lektionen
}
```
Lägg `lessonId Int?` på `Survey` (en survey hör till en lektion). En uppgift av typ "Övning" = en `Survey` (mode `QUIZ`). Typerna "Läsning"/"Inlämning"/"Avslut" i designen finns **inte** i er modell — antingen (a) börja med att bara stödja Övning/quiz och utelämna de övriga, eller (b) inför en enkel `Activity`-modell med `kind`. **Rekommendation: börja med (a)** och behandla varje lektions surveys som uppgifterna.

**Status härleds (ingen ny kolumn behövs):**
- `done` — student har `Response` och (valfritt) mastery klar.
- `active` — det finns en `DraftResponse` men ingen färdig `Response`.
- `todo` — ingen draft/respons, och `recommendedAt` ≤ idag (eller lektionen är "öppen").
- `missed` — ingen respons och `recommendedAt` < idag − tröskel (t.ex. en lektion bakåt). Eftersom takten är self-paced är "missad" bara en *vänlig påminnelse*, inte en spärr.
- `upcoming` — `recommendedAt` > idag.

"Att öva på" (flaggade frågor) och "Att repetera" (spaced review) finns **redan** — länka in dem i sidebaren, bygg inte om dem.

## Design tokens
Se mappningstabellen ovan — **inga nya färgtokens krävs** utöver ev. `--error-bg: #fbf0ec`. Radius: `.card` = `0.75rem`, knappar/chips = `0.5rem` / `9999px`. Skuggor: använd `.card`s befintliga. Spacing följer Tailwinds skala (gap 1/2/3/4, padding 4–6).

## Assets
Inga bilder. Ikoner är inline-SVG (stroke 1.5px, 24-box) — se `design/shared/icons.jsx` (Check, ArrowRight, Flag, Clock, Dot). Byt gärna mot er befintliga ikonuppsättning; de är generiska.

## Filer i paketet
- `design/Antiken - Hela momentet.html` — montering av alla vyer (öppna denna först)
- `design/shared/moment-data.jsx` — mockdatans form (mappar mot föreslaget Prisma-schema)
- `design/shared/icons.jsx` — ikoner
- `design/variants/studio.jsx` — basstilen (tokens/komponentklasser i prototypform)
- `design/variants/moment-path.jsx` — Yta 1 (Momentvägen, variant A + B) + delade UI-hjälpare
- `design/variants/moment-tasks.jsx` — Yta 2 (Uppgiftsflödet, variant A + B)
- `design/variants/moment-mobile.jsx` — mobilvyer för båda ytorna
- `design/design-canvas.jsx` — bara prototyp-canvasen (behövs ej i produktion)
