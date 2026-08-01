---
created: 2026-07-19
updated: 2026-07-19
created_by: claude-fable-5
updated_by: claude-fable-5
agent_version: 04.26
type: topic
tags:
  - formagetraning
  - historia-1b
  - orsaksresonemang
  - kvalitetskriterier
  - bedomning
  - ai-feedback
---

# Delfärdighetstaxonomin operationaliserad - kvalitetskriterier för orsaks- och konsekvensresonemang

Steg 1 i sommarbyggordningen från [[Formagetraningens-utvecklingsplan-2026-07]]. Dokumentet översätter de fem delfärdigheterna till **observerbara kvalitetskriterier per nivå** - underlaget för (a) exempelsvar i nivåer, (b) AI-feedbackprompter, (c) uppgiftsformuleringar. Utkast genererat för kuratering; läraren äger slutversionen.

> **Om nivåbeteckningarna:** Nivåerna kallas här **N1/N2/N3** och är internt mappade mot Gy11:s E/C/A-progression (se tabell sist). Beteckningarna används ENDAST i lärar- och AI-vända material. I elevvänd feedback är nivåord förbjudna - exempelsvaret sköter jämförelsen, AI:n pekar på nästa handling. Jfr [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]]: kriterierna nedan är rubriken, exempelsvaren är ankarna.

---

## Genomgående kvalitetsmarkörer

Fyra markörer återkommer i alla delfärdigheter. AI-promptern ska detektera dem; exempelsvaren ska demonstrera dem.

1. **Mekanism, inte kronologi.** Ett samband håller när eleven anger *hur* A ger B ("eftersom", "vilket innebar att", "det öppnade för"), inte bara att A kom före B ("och sedan"). Kronologisk följd utan mekanism är den vanligaste förväxlingen i hela taxonomin.
2. **Begreppsbruk.** Aktiv användning av andra ordningens begrepp: utlösande/underliggande, kort-/långsiktig, struktur/aktör, nödvändig/tillräcklig, avsedd/oavsedd. Jfr [[andra-ordningens-begrepp-historisk-frageteknik]]. Kvalitetsskillnad: N1 använder begreppen när uppgiften ger dem; N3 tar in dem självmant och korrekt.
3. **Belägg.** Konkreta historiska exempel (händelser, aktörer, årtal, förhållanden) som bär resonemanget. Ett resonemang utan stoff är en åsikt; jfr grundhållningen att innehållet är förutsättningen för förmågorna.
4. **Ställningstagande med kriterium.** Där uppgiften kräver värdering: ett tydligt val, motiverat med ett explicit jämförelsekriterium - inte "alla var viktiga" och inte val utan grund.

---

## Delfärdighet 1 - Kategorisera

**Vad tränas:** att sortera orsaker/konsekvenser i analytiska kategorier - det begreppsliga fundamentet för allt som följer.
**Orsaksriktning:** kort-/långsiktig, utlösande/underliggande, PESI-dimensioner (politisk/ekonomisk/social/idémässig).
**Konsekvensriktning:** kort-/långsiktig, avsedd/oavsedd, samhällsområde.
**Format:** sortering (dra-och-släpp, självrättande) + kort motivering vid gränsfall.

### Kvalitetskriterier

| Nivå | Observerbart |
|---|---|
| **N1** | Placerar huvuddelen av faktorerna i rätt kategori. Motivering vid gränsfall upprepar kategorins namn ("den är långsiktig för att den pågick länge") utan att använda kategorins definition. |
| **N2** | Placerar korrekt och motiverar gränsfall med kategorins *definition* ("utlösande, eftersom den direkt föregick händelsen och satte igång ett förlopp som de underliggande spänningarna gjort möjligt"). |
| **N3** | Ser och formulerar att kategoritillhörighet kan bero på perspektiv: samma faktor kan vara utlösande i ett tidsfönster och underliggande i ett annat, eller ligga i flera PESI-dimensioner samtidigt. Motiverar varför tvetydigheten finns i stället för att dölja den. |

### Typiska svagheter (AI-prompterns prioritetslista)

