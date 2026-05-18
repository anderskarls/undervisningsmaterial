---
created: 2026-04-13
updated: 2026-04-13
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags:
  - changelog
  - connection-discovery
  - bedömning
  - betyg
  - Henrekson
  - svensk-kontext
---

# Connection Discovery Session - Summativ bedömning och betygssättning
**Datum:** 2026-04-13
**Session-folder:** `Brain/Document Insights/2026-04-13 Summativ bedömning och betygssättning (svensk kontext)/`
**Antal nya noter:** 23

## Metodologi

Local Brain Search (FAISS) var otillgänglig under sessionen - venv saknar `sentence_transformers` och reparation var uttryckligen inte del av uppdraget. Kopplingsanalysen genomfördes därför genom:

1. **Inventering** av den nya sessionsmappen och alla relaterade Document Insights-mappar + AI Extracted Notes, MOCs, Reflektioner, Undervisningsmaterial och Tankar och planer via Glob/Bash.
2. **Grep-sökning** i hela vaulten på nyckeltermer (betygsinflation, Henrekson, Vlachos, sambedömning, likvärdig, matris, pseudo-formativ, Jönsson, Lundahl, Wiliam, rättssäkerhet, kunskapskrav m.fl.) för att lokalisera kandidatnoter.
3. **Direktläsning** av 7 centrala nya noter (både nav- och brygganoter) och matchning mot redan existerande noter från sessionerna 2026-03-07 (pedagogisk forskning), 2026-03-22 (källkritik + motivation), 2026-04-11 (appar) och 2026-04-12 (retrieval/AI-feedback).
4. **Triangulering** av redan etablerade kopplingar (de nya noterna har redan wiki-länkar till 13 befintliga noter) med ytterligare obsevererade relationer som ännu inte är bryggda.

Detta innebär att resultatet är rikare på struktur och logisk matchning än på rent semantisk likhet. Vid nästa körning bör `run_index.sh` köras för att bekräfta via vektorsimilarity.

## Nätverksöversikt av de 23 nya noterna

De nya noterna klustrar sig i **fem inre teman** (översikten i sessionens CHANGELOG använder fyra - jag delar upp det "praktiska" klustret för tydlighet):

### Kluster A - Strukturell diagnos (4 noter)
Betygsinflation är ett systemproblem; Målrelaterade betyg utan externa ankare; Lärarna ser likvärdighetsproblemet tydligare; Nationella prov fungerar som betygsankare (i ämnen som har dem).

**Navnot:** [[Betygsinflation är ett systemproblem, inte ett lärarproblem]] - den enda av de nya noterna som tre andra nya noter länkar direkt till.

### Kluster B - Henrekson-reformen (3 noter)
Henrekson-utredningen 70-30-modell; Samhällskunskap står inför fundamental förändring; AI har accelererat behovet av slutprov.

**Navnot:** [[Henrekson-utredningen föreslår 70-30-modell med centralt rättade slutprov]].

### Kluster C - Bedömarkunskap och matrisproblemet (3 noter)
Matrisbedömning lovade transparens men förde med sig reduktionism; Den tysta bedömarkunskapen; Sambedömning är kompetensutveckling men inte likvärdighetsgaranti.

**Navnot:** [[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]] - den andra av de två mest linkade nya noterna.

### Kluster D - Ämnesvalidering och formativ/summativ spänning (7 noter)
Formativ och summativ som förhållningssätt; Lärarens dubbla roll coach/domare; Validitet och reliabilitet är fiender; Historielärare saknar ankarprov; Andra ordningens begrepp som svar; Källkritik som checklista; Lärarens ämneskunskap.

**Navnot:** [[Validitet och reliabilitet är fiender i bedömning av komplexa förmågor]] - fungerar som brygga mellan Kluster C och Kluster E.

### Kluster E - Rättssäkerhet, AI-disruption, likvärdighet och etik (6 noter)
F-sättning är mest rättsosäker; Dokumentera dina betygsbeslut; Acceptera att perfekt likvärdighet är omöjlig; Övervakade klassrumsprov blir primärt betygsunderlag; Klassbakgrund dominerar; Könsskillnader i betyg.

## Direkta kopplingar till befintlig vault

### Kluster I - Formativ/summativ spänning (starkt etablerad bro)

Denna koppling är redan delvis gjord i de nya noterna (13 wiki-länkar in till 2026-03-07-sessionen), men flera samband ska göras explicita.

