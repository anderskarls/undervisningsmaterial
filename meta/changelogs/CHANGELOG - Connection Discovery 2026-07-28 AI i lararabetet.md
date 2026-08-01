---
created: 2026-07-28
updated: 2026-07-28
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: changelog
tags: [connection-discovery, ai-i-lararabetet, bedomning, formagetraning, motsagelser]
---

# Connection Discovery - 2026-07-28 AI i lärararbetet

Uppdrag: hitta icke-uppenbara kopplingar mellan de 40 nya noterna i `wiki/sources/2026-07-28 AI i lärararbetet - professionens organisering/` och det befintliga vaultet. Alla 40 noter lästa, plus de fem sessionschangeloggarna. Cirka 30 befintliga sidor lästa i sin helhet för verifiering. Ingen befintlig sida har ändrats - detta är förslag.

**Metod:** `grep -ril` och riktad läsning mot `wiki/` och `index.md`. FAISS-indexet användes inte (byggdes om under sessionen).

---

## Sammanfattning

Fem motsägelser hittades, varav en är intern i den nya batchen och tre gäller sidor som styr faktiska beslut i användarens eget bygge. De starkaste icke-uppenbara kopplingarna ligger inte där man skulle gissa (AI-säkra examinationsformer) utan i tre andra riktningar:

1. **Den svenska bedömningsforskningen från 2026-04-13 förutsåg biasprofilen som den internationella AI-forskningen mätte 2026-07-28.** Lead:ens hypotes 3 bekräftas - och skarpare än väntat.
2. **Vaultet hade redan motmedlet mot automation bias - men bara riktat mot eleven.** Designprincipen "självbedömning före AI-feedback" (2026-04-12) är exakt den motåtgärd den nya experimentella litteraturen föreskriver för läraren.
3. **Sessionens svagaste dokumenterade länk är till den äldsta sessionen.** `ai-genererade-lektionsplaneringar-systematisk-svaghet` (2026-03-07) är den empiriska grunden för hela den nya batchens påstående att verifieringsarbetet är dyrare i SO-ämnen - och ingen av de 40 noterna länkar dit.

Sessionens noter är ovanligt välkorslänkade internt och länkar redan flitigt utåt. Rapporten nedan tar därför bara upp kopplingar som **saknas**, och prioriterar riktningen från nya noter tillbaka in i befintliga sidor.

---

## Del 1 - Motsägelser

### M1. LLM-bedömarreliabilitet: en studie mot en syntes av 65

- **Befintlig:** `ai-bedomning-av-essaer-nar-manniskoniva-icc-094` (2026-04-15): *"Alla tre LLM presterar lika bra eller bättre än paneler av mänskliga bedömare."* och *"Ett strukturellt skifte har skett någon gång mellan 2022 och 2025."*
- **Ny:** `llm-bedomarreliabilitet-spannet-030-080` (2026-07-28): *"samstämmighetsindex ... mestadels mellan 0,30 och 0,80"* - forskningssyntes över **65 studier januari 2022 - augusti 2025**, alltså exakt samma tidsfönster som den gamla noten kallar ett strukturellt skifte.
- **Typ:** motsäger generaliseringen, föråldrar formuleringen.
- **Substans:** den gamla sidan bygger på en enda studie (Yavuz m.fl., 15 EFL-lärare, ICC 0,947-0,972). Den nya syntesen placerar den i den övre svansen av en bred fördelning, uppnådd med *"specialiserade och finjusterade system snarare än generella chattmodeller"*. Den gamla noten nämner inte self-enhancement bias, verbositetsbias eller proportionell bias, som alla dokumenterats sedan dess.
- **Konsekvens:** `rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen` (concept, permanent) länkar till den gamla noten under rubriken *"AI som kalibreringspartner"*. Rekommendationen *"be AI bedöma samma fem svar mot din rubrik och jämför"* står kvar - men den är nu villkorad av att man inte vet var i spannet 0,30-0,80 man befinner sig utan att mäta.

### M2. Hybridfeedbackens ordning är ankringens ordning

- **Befintlig:** `hybrid-feedback-ai-plus-larare-overtraffar-bada-ensamma` (2026-04-12): *"AI ger omedelbar, skalbar förstapass-feedback. Läraren ger djupare, kontextualiserad uppföljning"* och *"läraren får en sammanfattning av vilka elevsvar som behöver mänsklig uppföljning"*.
- **Befintlig:** `tutor-copilot-ai-stodjer-svagare-larare-mest` (2026-04-12): *"Ett 'lärar-CoPilot'-läge där AI föreslår feedback som läraren kan redigera och godkänna innan den når eleven kan vara kraftfullare än direkt AI-till-elev-feedback."*
- **Ny:** `automation-bias-hos-larare-experimentellt-bekraftad` (2026-07-28): *"Human-in-the-loop är inte ett skydd i sig ... Skyddet ligger inte i att du är där, utan i vilken ordning du ser saker."* Du, Liu & Xian 2026, N = 214, samma uppsats, ηp² = 0,579-0,745.
- **Typ:** motsäger sekvensen, inte hybridmodellen som sådan.
- **Substans:** båda de befintliga sidorna rekommenderar uttryckligen den ordning där läraren möter maskinens förslag först. Experimentet visar att en osäker maskinutsaga presenterad med visuell auktoritet förklarar över hälften av variationen i lärarens bedömning. Hybridmodellens *effekt* är inte ifrågasatt; dess *ordningsföljd* är det.
- **Skärpning från deskilling-hållet:** `tutor-copilot` argumenterar att AI kompenserar för svagare ämnesspecifik feedbackkompetens (upp till 9 procentenheter för lägre bedömda handledare). `deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data` (2026-07-28) och `Den tysta bedömarkunskapen är viktigare än tydligare kriterier` (2026-04-13) säger båda att just den kompetensen bara underhålls genom att utövas. Att kompensera för den kan alltså vara detsamma som att låta den atrofiera. Ingen av positionerna är belagd - men motsättningen är verklig och bör stå i noten.

### M3. Henrekson-tidslinjen har flyttat tre år - och Anders ämnen ingår inte

