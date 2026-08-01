# Beslutslogg - Autonom körning av /planera-moment

**Moment:** Den mörka medeltiden (Historia Nivå 1b)
**Datum:** 2026-06-09
**Körläge:** Autonom - Claude agerar lärarens proxy vid varje beslutspunkt. Strategi: följ ramverkets defaults (M-i) informerade av kursminne och wiki; avvik endast med uttrycklig motivering. Varje beslut loggas här med alternativ som övervägdes och skäl.

---

## Steg 0: Återupptagande-kontroll och uppstart

**B0.1 - Nytt moment, inte fortsättning.**
Glob mot `output/lessons/Historia/**/momentplan.md` visar 7 befintliga moment (Antiken, Världskrigen-sviten m.fl.) men inget medeltidsmoment. Beslut: nytt moment.

**B0.2 - Mappnamn: "Medeltiden".**
Alternativ: "Den mörka medeltiden" (matchar testmomentet i frågeappen, unitId=1) eller "Medeltiden". Valde "Medeltiden" - neutralt, täcker hela perioden, och undviker att låsa vinkeln till "mörka medeltiden"-myten innan designdialogen körts. Frågeapps-kollisionen hanteras i steg 5b (B-beslut där: importera som NYTT moment, rör inte unitId=1 som är testdata).

**B0.3 - Kurs given av användaren:** Historia Nivå 1b → GY25 enligt `kurser.json`. Laddar `references/gy25/struktur.md` + `references/gy25/amnesplaner.md`. Notebook-ID finns (`be38a766-...`) → aktiveras.

**B0.4 - Omfattning given av användaren:** 10 lektioner à 80 min + examination. Tolkningsbeslut: "10 lektioner + examination" tolkas som 10 undervisningslektioner där examinationen ligger UTANFÖR de tio (lektion 11/examinationstillfälle), eftersom användaren skrev "10 st 80min lektioner + examination" med plus-tecken. Loggas som tolkning, kan justeras.

**B0.5 - Kursminne saknas.**
`output/lessons/_kursminne/` är tom - inget kursminne finns för Historia Nivå 1b (de befintliga Historia-momenten skapades före kursminnesfunktionen eller under GY11). Konsekvens: M-i-defaults försörjs enbart av ramverket + wikin. Kursminnesfil skapas vid Avslutning enligt skillens regler.

**B0.6 - NotebookLM via MCP istället för CLI.**
CLI:ts auth hade gått ut; `notebooklm-mcp-auth` återställde MCP-servern men CLI:t (`notebooklm-py`) har separat tokenlagring och kräver interaktiv inloggning, vilket inte går i autonom körning. Beslut: alla NotebookLM-operationer (frågor i steg 1/3/5/6, video i steg 5c) körs via MCP-verktygen som har samma kapabilitet. Avvikelse från skillens bokstav (CLI-kommandon), inte från dess funktion.

---

## Steg 1: Designdialog (Root -> 1a -> 1b)

**B1.1 - Mappnamn reviderat: "Medeltiden" -> "Den mörka medeltiden".**
Wiki-uppslaget (1.5.5) avgjorde: index.md och [[MOC - Medeltiden (innehåll och historiebruk)]] anger uttryckligen att MOC:en byggdes "för momentet 'Den mörka medeltiden' (Hi 1b)", och topp-insikt 1 i MOC:en är att begreppet ska vara studieobjekt. Testmomentet i frågeappen bär samma namn. B0.2 (neutralt namn) byggde på ofullständig information - lärarens dokumenterade intention vinner. Detta illustrerar varför wiki-uppslaget ligger FÖRE root-frågan i skillens ordning.

**B1.2 - Wiki-fynd som styr designen (1.5.5).**
Fem hel-bok-ingester gjorda 2026-06-08 (dagen före körningen) - uppenbart förarbete: The Bright Ages (ljus-tesen), Wickham x2 (varken-eller), Powers and Thrones (populärnarrativ + hooks), Janega (genus). MOC:ens egen formulering: "Wickham + Bright Ages + Ward-Perkins = en färdig trepartsdebatt ('Var medeltiden mörk?') med tre distinkta positioner: ljus / katastrof / varken-eller." Dessutom lärarens anteckning historia-1b-momentforslag-perspektivkriteriet.md med färdiga nedslag (Cecilia Penifader, Hildegard av Bingen). Lucka noterad i MOC:en: Ward-Perkins finns bara som ljudbok - katastrofpositionen får bäras av utdrag/referat i lektionsmaterialet.

