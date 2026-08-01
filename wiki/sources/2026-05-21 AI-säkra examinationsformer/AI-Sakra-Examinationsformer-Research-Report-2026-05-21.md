---
created: 2026-05-21
updated: 2026-05-21
created_by: claude-opus-4-7
agent_version: 04.26
type: research-report
session: 2026-05-21 AI-säkra examinationsformer
tags:
  - ai-säkra-prov
  - bedömning
  - examination
  - validitet
  - gymnasium
---

# AI-säkra examinationsformer (2024-2026) - Forskningsrapport

**Datum:** 2026-05-21
**Framtagen av:** Research Specialist Agent
**Uppdragsgivare:** Gymnasielärare i samhällskunskap och historia

---

## Sammanfattning

Sedan ChatGPT:s lansering hösten 2022 har bedömningsforskningen genomgått en snabb och ibland turbulent omvärdering. Denna rapport sammanställer 26 källor från perioden 2023-2026 kring ett centralt tema: hur säkerställer vi att examination faktiskt mäter det vi avser att mäta, i en tid då generativ AI kan producera kompetent text på sekunder?

Tre parallella rörelser är tydliga i forskningstrendserna. För det första har det som kan kallas *detektionsparadigmet* - idén att vi kan polisa AI-användning tekniskt - kollapserat under empirisk granskning [1][2][3]. Detektorer är opålitliga, bias mot andraspråksskribenter är dokumenterat hög [4], och ett dussin ledande universitetar inklusive Yale och Vanderbilt har avaktiverat sina AI-detektorer [5]. För det andra har en ny teoretisk konsensus växt fram: fusk är primärt ett validitetsproblem, inte ett etikproblem [6], och bara strukturella förändringar av examinationens mekanik - inte regler och policies - skyddar validiteten [7]. För det tredje prövas nu ett spektrum av konkreta examinationsformer: Australia's "tvåfilig" modell [8], AI-bedömningsskalor [9], processmappar med checkpoint-samtal [10], och muntliga prov - med blandade reliabilitetsresultat [11][12].

I svensk kontext är SOU 2025:18 (Henrekson-utredningen) det mest konkreta policysignalet: digitala centralt rättade slutprov planeras gradvis från 2028-2032 och löser i praktiken AI-validitetsproblemet utan att ens nämna det explicit [13][14]. Rapporten avslutas med en equity-analys som varnar för att de "säkringsåtgärder" som nu implementeras - handskrift, muntligt, detektorer - systematiskt missgynnar elever med dokumenterade funktionsnedsättningar och NPF [15], och med en viktig motvikt: empiriska data visar att fuskfrekvensen inte ökat sedan AI-verktygens genombrott [16].

---

## Forskningsomfång

- **Syfte:** Kartlägga kunskapsläget kring AI-säkra examinationsformer 2024-2026
- **Nyckelfrågorna:** Fungerar AI-detektorer? Vilka teoretiska ramverk gäller? Vilka examinationsformer rekommenderas? Vad säger nordisk kontext? Vilka equity-implikationer finns?
- **Metod:** Webbsökning med Google Search grounding; artiklar från Tandfonline, Springer, MDPI, arXiv, samt svenska myndighetskällor
- **Antal källor:** 26 unika referenser, varav 23 (88%) från 2024-2026
- **Databaser:** Assessment & Evaluation in Higher Education (AEHE), British Journal of Educational Technology (BJET), BMC Medical Education, arXiv, riksdagen.se, skolverket.se

---

## Del I: Detektionsparadigmets sammanbrott

### 1. Detektionsparadigmet 2024-2026: varför det inte fungerar

Under 2023 var det dominerande svaret på AI-utmaningen att använda tekniska detektionsverktyg - Turnitin AI Detection, GPTZero, Originality.ai och liknande - för att flagga AI-skriven text. Denna strategi har under 2024-2025 visat sig fundamental problematisk, och forskningen har nu nått vad som kan kallas konsensus om opålitlighet.

Det teoretiska grundproblemet formulerades tidigt av Sadasivan m.fl. (2023) i "Can AI-Generated Text be Reliably Detected?" [1]. Deras centrala resultat är ett *omöjlighetsresultat*: när kvaliteten på LLM-genererad text approximerar mänsklig text, sjunker en optimal detektor till slumpmässig prestanda. Empirisk bekräftelse: parafraseringsattacker - att låta en andra LLM skriva om AI-genererad text - uppnår effektivt kringgång av merparten av befintliga detektorer [1].

En 2025 evidenssyntesen i MDPI:s *Information*, byggd på peer-reviewed litteratur 2021-2024, konstaterar att AI-detektionsverktyg "frequently produce false positives and lack transparency, especially for multilingual or non-native English speakers" [2]. En 2024 Springer-studie i *Journal of Academic Ethics* analyserade över 500 inlämningar och fann falsk-positiv-frekvenser upp till 20% i Turnitin [2]. En separat 2024 studie i *Journal of Artificial Intelligence Research* rapporterade 15-25% falskt positiva i mänskligt skrivna texter, med högre tal för andraspråksskribenter [2].

EyeSift, ett tredjepartsföretag som utvärderade de tre dominerande verktygen (GPTZero, Turnitin, Originality.ai), fann att noggrannhetsnivåerna varierade mellan 60 och 90%, med systematiska svagheter mot omskrivet och hybridinnehåll [3].

Den praktiska konsekvensen av detta forskningstillstånd är slående: mer än tolv ledande amerikanska universitetar - inklusive Yale, Vanderbilt, Johns Hopkins, Michigan State, Northwestern, UCLA och UT Austin - har avaktiverat Turnitins AI-detektionsfunktion eller förbjudit köp av AI-detektionsverktyg [5]. Vanderbilt kommunicerade beslutet i augusti 2023 och motiverade det med att 750 av 75 000 inskickade uppsatser riskerat felaktig flaggning vid 1% falsk-positiv-kvot [5]. UT Austin har gått längre och förbjudit inköp av AI-detektionsverktyg överhuvudtaget, med motiveringen att fokus bör ligga på bedömningsdesign snarare än teknisk polisiär verksamhet [5].

**För gymnasieläraren i samhällskunskap/historia:** Att använda AI-detektorer som bevis i disciplinärenden är att bygga på ett otillförlitligt empiriskt fundament. Forskningen ger inte stöd för att detektionsfynden är tillförlitliga nog för enskilda bedömningsbeslut.

---

### 2. AI-detektorbias mot ESL-elever och atypisk prosa

Det kanske allvarligaste enskilda fyndet i detektionslitteraturen är den systematiska bias som dokumenterats mot skribenter som skriver på sitt andraspråk (ESL - English as a Second Language) och, analogt, mot elever med atypisk prosa av andra orsaker (NPF, dyslexi).

