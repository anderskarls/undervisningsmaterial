---
type: wiki-log
purpose: Append-only chronological record of wiki operations
---

# Wiki Log

Chronological record of all wiki operations - ingests, queries, lint passes.
Each entry uses a parseable prefix: `## [YYYY-MM-DD] type | Description`

Filter with: `grep "^## \[" log.md | tail -10`

---
## [2026-07-11] connection-discovery | Escape rooms mot vaultet (SDT, CLT, aktivering, historiedidaktik)

**Trigger:** Uppföljande connection-discovery-session på de 22 nya escape room-noterna (`wiki/sources/2026-07-11 Designa escaperooms/`) mot resten av vaultet, efter reindexering av FAISS (1113 noter, 9894 chunks).

**Kopplingar tillagda:** 19 distinkta nya wikilänk-par mellan escape room-domänen och fem andra domäner - SDT/motivation (autonomistöd+struktur, agentiskt engagemang, ledtrådssystem), CLT/multimedia (seductive details/coherence-principen ↔ "chocolate-covered broccoli"), aktivering/formativ bedömning (Freeman sweet spot, mini-whiteboards samplingsproblem, Howe equity), historiedidaktik (andra ordningens begrepp ↔ karaktärsperspektiv) samt ett tredje ben i det redan kända mönstret "motivations-/domänpåståenden replikerar sämst i SO/humaniora" ([[larparadoxen-escape-rooms-motivation-upp-betyg-oforandrat]] ↔ [[produktivt-misslyckande-replikerar-inte-i-samhallsvetenskap]] ↔ [[vad-make-it-stick-fick-ratt-och-vad-som-overspelats]]).

**Filer redigerade:** 25 (8 nya sessionsnoter berikade med relaterat-avsnitt + resonemang; 15 befintliga sidor fick backlänkar och förklarande stycken; 2 MOC:er - [[MOC - Elevmotivation och engagemang]] fick ny sektion 9, [[MOC - Lärandevetenskap och kognition]] fick tillämpat CLT-exempel).

**Mest värdefulla fyndet:** Escape room-fältets egen kritik ("svag teoretisk grund", Vorderobermeier 2024) kan delvis åtgärdas genom att låna vaultets befintliga, djupare SDT- och CLT-domäner - fältet behöver inte ny teori, det behöver läsa vaultets redan existerande.

**MOC-beslut:** Ingen ny MOC skapad för escape rooms trots 22 noter (över 15-tröskeln) - domänen är en tillämpad fallstudie som hör hemma i befintliga MOC:er (Elevmotivation, Lärandevetenskap, Bedömning), inte en egen kunskapsdomän. Motivering i detaljerad changelog.

**Detaljerad changelog:** [[CHANGELOG - Connection Discovery 2026-07-11]]

## [2026-07-11] ingest | Educational Escape Rooms Research Report - ny domän extraherad

**Trigger:** Extraktion av forskningsrapport `resources/Educational-Escape-Rooms-Research-Report-2026-07-11.md` (27 källor, 2023-2026-fokus) till sessionsmapp `wiki/sources/2026-07-11 Designa escaperooms/`.

**Kunskapsbaskontextualisering:** Ingen befintlig sida om escape rooms i vaultet. Angränsande domäner genomsökta och korslänkade: gamification (`2026-04-11 Pedagogiska appar`), simuleringar/rollspel i samhällskunskap (`2026-03-07 Pedagogisk forskning`), spelbaserat lärande mot desinformation (`2026-03-22 Källkritik`), designteori (constructive alignment, backward design), historisk empati (`2026-04-21 Historiedidaktik`), lärandevetenskapens replikationsmönster (`2026-06-08 Make It Stick`).

**Åtgärd:** 22 atomära noter skapade, samtliga med `type: source`, `created_by: claude-fable-5`, källcitering och länk till forskningsrapporten. Täcker sex designramverk (escapED, Star Model, Room2Educ8, CREATE, Generisk flernivåstruktur, Socio-konstruktivistiskt ramverk) + konvergerad niostegsprocess; metaanalytisk evidens (d=1,4/g=0,86/SMD 0,84-4,91, I²=95,5%, svag teoretisk grund, debriefing-gap <40%); pusseldesign (taxonomi, Bloom-mappning/"chocolate-covered broccoli", ledtrådssystem, format); ämnesspecifikt historia/samhällskunskap (Chen et al. 2025 civics, karaktärsperspektiv-narrativ, tunn peer-granskad evidens); formativ bedömning; kontrariska fynd (SEER 2026 "lärparadoxen", tidskostnad/brus); praktisk klassrumslogistik.

**Deduplicering:** 0 dubbletter - helt ny domän. 6 namngivna befintliga sidor kontrollerade och korslänkade utan duplicering: [[gamification-kombinationer-kan-backfire]], [[nyhetseffekten-kort-gamification-slar-lang]], [[eu-rollspel-vad-forskning-faktiskt-visar]], [[inokulationsspel-klassrumsverktyg-oversikt]], [[constructive-alignment-biggs]], [[vad-make-it-stick-fick-ratt-och-vad-som-overspelats]]. Inga befintliga sidor uppdaterade (inga motsägelser/överlapp).

**Epistemisk märkning:** Två noter explicit märkta hypotes/enskild studie ([[karaktarsperspektiv-som-narrativ-teknik-i-historia-escape-rooms]], [[larparadoxen-escape-rooms-motivation-upp-betyg-oforandrat]]).

**Verifierat:** Sessionschangelog skapad i sessionsmappen. Master CHANGELOG.md uppdaterad med ny sektion `## 2026-07`. Ingen reindex körd i denna session (rekommenderas innan nästa sökning i domänen).


## [2026-06-16] maintenance | Fristående kodbaser flyttade ut ur vaultet

