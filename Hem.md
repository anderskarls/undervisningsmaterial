---
tags:
  - dashboard
---

# Mitt Second Brain

Välkommen till din arbetsyta. Vaultet är strukturerat enligt LLM-Wiki-mönstret — råkällor är immutabla, wikin ägs av LLM:n, schemat i `CLAUDE.md` styr arbetet.

---

## Tre lager

### `raw/` — råkällor (immutabla)
- [[raw/inbox|Inbox]] — snabbinfångad text
- [[raw/articles|Artiklar]] — webbartiklar
- [[raw/books|Böcker]] — boknoter
- [[raw/reflections|Reflektioner]] — lektionsreflektioner per vecka
- [[raw/personal-notes|Tankar och planer]] — egna planer, todos
- `raw/student-work/` — elevinlämningar (PDF, xlsx)

### `wiki/` — LLM-underhållna sidor
- [[wiki/concepts|Concepts]] — atomära begreppssidor
- [[wiki/topics|Topics (MOC)]] — synteser per domän
- [[wiki/sources|Sources]] — per-källa-sammanfattningar i sessionsmappar
- [[index|Wiki Index]] — full katalog

### `output/` — leveranser
- [[output/lessons|Lektioner och moment]] — samhällskunskap, historia, juridik
- [[output/articles|Artiklar]] — drafter och publicerade texter

---

## Tre operationer

| Operation | När | Trigger |
|-----------|-----|---------|
| **Ingest** | Ny källa läggs i `raw/` | "ingest" eller `/ingest` |
| **Query** | Fråga mot wikin | Bara ställ frågan |
| **Lint** | Periodisk hälsokontroll | "lint" eller `/lint-wiki` |

---

## Snabbkommandon

- Skapa ny reflektion: `Ctrl/Cmd + N` → välj mall **Lektionsreflektion** eller **Fri reflektion** (sparas i `raw/reflections/`)
- Skapa ny tanke: `Ctrl/Cmd + N` → välj mall **Tanke och plan** (sparas i `raw/personal-notes/`)
- Sök i allt: `Ctrl/Cmd + Shift + F`
- Semantisk sökning: `/recall <fråga>` eller `/search-vault <fråga>`
- Hitta kopplingar: `/find-connections <sida>`

---

## Mallar

Mallar finns i [[templates|templates/]] — Obsidian Templates-plugin pekar dit:
- Daglig reflektion
- Fri reflektion
- Lektionsplanering
- Lektionsreflektion
- Projekt
- Tanke och plan

---

## Taggar

| Tagg | Användning |
|------|-----------|
| `#lektionsplanering` | Alla lektionsplaneringar |
| `#reflektion` | Alla reflektioner |
| `#lektionsreflektion` | Reflektioner kopplade till en lektion |
| `#fri-reflektion` | Fria reflektioner |
| `#tanke` | Tankar och framtidsplaner |
| `#samhällskunskap` | Samhällskunskapsrelaterat |
| `#historia` | Historiarelaterat |
| `#utkast` | Pågående arbete |
| `#klar` | Färdigt material |
| `#att-revidera` | Behöver ses över |

---

## Aktuell status

- **Wiki-sidor:** 176 noterade i `index.md` (~485 indexerade i Local Brain Search)
- **MOCs:** 4 aktiva, 3 kandidater väntar (Historiedidaktik, Kontroversiella frågor, Kognitionsforskning)
- **Senaste restruktur:** 2026-05-18 — vault konverterat till LLM-Wiki-mönster