- **Ny:** [[Formativ och summativ bedömning kan inte enbart förstås som tekniker - de är förhållningssätt]] <-> **Befintlig:** [[pseudo-formativ-bedomning-jonsson-kritik]]
  - **Varför:** Den nya noten är i praktiken en förlängning av Jönssons argument - den förklarar *varför* BFL-implementationen blev pseudo-formativ (teknik spreds snabbare än förhållningssätt). Den befintliga noten beskriver problemet; den nya noten förklarar mekanismen.
  - **Styrka:** Stark (redan länkad)
  - **Handling:** Lägg till bakåtlänk från pseudo-formativ-noten (den har 0 inkommande från 2026-04-13-sessionen).

- **Ny:** [[Lärarens dubbla roll som coach och domare är ett olöst dilemma]] <-> **Befintlig:** [[betygsfeedback-dodar-kommentarer]]
  - **Varför:** Butler-klassikern (betyg dödar kommentarerna) är den empiriska förankringen av det strukturella dilemmat. Den nya noten ger den teoretiska ramen; den befintliga ger experimentella data.
  - **Styrka:** Stark (redan länkad)
  - **Handling:** Bakåtlänk bör läggas till i betygsfeedback-dodar-kommentarer.

- **Ny:** [[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]] <-> **Befintlig:** [[djupa-vs-ytliga-framgangsskriterier]]
  - **Varför:** Befintlig not visar d=0,88 för djupa framgångskriterier om resonemang. Nya noten förklarar varför ytliga kriterier (avprickbara) inte kan ersätta erfarenhetsbunden bedömarkunnighet. Tillsammans bildar de en fullständig kritik av matrisparadigmet.
  - **Styrka:** Stark
  - **Handling:** Ny länk i båda riktningar.

- **Ny:** [[Lärarens dubbla roll som coach och domare är ett olöst dilemma]] <-> **Befintlig:** [[klapp-betyg-negativa-effekter-lagpresterande]]
  - **Varför:** Klapp-forskningen visar att själva betygssättningen har differentiellt skadliga effekter för lågpresterande. Det gör coach/domare-dilemmat *ojämlikt fördelat*: eleverna som har störst behov av coachen är också de som tar mest skada av domaren.
  - **Styrka:** Stark
  - **Handling:** Ny länk.

### Kluster II - Matris, transparens och reduktionism

- **Ny:** [[Matrisbedömning lovade transparens men förde med sig reduktionism]] <-> **Befintlig:** [[djupa-vs-ytliga-framgangsskriterier]]
  - **Varför:** Den nya noten beskriver mekanismen (matris -> avprickbart -> reduktionism). Befintlig not visar att det är de djupa kriterierna som driver effektstorleken. Den logiska slutsatsen: plattformsdriven matrisbedömning optimerar mot de ytliga kriterier som ger minst effekt.
  - **Styrka:** Stark
  - **Handling:** Länk. Dessutom en insikt värd att lyfta i [[MOC - Evidensbaserad lektionsarkitektur]] under "Klassrumsklimat".

- **Ny:** [[Matrisbedömning lovade transparens men förde med sig reduktionism]] <-> **Befintlig:** [[inga-matrisfragor-pa-mobil]]
  - **Varför:** Oväntad tvärdomänkoppling. Den befintliga noten argumenterar att matrisfrågor är pedagogiskt olämpliga *på mobilskärm* av kognitiva belastningsskäl. Den nya noten argumenterar att matriser är problematiska *som sådana* i summativ logik. Tillsammans bildar de en dubbelkritik: matrisen fungerar varken i form eller i substans.
  - **Styrka:** Medel (bridge)
  - **Handling:** Länk i båda noter, lämpligt att lyfta i MOC Design av larappar.

### Kluster III - Bedömning ↔ Källkritik (en av sessionens starkaste bryggor)

- **Ny:** [[Källkritik som checklista undergräver det som skulle mätas]] <-> **Befintlig:** [[craap-metoden-gor-elever-mer-sarbara]]
  - **Varför:** Redan länkad i den nya noten. Men kopplingen är starkare än den verkar: båda noterna visar samma mekanism - att operationaliseringen av en komplex förmåga till en avprickbar procedur undergräver själva förmågan. Det är *samma strukturella fel* som i matrisbedömningen.
  - **Styrka:** Stark (redan länkad)
  - **Handling:** Den metastrukturella insikten "när en komplex förmåga reduceras till avprickbara steg försämras förmågan" bör bli sin egen permanentnot. Se syntesförslag nedan.

