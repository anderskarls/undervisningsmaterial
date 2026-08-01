---
created: 2026-07-04
tags:
  - verktygsidéer
  - arbetsflöde
  - byggplan
type: inbox
---

# Byggplan: verktygsförslag 1, 2 och 4 (från arbetsflödesgenomgången 2026-07-03)

**Syfte:** Självbärande genomförandeplan. En modell som får denna fil ska kunna bygga allt utan tillgång till den ursprungliga konversationen. Ursprung: `raw/personal-notes/Verktygsförslag - arbetsflödesgenomgång 2026-07-03.md`.

**Beslut fattade av användaren 2026-07-04:**
- Förslag 1 (stäng reflektionsslingan): infångst via **Obsidian mobil** (mall + Obsidian Sync). Ingen Telegram-bot.
- Förslag 2 (elevreflektion i frågeappen): **full feature** - egen REFLECTION-frågetyp + AI-sammanfattning via MCP.
- Förslag 3 (betygsstatistik): **struket**, ska inte byggas.
- Förslag 4 (läsårskalender med tempo-uppföljning): byggs, kräver kalenderdata från användaren.

**Rekommenderad ordning:** Del A → Del B → Del C. Del A har noll beroenden och störst hävstång. Del C kräver Del A (lektionsloggning = "faktiskt tempo") plus användarens kalenderdata.

---

## Verifierade nyckelfynd (utforskade 2026-07-04 - lita på dessa, men dubbelkolla det som är markerat)