- **Befintlig:** `henrekson-slutprov-loser-ai-validitet-implicit` (2026-05-21): *"implementering 2028"*, *"2028-implementering = ~2 år av 'mellanperiod'"*.
- **Befintlig:** `kontraintuitiva-insikter-ai-sakra-examinationer-2026` (2026-05-21), praktisk hållning punkt 5: *"Vänta in Henrekson 2028 strategiskt - kalibrera kurspraktiken mot det kommande slutprovsformatet."* Denna formulering är också citerad ordagrant i `MOC - Bedömning och betygssättning` (rad 167).
- **Ny:** `sverige-valde-manskliga-bedomare-framfor-ai-rattning` (2026-07-28): *"nytt betygssystem successivt från 2028, första nationella slutproven 2029, meritvärden baserade på slutprovsresultat 2031"* och *"Att 'vänta på reformen' är inte ett hållbart svar på AI-frågan i dina egna kurser."*
- **Typ:** föråldrar tidslinjen, motsäger den praktiska hållningen.
- **Substans:** mellanperioden är 2026-2031, inte 2026-2028. Dessutom, och viktigare: central rättning hösten 2026 gäller **uppsatsdelarna i svenska, svenska som andraspråk kurs 3 och engelska kurs 6**. Samhällskunskap och historia ingår inte i första omgången. Rådet "kalibrera mot det kommande slutprovsformatet" har alltså inget format att kalibrera mot i Anders ämnen, och har inte det på flera år. Detta underminerar den befintliga MOC:ens sammanfattande praktiska hållning på en punkt.

### M4. Intern motsägelse i den nya batchen: när gäller högriskreglerna?

- `eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare` (2026-07-28): *"fristående bilaga III-system (skolans bedömnings- och antagningssystem) 2 december 2027"*, efter Digital Omnibus med rådets slutliga klartecken **2026-06-29** (primärkälla angiven).
- `vad-far-en-svensk-larare-mata-in-i-ett-ai-verktyg` (2026-07-28): *"högriskkraven börjar gälla 2 augusti 2026"*.
- `sverige-valde-manskliga-bedomare-framfor-ai-rattning` (2026-07-28): *"AI-förordningens klassning av system som utvärderar läranderesultat som högrisk från 2 augusti 2026"*.
- Befintliga sidor med samma överspelade datum: `eu-ai-act-quiz-plattform-hogrisk-klassificering` (2026-04-12, hel tidslinjetabell) och `ai-fusk-detektion-ar-opalitlig-och-diskriminerande` (2026-04-11: *"fullt enforceable från augusti 2026"*).
- **Typ:** motsäger, med föråldrande verkan på två befintliga sidor.
- **Substans:** fyra sidor säger augusti 2026, en säger december 2027. Endast EU-noten anger beslutsdatum och primärkälla. Policy-changeloggen bekräftar att korrigeringen var avsedd (*"korrigerar tidslinjen"*) - men Sverige-agenten arbetade parallellt och kände inte till den. Detta ska rättas i båda riktningar, annars sprider sig fel datum vidare. Notera att `vad-far-en-svensk-larare...` bygger ett helt argument på att kraven träder i kraft om en vecka.

### M5. "Ett av flera signaler" är precis vad experimentdeltagarna trodde

- **Befintlig:** `detektionsparadigmets-sammanbrott-2024-2026` (2026-05-21): *"Använd detektion bara som ett av flera signaler i en pedagogisk korrigering - som danska Danske Gymnasier rekommenderar för förstagångsfusk."*
- **Ny:** `automation-bias-hos-larare-experimentellt-bekraftad` (2026-07-28): *"Rör aldrig AI-detektionssiffror i betygsunderlag ... Det gäller även om du 'bara tar den som en signal bland flera' - det var precis vad deltagarna i experimentet trodde att de gjorde."*
- **Typ:** motsäger ett konkret handlingsråd.
- **Substans:** den befintliga sidan gör ett rimligt antagande om att en människa kan vikta en opålitlig signal lågt. Experimentet 2026 mäter att hon inte kan. Effektstorlekarna (ηp² 0,579-0,745) är så stora att en detektionssiffra i praktiken sätter betyget. Den befintliga sidans övriga slutsatser står oförändrade - det är just det sista rådet som faller.

---

## Del 2 - Verifierade kopplingar per typ

### Stärker

**K1. Svensk bedömningsforskning förutsåg AI:ns biasprofil (lead:ens hypotes 3 - bekräftad).**
`Lärarens ämneskunskap är en förutsättning för valid bedömning` (2026-04-13): *"Ytorna - text-längd, antal källhänvisningar, formuleringskomplexitet - är precis det som AI kan producera, vilket gör ytbaserad bedömning dubbelt problematisk 2026."*
`llm-bedomarreliabilitet-spannet-030-080` (2026-07-28): *"GPT:s överensstämmelse med mänskliga bedömare är starkast för ordförråd och struktur ... verbositetsbias - längre svar premieras."*
Den svenska noten identifierade i april vilka ytmarkörer en modell skulle premiera; syntesen i juli mätte att den gör det. Det är inte samma påstående sagt två gånger - det är en förutsägelse och dess utfall. Detta är den skarpaste bekräftelsen av hypotesen.

**K2. Tyst bedömarkunskap och deskilling är samma sats från motsatta håll.**
`Den tysta bedömarkunskapen är viktigare än tydligare kriterier` (2026-04-13): *"exemplen byggs upp genom år av erfarenhet, kollegiala samtal och återkommande möten med elevprestationer."*
`deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data` (2026-07-28): *"Att bedöma om ett historiskt resonemang håller ... den färdigheten underhålls bara genom att du faktiskt bedömer elevtexter regelbundet."*
Den svenska forskningen säger vad som **bygger** bedömarkompetensen; den kritiska AI-forskningen säger vad som **eroderar** den. Samma mekanism, oberoende härledd. Deskilling-noten är dessutom skarpare än sin egen litteratur på en punkt som den svenska traditionen redan hade: risken är inte att sluta kunna göra jobbet utan att sluta kunna bedöma när det är dåligt gjort - vilket är exakt vad tyst kunskap är.

**K3. Selwyns reparationsarbete har sin svenska empiri i vaultet sedan mars.**
`ai-genererade-lektionsplaneringar-systematisk-svaghet` (2026-03-07, n = 310 AI-genererade sh-lektioner): *"90 % av aktiviteterna fokuserade på lägre ordningens tänkande"*, *"över 94 % av aktiviteterna saknade mångsidiga perspektiv"*.
`tidsbesparingen-25-minuter-mot-59-timmar` (2026-07-28), Selwyn m.fl. 2025 (27 australiska och 30 **svenska** lärare): *"det omfattande arbetet med att granska, reparera och göra om AI-output som lärare bedömer som undermålig ... inte beror på bristande promptningsförmåga utan avslöjar verktygens pedagogiska begränsningar."*
`ai-flyttar-arbetsbordan-snarare-an-minskar-den` (2026-07-28): *"En AI-genererad översikt av mellankrigstiden som ser rimlig ut kräver mer läsning för att godkännas än den sparade i skrivande."*
CITE-studien kvantifierar defekten specifikt i samhällskunskap; Selwyn mäter arbetet med att laga den; arbetsbördenoten drar den ämnesspecifika slutsatsen. Kedjan är komplett i vaultet men helt olänkad. **Detta är den mest värdefulla saknade länken i hela genomgången.**

