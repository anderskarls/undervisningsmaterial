---
created: 2026-07-19
updated: 2026-07-21
created_by: claude-fable-5
updated_by: claude-fable-5
agent_version: 04.26
type: topic
tags:
  - formagetraning
  - historia-1b
  - orsaksresonemang
  - survey-plattformen
  - utvecklingsplan
  - implementation
---

# Förmågeträningens utvecklingsplan 2026-07

Designbeslut från grilling-session 2026-07-19 inför läsåret 2026/2027. Syftet: bygga övningsmaterial så att elever kan träna kursernas centrala förmågor i stället för att enbart stoffplugga inför prov. Pilot: **Historia 1b, orsaks- och konsekvensresonemang**, två nya grupper från kursstart.

> **Grundhållning:** Stoff och förmågor står inte i motsats - innehållet är förutsättningen för förmågorna. Problemet är att elevernas plugg *stannar* vid stoffet. Jfr [[retrieval-practice-som-dubbelt-formativt-verktyg]] och [[understanding-how-we-learn-sex-strategier]]: stoffdrill har fungerande verktyg; förmågedrill saknar dem helt.

---

## 1. Problemdiagnos

- Proven kräver förmågor; stoffpluggarna slår i taket och frågar efteråt "vad ska jag göra bättre?" - utan att ha övat förmågorna alls.
- Dubbel flaskhals: eleverna **vet inte vad förmågeövning är** (de har aldrig sett kvalitetsskillnaden mellan E- och A-resonemang på nära håll) och **det finns inget material** att öva på.
- Viktig designinsikt: återkoppling följer inte gratis av material. Ett stoffquiz har facit inbyggt; ett resonemang har det inte. Feedbackloopen måste designas in explicit.

## 2. Pedagogisk design

- **Feedback-ryggrad:** exempelsvar i nivåer (E/C/A med kommentarer) visas *efter* elevens eget försök - självbedömning mot modell, medan försöket är varmt. AI-återkoppling som förstärkning. Jfr [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]] - samma kalibreringslogik, riktad mot eleven själv.
- **Användningsmodell (hybrid med ramp):** förmågeträningen introduceras och körs obligatoriskt på lektion tills eleverna sett ritualen; därefter fritt tillgänglig i plattformen med låg friktion. Rent frivilligt material når bara toppskiktet; rent obligatoriskt gör läraren till permanent flaskhals.
- **Trappa, inte bara helövningar:** mikroövningar (5-15 min) på delfärdigheter är vardagsträningen; helövningen (provliknande resonemangsfråga) finns redan i momenten som crescendo. Deliberate practice-logik: isolera delfärdigheter, drilla, sätt ihop.
- **Stoffprincip:** ny delfärdighet övas på *bekant* stoff (förra momentet, vardagsexempel); känd delfärdighet flyttas till *aktuellt* stoff. Undviker dubbel kognitiv belastning (ny färdighet + nytt stoff samtidigt) och ger spaced retrieval av föregående moment på köpet. Jfr [[desirable-difficulty-sweet-spot-60-till-85-procent]].
- **Insyn med bedömningskarantän:** läraren ser individernas övningskvalitet men använder den *enbart* didaktiskt ("halva klassen fastnar på viktning"), aldrig som bedömningsunderlag. Skolans bedömningsregler bär elevernas förtroende. Flaggad risk: om urvattnade "säkra" svar dyker upp i höst - felsök förtroendet här först.
- **Feedbackform:** en styrka + EN konkret framåtriktad förbättring, läsbar på 15 sekunder, aldrig nivåord ("E-nivå", "godtagbart" förbjudna). Exempelsvaret sköter jämförelsen; AI:n pekar på nästa handling. Jfr [[prompt-verb-effekten-vardera-slar-forklara]] för uppgiftsformuleringarna.
- **Klassrumsritual:** fast veckoslot ~15 min per grupp: läraren modellerar (två exempelsvar dissekeras högt), alla övar i plattformen, avrundning med mönster. Delfärdigheten följer momentets fas (kategorisering tidigt, viktning/kritik mot provet). Kvalitetsblicken byggs kollektivt - plattformen tränar, klassrummet lär eleverna *vad träning är*.