**Trigger:** Forts. vaultstädning - kod ska bo lokalt men utanför vaultet. Vald omfattning: flytta survey-platform + kokboks-mcp till `C:\Users\andkar001\Claude\` (där användarens kodprojekt redan bor); städa bara vaultets kopior, rör inte externa körande kopior.

**Upptäckt under arbetet:** survey-platform fanns i FYRA kopior på maskinen - 2 i vaultet (`resources/survey-platform` med .git + körde MCP PID 12004; `Kod/survey-platform` stale subset utan .git) och 2 externa (`Claude/survey-platform-gh` med .git; `Claude/survey-platform-main` utan .git, körde MCP PID 17112 för ett ANNAT projekt). De externa lämnades orörda.

**Åtgärd:**
- `kokboks-mcp` → `C:\Users\andkar001\Claude\kokboks-mcp` (ren flytt, ingen lås, inga referenser).
- Stoppade vaultets survey-MCP (PID 12004) för att släppa Windows-fillåset, flyttade `resources/survey-platform` (git-klonen) → `C:\Users\andkar001\Claude\survey-platform`. .git + mcp-server/dist intakt.
- Tog bort stale `Kod/survey-platform` + tomma `Kod/`.
- Pekade om `.mcp.json`: survey-server nu från nya platsen.
- La in `permissions.additionalDirectories` i `.claude/settings.local.json` (survey-platform + kokboks-mcp) så de når från vault-sessionen utan `/add-dir`.

**Verifierat:** ny survey-plats har .git + dist/server.js. Vault-kopiorna borta. MCP-servern kopplades ner vid kill - startas om från nya platsen vid nästa Claude-omstart (användaren bör starta om + verifiera survey-MCP). Ingen reindex behövs (mapparna var redan exkluderade/utanför trädet).

**Kvar:** `cornelius-dashboard` + `obsidianplugin` lämnade kvar (användarens val). 4-kopie-röran för survey ej helt löst - externa `-gh`/`-main` kvar, ej konsoliderade (eget beslut). `ADMIN_API_KEY.md` fortf. indexerad (öppet sen tidigare).

## [2026-06-16] maintenance | Sökindexet rensat - kod/dependencies ej längre inlästa

**Trigger:** Användaren ville städa vaultet: arbetsdokument/wiki/beslut ska indexeras, kodbaser får ligga lokalt men inte läsas in. Vald omfattning: bara fixa indexet (inga filflyttar); `output/` förblir indexerat.

**Diagnos:** FAISS-indexet hade 27 523 chunks varav 12 690 (46 %) var `node_modules` och bara ~25 % faktisk kunskap. `EXCLUDED_FOLDERS` exkluderade tidigare bara `templates`, `.obsidian`, `.trash`.

**Åtgärd:** Utökade `excluded_folders` i `resources/local-brain-search/memory_config.py` (backup: `memory_config.py.bak`) med: `node_modules`, `.tmp`, `.claude`, `.agents`, `.claude-marketplaces`, `.dev`, `resources`, `Kod`, `cornelius-dashboard`, `kokboks-mcp`, `obsidianplugin`. Reindexerade.

**Resultat:** 27 523 → 9 344 chunks. 0 node_modules kvar. Indexet domineras nu av wiki (5 915), output (2 208), meta (595), raw (438). Krockkoll gjord: inga av de exkluderade namnen kolliderar med legitima undermappar i wiki/output (node_modules under output/lessons var pptxgenjs-brus och togs bort, lektions-md kvar).

**Öppet:** `ADMIN_API_KEY.md` ligger i klartext i vault-roten och är fortfarande indexerad (1 chunk) - rekommenderad uppföljning men utanför vald omfattning denna gång. Fysisk omflyttning av fristående kodbaser (survey-platform, kokboks-mcp, plugins) ej gjord - separat beslut kvar.

## [2026-06-16] output | Läsårsskiss Historia 1a1 (45 h) skapad

**Trigger:** Användaren: "Skapa en läsårsskiss för kursen Historia 1a1, kursplanen ligger i raw/inbox. Kursen innehåller 45h."

**Åtgärd:** `output/Idéer/Läsårsskiss Hi 1a1 - 45 timmar, epokresa till nutid.md`. Sex moment + intro + buffert byggda på kursplanen (SKOLFS 2023:130, HIST1A10X), ramverket och wikin. Designkärna: 1a1 är inte en nedbantad 1b - halva tiden men spannet går till nutid, yrkesprogramsantagande, och bara de två namngivna begreppen (orsak/konsekvens, kontinuitet/förändring) som ryggrad. Tyngdpunkt flyttad till moderniteten (industrialisering, demokratisering, globala maktprocesser, minoriteter).

**Wikiluckor flaggade:** nationella minoriteter/samer/antisemitism/antiziganism (moment 5, störst - obligatoriskt 1a1-innehåll, ~noll täckning), 1900-talet (moment 3-4), jordbrukets utveckling. Källuppbyggnad föreslagen som nästa steg.

**Verifierat:** inga em-dashes, svensk UTF-8, wikilänkar mot befintliga noter där de finns + forward-länkar i luckavsnittet. Output-artefakt - ingen återskrivning till wikin. Fyra öppna designval lämnade till användaren.

## [2026-06-15] lint | Korslänkning av tre bryggkluster i de två nya epok-domänerna

**Trigger:** Lint-pass efter 12-boksbatchen visade 108/152 svagt korslänkade noter (nås bara via session+MOC). Användaren valde att knyta de tre högvärda bryggklustren.

**Åtgärd:** 14 nya bidirektionella korslänkar över 8 noter och 6 sessioner:
- **Offentlighet/informationssamhälle:** [[mokyr-sjunkande-atkomstkostnader-till-kunskap]] ↔ [[tryckpressen-som-kunskapens-infrastruktur]] (Wootton) ↔ [[paris-som-tidigt-informationssamhalle-multimedia-1748-1789]] (Darnton) - samma tryck-/sällskaps-infrastruktur sedd från ekonomi, vetenskap och politik.
- **Frihet byggd på slaveri:** [[upplysningen-och-slaveriet-spannungen]] (Robertson) ↔ [[taylor-slaveriets-centralitet-i-revolutionen]] + tråd till antikens [[frihet-eleutheria-grekiskt-nyckelbegrepp-lane-fox]].
- **Vetenskaplig kunskap blir ekonomisk kraft:** [[mokyr-useful-knowledge-propositionell-vs-preskriptiv]] ↔ [[experimentbegreppets-uppkomst]] + [[faktum-som-ny-epistemologisk-kategori]] (Wootton) + [[shapin-experimentet-som-social-teknologi]].

**Verifierat:** alla 11 länkmål resolver, inga em-dashes, updated_by bumpad till claude-opus-4-8 på de 8 noterna. FAISS omindexerad.

**Kvarstår (erbjudet, ej utfört):** två concept-sidor (Offentlighetens uppkomst; Frihet och slaveri som motsägelse); ~94 noter förblir nav-och-eker (väntad form för källnoter).

## [2026-06-15] ingest | Industriella revolutionen kluster D: Mokyr (1 hel bok) - 12-boksbatchen klar

**Trigger:** Fjärde och sista klustret i 12-boksbatchen (användarens "kör kluster D"). Industriella revolutionen, moment 7 i Hi 1b. Sluter trepartsparet Malm/Hobsbawm/Mokyr.

**Råkälla och extraktion:** Via `resources/epub_extract.py` -> `resources/_extracts/mokyr-enlightened-economy/`:
- Joel Mokyr, *The Enlightened Economy: An Economic History of Britain 1700-1850* (2009) - 260 292 ord (intro + kap 1-19; references hoppade över)

**Läsning:** 1 document-insight-extractor-agent (Sonnet 4.6).

**Sidor skapade (12 atomära + 1 sessionschangelog):**
- `wiki/sources/2026-06-15 The Enlightened Economy (Mokyr)/` - 12 noter (industrial enlightenment, useful knowledge, baconska programmet, savants/fabricants, förbättringskultur, institutioner/rent-seeking, varför inte Kina/Frankrike, gradvis inte plötslig, ekonomiska reformer, levnadsstandard + kontrastnoten mokyr-vs-malm)

**MOC fylld:** [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] sektion 4 (industriella revolutionen) ifylld - Mokyr som idé-/kulturförklarande tredje position. Forskningsluckor uppdaterade (Allen + Beckert kvarstår), Mokyr-sessionen tillagd i källsessioner.

**Befintliga sidor uppdaterade (4 korslänkar):** malm-fossil-capital (idé-motpositionen), hobsbawm-industriella-revolutionen-bomull-och-kapital (trepartsparet konkretiserat), upplysningens-vetenskapliga-arv-newton-och-empirismen (bryggan framåt: upplysning -> industri), laslista-nya-tiden (Mokyr markerad INGESTAD).

**Nyckelfynd:** Mokyrs "industrial enlightenment" är den idé-/kulturförklarande tredje positionen - upplysningens nyttiga kunskap som motor, mot Malms arbetskontroll och Hobsbawms struktur. Kontrastnoten [[mokyr-vs-malm-ideer-mot-arbetskontroll]] = färdig SAC. Trepartsparet Malm/Hobsbawm/Mokyr nu komplett - samma trepositionslogik som Roms fall.

**Metodnotering:** Subagenten (1 st) auto-appendade en mojibake-post till master-CHANGELOG.md (saknade å/ä/ö, fel mappsökväg utan parentes, angav 11 noter trots 12 skapade) - ersatt med ren konsoliderad post med korrekt statistik.

**Statistik:** source sessions 37 -> 38; source notes 698 -> 710; MOCs oförändrat 13; wiki-sidor 733 -> 745.

**12-boksbatchen klar:** Kluster A (Restall, Townsend, Rediker), B (Wootton, Shapin, Robertson), C (Taylor, Wood, Darnton, Tackett, Hobsbawm), D (Mokyr). 2 nya epok-MOC:er, 12 böcker, ~163 nya noter. Ljudboken *The Fall of Rome* (.m4b) lämnad orörd (kan ej textextraheras).

## [2026-06-15] ingest | Revolutionernas tidsålder kluster C: Taylor, Wood, Darnton, Tackett, Hobsbawm (5 hela böcker)

**Trigger:** Tredje klustret i 12-boksbatchen (användarens "kör hela klustret"). Revolutionernas tidsålder, moment 6 i Hi 1b. Batchens största kluster.

**Råkällor och extraktion:** Via `resources/epub_extract.py` -> `resources/_extracts/`:
- Alan Taylor, *American Revolutions: A Continental History* (2016) - 220 580 ord
- Gordon S. Wood, *The Radicalism of the American Revolution* (1992) - 184 622 ord
- Robert Darnton, *The Revolutionary Temper: Paris 1748-1789* (2023) - 208 328 ord
- Timothy Tackett, *The Coming of the Terror in the French Revolution* (2015) - 184 814 ord
- Eric Hobsbawm, *The Age of Revolution 1789-1848* (1962) - 147 077 ord

**Läsning:** 5 parallella document-insight-extractor-agenter (Sonnet 4.6).

**Sidor skapade (63 atomära + 5 sessionschangelogs):**
- `wiki/sources/2026-06-15 American Revolutions (Taylor)/` - 13 noter (pluralis-tesen, inbördeskrig, slaveri, urfolk)
- `wiki/sources/2026-06-15 The Radicalism of the American Revolution (Wood)/` - 12 noter (radikal social transformation, monarki->demokrati)
- `wiki/sources/2026-06-15 The Revolutionary Temper (Darnton)/` - 13 noter (mentalitet, opinion, desakralisering före 1789)
- `wiki/sources/2026-06-15 The Coming of the Terror (Tackett)/` - 12 noter (skräckväldet som process, emotion/kontingens)
- `wiki/sources/2026-06-15 The Age of Revolution (Hobsbawm)/` - 13 noter (dubbelrevolutionen, marxistisk syntes)

**Ny MOC:** [[MOC - Revolutionernas tidsålder (amerikanska, franska, industriella)]] - andra epok-MOC:en i batchen, syskon till [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]]. Sektion 1-3 fyllda; sektion 4 (industri) reserverad för kluster D.

**Befintliga sidor uppdaterade (8 bakåtlänkar):** upplysningen-och-revolutionerna-bryggorna-framat, frihet-eleutheria (Lane Fox), historiematerialism-som-metod, malm-fossil-capital, counterfactuals-tay-jeong, fran-detektion-till-navigation, dan-jones-vs-wickham-teleologi, laslista-nya-tiden (5 böcker markerade).

**Nyckelfynd:** Två färdiga kontrastpar - Taylor mot Wood (amerikanska rev: blodig vs radikal = SAC) och Darnton -> Tackett (franska rev: tänkbar -> blodig = före/efter). Hobsbawm = marxistisk makroram (dubbelrevolutionen) som binder C till D och ger historiesyns-par mot Wood (materialism vs idealism) och tredje teleologirösten mot Wickham.

**Metodnotering:** De fem subagenterna krockade om master-CHANGELOG.md (skrev samtidigt); deras poster konsoliderades manuellt till en ren batch-post. Tre agenter skrev "tidsalder" utan å i MOC-länken - normaliserat till kanonisk "tidsålder".

**Statistik:** source sessions 32 -> 37; source notes 635 -> 698; MOCs 12 -> 13; wiki-sidor 669 -> 733.

**Kvarstår:** kluster D (Mokyr, industriella revolutionen) - fyller sektion 4 i revolutions-MOC:en och sluter trepartsparet Malm/Hobsbawm/Mokyr.

## [2026-06-15] ingest | Tidigmodern-batch kluster B: Wootton, Shapin, Robertson (3 hela böcker)

**Trigger:** Andra klustret i 12-boksbatchen (användarens "fortsätt"). Vetenskaplig revolution + upplysning, moment 5-6 i Hi 1b.

**Råkällor och extraktion:** Via `resources/epub_extract.py` -> `resources/_extracts/`:
- David Wootton, *The Invention of Science* (2015) - 306 699 ord
- Steven Shapin, *The Scientific Revolution* (1996) - 66 162 ord
- Ritchie Robertson, *The Enlightenment: The Pursuit of Happiness 1680-1790* (2020) - 462 745 ord (läst strategiskt pga storlek)

**Läsning:** 3 parallella document-insight-extractor-agenter (Sonnet 4.6).

**Sidor skapade (40 atomära + 3 sessionschangelogs):**
- `wiki/sources/2026-06-15 The Invention of Science (Wootton)/` - 14 noter (begreppen som skapade vetenskapen; realism mot konstruktivism)
- `wiki/sources/2026-06-15 The Scientific Revolution (Shapin)/` - 12 noter (kunskap som social produkt; "det fanns ingen")
- `wiki/sources/2026-06-15 The Enlightenment (Robertson)/` - 14 noter (lyckan, förnuft+känsla, försvaret mot kritikerna)

**MOC utvidgad:** [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] sektion 4 (Wootton+Shapin) och 5 (Robertson) fyllda; MOC:en nu komplett för kluster A+B.

**Befintliga sidor uppdaterade (6 bakåtlänkar):** tryckpressen-som-informationsrevolution, aristoteles-kom-via-islamiska, religiosa-institutioner-bevarade, medeltida-kallor-ar-retorik, liedman-marx-som-upplysningsarvtagare, laslista-nya-tiden (Wootton/Shapin/Robertson markerade ingestade).

**Nyckelfynd:** Wootton/Shapin = färdig vetenskapshistorisk SAC (realism mot konstruktivism, "fanns den vetenskapliga revolutionen?"). Robertson bryggar upplysningen bakåt till slaveriet (Jefferson-paradoxen) och framåt till revolutionerna; försvarar epoken mot Dialectic of Enlightenment.

**Statistik:** source sessions 29 -> 32; source notes 595 -> 635; wiki-sidor 629 -> 669.

**Kvarstår:** kluster C (Hobsbawm, Darnton, Tackett, Taylor, Wood), D (Mokyr).

## [2026-06-15] ingest | Tidigmodern-batch kluster A: Restall, Townsend, Rediker (3 hela böcker)

**Trigger:** Användarbegäran "nya böcker i raw-mappen, bearbeta dem". 12 nya EPUB som mappar mot [[laslista-nya-tiden-till-industriella-revolutionen]]. Bearbetas klustervis med avstämning (användarval); detta är kluster A (erövring/kolonisation/slaveri), moment 5 i Hi 1b.

**Råkällor och extraktion:** Via `resources/epub_extract.py` -> `resources/_extracts/`:
- Matthew Restall, *Seven Myths of the Spanish Conquest* (2003) - 98 193 ord
- Camilla Townsend, *Fifth Sun: A New History of the Aztecs* (2019) - 143 089 ord
- Marcus Rediker, *The Slave Ship: A Human History* (2007) - 161 302 ord

**Läsning:** 3 parallella document-insight-extractor-agenter (en per bok, körda på Sonnet 4.6).

**Sidor skapade (37 atomära + 3 sessionschangelogs):**
- `wiki/sources/2026-06-15 Seven Myths of the Spanish Conquest (Restall)/` - 12 noter (de 7 myterna, probanza-källkritik, La Malinche-historiebruk, avgjort-vs-öppet)
- `wiki/sources/2026-06-15 Fifth Sun (Townsend)/` - 12 noter (nahuatl-annalerna, Quetzalcoatl-myten, Malintzin, Nahua-agens, dekolonisering)
- `wiki/sources/2026-06-15 The Slave Ship (Rediker)/` - 13 noter (skeppet som maskin, ras tillverkas ombord, historia underifrån, Brooks-diagrammet, tidig kapitalism)

**Ny MOC:** [[MOC - Tidigmodern tid (erövring, vetenskap, upplysning)]] - tvådelad MOC-struktur (användarval): denna täcker kluster A+B; syskon-MOC för revolutionerna (C+D) skapas vid kluster C. Sektion 1-3 fyllda; sektion 4 (vetenskap/upplysning) reserverad för kluster B.

**Befintliga sidor uppdaterade (9 bakåtlänkar):** nordgren-decolonize, kvinnors-agens-syns, medeltida-kallor-ar-retorik, historiebruk-moralisk-roll, malm-fossil-capital, historiematerialism-som-metod, rasbegreppets-medeltida-rotter, periodisering-ar-ideologisk, laslista-nya-tiden (Restall/Townsend/Rediker markerade ingestade).

**Nyckelfynd:** Restall + Townsend konvergerar oberoende (gudamyten = efterhandskonstruktion, Malintzin = aktör, erövringen = inhemskt inbördeskrig + epidemi). Tre källkritikfall (probanza, nahuatl-annaler, sjömannen-som-vittne) förstärker den medeltida källkritiknoten. Rediker bryggar slaveriet till Malm/historiematerialism och bakåt till antikt slaveri.

**Statistik:** source sessions 26 -> 29; source notes 558 -> 595; MOCs 11 -> 12; wiki-sidor 591 -> 629.

**Kvarstår i batchen:** kluster B (Wootton, Shapin, Robertson), C (Hobsbawm, Darnton, Tackett, Taylor, Wood), D (Mokyr). Ej bearbetbar: `The Fall of Rome...m4b` (ljudbok).

## [2026-06-10] create | Läslista ämnesdidaktik (att undervisa i SO-ämnena)
- Användarbegäran: läslista på böcker om att undervisa i samhällskunskap och i historia.
- Skapade `wiki/concepts/laslista-att-undervisa-i-samhallskunskap-och-historia.md` - systerlista till innehållsläslistorna; ämnesdidaktik (historia + samhällskunskap + tvärgående powerful knowledge). Svenskt (Karlsson & Zander, Ammert, Nordgren, Ekendahl/Nohagen/Sandahl, Långström & Virta, Englund) + internationellt (Wineburg, Seixas & Morton, Barton & Levstik, Hess, Hess & McAvoy, Parker, Westheimer, Biesta, Young & Lambert).
- Förankrad i wikins befintliga författartäckning (Hess, Wineburg, Rüsen, Nordgren, deliberation) via 5 MOC-länkar + nyckelnoter.
- Uppdaterade `index.md` (Concepts 15 -> 16; sidor -> 590).

## [2026-06-10] ingest | Antiken-batch: fyra facklitterära standardverk (Ober, Lane Fox, Beard, Heather)

**Trigger:** Användarbegäran "nya böcker i /raw/books som jag vill att du ska bearbeta och föra in i wikin". Fyra ej tidigare ingestade böcker, alla om antiken och alla på den befintliga [[laslista-antikens-grekland-och-rom]]. Bearbetade som en sammanhållen batch -> ny domän.

**Råkällor och extraktion:** Alla via `resources/epub_extract.py` -> `.tmp/`:
- Josiah Ober, *The Rise and Fall of Classical Greece* (2015) - 177 945 ord
- Robin Lane Fox, *The Classical World: An Epic History from Homer to Hadrian* (2005) - 248 532 ord
- Mary Beard, *SPQR: A History of Ancient Rome* (2015) - 185 111 ord
- Peter Heather, *The Fall of the Roman Empire* (2005) - 228 834 ord

**Läsning:** 12 parallella kapitelkluster-agenter (3 per bok), körda i två vågor för ren korsboks-dedup: Våg 1 disjunkta domäner (Heather senromerska fall + Ober grekisk ekonomi); Våg 2 med kännedom om Våg 1 (Beard bred Rom + Lane Fox förbindande svep, instruerade att undvika dubblering). En Beard-läsagent dog på ett API-socketfel efter att ha skrivit sina fyra noter men före sin manifest - alla noter kompletta och verifierade.

**Sidor skapade (52 atomära + 4 sessionschangelogs):**
- `wiki/sources/2026-06-10 The Rise and Fall of Classical Greece (Ober)/` - 12 noter (efflorescens/metod, institutioner, fall/eftermäle)
- `wiki/sources/2026-06-10 The Classical World (Lane Fox)/` - 13 noter (tre linser frihet/rättvisa/lyx, Alexander->republik, kejsartid/syntes)
- `wiki/sources/2026-06-10 SPQR (Beard)/` - 12 noter (ursprung/myt/källkritik, republik/expansion/slaveri, kejsartid/212)
- `wiki/sources/2026-06-10 The Fall of the Roman Empire (Heather)/` - 15 noter (imperiets natur/barbarer/metod, gotiska krisen, hunnerna/kollaps)

**Ny MOC:** [[MOC - Antiken (Grekland och Rom)]] - ny domän (antikens sakinnehåll), tröskel 15+ passerad mångfaldigt i en batch. Organiserad tematiskt (12 sektioner) med fyra linser: ekonomi/institutioner (Ober), kultur/värden (Lane Fox), källkritik/Rom (Beard), katastrof/fall (Heather). Positionerad som förgångare till [[MOC - Medeltiden (innehåll och historiebruk)]].

**Befintliga sidor uppdaterade:** se separat reciprok-länk-svep nedan i denna entry. [[laslista-antikens-grekland-och-rom]] (de fyra böckerna nu ingestade), [[wickham-tredje-position-varken-katastrof-eller-kontinuitet]] (Ward-Perkins-luckan fylld av Heather), [[rom-foll-inte-kontinuitet-som-tes]] och [[demokratin-ar-medeltida]] (motvikter/spänningar), [[MOC - Medeltiden (innehåll och historiebruk)]] (brygga), [[medeltida-kallor-ar-retorik-inte-fonster]] (Beards källsyn).

**Huvudtes:** *Antiken får sitt sakinnehåll i wikin genom fyra kompletterande linser. Den enskilt viktigaste bryggan: Heather är den katastrofröst (Rom föll på riktigt, våldsamt, men av yttre orsak) som tidigare flaggats som lucka när Ward-Perkins-ljudboken inte kunde extraheras - nu står den färdiga trepositionsdebatten katastrof/kontinuitet/varken-eller redo för klassrummet, och antik- och medeltidsdomänen möts i frågan om Roms fall.*

**Top kontraintuitivt:** Rom skapade själv sin barbarfiende (Heather); ett politiskt splittrat Grekland blev rikt just genom splittringen (Ober); Beard slutar 212 e.Kr., inte 476, för medborgarskapet var Roms distinkta uppfinning; "barbar" var en romersk ideologisk konstruktion, inte en beskrivning.

**Statistik:** wiki-sidor 532 -> 589; MOC 10 -> 11; source sessions 22 -> 26; source notes 506 -> 558.

**Återstår:** reciproka korslänkar i befintliga medeltids-/historiedidaktiksidor (görs i denna session); FAISS-reindex (`./resources/local-brain-search/run_index.sh`). Ward-Perkins *The Fall of Rome* (.m4b) kan fortfarande ej textextraheras - flaggad i MOC som lucka (Heather täcker dock katastrofrösten).

---

## [2026-06-09] deep-research | Undervisning på yrkesprogram

**Trigger:** `/deep-research Undervisning på yrkesprogram` (directed mode). Anpassad till vaultens struktur (generisk skill-template antog annan brain).

**Research:** 3 parallella research-specialist-agenter, ~90 källor (tyngdpunkt 2024-2026). Rapporter i `resources/`: systemkontext+Gy25 (A), didaktik/motivation (B), internationell VET (C).

**Sidor skapade (18 atomära + 1 sessionschangelog):** Sessionsmapp `wiki/sources/2026-06-09 Undervisning på yrkesprogram/`. Fördelning: 5 systemkontext (Gy25-struktur, behörighetsreformen 2023, 1a/1b-spårlåsning, dimensionering, genomströmning), 7 didaktik/motivation (motivation kontextuell, infärgning, disciplinär läsning, höga förväntningar/Pygmalion, kognitiv aktivering, satellitlärar-samverkan, APL-medborgarlärande), 6 internationell VET (Billett tredimensionell kunskap, APL-paradoxen, boundary objects, TPP/TSP/ITP, spårning/social reproduktion, framtidskompetens).

**Dedup:** 3 dubbletter undvikna (Möllenborg A-lag/B-lag, deliberativ undervisning x2, ICCS 2022 - redan i vaulten). [[kontrovers-mollenborg-a-lag-b-lag-demokrati]] berikad ("eleverna vill ha mer, inte mindre") + korslänkad i stället för dubblerad.

**MOC skapad:** [[MOC - Undervisning på yrkesprogram]] - samlar 18 nya + 6 tidigare yrkesprogram-noter (passerade 15-tröskeln; tvärgående tema).

**Navigeringsfiler:** index.md (MOC-lista, ny sessionssektion, statistik), log.md, CHANGELOG.md uppdaterade. Deep-research-summary i `meta/changelogs/SESSION SUMMARY - Deep Research Yrkesprogram 2026-06-09.md`.

**Statistik:** source sessions 21 → 22; source notes 488 → 506; MOCs 9 → 10.

**Nästa steg (ej gjort):** index ej re-indexerad i Local Brain Search; artikeluppslag "Samma teori, andra format" föreslaget men ej skrivet.

---

## [2026-06-08] översyn | /planera-moment-skillen + ramverkssynk

**Trigger:** Användarbegäran "översyn av /planera-moment skillen" - fokus teoretisk grund, teknisk konsistens, wiki-koppling.

**Verifiering (a):** Skillen (`resources/planeramoment`) är en trogen kodning av det aktiva ramverket [[ramverk-momentdesign-utkast-3]]. Driften låg i wiki-källan (som låg efter skillen) och i index (saknade utkast-3) - inte i skillen.

**Wiki-ändringar:**
- [[ramverk-momentdesign-utkast-3]] synkad med skillens tre förfiningar (Kontextprimat kat 4, M-iii typ-mönster, M-ii turn-disciplin) + provenance-note.
- Tre nya concept-noter (designteoretisk grund): [[backward-design-wiggins-mctighe]], [[constructive-alignment-biggs]], [[understanding-how-we-learn-sex-strategier]].
- [[MOC - Momentplaneringsramverket]] - ny subsektion "Designteoretisk grund" + anchor-noterna; index.md uppdaterad (utkast-3 inlagd, concepts 12→15).

**Citatgenomgång (b):** Ramverkets empiriska claims välförankrade i wikin (Hess, Pyke, Mera, Felton, specificitetslagen m.fl.); tre kanoniska designteori-verk saknade noter → täcks nu av anchor-noterna.

**Skill-ändringar (utanför vaultet, `resources/planeramoment`):** SKILL.md-beskrivning (Gy11→Gy11/Gy25, Rosenshine→Momentplaneringsramverket), teoretisk härkomst + meta-mönster i pedagogik-ramverk.md, encoding-svep (å/ä/ö) i 8 referensfiler, Windows-sökväg `/home/anders/` → `C:\Undervisningsmaterial\`, Gy-default i State Dependencies.

**Deferred:** skill-trion F2 (`/logga-lektion`) + F3 (`/reflektera-moment`) ej byggda - mönsterlarmets exekverings-override-halva därför inert. Flaggat, ej åtgärdat.

---

## [2026-06-08] ingest | The Bright Ages (Gabriele & Perry 2021) - hel bok

**Trigger:** Användarbegäran "läs in en bok... mina hela boken". Bok vald av tre EPUB-kandidater för matchning mot momentet "Den mörka medeltiden" (Hi 1b).

**Råkälla:** `raw/books/The Bright Ages_ ... .epub`. EPUB-extraktion via egen Python-stdlib-extraktor (`resources/epub_extract.py`) eftersom ebook-mcp/pandoc/calibre saknades. 28 kapitelfiler i `raw/books/The Bright Ages - extracted/` (94 028 ord; brödtext ≈ 84 000).

**Sidor skapade (24 atomära + 1 sessionschangelog):** Sessionsmapp `wiki/sources/2026-06-08 The Bright Ages/`.
- Historiografi: [[rom-foll-inte-kontinuitet-som-tes]], [[morka-medeltiden-som-uppfunnen-myt]], [[periodisering-ar-ideologisk]], [[permeabilitet-den-uppkopplade-medeltiden]], [[det-ar-mer-komplicerat-an-sa-historikerns-hallning]]
- Mytspräckning: [[slaget-vid-tours-732-raddade-inte-europa]], [[vikingar-handlade-och-bosatte-inte-bara-rovade]], [[demokratin-ar-medeltida]], [[renassansen-byggde-pa-medeltiden-den-fornekade]], [[belisarius-kontrafaktiskt-540-rom-aterstallt]]
- Religion/våld: [[forsta-korstaget-var-inte-forsvar-mot-islam]], [[apokalyps-betyder-avtackning-inte-slut]], [[just-war-vs-conpelle-intrare-vem-definierar-innanfor]], [[religion-som-praktik-inte-inre-tro]], [[manga-kristendomar-manga-islam-manga-rom]]
- al-Andalus/idéhistoria: [[convivencia-och-reconquista-som-trubbiga-kategorier]], [[aristoteles-kom-via-islamiska-och-judiska-tankare]], [[religiosa-institutioner-bevarade-antikens-vetande]]
- Kön/makt: [[kvinnors-agens-syns-nar-kallorna-las-noga]]
- Digerdöden: [[digerdoden-var-500-ar-tre-kontinenter]], [[medeltida-vetenskapligt-resonemang-om-smitta]], [[syndabockstankande-judeforfoljelse-i-kris]]
- Källkritik/ras: [[medeltida-kallor-ar-retorik-inte-fonster]], [[rasbegreppets-medeltida-rotter]]

**Ny MOC:** [[MOC - Medeltiden (innehåll och historiebruk)]] - ny domän (sakinnehåll), tröskel 15+ passerad i en ingest.

**Befintliga sidor uppdaterade (8):** counterfactuals, historiebruk, nordgren-decolonize, sjolund-ahsberg, kontrovers-far-right, fran-detektion-navigation, racial-capitalism, laslista-medeltiden (korslänkar + `updated`-bump).

**Huvudtes:** *"Den mörka medeltiden" är ett historiebruk, inte en epokbeskrivning - en tom yta dit varje tid projicerar det den inte vill se. Tre bärande teser: kontinuitet ("Rom föll inte"), permeabilitet (uppkopplad värld), historiebruk (Petrarca → kolonialism → vit makt).*

**Top kontraintuitivt:** Slaget vid Tours 732 räddade inte Europa (ett plundringståg); Första korståget var inte defensivt mot islam; digerdöden var 500 år/tre kontinenter (Monica Green/aDNA), inte 1347-50; demokratin är medeltida (kommuner, skrån, Alltinget).

**Motsägelser:** Inga direkta. Förstärker historiebruk/källkritik/counterfactuals. Balanserande motvikt (Ward-Perkins) flaggad som lucka.

**Statistik:** wiki-sidor 421 → 446; MOC 7 → 8; source sessions 15 → 16; concepts oförändrat 11.

---

## [2026-05-21] deep-research | AI-säkra examinationsformer (2024-2026)

**Trigger:** Användarbegäran via `/deep-research AI-säkra Examinationsformer` — full pipeline (research → extract → connect).

**Forskningsrapport:**
- `wiki/sources/2026-05-21 AI-säkra examinationsformer/AI-Sakra-Examinationsformer-Research-Report-2026-05-21.md` — 26 källor 2024-2026; web-search-agent via Gemini-grounding. Sju kontraintuitiva fynd identifierade. 80 %+ källor från 2024-2026.

**Sidor skapade (17 totalt):**
Session-mapp: `wiki/sources/2026-05-21 AI-säkra examinationsformer/`

Atomiska noter (13):
- [[detektionsparadigmets-sammanbrott-2024-2026]] (Sadasivan, MDPI, EyeSift)
- [[ai-detektor-bias-mot-esl-elever]] (Liang)
- [[dawson-validitet-slar-fusk-som-central-fraga]] (Dawson 2024)
- [[corbin-strukturella-vs-diskursiva-bedomningsandringar]] (Talk is cheap 2025)
- [[wicked-problem-ai-bedomning-program-niva]] (Corbin/Bearman 2025)
- [[bearman-evaluative-judgement-genai-tid]] (Bearman 2024)
- [[sydney-tva-fileformulering-secure-open]] (Sydney + TEQSA)
- [[aias-perkins-furze-skala-fem-nivaer]] (AIAS v2 2025)
- [[muntliga-prov-inter-rater-reliabilitet-problem]] (κ 0,17-0,54)
- [[blue-book-renassansen-konstruktdrift]] (USA, konstruktdrift)
- [[processportfolj-checkpoint-samtal-fem-min]] (huvudrekommendation)
- [[hyperkontextualiserad-autentisk-bedomning]] (Kofinas 2025)
- [[henrekson-slutprov-loser-ai-validitet-implicit]] (SOU 2025:18)
- [[nordisk-jamforelse-danmark-norge-sverige-ai-prov]]
- [[ai-som-accommodation-paradox]]
- [[stanford-fuskfrekvens-konstant-2018-2024]]

Syntesnot (1): [[kontraintuitiva-insikter-ai-sakra-examinationer-2026]]

Session-changelog (1): `CHANGELOG - Document Analysis 2026-05-21.md`

**Befintliga sidor uppdaterade:**
- [[MOC - Bedömning och betygssättning]] — ny sektion **7b "AI-säkra examinationsformer - paradigmskifte 2024-2026"** med 17 nya wikilänkar. Forskningsrapport-lista uppdaterad. Sessionsmapp-lista uppdaterad. Total noter 35+ → 50+.
- `index.md` — ny sessions-sektion 2026-05-21; statistik 401 → 418 sidor.

**Nyckelsyntes:** Forskningsfältet 2024-2026 har gjort ett paradigmskifte från detektion till strukturell omdesign. Empiriskt: detektion fungerar inte; två-fileformuleringen (Sydney/TEQSA) är dominerande paradigm; Dawson m.fl. argumenterar att fusk subsumeras under validitet. Equity-paradoxen: AI-säkringsregimer (handskrift, muntligt, detektorer) skadar systematiskt elevgrupper med dokumenterade behov.

**Tvärdomän-bryggor:** Tre länkar mellan ny session och [[MOC - Källkritik och digital kompetens]] (AI-litteracitet), två till [[MOC - Historiedidaktik och kontroversiella frågor]] (andra-ordningens begrepp).

**Forskningsluckor noterade:** Svensk gymnasieforskning på AI-säkra examinationsformer; slutprovens innehållsdesign (SOU 2025:18); inter-rater reliability i svensk kontext; konstruktdrift longitudinellt; equity-aggregering för svenska elevgrupper.

---

## [2026-05-21] synthesis | Frågeappens utvecklingsplan (file-back av query)

**Trigger:** Användarbegäran - läs [[MOC - Design av larappar]] och föreslå hur lärdomarna kan användas för att vidareutveckla den befintliga frågeappen, plus läslista för fördjupning.

**Sidor skapade:**
- `wiki/topics/fragappens-utvecklingsplan-2026-05.md` (8 sektioner A-H: quick wins, algoritm-nivå, UI-disciplin, anti-patterns, juridisk baseline, implementationsordning, läslista, öppna frågor)

**Källor:**
- `wiki/topics/MOC - Design av larappar.md` (alla 25 källsidor + 7 korsdomänbryggor refererade)
- Användarens befintliga app (kontext från `raw/personal-notes/Att göra.md`)

**Nyckelsyntes:** Förslag prioriterade efter pedagogisk hävstång per utvecklingsinsats - Quick wins (KCR-default, neutralt språk, "jag är inte säker", personlig progress) före algoritmarbete (spacing-slinga 2-4d, interleaving över förväxlingsbara teman). Anti-patterns explicit: ingen permanent gamification, ingen adaptiv AI i kärnflödet (EU AI Act high-risk).

**Indexerat:** Index.md uppdaterad - ny sektion "Implementations- och utvecklingsplaner". Total_pages 401 → 402.

**Uppföljning:** Användaren kan uppdatera planen när appen utvecklas. Öppna frågor i sektion H (spacing-UI-design, förväxlingsgrupper inom samhällskunskap/historia, lärargränssnitt för kalibreringsdata, LMS-kompatibilitet med pseudonyma ID).

---

## [2026-05-18] moc-creation | MOC - Historiedidaktik och kontroversiella frågor

**Trigger**: Lint-rapport 2026-05-18 identifierade detta som högsta prioritet (51 noter i sessionsmapp utan topic).

**Sidor skapade:**
- `wiki/topics/MOC - Historiedidaktik och kontroversiella frågor.md` (14 sektioner, 49 atomära noter samlade)

**Struktur:**
- Del A — Historiedidaktik (7 sektioner): paradigmskifte, empati, svår historia, dekolonisering, historiebruk, evidensresonemang, AI
- Del B — Kontroversiella frågor (7 sektioner): paradigmskiften, lärarens position, lärar-elev-gap, empiri, svensk kontext, metoder, AI
- Intersektioner mellan domänerna
- Topp-7 actionable insights
- Forskningsluckor + kopplingar till andra MOCs

**Index uppdaterat:** Ny MOC tillagd i topplistan. Statistik bumpat 4 → 7 MOCs (inkluderar tidigare odokumenterade Bedömning + Design av larappar). 3 → 2 MOC-kandidater kvar (Kognitionsforskning, Historiematerialism).

**Kopplingar till hubbar:** MOC länkar till 5 befintliga MOCs (Källkritik, Bedömning, Lektionsarkitektur, Elevmotivation, Master Navigation).

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

## [2026-05-21] lint | Index regeneration

**Type**: Maintenance / lint
**Trigger**: User noticed wiki/index drift
**Findings**:
- Index claimed 176 pages; actual 401 (224 missing entries)
- Index claimed 0 sources; actual 14 session folders with 384 notes
- Broken link `[[MOC - Kallkritik och digital kompetens]]` → corrected to `[[MOC - Källkritik och digital kompetens]]`
- 7 sessions identified as MOC candidates (>15 notes without dedicated MOC)
- 204 broken wikilinks, 18 orphans noted as known issues
- 2 sessions (2026-04-13, 2026-05-06) deviate from kebab-convention with Swedish titles

**Action**: Rewrote `index.md` from filesystem state. Organized by session folder (chronological) instead of thematic domains. Added Concepts section, Statistics table, and known lint issues block.

**Outstanding**: MOC - Master Navigation still on template-stage; 7 MOC candidates need creation; broken-link cleanup; convention decision for Swedish-title sessions.

## [2026-05-24] vault-hygien | Sex-fas-modellen arkiverad, MOC omdöpt till Momentplaneringsramverket

**Type**: Strukturell omorganisation
**Trigger**: Grilling-cykel av Momentplaneringsramverket (utkast 3) drev sex-fas-avvisning + MOC-reorganisation
**Changes**:
- Skapade `meta/archive/sex-fas-modellen/` (ny arkivmapp)
- Flyttade 4 sex-fas-arkitekturnoter från `wiki/sources/2026-03-07 Lektionsplaneringsramverk/` till arkivet:
  - `sex-fas-lektionsstruktur-evidensbaserad-sekvens.md` (KÄRNOTEN för sex-fasen)
  - `skolverkets-strukturerade-undervisning-sex-steg.md`
  - `tva-nivaaarkitektur-ubd-rosenshine.md`
  - `guidad-ovning-underskattat-fas.md`
- Renamed `wiki/topics/MOC - Evidensbaserad lektionsarkitektur.md` → `MOC - Momentplaneringsramverket.md`
- Rewrote MOC: organiserad efter Momentplaneringsramverkets nivåer (0-5 + tvärgående) istället för sex-fas-faser. ~103 principnoter bevarade
- Uppdaterade aktiva referenser: `index.md` och `MOC - Bedömning och betygssättning.md`
- Historisk-changelogs i `meta/changelogs/` orörda (immutabla)

**Purpose**: Momentplaneringsramverket ersätter sex-fas-modellen som lektionsplaneringsmodell. Sex-fas avvisad pragmatiskt (rigid sekvens, för instrumentell, single-lektion-fokuserad, genomförbarhet). 5E-modellen behållen som alternativ enhetsmodell.

**Outstanding**: Skill-trio bygg-projekt (`/planera-moment` omskrivning + `/logga-lektion` + `/reflektera-moment`). Se [[ramverk-momentdesign-utkast-3]] för full bakgrund.

## [2026-05-28] create | Läslista antiken
- Skapade `wiki/concepts/laslista-antikens-grekland-och-rom.md` - kurerad facklitteratur/populärhistoria om Antikens Grekland och Rom (engelska originaltitlar, för egen läsning). Fiction-delen exkluderad på begäran.
- Uppdaterade `index.md` (Concepts-sektionen).

## [2026-06-08] create | Läslista medeltiden (file-back av query)
- Användarbegäran: läslista (fack + populärvetenskap) i anslutning till momentet "Den mörka medeltiden".
- Skapade `wiki/concepts/laslista-medeltiden.md` - kurerad lista med vikt på svenskspråkigt material (Harrison, Hagerman, Price/Winroth) och på historiografin kring själva begreppet "mörk" (Bright Ages vs Ward-Perkins som färdig SAC-debatt).
- Korslänkad till [[laslista-antikens-grekland-och-rom]], [[MOC - Historiedidaktik och kontroversiella frågor]], [[historiebruk-moralisk-roll-kollektivt-minne]], [[diana-hess-policy-fragor-vs-avgjorda-fragor]], [[structured-academic-controversy-mot-polarisering]].
- Uppdaterade `index.md` (Concepts-sektionen + statistik).

## [2026-06-08] ingest | Make It Stick (Brown, Roediger & McDaniel 2014) - hel bok
- Andra bok-ingesten. Hel bok (328 s., 8 kap.) bearbetad. PDF-extraktion via `pdfplumber` (Read-verktygets pdftoppm saknas på maskinen); kap. 2-8 djuplästa av 7 parallella läsagenter.
- Skapade `wiki/sources/2026-06-08 Make It Stick/` - 14 atomära sidor + 1 sessionschangelog.
- Ramning: boken är *ursprungskällan* till wikins lärandevetenskap; ingen re-extraktion av retrieval-grunden. Ankarnot + bok-specifika begrepp (reflektion, generation, illusions of knowing, lärstilsmyten, structure building, rule vs example, dynamic testing) + lärar-playbook (kap. 8) + motsägelsekarta.
- Kärnbidrag: [[vad-make-it-stick-fick-ratt-och-vad-som-overspelats]] - flaggar growth mindset (kollapsat), generation-i-humaniora (replikerar ej) och 10 000-timmarsregeln (översåld) som överspelade; retrieval/spacing/lärstilsmyten/illusions som hållande.
- 5 befintliga sidor uppdaterade med ursprungs-/motsägelseflaggor: [[understanding-how-we-learn-sex-strategier]] (dinglande ref uppfylld), [[retrieval-practice-som-dubbelt-formativt-verktyg]], [[desirable-difficulty-sweet-spot-60-till-85-procent]], [[growth-mindset-teorin-har-kollapsat-2025]], [[interleaving-skadar-lag-presterande-utan-initial-blockering]].
- Uppdaterade `index.md` (ny sessionssektion + statistik 449 → 463) och `CHANGELOG.md`.
- Ingen ny MOC (14 < 15-tröskeln); stärker MOC-kandidaten Lärandevetenskap/kognition.

## [2026-06-08] moc | MOC - Lärandevetenskap och kognition (samlande mekanismkarta)
- Användarbegäran efter Make It Stick-ingesten: bygg den samlande MOC:en för lärandevetenskapsklustret.
- Skapade `wiki/topics/MOC - Lärandevetenskap och kognition.md` - wikins **mekanismlager** (varför-lagret under de tillämpade MOC:erna).
- Organiserad efter kognitiv princip, inte session: 0 ursprung/syntes, 1 retrieval, 2 spacing, 3 interleaving, 4 desirable difficulties/CLT, 5 generation/produktivt misslyckande, 6 elaboration, 7 metakognition/kalibrering, 8 lärandeskillnader/myter, 9 AI och kognition, 10 frågedesign + meta-lärdomar, bryggor, källsessioner, forskningsluckor.
- Samlar fem källsessioner: Retrieval Practice (46), Frågedesign (25), Kognitionsforskning (34), CLT (21), Make It Stick (14). De fyra första lämnar MOC-kandidatlistan.
- Positionerad mot [[MOC - Momentplaneringsramverket]] (tillämpning), [[MOC - Bedömning och betygssättning]] och [[MOC - Design av larappar]].
- Uppdaterade `index.md`: MOC-lista, frontmatter (mocs 8→9), kandidatlista (7→3), statistik (sidor →464, sessions med egen MOC 7→11 av 17) och `CHANGELOG.md`.

## [2026-06-08] ingest | The Inheritance of Rome (Wickham 2009) - hel bok (bok 1/4 i raw-batch)
- Autonom batch-bearbetning av återstående raw-böcker, en åt gången, utan frågor. Bok 1.
- Hel bok (~275 000 ord, 23 kap.) extraherad via `resources/epub_extract.py` -> `.tmp/inheritance-of-rome/`; läst av fem parallella kapitelkluster-agenter.
- Skapade `wiki/sources/2026-06-08 The Inheritance of Rome (Wickham)/` - 15 atomära noter + sessionschangelog.
- Ramning: Wickham som **akademisk materialistisk motvikt** till de 24 Bright Ages-noterna. Tredje position (varken katastrof eller kontinuitet); skattestatens fall; regional variation (Britannien som extremfall); romersk kontinuitet i öst/kalifatet; böndernas inburande; nordisk statsbildning.
- Uppdaterade [[MOC - Medeltiden (innehåll och historiebruk)]] (ny sektion 8 + forskningslucka Ward-Perkins uppdaterad - delvis fylld av Wickham; m4b kan ej textextraheras).
- Uppdaterade `index.md` (ny sessionssektion + statistik: sidor →479, sessions 17→18, noter →454) och `CHANGELOG.md`.
- Reindex skjuts till efter sista boken i batchen.

## [2026-06-08] ingest | Medieval Europe (Wickham 2016) - hel bok (bok 2/4 i raw-batch)
- Bok 2. Samma författare som bok 1; tidig period (kap 2-5) överlappar Inheritance of Rome, så fokus på det NYA (1000-1500) + helhetssyntes. Fem parallella agenter (kap 1+13 metod/syntes, 6-7 ekonomi, 8-9 stat/1204, 10-11 genus/digerdöden, 12 offentlig sfär).
- Skapade `wiki/sources/2026-06-08 Medieval Europe (Wickham)/` - 12 atomära noter + sessionschangelog.
- Kärnteser: 1000-talet som medeltidens verkliga vattendelare; lokalisering av makt/cellstruktur; massmarknad (ej lyxhandel) som ekonomisk motor; sex statsbyggnadsmekanismer; skatt kräver samtycke -> representation; 1204 (Bysans som förlorat alternativ); digerdöden som maktförskjutning ej kollaps; ingen senmedeltida "kris"; vidgad offentlig sfär; 1500 svagt brott, reformationen det verkliga.
- Uppdaterade [[MOC - Medeltiden (innehåll och historiebruk)]] (ny sektion 9) och `index.md` (statistik: sidor →491, sessions 18→19, noter →466) och `CHANGELOG.md`.

## [2026-06-08] ingest | Powers and Thrones (Dan Jones 2021) - hel bok (bok 3/4 i raw-batch)
- Bok 3. Populär narrativ historia; medeltidsdomänen hade redan 51 akademiska noter, så fokus på vad Dan Jones TILLFÖR. Fem parallella agenter (16 tematiska kapitel).
- Skapade `wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/` - 11 atomära noter + sessionschangelog.
- Distinkt: fem krafter-ramen ("vi är medeltidens barn"); klimat som drivkraft; **mongolerna** + Pax Mongolica (handel/pest längs samma vägar) - fyller väst-luckor; kommersiella revolutionen; översättningsrörelsen (väst som baksvansare); korståget som giftig maktteknologi; tryckpressen som informationsrevolution (brygga till källkritik/medier); **teleologi vs anti-teleologi (Jones vs Wickham)** som färdigt historiesyn-kontrastpar; klassrumshooks-resurs; anakronismer som grepp+fälla.
- Uppdaterade [[MOC - Medeltiden (innehåll och historiebruk)]] (ny sektion 10) och `index.md` (statistik: sidor →502, sessions 19→20, noter →477) och `CHANGELOG.md`.

## [2026-06-08] ingest | The Once and Future Sex (Janega 2023) - hel bok (bok 4/4 i raw-batch, SISTA)
- Bok 4, sista boken i batchen. Distinkt genushistoria-bok som matar genushistoria-momentet (Historia 2a). Fem parallella agenter (5 kapitel).
- Skapade `wiki/sources/2026-06-08 The Once and Future Sex (Janega)/` - 11 atomära noter + sessionschangelog.
- Tes: moderna könsideal är konstruerade, inte naturliga; underordningen är konstanten, motiveringen byts (Gud -> Naturen -> Vetenskapen). Noter: kvinnan som utochinvänd man; den sexuellt glupska kvinnan (bevisar konstruktion); skönhet som förklädd klass; äktenskap vs romantisk kärlek; kvinnor arbetade överallt; samma-slutsats-ny-motivering; framstegsmyt/tradwife-historiebruk; **Janega vs Wickham (polemik vs struktur)**; motröster (Hildegard, Christine de Pizan); momentdesign + klassrumsvarning (grova exempel = lärarberättade, ej elevarbetsblad).
- Uppdaterade [[MOC - Medeltiden (innehåll och historiebruk)]] (ny sektion 11) och `index.md` (statistik: sidor →513, sessions 20→21, noter →488) och `CHANGELOG.md`.
- **Batch klar:** alla fyra textbara raw-böcker bearbetade (Inheritance of Rome, Medieval Europe, Powers and Thrones, The Once and Future Sex). Ward-Perkins *The Fall of Rome* (.m4b ljudbok) kan ej textextraheras - flaggad i MOC. Avslutande FAISS-reindex körs härnäst.

## [2026-06-10] moment | Den mörka medeltiden (Hi 1b) - komplett moment via autonom /planera-moment-körning
- Hela 7-stegsprocessen körd autonomt (användarens direktiv): designdialog -> momentplan -> 10 lektionsplaner + elevuppgifter + källmaterial (md + docx) -> 68 frågor/11 quizzar till frågeappen (kurs 1 MEK24B) -> 3 NotebookLM-videor -> 9 Arkiv-presentationer -> momentoversikt.html -> examination.
- Brottningsfråga "Var medeltiden mörk?" hämtad ur [[MOC - Medeltiden (innehåll och historiebruk)]]; treposition-SAC (ljus/katastrof/varken-eller); triadmatris som bärande mekanik; hyperkontextualiserad examination.
- Alla beslut spårade i `output/lessons/Historia/Den mörka medeltiden/beslutslogg.md`. 0 ramverks-overrides. Kursminne för Hi 1b grundat (`output/lessons/_kursminne/historia-niva-1b.md`).
- Incidenter: NotebookLM-auth instabil (3 om-autentiseringar), utgiftsgräns stoppade 2 agenter (restproduktion 06-10), videonedladdning kräver manuellt Studio-steg.
- Wikin är INTE ändrad av denna körning (output-lagret skriver inte tillbaka) - utom denna logg + CHANGELOG.

## [2026-06-10] query+file-back | Läsårsskiss Hi 1b (85 h, forntid -> industriella revolutionen) + ny läslista
- Query mot wikin: läsårsskiss för Historia 1b byggd på [[ramverk-momentdesign-utkast-3|Momentplaneringsramverket]]. 8 moment + buffert; årsnivå-lager: Rüsen-progression (exemplarisk -> kritisk -> genetisk), andra ordningens begrepp som spiral, retrieval/spacing-infrastruktur (exit tickets, pretest, interleavade startquiz), formvariation över året. 3-4 exempel-momentfrågor per moment med Hess-gate/frågetyp/diskursmål, allt citerat mot wikisidor.
- File-back: `output/lessons/Historia/Läsårsskiss Hi 1b - forntid till industriella revolutionen.md` (output-lagret, skriver inte tillbaka till wikin).
- Skapade [[laslista-nya-tiden-till-industriella-revolutionen]] (wiki/concepts) - täcker wikins luckor för moment 5-7: tidigmodern tid/kolonialism, reformation/tryckpress, vetenskaplig revolution/upplysning, revolutionerna, industriella revolutionen, svensk tråd 1500-1850. Mönster: färdiga kontrastpar (Wootton/Shapin, Taylor/Wood, Griffin/Thompson, Malm/Allen/Mokyr) för SAC. Ingest-prioritering: Allen först (motposition till Malm).
- Uppdaterade `index.md` (concepts 16->17, sidor 590->591) + syskonlänk i [[laslista-medeltiden]]. FAISS-reindex ej körd (en ny sida; tas vid nästa större ändring).

## [2026-07-03] file-back | Kritisk trepersektivsgranskning av survey-platform sparad
- Tre parallella granskningsagenter (kod/pedagogik/UX) mot anderskarl929/survey-platform @ b4890ff; akut fynd manuellt verifierat: publikt repo + schemalagd GitHub Action som committar elevdata i rapporter (inga rapporter committade ännu vid granskningen).
- Fullständig rapport med rankade fynd + prioriterad åtgärdslista: `raw/personal-notes/2026-07-03 Granskning - Survey-platform.md`. Rapporten listar opatchade sårbarheter och ska inte committas till det publika repot.
- Wikin ej ändrad (rapporten ligger i raw/, kan ingestas senare vid behov).

## [2026-07-04] planera-moment (utkast) | Nytt Antiken-moment designat, steg 1-4
- Helt nytt moment "Antiken - framsteg för vem?" (Hi Nivå 1b, GY25) designat via /planera-moment i snabbläges-mönster, medvetet utan att utgå från gamla Antiken-momentet (spår och värdering). Brottnings-moment, öppen etisk fråga "Var antiken ett framsteg för människan?", syntes-diskursmål låst av bedömningsmålet, ny form "Eftervärldens rådslag" (jigsaw-deliberation), 7 lektioner.
- Sparad som `output/lessons/Historia/Antiken - framsteg för vem/momentplan.md` (status UTKAST, 0 overrides, 3 öppna frågor blockerar steg 5). Inga artefakter genererade; NotebookLM ej aktiverad (dokumenterad kategori 4-läsning); kursminnet orört tills momentet körs vidare.

## [2026-07-05] planera-moment (utkast x4) | Hela kursen Hi 1b planerad moment för moment, M4-M7
- Kursövergripande planeringsomgång på användarens direktiv: läsårsskissens återstående moment designade sekventiellt via /planera-moment (steg 1-4 i samlad runda per moment, snabbläges-mönster, samma modell som Antiken-utkastet 07-04). Endast planering - inga artefakter. M3 (Den mörka medeltiden) redan designad + skarpt körd, orörd.
- **M4 Den uppkopplade medeltiden** (översikts-moment - kursens första; root "Var medeltiden global - och varför har vi fått lära oss något annat?"; halvklassdeliberation om digerdöden katastrof/motor; klasskartan som mekanik). Nyckelbeslut: M3-överlappet (digerdöd, Toledo, korståg) hanterat som kontrast-återbesök, inte dubblering.
- **M5 Nya tiden - när börjar det moderna** (brottnings-moment, disciplinär periodiseringsroot; brytpunktsprövning med 5 kandidatlag; mini-SAC Wootton/Shapin; svår historia-protokoll för slavskeppslektionen). Nyckelbeslut: upplysningen flyttad M5->M6; erövring/slavhandel uppgraderade till två lektioner (bokbatchen 06-15 ändrade källäget mot skissens "tunnaste moment").
- **M6 Revolutionernas tidsålder** (brottnings-moment, root "Idéer eller bröd?"; treposition-SAC på två fall - medvetet M3-formåterbesök med högre autonomi; förklaringsmatris; counterfactual Varennes; mini-debatt "värd priset?"). 
- **M7 Industriella revolutionen - och vi** (brottnings-moment/blandtyp kursfinal, root "idéer, kapital eller kol?" på trepartsparet Mokyr/Hobsbawm/Malm; Historiesynsprövning mot kursens fallbank = kursens kumulativa examination; "är vi kvar?" som metareflektion, ej debatt).
- Sparade: `output/lessons/Historia/{Den uppkopplade medeltiden, Nya tiden - när börjar det moderna, Revolutionernas tidsålder, Industriella revolutionen - och vi}/momentplan.md`. Alla status UTKAST, 0 ramverks-overrides totalt, öppna frågor per moment blockerar steg 5. NotebookLM ej aktiverad (kategori 4, dokumenterat); kursminnet orört (uppdateras vid Avslutning per moment). Dokumenterade wiki-luckor: reformation (Pettegree), Joan Kelly, Haiti, Allen, svensk industrialisering.
- Wikin ej ändrad (output-lagret skriver inte tillbaka) - utom denna logg.

## [2026-07-11] output | Escape room "Petrarcas arkiv" skapat för Den mörka medeltiden
- Komplett pedagogiskt escape room byggt på dagens ingest-session "2026-07-11 Designa escaperooms" (22 wiki-sidor): niostegsprocessen, Bloom-mappade pussel mot chokladöverdragen broccoli, opt-in-ledtrådssystem i tre nivåer, obligatorisk tvåfas-debrief, karaktärsperspektiv endast där det gör kognitivt arbete (pestvittnena).
- Sex kistor + metapussel mappade mot momentets LM 1-5 och triadmatrisen; narrativet (Petrarca låser in epokens vittnen) är i sig historiebruks-argumentet; slutlåset vägrar ja/nej och tvingar fram differentierad dom (för vem/var/när). Placering: repetitionspass mellan L10 och examinationen, ramat som formativ lågstakes provförberedelse - inte ersättning för undervisning (lärparadoxen + krydda-inte-huvudrätt respekterade).
- Sparat: `output/lessons/Historia/Den mörka medeltiden/escape-room/{speldesign,stationsmaterial,ledtradskort}.md`. Exit ticket digital via frågeappen (2 frågor, varav en repris av L8-gaten). Wikin ej ändrad (output-lagret skriver inte tillbaka) - utom denna logg.

## [2026-07-11] output | Speltest-paket (docx) för Petrarcas arkiv
- Word-dokument för lärarspeltest av escape roomet: testinstruktioner, kända riskpunkter, observationsprotokoll med tidtagning + ledtrådsuttag, komplett spelmaterial (klippbara korttabeller), ledtrådsbrev, facit, individuellt feedbackformulär och go/no-go-checklista före skarp körning. Validerad utan fel.
- Sparat: `output/lessons/Historia/Den mörka medeltiden/escape-room/speltest-paket.docx`. Markdown-filerna förblir sanningskällan - checklistan instruerar att testfynd förs tillbaka dit.

## [2026-07-12] output | Tryckmapp för escape room Petrarcas arkiv (Den mörka medeltiden): escape-room/tryck/ med arkiv-1353.css + 14 A4-ark i HTML, samma format som Antikens escape-room-tryck (arkiv-1877). Filtabell i speldesign.md uppdaterad.

## [2026-07-19] grilling + file-back | Förmågeträningens utvecklingsplan (Hi 1b, HT26)
- Grilling-session om läsårstanke: elever stoffpluggar inför prov och övar aldrig förmågorna som skiljer nivåerna. 16 beslutspunkter vandrade (diagnos, flaskhals, feedbackdesign, hybrid-ramp, pilot, taxonomi, stoffprincip, insyn/karantän, teknikambition, byggordning, frågetyper, feedbackform, modellval, ritual, klassval, produktion).
- Kärnbeslut: pilot i båda nya Hi 1b-grupperna HT26; femdelad delfärdighetstaxonomi för orsaks- OCH konsekvensresonemang; exempelsvar-efter-försök + realtids-AI-feedback i survey-plattformen (nivådelad modellstrategi, empiriskt avgjord i sommar); nya frågetyper sortering + kedjebyggare (grafen mynnar alltid i prosa); bedömningskarantän för lärarens insyn; veckoritual med modellering; produktion via generering + kuratering, senare integrerad i /planera-moment.
- Sparat: [[Formagetraningens-utvecklingsplan-2026-07]] i `wiki/topics/` (designbeslut + sommarens byggordning i 6 steg). Index uppdaterat (768 sidor, 2 implementationsplaner).

## [2026-07-19] syntes | Steg 1 i förmågeprojektet: taxonomin operationaliserad
- Sommarbyggordningens steg 1 ur [[Formagetraningens-utvecklingsplan-2026-07]] genomfört som utkast: de fem delfärdigheterna (kategorisera, bygga kedjor, förgrena, vikta, kritisera/förbättra) översatta till observerbara kvalitetskriterier i tre nivåer (N1/N2/N3, internt mappade mot Gy11:s E/C/A för Hi 1b).
- Per delfärdighet: kriterietabell, typiska svagheter (= AI-prompterns prioritetslista och steg 3:s testfall), uppgiftsverb enligt [[prompt-verb-effekten-vardera-slar-forklara]]. Genomgående: tre kvalitetssprång (mekanism, kriterium, samspel) som "EN förbättring" alltid pekar mot.
- Sparat: [[Delfardighetstaxonomin-operationaliserad]] i `wiki/topics/`. Utvecklingsplanens steg 1 länkad, index uppdaterat. Väntar på lärarens kuratering innan steg 2 (kärnbygge i plattformen).

## [2026-07-19] bygge | Steg 2 i förmågeprojektet: kärnbygget i survey-plattformen
- Sommarbyggordningens steg 2 implementerat i survey-platform (commit `d8cd34b`, lokalt på main, EJ pushat): ny frågetyp SORTING (självrättande, FSRS-integrerad), exempelsvar-i-nivåer som visas efter försök, realtids-AI-feedback för delfärdigheten *kedjor* (fritext via OpenRouter, kriterier ur [[Delfardighetstaxonomin-operationaliserad]]), självbedömning 1-4 mot exempelsvar, elevsida /student/formagor, CSV-import med subskill/config/exemplars.
- Valet kedjor (inte kategorisering) för AI-piloten: sorteringen är redan självrättande; fritext är där AI-feedback gör nytta och steg 3:s blindtest behöver den.
- Verifierat: tsc grönt, 23 vitest-tester gröna (14 nya), next build grönt. Deploy kräver: OPENROUTER_API_KEY i Vercel, sedan push (migrationen appliceras automatiskt i build-steget).

## [2026-07-19] designändring | Förmågefeedback via CLI-flödet, inte server-side LLM
- Användarbeslut: ingen LLM-API i servern. OpenRouter-vägen utriven (commit `e094775` i survey-platform); övningsfeedback speglar nu enkätfeedbackens mönster: `GET/POST /api/practice/feedback` med kvalitetskriterier + feedbackregler inbakade i pending-svaret som promptunderlag, ingen elevidentitet (bara attempt_id).
- printing-press-CLI:n regenererad och installerad: nya kommandon `practice get-pending-feedback` och `practice submit-feedback`. Eleven ser mottagen feedback under "Återkoppling på dina resonemang" på /student/formagor; exempelsvaren står för den omedelbara återkopplingen.
- [[Formagetraningens-utvecklingsplan-2026-07]] §4 uppdaterad (realtidsbeslutet ersatt, nivådelad modellstrategi utgår). Verifierat: tsc, 23 tester, next build gröna. Kvar före drift: push/deploy (ingen API-nyckel behövs längre).

## [2026-07-22] bygge | Elevlägesbilden v1 - grundbygge klart
- Vaultets fjärde lager skapat: `elevdata/` (README med bindande regler, mallar, `HT26/{elevakter,synteser,observationer}`), enligt ADR 0001-0003 + CONTEXT.md från grillsessionen 2026-07-22.
- Nyckelfilsskelett i `.secrets/elevnyckel/` (gitignorad + nu även utesluten ur Nextcloud-synk). Kolumner: elev_id, klarnamn, google_userid, survey_username, undervisningsgrupp.
- Pseudonymiseringsbryggan byggd i `resources/elevlagesbild/`: `run_brygga.sh`/`brygga.py` (nyckelfilsläsning, strukturell pseudonymisering, läckagekontroll som avbryter vid klarnamnsfragment/e-post), `fetchers.py` (classroom-tool endast via `summary`; survey-plattformen via `courses students list`; förmågeträningen = känd lucka), `koppla_classroom.py` + `uppslagslista.py` (vägrar köra i LLM-session - hanterar klarnamn). Smoke-testad E2E + läckagekontroll enhetstestad.
- Skills: `/undantagssyntes` (veckoprotokollet) och `/observation` (infångning via remote control). CLAUDE.md-schemat uppdaterat med fjärde lagret.
- Kartläggning (subagent): källsystemen har oförenliga identitetsrymder - classroom-tool `Elev N`/Google-userId, survey-plattformen `kurskod-nummer` (namnfri by design), förmågeträningen ENDAST attempt_id. ADR 0003:s antagande håller för två av tre källor; förmågeträningen kräver API-tillägg i survey-platform (per-elev practice-data) - öppen punkt.
- Kvar före drift: Anders fyller nyckelfilen, skapar HT26-elever i survey-plattformen (nummer = Elev-ID-nummer rekommenderat; kurs 10 "MSA26A Historia 1b" finns redan, tom; MSA26B-kurs saknas), Classroom-course-ids i `config.json` när HT26-kurserna finns.

## [2026-07-22] bygge | Förmågeträningen ansluten till Elevlägesbildens brygga

- API-tillägg i survey-platform (commit `8d10919`, deployat till Vercel): `GET /api/courses/[courseId]/students/[number]` returnerar nu även `username` och `practice`-aggregat per elev (totalAttempts, lastAttemptAt, bySubskill med rätt/fel/osäker, byWeek per ISO-vecka). Aldrig svarstexter. Typecheck + testsvit (23/23) gröna.
- `fetchers.py` omskriven: `formagetraningen` hämtar nu per-elev-aggregat via progress-endpointen (identitet: `username`, samma som survey-plattformen); `survey_plattformen` berikad från svarsräkning till inlämningar per elev (titel, typ, datum, poäng) - krävs för att syntesen ska se mönster. Elevlista + progress hämtas en gång per kurs och delas mellan de två hämtarna. OBS: `--json --no-input` i CLI-anropen, inte `--agent` (vars `--compact` strippar `number`/`username`).
- E2E-verifierat mot prod med ZZ TEST-kursen (kurs 8, syntetiska elever): båda hämtarna levererar korrekt pseudonymiserad payload; läckagekontroll bekräftar noll källidentiteter i utdata.
- Bryggans README uppdaterad: förmågeträningen flyttad från "Kända luckor" till ansluten källa (identitetsrymd = `survey_username`). Kvarvarande lucka i v1: endast Skola24.
- Kvar före drift (oförändrat): Anders fyller nyckelfilen, skapar HT26-elever i survey-plattformen, Classroom-ids i `config.json`.

## [2026-07-27] underhåll | OS-audit Batch A - säkerhet och döda kapaciteter

Åtgärder från `audits/os-audit-2026-07-26.md`, Batch A. Read-only-auditen från 2026-07-26 kördes om som delta (`audits/os-audit-2026-07-27.md`, inget hade ändrats) varefter Batch A utfördes.

- **Hemligheter ut ur vaultet.** `Untitled.md` (OpenRouter-nyckel, roterad av Anders innan borttagning) raderad till papperskorgen. `ADMIN_API_KEY.md` och `supabase token.md` flyttade till `C:\Users\andkar001\.brain-secrets\` - fortfarande oroterade, se öppen punkt. Vaultroten innehåller inga credential-filer längre.
- **Elevarbeten borttagna.** `raw/student-work/Uppgift WTO/` - 21 PDF:er med elevernas klarnamn i filnamnen - raderade till papperskorgen på Anders begäran (ADR 0001: aldrig klarnamn). Inga levande kodvägar berodde på dem; endast `log.md` [2026-05-18] och idénoten `raw/personal-notes/Verktygsförslag - arbetsflödesgenomgång 2026-07-03.md` nämner dem. `raw/student-work/` står nu tom.
- **`elevdata` exkluderad från FAISS.** Tillagd i `excluded_folders` i `resources/local-brain-search/memory_config.py`. Verifierat att konfigurationen parsar och att listan nu har 15 poster. Elevdata kan därmed inte bäddas in i `brain.faiss`/`brain_metadata.pkl` och överleva gallringen i ADR 0002.
- **Versionshantering.** `git init` i `C:\Brain` med `.gitignore` som håller hemligheter, elevdata, elevarbeten, xlsx-filer, beroenden, stora binärer, lokala kodbaser och FAISS-indexet utanför historiken. 1520 filer stagade (wiki, output, schema, skills, rå textkällor), skannade för nyckelmönster - noll träffar. Baslinjecommit ej gjord ännu.
- **os-audit-skillen installerad.** `raw/inbox/os-audit-SKILL.md` → `.claude/skills/os-audit/SKILL.md`. Registrerad och anropbar som `/os-audit`.
- **`.claude/.claude/` borttagen** till papperskorgen. Verifierat först att dess 39 skills, 10 agenter och commands var en strikt delmängd av de riktiga - inget unikt fanns där. Skuggregistreringen av 37 skills med gamla döda sökvägar är därmed borta.
- **Baslinjecommit gjord** (`22fcf2d`, 1520 filer / 138 204 rader). Vid verifiering upptäcktes att `resources/planeramoment` hamnat i baslinjen som gitlink (mode 160000) - en pekare utan innehåll, alltså falsk trygghet. Den har egen `.git` med remote `anderskarls/planeramoment` och behandlas nu som eget projekt i `.gitignore`, i linje med `Kod/` och `.cornelius-dashboard/` (`e80ace6`). Inga gitlinks kvar; 1517 versionerade filer.
- **Trasiga MCP-agenter avgjorda** (`dd6aa3a`): `diagram-generator` och `epub-chapter-extractor` borttagna - båda krävde MCP-servrar som aldrig konfigurerats i `.mcp.json` och kunde varken fungera eller fela. EPUB-vägen som faktiskt används är `resources/epub_extract.py`; skillen `epub-chapter-extractor` kör ett uv-skript och är oberoende av agenten, därför orörd. `self-diagnostic` testade explicit att `diagram-generator.md` fanns och hade börjat rapportera FAIL - kontrollen borttagen. `research-specialist` behållen: begär `aistudio` + `apollo` men har även WebSearch/WebFetch och är delvis fungerande. Agentkatalogen: 10 → 8.

## [2026-07-27] underhåll | OS-audit Batch B - routing, indexsanning och omflyttning

Punkt 8-17 och 30 ur `audits/os-audit-2026-07-26.md`. Fyra commits i vaultrepot (`bee8353`, `299e679` m.fl.). Allt som raderats gick till papperskorgen.

**Fysisk städning.** Sex Word-låsfiler borttagna. Tomma skal borttagna: `cornelius-dashboard/`, `.dev/`, `obsidianplugin/`. `kokboks-mcp/` borttagen efter MD5-jämförelse som visade byte-identisk kopia i `C:\Users\andkar001\Claude\kokboks-mcp`. `Kod/survey-platform/` (fryst 2026-03-09) borttagen - kanonisk kopia har 40 072 filer och ligger på GitHub; `Kod/` blev tom och togs bort. Fem `node_modules` och ett `_build` ut ur `output/lessons/`. `.tmp/` (444 filer, 54 MB bokextraktioner) flyttad till `C:\Users\andkar001\.brain-scratch\`. `obsidianplugin/README.md` visade sig vara enda kopian av dashboardprojektets README och flyttades till `.cornelius-dashboard/` före borttagningen.

**Omflyttning.** `Undervisningsmaterial/Samhällskunskap/Riksdagsvalet 2026/` → `output/lessons/Samhällskunskap/`. Kontrollerat att det *inte* är en dubblett av "Politikområden inför riksdagsvalet 2026": olika kurs (Sam 1b/GY25/8 lektioner mot Sam 1a1/7 lektioner). `output/ideer/` sammanslagen i `output/Idéer/`. Roten tömd på lösa dokument: `Plan.md`, `Historia.pdf`, CV och personligt brev → `raw/personal-notes/`; `Idé till intro Historia 1b.md` → `raw/inbox/`; två äldre CV-utkast → `meta/archive/cv-utkast-2026-06/`. Roten har nu nio filer, alla schemabärande.

**Routing.** `VAULT_BASE_PATH` löste till `C:\Brain\Brain`; satt till `C:/Brain`, och `DOCUMENT_INSIGHTS_PATH` pekar nu på `wiki/sources`. De sex agenter som skrev till PARA-mappar (`02-Permanent/`, `01-Sources/`, `03-MOCs/`, `04-Output/`, `05-Meta/`, `00-Inbox/`, `AI Extracted Notes/`, `Document Insights/`) är översatta till den faktiska strukturen - 78 förekomster - och dubbleringen `$VAULT_BASE_PATH/Brain/...` är borta. `vault-manager` och `connection-finder` listade dessutom påhittad understruktur (`Books/`, `Videos/`, `LinkedIn Insights/`, `Frameworks/`, `Projects/`, `Draft Posts/`, `Second Brain/`) som nu är ersatt med verkligheten plus en rad om att den inte ska återskapas. Felaktiga verktygsnamn i skills rättade: `venv` → `.venv`, `build_index.py` → `index_brain.py`, `run_reindex.sh` → `run_index.sh`, `brain_index/` → `data/`.

**Indexsanning.** `index.md`-sektionen `2026-03-07 Lektionsplaneringsramverk` sade 13 noter men fyra är medvetet arkiverade; satt till 9 med en förklaring av varför de inte listas. Räknarna satta mot disk och daterade (`counts_verified: 2026-07-27`): 810 sidor, 19 concepts, 16 topics, 771 källnoter. Lint-backloggen omräknad idag: **448 brutna wikilänkar fördelat på 246 unika mål, och 27 orphans, över 7 223 länkar** - de gamla siffrorna 204/18 var en frusen ögonblicksbild. Huvudorsaken till de brutna länkarna är dubbletter mellan svensk titel och kebab-version, inte saknade sidor; åtgärdas bäst med en alias-runda. `wiki/concepts/README.md` (175 rader mallboilerplate med fantomsökvägar) omskriven. `README.md` i roten omskriven från originalmallens döda PARA-karta. `Hem.md`:s egen statistik ersatt med pekare till `index.md` som sanningskälla.

**Schema.** CLAUDE.md kompletterad med de sex odokumenterade `output/`-undermapparna, `audits/`, `docs/`, regeln att senaste auditrapporten vinner, och rättad `.scratch/`-rad. Elevlagesbild-raden bär nu en statusruta: bryggan och skillsen finns inte på den här maskinen, verifiera på disk, och improvisera ingen egen väg till källsystemen.

**Verifiering.** Ett sökvägsskript kördes över alla agenter och skills: 267 vaultrelativa sökvägsförekomster kontrollerade mot disk. Kvarvarande icke-upplösta är exempelsökvägar i dokumentationen, filnamnsprefix och `brain-graph`.

**Öppet efter Batch B:** fyra skills (`coherence-sweep`, `compute-lifecycle`, `detect-tensions`, `propagate-change`) vars hela körsteg är `resources/brain-graph/`, som inte finns. Beslut inväntas. De sex skills som bara använde grafen som valfri berikning har anropen utkommenterade med förklaring. Nytt fynd: **16 skills bär samma döda PARA-sökvägar som de sex agenterna gjorde** - auditen räknade bara agenterna.

**FAISS ombyggt** (`run_index.sh --force`, 2026-07-27): 1 130 noter, 10 073 chunkar, 8 645 grafkanter (7 473 explicita wikilänkar + 1 172 semantiska). Verifierat mot metadatapicklen: **noll chunkar från `elevdata/`** - exkluderingen från Batch A håller i praktiken, inte bara i konfigurationen. Även noll kvarvarande referenser till `Kod/`, `.tmp/`, `Undervisningsmaterial/`, `kokboks-mcp/`, `obsidianplugin/`, `cornelius-dashboard/` och `raw/student-work/`. Nu indexerat och därmed sökbart för första gången: `docs/`, `CONTEXT.md` och `audits/`. Söktest kört och grönt.

**De fyra brain-graph-skillsen borttagna** (2026-07-27, efter beslut): `coherence-sweep`, `compute-lifecycle`, `detect-tensions`, `propagate-change`. Hela deras körsteg var `cd resources/brain-graph && ... cli.py <kommando>` mot ett delsystem som inte finns i vaultet - de kunde varken fungera eller fela. Kontrollerat före borttagning att de var lokala skills (inte symlänkade marketplace-poster, inte i `skills-lock.json`) och att inget utom `scheduled-run` refererade dem. Skillkatalogen: 71 → 67. Borttagna via `git rm`, alltså återställningsbara ur historiken.

Två följdfynd i `scheduled-run` som rättades samtidigt: dess schemalista pekade på `gjopen-refresh` som inte finns (utbytt mot `veckodigest`), och skillen förutsätter `git pull`/`git push` mot en remote som vaultrepot inte har - en varningsruta med förutsättningen tillagd, eftersom den annars felar på steg 1.

## [2026-07-28] deep-research | AI i lärararbetet - professionens organisering (40 noter, ny MOC)

Deep-research-session på användarens fråga: "en överblick över vad det finns för organiserat arbete av lärare runt om i världen kring användandet av AI i lärararbetet". Tolkad som professionens kollektiva organisering - fack, nätverk, myndighetsstyrning, fortbildning - inte enskilda verktygstips.

**Research (5 parallella spår, 3 197 rader).** `resources/AI-i-lararabetet-{Natverk,Fack-Professionsorg,Policy-Myndigheter,Fortbildning-Forskning,Sverige-Norden}-Research-Report-2026-07-28.md`. **Metodbegränsning: Firecrawl låg nere under hela sessionen**, samtliga agenter föll tillbaka på WebSearch/WebFetch. Rapporterna markerar genomgående belagt/andrahand/resonemang. Sverige-spåret är svagast underbyggt - två centrala PDF:er (Sveriges AI-strategi, Skolverket 2026:982) kunde inte extraheras och de delarna vilar på pressmeddelanden.

**Extraktion.** 40 noter + 5 spårchangelogs i `wiki/sources/2026-07-28 AI i lärararbetet - professionens organisering/`. Fördelning: fack 8, forskning 9, nätverk 8, policy 7, Sverige 8. Formatkontroll grön (alla har Kärninsikt + Kopplingar, korrekt `created_by`, noll tankstreck). Två extraktionsagenter korrigerade varandra under arbetet: EEF:s tidsbesparingssiffra avser per vecka, inte per lektion.

**Ny MOC.** [[MOC - AI i lärararbetet och professionens organisering]] - 8 avsnitt ordnade från det som binder, via det professionen gör, till det man själv kan göra. Noll brutna länkar.

**Tvärgående fynd (sessionssyntes).** Sex mönster återkommer i minst tre spår oberoende: ansvarsförskjutning utan resurs; bedömning som professionens egen gräns (dragen fyra gånger oberoende - materialets robustaste fynd); skärpa i omvänd proportion till verkställighet; leverantören fyller styrningsvakuumet; fortbildning i AI som ämne i stället för AI i ämnet; sekvensregeln lärarna först. **Strukturell iakttagelse:** professionen organiserar sig i ett normlager utan verkställighet och ett handlingslager utan spridning, medan mellanlagret - ämnesdidaktiska kollegiala strukturer - är tomt. Researchen hittade inget aktivt lärarlett nätverk för SO/humaniora och AI, varken internationellt eller i Sverige.

**Connection discovery: fem motsägelser mot befintliga sidor, varav tre påverkar faktiska beslut.**
- M1: `ai-bedomning-av-essaer-nar-manniskoniva-icc-094` generaliserar från en studie; ny syntes över 65 studier placerar den i övre svansen av spannet QWK 0,30-0,80.
- M2: `hybrid-feedback-ai-plus-larare-overtraffar-bada-ensamma` och `tutor-copilot-ai-stodjer-svagare-larare-mest` rekommenderar den ordningsföljd där läraren ser maskinens förslag först - experimentellt visad som ankringsvänlig.
- M3: `henrekson-slutprov-loser-ai-validitet-implicit` har fel tidslinje. Slutprov 2029, meritvärden 2031, inte 2028. Central rättning hösten 2026 gäller sve/sva/eng - **inte** samhällskunskap eller historia. Rådet "vänta in Henrekson 2028" (citerat i `MOC - Bedömning och betygssättning`) har inget format att kalibrera mot i Anders ämnen.
- M4: intern motsägelse i den nya batchen om EU:s högriskdatum. **Rättad i denna session.**
- M5: `detektionsparadigmets-sammanbrott-2024-2026` råder att använda detektion "som ett av flera signaler" - vilket är precis vad deltagarna i automation bias-experimentet trodde att de gjorde.

**Faktarättning utförd (M4).** Fyra av de nya noterna angav att AI-förordningens högriskkrav börjar gälla 2 augusti 2026, en angav 2 december 2027. Verifierat mot Jones Walker, Gibson Dunn och aiactblog.nl: Digital Omnibus flyttade skyldigheterna för fristående Annex III-system, inklusive utbildning, till **2 december 2027**. Artikel 50 (transparens) och artikel 4 (AI-kunnighet) flyttades **inte**; tillsynen över artikel 4 börjar 2 augusti 2026. Rättat i `vad-far-en-svensk-larare-mata-in-i-ett-ai-verktyg` (tre ställen), `sverige-valde-manskliga-bedomare-framfor-ai-rattning` och Sverige-spårets changelog. Två **befintliga** sidor bär samma överspelade datum och är inte rättade: `eu-ai-act-quiz-plattform-hogrisk-klassificering` (hel tidslinjetabell) och `ai-fusk-detektion-ar-opalitlig-och-diskriminerande`.

**Åtta krav på förmågeträningsbygget (K1-K8, se sessionssyntesen avsnitt 4).** Tyngst är K1: CLI-flödet visar feedbackförslaget innan läraren bildat egen uppfattning, vilket är exakt den situation där human-in-the-loop inte skyddar (Du m.fl. 2026, N = 214, ηp² 0,579-0,745). Att servern aldrig anropar en LLM är ett arkitektoniskt skydd, inte ett kognitivt. Vidare: stresstestets 96 %-siffra mätte LLM-bedömning av LLM-genererade svar och är därmed exponerad för self-enhancement bias; den behöver göras om mot äkta elevsvar.

**Sidoupptäckt utanför uppdraget, åtgärdad.** `elevdata/` var inte exkluderad från FAISS i `resources/local-brain-search/memory_config.py` på den här maskinen - 13 chunkar (README + mallar) låg i indexet. Exkluderingen som infördes på Windows-maskinen 2026-07-27 fanns inte i den här kopian. Tillagd; ingen faktisk elevdata hade indexerats eftersom akterna ännu är tomma.

**Räknare omräknade mot disk och definitionen skriven ut.** 851 sidor (18 concepts + 17 topics + 769 källnoter + 47 sessionschangelogs). Tidigare 810/19/16/39/771 var internt inkonsistent: 19 concepts räknade in `README.md`, och 771 slog ihop källnoter med changelogs.

**Öppet efter sessionen:** ~19 befintliga sidor har föreslagna länktillägg som inte utförts (se connection discovery-rapporten Del 4), varav tre kräver faktisk textrevision (M1, M3, M5) och två datumrättning (M4).

## [2026-07-28] underhåll | Länktillägg och faktarättningar från connection discovery

Genomförande av Del 4 i `meta/changelogs/CHANGELOG - Connection Discovery 2026-07-28 AI i lararabetet.md`. Rapporten var förslag; detta är utförandet.

**Faktarättningar i befintliga sidor (de fem motsägelserna).**
- **M3, Henrekson-tidslinjen.** `henrekson-slutprov-loser-ai-validitet-implicit` angav implementering 2028 på fyra ställen. Rättat till: nytt betygssystem successivt från 2028, första slutproven 2029, meritvärden 2031. Central rättning hösten 2026 gäller svenska, sva 3 och engelska 6 - inte SO-ämnena. Mellanperioden är fem år, inte två. Följdrättat i `kontraintuitiva-insikter-ai-sakra-examinationer-2026` punkt 5 ("vänta in Henrekson 2028" → "planera som om reformen inte kommer att hjälpa dig") och i `MOC - Bedömning och betygssättning` avsnitt 2 och 7b, där formuleringen var citerad ordagrant.
- **M1, essäbedömningen.** `ai-bedomning-av-essaer-nar-manniskoniva-icc-094` generaliserade från en studie (15 EFL-lärare) till ett strukturellt skifte. Villkorad med syntesen över 65 studier (QWK 0,30-0,80) och de tre systematiska bias som dokumenterats sedan dess. Rekommendationen om AI som kalibreringspartner står kvar men med två nya villkor.
- **M5, detektionsrådet.** Rådet i `detektionsparadigmets-sammanbrott-2024-2026` att använda detektion "som ett av flera signaler" är genomstruket med motivering: det var precis vad deltagarna i automation bias-experimentet trodde att de gjorde. Sidans övriga slutsatser står.
- **M2, hybridfeedbackens ordning.** `hybrid-feedback-ai-plus-larare-overtraffar-bada-ensamma` och `tutor-copilot-ai-stodjer-svagare-larare-mest` rekommenderar båda den sekvens där läraren möter maskinens förslag först. Modellens effekt är inte ifrågasatt, dess ordningsföljd är det. Motmedlet fanns redan i vaultet men bara för eleven (`metakognitiv-stallning-sjalvbedomning-fore-ai-feedback`, designprincip 1).
- **M4, EU-datumen i befintliga sidor.** `eu-ai-act-quiz-plattform-hogrisk-klassificering` hade en hel tidslinjetabell med 2 augusti 2026 som full tillämpning; tabellen rättad med Digital Omnibus-fristerna (Annex III 2 dec 2027, Annex I 2 aug 2028) och med noteringen att artikel 50 och artikel 4 **inte** flyttades. Samma rättning i `ai-fusk-detektion-ar-opalitlig-och-diskriminerande`.

**Länktillägg.** 21 källnoter fick sammanlagt ~40 nya korslänkar in i den nya sessionen. Fyra trasiga länkar rättade på vägen: `Lärarnas ser likvärdighetsproblemet...` → `Lärarna ser...`, två svensk-titel-länkar i `lararfortbildning-digitalt-sarbarhetsgap` → kebab-versionerna, och `MOC - Evidensbaserad lektionsarkitektur` → `MOC - Momentplaneringsramverket` (trasig sedan omdöpningen 2026-05-24).

**MOC-arbete.**
- `MOC - Bedömning och betygssättning`: nytt avsnitt 7c (professionens gräns och bedömarledets risker, sex noter), ny Brygga 5 (kalibrering som gemensam lösning på tre skilda reliabilitetsproblem - muntligt, LLM, okalibrerad lärarrättning), plus tidslinjerättningarna ovan.
- `MOC - Källkritik och digital kompetens`: fyra noter till avsnitt 6 (Lärare och profession), fyra till avsnitt 4 (Svensk kontext).
- `MOC - Historiedidaktik och kontroversiella frågor`: noter till avsnitt 7, 9 och 14, plus en notering att AI i skolan klarar Hess-gaten som öppen policyfråga och därmed är brottningskandidat i Sh1b - med den ovanliga egenskapen att både lärare och elever är part.

**Förmågeträningsbygget.** `Formagetraningens-utvecklingsplan-2026-07` har fått ett nytt avsnitt 7b med K1-K8 och två obekväma iakttagelser. `Delfardighetstaxonomin-operationaliserad` har fått noteringen att proportionell bias och verbositetsbias träffar exakt N2-N3-språnget, med ett konkret längdkänslighetstest.

**Medvetet inte gjort.** Connection discovery föreslog en **AI-statusnod på nivå 5** i momentplaneringsramverket. `ramverk-momentdesign-utkast-3` är aktiv ramverkskälla och styr `/planera-moment`, så ändringen är ett designbeslut för Anders, inte något en agent ska skriva in. Luckan är i stället dokumenterad i `MOC - Momentplaneringsramverket` under nivå 5, med de fyra byggstenar som redan finns och den form en lösning skulle kunna ta.

**Kontroll.** Samtliga 44 länkmål som lagts in verifierade mot disk - noll trasiga. Frontmatter (`updated`, `updated_by`, `agent_version`) uppdaterad i alla substantiellt ändrade sidor enligt schemat.

---

## [2026-07-28] deep-research | Språkanpassning av texter

**Uppdrag.** `/deep-research "Språkanpassning av texter"`. Frågan riggades som en prövning av Anders dokumenterade hållning "scaffolda proceduren, sänk aldrig språknivån" - båda forskningsagenterna instruerades att aktivt söka evidens som talar emot den.

**Källor.** Två forskningsöversikter producerade i sessionen: `resources/research/sprakanpassning-internationell-forskning-2026-07-28.md` och `resources/research/sprakanpassning-svensk-forskning-2026-07-28.md`.

**Resultat.** 18 noter i `wiki/sources/2026-07-28 Språkanpassning av texter/`. 28 länkmål, samtliga verifierade mot disk - noll trasiga.

**Huvudfynd.** Hållningen preciseras, den bekräftas inte. Reichenberg bytte inte ut ämnesbegreppen, hon förklarade dem - det som bearbetades var kohesion, kausalitet och röst, inte begreppsnivån. Som generellt förståelsepåstående håller hållningen däremot inte: förenkling vinner ofta på korttidsförståelse, om än med små effekter. Där den står starkast är primärkällor i historia, där källans språk är studieobjektet.

**Korsdomänfynd.** McNamaras reverse cohesion effect (1996) och Tetzlaffs expertise reversal-metaanalys (2025) är samma mekanism i två fält som sällan citerar varandra. Kohesion är scaffolding inbyggd i texten och ska därmed fadas som all annan stöttning.

**Faktakorrigering.** Gy25 gäller sedan 1 juli 2025, inte "på väg". Varken historia eller samhällskunskap ställer krav på textsvårighet, och det finns inga nationella prov i ämnena på gymnasiet - alltså ingen extern kalibreringspunkt.

**Tre noter dokumenterar vad man INTE ska hävda.** Den direkta jämförelsen (förenklad text utan stöttning mot originaltext med stöttning) finns inte gjord. "Lättläst cementerar låga förväntningar" saknar svensk empirisk grund. Scaffolding-argumentet vilar tyngre på Gibbons auktoritet än på effektforskning.

**Skillproblem.** `/deep-research` är skriven före omstruktureringen: fyra döda sökvägar (`Brain/…`) och tre subagenter som inte finns i `.claude/agents/`. Sökvägarna översattes, generella agenter användes. Skillen bör uppdateras.

---

## [2026-08-01] skill | hamta-dn-artikel bygger elevanpassat läsmaterial

**Beslut.** Varje hämtad DN-artikel bearbetas automatiskt till elevmaterial i `output/lasmaterial/`. Anledning: många elever i grupperna möter ämnesspråket som ett andraspråk.

**Design förankrad i `wiki/sources/2026-07-28 Språkanpassning av texter/`.** Inte "flera språknivåer" utan en bearbetning med två operationer som har experimentellt stöd: röst plus utskriven kausalitet (Reichenberg 2000, den kombination som stängde gapet mellan andraspråks- och förstaspråksläsare). Ämnesbegreppen står kvar i texten och förklaras. Originalet ligger alltid kvar i filen.

**Avgränsningen som gör detta legitimt.** `primarkallans-sprak-ar-studieobjektet` skiljer primärkälla från nyhetstext. DN-artiklar är det senare, där språket är transport och bearbetning en avvägning. Hade det gällt historiska källor vore svaret ett annat.

**Obesvarbarhetstestet.** Sex innehållsfrågor ställs på originalet och besvaras enbart ur bearbetningen. Fångar överradering, den felmod `llm-forenkling-har-en-tyst-felmod` beskriver som osynlig för förenklingsmått. Resultatet redovisas i varje fil.

**Nya filer.** `bearbetning.md` (procedur och forskningsförankring) och `mall-lasmaterial.md` i skillmappen. `SKILL.md` och `fetch.py` uppdaterade. Skriptet hämtar; bearbetningen görs av modellen, eftersom den kräver ämnesomdöme.

**Verifierat på skarpt fall.** `output/lasmaterial/2026-07-28-bryssel-mildrar-utslappskrav-nar-sydeuropa-brinner.md`. Bearbetningen 20 % längre än originalet, 6/6 på kontrollen, 11/11 wikilänkar mot disk.

**Kvarstående.** Två saker att ta ställning till: extract.py delar ord mitt itu vid länkar i råtexten, och `raw/articles/` innehåller nyhetsbrevsrutor som måste rensas manuellt vid varje bearbetning. Arkiv v2.1-HTML för elevleverans är framskjuten till efter kalibrering.

---

## [2026-08-01] skill | hamta-dn-artikel hittar artiklar till aktivt moment

**Beslut.** Skillen får ett andra läge: den läser av vad som körs i kurserna, skannar DN:s sektionssidor och föreslår artiklar. Topp 3 hämtas och bearbetas direkt, resten listas. Körs på begäran.

**Blockeraren som hittades.** Ingenting i vaultet sa vilket moment som var aktivt. 18 momentplaner har noll datumfält, `lasarskalender-2026-2027.md` var en tom mall, senaste reflektionen var från 2026-05-11. Löst med en liten tillståndsfil, `output/planering/aktivt.md`, som Anders håller aktuell. Den är sanningskällan.

**Nya filer.** `momentindex.py` (18 moment till `output/planering/momentindex.json`, kurs för 17, innehållskarta för 18) och `hitta-artiklar.py` (kursläge plus DN-skanning i ett anrop). `output/planering/aktivt.md` skapad med HT26-grupperna, momentceller tomma tills terminen börjar.

**Designval.** Skripten rankar inte. Nyckelordsmatchning missar både det uppenbara och det intressanta, så relevansbedömningen ligger hos modellen, som får hela listan plus momentets brottningsfråga och tema.

**Extraktion.** Momentplanerna följer två oförenliga format - nyare enligt Momentplaneringsramverket, äldre friare. Regex mot "Centralt innehåll" gav 2/18. Rubrikkarta med bortfiltrerade ramverksetiketter gav 18/18.

**Verifierat skarpt.** 4 sektioner skannade, 185 träffar, 130 kvar efter sållning på sektion och 30 dagars ålder. Testkörning mot momenten "Riksdagsvalet 2026" och "Ungas ekonomi" gav träffar som håller (valbeteende och väljarrörlighet respektive ungas arbetsmarknad och dolda avgifter). Kedjan skanning till URL till `fetch.py` verifierad end-to-end. Testdatan i `aktivt.md` återställd efteråt.

**Kvarstående.** `sokord` och `sektioner` i momentindexet är tomma för alla 18 - fylls när ett moment blir aktivt. Anders fyller momentkolumnen när HT26 drar igång.

---

## [2026-08-01] skill | Arkiv-HTML genereras ur läsmaterialets markdown

**Beslut.** Varje läsmaterial får två filer med samma namn: `.md` som arbetsversion och `.html` för elevleverans i Arkiv v2.1. Markdownen är sanningskällan, HTML:en genereras. Ingen HTML skrivs för hand - texten ska inte finnas på två ställen.

**Nya filer.** `bygg-html.py` (markdown till Arkiv-HTML) och `arkiv-lasmaterial.css` (designen, separerad så att den kan itereras utan att röra Python).

**Två saker HTML ger som markdown inte kan.** En växel mellan bearbetad version och original på samma plats, vilket gör fadingprincipen ur `reverse-cohesion-och-expertise-reversal-samma-mekanism` till något eleven kan göra själv. Och marginalglossor, som `primarkallans-sprak-ar-studieobjektet` rekommenderar som apparat runt texten; de faller in under sitt stycke på telefon.

**Märkkonventioner tillagda i bearbetning.md.** `==text==` blir ockermarkering och sätts på kausalkonnektiver och utskrivna mellanled, `__text__` blir bordeauxunderstruken nyckelmening, `» Term | text` blir marginalgloss. Ordlistans begrepp markeras och glossas automatiskt vid första förekomst, med böjningstolerant matchning (ordlistans *Utsläppsrätt* träffar textens *utsläppsrätter*, *Civilskyddsmekanismen* träffar *civilskyddsmekanism*).

**Anpassning av Arkiv-specen.** Specen är skriven för slides: 1280x720, brödtext 22/32, minst 18 px. En läsande sida är något annat, så brödtexten är 19/1.68 och spalten 62 tecken. Tokens, snitt, betoningsverktyg och ikonspråk oförändrade. Designbeslutet dokumenterat i CSS-filens huvud.

**Verifierat.** Genererad fil matchar den handbyggda referensen på alla mått (10 markeringar, 3 understrykningar, 5 begrepp, 2 blockcitat, 4 talstreck) och ger en marginalgloss till. Idempotent vid ombyggnad, strukturellt validerad: inga oslutna taggar, inga id-dubbletter, noll kvarvarande markdown-syntax.

**Kvarstående.** Anders återkommer till designen. Öppna frågor han flaggat som sina: om lärarkontrollen ska följa med i elevversionen, och om sidan ska ha ett mörkt läge trots att Arkiv är pappersljust.

---

## [2026-08-03] underhåll | skills-lagret renoverat - agenter byggda, /deep-research omskriven

**Utgångspunkten.** `/deep-research` var skriven före omstruktureringen till LLM-Wiki-mönstret och pekade på fyra mappar som inte finns. Den anropade dessutom tre subagenter som inte fanns. Kontrollen visade att röta av samma slag fanns i 20 av 45 skills, och att `.claude/agents/` innehöll exakt en fil - `survey-feedback` - trots att CLAUDE.md listade sju agenter som centrala.

**Varför agenterna byggdes i stället för att skrivas bort.** De tre saknade agenterna refererades av fem skills, inte bara av `/deep-research`. Att göra `/deep-research` självförsörjande med `general-purpose` hade lagat en skill och lämnat fyra trasiga, och CLAUDE.md hade fortsatt beskriva ett agentlager som inte existerade. Fyra agenter skrivna: `research-specialist`, `document-insight-extractor`, `insight-extractor`, `connection-finder`. Prompterna fanns till stor del redan inbakade i skillfilerna - arbetet var att lyfta ut dem och rätta det som var fel i sak.

**Aktualitetsregeln var fel, inte bara sökvägarna.** Mallen instruerade att förkasta allt äldre än 2023 och prioritera arXiv-preprints från senaste halvåret. Det är rimligt för AI-forskning och direkt skadligt för det här vaultet: Rosenshine 2012 sammanfattar decennier, Reichenbergs röst- och kausalitetsexperiment är från 2000, och Bjorks desirable difficulties är från nittiotalet. Regeln är omskriven till att gå till primärstudien bakom påståendet och söka det senaste bara i fält som faktiskt rör sig - AI i undervisning, examinationsformer, digital källkritik.

**Sessionen 2026-07-28 är kodifierad.** Det som fungerade den gången ligger nu i skillen och i agenterna: uppdraget formuleras som en prövning av användarens hållning och inte som en bekräftelse, parallella spår delas på aktör eller perspektiv så att samstämmighet mellan dem blir ett fynd, evidensläget markeras i texten och inte bara i frontmatter, motsägelser jämkas inte utan redovisas med sin asymmetri i evidenskvalitet, och wikilänkarna verifieras mot disk innan sessionen är klar.

**Vad som arkiverades.** Nio skills från den generiska ursprungsmallen flyttades till `meta/archive/skills-arvegods/`: `analyze-kb`, `benchmark-memory`, `dialectic`, `learn-new-things`, `resume-builder`, `test-memory-system`, `talk`, `update-dashboard`, `user-research`. Ingen står i CLAUDE.md:s skill-lista, alla var oförändrade sedan bulkimporten 2026-05-17, och två av dem skrev till filer som aldrig funnits i det här vaultet (`dashboard.yaml`, `knowledge-base-analysis.md`). Flytten är reversibel och README:n i mappen säger hur. `dialectic` är den enda som är genuint välskriven och kan vara värd att ta tillbaka.

**Tematiskt arvegods.** Sökvägarna var den synliga rötan; exemplen var den tysta. Skills instruerade fortfarande modellen att söka på dopamin, sampla från Neuroscience och Economics, och syntetisera "Buddhism-neuroscience-AI triangle". Utbytta mot vaultets faktiska domäner. Exempellänkarna är kontrollerade mot disk - de pekar på noter som finns.

**Regressionsskyddet är poängen.** Lagret kunde ruttna tyst i över ett år därför att en skill med giltig frontmatter passerar varje kontroll som fanns, oavsett om mapparna den pekar på existerar. `/self-diagnostic` har nu test 2b som gör två saker: söker efter kvarvarande `Brain/`-sökvägar, och kontrollerar att varje anropad `subagent_type` motsvarar en fil i `.claude/agents/` eller `~/.claude/agents/`. Kör det efter varje strukturändring.

**Kvarstående.** Sju skills har fortfarande engelsk löptext och `Ruby`-referenser i `get-perspective-on` som ingen vet vad de syftar på. Sökvägarna är rätt och de fungerar, men de är inte skrivna för det här vaultet. `/deep-research` är inte körd skarpt efter omskrivningen - nästa riktiga forskningsfråga blir provet.