Den centrala studien är Liang m.fl. (2023/2024) vid Stanford: "GPT detectors are biased against non-native English writers" [4]. Studien körde 91 TOEFL-uppsatser och 88 modersmålsskribenters texter genom sju AI-detektorer och fann att verktygen felaktigt flaggade 61,3% av andraspråkssskribenterna som AI-genererade, medan modersmålsskribenter klassificerades korrekt i 97,8% av fallen. Den mekanistiska förklaringen är att de flesta 2023-detektorer opererar på textens *perplexitet* - hur förutsägbar ordföljden är. Andraspråksskribenter tenderar att använda enklare ordförråd, kortare meningar och mer formelartad struktur, vilka är samma statistiska mönster som AI-text uppvisar [4].

Ytterligare studier bekräftar detta. En 2025 analys i arXiv, "AI Detectors Fail Diverse Student Populations: A Mathematical Framing of Structural Detection Limits" [4], visar att begränsningarna inte är tekniska brister som kan fixas utan matematiska konsekvenser av hur nuvarande LLM-detektionsstrategier är konstruerade. Neurodivergenta skribenter - studenter med autism, ADHD och dyslexi - är systematiskt överrepresenterade bland falskt-positivt flaggade [4].

En 2025 rapport i Hastewire sammanfattar implikationen: "The detector can't distinguish between 'writing in a second language' and 'generated by a machine', creating systematic bias against ESL writers" [4]. Detta innebär att ett system utformat för akademisk integritet i praktiken straffar de elever som redan har det svårast i den akademiska skrivkontexten.

I en svensk gymnasiekontext, med en stor grupp nyanlända och flerspråkiga elever, är denna bias direkt tillämpbar och allvarlig. Falsk-positiva identifieringar kan leda till felaktiga disciplinärenden mot elever som skrivit sin text utan AI-hjälp men vars prosa liknar AI-text på statistisk nivå. Analogt gäller för elever med dyslexi eller NPF vars skrivstil av andra orsaker avviker från "normal" mänsklig prosa.

**För gymnasieläraren i samhällskunskap/historia:** AI-detektorer utgör ett rättsosäkert verktyg i bedömning av elever med svenska som andraspråk eller dokumenterade inlärningssvårigheter. Felaktiga anklagelser kan ha allvarliga konsekvenser för elevrelationer och lärarmiljö.

---

## Del II: Teoretiska ramverk

### 3. Dawson, Bearman & Boud: fusk är en validitetsfråga

Det teoretiska genombrott som haft störst genomslag i bedömningsforskningen 2024 är Dawson, Bearman, Dollinger och Bouds artikel "Validity matters more than cheating" i *Assessment & Evaluation in Higher Education* (2024) [6]. Artikeln publicerades i volym 49, nummer 7, sidorna 1005-1016.

Kärnargumentet är en radikal omformulering av problemet: fusk är inte primärt ett etikproblem utan ett *validitetsproblem*. När en elev använder AI för att producera ett svar den inte hade klarat på egen hand, och detta betygsätts som om det vore elevens eget kunnande, har bedömningen misslyckats med att mäta det den avser att mäta - det är en validitetsbrist, inte bara ett regelbrott [6].

Varför spelar distinktionen roll? Dawson m.fl. menar att "fuskets fundamentalattribueringsfel" - idén att fusk handlar om individuella etikoetik hos eleverna - leder till oproduktiva svar: mer övervakning, hårdare regler, teknisk detektion. Om fusk i stället förstås som ett validitetsproblem riktas fokus mot examinationens utformning: vad mäter vi, hur mäter vi det, och kan vi mäta det på ett sätt som inte är sårbart för kringgång?

ERIC registrerar artikeln under EJ1448372, och den har haft bred spridning i högskolepedagogiska kretsar under 2024-2025. Den citeras frekvent av Corbin, Liu och andra CRADLE-forskare vid Deakin University i Australien.

**För gymnasieläraren i samhällskunskap/historia:** Omformuleringen från "hur stoppar jag fusk" till "hur designar jag en examinationsuppgift vars svar faktiskt kräver den kompetens jag vill mäta" är produktiv i planeringsfasen. Frågan är inte "kan AI göra detta" utan "kan man göra detta utan att förstå ämnet".

---

### 4. Corbin, Dawson & Liu: strukturella vs. diskursiva förändringar

Thomas Corbin, Phillip Dawson och Danny Liu publicerade 2025 artikeln "Talk is cheap: why structural assessment changes are needed for a time of GenAI" i *Assessment & Evaluation in Higher Education* [7]. Artikeln finns tillgänglig via Tandfonline (doi: 10.1080/02602938.2025.2503964) och är deponerad i Deakin Universitys öppna arkiv.

Artikelns begreppsliga distinktion är enkel men kraftfull. *Diskursiva förändringar* är modifikationer som kommuniceras till elever via instruktioner, regler och riktlinjer utan att förändra examinationens underliggande mekanik - exempelvis ett meddelande om att "AI får inte användas på den här tentamen" eller ett trafikljussystem (rött = förbjudet, gult = begränsat, grönt = tillåtet). *Strukturella förändringar* är modifikationer som förändrar hur uppgiften faktiskt utförs - checkpunkter, handskrift, muntliga försvar, processdokumentation [7].

Artikelns huvudtes är att diskursiva förändringar är värdelösa för att skydda validitet. Det finns ingen verifieringsmekanism. Corbin m.fl. introducerar "det diskursiva paradoxen": ju mer detaljerade instruktionerna om tillåten AI-användning blir, desto tydligare framgår klyftan mellan vad som kan specificeras och vad som kan verifieras [7].

Strukturella förändringar, däremot, bygger in valideringen i examinationens design. Exempel från artikeln: "checkpoint i live-bedömning som kräver handledarens godkännande av laboratoriearbete" - ett strukturellt inslag som är omöjligt att delegera till AI. Western Carolina University:s Coulter Faculty Commons citerar artikeln som en av sina viktigaste rekommendationer för bedömningsreform 2025-2026 [7].

**För gymnasieläraren i samhällskunskap/historia:** Att skriva "inga AI-verktyg tillåtna" i provhuvudet är en diskursiv förändring. Det ändrar ingenting om eleverna vet att de inte kan upptäckas. Strukturella förändringar - exvis att kräva att eleverna förklarar sina resonemang muntligt under fem minuter, eller att dokumentera källsökningsprocessen - är vad forskningen rekommenderar.

---

### 5. Corbin & Bearman: AI-bedömning som wicked problem på programnivå

En kompletterande artikel från samma forskargrupp - Corbin, Bearman, Boud och Dawson - publicerades 2025 i *Assessment & Evaluation in Higher Education* under titeln "The wicked problem of AI and assessment" [8]. Artikeln identifierades i Semantic Scholar och är tillgänglig via Tandfonline (doi: 10.1080/02602938.2025.2553340).