## 3. Delfärdighetstaxonomi

Fem delfärdigheter, i progressionsordning, speglade i två riktningar (orsaker bakåt, konsekvenser framåt). Kopplar till [[andra-ordningens-begrepp-historisk-frageteknik]].

| # | Delfärdighet | Orsaksriktning | Konsekvensriktning | Format |
|---|---|---|---|---|
| 1 | Kategorisera | kort-/långsiktig, utlösande/underliggande, PESI-dimensioner | kort-/långsiktig, avsedd/oavsedd, samhällsområde | Sortering (självrättande) |
| 2 | Bygga kedjor | orsak till mellanled till händelse; förläng/fyll i led | händelse till följd till följd | Kedjebyggare + kort fritext |
| 3 | Förgrena | samverkande orsaker; struktur vs aktör | parallella följdlinjer | Fritext |
| 4 | Vikta | tyngsta orsaken; nödvändig vs tillräcklig | mest betydelsefulla konsekvensen | Fritext med ställningstagande |
| 5 | Kritisera/förbättra | hitta svagheten i givet resonemang; lyft E mot C | dito | Givet resonemang + fritext |

Nivå 5 är strategiskt central: att bedöma andras resonemang är det som gör eleverna självkorrigerande - och den återanvänder exempelsvaren som råmaterial. Progressionen är per delfärdighet, inte låst sekvens (starka elever kan gå direkt mot 3-4).

## 4. Teknik (survey-plattformen)

Full övningsmodul byggs (beslut: C-ambition), men **sekvenserat**:

- **Nya frågetyper:** sortering (dra-och-släpp, självrättande, FSRS-vänlig - lägsta tröskeln i systemet) och kedjebyggare. Järnregel: **grafen mynnar alltid i prosa** - kedjebyggaren är startpunkt, aldrig slutpunkt, eftersom löptexten är det medium som examineras.
- **Exempelsvar-efter-försök** som ny kärnfunktion på frågenivå - det enda momentet där timing i plattformen är pedagogiskt avgörande.
- **AI-feedback via CLI-flödet (ändrat 2026-07-19, ersätter realtidsbeslutet):** servern anropar ingen LLM. Feedback genereras asynkront i lärarens CLI-flöde (`practice get-pending-feedback` / `practice submit-feedback`, samma mönster som enkätfeedbacken) - ingen API-nyckel, ingen modellkostnad, och den nivådelade modellstrategin utgår. Pending-svaret bär delfärdighetens kvalitetskriterier + feedbackreglerna som promptunderlag. Exempelsvaren står för den omedelbara återkopplingen vid inskick; lärarens feedback visas under "Återkoppling på dina resonemang". Aldrig elevnamn eller identitet i underlaget.
- **Dashboard byggs sist** - den behövs bevisligen inte förrän det finns data att visa mönster i. Tills dess: mönsteranalys via MCP:n.

Jfr systerplanen [[Fragappens-utvecklingsplan-2026-05]] - samma implementationslager-filosofi: verktyget översätter etablerad pedagogik till UI-constraints, det uppfinner ingen ny.

## 5. Utrullning och produktion

- **Båda** de nya Hi 1b-grupperna, samma upplägg, från kursstart. Nya grupper = normerna grundas i stället för ändras; investeringen i vanan betalar sig över hela kursen.
- **Produktion:** generering + kuratering. Första momentets övningsbank byggs för hand (Claude genererar utkast ur momentplan + wiki, läraren kuraterar). Därefter lyfts övningsgenerering in som standardartefakt i `/planera-moment`-flödet (jfr [[MOC - Momentplaneringsramverket]]) så att varje nytt moment föder sin övningsbank automatiskt. Leveransväg finns redan: `import_questions` via MCP + CSV.
- Volymuppskattning: 5 delfärdigheter x 2 riktningar x 2 stofflägen = 20 övningsfack per moment; 30-50 övningar inkl. frivilligpool. Handproduktion är projektets dödsrisk - därav pipelinen.