**B1.3 - Root: Brottningsfråga.**
> "Var medeltiden mörk?"

Vald ordagrant ur lärarens egen MOC (topp-insikt 2: "som öppen fråga"). Operationalisering som följer med genom momentet: "mörk för vem, var, när - och vem tjänar på berättelsen?". Alternativ som övervägdes: "Förtjänar medeltiden sitt rykte?" (mer retorisk, men avviker från lärarens dokumenterade formulering utan skäl) och "Föll Rom?" (för smal - bär bara 2-3 lektioner). Skärpningsfiltret (1.6.5): (1) Spänningstest JA - tre namngivna forskningspositioner i konflikt; "lite av varje"-risken hanteras av att kvalificerad differentiering (mörk för VEM/VAR/NÄR) är exakt det A-nivån kräver. (2) Bärighetstest JA - varje delområdeslektion prövar tesen mot nytt material; historiebrukslektionerna prövar berättelsen själv. (3) Default-genererings-test JA.

**B1.4 - Hess-gate: ÖPPEN. Ingen override.**
Tolkningsfråga med tre levande, publicerade forskningspositioner. Inte sluten (ingen konsensus om EN berättelse - Bright Ages har själv kritiserats för överkorrigering). Inte tippande (ingen elev bär utsatt minoritetsposition i frågan; position-tilldelning behövs inte som skydd men kan ändå användas pedagogiskt i SAC-formen, beslutas i steg 3/5).

**B1.5 - Frågetypologi: Primär DISCIPLINÄR, sekundär EXISTENTIELL. Ingen override.**
Primär: periodisering, kontinuitet/förändring, värdering av källor och tolkningar - frågan avgörs med historisk metod. Sekundär existentiell: "varför behöver vi en mörk medeltid?" - framstegsmyten, vad berättelsen gör med vår självbild (aktualiseras i historiebruks- och synteslektioner). Prejudikat: Antiken-momentet (samma kurs) valde också disciplinär primär + sekundär typ; den gången var det en override mot default - nu är skillen patchad med sekundär-typ-fältet och ingen override behövs. Etisk övervägdes som sekundär (vit makt-appropriering) men existentiell täcker mekanismen (identitetsprojektion) bättre; det etiska blir lokalt inslag i historiebrukslektionen.

**B1.6 - Centralt innehåll (GY25 Hi 1b), valda punkter:**
1. Europeisk epokindelning + problematisering av tidsindelningar (KÄRNAN - frågan ÄR en periodiseringsfråga)
2. Centrala globala förändringsprocesser; långa linjer levnadsvillkor och makt (feodalism, pest, handel, migration)
3. Begreppen kontinuitet/förändring (primärt verktyg, arv från Antiken-momentet), aktör/struktur + orsak/konsekvens (stöd)
4. Tolkning/granskning/värdering av historiska källor (medeltida källor som retorik)
5. Historiebruk (mörka medeltiden-myten från Petrarca till vit makt och "medeltida" som skällsord)
6. Samband förflutet-nutid
7. PARTIELL: antisemitismens historiska rötter (digerdödens judeförföljelser, Tàrrega 1348) - berör CI-punkten om nationella minoriteter/antisemitism utan att momentet bär den ensam.
Utanför: industrialisering/demokratisering (annan period), samernas historia (kräver eget moment).

**B1.7 - Tvärgående trådar.**
Intra-moment: tolkningstriaden ljus/katastrof/varken-eller som återkommande analyslins + perspektivfrågan "mörk för vem?" (bönder, kvinnor, judar, eliter - knyter till perspektivkriteriet läraren förberett underlag för).
Inter-moment (sparas i kursminne vid avslutning): (a) BAKÅT till Antiken - kontinuitet/förändring-verktyget återanvänds, Roms fall fortsätter Antikens slutfråga; (b) FRAMÅT till renässans/tidigmodern tid - "renässansen byggde på medeltiden den förnekade" + Petrarcas PR; (c) FRAMÅT till 1900-talsmoment - syndabockstänkandets struktur (digerdöden -> antisemitism).