**K4. Kritisk ignorering av leverantörsdrivna nätverk är källkritik tillämpad på läraren själv.**
`leverantorsdrivna-pseudo-communities-och-ambassadorsprogram` (2026-07-28): *"Detta är ett källkritiskt problem av precis den sort Anders redan undervisar om - och det gäller honom själv som mottagare."*
`lararfortbildning-digitalt-sarbarhetsgap` (2026-03-22): *"Science (2025) fann att lärare och rektorer var mer sårbara för deepfake-vetenskapsinnehåll än elever."*
Två oberoende mätningar av samma professionella sårbarhet, 2025 och 2026. Den nya noten ger dessutom tre operativa test (namn, titel, har någon publicerat "vi slutade använda det") som är en direkt tillämpning av `kritisk-ignorering-tredje-kompetensen`.

### Specificerar

**K5. Muntliga prov och LLM ligger i samma reliabilitetsspann - och lösningen är densamma.**
`muntliga-prov-inter-rater-reliabilitet-problem` (2026-05-21): *"Cohen's κ mellan 0,17 och 0,54 ... tydligt under 'good'-tröskeln 0,70."*
`llm-bedomarreliabilitet-spannet-030-080` (2026-07-28): *"QWK 0,30 är dålig samstämmighet, i praktiken oanvändbar för högriskbedömning."*
`rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen`: *"Utan strukturerad rubrik, ankar-exempel och rater-träning hamnar inter-rater-reliabilitet i tolkande ämnen typiskt på 0,50 till 0,70 ... Med kalibrering når den .92+."*
Slutsatsen som ingen av de tre sidorna drar: **skiljelinjen går inte mellan människa och maskin utan mellan kalibrerad och okalibrerad bedömning.** Muntliga prov, LLM-bedömning och okalibrerad lärarrättning ligger alla i samma band. Det är ett starkt argument för att ankarexempel är den gemensamma lösningen på tre problem vaultet hittills behandlat separat - och en varning mot att rekommendera muntligt som AI-säkring med hänvisning till reliabilitet.

**K6. De facto-förskjutningen har blivit formell reform - men inte i sh och hi.**
`Övervakade klassrumsprov blir primärt betygsunderlag när AI rubbar hemuppgifter` (2026-04-13): *"Utan att det har fattats något formellt beslut har svensk gymnasieskola under 2024-2026 rört sig tillbaka mot övervakade klassrumsprov"* och *"Muntligt framförande har också fått tyngre viktning i nationella provet i svenska just för att motverka AI-sårbarheten."*
`sverige-valde-manskliga-bedomare-framfor-ai-rattning` (2026-07-28): central rättning av uppsatsdelarna i svenska, sva 3 och engelska 6 från hösten 2026; 3 500 certifierade bedömare, 400 000 prestationer per år fullt utbyggt 2028.
Beslutet är nu fattat, i just de ämnen den gamla noten pekade på - och konsekvensen för Anders är att likvärdighetsproblemet i hans ämnen förblir hans eget längre.

**K7. Lesson study har svaret på Co-Labs egen svaghet.**
`co-lab-modellen-roterande-kollegialt-ai-labb` (2026-07-28), egen spänning: *"En grupp av självvalda intresserade kan lika gärna bekräfta varandra som granska varandra, även med en utvärderande fråga."*
`lesson-study-professionellt-larande-planering` (2026-03-07): *"Observation fokuserar på elevers lärande, inte lärarens beteende"* och CLR-kravet *"Kunnig extern kommentator: extern specialist ger strukturerad reflektion på observationerna."*
Lesson study-litteraturen har två strukturella motmedel mot självbekräftelse som Co-Lab saknar. Kombinerat med `promptbibliotek-ar-faltets-svagaste-led` (*"Det som ska delas är bedömningsuppgifter, inte prompts"*) blir slutsatsen konkret: lesson study-cykeln är formatet för att dela bedömningsdesigner, eftersom den redan kräver en forskningsfråga om elevlärande och observation av utfallet. Co-Lab länkar till lesson study; den omvända länken saknas.

**K8. Trafikljus är AIAS i gymnasieupplösning - och ärver AIAS svaghet.**
`aias-perkins-furze-skala-fem-nivaer` (2026-05-21): *"Skalan är diskursiv, inte strukturell - och Corbin/Dawson/Liu skulle säga att den därför är otillräcklig på sig själv"*, plus varningen för *"AIAS-kapitulation"*.
`skolor-som-skriver-egna-ai-regler-trafikljusmodellen` (2026-07-28): *"AIAS nivå 1 motsvarar rött, nivå 2-3 gult, nivå 4-5 grönt"* och *"Gult är den svåra färgen."*
Konsistent, men den nya noten tillför två saker AIAS-sidan saknar: en upplösning som faktiskt går att införa i en enskild kurs utan skolbeslut, och observationen att gult utan specifikation läses som grönt av halva klassen. Det är den praktiska felmoden i AIAS nivå 2-3 som AIAS-noten bara beskriver abstrakt som "verifierbarhetsproblem".

### Överför till annan domän

**K9. Vaultet hade motmedlet mot automation bias - men bara för eleven.**
`feedback-literacy-gap-elever-saknar-formaga-bedomma-ai-feedback` (2026-04-12): *"Elever är mindre kritiska när de utvärderar AI-genererad feedback än mänsklig feedback. De förlitar sig på källperception ('det är AI, det är säkert korrekt') snarare än innehållsanalys."*
`metakognitiv-stallning-sjalvbedomning-fore-ai-feedback` (2026-04-12), designprincip 1: *"Krav självbedömning före AI-feedback - eleven förutsäger sin egen prestation/kvalitet innan feedbacken visas."*
`automation-bias-hos-larare-experimentellt-bekraftad` (2026-07-28): *"Konkret designregel: bilda din egen bedömning innan du ser AI:s ... är den enda kända motåtgärden mot ankringen."*
Identisk mekanism, identiskt motmedel, andra sidan av katedern. Vaultet har sedan april 2026 en färdig designprincip för elevens ankringsproblem och har aldrig applicerat den på lärarens. Detta är den mest direkt handlingsbara överföringen i hela rapporten - se även Del 3.

**K10. Övermodsstudien och efficiency-gain-illusionen är samma kalibreringsgap.**
`overmod-efter-kallkritikundervisning-nordisk-studie` (2026-03-22): *"vissa elever utvecklade övermod - de trodde att de var effektiva faktakollare utan att faktiskt visa dessa färdigheter"*; motmedel 1: *"Kalibrerings-övningar - para ihop självskattad säkerhet med faktisk prestation så elever ser gapet."*
`tidsbesparingen-25-minuter-mot-59-timmar` (2026-07-28), Yu m.fl. 2026 (N = 2 691): *"människor både underskattar hur mycket de använder AI och överskattar hur mycket tid den sparar - och att tidigare AI-användning förstärker felkalibreringen"*; motmedel: *"Mät din egen tid innan du tror på din egen skattning."*
Samma metakognitiva felkalibrering, samma prescription. Den nordiska studien mäter det hos eleven efter undervisning; Yu m.fl. mäter det hos den vuxne användaren och visar att det **förvärras med användning**. `MOC - Bedömning och betygssättning` har redan en tvärdomänbrygga (Brygga 3) som inkluderar övermodsnoten - den nya noten hör hemma där.

