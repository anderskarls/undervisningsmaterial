---
type: wiki-index
updated: 2026-08-03
counts_verified: 2026-08-03
total_pages: 906
total_concepts: 18
total_topics: 17
total_source_sessions: 42
total_source_notes: 820
total_session_changelogs: 51
total_implementation_plans: 3
---

# Wiki Index

Innehållskatalog över alla wiki-sidor. LLM läser denna fil **först** vid varje query för att hitta relevanta sidor. Uppdateras vid varje ingest.

**Struktur:** Sidor lever i `wiki/concepts/` (permanenta, graduerade), `wiki/topics/` (MOCs) och `wiki/sources/[sessionsmapp]/` (extraktioner från ingest-batcher). Råkällor i `raw/`. Output-artefakter i `output/`. Mallar i `wiki/_templates/`.

---

## Maps of Content (MOCs)

- [[MOC - Master Navigation]] - Top-level navigation hub (behöver renovering — fortfarande på template-stadiet)
- [[MOC - Momentplaneringsramverket]] - Momentdesign (5-10 lektioner): nivå 1-5, formativ bedömning, frågor, diskussion (ersätter MOC - Evidensbaserad lektionsarkitektur 2026-05-24)
- [[MOC - Källkritik och digital kompetens]] - Källkritik, desinformation, AI-literacy
- [[MOC - Elevmotivation och engagemang]] - SDT, engagemang, självreglerat lärande
- [[MOC - Bedömning och betygssättning]] - Summativ bedömning, betygskalibrering, Henrekson-reformen
- [[MOC - Design av larappar]] - Pedagogiska appar och digital design
- [[MOC - Historiedidaktik och kontroversiella frågor]] - Historiedidaktik 2024-2025 + deliberativ demokrati
- [[MOC - Medeltiden (innehåll och historiebruk)]] - Medeltidens sakinnehåll + historiebruk (The Bright Ages); för momentet "Den mörka medeltiden" (Hi 1b)
- [[MOC - Lärandevetenskap och kognition]] - **Mekanismlagret**: retrieval, spacing, interleaving, desirable difficulties/CLT, metakognition, AI och kognition (samlar Retrieval Practice, Kognitionsforskning, Frågedesign, CLT och Make It Stick)
- [[MOC - Undervisning på yrkesprogram]] - Yrkesprogram: systemkontext (Gy25, behörighetsreformen, dimensionering), didaktik/motivation för gemensamma ämnen, internationell VET-forskning
- [[MOC - Antiken (Grekland och Rom)]] - Antikens sakinnehåll: Grekland (Ober ekonomi/institutioner, Lane Fox kultur) och Rom (Beard republik→212, Heather fallet). Förgångare till [[MOC - Medeltiden (innehåll och historiebruk)]]; de möts i Roms fall
- [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] - Tidigmodern tids sakinnehåll: erövringen av Amerika (Restall, Townsend), atlantisk slavhandel (Rediker), vetenskaplig revolution (Wootton/Shapin), upplysning (Robertson). Kronologisk fortsättning på Medeltiden-MOC:en; kluster A+B av nya tiden-batchen (moment 5-6 i Hi 1b)
- [[MOC - AI i lärararbetet och professionens organisering]] - Hur lärarprofessionen organiserar sig kollektivt kring AI: fack och professionsorganisationer, gräsrotsnätverk, myndighetsstyrning, fortbildning, och forskningen om vad som händer med yrkesutövningen. Skiljer sig från [[MOC - Källkritik och digital kompetens]] (elevernas AI-literacy) och från sessionen om AI-säkra examinationsformer (provkonstruktion) genom att gälla läraren som yrkesutövare och part
- [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] - Revolutionernas tidsålder 1776-1848: amerikanska rev (Taylor/Wood), franska rev (Darnton/Tackett), dubbelrevolutionen (Hobsbawm), industriella rev (Mokyr: industrial enlightenment). Syskon till Tidigmodern-MOC:en; kluster C+D av nya tiden-batchen (moment 6-7 i Hi 1b)

### Implementations- och utvecklingsplaner

- [[Fragappens-utvecklingsplan-2026-05]] - Frågeappens utvecklingsplan (syntes av MOC - Design av larappar applicerad på befintlig app)
- [[Formagetraningens-utvecklingsplan-2026-07]] - Förmågeträning Hi 1b: mikroövningar i orsaks-/konsekvensresonemang med exempelsvar + AI-feedback i survey-plattformen (designbeslut 2026-07-19, pilot HT26)
- [[Delfardighetstaxonomin-operationaliserad]] - Kvalitetskriterier N1/N2/N3 per delfärdighet (kategorisera, kedjor, förgrena, vikta, kritisera) + svaghetslistor och uppgiftsverb - underlag för exempelsvar och AI-prompter (steg 1 i sommarbygget, utkast 2026-07-19)

**MOC-kandidater (sessioner som passerat 15-noters-tröskeln utan egen MOC):**
- Historiematerialism (29 noter, 2026-04-22)
- Feedback för inlärning (20 noter, 2026-05-06)
- Aktivering och elevdeltagande (22 noter, 2026-05-17)

*(Retrieval Practice (46), Frågedesign (25), Kognitionsforskning (34) och Cognitive Load Theory (21) samlas nu under [[MOC - Lärandevetenskap och kognition]] i stället för egna MOC:er.)*

---

## Concepts (permanenta, graduerade synteser)

Atomiska begreppssidor som ackumulerats utöver enskilda källextraktioner.

- [[andra-ordningens-begrepp-historisk-frageteknik]] - Andra ordningens begrepp i historiedidaktik
- [[desirable-difficulty-sweet-spot-60-till-85-procent]] - Sweet spot för svårighetsgrad
- [[djupa-vs-ytliga-framgangsskriterier]] - Djupa vs ytliga framgångskriterier
- [[exit-ticket-planering-aterkopplingsslinga]] - Exit tickets som återkopplingsslinga
- [[laslista-antikens-grekland-och-rom]] - Läslista (facklitteratur) om antiken
- [[laslista-medeltiden]] - Läslista (fack + populärvetenskap) om medeltiden
- [[laslista-att-undervisa-i-samhallskunskap-och-historia]] - Läslista (ämnesdidaktik): att undervisa i SO-ämnena
- [[laslista-nya-tiden-till-industriella-revolutionen]] - Läslista (fack + populärvetenskap): nya tiden till industriella revolutionen (Hi 1b-luckorna, moment 5-7)
- [[pretesting-effekten-d-06-till-12-aven-med-fordrojd-feedback]] - Pretesting-effekten
- [[prompt-verb-effekten-vardera-slar-forklara]] - Promptverbeffekten i frågedesign
- [[ramverk-momentdesign-utkast-3]] - **Momentplaneringsramverket (aktiv ramverkskälla)** - styr /planera-moment-skillen
- [[ramverk-momentdesign-utkast-2]] - Utkast: momentdesign (ersatt av utkast-3)
- [[ramverk-deliberativt-utkast-1]] - Utkast: deliberativt ramverk (övergiven framing)
- [[backward-design-wiggins-mctighe]] - Backward design (Wiggins & McTighe) - ramverkets planeringslogik
- [[constructive-alignment-biggs]] - Constructive alignment (Biggs) - koherenspelaren
- [[understanding-how-we-learn-sex-strategier]] - Weinstein & Sumeracki - de sex inlärningsstrategierna
- [[retrieval-practice-som-dubbelt-formativt-verktyg]] - Retrieval practice som dubbelt verktyg
- [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]] - Rubrikkalibrering i tolkande ämnen

---

## Wiki Pages by Session

Sidor lever i sessionsmappar under `wiki/sources/`. Varje session = en ingest-batch av relaterade källor.

### 2026-03-07 Lektionsplaneringsramverk (9 noter)

Forskning om lektionsplanering: Rosenshine, UbD, Klafki, CLT, 5E-modellen, UDL 3.0.

- [[5e-modellen-metaanalys-humanistiska-amnen]]
- [[ai-genererade-lektionsplaneringar-systematisk-svaghet]]
- [[klafkis-didaktiska-analys-som-forplanering]]
- [[kognitiv-belastningsteori-lektionssekvensering]]
- [[larandemal-historia-kognitivt-process-mal]]
- [[lesson-study-professionellt-larande-planering]]
- [[lgy25-och-lektionsplanering-nytt-kursplanekontext]]
- [[planering-undervisning-gapet-implementeringsfidelitet]]
- [[udl-30-inkluderande-lektionsdesign]]

> **Fyra noter arkiverade 2026-05.** Sex-fas-modellen ersattes av Momentplaneringsramverket (se MOC-listan ovan). De ligger i `meta/archive/sex-fas-modellen/` och listas medvetet inte här: eftersom Obsidian löser wikilänkar på basnamn skulle länkar till dem resolva rakt ner i arkivet utan felmeddelande, och den ersatta modellen komma tillbaka som levande doktrin. Arkiverade: `guidad-ovning-underskattat-fas`, `sex-fas-lektionsstruktur-evidensbaserad-sekvens`, `skolverkets-strukturerade-undervisning-sex-steg`, `tva-nivaaarkitektur-ubd-rosenshine`.

### 2026-03-07 Pedagogisk forskning - Diskussion, bedömning, frågor (37 noter)

Formativ bedömning (Wiliam/Leahy), frågeteknik (IRE, väntetid, QFT, hinge), diskussion (SAC, fishbowl, Sokrates), deliberativ undervisning.

- [[ai-formativ-bedomning-mojligheter-och-risker]]
- [[bedömning-av-diskussion-kvalitet-inte-frekvens]]
- [[betygsfeedback-dodar-kommentarer]]
- [[cold-calling-jamnar-ut-konsfordelning]]
- [[deliberativ-undervisning-gynnar-yrkeselever-mest]]
- [[deliberativa-formågor-som-medborgerlig-kompetens]]
- [[dialogisk-undervisning-alexander-mercer]]
- [[diana-hess-policy-fragor-vs-avgjorda-fragor]]
- [[digital-verktyg-formativ-bedomning-mentimeter-kahoot]]
- [[dominerande-elever-forskningsbaserade-losningar]]
- [[elaborativ-interrogation-kognitiv-strategi]]
- [[eu-rollspel-vad-forskning-faktiskt-visar]]
- [[feedback-timing-mindre-kritisk-an-vad-man-trott]]
- [[felklimat-felaktiga-svar-som-lararresurs]]
- [[fem-strategier-formativ-bedomning-wiliam-leahy]]
- [[fishbowl-harkness-struktur-for-jamlikhet]]
- [[fiskareexpeditionen-det-skadligaste-fragemonster]]
- [[formativ-bedomning-effektstorlekar-syntes]]
- [[formativ-bedomning-historia-forskningsgap]]
- [[helklass-feedback-skalar-kvalitetsaterkoppling]]
- [[hinge-questions-diagnostiska-fragor-vid-vagskalen]]
- [[historiskt-tankande-som-ram-for-diskussion]]
- [[ire-monster-dominerar-klassrum]]
- [[klapp-betyg-negativa-effekter-lagpresterande]]
- [[komplext-innehall-ger-battre-diskussion]]
- [[metakognitiva-fragor-sjalvreglerat-larande]]
- [[pseudo-formativ-bedomning-jonsson-kritik]]
- [[qft-elevgenererade-fragor-djupare-larande]]
- [[quint-nordisk-samhallskunskapsundervisning]]
- [[sequence-ramverk-fragesekvensiering]]
- [[sjalvbedomning-kalibrering-kravs-traning]]
- [[skolinspektionen-larare-undviker-kontroversiella-fragor]]
- [[smagrupper-slar-helklass-i-deliberativ-kvalitet]]
- [[sokrates-seminarium-for-primärkallsanalys]]
- [[structured-academic-controversy-mot-polarisering]]
- [[think-pair-share-jamnar-ut-deltagande]]
- [[vantetid-mest-underutnyttjade-frageteknik]]