- **Ny:** [[Källkritik som checklista undergräver det som skulle mätas]] <-> **Befintlig:** [[lateral-lasning-faktakollares-strategi]]
  - **Varför:** Redan länkad. Lateral läsning är den alternativa praktiken som *inte* låter sig reduceras till en checklista - den är exakt den typ av integrerad, professionsbunden bedömarkunskap som [[Den tysta bedömarkunskapen]] beskriver i bedömningskontext.
  - **Styrka:** Stark (redan länkad)
  - **Handling:** Lägg till länk från [[Den tysta bedömarkunskapen]] till [[lateral-lasning-faktakollares-strategi]] - det är en korsdomän-parallell värd att markera.

- **Ny:** [[Källkritik som checklista undergräver det som skulle mätas]] <-> **Befintlig:** `Brain/03-MOCs/MOC - Källkritik och digital kompetens.md`
  - **Varför:** Den nya noten är den första i vaulten som uttryckligen kopplar den källkritiska paradigmkritiken till *bedömningsdesign*, inte bara till undervisning. Det är en ny dimension för källkritik-MOC.
  - **Styrka:** Stark
  - **Handling:** Lägg till under rubrik "Bedömning av källkritik" i MOC:en.

### Kluster IV - AI-disruption och examination

- **Ny:** [[Övervakade klassrumsprov blir primärt betygsunderlag när AI rubbar hemuppgifter]] <-> **Befintlig:** [[ai-fusk-detektion-ar-opalitlig-och-diskriminerande]]
  - **Varför:** De två noterna utgör tillsammans en fullständig argumentkedja: (1) AI-detektion fungerar inte (befintlig), därför (2) förskjuts examinationsformatet mot övervakade klassrumsprov (ny). De facto-reformen sker på marken just för att plan A är opålitlig.
  - **Styrka:** Stark (bridge mellan sessioner)
  - **Handling:** Länk i båda.

- **Ny:** [[AI har accelererat behovet av centralt rättade slutprov snarare än bromsat det]] <-> **Befintlig:** [[hallucinationsrisker-ai-feedback-utbildning-fem-motstrategier]]
  - **Varför:** Redan länkad. Bildar en politisk-pragmatisk linje: AI som teknologi försvagar existerande kvalitetskontroll, vilket ökar (inte minskar) behovet av externa ankare. Det är det motsatta av den tekniktopimistiska linjen där AI *ersätter* bedömning.
  - **Styrka:** Stark (redan länkad)

- **Ny:** [[Övervakade klassrumsprov blir primärt betygsunderlag när AI rubbar hemuppgifter]] <-> **Befintlig:** [[larare-blandar-ihop-retrieval-practice-med-bedomning]]
  - **Varför:** Tidigare problem (sammanblandning av retrieval practice och assessment) blir *akut* när hemuppgifter inte längre kan användas som summativ data. När klassrumsprov blir primärt betygsunderlag kan inte quiz-retrieval samtidigt göras lågstakes. Detta skapar en ny spänning som Bates & Shea inte diskuterar.
  - **Styrka:** Medel (tension/contradiction)
  - **Handling:** Länk i båda. En värdig not att skriva på detta tema.

### Kluster V - Historiedidaktik och komplexa förmågor

- **Ny:** [[Andra ordningens begrepp är historiedidaktikens svar på bedömning av komplexa förmågor]] <-> **Befintlig:** [[andra-ordningens-begrepp-historisk-frageteknik]]
  - **Varför:** Redan länkad. Befintlig not använder Nordgrens begrepp som grund för *frågeteknik* (fas 3-4 i sexfasstrukturen). Nya noten applicerar samma begrepp på *bedömningsdesign*. Samma teoretiska verktyg i olika faser av lektionscykeln.
  - **Styrka:** Stark (redan länkad)
  - **Handling:** MOC Evidensbaserad lektionsarkitektur bör uppdateras så att andra ordningens begrepp förekommer både under "Frågeteknik" och under ny rubrik "Bedömning av komplexa förmågor".