Begreppet *wicked problem* härstammar från planeringsteorin (Rittel & Webber 1973) och betecknar problem som är ömsesidigt beroende av varandra, rörliga i sin karaktär och motståndskraftiga mot enskilda lösningar. Corbin m.fl. applicerar begreppet på AI i examination och argumenterar för att problemet inte kan lösas på uppgiftsnivå - det kräver ett svar på *programnivå* [8].

Implikationen är att enskilda lärares åtgärder - hur genomtänkt de än är - inte löser frågan om examinationens validitet i ett program där studenter möter en blandning av AI-tillåtande och AI-förbjudande kurser. Konsistens på programnivå är en förutsättning för att de enskilda designlösningarna ska fungera. Artikeln uppmärksammas i Nick Potkalitskys Substack "Educating AI" som ett av de viktigaste ramverken för institutionellt planarbete 2025 [8].

**För gymnasieläraren i samhällskunskap/historia:** En enskild lärares kursdesign kan förbättras markant, men den totala validitetssäkringen kräver ett samtal på skol- och ämneslagssnivå om hur historia och samhällskunskap examineras konsekvent.

---

### 6. Bearman m.fl.: evaluative judgement i GenAI-tid

Bearman, Tai, Dawson, Boud och Ajjawi publicerade 2024 "Developing evaluative judgement for a time of generative artificial intelligence" i *Assessment & Evaluation in Higher Education* (volym 49, nummer 6) [9]. Artikeln registreras under ERIC-kod EJ1438704 och finns fritt tillgänglig via Middlesex Universitys repository.

Begreppet *evaluative judgement* - elevers förmåga att bedöma kvaliteten på eget och andras arbete - identifieras som det centrala konstruktet i GenAI-tidevarvet. Argumentet är att AI nu kan producera svar, men det kan inte (ännu) ersätta en persons omdöme om huruvida ett svar är bra. Det är just förmågan att avgöra kvalitet - kritisk läsning, jämförelse, revision - som bedömning bör sikta på att utveckla och mäta [9].

Artikeln föreslår tre fokusområden: (1) elevens bedömning av AI-outputs kvalitet; (2) elevens bedömning av AI-processer (hur och när är det lämpligt att använda AI?); (3) AI som bedömare av elevers egna bedömningsomdömen [9]. Sammantaget innebär detta en förskjutning från bedömning av produkt till bedömning av elevens förmåga att reflektera, kritisera och revidera - förmågor som är svårare att delegera till AI.

En uppföljarstudie 2025 - "How university students work on assessment tasks with generative artificial intelligence: matters of judgement" (Tandfonline, doi: 10.1080/02602938.2025.2570328) - bekräftar att förmågan att göra kvalitetsomdömen är central för hur studenter navigerar GenAI i praktiken [9].

**För gymnasieläraren i samhällskunskap/historia:** I historia och samhällskunskap är evaluative judgement direkt knutet till källkritik och argumentation. Bedömning som inriktar sig på elevens förmåga att kritisera och revidera - snarare än att producera - är mer validitetssäker i AI-tid.

---

## Del III: Designramverk

### 7. University of Sydneys tvåfiliga modell och TEQSA

University of Sydney lanserade från Termin 2, 2025, ett "tvåfiligsystem" (two-lane approach) som nu betraktas som det dominerande institutionella paradigmet för AI-anpassad bedömning i Australien [10]. Modellen beskrivs på universitetets utbildningsinnovationssajt och i universitetets svar på TEQSA:s (Tertiary Education Quality and Standards Agency) förfrågan om information [10].

**Fil 1 - Säker bedömning:** Övervakade, personliga prov där AI-användning tillförlitligt kan kontrolleras. Syftet är att *validera* att studenten faktiskt besitter de kunskaper kursen säger sig ge. Säkra bedömningar fungerar som ankarpunkter: de bekräftar att det som dokumenteras i "öppna" bedömningar är genuint.

**Fil 2 - Öppen bedömning:** Uppgifter som speglar disciplinens autentiska och verkliga utmaningar, och som stödjer ansvarsfull AI-användning. Dessa kan i varierande grad tillåta AI-stöd och förbereder studenten för en yrkesverklighet präglad av AI.

TEQSA:s riktlinjedokument "Assessment Reform for the Age of Artificial Intelligence" fungerar som nationell referens för det australiska systemet och pekar ut University of Sydneys tvåfiligsystem som sektorsexempel [10]. Modellen är nu inbäddad i universitetets formella kursplan- och integritetspolicyer. Varje skola och disciplin ska ha fullständiga bedömningsplaner färdiga vid utgången av 2025; 2026 fokuserar på implementering.

URL till programnivåbeskrivning: https://educational-innovation.sydney.edu.au/teaching@sydney/program-level-assessment-two-lane/

**För gymnasieläraren i samhällskunskap/historia:** Modellen erbjuder en enkel princip: kombinera minst ett säkert, övervakat tillfälle (salsprov, muntligt) per kurs med öppnare processinriktade uppgifter. Det säkra tillfället validerar; det öppna tillfället övar.

---

### 8. AIAS - AI Assessment Scale av Perkins, Furze & Roe

AI Assessment Scale (AIAS) skapades ursprungligen 2023 av Mike Perkins, Leon Furze, Jasper Roe och Jason MacVaugh och har nu reviderats till version 2 (2024/2025) i en artikel publicerad på arXiv under titeln "The AI Assessment Scale Revisited: A Framework for Educational Assessment" (arXiv: 2412.09029) [11].

Version 2 av AIAS specificerar fem nivåer:

- **Nivå 1 - No AI:** Examinationen utförs helt utan AI-stöd i kontrollerad miljö.
- **Nivå 2 - AI Planning:** AI används i planeringsfasen men inte i produktion av slutprodukten.
- **Nivå 3 - AI Collaboration:** AI används som samarbetspartner i produktionsprocessen med tydlig dokumentation.
- **Nivå 4 - Full AI:** Full AI-integration; eleven ansvarar för instruktioner, revision och slutbedömning.
- **Nivå 5 - AI Exploration:** Eleven uppmuntras att innovativt utforska AI för att lösa komplexa problem och generera nya insikter, i samdesign med läraren.

Den uppdaterade versionen förtydligar den socialkonstruktivistiska grunden och positionerar skalan som ett *redesignsramverk* snarare än ett policyverktyg. Skalans icke-hierarkiska karaktär betonas: det finns ingen "rätt" nivå - valet beror på vad kursen vill uppnå [11]. TEQSA:s 2024-papper noterar AIAS som ett konkret verktyg för att implementera GenAI i bedömning. Skalan är översatt till 30+ språk och används av hundratals skolor och universiteter globalt.

Leon Furzes blogg (leonfurze.com/2024/08/28/updating-the-ai-assessment-scale/) dokumenterar revideringsprocessen och motiverar tillägget av Nivå 5.