### 2026-03-22 Källkritik desinformation och AI-literacy (20 noter)

Paradigmskifte från detektion till navigation (Wineburg), lateral läsning, prebunking/inokulering, AI-literacy-ramverk (OECD/EC), Skolinspektionen 2024.

- [[bedomning-kallkritik-levande-internet-uppgifter]]
- [[breakstone-3446-elever-alarmerande-brister]]
- [[craap-metoden-gor-elever-mer-sarbara]]
- [[deepfakes-larare-mer-sarbara-an-elever]]
- [[fran-detektion-till-navigation-paradigmskifte]]
- [[gy25-digital-kompetens-kallkritik-integration]]
- [[inokulationsspel-klassrumsverktyg-oversikt]]
- [[inokulationsteori-prebunking-metaanalys]]
- [[konspirationsteorier-klassrummet-uk-studie]]
- [[kozyreva-toolbox-nio-interventioner-evidens]]
- [[kritisk-ignorering-tredje-kompetensen]]
- [[lararfortbildning-digitalt-sarbarhetsgap]]
- [[lateral-lasning-faktakollares-strategi]]
- [[metakognitiv-lathet-ai-verktyg-risk]]
- [[oecd-ec-ai-literacy-ramverk-fyra-domaner]]
- [[overmod-efter-kallkritikundervisning-nordisk-studie]]
- [[pisa-2029-media-ai-literacy-matning]]
- [[skolinspektionen-2024-kallkritik-brister]]
- [[ungdomars-sarbarhet-desinformation-identitetsbildning]]
- [[visuella-medier-blinda-flacken-svensk-skola]]

### 2026-03-22 Motivation engagemang och självreglerat lärande (20 noter)

SDT-metaanalyser, agentiskt engagemang, autonomistöd × struktur, kostnad som motivationsvariabel, OECDs Will-Skills-Means.

- [[agentiskt-engagemang-starkaste-prediktorn-for-lararstod]]
- [[autonomistod-extra-effektivt-lag-ses-skolor]]
- [[autonomistod-och-struktur-komplementara-inte-motsatser]]
- [[emotionellt-engagemang-predicerar-bade-motivation-och-valbefinnande]]
- [[formativ-bedomning-starker-tilhorighet-mest]]
- [[intresseutveckling-fyra-faser-hidi-renninger]]
- [[kallkritik-som-motivationsverktyg-inte-bara-kognitivt]]
- [[kostnad-som-oberoende-motivationsvariabel]]
- [[lararens-eget-valbefinnande-paverkar-elevmotivation]]
- [[levande-metaanalys-sdt-30000-effektstorlekar]]
- [[motivationsnedgang-adolescensen-lararstod-blir-viktigare]]
- [[oecd-2025-will-skills-means-motivationsramverk]]
- [[produktivt-misslyckande-kamp-som-motiverar]]
- [[samhallskunskap-motivation-demokratisk-agens-och-sjalvfortroende]]
- [[sdt-interventioner-metaanalys-autonomi-storsta-effekt]]
- [[sdt-metaanalys-behovsstod-och-behovshammande-ar-skilda-konstrukt]]
- [[skolverket-attityder-2024-gymnasiet-stress-motivation]]
- [[srl-undervisas-sallan-explicit-trots-hog-effekt]]
- [[tilhorighet-nodvandig-forutsattning-inte-bonus]]
- [[utility-value-intervention-skrivovning-okar-betyg]]

### 2026-04-11 Pedagogiska appar - design av lärappar (25 noter)

Designprinciper för pedagogiska appar: AI off-path, gamification-paradoxer, GDPR-default, WCAG 2.2, testning, dark patterns.

- [[ai-features-i-larappar-ska-vara-smala-och-off-path]]
- [[ai-fusk-detektion-ar-opalitlig-och-diskriminerande]]
- [[dark-patterns-of-cuteness-barn-autonomi-risk]]
- [[dyslexi-typsnitt-ar-inte-empirisk-bevisat-battre]]
- [[en-fraga-per-skarm-fyrdubblar-slutforande]]
- [[enkel-aterkoppling-slar-utforliga-forklaringar]]
- [[gamification-kombinationer-kan-backfire]]
- [[gdpr-datafminimering-ar-designconstraint-i-sverige]]
- [[inbaddade-fragor-mitt-i-material-slar-fragor-efter]]
- [[inga-matrisfragor-pa-mobil]]
- [[interleaving-ar-starkast-nar-teman-forvaxlas]]
- [[jag-ar-inte-saker-som-tredje-alternativ]]
- [[kcr-aterkoppling-som-default-forklaringar-on-demand]]
- [[lab-till-klassrum-effektstorlekar-krymper]]
- [[neutral-sprakning-om-fel-svar-minskar-skam]]
- [[nyhetseffekten-kort-gamification-slar-lang]]
- [[personlig-progress-slar-rank-som-kompetenssignal]]
- [[progress-bar-paradoxen]]
- [[pseudonyma-id-som-default-i-svenska-skolor]]
- [[seductive-details-dekorbilder-skadar-larande]]
- [[spaced-review-2-4-dagar-later-ar-sweet-spot]]
- [[telefonens-narvaro-skadar-larande-aven-oanvand]]
- [[testing-effect-g-0-61-ar-quizens-starkaste-argument]]
- [[udl-extended-time-som-default-inte-accommodation]]
- [[wcag-2-2-target-size-24px-som-legal-baseline]]

### 2026-04-12 Retrieval Practice och AI Feedback i undervisning (46 noter)

Testning, distribuerad övning, AI-feedback (DEEVA-ramverk, Meyer RCT), hybrid AI+lärare, EU AI Act, sprakbias.

- [[adaptiv-ai-feedback-overtraffar-statisk-expertfeedback]]
- [[ai-feedback-battre-pa-yta-an-djup-implikation-for-samhallskunskap]]
- [[ai-feedback-deklarativ-vs-procedurkunskap]]
- [[ai-feedback-differentiell-effekt-lagpresterande-vs-hogpresterande]]
- [[ai-feedback-motivation-vs-larande-asymmetri]]
- [[cognitive-mirror-ramverk-ai-som-larbar-novis]]
- [[columbia-middle-school-testningseffekt-i-samhallskunskap]]
- [[deeva-ramverk-fyra-nivaer-ai-feedback]]
- [[distribuerad-ovning-d-054-i-klassrum-meta-analys-2025]]
- [[elaborativ-retrieval-rikare-semantiska-natverk-for-komplexa-amnen]]
- [[eu-ai-act-quiz-plattform-hogrisk-klassificering]]
- [[faktafragor-overfor-inte-till-hogre-ordningens-tankande]]
- [[feedback-beroende-risk-fading-scaffolding-som-motatgard]]
- [[feedback-literacy-gap-elever-saknar-formaga-bedomma-ai-feedback]]
- [[forskningsgap-sekundarniva-humaniora-svenska-ai-feedback]]
- [[hallucinationsrisker-ai-feedback-utbildning-fem-motstrategier]]
- [[hamta-och-koppla-strategier-for-djupare-retrieval]]
- [[hybrid-feedback-ai-plus-larare-overtraffar-bada-ensamma]]
- [[interleaving-i-humaniora-kraver-tematisk-kontrast]]
- [[interventionslangd-5-10-veckor-optimal-for-ai-feedback]]
- [[kognitiva-paradoxen-ai-forbattrar-prestation-forsamrar-forstaelse]]
- [[konceptuell-retrieval-i-historia-andraordningsbegrepp]]
- [[lagstakes-quiz-fordubblar-chansen-att-klara-kursen]]
- [[larare-blandar-ihop-retrieval-practice-med-bedomning]]
- [[mc-och-fritext-likvardig-retention-men-olika-diagnostik]]
- [[meta-analyser-effektstorlekar-ai-larande-kritisk-oversikt]]
- [[metakognitiv-stallning-sjalvbedomning-fore-ai-feedback]]
- [[meyer-rct-llm-feedback-gymnasieniva-effektstorlekar]]
- [[missuppfattningskorrigering-genom-retrieval-och-aterkoppling]]
- [[motivation-ar-starkare-mekanism-i-klassrum-an-i-labb]]
- [[multipla-retrieval-forsok-behovs-for-transfer-i-komplexa-amnen]]
- [[otestat-innehall-far-ingen-testningseffekt]]
- [[overt-retrieval-slar-covert-for-ungdomar]]
- [[praktisk-prompt-mall-ai-feedback-quiz-plattform]]
- [[retrieval-baserad-begreppskartlaggning-hybrid-strategi]]
- [[retrieval-narrowar-prestationsgap-preliminar-evidens]]
- [[retrieval-starker-regelbaserat-larande-och-principabstraktion]]
- [[rubrik-baserad-prompting-forbattrar-ai-feedback-112-procent]]
- [[skolverket-imy-riktlinjer-ai-i-skolan-2025]]
- [[sprakbias-i-ai-feedback-aave-och-icke-standard-svenska]]
- [[successiv-ominlarning-tre-ratt-fore-glesning]]
- [[testningseffekten-oberoende-av-kognitiv-formaga-svensk-forskning]]
- [[tillitsparadoxen-ai-feedback-lagre-tillit-hogre-revidering]]
- [[transfer-kraver-elaborerad-aterkoppling-inte-bara-retrieval]]
- [[tutor-copilot-ai-stodjer-svagare-larare-mest]]
- [[varierade-fragokontexter-stodjer-principoverforing]]

### 2026-04-13 Summativ bedömning och betygssättning (svensk kontext) (23 noter)

Henrekson-utredningen, betygsinflation, Lgy25, sambedömning, matrisbedömning, validitet vs reliabilitet. **Konventionsavvikelse: svenska titlar, inte kebab.**

