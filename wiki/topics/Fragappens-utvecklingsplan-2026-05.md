---
created: 2026-05-21
updated: 2026-05-21
created_by: claude-opus-4-7
updated_by: claude-opus-4-7
agent_version: 04.26
type: topic
tags:
  - larappar
  - app-design
  - fragapp
  - utvecklingsplan
  - implementation
---

# Frågeappens utvecklingsplan 2026-05

Syntes av [[MOC - Design av larappar]] applicerad på den befintliga frågeappen. Förslagen är ordnade efter pedagogisk hävstång per utvecklingsinsats. Utgångspunkt: appen har redan grundfunktionen (ställ fråga, registrera svar, visa "Mina resultat").

> **Designprincip från MOC:n:** De digitala verktygen är ett *implementationslager* för redan etablerad pedagogisk forskning. Bra app-design uppfinner inte ny pedagogik - den översätter abstrakta principer (retrieval practice, KCR-feedback, kognitiv belastning, autonomistöd) till konkreta UI-constraints.

---

## A. Quick wins - låg insats, hög effekt

### 1. KCR som default, förklaring on-demand
Se [[kcr-aterkoppling-som-default-forklaringar-on-demand]].

När eleven svarar fel: visa *bara* "Rätt svar var X" som standard. Separat *"Visa förklaring"*-knapp för fördjupning. Detta är Wiliams strategi 4 i minsta möjliga implementation och slår utförliga autoförklaringar enligt [[enkel-aterkoppling-slar-utforliga-forklaringar]].

### 2. Neutralt språk vid fel
Se [[neutral-sprakning-om-fel-svar-minskar-skam]].

Ersätt "Fel!" / röd cross med "Det stämmer inte" och dämpad färg. Liten textändring, mätbar effekt på skamupplevelse och därmed återvändandefrekvens. Digital implementation av [[felklimat-felaktiga-svar-som-lararresurs]].

### 3. "Jag är inte säker" som tredje alternativ
Se [[jag-ar-inte-saker-som-tredje-alternativ]].

Bygger in metakognitiv kalibrering i varje fråga. Eleven tränar att skilja "vet" från "gissar" - du får renare diagnostik om vad de faktiskt kan. Kopplar till [[metakognitiva-fragor-sjalvreglerat-larande]].

### 4. Personlig progress, aldrig ranklistor
Se [[personlig-progress-slar-rank-som-kompetenssignal]].

"Du kunde 8 av 10 - förra veckan 6 av 10" istället för "Plats 17 av 28". Om poäng/rank redan finns: ta bort. Kopplar till [[betygsfeedback-dodar-kommentarer]] - samma mekanism, yttre värdering dödar inre motivation.

---

## B. Algoritm-nivå - själva testningseffekt-maskinen

Detta är den största pedagogiska hävstången och kärnan i kluster C i [[MOC - Design av larappar]]. Det är skillnaden mellan en *quiz-app* (mäter) och en *lärapp* (bygger minne).

### 5. Spacing-slinga (2-4 dagars sweet spot)
Se [[spaced-review-2-4-dagar-later-ar-sweet-spot]].

Fel-besvarade frågor återkommer efter 2 dagar, rätt-besvarade efter 4-7 dagar. Kärnan i testningseffekt-arkitekturen tillsammans med [[testing-effect-g-0-61-ar-quizens-starkaste-argument]].

### 6. Interleaving över teman som lätt förväxlas
Se [[interleaving-ar-starkast-nar-teman-forvaxlas]].

Blanda *liknande* begrepp (demokratiformer, partiideologier, källkritiska felslut) snarare än helt olika ämnen. Effekten kommer från förväxlingsrisken - utan den ingen effekt.

### 7. Inbäddade frågor mitt i lästext
Se [[inbaddade-fragor-mitt-i-material-slar-fragor-efter]].

Om appen utökas med läsmaterial: bryt det med micro-frågor mitt i, inte bara efter. Teknisk komponent, men pedagogiskt stor förändring.

---

## C. UI-disciplin (kognitiv belastning)

### 8. En fråga per skärm - helig regel
Se [[en-fraga-per-skarm-fyrdubblar-slutforande]].

Ingen lista, ingen sidoinformation, ingen progress-stress samtidigt med själva frågan. Fyrdubblat slutförande är en av de starkaste effekterna i hela MOC:n.

### 9. Inga matrisfrågor på mobil
Se [[inga-matrisfragor-pa-mobil]].

