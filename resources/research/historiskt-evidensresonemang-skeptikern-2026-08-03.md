---
created: 2026-08-03
updated: 2026-08-03
created_by: claude-sonnet-5
updated_by: claude-sonnet-5
agent_version: 04.26
type: research-report
tags: [research, skeptikern, historiedidaktik, evidensresonemang, effektstorlek, replikeringskris, kallkritik, kritiskt-tankande]
---

> **VERIFIERAD 2026-08-03.** Denna rapport har prövats mot primärkällor. Där den
> säger något annat än `historiskt-evidensresonemang-VERIFIERING-2026-08-03.md`
> gäller verifieringsfilen. Rättelser som berör denna rapport finns där, inte här -
> rapporten lämnas orörd så att det går att se vad lensen faktiskt hävdade.


# Håller d=2,05-fyndet om explicit undervisning i evidenstyper? - forskningsöversikt 2026-08-03

## Uppdrag

Uppdraget var att pröva, i rollen som Skeptikern, ett specifikt kedjepåstående på wiki-sidan `evidence-based-reasoning-intervention-d-205-historia.md`: att Du & List (2024) visade en effektstorlek på d=2,05 för explicit undervisning i evidenstyper, att detta hör till de största effektstorlekar som någonsin rapporterats i utbildningsforskning, och att fyndet motiverar en "direkt implementerbar" explicit evidenstaxonomi i svensk gymnasiehistoria. Jag har tolkat uppdraget som att varje länk i den kedjan - mätning, design, mått, transfer, population, och det bredare forskningsklimatet - ska prövas separat, och att jag aktivt ska söka motevidens snarare än att bara redovisa studien på nytt.

Jag har inte haft tillgång till fulltexten av Du & List (2024) eller Hongcui Dus avhandling (2023) - Wiley-artikeln ligger bakom betalvägg (HTTP 402) och Penn States institutionella PDF gav genomgående HTTP 403 vid flera försök. Det jag vet om studiens metod bygger därför på abstrakt-nivå-uppgifter som är konsekvent återgivna över flera oberoende sökträffar (Wiley-abstraktet, Penn State-sammanfattningar, ERIC-liknande beskrivningar), inte på egen läsning av fulltexten. Detta är i sig ett fynd - se "Vad jag inte hittade".

## Sammanfattning

Fyndet d=2,05 är sannolikt korrekt räknat på sina egna villkor, men villkoren är svaga på nästan varje punkt som avgör om siffran betyder något utanför sitt eget experiment. Designen i Studie 1 är within-subjects utan oberoende kontrollgrupp - en klassisk "one-group pretest-posttest design" som metodlitteraturen sedan Campbell & Stanley (1963) namnger som en av de svagaste kvasiexperimentella formerna som finns, just för att den inte kan skilja interventionseffekt från övningseffekt, mognad och regression mot medelvärdet. Måttet (OEBR, Objective Evidence-Based Reasoning) är forskarkonstruerat och använder samma vokabulär (comparative/correlational/causal) som interventionen lärde ut - en känd källa till uppblåsta effektstorlekar (Cheung & Slavin, 2016, visar att experimenter-made mått ger ungefär dubbelt så stora effekter som oberoende mått). Populationen var amerikanska studenter på en introduktionskurs i pedagogisk psykologi vid Penn State - inte historieelever, inte gymnasieungdomar, inte svenska. Transfer testades inte till ett oberoende historiskt resonemangsmått, och den bredare transferlitteraturen (Sala & Gobet, 2019, andra ordningens metaanalys på nästan 22 000 deltagare) visar att "far transfer" från smala kognitiva träningsprogram i praktiken är noll. När jag jämför med den faktiska historiedidaktiska litteraturen (Reisman, 2012: d=0,29 för en sex månader lång läroplansintervention i verkliga klassrum) och med metaanalyser av "critical thinking"-undervisning i stort (Abrami m.fl., 2015: g=0,30 över 341 effektstorlekar; Niu m.fl., 2013: litet snitt), framstår d=2,05 som en extrem outlier snarare än ett representativt värde att bygga en läroplansreform på. Jag har inte hittat någon oberoende replikering av just detta fynd.

## Delfråga 1: Within-subjects-designen - vad mäter d=2,05 egentligen?