**B1.8 - NotebookLM-täckning verifierad.**
Notebooken (6 källor) täcker alla 8 delområden: World Societies kap. 6, 8, 9, 14 + Penguin History bok 3-4. Lärobokskällorna är klassiska berättelser; wikins reviderande material (Wickham, Bright Ages) blir kontrastmaterial - en PEDAGOGISK TILLGÅNG: eleverna kan källkritiskt jämföra lärobokens bild med nyare forskning.

**Override-räknare efter steg 1: 0. Mönsterlarm: inte triggat.**

---
## Steg 2: Bedömningsmål, lärandemål, förutsättningar (nivå 2-3)

**B2.1 - Bedömningsmål: ramverkets default för disciplinär fråga, operationaliserad.**
Mappningstabellen ger "Eleven kan formulera en historiskt välgrundad tolkning". Operationaliserad med (a) differentieringskravet "för vem/var/när" (det är vad som skiljer A från E i en fråga med "lite av varje"-risk) och (b) prövning mot tre positioner + historiebruk. Ingen override. VIKTIG NEDSTRÖMS-FLAGGA: prövningen mot alla tre positionerna ger bedömningsmålet syntes-DNA -> diskursmålet i steg 3 är i praktiken låst mot SYNTES, inte ÖVERTYGA. Loggas nu så att steg 3 inte "väljer" det som om det vore öppet.

**B2.2 - Fem lärandemål.**
Ett per betygskriterie-stycke i Hi (kunskaper om förändringsprocesser, begreppsresonemang, källor/metod, historiebruk) + ett för periodiserings-CI:t som är momentets kärna. Övre gränsen av skillens 3-5-spann - motiverat av att momentet medvetet täcker fyra CI-kategorier. Verb och värdeord tagna direkt ur GY25-strukturfilen (enkla/utvecklade/utvecklade och nyanserade; välgrundade/välgrundade och nyanserade för källor).

**B2.3 - Förutsättningar med leveransplan.**
Två kategorier (innehåll/begrepp) enligt ramverket. Nyckelval: (a) Romarrikets struktur och begreppen kontinuitet/förändring + historiebruk markeras ÄRVDA från Antiken-momentet - dokumenterat i Antikens momentplan, inte antagande; (b) grundkronologi läggs i FÖRFÖRSTÅELSE-paket (Princip 3: levereras i förväg, elevens ansvar) - matchar steg 5c:s förförståelse-videor; (c) all delområdesfakta levereras L1-L8, dvs. före brottningslektionen L9 - "mjuk uppfyllelse" enligt leveranstabellen. Cirkularitetskontroll: ren. Ingen "bygg-upp-under-momentet"-status alls -> ingen Princip 3-override.

**B2.4 - Verifikationsregeln resonerad** (tre dimensioner, se momentplan). Kritiska sårbarheten identifierad: tolkningstriaden är den enda förutsättning vars lucka kollapsar brottningen -> den får dubbel säkring (L1-etablering + spaced retrieval varje lektion). Detta blir designkrav på steg 4/5.

**B2.5 - Princip 3 bekräftad utan override.** (Princip 3 - Förberedelseintegritet: förutsättningar levereras i förväg, elevens ansvar att tillägna sig dem; differentierat undantag för dokumenterat stöd.)

**Override-räknare efter steg 2: 0. Mönsterlarm: inte triggat.**

---
## Steg 3: Rollsekvens (nivå 4) + brottningsform (nivå 5)

**B3.1 - Alla åtta roller aktiverade, soft default-ordning.**
Signaltabellen slog på allt: begrepp finns (Begreppsbygge), flerpositionsfråga (Perspektivbygge), sekundär existentiell (Metareflektion sist), historiebruksprövning i bedömningsmålet (Applikation), stark ingångshändelse finns i hooks-materialet (Provokation). Återbesök hanteras inte som egen roll utan som (a) inkommande - retrieval av Antikens verktyg i L1, (b) utgående - trådar planterade i kursminnet. Tolkningsval inom defaulten: Perspektivbygge DISTRIBUERAS över delområdeslektionerna (triaden byggs på kumulativt med belägg per lektion) istället för en enskild perspektivlektion - motiv: triaden är den förutsättning vars lucka kollapsar brottningen (B2.4), spaced exponering slår en engångslektion (spacing-effekten + mognadsfyndet nedan). Ingen override - rollurval och ordning följer default.

