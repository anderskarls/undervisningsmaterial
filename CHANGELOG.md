# Brain - Master Changelog

**Purpose**: Quick reference index of all discovery sessions and major changes.

This is a **summary index**. For detailed session logs, see `05-Meta/Changelogs/CHANGELOG - [Session Type] YYYY-MM-DD.md`.

---

## 2026-07

### 2026-07-28
**Deep research: Språkanpassning av texter** - [Details](meta/changelogs/SESSION SUMMARY - Deep Research Sprakanpassning 2026-07-28.md)

- 18 noter i `wiki/sources/2026-07-28 Språkanpassning av texter/` från två parallella researchspår (internationell läsforskning respektive svensk didaktik och styrdokument). 28 länkmål verifierade, noll trasiga.
- **Huvudfynd:** hållningen "scaffolda proceduren, sänk aldrig språknivån" preciseras men bekräftas inte. Reichenberg bytte inte ut ämnesbegreppen - hon förklarade dem; det bearbetade var kohesion, kausalitet och röst. Som generellt förståelsepåstående håller hållningen inte: förenkling vinner ofta på korttidsförståelse, med små effekter. Starkast står den för primärkällor i historia, där källans språk är studieobjektet och inte transportmedlet.
- **Korsdomänfynd:** McNamaras reverse cohesion effect (1996) och Tetzlaffs expertise reversal-metaanalys (2025) är samma mekanism i två fält som sällan citerar varandra. Kohesion är scaffolding inbyggd i texten och ska fadas som all annan stöttning.
- **Faktakorrigering:** Gy25 gäller sedan 1 juli 2025. Varken historia eller samhällskunskap ställer krav på textsvårighet, och inga nationella prov finns i ämnena på gymnasiet - ingen extern kalibreringspunkt existerar.
- **Tre noter dokumenterar vad man inte ska hävda:** den direkta jämförelsen saknas i forskningen, "lättläst cementerar låga förväntningar" saknar svensk empirisk grund, och scaffolding-argumentet vilar tyngre på auktoritet än på effektforskning.

**Deep research: AI i lärararbetet - professionens organisering** - [Details](meta/changelogs/SESSION SUMMARY - Deep Research AI i lararabetet 2026-07-28.md)

- 40 noter + ny [[MOC - AI i lärararbetet och professionens organisering]] från fem parallella researchspår (nätverk, fack, policy, forskning, Sverige/Norden). Ny domän: läraren som yrkesutövare och part, till skillnad från vaultets befintliga AI-täckning som gäller eleverna (AI-literacy) och proven (examinationsformer).
- **Robustaste fyndet:** bedömning är den gräns professionen själv drar, och den dras fyra gånger oberoende - av professionsidentitet (TALIS 2024: 64 % använder AI för planering, 26 % för bedömning), myndighetsutövning (Ofqual, Oklahoma, Kina, EU), statsfinansiell reformdesign (Sverige valde 3 500 mänskliga bedömare) och psykometri (QWK-spannet 0,30-0,80).
- **Strukturell iakttagelse:** professionen har ett normlager utan verkställighet och ett handlingslager utan spridning. Mellanlagret - ämnesdidaktiska kollegiala strukturer - är tomt. Inget aktivt lärarlett nätverk för SO/humaniora och AI hittades, varken internationellt eller i Sverige.
- **Fem motsägelser mot befintliga sidor** (M1-M5), varav Henrekson-tidslinjen (slutprov 2029/meritvärden 2031, inte 2028, och sve/sva/eng först - inte SO-ämnena) underminerar en praktisk hållning som är citerad i `MOC - Bedömning och betygssättning`.
- **Faktarättning:** EU:s högriskkrav för utbildning flyttade till 2 december 2027 genom Digital Omnibus, verifierat mot tre juridiska källor. Fyra nya noter rättade; två befintliga sidor bär fortfarande fel datum.
- **Åtta krav på förmågeträningsbygget**, tyngst att CLI-flödets ordningsföljd är ankringsvänlig och att stresstestets 96 % mätte LLM-bedömning av LLM-genererade svar.
- Metodbegränsning: Firecrawl låg nere hela sessionen; all research gjord med WebSearch/WebFetch. Sverige-spåret svagast underbyggt.
- Statistik: wiki-sidor 810 -> 851 (räknare omräknade mot disk och definitionen utskriven; de gamla siffrorna var internt inkonsistenta).

### 2026-07-22
**Bygge: Elevlägesbilden v1 - grundinfrastruktur**

- Vaultets fjärde lager `elevdata/` skapat (ADR 0002): elevakter, synteser, observationer per läsår, med bindande pseudonymregler och mallar. Gallras vid läsårsslut.
- Pseudonymiseringsbryggan i `resources/elevlagesbild/`: hämtar signaldata (classroom-tool, survey-plattformen), byter källidentiteter mot Elev-ID via lokal nyckelfil (`.secrets/elevnyckel/`, aldrig läst av LLM), läckagekontroll som avbryter vid klarnamn/e-post. Smoke-testad.
- Nya skills: `/undantagssyntes` (veckovis rapport med beläggskrav, max 5 avvikelser per kursinstans) och `/observation` (friktionsfri infångning med Elev-ID).
- Kartläggning bekräftade ADR 0003:s antagande för 2 av 3 källsystem; förmågeträningen saknar per-elev-API (öppen punkt). Detaljer i `log.md` [2026-07-22].

### 2026-07-19
**Grilling + file-back: Förmågeträningens utvecklingsplan (Hi 1b, HT26)**

- Grilling-session om kommande läsåret: hur bygga material så elever tränar förmågor i stället för att enbart stoffplugga. Resultatet filat som [[Formagetraningens-utvecklingsplan-2026-07]] i `wiki/topics/` (andra implementationsplanen efter [[Fragappens-utvecklingsplan-2026-05]]).
- Design: femdelad delfärdighetstaxonomi (kategorisera, kedjor, förgrena, vikta, kritisera) x två riktningar (orsak/konsekvens); mikroövningstrappa med exempelsvar-efter-försök som feedback-ryggrad; AI-återkoppling i survey-plattformen (nya frågetyper sortering + kedjebyggare); hybrid obligatorisk ramp -> frivillig övning; bedömningskarantän.
- Pilot: båda nya Historia 1b-grupperna från kursstart HT26. Sommarbyggordning i 6 steg, syntetisk stresstestning av AI-feedback före elevkontakt. Statistik: wiki-sidor 767 -> 768.
**Ingest: Educational Escape Rooms Research Report - ny domän** - [Details](wiki/sources/2026-07-11 Designa escaperooms/CHANGELOG - Extraktion 2026-07-11.md)

- 22 atomära noter + sessionschangelog i `wiki/sources/2026-07-11 Designa escaperooms/`. Helt ny domän i vaultet (spelbaserat lärande via escape rooms) - inga befintliga sidor om ämnet fanns.
- **Designramverk (7 noter):** escapED, Star Model (K-12-validerat), Room2Educ8 (Design Thinking), CREATE (STEM, "chocolate-covered broccoli"), Generisk flernivåstruktur, Socio-konstruktivistiskt ramverk (2026, riktat mot humaniora), samt en syntesnot om det konvergerande niostegsprocessen alla ramverk delar.
- **Metaanalytisk evidens:** tre konvergerande 2023-2024-metaanalyser visar stora kunskapsvinster (d=1,4; g=0,86; SMD 0,84-4,91) men extrem heterogenitet (I²=95,5%); svag teoretisk grund (endast 9 teorier över 24 studier); debriefing implementeras i under 40% av K-12-studierna trots att det är den mest avgörande lärandefasen.
- **Ämnesspecifikt (historia/samhällskunskap):** enda kontrollerade civics-studien (Chen et al. 2025, årskurs 8); karaktärsperspektiv som narrativ teknik för multiperspektivitet (hypotes, ej testad för historia); stark praktikeranvändning men nästan obefintlig peer-granskad evidens för ämnet.
- **Kontrariskt fynd:** "lärparadoxen" (SEER 2026) - motivation och kreativitet steg kraftigt i en escape room-intervention men standardiserade provresultat rörde sig inte i motsvarande grad.
- **Korslänkat mot 6 befintliga sidor** (ingen duplicering): [[gamification-kombinationer-kan-backfire]], [[nyhetseffekten-kort-gamification-slar-lang]], [[eu-rollspel-vad-forskning-faktiskt-visar]], [[inokulationsspel-klassrumsverktyg-oversikt]], [[constructive-alignment-biggs]], [[vad-make-it-stick-fick-ratt-och-vad-som-overspelats]].