Studie 1 i Du & List (2024) är, enligt samtliga sammanfattningar jag hittat, en **within-subjects-design**: samma studenter testas före och efter interventionen på samma OEBR-mått, utan en jämförelsegrupp som inte fick interventionen. Cohen's d=2,05 gäller skillnaden mellan detta gruppens eget pre- och posttest.

Detta är metodologiskt sett den klassiska "one-group pretest-posttest design" som Campbell & Stanley (1963) i sin standardreferens om experimentella och kvasiexperimentella design namnger som ett av de svagaste upplägg som finns för kausala anspråk, just för att den inte kontrollerar för:
- **testningseffekt** - att göra samma test två gånger förbättrar prestationen oavsett intervention, särskilt när posttestet är identiskt eller strukturellt likt pretestet,
- **mognad** - att förmågan förändras med tiden oavsett intervention,
- **regression mot medelvärdet** - särskilt relevant när deltagare väljs eller presterar lågt vid pretest,
- **instrumentaliseringseffekter** - om bedömare/kodningsschema förändras mellan mättillfällena.

Utöver detta finns en specifik statistisk komplikation: effektstorlekar för within-subjects-design (drm, Morris & DeShon, 2002) beräknas med korrelationen mellan pre- och postmätning i nämnaren, vilket systematiskt ger större d-värden än motsvarande between-groups-beräkning på samma rådata, om inte man är noggrann med vilken standardavvikelse som används. Det är ett känt och namngivet problem i metaanalytisk metodologi - att blanda within-subjects-d med between-groups-d, eller att jämföra dem rakt av mot samma tröskelvärden, är ett erkänt fel.

Wiki-sidan gör exakt den jämförelsen: den ställer d=2,05 mot Kraft (2020) tröskelvärde på d>0,2 för att kalla resultatet "extraordinärt". Men Kraft (2020, Educational Researcher) konstruerade sina riktvärden (0,05/0,20 som gränser för litet/medelstort/stort) specifikt för **between-groups RCT:er med standardiserade prestationsmått i storskaliga fältstudier** - inte för within-subjects labbstudier med forskarkonstruerade mått på en enda undervisningssession. Att lägga Kraft-tröskeln på Du & Lists d=2,05 är därför inte bara en generös jämförelse - det är en jämförelse mellan storheter som mäts på principiellt olika sätt. Det gör påståendet "bland de största effektstorlekar som någonsin rapporterats" svårt att stå för: det är sant enbart om man ignorerar att within-subjects-d och between-groups-d inte är samma valuta.

**Evidenstyp:** kvasiexperiment (one-group pretest-posttest), inte RCT. **Vad som talar emot:** hela den metodologiska litteraturen om varför denna designtyp är svag för kausala anspråk, samt den specifika inkommensurabiliteten mellan within- och between-subjects-d som gör jämförelsen med Kraft (2020) missvisande.

## Delfråga 2: OEBR-måttet - forskarkonstruerat och begreppsmässigt sammanflätat med interventionen

OEBR (Objective Evidence-Based Reasoning) är, enligt de sammanfattningar jag hittat, ett mått konstruerat av samma forskargrupp (List och medarbetare) som utformade interventionen, avsett att bedöma studenternas förmåga att **identifiera evidenstyper** (comparative/correlational/causal) och dra **evidensbaserade slutsatser**. Det är alltså inte ett oberoende, validerat, brett använt instrument för resonemangsförmåga - det är byggt för och av samma projekt som undervisningen.

Det här är precis den typ av mått som Cheung & Slavin (2016, Educational Researcher, 45(5), 283-292) varnar för i sin genomgång av 645 studier: **effektstorlekar var ungefär dubbelt så stora när utfallsmåttet var forskarkonstruerat ("experimenter-made" / "treatment-inherent") jämfört med när det var ett oberoende mått.** Mekanismen är rimlig utan att vara illvillig: om undervisningen lär ut orden "comparative", "correlational" och "causal", och testet ber eleverna klassificera exempel med just de orden, mäter testet delvis om eleverna lärt sig vokabulären som precis undervisades - inte nödvändigtvis ett djupare, generaliserbart resonemang om evidens.

