---
created: 2026-07-13
updated: 2026-07-13
created_by: claude-fable-5
updated_by: claude-fable-5
agent_version: 04.26
type: inbox
tags: [övningsformer, variation, spelbaserat, simulering, frågeappen, historia, samhällskunskap]
---

# Övningsförslag - variation i undervisningen

Idébank framtagen 2026-07-12/13 utifrån en inventering av samtliga 18 momentplaner i `output/lessons/`. Syftet: bredda övningsrepertoaren med former som idag saknas eller är sällsynta.

## Utgångspunkt: repertoaranalysen

**Befintlig signatur (stark och konsekvent):** EPA, retrieval/startquiz, kumulativa artefakter (triadmatris, klasskarta, kandidatkort), källstationer, SAC/panelprövningar, skrivverkstad, metareflektion, digitala exit tickets via frågeappen. Två analoga escape rooms finns redan byggda (Antiken, Medeltiden).

**Tre familjer som nästan helt saknas:**

1. **Simulerande** - förhandlingsspel, rollsimuleringar, ekonomiska spel (0 förekomster)
2. **Producerande** - elever som skapar media/artefakter (endast AI-labbet i Källkritik)
3. **Ludiska/digitala spel** - gamification bortom quiz; frågeappen används som quiz + exit tickets + FSRS-ominlärning men aldrig som spelmotor

Även sällsynta: gallery walk (0), fishbowl (0), fältstudie/intervju (0), statistiklabb (1), jigsaw (2).

**Mönster:** Historia 1b är standardiserad kring pretest/provokation - begreppsbygge - kumulativ artefakt - brottningsform - skrivsyntes - metareflektion. Samhällskunskap är mer case-/tillämpningsorienterad med muntliga examinationsformer. Gemensam kärna: EPA, exit tickets, retrieval, worked examples, fadande skrivmallar, kamratrespons.

---

## Omgång 1 (2026-07-12)

### A. Bygger vidare på frågeappen

**1. Klasskampanj-läget: "Fronten"** (Historia 1b, Världskrigen/1914-1945)
FSRS-ominlärningen vänds från individuell till kollektiv: klassens sammanlagda retrieval-resultat flyttar en front på en karta som visas på projektorn vid lektionsstart. Rätt svar på gamla frågor = klassen håller linjen; förfallna kort = terräng förloras. Ingen elev pekas ut (aggregerad data finns redan i rapporterna). Tekniskt: en HTML-vy ovanpå befintlig data.

**2. Prognosbörsen** (Samhällskunskap, Riksdagsvalet 2026)
Eleverna lägger prognoser i appen ("Hur stor blir valdeltagandet bland förstagångsväljare?") med kort motivering (REFLECTION-frågetypen). Prognoserna låses; efter valet körs uppföljningslektion om varför vi gissade fel - direktingång till confirmation bias och opinionsmätningars metodproblem. Forecasting-övningar av Tetlock-typ är evidensstarka för kalibrerat tänkande. **OBS: tidsfönstret stänger vid valet 2026.**

**3. Tvåstegsquiz med "livlina"** (alla kurser)
Startquiz individuellt som vanligt, direkt följt av andra runda där samma frågor besvaras i par och paret måste enas (team-based learning-mekanik). Kräver bara en andra quiz-instans + jämförelse individ vs par i rapporten. Billigast att testa.

**4. Mysteriefall med gradvisa ledtrådar** (Juridik/rättsfall, användbart även i historia)
Drip feed-variant: fall-fakta släpps i omgångar via appen; efter varje omgång låses en preliminär bedömning (skuldfråga, bevisstyrka) innan nästa ledtråd låses upp. Efteråt ser eleven sin egen bedömningskurva - hur tidigt låste jag mig? Gör ankringsbias upplevd i stället för föreläst. Passar processrättens tunnelseende-tema.

### B. Fristående digitalt (HTML i Arkiv v2-stil)

**5. Förhandlingssimulering: "Wien 1815" eller "Versailles 1919"** (Revolutionerna / 1914-1945)
Delegationer får rollkort med öppna och hemliga mål (lösenordsskyddade HTML-sidor per delegation). Fördraget skrivs i realtid och prövas mot alla delegationers hemliga minimikrav - spelet rättar förhandlingen. Strukturerad rolltagning nära SAC-traditionen: positioner, belägg, protokoll. Efterarbete kopplar till aktör/struktur.