- [[Acceptera att perfekt likvärdighet är omöjlig är en professionell hållning, inte en kapitulation]]
- [[AI har accelererat behovet av centralt rättade slutprov snarare än bromsat det]]
- [[Andra ordningens begrepp är historiedidaktikens svar på bedömning av komplexa förmågor]]
- [[Betygsinflation är ett systemproblem, inte ett lärarproblem]]
- [[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]]
- [[Dokumentera dina betygsbeslut är det starkaste rättssäkerhetsverktyget]]
- [[F-sättning är den mest rättsosäkra betygsättningen]]
- [[Formativ och summativ bedömning kan inte enbart förstås som tekniker - de är förhållningssätt]]
- [[Henrekson-utredningen föreslår 70-30-modell med centralt rättade slutprov]]
- [[Historielärare saknar ankarprov och måste bygga sin egen kalibreringsbas]]
- [[Klassbakgrund dominerar över skolform och kön i betygsskillnader]]
- [[Källkritik som checklista undergräver det som skulle mätas]]
- [[Könsskillnader i betyg kan vara bedömningseffekt eller faktisk kunskapsskillnad]]
- [[Lärarens dubbla roll som coach och domare är ett olöst dilemma]]
- [[Lärarens ämneskunskap är en förutsättning för valid bedömning]]
- [[Lärarna ser likvärdighetsproblemet tydligare än den offentliga debatten antyder]]
- [[Matrisbedömning lovade transparens men förde med sig reduktionism]]
- [[Målrelaterade betyg utan externa ankare driver ofrånkomligt mot dold normrelatering]]
- [[Nationella prov fungerar som betygsankare men bara i ämnen som har dem]]
- [[Sambedömning är kompetensutveckling men inte likvärdighetsgaranti]]
- [[Samhällskunskap står inför en fundamental bedömningsförändring när slutprov införs]]
- [[Validitet och reliabilitet är fiender i bedömning av komplexa förmågor]]
- [[Övervakade klassrumsprov blir primärt betygsunderlag när AI rubbar hemuppgifter]]

### 2026-04-15 Frågedesign för lärande - quiz examen undervisning (25 noter)

MCQ-distraktorer, prequestion vs pretest, AI-bedömning av essäer (ICC 0.94), Bloom/SOLO/DOK, rubric-aligned chain-of-thought.

- [[35-procent-av-distraktorer-ar-icke-fungerande]]
- [[ai-bedomning-av-essaer-nar-manniskoniva-icc-094]]
- [[ai-far-inte-generera-fragan-at-eleven-i-qft-stod]]
- [[ai-genererade-fragor-31-procent-forkastningstakt]]
- [[arbetsminne-som-gransvarde-for-hogre-ordningens-retrieval]]
- [[bloom-solo-dok-ar-kompletterande-linser-inte-alternativ]]
- [[cold-calling-kraver-wait-time-for-att-vara-jamstalldhetsteknik]]
- [[confidence-rating-pa-mcq-gor-feedback-kraftfullare]]
- [[cueing-i-mcq-langsta-alternativet-ar-oftare-ratt]]
- [[desirable-difficulty-sweet-spot-60-till-85-procent]]
- [[distraktorer-optimerade-for-elevkognitiv-plausibilitet]]
- [[elaborativ-feedback-viktigast-for-vsaq-och-transfer]]
- [[format-matching-effekt-forklaras-inte-av-djupare-larande]]
- [[interleaving-kraver-metakognitiv-instruktion-for-att-inte-saboteras]]
- [[iterativ-rubrikrefinering-mot-ai-hojer-kappa-fran-065-till-094]]
- [[prequestion-vs-pretest-specifik-effekt-ingen-generell-transfer]]
- [[pretesting-effekten-d-06-till-12-aven-med-fordrojd-feedback]]
- [[prompt-verb-effekten-vardera-slar-forklara]]
- [[rubric-aligned-chain-of-thought-gor-ai-bedomning-transparent]]
- [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]]
- [[sokratiska-fragor-ar-sekvenser-inte-enskilda-fragor]]
- [[source-based-prompts-slar-dekontextualiserade-prompts]]
- [[spacing-som-10-procent-av-retentionsintervallet]]
- [[testing-effect-transfer-ar-naera-noll-till-otestat-material]]
- [[tvadelade-rubriker-for-tolkande-amnen-innehall-plus-argumentation]]

### 2026-04-21 Historiedidaktik och kontroversiella fragor (49 noter)

Historiedidaktik (Rüsen, Wineburg 2025, Khawaja, Marino) + kontroversiella frågor och deliberativ demokrati (Hess, Jerome, Edling 2025).

- [[aha-2025-ai-guidelines-historia-stodjer-ej-ersatter]]
- [[ai-hallucinationer-systematiska-bias-historiska-kallor]]
- [[bedomning-svar-historia-alternativa-format-berj-2025]]
- [[chatgpt-metaanalys-2025-stor-effekt-men-metodkritik]]
- [[controversial-issues-history-2024-professionell-domekraft]]
- [[counterfactuals-tay-jeong-2025-specifierade-contrast-classes]]
- [[deepfake-historia-16x-okning-klassrumsanvandning]]
- [[engren-2024-forintelseoverlevande-vittnesmal-affektiv-bearbetning]]
- [[evidence-based-reasoning-intervention-d-205-historia]]
- [[gy25-amnesbetyg-progressionsorienterad-historieundervisning]]
- [[historiebruk-moralisk-roll-kollektivt-minne]]
- [[historisk-empati-vr-presence-eisman-2025]]
- [[interruptive-democracy-edling-2025-svensk-laroplan]]
- [[klimatkris-didaktik-nordgren-kalsas-planetar-historia]]
- [[kontrovers-affektiv-polarisering-okar-med-arskurs]]
- [[kontrovers-ai-chatbots-homogeniserar-diskussioner-risk]]
- [[kontrovers-alven-historia-ontologiska-third-order-koncept]]
- [[kontrovers-beyond-impartiality-epistemic-affective]]
- [[kontrovers-brave-space-ersatter-safe-space]]
- [[kontrovers-civisk-utbildning-mot-antidemokratiska-kandidatval]]
- [[kontrovers-deliberation-vs-retorisk-diskussion]]
- [[kontrovers-demokratistegen-skolverket-2024]]
- [[kontrovers-elevernas-tva-varden-kontroversiella-fragor]]
- [[kontrovers-far-right-recruitment-sverige-discord-tiktok]]
- [[kontrovers-forskningsluckor-yrkes-ai-digital]]
- [[kontrovers-fyra-mellan-oplanerade-strategier-jerome-paradox]]
- [[kontrovers-gy25-kontroversiella-fragor-obligatoriska]]
- [[kontrovers-iccs-2022-globalt-trendbrott-civiskunskap]]
- [[kontrovers-jerome-konspirationsteorier-motstridiga-strategier]]
- [[kontrovers-lararelevs-gap-iccs-62-vs-15]]
- [[kontrovers-lararens-sjalvcensur-51-procent]]
- [[kontrovers-lararens-tvekan-fyra-faktorer]]
- [[kontrovers-lararrelationen-som-populismskydd]]
- [[kontrovers-mollenborg-a-lag-b-lag-demokrati]]
- [[kontrovers-perspective-taking-model-building-rct]]
- [[kontrovers-prebunking-inokulering-tre-typer]]
- [[kontrovers-skolinspektionen-konsskillnader-klassrum]]
- [[kontrovers-spontana-kontroversiella-fragor-larare-fruktar-mest]]
- [[kontrovers-tre-paradigmskiften-2024-2025]]
- [[marino-2024-historisk-empati-maste-vara-affektiv-inte-bara-kognitiv]]
- [[mdpi-observationsstudie-2025-expositorisk-dominerar-historia]]
- [[nordgren-2024-decolonize-history-eurocentrisk-kritik]]
- [[nordisk-jamforelse-tre-lararplanstraditioner-khawaja-2025]]
- [[rand-2025-forintelseundervisning-mindre-an-2-timmar-usa]]
- [[redemptive-framing-forintelse-minoritet-van-doorsselaere-2025]]
- [[rusens-typologi-genetisk-kritisk-medvetande-gymnasium]]
- [[sjolund-ahsberg-2024-tolerant-nation-narrativ-sverige]]
- [[wineburg-2025-weblitteracitet-lart-fel-i-decennier]]
- [[yalcin-2025-kollektivt-minne-civic-imagination-tyskland]]

### 2026-04-22 Historiematerialism - Nutida teori och pedagogisk relevans (29 noter)

Historiematerialismens renässans: Malm (fossil capital, ecological Leninism), Saito (degrowth), Fraser, Moore (capitalocene), Wood/Brenner (politisk marxism), Robinson (racial capitalism).

- [[begrepp-historiematerialism-centrala-definitioner]]
- [[chibber-klassisk-marxism-vs-utvidgningar]]
- [[degrowth-vetenskapligt-stod-utanfor-marxism]]
- [[degrowth-vs-ekosocialistisk-tillvaxt-debattkarta]]
- [[fraser-cannibal-capitalism-utvidgat-kapitalismbegrepp]]
- [[gy11-marxism-i-centralt-innehall-sh2]]
- [[historiematerialism-som-metod-mot-andra-historiesyner]]
- [[historiematerialismens-renassans-tre-kriser]]
- [[kapitalismen-eller-nagot-annat-debattkarta]]
- [[kapitalismens-utvidgade-sfar-debattkarta]]
- [[kontraintuitiva-insikter-historiematerialism-2026]]
- [[liedman-marx-som-upplysningsarvtagare]]
- [[malm-ecological-leninism-klimat-strategi]]
- [[malm-fossil-capital-kolets-politiska-historia]]
- [[mau-mute-compulsion-strukturell-makt]]
- [[metabolisk-spricka-foster-kapital-mot-ekologi]]
- [[moore-capitalocene-vs-anthropocene]]
- [[pedagogiska-lektionsuppslag-5-ingangar-till-historiematerialism]]
- [[politisk-marxism-wood-brenner-marknadstvang]]
- [[postkolonial-teori-vs-marxism]]
- [[racial-capitalism-robinson-renassans]]
- [[saito-degrowth-communism-marx-sena-skrifter]]
- [[social-reproduction-theory-bhattacharya-federici]]
- [[srnicek-plattformskapitalism-specifika-egenskaper]]
- [[stuart-hall-konjunkturanalys-atervunnen]]
- [[sverige-lonegap-och-klass-2024-scb-empiri]]
- [[technofeudalism-debatten-varoufakis-mot-klassisk-marxism]]
- [[therborn-plural-historiematerialism-nlr-145]]
- [[wark-vectoralism-hacker-class-vs-vectoralists]]

### 2026-04-23 Kognitionsforskning och Pedagogik (34 noter)

CLT-konstrukter, AI och kognitiv skuld (MIT EEG), interleaving × förkunskap, growth mindset-kollaps 2025, embodied cognition, metakognitiv kalibrering.