Studie 2 lade till öppna uppgifter (CEE, Constructed Evidence-Evaluation, baserat på tidningsartiklar) och fick lägre men fortfarande stora effekter (d=0,97 och d=0,69). Att effekten krymper - från d=2,05 på det mest proximala, forskarkonstruerade måttet till ungefär en tredjedel av storleken på öppna utvärderingsuppgifter - är själva mönstret som proximal-distal-litteraturen förutsäger: ju längre bort från interventionens exakta form och vokabulär utfallsmåttet ligger, desto mindre blir den uppmätta effekten. Det är ett observerat mönster i just detta datamaterial, inte en gissning.

**Evidenstyp:** kvasiexperiment med forskarkonstruerat primärmått, kompletterat med öppna uppgifter i Studie 2. **Vad som talar emot:** effektstorleken faller kraftigt redan inom studien när måttet blir mindre sammanflätat med interventionens egen vokabulär, vilket är precis det mönster Cheung & Slavin (2016) dokumenterar generellt i utbildningsforskning.

## Delfråga 3: Transfer - från ett labbmått till historisk förståelse

Ingenting i de tillgängliga sammanfattningarna av Du & List (2024) tyder på att effekten testades mot ett oberoende mått på historisk källkritik, historisk förståelse eller betygsrelevant prestation. Effekten gäller OEBR och CEE - mått konstruerade för studien, med tidningsexempel, inte historiska källor.

Den bredare transferlitteraturen ger stark anledning till försiktighet här. Sala & Gobet (2019, Collabra: Psychology, 5(1), artikel 18) genomförde en andra ordningens metaanalys av 14 första ordningens metaanalyser (332 samples, 1555 effektstorlekar, 21 968 deltagare) över arbetsminnesträning, video- och actionspelsträning, musikträning, schackträning och exergames. Deras slutsats: **den sanna far-transfer-effekten, skattad mot en aktiv kontrollgrupp, ligger nära noll**, och avsaknaden av tränings-inducerad far transfer beskrivs som "an invariant of human cognition". Detta gäller inte specifikt evidensresonemang, men det är den mest robusta generella bakgrunden som finns för frågan "överför sig en smal kognitiv färdighetsträning till ett bredare, mer komplext användningsområde" - och svaret, aggregerat över tiotusentals deltagare, är nej i de flesta fall som studerats.

Willingham (2007, American Educator; 2019, occasional paper) argumenterar specifikt att kritiskt tänkande är starkt domänspecifikt: "we are not even sure the general skills exist, but we are quite sure there is no proven way to teach them directly." Hans poäng är inte att explicit undervisning är meningslös, utan att den måste läras in **inom** varje ämnesdomän med ämnets egen kunskapsbas som grund - en generisk 45-minuters intervention om tre evidenstyper, tränad på tidningsexempel, ger ingen automatisk grund för att värdera en medeltida krönika, ett riksdagsprotokoll eller en statistisk tabell i en historisk kontext.

**Evidenstyp:** andra ordningens metaanalys (Sala & Gobet) respektive teoretiskt/syntetiserande resonemang (Willingham). **Vad som talar emot:** jag har inte hittat någon studie som testar om just OEBR-interventionen överför sig till historiskt källmaterial - vilket betyder att transferpåståendet i wiki-sidan ("svensk gymnasiehistoria bör införa explicit taxonomi") går längre än vad någon studie i kedjan har visat.

## Delfråga 4: Populationen - amerikanska psykologistudenter, inte svenska gymnasieelever i historia

Enligt flera oberoende sökträffar var deltagarna i Du & List (2024) **undergraduates enrolled in an introduction educational psychology course** vid Penn State - alltså amerikanska universitetsstudenter i en introduktionskurs i pedagogisk psykologi, inte gymnasieelever och inte historiestudenter. Studien bygger vidare på Hongcui Dus avhandling (2023, Penn State, handledare Alexandra List), som enligt titeln omfattar just "two studies" med samma typ av deltagare.

Det finns alltså tre samtidiga hopp i kedjan som leder fram till "direkt implementerbart i svensk gymnasiehistoria":
1. Från universitetsstudenter till 16-19-åriga gymnasieelever (annan kognitiv mognadsnivå, annan skolform, annan motivation).
2. Från pedagogisk psykologi som ämnesinnehåll till historia som ämnesinnehåll (annan kunskapsbas, andra typer av källor - narrativa, materiella, historiografiska - som inte reduceras naturligt till "comparative/correlational/causal").
3. Från amerikansk högskolekontext till svensk gymnasieskola under Gy25, med ämnesbetyg och utan nationella prov.