**B3.2 - Wiki-fynd som justerar FÖRVÄNTNINGAR, inte struktur.**
[[historisk-epistemisk-sofistikering-foljer-mognad-inte-undervisning]]: "historia är tolkning" är mognadsbegränsad förmåga i åk 1. Konsekvens: triaden hålls konkret (namngivna historiker med citat- och beläggkort, inte "epistemologi"), metareflektionens exit skalas till "hur ändrades min bild". Detta är exakt den sortens fynd wiki-uppslaget finns för - utan det hade jag sannolikt designat en för abstrakt tolkningsdiskussion.

**B3.3 - Diskursmål: SYNTES, via låsningskontrollen.**
Flaggan från B2.1 verkställs: bedömningsmålet låser syntes-DNA. Skillens default för disciplinär fråga (Pröva) hade annars gällt - den bevaras som LOKALT diskursmål i delområdeslektionernas mini-brottningar (hypotes mot källor). Ingen override: låsning är inte ett val.

**B3.4 - Form: treposition-SAC.**
Härledning enligt formvalsprincip 1: syntes-DNA -> SAC-familjen; disciplinär frågetyp -> beläggbaserade positionspaket; bedömningsmålets precisering -> konsensusfas med differentieringskrav (för vem/var/när). Lärarens MOC kallar materialet "färdig SAC" - formen är i praktiken förberedd av läraren själv. Trepositionsproblemet (SAC är tvåsidig) löst: par kör ljus vs katastrof, Wickhams varken-eller introduceras i konsensusfasen som kandidat-syntes att pröva. Gruppstorleksgolv: SAC om 4 skalar oavsett klasstorlek; klasstorlek OKÄND i autonom körning - antagen ~30, flaggad [VERIFIERA] i momentplanen. Strukturmekanism: SAC:s fasta talturer + obligatorisk steelman-runda. Ingen override.

**B3.5 - Examinationsprincip från wiki:** [[hyperkontextualiserad-autentisk-bedomning]] - skrivuppgiften ska kräva hänvisning till klassens egna SAC-argument och annoterade källkort (AI-säkerhet). Detaljutformas i steg 4/5.

**B3.6 - Formativ slinga:** exit tickets digitalt via frågeappen varje lektion (lärarens stående regel); avstämningen före SAC mäter positionskunskap och styr gruppindelning.

**Override-räknare efter steg 3: 0. Mönsterlarm: inte triggat.**

---
## Steg 4: Lektionssekvens

**B4.1 - Mappning 10 + examination.**
L1 förankring+provokation (kombinerade - pretestet ÄR provokationen, sparar en lektion åt innehållet), L2-L8 sex perspektivbyggande delområdeslektioner + källabb, L9 SAC, L10 applikation+syntesverkstad+metareflektion, examination separat (B0.4-tolkningen). Hårda ordningsregler verifierade: förankring först, brottning (L9) före bedömd syntes (Ex), metareflektion sist (L10:s avslut).

**B4.2 - Triadmatrisen som bärande mekanism.**
Eget designtillskott utöver skillens bokstav: en kumulativ domän×position-matris som fylls varje delområdeslektion. Motiv: (a) den realiserar det distribuerade Perspektivbygget konkret; (b) den är spaced retrieval av momentets kritiska förutsättning (triaden - B2.4); (c) den BLIR SAC:ens positionspaket, så förberedelsen för brottningen byggs av eleverna själva över fem veckor; (d) den ger hyperkontextualiserat examensunderlag (klassens egen matris finns inte i någon AI:s träningsdata).