- **Ny:** [[Historielärare saknar ankarprov och måste bygga sin egen kalibreringsbas]] <-> **Befintlig:** [[formativ-bedomning-historia-forskningsgap]]
  - **Varför:** Inte länkad. Befintlig not identifierar forskningsgapet (ingen specifik FA-forskningsbas för historia). Nya noten ger den praktiska konsekvensen för en enskild lärare (måste bygga egen kalibreringsbas). Tillsammans: forskningsgap + praktisk respons.
  - **Styrka:** Stark
  - **Handling:** Länk i båda.

### Kluster VI - Könsfördelning och deltagande

- **Ny:** [[Könsskillnader i betyg kan vara bedömningseffekt eller faktisk kunskapsskillnad]] <-> **Befintlig:** [[cold-calling-jamnar-ut-konsfordelning]], [[think-pair-share-jamnar-ut-deltagande]]
  - **Varför:** Redan länkad. Kopplingen är dock asymmetrisk: de befintliga noterna handlar om *deltagande* i klassrumsdiskussion, den nya om *summativa betyg*. Den intressanta frågan - om klassrumsdeltagandet är det som driver betygsgapet - är öppen och värd att utforska.
  - **Styrka:** Medel
  - **Handling:** Behåll länkar. Not värd att skriva: "Deltagandegap i klassrum som potentiell mekanism bakom betygsgap per kön".

### Kluster VII - Undervisningsmaterialet

- **Ny:** [[Matrisbedömning lovade transparens men förde med sig reduktionism]] <-> `Undervisningsmaterial/Samhällskunskap/Källkritik AI och konspirationsteorier/bedomningskriterier.md`
  - **Varför:** Dina egna bedömningskriterier för källkritikmomentet är en *närmast prototypisk* implementering av kunskapskravsspråket ("översiktlig", "utförlig", "utförlig och nyanserad"). Nya noten säger att denna typ av kriterieträd i sig är reduktionistisk. Detta är en intern spänning i ditt eget material.
  - **Styrka:** Viktig (själv-contradiction)
  - **Handling:** Reflektionsfråga för dig: skulle du kunna komplettera kriterierna med en "helhetsbedömningsparagraf" som tar matriserna som vägvisare men inte som avprickningsmall?

## Bryggor över domäner

### Brygga 1: "Avprickning undergräver integrering" (tre domäner)
- **Bedömning:** [[Matrisbedömning lovade transparens men förde med sig reduktionism]]
- **Källkritik:** [[craap-metoden-gor-elever-mer-sarbara]], [[Källkritik som checklista undergräver det som skulle mätas]]
- **AI-feedback:** [[rubrik-baserad-prompting-forbattrar-ai-feedback-112-procent]]

Samma strukturella fenomen i tre domäner: när en komplex förmåga bryts ner till avprickbara steg tenderar man att (a) träna avprickningen istället för förmågan, (b) få en illusion av precision, (c) försämra den faktiska kompetensen. AI-feedback-noten är den enda som går *motsatt* riktning - där hjälper rubrikbaserad nedbrytning AI:n att ge bättre återkoppling. Detta är den intressanta spänningen: *för vem är rubrikbaserad dekomposition till hjälp, och för vem är den skadlig?* Preliminärt svar: kanske för AI-verktyget (som saknar tyst kunskap) vs för eleven (som ska utveckla den).

### Brygga 2: "Dokumentation som professionellt verktyg"
- **Bedömning:** [[Dokumentera dina betygsbeslut är det starkaste rättssäkerhetsverktyget]]
- **Lektionsplanering:** [[exit-ticket-planering-aterkopplingsslinga]]
- **Reflektion:** `Reflektioner/Vecka 16/Lektionsreflektion — Sh3 2026-04-13.md`

Gemensam mekanism: skriftlig dokumentation förstärker kalibrering genom att tvinga fram explicit formulering. I bedömning ger det rättssäkerhet, i undervisning ger det återkopplingsslingan, i reflektion ger det lärarutveckling. Dessa är inte bara "samma kategori" utan samma *mekanism*: den tysta kunskapen blir granskningsbar för jaget när den skrivs ner.

### Brygga 3: "Strukturell analys slår moralisk kritik"
- **Bedömning:** [[Betygsinflation är ett systemproblem, inte ett lärarproblem]]
- **Källkritik:** [[overmod-efter-kallkritikundervisning-nordisk-studie]]
- **Retrieval:** [[otestat-innehall-far-ingen-testningseffekt]]