Om appen är responsiv: dölj eller konvertera matrisfrågor automatiskt på <600px. Annars sjunker svarsfrekvensen tyst.

### 10. Ta bort dekorbilder och animationer
Se [[seductive-details-dekorbilder-skadar-larande]].

Varje icke-pedagogisk illustration är extraneous load. Tröstande att ha, mätbart skadligt.

---

## D. Saker att *inte* göra

### 11. Inget permanent badge-/poäng-/leveling-system
Se [[gamification-kombinationer-kan-backfire]].

Kombinationen ger g = -3,16 på prestation. Om gamification, då bara kortvariga events (1 vecka, se [[nyhetseffekten-kort-gamification-slar-lang]]).

### 12. Ingen adaptiv AI-svårighetsgrad i kärnflödet
Se [[ai-features-i-larappar-ska-vara-smala-och-off-path]].

Automatisk anpassning som påverkar betyg/bedömning klassas som high-risk under EU AI Act. AI hör hemma off-path: förklaringar on-demand, översättningshjälp.

### 13. Progress bar - försiktigt
Se [[progress-bar-paradoxen]].

Synlig återstående kostnad kan *minska* genomförande. Visa hellre uppnådd progress än återstående.

---

## E. Svensk juridisk baseline - kolla off innan release

- **GDPR-dataminimering** ([[gdpr-datafminimering-ar-designconstraint-i-sverige]]) - samla bara data som behövs
- **Pseudonyma elev-ID som default** ([[pseudonyma-id-som-default-i-svenska-skolor]])
- **WCAG 2.2: 24px touch targets** ([[wcag-2-2-target-size-24px-som-legal-baseline]]) - legal baseline
- **Utökad tid som default för alla** ([[udl-extended-time-som-default-inte-accommodation]]) - inte som särskilt stöd
- **God default-typografi** ([[dyslexi-typsnitt-ar-inte-empirisk-bevisat-battre]]) - Atkinson Hyperlegible, 16px+, generös spacing istället för dyslexitypsnitt

---

## F. Implementationsordning (förslag)

**Sprint 1 (timmar):** Quick wins #1-4. Texter, färger, ett extra svarsalternativ, ta bort eventuella ranklistor.

**Sprint 2 (dagar):** UI-disciplin #8-10. Layoutarbete, mobiloptimering, rensa visuell distraktion.

**Sprint 3 (vecka+):** Algoritm-nivå #5-7. Bygg spacing-slingan först (störst effekt), interleaving sedan, inbäddade frågor om läsmaterial blir aktuellt.

**Sprint 4 (löpande):** Compliance-baseline #14-18. Inventering före nästa större release.

---

## G. Läslista - top 3 för fördjupning

1. **Den interna forskningsrapporten** - `resources/pedagogiska-appar-design-research-report-2026-04-11.md`. Källan bakom hela MOC:n. Effektstorlekar, studier, nyans. 1-2 timmars läsning.

2. **Brown, Roediger & McDaniel: *Make It Stick* (2014)** - 250 sidor, finns översatt som *Öva för att minnas*. Den mest tillgängliga syntesen av testing effect, spaced practice och interleaving - exakt de mekanismer som är appens existensberättigande.

3. **Dylan Wiliam: *Embedded Formative Assessment* (2:a uppl. 2018)** - 200 sidor. Strategi 4 (feedback) och strategi 5 (eleven som ägare) är exakt det appen implementerar. Läs särskilt kap 5-6.

**Alternativ #3 om UI/multimedia-vinkeln prioriteras:** Mayer, *Multimedia Learning* (3:e uppl. 2020) - coherence-, signaling- och redundancy-principerna. Mer relevant om video/bilder läggs till.

---

## H. Öppna frågor att besvara senare

- Hur ska spaced review schemaläggas i UI:t - som "din kö idag" eller smyga in i nya quiz?
- Vilka teman lämpar sig för interleaving inom samhällskunskap/historia? (Behöver en lista över förväxlingsgrupper.)
- Ska appen ha lärargränssnitt för att se elevernas kalibreringsdata ("jag är inte säker"-svaren)?
- Är pseudonyma ID kompatibelt med skolans LMS/inloggning?

---

*Skapad 2026-05-21 från [[MOC - Design av larappar]] efter användarbegäran. Syntesen ackumuleras snarare än att försvinna i chatt - kan uppdateras när appen utvecklas och nya insikter dyker upp.*