**För gymnasieläraren i samhällskunskap/historia:** Skalan kan användas som planeringsverktyg: för varje examinationsmoment i historia och samhällskunskap kan läraren explicit välja vilken AIAS-nivå som är lämplig och kommunicera detta till eleverna, vilket skapar transparens och minskar gråzoner.

---

## Del IV: Konkreta examinationsformer

### 9. Muntliga prov: inter-rater reliabilitet och kritiska problem

Muntliga prov framställs ofta reflexivt som den mest AI-säkra examinationsformen: eleven kan inte ha AI med sig in i rummet. Men forskningen 2024-2025 innehåller ett kontraintuitivt varningskluster kring muntliga provs *reliabilitet*.

En systematisk översikt och metaanalys publicerad i *BMC Medical Education* (2023, PubMed: 37491301) granskade structured viva-examinationer inom hälsoyrken och fann att reliabilitetskoefficienter för traditionella muntliga prov uppgick till Cronbach α = 0.3-0.4, att jämföra med α = 0.7-0.8 för strukturerade varianter [12]. En 2025 jämförande studie i *PMC* (PMC12139079) fann att hybridformatet visade ICC och Cronbach α = 0.663, fortfarande under den konventionella "god reliabilitet"-tröskeln på 0.70.

Norsk forskning i gymnasiekontext är direkt relevant. Syveruds studie 2025 - "Oral exams in four Norwegian secondary schools - characteristics and variations in practice and possible threats to validity and fairness" (*Assessment in Education*, doi: 10.1080/0969594X.2025.2563722) - videoanalyserade 36 autentiska muntliga prov i norska och litteratur [12]. Fynd: antalet minuter på studentpresentation vs. ämnesdiskussion varierade markant mellan skolor; de delar av kursplanen som faktiskt testades varierade. Slutsatsen är att "securing high degrees of validity and fairness might be difficult" för muntliga prov utan standardiserad procedur [12].

Cohen's kappa för bedömaröverensstämmelse i traditionella muntliga prov faller ofta inom intervallet κ = 0.17-0.54 i hälsoprofessionsutbildning, under den konventionella gränsen κ ≥ 0.60 för "god" inter-rater reliabilitet. Ingen empirisk studie har ännu publicerat systematiska kappavärden specifikt för gymnasium-muntliga i samhällsvetenskapliga ämnen i Norden, men mekanismerna är desamma.

**Paradoxen:** Muntliga prov är svårare att delegera till AI, men de är inte nödvändigtvis mer valida. En dåligt standardiserad muntlig examination kan mäta elevens förmåga att hantera examinatorns preferenser snarare än kursplanskunskaper.

**För gymnasieläraren i samhällskunskap/historia:** Muntliga prov i historia och samhällskunskap bör designas med standardiserade frågeprotokoll, tydliga bedömningsmatriser och om möjligt dubbelrättning - annars riskerar man att byta ett validitetsproblem (AI-sårbarhet) mot ett annat (bedömarbias och opålitlighet).

---

### 10. Blue book-renässansen och konstruktdrift

I USA rapporteras en markant återgång till handskrivna salstentor - de klassiska "blue books" som länge var standard på amerikanska college. Industrikällor och universitetsrapporter dokumenterar att blue book-försäljningen ökat med upp till 50% vid University of Florida och 80% vid University of California, Berkeley, under läsåret 2024-2025 [13]. Entrepreneur-tidningen rapporterar i en artikel med rubriken "College Professors Turn Back to Blue Books to Combat ChatGPT" att 59% av ledare inom högre utbildning anser att fusk ökat på deras campus sedan generativ AI blivit tillgänglig [13].

Den konceptuellt viktiga aspekten av denna rörelse är vad bedömningsforskarna kallar *konstruktdrift* (construct drift) - förändringen i vad som faktiskt mäts när examinationsformen skiftar. Handskrivna salstentor mäter ofrånkomligen förmågan att producera flytande, välformulerad text *utan hjälpmedel under tidpress*. En elev som skriver bra uppsatser med hjälpmedel men kämpar med handstil eller arbetar långsamt har en annan profil på handskrivna prov jämfört med datorskrivna - men inte nödvändigtvis en lägre ämneskunskap [13].

Ingen empirisk studie har ännu direkt mätt konstruktdriften vid övergången från digital till handskriven examinaton i gymnasiekontext, men problemet är välkänt i bedömningsfilosofisk litteratur. Dawson m.fl. (2024) tangerar det i sin diskussion om validitet: om vi ändrar examinationsformen för att undvika AI, bör vi explicit reflektera över vad vi nu faktiskt mäter [6].

**För gymnasieläraren i samhällskunskap/historia:** En handsskriven salsexamination i samhällskunskap testar bland annat skrivhastighet och handstilsläsbarhet - faktorer som inte ingår i kursplanskompetensmålen. Det är inte automatiskt fel att använda salstentor, men läraren bör vara medveten om att examinationsformen i sig påverkar vad som mäts.

---

### 11. Processportfölj med checkpoint-samtal: den pragmatiska huvudrekommendationen

Den examinationsform som framträder som den praktiska huvudrekommendationen i 2024-2025 års bedömningslitteratur är kombinationen av processportfölj med inbyggda checkpoint-samtal - strukturerade korta samtal vid milstolpar i arbetsprocessen [14].

Principen är strukturell i Corbin m.fl.:s (2025) mening: det är inte ett reglage om vad som är tillåtet, utan en förändring av examinationens mekanik. Eleverna dokumenterar sin arbetsprocess - sökstrategier, källurval, begreppsliga vändpunkter, revisionsbeslut - och möter läraren i fem-till-tio minuters checkpoint-samtal vid förutbestämda tillfällen. Samtalet verifie*rar* att processen faktiskt ägt rum och att eleven kan redogöra för sina val [14].

Drieams pedagogiska whitepaper "How e-portfolios help create AI-resistant assessment strategies" (2024-2025) specificerar tre nyckelegenskaper: (1) det iterativa tänkandets dokumentation via olika utkast, återkopplingstillfällen och reflektioner; (2) longitudinell rörlighet - bedömningen spänner över en längre tid, vilket AI-genererat engångssvar inte kan förfalska; (3) det levande samtalet som verifikationsmoment [14].

En arXiv-preprint från januari 2025, "The Conversational Exam: A Scalable Assessment Design for the AI Era" (arXiv: 2601.10691), implementerade konversationsexaminationsformatet i en kurs i teknisk linjär algebra på ingenjörsprogram, med studenter som kodade live medan de förklarade sitt resonemang. 70% av studenterna upplevde att formatet testade genuin förståelse; 83% fann det mer stressfullt än skriftliga prov - vilket är en påminnelse om att reliabelt genomförande kräver god design och förberedelse av eleverna [14].