- Förväxlar *utlösande* med *viktigast* - tror att gnistan är den tyngsta orsaken.
- Antar att kortsiktig = mindre betydelsefull.
- Kategoriserar efter var faktorn stod i läroboken, inte efter dess funktion i förloppet.
- Behandlar kategorierna som fack med facit i stället för analysverktyg (syns i motiveringar som "den ska vara där").

### Uppgiftsverb

"Sortera", "placera och motivera gränsfallen", "vilken kategori passar sämst och varför". Jfr [[prompt-verb-effekten-vardera-slar-forklara]] - även i sorteringsformatet ska motiveringsfrågan tvinga fram ett ställningstagande, inte en beskrivning.

---

## Delfärdighet 2 - Bygga kedjor

**Vad tränas:** att konstruera kausala kedjor med mellanled - orsak till mellanled till händelse (bakåt), händelse till följd till följd (framåt). Förlänga eller fylla i givna kedjor.
**Format:** kedjebyggare + kort fritext. Järnregel: grafen mynnar alltid i prosa - kedjan är stödstruktur, löptexten är det medium som examineras.

### Kvalitetskriterier

| Nivå | Observerbart |
|---|---|
| **N1** | Bygger en kedja med minst ett mellanled i rimlig ordning. Länkarna är av typen "ledde till" utan angiven mekanism. Prosan återger kedjan som uppräkning. |
| **N2** | Flera mellanled. Varje länk anger en mekanism - *hur* ledet ger nästa ("eftersom", "vilket gjorde att"). Prosan är sammanhängande resonemang, inte punktlista med sambandsord. |
| **N3** | Mekanism i varje länk + kalibrerad styrka: skiljer på nödvändiga led och förstärkande led ("bidrog till", "påskyndade", "förstärkte" används medvetet, inte som variation). Markerar var kedjan är osäker eller var en alternativ väg fanns. |

### Typiska svagheter

- **Kronologi som kausalitet:** "och sedan... och sedan" - händelser i tidsordning utan mekanism (markör 1, vanligast av alla).
- **Jättekliv:** hoppar över mellanled så att länken blir omöjlig att pröva ("Versaillesfreden ledde till andra världskriget").
- **Cirkelslut:** sista ledet omformulerar frågan i stället för att landa i den efterfrågade händelsen/följden.
- **Grafflykt:** korrekt kedja i byggaren men prosa som inte återger mekanismerna - kedjan blev ett eget medium (flaggad risk i utvecklingsplanen).

### Uppgiftsverb

"Bygg ut kedjan med minst två mellanled", "fyll i det saknade ledet och förklara varför just det behövs", "skriv ut kedjan som sammanhängande resonemang".

---

## Delfärdighet 3 - Förgrena

**Vad tränas:** att hantera flera samtidiga orsakslinjer (samverkande orsaker, struktur vs aktör) respektive parallella följdlinjer - från kedja till väv.
**Format:** fritext.

### Kvalitetskriterier

| Nivå | Observerbart |
|---|---|
| **N1** | Anger flera orsaker/följder, var och en med enkel egen koppling till händelsen. Formen är en lista: linjerna berör inte varandra. |
| **N2** | Visar minst en explicit *samverkan* - hur två orsaker förstärkte varandra eller hur en möjliggjorde en annan. Skiljer struktur (förhållanden som möjliggör) från aktör (handlingar som utlöser) när materialet innehåller båda. |
| **N3** | Bygger en förklaringsarkitektur: strukturella förutsättningar + aktörshandlingar i samspel, med hierarki mellan linjerna. Prövar kontrafaktiskt ("utan X hade Y troligen ändå..., men senare/svagare"). I konsekvensriktningen: visar att följder drabbade olika grupper olika (heterogena konsekvenser, jfr [[andra-ordningens-begrepp-historisk-frageteknik]]). |

### Typiska svagheter

