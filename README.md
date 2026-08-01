# Brain

Personligt kunskapsvault enligt LLM-Wiki-mönstret. Ägare: gymnasielärare i samhällskunskap och historia. Innehållet är på svenska.

**Schemat som styr allt arbete i vaultet ligger i [`CLAUDE.md`](CLAUDE.md).** Den här filen är bara en orientering för en människa som öppnar mappen - den definierar ingenting och vinner aldrig över `CLAUDE.md`.

## Mappar

| Mapp | Vad som ligger där |
|---|---|
| `raw/` | Immutabla råkällor: `inbox/`, `articles/`, `books/`, `reflections/`, `personal-notes/`, `student-work/`. Ändras aldrig av LLM. |
| `wiki/` | LLM-ägda sidor: `concepts/` (atomära begrepp), `topics/` (MOC:er och synteser), `sources/` (per-källa-noter i sessionsmappar), `_templates/`. |
| `output/` | Leveranser genererade från wikin: lektioner och moment, artiklar, analyser, planering, idéer. |
| `elevdata/` | Pseudonymiserad elevlägesbild med egen livscykel. Gallras vid läsårsslut. Se `elevdata/README.md` och `docs/adr/`. |
| `audits/` | Daterade OS-auditrapporter. Senaste rapporten gäller; äldre är historik. |
| `docs/` | ADR:er och agentkonventioner. |
| `meta/` | Sessionschangelogs och arkiverat material. |
| `resources/` | Lokala verktyg, bl.a. Local Brain Search (FAISS). Kod, inte kunskap - indexeras inte semantiskt. |
| `templates/` | Obsidian-mallar för nya råkällor. |

## Navigation

- [`index.md`](index.md) - innehållskatalog över wikin. Läses först vid varje fråga mot vaultet.
- [`Hem.md`](Hem.md) - människoingången, med snabbkommandon, mallar och taggar.
- [`log.md`](log.md) - append-only operationslogg.
- [`CHANGELOG.md`](CHANGELOG.md) - versionshistorik.

## Tre operationer

**Ingest** - ny källa läggs i `raw/`, LLM läser den, skapar wiki-sidor, korslänkar, och uppdaterar index och logg.
**Query** - fråga mot wikin. `index.md` först, sedan relevanta sidor.
**Lint** - hälsokontroll: motsägelser, föråldrade påståenden, orphans, saknade korslänkar.

Detaljerna för alla tre står i `CLAUDE.md`.

---

*Den här filen var fram till 2026-07-27 kvar från originalmallen och beskrev en PARA-struktur (`00-Inbox/`, `01-Sources/`, `02-Permanent/`, `03-MOCs/`, `04-Output/`, `05-Meta/`, `AI Extracted Notes/`) som aldrig funnits i det här vaultet. Samtliga sökvägar den nämnde var döda och arbetsflödet den föreskrev (Daily/Weekly/Monthly) motsade `CLAUDE.md`:s tre operationer. Omskriven i OS-audit Batch B; se `audits/os-audit-2026-07-26.md`, Check 1 och 2.*
