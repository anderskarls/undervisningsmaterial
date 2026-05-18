---
created: 2026-04-12
updated: 2026-04-12
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
type: moc
tags:
  - moc
  - pedagogik
  - larappar
  - edtech
  - app-design
---

# MOC - Design av larappar

Denna MOC samlar forskning om evidensbaserad design av larappar (educational apps) for gymnasiet. 25 insiktsnoter fran en forskningskartlaggning (april 2026) organiserade i fyra klustrar, med korsdomanbryggor till befintlig pedagogisk forskning.

**Grundprincip:** De digitala verktygen ar ett *implementationslager* for redan etablerad pedagogisk forskning. Abstrakta principer (retrieval practice, KCR-feedback, kognitiv belastning, autonomistod) oversatts till konkreta UI-constraints. En bra larapp implementerar forskningen - den uppfinner inte ny pedagogik.

> Korskoppling: [[MOC - Evidensbaserad lektionsarkitektur]] avsnitt 7 visar hur dessa klustrar mappar mot sexfasstrukturen.

---

## 1. Kognitiv belastning i digital larmiljo (Kluster A)

Hur kognitiv belastningsteori manifesteras i appdesign - varje designval antingen minskar eller okar extraneous load:

- [[en-fraga-per-skarm-fyrdubblar-slutforande]] - En fraga i taget fyrdubblar slutforande. Digital form av guidad ovning.
- [[seductive-details-dekorbilder-skadar-larande]] - Dekorbilder, animationer och illustrationer utan pedagogiskt syfte skadar larande. Mayers coherence principle.
- [[telefonens-narvaro-skadar-larande-aven-oanvand]] - Telefonen ar permanent extraneous load aven nar den inte anvands. Relevant for app-vs-laptopval.
- [[inga-matrisfragor-pa-mobil]] - Matrisfragor pa liten skarm = maximal extraneous load. Anpassa fragetyper for enhet.
- [[inbaddade-fragor-mitt-i-material-slar-fragor-efter]] - Fragor mitt i materialet slar fragor efter. Micro-frageteknik i digitalt material.

**Designprincip:** Minimera element per skarm, en fraga i taget, inga dekorbilder, anpassa for mobilskarmen.

**Kopplar till:** [[kognitiv-belastningsteori-lektionssekvensering]], [[Forskningsoversikt - Pedagogiska presentationer]]

---

## 2. SDT-kompatibel feedback och gamification (Kluster B)

Feedback- och motivationsdesign som stodjer autonomi, kompetens och tillhorighet istallet for att ersatta inre motivation med yttre beloningar:

### Feedback-design
- [[kcr-aterkoppling-som-default-forklaringar-on-demand]] - Knowledge of Correct Response som default, forklaringar on-demand. Minsta mojliga implementation av Wiliams strategi 4.
- [[enkel-aterkoppling-slar-utforliga-forklaringar]] - Enkel feedback slar utforliga forklaringar. Kognitiv belastning galler aven for feedback.
- [[neutral-sprakning-om-fel-svar-minskar-skam]] - "Det ar inte ratt" istallet for "Fel!". Digital implementation av positivt felklimat.

### Motivationsdesign
- [[personlig-progress-slar-rank-som-kompetenssignal]] - "Du kunde 8 av 10" slar "Du ar plats 17". Kompetens utan normreferering.
- [[progress-bar-paradoxen]] - Synlig kvarvarande kostnad kan minska genomforande. Progress bars ar inte alltid motiverande.

### Gamification-varningar
- [[gamification-kombinationer-kan-backfire]] - Levels + Badges + Leaderboards ger *negativ* effekt pa prestation (g = -3,16). Overjustification-effekten.
- [[nyhetseffekten-kort-gamification-slar-lang]] - Gamification under 1 vecka overtrafar over 20 veckor. Novelty decay.
- [[dark-patterns-of-cuteness-barn-autonomi-risk]] - Sot design som manipulerar barns beteende. Autonomihamning.

**Designprincip:** KCR som default, neutralt sprak vid fel, personlig progress istallet for ranklistor. Inga permanenta poang/badge-system - kortvariga events om gamification anvands.

**Kopplar till:** [[felklimat-felaktiga-svar-som-lararresurs]], [[betygsfeedback-dodar-kommentarer]], [[Behovsstod och behovshammande ar skilda konstrukt - inte motsatser]]

---

## 3. Testningseffekt-maskinen: retrieval + spacing + interleaving (Kluster C)

Fyra oberoende evidensmekanismer som bildar karnan i en evidensbaserad quizapp:

- [[testing-effect-g-0-61-ar-quizens-starkaste-argument]] - Testningseffekten (g=0,61, Adesope m.fl.) ar quizens starkaste argument. Retrieval som larmekanism, inte bara bedomning.
- [[spaced-review-2-4-dagar-later-ar-sweet-spot]] - Sweet spot for spacing: 2-4 dagar. Automatiserad spacing-slinga i appen.
- [[interleaving-ar-starkast-nar-teman-forvaxlas]] - Interleaving ar starkast nar teman liknar varandra (forvaxlingseffekt). Produktiv forvaxling i quizdesign.
- [[inbaddade-fragor-mitt-i-material-slar-fragor-efter]] - Fragor mitt i material slar fragor efter. Bryt flodet for bearbetning.
- [[jag-ar-inte-saker-som-tredje-alternativ]] - "Jag ar inte saker" som tredje alternativ. Inbyggd metakognitiv prompt som traner kalibrering.

