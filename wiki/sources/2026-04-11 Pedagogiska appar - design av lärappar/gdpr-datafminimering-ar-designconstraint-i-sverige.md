---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, GDPR, dataskydd, sverige, compliance]
source: Pedagogiska appar design research report 2026-04-11
---

# GDPR-dataminimering är en designconstraint i svensk skolkontext - inte en optimering

För en app som ska användas i svenska skolor är dataminimering inte en "nice to have" utan en rättslig och kulturell nödvändighet. Tre saker som driver detta:

**1. Skellefteå-fallet.** Sveriges första GDPR-böter gällde ansiktsigenkänning i skola och baserades på Art. 5 (dataminimering), Art. 9 (biometriska särskilda kategorier utan rättslig grund) och Art. 35-36 (saknad DPIA). Varje svensk EdTech-designer känner till fallet. Dataminimering är existentiellt, inte aspirativt.

**2. "Skrotade digitaliseringsstrategin" (2022-2023).** Tidö-regeringen uttryckte stark skepsis mot "förhastad digitalisering". Skolverket fick i juli 2024 ett utvidgat uppdrag att explicit beakta *riskerna* med digitalisering, inte bara fördelarna. Allmänna råd om digitala lärverktyg skulle publiceras 15 januari 2025. Lärare och föräldrar är mer integritetsmedvetna än de var för två år sedan.

**3. EU AI Act.** Från 1 augusti 2024 klassificerar Annex III AI-system i utbildning (antagning, bedömning av lärutfall, övervakning av förbjudet beteende under prov) som **high-risk**. Förbud mot emotion-inference gäller från 2 februari 2025. High-risk-reglerna blir fullt enforceable 2 augusti 2026.

Praktisk dataminimeringscheckllista från rapporten:
- Samla inte namn om pseudonymt ID funkar ("Elev 1-30" som läraren tilldelar).
- Ingen telemetri utöver pedagogiskt nödvändig.
- Ingen tredje-parts-analytics (Google Analytics är sannolikt icke-compliant för minderåriga).
- Hosting i EU/EES, helst Sverige. Undvik US-processorer utan SCC + TIA.
- Retentionspolicy: radera svar efter att läraren använt dem (30 dagar default).
- DPIA (konsekvensbedömning) krävs för behandling av barns data i skala.
- Rätten till tillgång: läraren/eleven ska kunna exportera och radera.
- INGEN emotion detection, INGEN webcam-proctoring.

## Implikationer för design
- Pseudonyma ID:n från dag 1. Ingen e-post, inget efternamn.
- Hosting i EU (Hetzner FSN, Scaleway PAR, OVH GRA, Upsun, DigitalOcean FRA1).
- 30 dagar retention som default, lärarexport innan radering.
- DPIA dokumenterat och publicerat.
- Integritetspolicy på svenska, Skolverket-vänlig.
- Inga tredje-parts-analytics/pixels/cookies alls.

## Koppling till survey-platform
Din app *måste* byggas med pseudonymt läge som default. Det kan vara din marknadsfördel mot internationella alternativ: "GDPR by design, EU-hosting, ingen telemetri." Lärare kommer att välja din app framför Kahoot/Mentimeter om du kan peka på denna compliance-fot i svenska skolor efter Tidö-svängen.

## Källa
- IAPP (2024). "How to interpret Sweden's first GDPR fine on facial recognition in school." https://iapp.org/news/a/how-to-interpret-swedens-first-gdpr-fine-on-facial-recognition-in-school
- Regeringen.se (juli 2024). "Skolverket ska beakta riskerna med digitalisering." https://www.regeringen.se/pressmeddelanden/2024/07/skolverket-ska-beakta-riskerna-med-digitalisering/
- EU AI Act Annex III. https://artificialintelligenceact.eu/annex/3/
