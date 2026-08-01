# Produktionsbrief - lektionsplaner och elevuppgifter, "Den mörka medeltiden"

Denna brief styr subagenter som genererar lektionsmaterial. Läs HELA briefen + de obligatoriska filerna innan du producerar något.

## Obligatorisk läsning (i denna ordning)
1. `C:\Brain\output\lessons\Historia\Den mörka medeltiden\momentplan.md` - HELA designen: brottningsfråga, lärandemål, rollsekvens, lektionstabell, exit tickets
2. `C:\Users\andkar001\.claude\plugins\cache\anders-personal\momentplanering\0.7.0\skills\planera-moment\references\lektionsplanering.md` - lektionsplansmallen (avsnitt 5) och rollkärnvägledning
3. Wiki-sidorna för din lektion (lista nedan) - läs dem, de matar innehållet

## Kontext
- **Kurs:** Historia Nivå 1b (GY25). Värdeord: enkla/utvecklade/utvecklade och nyanserade resonemang; godtagbara/goda/mycket goda kunskaper.
- **Brottningsfråga:** "Var medeltiden mörk?" Operationalisering: mörk för vem, var, när - och vem tjänar på berättelsen?
- **Tolkningstriaden** (genomgående lins): LJUS (Gabriele & Perry, The Bright Ages) / KATASTROF (Ward-Perkins, The Fall of Rome) / VARKEN-ELLER (Wickham - verklig strukturell förändring, men moralisering avvisas).
- **Triadmatrisen:** kumulativ matris (domän × position) som varje delområdeslektion (L2-L8) avslutar med att fylla på (ca 10 min före exit ticket): vilka belägg från dagens lektion stödjer respektive position? Matrisen blir positionspaket i L9:s SAC.
- **Mognadsprincip:** håll tolkningstriaden KONKRET - namngivna historiker, citatkort, beläggkort. Ingen abstrakt epistemologi. Eleverna går åk 1.

## NotebookLM
Notebook "Historia 1b", id `be38a766-c460-4031-b57f-9a7118e55d8a`. Ladda verktyget via ToolSearch (`select:mcp__notebooklm__notebook_query`) och ställ 1-2 konsoliderade frågor för din lektions tema (fakta, begrepp, exempel, primärkällor/citat, vanliga missförstånd). Källorna är A History of World Societies (kap. 6, 8, 9, 14 mest relevanta) och The Penguin History of the World. Ange källhänvisning (bok + kapitel) i materialsektionen.

## Anti-hallucineringsregler (kritiska)
- HITTA ALDRIG PÅ ordagranna citat ur primärkällor. Använd citat som NotebookLM eller wiki-sidorna faktiskt återger. Annars: referera med egna ord och tagga `[VERIFIERA]`.
- Osäkra faktapåståenden (årtal, siffror): tagga `[VERIFIERA]`.
- Wiki-sidornas innehåll får återges fritt (de är lärarens egna sammanfattningar).

## Stilregler
- Svenska. UTF-8 med å/ä/ö direkt. **Bindestreck (-), aldrig tankstreck (—). Inga em-dashes.**
- Elevmaterial: elevspråk, inte lärarspråk. Du-tilltal i instruktioner.
- **Exit tickets får ALDRIG stå i elevarbetsbladet** - de görs digitalt i frågeappen. Exit ticket-frågan står endast i lärarens lektionsplan.
- Elevaktiv tid > 50% av 80 min - räkna ihop och kontrollera.
- Lektionsplanen följer mallen i lektionsplanering.md avsnitt 5 (rollbaserad: öppning retrieval → rollkärna → avslut exit ticket). INGEN sex-fas-struktur.
- Retrieval-öppningen ska referera föregående lektions exit ticket-data specifikt + alltid kort triadretrieval (utom L1).
- Differentiering: konkret (mall/ordbank/stödfrågor mot E; öppnare krav/metanivå/regional differentiering mot A). Princip 3-undantag för dokumenterat stöd nämns i brottningsnära lektioner.