**Connection Discovery: Escape rooms mot vaultet** - [Details](meta/changelogs/CHANGELOG - Connection Discovery 2026-07-11.md)

- 19 nya wikilänk-par mellan escape room-domänen och fem andra domäner: SDT/motivation (autonomistöd+struktur, agentiskt engagemang), CLT/multimedia (seductive details/coherence-principen ↔ "chocolate-covered broccoli"), aktivering/formativ bedömning (Freeman sweet spot, mini-whiteboards samplingsproblem, equity), historiedidaktik (andra ordningens begrepp), samt ett tredje bekräftande ben i mönstret "motivations-/domänpåståenden replikerar sämst i SO/humaniora" (lärparadoxen ↔ produktivt misslyckande ↔ Make It Stick-kalibreringen).
- 25 filer redigerade (8 nya sessionsnoter berikade, 15 befintliga sidor fick backlänkar, 2 MOC:er uppdaterade: [[MOC - Elevmotivation och engagemang]] och [[MOC - Lärandevetenskap och kognition]]).
- **MOC-beslut:** ingen ny MOC för escape rooms - domänen positionerad som tillämpad fallstudie i befintliga MOC:er snarare än egen kunskapsdomän.

---

## 2026-06

### 2026-06-15
**Ingest: The Enlightened Economy (Mokyr 2009) - kluster D, helbok-ingest** - [Details](wiki/sources/2026-06-15 The Enlightened Economy (Mokyr)/CHANGELOG - Document Analysis 2026-06-15.md)

- Sista och fjärde klustret i 12-boksbatchen (industriella revolutionen, moment 7 i Hi 1b). EPUB-extraktion + en läsagent; ~260 000 ord (20 kapitel).
- 12 atomära noter + sessionschangelog i `wiki/sources/2026-06-15 The Enlightened Economy (Mokyr)/`. Mokyrs idé-/kulturförklaring: Industrial Enlightenment - upplysningens nyttiga kunskap som motor bakom brittiska industriella revolutionen.
- **Nyckelbegrepp:** useful knowledge (propositionell vs preskriptiv); baconska programmet; savants-fabricants-alliansen; sjunkande åtkomstkostnader till kunskap; förbättringskulturen; rent-seeking-begränsning; varför inte Kina/Frankrike; gradvis inte plötslig.
- **Trepartspar komplett:** Mokyr (idéer/kultur) som tredje position mot [[malm-fossil-capital-kolets-politiska-historia]] (arbetskontroll/materialism) och [[hobsbawm-industriella-revolutionen-bomull-och-kapital]] (strukturell dubbelrevolution). Kontrastnoten [[mokyr-vs-malm-ideer-mot-arbetskontroll]] = direkt SAC-brygga. Bryggar även bakåt till upplysningen (Robertson, Wootton).
- **MOC fylld:** [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] sektion 4 (industriella revolutionen) ifylld. Hela 12-boksbatchen (kluster A-D, 2 nya epok-MOC:er) nu komplett.
- 4 befintliga sidor korslänkade. Statistik: source sessions 37 -> 38; source notes 698 -> 710; wiki-sidor 733 -> 745; MOCs oförändrat 13.

---

### 2026-06-15
**Ingest: Revolutionernas tidsålder kluster C (Taylor, Wood, Darnton, Tackett, Hobsbawm) - fem hela facklitterära verk** - [Details](log.md)

- Tredje och största klustret i 12-boksbatchen (revolutionernas tidsålder, moment 6 i Hi 1b). EPUB-extraktion + fem parallella läsagenter; ~945 000 ord.
- 63 atomära sidor + 5 sessionschangelogs: Taylor (13), Wood (12), Darnton (13), Tackett (12), Hobsbawm (13) i `wiki/sources/2026-06-15 .../`.
- **Ny MOC:** [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] - andra epok-MOC:en i batchen, syskon till [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]]. Sektion 1-3 fyllda (amerikanska, franska, dubbelrevolutionen); sektion 4 (industri) reserverad för kluster D.
- **Två färdiga kontrastpar:** Taylor (blodig kontinental verklighet) mot Wood (genuint radikal idéomvälvning) = SAC om amerikanska revolutionen ([[taylor-vs-wood-revolutionen-radikal-eller-blodig]] mot [[wood-revolutionen-var-en-radikal-social-transformation]]); Darnton (hur revolutionen blev tänkbar) till Tackett (hur den blev blodig) = före/efter-par för franska revolutionen ([[darnton-och-tackett-fore-och-efter-1789]] / [[tackett-skracket-var-inte-forutbestamt-utan-en-process]]).
- **Hobsbawm** = den marxistiska makroramen (dubbelrevolutionen) som binder ihop allt och bryggar till industri-klustret; även historiesyns-par mot Wood (materialism mot idealism) och tredje teleologirösten mot Wickham.
- 8 befintliga sidor korslänkade. Statistik: source sessions 32 -> 37; source notes 635 -> 698; MOCs 12 -> 13; wiki-sidor 669 -> 733.

---

### 2026-06-15
**Ingest: Tidigmodern-batch kluster B (Wootton, Shapin, Robertson) - tre hela facklitterära verk** - [Details](log.md)

- Andra klustret i 12-boksbatchen (nya tiden -> industriella revolutionen, moment 5-6 i Hi 1b). EPUB-extraktion + tre parallella läsagenter; ~836 000 ord (Robertson ensam 463k, läst strategiskt).
- 40 atomära sidor + 3 sessionschangelogs: Wootton (14), Shapin (12), Robertson (14) i `wiki/sources/2026-06-15 .../`.
- **MOC utvidgad:** [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] sektion 4 (vetenskaplig revolution) och 5 (upplysningen) fyllda - MOC:en nu komplett för kluster A+B.
- **Färdigt kontrastpar:** Wootton (realism, "revolutionen var verklig") mot Shapin ("there was no such thing") = SAC "Fanns den vetenskapliga revolutionen?", samma mekanik som katastrof/kontinuitet för Roms fall. Noderna [[wootton-vs-shapin-realism-mot-konstruktivism]] mot [[shapin-det-fanns-ingen-vetenskaplig-revolution]].
- **Robertson:** upplysningen som strävan efter lycka (inte kall rationalism); försvarar epoken mot Adorno/Horkheimer; bryggar bakåt till slaveriet ([[upplysningen-och-slaveriet-spannungen]], universalismens blinda fläck) och framåt till revolutionerna.
- 6 befintliga sidor korslänkade. Statistik: source sessions 29 -> 32; source notes 595 -> 635; wiki-sidor 629 -> 669.

---

### 2026-06-15
**Ingest: Tidigmodern-batch kluster A (Restall, Townsend, Rediker) - tre hela facklitterära verk** - [Details](log.md)