Ingen av dessa tre hopp har, såvitt jag har kunnat finna, testats empiriskt. Det innebär inte att taxonomin är fel för historia - men det innebär att påståendet "direkt implementerbart" saknar stöd i det som faktiskt studerades.

**Evidenstyp:** ingen - detta är en lucka, inte ett fynd. **Vad som talar emot:** hela poängen med kvasiexperimentell forskning är att generalisering utanför studerad population kräver egen evidens; ingen sådan har identifierats.

## Delfråga 5: Den bredare bakgrunden - replikeringskris, publikationsbias och small-N-effekten

Tre fristående litteraturer pekar i samma riktning: enskilda, små interventionsstudier med stora rapporterade effekter bör mötas med extra skepsis tills de replikerats.

**Small-N-effekten i utbildningsforskning specifikt.** Slavin & Smith (2009, Educational Evaluation and Policy Analysis, 31(4), 500-506) analyserade 185 studier av matematikprogram och fann en signifikant negativ korrelation mellan stickprovsstorlek och effektstorlek: studier under mediannivån (cirka 250 deltagare) hade en genomsnittlig effekt på +0,27, mot +0,13 för stora studier. Jag har inte kunnat verifiera exakt N i Du & Lists Studie 1 (se "Vad jag inte hittade"), men karaktären av studien - en enskild kurskohort vid ett universitet - pekar mot ett förhållandevis litet stickprov, precis den kategori där Slavin & Smiths mönster förutsäger systematiskt uppblåsta effekter.

**Replikeringskrisen i psykologi generellt.** Open Science Collaboration (2015, Science, 349(6251), aac4716) replikerade 100 psykologistudier och fann att endast 36 procent reproducerade en signifikant effekt i samma riktning, och att de effekter som väl replikerades i genomsnitt var ungefär hälften så stora som originalstudiernas. Du & List (2024) är inte en av dessa 100 studier, men basraten den etablerar - att stora, enskilt rapporterade effekter i psykologisk interventionsforskning ofta krymper eller försvinner vid oberoende replikering - är relevant kontext för hur mycket vikt en enskild d=2,05-siffra bör bära.

**Strukturella incitament i interventionsforskning.** Hillary & Medaglia (2019, International Journal of Psychophysiology) argumenterar, i en artikel om replikeringskrisens konsekvenser för interventionsforskning brett (med fokus på neurorehabilitering, inte pedagogik specifikt), att små stickprov i kombination med selektiv rapportering och forskningsfrihetsgrader ("försvara interventioner snarare än kritiskt testa dem") systematiskt gynnar publicering av stora, spektakulära effekter. Jag citerar denna artikel som exempel på ett generellt mönster i interventionsforskning, inte som en artikel om pedagogisk psykologi specifikt - det är värt att vara tydlig med att fältet skiljer sig.

Jag har inte hittat en direkt replikering av Du & List (2024) - varken lyckad eller misslyckad. Studien är från 2024 och kan helt enkelt vara för ny för att ha replikerats än. Det gör d=2,05 varken bekräftat eller motbevisat - det gör det obeprövat, vilket är en annan sak än "bland de största effektstorlekar som någonsin rapporterats" antyder.

**Evidenstyp:** metaanalys (Slavin & Smith; Open Science Collaboration) samt syntetiserande artikel (Hillary & Medaglia). **Vad som talar emot:** inget direkt - detta avsnitt är i sig motevidensen: det etablerar varför en enskild stor effektstorlek förtjänar skepsis snarare än ett direkt argument mot just denna studie.

## Delfråga 6: Kritiken mot "historical thinking"-programmet i stort