- [[abrahamsson-norge-mobilforbud-60-procent-minskad-psykisk-ohalsa-flickor]]
- [[adaptiv-sekvensering-forstarker-interleaving-effekten]]
- [[ai-kalibreringsfeedback-tolkning-slar-raa-svar]]
- [[ai-med-lararstod-g-143-utan-g-008-differens-7x]]
- [[arbetsminnestraning-ar-dod-investera-i-instruktionsdesign-istallet]]
- [[coherence-principen-ai-bilder-och-slide-dekor-koster-larande]]
- [[cross-over-effekten-ai-beroende-kvarstar-efter-borttagning]]
- [[de-neys-logical-intuition-system-1-kan-vara-korrekt]]
- [[dunning-kruger-politisk-kunskap-bestar-ak-7-till-10]]
- [[elaborativ-interrogation-kraver-forkunskap-boundary-condition]]
- [[element-interactivity-som-enhetlig-CLT-konstrukt]]
- [[embodied-cognition-starkare-i-humaniora-an-stem-gymnasiet]]
- [[genai-starkar-problemlosning-inte-kreativitet-higher-order-thinking]]
- [[gerlich-yngre-elever-mest-ai-beroende-kritisk-tankning]]
- [[gester-observation-lika-effektiv-som-produktion-for-blyga-tonaringar]]
- [[growth-mindset-teorin-har-kollapsat-2025]]
- [[handskrift-teta-alfa-konnektivitet-kodning-av-terminologi]]
- [[heterogena-grupper-triggar-socially-shared-regulation]]
- [[historisk-epistemisk-sofistikering-foljer-mognad-inte-undervisning]]
- [[interleaving-regelbaserat-vs-memorering-blockering-vinner-for-regler]]
- [[interleaving-skadar-lag-presterande-utan-initial-blockering]]
- [[kognitiv-skuld-mit-eeg-55-procent-minskad-hjarnkonnektivitet]]
- [[kollaborativ-konceptkartkonstruktion-overtraffar-individuell]]
- [[lararnas-growth-mindset-publikationsbias-monster]]
- [[metakognitiv-lathet-srl-trace-hoga-betyg-noll-transfer]]
- [[metakognitiv-traning-svagast-i-gymnasiet]]
- [[peer-influens-homogeniserar-prestation-men-inte-metakognition]]
- [[pre-training-undviker-expertise-reversal-lagrisk-lagkostnad]]
- [[produktivt-misslyckande-replikerar-inte-i-samhallsvetenskap]]
- [[schema-first-discrimination-later-meta-principen]]
- [[self-explanation-kraver-egengenerering-inte-servade-forklaringar]]
- [[ses-arbetsminne-akademisk-prestation-medieringsmekanism]]
- [[seufert-individuellt-vs-dyader-styrs-av-materialets-format]]
- [[transaktiv-diskurs-stark-prediktor-for-kollaborativt-larande]]

### 2026-05-06 Feedback för inlärning (20 noter)

Feedback som relation, internal feedback, ChatGPT-feedback-paradoxer, lärar-feedback-literacy. **Konventionsavvikelse: svenska titlar, inte kebab.**

- [[AI-feedback-literacy som potentiellt jämlikhetsskapande]]
- [[Aktivt feedback-sökande som inlärningsbar färdighet]]
- [[ChatGPT-feedback genererar ytengagemang utan integration]]
- [[Emotionellt överraskande feedback som teaching signal]]
- [[Examensåterkoppling som obesatt formativt fält]]
- [[Exemplar efter utkast slår exemplar före]]
- [[Feedback-partnerskap som design - sex karakteristika]]
- [[Feedback-rejection som relationell brist - inte kognitiv lucka]]
- [[Feedback-timing tjänar olika syften]]
- [[Feedbacknivå anpassad till skrivfas]]
- [[Internal feedback - jämförande mekanismen]]
- [[Kontext slår innehåll i utkastcyklar]]
- [[Kulturella feedbackskript i flerspråkiga klassrum]]
- [[Lärar-feedback-literacy som parallell konstruktion]]
- [[Nyfikenhet som minnesförstärkare]]
- [[Peer feedback utan träning är brus]]
- [[Sandwich-tekniken har empiriskt stöd när kärnan är specifik]]
- [[Studenter skriver egna feedback-kommentarer]]
- [[Videofeedback överträffar skriftlig på revideringsfrekvens]]
- [[Värdefri inlärningssignal i upprepad övning]]

### 2026-05-17 Aktivering och elevdeltagande (22 noter)

Cold call vs warm call, accountable talk, IRE i SO-ämnen, mini-whiteboards, dialogisk undervisning (EEF RCT), wait time.

- [[accountable-talk-tre-pelare-resnick]]
- [[all-hands-up-pragmatisk-medelvag]]
- [[choral-response-fungerar-bara-for-fakta-inte-resonemang]]
- [[cold-call-ar-enda-tekniken-som-alltid-okar-angest]]
- [[cold-calling-minskar-gender-gap-frivilligt-deltagande]]
- [[cold-calling-svensk-egalitar-skolkultur-forskningslucka]]
- [[deliberativ-undervisning-gynnar-yrkesprogram-mer]]
- [[dialogisk-undervisning-eef-rct-tva-manaders-progression]]
- [[dysthe-autentiska-fragor-uptake-hog-vardering]]
- [[exploratory-talk-ground-rules-as-prerequisite]]
- [[freeman-2025-aktivt-larande-avtagande-avkastning]]
- [[howe-2024-elever-som-bygger-pa-varandras-ideer]]
- [[howe-2025-equitable-participation-hjalper-tysta-mest]]
- [[ire-monstret-hammar-resonemang-i-so-amnen]]
- [[mentimeter-vs-mini-whiteboards-anonymitet-vs-diagnostik]]
- [[mini-whiteboards-loser-sampling-problemet]]
- [[minimumsekvens-aktivering-sex-steg]]
- [[no-opt-out-vs-metakognitiv-epistemisk-osakerhet]]
- [[talmoves-uppfoljningsfragor-formar-deltagandekultur]]
- [[think-pair-share-gymnasium-effektstorlek-161]]
- [[wait-time-tystnad-ar-kognitivt-obekvamt-for-lararen]]
- [[warm-call-loser-cold-call-debatten]]

### 2026-05-18 Cognitive Load Theory 2024-2025 (21 noter)

Element interactivity som enhetlig konstrukt, Sweller 2025-omdaning, germane load pensionerad, AI-kritikprotokoll, Wineburg om biologically secondary knowledge.

- [[ai-kritikprotokoll-i-essaskrivande-konkret-design]]
- [[barbieri-paradoxen-self-explanation-prompter-skadar-worked-examples]]
- [[embodied-cognition-och-clt-synergi-skulmowski-2025]]
- [[expertise-reversal-meta-analys-tetzlaff-2025]]
- [[forforstaelse-av-begrepp-sanker-intrinsic-load-i-historia]]
- [[integrated-human-cognitive-architecture-sweller-2025]]
- [[lehmann-rct-chatgpt-57-vs-68-procent-retention]]
- [[mastery-goal-orientation-modererar-worked-example-effekten]]
- [[modal-vs-codal-redundans-trypke-2024]]
- [[multi-source-civic-issues-element-interactivity-overload]]
- [[paas-1-9-skala-fortfarande-mest-validerade-belastningsmatt]]
- [[process-worked-examples-slar-product-worked-examples]]
- [[produktivt-misslyckande-fore-instruktion-clt-kompatibel-sekvens]]
- [[pyke-reconciliation-clt-och-desirable-difficulties]]
- [[reyes-kritik-arbetsminnesflaskhalsen-neurovetenskapligt-utdaterad]]
- [[schemas-i-langtidsminne-driver-individuella-skillnader]]
- [[sekventiell-source-analys-schema-bygge-i-fyra-faser]]
- [[strukturerad-ai-kritikprotokoll-slar-ostrukturerad-ai-anvandning]]
- [[tvafaktorsmodellen-germane-load-pensionerad-sweller-2025]]
- [[upenn-paradoxen-ai-battre-pa-praktik-samre-pa-koncept]]
- [[wineburg-historiskt-tankande-som-biologically-secondary-knowledge]]

### 2026-05-21 AI-säkra examinationsformer (17 noter)

Detektionsparadigmets sammanbrott, Sydneys två-fileformulering, Corbin/Dawson om strukturella vs diskursiva ändringar, AIAS v2, evaluative judgement, equity-paradoxen för AI-säkringsregimer, Henrekson-reformen som implicit AI-säkring.

- [[ai-detektor-bias-mot-esl-elever]]
- [[ai-som-accommodation-paradox]]
- [[aias-perkins-furze-skala-fem-nivaer]]
- [[bearman-evaluative-judgement-genai-tid]]
- [[blue-book-renassansen-konstruktdrift]]
- [[corbin-strukturella-vs-diskursiva-bedomningsandringar]]
- [[dawson-validitet-slar-fusk-som-central-fraga]]
- [[detektionsparadigmets-sammanbrott-2024-2026]]
- [[henrekson-slutprov-loser-ai-validitet-implicit]]
- [[hyperkontextualiserad-autentisk-bedomning]]
- [[kontraintuitiva-insikter-ai-sakra-examinationer-2026]]
- [[muntliga-prov-inter-rater-reliabilitet-problem]]
- [[nordisk-jamforelse-danmark-norge-sverige-ai-prov]]
- [[processportfolj-checkpoint-samtal-fem-min]]
- [[stanford-fuskfrekvens-konstant-2018-2024]]
- [[sydney-tva-fileformulering-secure-open]]
- [[wicked-problem-ai-bedomning-program-niva]]

### 2026-06-08 The Bright Ages (24 noter)

Hel-bok-ingest av Gabriele & Perry, *The Bright Ages* (2021). Medeltidens sakinnehåll + historiebruk för momentet "Den mörka medeltiden". Egen MOC: [[MOC - Medeltiden (innehåll och historiebruk)]].

- [[rom-foll-inte-kontinuitet-som-tes]]
- [[morka-medeltiden-som-uppfunnen-myt]]
- [[periodisering-ar-ideologisk]]
- [[permeabilitet-den-uppkopplade-medeltiden]]
- [[det-ar-mer-komplicerat-an-sa-historikerns-hallning]]
- [[slaget-vid-tours-732-raddade-inte-europa]]
- [[vikingar-handlade-och-bosatte-inte-bara-rovade]]
- [[demokratin-ar-medeltida]]
- [[renassansen-byggde-pa-medeltiden-den-fornekade]]
- [[belisarius-kontrafaktiskt-540-rom-aterstallt]]
- [[forsta-korstaget-var-inte-forsvar-mot-islam]]
- [[apokalyps-betyder-avtackning-inte-slut]]
- [[just-war-vs-conpelle-intrare-vem-definierar-innanfor]]
- [[religion-som-praktik-inte-inre-tro]]
- [[manga-kristendomar-manga-islam-manga-rom]]
- [[convivencia-och-reconquista-som-trubbiga-kategorier]]
- [[aristoteles-kom-via-islamiska-och-judiska-tankare]]
- [[religiosa-institutioner-bevarade-antikens-vetande]]
- [[kvinnors-agens-syns-nar-kallorna-las-noga]]
- [[digerdoden-var-500-ar-tre-kontinenter]]
- [[medeltida-vetenskapligt-resonemang-om-smitta]]
- [[syndabockstankande-judeforfoljelse-i-kris]]
- [[medeltida-kallor-ar-retorik-inte-fonster]]
- [[rasbegreppets-medeltida-rotter]]