- Första klustret i en 12-boksbatch som fyller wikins lucka "nya tiden -> industriella revolutionen" ([[laslista-nya-tiden-till-industriella-revolutionen]], moment 5-7 i Hi 1b). EPUB-extraktion via `resources/epub_extract.py` + tre parallella läsagenter (en per bok), ~400 000 ord.
- 37 atomära sidor + 3 sessionschangelogs: Restall (12), Townsend (12), Rediker (13) i `wiki/sources/2026-06-15 .../`.
- **Ny domän/MOC:** [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] - sektion 1-3 fyllda (erövring, aztekerna, slavhandeln); sektion 4 (vetenskaplig revolution + upplysning) reserverad för kluster B. Syskon-MOC [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] skapas vid kluster C. Kronologisk fortsättning på [[MOC - Medeltiden (innehåll och historiebruk)]].
- **Färdiga par/bryggor:** Restall + Townsend = oberoende konvergens (gudamyten som efterhandskonstruktion, Malintzin som aktör, erövringen som inhemskt inbördeskrig + epidemi). Tre källkritikfall (probanza, nahuatl-annaler, sjömannen-som-vittne) förstärker [[medeltida-kallor-ar-retorik-inte-fonster]]. Rediker bryggar framåt till [[malm-fossil-capital-kolets-politiska-historia]] (slaveriet som kapitalets ackumulation 150 år före kolet) och bakåt till [[rom-som-slavsamhalle-frigivning-och-blind-flack]].
- **Kontraintuitivt:** erövringen var ingen europeisk överlägsenhet utan inhemskt inbördeskrig; ras "tillverkades" ombord på slavskeppet; "den spanska erövringen" fullbordades aldrig.
- 9 befintliga sidor korslänkade (bakåtlänkar). Statistik: source sessions 26 -> 29; source notes 558 -> 595; MOCs 11 -> 12; wiki-sidor 591 -> 629.

---


### 2026-06-10
**Query + file-back: Läsårsskiss Hi 1b (85 h) + läslista för wikins luckor** - [Details](log.md)

- Läsårsskiss för Historia 1b (forntid -> industriella revolutionen) byggd på Momentplaneringsramverket: 8 moment, Rüsen-progression, andra ordningens begrepp som spiral, retrieval-infrastruktur. Sparad i `output/lessons/Historia/Läsårsskiss Hi 1b - forntid till industriella revolutionen.md`.
- **Ny concept-sida:** [[laslista-nya-tiden-till-industriella-revolutionen]] - fyller wikins luckor 1450-1850 (kolonialism, reformation, upplysning, revolutionerna, industrialisering, svensk tråd). Nyckelmönster: färdiga kontrastpar för SAC; ingest-prioritet 1 är Allen (motpositionen till Malms fossil capital-tes).
- Statistik: concepts 16 -> 17; wiki-sidor 590 -> 591.

---

### 2026-06-10
**Ingest: Antiken-batch (Ober, Lane Fox, Beard, Heather) - fyra hela facklitterära verk** - [Details](log.md)

- ~840 000 ord över fyra böcker (alla på [[laslista-antikens-grekland-och-rom]]). EPUB-extraktion + 12 parallella läsagenter i två vågor (disjunkta domäner -> ren korsboks-dedup).
- 52 atomära sidor + 4 sessionschangelogs: Ober (12), Lane Fox (13), Beard (12), Heather (15) i `wiki/sources/2026-06-10 .../`.
- **Ny domän/MOC:** [[MOC - Antiken (Grekland och Rom)]] - fyra linser: ekonomi/institutioner (Ober), kultur/frihet/lyx (Lane Fox), källkritik/Rom (Beard), katastrof/fall (Heather). Förgångare till [[MOC - Medeltiden (innehåll och historiebruk)]].
- **Viktigaste bryggan:** Heather = katastrofrösten som fyllde Ward-Perkins-luckan; trepositionsdebatten katastrof/kontinuitet/varken-eller nu komplett. Antik möter medeltid i Roms fall.
- **Kontraintuitivt:** Rom skapade sin egen barbarfiende; splittringen gjorde Grekland rikt; Beard slutar 212 e.Kr. (medborgarskapet), inte 476.
- Statistik: source sessions 22 → 26; source notes 506 → 558; MOCs 10 → 11; wiki-sidor → 589.

---

### 2026-06-10
**Moment: Den mörka medeltiden (Hi 1b)** (autonom /planera-moment-körning, hela 7-stegsprocessen) - [Beslutslogg](output/lessons/Historia/Den mörka medeltiden/beslutslogg.md)

- Komplett moment: momentplan, 10 lektionsplaner + elevuppgifter (md+docx), källkompendium + SAC-positionskort, examination med E/C/A-matris, 11 quizzar (68 frågor) i frågeappen, 3 NotebookLM-videor, 9 Arkiv-presentationer, momentoversikt.html.
- Designen byggde direkt på medeltids-MOC:ens fem bokingester (2026-06-08): brottningsfrågan "Var medeltiden mörk?", trepartsdebatten ljus/katastrof/varken-eller som SAC, mörka medeltiden som studieobjekt.
- Kursminne för Historia Nivå 1b grundat. 0 ramverks-overrides. Wikin oförändrad (output-lagret).

---

### 2026-06-09
**Deep Research: Undervisning på yrkesprogram** (`/deep-research`, directed mode) - [Details](meta/changelogs/SESSION SUMMARY - Deep Research Yrkesprogram 2026-06-09.md)

- 3 parallella research-rapporter (~90 källor, 2024-2026) i `resources/`: systemkontext+Gy25, didaktik/motivation, internationell VET.
- 18 atomära sidor + sessionschangelog i `wiki/sources/2026-06-09 Undervisning på yrkesprogram/`.
- **Strukturell diagnos:** yrkeselever har 50 vs 100 p Sh/Hi, 1a/1b-spårlåsning och halverat ideologiinnehåll = kodifierad demokratiojämlikhet (Gy25 ändrar betygslogik, inte timantal).
- **Kontraintuitiva trådar:** eleverna vill ha mer utmaning (inte mindre); mer APL kan skada (belgisk studie 2025); avskaffad spårning eliminerar inte social reproduktion (Schindler 2024); det AI inte ersätter är vad VET tränar (WEF 2025).
- **Didaktisk hävstång:** relation + relevans + kognitivt utmanande uppgifter + öppet klimat - aldrig sänkta krav (Pygmalion d=0,92).
- **Dedup:** 3 dubbletter undvikna; [[kontrovers-mollenborg-a-lag-b-lag-demokrati]] berikad i stället.
- **Ny MOC:** [[MOC - Undervisning på yrkesprogram]] (18 nya + 6 tidigare noter, 8 sektioner).
- Statistik: source sessions 21 → 22; source notes 488 → 506; MOCs 9 → 10.

---

### 2026-06-08
**Ingest: The Once and Future Sex (Janega 2023) - hel bok** (bok 4/4 i autonom raw-batch, SISTA) - [Details](wiki/sources/2026-06-08 The Once and Future Sex (Janega)/CHANGELOG - Document Analysis 2026-06-08.md)

- ~70 000 ord, 5 kap. Polemisk genushistoria; matar genushistoria-momentet (Historia 2a). Fem parallella agenter.
- 11 atomära sidor + sessionschangelog i `wiki/sources/2026-06-08 The Once and Future Sex (Janega)/`
- **Tes:** moderna könsideal är konstruerade, inte naturliga; underordningen är konstanten, motiveringen byts (Gud -> Naturen -> Vetenskapen).
- **Distinkt:** kvinnan som "utochinvänd man"; den sexuellt glupska kvinnan (bevisar konstruktion); skönhet som förklädd klass; kärlek vs äktenskap; "kvinnor arbetade överallt, hemmafrun är modern"; tradwife-historiebruk; motröster (Hildegard, Christine de Pizan).
- **Balanspar:** [[janega-vs-wickham-polemik-mot-struktur]] - polemisk vs strukturell genushistoria. Plus momentdesign-not med klassrumsvarning (grova exempel = lärarberättade).
- **MOC uppdaterad:** [[MOC - Medeltiden (innehåll och historiebruk)]] ny sektion 11.
- Statistik: sidor 502 → 513; source sessions 20 → 21; source notes 477 → 488.
- **Raw-batch klar:** fyra textbara böcker bearbetade. Ward-Perkins *The Fall of Rome* (.m4b) kan ej textextraheras.

---

### 2026-06-08
**Ingest: Powers and Thrones (Dan Jones 2021) - hel bok** (bok 3/4 i autonom raw-batch) - [Details](wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/CHANGELOG - Document Analysis 2026-06-08.md)

