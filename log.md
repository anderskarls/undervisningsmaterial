---
type: wiki-log
purpose: Append-only chronological record of wiki operations
---

# Wiki Log

Chronological record of all wiki operations - ingests, queries, lint passes.
Each entry uses a parseable prefix: `## [YYYY-MM-DD] type | Description`

Filter with: `grep "^## \[" log.md | tail -10`

---

## [2026-05-18] restructure | Vault konverterad till LLM-Wiki-mönster

**Trigger**: Användaren valde att byta från Zettelkasten-blandad struktur till rent LLM-Wiki-mönster (raw/wiki/output-tre-lager).

**Flyttar gjorda:**
- `Brain/00-Inbox/` → `raw/inbox/`
- `Brain/01-Sources/Artiklar/` → `raw/articles/`
- `Brain/01-Sources/Books/` → `raw/books/`
- `Reflektioner/` → `raw/reflections/`
- `Tankar och planer/` → `raw/personal-notes/`
- `Elevinlämningar/` → `raw/student-work/` (inkl. 21 WTO-PDF:er flyttade från rot)
- `Alla uppgifter.md`, `Att göra.md` → `raw/personal-notes/`
- `Användarnamn.xlsx` → `raw/student-work/`
- `Brain/02-Permanent/` → `wiki/concepts/`
- `Brain/03-MOCs/` → `wiki/topics/`
- `Brain/Document Insights/` → `wiki/sources/`
- `Brain/05-Meta/Templates/` → `wiki/_templates/`
- `Brain/05-Meta/Changelogs/` → `meta/changelogs/`
- `Undervisningsmaterial/` → `output/lessons/` (git mv, historik bevarad)
- `Brain/04-Output/Articles/` → `output/articles/`
- `Mallar/` → `templates/`
- `Historia/` (rotdublett) → `meta/archive/Historia-rotdublett/`
- `Juridik/` (rotdublett) → `meta/archive/Juridik-rotdublett/`
- `Brain/index.md`, `log.md`, `CHANGELOG.md`, `README.md` → rot
- `Felmedelande.png` → `meta/archive/`

**Borttaget:**
- `Brain/06-Belief-System/`, `Brain/08-Meta-Cognitive/`, `Brain/AI Extracted Notes/` (tomma)
- Brain/ uppslukad helt
- Två 0-byte stubbar i rot (Historiskt tänkande..., Sjalvreglerat larande...)

**Schema uppdaterat:** `CLAUDE.md` skrivet om till LLM-Wiki-mönster (3-lager, ingest/query/lint-operationer). Version bumpat 03.26 → 04.26.

**Index uppdaterat:** `index.md` justerad för nya sökvägar.

**Återstår:** Reindexera Local Brain Search FAISS-index (`./resources/local-brain-search/run_index.sh`) så semantisk sökning matchar nya paths.

---

## [2026-03-07] ingest-batch | Lektionsplaneringsramverk

**Sources**: 12+ research papers on lesson planning frameworks
**Pages created**: 15 (in Document Insights/2026-03-07 Lektionsplaneringsramverk/)
**Pages updated**: MOC - Evidensbaserad lektionsarkitektur
**Key findings**: 90% of AI-generated civics lessons target lower-order thinking; successful teachers spend 57% on guided practice; 5E model g=0.82 for STEM but limited for humanities

## [2026-03-07] ingest-batch | Pedagogisk forskning - Diskussion, bedomning, fragor

**Sources**: Research papers on discussion, assessment, questioning
**Pages created**: ~40 (in Document Insights/2026-03-07 Pedagogisk forskning/)
**Pages updated**: MOC - Evidensbaserad lektionsarkitektur
**Key findings**: IRE pattern dominates classrooms; wait time most underutilized technique; small groups outperform whole-class in deliberative quality

## [2026-03-22] ingest-batch | Kallkritik, desinformation och AI-literacy

**Sources**: 20 research papers on source criticism and AI literacy
**Pages created**: 20 (in Document Insights/2026-03-22 Kallkritik/)
**Pages updated**: Created MOC - Kallkritik och digital kompetens
**Key findings**: CRAAP method makes students MORE vulnerable; teachers more vulnerable to deepfakes than students; Gen Z worse than older generations at distinguishing truth

## [2026-03-22] ingest-batch | Motivation, engagemang och sjalvreglerat larande

**Sources**: 18 research papers on SDT, engagement, SRL
**Pages created**: 18 (in Document Insights/2026-03-22 Motivation/)
**Pages updated**: Created MOC - Elevmotivation och engagemang
**Key findings**: Need support and need thwarting are NOT opposites (r=-0.27 to -0.47); formative assessment strengthens BELONGING most; agentic engagement predicts teacher support stronger than reverse

## [2026-03-22] connection-discovery | Cross-domain analysis

**Type**: Lint/synthesis
**Scope**: 94 insight notes across four sessions
**Connections found**: 56 cross-domain connections
**Consilience zones**: 5 (belonging as universal prerequisite; complexity improves/simplification worsens; agentic engagement; AI as dual problem; overconfidence-calibration-metacognition)
**Article ideas**: 5
**MOC recommendations**: 3

## [2026-04-07] wiki-setup | LLM Wiki integration

**Type**: Infrastructure
**Changes**: Created index.md, log.md; added ingest/query/lint workflows to CLAUDE.md schema
**Purpose**: Integrate LLM Wiki pattern into existing Cornelius system