## 6. Sommarens byggordning

1. **Taxonomin operationaliseras** - kvalitetskriterier per delfärdighet och nivå (underlag för exempelsvar och AI-prompter). **Utkast klart 2026-07-19:** [[Delfardighetstaxonomin-operationaliserad]] - väntar på lärarens kuratering
2. **Kärnbygge i plattformen** - sorteringstyp, exempelsvar-efter-försök, feedback för en delfärdighet (kategorisering eller kedjor). **Byggt 2026-07-19** (commits `d8cd34b` + `e094775` i survey-platform, ej pushat): SORTING-typ, exemplars-efter-försök, feedback för *kedjor* (fritext) via CLI-flödet (`practice get-pending-feedback`/`submit-feedback`, CLI:n regenererad och installerad), elevsida `/student/formagor` med feedbackvisning, CSV-import med subskill/config/exemplars. Ingen API-nyckel behövs. Väntar bara på: push/deploy
3. **Syntetisk stresstestning** - generera ~50 realistiska elevsvar per delfärdighet (dåliga/mediokra/goda), kör feedback med båda modellklasserna, blindjämför, kalibrera prompter. **Genomförd 2026-07-21 för kedjor** (modell-blindtestet utgick med CLI-beslutet; det som testades var kriterierna/reglerna): 52 syntetiska svar genom hela skarpa flödet, blind generering mot enbart payloaden, oberoende dömning. Resultat: 96 % rätt riktat "Nästa steg", 50/50 formatdisciplin, ingen N3-regression, payloaden självbärande. Enda åtgärdsfyndet: regellucka för icke-svar (fabricerad styrka) - föreslagen sjunde regel i `FEEDBACK_REGLER`. Full rapport: `docs/ovning/04-stresstest-kedjor.md` i survey-platform-repot.
4. **Första övningsbanken** - moment 1:s övningar + exempelsvar i nivåer, handkuraterade
5. **Kedjebyggaren** + resterande delfärdigheters feedback
6. **Under drift (sep-okt):** full progression, dashboard, lyft till `/planera-moment`-integration

## 7. Risker

- **Störst:** lärarens uthållighet i veckosloten genom oktober-november. Allt annat har krockkuddar; ritualen har bara läraren.
- Bedömningskarantänens trovärdighet (se ovan) - bevakas via svarskvaliteten.
- Kedjebyggaren får inte bli ett eget medium frikopplat från prosan.
- Gamification hålls *utanför* resonemangsövningarna (kampanjen är byggd för stoffdrill där repetition är målet; att gamifiera resonemang riskerar belöna kvantitet av skräpsvar).

### 7b. Krav och risker från forskningsläget (tillagt 2026-07-28)

Från deep-research-sessionen om AI i lärararbetet. Full härledning i `meta/changelogs/SESSION SUMMARY - Deep Research AI i lararabetet 2026-07-28.md` avsnitt 4 (K1-K8). De tre första är de som bör påverka bygget innan HT26.