- ~240 000 ord, 16 tematiska kapitel. Populär narrativ historia; fokus på vad Jones TILLFÖR (domänen hade redan 51 akademiska noter).
- 11 atomära sidor + sessionschangelog i `wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/`
- **Distinkt:** fem krafter-ram ("vi är medeltidens barn"); klimat som drivkraft (megatorkan flyttade hunnerna); **mongolerna** + Pax Mongolica (fyller väst-luckor); kommersiella revolutionen; översättningsrörelsen (väst som baksvansare); korståget som giftig maktteknologi (mot extremism); tryckpressen som informationsrevolution (brygga till källkritik/medier).
- **Crown jewel:** [[dan-jones-vs-wickham-teleologi-mot-anti-teleologi]] - samma material, motsatt narrativ logik = färdigt verktyg för historiesyn/historiebruk. Plus klassrumshooks-resurs.
- **MOC uppdaterad:** [[MOC - Medeltiden (innehåll och historiebruk)]] ny sektion 10.
- Statistik: sidor 491 → 502; source sessions 19 → 20; source notes 466 → 477.

---

### 2026-06-08
**Ingest: Medieval Europe (Wickham 2016) - hel bok** (bok 2/4 i autonom raw-batch) - [Details](wiki/sources/2026-06-08 Medieval Europe (Wickham)/CHANGELOG - Document Analysis 2026-06-08.md)

- ~135 000 ord, 13 kap. Samma författare som bok 1; fokus på det NYA (1000-1500) + helhetssyntes (tidig period överlappar Inheritance of Rome).
- 12 atomära sidor + sessionschangelog i `wiki/sources/2026-06-08 Medieval Europe (Wickham)/`
- **Kärnteser:** 1000-talet som medeltidens verkliga vattendelare; lokalisering av makt (cellstruktur); massmarknad (ej lyxhandel) som ekonomisk motor; sex statsbyggnadsmekanismer; "skatt kräver samtycke" som representationens rot; 1204 (Bysans som förlorat alternativ); digerdöden som maktförskjutning, ej kollaps; ingen systemisk senmedeltida "kris"; 1500 svagt brott, reformationen det verkliga.
- **Anti-teleologi:** "history goes *from*, not *to*". Genus-noten förbereder Janega-ingesten.
- **MOC uppdaterad:** [[MOC - Medeltiden (innehåll och historiebruk)]] ny sektion 9.
- Statistik: sidor 479 → 491; source sessions 18 → 19; source notes 454 → 466.

---

### 2026-06-08
**Ingest: The Inheritance of Rome (Wickham 2009) - hel bok** (bok 1/4 i autonom raw-batch) - [Details](wiki/sources/2026-06-08 The Inheritance of Rome (Wickham)/CHANGELOG - Document Analysis 2026-06-08.md)

- ~275 000 ord, 23 kap. Extraktion via `resources/epub_extract.py`; läst av fem parallella kapitelkluster-agenter.
- 15 atomära sidor + sessionschangelog i `wiki/sources/2026-06-08 The Inheritance of Rome (Wickham)/`
- **Ramning:** akademisk materialistisk motvikt till de 24 Bright Ages-noterna. Wickhams **tredje position** - varken katastrof eller kontinuitet, förstå på egna villkor.
- **Kärnteser:** skattestatens fall som den strukturella förändringen; regional variation (Britannien total kollaps vs Francias kontinuitet); den verkliga romerska kontinuiteten fanns i öst (Bysans/kalifatet); böndernas "caging"; nordisk statsbildning sent och utan romersk grund.
- **MOC uppdaterad:** [[MOC - Medeltiden (innehåll och historiebruk)]] ny sektion 8; Ward-Perkins-luckan delvis fylld (m4b kan ej textextraheras).
- Statistik: sidor 464 → 479; source sessions 17 → 18; source notes 439 → 454.

---

### 2026-06-08
**Ny MOC: Lärandevetenskap och kognition (samlande mekanismkarta)** - `wiki/topics/MOC - Lärandevetenskap och kognition.md`

- Wikins största kunskapsdomän fick äntligen en karta. **Mekanismlagret** ("varför") under de tillämpade MOC:erna (Momentplaneringsramverket "hur man designar", Bedömning "hur man bedömer", Larappar "hur man bygger").
- Samlar fem källsessioner: Retrieval Practice (46), Frågedesign (25), Kognitionsforskning (34), CLT (21), Make It Stick (14) - de fyra första lämnar MOC-kandidatlistan.
- Organiserad efter kognitiv princip i 11 sektioner + meta-lärdomar + bryggor + forskningsluckor. ~75 kuraterade nodlänkar.
- **Bärande syntes:** två återkommande meta-lärdomar - (1) det som känns effektivt under inlärning är ofta motsatsen, (2) effekter krymper och får gränsvillkor från labb till klassrum.
- Statistik: MOC 8 → 9; kandidater 7 → 3; sidor 463 → 464; sessions med egen MOC 7 → 11 av 17.

---

### 2026-06-08
**Ingest: Make It Stick (Brown, Roediger & McDaniel 2014) - hel bok** - [Details](wiki/sources/2026-06-08 Make It Stick/CHANGELOG - Document Analysis 2026-06-08.md)

- Andra bok-ingesten. Hel bok (328 s., 8 kap.) bearbetad. PDF-extraktion via `pdfplumber` (Read-verktygets pdftoppm saknades); kap. 2-8 djuplästa av 7 parallella läsagenter.
- 14 atomära sidor + 1 sessionschangelog i `wiki/sources/2026-06-08 Make It Stick/`
- **Ramning:** boken är *ursprungskällan* till wikins befintliga lärandevetenskap (46+ retrieval-noter). Ingen re-extraktion av "testning funkar" - i stället ankarnot + bok-specifika begrepp + lärar-playbook (kap. 8) + motsägelsekarta.
- **5 befintliga sidor uppdaterade** med ursprungs-/motsägelseflaggor: understanding-how-we-learn (dinglande ref uppfylld), retrieval-practice, desirable-difficulty-sweet-spot, growth-mindset-kollaps, interleaving-skadar
- **Kärnbidrag - motsägelsekartan** [[vad-make-it-stick-fick-ratt-och-vad-som-overspelats]]: *håller* (retrieval, spacing, lärstilsmyten, illusions of knowing); *nyanserat* (desirable difficulties, interleaving, transfer); *överspelat* (growth mindset d≈0, generation-i-humaniora, 10 000-timmarsregeln).
- **Top kontraintuitivt:** boken (2014) hyllar growth mindset oförbehållsamt - wikin visar att teorin kollapsat (Gazmuri 2025, Sisk N=365k); "lös innan du undervisas" replikerar inte i SO/historia (Steenhof 2020).
- **Ingen ny MOC** (14 < 15-tröskeln); stärker MOC-kandidaten Lärandevetenskap/kognition (Retrieval 46 + Kognition 34 + Frågedesign 25 + CLT 21 + denna).
- **Statistik:** wiki-sidor 449 → 463; source sessions 16 → 17; source notes 425 → 439

---

### 2026-06-08
**Ingest: The Bright Ages (Gabriele & Perry 2021) - hel bok** - [Details](wiki/sources/2026-06-08 The Bright Ages/CHANGELOG - Document Analysis 2026-06-08.md)

- Första bok-ingesten i wikin. Hel bok minad (94 028 ord; brödtext ≈ 84 000). EPUB-extraktion via egen Python-stdlib-extraktor (`resources/epub_extract.py`) då ebook-mcp/pandoc/calibre saknades.
- 24 atomära sidor + 1 sessionschangelog i `wiki/sources/2026-06-08 The Bright Ages/`
- **Ny MOC:** [[MOC - Medeltiden (innehåll och historiebruk)]] - öppnar en **ny domän** (medeltidens sakinnehåll, till skillnad från wikins didaktikdomäner). Byggd för momentet "Den mörka medeltiden" (Hi 1b).
- **8 befintliga sidor uppdaterade** med korslänkar: counterfactuals, historiebruk, nordgren-decolonize, sjolund-ahsberg, kontrovers-far-right, fran-detektion-navigation, racial-capitalism, laslista-medeltiden
- **Huvudtes:** *"Den mörka medeltiden" är ett historiebruk, inte en epokbeskrivning. Tre bärande teser: kontinuitet ("Rom föll inte"), permeabilitet (uppkopplad multireligiös värld), historiebruk (Petrarca → kolonialism → vit makt).*
- **Top kontraintuitivt:** Slaget vid Tours 732 räddade inte Europa; första korståget var inte defensivt mot islam; digerdöden var 500 år och tre kontinenter (Monica Green/aDNA); demokratin är medeltida
- **Tvärdomän-bryggor:** historiebruk, källkritik, counterfactuals, dekolonisering, racial capitalism, far-right-rekrytering
- **Motsägelser:** inga direkta; balanserande motvikt (Ward-Perkins *The Fall of Rome*) flaggad som forskningslucka
- **Statistik:** wiki-sidor 421 → 446; MOC 7 → 8; source sessions 15 → 16