- **Lista i stället för väv:** många orsaker uppräknade, noll interaktioner - kvantitet maskerad som komplexitet.
- **Aktörsfixering:** allt reduceras till en persons vilja ("Hitler ville...").
- **Strukturdeterminism:** motsatsen - förloppet framställs som oundvikligt, aktörernas val försvinner.
- **Enhetliga konsekvenser:** "folket drabbades" utan differentiering mellan grupper.

### Uppgiftsverb

"Visa hur X och Y samverkade", "vilka förutsättningar krävde aktörens handling för att få effekt", "följ två följdlinjer och visa var de skiljer sig".

---

## Delfärdighet 4 - Vikta

**Vad tränas:** att ta ställning - tyngsta orsaken, mest betydelsefulla konsekvensen - och motivera valet med explicita kriterier (nödvändig vs tillräcklig, räckvidd, varaktighet).
**Format:** fritext med ställningstagande.

### Kvalitetskriterier

| Nivå | Observerbart |
|---|---|
| **N1** | Tar tydlig ställning och ger en enkel motivering, men utan jämförelsekriterium ("viktigast eftersom den påverkade mest") och utan att väga mot alternativ. |
| **N2** | Ställningstagande med explicit kriterium (nödvändighet, räckvidd, tidsdjup) och aktiv jämförelse med minst en alternativ kandidat: visar varför valet slår alternativet *enligt kriteriet*. |
| **N3** | Kriteriestyrd jämförelse av flera kandidater med kontrafaktisk prövning ("hade förloppet skett utan X?"). Nyanserar: viktningen kan bero på tidsperspektiv eller frågeställning ("tyngst för utbrottet är X, för förloppets omfattning Y") - utan att tappa ställningstagandet. |

### Typiska svagheter

- **Ställningstagande utan kriterium:** valet motiveras med storleksord ("störst", "påverkade flest") som aldrig definieras.
- **Återberättelse i stället för vägning:** eleven beskriver sin valda orsak utförligt men jämför aldrig - utförlighet maskerad som viktning.
- **Vägran att välja:** "alla orsakerna var lika viktiga och hängde ihop" - förgrening (delfärdighet 3) använd som flykt från delfärdighet 4.
- **Kriteriedrift:** börjar väga efter nödvändighet, byter omärkt till räckvidd när det passar valet.

### Uppgiftsverb

"Värdera vilken orsak som väger tyngst", "argumentera för varför X snarare än Y", "bedöm om X var nödvändig för att Z skulle ske". Aldrig "förklara varför X var viktig" - det bjuder in återberättelse (jfr [[prompt-verb-effekten-vardera-slar-forklara]]).

---

## Delfärdighet 5 - Kritisera/förbättra

**Vad tränas:** att bedöma ett givet resonemang, hitta dess svaghet och lyfta det - den självkorrigerande blicken. Strategiskt central: återanvänder exempelsvaren som råmaterial och är mekanismen som gör eleverna oberoende av läraren.
**Format:** givet resonemang + fritext.

### Kvalitetskriterier

| Nivå | Observerbart |
|---|---|
| **N1** | Identifierar en verklig svaghet i det givna resonemanget och benämner den konkret ("här sägs inte hur A ledde till B"), även om diagnosen stannar vid det enskilda stället. |
| **N2** | Diagnostiserar svagheten, förklarar *varför* den sänker resonemanget (vilken kvalitetsmarkör som saknas) och föreslår en konkret, riktad förbättring av just det stället. |
| **N3** | Diagnostiserar på strukturnivå - känner igen *vilken delfärdighet* som brister (saknat mellanled? lista utan samverkan? viktning utan kriterium?) - skriver om den svaga delen så att den håller högre kvalitet, och identifierar vad i resonemanget som redan bär och ska bevaras. |

### Typiska svagheter

- **Faktakritik i stället för strukturkritik:** letar felaktiga årtal i stället för brutna resonemangsled.
- **Universalkritiken:** "det behövs mer fakta/mer utveckling" - en kritik som passar alla texter passar ingen.
- **Totalrenovering:** skriver om hela resonemanget i stället för att förbättra riktat - visar inte att eleven vet *var* svagheten satt.
- **Artighetsblindhet:** hittar ingen svaghet i ett resonemang som har tydliga brister (kalibreringsproblem - eleven saknar än så länge kvalitetsblicken; träna mot delfärdighet 1-4-kriterierna).

