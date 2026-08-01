# Rapport: Verifiering av referenspekare i SKILL.md

**Datum:** 2026-03-18
**Fil:** `/home/anders/Second brain/.claude/skills/planera-moment/SKILL.md`

---

## Sammanfattning

Alla 11 referenspekare i SKILL.md pekar pa filer som existerar och ar lashara. Inga brutna referenser hittades, varken i SKILL.md eller i de tre nya referensfilerna.

---

## Komplett tabell over alla @-pekare i SKILL.md

| Rad | @-pekare | Status | Filstorlek | Kommentar |
|-----|----------|--------|-----------|-----------|
| 24 | `@pedagogik-ramverk.md` | OK | 4 640 bytes | Pedagogiskt ramverk, relativ till skill-katalogen |
| 39 | `@references/kursminne.md` | OK | 1 850 bytes | **NY** - Kursminnesformat och regler |
| 50 | `@notebook-config.json` | OK | 311 bytes | NotebookLM-konfiguration |
| 84 | `@references/amnesplaner.md` | OK | 8 312 bytes | Amnesplaner for samhallskunskap/historia/juridik |
| 131 | `@references/gy11-struktur.md` | OK | 5 342 bytes | Gy11 bedomningsstruktur |
| 148 | `@references/pedagogiska-metoder.md` | OK | 6 563 bytes | Pedagogiska metoder och ansatser |
| 187 | `@references/lektionsplanering.md` | OK | 9 158 bytes | Lektionsplaneringsreferens |
| 213 | `@.claude/skills/docx/SKILL.md` | OK | 20 246 bytes | Docx-skillens specifikation |
| 306 | `@references/frageappen.md` | OK | 3 580 bytes | **NY** - Steg 5b fragor till frageappen |
| 315 | `@references/presentationer-notebooklm.md` | OK | 3 043 bytes | **NY** - Steg 6 NotebookLM-presentationer |
| 326 | `@.claude/skills/html-momentoversikt/SKILL.md` | OK | 8 237 bytes | HTML-momentoversikt-skillens specifikation |

---

## Detaljerad verifiering av de tre nya referensfilerna

### 1. `references/kursminne.md`

- **Sokvag:** `/home/anders/Second brain/.claude/skills/planera-moment/references/kursminne.md`
- **Storlek:** 1 850 bytes (icke-tom)
- **Refereras fran:** Rad 39 i SKILL.md, i sektionen "Kursminne - larande mellan moment"
- **Forvantning i SKILL.md:** "For fullstandigt filformat och regler for minneshantering"
- **Faktiskt innehall:** Innehaller lagringsformat (en fil per kurs i kebab-case), fullstandig YAML-frontmatter + markdown-struktur med sektioner (Pedagogiska preferenser, Tidsfordelning, Aktiviteter och metoder, Differentiering, Innehallspreferenser, Ovrigt, Historik), samt 5 regler for minneshantering (skriv aldrig over, generalisera, undvik redundans, max 5 per kategori, var arlig).
- **Matchning:** Innehallet matchar forvantningen exakt. Filformat och regler ar dokumenterade.
- **Interna @-pekare:** Inga. Inga brutna referenser.
- **Status: GODKAND**

### 2. `references/frageappen.md`

- **Sokvag:** `/home/anders/Second brain/.claude/skills/planera-moment/references/frageappen.md`
- **Storlek:** 3 580 bytes (icke-tom)
- **Refereras fran:** Rad 306 i SKILL.md, i sektionen "Steg 5b: Fragor till frageappen (Survey Platform)"
- **Forvantning i SKILL.md:** "Las in den fullstandiga guiden" for steg 5b
- **Faktiskt innehall:** Rubriken ar "Steg 5b: Fragor till frageappen (Survey Platform)". Innehaller sektioner for: Forberedelse (MCP-kontroll, kurs-val), Fragegenerering (lektionsfragor 5-8 per lektion med 70/30 MC/fritext, momentfragor 5-10 overgripande, AI-svaghetscheck), Presentation och godkannande (formaterad lista, lararbekraftelse), Export till frageappen (5 steg: importera fragor med CSV-format, skapa quiz per lektion, skapa momentquiz, presentera resultat med delningskoder, spara delningskoder till momentplan.md).
- **Matchning:** Innehallet matchar forvantningen. Filen utgort den fullstandiga guiden for steg 5b som SKILL.md refererar till.
- **Interna @-pekare:** Inga. Inga brutna referenser.
- **Status: GODKAND**

### 3. `references/presentationer-notebooklm.md`

- **Sokvag:** `/home/anders/Second brain/.claude/skills/planera-moment/references/presentationer-notebooklm.md`
- **Storlek:** 3 043 bytes (icke-tom)
- **Refereras fran:** Rad 315 i SKILL.md, i sektionen "Steg 6: Presentationer (via NotebookLM)"
- **Forvantning i SKILL.md:** "Las in den fullstandiga guiden" for steg 6
- **Faktiskt innehall:** Rubriken ar "Steg 6: Presentationer (via NotebookLM)". Innehaller: Forutsattning (aktiv notebook kravs, fallback-hantering), Genereringsprocess (4 steg per presentation: formulera beskrivning med notebooklm generate, ladda ner som pptx, kvalitetskontroll, presentera for lararen), Fallback med manuell generering via pptx-skillen.
- **Matchning:** Innehallet matchar forvantningen. Filen utgort den fullstandiga guiden for steg 6 som SKILL.md refererar till.
- **Interna @-pekare:** Filen har tva inline-referenser (inte radstartande @-pekare, utan inbaddade i text):
  - `@.claude/skills/pptx/SKILL.md` (rad 5 och 53) - **OK**, filen existerar (8 093 bytes)
  - `@.claude/skills/pptx/pptxgenjs.md` (rad 53) - **OK**, filen existerar (12 819 bytes)
- **Status: GODKAND**

---

## Interna referenser i nya filer

| Fil | Intern @-pekare | Status | Filstorlek |
|-----|-----------------|--------|-----------|
| presentationer-notebooklm.md | `@.claude/skills/pptx/SKILL.md` | OK | 8 093 bytes |
| presentationer-notebooklm.md | `@.claude/skills/pptx/pptxgenjs.md` | OK | 12 819 bytes |
| kursminne.md | (inga) | N/A | N/A |
| frageappen.md | (inga) | N/A | N/A |

---

## Problem och varningar

**Inga problem hittades.** Alla 11 referenspekare i SKILL.md pekar pa existerande, icke-tomma filer. De tre nya referensfilerna innehaller det innehall som SKILL.md forvantar sig. De tva interna referenserna i presentationer-notebooklm.md pekar ocksa pa existerande filer.

**OBS:** Referenspekarna i presentationer-notebooklm.md ar inline-referenser (inbaddade i lopande text och i backticks), inte radstartande @-pekare. Claude Code-agenten tolkar typiskt bara @-pekare som star i borjan av en rad som filladdningsinstruktioner. De inline-referenserna fungerar snarare som dokumentation/instruktioner an som automatiska filreferenser. I praktiken laddas dessa filer anderstas i SKILL.md (rad 213 laddar docx/SKILL.md), men pptxgenjs.md laddas inte i SKILL.md direkt — den laddas forst vid fallback-flode i presentationer-notebooklm.md.
