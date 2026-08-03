---
name: deep-research
description: Autonom forskningspipeline med lenspanel och källverifiering. Fem oberoende perspektiv researchar samma fråga, motsägelserna kartläggs, varje påstående prövas mot sin primärkälla, och resultatet blir atomära wiki-noter plus en påståendeguide för klassrummet. Använd när användaren vill utreda en pedagogisk eller ämnesmässig fråga på djupet, säger "deep research", "utred", "vad säger forskningen om", eller vill fylla en kunskapslucka i wikin. Kan också välja ämne själv utifrån vad som undervisas just nu.
argument-hint: '[ämne, eller "auto" för självvald inriktning]'
automation: gated
allowed-tools: Task, Read, Write, Edit, Bash, Glob, Grep
---

# Deep Research

Fem lenser researchar samma fråga blint för varandra. Motsägelserna mellan dem kartläggs. Varje bärande påstående prövas mot sin primärkälla innan något skrivs in i wikin. Slutprodukten är atomära wiki-noter, en syntes och en påståendeguide - vad som är säkert nog att säga rakt ut i ett klassrum.

**Kör hela kedjan.** Att hoppa över verifieringen gör detta till en vanlig webbsökning med extra steg. En felaktig effektstorlek som tar sig in i en wiki-sida citeras sedan i undervisningen i flera år, och ingenting i vaultet fångar den.

**Indata:** `$ARGUMENTS`

## Två lägen

**Riktat läge** - användaren anger ämne. `/deep-research "formativ bedömning i historia"`.

**Autonomt läge** - `$ARGUMENTS` är tomt eller `auto`. Du väljer ämne enligt Fas 1.

## Vad det kostar och när det är motiverat

Full körning startar ungefär 12-16 agenter. Det är avsett, men inte alltid befogat.

| Frågan | Upplägg |
|--------|---------|
| Öppen fråga där flera hållningar strider, eller något du ska bygga undervisning på | Full panel, fem lenser |
| Avgränsad faktafråga med ett förväntat svar | Två lenser: Forskaren och Skeptikern. Verifieringen körs ändå |
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

Bestäm också **vem svaret är till för**. Nästan alltid en gymnasielärare i historia och samhällskunskap som ska använda detta i undervisningen - men ibland är det underlag för ett bygge, ett samtal med kollegor eller en artikel. Påståendeguiden i Fas 7 riktas dit.

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

Alla får samma inledning:

```
LENS: [rollen]
ÄMNE: [den skärpta frågan]
ÄMNESRAM: [din tolkning på en rad]

BAKGRUND: [vad wikin redan har, med sidnamn - så att rapporten kan
prövas mot det befintliga i stället för att upprepa det]

HÅLLNING SOM SKA PRÖVAS: [användarens position, om det finns en]

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

---

## Fas 3: Motsägelsekartan

Görs **inline, utan agenter**, enbart ur de fem rapporterna. Fem utfall:

1. **Direkta konflikter.** Var två eller flera lenser hävdar motsatta saker. Namnge de kolliderande påståendena, inte bara ämnet de rör.

2. **Starkast mot svagast underbyggt.** Vilken lens bär bäst evidens och vilken sämst, med skälet utskrivet. Rangordningen följer evidenshierarkin, inte hur övertygande texten läser.

3. **Den avgörande frågan.** Den enda empiriska fråga som skulle avgöra den största motsägelsen. Ofta visar det sig att ingen har ställt den - det är i sig ett fynd och blir en not.

4. **Det alla är överens om.** Vad varje lens bekräftar, inklusive Skeptikern. Detta är det mest sannolikt sanna i materialet - **men se varningen nedan.**

5. **Blindfläcken.** Vad ingen lens tog upp. Läs deras "Där jag är svag"-avsnitt mot varandra: det som alla fem underskattar är blindfläcken. Den blir den saknade sjätte lensen och matar frontfrågan i Fas 7.

### Varningen som måste stå i syntesen

**Panelen är författarbyggd.** Alla fem lenser är samma modell med olika instruktion. Att de landar i samma slutsats är ett tecken på att slutsatsen är robust mot perspektivbyte - det är **inte** oberoende bekräftelse och det är inte konsensus i forskarsamhället. Fem lenser som delar en träningsmängd kan dela ett fel.

Detta ska stå utskrivet i syntesen, inte underförstås. Konvergens är en stark hypotes som förtjänar verifiering, inte ett svar som slipper den.

---

## Fas 4: Verifiering mot primärkälla

**Denna fas hoppas inte över.** Utan den är sessionen ett välskrivet referat av vad fem instanser av samma modell trodde.

Plocka ut de bärande påståendena ur rapporterna - de som bär ett fynd, en siffra eller en rekommendation. Typiskt 12-25 stycken. Gruppera dem i **4-6 kluster** efter källa eller studie, så att relaterade påståenden verifieras tillsammans.

Starta en Task med `subagent_type='claim-verifier'` per kluster, alla i **ett meddelande**:

```
PÅSTÅENDEN ATT PRÖVA:
1. [påståendet ordagrant + siffran + den angivna källan]
2. [...]