**B4.3 - Innehållsurval till delområdeslektionerna.**
Sju kandidatdomäner fick sex platser: Roms fall, feodalism/bönder, vetandet (kloster+Toledo SAMMANSLAGNA), korståg/möten, källor, kvinnor, digerdöden. Sammanslagningen vetande+översättningsrörelse motiverad av tematisk enhet (kunskapens vägar); handel/städer/kommersiell revolution fick INGEN egen lektion - täcks som bisats i L8 (pestens ekonomiska följder) och L5 (utbyte). Bortvalt: mongolerna som eget område (Jones-materialet finns men CI-trycket ligger på Europa; mongolerna nämns i L8:s pestvägar). Detta är stoffträngsel-beslut som läraren kan vilja ändra.

**B4.4 - Examinationsdesign.**
Skriftlig syntes med hyperkontextualiserade hänvisningskrav (egna SAC-argument + klassens annoterade källkort från L6) enligt [[hyperkontextualiserad-autentisk-bedomning]]. Källkorten produceras av eleverna i L6 - dubbel funktion: källkritikträning (LM4) + AI-säkert examensmaterial.

**B4.5 - Gate-mekanismen.**
L8:s exit ticket är verifikationspunkten (nivå 3): tre positioner × styrka/svaghet. Bred lucka -> naturlig stoppunkt, stödinsats skjuts in före SAC. Detta operationaliserar ramverkets "formativ avstämning vid rollövergång till Brottning".

**B4.6 - Formvariation kontrollerad:** pretest/EPA, beläggsortering, Frayer+fallstudie, källpar, perspektivanalys, stationslabb, exploratory talk, orsakskedjor, SAC, case+skrivverkstad. Ingen storform upprepas. EPA förekommer som mikrostruktur i två lektioner (L1, L5) - mikrostruktur räknas inte som form.

**Override-räknare efter steg 4: 0. Mönsterlarm: inte triggat.**

---
## Steg 5/5a: Lektionsplaner + elevuppgifter

**B5.1 - Produktion delegeras till parallella subagenter.**
11 produktionsenheter (L1-L10 + examination), vardera 2-6 filer (md + docx, elevuppgift, ev. källmaterial). Att köra detta sekventiellt i huvudkontexten skulle spränga kontextfönstret långt före steg 6-7. Beslut: en produktionsbrief (produktionsbrief-lektioner.md) kodifierar momentdesignen + alla konventioner (stilregler, anti-hallucineringsregler, docx-format, kvalitetschecklista); subagenter läser brief + momentplan + utpekade wiki-sidor, hämtar NotebookLM-innehåll själva och producerar filerna. Avvikelse från skillens bokstav ("generera en lektion i taget, invänta godkännande") - godkännandeslingan är redan suspenderad av användarens autonoma-körning-direktiv, och briefen ersätter den lektionsvisa kontextöverföringen. Kvalitetskontrollen (skillens obligatoriska checklista) åläggs varje agent + stickprovsgranskas centralt efteråt.

**B5.2 - Anti-hallucineringsregel skärpt för subagenterna.**
Skillens [VERIFIERA]-regel kompletterad med absolut förbud mot påhittade ordagranna primärkällecitat (subagenter utan full kontext är mest benägna att fabricera citat; källkompendiet L6 är största riskytan). Citat endast från NotebookLM-svar eller wiki-sidor; annars referat + [VERIFIERA].

**B5.3 - Batchning:** 3 omgångar (L1-L4, L5-L8, L9+L10+examination) för att begränsa samtidiga NotebookLM-anrop.

---
**B5.4 - Batch 1 (L1-L4) klar.** Alla docx validerade (PASS), elevaktiv tid 64-73%, NotebookLM använt i samtliga. Notabla händelser: (a) L3-agenten UPPTÄCKTE att Cecelia Penifader-fallstudien inte finns i World Societies kap. 14 (lärarens anteckning historia-1b-momentforslag pekade fel - hon nämns bara i kapitlets litteraturlista via Bennetts "A Medieval Life"); fallstudien byggdes på lärobokens systemavsnitt + Bennett-fakta taggade [VERIFIERA]. Källkontrollen fungerade. (b) L4 fann inget ordagrant upplysningstida mörker-citat i källorna - refererat istället för fabricerat, enligt anti-hallucineringsregeln.