Debatten om andra ordningens begrepp (second-order concepts: evidens, kausalitet, förändring, kontinuitet, historisk betydelse) kontra substantiell ämneskunskap (first-order concepts: fakta, händelser, personer, epoker) är etablerad inom historiedidaktiken, framför allt i den brittiska diskussionen. Enligt en genomgång i History Education Research Journal (2024, refererande Fordham, sannolikt 2016 - jag har inte kunnat verifiera Fordhams originaltext direkt, bara denna sekundära återgivning, vilket jag flaggar som en andrahandsuppgift) har den ökade tyngdpunkten på andra ordningens begrepp i den engelska läroplanen byggt på ett implicit antagande: att kunskap om andra ordningens begrepp automatiskt skulle leda till bättre historiskt tänkande. Kritiken är att det antagandet är otillräckligt underbyggt, och att för lite uppmärksamhet ägnats åt att andra ordningens begrepp bara blir meningsfulla när de är förankrade i tät substantiell kunskap - annars riskerar de att bli abstrakta kategorier som eleverna kan namnge utan att kunna använda.

Detta är strukturellt samma kritik som riktas mot Du & List-interventionen applicerad på historia: att lära ut en tre-delad evidenstaxonomi (comparative/correlational/causal) som ett fristående moment, utan att den är förankrad i den specifika ämneskunskap som krävs för att bedöma en given historisk källa, riskerar att ge eleverna ord för evidenstyper utan förmågan att faktiskt använda dem på historiskt material.

Sam Wineburg (2001, "Historical Thinking and Other Unnatural Acts", Temple University Press) driver en näraliggande men delvis annan poäng: historiskt tänkande är enligt honom **inte** en naturlig kognitiv process som "spontant" uppstår ur allmän utveckling, och han avvisar explicit idén om en monolitisk, ämnesöverskridande tankeförmåga. Historiskt tänkande kräver enligt Wineburg djup domänspecifik expertis och är svårt att lära ut just för att det går emot vardagligt tänkande. Det är värt att notera att Wineburg själv är en stark förespråkare för att undervisa historiskt källtänkande explicit (t.ex. genom "sourcing heuristics") - han är alltså inte en motståndare till explicit undervisning som sådan. Men hans arbete undergräver specifikt antagandet att en generisk, kort intervention tränad i ett annat ämne (pedagogisk psykologi, med tidningsexempel) skulle överföra sig friktionsfritt till historiskt källarbete, som han beskriver som kognitivt ovanligt krävande.

Den mest solida, ekologiskt giltiga jämförelsepunkten jag har hittat inom historiedidaktik specifikt är Reisman (2012, Cognition and Instruction, 30(1), 86-112): en kvasiexperimentell sexmånaders läroplansintervention ("Reading Like a Historian") i 236 elever i årskurs 11 vid fem högstadieskolor i San Francisco, med dokumentbaserade lektioner som byggde just på att koppla samman källgranskning med ämneskunskap. Interventionen gav signifikanta, men modesta, effekter - **d=0,29** rapporterat för skrivutfallet hos lärare som genomfört interventionen ett andra år. Detta är den typ av effektstorlek som en verklig, flerårig, ämnesförankrad historieundervisningsintervention i en gymnasienära kontext faktiskt ger - en storleksordning som ligger en faktor på nästan sju gånger under Du & Lists d=2,05, trots att Reismans intervention pågick i månader snarare än en enda session och mättes med bedömning av elevernas faktiska historiska resonemang snarare än ett forskarkonstruerat labbtest.

Van Drie & Van Boxtel (2008, Educational Psychology Review, 20(2), 87-110) erbjuder den etablerade teoretiska ramen för historiskt resonemang: sex komponenter (att ställa historiska frågor, använda källor, kontextualisera, argumentera, använda substantiella begrepp, använda meta-begrepp). Denna ram är betydligt rikare och mer ämnesspecifik än den tre-delade "comparative/correlational/causal"-taxonomin från psykologiinterventionen, vilket ytterligare understryker avståndet mellan det som studerades och det wiki-sidan föreslår att implementera.

**Evidenstyp:** teoretiskt ramverk (Van Drie & Van Boxtel), kvasiexperiment (Reisman), monografi/teoretiskt resonemang (Wineburg), sekundärt refererad debattartikel (Fordham via HERJ). **Vad som talar emot:** ingen av dessa källor motsäger att evidenstänkande är viktigt i historia - men samtliga pekar mot att det kräver ämnesförankring som en generisk psykologiintervention inte kan ge, och mot att realistiska effektstorlekar i historieklassrum ligger en storleksordning under d=2,05.