**6. Marknadsspel: "Handelsnätet"** (Geografi/Ekonomisk geografi - formval öppet, momentet i steg 2)
Omgångsbaserat browserspel där elevgrupper är länder/regioner som väljer specialisering, tullar, handelsavtal; efter varje runda visas vem som vann/förlorade på globaliseringen. Ricardo, beroendeteori och Wallerstein blir utfall eleverna själva producerat. En HTML-fil, gemensam kod på projektorn.

**7. Budgetsimulator: "Första lönen"** (Ungas ekonomi)
Alex-caset görs spelbart: månadssimulering där varje vecka kastar händelser (tandläkarräkning, kompisresa, telefonen dör) och saldot rullar. Körs två gånger: utan och med buffert. Skillnaden i utfall är lektionen om marginaler och sms-lån.

**8. "Redaktionen" - desinformationsspel** (Källkritik/AI, Sam 3)
Eleverna är nattredaktion under eskalerande nyhetshändelse: påståenden strömmar in (äkta + AI-fabricerade), beslut under tidspress: publicera/verifiera/avstå. Poäng för rätt beslut, stort avdrag för publicerad desinformation. Prebunking-forskningens spelmekanik (Bad News/Go Viral) med eget innehåll på svenska.

### C. Analogt/hybrid

**9. Gallery walk med QR-exit** (alla moment med kumulativ artefakt)
Grupperna monterar sina triadmatriser/klasskartor på väggarna, vandrar med strukturerat responsprotokoll, avslutar med omröstning "starkaste belägget i rummet" via QR-kod till frågeappen. Kopplar frånvarande form till befintlig exit ticket-slinga.

**10. Fishbowl som SAC-variation**
Inre ring samtalar, yttre ring antecknar belägg och får "tag in" genom platsbyte. Samma deliberativa kvalitet som SAC men annan rumslig dynamik; yttre ringen får aktiv lyssnarroll som SAC saknar. Svarar mot kursminnets formvalsprincip (variera brottningsformen).

**11. Elevproducerad "NotebookLM-motattack"** (valfritt historiemoment)
Vänd på AI-videopipelinen: elevgrupper granskar en AI-genererad översikt, hittar förenklingar/fel och producerar kort egen ljudpodd (2-3 min, mobilinspelad) som rättar AI:n. Producerande + källkritik + retrieval i ett.

**12. Statistiklabb som stående inslag i Samhällskunskap**
Riktiga dataset (SCB, Valu, Ungdomsbarometern) + tolkningsfråga. Evidensstark och AI-säker form. Särskilt Riksdagsvals-momentet vinner på att eleverna räknar själva på opinionsdata innan diskussion.

---

## Omgång 2 (2026-07-13) - enbart Historia och Samhällskunskap

### Historia

**13. "Källguessr"** (alla moment, särskilt Nya tiden och Industriella revolutionen)
GeoGuessr-mekanik för primärkällor: källa visas, eleverna gissar årtal, plats och källtyp - poäng efter närhet, full pott kräver motivering ("vilka ledtrådar i källan daterar den?"). Samma träning som källstationerna (genre, tendens, kontext) men som snabb spelloop. HTML i Arkiv v2-stil; frågebanken växer per moment - i slutet av kursen körs "hela historien"-omgångar som kumulativ retrieval.

**14. Åtta liv genom katastrofen** (1914-1945 Aktör och struktur)
Longitudinell rolltagning: varje elev tilldelas i momentstart en persona (tysk fabriksarbeterska, brittisk kolonialsoldat, svensk diplomat...) med personakort. Vid 4-5 nedslag skriver eleven kort dagbokspost från sin persona - vad vet hon, vad väljer hon, vad KAN hon välja? Slutuppgift jämför personornas handlingsutrymme: aktör/struktur inifrån. AI-säkert eftersom texterna bygger på klassens gemensamma nedslagshändelser.

