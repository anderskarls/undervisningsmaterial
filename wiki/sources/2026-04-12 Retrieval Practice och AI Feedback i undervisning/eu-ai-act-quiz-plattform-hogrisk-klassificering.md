---
created: 2026-04-12
updated: 2026-04-12
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - ai-feedback
  - EU-AI-Act
  - reglering
  - hogrisk
  - skolkontext
  - compliance
source: "EU AI Act Annex III; MSA EvolutionLab (2025); Swiss Cyber Institute (2025)."
evidence-level: strong
type: regulatory-analysis
---

# EU AI Act klassificerar utbildnings-AI som hogrisk - tidslinje och skyldigheter

EU AI Act (som trader i full kraft i Sverige 2 augusti 2026) klassificerar AI-system i utbildning som "hogrisk" under Annex III. Det galler specifikt:

1. AI-system for att **utvardera laranderesultat** (inklusive automatisk betygsattning)
2. System for att **bestamma tillgang eller antagning** till utbildning
3. AI for **bedomning av utbildningsnivaer**
4. System for att **detektera förbjudet elevbeteende** (t.ex. fusk under prov)

**Totalförbjudet** ar: emotionsinferens fran biometrisk data i utbildningsmiljöer, sociala poängsystem och realtidsbiometrisk övervakning.

**Tidslinje for compliance:**

| Datum | Skyldighet |
|-------|-----------|
| 1 aug 2024 | Forordningen trader i kraft |
| 2 feb 2025 | Förbud och AI-literacy-skyldigheter galler |
| 2 aug 2025 | Styrningsregler och GPAI-modellskyldigheter |
| 2 aug 2026 | Full tillampning i Sverige |
| 2 aug 2027 | Utökad övergangstid for hogrisk-AI |

For skolor som "anvandare" (deployers) enligt Artikel 29 galler: (1) mansklig tillsyn av AI-system, (2) transparens om AI-användning, (3) riskbedomningar for hogrisk-system, (4) kvalitetsledningssystem, (5) AI-literacy-utbildning for personal (fran feb 2025), (6) representativa dataset och diskrimineringsförbud.

**Kritisk designimplikation**: En quiz-plattform med AI-feedback som utvarderar laranderesultat *kvalificerar troligen som hogrisk*. Men en plattform dar AI-feedback ar *formativ, on-demand och inte kopplad till betyg* kan argumenteras falla utanfor hogrisk-klassificeringen. Designvalet mellan "AI-feedback som bedomningsverktyg" och "AI-feedback som larstod" ar darför inte bara pedagogiskt utan regulatoriskt avgörande.

## Koppling till befintlig kunskap

- [[gdpr-datafminimering-ar-designconstraint-i-sverige]] - GDPR-dimensionen kompletterar AI Act-dimensionen - bada ar designconstraints
- [[ai-features-i-larappar-ska-vara-smala-och-off-path]] - Off-path-principen ar bade pedagogiskt och regulatoriskt motiverad

## Kalla

- EU AI Act Annex III. https://artificialintelligenceact.eu/annex/3/
- MSA EvolutionLab (2025). "The EU AI Act is here: What schools must do now." https://www.msaevolutionlab.com/blog-full/the-eu-ai-act-is-here-what-schools-must-do-now
- Swiss Cyber Institute (2025). "EU AI Act and Education." https://swisscyberinstitute.com/blog/eu-ai-act-implications-ethical-ai-education/