## Motsägelser i materialet

Den tydligaste asymmetrin i evidenskvalitet står mellan Du & List (2024) och Reisman (2012)/Abrami m.fl. (2015)/Niu m.fl. (2013). Du & List rapporterar en enskild, proximal, within-subjects-effekt på d=2,05 från en engångsintervention utan kontrollgrupp, mätt med ett forskarkonstruerat test på en universitetspopulation utanför historieämnet. Reisman rapporterar en betydligt mindre effekt (d=0,29) från en kvasiexperimentell, flerårig, ämnesförankrad intervention i verkliga gymnasienära klassrum, mätt (delvis) genom bedömning av elevers faktiska historiska resonemang. De två metaanalyserna av critical thinking-undervisning (Abrami m.fl., 2015; Niu m.fl., 2013), som aggregerar hundratals studier över årtionden, konvergerar mot d/g omkring 0,2-0,3.

Detta är inte en motsägelse i sakfrågan - alla källor är principiellt överens om att explicit undervisning i evidens/resonemang kan ge positiva effekter. Motsägelsen gäller storleksordning: om den samlade, replikerade, oberoende-mätta litteraturen ger 0,2-0,3, och en enskild, icke-replikerad, forskarkonstruerad, within-subjects-mätning ger 2,05 (sju gånger större), är den rimliga tolkningen att d=2,05 är en artefakt av design och mätning snarare än ett representativt uttryck för vad interventionen "verkligen" åstadkommer. Wiki-sidan väljer att presentera den extrema siffran som representativ ("bland de största effektstorlekar som någonsin rapporterats") utan att nämna denna diskrepans.

## Vad jag inte hittade

Jag har flera obesvarade luckor som är värda att redovisa explicit, inte tysta över:

- **Fulltexten av Du & List (2024) och Dus avhandling (2023).** Jag har försökt fyra gånger att komma åt Penn States PDF (konsekvent HTTP 403) och en gång Wiley (HTTP 402). Jag har därför inte själv sett exakt N per studie, exakt interventionslängd (verkar vara en enda session, men jag har inte kunnat bekräfta minuter/timmar), tidsintervall mellan pre- och posttest, eller författarnas eget limitations-avsnitt. Allt jag skriver om studiens design bygger på konsekventa men indirekta sammanfattningar från flera sökkällor (Wiley-abstraktsammanfattning, Penn State-sammanfattningar), inte på egen läsning. Detta är den enskilt största begränsningen i denna rapport.
- **Exakt stickprovsstorlek (N).** Jag har inte kunnat fastställa N för vare sig Studie 1 eller Studie 2, vilket gör det omöjligt att direkt applicera Slavin & Smiths (2009) small-N-mönster kvantitativt på just denna studie - jag kan bara konstatera att en enskild universitetskurskohort sannolikt ligger under Slavin & Smiths medianbrytpunkt på cirka 250 deltagare.
- **Oberoende replikering.** Jag har inte hittat någon studie, varken lyckad eller misslyckad replikering, av just Du & Lists specifika evidenstyp-intervention. Studien är från 2024 - det är möjligt att ingen replikering ännu hunnit publiceras, men jag kan inte skilja "obeprövat" från "skulle inte replikera" utifrån vad som finns.
- **Direkt test av transfer till historiskt källmaterial.** Jag sökte specifikt efter studier som testar om evidenstyp-taxonomin (comparative/correlational/causal) överförs till bedömning av historiska primärkällor eller historiografiska texter. Jag hittade inget sådant test - varken positivt eller negativt. Detta är en tom sökning värd att notera som ett fynd: kedjan från psykologilabb till historieklassrum är obeprövad i båda riktningar.
- **Fordhams originaltext om second-order concepts.** Jag hittade bara en sekundär återgivning av hans argument via en genomgångsartikel i History Education Research Journal, inte hans egen text. Jag flaggar detta explicit som en andrahandsuppgift i avsnittet ovan.
- **Svensk eller nordisk forskning som direkt prövar evidenstaxonomi i gymnasiehistoria.** Jag sökte inte specifikt efter detta i denna omgång (uppdraget var avgränsat till att pröva den amerikanska studiens bärkraft), men jag noterar att jag inte stötte på någon sådan studie i sökningarna som gjordes - vilket i sig är relevant för avsnittet om svensk tillämpning nedan.