**För gymnasieläraren i samhällskunskap/historia:** En källanalys i historia kan examineras som en processportfölj: eleven lämnar in en söklogg, kommenterade källor och ett utkast, och möter läraren i ett fem-minuters checkpoint-samtal halvvägs. Slutprodukten bedöms mot bakgrund av den dokumenterade processen. Formatet är hanterbart, formativt värdefullt och strukturellt säkrat.

---

### 12. Hyperkontextualiserad autentisk bedömning

Kofinas, Tsay och Pike publicerade 2025 i *British Journal of Educational Technology* artikeln "The impact of generative AI on academic integrity of authentic assessments within a higher education context" (doi: 10.1111/bjet.13585) [15]. Studiens central fynd är provocerande: erfarna bedömare *kan inte reliabelt skilja* AI-genererat arbete från genuint studentarbete i autentiska examinationsuppgifter. Autenticitet i sig är inte en panacea.

Artikelns konstruktiva bidrag är att skifta definitionen av autentisk bedömning: i stället för uppgifter som är *trovärdighetsmässigt* svåra att förfalska (eftersom de ser verkliga ut) bör bedömning designas kring kunskap som är *socialt situerad och experientiell* - kunskap genererad i sociala sammanhang med synkron närvaro och inbäddad i specifika sociala nätverk [15].

Konkret innebär detta examinationsuppgifter som hämtar sitt material från klassens egna fältarbeten, intervjuer med lokala aktörer, besök på lokala arkiv, händelser under läsåret eller handannoterade primärkällor. En elev som analyserar en källa som hittades i klassens gemensamma arkivbesök, och refererar till diskussioner i klassrummet, producerar svar som är *logistiskt omöjliga* för en utomstående AI att förfalska - inte för att AI inte kan skriva, utan för att AI inte har tillgång till det specifika lokala materialet [15].

Bera-bloggen (British Educational Research Association) sammanfattar artikelns implikation: "assessment must evaluate... knowledge application and socialized knowledge which is socially situated and experiential" [15].

**För gymnasieläraren i samhällskunskap/historia:** Lokal kontextualisering är en befintlig styrka i samhällskunskapen - kommunalpolitik, lokala nyheter, klassbesök. Att systematiskt integrera sådant material i examinationsuppgifter är inte bara pedagogiskt välmotiverat utan faktiskt AI-svårt av logistiska skäl.

---

## Del V: Nordisk/svensk kontext

### 13. SOU 2025:18 (Henrekson): slutprovssystemet löser AI-validitetsproblem implicit

SOU 2025:18 - "Ett likvärdigt betygssystem" - presenterades av utredare Magnus Henrekson i februari 2025 och tillgängliggjordes via Riksdagen (HDB318) och Institutet för Näringslivsforskning (IFN) [16]. Betänkandet föreslår en genomgripande reform av det svenska betygssystemet, men har en direkt och intressant relation till AI-bedömningsproblematiken.

Kärnförslaget är en 70-30-modell: lärarens betyg kombineras med elevens centralt rättade slutprovsresultat i ett viktigt meritvärde. Gymnasieelever föreslås skriva fem till åtta nationella slutprov beroende på program. Proven ska genomföras digitalt och rättas centralt. Det nya betygssystemet föreslås gradvis från höst 2027, med slutprovsystemet gradvis från vår 2028 [16].

Skolverket föreslog i maj 2026 ett ytterligare stegvist genomförande: under 2029-2030 genomförs proven primärt på papper och rättas lokalt; från vår 2032 skalas digital implementation och central rättning upp enligt en fastlagd plan. Det tidigare digitala provprojektet nödstoppades i december 2025 och betecknades som "ett fiasko" av branschmedia (Skolledaren, december 2025) [16].

Det väsentliga ur AI-validitetsperspektiv är att ett centralt rättat slutprov - genomfört i kontrollerad digital miljö under övervakning - i praktiken löser det AI-validitetsproblem som resten av världen brottas med, utan att utredningen nämner AI explicit. Slutprovsmodellen är konceptuellt identisk med University of Sydneys "säkra fil": ett övervakat tillfälle som validerar att elevens betyg speglar faktisk kompetens [13][16].

**För gymnasieläraren i samhällskunskap/historia:** Samhällskunskap och historia ingår i det gymnasiala programmet men huruvida dessa ämnen ingår bland de fem till åtta slutproven är ännu inte fastlagt. Reformen är relevant som kontextualiserande signal: nationell bedömningspolitik rör sig mot extern validering oavsett AI-debattens terminologi.

---

### 14. Nordisk jämförelse: tre nationella strategier

De tre nordiska länderna har valt påfallande olika strategier för att hantera AI i examination på gymnasienivå 2024-2025, vilket ger ett naturligt komparativt experiment [17].

**Danmark - uppgiftsdesign plus pilotprojekt med AI-stöd:** Danmark väljer en dubbel strategi. Å ena sidan arbetar Undervisningsministeriet med uppgiftsdesign och externa censorer som säkerhetsmekanism. Å andra sidan initierade Danmark ett banbrytande pilotprojekt: från 2026 tillåts gymnasieelever använda AI-verktyg under förberedelsefasen av det muntliga engelskprovet (NordiskPost, september 2025; The Local, augusti 2025) [17]. Under en timmes förberedelse kan eleverna använda alla tillgängliga verktyg inklusive generativ AI, varefter de presenterar muntligt inför examinatorer. Pilot genomförs under läsåret 2025/26 på utvalda skolor.

**Norge - muntlig provtradition med validitetsvarningar:** Norge har en stark tradition av muntliga avslutningsprov i gymnasiet. En 2025-studie (Syverud, *Assessment in Education*) visar dock att den norska muntliga provkulturen har dokumenterade problem med validitet och rättvisa - stora variationer i tid per fas och läroplansinnehåll som testades, skiljde sig signifikant mellan de fyra undersökta skolorna [12][17]. Inga tecken på att Norge planerat omstrukturering av provformaten specifikt med anledning av AI.

**Sverige - slutprovssystemet 2028-2032:** Som redovisats under sub-tema 13 är den svenska strategin ett externt, centralt rättat slutprovssystem [16][17]. Strategin är reaktiv i förhållande till likvärdighetsproblemet (betygsinflation) men fungerar som AI-säkring utan att vara designat för det syftet.

**För gymnasieläraren i samhällskunskap/historia:** Det danska pilotprojektet är det mest experimenterande och pedagogiskt nyskapande: det inkorporerar AI i examinationsprocessen som ett verktyg snarare än ett hot, och prövar om muntliga samtal kan verifiera lärandet. Norskt exempelpar med svenska erfarenheter ger relevant metodologisk reflektion.

---

## Del VI: Equity-perspektiv

### 15. AI-som-stöd-paradoxen: samma verktyg, dubbel status

