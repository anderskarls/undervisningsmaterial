---
name: deep-research
description: Autonom forskningspipeline med lenspanel, riktad andra runda och källverifiering. Fem oberoende perspektiv researchar samma fråga, motsägelserna kartläggs, kartan beställer en riktad runda 2 mot blindfläcken och konsensuspunkten, varje påstående prövas mot sin primärkälla, och resultatet blir atomära wiki-noter plus en påståendeguide för klassrummet. Använd när användaren vill utreda en pedagogisk eller ämnesmässig fråga på djupet, säger "deep research", "utred", "vad säger forskningen om", eller vill fylla en kunskapslucka i wikin. Kan också välja ämne själv utifrån vad som undervisas just nu.
argument-hint: '[ämne, eller "auto" för självvald inriktning]'
automation: gated
allowed-tools: Task, Skill, Read, Write, Edit, Bash, Glob, Grep
---

# Deep Research

Fem lenser researchar samma fråga blint för varandra. Motsägelserna mellan dem kartläggs, och kartan beställer en riktad andra runda mot det panelen missade. Varje bärande påstående prövas mot sin primärkälla innan något skrivs in i wikin. Slutprodukten är atomära wiki-noter, en syntes och en påståendeguide - vad som är säkert nog att säga rakt ut i ett klassrum.

**Kör hela kedjan.** Att hoppa över verifieringen gör detta till en vanlig webbsökning med extra steg. En felaktig effektstorlek som tar sig in i en wiki-sida citeras sedan i undervisningen i flera år, och ingenting i vaultet fångar den.

**Indata:** `$ARGUMENTS`

## Två lägen

**Riktat läge** - användaren anger ämne. `/deep-research "formativ bedömning i historia"`.

**Autonomt läge** - `$ARGUMENTS` är tomt eller `auto`. Du väljer ämne enligt Fas 1.

## Vad det kostar och när det är motiverat

Full körning startar ungefär 14-19 agenter. Det är avsett, men inte alltid befogat.

| Frågan | Upplägg |
|--------|---------|
| Öppen fråga där flera hållningar strider, eller något du ska bygga undervisning på | Full panel, fem lenser, runda 2 enligt beslutsregeln |
| Avgränsad faktafråga med ett förväntat svar | Två lenser: Forskaren och Skeptikern. Ingen runda 2. Verifieringen körs ändå |
| "Vad finns det för läsning om X" | En `research-specialist` utan lens. Detta är inte deep research |

Fanar aldrig ut bredare än fem lenser. Fler perspektiv ger inte mer täckning, bara mer text som säger samma sak.

---

## Fas 1: Ämnesval och avgränsning

### Riktat läge

Två frågor avgör hela sessionens värde.

**Vad är den egentliga frågan?** "Formativ bedömning" är ett ämne, inte en fråga. "Håller formativ bedömning i historia när betygssättningen är summativ och ämnesbetyg gäller?" är en fråga - den går att ha fel om.

**Har användaren redan en hållning?** Om ja, formulera uppdraget som en **prövning** av den. Sök i wikin och i minnet efter vad som är etablerat, och ge Skeptikern hållningen explicit att angripa.

Sessionen 2026-07-28 om språkanpassning är mönstret: användaren hade en dokumenterad hållning, agenterna instruerades att pröva den, och resultatet blev att den **preciserades** i stället för att bekräftas. En bekräftande session är bortkastad.

Ange din tolkning av frågan på en rad och kör vidare. Fråga bara om frågan är tvetydig på ett sätt som skulle ge olika research.

Bestäm också **vem svaret är till för**. Nästan alltid en gymnasielärare i historia och samhällskunskap som ska använda detta i undervisningen - men ibland är det underlag för ett bygge, ett samtal med kollegor eller en artikel. Påståendeguiden i Fas 8 riktas dit.

### Autonomt läge

```bash
cat index.md
tail -80 log.md
cat output/planering/aktivt.md
```

`index.md` visar täckningen och MOC-kandidaterna. `log.md` visar vad som nyligen gjorts och vad som lämnades öppet - de sista entryna innehåller nästan alltid ett uttalat "kvarstående". `aktivt.md` visar vad som faktiskt undervisas den här veckan.

Välj 1-3 ämnen som uppfyller minst ett av:

- **Ansluter till ett aktivt moment** - forskning som går att använda den här terminen slår forskning som är intressant i allmänhet
- **Fyller en flaggad lucka** - `log.md` och lintrapporterna i `meta/changelogs/` namnger dem
- **Prövar något etablerat** - en wiki-sida som vilar på en enda källa, eller en hållning som aldrig mött motevidens
- **Binder mekanismlagret till innehållslagret**

Redovisa valet med motivering och vänta på klartecken. Läget är `automation: gated`.

---

## Fas 2: Lenspanelen

```bash
date '+%Y-%m-%d'
```

Starta alla lenser i **ett enda meddelande** så att de körs parallellt. Varje lens är en Task med `subagent_type='research-specialist'`, och agenten kan lensläget - du levererar rollen, ämnesramen och sökvägen. Ingen lens får se en annans rapport.