### 2026-06-08 Make It Stick (14 noter)

Hel-bok-ingest av Brown, Roediger & McDaniel, *Make It Stick: The Science of Successful Learning* (2014) - ursprungskällan till wikins lärandevetenskap. Bok-specifika begrepp + lärar-playbook (kap. 8) + motsägelse-/uppdateringskarta mot wikins 2024-2026-källor. Ingen egen MOC (14 < 15-tröskeln); stärker MOC-kandidaten Lärandevetenskap/kognition.

- [[make-it-stick-ursprungskalla-till-wikins-larandevetenskap]]
- [[reflektion-ar-retrieval-practice-plus-elaboration]]
- [[desirable-difficulties-bjork-karnparadoxen]]
- [[generation-effekten-losa-fore-undervisning]]
- [[elaboration-koppla-till-forkunskap-och-metaforer]]
- [[illusions-of-knowing-fluency-och-kalibrering]]
- [[larstilsmyten-pashler-2008-ingen-evidens]]
- [[structure-building-gernsbacher-inbaddade-fragor]]
- [[rule-learners-vs-example-learners]]
- [[successful-intelligence-och-dynamic-testing-sternberg]]
- [[lararplaybook-make-it-stick-kapitel-8]]
- [[high-structure-kurser-minskar-prestationsgapet]]
- [[minnespalats-och-mnemonik-organiserar-larande]]
- [[vad-make-it-stick-fick-ratt-och-vad-som-overspelats]]

### 2026-06-08 The Inheritance of Rome (Wickham) (15 noter)

Hel-bok-ingest av Chris Wickham, *The Inheritance of Rome: Illuminating the Dark Ages 400-1000* (2009) - akademisk materialistisk motvikt till The Bright Ages. Hör till [[MOC - Medeltiden (innehåll och historiebruk)]] (sektion 8). Wickhams tredje position: varken katastrof eller kontinuitet, förstå perioden på egna villkor.

- [[wickham-tredje-position-varken-katastrof-eller-kontinuitet]]
- [[ingenting-forandrades-men-allt-forandrades]]
- [[skattestatens-fall-ar-den-strukturella-forandringen]]
- [[regional-variation-britannien-som-extremfall]]
- [[den-romerska-kontinuiteten-fanns-i-ost]]
- [[kalifatet-som-roms-mest-fullstandiga-arvtagare]]
- [[militarisering-inte-germanisering]]
- [[etnogenes-barbarisk-identitet-som-konstruktion]]
- [[det-karolingiska-experimentet]]
- [[historia-underifran-bonder-som-overklagar]]
- [[inburandet-av-bonderna-caging-of-the-peasantry]]
- [[mot-feodal-revolution-som-universalmodell]]
- [[arvet-fran-rom-ar-det-offentligas-kultur]]
- [[nordisk-statsbildning-sent-och-utan-romersk-grund]]
- [[vikingar-handel-men-enkel-ekonomi]]

### 2026-06-08 Medieval Europe (Wickham) (12 noter)

Hel-bok-ingest av Chris Wickham, *Medieval Europe* (2016) - syntes av hela medeltiden 500-1500. Fokus på det **nya** vs The Inheritance of Rome (1000-1500 + helhetssyntes). Hör till [[MOC - Medeltiden (innehåll och historiebruk)]] (sektion 9).

- [[historien-gar-fran-inte-till-wickhams-nya-blick]]
- [[elfte-arhundradet-ar-medeltidens-vattendelare]]
- [[lokalisering-av-makt-cellstrukturen-efter-ar-1000]]
- [[den-langa-ekonomiska-boomen-massmarknad-inte-lyxhandel]]
- [[statens-ateruppbyggnad-1150-1300-sex-mekanismer]]
- [[skatt-kraver-samtycke-representationens-rotter]]
- [[1204-bysans-som-det-forlorade-alternativet]]
- [[genus-i-senmedeltiden-tvetydigheter-inte-enkelriktad-forsamring]]
- [[digerdoden-var-ingen-systemkollaps-vinnare-och-forlorare]]
- [[ingen-senmedeltida-kris-staterna-blev-starkare]]
- [[den-vidgade-offentliga-sfaren-1350-1500]]
- [[1500-ar-ett-svagt-brott-reformationen-ar-det-verkliga]]

### 2026-06-08 Powers and Thrones (Dan Jones) (11 noter)

Hel-bok-ingest av Dan Jones, *Powers and Thrones* (2021) - populärnarrativ medeltidshistoria som motpol till de akademiska verken. Fem krafter, det globala (mongoler, handel), och historiebrukskontrasten. Hör till [[MOC - Medeltiden (innehåll och historiebruk)]] (sektion 10).

- [[dan-jones-fem-krafter-vi-ar-medeltidens-barn]]
- [[klimat-som-drivkraft-megatorkan-flyttade-hunnerna]]
- [[mongolerna-som-varldshistoriens-gangjarn]]
- [[pax-mongolica-handel-och-pest-langs-samma-vagar]]
- [[den-kommersiella-revolutionen-medeltida-globalisering]]
- [[oversattningsrorelsen-toledo-vast-som-baksvansare]]
- [[korstaget-som-formbar-och-giftig-maktteknologi]]
- [[tryckpressen-som-informationsrevolution-going-viral]]
- [[dan-jones-vs-wickham-teleologi-mot-anti-teleologi]]
- [[medeltida-klassrumshooks-ur-powers-and-thrones]]
- [[populärhistoriens-anakronismer-som-pedagogiskt-grepp]]

### 2026-06-08 The Once and Future Sex (Janega) (11 noter)

Hel-bok-ingest av Eleanor Janega, *The Once and Future Sex* (2023) - polemisk genushistoria om medeltidens kvinnoroller. Matar genushistoria-momentet (Historia 2a). Hör till [[MOC - Medeltiden (innehåll och historiebruk)]] (sektion 11).

- [[naturligt-och-traditionellt-ar-konstruerade-kategorier]]
- [[kvinnan-som-utochinvand-man-den-medeltida-kroppen]]
- [[den-sexuellt-glupska-kvinnan-bevisar-konstruktionen]]
- [[skonhet-som-forkladd-klass-inte-natur]]
- [[aktenskap-och-romantisk-karlek-som-motsatser]]
- [[kvinnor-arbetade-overallt-hemmafrun-ar-modern]]
- [[samma-slutsats-ny-motivering-gud-natur-vetenskap]]
- [[framstegsmyten-och-tradwife-historiebruket]]
- [[janega-vs-wickham-polemik-mot-struktur]]
- [[motroster-hildegard-och-christine-de-pizan]]
- [[genushistoria-moment-och-klassrumsbruk-av-janega]]

### 2026-06-09 Undervisning på yrkesprogram (18 noter)

Djupresearch (3 rapporter, ~90 källor) om undervisning på yrkesprogram: systemkontext (Gy25, behörighetsreformen 2023, dimensionering), didaktik/motivation för gemensamma ämnen (Sh/Hi), och internationell VET-forskning. Egen MOC: [[MOC - Undervisning på yrkesprogram]].

- [[gy25-yrkesprogram-amnesbetyg-50-poang-oforandrat]]
- [[yrkesprogram-1a-1b-sparlasning]]
- [[hogskolebehorighetsreformen-2023-yrkesprogram]]
- [[soktryck-okar-men-matchning-brister-dimensionering]]
- [[fullfoljande-sjunker-matematik-1-flaskhals]]
- [[yrkeselevers-motivation-ar-kontextuell-inte-inneboende]]
- [[infargning-yrkeskontext-som-ingang-inte-tak]]
- [[disciplinar-lasning-pa-yrkesprogram]]
- [[hoga-forvantningar-inte-sankta-krav-yrkesprogram]]
- [[kognitiv-aktivering-slar-att-prata-om-aktuellt]]
- [[satellitlarare-samverkan-ar-lararberoende]]
- [[medborgarlarande-pa-apl-outnyttjat]]
- [[yrkeskunskap-ar-tredimensionell-billett]]
- [[mer-apl-ar-inte-automatiskt-battre]]
- [[boundary-objects-kraver-metadialog]]
- [[tpp-tsp-itp-curriculummodeller]]
- [[avskaffad-sparning-eliminerar-inte-social-reproduktion]]
- [[det-ai-inte-ersatter-ar-vad-vet-tranar]]

### 2026-06-10 The Rise and Fall of Classical Greece (Ober) (12 noter)

Hel-bok-ingest av Josiah Ober, *The Rise and Fall of Classical Greece* (2015) - kvantitativ ekonomisk/institutionell lins på antiken. Varför blev ett splittrat Grekland rikt? Hör till [[MOC - Antiken (Grekland och Rom)]] (sektion 1).

- [[den-grekiska-efflorescensen]]
- [[grekisk-tillvaxt-var-en-malthusiansk-anomali]]
- [[obers-metod-wealthy-hellas]]
- [[grundpusslet-splittrad-grekland-blev-rikt]]
- [[fair-rules-sanker-transaktionskostnader]]
- [[konkurrens-mellan-poleis-som-institutionell-marknad]]
- [[demokratin-som-kunskapsmaskin-ober]]
- [[medborgarskap-som-ekonomisk-uppfinning-sparta-aten]]
- [[decentralisering-som-styrka-och-svaghet]]
- [[filip-ii-erovrade-med-grekisk-expertis]]
- [[fallet-ar-politiskt-inte-ekonomiskt]]
- [[institutioner-och-valstand-obers-tes]]

### 2026-06-10 The Classical World (Lane Fox) (13 noter)

Hel-bok-ingest av Robin Lane Fox, *The Classical World: An Epic History from Homer to Hadrian* (2005) - kulturell/tematisk lins (frihet, rättvisa, lyx) över hela bågen Homeros→Hadrianus. Hör till [[MOC - Antiken (Grekland och Rom)]] (sektion 2, 4-5, 7).

- [[frihet-rattvisa-lyx-lane-fox-tre-linser]]
- [[homeros-klassiska-varldens-kulturella-dna-lane-fox]]
- [[frihet-eleutheria-grekiskt-nyckelbegrepp-lane-fox]]
- [[lyx-som-moralisk-angest-truphe-lane-fox]]
- [[alexander-vandpunkt-och-eftermale-lane-fox]]
- [[hellenismen-spred-grekisk-kultur-som-infrastruktur-lane-fox]]
- [[graecia-capta-erovraren-erovrad-lane-fox]]
- [[libertas-romersk-frihet-skiljd-fran-grekisk-eleutheria-lane-fox]]
- [[cicero-och-republikens-kris-genom-lyxens-lins-lane-fox]]
- [[hadrianus-som-retrospektiv-slutpunkt]]
- [[frihet-under-kejsarna-libertas-omdefinieras-lane-fox]]
- [[den-klassiska-varlden-ar-en-civilisation-lane-fox]]
- [[att-mata-antiken-och-oss-sjalva-den-reflexiva-poangen-lane-fox]]

### 2026-06-10 SPQR (Beard) (12 noter)