---

## 2026-05

### 2026-05-21
**Deep Research: AI-säkra examinationsformer 2024-2026** - [Details](meta/changelogs/CHANGELOG - Connection Discovery AI-sakra-examinationer 2026-05-21.md)

- 26 källor 2024-2026 analyserade i forskningsrapport `wiki/sources/2026-05-21 AI-säkra examinationsformer/AI-Sakra-Examinationsformer-Research-Report-2026-05-21.md` (80%+ från 2024-2026)
- 13 atomiska + 1 syntesnot + 1 session-changelog skapade i `wiki/sources/2026-05-21 AI-säkra examinationsformer/`
- **MOC uppdaterad:** [[MOC - Bedömning och betygssättning]] ny sektion **7b "AI-säkra examinationsformer - paradigmskifte 2024-2026"** med alla 17 nya wikilänkar; total noter 35+ → 50+
- **Index:** ny sessions-sektion 2026-05-21; sidstatistik 401 → 418
- **Huvudtes:** *Forskningsfältet 2024-2026 har gjort ett paradigmskifte från detektion till strukturell omdesign av examination — och det dominerande ramverket är Sydneys två-fileformulering (secure + open) snarare än någon enskild form*
- **Top kontraintuitivt:** Stanford-data — fuskfrekvensen har inte ökat sedan ChatGPT (konstant 60-70 % 2018-2024); muntliga prov kan vara *mindre* reliabla (κ 0,17-0,54) än de skriftliga de ersätter; Henrekson-reformen löser AI-validitetsproblemet utan att nämna det
- **Equity-paradox identifierad:** AI-säkringsregimer (handskrift, muntligt, detektorer) skadar systematiskt elevgrupper med dokumenterade behov; AI kan vara accommodation snarare än hot
- **Tvärdomän-bryggor:** 3 länkar till [[MOC - Källkritik och digital kompetens]], 2 till [[MOC - Historiedidaktik och kontroversiella frågor]]
- **7 forskningsluckor noterade:** svensk gymnasieforskning saknas i stort sett; slutprovens innehållsdesign (SOU 2025:18) inte tekniskt beskriven; tvärnordisk utvärdering (DK/NO/SE) saknas

---

### 2026-05-18
**Deep Research: Cognitive Load Theory 2024-2025** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery CLT 2026-05-18.md)

- 20 atomiska insikter extraherade till `Document Insights/2026-05-18 Cognitive Load Theory 2024-2025/`
- Granskade mot ~12 permanenta noter, 13 tidigare Document Insights-sessioner och 6 MOCs
- **Connection Discovery:** ~75 direktkopplingar, 5 konsiliens-zoner, 5 syntesmöjligheter (3 artiklar, 1 framework-utvidgning, 1 MOC-kandidat), 18 konkreta cross-references
- **Huvudtes:** *CLT 2024-2025 har genomgått en teoretisk omstrukturering (germane load pensionerad, element interactivity som enhetlig mekanism, biologically primary/secondary som central distinktion) som ger gemensam vokabulär åt fynd från tre tidigare sessioner (kognitionsforskning, frågedesign, aktivering). Vaultets CLT-täckning är nu systemisk, inte fragmenterad.*
- **Top kontraintuitivt:** Barbieri-paradoxen (self-explanation-prompter *skadar* worked example-effekten), Sweller 2025 har officiellt pensionerat "germane load", Lehmann RCT (57% vs 68% retention 45 dagar efter ChatGPT-stött studium)
- **Starkaste empiriska konsiliens:** AI-paradoxen — fyra oberoende forskningslinjer (Lehmann RCT, UPenn observation, MIT EEG, klassisk Bjork-distinktion) konvergerar på exakt samma fynd (AI förbättrar prestation, försämrar lärande)
- **Originalsynteslucka:** Wineburg-Sweller-bron — historiskt tänkande som *biologically secondary knowledge* har aldrig formellt utvecklats i litteraturen, trots att båda fält pekar på det
- **MOC-tröskel passerad:** ~30 CLT-relaterade noter sammantaget — "MOC - Cognitive Load Theory" är högsta prioritet för vault-hygien
- **Uppdateringsbehov:** [[kognitiv-belastningsteori-lektionssekvensering]] använder fortfarande pensionerad germane-terminologi och behöver flaggas

---

### 2026-05-17
**Deep Research: Aktivering och elevdeltagande** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery Aktivering 2026-05-17.md)

- 41 källor analyserade (73 procent från 2024-2026) i forskningsrapport `resources/Aktivering-Elevdeltagande-Research-Report-2026-05-17.md`
- 22 atomiska insikter extraherade till `Document Insights/2026-05-17 Aktivering och elevdeltagande/`
- 0 dubbletter — sessionen kompletterar snarare än överlappar tidigare domäner
- **Connection Discovery:** 5 konsiliens-zoner, 5 artikelkluster, 1 ny MOC-kandidat ("Klassrumsdiskurs och aktivering" — tröskel passerad med 22 + 3 befintliga noter)
- **Huvudtes:** *Deltagandekultur är en lärarprodukt, inte en elevsumma* — sex oberoende noter konvergerar (starkaste konsiliensen i sessionen)
- **Top kontraintuitivt:** Cold calling minskar gender gap (Dallimore), deliberativ undervisning gynnar yrkesprogram MER än teoretiska (svensk empiri), Freeman 2025 visar avtagande avkastning av aktivt lärande (30-40% sweet spot)
- **Stänger öppen tråd:** Aktivering-tråden i `ramverk-momentdesign-utkast-2` kan nu stängas via `minimumsekvens-aktivering-sex-steg` + Freeman-sweet-spot
- **Nyckelbrygga:** `no-opt-out-vs-metakognitiv-epistemisk-osakerhet` binder bedömning (kalibrering) till klassrumsdialog (epistemisk gardering) — första cross-domain-länken mellan dessa
- **3 forskningsluckor exponerade:** svensk cold-calling-replikering, SO-specifik aktiveringsforskning (mest STEM), långtidseffekter dialogisk undervisning

---

### 2026-05-06
**Deep Research: Feedback för inlärning** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery Feedback för inlärning 2026-05-06.md)

- 47 källor analyserade (90 procent från 2024-2025) i forskningsrapport `resources/Feedback-Inlarning-Research-Report-2026-05-06.md`
- 20 atomiska insikter extraherade till `Document Insights/2026-05-06 Feedback för inlärning/`
- 8 dubbletter undvikna (befintliga noter förstärktes vid behov)
- **Connection Discovery:** cirka 60 direktkopplingar, 5 cross-domain bryggor, 3 artikelkandidater + 1 framework + 1 MOC-kandidat ("MOC - Feedback för lärande", tröskeln passerad med 35+ noter)
- **4 konsiliens-zoner** identifierade: intern jämförelse som primär mekanism, affektiv design som funktionellt villkor, kalibrering kräver träning över alla nivåer, två separata feedbacksystem (procedurell vs konceptuell)
- **Top contrarian:** Exemplar EFTER utkast slår exemplar FÖRE (Nicol & Rose 2025) - vänder en av pedagogikens mest etablerade konventioner
- **Centralt metafynd:** Nya noter förskjuter feedback-debatten från innehåll till mekanism och relation - samma epistemologiska linje som 2026-04-13-sessionens skifte från "tydligare kriterier" till "tyst bedömarkunskap"
- **5 gaps identifierade:** TFL-data för svenska gymnasielärare, samhällskunskapsspecifik feedback-design, reconciliation av timing-noter, högskola vs gymnasium-generaliserbarhet, feedback i muntlig bedömning