**K11. Equity-paradoxen flyttar från elevens tillgång till lärarens vägransrätt.**
`ai-som-accommodation-paradox` (2026-05-21): *"ju mer du AI-säkrar för att skydda integriteten, desto mer riskerar du att skada inkluderingen"* och *"AI som accommodation kan i sin tur bli orättvist om välsituerade elever har bättre AI-verktyg."*
`ratten-att-avsta-fran-ai-verktyg` (2026-07-28): *"Om AI-stöd faktiskt förbättrar undervisningen och några lärare avstår, blir skillnaden mellan elevgrupper större - och det är inte eleverna som väljer. AEU:s argument för statliga subventioner bygger på precis den logiken."*
Strukturellt identisk paradox, flyttad ett steg uppåt i beslutskedjan. Ingen av noterna ser den andra. Den kombinerade poängen är obekväm och värd att formulera: både generella AI-förbud och generell vägransrätt fördelar sina kostnader på elever som inte varit part i beslutet.

**K12. Transparenskravet har fått experimentell grund.**
`kontrovers-beyond-impartiality-epistemic-affective` (2026-04-21, via `kontrovers-tre-paradigmskiften-2024-2025`): skifte 3, transparens slår neutralitet.
`relationen-larare-elev-lararens-eget-ai-bruk-ar-omatt` (2026-07-28), randomiserat experiment N = 320: *"lärarens stöd åt AI-genererat innehåll förändrade signifikant elevernas uppfattning om AI-kompetens, akademisk integritet och adoptionsavsikt"* - trust transfer.
`autonomi-mot-mandat-den-verkliga-konfliktlinjen` (2026-07-28): *"Dubbelmoralen är värd att adressera öppet mot eleverna ... Eleverna upptäcker asymmetrin ändå, och outtalad blir den ett legitimitetsproblem."*
Kontroversdidaktiken argumenterade normativt för transparens. Trust transfer-experimentet ger den en mätt mekanism: läraren lånar ut sin trovärdighet till innehållet hon inte deklarerar. Det gör "säg att det är AI-genererat och att du granskat det" till en empiriskt motiverad handling, inte bara en hederlig.

### Föråldrar

Se M1, M3, M4. Sammanfattat: tre tidslinjer och en generalisering i befintliga sidor är överspelade av den nya batchen.

---

## Del 3 - Risker och krav för förmågeträningsbygget

Lead:ens hypotes 4. Detta är den mest handlingsnära delen och den behandlas separat. Alla punkter är verifierade mot både `Formagetraningens-utvecklingsplan-2026-07`, `Delfardighetstaxonomin-operationaliserad` och de nya noterna.

### R1 (KRAV, allvarligast). CLI-flödets ordningsföljd är ankringsvänlig

Utvecklingsplanen: *"Feedback genereras asynkront i lärarens CLI-flöde (`practice get-pending-feedback` / `practice submit-feedback`) ... Pending-svaret bär delfärdighetens kvalitetskriterier + feedbackreglerna som promptunderlag."*
`automation-bias-hos-larare-experimentellt-bekraftad`: *"Din förmågeträning är byggd så att servern aldrig anropar en LLM och att feedback passerar dig via CLI-flödet. Experimentet visar att en människa i loopen ändå ankras hårt av vad maskinen redan sagt."*
Flödet är konstruerat så att Anders möter modellens förslag i samma vy som elevsvaret. Åtgärd som följer av `metakognitiv-stallning-sjalvbedomning-fore-ai-feedback` princip 1, applicerad på läraren: dela `get-pending-feedback` i två steg, eller notera din egen bedömning av svaret innan förslaget öppnas. Detta är billigt nu och svårt att införa när banken vuxit.

### R2 (RISK, metodologisk). Stresstestet mätte sannolikt sig självt

Utvecklingsplanen, steg 3: *"52 syntetiska svar genom hela skarpa flödet, blind generering mot enbart payloaden, oberoende dömning. Resultat: 96 % rätt riktat 'Nästa steg'."*
`llm-bedomarreliabilitet-spannet-030-080`: *"Self-enhancement bias - LLM-baserad bedömning ger GPT-genererad text högre betyg än mänskligt skriven text."*
De 52 elevsvaren var LLM-genererade och bedömdes av en LLM. Self-enhancement bias är dokumenterad som en av fem systematiska bias i bedömarreliabilitetslitteraturen. 96 %-siffran är därmed inte överförbar till äkta elevsvar utan omprövning. Detta underkänner inte bygget - men det innebär att steg 3 inte har validerat det man tror att det validerat.

### R3 (RISK, skarpast för taxonomin). Verbositets- och proportionell bias träffar exakt N2-N3-språnget

`llm-bedomarreliabilitet-spannet-030-080`: *"Proportionell bias - mildare bedömning av svaga uppsatser, hårdare av starka ... den komprimerar skalan mot mitten och gör det svårare att skilja C från A än att skilja E från C."* Samt: *"Om ditt system premierar längre svar lär sig eleverna skriva längre, inte bättre."*
`Delfardighetstaxonomin-operationaliserad`, delfärdighet 4, typiska svagheter: *"Återberättelse i stället för vägning: eleven beskriver sin valda orsak utförligt men jämför aldrig - utförlighet maskerad som viktning."*
Modellen är dokumenterat benägen att belöna precis den svaghet taxonomin är byggd för att fånga, och dokumenterat sämst på att skilja de nivåer där N2-N3-språnget ligger. Taxonomins tre språng (från *att* till *hur*, från påstående till kriterium, från en linje till flera) är alla kvalitativa och längdneutrala - vilket är rätt konstruktion. Men det är ett skäl att explicit testa längdkänsligheten: samma resonemang i kort och lång form, samma "Nästa steg" förväntat.

### R4 (KRAV). Trust transfer kräver att flödet deklareras i förväg

`relationen-larare-elev-lararens-eget-ai-bruk-ar-omatt`: *"eleverna kommer att märka att feedbacken är delvis maskingenererad. Att i förväg berätta hur flödet fungerar ... är förmodligen det enda som skyddar mot att en enda dålig återkoppling läses som 'läraren bryr sig inte längre'."*
Utvecklingsplanen har en flaggad förtroenderisk (*"Bedömningskarantänens trovärdighet ... bevakas via svarskvaliteten"*) men inget om att deklarera AI-inblandningen. Det är en ny punkt till klassrumsritualen i avsnitt 2, inte till tekniken.