Hel-bok-ingest av Mary Beard, *SPQR: A History of Ancient Rome* (2015) - historiografiskt skeptisk Rom-syntes från grundmyt till medborgarskapsediktet 212. Hör till [[MOC - Antiken (Grekland och Rom)]] (sektion 3-5).

- [[beard-vi-vet-mindre-an-vi-tror]]
- [[romulus-och-remus-brodramord-som-romersk-sjalvbild]]
- [[cicero-mot-catilina-beards-medvetna-ingang]]
- [[rom-konstruerade-sitt-ursprung-som-inkluderande]]
- [[hur-en-stad-erovrade-medelhavet-alliansmaskinen]]
- [[de-sociala-konflikterna-patricier-plebejer-graccherna]]
- [[rom-som-slavsamhalle-frigivning-och-blind-flack]]
- [[erovringens-aterverkan-rikedom-lyx-och-korruption]]
- [[augustus-aterstallda-republiken-som-fiktion]]
- [[kejsarmakten-som-institution-fjorton-kejsare-samma-maskin]]
- [[vanligt-folk-i-rom-historia-underifran-gravstenar-klotter]]
- [[medborgarskapsediktet-212-beards-slutpunkt]]

### 2026-06-10 The Fall of the Roman Empire (Heather) (15 noter)

Hel-bok-ingest av Peter Heather, *The Fall of the Roman Empire* (2005) - militär-/politisk katastroflins på Roms fall. Wikins **katastrofröst** som fyller Ward-Perkins-luckan och bryggar till [[MOC - Medeltiden (innehåll och historiebruk)]]. Hör till [[MOC - Antiken (Grekland och Rom)]] (sektion 6, 8).

- [[300-talets-rom-blomstrade-inte-i-forfall]]
- [[heather-katastrof-tes-mot-gibbon-inre-dekadens]]
- [[imperiet-skapade-sin-egen-fiende-barbarerna]]
- [[barbar-var-en-romersk-ideologisk-konstruktion]]
- [[romersk-gransekonomi-och-en-porods-limes]]
- [[goternas-donauovergang-376-misskott-flyktingmottagande]]
- [[adrianopel-378-militar-katastrof]]
- [[alariks-plundring-av-rom-410-symbol-utan-substans]]
- [[forlusten-av-nordafrika-439-fiskal-militar-logik]]
- [[hunnerna-som-exogen-drivkraft]]
- [[attila-plundrare-inte-statsbyggare]]
- [[hunnerrikets-kollaps-destabiliserade-rom]]
- [[fiskal-militar-nedatspiral-roms-fall]]
- [[roms-fall-476-vad-foll-egentligen]]
- [[heather-katastrof-mot-kontinuitet-och-wickham]]

### 2026-06-15 Seven Myths of the Spanish Conquest (Restall) (12 noter)

Hel-bok-ingest av Matthew Restall, *Seven Myths of the Spanish Conquest* (2003) - revisionistisk mytspräckning av den spanska erövringen av Amerika. Kluster A av nya tiden-batchen; hör till [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] (sektion 1).

- [[myten-om-de-exceptionella-mannen]]
- [[myten-om-kungens-arme]]
- [[myten-om-den-vite-conquistadoren]]
- [[myten-om-fullbordan]]
- [[myten-om-miscommunication]]
- [[myten-om-infodingarnas-undergång]]
- [[myten-om-overlagsenhet]]
- [[bernal-diaz-och-probanzans-retorik]]
- [[sjukdom-oenighet-och-stal-som-foerklaring]]
- [[la-malinche-omtolkning-som-historiebruk]]
- [[cuauhtémoc-epilogen-som-myternas-brännpunkt]]
- [[erovringens-myter-som-modell-for-avgjort-vs-oppet]]

### 2026-06-15 Fifth Sun (Townsend) (12 noter)

Hel-bok-ingest av Camilla Townsend, *Fifth Sun: A New History of the Aztecs* (2019) - aztekernas historia ur nahuatl-annalerna; wikins starkaste perspektiv- och dekoloniseringsbok. Hör till [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] (sektion 2).

- [[nahuatl-annalerna-gor-nahua-till-historiens-subjekt]]
- [[quetzalcoatl-myten-ar-en-kolonial-konstruktion]]
- [[moctezuma-var-pragmatisk-ledare-inte-fegis]]
- [[tenochtitlan-foll-av-allianser-epidemi-och-teknologi-inte-ode]]
- [[erövringen-var-ingen-civilisationernas-krock]]
- [[malintzin-handlande-manniska-inte-symbol]]
- [[polygyni-och-fraktionspolitik-driver-nahua-historia]]
- [[nahua-agens-och-kontinuitet-efter-1521]]
- [[chimalpahin-och-den-inhemska-historieskrivningen]]
- [[kvinnors-roster-och-agens-i-nahuatl-kallorna]]
- [[femte-solen-kosmologi-och-cyklisk-tid]]
- [[dekolonisering-som-historiografisk-praktik]]

### 2026-06-15 The Slave Ship (Rediker) (13 noter)

Hel-bok-ingest av Marcus Rediker, *The Slave Ship: A Human History* (2007) - den transatlantiska slavhandeln underifrån via skeppet som maskin; materialistisk, svår historia. Hör till [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] (sektion 3).

- [[slavskeppet-som-maskin-fabrik-och-fangelse]]
- [[ras-tillverkas-ombord-etnogenes-under-mellanpassagen]]
- [[slavhandeln-som-tidig-atlantisk-kapitalism]]
- [[kopmannen-som-dold-arkitekt]]
- [[kaptenen-tyranni-terror-som-system]]
- [[sjomannen-som-bade-offer-och-redskap]]
- [[historia-underifran-sjomannen-som-vittne]]
- [[motstand-och-uppror-ombord-pa-slavskepp]]
- [[mellanpassagen-som-erfarenhet-equianos-vittnesmal]]
- [[vagen-till-skeppet-afrikanska-ursprung-och-kofflet]]
- [[brooks-diagrammet-abolitionismens-bildpolitik]]
- [[solidaritet-underifraan-shipmate-och-forsoning]]
- [[hajen-som-terrorverktyg-slavhandeln-och-havsdjuren]]

### 2026-06-15 The Invention of Science (Wootton) (14 noter)

Hel-bok-ingest av David Wootton, *The Invention of Science* (2015) - realistiskt försvar av att den vetenskapliga revolutionen var verklig; begreppen (upptäckt, faktum, experiment, evidens) skapade vetenskapen. Hör till [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] (sektion 4); kontrastpar med Shapin.

- [[wootton-vs-shapin-realism-mot-konstruktivism]]
- [[den-vetenskapliga-revolutionen-var-verklig]]
- [[spraket-skapar-vetenskapen-begreppens-historia]]
- [[uppfinningen-av-uppfinnandet-columbus-modellen]]
- [[faktum-som-ny-epistemologisk-kategori]]
- [[evidens-som-ny-epistemologisk-kategori]]
- [[experimentbegreppets-uppkomst]]
- [[hypotesen-och-teorins-uppkomst]]
- [[naturlagsbegreppets-uppfinning]]
- [[mordet-pa-aristoteles-den-slutna-antika-varldsbilden]]
- [[instrumentens-roll-teleskopet-och-mikroskopet]]
- [[tryckpressen-som-kunskapens-infrastruktur]]
- [[perspektivmaleriets-matematisering-av-varlden]]
- [[objektivitetens-uppfinning-det-situerade-vittnet]]

### 2026-06-15 The Scientific Revolution (Shapin) (12 noter)

Hel-bok-ingest av Steven Shapin, *The Scientific Revolution* (1996) - socialkonstruktivistisk motpol till Wootton: "There was no such thing as the Scientific Revolution". Hör till [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] (sektion 4).

- [[shapin-det-fanns-ingen-vetenskaplig-revolution]]
- [[shapin-kunskap-som-social-produkt]]
- [[shapin-experimentet-som-social-teknologi]]
- [[shapin-virtuella-vittnen-och-vetenskaplig-kommunikation]]
- [[shapin-trovärdighet-och-gentlemannakoden]]
- [[shapin-den-mekaniska-filosofin-världen-som-maskin]]
- [[shapin-den-vetenskapliga-metoden-som-efterhandskonstruktion]]
- [[shapin-kontinuitet-mot-brott-med-medeltida-naturfilosofi]]
- [[shapin-religion-inte-motstandare-till-naturfilosofin]]
- [[shapin-kunskapens-syften-nytta-makt-guds-ara]]
- [[shapin-avpersonalisering-av-naturen-och-moderniteten]]
- [[shapin-kopernikanska-revolutionens-existentiella-chock]]

### 2026-06-15 The Enlightenment (Robertson) (14 noter)

Hel-bok-ingest av Ritchie Robertson, *The Enlightenment: The Pursuit of Happiness 1680-1790* (2020) - bred syntes: upplysningen som strävan efter lycka, förnuft + känsla, försvaret mot kritikerna. Hör till [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] (sektion 5).

- [[lyckan-som-upplysningens-samlande-tema]]
- [[upplysningen-fornuft-och-kansla-som-komplement]]
- [[den-religiosa-upplysningen-inte-bara-ateism]]
- [[vetenskapen-om-manniskan-upplysningens-empiriska-projekt]]
- [[upplysningens-vetenskapliga-arv-newton-och-empirismen]]
- [[tolerans-som-upplysningens-politiska-projekt]]
- [[beccaria-humanisering-av-straff]]
- [[sallskaglighet-offentlighet-och-upplysningens-sociala-rum]]
- [[den-praktiska-upplysningen-reform-av-vardagslivet]]
- [[upplyst-despoti-reform-uppifraan]]
- [[kosmopolitism-och-det-globala-perspektivet]]
- [[upplysningen-och-slaveriet-spannungen]]
- [[upplysningens-forsvar-mot-kritikerna]]
- [[upplysningen-och-revolutionerna-bryggorna-framat]]

### 2026-06-15 American Revolutions (Taylor) (13 noter)

Hel-bok-ingest av Alan Taylor, *American Revolutions: A Continental History* (2016) - kontinental revisionism: revolutionen som blodigt inbördeskrig, slaveri och urfolksfördrivning. Hör till [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] (sektion 1); SAC-par med Wood.

- [[taylor-pluralis-tesen-flera-revolutioner-inte-en]]
- [[taylor-vs-wood-revolutionen-radikal-eller-blodig]]
- [[taylor-revolutionen-som-inbordeskrig-patriots-mot-loyalister]]
- [[taylor-loyalisterna-60000-flyktingar-revolutionens-forlorare]]
- [[taylor-slaveriets-centralitet-i-revolutionen]]
- [[taylor-dunmores-proklamation-britterna-lovade-slavarna-frihet]]
- [[taylor-urfolken-som-storsta-forlorarna]]
- [[taylor-republikanismens-ojamlikhet-frihet-bara-for-vita-man]]
- [[taylor-vasterns-roll-som-revolutionens-motor]]
- [[taylor-imperiekontexten-brittiskt-spanskt-franskt]]
- [[taylor-revolutionen-som-kontinental-inte-bara-13-kolonier]]
- [[taylor-de-fattiga-vitas-roll-i-revolutionen]]
- [[taylor-ekonomisk-kris-efter-revolutionen-15-ar-av-depression]]