---

## 2026-04

### 2026-04-29
**Auto-Discovery Session: Cross-domain isomorfier** - [Details](05-Meta/Changelogs/CHANGELOG - Auto-Discovery Session 2026-04-29.md)

- Strategisk sampling över 6 kluster (kognition, källkritik, historiematerialism, bedömning, kontroversiella frågor, lektionsstruktur)
- **4 cross-domain kopplingar** identifierade (3 starka + 1 spekulativ); alla med likhet < 0.55
- **Starkaste fynd 1:** Klassrummets dubbla DKE - lärare överskattar diskussionsöppenhet (62/15-gapet) symmetriskt med elevernas övermod efter källkritikundervisning. Konsilienszon 4 "Kalibrering" från 2026-04-23 saknar lärar-dimensionen.
- **Starkaste fynd 2:** Mikro-makro-isomorfi mellan ungdomars desinformations-sårbarhet under identitetsbildning och historiematerialismens renässans under tre kriser - samma "kris→narrativ-mottaglighet"-mekanism på två skalor.
- **Meta-mönster:** 3 av 4 discoveries är *isomorfi mellan skalor* - samma struktur återkommer på elev/lärar-nivå, individ/samhälls-nivå, didaktisk/akademisk-nivå. Vaultet är moget för meta-analys över skalor.
- **Konsilienszons-utvidgning:** Konsilienszon 4 ("Kalibrering över domäner") bör inkludera lärar-elev-gapet (62/15).
- **Konsilienszons-kandidat:** Ny zon "Kris→narrativ-mottaglighet" - kopplar ungdomssårbarhet, populism, historiematerialism-renässans, kollektivt minne.
- **Artikelkandidater:** "Klassrummets dubbla DKE" (Discovery 1), pedagogiskt moment "Kris och ideologisk mottaglighet" (Discovery 2).
- **Nästa steg:** Uppdatera Konsilienszon 4 med lärar-versionen; lägg till semantisk koppling i historiematerialism-renässans-noten till ungdoms-sårbarhetsnoten.

### 2026-04-23
**Insight Graduation Session**

- Reviewed 5 toppkandidater rankade på in-degree (Q-values saknar signal ännu)
- **Promoted 4 noter** från Document Insights till `02-Permanent/` (02-Permanent växer 4 → 8)
  - [[andra-ordningens-begrepp-historisk-frageteknik]] (in-degree 39, vaultets mest-länkade document insight) — från 2026-03-07 Pedagogisk forskning
  - [[retrieval-practice-som-dubbelt-formativt-verktyg]] (in-degree 30) — från 2026-03-07 Pedagogisk forskning
  - [[djupa-vs-ytliga-framgangsskriterier]] (in-degree 29) — från 2026-03-07 Pedagogisk forskning
  - [[exit-ticket-planering-aterkopplingsslinga]] (in-degree 28) — från 2026-03-07 Lektionsplaneringsramverk
- **Skipped 1:** [[ire-monster-dominerar-klassrum]] (in-degree 30) — återkommer i nästa session
- **Session stats:** Reviewed 5, Promoted 4, Skipped 1, Deleted 0
- Alla befordrade noter är 47 dagar gamla, evidence-level high/moderate, och atomära i Zettelkasten-mening
- Frontmatter-uppdaterad med `graduated_from` + `graduated_date` för provenance

### 2026-04-23
**Connection Discovery: Kognitionsforskning och Pedagogik** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery 2026-04-23 Kognitionsforskning.md)

- 34 nya document-insight-noter kopplade (19 från session A: AI-kognition, CLT, arbetsminne, mobilforbud, interleaving, handskrift; 15 från session B: metakognition, embodied cognition, produktivt misslyckande, growth mindset-kollaps, kollaborativ kognition)
- **67 direkta bryggor identifierade** (~2,0 per ny not) mot befintlig KB (142 wiki-sidor)
- **4 konsilienszoner** identifierade; starkast: "Strukturens design slår verktygsvalet" (konvergerar över AI-debatt, mobilfrågan, CLT, WM-forskning och sekvensering — sätter ord på en meta-princip som redan var implicit)
- Centralt metafynd 2024-2026: **"fältets mognad till boundary conditions"** — sex populära interventioner (growth mindset, ren interleaving för lågpresterande, produktivt misslyckande i humaniora, elaborativ interrogation utan förkunskap, metakognitiv träning i gymnasiet, arbetsminnestraning) har under 2 år identifierats ha avgörande gränsvillkor eller kollapsat helt
- Starkaste enskilda brygga: **AI-stöds-moderatorn** (g=1,43 med lärarstöd, g=0,08 utan) förklarar sannolikt hela ChatGPT-metaanalysen 2025 som "strukturstöd-effekt" snarare än "verktygs-effekt"
- 7 existerande noter rekommenderade för uppdatering (produktivt misslyckande, SRL-noter, desirable difficulty, metakognitiv lathet, ChatGPT-metaanalys, EU-rollspel, Gy25 digital kompetens)
- 4 MOCs berörs av utvidgning; MOC-kandidat "Kognitionsforskning och hjärnaktivitet i klassrummet" identifierad (~40 noter) men rekommendation: vänta tills efter graduate-insights
- 6 artikelkandidater; topp 3: (1) "Strukturens design avgör — g=1,43 med lärarstöd", (2) "Fem dödsförklaringar 2025", (3) "Dunning-Kruger i samhällskunskapen"
- **Nästa steg:** `/refresh-index`, uppdatera 7 noter med reconciliation-information, utvidga 4 MOCs, överväga graduate-insights för topp-kandidater

### 2026-04-22
**Deep Research: Historiematerialism - Nutida teori och pedagogisk relevans** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery Historiematerialism 2026-04-22.md)

- Forskningsrapport: `resources/historiematerialism-research-report-2026-04-22.md` (559 rader, 34 källor)
- Session: `Brain/Document Insights/2026-04-22 Historiematerialism - Nutida teori och pedagogisk relevans/` (25 noter)
- **Användarens första infusion av marxistisk teori** i kunskapsbasen - 18 starka bryggor till befintlig pedagogisk kunskapsbas
- 5 konsiliens-zoner identifierade: (1) strukturell analys utan skurkar, (2) paradigmskiften som didaktiskt läge, (3) ekomarxism + klimatdidaktik + empati, (4) transparens + pluralism + professionell dömekraft, (5) strukturanalys som inokulation mot konspirationstänkande
- Starkaste enskilda brygga: **historiematerialism som third-order-koncept** (Alvén-ram från 2026-04-21 förvandlar marxism från "kontroversiell ideologi" till "ontologisk position - en av flera") - löser 80% av den pedagogiska utmaningen
- Starkaste meta-princip: **strukturanalys utan skurkar** konvergerar över 4 domäner (historiebruk, kontroversiella frågor, källkritik, konspirationsteorier) - Mau ger språket åt rörelse som var implicit
- 6 artikelkandidater; starkast: "Strukturanalys utan skurkar - en pedagogisk grundhållning" (direkt användbar) + "Fyra paradigmskiften 2024-2026" (unikt för användaren)
- Luckor: postkolonial teori utanför marxism, intersektionell feminism, demokratiteori (Habermas/Mouffe/Rancière), ekonomisk liberalism (Hayek/Piketty), empirisk klassrumsforskning om radikala teorier i svensk kontext
- **Nästa steg:** (1) Lägg till korslänkar i topp-4 bryggorna, (2) Skriv "Strukturanalys utan skurkar"-artikel, (3) Bygg `modern-marxism-modul-gy25-ready` som klassrumsram

### 2026-04-21
**Deep Research: Historiedidaktik & Kontroversiella frågor** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery Historiedidaktik Kontroversiella 2026-04-21.md)