1. **Telegram-botten finns INTE.** `resources/telegram-reflection-bot/` existerar inte i vaultet - den byggdes för den gamla Linux-maskinen (systemd) och migrerades aldrig. Att göra.md rad ~47-56 beskriver den som klar, men artefakterna saknas. Irrelevant nu - infångsten löses med Obsidian mobil.
2. **F3 `/reflektera-moment` är REDAN BYGGD** i momentplanering-pluginen (`C:\Brain\resources\planeramoment\`, v0.9.0). Kommando: `commands/reflektera-moment.md`, protokoll: `skills/planera-moment/references/reflektera-moment.md`. Den intervjuar läraren efter avslutat moment och skriver `## Utfall (från genomförda moment)` till kursminnet + `## Utfall (reflektion efter genomförande)` till momentplan.md. Att göra.md listar den felaktigt som obyggd. **F2 `/logga-lektion` är fortfarande obyggd** och ligger UTANFÖR denna plan (eget spår i skill-trion, se Att göra.md).
3. **Kursminnet:** en enda fil finns, `C:\Brain\output\lessons\_kursminne\historia-niva-1b.md`. Frontmatter: `kurs`, `senast_uppdaterad`, `antal_moment`. Sektioner: Pedagogiska preferenser, Tidsfördelning, Aktiviteter och metoder, Differentiering, Innehållspreferenser, Övrigt, Tvärgående trådar mellan moment, Historik (tabell Datum/Moment/Nyckellärdom). Ingen `## Utfall`-sektion finns än - slingan har aldrig slutits skarpt.
4. **`raw/reflections/`** innehåller 15 filer i ~7 olika format, sorterade i "Vecka N"-mappar. Ingen gemensam mall. Dessa gamla filer ska INTE röras (raw är immutabelt) men digest-skillen ska kunna läsa även dem.
5. **Frågeappen** (`C:\Users\andkar001\Claude\survey-platform`): Next.js 16 App Router, Prisma 6 mot Neon Postgres, deploy via GitHub → Vercel (main-branchen; build kör `prisma migrate deploy`). `Question.type` är **String i Prisma, ingen DB-enum** - ny frågetyp kräver ingen migration, bara Zod- och kodändringar. Elevens att-göra-vy mappar redan `mode: SURVEY → "Reflektion"` (`src/app/student/moment/[unitId]/att-gora/page.tsx`). All AI sker via MCP-klienten (Claude) - appen har inga LLM-anrop, MCP-verktygen returnerar formaterat underlag + instruktionsrad. MCP-servern ligger i repot: `mcp-server/`.
6. **VARNING - klonens färskhet:** auto-minnet säger att lokala survey-mappar är stale löskopior utan .git, men utforskningen 2026-07-04 fann `.git` med remote `anderskarl929/survey-platform`, rent arbetsträd och commits t.o.m. `b4890ff` (inkl. `aff3af8` "Att öva på"). **Kör `git fetch` och jämför mot `origin/main` innan bygge** (steg B0).
7. **Förslag 4 saknar kalenderkälla:** läsårsskisserna (`C:\Brain\output\Idéer\Läsårsskiss Hi 1b - forntid till industriella revolutionen.md` och `Läsårsskiss Hi 1a1 - 45 timmar, epokresa till nutid.md`) har timbudget per moment (85 h resp. 45 h) men inga veckor/datum. Momentplanerna (`output/lessons/[Ämne]/[Moment]/momentplan.md`) har numrerade lektionslistor (L1-L10 + Ex) men inga datum. Lov, studiedagar och NP-dagar finns ingenstans i vaultet - användaren måste tillföra dem (steg C1).

**Stilregler som gäller allt som skapas:** svenska, UTF-8 med å/ä/ö direkt, bindestreck (-) i löptext (inga em-dashes), frontmatter-konventionerna i `C:\Brain\CLAUDE.md`. Elevriktad text får aldrig innehålla betygsbokstäver (E/C/A) - nästa-steg bär nivån.

---

## Del A - Förslag 1: Stäng reflektionsslingan

**Målbild:** 60 sekunders infångst på mobilen efter lektion → standardiserad fil i `raw/reflections/` → veckovis digest-körning som sammanfattar per kurs, uppdaterar kursminnet och flaggar mönster ("tredje gången EPA-fasen spricker i MEK24B").

### A1. Standardiserad reflektionsmall

Skapa `C:\Brain\templates\Lektionsreflektion.md` (Obsidian core-templates-format, `{{date}}`-variabler):

```markdown
---
type: lektionsreflektion
datum: {{date:YYYY-MM-DD}}
kurs:
moment:
tags:
  - reflektion
  - lektionsreflektion
---

## Vad hände?


## Vad fungerade / vad sprack?


## Ta med till nästa lektion

```

- `kurs:` fylls i med kurskod/gruppkod (t.ex. MEK24B-HIS eller "Hi 1b MEK24B") - detta fält är nyckeln för digestens gruppering och Del C:s lektionsräkning
- Designad för diktering: ska tåla att bara en sektion fylls i
- Filnamnskonvention: `YYYY-MM-DD Lektionsreflektion - [kurs].md`
- Sparas direkt i `raw/reflections/` (INTE i Vecka-mappar - digesten läser på datum, inte mappstruktur)

### A2. Mobilinstruktion (användar-checkpoint)

Användaren konfigurerar Obsidian mobil själv, men planen ska levereras med instruktion:
1. Inställningar → Core plugins → Templates på, mallmapp = `templates`
2. Efter lektion: ny anteckning i `raw/reflections/`, infoga mallen, fyll i `kurs:`, diktera in i sektionerna
3. Verifiera att Obsidian Sync tar filen till Windows-maskinen (öppna filen där)

### A3. Veckodigest-skill

Skapa `C:\Brain\.claude\skills\veckodigest\SKILL.md` (körs med `/veckodigest`). Protokoll:

1. **Läs state-filen** `C:\Brain\meta\veckodigest-state.md` - innehåller senaste körningens datum. Skapa den vid första körningen (be användaren om startdatum eller använd senaste digestens datum).
2. **Hitta nya reflektioner:** alla filer i `raw/reflections/` (rekursivt, inkl. gamla Vecka-mappar) med datum efter senaste körning. Datum tas från frontmatter `datum` i första hand, filnamnsprefix `YYYY-MM-DD` i andra hand. Hantera även de gamla heterogena formaten (daglig reflektion, veckoreflektion, lektionsreflektion, utvärdering m.fl.) - kurs kan där behöva utläsas ur filnamn/innehåll.
3. **Gruppera per kurs och sammanfatta:** vad återkommer, vad sprack, vad fungerade, vad läraren ville ta med sig.
4. **Mönsterflaggning:** läs tidigare digestar i `raw/reflections/digest/` och räkna återkommande problem per kurs. Flagga explicit: "N:e gången [mönster] i [kurs]".
5. **Uppdatera kursminnet per kurs** (`C:\Brain\output\lessons\_kursminne\[kurs-slug].md`):
   - Skriv till en EGEN sektion `## Lektionssignaler (från veckodigest)` - medvetet skild från F3:s `## Utfall (från genomförda moment)`. Rågång: F3:s utfall är momentvaliderat via lärarintervju och starkare underlag; digestsignaler är råare veckoobservationer. Blanda aldrig ihop dem.
   - Håll sektionen kort (max ~8 punkter), konsolidera äldre signaler i stället för att bara appenda. Datera punkterna.
   - Skapa kursminnesfil om den saknas - kopiera strukturen från `historia-niva-1b.md` (frontmatter + sektionsrubriker, tomma sektioner ok).
   - Uppdatera `senast_uppdaterad` i frontmattern.
6. **Skriv digest-dokument** till `raw/reflections/digest/YYYY-Wvv Veckodigest.md` (per ISO-vecka) + uppdatera state-filen.

Hårda regler för skillen:
- Ändra ALDRIG befintliga reflektionsfiler (raw är immutabelt)
- Rör ALDRIG `momentplan.md` - det är F2/F3:s domän
- Skriv aldrig till wikin (`wiki/`) - digesten matar kursminnet, inte wikin

### A4. Gränssnitt mot F2/F3 (dokumentation, ingen kod)

Mallens `kurs`/`moment`-fält gör reflektionsfilerna konsumerbara för F3:s utfallsintervju senare (F3 kan läsa veckans lektionsreflektioner för momentet som underlag). När F2 `/logga-lektion` byggs (separat spår) ersätter/kompletterar den mallens fria diktering med strukturerad override-extraktion - mallformatet här ska då återanvändas som output-format.

### Verifiering Del A

1. Skapa en testreflektion via mallen (gärna på mobilen, annars manuellt på datorn med mallens format)
2. Kör `/veckodigest` → kontrollera: digest-fil skapad i `raw/reflections/digest/`, kursminnet har fått `## Lektionssignaler`-sektion med daterad punkt, state-filen uppdaterad
3. Kör `/veckodigest` igen utan nya filer → ska rapportera "inget nytt sedan [datum]" och inte skriva något

---

## Del B - Förslag 2: Elevreflektion i frågeappen (full feature)

**Målbild:** självreflektionsytor i uppgifterna varje/varannan lektion (idé från `raw/inbox/Idé till funktion surveyappen.md`), egen frågetyp utan rätt/fel, AI-sammanfattning till läraren per moment/vecka ("vad fastnade eleverna på denna vecka"), som kan mata samma kursminne som Del A.

**Kodbas:** `C:\Users\andkar001\Claude\survey-platform`. Prod deployas från GitHub via Vercel (push till main). MCP-servern i `mcp-server/` har egen kopia av Prisma-schemat som synkas via `mcp-server/scripts/sync-schema.mjs`.

### B0. Förarbete (obligatoriskt)

1. `git fetch` i repot, jämför lokal main mot `origin/main`. Minne och utforskning motsäger varandra om klonens färskhet - om stale: klona om från GitHub innan något ändras.
2. Arbeta på en feature-branch. Deploy = merge/push till main → Vercel bygger (kör `prisma migrate deploy` med retry mot kall Neon-compute).

### B1. Ny frågetyp REFLECTION (ingen DB-migration)

`Question.type` är String i Prisma - typen införs enbart i kod:

| Fil | Ändring |
|---|---|
| `src/lib/validators.ts` | Lägg till `"REFLECTION"` i Zod-enumen `createQuestionSchema.type` (idag `["MULTIPLE_CHOICE","FREE_TEXT"]`) |
| `src/components/QuestionRenderer.tsx` | Ny gren: textarea med reflekterande prompt-stil, ingen rätt/fel-indikation, ingen "Jag är inte säker"-knapp (idag: allt som inte är MC renderas som fritext) |
| `src/app/api/surveys/[id]/respond/route.ts` | `isCorrect = null` för REFLECTION (samma hantering som FREE_TEXT) |
| `mcp-server/src/tools/import-moment.ts` | CSV-parsern ska acceptera `REFLECTION` (idag: `row.type === "FREE_TEXT" ? FREE_TEXT : MULTIPLE_CHOICE` - allt okänt blir MC!) |
| `mcp-server/src/tools/import-questions.ts` | Samma parserfix |
| `mcp-server/src/tools/get-moment-report.ts` | Exkludera REFLECTION från quiz-/svarsprocent-statistik, redovisa reflektioner i egen sektion |
| `mcp-server/src/tools/summarize-results.ts` | Samma särredovisning |

**Lagring: återanvänd Response/Answer.** Reflektioner är svar på Survey-frågor - ingen ny tabell behövs, rapporterna grenar redan på `type`. (Jämför "Att öva på"-featuren som fick egen `PracticeAttempt`-tabell för att inte förorena statistiken - här räcker type-grenen eftersom rapporterna filtrerar per frågetyp.)

### B2. Reflektionsuppgifter i momentflödet

- Reflektioner skapas som egna Surveys med `mode: "SURVEY"` + REFLECTION-frågor, kopplade till momentet via `Survey.unitId` + `Survey.lesson`. Elevens att-göra-vy visar dem redan som "Reflektion" (mappningen `{ QUIZ: "Övning", SURVEY: "Reflektion" }` finns i `src/app/student/moment/[unitId]/att-gora/page.tsx`).
- `import_moment`-anrop kan därmed inkludera reflektionsuppgifter direkt: assignment med `mode: "SURVEY"` + CSV-rader med `type: REFLECTION`.
- Uppdatera momentplanering-pluginens steg 5b-dokumentation (`C:\Brain\resources\planeramoment\skills\planera-moment\` - leta upp var frågeapp-exporten beskrivs) så att momentexporter inkluderar en reflektionsuppgift varannan lektion som default (lärarval vid planering).

### B3. Nytt MCP-verktyg summarize_reflections

Ny fil `mcp-server/src/tools/summarize-reflections.ts` (följ mönstret i `get-moment-report.ts`):
- **Input:** `course_code` (obligatorisk) + valfritt `unit_id`, `lesson`, datumintervall
- **Gör:** hämtar alla Answer där frågans type=REFLECTION (via Survey→SurveyQuestion→Question), grupperar per uppgift/lektion, returnerar formaterat underlag + instruktionsrad i stil med "Sammanfatta för läraren: vad fastnade eleverna på, vilka mönster syns, vad bör tas upp nästa lektion. Inga betygsbokstäver i elevriktad text."
- **Ingen LLM i verktyget** - Claude (MCP-klienten) genererar sammanfattningen. Detta är appens genomgående arkitektur (jfr kommentar i `give-feedback.ts`: "Claude Desktop generates the feedback - no API calls needed").
- Registrera verktyget i `mcp-server/src/server.ts` och i `mcp-server/src/http-server.ts` + `openapi.yaml` (HTTP-varianten driver CLI:t).
- Lärarens sammanfattning matas sedan in i kursminnet via Del A:s digest-flöde - enklast: `/veckodigest` får ett valfritt steg "kör summarize_reflections för aktiva kurser och väv in i Lektionssignaler".

### B4. Feedbackregler

All elevriktad text från reflektionsflödet följer befintlig regel: aldrig betygsbokstäver (E/C/A) i text eleven läser - låt nästa-steg bära nivån. (Auto-minne: `feedback_ingen_betygsbokstav`.)

### Verifiering Del B

1. Lokalt: `npm run dev`, skapa REFLECTION-fråga, rendera och besvara som elev; kör befintlig testsvit om sådan finns
2. Bygg MCP-servern (`mcp-server/`, kompileras till `dist/`) och testa verktyget lokalt
3. E2E mot prod enligt tidigare beprövat flöde (testkurs, jfr "kurs 8"-testet 2026-06-07): `import_moment` med en reflektionsuppgift → elevinloggning → besvara reflektionen → `summarize_reflections` returnerar svaret → `get_moment_report` visar att quiz-statistiken INTE förorenas av reflektionssvar
4. Städa testdata efteråt (OBS: CLI/MCP saknar delete-course - använd `delete_survey` eller lämna testkursen)

---

## Del C - Förslag 4: Läsårskalender med tempo-uppföljning

**Målbild:** mappa läsårsskissernas moment mot faktiska veckor och räkna timmar: "moment 4 skulle vara klart v. 12, du har 18 h kvar av 45". Uppdateras när lektioner loggas - Del A är förutsättningen för "faktiskt tempo".

### C1. Kalenderdatafil (användar-checkpoint - datan finns inte i vaultet)

Skapa `C:\Brain\output\planering\lasarskalender-2026-2027.md` som ifyllnadsmall och låt användaren fylla i (eller diktera medan modellen fyller i):

```markdown
---
type: lasarskalender
lasar: 2026/2027
updated: YYYY-MM-DD
---

# Läsårskalender 2026/2027

## Terminstider
| Termin | Start | Slut |
|---|---|---|
| HT 2026 | | |
| VT 2027 | | |

## Lov och avbrott (hela veckor eller enskilda dagar)
| Vecka/datum | Typ | Kommentar |
|---|---|---|
| v. 44 | Höstlov | |

## Studiedagar och NP-dagar
| Datum | Typ | Påverkar kurser |
|---|---|---|

## Veckoschema per kurs
| Kurs (samma kod som i reflektionsmallen) | Lektioner/vecka | Minuter/lektion | Läsårsskiss |
|---|---|---|---|
| Hi 1b MEK24B | | | [[Läsårsskiss Hi 1b - forntid till industriella revolutionen]] |
```

### C2. Tempo-skill

Skapa `C:\Brain\.claude\skills\tempo-status\SKILL.md` (körs med `/tempo-status [kurs]`). Protokoll:

1. **Läs** kalenderdatafilen + kursens läsårsskiss (`output/Idéer/Läsårsskiss ...md` - timbudget-tabellen: momentnummer, titel, timmar; Hi 1b har moment 0-7 om totalt 85 h inkl. 3 h buffert, Hi 1a1 moment 0-5 om 45 h inkl. 4 h buffert)
2. **Beräkna planerad utrullning:** tillgängliga lektionstimmar per vecka (schema minus lov/studiedagar/NP) → ackumulera mot timbudgeten → planerad slutvecka per moment
3. **Räkna faktiskt tempo:** antal loggade lektioner per kurs sedan terminsstart från `raw/reflections/` (Del A-formatet: frontmatter `type: lektionsreflektion` + `kurs`). Fallback om loggningen är gles: fråga användaren "hur många lektioner har ni haft/var är ni i momentet?"
4. **Generera/uppdatera** `output/planering/tempo-[kurs-slug].md`: tabell per moment med planerade timmar, förbrukade, kvar, planerad slutvecka, prognostiserad slutvecka (utifrån nuvarande takt) + explicit avvikelseflagga när prognosen glider mer än en vecka
5. Ren skill + markdownfiler - ingen app, inget skript. Matchar veckokadensen och kan köras av vilken modell som helst.

### Verifiering Del C

1. Fyll i kalenderfilen för minst Hi 1b
2. Kör `/tempo-status Hi 1b` → räkna manuellt ett moments planerade slutvecka och jämför mot tabellen
3. Logga en testlektion med Del A-mallen → kör igen → förbrukade timmar ska öka med en lektionslängd

---

## Sammanfattning: filer som skapas per del

| Del | Nya filer | Ändrade filer |
|---|---|---|
| A | `templates/Lektionsreflektion.md`, `.claude/skills/veckodigest/SKILL.md`, `meta/veckodigest-state.md` (vid första körning), `raw/reflections/digest/*` (per körning) | `output/lessons/_kursminne/*.md` (ny sektion Lektionssignaler) |
| B | `mcp-server/src/tools/summarize-reflections.ts` | `src/lib/validators.ts`, `src/components/QuestionRenderer.tsx`, `src/app/api/surveys/[id]/respond/route.ts`, `mcp-server/src/tools/import-moment.ts`, `import-questions.ts`, `get-moment-report.ts`, `summarize-results.ts`, `mcp-server/src/server.ts`, `http-server.ts`, `openapi.yaml`, pluginens steg 5b-dokumentation |
| C | `output/planering/lasarskalender-2026-2027.md`, `.claude/skills/tempo-status/SKILL.md`, `output/planering/tempo-[kurs].md` (per körning) | - |

**Efter avslutat bygge:** uppdatera raden i `raw/personal-notes/Att göra.md` (bocka av), och om nya vault-mappar tillkommit som inte ska FAISS-indexeras - kontrollera `excluded_folders` i Local Brain Search-konfigen och kör `resources/local-brain-search/run_index.sh` (auto-minne: `feedback_vault_index_hygien`).