### Panelen väljs efter frågans struktur, inte ämnets domän

Detta är den viktigaste regeln i hela skillen, och den är dyrköpt. Körningen 2026-08-03 om historiskt evidensresonemang prövade den binära uppdelningen A/B och den höll inte.

Fråga dig vad påståendet **är**, inte vad det handlar om:

| Frågans form | Panel |
|--------------|-------|
| Rent mekanismpåstående - "vad säger forskningen om spacing" | A, fem lenser |
| Rent innehållspåstående - "vad vet vi om Roms fall" | B, fem lenser |
| **Mekanismpåstående om ett bestämt innehåll** - "fungerar explicit undervisning i evidenstypologi i historia" | **Blandad, minst en lens ur vardera lägret** |

Den tredje raden är vanligare än den ser ut. Ämnesdidaktik är nästan alltid den formen.

**Varför blandningen är nödvändig och inte en kompromiss.** I körningen ovan såg alla A-lenser samma sak: studien testade fel population. Först Källkritikern ur panel B kunde se att de tre evidenskategorierna är samhällsvetenskapliga forskningsdesigner och att ingen etablerad historisk evidenstypologi delar upp belägg så. Det är den strukturella förklaringen, och den ligger ett lager under populationsinvändningen. Utan B-lensen hade sessionen stannat vid att fel folk hade testats.

Motsatt riktning gäller lika: Praktikern ur A gjorde aritmetiken över kurstid som ingen innehållslens gör.

Fem lenser är fortfarande taket. En blandad panel byter ut lenser, den lägger inte till.

### Litteraturregistren i den här fasen

**Alla lenser har `resources/scholar-api/scholar.py`** - OpenAlex, Crossref, ERIC, DiVA, Libris och Unpaywall. Den kräver ingen nyckel och har inget delat tillstånd, så hela panelen kan söka samtidigt.

Det är inte en detalj. `WebSearch` hittar vad som skrivits **om** forskningen; registren hittar forskningen. En lens som bara webbsöker refererar referaten, och det är precis det felet Fas 5 sedan får rätta.

Ge varje lens en **registerinstruktion som passar dess roll** - annars kör alla fem samma sökning och panelens oberoende urholkas i källedet även om rollerna skiljer sig:

| Lens | Registerinstruktion |
|------|---------------------|
| Forskaren | `metadata` på varje effektstorlek hon tänker citera; `sok --typ article` |
| Skeptikern | `citerad-av --sortera publication_date:desc` på det gängse - metodkritik och misslyckade replikeringar ligger i framåtciteringen |
| Ämnesdidaktikern | `diva` och `eric` mot varandra; de överlappar nästan inte |
| Praktikern | `eric` med ED-nummer (praktikerrapporter är nästan alltid fria) |
| Systemblicken | `libris` för svensk facklitteratur och läromedel |
| Källkritikern, Historiografen | `libris` och `diva`; monografier saknas i artikeldatabaserna |

Alla får samma inledning:

```
LENS: [rollen]
ÄMNE: [den skärpta frågan]
ÄMNESRAM: [din tolkning på en rad]

BAKGRUND: [vad wikin redan har, med sidnamn - så att rapporten kan
prövas mot det befintliga i stället för att upprepa det]

HÅLLNING SOM SKA PRÖVAS: [användarens position, om det finns en]

REGISTER: läs .claude/skills/scholar/SKILL.md och använd
   resources/scholar-api/scholar.py. Din lens ska särskilt köra:
   [registerinstruktionen ur tabellen ovan]. Kör citerad-av på varje
   studie du lutar ett bärande påstående mot - har fyndet motsagts
   sedan dess ligger det där och ingen annanstans. Ange alltid vilket
   register ett svar kom ur.

SPARA SOM: resources/research/[amne-slug]-[lens]-YYYY-MM-DD.md
```

### Panel A - pedagogik och lärandevetenskap

**Praktikern.** Du undervisar det här dagligen i en grupp på trettio. Sök i klassrumsnära studier, praktikerlitteratur, ämnesnätverk och lärarrapporter. Din fråga: vad vet den som faktiskt gör det, som forskningen och debatten missar? Var går rådet sönder i verkligheten - tidsåtgång, gruppsammansättning, vad som händer lektion tre?

**Forskaren.** Du bryr dig om effektstorlekar och metaanalyser, inte anekdoter. Skolforskningsinstitutet, EEF, ERIC, Campbell, de granskade tidskrifterna. Din fråga: vad säger den strikta evidensen, och var motsäger den det som sprids som självklart? Ange N och effektstorlek, skilj publicerat från preprint.

**Skeptikern.** Du tror att det gängse är överdrivet. Bygg det starkaste fallet mot. Sök nollresultat, misslyckade replikeringar, metodkritik och de studier som inte citeras. Din fråga: vad är det starkaste motargumentet, och vad tiger förespråkarna om? Var rigorös, inte motvalls för sakens skull.