---
**B5.5 - Batch 2 (L5-L8) klar.** Alla docx PASS, elevaktiv tid 60-75%. Notabelt: (a) L6-källkompendiet byggdes uteslutande på utdrag NotebookLM faktiskt återgav (Theodoras Nika-tal, Prokopios pest, Ibn al-Athir, Capitulare de villis); hagiografi-stationen blev markerat REFERAT eftersom ingen ordagrann hagiografi finns i källorna - anti-hallucineringsregeln höll. (b) L6 bytte station 4 från "brev" till dokument (Capitulare de villis) inom briefens ram. (c) L8:s gate-instruktion operationaliserad: tjockaste positionspaketet ges svagast belagda positionen.

---
**B5.6 - Batch 3: L9 klar; L10 + examination träffade utgiftsgräns.**
L9 (SAC) komplett: 3 dokumentpar, 92% elevaktiv tid, minutexakt körschema, Ward-Perkins öppet deklarerad som REFERAT. L10- och examinationsagenterna stoppades av månatlig utgiftsgräns mitt i arbetet (2026-06-09 sent). examination.md hann färdigställas (komplett, granskad), examination.docx + samtliga L10-filer saknas. Åtgärd 2026-06-10: restproduktion via ny agent, med inline-produktion i huvudkontexten som fallback. Incidenten illustrerar behovet av idempotent återupptagning (skillens återupptagande-sektion fungerade som designad: inventera disk, identifiera rest).

---
## Steg 5b: Frågor till frågeappen

**B5b.1 - Kursval: kurs 1 "Historia 1b MEK24B" (prod).**
Alternativ: kurs 3 (MEK24C, andra Hi 1b-klassen), ZZ TEST-kurserna (7/8). Valde MEK24B: appens historik visar att testmomentet "Den mörka medeltiden" (unitId=1) redan importerats dit som förberedelse - det är den dokumenterade målklassen. Riskbedömning: quizzar utan utdelade delningskoder är inerta för elever; vid behov kan de raderas. MEK24C får quizzarna senare via lärarens vanliga flöde (delningskoderna i momentplanen funkar för båda klasserna om appen tillåter, annars dubblettexport - flaggas i översikten).

**B5b.2 - Frågevolym:** 6 frågor per lektion (4 MCQ + 2 fritext, varav exit ticketen alltid är en) + 8 momentfrågor = 68. AI-svaghetschecken (plausibla distraktorer, 60-85%-kalibrering, verbkalibrering, specificitetslagen mot lärandemålen) åläggs agenten med uttrycklig checklista. Generering grundas i lektions-md-filerna, inte fri association.

---
**B5b.3 - Export genomförd.** 11 quizzar (id 59-69) i kurs 1, 68 frågor behållna av 87 genererade (22% förkastade: årtals-trivia, längst-svar-mönster, redundans). LM-täckning verifierad (alla LM >= 2). Agenten fattade två bra följdbeslut själv: (a) L1-quizzen undviker MCQ som avslöjar pretest-facit (lektionsdesignens "rätta inte"-regel respekterades tvärs över artefakttyper), (b) pretest-myterna återanvänds som distraktorer i senare quizzar - missuppfattningsbaserade distraktorer enligt evidenskravet.

---
## Steg 5c: Videoöversikter

**B5c.1 - CLI-gaten fallerade, MCP-fallback.**
"notebooklm doctor" rapporterade Auth pass (SID-cookie finns) men riktiga anrop gav auth-fel - doctor-kollen validerar bara cookienärvaro, inte giltighet (fynd till granskningen). Interaktiv "notebooklm login" är omöjlig autonomt. Fallback per B0.6: video_overview_create via MCP. Konsekvens: nedladdning till .mp4 kan inte automatiseras (MCP saknar download-verktyg) - dokumenterad som manuellt lärarsteg i momentplanen. Skillens completion-checklista uppfylls delvis ("genererade och loggade" ja, "nedladdade som mp4" nej).