I alla tre noter: den moraliska/voluntaristiska tolkningen ("lärare borde skärpa sig", "elever borde vara mer kritiska", "elever borde öva mer") är empiriskt svagare än den strukturella tolkningen ("systemet saknar ankare", "källkritikundervisning kan aktivt producera övermod", "det som inte testas får ingen effekt"). Det är en meta-insikt om när strukturell analys bör föredras framför moralisk.

### Brygga 4: "Tyst kunskap ↔ Lateral läsning ↔ Dialogisk undervisning"
- **Bedömning:** [[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]]
- **Källkritik:** [[lateral-lasning-faktakollares-strategi]]
- **Undervisning:** [[dialogisk-undervisning-alexander-mercer]]

Tre professionsbundna praktiker som alla motstår formaliseringsförsök: bedömarkunskap, faktakollares lateral läsning och dialogisk undervisning. Samtliga utvecklas genom *görande och samtal*, inte genom dokumentläsning. Alla tre ger större utdelning om man investerar i kollegialt utbyte än om man förfinar checklistor. Detta är en stark synthesis-möjlighet.

## Motsägelser och nyanseringar

### Motsägelse 1: "Transparens är bra" - ifrågasatt
Majoriteten av befintliga noter kring formativ bedömning tar som givet att transparenta kriterier är positivt. [[Matrisbedömning lovade transparens men förde med sig reduktionism]] och [[Den tysta bedömarkunskapen]] utmanar detta direkt: transparens har en kostnad i form av reduktion, och den tysta kunskapen är just det som *inte kan* göras transparent. Detta är inte en fullständig motsägelse utan en nyansering: transparens om *lärandemålen* (strategi 1 hos Wiliam/Leahy) ≠ transparens om *kriteriers exakta operationalisering*.

**Handling:** En nyanseringsnot: "Transparensdilemmat i bedömning: målen bör vara transparenta, operationaliseringen kan inte vara det".

### Motsägelse 2: "Formativt eller summativt - inte båda samtidigt"
[[Lärarens dubbla roll som coach och domare]] säger att formativa och summativa funktioner bör *separeras i tid och rum*. [[retrieval-practice-som-dubbelt-formativt-verktyg]] från 2026-03-07 säger motsatsen: retrieval practice fungerar just för att den *kombinerar* funktionerna. 

Detta är en genuin tension. Upplösningen är troligen att *lågstakes* retrieval inte aktiverar domar-rollen, medan *summativa beslut* alltid gör det. Så kombinationen är bara tillåten så länge eleven inte upplever det som bedömning. Detta är en ny insikt värd att skriva ut.

**Handling:** Syntesnot: "Retrieval practice som gränsfall: när formativ/summativ-separationen inte gäller".

### Nyansering 1: Historielärarens position
Befintliga noter behandlar formativ bedömning som en generell lärarkompetens. [[Historielärare saknar ankarprov och måste bygga sin egen kalibreringsbas]] och [[formativ-bedomning-historia-forskningsgap]] visar tillsammans att *historiedidaktiken står nästan utan forskningsbas för formativ bedömning*. Det betyder att historieläraren både saknar externa kalibreringsankare (ankare-gap) och saknar evidensbaserade formativa tekniker (forsknings-gap). Det är en dubbel vakuum som bör synas i MOC Evidensbaserad lektionsarkitektur.

## Synthesis-möjligheter

### 1. Artikel: "Reduktionismens tre ansikten - varför avprickning undergräver det du vill mäta"
- **Källor:**
  - [[Matrisbedömning lovade transparens men förde med sig reduktionism]]
  - [[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]]
  - [[Källkritik som checklista undergräver det som skulle mätas]]
  - [[craap-metoden-gor-elever-mer-sarbara]]
  - [[lateral-lasning-faktakollares-strategi]]
  - [[Validitet och reliabilitet är fiender i bedömning av komplexa förmågor]]
  - [[djupa-vs-ytliga-framgangsskriterier]]
- **Unik vinkel:** Samma strukturella fel i tre domäner (bedömning, källkritik, kunskapsmätning): komplex förmåga -> avprickningslista -> träning av listan istället för förmågan -> försämrad kompetens *med illusion av precision*. Artikeln använder matriser som huvudexempel, källkritik och CRAAP som bekräftande parallell, och Polanyi/Wiliam som teoretisk ram.
- **Publiceringsvärde:** För andra samhällskunskaps- och historielärare. Passar Skola och Samhälle (där Jönsson publicerat sin kritik), eller som inlägg i betygsutredningens remiss-debatt. Tidsfönstret är akut: Prop. 2025/26:197 är under behandling.