- **K1, tyngst: CLI-flödets ordningsföljd är ankringsvänlig.** `practice get-pending-feedback` levererar elevsvaret och det genererade förslaget i samma vy. [[automation-bias-hos-larare-experimentellt-bekraftad]] visar att en människa som ser maskinens omdöme före sitt eget ankras hårt av det (samma uppsats, ηp² = 0,579-0,745). Att servern aldrig anropar en LLM är ett **arkitektoniskt** skydd, inte ett **kognitivt**. Åtgärd: dela flödet i två steg, eller notera egen bedömning innan förslaget öppnas. Motsvarar designprincip 1 i [[metakognitiv-stallning-sjalvbedomning-fore-ai-feedback]] - som redan är implementerad för eleven (exemplar efter försök) men saknas för läraren. Billigt nu, dyrt senare.
- **K2: stresstestet mätte sannolikt sig självt.** De 52 syntetiska svaren var LLM-genererade och bedömdes av en LLM. [[llm-bedomarreliabilitet-spannet-030-080]] dokumenterar self-enhancement bias: LLM-bedömning ger AI-genererad text högre betyg än mänskligt skriven. 96 %-siffran är därför inte överförbar till äkta elevsvar. Komplettera stresstestprotokollet med kort mot lång form av samma innehåll, och ett AI-genererat svar bredvid ett elevskrivet av jämförbar kvalitet.
- **K3: mät samstämmigheten i egen kontext.** Bedöm 20 elevsvar själv, kör flödet på samma 20, jämför. Utan det vet du inte var i spannet 0,30-0,80 du ligger. Två skärpningar: all bedömarreliabilitetsforskning i materialet gäller engelskspråkig uppsatsbedömning med analytiska rubriker, och svenska kunskapskrav med värdeord är en oprövad konstruktion. Taxonomins smala uppgifter med exemplars ligger nära de förhållanden där höga värden nås - vilket är ett skäl att pröva, inte att anta.
- **K4: bedömningskarantänen är också en klassificeringsfråga.** [[eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare]] - Annex III 3(b) omfattar system som utvärderar läranderesultat "inklusive när dessa resultat används för att styra lärandeprocessen". Skyldigheterna gäller från 2 december 2027 efter Digital Omnibus. Att formativ feedback utan betygskoppling faller utanför är rådgivares tolkning, inte lagtext. Skriv ner designvalet och gränsen medan systemet är litet.
- **K5: elevtexten är själv en personuppgiftsfråga.** [[vad-far-en-svensk-larare-mata-in-i-ett-ai-verktyg]] - Skolverkets råd nämner elevtexter separat från personuppgifter, och Norrköpingsmodellen förbjuder privatkonton helt. Två frågor planen inte besvarar: under vilket konto körs CLI-flödets modellanrop, och kan ett historiskt resonemang i fritext vara identifierbart via innehåll snarare än namn?
- **K6: deklarera flödet innan första feedbacken går ut.** [[relationen-larare-elev-lararens-eget-ai-bruk-ar-omatt]] - randomiserat experiment (N = 320) visar att lärarens AI-bruk förändrar elevernas syn på AI-kompetens och akademisk integritet. Att inte säga att feedbacken är AI-utkastad och lärargranskad normerar okritisk AI-användning i samma kurser som begär källkritik.
- **K7: bygg granskningsdisciplinen medan banken är liten.** Planens egen största risk (uthålligheten i veckosloten) är exakt den variabel som avgör om [[deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data]] går åt deskilling- eller upskilling-hållet. Den som har tid granskar, den som inte har tid godkänner.
- **K8: mät tidsvinsten, upplev den inte.** [[tidsbesparingen-25-minuter-mot-59-timmar]] - skattningen blir sämre ju mer verktyget används (carryover-effekt).

**Två obekväma iakttagelser.** Bygget sker i ett dokumenterat evidenstomrum - [[ai-stod-i-tolkande-amnen-konstaterad-evidenslucka]] - och byggordningen slutar i "dashboard och integration", inte i en utvärdering. Det som behöver mätas är **retention utan stöd**, inte övningsvolym. Och rampfasen tar i praktiken bort elevens möjlighet att avstå ([[cccc-institutionaliserar-ratten-att-vagra-ai]]); sannolikt försvarbart eftersom övningen inte är bedömningsgrundande, men det bör vara ett medvetet val.

**Vad materialet ger som stöd:** gränsdragningen "AI förbereder, läraren beslutar" har forskningsstöd och är professionens egen gräns ([[bedomning-lagst-i-alla-matningar-professionens-egen-grans]], [[ai-far-inte-ensamt-avgora-lararutvardering]]). Och versionerade, delbara **uppgifter med redovisat utfall** i stället för prompts är exakt det fältet saknar globalt ([[promptbibliotek-ar-faltets-svagaste-led]]).