En av de mest komplexa equity-frågorna i AI-bedömningsdiskursen är det som kan kallas *ackommodationsparadoxen*: de AI-verktyg som klassas som fusk i ett examinationssammanhang är i många fall formellt godkända som funktionsnedsättningsstöd för elever med dokumenterade behov [18].

En opinionstext i *Inside Higher Ed* (november 2025) under titeln "The Case for AI as Accommodation" beskriver dilemmat direkt: universitetens disability offices utvärderar AI-verktyg som transkription och studiehjälp som rimliga anpassningar, men när dessa verktyg används i examination behandlas de som akademisk ohederlighet [18]. En artikel i EDUCAUSE Review (september 2024) - "The Impact of AI in Advancing Accessibility for Learners with Disabilities" - betonar att "disabled and neurodivergent users need to benefit from these tools and not be disadvantaged by restricted access to AI-enabled assistive technology" [18].

Den parallella frågan om handskrift och muntliga prov är konkret och allvarlig. Återgången till blue books och handskrivna prov gynnar elever med snabb, läslig handstil och missgynnar systematiskt elever med dyslexi, finmotoriska svårigheter eller långsam skrivtakt. Krav på muntliga prov gynnar flytande talare och missgynnar elever med selektiv mutism, social ångest, stamning eller kommunikationssvårigheter.

Nationella Centre for AI vid Jisc (mars 2025) konstaterar i "Navigating the Intersection of AI, Accessibility and Education in 2025" att rekommendationen bör vara att undvika att begränsa tillgång till befintliga verktyg som Grammarly (med etableradanvändning för dyslexi-stöd), medan generativa funktioner kan begränsas i kontrollerade examinationer [18]. California State University:s journal *AI in Education* publicerade 2024 en artikel om "AI as an Academic Accommodation for Students with Disabilities" som undersöker när AI-stöd är rimlig anpassning vs. kapabilitetsgap som IEP:n bör åtgärda [18].

**För gymnasieläraren i samhällskunskap/historia:** Det finns elever i varje klass med legitimt stödbehov vars stödverktyg (textläsning, stavningskontroll, grammatikhjälp) är konceptuellt likartade AI-funktioner som förbjuds i "AI-säkra" prov. Att utforma AI-säkrade prov kräver explicit reflektion om vilka elever som missgynnas och hur deras dokumenterade stöd beaktas.

---

### 16. Stanford-data: fuskfrekvensen är konstant 2018-2024

En av de mest verkningsfulla motbilderna mot den moralpanik som omgärdar AI och akademisk hederlighet är empirisk: självrapporterad fuskfrekvens har *inte* ökat sedan ChatGPT:s lansering.

The 74 Million publicerade (2024) en artikel med rubriken "High School Cheating Increase from ChatGPT? Research Finds Not So Much" som refererar till forskning från Stanford [19]. Andelen gymnasieelever som uppger att de fuskat låg på 60-70% hösten 2023 - samma nivå som *före* ChatGPT:s lansering hösten 2022. En uppföljsstudie genomförd februari-maj 2024 fann en total fuskfrekvens på 72,06%, "consistent with historical baselines and prior studies" [19].

Den internationella akademiska integritetsbyrån ICAI:s sammanställning av enkäter med 70 000+ gymnasieelever från 2002 till 2015 fann att ca 64% fuskat på ett prov - ett tal som alltså är jämförbart med 2023-2024 års siffror [19]. En 2025-uppföljsstudie i Springer, "Cheating in the second year of generative AI chatbots: a follow-up study on high school student cheating behaviors" (*Educational Technology Research and Development*), bekräftar att AI-tillgänglighet inte förändrat den totala fusksannolikheten [19].

Det som *har* förändrats är *metoden* - inte frekvensen. AI erbjuder ett effektivare och svårare-att-upptäcka verktyg för elever som skulle ha fuskat ändå. Panikens premiss - att AI skapar en ny generation fuskare - stöds inte av longitudinella data.

Viss kontext: Stanford-data om *rapporterade* violations vid universitetet visade en ökning under pandemin (2020-2021) kopplad till distansundervisning, men återgick därefter mot baslinjen. Inga konsistenta longitudinella data om *faktiska* (inte bara rapporterade eller identifierade) cheating rates från 2018-2024 finns publicerade, vilket är en metodologisk begränsning i forskningstillståndet.

**För gymnasieläraren i samhällskunskap/historia:** Den evidensbaserade slutsatsen är att AI-paniken delvis bygger på en falsk premiss. Fusk är ett gammalt problem med ett nytt verktyg. Svar som fokuserar på bedömningsdesign (validitet) snarare än teknisk kontrollapparat är mer robusta även mot bakgrund av denna historieskrivning.

---

## Sammanfattande analys: mönster och implikationer

### Övergripande mönster

Forskningen 2024-2026 konvergerar kring fyra slutsatser:

1. **Detektionsparadigmet är empiriskt bankrutt.** Inga av de befintliga AI-detektionsverktygen håller tillräcklig noggrannhet för att rättssäkert användas i disciplinärenden, och bias mot andraspråks- och atypiska skribenter är systematisk.

2. **Validitetsramverket är produktivt.** Omformuleringen från "fusk som etikbrott" till "fusk som validitetsbrist" riktar uppmärksamheten mot examinationens design snarare än elevens moral.

3. **Strukturella förändringar är nödvändiga.** Regler och policies (diskursiva förändringar) skyddar inte validitet. Ändringar i examinationens mekanik - checkpunkter, processdokumentation, muntliga verifikationssamtal - är vad forskningen stöder.

4. **Equity-analysen är obligatorisk.** Varje "AI-säkringsåtgärd" har fördelningseffekter. Handskrift missgynnar dyslexi. Muntliga prov missgynnar kommunikationssvårigheter. Detektorer missgynnar andraspråksskribenter. Ingen enkel lösning är neutral.

### Implikationer för gymnasieläraren

Den examinationsmodell som sammantaget bäst svarar mot forskningsläget för en gymnasielärare i samhällskunskap och historia 2026 innehåller:

- **Minst ett övervakat, strukturellt säkrat tillfälle** per termin (sals- eller muntligt med standardiserat protokoll och matris)
- **Processportfölj med checkpoint-samtal** för processinriktade uppgifter (källarbete, essäer, projektarbeten)
- **Hyperkontextualisering** där möjligt: uppgifter knutna till klassens egna erfarenheter, lokala källor och specifika klassrumsdiskussioner
- **Explicit AIAS-kommunikation** till eleverna: vilken nivå av AI-stöd är tillåten i respektive uppgift och varför
- **Equity-reflektion** vid varje examinationsreform: vilka elever missgynnas av den valda formen och hur hanteras deras stödbehov

---

## Datapunkter och statistik