### 2. Artikel: "Den tysta bedömarkunskapen - varför nya kunskapskrav inte räcker"
- **Källor:**
  - [[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]]
  - [[Sambedömning är kompetensutveckling men inte likvärdighetsgaranti]]
  - [[Lärarens ämneskunskap är en förutsättning för valid bedömning]]
  - [[pseudo-formativ-bedomning-jonsson-kritik]]
  - [[Formativ och summativ bedömning kan inte enbart förstås som tekniker]]
- **Unik vinkel:** En vänd-på-huvudet-argumentation mot policyinstinkten att "bättre formulerade kunskapskrav = likvärdigare bedömning". Tyst kunskap hos lärare är den verkliga mekanismen; kunskapskraven är grundvalen men inte motorn. Praktisk implikation: investera i sambedömning, inte i fler matrisverktyg.
- **Publiceringsvärde:** För beslutsfattare, rektorer, förstelärare. Möjlig målgrupp: Skolledaren, Lärarnas tidning.

### 3. Artikel: "Henrekson och det strukturella likvärdighetsproblemet - en lärares perspektiv"
- **Källor:**
  - [[Betygsinflation är ett systemproblem, inte ett lärarproblem]]
  - [[Målrelaterade betyg utan externa ankare driver ofrånkomligt mot dold normrelatering]]
  - [[Henrekson-utredningen föreslår 70-30-modell med centralt rättade slutprov]]
  - [[Samhällskunskap står inför en fundamental bedömningsförändring när slutprov införs]]
  - [[AI har accelererat behovet av centralt rättade slutprov snarare än bromsat det]]
  - [[Lärarna ser likvärdighetsproblemet tydligare än den offentliga debatten antyder]]
  - [[Acceptera att perfekt likvärdighet är omöjlig är en professionell hållning]]
- **Unik vinkel:** En lärarröst som *stödjer* huvudtanken i Henrekson-utredningen utifrån koordinationsproblemets logik, snarare än den vanliga lärarpositionen som är försvarsinriktad. Använder det kontraintuitiva fyndet att Skolinspektionens enkät 2024 visar att *lärarna själva* ser likvärdighetsproblemet tydligare än offentliga debatten. AI-accelerationen är den tredje bekräftelsen.
- **Publiceringsvärde:** Hög aktualitet under remissbehandlingen. Motvikt till de mest defensiva lärarreaktionerna. Passar Kvartal, Skolvärlden, eller egen Substack.

### 4. Artikel: "Coach eller domare - varför formativ/summativ-separationen bestämmer klassrummets klimat"
- **Källor:**
  - [[Lärarens dubbla roll som coach och domare är ett olöst dilemma]]
  - [[Formativ och summativ bedömning kan inte enbart förstås som tekniker]]
  - [[betygsfeedback-dodar-kommentarer]]
  - [[klapp-betyg-negativa-effekter-lagpresterande]]
  - [[felklimat-felaktiga-svar-som-lararresurs]]
  - [[formativ-bedomning-starker-tilhorighet-mest]]
- **Unik vinkel:** Coach/domare-dilemmat framställs vanligen som en teknisk utmaning. Denna artikel visar att det är ett *klimatfenomen*: när läraren glider mellan rollerna utan tydliga markörer blir hela klassrummet otryggt, och det är lågpresterande elever som drabbas hårdast. Praktisk vägledning: explicita rollmarkeringar + separation i tid/rum.
- **Publiceringsvärde:** För den egna lärarpraktiken; passar även som fortbildningsunderlag.