### R5 (KRAV, mätning). Den validering som saknas

`llm-bedomarreliabilitet-spannet-030-080`: *"Testa samstämmigheten i din egen kontext innan du litar på den. Konkret: bedöm 20 elevsvar själv, låt flödet bedöma samma 20, och jämför. Utan den mätningen vet du inte var i spannet 0,30-0,80 du befinner dig."*
Detta är den mätning steg 3 ersatte med syntetiska svar. Den kan göras billigt under de första veckorna av HT26 med båda Hi 1b-grupperna, och den är också svaret på R2.

### R6 (KONTEXT). Bygget sker i ett dokumenterat evidensvakuum

`ai-stod-i-tolkande-amnen-konstaterad-evidenslucka`: *"Att träna avgränsade delfärdigheter i historia med exemplars är exakt det ingen har utvärderat. Det betyder att du bygger i ett tomrum - vilket är både en möjlighet och ett skäl att mäta själv."* Plus OECD: *"80 procent kunde efteråt inte minnas vad de hade skrivit om."*
Detta är inte en invändning mot bygget - det är ett argument för att exemplar-efter-försök-konstruktionen (som tvingar eleven att först producera) är rätt designval, eftersom det är produktion utan minnesspår som OECD identifierar som nollresultatet.

### R7 (LEGITIMITET). Färdigt argument för bedömningskarantänen

`ai-far-inte-ensamt-avgora-lararutvardering`: *"Om AI-data inte får ensam avgöra ett omdöme om en lärare, är argumentet för att den ska få avgöra ett omdöme om en elev inte starkare."*
`bedomning-lagst-i-alla-matningar-professionens-egen-grans`: *"Att du byggt förmågeträningen så att servern aldrig anropar en LLM och att feedback går via ett CLI-flöde där du är i loopen är exakt den gränsdragning CHI-studien beskriver som professionsbevarande."*
Utvecklingsplanens "Insyn med bedömningskarantän" har därmed både internationellt forskningsstöd (CHI 2026, TALIS 2024: bedömning lägst i alla mätningar) och en färdig symmetriformulering att använda mot kollegor och skolledning.

### R8 (REGULATORISKT, oklart). Karantänen är också en klassificeringsfråga

`eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare`: *"Formativ AI-feedback som inte är kopplad till betyg argumenteras ofta falla utanför högriskklassificeringen; ett system som 'evaluerar lärandemål' gör det inte. Designvalet är regulatoriskt avgörande, inte bara pedagogiskt."*
Bedömningskarantänen är alltså inte bara pedagogiskt motiverad utan sannolikt det som håller survey-plattformen utanför bilaga III 3(b). Men datumet när det spelar roll är omtvistat inom den nya batchen - se M4.

---

## Del 4 - Föreslagna länktillägg i befintliga sidor

Ingen av dessa har utförts. Ordnade efter angelägenhet.

### `wiki/sources/2026-04-15 Frågedesign för lärande - quiz examen undervisning/ai-bedomning-av-essaer-nar-manniskoniva-icc-094.md`
- Lägg till `[[llm-bedomarreliabilitet-spannet-030-080]]` **med en varningsrad i brödtexten**, inte bara i Kopplingar. Sidans huvudpåstående är motsagt (M1).
- Överväg att märka rubriken eller ingressen med att ICC-siffran gäller en studie i den övre svansen av en fördelning på 0,30-0,80.

### `wiki/sources/2026-04-12 Retrieval Practice och AI Feedback i undervisning/hybrid-feedback-ai-plus-larare-overtraffar-bada-ensamma.md`
- `[[automation-bias-hos-larare-experimentellt-bekraftad]]` - ordningsföljden i den rekommenderade modellen är ankringsvänlig (M2).
- `[[metakognitiv-stallning-sjalvbedomning-fore-ai-feedback]]` - motmedlet finns redan i vaultet.
- `[[bedomning-lagst-i-alla-matningar-professionens-egen-grans]]`

### `wiki/sources/2026-04-12 Retrieval Practice och AI Feedback i undervisning/tutor-copilot-ai-stodjer-svagare-larare-mest.md`
- `[[automation-bias-hos-larare-experimentellt-bekraftad]]`
- `[[deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data]]` - spänningen mellan att kompensera för och att underhålla ämnesspecifik bedömarkompetens (M2, andra delen).
- `[[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]]`

### `wiki/sources/2026-04-12 Retrieval Practice och AI Feedback i undervisning/eu-ai-act-quiz-plattform-hogrisk-klassificering.md`
- `[[eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare]]` **plus en rad ovanför tidslinjetabellen** om att den är överspelad av Digital Omnibus (M4). Tabellen är sidans mest citerbara del och är fel.
- `[[vad-far-en-svensk-larare-mata-in-i-ett-ai-verktyg]]`

### `wiki/sources/2026-04-12 Retrieval Practice och AI Feedback i undervisning/skolverket-imy-riktlinjer-ai-i-skolan-2025.md`
- `[[vad-far-en-svensk-larare-mata-in-i-ett-ai-verktyg]]` - uppdaterar hela regelbilden till 2026 (Norrköping, Östersundsbeslutet, IMY:s prioriteringar 2026). Den nya noten anger själv att den uppdaterar denna.
- `[[norden-har-nationella-riktlinjer-sverige-har-rad]]`

### `wiki/sources/2026-05-21 AI-säkra examinationsformer/detektionsparadigmets-sammanbrott-2024-2026.md`
- `[[automation-bias-hos-larare-experimentellt-bekraftad]]` - rådet "ett av flera signaler" faller (M5).
- `[[sverige-valde-manskliga-bedomare-framfor-ai-rattning]]`

### `wiki/sources/2026-05-21 AI-säkra examinationsformer/henrekson-slutprov-loser-ai-validitet-implicit.md`
- `[[sverige-valde-manskliga-bedomare-framfor-ai-rattning]]` **plus datumkorrigering i brödtexten**: slutprov 2029, meritvärden 2031, central rättning av sve/sva/eng redan hösten 2026 (M3).
- `[[far-ai-ratta-och-satta-betyg-internationell-jamforelse]]`

### `wiki/sources/2026-05-21 AI-säkra examinationsformer/kontraintuitiva-insikter-ai-sakra-examinationer-2026.md`
- `[[sverige-valde-manskliga-bedomare-framfor-ai-rattning]]` - punkt 5 i "Praktisk hållning" ("Vänta in Henrekson 2028 strategiskt") behöver revideras (M3).
- `[[llm-bedomarreliabilitet-spannet-030-080]]` - hör hemma bredvid punkt 6 om muntliga prov; samma spann (K5).
- `[[automation-bias-hos-larare-experimentellt-bekraftad]]` - kandidat till ett åttonde kontraintuitivt fynd: human-in-the-loop skyddar inte i sig.