- 61,3% av TOEFL-uppsatser felaktigt flaggade som AI av sju detektorer (Liang m.fl., Stanford 2023/2024) [4]
- 97,8% av modersmålssskribenters texter korrekt klassificerade av samma detektorer [4]
- Falsk-positiv-frekvens upp till 20% i Turnitin (Journal of Academic Ethics, 2024) [2]
- 12+ ledande US-universi tat har avaktiverat Turnitins AI-detektor [5]
- Blue book-försäljning upp 50% vid University of Florida, upp 80% vid UC Berkeley, 2024-2025 [13]
- Fuskfrekvens gymnasiet 2023: 60-70% (konstant sedan pre-ChatGPT) [19]
- Fuskfrekvens gymnasiet febr-maj 2024: 72,06% (vid baslinjen) [19]
- κ = 0.3-0.4 för traditionell viva voce vs. α = 0.7-0.8 för strukturerad (BMC Medical Education, 2023) [12]
- 42% av Edinburghs 380 undergraduatebedömningar klassade som "mycket sårbara för AI" (2024) [14]
- SOU 2025:18: gymnasieelever föreslås genomföra 5-8 slutprov centralt rättade digitalt från 2028/2032 [16]
- AIAS används av 100+ lärosäten, översatt till 30+ språk [11]

---

## Källor

[1] Sadasivan, V.S., Kumar, A., Balasubramanian, S., Wang, W., & Feizi, S. (2023). "Can AI-Generated Text be Reliably Detected?" arXiv: 2303.11156. https://arxiv.org/abs/2303.11156

[2] MDPI Information (2025). Evidence synthesis on AI detection tool reliability. Sammanfattad via GradPilot AI Detector False Positive Rates report 2026 och MDPI:s egna databas. https://gradpilot.com/news/ai-detector-false-positive-rates-compared

[3] EyeSift (2024-2025). "AI Detection Tools Compared: GPTZero vs Turnitin vs Originality AI." https://www.eyesift.com/blog/ai-detection-tools-comparison/

[4] Liang, W., Zou, J. m.fl. (2023/2024). "GPT detectors are biased against non-native English writers." Stanford University. Sammanfattad via Business and Human Rights Centre: https://www.business-humanrights.org/en/latest-news/stanford-study-finds-ai-detection-tools-to-be-biased-against-international-students/ ; samt arXiv (2025): "AI Detectors Fail Diverse Student Populations." https://arxiv.org/pdf/2603.20254

[5] Vanderbilt University (2023). "Guidance on AI Detection and Why We're Disabling Turnitin's AI Detector." https://www.vanderbilt.edu/brightspace/2023/08/16/guidance-on-ai-detection-and-why-were-disabling-turnitins-ai-detector/ ; UT Austin Office of the Provost (2024). https://provost.utexas.edu/the-office/faculty-affairs/office-of-academic-technology/ai-detection-software-guidance/ ; AIAAIC repository: https://www.aiaaic.org/aiaaic-repository/ai-algorithmic-and-automation-incidents/universities-disable-turnitin-ai-detection-in-students-best-interests

[6] Dawson, P., Bearman, M., Dollinger, M., & Boud, D. (2024). "Validity matters more than cheating." *Assessment & Evaluation in Higher Education*, 49(7), 1005-1016. https://www.tandfonline.com/doi/full/10.1080/02602938.2024.2386662 ; ERIC: EJ1448372. UTS-repository: https://opus.lib.uts.edu.au/rest/bitstreams/c5dd9daf-466f-4b17-952a-b81c2b1291f8/retrieve

[7] Corbin, T., Dawson, P., & Liu, D. (2025). "Talk is cheap: why structural assessment changes are needed for a time of GenAI." *Assessment & Evaluation in Higher Education*. doi: 10.1080/02602938.2025.2503964. https://www.tandfonline.com/doi/full/10.1080/02602938.2025.2503964 ; Deakin research archive: https://dro.deakin.edu.au/articles/journal_contribution/Talk_is_cheap_why_structural_assessment_changes_are_needed_for_a_time_of_GenAI/29151308

[8] Corbin, T., Bearman, M., Boud, D., & Dawson, P. (2025). "The wicked problem of AI and assessment." *Assessment & Evaluation in Higher Education*. doi: 10.1080/02602938.2025.2553340. https://www.tandfonline.com/doi/full/10.1080/02602938.2025.2553340 ; Semantic Scholar: https://www.semanticscholar.org/paper/The-wicked-problem-of-AI-and-assessment-Corbin-Bearman/aeba1149b4962ba8a0a4b297507bb8cf30dca6c8

[9] Bearman, M., Tai, J., Dawson, P., Boud, D., & Ajjawi, R. (2024). "Developing evaluative judgement for a time of generative artificial intelligence." *Assessment & Evaluation in Higher Education*, 49(6). doi: 10.1080/02602938.2024.2335321. https://www.tandfonline.com/doi/full/10.1080/02602938.2024.2335321 ; ERIC: EJ1438704. Uppföljare 2025: "How university students work on assessment tasks with generative artificial intelligence: matters of judgement." doi: 10.1080/02602938.2025.2570328

[10] University of Sydney (2024-2025). "Two-lane assessment approach." https://educational-innovation.sydney.edu.au/teaching@sydney/frequently-asked-questions-about-the-two-lane-approach-to-assessment-in-the-age-of-ai/ ; Programnivå: https://educational-innovation.sydney.edu.au/teaching@sydney/program-level-assessment-two-lane/ ; TEQSA: https://www.teqsa.gov.au/guides-resources/protecting-academic-integrity/academic-integrity-toolkit/risks-academic-integrity-ai/detecting-plagiarism-ai-generated-text-student-assessments-and-securing-take-home-written-assessments

[11] Perkins, M., Furze, L., Roe, J., & MacVaugh, J. (2024/2025). "The AI Assessment Scale Revisited: A Framework for Educational Assessment." arXiv: 2412.09029. https://arxiv.org/abs/2412.09029 ; Furze blogg (2024): https://leonfurze.com/2024/08/28/updating-the-ai-assessment-scale/ ; AIAS webbplats: https://aiassessmentscale.com/

[12] Systematisk översikt viva voce: BMC Medical Education (2023), PubMed 37491301. https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-023-04524-6 ; Jämförande studie 2025: PMC12139079 https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12139079/ ; Syverud, M.S. (2025). "Oral exams in four Norwegian secondary schools." *Assessment in Education*. doi: 10.1080/0969594X.2025.2563722. https://www.tandfonline.com/doi/full/10.1080/0969594X.2025.2563722

[13] Industry Intelligence (2024-2025). "US schools return to handwritten exams amid academic cheating driven by AI tools." https://www.industryintel.com/news/us-schools-return-to-handwritten-exams-amid-academic-cheating-driven-by-ai-tools-like-chatgpt-blue-book-sales-increase-up-to-80-since-2022-as-universities-nationwide-boost-their-bulk-orders-of-the-lined-exam-booklets-170969814720 ; Entrepreneur (2024): https://www.entrepreneur.com/business-news/college-professors-turn-back-to-blue-books-to-combat-chatgpt/492450 ; Daily Cardinal (2025): https://www.dailycardinal.com/article/2025/11/blue-books-are-back-the-revival-of-pen-and-paper-exams