## Svensk tillämpning

Wiki-sidans rekommendation - att svensk gymnasiehistoria bör införa en explicit taxonomi för historiskt belägg (primärkällor, statistik, narrativ, materiell kultur, historiografisk tolkning) som ett eget undervisningsmoment - är inte i sig orimlig som pedagogisk idé. Van Drie & Van Boxtels (2008) ramverk och den etablerade käll- och tolkningsdidaktiken i svensk historieundervisning pekar redan mot att evidens och källvärdering förtjänar explicit uppmärksamhet, kopplat till ämnesplanens skrivningar om källkritisk metod och historiebruk.

Men just hänvisningen till Du & List (2024) som **det empiriska underlaget** för detta håller inte för den vikt wiki-sidan lägger på den. Under Gy25, med ämnesbetyg och utan nationella prov, saknas dessutom en extern, standardiserad utfallsvariabel som skulle kunna fånga om en sådan intervention faktiskt förbättrar elevers historiska källvärdering i praktiken - lärarens egen bedömning blir i så fall både intervention och utvärdering, vilket för in exakt den typ av forskarkonstruerad-måttproblematik som redan diskuterats ovan, fast i klassrumsskala.

Om taxonomin ändå införs bör det ske som en pedagogisk hypotes att pröva och utvärdera lokalt (till exempel genom jämförelse mellan klasser, eller före/efter med ett oberoende bedömningsunderlag som inte använder exakt interventionens vokabulär) - inte som en "direkt implementerbar", evidensbaserad åtgärd i den mening ordet normalt bär. Den korrekta formuleringen är: en teoretiskt rimlig idé, löst kopplad till en spektakulär men metodologiskt svag och obeprövad amerikansk labbstudie utanför historieämnet, och till en betydligt blygsammare men mer relevant kropp av forskning (Reisman 2012; Van Drie & Van Boxtel 2008) som visar modesta, inte extraordinära, effekter när ämnesförankring och verkliga klassrum är inblandade.

## Min position

Jag hävdar att d=2,05 är ett mätartefakt av en svag design (within-subjects, forskarkonstruerat mått, ingen kontrollgrupp) snarare än ett mått på interventionens verkliga pedagogiska värde, och att steget från denna siffra till "direkt implementerbart i svensk gymnasiehistoria" hoppar över minst tre obeprövade generaliseringar - population, ämnesdomän och nationell skolkontext - som var för sig underminerar rekommendationen.

## Det bara min lens säger

Ingen annan lins skulle sannolikt lägga märke till att jämförelsen med Kraft (2020) i sig är en kategorimisstag: Kraft byggde sina riktvärden för between-groups-RCT:er med standardiserade prestationsmått i storskaliga fältstudier, och att lägga dessa riktvärden på en within-subjects-effekt från en enda labbsession gör "d=2,05 är extraordinärt jämfört med tröskeln 0,2" till en jämförelse mellan två storheter som inte mäter samma sak - vilket gör hela den retoriska poängen i wiki-sidan ogiltig, oavsett om interventionen "fungerar" eller ej.

## Där jag är svag

Skeptikerlinsen är stark på att hitta metodologiska svagheter och på att relativisera en enskild siffra mot ett bredare fält, men den är strukturellt svag på att erkänna när en idé kan vara pedagogiskt värdefull även om dess bevisning är skral. Jag har inte gett kraft åt det motsatta scenariot: att en explicit evidenstaxonomi kan vara en god undervisningsidé på egna, praktikbaserade grunder (lärarens erfarenhet, ämnesplanens krav på källkritisk metod, Van Drie & Van Boxtels etablerade ramverk) helt oberoende av om Du & List (2024) håller för granskning eller ej. Genom att fokusera all kraft på att montera ner det empiriska stödet riskerar jag att osynliggöra att frågan "bör detta införas" och frågan "är d=2,05 ett bra bevis" är två skilda frågor - och att ett svagt bevis för en idé inte är ett bevis för att idén är fel. Jag har heller inte kunnat läsa fulltexten av kärnstudien, vilket är en svaghet som gäller granskningen som sådan, inte bara linsen.

## Referenser

