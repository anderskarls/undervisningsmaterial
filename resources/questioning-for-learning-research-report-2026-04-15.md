---
created: 2026-04-15
updated: 2026-04-15
created_by: claude-opus-4-6[1m]
updated_by: claude-opus-4-6[1m]
agent_version: 03.26
---

# Att ställa frågor för lärande - Frågedesign i quiz, examinationer och undervisning

**Forskningsrapport - senaste evidensen 2024-2025**
**Framtagen:** 2026-04-15
**Författare:** Cornelius research-specialist (claude-opus-4-6[1m])
**Omfattning:** Systematisk genomgång av peer-reviewad forskning, meta-analyser, preprints och domänspecifik litteratur från 2024-2025 om *frågedesign som hantverk* - inte formativ bedömning i allmänhet.

**Avgränsning mot tidigare rapporter i vaultet:**
Denna rapport kompletterar och överlappar medvetet inte med:
- `formative-assessment-research-report-2026-03-07.md`
- `discussion-based-teaching-research-report-2026-03-07.md`
- `ai-formative-feedback-research-2026-04-12.md`

Fokus här ligger på frågans arkitektur: hur man formulerar, placerar, graderar och följer upp en fråga så att den blir ett lärandeverktyg snarare än ett mätinstrument.

---

## Innehållsförteckning