**Systemblicken.** Du följer mandatet och resurserna. Gy25, ämnesplanerna, Skolverket, huvudmannen, timplanen, vad som är tillåtet och vad det finns tid för. Din fråga: vad krävs för att detta ska gå att göra, vem betalar för det, och vem tjänar på att narrativet ser ut som det gör - läromedelsförlag, edtech, fortbildningsmarknad?

**Ämnesdidaktikern.** Du är specialist på historia och samhällskunskap. Din fråga är den som gör hela panelen värd besväret: den allmänpedagogiska forskningen är nästan alltid gjord i matematik och läsförståelse - vad överlever översättningen till SO-ämnena, och vad gör det inte? Sök NORDIDACTICA, historiedidaktisk forskning, ämnesspecifika interventionsstudier.

### Panel B - historia och samhällskunskap, sakinnehållet

**Forskningsläget.** Var står skrået nu? Senaste översiktsverken och monografierna, universitetsförlagen, var konsensus ligger och var den bråkar.

**Historiografen.** Hur har tolkningen ändrats, och vem drev ändringen? Vilken bild sitter i läroböckerna, varifrån kommer den, och hur gammal är den? Recensionsorganen visar hur ett verk togs emot.

**Källkritikern.** Vad tillåter källäget faktiskt? Var vilar de populära berättelserna på tunt underlag, senare tillskrivningar eller en enda krönikör? Vad vet vi inte, och varför tror vi ändå att vi vet det?

**Didaktikern.** Hur undervisas detta, och var sitter svårigheten? Dokumenterade elevmissuppfattningar, vad som är svårt att förstå och varför, vilka framställningar som fungerar.

**Historiebruket.** Hur används det här politiskt idag, i Sverige och annanstans? Vad möter eleverna utanför klassrummet innan de möter det hos dig?

### När lenserna återvänder

Skriv två till tre rader i chatten: åt vilket håll de konvergerar och var den skarpaste oenigheten går. Klistra inte in rapporterna - de ligger i filerna.

Kontrollera varje rapport innan den går vidare. Har den årtal, effektstorlekar där de finns, avsnittet "Vad jag inte hittade", och de tre lensavsnitten? Saknas "Där jag är svag" ska agenten tillbaka - det avsnittet är underlaget för nästa fas.

Kontrollera också att rapporterna faktiskt **använt registren**. En rapport där varje källa är en blogg, en myndighetssammanfattning eller en tidningsartikel har refererat referaten - skicka tillbaka den med en uttrycklig registerinstruktion. Det är billigare att göra om här än att låta Fas 5 fälla halva materialet.

---

## Fas 3: Motsägelsekartan

Görs **inline, utan agenter**, enbart ur lensrapporterna. Fem utfall:

1. **Direkta konflikter.** Var två eller flera lenser hävdar motsatta saker. Namnge de kolliderande påståendena, inte bara ämnet de rör.

2. **Starkast mot svagast underbyggt.** Vilken lens bär bäst evidens och vilken sämst, med skälet utskrivet. Rangordningen följer evidenshierarkin, inte hur övertygande texten läser.

3. **Den avgörande frågan.** Den enda empiriska fråga som skulle avgöra den största motsägelsen. Ofta visar det sig att ingen har ställt den - det är i sig ett fynd.

4. **Det alla är överens om.** Vad varje lens bekräftar, inklusive Skeptikern. Detta är det mest sannolikt sanna i materialet - **men se varningen nedan.**

5. **Blindfläcken.** Vad ingen lens tog upp. Läs deras "Där jag är svag"-avsnitt mot varandra: det som alla fem underskattar är blindfläcken.

**Kartan är en beställning, inte en observation.** Punkt 3, 4 och 5 skrivs så att de går att lämna vidare som uppdrag - det är precis vad Fas 4 gör med dem. En blindfläck formulerad som "ingen tog upp elevperspektivet" är oanvändbar; "ingen frågade vad eleverna faktiskt gör när de får uppgiften, till skillnad från vad läraren tror att de gör" går att researcha.

### Varningen som måste stå i syntesen

**Panelen är författarbyggd.** Alla fem lenser är samma modell med olika instruktion. Att de landar i samma slutsats är ett tecken på att slutsatsen är robust mot perspektivbyte - det är **inte** oberoende bekräftelse och det är inte konsensus i forskarsamhället. Fem lenser som delar en träningsmängd kan dela ett fel.

Detta ska stå utskrivet i syntesen, inte underförstås. Konvergens är en stark hypotes som förtjänar verifiering, inte ett svar som slipper den.

Kartpunkt 4 är där varningen biter hårdast, och det är därför Fas 4 innehåller en agent vars enda uppgift är att angripa den. Varningen ska inte bara sägas - den ska göras.

---

## Fas 4: Runda 2 - den riktade återkomsten

Kartan beställde. Nu verkställs beställningen.

Detta är **inte** en andra panel. Det är 1-3 agenter med var sitt smala uppdrag, och det är **exakt en runda**. Ingen runda 3, oavsett hur intressant runda 2 blir - annars terminerar sessionen aldrig.