**Designprincip:** Bygg quizalgoritmen pa testing effect + spaced review + interleaving. Lagg till "jag ar inte saker" for metakognition.

**Kopplar till:** [[retrieval-practice-som-dubbelt-formativt-verktyg]], [[exit-ticket-planering-aterkopplingsslinga]], [[hinge-questions-diagnostiska-fragor-vid-vagskalen]], [[metakognitiva-fragor-sjalvreglerat-larande]]

---

## 4. Svensk rattslig och tillganglighetsbaseline (Kluster D)

Constraints som galler *innan* pedagogiska designval gors - icke-forhandlingsbara for svenska skolor:

### GDPR och dataskydd
- [[gdpr-datafminimering-ar-designconstraint-i-sverige]] - Dataminimering ar lag, inte best practice. Samla bara data som behovs for funktionen.
- [[pseudonyma-id-som-default-i-svenska-skolor]] - Pseudonyma ID som default. Elevnamn bara nar det ar absolut nodvandigt.

### Tillganglighet
- [[wcag-2-2-target-size-24px-som-legal-baseline]] - WCAG 2.2 kraver 24px touch targets. Legal baseline, inte ambition.
- [[udl-extended-time-som-default-inte-accommodation]] - Utokad tid som default for alla, inte som sarskillt stod.
- [[dyslexi-typsnitt-ar-inte-empirisk-bevisat-battre]] - Specialtypsnitt saknar evidens. God default-typografi (Atkinson Hyperlegible, 16px+, generos spacing) hjalper alla.

### AI-specifikt
- [[ai-features-i-larappar-ska-vara-smala-och-off-path]] - AI smal, on-demand, off-critical-path. Automatisk adaptiv svårighetsgrad = high-risk under EU AI Act.
- [[ai-fusk-detektion-ar-opalitlig-och-diskriminerande]] - AI-fuskdetektion ar opalitlig och diskriminerande. Bygger inte pa solid evidens.

### Implementationsgapet
- [[lab-till-klassrum-effektstorlekar-krymper]] - Effektstorlekar fran labb krymper i klassrum. Kalibrera forvantningar pa appeffekter.

**Designprincip:** GDPR-dataminimering, pseudonyma ID, WCAG 2.2, god default-typografi, AI off-path, inga fuskdetektorer.

**Kopplar till:** [[udl-30-inkluderande-lektionsdesign]], [[gy25-digital-kompetens-kallkritik-integration]], [[planering-undervisning-gapet-implementeringsfidelitet]]

---

## 5. Korsdomanbryggor

Sju kopplingar som gar *mellan* de befintliga MOC-domänerna och de nya app-insikterna:

1. **Telefonens narvaro ↔ Tillhorighet** - Telefonen konkurrerar inte bara om kognitiv kapacitet utan om social narvaro.
2. **"Jag ar inte saker" ↔ Overmod efter kallkritik** - UX-mekanism som adresserar overmod-problemet i kallkritikundervisning.
3. **Personlig progress ↔ Agentiskt engagemang** - Synlig personlig utveckling ar forutsattning for agentiskt engagemang.
4. **Dark patterns ↔ Inokulationsteori** - Prebunking-logiken kan appliceras pa manipulativ appdesign.
5. **Gamification backfire ↔ Betygsfeedback** - Samma mekanism: yttre vardering dodar inre motivation.
6. **En fraga per skarm ↔ Vantetid** - Vantetidens digitala motsvarighet: framtvingad bearbetningspaus.
7. **Spaced review ↔ Exit ticket-slingan** - Exit ticket + spaced review ger den faktiska aterkopplingsslingan.

---

## 6. Spanningar och kontradiktioner

- **Kahoot-paradoxen**: d=1,49 for retention *men* nyhetseffekten kollapsar over tid. Se uppdaterad [[digital-verktyg-formativ-bedomning-mentimeter-kahoot]] med caveat.
- **AI-optimism vs AI-skepsis**: Balanserad [[ai-formativ-bedomning-mojligheter-och-risker]] nu uppdaterad med scope+off-path-principen.
- **UDL:s lofte vs symbolisk UDL**: [[udl-30-inkluderande-lektionsdesign]] nu uppdaterad med varning mot evidenslosa features.

---

## 7. Artikelkandidater

1. **"Testningseffekten moter UI-designen: sa bygger du en quizapp som faktiskt lar"** - Kluster C + B. For larare som utvarderar quizverktyg.
2. **"Gamification-paradoxen: varfor Kahoot fungerar, men bara under tre veckor"** - For bredare pedagogisk publik.
3. **"Checklista for svensk larapp: GDPR, WCAG, UDL och evidens som baseline"** - For skolledare och upphandlare.

---

## Forskningsunderlag

- `resources/pedagogiska-appar-design-research-report-2026-04-11.md`
- [[CHANGELOG - Connection Discovery 2026-04-11 Pedagogiska appar]] - Fullstandig kartlaggning med 58 kopplingar

---

*25 insiktsnoter | 7 korsdomanbryggor | 4 syntesklustrar | 3 spanningar | Skapad 2026-04-12*