### `wiki/sources/2026-05-21 AI-säkra examinationsformer/muntliga-prov-inter-rater-reliabilitet-problem.md`
- `[[llm-bedomarreliabilitet-spannet-030-080]]` - samma reliabilitetsband (K5).

### `wiki/sources/2026-05-21 AI-säkra examinationsformer/ai-som-accommodation-paradox.md`
- `[[ratten-att-avsta-fran-ai-verktyg]]` - samma equity-paradox på lärarsidan (K11).
- Notera också att sidans Kopplingar innehåller en trasig länk: `[[Lärarnas ser likvärdighetsproblemet tydligare än den offentliga debatten antyder]]` - filen heter `Lärarna ser ...`.

### `wiki/sources/2026-05-21 AI-säkra examinationsformer/aias-perkins-furze-skala-fem-nivaer.md`
- `[[skolor-som-skriver-egna-ai-regler-trafikljusmodellen]]` - gymnasieupplösningen av samma idé (K8).
- `[[cccc-institutionaliserar-ratten-att-vagra-ai]]` - nivå 1 som vägransrättens uppgiftsform.

### `wiki/sources/2026-05-21 AI-säkra examinationsformer/corbin-strukturella-vs-diskursiva-bedomningsandringar.md`
- `[[skolor-som-skriver-egna-ai-regler-trafikljusmodellen]]`
- `[[promptbibliotek-ar-faltets-svagaste-led]]` - "det som saknas är delade bedömningsdesigner" är Corbins argument uttryckt som en kollegial infrastrukturfråga.

### `wiki/sources/2026-05-21 AI-säkra examinationsformer/nordisk-jamforelse-danmark-norge-sverige-ai-prov.md`
- `[[norden-har-nationella-riktlinjer-sverige-har-rad]]` - den nya noten anger uttryckligen att de kompletterar varandra och inte överlappar. Korshänvisningen finns bara i en riktning.
- `[[sverige-valde-manskliga-bedomare-framfor-ai-rattning]]` - "den svenska väntan på 2028" behöver uppdateras (M3).

### `wiki/sources/2026-04-13 Summativ bedömning och betygssättning (svensk kontext)/Den tysta bedömarkunskapen är viktigare än tydligare kriterier.md`
- `[[deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data]]` (K2)
- `[[automation-bias-hos-larare-experimentellt-bekraftad]]`
- `[[llm-bedomarreliabilitet-spannet-030-080]]`

### `wiki/sources/2026-04-13 Summativ bedömning och betygssättning (svensk kontext)/Lärarens ämneskunskap är en förutsättning för valid bedömning.md`
- `[[llm-bedomarreliabilitet-spannet-030-080]]` - sidans påstående om ytmarkörer bekräftades empiriskt (K1). Detta är den enskilt mest tillfredsställande länken i genomgången.
- `[[lararnas-upphovsratt-som-ai-traningsdata]]` - det som matas in i verktygen är just denna kunskap.

### `wiki/sources/2026-04-13 Summativ bedömning och betygssättning (svensk kontext)/Övervakade klassrumsprov blir primärt betygsunderlag när AI rubbar hemuppgifter.md`
- `[[sverige-valde-manskliga-bedomare-framfor-ai-rattning]]` (K6)
- `[[detektionsparadigmets-sammanbrott-2024-2026]]`

### `wiki/sources/2026-03-07 Lektionsplaneringsramverk/ai-genererade-lektionsplaneringar-systematisk-svaghet.md`
- `[[tidsbesparingen-25-minuter-mot-59-timmar]]` - Selwyns reparationsarbete (K3).
- `[[ai-flyttar-arbetsbordan-snarare-an-minskar-den]]`
- `[[ai-stod-i-tolkande-amnen-konstaterad-evidenslucka]]` - MLA 2025 om bias mot dominerande narrativ är samma fynd som sidans 94-procentssiffra.
- `[[ansvaret-flyttar-aldrig-fran-lararen-den-globala-normkarnan]]`
- Notera: sidans Kopplingar pekar på fyra arkiverade eller icke-existerande sidor (`Sex-fas lektionsstruktur...` är arkiverad enligt index.md). Bör städas i samma vända.

### `wiki/sources/2026-03-07 Lektionsplaneringsramverk/lesson-study-professionellt-larande-planering.md`
- `[[co-lab-modellen-roterande-kollegialt-ai-labb]]` (K7)
- `[[promptbibliotek-ar-faltets-svagaste-led]]`

### `wiki/sources/2026-03-22 Källkritik desinformation och AI-literacy/lararfortbildning-digitalt-sarbarhetsgap.md`
- `[[fortbildningsluckan-ai-som-amne-inte-ai-i-amnet]]` - den svenska 2026-motsvarigheten.
- `[[kompetensramverk-och-fortbildning-normativt-inte-effektprovat]]` - ingen RCT finns av något AI-fortbildningsprogram.
- `[[leverantorsdrivna-pseudo-communities-och-ambassadorsprogram]]` (K4)
- `[[automation-bias-hos-larare-experimentellt-bekraftad]]`
- Notera: sidans två befintliga kopplingar (`[[Deepfakes - larare ar mer sarbara an elever]]`, `[[Skolinspektionen 2024 - 25 av 30 gymnasieskolor brister i källkritikundervisning]]`) matchar inte filnamnen i sessionen (kebab-versioner). Trasiga.

### `wiki/sources/2026-03-22 Källkritik desinformation och AI-literacy/metakognitiv-lathet-ai-verktyg-risk.md`
- `[[deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data]]` - lärarmotsvarigheten; den nya noten länkar hit men inte tvärtom.
- `[[ai-stod-i-tolkande-amnen-konstaterad-evidenslucka]]` - OECD:s "mirage of false mastery" är samma fenomen med terminologi och siffror (48 % / 17 % / 80 %).

### `wiki/sources/2026-03-22 Källkritik desinformation och AI-literacy/overmod-efter-kallkritikundervisning-nordisk-studie.md`
- `[[tidsbesparingen-25-minuter-mot-59-timmar]]` - efficiency-gain illusion som lärarversion (K10).

### `wiki/sources/2026-04-12 Retrieval Practice och AI Feedback i undervisning/feedback-literacy-gap-elever-saknar-formaga-bedomma-ai-feedback.md` och `.../metakognitiv-stallning-sjalvbedomning-fore-ai-feedback.md`
- Båda: `[[automation-bias-hos-larare-experimentellt-bekraftad]]` (K9). Designprincip 1 i den senare är den färdiga motåtgärden, oöversatt till lärarsidan.