KONTEXT: [ur vilken lensrapport de kommer, och vad de bär upp]
```

Agenten kan hierarkin, domarna och returformatet.

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

## Fas 5: Extraktion till wiki-noter

Sessionsmapp: `wiki/sources/[YYYY-MM-DD Ämne på svenska]/`.

Starta Task med `subagent_type='document-insight-extractor'` per lensrapport, parallellt. Agenten kan notformatet, evidensmarkeringarna och dedupliceringen.

```
KÄLLA: resources/research/[filnamn]
SESSIONSMAPP: wiki/sources/[YYYY-MM-DD Ämne]

VERIFIERINGSRESULTAT: [domarna som rör denna rapport, med rättade
siffror. Rapportens ursprungliga formuleringar är redan rättade,
men du ska känna till vad som prövades och vad som föll]

BEFINTLIG TÄCKNING: [wiki-sidor som ligger nära, med namn - läs dem
innan du skriver, både för att undvika dubbletter och för att kunna
flagga när källan motsäger dem]

SÄRSKILT EFTERSÖKT: negativa fynd, preciseringar, motsägelser mot
wikin. Påståenden som föll i verifieringen ska bli noter om felet
är spritt - "detta hävdas ofta och håller inte" är en av vaultets
mest värdefulla nottyper.
```

Motsägelsekartans fem utfall blir också noter: de direkta konflikterna, den avgörande frågan och blindfläcken förtjänar egna sidor.

Kontrollera efteråt:

```bash
ls wiki/sources/[SESSIONSMAPP]/ | wc -l
grep -L "^type:" wiki/sources/[SESSIONSMAPP]/*.md
```

Andra kommandot ska ge tom output.

---

## Fas 6: Inkoppling

Bygg om indexet först, annars är de nya noterna osynliga:

```bash
./resources/local-brain-search/run_index.sh
```

Task med `subagent_type='connection-finder'` mot sessionsmappen:

```
SESSIONSMAPP: wiki/sources/[YYYY-MM-DD Ämne]

FOKUS: [de fynd som har störst räckvidd utanför sitt eget ämne]

SÖK SÄRSKILT: broar mellan mekanismlagret och innehållslagret, och
motsägelser mot befintliga sidor. Verifieringen rättade [X] påståenden -
kontrollera om någon befintlig wiki-sida bär samma fel.
```

Sista meningen är viktig. Rättar verifieringen en siffra kan samma siffra redan stå i wikin från en tidigare session.

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

## Fas 7: Syntes, påståendeguide och bokföring

### Syntesen

Skrivs tvärs över lenserna, inte som en sammanfattning av var och en. `meta/changelogs/SESSION SUMMARY - Deep Research [Ämne] YYYY-MM-DD.md`. Den ska innehålla:

- **Vad som gäller** - det som står efter verifieringen, med evidensnivå
- **Motsägelsekartans fem utfall**, inklusive blindfläcken
- **Verifieringsbannern** med tallyn
- **Varningen om den författarbyggda panelen**, utskriven
- **Frontfrågan** - den enda fråga som skulle ändra slutsatserna, hämtad ur blindfläcken och den avgörande frågan
- **Vad detta ändrar** i vad användaren faktiskt gör, konkret

### Påståendeguiden

Det som gör sessionen användbar i ett klassrum. Tre listor, hämtade ur domarna:

| Kategori | Vad som hamnar här |
|----------|--------------------|
| **Säg rakt ut** | `BEKRÄFTAT` på evidensnivå 1-3. Håller inför en kollega som frågar var du läst det |
| **Säg med förbehåll** | `BEKRÄFTAT` eller `DELVIS` på nivå 4-5, och allt där lenserna är oense. Förbehållet formuleras färdigt att säga - inte "det är osäkert" utan vad osäkerheten består i |
| **Säg inte** | `FALSKT`, `OVERIFIERAT`, och det som föll i verifieringen. Med en rad om vad man annars kan säga i stället |

Guiden går in i syntesen och nämns i rapporten till användaren.

### Bokföring

| Fil | Vad som skrivs |
|-----|----------------|
| `index.md` | Nya sidor i rätt domänsektion, statistiken i frontmatter, MOC-kandidat vid 15+ noter |
| `log.md` | Entry `## [YYYY-MM-DD] deep-research \| [Ämne]` i prosa - huvudfyndet, vad verifieringen rättade, vad som kvarstår. Se de senaste entryna för tonen |
| `CHANGELOG.md` | Kort sessionsentry med verifieringstallyn |
| `meta/changelogs/` | Syntesen, plus connection-changelogen från agenten |

### Rapporten till användaren

Kort, i löptext: huvudfyndet i två meningar, verifieringstallyn, vad som rättades och vad det ändrar, den skarpaste kvarstående motsägelsen, frontfrågan, sökvägen till sessionsmappen plus `xdg-open` på den, och de tre viktigaste raderna ur påståendeguiden.

---

## Sökvägar

| Vad | Var |
|-----|-----|
| Lensrapporter | `resources/research/[amne]-[lens]-YYYY-MM-DD.md` |
| Extraherade noter | `wiki/sources/[YYYY-MM-DD Ämne]/` |
| Extraktionens changelog | i sessionsmappen |
| Syntes och connection-changelog | `meta/changelogs/` |
| Graduerade begrepp | `wiki/concepts/` (via `/graduate-insights`, inte här) |
| Topics och MOC:er | `wiki/topics/` |
| Innehållskatalog | `index.md` |
| Operationslogg | `log.md` |

## Vakter

- **Riktig research bara.** Varje lens och varje citering ska gå tillbaka till en verkligt hämtad källa. Inga uppfunna studier, siffror eller URL:er. Går en siffra inte att verifiera ska den nedgraderas eller strykas, aldrig slätas över.
- **Verifieringen är obligatorisk.** En session levererad utan Fas 4 är inte en deep research-session. Bannern ska vara sann.
- **Evidensnivå är källkvalitet, inte övertygelse.** En välskriven enkätrapport är fortfarande en enkät.
- **Panelen är författarbyggd.** Konvergens är hypotes, inte konsensus. Sägs alltid ut.
- **Aktualitet mäts mot fältet.** Rosenshine 2012 och Reichenberg 2000 är fortfarande det bästa som finns i sina frågor. Gå till primärstudien bakom påståendet; sök det allra senaste bara i fält som faktiskt rör sig - AI i undervisning, examinationsformer, digital källkritik.

## När något går fel

**En lens kommer tomhänt.** Fältet kan sakna det perspektivet helt - det är ett fynd och blir en not, inte en tomrad. Kör inte om lensen med uppmjukad instruktion.

**Alla lenser säger samma sak.** Antingen är frågan avgjord, eller så var den för snävt ställd för att rymma oenighet. Kontrollera vilket genom att läsa Skeptikerns "Där jag är svag" - kom den inte åt något att angripa var frågan för smal.

**Verifieringen fäller det mesta.** Ovanligt och viktigt. Sessionen har då upptäckt att ett helt område vilar på andrahandsuppgifter. Skriv det som huvudfyndet i stället för att leta nya källor som säger det man ville höra.

**Extraktionen ger mest dubbletter.** Ämnet var täckt. Byt riktning mot det som är nytt - preciseringar, motevidens, gränsfall.

**Inkopplingen hittar nästan inget.** Två möjligheter som ska skiljas åt: ämnet är nytt för wikin, eller sökningen utgick från den nya notens vokabulär i stället för den befintligas. Sök om från den befintliga sidans ord innan du drar slutsatsen.

**En fas misslyckas.** Fortsätt med de övriga, leverera delresultat och skriv i loggen vad som saknas - utom Fas 4. Faller verifieringen ska noterna inte skrivas; hellre rapporter i `resources/research/` och ingen wiki-ändring än overifierade påståenden i vaultet.

## Checklista

- [ ] Frågan skärpt till något som går att ha fel om
- [ ] Lenspanelen vald efter domän och startad i ett meddelande
- [ ] Varje lensrapport har position, det bara den säger, och där den är svag
- [ ] Motsägelsekartans fem utfall gjorda, blindfläcken namngiven
- [ ] Varje bärande påstående verifierat mot primärkälla
- [ ] Domarna tillämpade: falskt struket, delvis rättat, overifierat märkt
- [ ] Verifieringsbannern sann och med i syntesen
- [ ] Varningen om den författarbyggda panelen utskriven
- [ ] Index ombyggt före inkopplingen
- [ ] Kopplingar inskrivna i noterna, ömsesidigt
- [ ] Wikilänkar verifierade mot disk
- [ ] Påståendeguiden skriven med färdigformulerade förbehåll
- [ ] `index.md`, `log.md`, `CHANGELOG.md` uppdaterade