- 48 nya document insights extraherade (2 parallella forskningsrapporter: 24 historiedidaktik + 24 kontroversiella frågor)
- 142 starka kopplingar identifierade (3,0 per note), inga isolerade noter
- Central meta-insikt: **dubbelt paradigmskifte** - strukturellt arbete slår känsloarbete (tre parallella paradigmskiften i kontroversiell pedagogik: empati→deliberation, safe→brave→facilitated, neutralitet→transparens) + AI-eran förtydligar historieämnets disciplinära värde
- 6 konsilienszoner identifierade; starkast är "Strukturellt arbete slår känsloarbete" (konvergens över 5+ forskningsområden)
- 2 nya MOC-kandidater klarar 15-tröskeln: **MOC - Historiedidaktik** (28 noter) och **MOC - Kontroversiella frågor och deliberativ demokrati** (30 noter)
- 5 artikelkandidater; starkast: "Det toleranta Sverige är en pedagogisk sköld" (unikt svensk nisch) och "Tre paradigmskiften 2024-2026" (största syntetiska värde)
- 4 motstridiga evidens flaggade (öppna/stäng konspirationer, empati vs deliberation, neutral vs transparent lärare, safe/brave space)
- 7 existerande noter rekommenderade för uppdatering (SAC, CRAAP, Skolinspektionen, Hess, konspirationsteorier, deepfakes, formativ bedömning historia)
- Changelog: [[CHANGELOG - Connection Discovery Historiedidaktik Kontroversiella 2026-04-21]]

### 2026-04-15
**Connection Discovery - Frågedesign för lärande (quiz, examen, undervisning)** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery Frågedesign 2026-04-15.md)

Kopplingsanalys av 25 nya insiktsnoter om frågedesign mot befintlig KB. Centrala fynd: de nya noterna fungerar som bro-noter som binder samman tidigare isolerade kluster (retrieval practice 2026-04-12, summativ bedömning 2026-04-13, frågeteknik/diskussion 2026-03-07, motivation/SRL 2026-03-22). Starkaste brygga: "Specificitetslagen" - aktivering är alltid lokal (testing effect-transfer, prequestion-transfer, format-matching och fakta-till-högre-ordning är alla samma underliggande sats: det finns ingen gratis generaliseringseffekt). Konsilienszoner: formativ självkorrigerande arkitektur, skalbar bedömning för tolkande ämnen via rubrik + AI, differentiering under arbetsminnestvång. 6 artikelkandidater - starkast: "Rubrikkalibreringsprotokollet - från godtycke till ICC 0.92" (mest åtgärdsbar för användaren som historielärare, löser den konkreta likvärdighetsfrågan som 2026-04-13-sessionen exponerade). MOC-rekommendation: integrera som undersektion i [[MOC - Evidensbaserad lektionsarkitektur]], korslänka aggressivt till [[MOC - Bedömning och betygssättning]] - ännu inte kritisk massa för egen "MOC - Frågedesign".

### 2026-04-13
**Deep Research: Summativ bedömning och betygssättning (svensk kontext)** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery Session 2026-04-13.md)

**Pipeline:** Research → Extraction → Connection Discovery

**Input:** Forskningsrapport `resources/summativ-bedomning-research-report-2026-04-13.md` (25 källor, svensk gymnasiekontext, 383 rader).

**Output:**
- 23 nya permanentnoter i `Brain/Document Insights/2026-04-13 Summativ bedömning och betygssättning (svensk kontext)/`
- Connection discovery changelog: `Brain/05-Meta/Changelogs/CHANGELOG - Connection Discovery Session 2026-04-13.md`

**Centrala fynd:** Betygsinflation är ett strukturproblem (Vlachos, Henrekson, Timbro konvergerar) och kan inte åtgärdas med moraliska förmaningar till enskilda lärare. Den tysta bedömarkunskapen är viktigare än tydligare kunskapskrav - policyinstinkten att reformera kriterier har lägst hävstång. Samma strukturella fel (avprickning undergräver integrerad förmåga) återkommer i tre domäner: matrisbedömning, CRAAP-metoden och summativa kunskapskravsrubrics.

**Starkaste bryggor:** (1) "Avprickning undergräver integrering" binder bedömning, källkritik och AI-feedback till samma metastrukturella kritik. (2) "Strukturell analys slår moralisk kritik" binder betygsinflation, övermod efter källkritik och otestat innehåll till samma epistemiska princip. (3) AI-detektions opålitlighet + övervakade klassrumsprov bildar en fullständig argumentkedja om hur svensk gymnasieskola *i praktiken* har återgått till klassrumsprov som primärt betygsunderlag utan formellt beslut.

**Kopplingar identifierade:** 13 redan etablerade + ca 14 nya (11 starka direktkopplingar, 4 korsdomän-bryggor, 3 motsägelser/nyanseringar).

**Synthesis-möjligheter:** 4 artikelkandidater - starkast: "Reduktionismens tre ansikten - varför avprickning undergräver det du vill mäta" och "Henrekson och det strukturella likvärdighetsproblemet - en lärares perspektiv" (den senare har akut tidsrelevans under Prop. 2025/26:197). 1 MOC-kandidat: "MOC - Bedömning och betygssättning" (>28 noter, tröskeln passerad).

**Infrastrukturnotering:** Local Brain Search FAISS-indexet kunde inte köras (venv saknade `sentence_transformers`). Både document extraction och connection discovery genomfördes via grep/filsystemsnavigation. Bör re-valideras efter `./resources/local-brain-search/run_index.sh`.

### 2026-04-12
**Connection Discovery - Retrieval Practice och AI Feedback** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery 2026-04-12 Retrieval Practice AI Feedback.md)

Kopplingsanalys av 46 nya insiktsnoter (22 retrieval practice + 24 AI-feedback) mot befintlig KB: 25 direkta kopplingar, 7 korsdomanbryggor, 4 syntesmojligheter, 4 artikelkandidater. Tva konsilienszoner: "Anstrangning som inlarningsmekanism" (retrieval + produktivt misslyckande + AI-paradox) och "Struktur befriar" (retrieval-likvardighet + differentierad AI + autonomistod). Starkaste brygga: Kognitiv paradox ↔ Produktivt misslyckande - visar att AI-feedback som eliminerar kamp underminerar exakt den mekanism som gor retrieval practice effektiv. Alla 4 MOCs behover uppdateras. EU AI Act-noten skapar ny regulatorisk dimension for MOC Design av larappar.

### 2026-04-11
**Connection Discovery - Pedagogiska appar design** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery 2026-04-11 Pedagogiska appar.md)

Kartlaggning av 25 nya insikter om evidensbaserad larapp-design mot befintlig KB: 58 direkta kopplingar, 7 korsdomanbryggor, 3 spanningar (gamification-ambivalens, AI-optimism vs skepsis, symbolisk UDL), 4 syntesklustrar (kognitiv belastning digitalt, SDT-feedback/gamification, testningseffekt-maskinen, svensk rattslig baseline). 3 artikelkandidater foreslagna - starkast: "Testningseffekten moter UI-designen".

---

## 2026-03

### 2026-03-22
**Connection Discovery Session (Cross-domain analysis)** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery 2026-03-22.md)

Systematisk kopplingsanalys av 94 insiktsnoter over fyra sessioner (kallkritik, motivation, diskussion/bedomning, lektionsplanering):
- **56 cross-domain-kopplingar** identifierade mellan de fyra forskningsomradena
- **5 konsilienszoner**: Tillhorighet som universell forutsattning; Komplexitet forbattrar/forenkling forsamrar; Agentiskt engagemang som nyckel; AI som dubbelt problem; Overmod-kalibrering-metakognition
- **5 artikelideer**: "Fran CRAAP till navigation", "Motivationsdesign i varje lektion", "Konspirationsteorier - beredskapsplan", "Yrkeseleven som vinnare", "Overmod och metakognitiv lathet"
- **3 MOC-rekommendationer**: Ny MOC Kallkritik (21 noter), ny MOC Motivation (18 noter), uppdatering av befintlig MOC Lektionsarkitektur
- Starkaste bridgen: Emotionellt klimat/tillhorighet som forutsattning konvergerar fran 4 oberoende forskningsstrommar (SDT, engagemang, formativ bedomning, diskussion)
- Ramverksutvidgningar: Sexfasstrukturen + SDT-perspektiv per fas, SEQUENCE + kallkritik, Kozyreva-toolbox i lektionsarkitekturen