Runda 2 körs automatiskt enligt beslutsregeln nedan. Du frågar inte om lov; ämnet godkändes i Fas 1.

### Steg 1: Citeringssvepet

Gör **du**, innan agenterna startar. Inte för att de inte kan - de har samma verktyg - utan för att svepet ska bli **ett gemensamt underlag** i stället för tre överlappande sökningar, och för att du behöver se det innan du skriver deras uppdrag.

```bash
S="resources/scholar-api/scholar.py"
python3 $S citerad-av "[studien kartpunkt 4 vilar på]" --sortera publication_date:desc --antal 20
python3 $S citerad-av "[nyckelstudien på sida A av konflikten]" --fran-ar [året efter]
python3 $S citerad-av "[nyckelstudien på sida B]" --fran-ar [året efter]
python3 $S metadata "[varje studie där en siffra är omtvistad]"
python3 $S diva "[blindfläckens vokabulär]"
```

Den första raden är svepets viktigaste. Den frågar: **har någon motsagt det panelen var enigast om?**

Skriv resultatet till `resources/research/[amne-slug]-CITERINGAR-YYYY-MM-DD.md` - per studie titeln, året, citeringsantalet, och **läsningen av framåtciteringarna** sorterad i de fyra facken: replikeringar, metaanalyser med avvikande effekt, metodkritik, ritualcitering. Ett citeringsantal utan den läsningen är ett meningslöst tal.

**Filen har tre konsumenter:** runda 2:s agenter, verifierarna i Fas 5, och syntesen. Skriv den så att alla tre kan läsa den. Agenterna får söka vidare på egen hand - filen är en startpunkt, inte en ranson.

Svarar CLI:n `FEL:` efter sina försök är API:et nere. Skriv det i syntesen och kör runda 2 på webbsökning.

### Steg 2: Beslutsregeln

Tre agenttyper. Var och en körs när sitt villkor är uppfyllt, annars inte. Uteblir en ska skälet stå i syntesen - "ingen direkt konflikt gick att avgöra empiriskt" är ett resultat.

| Agent | Körs när | Vad den gör |
|-------|----------|-------------|
| **Blindfläckslensen** | Kartpunkt 5 gav en blindfläck som går att formulera som en roll | Blir den sjätte lensen panelen saknade |
| **Skiljedomaren** | Kartpunkt 1 gav en direkt konflikt och kartpunkt 3:s fråga är empirisk | Avgör konflikten, tar inte parti på förhand |
| **Konsensusangriparen** | Kartpunkt 4 innehåller något som kommer bära vikt i påståendeguiden | Angriper det panelen var enigast om |

Starta dem i **ett meddelande**, parallellt. Alla tre har registren och får söka vidare på egen hand - citeringssvepet är deras startpunkt, inte deras ranson.

### Blindfläckslensen

Task med `subagent_type='research-specialist'`, i lensläge. Rollen skriver du på plats ur blindfläcken - den finns inte i panel A eller B, det är hela poängen.

```
LENS: [rollen, formulerad ur blindfläcken. Skriv den som de andra
lenserna är skrivna: vem du är, var du söker, och den fråga bara du
ställer]

ÄMNE: [samma skärpta fråga som panelen fick]

DETTA ÄR RUNDA 2. Fem lenser har redan gått igenom frågan. Du är
den sjätte, och du finns därför att alla fem underskattade samma
sak: [blindfläcken, ordagrant ur kartan].

VAD PANELEN REDAN TÄCKT: [tre till fem rader - så att du inte
upprepar den. Din rapport ska innehålla det de inte har]

CITERINGSUNDERLAG: resources/research/[amne]-CITERINGAR-YYYY-MM-DD.md
REGISTER: resources/scholar-api/scholar.py, sök vidare fritt

SPARA SOM: resources/research/[amne-slug]-blindflack-YYYY-MM-DD.md
```

### Skiljedomaren

Task med `subagent_type='research-specialist'`. **Inte** i lensläge - en domare som redan har en position är ingen domare. Säg det uttryckligen.

```
UPPDRAG: skiljedom. Du kör INTE i lensläge och ska inte inta någon
roll. Du har ingen position att driva.

KONFLIKTEN:
  Påstående A, ordagrant: [...]  (ur [lens], som stödjer det med [...])
  Påstående B, ordagrant: [...]  (ur [lens], som stödjer det med [...])

DEN AVGÖRANDE FRÅGAN: [kartpunkt 3, ordagrant]

DIN UPPGIFT: hitta evidensen som avgör frågan. Inte evidens som
väger, evidens som avgör. Landa i ett av fyra svar:
  - A håller, B faller, och detta är varför
  - B håller, A faller, och detta är varför
  - Båda håller, för de talar om olika saker - och skillnaden är [...]
  - Frågan är obesvarad i litteraturen

Det sista svaret är fullt legitimt och ofta det sanna. Konstruera
inte ett avgörande som inte finns. Har ingen ställt frågan är det
sessionens mest värdefulla fynd och blir en egen wiki-not.

CITERINGSUNDERLAG: resources/research/[amne]-CITERINGAR-YYYY-MM-DD.md
REGISTER: resources/scholar-api/scholar.py, sök vidare fritt

SPARA SOM: resources/research/[amne-slug]-skiljedom-YYYY-MM-DD.md
```

