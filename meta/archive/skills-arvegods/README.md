---
created: 2026-08-03
updated: 2026-08-03
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: reference
tags: [arkiv, skills, arvegods]
---

# Arkiverade skills - arvegods från den generiska mallen

Nio skills flyttades hit 2026-08-03 från `.claude/skills/`. De kom med den generiska second-brain-mall som vaultet startade från, står inte i CLAUDE.md:s skill-lista och har aldrig använts efter omstruktureringen till LLM-Wiki-mönstret. Alla var oförändrade sedan bulkimporten 2026-05-17.

De ligger kvar i stället för att raderas - flytten är reversibel med `git mv` tillbaka.

| Skill | Vad den gjorde | Varför den ligger här |
|-------|----------------|------------------------|
| `analyze-kb` | Analyserade kunskapsbasen och skrev `knowledge-base-analysis.md` | Rapportfilen finns inte; `index.md` gör jobbet |
| `benchmark-memory` | LLM-as-judge-benchmarking av Local Brain Search | Testinfrastruktur för en utvecklingsfas som är avslutad |
| `dialectic` | Två subagenter argumenterar committade positioner mot varandra | Fungerande och intakt, men överlappar `/grill-me` och `grilling` |
| `learn-new-things` | Autonom "learning heartbeat" som forskade på egen hand | Delmängd av `/deep-research` autonoma läge, med samma döda sökvägar |
| `resume-builder` | CV- och ansökningshjälp, engelsk mall | Generisk, ATS-inriktad, inte anpassad till svensk lärartjänst |
| `test-memory-system` | Testplaybook för Local Brain Search fas 1/3/4 | Samma avslutade utvecklingsfas som `benchmark-memory` |
| `talk` | Conversational Partner Mode | Beskriver ett samtalsläge som är default ändå |
| `update-dashboard` | Skrev `dashboard.yaml` från analysrapporten | Varken `dashboard.yaml` eller analysrapporten finns |
| `user-research` | Intervjuguider, usability-tester, enkätdesign | Produktutvecklingsskill utan koppling till undervisning |

## Om något ska tillbaka

`dialectic` och `resume-builder` är de två som mest sannolikt kan behövas igen - den förra är genuint välskriven, den senare kan bli användbar vid nästa ansökan men bör då skrivas om på svenska för svensk lärarkontext.

```bash
git mv meta/archive/skills-arvegods/dialectic .claude/skills/dialectic
```

Kontrollera sökvägarna innan användning: skillsen här har inte fått den sökvägsöversättning som de levande skillsen fick 2026-08-03, så de refererar fortfarande `Brain/`-mappar som inte finns.