### 5. MOC-kandidat: "MOC - Bedömning och betygssättning"
- **Omfattning:** Minst 28 noter (23 nya + minst 5 från 2026-03-07 som direkt rör bedömning: pseudo-formativ-bedomning-jonsson-kritik, fem-strategier-formativ-bedomning-wiliam-leahy, betygsfeedback-dodar-kommentarer, klapp-betyg-negativa-effekter-lagpresterande, digital-verktyg-formativ-bedomning-mentimeter-kahoot, sjalvbedomning-kalibrering-kravs-traning, formativ-bedomning-effektstorlekar-syntes, helklass-feedback-skalar-kvalitetsaterkoppling, djupa-vs-ytliga-framgangsskriterier, ai-formativ-bedomning-mojligheter-och-risker, feedback-timing-mindre-kritisk-an-vad-man-trott). Plus [[larare-blandar-ihop-retrieval-practice-med-bedomning]] från 2026-04-12.
- **Syfte:** Bedömningsdomänen har nu >30 noter och en intern differentiering (formativt/summativt, diagnos/reform, teknik/förhållningssätt) som motiverar en egen MOC. Tröskeln 15 noter är mer än passerad. Alternativt: en sektion "Bedömning" i befintlig MOC Evidensbaserad lektionsarkitektur - men domänen är nu så stor att egen MOC är försvarbart.
- **Föreslagen struktur:**
  1. Strukturell diagnos (betygsinflation, målrelatering, ankarprov)
  2. Reform (Henrekson, 70-30, centralt rättade slutprov)
  3. Formativ vs summativ (spänningen, pseudo-formativt, coach/domare)
  4. Praktiker och verktyg (matriser, sambedömning, tyst kunskap, dokumentation)
  5. Ämnesspecifikt (historia, samhällskunskap, källkritik)
  6. Rättssäkerhet och likvärdighet (F-sättning, dokumentation, etik)
  7. AI-disruption och examination
  8. Effektstorlekar - snabbreferens (återbruk från MOC Evidensbaserad lektionsarkitektur)

### 6. Framework-utökning: Sexfasstrukturen + bedömningsdimension per fas
Den befintliga MOC Evidensbaserad lektionsarkitektur organiserar formativ bedömning under Fas 4 (guidad övning). De nya noterna motiverar en *genomgående* bedömningsdimension: varje fas bör explicit markeras med "formativ signal" vs "summativ evidens" - och särskilt Fas 5 (självständig övning) och Fas 6 (exit ticket) bör specificeras ur det nya coach/domare-perspektivet. Konkret tillägg: [[Lärarens dubbla roll som coach och domare är ett olöst dilemma]] bör länkas från MOC-introduktionen, inte bara som en delstrategi.

## Statistik

- Nya noter: 23
- Redan etablerade länkar från nya noter till befintlig vault (räknat från sessionens CHANGELOG): 13
- Ytterligare länkar identifierade i denna discovery: ca 14 nya, inklusive 2 bakåtlänkar
- Starka direktkopplingar: 11
- Bryggor över domäner: 4 (avprickning-reduktion, dokumentation-som-professionsverktyg, strukturell-vs-moralisk, tyst-kunskap/lateral-läsning/dialogisk)
- Motsägelser/nyanseringar värda egen not: 3
- Artikelkandidater: 4
- MOC-kandidat: 1 (MOC Bedömning och betygssättning)
- Framework-utökningar: 1 (bedömningsdimension per fas i sexfasstrukturen)

## Rekommenderade nästa steg

1. **Reparera venv och kör `./resources/local-brain-search/run_index.sh`** för att validera kopplingarna med vektorsimilarity. De grep-baserade kopplingarna bör ligga på semantisk similaritet 0.65-0.85; om de inte gör det behövs revidering.

2. **Lägg till bakåtlänkar** i de 3-4 centrala befintliga noter som de nya noterna länkar till men som saknar bakåtlänk: `pseudo-formativ-bedomning-jonsson-kritik.md`, `betygsfeedback-dodar-kommentarer.md`, `klapp-betyg-negativa-effekter-lagpresterande.md`, `andra-ordningens-begrepp-historisk-frageteknik.md`. Detta är ett enkelt ingrepp som kraftigt ökar graf-traversalbarheten.

3. **Skapa MOC Bedömning och betygssättning** (se syntesförslag 5). Den övergår domäntröskeln och kommer annars dränka MOC Evidensbaserad lektionsarkitektur.

4. **Skriv syntesnoten "Reduktionismens tre ansikten"** (syntesförslag 1). Det är den enskilt starkaste tvärdomän-insikten ur sessionen och passar både som egen permanentnot och som artikelunderlag.

5. **Överväg reflektionsnot: Hur påverkar Henrekson-reformen det egna undervisningsmomentet "Källkritik AI och konspirationsteorier"?** Ditt egna bedömningskriteriedokument i `Undervisningsmaterial/.../bedomningskriterier.md` är en tydlig instans av det som [[Matrisbedömning lovade transparens men förde med sig reduktionism]] kritiserar - en intressant självreflektion värd att fånga.