### `wiki/sources/2026-04-11 Pedagogiska appar - design av lärappar/ai-fusk-detektion-ar-opalitlig-och-diskriminerande.md`
- `[[automation-bias-hos-larare-experimentellt-bekraftad]]` - ytterligare ett skäl att inte bygga detektion: den påverkar bedömaren även när hon vet att den är opålitlig.
- `[[eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare]]` - "fullt enforceable från augusti 2026" är överspelat (M4).

### `wiki/concepts/rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen.md`
- `[[llm-bedomarreliabilitet-spannet-030-080]]` - villkorar rekommendationen "be AI bedöma samma fem svar mot din rubrik" (M1) och ger sidan en tredje tillämpning: kalibrering som gemensam lösning för muntligt, LLM och okalibrerad lärarrättning (K5).
- `[[automation-bias-hos-larare-experimentellt-bekraftad]]` - kalibrering mot egna ankare före maskinens förslag.

### `wiki/topics/MOC - Bedömning och betygssättning.md`
Störst behov av redigering av alla sidor i vaultet.
- Sektion 2 och 7b: uppdatera Henrekson-tidslinjen och den avslutande praktiska hållningen (M3).
- Sektion 7b: lägg till en ny undersektion för de nya bedömningsnära noterna - `[[llm-bedomarreliabilitet-spannet-030-080]]`, `[[automation-bias-hos-larare-experimentellt-bekraftad]]`, `[[bedomning-lagst-i-alla-matningar-professionens-egen-grans]]`, `[[far-ai-ratta-och-satta-betyg-internationell-jamforelse]]`, `[[sverige-valde-manskliga-bedomare-framfor-ai-rattning]]`, `[[deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data]]`.
- Sektion 9, Brygga 3 (strukturell analys slår moralisk kritik): `[[tidsbesparingen-25-minuter-mot-59-timmar]]` hör hemma bredvid övermodsnoten (K10).
- Sektion 9: ny brygga värd att formulera - **kalibrering som gemensam lösning på tre reliabilitetsproblem** (muntligt, LLM, okalibrerad lärarrättning), se K5.

### `wiki/topics/MOC - Källkritik och digital kompetens.md`
- Sektion 6 (Lärare och profession) är den naturliga hemvisten för `[[automation-bias-hos-larare-experimentellt-bekraftad]]`, `[[leverantorsdrivna-pseudo-communities-och-ambassadorsprogram]]` och `[[fortbildningsluckan-ai-som-amne-inte-ai-i-amnet]]`.
- Sektion 4 (Svensk kontext): `[[svenska-policyomsvangningen-ai-i-skolan-2023-2026]]`, `[[skolverkets-lagesbild-2026-atta-av-tio-men-grundskolan]]`, `[[vad-far-en-svensk-larare-mata-in-i-ett-ai-verktyg]]`.
- Sektionen `Kopplingar till andra MOCs` pekar på `[[MOC - Evidensbaserad lektionsarkitektur]]` som är omdöpt till `[[MOC - Momentplaneringsramverket]]`. Trasig sedan 2026-05-24.

### `wiki/topics/MOC - Historiedidaktik och kontroversiella frågor.md`
- Sektion 7 (AI i historieundervisning): `[[amnesforeningarna-levererar-natverken-saknas]]` - kompletterar AHA-noten med antagandedatum, kommittéstruktur och fyndet att SO-/humanioranätverk saknas.
- Sektion 14 (AI och digital sårbarhet): `[[relationen-larare-elev-lararens-eget-ai-bruk-ar-omatt]]` (trust transfer) och `[[ai-stod-i-tolkande-amnen-konstaterad-evidenslucka]]`.
- Sektion 9 (Lärarens position): `[[autonomi-mot-mandat-den-verkliga-konfliktlinjen]]` hör hemma bredvid självcensurnoten - båda handlar om vad som styr lärarens handlingsutrymme när ingen formellt förbjudit något.
- **Substansiell notering:** AI i skolan klarar Hess-gaten som **öppen policyfråga** enligt `ramverk-momentdesign-utkast-3` nivå 1a. `svenska-ai-skoldebatten-fyra-positioner-och-ett-obekvamt-fynd` levererar fyra genuint konkurrerande positioner med autentiska debattartiklar i svensk fackpress - alltså en brottningskandidat, inte ett tippande läge. Det gör AI till undervisningsinnehåll i Sh1b på samma villkor som klassiska Hess-frågor, med den ovanliga egenskapen att både lärare och elever är part.

### `wiki/sources/2026-04-21 Historiedidaktik och kontroversiella fragor/aha-2025-ai-guidelines-historia-stodjer-ej-ersatter.md`
- `[[amnesforeningarna-levererar-natverken-saknas]]` - den nya noten länkar hit; omvänd länk saknas.
- `[[cccc-institutionaliserar-ratten-att-vagra-ai]]` - motsvarigheten för skrivämnena.

### `wiki/concepts/ramverk-momentdesign-utkast-3.md` och `wiki/topics/MOC - Momentplaneringsramverket.md`
Lead:ens hypotes 5. Ramverket har **ingen nod för uppgiftens AI-status**. Det är en verklig lucka, inte en påhittad:
- Nivå 5 deriverar form ur diskursmål, frågetyp och bedömningsmål. Ingen av de tre inputen fångar om uppgiften håller när eleven har generativ AI.
- `corbin-strukturella-vs-diskursiva-bedomningsandringar` (befintlig) ger testet: *"kan en elev producera ett godkänt svar med AI utan att jag märker det?"*
- `skolor-som-skriver-egna-ai-regler-trafikljusmodellen` (ny) ger den utfallsform som går att införa utan skolbeslut.
- `cccc-institutionaliserar-ratten-att-vagra-ai` (ny) ger villkoret: *"Rätten att vägra är i praktiken beroende av uppgiftsdesignen ... Många AI-integrerade uppgifter gör i praktiken vägran omöjlig."*
- `amnesforeningarna-levererar-natverken-saknas` (ny): AHA:s princip 4 om transparenta regler i kursplanen med citeringskrav.

**Konkret förslag:** en AI-statusnod på nivå 5, parallell med formvalet, med Corbins test som villkor och trafikljus som output. Den passar ramverkets logik: den är ett designbeslut med när-då-regel, den är bedömningsmål-relativ (rött krävs bara där bedömningsmålet mäter elevens egen produktion), och den kan bära en Formvalsprincip 5.

Två ytterligare noteringar:
- Ramverkets M-iv spårdokumentation i `momentplan.md` är redan den maskin som `policy-praktik-gapet-vi-reglerar-dar-larare-anvander-ai-minst` efterlyser (*"skriv din egen riktlinje för din egen praktik innan skolan skriver en åt dig"*).
- `/planera-moment` producerar sin output med AI-stöd. `ai-genererade-lektionsplaneringar-systematisk-svaghet` (90 % lägre ordningens tänkande, 94 % utan mångsidiga perspektiv) och `ansvaret-flyttar-aldrig-fran-lararen-den-globala-normkarnan` (*"Ett AI-genererat faktafel i ett arbetsblad är ditt faktafel"*) gäller alltså skillens egen produkt. 2026-03-07-notens lista "Behåll som läraransvar" är i praktiken en färdig granskningschecklista för skillen och bör vara det uttryckligen.