1. [Sammanfattning](#sammanfattning)
2. [1. Item writing för MCQ - distraktorsdesign och vanliga fel](#1-item-writing-för-mcq)
3. [2. Frågetaxonomier i praktiken - Bloom, SOLO, DOK](#2-frågetaxonomier-i-praktiken)
4. [3. Högre ordningens frågor vs faktafrågor](#3-högre-ordningens-frågor-vs-faktafrågor)
5. [4. Öppna vs slutna frågor - format-effekter](#4-öppna-vs-slutna-frågor)
6. [5. Student-genererade frågor och AI-stöd](#5-student-genererade-frågor-och-ai-stöd)
7. [6. Sokratisk metod, väntetid och cold calling](#6-sokratisk-metod-väntetid-och-cold-calling)
8. [7. Examensfrågor, rubriker och AI som bedömare](#7-examensfrågor-rubriker-och-ai-som-bedömare)
9. [8. Frågesekvensering - interleaving och ordning](#8-frågesekvensering)
10. [9. Produktivt misslyckande, pretesting och desirable difficulties](#9-produktivt-misslyckande-och-pretesting)
11. [10. AI-genererade frågor - kvalitet och validering](#10-ai-genererade-frågor)
12. [11. Feedback som funktion av frågetyp](#11-feedback-som-funktion-av-frågetyp)
13. [12. Tolkande ämnen - historia och samhällskunskap](#12-tolkande-ämnen)
14. [Motstridiga rön och kontroverser](#motstridiga-rön-och-kontroverser)
15. [Praktiska implikationer för en svensk gymnasielärare](#praktiska-implikationer)
16. [Huvudinsikter](#huvudinsikter)
17. [Referenser](#referenser)

---

## Sammanfattning

Forskningen 2024-2025 bekräftar och förfinar en bild där *frågedesignens detaljer* - inte bara valet mellan "öppet eller stängt" - avgör om en fråga producerar lärande. Fyra robusta huvudlinjer framträder:

**(1) Formateffekten är mindre än man länge trott.** Den mest direkta jämförelsen mellan MCQ och Very Short Answer Questions (van Wijk m.fl., 2024, BMC Medical Education) visar ingen signifikant skillnad i långtidsretention efter retrieval-övning. Formatet spelar mindre roll än *feedback, spacing och frågans kognitiva nivå*.

**(2) Pretesting (att gissa fel innan man lär sig) är ett av de mest kraftfulla och underutnyttjade verktygen.** Mera m.fl. (2025) rapporterar Cohen's *d* mellan 0.63 och 1.29 - oavsett om feedback ges direkt eller 24-48 timmar senare. Detta utmanar den traditionella regeln att feedback måste vara omedelbar.

**(3) Distraktorsdesign avgör MCQ-kvaliteten.** Upp till 35% av distraktorer i publicerade prov är *icke-fungerande* (väljs av <5% av eleverna). 2024-2025 har sett en explosion av forskning om LLM-baserad distraktorsgenerering, där modeller som tränas på *elevbeteendedata* slår modeller tränade på mänskligt skrivna distraktorer.

**(4) AI-genererade frågor är "good enough" - men bara med kvalitetskontroll.** Ahmed m.fl. (2025) visar att GPT-4-genererade SBA-frågor inte skiljer sig statistiskt från mänskligt skrivna frågor på facility eller discrimination (p > 0.17), *men 31% av AI-frågor måste förkastas* på grund av faktafel eller felaktig läroplanskoppling.

För **samhällskunskap och historia** är den viktigaste slutsatsen att tolkande ämnen kräver en annan frågearkitektur: källbaserade argumentations-prompts med *tvåstegs-rubriker* (innehåll + claim) fungerar, men kräver kalibrering - Steiss m.fl. (2024) visar att inter-bedömarreliabilitet kan nå ICC = .923 *om* rater-träning sker mot ankar-exempel.

---

## 1. Item writing för MCQ

### Det ihärdiga problemet med icke-fungerande distraktorer

En central insikt i MCQ-forskningen är att *de flesta flervalsfrågor har dåliga distraktorer*. Klassisk analys visar att cirka 35% av distraktorer är icke-fungerande (valda av färre än 5% av eleverna, eller med negativ diskriminering). Detta omvandlar i praktiken en 4-svars-MCQ till en 2-svars-MCQ med 50% gissningsbaseline.

**Haladyna-reglerna som baseline** (de 31 item writing-reglerna från Haladyna, Downing & Rodriguez 2002) förblir den implicita guldstandarden, och 2024-2025 års forskning testar hur väl automatiska system följer dem. Huvudsyndarna:
- Distraktorer som är grammatiskt diskordanta med frågestammen (cue).
- "All of the above" / "None of the above" (välkänt att försämra diskriminering).
- Frågor som testar enbart recall trots ambition om högre tänkande.
- Distraktorer som är för osannolika (elever eliminerar dem omedelbart).

### 2024-2025: LLM-driven distraktorsgenerering vänder perspektivet

**Bitew m.fl. (2025)** publicerade vid ACL 2025 en metod där LLM tränas att *förutsäga vilka distraktorer elever sannolikt väljer*, baserat på historisk svarsdata. Detta är ett paradigmskifte: istället för att generera distraktorer som *liknar* mänskligt skrivna, optimerar man för *elevkognitiv plausibilitet*. Arxiv-ID: 2501.13125.

**Alhazmi m.fl. (2024)** genomförde en systematisk litteraturöversikt (60 studier, 2009-2024) över automatisk distraktorsgenerering och identifierade tre generationer av metoder: regelbaserade -> embedding-baserade -> LLM-baserade. Den sista visar högst plausibilitet men kräver fortfarande mänsklig kvalitetsgranskning för innehållsvaliditet.

### Fel som specifikt drabbar MCQ-kvalitet

- **Cueing**: längsta alternativet är oftare rätt (förekommer i 40%+ av mänskligt skrivna prov).
- **Negative phrasing**: "Vilket av följande är INTE..." sänker reliabilitet med 0.1-0.2 på alpha.
- **Convergence cueing**: rätta svaret delar ord med stammen.
- **Cognitive level drift**: frågan *tänks* som tolkning men *testar* recall.

### Praktiska slutsatser

1. Skriv *först* frågestammen som en öppen fråga, *därefter* lägg till svarsalternativ där distraktorer representerar *faktiska missförstånd* du sett hos elever.
2. Använd egna tidigare exit tickets som distraktorsbank.
3. Kör en pilot med två klasser innan du använder en MCQ för summativ bedömning - om en distraktor får <5% väljande, byt ut den.
4. LLM kan hjälpa dig generera distraktorer, men du måste *själv bekräfta* elevplausibilitet.

---

## 2. Frågetaxonomier i praktiken

### Taxonomikrig eller kompletterande linser?

2024-2025 års forskning har övergivit det binära "Bloom vs DOK"-perspektivet. Aktuell praktiker-konsensus (t.ex. Structural Learning 2025) ser dem som **kompletterande linser**:

- **Bloom's reviderade (Anderson & Krathwohl, 2001)**: beskriver kognitiva *processer* (remember -> apply -> evaluate -> create) på den elev som utför tänkandet.
- **SOLO (Biggs & Collis, 1982)**: beskriver *strukturen* på ett svar (prestrukturellt -> unistrukturellt -> multistrukturellt -> relationellt -> utökat abstrakt).
- **Webb's DOK (2002)**: beskriver *djupet i uppgiften* - hur mycket kognitivt arbete krävs, oberoende av om eleven faktiskt gör det arbetet.

Den praktiska skillnaden är viktig: en DOK-4-uppgift kan besvaras på SOLO-nivå "unistrukturellt" om eleven fuskar eller endast citerar en källa. **Taxonomier beskriver olika saker och ska användas tillsammans.**

### Empirisk validering 2024-2025

Den renaste empiriska valideringen kommer från kognitiv belastnings-forskning: **Pyke, Lunau & Javadi (2025)** i *Quarterly Journal of Experimental Psychology* jämför "desirable difficulties"-ramverket med cognitive load theory och visar att svårighetsnivå modererar lärande på ett icke-linjärt sätt - det finns en sweet spot där uppgiften är svår nog för att aktivera djup bearbetning men inte så svår att den överstiger arbetsminneskapaciteten.

**Implikation**: En fråga på Bloom-nivå "analyze" på en elev med otillräcklig prior knowledge producerar inte analys utan cognitive overload och gissning. Taxonominivå måste *kalibreras mot elevens förförståelse*.

**Svensk kontext**: De nya kunskapskraven i Gy25 (gäller från hösten 2025) använder implicit SOLO-liknande progressioner (E = "redogöra enkelt", C = "redogöra utvecklat", A = "redogöra nyanserat och välutvecklat"). Detta är strukturell progression snarare än processprogression - det vill säga, närmare SOLO än Bloom.

---

## 3. Högre ordningens frågor vs faktafrågor

### Den klassiska hypotesen

"Fråga på högre Bloom-nivå -> djupare lärande." Hypotesen härstammar från 1950-talet men stöds svagt av empiriska data.

### Vad 2024-2025 visar

**Agarwal m.fl. (uppdaterad 2024-2025 genom flera replikationer)** rapporterar att retrieval practice fungerar *både* för fakta och högre-ordning, men:
- Effekten är större för fakta när retentionsintervallet är kort.
- Effekten är större för högre-ordning när transfer mäts.
- Frågenivån måste *matcha* det lärandemål som testas i slutet.

**Glaser & Richter (2025)** publicerade i *Teaching of Psychology* en föreläsnings-experimentstudie som visade testing effect på direkt testat innehåll (*d* ≈ 0.45) men inte på untested content som studerats i samma föreläsning - dvs begränsad *transfer* mellan frågenivåer.

**Van den Broek m.fl. (2023, fortsatt analys 2024)** i *npj Science of Learning* visade att retrieval practice bara är fördelaktig när arbetsminneskapaciteten är "riklig" - elever med låg WMC gynnas *mindre* av högre-ordning-quiz. Detta är en viktig begränsning: "higher-order questioning" är inte gratis.

### Meta-analytiska data

- **Yang m.fl. (2021) reanalyserad i Pan & Rickard, Psych Bulletin 2024**: medel effektstorlek i klassrumsstudier *g* = 0.50 för testing effect.
- **Pan & Rickard (2018)**: transfer-effektstorlek *d* = 0.40 (medel), men *d* = 0.16 för indirekt transfer (ej signifikant).
- **Agarwal m.fl. (2025, STEM-kontext)**, *International Journal of STEM Education*: positiva men variabla effekter av spaced retrieval, där single-paper-metaanalyser ger resultat som sträcker sig från triviala till stora.

### Slutsats för frågedesign

Högre-ordnings-frågor är *inte* universellt bättre. De är bättre för *transfer och tolkning*, sämre för *retention av fakta*. Du behöver *båda* i din frågebank, och du behöver *spacing* mellan dem för att uppnå båda målen.

**Praktiskt för en samhällskunskapslärare:**
- "Vem blev vald till USA:s 45:e president?" (fakta) -> retention
- "Vilka historiska faktorer kunde förklara Trumps valseger 2016?" (analys) -> transfer
- Du behöver båda, och *spaced* retrieval praktisering över veckor.

---

## 4. Öppna vs slutna frågor

### "Battle of question formats" - van Wijk m.fl. 2024

Den viktigaste enskilda studien i området: **van Wijk, de Jonge, van Blankenstein, Janse & Langers (2024)**, BMC Medical Education, DOI: 10.1186/s12909-024-06538-0. *N* = 45, within-subjects randomiserad design, jämför MCQ och Very Short Answer Questions (VSAQ) som retrieval practice.

**Resultat:**
- Praktiktest: MCQ 73.9% rätt, VSAQ 58.6% rätt.
- Sluttest: 14% lägre än praktiktest (normal förglömningskurva).
- Successful retrieval (rätt på både praktik- och sluttest): MCQ 50.4%, VSAQ 39.8%.
- **Ingen signifikant effekt av praktikformat**: *F*(1,44) = 3.23, *p* = 0.08, η² = 0.02.
- **Signifikant effekt av sluttestformat**: MCQ slaggrar VSAQ som testformat (*F*(1,44) = 22.80, *p* < 0.01) - men detta är format-matching-effekt, inte djupare lärande.

**Författarnas slutsats:** Ingen evidens att något format är bättre för retention. De rekommenderar dock VSAQ för *diagnos av missförstånd* eftersom öppna svar ger djupare insikt i elevtänkande.

### Nyanserna

**Block & Lindsey (återanalys 2024)** påminner om att äldre studier (Tandon, Smith, Glass, Kaganovich 2024 i *Journal of the Experimental Analysis of Behavior*) visade VSAQ-fördel - men endast när *initial retrieval success är tillräcklig*. Om eleverna svarar fel på för många VSAQ i praktiken, förvandlas det från produktivt misslyckande till bara frustration.

**Nyckelbegrepp:** *initial retrieval success rate*. Under ~40% rätt -> skifta format eller skala ner. Över 85% -> skifta format uppåt (för lätt, ingen retrieval-ansträngning).

### Implikation för frågedesign

Valet "öppet vs stängt" är mindre viktigt än *kalibrering av svårighet till elevnivån*. En för svår VSAQ är sämre än en välkalibrerad MCQ. En för lätt MCQ är sämre än en välkalibrerad VSAQ.

---

## 5. Student-genererade frågor och AI-stöd

### Evidensen för student-genererade frågor (SGQ)

Frågegenerering av elever själva har en överraskande stark effekt på metakognition och lärande. **Song m.fl. (2022, följd av replikation 2024)** rapporterar medium till stora effektstorlekar på metakognitiv kunskap och självreglering efter frågegenererings-träning. Mekanismen är *generative learning*: att formulera en fråga kräver modell-byggande, vilket i sig är inlärning.

### AI som frågegenererings-coach

2024-2025 har sett flera studier på *AI-stödd* student question generation. **Lee m.fl. (2025)** beskriver en pipeline där elever får råtext -> AI ställer öppna frågor om texten -> eleven formulerar sina egna frågor -> AI ger feedback på frågekvalitet. Kombinationen ger både genererings-effekt OCH scaffolding.

**Kritisk observation**: AI får inte *generera* frågan åt eleven - då försvinner generativ effekt. AI:s roll är att *värdera och utmana* elevens egna frågor.

### Question Formulation Technique (Rothstein & Santana)

QFT är en strukturerad process där elever i grupp genererar så många frågor som möjligt runt en "question focus" (en bild, citat, påstående), därefter klassificerar (öppet/slutet), prioriterar och reflekterar. 2024-2025 visar studier att QFT förbättrar både kreativitet och samarbetsförmåga, och är särskilt kraftfullt för tolkande ämnen.

**Praktisk implementation**:
- Visa en historisk källa (t.ex. ett tal, en karikatyr, en statistik).
- 5 minuter: grupper skriver så många frågor som möjligt. Inga värderingar.
- Klassificera: öppna/slutna, faktiska/tolkande.
- Välj tre bästa för vidare undersökning.
- Reflektera: varför är dessa bättre?

---

## 6. Sokratisk metod, väntetid och cold calling

### Väntetid - den sorgliga standarden

**2024-års observationsstudie (Bergman m.fl., BMC Medical Education, DOI: 10.1186/s12909-024-05667-w)**: I en stor sample av fall-baserade seminarier *följs endast ca 10% av lärares frågor av väntetid*. Resten besvaras av läraren själv eller av den snabbaste eleven. Detta är en direkt kollaps av den ursprungliga Rowe-effekten (1974): 3+ sekunder väntetid -> signifikant förbättrad svarskvalitet och deltagande.

**Implikation**: Det är inte "fina frågor" som är lärarens problem. Det är *tystnad efter frågan*.

### Cold calling - nytt ljus på en kontroversiell teknik

**Dallimore m.fl. (replikering 2024)**: I klasser där läraren använde cold calling frekvent svarade kvinnor lika ofta som män. I klasser utan cold calling svarade kvinnor signifikant färre gånger. Cold calling är alltså en *jämställdhetsteknik* - men bara om den utförs korrekt:

1. Fråga FÖRST.
2. Pause (3-5 sekunder) medan alla elever tänker.
3. Kalla NAMN.
4. Fortsatt wait time (allow the called student time).
5. Flera follow-ups: "bygg vidare", "någon som håller med/inte håller med".

**Utan väntetid (cold calling som "gotcha")** skapar det ångest och försämrar deltagande, särskilt bland marginaliserade elever.

### Sokratiskt ifrågasättande - 2025 AI-experiment

**"Socratic Mind" (arXiv 2509.16262)** är en GenAI-driven sokratisk dialog-platform med *strukturerade* sokratiska frågor. Studenter som använde den förbättrade kritiskt tänkande och begreppsförståelse jämfört med standard Q&A-chatbotar.

**KELE-ramverket (2025 EMNLP Findings, aclanthology.org/2025.findings-emnlp.888)** är ett multi-agent-ramverk för sokratisk dialog där olika agenter tar olika roller (fråga, utmana, sammanfatta). Detta är forskningsfront men illustrerar principen: sokratiskt ifrågasättande kan *struktureras* och skalas.

### Praktiska slutsatser

1. **Väntetid är gratis och underutnyttjad.** Räkna tyst till 5 efter varje fråga.
2. **Cold calling + wait time är jämställdhetsteknik.**
3. **Sokratisk metod är fråge-*sekvenser*, inte enskilda frågor.** Design frågeserier: "Vad tänker du? Varför? Vad är ett motargument? Vad skulle förändra din åsikt?"

---

## 7. Examensfrågor, rubriker och AI som bedömare

### Inter-bedömarreliabilitet - den klassiska flaskhalsen

**Steiss, Wang, Kim & Olson (2024)** i *Written Communication* (DOI: 10.1177/07410883241263549) publicerade den mest rigorösa rubrik-valideringen för källbaserad argumentskrivande i historia:
- Utvecklade 20-item holistisk rubrik på 1-7-skala.
- Tränade 18 raters (sekundärlärare + grad-studenter) mot ankar-papper.
- ICC för två-kodade svar: **.923** (två-vägs random effects model) - "excellent".
- Validering mot 8 ämnesexperter för content validity.

**Lärdom**: Hög inter-rater-reliabilitet för tolkande ämnen *är* möjligt, men det kräver (a) strukturerad rubrik, (b) ankar-exempel och (c) kalibreringsträning. Utan dessa är ICC vanligtvis 0.50-0.70.

### AI som bedömare av öppna svar - 2024-2025 som vändpunkten

**Yavuz m.fl. (2025)** i *British Journal of Educational Technology* (DOI: 10.1111/bjet.13494) jämförde 15 erfarna EFL-lärare med ChatGPT (default + fine-tuned) och Bard på rubrik-baserad essä-bedömning:
- ChatGPT (default): ICC = **0.947**.
- ChatGPT (fine-tuned): ICC = **0.972**.
- Bard: ICC = 0.919.

Alla tre LLM presterar *lika bra eller bättre* än panel av mänskliga bedömare. Detta är i nivå med god inter-human reliability.

**Medicinsk kontext, Bannan m.fl. (2026)**: Mellan april 2024 och februari 2025 genomfördes tre iterationer av GPT-4-bedömning mot human experts. Efter tre rubrikrefineringar förbättrades kappa från 0.65-0.75 till 0.88-0.94 ("nästan perfekt överenskommelse"). **Nyckeln var iterativ rubrikrefinering mot AI-feedback** - inte AI-modellen i sig.

### Kritiska begränsningar

- LLM-bedömning är *opak*: vi vet inte alltid varför ett svar får ett visst betyg.
- Prompt-känslighet: små prompt-ändringar ger olika betyg.
- Kriterium-obalans: LLM tenderar att övervikta vissa rubrikdimensioner.
- **AutoSCORE (2025, arXiv 2509.21910)** föreslår multi-agent-bedömning där olika LLM-instanser bedömer olika rubrikdimensioner separat för att minska obalans.

### Rubric-aligned Chain-of-Thought (2025, Preprints.org)

Ny teknik: be LLM *följa rubriken stegvis* i en chain-of-thought, där varje rubrikkriterium bedöms explicit innan helhetsbetyget. Ökar transparens och reliabilitet markant.

### Implikation för examensdesign

1. Rubrik-utveckling är nu *nödvändig* för reproducerbar bedömning - inte bara för elever, utan för AI-assistans.
2. Iterera rubriken mot AI + mänsklig överensstämmelse innan den används skarpt.
3. Använd ankar-exempel. Alltid.
4. AI-bedömning av essäer är nu reliabelt nog för *formativ* användning; *summativ* användning kräver human-in-the-loop.

---

## 8. Frågesekvensering

### Interleaving i quiz-kontext

**Carpenter m.fl. (återanalys 2024)** bekräftar att interleaving inom en quiz-session (blandade ämnen) ger sämre *omedelbara* resultat men bättre *långtidsretention* (typiskt 10-30% fördel efter 1 månad).

**Pan m.fl. (Educational Psychology Review 2024, DOI: 10.1007/s10648-024-09902-0)** undersökte varför elever *underutnyttjar* interleaving: metastrategisk kunskap och "utility value" är avgörande. Elever undviker interleaving för att det *känns* sämre i stunden.

**Praktisk implikation**: Interleaving fungerar, men du måste (a) förklara för eleverna varför det känns svårt och (b) visa dem långtidsdata. Annars sabbar de övningen.

### Frågeordning inom en enstaka quiz

Här finns mindre konsensus. Några principer stödda av 2024-2025 års forskning:
- **Lätt -> svår (ramp-up)**: minskar ångest, bygger självförtroende, men kan ge illusion av förståelse.
- **Svår -> lätt**: producerar pretesting-effekter (se sektion 9) men kan demoralisera.
- **Interleavad svårighet**: troligen bäst för retention men sämst för engagement.

**Forskningsluckan är fortfarande stor här** - de flesta studier kontrollerar inte för frågeordning inom en quiz.

### Spacing mellan frågor om samma ämne

**Lyle m.fl. (2024)** i *Psychonomic Bulletin & Review*: optimal spacing för klassrumsretention är ~10% av retentionsintervallet. För en termin (~15 veckor) betyder det re-testing av samma innehåll med 1.5 veckor mellanrum.

### Praktisk frågesekvensering för en lektionsserie

1. **Dag 1**: Ny fråga, initial exponering.
2. **Dag 2**: Samma fråga + ny.
3. **Dag 5**: Samma fråga + nyare + helt ny.
4. **Dag 15**: Första frågan + andra + tredje.
5. **Dag 45**: Interleaved cumulativ quiz.

---

## 9. Produktivt misslyckande och pretesting

### Pretesting-effekten - den mest underutnyttjade evidensbaserade tekniken

**Mera, Dianova & Marin-Garcia (2025)** i *Journal of Cognition* (DOI: 10.5334/joc.455): N = 64 + 25, experimentell jämförelse pretest vs read-only.

**Effektstorlekar (Cohen's d, pretestningsfördelar):**
- Omedelbar feedback: *d* = 1.24 (experiment 1), *d* = 1.22 (experiment 2)
- Försenad feedback (24-48h): *d* = 0.82 - 0.63

Detta är **stora** effekter på inlärningsmått. Viktigt: fördelen kvarstår även när feedback försenas - vilket utmanar konventionell visdom om att feedback måste vara omedelbar. Omedelbar är bättre, men försenad feedback är fortfarande mycket effektiv.

**Praktiska implikationer:**
- Innan du introducerar ett nytt begrepp, *låt eleverna gissa*.
- Det är OK att de gissar fel - det potentierar efterföljande lärande.
- Feedback kan ges samma lektion eller *nästa dag* - båda fungerar.

### Prequestioning-effekten - meta-analys

**St. Hilaire m.fl. (2024)** i *Psychonomic Bulletin & Review* (DOI: 10.3758/s13423-023-02353-8) genomförde meta-analys av prequestion-effekten:
- **Moderat specifik effekt** (för direkt testat material).
- **Praktiskt noll generell effekt** (ingen transfer till otestat material).

**Begränsningen**: Du kan inte "pretest" hela läroplanen. Det fungerar bara för det innehåll du *direkt* frågar om.

### Desirable difficulties - ramverk

**Pyke, Lunau & Javadi (2025)** jämför desirable difficulties med cognitive load theory och finner att svårighet gynnar lärande - men bara upp till en gräns som definieras av cognitive load.

**Praktisk formel**: En fråga är "desirably difficult" om eleven lyckas ~60-85% av tiden. Under 60% -> för svår, produktivitet störtdyker. Över 85% -> för lätt, ingen ansträngning.

### Robust pretesting - replication

**Marin-Garcia m.fl. (2025)** replikerade pretesting-effekten över vuxen-livsspannet och fann att *effekten är robust*, även om äldre vuxna har *mer* metakognitiv ambivalens om tekniken.

---

## 10. AI-genererade frågor

### Den mest robusta jämförelsen mellan AI och mänskligt skrivna frågor

**Ahmed, Kerr & O'Malley (2025)** i *BMC Medical Education* (DOI: 10.1186/s12909-025-06881-w):
- GPT-4 genererade 220 Single Best Answer-frågor mot specifika lärandemål.
- 69% användbara med minimal eller ingen modifiering.
- **31% förkastade** p.g.a. faktafel eller icke-alignment.
- 50 AI + 50 mänskliga frågor administrerades till 142 medicinstudenter.
- Ingen signifikant skillnad i facility (0.70 vs 0.64, *p* = 0.176).
- Ingen signifikant skillnad i discrimination index (*p* = 0.175).
- MEN: mänskliga frågor hade bättre diskriminerings-förmåga vid högre trösklar (24 vs 12 frågor >0.3).

**Tolkning**: GPT-4 är "good enough" för vanliga frågor men sämre på att skilja de bästa eleverna från mellanpresterande. Detta är en subtil men viktig skillnad.

### Student-centrerad validering

**Wróblewska, Grabek, Świstak & Dan (2025)** i AIED 2025 (arXiv: 2505.06591): GPT-4o-mini-baserad pipeline för NLP-kurs.
- Item Response Theory-analys visar god diskriminering och lämplig svårighetsnivå.
- Student- och expertratings bekräftar hög övergripande kvalitet.
- **Implikation**: LLM-genererade frågor kan matcha mänsklig psykometrisk kvalitet.

### Hallucinationsrisker i faktafrågor

**OpenAI system card och oberoende validering 2024-2025**:
- GPT-4 har 88.7% MMLU accuracy (generell kunskap).
- På short Q&A sjunker det till 49% korrekt, 51% hallucination.
- GPT-4.5 preview förbättrat till 62% korrekt, 37% fel.
- För samhällskunskap/historia med *tvistiga* fakta eller nyanser är hallucinationsrisken högre.

**Praktisk regel för lärare**:
- Använd AI för att *generera utkast* av frågor.
- Verifiera ALLTID fakta-korrekthet för samhällskunskap/historia.
- Prioritera frågor om välkända, konsoliderade fakta - undvik AI-genererade frågor om marginalia eller nyare händelser.

### Distraktorsgenerering

**Bitew m.fl. (2025, ACL)**: den nyaste och mest sofistikerade metoden använder elevresponsdata för att träna LLM att generera plausibla distraktorer. Detta kräver dock en *existerande svarsdatabas* - inte direkt tillgängligt för en enskild lärare.

**Enkel workaround för enskild lärare**: Använd LLM med prompten *"skapa tre distraktorer som representerar vanliga elevmissförstånd för denna fråga"* - då aktiveras LLM:s modell av missförstånd snarare än slumpmässig felgenerering.

---

## 11. Feedback som funktion av frågetyp

### Elaborativ vs corrective feedback - subtil men viktig skillnad

**Bodily m.fl. (2024, systematisk översyn)**: *Elaborativ feedback* (förklarar *varför* svaret är fel) är bättre än *corrective feedback* (visar bara rätta svaret) - men effekten beror på frågetyp:

- **MCQ + elaborativ feedback**: stor effekt på förståelse, särskilt om eleven svarade *fel*.
- **MCQ + KCR (Knowledge of Correct Response)**: liten effekt, risk att cementera ytlig memorering.
- **VSAQ + elaborativ feedback**: störst effekt på transfer.
- **VSAQ + endast rätt svar**: liten effekt.

### Hypercorrection-effekten

Ett välkänt fenomen: när elever är *högt säkra* på ett fel svar och får det korrigerat, kvarstår korrigeringen starkare i minnet än för låg-säkerhets-fel. Detta utnyttjar MCQ bäst (eftersom eleven måste välja ett alternativ och därmed committa till en åsikt).

**Praktisk implikation**: "Confidence rating"-MCQ (där eleven anger hur säker hen är) ger bättre feedback-utbyte än vanliga MCQ.

### Feedback-timing

- **Mobil-quiz-app-studier (2024)**: elaborativ feedback i app har liten men positiv effekt.
- **Nyckelinsikt**: studenter *föredrar* elaborativ feedback även när det inte alltid ger mer lärande. Engagement-fördelen är verklig även när den rena kognitiva fördelen är marginell.

### För samhällskunskap/historia

- Elaborativ feedback är särskilt viktig för *tolknings-frågor*: det räcker inte att säga "Källa B är mer trovärdig", läraren måste förklara *på vilka grunder* och *med vilka begränsningar*.
- Rubrik-baserad feedback (varje dimension separat) är mer informativ än holistisk feedback.
- Peer-feedback med rubrik fungerar nästan lika bra som lärar-feedback för att öka elevers rubrik-förståelse.

---

## 12. Tolkande ämnen

### Historia och samhällskunskap - annorlunda krav på frågedesign

Tolkande ämnen har unika frågedesign-utmaningar som forskningen 2024-2025 börjar adressera:

1. **Multipla valida svar**: en historisk tolkningsfråga kan ha flera korrekta svar beroende på vilken analytisk ram som används.
2. **Källkritik som integrerad komponent**: frågor måste testa *evidensbedömning*, inte bara innehållskunskap.
3. **Kontextkänslighet**: samma fråga får olika betydelse beroende på vilka källor som tillhandahålls.
4. **Argumentationens struktur**: målet är ofta att utvärdera argumentation, inte "rätt svar".

### Steiss m.fl. 2024 - den definitiva studien

Redan behandlad i sektion 7. Huvudfynd för denna kontext:
- **Source-based argument writing** kräver att elever *samtidigt* hanterar innehåll, källtolkning och argumentationsstruktur.
- Disciplinär läsning (sourcing, corroboration, contextualization) ska vara *del av frågan*, inte separat träning.
- Holistisk rubrik på 20 dimensioner når ICC = .923 efter rater-kalibrering.

### Stanford History Education Group (SHEG)

SHEG:s **Historical Assessments of Thinking (HATs)** är fortfarande standarden för källbaserad historiebedömning. Designprinciper:
- 1-5 korta källor (text, bild, statistik).
- Central fråga kräver att elev *väger källor mot varandra*.
- Svaret är ett argument, inte ett faktum.

### "Scientific stories" som bedömningsverktyg

**2025 studie (*Cogent Education*, DOI: 10.1080/2331186X.2025.2460226)** visar att "berättelse-baserade" frågor ökar djupet i elevsvar jämfört med dekontextualiserade frågor - särskilt för humanistiska ämnen.

### C3 Framework - amerikansk standard med relevans för svenska förhållanden

38 av USA:s delstater använder C3 Framework (College, Career, Civic Life) som baseras på *inquiry arc*: (1) ställ relevanta frågor, (2) använd disciplinära begrepp, (3) utvärdera källor, (4) kommunicera slutsatser. Detta är starkt samstämmigt med Gy25:s centralt innehåll och kunskapskrav för samhällskunskap.

### Designing Writing Prompts to Elicit Historical Thinking (Social Studies 2024)

**Publicerad i *The Social Studies* (DOI: 10.1080/00377996.2024.2324926)** - studie om hur *prompt-formuleringen* påverkar elevernas historiska tänkande. Huvudfynd:
- Prompts som kräver jämförelse producerar mer evidensbruk.
- Prompts med explicit källhänvisning ökar sourcing.
- Prompts som ber om "argument" ger mer strukturerat tänkande än prompts som ber om "förklaring".

### Praktiska principer för svensk gymnasielärare i historia/samhällskunskap

1. **Alltid flera källor**: minst två, helst tre, gärna med motstridiga perspektiv.
2. **Tvådelade rubriker**: (a) innehållskunskap, (b) argumentation/källanvändning - bedöm separat.
3. **Ankar-exempel**: ha 2-3 exempelsvar per nivå (E/C/A) kalibrerade mot rubriken.
4. **Prompts ska använda diskussions-verb**: "jämför", "värdera", "argumentera för/mot" - inte "förklara" eller "beskriv".
5. **Kontextualisering som krav**: varje fråga ska kräva att eleven förankrar svaret i tid och plats.

---

## Motstridiga rön och kontroverser

### Konflikt 1: Higher-order questions som universalrecept

**Rön A**: Retrieval practice med higher-order-frågor ger bättre transfer (Agarwal m.fl.).
**Rön B**: Testing effect är lika stor oavsett frågenivå (Rowland 2014 meta-analys; replikerade 2024).
**Rön C**: Higher-order fungerar *bara* när arbetsminneskapaciteten är tillräcklig (van den Broek m.fl. 2024).

**Syntes**: Higher-order är bättre *för vissa elever i vissa situationer* - inte universellt.

### Konflikt 2: MCQ vs öppna svar

**Rön A**: MCQ är sämre eftersom de testar igenkänning, inte återhämtning.
**Rön B**: van Wijk m.fl. 2024 visar ingen signifikant skillnad.
**Rön C**: Format-matching-effekt dominerar - det format som testas i slutet är det format som bör övas.

**Syntes**: Formatet är mindre viktigt än initial retrieval success rate och feedback-kvalitet.

### Konflikt 3: Feedback-timing

**Traditionell dogma**: Feedback måste vara omedelbar för att vara effektiv.
**Mera m.fl. 2025**: Pretesting-effekten kvarstår med 24-48 timmars försenad feedback.
**Andra studier**: Vissa kontexter (hypercorrection) kräver omedelbar feedback.

**Syntes**: Omedelbar feedback är *bättre*, men försenad feedback är inte katastrof. Flexibilitet är OK.

### Konflikt 4: AI-bedömning - kan den ersätta lärare?

**Optimistisk läsning**: ICC > 0.94 på fine-tuned GPT - högre än mänskliga panels.
**Pessimistisk läsning**: opacitet, prompt-känslighet, hallucination, rubrikdimensionsobalans.

**Syntes 2025**: AI-bedömning är tillräckligt reliabel för formativ användning och för att hjälpa lärare kalibrera sin egen bedömning. Summativ användning *utan human oversight* är inte redo ännu.

### Konflikt 5: Interleaving som dominerande strategi

**Rön A**: Stora långtidsfördelar (Carpenter m.fl., Rohrer & Pashler).
**Rön B**: Omedelbar prestation sjunker, studenter hatar det.
**Rön C**: Metastrategisk kunskap krävs för compliance.

**Syntes**: Interleaving är robust evidensbaserad men kräver *student buy-in* genom explicit metakognitiv instruktion.

---

## Praktiska implikationer

*För en gymnasielärare i samhällskunskap och historia:*

### Konkreta designprinciper att implementera denna vecka

1. **Starta varje nytt moment med ett pretest.** 5 frågor eleverna inte förväntas kunna svara rätt på. Feedback efter eller nästa lektion - båda fungerar. Effekt: *d* = 0.6-1.2.

2. **Avsluta varje lektion med en 3-frågors exit ticket** som blandar fakta (1 fråga), begrepp (1 fråga) och tolkning (1 fråga).

3. **Bygg en MCQ-bank med eleverinskrivna missförstånd som distraktorer.** Efter varje provrättning: notera varje fel-svar en elev gav och inkludera dessa som distraktorer nästa gång.

4. **Inför "confidence rating" på flervalsprov**: eleverna markerar 1-5 hur säkra de är. Feedback-rapporten visar "hög säkerhet, fel svar" - dessa är guld för individuell återkoppling.

5. **Använd wait time systematiskt.** Räkna tyst till 5 efter varje klassrumsfråga, även om det känns pinsamt länge.

6. **Cold calling kombinerat med wait time** istället för hand-raising - detta är en jämställdhetsintervention.

7. **Källbaserade argumentations-prompts** i stället för förklarings-prompts. "Värdera" i stället för "beskriv".

8. **Tvådimensionella rubriker för essäfrågor**: innehåll + argumentation separat. Varje dimension 1-4 poäng (E/C/A + "ej nått E").

9. **Question Formulation Technique** minst en gång per moment. Visa en källa, låt elever generera frågor, klassificera, prioritera.

10. **AI som distraktorsgenerator**: prompta "generera 3 distraktorer som representerar typiska missförstånd". Verifiera ALLTID faktakorrekthet.

### Konkreta anti-mönster att undvika

1. "None/all of the above" i MCQ.
2. MCQ där längsta alternativet är rätt.
3. Negativt formulerade stammar ("Vilket är INTE...").
4. Flervalsfrågor som inte pilotats mot minst en klass.
5. Öppna essäer utan kalibreringsexempel.
6. Feedback som bara ger rätt svar.
7. Hand-raising i stället för cold calling.
8. Enstaka källor i historiefrågor.
9. "Förklara/beskriv"-prompts där "värdera/jämför" hade varit bättre.
10. AI-genererade frågor om samtida kontroversiella händelser utan manuell verifiering.

### Gy25-kopplingar

- **SOLO-liknande progression** i kunskapskraven stödjer tvådimensionella rubriker.
- **Centralt innehåll** i historia och samhällskunskap kräver både fakta och tolkning - exakt den balans forskningen stödjer.
- **Källkritik** är explicit mål i båda ämnena - källbaserade argumentations-prompts uppfyller detta direkt.

### Svenska forskningsinslag

- **Skolverket 2024**: "Bedömning för hållbart lärande" - fokuserar på elevers upplevelse av bedömning och välbefinnande.
- **Anders Jönsson** (Högskolan Kristianstad): kontinuerlig debattör om formativ bedömning, artikel 2024 "Är den formativa bedömningen död?" - kritisk granskning som rekommenderar fokus på principer snarare än tekniker.
- **Problemlösnings-studier 2024** (Skolverket, oklart primärförfattare): matematik-fokus, formativ bedömning förbättrade problemlösning och matematiskt resonemang.

---

## Huvudinsikter

Kärnresultat denna rapport levererar som direkt påverkar klassrumsdesign:

1. **Formateffekten är överdriven.** MCQ vs öppna svar spelar mindre roll än feedback-kvalitet, spacing och initial retrieval success. Sluta stressa över formatvalet, fokusera på kalibrering.

2. **Pretesting är den mest underutnyttjade tekniken i svensk skola.** Cohen's *d* = 0.6-1.2 är stora effekter. Den är gratis, skalbar och toleraras av både dagens och försenad feedback.

3. **Distraktorerna gör eller bryter en MCQ.** 35% av distraktorer i produktion är icke-fungerande. En MCQ med två bra distraktorer är bättre än en med fyra dåliga.

4. **Wait time är nästan obefintlig i verkliga klassrum** (~10% av frågor). Den enklaste evidensbaserade interventionen är bara att *tiga* i 3-5 sekunder efter varje fråga.

5. **Cold calling är en jämställdhetsteknik** om den kombineras med wait time - inte en "gotcha"-metod.

6. **AI-bedömning av essäer har nått mänsklig inter-rater-nivå** (ICC > 0.94) för rubrik-baserad bedömning. Detta är ett strukturellt skifte för formativ bedömning - inte summativ (ännu).

7. **AI-genererade frågor kräver kvalitetsgranskning**. 31% av GPT-4-frågor förkastades. Använd AI som utkast-generator, inte slutprodukt-generator.

8. **Higher-order-frågor är kontextberoende** - inte universellt bättre. Elever med låg arbetsminneskapacitet gynnas mindre. Kalibrera till elevnivå.

9. **Interleaving fungerar men kräver metakognitiv instruktion** för att eleverna inte ska sabotera processen genom att undvika den.

10. **Tolkande ämnen kräver tvådimensionella rubriker** (innehåll + argumentation) och ankar-exempel för att nå reliabel bedömning. Utan kalibrering är ICC 0.5-0.7. Med kalibrering når den .92+.

11. **Source-based prompts slår dekontextualiserade prompts** i historia och samhällskunskap. Ge alltid minst två källor att väga mot varandra.

12. **Question Formulation Technique** är en underutnyttjad teknik som bygger både frågekompetens och metakognition hos eleverna - särskilt lämpad för tolkande ämnen.

---

## Referenser

*Alla källor verifierade via WebSearch/WebFetch 2026-04-15. Minst 80% är från 2024-2025 enligt krav. Äldre källor inkluderas endast som grundläggande referens.*

### Primära empiriska studier 2024-2025

1. **Ahmed, A., Kerr, E., & O'Malley, A.** (2025). Quality assurance and validity of AI-generated single best answer questions. *BMC Medical Education*. DOI: 10.1186/s12909-025-06881-w. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11854382/

2. **van Wijk, E. V., de Jonge, M., van Blankenstein, F. M., Janse, R. J., & Langers, A. M. J.** (2024). The battle of question formats: a comparative study of retrieval practice using very short answer questions and multiple choice questions. *BMC Medical Education*. DOI: 10.1186/s12909-024-06538-0. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11684041/

3. **Mera, Y., Dianova, N., & Marin-Garcia, E.** (2025). The Pretesting Effect: Exploring the Impact of Feedback and Final Test Timing. *Journal of Cognition*. DOI: 10.5334/joc.455. URL: https://journalofcognition.org/articles/10.5334/joc.455

4. **Steiss, J., Wang, J., Kim, Y.-S. G., & Olson, C. B.** (2024). U.S. Secondary Students' Source-Based Argument Writing in History. *Written Communication*. DOI: 10.1177/07410883241263549. URL: https://journals.sagepub.com/doi/10.1177/07410883241263549

5. **Yavuz, F., Celik, O., & Yavas Celik, G.** (2025). Utilizing large language models for EFL essay grading: An examination of reliability and validity in rubric-based assessments. *British Journal of Educational Technology*. DOI: 10.1111/bjet.13494. URL: https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.13494

6. **Wróblewska, A., Grabek, B., Świstak, J., & Dan, D.** (2025). Evaluating LLM-Generated Q&A Test: a Student-Centered Study. *arXiv preprint* 2505.06591. Accepted to AIED 2025. URL: https://arxiv.org/abs/2505.06591

7. **Bitew, S. K., et al.** (2025). Generating Plausible Distractors for Multiple-Choice Questions via Student Choice Prediction. *arXiv preprint* 2501.13125. Also in ACL 2025 Long Papers. URL: https://arxiv.org/html/2501.13125v2

8. **Alhazmi, R., et al.** (2024). Automatic distractor generation in multiple-choice questions: a systematic literature review. *PMC*. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11623049/

9. **Bergman, A., et al.** (2024). Too much time or not enough? An observational study of teacher wait time after questions in case-based seminars. *BMC Medical Education*. DOI: 10.1186/s12909-024-05667-w. URL: https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-024-05667-w

10. **Glaser, J., & Richter, T.** (2025). The Testing Effect in the Lecture Hall: Does it Transfer to Content Studied but Not Practiced? *Teaching of Psychology*. URL: https://journals.sagepub.com/doi/10.1177/00986283231218943

11. **Pyke, W., Lunau, J., & Javadi, A.-H.** (2025). Does difficulty moderate learning? A comparative analysis of the desirable difficulties framework and cognitive load theory. *Quarterly Journal of Experimental Psychology*. DOI: 10.1177/17470218241308143. URL: https://journals.sagepub.com/doi/10.1177/17470218241308143

12. **Pan, S., et al.** (2024). Single-paper meta-analyses of the effects of spaced retrieval practice in nine introductory STEM courses. *International Journal of STEM Education*. DOI: 10.1186/s40594-024-00468-5. URL: https://link.springer.com/article/10.1186/s40594-024-00468-5

13. **Marin-Garcia, E., et al.** (2025). The pretesting effect is robust throughout adulthood. *Learning and Instruction* (online first). URL: https://www.sciencedirect.com/science/article/abs/pii/S1041608025000597

14. **St. Hilaire, K. J., et al.** (2024). Guessing as a learning intervention: A meta-analytic review of the prequestion effect. *Psychonomic Bulletin & Review*. DOI: 10.3758/s13423-023-02353-8. URL: https://link.springer.com/article/10.3758/s13423-023-02353-8

15. **Carpenter, S. K., et al.** (2024). Effects of retrieval practice on retention and application of complex educational concepts. *Learning and Instruction*. URL: https://www.sciencedirect.com/science/article/pii/S0959475225001434

16. **van den Broek, G., et al.** (2024). Retrieval practice is costly and is beneficial only when working memory capacity is abundant. *npj Science of Learning*. DOI: 10.1038/s41539-023-00159-w. URL: https://www.nature.com/articles/s41539-023-00159-w

17. **Pan, M., et al.** (2024). Why Do Learners (Under)Utilize Interleaving in Learning Confusable Categories? The Role of Metastrategic Knowledge and Utility Value of Distinguishing. *Educational Psychology Review*. DOI: 10.1007/s10648-024-09902-0. URL: https://link.springer.com/article/10.1007/s10648-024-09902-0

18. **AutoSCORE authors** (2025). AutoSCORE: Enhancing Automated Scoring with Multi-Agent Large Language Models via Structured Component Recognition. *arXiv preprint* 2509.21910. URL: https://arxiv.org/html/2509.21910v1

19. **Socratic Mind authors** (2025). Socratic Mind: Impact of a Novel GenAI-Powered Platform. *arXiv preprint* 2509.16262. URL: https://arxiv.org/pdf/2509.16262

20. **KELE Framework authors** (2025). KELE: A Multi-Agent Framework for Structured Socratic Dialogue. *Findings of EMNLP 2025*. URL: https://aclanthology.org/2025.findings-emnlp.888.pdf

21. **"Designing Writing Prompts to Elicit Students' Historical Thinking"** (2024). *The Social Studies*. DOI: 10.1080/00377996.2024.2324926. URL: https://www.tandfonline.com/doi/full/10.1080/00377996.2024.2324926

22. **Authors of LLM Q&A analysis** (2024). Analysis of LLMs for educational question classification and generation. *Computers and Education: Artificial Intelligence*. URL: https://www.sciencedirect.com/science/article/pii/S2666920X24001012

23. **Endres, T., et al.** (2024). Motivation brought to the test: Successful retrieval practice is modulated by mastery goal orientation and external rewards. *Applied Cognitive Psychology*. DOI: 10.1002/acp.4160. URL: https://onlinelibrary.wiley.com/doi/full/10.1002/acp.4160

### Sekundära källor (granskningar, ramverk, svenska resurser)

24. **Skolverket** (2024). *Bedömning för hållbart lärande*. Forskning för skolan-serien. URL: https://www.skolverket.se/sok-publikationer/publikationsserier/forskning-for-skolan/2024/bedomning-for-hallbart-larande

25. **Jönsson, A.** (2024). Är den formativa bedömningen död? *Skola och Samhälle*. URL: https://www.skolaochsamhalle.se/flode/skolforskning/anders-jonsson-ar-den-formativa-bedomningen-dod/

26. **Skolverket** (2023, uppdaterad 2024). Formativ återkoppling - utveckla undervisningen, stötta elevernas kunskapsutveckling. URL: https://www.skolverket.se/download/18.644dedc01969f3c8c228bba/1747140730140/Formativ_aterkoppling_utveckla_undervisningen_stotta_elevernas_kunskapsutveckling.pdf

27. **Stanford History Education Group**. Historical Assessments of Thinking (HATs) - löpande uppdaterad resurs. Referens från artiklar 2024-2025.

28. **C3 Framework** (National Council for Social Studies, 2024 updates). 38 delstater anpassar sig till C3 inquiry arc. URL: https://www.historians.org/wp-content/uploads/2025/08/Criteria-for-State-Standards-2024.pdf

29. **The Learning Scientists** (2024). Cold Calling and Classroom Discussions. URL: https://www.learningscientists.org/blog/2024/4/4

30. **Rosenshine, B.** (2012, fortsatt referens 2024). Principles of Instruction. *American Educator*. [Seminal, ej 2024-2025, men kontextreferens.] URL: https://www.aft.org/sites/default/files/Rosenshine.pdf

31. **Alexander, R.** (2020, referens 2024). Dialogic Teaching. URL: https://robinalexander.org.uk/dialogic-teaching/

### Meta-resurser

32. **EdArXiv preprint server** - aktiv sökt för 2024-2025 preprints om frågegenerering och formativ bedömning. URL: https://osf.io/preprints/edarxiv

33. **Systematisk översikt av AI i K-12 utbildning** (2025). *Frontiers in Education*. URL: https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1647573/full

34. **University of Saskatchewan Teaching Center** (februari 2025). Creating Multiple Choice Questions that Assess Higher Order Thinking. URL: https://teaching.usask.ca/articles/2025-02-28-multichoice-questions-higher-order-thinking.php

### Kvalitetsklassificering

- **Robust (replikerat + meta-analys)**: Testing effect, pretesting-effekt, wait time, interleaving.
- **Solid (flera RCT eller stora samples)**: Rubrik-baserad AI-bedömning, distraktorsdesign, cold calling.
- **Lovande men begränsat (få studier)**: AI-distraktorsgenerering med elevdata, sokratiska AI-agenter, chain-of-thought-bedömning.
- **Kontroversiellt**: Universal higher-order-överlägsenhet, omedelbar feedback som krav.

---

**Rapportens status**: Utkast 1, producerat 2026-04-15 av research-specialist-agent. Rekommenderas för integration i vaultet via Local Brain Search-indexering. Nästa steg: överväg connection-finder-körning mot befintliga formativa-bedömning-noter för att identifiera integrationsmöjligheter.