### Uppgiftsverb

"Bedöm resonemangets starkaste och svagaste led", "förbättra den svagaste delen utan att skriva om resten", "vad skulle göra det här resonemanget mer övertygande - gör ändringen".

---

## Mappning mot Gy11:s progression

Intern referens för exempelsvar och kalibrering - används aldrig mot elev.

| Taxonomins nivå | Gy11-värdeord (Hi 1b) | Kärnskillnad i praktiken |
|---|---|---|
| N1 | översiktligt; **enkla** förklaringar; begrepp med viss säkerhet | Samband finns men utan mekanism; ställningstagande utan kriterium; kategorier används när de ges |
| N2 | utförligt; förklaringar (utvecklade); begrepp med viss säkerhet | Mekanism i leden; explicit kriterium; en samverkan visad; riktad förbättring |
| N3 | utförligt och nyanserat; **komplexa** förklaringar; begrepp med säkerhet | Kalibrerad styrka i länkarna; kontrafaktisk prövning; perspektivberoende viktning; strukturdiagnos |

Notera att progressionen N1 till N3 i varje delfärdighet är byggd kring samma tre språng: (1) från *att* till *hur* (mekanism), (2) från påstående till kriterium, (3) från en linje till flera i samspel. Det är dessa tre språng AI-feedbackens "EN förbättring" ska peka mot - alltid det tidigaste språng som inte tagits.

---

## Konsekvenser för nästa byggsteg

- **Exempelsvar (steg 4):** tre svar per övning (N1/N2/N3) där varje svar *demonstrerar* sin nivås kriterier och kommentaren pekar ut de observerbara dragen ("lägg märke till att varje led anger hur..."). Kommentaren använder kriteriespråket, aldrig nivåbeteckningen.
- **AI-prompter (steg 2-3):** promptern får (a) delfärdighetens kriterietabell, (b) svaghetslistan som prioritetsordning, (c) feedbackformatet en styrka + EN förbättring där förbättringen alltid är det tidigaste otagna språnget. Blindtestet i steg 3 prövar om billig modell klarar N-klassificering för delfärdighet 1-2.
- **Syntetiska elevsvar (steg 3):** genereras per nivå och per typisk svaghet ur listorna ovan - svagheterna är testfallen.
- **Uppgiftsbanken (steg 4):** verbvalen per delfärdighet ovan är obligatoriska; "beskriv/förklara/redogör" är förbjudna i övningsformuleringar.

## Relaterat

- [[Formagetraningens-utvecklingsplan-2026-07]] - beslutsdokumentet detta operationaliserar
- [[andra-ordningens-begrepp-historisk-frageteknik]] - begreppsapparaten bakom kategorierna
- [[prompt-verb-effekten-vardera-slar-forklara]] - verbvalen i uppgiftsformuleringarna
- [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]] - kriterier + ankare = reliabilitet; här riktad mot eleven själv
- [[desirable-difficulty-sweet-spot-60-till-85-procent]] - svårighetskalibrering av övningarna (stoffprincipen)
- [[llm-bedomarreliabilitet-spannet-030-080]] - **direkt hot mot N2-N3-språnget.** Modellen är dokumenterat mildare mot svaga svar och hårdare mot starka (proportionell bias), vilket komprimerar skalan mot mitten och gör det svårare att skilja de nivåer där sprången ligger. Verbositetsbias träffar dessutom exakt svagheten "utförlighet maskerad som viktning" i delfärdighet 4 - modellen är benägen att belöna precis det taxonomin är byggd för att fånga. Taxonomins tre språng är kvalitativa och längdneutrala, vilket är rätt konstruktion; testa därför längdkänsligheten explicit (samma resonemang i kort och lång form, samma "Nästa steg" förväntat).
- [[automation-bias-hos-larare-experimentellt-bekraftad]] - gäller AI-prompterna i steg 2-3: din granskning av modellens N-klassificering är ankrad om du ser den före din egen.