### Konsensusangriparen

Task med `subagent_type='research-specialist'`, i lensläge. Detta är Skeptikern riktad mot en enda punkt - och den operationella formen av varningen om den författarbyggda panelen.

```
LENS: Konsensusangriparen. Du finns därför att fem instanser av
samma språkmodell höll med varandra, och det är inte ett bevis för
någonting. Det kan lika gärna vara ett delat fel i en delad
träningsmängd.

KONSENSUSPÅSTÅENDET, ordagrant: [kartpunkt 4]
DET STÖDS AV: [vad panelen anförde]

DIN UPPGIFT: hitta litteraturen som motsäger det. Inte nyanserar -
motsäger. Sök specifikt efter:
  - nollresultat och misslyckade replikeringar
  - metaanalyser som ger en lägre effekt än den påstådda
  - metodkritik mot de studier konsensusen vilar på
  - fält där det motsatta resultatet är etablerat
  - publikationsbias: finns det skäl att tro att motevidensen
    aldrig publicerades?

FRAMÅTCITERING: resources/research/[amne]-CITERINGAR-YYYY-MM-DD.md
innehåller vilka som citerat nyckelstudierna och vad de gjorde med
dem. Läs den först - misslyckade replikeringar syns där. Kör sedan
citerad-av själv på de studier svepet inte hann med.

HITTAR DU INGENTING är det ett starkt resultat och du ska säga det
rakt ut. Konstruera inte motevidens som inte finns; ett ärligt
"konsensuspunkten står emot angrepp" är precis det vi vill veta.

SPARA SOM: resources/research/[amne-slug]-konsensusangrepp-YYYY-MM-DD.md
```

### Steg 3: Kartan revideras

Runda 2 gick inte att göra utan att kartan ändras. Skriv om den, inline, med tre tillägg:

- **Vad runda 2 ändrade.** Flyttade blindfläckslensen något ur punkt 4 till punkt 1? Avgjordes konflikten? Höll konsensuspunkten?
- **Konsensuspunktens status efter angrepp.** Tre möjliga: stod emot, sprack, eller preciserades. Detta går rakt in i påståendeguiden - en konsensuspunkt som stod emot ett riktat angrepp får stå under "säg rakt ut", en som sprack får inte det
- **Den nya blindfläcken**, om runda 2 avslöjade en. Den researchas **inte** - den blir en not och en rad i syntesens frontfråga

**Ändrade runda 2 ingenting** är det ett resultat, inte ett misslyckande. Då var panelen komplett, och det är den starkaste sak som går att säga om en femlenspanel. Skriv det.

Runda 2:s påståenden går in i verifieringspoolen på exakt samma villkor som panelens. Ingenting slipper Fas 5 för att det kom sent.

---

## Fas 5: Verifiering mot primärkälla

**Denna fas hoppas inte över.** Utan den är sessionen ett välskrivet referat av vad sex instanser av samma modell trodde.

Plocka ut de bärande påståendena ur samtliga rapporter - panelens och runda 2:s - de som bär ett fynd, en siffra eller en rekommendation. Typiskt 12-25 stycken. Gruppera dem i **4-6 kluster** efter källa eller studie, så att relaterade påståenden verifieras tillsammans.

Starta en Task med `subagent_type='claim-verifier'` per kluster, alla i **ett meddelande**:

```
PÅSTÅENDEN ATT PRÖVA:
1. [påståendet ordagrant + siffran + den angivna källan]
2. [...]

KONTEXT: [ur vilken rapport de kommer, och vad de bär upp]

CITERINGSUNDERLAG: resources/research/[amne]-CITERINGAR-YYYY-MM-DD.md
Innehåller citeringsantal, framåtciteringar och versionsjämförelser
för flera av studierna nedan. Noterar den att en siffra skiljer sig
mellan preprint och publicerad version är det den publicerade som
gäller - och skillnaden ska rapporteras.
```

Agenten kan hierarkin, domarna och returformatet, och den har registren - `metadata` mot Crossref och OpenAlex avgör en omtvistad årtals- eller siffruppgift på ett anrop.

### Tillämpa domarna

Detta är arbetet, inte en formalitet:

- **`FALSKT`** - påståendet stryks. Det får inte bli en not. Notera det i changelogen; ett falskt påstående som cirkulerar är värt att veta om.
- **`DELVIS`** - rätta siffran, räckvidden eller karaktäriseringen i rapporten innan extraktionen läser den. Rättelsen är ofta sessionens mest värdefulla fynd.
- **`OVERIFIERAT`** - får bli en not, men märkt `Andrahand` i texten och `evidence-level: low`. Sägs rakt ut att primärkällan inte kunde nås.
- **`BEKRÄFTAT`** - går vidare med sin evidensnivå.