### 2026-03-22 (Session 2)
**Document Analysis Session (Motivation, engagemang och sjalvreglerat larande)** - [Details](Document Insights/2026-03-22 Motivation engagemang och självreglerat lärande/CHANGELOG - Document Analysis 2026-03-22.md)

- 18 noter: SDT-metaanalys (N=388 912), agentiskt engagemang, autonomistod+struktur, intresseutveckling, produktivt misslyckande, SRL, utility-value-intervention, tillhorighet, formativ bedomning+SDT, svensk kontext (Skolverket Attityder 2024)
- Kontraintuitivt: Behovsstod och behovshammande ar INTE motsatser (r = -0.27 till -0.47)
- Kontraintuitivt: Formativ bedomning starker TILHORIGHET mest, inte kompetens
- Kontraintuitivt: Agentiskt engagemang predicerar lararsupport starkare an tvartom
- Starkaste effekt: Autonomiinterventioner g = 1,14 i experimentella designer

### 2026-03-22 (Session 1)
**Document Analysis Session (Kallkritik, desinformation och AI-literacy)** - [Details](Document Insights/2026-03-22 Källkritik desinformation och AI-literacy/CHANGELOG - Document Analysis 2026-03-22.md)

- 20 noter: Paradigmskifte CRAAP->SIFT, lateral lasning, inokulering (N=37 025), kritisk ignorering, deepfakes, AI-literacy (OECD/PISA 2029), svensk kontext (Skolinspektionen 25/30 brister), konspirationsteorier (62% av larare), lararfortbildningsgap (80%/20%)
- Kontraintuitivt: CRAAP-metoden gor elever MER sarbara for desinformation
- Kontraintuitivt: Larare mer sarbara for deepfakes an elever
- Kontraintuitivt: Gen Z samre an aldre generationer pa att skilja sant fran falskt (N=66 242)
- Paradigmskifte: Fran detektion till navigation, fran vertikal till lateral lasning

### 2026-03-07 (Session 2)
**Document Analysis Session (Lektionsplaneringsramverk)** - [Details](Document Insights/2026-03-07 Lektionsplaneringsramverk/CHANGELOG - Document Analysis 2026-03-07.md)

**Rapport - Lesson Planning Frameworks and Instructional Design Models** (12 noter + 1 research gap):
- Ämnen: tvånivåarkitektur (UbD + Rosenshine), Skolverkets strukturerade undervisning, sexfas-lektionsstruktur, Klafkis didaktiska analys, AI-lektionsplaneringssvaghet, 5E-modellen, lesson study, kognitiv belastningsteori, UDL 3.0, guidad övning, exit tickets, Lgy25
- Nyckeldata: 90% av AI-genererade samhällskunskapslektioner fokuserar lägre ordningens tänkande (CITE Journal 2025, n=310)
- Nyckeldata: Framgångsrika lärare spenderar 57% av lektionstiden på guidad övning (Rosenshine observationsstudier)
- Nyckeldata: 5E-modellen g=0.82 för naturvetenskap (Polanin et al. 2024, 61 RCT) - men STEM-begränsad
- Kontraintuitivt: AI misslyckas specifikt med de dimensioner som är mest centrala i historia/samhällskunskap (höre ordningens tänkande, mångfaldiga perspektiv)
- Synthes-möjlighet: MOC "Evidensbaserad lektionsarkitektur" - integrerar dessa noter med Session 1:s formativa bedömning, frågetekniker och diskussionsformat
- Praktisk output möjlig: Lektionsplaneringsmall för gymnasielärare baserat på sexfasstrukturen + Klafki-förplanering

**Cross-session kopplingar identifierade**: 10+ starka kopplingar till Session 1:s noter (retrieval practice, hinge questions, SEQUENCE-ramverket, andraordningens begrepp, IRE-mönstret)

**Totalt sessionen**: 13 unika noter, 1 rapport (493 rader), 3 överlappningar korrekt hanterade

---

### 2026-03-07 (Session 1)
**Document Analysis Session (3 rapporter)** - [Details](Document Insights/2026-03-07 Pedagogisk forskning - Diskussion, bedömning, frågor/CHANGELOG - Document Analysis 2026-03-07.md)

**Rapport 1 - Diskussionsbaserad undervisning** (13 noter):
- Ämnen: deliberativ undervisning, diskussionsformat, historiskt tänkande, kontroversiella frågor
- Kontraintuitivt: Yrkeselever gynnas *mer* av deliberativ undervisning (Andersson 2021)
- Kontraintuitivt: Komplext innehåll förbättrar - inte försämrar - diskussionskvaliteten (QUINT)

**Rapport 2 - Formativ bedömning och feedback** (11 noter):
- Ämnen: BFL, hinge questions, retrieval practice, feedback-timing, betyg vs. lärande
- Kontraintuitivt: Pseudo-formativ bedömning - BFL i Sverige riskerar missa kärnan (Jönsson 2023)
- Kontraintuitivt: Feedback timing är mindre kritisk än man trott - kvalitet slår snabbhet (Ryan et al. 2024)
- Kontraintuitivt: Inget forskningsstöd för att betyg förbättrar motivation (Klapp 2024)

**Rapport 3 - Frågeteknik (Questioning for Learning)** (10 noter):
- Ämnen: IRE-mönster, väntetid, elaborativ interrogation, cold calling, QFT, felklimat, SEQUENCE-ramverket
- Nyckeldata: Lärare väntar i snitt 2,04 sek; optimalt är 3-5 sek (PMC Systematic Review 2024)
- Nyckeldata: 60-80% av lärarfrågor kräver bara återgivning (Education Northwest)
- Kontraintuitivt: Cold calling stänger könsgapet i deltagande utan att sänka trivsel
- Kontraintuitivt: "Fiskareexpeditionen" (ledande ledtrådar) är vanligare och mer skadlig än man tror
- Synthes-möjlighet: SEQUENCE-ramverket integrerar alla frågetekniker i en lektionsstruktur

**Totalt sessionen**: 34 unika noter, 3 rapporter (~1700 rader), 4 dubletter korrekt identifierade och hoppade över

---

## 2025-01

### 2025-01-15
**Connection Discovery Session** - [Details](05-Meta/Changelogs/CHANGELOG - Connection Discovery Session 2025-01-15.md)
- Explored connections around [Topic]
- Found 8 non-obvious relationships
- Identified 2 bridge notes
- Recommended synthesis: [Article idea]

### 2025-01-10
**Auto-Discovery Session** - [Details](05-Meta/Changelogs/CHANGELOG - Auto-Discovery Sessions 2025-01-10.md)
- Cross-domain exploration
- Sampled 47 notes across 5 domains
- Discovered unexpected connection: [Topic A] ↔ [Topic B]
- Emerging pattern: [Pattern name]

### 2025-01-05
**Vault Management Session** - [Details](05-Meta/Changelogs/CHANGELOG - Vault Management Session 2025-01-05.md)
- Created 15 permanent notes from [Source]
- Updated MOC - [Topic Name]
- Reorganized [folder/section]

---

## Template for New Entries

### YYYY-MM-DD
**Session Type** - [Link to detailed changelog]
- Brief summary point 1
- Brief summary point 2
- Key discovery or action
- Synthesis opportunity identified

---

## Quick Stats

- **Total Permanent Notes**: XX (update monthly)
- **Total MOCs**: X
- **Total Source Notes**: XX
- **Last Auto-Discovery**: YYYY-MM-DD
- **Last Connection Finding**: 2026-03-22
- **Last Analysis**: YYYY-MM-DD
- **Last Document Analysis**: 2026-07-11

---

## Session Types

- **Auto-Discovery**: Random cross-domain exploration for serendipity
- **Connection Discovery**: Targeted exploration around specific notes/topics
- **Vault Management**: CRUD operations, organization, batch updates
- **Insight Extraction**: Processing content to create permanent notes
- **Document Analysis**: Extracting insights from external research documents
- **Analysis**: Structural analysis of knowledge base

---

**Tip**: Run `/analyze-kb` monthly to update comprehensive statistics.
**Tip**: Detailed changelogs in `05-Meta/Changelogs/` contain full analysis and recommendations.