**B5c.2 - Videourval: 3 st.**
Momentöversikt (obligatorisk) + förförståelse L1 (momentplanens enda äkta förförståelsepaket: kronologi/epokindelning) + förförståelse L9 (de tre positionerna - utöver referensens exempel, motiverat av att L8-gaten visat att positionskunskap är momentets kritiska förutsättning och att L9-paketet levereras dagen innan till Princip 3-undantagselever; videon ger samma leverans till alla). Format: explainer för översikt, brief för förförståelse. Stil heritage (historia-default), språk sv (utfall ska granskas - schema-exemplen listar inte sv).

**B5c.3 - confirm=true utan per-anrop-godkännande:** användarens autonoma direktiv tolkat som stående godkännande; generering är reversibel (studio_delete) och sker i lärarens egen notebook.

---
## Steg 6: Presentationer (Arkiv reveal.js)

**B6.1 - Urval: 9 presentationer (L1-L8, L10).** L9 utesluten: SAC-designens regel "ingen lärargenomgång ska tränga ut brottningstiden" - körschemat finns i lektionsplan + elevblad. **B6.2 - Innehållskälla:** lektionsplanerna är redan NotebookLM-grundade med källhänvisningar; agenterna bygger på dem och får göra max 1 kompletterande NotebookLM-fråga vid behov (minskar API-last, eliminerar dubbelarbete - avvikelse från referensens bokstav om 3 frågor per presentation). **B6.3 - Delegering** i 3 batcher om 3, samma mönster som steg 5.

---
**B6.4 - Steg 6 klart.** 9 presentationer (L1-L8, L10), 14-21 slides styck, alla rapporterar Arkiv-checklista PASS med talarnoter + tider på samtliga slides, delningskoder inbakade i exit ticket-slides, [VERIFIERA]-noter respekterade (flaggor i talarnoter, aldrig på slide-ytan). Incident: L3-presentationsagenten avbröts av användaren mitt i körningen men filen var redan komplett skriven (verifierad: stängd HTML, Arkiv-tokens, 18 talarnoter, delningskod x3). L10-presentationen inkluderar varsamhetsram för vit makt-caset (EHT-hänvisning i talarnoter).

---
**B5c.4 - Videorna klara i Studio; automatisk nedladdning omöjlig.**
Alla tre videor genererade och completed (verifierat via studio_status efter förnyad notebooklm-mcp-auth - MCP-auth visade sig vara kortlivad och krävde om-auth två gånger under körningen). Nedladdningsförsök via video_url gav Googles inloggningssida (URL:erna kräver browser-session); den trasiga filen raderad. Nedladdning till .mp4 kvarstår som manuellt lärarsteg via NotebookLM Studio. FYND: en äldre momentöversiktsvideo "Momentoversikt - Den morka medeltiden" (2026-06-07, artefakt 5ee4a6a9) fanns redan i Studio från lärarens testkörning av videosteget - de nya videorna kompletterar, ersätter inte; läraren kan välja.

---
## Steg 7 + Avslutning

**B7.1 - momentoversikt.html** genererad med platshållare för datum och videolänkar (okända i autonom körning - lärarens ifyllnad). 11 kort, alla delningskoder, examenskraven i elevspråk, varm historia-palett.

**B7.2 - Kursminne grundat** (`output/lessons/_kursminne/historia-niva-1b.md`): retroaktiva Antiken-lärdomar + denna körnings mönster, alla markerade som ej lärar-bekräftade. Härkomst-notering överst så nästa moments steg 1.5 vet att punkterna ska bekräftas/strykas.

**B7.3 - log.md + CHANGELOG.md** uppdaterade i vaultroten enligt CLAUDE.md-konventionerna. Wikin i övrigt orörd (output-lagret skriver inte tillbaka).

**B7.4 - Kritisk granskning** sparad som `processgranskning.md` (6 styrkor, 8 brister, 6 prioriterade patchförslag).

**Slutstatus completion-checklistan:** allt uppfyllt utom (a) video-mp4 nedladdade (manuellt Studio-steg - MCP saknar download), (b) datum/elevlänkar i översikten (platshållare). Override-räknare hela momentet: 0. Mönsterlarm: aldrig triggat.

---
*Körning avslutad 2026-06-10. Total produktion: 24 md-filer i vaultet, 21 docx, 9 presentationer + 1 momentöversikt (HTML), 11 quizzar i frågeappen, 3 videor i NotebookLM Studio, 11 CSV-filer.*