Evidensnivån 1-7 från verifieraren översätts till frontmatterns fält: 1-3 blir `high`, 4-5 `medium`, 6-7 `low`.

### Verifieringsbannern

Bokför tallyn ärligt och ta med den i syntesen, changelogen och rapporten till användaren:

```
N påståenden prövade: X bekräftade, Y delvis rättade, Z overifierade, W falska
```

Är siffrorna obekväma ska de stå ändå. En session som rättade sex påståenden gjorde mer nytta än en som rättade noll.

---

## Fas 6: Extraktion till wiki-noter

Sessionsmapp: `wiki/sources/[YYYY-MM-DD Ämne på svenska]/`.

**Starta indexeringen nu, i bakgrunden.** Den tar över tio minuter på ett vault i den här storleken och blockerar annars Fas 7:

```bash
nohup ./resources/local-brain-search/run_index.sh > /tmp/index.log 2>&1 &
```

**Dela tematiskt, inte per rapport.** När lenserna granskat samma fråga behandlar alla rapporterna samma centrala studier, och fem extraktorer skriver då fem varianter av samma not. Dela i stället materialet i 3-4 teman som inte överlappar. Varje extraktor får sitt tema, en uttrycklig lista över vad de andra tar, och de rapporter som bär just det temat.

Per-rapport-uppdelning gäller bara när spåren är genuint oberoende - som när fem lenser undersökt fem olika aktörer.

Starta Task med `subagent_type='document-insight-extractor'` per tema, alla i ett meddelande. Agenten kan notformatet, evidensmarkeringarna och dedupliceringen.

```
KÄLLOR (verifieringsfilen först - den har företräde):
1. resources/research/[amne]-VERIFIERING-YYYY-MM-DD.md
2. [de rapporter som bär detta tema, panelens och runda 2:s]
3. resources/research/[amne]-CITERINGAR-YYYY-MM-DD.md (citeringsdata)

SESSIONSMAPP: wiki/sources/[YYYY-MM-DD Ämne]

DITT TEMA: [tydligt avgränsat]
DE ANDRA TAR: [så att ingen skriver in på någon annans område]

VERIFIERINGSRESULTAT: [domarna som rör detta tema, med rättade
siffror. Rapporternas ursprungliga formuleringar är redan rättade,
men du ska känna till vad som prövades och vad som föll]

BEFINTLIG TÄCKNING: [wiki-sidor som ligger nära, med namn - läs dem
innan du skriver, både för att undvika dubbletter och för att kunna
flagga när källan motsäger dem]

SÄRSKILT EFTERSÖKT: negativa fynd, preciseringar, motsägelser mot
wikin. Påståenden som föll i verifieringen ska bli noter om felet
är spritt - "detta hävdas ofta och håller inte" är en av vaultets
mest värdefulla nottyper.
```

Kartans utfall blir också noter, och runda 2 har gjort flera av dem värda egna sidor:

- de direkta konflikterna
- **skiljedomen** - särskilt när svaret blev "frågan är obesvarad i litteraturen"
- **konsensuspunktens status efter angrepp** - "detta höll för ett riktat angrepp" är en not med ovanligt lång hållbarhet
- **blindfläcken**, både den panelen hade och den runda 2 avslöjade

Kontrollera efteråt:

```bash
ls wiki/sources/[SESSIONSMAPP]/ | wc -l
grep -L "^type:" wiki/sources/[SESSIONSMAPP]/*.md
```

Andra kommandot ska ge tom output.

---

## Fas 7: Inkoppling

Indexeringen startades i Fas 6. Kontrollera att den är klar innan connection-finder startas - annars är de nya noterna osynliga för semantisk sökning.

Är den inte klar: låt agenten arbeta med grep, glob och läsning i stället, och **säg det i prompten**. Begreppsliga kopplingar går att hitta genom att läsa; det är långsammare men inte sämre. Starta aldrig om indexeringen medan den kör.

Task med `subagent_type='connection-finder'` mot sessionsmappen:

```
SESSIONSMAPP: wiki/sources/[YYYY-MM-DD Ämne]

FOKUS: [de fynd som har störst räckvidd utanför sitt eget ämne]

SÖK SÄRSKILT: broar mellan mekanismlagret och innehållslagret, och
motsägelser mot befintliga sidor. Verifieringen rättade [X] påståenden -
kontrollera om någon befintlig wiki-sida bär samma fel. Konsensus-
angreppet [sprack / höll / preciserade] punkten [...] - kontrollera
om någon befintlig sida vilar på den i sin ursprungliga form.
```

De två sista meningarna är viktiga. Rättar verifieringen en siffra kan samma siffra redan stå i wikin från en tidigare session, och spricker en konsensuspunkt kan wikin vila på den utan att veta om det.

Verifiera att länkarna landar:

```bash
grep -oh "\[\[[^]]*\]\]" wiki/sources/[SESSIONSMAPP]/*.md | sort -u | \
  sed 's/\[\[//;s/\]\]//' | while read -r l; do
    f=$(printf '%s' "$l" | sed 's/|.*//;s|.*/||')
    find wiki output raw -name "$f.md" -print -quit | grep -q . || echo "SAKNAS: $l"
  done
```

Länkar till sidor som inte finns är tillåtna och markerar framtida sidor, men de ska vara avsiktliga. Träffar listan en felstavning av en befintlig sida, rätta den.

---

## Fas 8: Syntes, påståendeguide och bokföring

### Syntesen

Skrivs tvärs över lenserna, inte som en sammanfattning av var och en. `meta/changelogs/SESSION SUMMARY - Deep Research [Ämne] YYYY-MM-DD.md`. Den ska innehålla:

- **Vad som gäller** - det som står efter verifieringen, med evidensnivå
- **Motsägelsekartans fem utfall** i sin **reviderade** form, inklusive blindfläcken
- **Vad runda 2 ändrade** - vilka agenter som kördes, vilka som inte kördes och varför, och om konsensuspunkten stod emot, sprack eller preciserades
- **Verifieringsbannern** med tallyn
- **Varningen om den författarbyggda panelen**, utskriven - tillsammans med vad konsensusangreppet gjorde åt den
- **Registerstatus** om citeringssvepet uteblev, med skälet
- **Frontfrågan** - den enda fråga som skulle ändra slutsatserna, hämtad ur den nya blindfläcken och skiljedomen
- **Vad detta ändrar** i vad användaren faktiskt gör, konkret

### Påståendeguiden

Det som gör sessionen användbar i ett klassrum. Tre listor, hämtade ur domarna:

| Kategori | Vad som hamnar här |
|----------|--------------------|
| **Säg rakt ut** | `BEKRÄFTAT` på evidensnivå 1-3. Håller inför en kollega som frågar var du läst det. En konsensuspunkt som stod emot riktat angrepp hör hemma här |
| **Säg med förbehåll** | `BEKRÄFTAT` eller `DELVIS` på nivå 4-5, allt där lenserna är oense, och allt skiljedomen lämnade obesvarat. Förbehållet formuleras färdigt att säga - inte "det är osäkert" utan vad osäkerheten består i |
| **Säg inte** | `FALSKT`, `OVERIFIERAT`, det som föll i verifieringen, och **det konsensusangreppet sprack**. Med en rad om vad man annars kan säga i stället |

Sista raden i "säg inte" är runda 2:s tydligaste bidrag. Ett påstående som fem lenser var eniga om och som ändå sprack för ett riktat angrepp hade utan Fas 4 gått rakt in i klassrummet med panelens auktoritet bakom sig.

Guiden går in i syntesen och nämns i rapporten till användaren.

### Bokföring

| Fil | Vad som skrivs |
|-----|----------------|
| `index.md` | Nya sidor i rätt domänsektion, statistiken i frontmatter, MOC-kandidat vid 15+ noter |
| `log.md` | Entry `## [YYYY-MM-DD] deep-research \| [Ämne]` i prosa - huvudfyndet, vad verifieringen rättade, vad runda 2 ändrade, vad som kvarstår. Se de senaste entryna för tonen |
| `CHANGELOG.md` | Kort sessionsentry med verifieringstallyn |
| `meta/changelogs/` | Syntesen, plus connection-changelogen från agenten |

### Rapporten till användaren

Kort, i löptext: huvudfyndet i två meningar, verifieringstallyn, vad runda 2 ändrade i en mening, vad som rättades och vad det ändrar, den skarpaste kvarstående motsägelsen, frontfrågan, sökvägen till sessionsmappen plus `xdg-open` på den, och de tre viktigaste raderna ur påståendeguiden.

---

## Sökvägar

| Vad | Var |
|-----|-----|
| Lensrapporter | `resources/research/[amne]-[lens]-YYYY-MM-DD.md` |
| Runda 2-rapporter | `resources/research/[amne]-{blindflack,skiljedom,konsensusangrepp}-YYYY-MM-DD.md` |
| Citeringssvepet | `resources/research/[amne]-CITERINGAR-YYYY-MM-DD.md` |
| Verifieringen | `resources/research/[amne]-VERIFIERING-YYYY-MM-DD.md` |
| Extraherade noter | `wiki/sources/[YYYY-MM-DD Ämne]/` |
| Extraktionens changelog | i sessionsmappen |
| Syntes och connection-changelog | `meta/changelogs/` |
| Graduerade begrepp | `wiki/concepts/` (via `/graduate-insights`, inte här) |
| Topics och MOC:er | `wiki/topics/` |
| Innehållskatalog | `index.md` |
| Operationslogg | `log.md` |

## Vakter