### `wiki/topics/Formagetraningens-utvecklingsplan-2026-07.md` och `wiki/topics/Delfardighetstaxonomin-operationaliserad.md`
Se Del 3 för substans. Länkar som bör in i avsnitt 7 (Risker) respektive i taxonomins avsnitt om AI-prompter:
- `[[automation-bias-hos-larare-experimentellt-bekraftad]]` (R1)
- `[[llm-bedomarreliabilitet-spannet-030-080]]` (R2, R3, R5)
- `[[relationen-larare-elev-lararens-eget-ai-bruk-ar-omatt]]` (R4)
- `[[ai-stod-i-tolkande-amnen-konstaterad-evidenslucka]]` (R6)
- `[[bedomning-lagst-i-alla-matningar-professionens-egen-grans]]` och `[[ai-far-inte-ensamt-avgora-lararutvardering]]` (R7)
- `[[eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare]]` (R8)
- `[[metakognitiv-stallning-sjalvbedomning-fore-ai-feedback]]` - befintlig sida, hittills olänkad från utvecklingsplanen trots att dess princip 1 redan är implementerad för eleven (exemplar efter försök) och saknas för läraren.

### `index.md`
- Ny sessionsrad: **2026-07-28 AI i lärararbetet - professionens organisering (40 noter)**. Sessionen passerar 15-noterströskeln och är MOC-kandidat, men innehållet fördelar sig naturligt på tre befintliga MOC:er (Bedömning, Källkritik, Historiedidaktik) plus utvecklingsplanerna. Rekommendation: **ingen egen MOC**. Skälet är att sessionens noter mest är kontext- och styrningskunskap kring domäner som redan har hubbar; en egen MOC skulle konkurrera med `MOC - Bedömning och betygssättning` om samma noter.
- Statistikblocket behöver räknas om (810 sidor mätta 2026-07-27, 40 nya).

---

## Del 5 - Undersökt men avfärdat

- **`motstandsrorelsen-fran-argument-till-havstanger` mot `MOC - Historiedidaktik`.** Frestande, men innehållet är påverkanskanaler och intresseorganisering i samhällskunskap, inte historiedidaktik eller kontroversdidaktik. Det är utmärkt lektionsmaterial och usel kunskapskoppling. Hör hemma i en framtida Sh1b-momentmapp under `output/`, inte i wiki-korslänkningen.
- **`nya-alliansen-2026-fack-foraldrar-forsiktiga-huvudman` mot `abrahamsson-norge-mobilforbud-60-procent-minskad-psykisk-ohalsa-flickor`.** Både handlar om skärmtid och föräldraopinion, men den norska studien mäter psykisk ohälsa efter mobilförbud och den nya noten beskriver en amerikansk koalitionsbildning. Ingen gemensam mekanism, bara gemensamt ämne. Avfärdad enligt strängheten i uppdraget.
- **`sydkorea-estland-obligatorium-versus-sekvens` mot `planering-undervisning-gapet-implementeringsfidelitet`.** Såg lovande ut (implementering, fidelitet). Vid läsning: den befintliga noten handlar om gapet mellan lärarens plan och lektionens genomförande, inte om policyimplementering på systemnivå. Olika analysnivåer, samma ord. Avfärdad.
- **`autonomi-mot-mandat` mot `sdt-interventioner-metaanalys-autonomi-storsta-effekt`.** Ordet "autonomi" betyder olika saker: SDT-autonomi är elevens upplevda självbestämmande som motivationsvariabel; lärarautonomi är professionens beslutsutrymme gentemot arbetsgivare. Ingen delad mekanism. Avfärdad trots att kopplingen ser given ut i en semantisk sökning - detta är precis den typ av falsk träff uppdraget varnade för.
- **`llm-bedomarreliabilitet` mot `iterativ-rubrikrefinering-mot-ai-hojer-kappa-fran-065-till-094`.** Behållen som svag och därför inte listad ovan: den befintliga noten är i sak förenlig med den nya (finjusterade system i övre svansen), men den delar den gamla essänotens generaliseringsproblem. Föreslås bara indirekt, via M1.
- **`promptbibliotek-ar-faltets-svagaste-led` mot `praktisk-prompt-mall-ai-feedback-quiz-plattform`.** Läst. Den befintliga noten är just ett promptbibliotek av det slag den nya noten kritiserar - men kritiken gäller *delade* bibliotek utan versionering, och vaultets frontmatter löser redan versioneringsproblemet (vilket den nya noten själv påpekar). Kopplingen är korrekt men trivial. Utelämnad.
- **`ai-flyttar-arbetsbordan` mot `lararens-eget-valbefinnande-paverkar-elevmotivation`.** Prövad: hypotesen var att lärarens arbetsbelastning skulle koppla till elevmotivation via välbefinnande. Marshall & Pressley-resultatet (AI minskar upplevd men inte faktisk arbetsbörda, via self-efficacy) gör kopplingen teoretiskt möjlig men den vilar på en enda opublicerad studie i ena änden. För tunn för att påstås. Noterad här som en hypotes värd att pröva om EI:s Asien-Stillahavsenkät publiceras.
- **Egen MOC för sessionen.** Övervägd och avrådd, se Del 4 under `index.md`.

---

## Vad som inte gick att avgöra

- **Vilket datum som gäller för AI-förordningens högriskkrav** (M4). Rapporten kan konstatera att den nya batchen är intern motstridig och att EU-noten är den enda med angiven primärkälla och beslutsdatum. Att avgöra sakfrågan kräver att någon öppnar rådets pressmeddelande från 2026-06-29. Detta bör göras innan `vad-far-en-svensk-larare-mata-in-i-ett-ai-verktyg` används som underlag för lokal argumentation, eftersom noten bygger ett argument på att kraven träder i kraft inom en vecka.
- **Om EEF:s blinda expertpanel motsäger CITE-studien.** `tidsbesparingen-25-minuter-mot-59-timmar` redovisar att *"en expertpanel bedömde materialkvaliteten blint och fann ingen märkbar skillnad mellan grupperna"*, medan `ai-genererade-lektionsplaneringar-systematisk-svaghet` fann 90 % lägre ordningens tänkande i råa AI-planer. Måtten är sannolikt olika (färdigt lärarbearbetat material i NO mot råa AI-planer i samhällskunskap), men de bör inte citeras bredvid varandra utan att skillnaden skrivs ut. Flaggad, inte löst.