**15. Historisk rättegång** (Industriella revolutionen eller Andra världskriget/efterkrigsansvar)
"Industrialiseringen står åtalad: framsteg eller stöld?" Åklagarlag, försvarslag, vittnen = historiska aktörer med källkort (barnarbetaren, fabriksägaren, statistikern), jury som dömer enligt förutbestämda beviskriterier. Släkt med panelprövningen men med dramaturgi och rollasymmetri som SAC saknar. Juryprotokollet blir underlag för skrivsyntesen.

**16. Kontrafaktisk turnering** (Revolutionernas tidsålder)
Counterfactual-verkstaden som bracket: klassen seedar åtta "vad hade hänt om"-scenarier, par möts i korta matcher, klassen röstar via frågeappen på PLAUSIBILITET (inte underhållningsvärde) enligt kriterier: närhet till faktiska förutsättningar, minsta antal ändrade variabler. Vinnaren = mest disciplinerade orsaksresonemanget.

**17. Motmuseet** (historiebruk; passar Nya tiden eller eget mini-moment)
Producerande + fältbaserat: eleverna inventerar historiebruk i egna staden - gatunamn, statyer, skolans namn, minnesmärken - och kuraterar digital utställning ("vems historia syns, vems saknas?") med egenskrivna skyltar. HTML-galleri eller fysisk vägg. Historiebruk centralt i Gy25, blir något eleverna kan gå och titta på.

### Samhällskunskap

**18. Riksdagsspelet: från motion till votering** (Politikområden inför riksdagsvalet 2026)
Förhandlingsluckan i svensk tappning: partiroller enligt aktuell opinion, motion genom utskottsförhandling till votering - ingen har egen majoritet. Vem kompromissar, vem fäller, vad kostar det i trovärdighet? Efter valet i höst: kör samma spel med verklig mandatfördelning och jämför. Kopplar till SAC men lägger till det SAC saknar: förhandling med insats.

**19. Eleverna bygger undersökningen** (Riksdagsvalet, Sam 1a1)
Vänd på frågeappen: elevgrupper designar egen miniundersökning (t.ex. förstagångsväljares frågeprioriteringar på skolan) som körs skarpt via appen på andra klasser. Ställningstaganden om urval, ledande frågor, bortfall INNAN de ser data - sedan analys av egna resultat. Metodkunskap genom att göra metodfelen själv. Appen har hela infrastrukturen.

**20. Klimattoppmötet** (Globalisering, Sam 3)
Förhandlingssimulering med teorin inbyggd: delegationer (USA, Kina, EU, Bangladesh, Saudiarabien, Tuvalu...) med öppna och hemliga mandat förhandlar fram deklaration. Twist: efteråt analyserar eleverna sitt eget spel med Held och Wallerstein - vem satt i centrum, vem i periferin, höll den liberala samarbetslogiken eller vann realpolitiken? Simuleringen blir empirin som teorierna prövas mot.

**21. Inokuleringsverkstaden** (Källkritik/AI, Sam 3)
Prebunking som elevproduktion: grupper får var sin manipulationsteknik (falsk dikotomi, känsloappell, fabricerad expert) och skapar kort klipp/karusell i vertikalt format som vaccinerar yngre elever mot just den tekniken. Bästa bidragen visas för årskursen under. Den som konstruerar manipulationen förstår den djupast; autentisk mottagare.

**22. "Prislappen" - policy-poker** (Ungas ekonomi eller Riksdagsvalet)
Kortspel: varje kort är ett politiskt löfte ("slopad karensdag", "gratis kollektivtrafik för unga"); grupper rankar korten efter kostnad innan facit (riksdagens utredningstjänst/ESV) avslöjas. Chockmomentet - att kostnadsintuitionen ofta är fel på en tiopotens - är själva lärandet. Trycks som kortlek eller körs som gissningsrundor i frågeappen.

---

## Rekommenderad startordning

| Förslag | Varför först |
|---------|--------------|
| 3. Tvåstegsquiz | Kostar nästan inget, testbart omedelbart |
| 2. Prognosbörsen | Tidsfönstret stänger vid valet 2026 |
| 18. Riksdagsspelet / 20. Klimattoppmötet | Fyller förhandlingsluckan i varsin kurs |
| 13. Källguessr | Billigast att återanvända över hela historiekursen |
| 19. Eleverna bygger undersökningen | Mest originella användningen av befintlig infrastruktur |