- Du, C. & List, A. (2024). Evidence-based reasoning: Results from an intervention. *Applied Cognitive Psychology*, 38(5), e4238. DOI: 10.1002/acp.4238. https://onlinelibrary.wiley.com/doi/abs/10.1002/acp.4238
- Du, H. (2023). *Improving Students' Evidence-Based Reasoning: Two Studies Demonstrating the Promise of An Intervention.* Doktorsavhandling, Pennsylvania State University. https://etda.libraries.psu.edu/catalog/24063hzd27
- List, A. m.fl. (2023). The Limits of Reasoning: Students' Evaluations of Anecdotal, Descriptive, Correlational, and Causal Evidence. *The Journal of Experimental Education*, 92(1). DOI: 10.1080/00220973.2023.2174487
- Kraft, M. A. (2020). Interpreting Effect Sizes of Education Interventions. *Educational Researcher*, 49(4), 241-253. DOI: 10.3102/0013189X20912798
- Cheung, A. C. K. & Slavin, R. E. (2016). How Methodological Features Affect Effect Sizes in Education. *Educational Researcher*, 45(5), 283-292. DOI: 10.3102/0013189X16656615
- Slavin, R. E. & Smith, D. (2009). The Relationship Between Sample Sizes and Effect Sizes in Systematic Reviews in Education. *Educational Evaluation and Policy Analysis*, 31(4), 500-506. DOI: 10.3102/0162373709352369
- Abrami, P. C., Bernard, R. M., Borokhovski, E., Waddington, D. I., Wade, C. A. & Persson, T. (2015). Strategies for Teaching Students to Think Critically: A Meta-Analysis. *Review of Educational Research*, 85(2), 275-314. DOI: 10.3102/0034654314551063
- Niu, L., Behar-Horenstein, L. S. & Garvan, C. W. (2013). Do instructional interventions influence college students' critical thinking skills? A meta-analysis. *Educational Research Review*, 9, 114-128. DOI: 10.1016/j.edurev.2012.12.002
- Reisman, A. (2012). Reading Like a Historian: A Document-Based History Curriculum Intervention in Urban High Schools. *Cognition and Instruction*, 30(1), 86-112. DOI: 10.1080/07370008.2011.634081
- Van Drie, J. & Van Boxtel, C. (2008). Historical Reasoning: Towards a Framework for Analyzing Students' Reasoning about the Past. *Educational Psychology Review*, 20(2), 87-110. DOI: 10.1007/s10648-007-9056-1
- Wineburg, S. (2001). *Historical Thinking and Other Unnatural Acts: Charting the Future of Teaching the Past.* Temple University Press.
- Willingham, D. T. (2007). Critical Thinking: Why Is It So Hard to Teach? *American Educator*, 31(2), 8-19.
- Willingham, D. T. (2019). *How to Teach Critical Thinking.* Occasional paper, NSW Department of Education. http://www.danielwillingham.com/uploads/5/0/0/7/5007325/willingham_2019_nsw_critical_thinking2.pdf
- Sala, G. & Gobet, F. (2019). Near and Far Transfer in Cognitive Training: A Second-Order Meta-Analysis. *Collabra: Psychology*, 5(1), 18. DOI: 10.1525/collabra.203
- Open Science Collaboration (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. DOI: 10.1126/science.aac4716
- Hillary, F. G. & Medaglia, J. D. (2019). [Om replikeringskrisens konsekvenser för interventionsforskning]. *International Journal of Psychophysiology*. https://pmc.ncbi.nlm.nih.gov/articles/PMC6842660/ (exakt titel ej verifierad i denna genomgång)
- Campbell, D. T. & Stanley, J. C. (1963). *Experimental and Quasi-Experimental Designs for Research.* Rand McNally.
- Morris, S. B. & DeShon, R. P. (2002). Combining effect size estimates in meta-analysis with repeated measures and independent-groups designs. *Psychological Methods*, 7(1), 105-125. DOI: 10.1037/1082-989X.7.1.105
- Fordham, M. (refererad andrahands via History Education Research Journal, 2024). Argument om obalans mellan andra ordningens begrepp och substantiell kunskap i den engelska historieläroplanen. Originaltext ej verifierad direkt. https://journals.uclpress.co.uk/herj/article/pubid/Hist_Educ_Res_J-21-04/print/