### 2026-06-15 The Radicalism of the American Revolution (Wood) (12 noter)

Hel-bok-ingest av Gordon S. Wood, *The Radicalism of the American Revolution* (1992) - revolutionen som genuint radikal social transformation (monarki -> demokrati). Idealistisk motpol till Taylor. Hör till [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] (sektion 1).

- [[wood-revolutionen-var-en-radikal-social-transformation]]
- [[wood-det-monarkiska-samhallet-beroende-och-patronage]]
- [[wood-republikanismens-mellanlager]]
- [[wood-upplyst-paternalism-och-auktoritetens-kris]]
- [[wood-benevolens-och-republikansk-dygd]]
- [[wood-jämlikhetens-radikala-kraft]]
- [[wood-aristokratins-angrepp-och-fall]]
- [[wood-demokratins-genombrott-och-medelklassordningen]]
- [[wood-arbete-hyllas-lättja-fördöms]]
- [[wood-kommersens-hyllning]]
- [[wood-radikal-forandring-utan-klasskamp]]
- [[wood-revolutionen-som-idéhandelse]]

### 2026-06-15 The Revolutionary Temper (Darnton) (13 noter)

Hel-bok-ingest av Robert Darnton, *The Revolutionary Temper: Paris 1748-1789* (2023) - mentalitetshistoria: hur revolutionen blev tänkbar genom nyheter, visor och skandaler. Hör till [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] (sektion 2); före/efter-par med Tackett.

- [[revolutionary-temper-som-kollektiv-mentalitet]]
- [[paris-som-tidigt-informationssamhalle-multimedia-1748-1789]]
- [[visor-som-politiskt-medium-paris-1700-tal]]
- [[rykten-och-bruits-publics-som-opinion]]
- [[kafeerna-och-den-framvaxande-offentligheten-paris]]
- [[desakralisering-av-monarkin-fore-1789]]
- [[diamanthalsbandets-affar-skandal-som-legitimitetsupploslare]]
- [[maupeou-kuppen-1771-och-det-politiska-uppvaknandet]]
- [[opinion-som-ny-politisk-aktor-versailles-maste-lyssna]]
- [[nyhetscykeln-som-politiskt-verktyg-anekdoten-som-grundenhet]]
- [[skandalers-politiska-funktion-kristallisering-av-diffus-misstro]]
- [[mentalitetshistoria-som-metod-nyhetsflode-over-idehistoria]]
- [[darnton-och-tackett-fore-och-efter-1789]]

### 2026-06-15 The Coming of the Terror (Tackett) (12 noter)

Hel-bok-ingest av Timothy Tackett, *The Coming of the Terror in the French Revolution* (2015) - emotions- och kontingenshistoria: skräckväldet som process, inte förutbestämt. Hör till [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] (sektion 2).

- [[tackett-skracket-var-inte-forutbestamt-utan-en-process]]
- [[tackett-radslan-och-misstron-som-drivkraft-i-revolutionen]]
- [[tackett-konspirationstankandets-logik-i-revolutionen]]
- [[tackett-kriget-som-radikaliserande-faktor]]
- [[tackett-september-massakrerna-som-kollektiv-psykologi]]
- [[tackett-demonisering-och-giftigt-fraktionalism]]
- [[tackett-ryktenas-och-denuncieringens-roll]]
- [[tackett-revolutionarernas-psykologi-och-kansloyliv]]
- [[tackett-kontingens-mot-determinism-mot-furet]]
- [[tackett-valdsspiralen-steg-for-steg]]
- [[tackett-kontrarrevolutionen-och-radslans-reella-grund]]
- [[tackett-frihetens-oavsedda-konsekvenser-auktoritetsupplosning]]

### 2026-06-15 The Age of Revolution (Hobsbawm) (13 noter)

Hel-bok-ingest av Eric Hobsbawm, *The Age of Revolution 1789-1848* (1962) - marxistisk syntes: dubbelrevolutionen (fransk politisk + brittisk industriell) som ett genombrott. Binder ihop moment 6-7. Hör till [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] (sektion 3).

- [[hobsbawm-dubbelrevolutionen-som-tes]]
- [[hobsbawm-varlden-pa-1780-talet-utgangslaget]]
- [[hobsbawm-industriella-revolutionen-bomull-och-kapital]]
- [[hobsbawm-franska-revolutionen-som-politisk-modell]]
- [[hobsbawm-nationalismens-uppkomst]]
- [[hobsbawm-borgerlighetens-seger-karriarerna-oppnas]]
- [[hobsbawm-arbetarklassens-fodelse]]
- [[hobsbawm-revolutionsvagorna-som-monster]]
- [[hobsbawm-1848-som-kulmen]]
- [[hobsbawm-sekulara-och-religiosasvar-pa-omvalvningen]]
- [[hobsbawm-romantiken-och-konsten-i-borgerliga-tidsaldern]]
- [[hobsbawm-historiematerialism-i-praktiken]]
- [[hobsbawm-teleologi-som-historiesyn]]

### 2026-06-15 The Enlightened Economy (Mokyr) (12 noter)

Hel-bok-ingest av Joel Mokyr, *The Enlightened Economy: An Economic History of Britain 1700-1850* (2009) - idé-/kulturförklaringen: "industrial enlightenment" (upplysningens nyttiga kunskap) som motor bakom den brittiska industriella revolutionen. Tredje positionen mot Malm (arbetskontroll) och Hobsbawm (struktur). Hör till [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] (sektion 4). Sista klustret (D) i 12-boksbatchen.

- [[mokyr-industrial-enlightenment-som-tes]]
- [[mokyr-useful-knowledge-propositionell-vs-preskriptiv]]
- [[mokyr-bakonska-programmet-tre-komponenter]]
- [[mokyr-sjunkande-atkomstkostnader-till-kunskap]]
- [[mokyr-savants-och-fabricants-alliansen]]
- [[mokyr-forbattringskultur-och-innovationsnorm]]
- [[mokyr-institutioner-och-rent-seeking-varfor-storbritannien]]
- [[mokyr-varfor-inte-kina-eller-frankrike]]
- [[mokyr-industriell-revolution-gradvis-inte-plotslig]]
- [[mokyr-upplysningens-ekonomiska-reformer-fri-handel-och-anti-merkantilism]]
- [[mokyr-levnadsstandard-och-industrialiseringens-pris]]
- [[mokyr-vs-malm-ideer-mot-arbetskontroll]]

### 2026-07-11 Designa escaperooms (22 noter)

Deep-research-session om pedagogiska escape rooms: designramverk (escapED, Star Model, Room2Educ8, CREATE m.fl.), metaanalytisk evidens (stor effekt men extrem heterogenitet), pusseldesign, debriefing som mest försummad fas, ämnesspecifika fynd för historia/samhällskunskap samt kontrariska fynd (lärparadoxen, tidskostnad). Kopplar till [[MOC - Elevmotivation och engagemang]] och [[MOC - Lärandevetenskap och kognition]].

- [[escaped-ramverket-fyra-steg-fran-behovsanalys-till-narrativ]]
- [[star-model-tre-analysdimensioner-sex-punkter-pa-stjarnan]]
- [[room2educ8-design-thinking-for-escape-rooms]]
- [[create-ramverket-stem-integrerar-pedagogik-och-spelmekanik]]
- [[generisk-flernivastruktur-escape-rooms-2024]]
- [[socio-konstruktivistiskt-ramverk-escape-rooms-2026]]
- [[konvergerande-niostegsprocess-over-escape-room-ramverk]]
- [[meta-analys-escape-rooms-stor-effekt-men-extrem-heterogenitet]]
- [[svag-teoretisk-grund-i-escape-room-forskningen]]
- [[debriefing-den-mest-forsummade-fasen-i-escape-rooms]]
- [[k12-forskning-om-escape-rooms-tunnare-an-hogskoleforskning]]
- [[pusseltaxonomi-mental-fysisk-metapussel-escape-rooms]]
- [[choklad-overdragen-brokkoli-pussel-maste-vara-blooms-matta]]
- [[fjarrformat-underpresterar-synkrona-format-vinner-over-asynkrona]]
- [[inkrementellt-icke-bestraffande-ledtradssystem-escape-rooms]]
- [[civics-escape-room-hojer-motivation-kritiskt-tankande-flow]]
- [[karaktarsperspektiv-som-narrativ-teknik-i-historia-escape-rooms]]
- [[historia-och-samhallskunskap-escape-rooms-tunn-peer-reviewed-evidens]]
- [[escape-rooms-som-formativ-bedomning-med-observationsprotokoll]]
- [[larparadoxen-escape-rooms-motivation-upp-betyg-oforandrat]]
- [[tidskostnad-och-brusrisk-escape-rooms-kontra-direktundervisning]]
- [[klassrumslogistik-escape-rooms-grupper-tid-forberedelse]]

### 2026-07-28 AI i lärararbetet - professionens organisering (40 noter)

Deep-research-session om hur lärarprofessionen världen över organiserar sig kollektivt kring AI i det egna arbetet. Fem parallella researchspår: lärarledda nätverk, fack och professionsorganisationer, policy och myndigheter, fortbildning och forskning, samt Sverige och Norden. Se [[MOC - AI i lärararbetet och professionens organisering]] för läsordning och tvärgående fynd.

**Vad som binder och vad som bara vägleder**
- [[bindande-reglering-traffar-systemen-vagledning-traffar-lararen]]
- [[eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare]]
- [[far-ai-ratta-och-satta-betyg-internationell-jamforelse]]
- [[unesco-ai-competency-framework-teachers-och-dess-tunna-mottagande]]
- [[sydkorea-estland-obligatorium-versus-sekvens]]
- [[ansvaret-flyttar-aldrig-fran-lararen-den-globala-normkarnan]]
- [[policy-praktik-gapet-vi-reglerar-dar-larare-anvander-ai-minst]]

**Sverige och Norden**
- [[svenska-policyomsvangningen-ai-i-skolan-2023-2026]]
- [[parterna-drev-fram-skolans-plats-i-ai-strategin]]
- [[skolverkets-lagesbild-2026-atta-av-tio-men-grundskolan]]
- [[sverige-valde-manskliga-bedomare-framfor-ai-rattning]]
- [[fortbildningsluckan-ai-som-amne-inte-ai-i-amnet]]
- [[norden-har-nationella-riktlinjer-sverige-har-rad]]
- [[svenska-ai-skoldebatten-fyra-positioner-och-ett-obekvamt-fynd]]
- [[vad-far-en-svensk-larare-mata-in-i-ett-ai-verktyg]]