- **Riktig research bara.** Varje lens och varje citering ska gå tillbaka till en verkligt hämtad källa. Inga uppfunna studier, siffror eller URL:er. Går en siffra inte att verifiera ska den nedgraderas eller strykas, aldrig slätas över.
- **Verifieringen är obligatorisk.** En session levererad utan Fas 5 är inte en deep research-session. Bannern ska vara sann.
- **Evidensnivå är källkvalitet, inte övertygelse.** En välskriven enkätrapport är fortfarande en enkät.
- **Panelen är författarbyggd.** Konvergens är hypotes, inte konsensus. Sägs alltid ut - och prövas av konsensusangriparen.
- **En runda 2, aldrig fler.** Fynd ur runda 2 som förtjänar egen research blir noter och frontfråga, inte en runda 3.
- **Registren används, inte bara webben.** En rapport vars källor är bloggar, myndighetssammanfattningar och tidningsartiklar har refererat referaten. Skicka tillbaka den. Citeringsantal som hämtats ur registren får aldrig presenteras som Google Scholars - de räknar annorlunda, och skillnaden är stor.
- **Aktualitet mäts mot fältet.** Rosenshine 2012 och Reichenberg 2000 är fortfarande det bästa som finns i sina frågor. Gå till primärstudien bakom påståendet; sök det allra senaste bara i fält som faktiskt rör sig - AI i undervisning, examinationsformer, digital källkritik.

## När något går fel

**En lens kommer tomhänt.** Fältet kan sakna det perspektivet helt - det är ett fynd och blir en not, inte en tomrad. Kör inte om lensen med uppmjukad instruktion.

**Alla lenser säger samma sak.** Antingen är frågan avgjord, eller så var den för snävt ställd för att rymma oenighet. Kontrollera vilket genom att läsa Skeptikerns "Där jag är svag" - kom den inte åt något att angripa var frågan för smal. Kör konsensusangriparen oavsett; det är precis det läget den finns för.

**Registren svarar inte.** CLI:n försöker om tre gånger med paus innan den ger `FEL:`. Kvarstår felet är API:et eller nätet nere. Skriv det i syntesen och kör vidare på webbsökning - allt utom framåtciteringen går att göra så, och verifieringen i Fas 5 får då märka fler påståenden `OVERIFIERAT`. Det är rätt utfall, inte ett fel att dölja.

**Kartan ger ingen blindfläck som går att formulera som roll.** Då var lensernas "Där jag är svag" för vaga. Blindfläckslensen uteblir, och det ska stå i syntesen. Hitta inte på en blindfläck för att fylla platsen.

**Skiljedomaren landar i "frågan är obesvarad".** Det vanligaste utfallet och ett riktigt svar. Det blir en egen wiki-not och går rakt in i frontfrågan.

**Konsensusangriparen hittar ingenting.** Bra. Konsensuspunkten är då prövad, inte bara upprepad, och får stå under "säg rakt ut". Kör inte om angreppet med hårdare instruktion för att pressa fram en spricka.

**Verifieringen fäller det mesta.** Ovanligt och viktigt. Sessionen har då upptäckt att ett helt område vilar på andrahandsuppgifter. Skriv det som huvudfyndet i stället för att leta nya källor som säger det man ville höra.

**Extraktionen ger mest dubbletter.** Ämnet var täckt. Byt riktning mot det som är nytt - preciseringar, motevidens, gränsfall.

**Inkopplingen hittar nästan inget.** Två möjligheter som ska skiljas åt: ämnet är nytt för wikin, eller sökningen utgick från den nya notens vokabulär i stället för den befintligas. Sök om från den befintliga sidans ord innan du drar slutsatsen.

**En fas misslyckas.** Fortsätt med de övriga, leverera delresultat och skriv i loggen vad som saknas - utom Fas 5. Faller verifieringen ska noterna inte skrivas; hellre rapporter i `resources/research/` och ingen wiki-ändring än overifierade påståenden i vaultet.

## Checklista

- [ ] Frågan skärpt till något som går att ha fel om
- [ ] Lenspanelen vald efter frågans struktur och startad i ett meddelande
- [ ] Varje lensrapport har position, det bara den säger, och där den är svag
- [ ] Motsägelsekartans fem utfall gjorda, punkt 3-5 formulerade som beställningar
- [ ] Citeringssvepet gjort och skrivet till fil, eller frånvaron motiverad
- [ ] Runda 2 körd enligt beslutsregeln, uteblivna agenter motiverade
- [ ] Kartan reviderad efter runda 2, konsensuspunktens status avgjord
- [ ] Varje bärande påstående verifierat mot primärkälla - panelens och runda 2:s
- [ ] Domarna tillämpade: falskt struket, delvis rättat, overifierat märkt
- [ ] Verifieringsbannern sann och med i syntesen
- [ ] Varningen om den författarbyggda panelen utskriven, med angreppets utfall
- [ ] Index ombyggt före inkopplingen
- [ ] Kopplingar inskrivna i noterna, ömsesidigt
- [ ] Wikilänkar verifierade mot disk
- [ ] Påståendeguiden skriven med färdigformulerade förbehåll
- [ ] `index.md`, `log.md`, `CHANGELOG.md` uppdaterade