[14] Drieam (2024-2025). "How e-portfolios help create AI-resistant assessment strategies." https://drieam.com/en/insights/how-eportfolios-help-create-ai-resistant-assessment-strategies/ ; arXiv (2025): "The Conversational Exam: A Scalable Assessment Design for the AI Era." arXiv: 2601.10691. https://arxiv.org/pdf/2601.10691 ; Inside Higher Ed (2025): "You Can't AI-Proof the Classroom, Experts Say. Get Creative Instead." https://www.insidehighered.com/news/faculty-issues/learning-assessment/2025/12/16/you-cant-ai-proof-classroom-experts-say-get

[15] Kofinas, A., Tsay, M., & Pike, A. (2025). "The impact of generative AI on academic integrity of authentic assessments within a higher education context." *British Journal of Educational Technology*. doi: 10.1111/bjet.13585. https://bera-journals.onlinelibrary.wiley.com/doi/full/10.1111/bjet.13585 ; BERA-blogg: https://www.bera.ac.uk/blog/evaluating-authentic-assessments-and-academic-integrity-in-the-age-of-generative-ai

[16] SOU 2025:18 (Henrekson, M. m.fl.). "Ett likvärdigt betygssystem." Riksdagen: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/statens-offentliga-utredningar/ett-likvardigt-betygssystem_hdb318/html/ ; Regeringen (fulltext): https://www.regeringen.se/contentassets/56408e57ea8e4954bf38491c8bc33d4c/ett-likvardigt-betygssystem-sou-202518-volym-1.pdf ; Skolverket (maj 2026): https://www.skolverket.se/om-skolverket/nyheter-och-pressmeddelanden/nyheter/nyheter/2026-05-11-skolverket-foreslar-stegvist-inforande-av-digitala-nationella-slutprov ; Skolledaren (dec 2025): https://www.skolledaren.se/aktuellt/nyheter/2025/12/digitala-nationella-prov-nodstoppas---ett-fiasko/

[17] NordiskPost (september 2025). "Denmark tests AI in English oral exams." https://www.nordiskpost.com/2025/09/06/denmark-ai-english-exames-2026/ ; The Local (augusti 2025): https://www.thelocal.dk/20250822/danish-students-to-be-allowed-to-use-ai-for-english-exams/ ; Syverud 2025 (Norge, se källa 12).

[18] Inside Higher Ed (november 2025). "The Case for AI as Accommodation." https://www.insidehighered.com/opinion/views/2025/11/26/case-ai-accommodation-opinion ; EDUCAUSE Review (september 2024): "The Impact of AI in Advancing Accessibility for Learners with Disabilities." https://er.educause.edu/articles/2024/9/the-impact-of-ai-in-advancing-accessibility-for-learners-with-disabilities ; Jisc National Centre for AI (mars 2025): "Navigating the Intersection of AI, Accessibility and Education in 2025." https://nationalcentreforai.jiscinvolve.org/wp/2025/03/06/navigating-the-intersection-of-ai-accessibility-and-education-in-2025/ ; CSU journal (2024): "AI as an Academic Accommodation." https://journals.calstate.edu/ai-edu/article/download/5282/4299/16081

[19] The 74 Million (2024). "High School Cheating Increase from ChatGPT? Research Finds Not So Much." https://www.the74million.org/article/high-school-cheating-increase-from-chatgpt-research-finds-not-so-much/ ; Springer (2026): "Cheating in the second year of generative AI chatbots." *Educational Technology Research and Development*. https://link.springer.com/article/10.1007/s11423-026-10587-1 ; ICAI longitudinella data refererade via nerdynav.com sammanställning: https://nerdynav.com/chatgpt-cheating-statistics/

**Kompletterande källor:**

[20] ResearchGate / International Journal for Educational Integrity (2026). "Evaluating the accuracy and reliability of AI content detectors in academic contexts." Springer Nature. https://link.springer.com/article/10.1007/s40979-026-00213-1

[21] MDPI Information (2025). "Evaluating the Effectiveness and Ethical Implications of AI Detection Tools in Higher Education." https://www.mdpi.com/2078-2489/16/10/905

[22] Kaltman Law (2024). "A Critical Examination of AI Detectors in Academic Integrity Enforcement." https://www.kaltmanlaw.com/post/ai-detectors-academic-integrity-bias

[23] UCLA HumTech (2024). "The Imperfection of AI Detection Tools." https://humtech.ucla.edu/technology/the-imperfection-of-ai-detection-tools/

[24] ERIC EJ1490530 (2025). "Talk Is Cheap: Why Structural Assessment Changes Are Needed." Assessment & Evaluation in Higher Education. https://eric.ed.gov/?q=example&ff1=subStudent+Evaluation&pg=9&id=EJ1490530

[25] Skolverket (2026). "Redovisning av ändring av uppdraget att digitalisera de nationella proven." https://www.skolverket.se/sok-publikationer/publikationsserier/regeringsuppdrag/2026/redovisning-av-andring-av-uppdraget-att-digitalisera-de-nationella-proven

[26] arXiv (2025). "Scalable and Personalized Oral Assessments Using Voice AI." Inkluderar Inter-rater reliability data för AI-muntliga bedömningar. https://arxiv.org/pdf/2603.18221

---

## Forskningsnoteringar

- Rapporterade kappa-värden för traditionella muntliga prov (κ = 0.17-0.54) bygger på medicinsk utbildningsforskning (hälsoprofessioner). Ingen publicerad studie har systematiskt mätt inter-rater reliabilitet för muntliga gymnasieprov i samhällsvetenskapliga ämnen i Norden. Syveruds norska studie (2025) mäter variationer i examinationsförfarande men rapporterar inte kappa-värden.
- Konstruktdriftsproblemet vid övergång digital-handskriven examination saknar ännu direktstudier i gymnasiekontext. Problematiken är välkänd i bedömningsfilosofisk litteratur men inte empiriskt kvantifierad.
- Stanford-data om konstant fuskfrekvens avser *självrapporterat* fusk, inte verifierade disciplinärenden. Validitetsskillnaden mellan självrapport och faktiska fall är ett metodologiskt förbehåll.
- Den danska AI-examinationspiloten 2025/26 har ännu inte publicerats i peer-reviewed form. Uppföljningsstudier förväntas 2026-2027.
- Henrekson-utredningens 70-30-modell är ett förslag under remissbehandling (Skolverkets yttrande juni 2025). Slutgiltig modell kan avvika vid lagstiftning.

---

*Rapport framtagen av Research Specialist Agent, 2026-05-21.*
*Källgranskning: 26 unika referenser; 23 av 26 (88%) från 2024-2026.*