**Fack och professionsorganisationer**
- [[education-international-och-etuce-som-normsattare]]
- [[ai-som-obligatoriskt-forhandlingsamne]]
- [[ai-far-inte-ensamt-avgora-lararutvardering]]
- [[lararnas-upphovsratt-som-ai-traningsdata]]
- [[ratten-att-avsta-fran-ai-verktyg]]
- [[ai-flyttar-arbetsbordan-snarare-an-minskar-den]]
- [[aft-akademin-och-intressekonflikten]]
- [[nya-alliansen-2026-fack-foraldrar-forsiktiga-huvudman]]

**Gräsrot och nätverk**
- [[autonomi-mot-mandat-den-verkliga-konfliktlinjen]]
- [[co-lab-modellen-roterande-kollegialt-ai-labb]]
- [[amnesforeningarna-levererar-natverken-saknas]]
- [[cccc-institutionaliserar-ratten-att-vagra-ai]]
- [[skolor-som-skriver-egna-ai-regler-trafikljusmodellen]]
- [[motstandsrorelsen-fran-argument-till-havstanger]]
- [[leverantorsdrivna-pseudo-communities-och-ambassadorsprogram]]
- [[promptbibliotek-ar-faltets-svagaste-led]]

**Forskningen om lärares AI-användning**
- [[larares-ai-anvandning-2024-2026-siffror-som-spretar]]
- [[bedomning-lagst-i-alla-matningar-professionens-egen-grans]]
- [[tidsbesparingen-25-minuter-mot-59-timmar]]
- [[kompetensramverk-och-fortbildning-normativt-inte-effektprovat]]
- [[ai-stod-i-tolkande-amnen-konstaterad-evidenslucka]]
- [[relationen-larare-elev-lararens-eget-ai-bruk-ar-omatt]]

**Riskerna i bedömningsledet**
- [[automation-bias-hos-larare-experimentellt-bekraftad]]
- [[llm-bedomarreliabilitet-spannet-030-080]]
- [[deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data]]

### 2026-07-28 Språkanpassning av texter (18 noter)

Deep-research-session om vad läraren ska göra när en text är för svår: förenkla texten eller bygga stöttning runt den. Två parallella researchspår (internationell läsforskning respektive svensk didaktik och styrdokument). Sessionen kördes som en **prövning** av hållningen "scaffolda proceduren, sänk aldrig språknivån" - och hållningen preciserades snarare än bekräftades. Börja med `den-direkta-jamforelsen-saknas`, som anger hur starkt övriga noter får citeras.

**Mekanismen: kohesion, inte enkelhet**
- [[forenkling-och-elaborering-konvergerar-mot-kohesion]]
- [[reverse-cohesion-och-expertise-reversal-samma-mekanism]]
- [[reichenberg-forklarar-amnesbegrepp-byter-inte-ut-dem]]
- [[rost-och-kausalitet-utraderade-andrasprakgapet]]

**Mätning och lättläst**
- [[lix-stiger-nar-texten-blir-begripligare]]
- [[lattlast-ar-bade-lattare-och-svarare]]
- [[lattlast-cementerar-inte-forvantningar-obelagt-argument]]

**Historia och källtexter**
- [[primarkallans-sprak-ar-studieobjektet]]
- [[tre-nivaer-av-kallanpassning]]
- [[reisman-svara-kallor-forbattrade-allman-lasforstaelse]]

**Styrdokument och likvärdighet**
- [[gy25-staller-inga-krav-pa-textsvarighet]]
- [[ingen-extern-kalibrering-av-textsvarighet]]

**Vad som faktiskt har stöd**
- [[lasstrategiundervisning-gynnar-svaga-lasare-mest]]
- [[metakognitiv-forkunskap-slar-amnesforkunskap]]
- [[olvegard-amnesspraket-inte-svenskan-ar-troskeln]]

**Evidenskritik och luckor**
- [[den-direkta-jamforelsen-saknas]]
- [[scaffolding-vilar-pa-auktoritet-mer-an-effektforskning]]
- [[llm-forenkling-har-en-tyst-felmod]]

### 2026-08-03 Historiskt evidensresonemang (33 noter + 3 changelogar)

Verifieringssession: en tidigare wiki-sida ([[evidence-based-reasoning-intervention-d-205-historia]], skapad 2026-04-21) prövades mot primärkällorna och föll. Siffran d=2,05 stod sig - allt runt den (population, ämne, författarnamn, benchmark) gjorde det inte. Sidan är omskriven i sin helhet, inte raderad. Se [[MOC - Historiedidaktik och kontroversiella frågor]] (avsnitt 6, rättad) för läsordning. **Passerat 15-noterströskeln** men mappas mot en befintlig MOC snarare än att föreslås som egen - ingen ny MOC-kandidat härifrån.

**Effektstorlek d=2,05: den korrekta siffran och den generaliserbara lärdomen**
- [[d-205-korrekt-siffra-fel-tillskrivning]]
- [[den-generaliserbara-lardomen-vad-fallet-lar-om-effektstorlekar]]
- [[studien-handlar-inte-om-historia-eller-gymnasieelever]]
- [[kraft-2020-varnar-for-exakt-den-effektstorlek-som-abaropas-som-stod]]
- [[krafts-riktvarde-galler-en-specifik-studieklass-inte-within-subjects-labbstudier]]
- [[forskarkonstruerade-matt-ger-2-4-ggr-storre-effekter-kraft]]
- [[oebr-mattet-ar-forfattarnas-eget-inte-oberoende]]
- [[forfattarna-reserverar-sig-sjalva-mot-kausala-slutsatser]]
- [[du-list-2022-egna-rct-visar-ingen-effekt-pa-slutsatsdragning]]
- [[inget-vedertaget-namn-pa-felet-att-blanda-within-och-between-subjects-d]]
- [[cheung-slavin-2-1-forhallande-forskarkonstruerade-matt-obalanserat-underlag]]
- [[liten-stickprov-ger-uppblasta-effekter-slavin-smith]]
- [[abrami-2015-realistisk-effektstorlek-kritiskt-tankande-undervisning]]
- [[blindflacken-fungerar-evidenstaxonomin-som-kognitiv-stottning-hypotes]] - HYPOTES, bro till [[MOC - Lärandevetenskap och kognition]]

**Historiens egen evidenslogik och Gy25**
- [[ingen-historisk-evidenstypologi-anvander-jamforande-korrelativt-kausalt]]
- [[gy25-tillater-integrerad-kallkritik-kraver-den-inte]] - "ska integreras" och "funktionell källkritik" finns inte hos Skolverket
- [[72-100-timmar-historia-ar-gy11-data-inte-gy25]]
- [[wineburgs-triad-kommer-fran-tva-artiklar-inte-en]]
- [[droysens-trikotomi-ar-inte-en-ren-trikotomi]]
- [[weibullkriteriernas-datering-haller-polemikramen-gor-det-inte]]
- [[lonnroth-inte-englund-identifierade-weibullskolans-blinda-flack]]
- [[primar-sekundarkalla-argumentet-star-i-ett-medlemsmagasin]]
- [[rosenlunds-tvangstroja-ar-en-essa-inte-en-studie]]
- [[svensk-kallkritik-och-anglosaxiskt-historiskt-tankande-ar-tva-olika-projekt]] - RESONEMANG

**Vad som faktiskt fungerar för historiskt evidensresonemang**
- [[reismans-och-wilkes-effekter-visar-att-skepsis-mot-faltet-var-for-hard]]
- [[nygren-efimova-2025-en-enda-skola-ingen-direkt-eftermatning]]
- [[de-la-paz-tre-studier-som-inte-far-blandas-ihop]]
- [[det-cirkulerar-att-fältet-saknar-rct-fast-en-finns]]
- [[marino-2022-historiker-korroborerar-opalitliga-kallor-forkastar-dem-inte]]
- [[doströskeln-mellan-korta-och-uthålliga-källkritikinsatser-är-fältets-öppna-fråga]] - RESONEMANG
- [[skolforskningsinstitutet-2023-02-saknar-effektstorlekar-andrahand]] - ANDRAHAND
- [[fjarrtransfer-forsvinner-bara-efter-kontroll-for-placebo-sala-gobet]]
- [[willingham-kritiskt-tankande-svart-inte-omojligt]]

---

## Sources

Råkällor ingestade till `wiki/sources/` är organiserade i sessionsmappar (datum + tema). Varje sessionsmapp innehåller också en `CHANGELOG - Document Analysis [datum].md` som dokumenterar källan och extraktionsprocessen.

Nya källor: lägg i `raw/articles/`, `raw/books/` eller `raw/inbox/` och säg `/ingest`.

---

## Statistics

**Alla siffror nedan är räknade mot disk 2026-08-03.** De är en mätning med datum, inte ett påstående om nuet - står datumet långt tillbaka ska siffrorna misstros och räknas om, inte citeras.

**Definition (sedan 2026-07-28):** *Total wiki pages* = alla `.md` i `wiki/` utom `_templates/` och `README.md`. Summan är internt konsistent: 18 + 17 + 820 + 51 = 906.

| Metric | Count |
|--------|-------|
| Total wiki pages | 906 |
| Concepts (permanenta) | 18 |
| Topics (MOC:er och synteser) | 17 |
| Source sessions | 42 |
| Source notes (exkl. changelogs) | 820 |
| Sessionschangelogs i `wiki/sources/` | 51 |
| Sessions med egen MOC | 34 av 42 |
| Räknat mot disk | 2026-08-03 |

**2026-08-03:** sessionen `2026-08-03 Historiskt evidensresonemang` tillkom (33 noter + 3 changelogar, +1 källsession). Den passerar 15-noterströskeln för egen MOC, men mappas mot den befintliga [[MOC - Historiedidaktik och kontroversiella frågor]] i stället för att föreslås som ny - se sessionens entry ovan under "Wiki Pages by Session". Ökningen i "Sessions med egen MOC" (33→34 av 41→42) beror på just denna mappning.

### Kända lint-problem (oåtgärdade)

Mätt 2026-07-27 över 810 wiki-filer och 7 223 wikilänkar (länkkällor: `wiki/`, `index.md`, `Hem.md`, `log.md`, `CHANGELOG.md`).

- 448 wikilänkar pekar på sidor som inte finns, fördelat på 246 unika mål. Övervägande delen är dubbletter mellan svensk titel och kebab-version av samma sida (t.ex. `Fem strategier för formativ bedömning - Wiliam och Leahy`, 10 träffar). Åtgärdas bäst med en alias-runda, inte sida för sida.
- 27 orphans (wiki-sidor utan en enda inkommande länk).
- `MOC - Master Navigation` är fortfarande på template-stadiet (placeholders `[[Your Latest Note]]`, refererar mappen `02-Permanent/` som inte finns).
- Två sessioner (2026-04-13, 2026-05-06) använder svenska titlar istället för schemats kebab-konvention. Det är huvudkällan till dubblettlänkarna ovan.

Tidigare noterat och åtgärdat 2026-07-27 (Batch B): `_SAMPLE - Permanent Note Template.md` låg felplacerad i `wiki/concepts/` och ligger nu i `meta/archive/mallrester/` (`wiki/_templates/` hade redan en aktuell mall); `wiki/concepts/README.md` var mallboilerplate som pekade på fantommappar och är omskriven.