## Filer som ska produceras per lektion
1. `C:\Brain\output\lessons\Historia\Den mörka medeltiden\lektion-N.md`
2. `C:\Undervisningsmaterial\Historia\Den mörka medeltiden\lektion-N.docx`
3. `C:\Brain\output\lessons\Historia\Den mörka medeltiden\elevuppgift-lektion-N.md`
4. `C:\Undervisningsmaterial\Historia\Den mörka medeltiden\elevuppgift-lektion-N.docx`
5. Vid behov: `kallmaterial-lektion-N.md` + `.docx` (samma mappar; obligatoriskt för L6 och L9)

## DOCX-generering
- Skriv ett Node.js-script (CommonJS, `require('docx')` - globalt installerat docx@9.6.1; sätt NODE_PATH till `npm root -g` om require fallerar) som genererar dokumentet, kör det med node.
- Format: A4 (11906 x 16838 DXA), 1 tum-marginaler, Arial 12pt brödtext, Heading 1 för titeln, Heading 2 för sektioner, tidsplanering som tabell (Tid | Moment | Aktivitet | Beskrivning), bullet-listor med LevelFormat.BULLET (aldrig unicode-bullets), sidfot: "Historia Nivå 1b - Den mörka medeltiden".
- Validera: `PYTHONUTF8=1 python "C:\Users\andkar001\.claude\plugins\cache\anders-personal\momentplanering\0.7.0\skills\docx\scripts\office\validate.py" "<fil.docx>"` (om validate.py har annan sökväg: `Glob` i docx-skillens mapp). Om validering fallerar: åtgärda och kör om.
- Lägg tillfälliga node-script i `C:\Brain\output\lessons\Historia\Den mörka medeltiden\_build\` (skapa mappen), radera dem INTE (spårbarhet).

## Kvalitetskontroll innan du avslutar (rapportera utfallet)
- [ ] Realiserar lektionen sin roll? Mäter exit ticket rollens exit?
- [ ] Retrieval-öppning kopplad till föregående lektion (utom L1)?
- [ ] Elevaktiv tid > 50%? (ange procent)
- [ ] Differentiering konkret?
- [ ] [VERIFIERA]-taggar där osäkert?
- [ ] Framåtkoppling till nästa lektion?
- [ ] Exit ticket INTE i elevuppgiften?
- [ ] docx validerad utan fel?

## Per-lektion-uppdrag

Lektionstabellen, exit tickets och röd tråd: se momentplan.md. Nedan per-lektion-källor och innehållsanvisningar utöver det.

### L1 - Vad vet du om medeltiden - och varifrån kommer bilden? (Frågeförankring + Provokation)
- Wiki: `wiki/sources/2026-06-08 The Bright Ages/morka-medeltiden-som-uppfunnen-myt.md`, `wiki/sources/2026-06-08 The Bright Ages/periodisering-ar-ideologisk.md`, `wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/dan-jones-fem-krafter-vi-ar-medeltidens-barn.md`
- Kärna: pretest/gissa-innan-quiz (8-10 mytpåståenden, t.ex. "folk trodde jorden var platt", "alla dog vid 35", "kyrkan förbjöd all vetenskap" - pretesting-effekt, rätta INTE direkt, facit växer fram under momentet), bildanalys av populärkulturens medeltid (film/spel), de tre historikerkorten introduceras (ljus/katastrof/varken-eller med ett nyckelcitat var), EPA om "varifrån kommer din bild?". Antiken-retrieval i öppningen: kontinuitet/förändring-begreppet.
- Elevuppgift: pretest-blanketten + bildanalysblad + "min medeltidsbild"-skrivruta (sparas - återanvänds i L10:s metareflektion!).

### L2 - Roms fall - katastrof, kontinuitet eller förvandling? (Perspektivbygge I)
- Wiki: `wiki/sources/2026-06-08 The Bright Ages/rom-foll-inte-kontinuitet-som-tes.md`, `wiki/sources/2026-06-08 The Inheritance of Rome (Wickham)/wickham-tredje-position-varken-katastrof-eller-kontinuitet.md`, `...(Wickham)/skattestatens-fall-ar-den-strukturella-forandringen.md`, `...(Wickham)/regional-variation-britannien-som-extremfall.md`, `...(Wickham)/den-romerska-kontinuiteten-fanns-i-ost.md`, `wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/medeltida-klassrumshooks-ur-powers-and-thrones.md` (Hoxne-skatten)
- Kärna: Hoxne-hooken; tre arvtagare (Västeuropa/Bysans/kalifatet); beläggsorteringsövning - eleverna får ~12 beläggkort (arkeologiska/skriftliga fynd) och sorterar mot triaden; regional differentiering Britannien vs Östrom. Första matrisraden fylls.
- Elevuppgift: beläggsorteringskorten + sorteringsmatris (detta är ett kallmaterial-tungt blad; lägg beläggkorten i elevuppgiften direkt).

### L3 - Feodalism och böndernas värld (Begreppsbygge + Perspektivbygge II)
- Wiki: `wiki/sources/2026-06-08 The Inheritance of Rome (Wickham)/inburandet-av-bonderna-caging-of-the-peasantry.md`, `...(Wickham)/historia-underifran-bonder-som-overklagar.md`, `...(Wickham)/mot-feodal-revolution-som-universalmodell.md`, `wiki/sources/2026-06-08 Medieval Europe (Wickham)/lokalisering-av-makt-cellstrukturen-efter-ar-1000.md`
- NotebookLM: World Societies kap. 14 "Feudalism and Manorialism", "The Life and Work of Peasants" + fallstudien Cecelia Penifader (kap. 14).
- Kärna: Frayer-modell på feodalism + livegenskap; fallstudie Cecelia Penifader (vanlig kvinna, engelsk by ca 1297-1344); "ljus för vem?"-diskussion (Wickhams bönder). Matrisrad: levnadsvillkor-domänen.
- Elevuppgift: Frayer-blad ×2 + Penifader-fallstudieblad med E/C/A-stegrade frågor.

### L4 - Vetandets vägar - kloster, universitet, Toledo (Perspektivbygge III)
- Wiki: `wiki/sources/2026-06-08 The Bright Ages/religiosa-institutioner-bevarade-antikens-vetande.md`, `.../aristoteles-kom-via-islamiska-och-judiska-tankare.md`, `wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/oversattningsrorelsen-toledo-vast-som-baksvansare.md`
- Kärna: Aristoteles resväg som karta/kedjeövning (Aten → Bagdad → Córdoba/Toledo → Paris: al-Farabi, Avicenna, Averroes, Maimonides, Aquino); kloster/skriptorier; universitetens födelse; källpar: ett "mörker"-citat (upplysningstida) mot beläggen. Matrisrad: kunskapsdomänen.
- Elevuppgift: kartövning kunskapens vägar + källparsanalys.

### L5 - Korståg och möten - konflikt eller permeabilitet? (Perspektivbygge IV)
- Wiki: `wiki/sources/2026-06-08 The Bright Ages/forsta-korstaget-var-inte-forsvar-mot-islam.md`, `.../convivencia-och-reconquista-som-trubbiga-kategorier.md`, `.../permeabilitet-den-uppkopplade-medeltiden.md`, `wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/korstaget-som-formbar-och-giftig-maktteknologi.md`, `medeltida-klassrumshooks...` (Saladin/Hattin)
- Kärna: Hattin-hooken; perspektivanalys i EPA: samma händelseförlopp (korstågen) ur frankiskt, muslimskt, judiskt, bysantinskt perspektiv; al-Andalus som komplext fall (varken idyll eller apartheid). Matrisrad: mötesdomänen.
- Elevuppgift: perspektivmatris med korta källutdrag/referat per perspektiv.

### L6 - Källabbet - medeltida källor som retorik (Begreppsbygge källbegrepp + mini-Pröva)
- Wiki: `wiki/sources/2026-06-08 The Bright Ages/medeltida-kallor-ar-retorik-inte-fonster.md`, `wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/populärhistoriens-anakronismer-som-pedagogiskt-grepp.md`
- Kärna: stationslabb med 4 stationer (Prokopios dubbla porträtt av Justinianus/Theodora; en krönika; en helgonlegend/hagiografi; ett brev eller dokument - hämta utdrag/referat via NotebookLM, annars referat + [VERIFIERA]). Vem/när/varför/vad-protokollet. **Eleverna producerar annoterade källkort** - dessa sparas och blir examensmaterial (hyperkontextualisering).
- Producera även: `kallmaterial-lektion-6.md/.docx` - källkompendiet med alla stationstexter.
- Elevuppgift: källkortsmall + stationsprotokoll.

### L7 - Kvinnornas medeltid - mörkare än vår tid? (Perspektivbygge V)
- Wiki: `wiki/sources/2026-06-08 The Bright Ages/kvinnors-agens-syns-nar-kallorna-las-noga.md`, `wiki/sources/2026-06-08 The Once and Future Sex (Janega)/kvinnor-arbetade-overallt-hemmafrun-ar-modern.md`, `.../motroster-hildegard-och-christine-de-pizan.md`, `.../framstegsmyten-och-tradwife-historiebruket.md`, `.../naturligt-och-traditionellt-ar-konstruerade-kategorier.md`, `wiki/sources/2026-06-08 Medieval Europe (Wickham)/genus-i-senmedeltiden-tvetydigheter-inte-enkelriktad-forsamring.md`
- NotebookLM: Hildegard av Bingen (World Societies kap. 14).
- Kärna: Hildegard-hook; exploratory talk i grupper om 3-4 kring fall (Hildegard, Christine de Pizan, bryggerskor/skråarbete, adelskvinnan som godsförvaltare): agens OCH struktur samtidigt; framstegsmyten ("det blir alltid bättre") prövas. Matrisrad: genusdomänen. OBS: håll Janegas polemik balanserad med Wickhams tvetydigheter.
- Elevuppgift: fallkort + samtidighetsschema (agens/struktur).

### L8 - Digerdöden - kollaps eller omfördelning? (Perspektivbygge VI + formativ gate)
- Wiki: `wiki/sources/2026-06-08 The Bright Ages/digerdoden-var-500-ar-tre-kontinenter.md`, `.../medeltida-vetenskapligt-resonemang-om-smitta.md`, `.../syndabockstankande-judeforfoljelse-i-kris.md`, `wiki/sources/2026-06-08 Medieval Europe (Wickham)/digerdoden-var-ingen-systemkollaps-vinnare-och-forlorare.md`, `wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/pax-mongolica-handel-och-pest-langs-samma-vagar.md`
- Kärna: hook år 536/den irländska krönikörens tomma sidor; orsak/konsekvens-kedjor (bakomliggande/utlösande/konsekvenser); ny pestforskning vs skolbokbilden; syndabockstänkandets struktur (Tàrrega 1348 - koppling antisemitismens historiska rötter, CI-punkt); vinnare/förlorare efter pesten. Sista matrisraden.
- Elevuppgift: orsakskedjeblad + syndabocksanalys med nutidsbrygga (konspirationsteorier i kris).
- OBS exit ticket är GATE (tre positioner × styrka/svaghet) - lärarinstruktion om hur resultatet styr SAC-grupperna.

### L9 - Brottning: Var medeltiden mörk? (Brottning - treposition-SAC)
- Wiki: `wiki/sources/2026-06-08 Powers and Thrones (Dan Jones)/dan-jones-vs-wickham-teleologi-mot-anti-teleologi.md` + momentplanens nivå 5-sektion (form, strukturmekanism)
- Kärna: hela lektionen ÄR SAC:en. Förlopp: 5 min retrieval/ramning → 10 min positionsförberedelse i par (positionspaket = triadmatrisen + positionskort) → runda 1: ljus vs katastrof (presentationer med tidsgräns + utfrågning) → positionsbyte, runda 2 → steelman-runda (var och en formulerar motpositionens starkaste argument) → konsensusfas: Wickham-kortet in - prövar gruppen om varken-eller integrerar bäst → gruppens konsensus/dissens dokumenteras. Ingen lärargenomgång som tränger ut brottningstiden.
- Producera även: `kallmaterial-lektion-9.md/.docx` - tre positionskort (ett per position: kärntes, 4-5 starkaste belägg, ett nyckelcitat, "svagheter motståndaren kommer attackera") + SAC-körschema för eleverna.
- Elevuppgift: SAC-arbetsblad (rundanteckningar, steelman-ruta, konsensus/dissens-dokumentation).
- Princip 3-undantag (dokumenterat stöd) ska stå i differentieringen.

### L10 - Vem äger medeltiden? + syntesverkstad (Applikation + Syntes förb. + Metareflektion)
- Wiki: `wiki/sources/2026-06-08 The Bright Ages/morka-medeltiden-som-uppfunnen-myt.md` (Petrarca→upplysning→vit makt-kedjan), `.../rasbegreppets-medeltida-rotter.md`, `wiki/sources/2026-06-08 The Once and Future Sex (Janega)/framstegsmyten-och-tradwife-historiebruket.md`, `wiki/sources/2026-06-08 The Bright Ages/renassansen-byggde-pa-medeltiden-den-fornekade.md`
- Kärna: (1) Applikation ~35 min: case-analys av samtida "medeltida"-bruk - eleverna får 4-5 korta autentiska/typiska exempel (politiskt uttalande, filmrecension, vit makt-symbolik refererad varsamt på beskrivningsnivå, tradwife-estetik, "medeltida straff"-rubrik) och analyserar med historiebruksverktyg: vem använder, vilken bild, vad gör bruket? (2) Syntesverkstad ~30 min: skrivmall för examenssyntesen, eleven skissar sin tolkning (för vem/var/när) + väljer belägg ur matrisen; kamratrespons i par. (3) Metareflektion ~10 min: eleven läser sin "min medeltidsbild" från L1 och skriver vad som ändrats och varför.
- Elevuppgift: caseblad + syntesskrivmall ("Min tolkning... Position X:s starkaste argument... ändå menar jag... eftersom... För [grupp] var det... medan...").
- VARSAMHET: vit makt-exemplen beskrivs sakligt-distanserat (Charlottesville "Deus Vult", Christchurch) utan att reproducera propaganda; syfte är igenkänning av appropriering, inte exponering.

### Examination - skriftlig syntes (separat dokument: `examination.md` + `.docx`)
- Producera: uppgiftsinstruktion till elever + bedömningsanvisning till läraren (E/C/A-raster utifrån momentplanens fem lärandemål).
- Uppgift: "Var medeltiden mörk? Formulera din tolkning - för vem, var, när - och pröva den." Krav: (a) använda minst två av de tre positionerna och formulera den starkaste invändningen mot egen tolkning, (b) hänvisa till minst två av klassens annoterade källkort från L6 (bifogas vid provtillfället), (c) referera minst ett argument ur den egna SAC-rundan ("i vår grupp hävdades..."), (d) avsluta med ett kort historiebruksavsnitt: vem har tjänat på att kalla medeltiden mörk? Individuellt, 80 min, inga digitala hjälpmedel - källkorten och triadmatrisen (utskriven) är tillåtet material.
- Bedömningsanvisning: matris LM1-LM5 × E/C/A med GY25-värdeorden, + instruktion om sammantagen bedömning.
