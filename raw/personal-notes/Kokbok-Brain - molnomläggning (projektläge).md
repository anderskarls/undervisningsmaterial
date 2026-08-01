---
created: 2026-06-28
updated: 2026-06-28
tags:
  - projekt
  - kokbok
---

# Kokbok-Brain - molnomläggning (projektläge)

Omläggning av det gamla lokala `kokboks-mcp` (SQLite + sqlite-vec + lokal MCP över stdio) till en **molnbaserad** sökbar receptdatabas. Bygger på Open Brain-mönstret (OB1, NateBJones). Den gamla lokala MCP-vägen ersätts.

- **Repo:** privat GitHub `anderskarls/kokbok-brain`, arbetskopia i `~/kodprojekt/kokbok-brain`
- **Plan:** `PLAN.md` i repot (fristående, portabel byggplan i fem faser)
- **Data:** 151 EPUB-kokböcker i `~/kodprojekt/kokboksapp/` (~14 500 recept totalt)
- **Hemligheter:** i `~/kodprojekt/kokbok-brain/.env` (gitignored) - finns INTE i vaultet

## Arkitektur

```
EPUB-böcker
   |  (Fas 2: lokalt Python-skript, en gång per bok)
   v
extrahera recept -> embeddings (OpenRouter) -> metadata (gpt-4o-mini)
                          |
                          v
                   recipes-tabell i Supabase (Postgres + pgvector)
                          ^
                          |  (Fas 3: Supabase Edge Function = MCP-server, läser bara)
            search_recipes / get_recipe / list_books
                          ^
                          |  (Fas 4)
            Claude Desktop / Claude Code / ChatGPT / mobil
```

- **Embeddings:** `openai/text-embedding-3-small` (1536 dim) via OpenRouter
- **Metadata:** `openai/gpt-4o-mini` via OpenRouter (ingredienser, dish_type, cuisine, season, diet, tid)
- **Kostnad:** ~$1-2 engång (full inläsning), sedan i praktiken gratis (Supabase free-tier)

## Status (2026-06-28)

- [x] **Fas 0-1 KLART** - Supabase-projekt `djnaqjhtucidcevzjpgt`, schema + `match_recipes` + RLS körda och verifierade. OpenRouter-nyckel ($5) verifierad.
- [x] **Fas 2-pipeline bevisad** - *East* (Meera Sodha) = 128 recept inlästa, semantisk sökning verifierad i molnet ("aubergine" -> rätt träffar 50-55%).
- [ ] **Delmängd (13 diversa kokböcker, ~1 530 recept)** - laddas sekventiellt just nu för bred kvalitetskontroll innan full bulk-load.
- [ ] **Full bulk-load** (~14 500 recept, ~$3-4) - kräver kokboks-filter (se nedan).
- [ ] **Fas 3** - deploya Edge Function (kräver `supabase`-CLI + Deno, ej installerade).
- [ ] **Fas 4** - koppla in Claude (`claude mcp add --transport http ...`).

## Lösta problem (avvikelser från planen)

1. **Styckning failade.** Planens `extract_recipes.py` styckade på h1/h2/h3-rubriker. Det gav 0 recept för vissa förlag (Ottolenghi, Modern Way to Eat) och brus för andra (bokstavsavdelare, diet-badgar "V"/"VO" som titlar). **Fix:** omskriven till TOC-baserad styckning (bokens innehållsförteckning -> rena titlar + avdelning som kategori-metadata), rubrikmetoden som fallback. Commit `651436b`. Resultat: East 175->128, A-Z Pasta 25->128, Ottolenghi 3->307, Modern Way to Eat 0->166.
2. **Upsert gav HTTP 400.** Planens `01_schema.sql` skapade ett partiellt unikt index (`where content_fingerprint is not null`). PostgREST-upsert kan inte använda partiellt index -> `42P10`. **Fix:** fullt unikt index. Commit `8726296`. Live-DB fick samma DDL manuellt i SQL Editor.

## Återstår / uppföljningar

- **Kokboks-filter före full bulk-load:** bokmappen innehåller romaner/facklitteratur (Addie LaRue, Learning How to Learn, Penguin History of the World m.fl.) som ger spök-recept via rubrik-fallbacken. Måste filtreras bort.
- **5 failande riktiga kokböcker (0 recept):** The Food Lab, Every Night is Pizza Night (båda Kenji), Beyond Flavour, The Flavor Bible (referensbok), Family Thai (kraschar på Storytel-DRM `storytel_metadata.json`). Behöver utredas separat.
- **Ev. överstyckning:** The Everlasting Meal 906 recept - värt en titt.

## Bakgrund

Planen hittades efter sökning i sessionshistoriken - den fanns inte i de lokala jsonl-sessionerna (bara bak till 2026-05-23) utan i GitHub-repot. Originaldiskussionen om OB1-setupen: överväg [[OB1]]-kombination med wiki-setupen togs upp 2026-05-23.
