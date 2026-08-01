# AI i lärararbetet - Sverige och Norden 2024-2026

**Researchrapport, sammanställd 2026-07-28**
Målgrupp: gymnasielärare i samhällskunskap och historia.

---

## Om metod och tillförlitlighet - läs detta först

Två saker påverkar hur du ska läsa rapporten:

1. **Firecrawl låg nere** under hela arbetspasset (både `firecrawl_search` och `firecrawl_scrape` returnerade fel). Researchen bygger därför på WebSearch och WebFetch. WebFetch sammanfattar sidor med en mindre modell, vilket innebär att **enstaka citat kan vara omskrivna snarare än ordagranna**. Där jag är osäker på ordalydelsen skriver jag det ut. Alla URL:er är verifierade som existerande sidor - men vill du citera i text bör du öppna primärkällan och kontrollera formuleringen.

2. **Två PDF:er gick inte att läsa i sin helhet** (Sveriges AI-strategi och Skolverkets rapport 2026:982). De använder inbäddade teckensnitt som inte kunde extraheras med tillgängliga verktyg, och maskinen saknar både `pdftotext` och `pip`. Innehållet nedan bygger på pressmeddelanden och sekundärkällor om dessa två dokument. **Detta är den största kunskapsluckan i rapporten.**

Jag markerar genomgående vad som är belagt i primärkälla (BELAGT), vad som kommer från sekundärkälla (ANDRAHAND) och vad som är mitt eget resonemang (RESONEMANG).

---

## Sammanfattning: den svenska bilden i tre meningar

Sverige har fram till februari 2026 saknat nationell styrning av AI i skolan - regeringen avvisade Skolverkets digitaliseringsstrategi 2023, gav i stället myndigheten i uppdrag att verka för mer lästid och mindre skärmtid, och höll uttryckligen skolväsendet utanför AI-kommissionens direktiv. I februari 2026 svängde det: skolan skrevs in i Sveriges AI-strategi. Under tiden har lärarna gått före på egen hand - nära åtta av tio använder AI i arbetet, samtidigt som en majoritet uppger att de saknar stöd från huvudman och rektor.

Norge, Danmark och Finland har alla nationella riktlinjer för AI i skolan. Sverige har inte det.

---

## 1. Skolverket

### 1.1 Lägesbilden 2026 - den viktigaste färska siffran

**Dokument:** *Artificiell intelligens i undervisningen - en aktuell lägesbild över lärares användning och hantering av artificiell intelligens (AI) under höstterminen 2025 och starten på vårterminen 2026*
**Diarie-/publikationsnummer:** 2026:982
**Datum:** 26 maj 2026
**PDF:** https://www.skolverket.se/download/18.4ffcdbda19e49f0500f58fa/1779459449440/pdf13417.pdf
**Pressmeddelande:** https://www.skolverket.se/om-skolverket/nyheter-och-pressmeddelanden/pressmeddelanden/pressmeddelanden/2026-05-26-skolverket-foljer-upp-ai-anvandningen-i-skolan

BELAGT (pressmeddelandet):

- "nära åtta av tio tillfrågade lärare har använt AI-tjänster i någon del av sitt arbete"
- Vanligast är **planering och förberedelse** av undervisning - sju av tio har gjort det minst en gång.
- Mindre vanligt är AI **under** undervisningen eller **vid bedömning**.
- **Fyra av tio** lärare tillåter eller initierar elevers AI-användning, upp från knappt två av tio 2024.
- "majoriteten av de tillfrågade lärarna uppger att de saknar stöd från sin huvudman och rektor"
- Lärare lyfter risker för fusk och försämrad skrivförmåga, men ser också värde i att lära elever ansvarsfull användning och källkritisk granskning.

**Viktig avgränsning som lätt missas:** enligt uppgift bygger rapporten på **368 lärare i Skolverkets lärarpanel för grundskolan, förskoleklass och fritidshem**, insamlat januari-februari 2026. Det är alltså **inte** en gymnasiestudie. (ANDRAHAND - jag kunde inte öppna PDF:en och verifiera urvalet direkt.) För gymnasiet finns en separat lägesbild från 2024: https://www.skolverket.se/sok-publikationer/publikationsserier/ovrigt-material/2024/artificiell-intelligens-i-undervisningen---gymnasieskolan

Detta är tredje lägesbilden i serien sedan 2024.

### 1.2 Skolverkets råd - det närmaste ett svenskt ställningstagande vi har

**Sida:** *Råd om AI, chattbottar och liknande verktyg*
**Senast uppdaterad:** 18 juni 2026
**URL:** https://www.skolverket.se/kompetensutveckling/stod-i-arbetet/rad-om-ai-chattbottar-och-liknande-verktyg

BELAGT (med reservation för exakt ordalydelse, se metodnoten):

- Skolor bör ha **nedskrivna riktlinjer** för AI-användning som kan justeras och uppdateras, och som täcker organisation, etik, juridik, pedagogik, kompetensutveckling och risker.
- Om personuppgifter: "AI-tjänster skickar ofta data till andra länder. Lämna därför inte ut personuppgifter eller elevtexter utan tillåtelse."
- Om bedömning: Skolverket avråder från att använda **inlämningsuppgifter som betygsunderlag utan kontroll**, eftersom AI kan producera texter av hög kvalitet utan att äktheten kan verifieras.
- Om faktakvalitet: "AI-genererade texter kan vara övertygande men ändå innehålla fel. Använd alltid ett kritiskt förhållningssätt."
- AI får inte ersätta lärarens professionella kompetens eller beslut om betyg.

RESONEMANG: Det här är råd, inte föreskrifter. Skolverket har alltså **inte** utfärdat bindande regler om AI - och det är precis vad både Sveriges Skolledare och Swedish Edtech kritiserar (avsnitt 3 och 7).

### 1.3 Kommande stödmaterial

ANDRAHAND: Skolverket har enligt egna uppgifter börjat lansera stödmaterial och avser ta fram material för olika målgrupper inom skolväsendet **under 2026 och 2027**, bland annat om förhållningssätt till lärverktyg som innehåller AI. Detta var inte färdigt vid rapportens sammanställning.

### 1.4 Ämnet Artificiell intelligens på gymnasiet

**URL:** https://www.skolverket.se/styrning-och-ansvar/forandringar-inom-skolomradet/sidor-tidigare-forandringar/artificiell-intelligens---nytt-amne-i-gymnasieskolan-och-komvux

BELAGT: Ämnet artificiell intelligens finns i gymnasieskolan och komvux. Vid övergången till ämnesbetyg 1 juli 2025 behölls ämnet med samma innehåll men i nytt format.

### 1.5 Fortbildning: *Undervisa i artificiell intelligens på gymnasiet*

**URL:** https://www.skolverket.se/kompetensutveckling/kurser-och-utbildningar/sok-kurser-och-utbildningar/undervisa-i-artificiell-intelligens-pa-gymnasiet
**Senast uppdaterad:** 18 juni 2026

BELAGT: Två kurser om 7,5 hp vardera (en teknisk inriktning, en med samhällsperspektiv) som tillsammans ger 15 hp inom artificiell intelligens. **Startar hösten 2026.** Ges vid bland annat Göteborgs universitet, Linköpings universitet, KTH och Mittuniversitetet.

**Målgrupp:** "Lärare i gymnasieskolan och komvux" som redan är behöriga i matematik, programmering, webbutveckling, gränssnittsdesign eller teknik.

RESONEMANG - och detta är relevant för dig personligen: fortbildningen är byggd för att ge **ämnesbehörighet i AI-ämnet**, riktad till matematik- och tekniklärare. Det finns alltså ingen motsvarande statlig fortbildning för samhällskunskaps- och historielärare som vill använda AI **i sitt eget ämnesarbete**. Det är en påfallande lucka. Kursen med "samhällsperspektiv" handlar om AI som studieobjekt, inte om AI som lärarverktyg.

### 1.6 Spänningen "tillbaka till boken" kontra AI - vad som faktiskt hänt

Detta är den mest intressanta delen av frågan, och svaret är att spänningen är **dokumenterad och konkret**, inte bara en stämning.

**Steg 1 - digitaliseringsstrategin avvisades (2023).**
Skolverket lämnade förslag till nationell digitaliseringsstrategi för skolväsendet 2023-2027. Remiss: https://www.regeringen.se/remisser/2023/03/remiss-av-statens-skolverks-forslag-till-nationell-digitaliseringsstrategi-for-skolvasendet-20232027/
Regeringen gick **inte** vidare med förslaget. Se Altingets bevakning: https://www.altinget.se/artikel/efter-slopad-digitaliseringsstrategi-skolverket-faar-nytt-uppdrag
och Skolledaren: https://www.skolledaren.se/aktuellt/nyheter/2023/11/nya-grepp-efter-skrotade-digitaliseringsstrategin/

**Steg 2 - ersattes av ett lärverktygsuppdrag med motsatt riktning (november 2023).**
https://www.regeringen.se/pressmeddelanden/2023/11/nytt-uppdrag-till-skolverket-om-larverktyg-ska-ge-mer-lastid-och-mindre-skarmtid/
Skolverket fick i stället i uppdrag att ta fram allmänna råd eller rekommendationer för val och användning av lärverktyg, med det uttryckliga syftet att ge **mer lästid och mindre skärmtid**. Motiveringen: grundläggande färdigheter tillägnas bäst genom analoga aktiviteter i analoga miljöer.

Se även regeringens satsning januari 2024: https://www.regeringen.se/artiklar/2024/01/regeringen-satsar-pa-okad-lastid-och-minskad-skarmtid/

**Steg 3 - AI-kommissionen fick förbud mot att röra skolan.**
Se avsnitt 2.

**Steg 4 - ministersvaret oktober 2025 bekräftar linjen.**
Svar på skriftlig fråga 2025/26:96, 21 oktober 2025, från utbildnings- och integrationsminister Simona Mohamsson (L) till Camilla Hansén (MP):
https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svar-pa-skriftlig-fraga/statens-stod-till-skolvasendet-vad-galler-ai_hd1296/

BELAGT: "digitala lärverktyg bör därför introduceras i undervisningen först i en ålder när de främjar barns och elevers lärande." Skolverket har **sektorsansvar** för digitalisering inklusive AI och ska vara "samlande och stödjande samt samverka med övriga berörda myndigheter". Svaret innehåller **ingen konkret tidsplan eller implementeringsplan för AI**.

**Steg 5 - vändningen, februari 2026.** Se avsnitt 2.2.

**Steg 6 - men den restriktiva linjen ligger kvar även efter vändningen.**
Svar på skriftlig fråga 2025/26:867, 10 juni 2026, Mohamsson (L) till Hansén (MP):
https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svar-pa-skriftlig-fraga/ansvaret-for-att-skolan-rustar-eleverna-med_hd12867/

BELAGT: Regeringen anser att eleverna behöver "kunskaper om digitalisering och artificiell intelligens (AI) och dess påverkan på och i samhället, ett kritiskt och ansvarsfullt förhållningssätt samt vissa färdigheter." Samtidigt krävs ett **restriktivt förhållningssätt i grundskolans inledande år**. Skolverket har i uppdrag att "lämna förslag på konkreta mål och innehåll om digital kompetens om vad eleverna förväntas lära sig i olika stadier."

**RESONEMANG - så här skulle jag beskriva spänningen:**
Det finns ingen motsättning i regeringens egen logik, eftersom den löser konflikten med en **åldersgräns** i stället för ett ställningstagande om tekniken. Analogt i de tidiga åren, AI-kunskap i de högre. Det är samma konstruktion som Norge valt (avsnitt 8), fast utan Norges konkretion.

Den reella spänningen ligger någon annanstans: mellan **retorik och resurser**. Regeringen skriver in AI-kunskap i läroplansarbete och strategi, men den enda fortbildningsvägen som faktiskt existerar (1.5) riktar sig till matematik- och tekniklärare, och Skolverkets stödmaterial ska komma "under 2026 och 2027". Under tiden använder åtta av tio lärare AI redan idag, utan stöd från huvudman. Gapet är inte ideologiskt utan tidsmässigt: lärarkåren ligger flera år före styrningen.

---

## 2. Regeringen och utredningarna

### 2.1 AI-kommissionen - skolan uttryckligen undantagen

**Dokument:** *AI-kommissionens Färdplan för Sverige*, SOU 2025:12
**URL:** https://www.riksdagen.se/sv/dokument-och-lagar/dokument/statens-offentliga-utredningar/ai-kommissionens-fardplan-for-sverige_hdb312/html/

BELAGT: Kommittén skulle beakta möjligheter och risker som AI kan innebära för skolväsendet, men **"skulle emellertid inte lämna förslag som avser skolväsendet."** Fokus låg på högre utbildning och forskning.

Rekommendationer som ändå berör utbildning: satsning på excellenscentra och forskarskolor inom AI; en satsning kallad **"AI för alla"** för att stärka kompetensen i hela samhället, inklusive folkbildning och vidareutbildning av lärare **vid universitet och högskolor**.

Kritik: Altinget, *Utbildningens roll förbisedd i AI-kommissionens färdplan*
https://www.altinget.se/artikel/utbildningens-roll-forbisedd-i-ai-kommissionens-fardplan

Och Skolledaren, december 2024: *Efter AI-utredning: "Behövs riktlinjer för skolledare"*
https://www.skolledaren.se/aktuellt/nyheter/2024/12/efter-ai-utredning-behovs-riktlinjer-for-skolledare/

### 2.2 Sveriges AI-strategi (februari 2026) - vändpunkten

**Dokument:** *Sveriges AI-strategi*
**Beslutad:** februari 2026, undertecknad av statsminister Ulf Kristersson (M) och civilminister Erik Slottner (KD)
**PDF:** https://www.regeringen.se/contentassets/bb4fd7346ff64e50a0b25c20ca2e2ae2/sveriges-ai-strategi.pdf
**Landningssida:** https://www.regeringen.se/regeringens-politik/sveriges-ai-strategi/
**Sammanfattning från Finansdepartementet, 20 februari 2026:** https://www.regeringen.se/artiklar/2026/02/sveriges-ai-strategi-pa-fem-minuter/

BELAGT (ur sammanfattningsartikeln, med reservation för exakt ordalydelse):
- "Skolväsendet och högre utbildning ska rusta individer för ett arbets- och samhällsliv där digitalisering och AI ingår."
- "Skolan ska ge elever i de högre årskurserna kunskaper och förståelse för både risker och möjligheter med AI."
- Strategin genomförs genom "uppdrag, ändring av lagar och förordningar, budgetbeslut och samverkansforum".

ANDRAHAND (via Skolledaren, se 3.2): strategin innehåller **två skolrelaterade punkter** - dels att elever i högstadiet och gymnasiet behöver kunskap om AI:s påverkan på samhälle och individ och ska kunna kritiskt granska vad AI genererar samt göra etiska överväganden, dels att **lärare behöver kompetensutveckling och stöd** kring AI:s möjligheter och risker. För lägre årskurser ska utgångspunkten vara analoga aktiviteter.

**LUCKA:** Jag kunde inte extrahera texten ur strategi-PDF:en. **Om du vill använda strategin i undervisning eller argumentation, öppna PDF:en själv och läs skolavsnittet.** Det är den enskilt viktigaste primärkälla jag inte kunnat verifiera ordagrant.

### 2.3 Läroplansutredningen

ANDRAHAND: I februari 2025 lämnade Läroplansutredningen förslag, bland annat om hur läsning och läsförståelse kan stärkas och hur digitaliseringsskrivningar bättre kan anpassas efter barns kognitiva utveckling. Regeringen föreslog 40 miljoner kronor för 2026 till Skolverket för fortsatt arbete med de nya läroplanerna.
Utbildningsdepartementets budgetsatsningar 2026: https://www.regeringen.se/regeringens-politik/utbildningsdepartementets-samlade-budgetsatsningar/utbildningsdepartementets-samlade-budgetsatsningar-2026/

### 2.4 Skolforskningsinstitutet - här är underlaget tunt

**Jag hittade ingen systematisk översikt från Skolforskningsinstitutet om generativ AI i undervisningen.** Institutets publicerade förstudier och översikter under perioden rör andra områden (bland annat sfi). Om det finns ett pågående arbete om AI syns det inte i sökbara källor per 2026-07-28.

Detta är värt att notera i sig: den svenska myndighet som har till uppgift att sammanställa forskning om undervisning har, såvitt jag kan se, **inte** producerat någon forskningsöversikt om AI i undervisningen under 2024-2026. Skolverkets lägesbilder är enkätuppföljningar, inte forskningssynteser.

---

## 3. Fackförbunden

### 3.1 Sveriges Lärare - *Lärarledd digitalisering?*

**Rapport:** *Lärarledd digitalisering? Möjligheter och förbehåll på tröskeln till ett nytt AI-landskap*
**Datum:** 11 april 2024 (beslutad efter kongressen 2024)
**URL:** https://www.sverigeslarare.se/om-oss/opinion-debatt/undersokningar/lararledd-digitalisering/
**Nyhet:** https://www.sverigeslarare.se/om-oss/nyheter/rapport-lararledd-digitalisering/
**Alla undersökningar:** https://www.sverigeslarare.se/om-oss/opinion-debatt/undersokningar/

BELAGT (medlemsenkät):
- 3 av 5 lärare använder regelbundet digitala verktyg i undervisningen
- **50 %** har inte använt AI i undervisningen; endast **5 %** i hög utsträckning
- **49 %** ser fördelar i administrativ effektivisering
- **63 %** oroar sig för att elever fuskar med AI
- **57 %** befarar dåligt genomtänkta AI-satsningar

**Krav:** statlig utredning om digitala verktygs och AI:s effektivitet; "gå långsamt" - lärare behöver tid att utforska etiska dimensioner; förbättrad kompetensutveckling på alla nivåer; risk- och konsekvensanalyser före införande av digitala system; stärkt finansiering och kvalitetskontroll.

Ett återkommande tema i rapporten: lärarna minns tidigare digitaliseringssatsningar, beslutade av ivriga skolhuvudmän, som forcerades och gick fel.

**VAD JAG INTE HITTADE - och detta gäller direkt dina frågor:**

Din fråga om **upphovsrätt till lärarnas eget material** och **rätten att avstå från AI** besvaras **inte** i denna rapport, och jag hittade inget ställningstagande från Sveriges Lärare i någon av frågorna. Det jag hittade var:

- **Upphovsrätt i AI-träning** drivs i Sverige framför allt av **Läromedelsförfattarna**, inte av lärarfacket: *Värna upphovsrätten i regeringens AI-satsning* - https://www.laromedelsforfattarna.se/allanyheter/varna-upphovsratten-i-regeringens-ai-satsning/ (kritik mot att KB fått 30 miljoner för att träna svenska språkmodeller på bibliotekets samlingar utan att ersättning till rättighetshavare säkras).
- Sveriges Skolledare berör frågan indirekt via "informationsasymmetri mellan arbetsgivare och arbetstagare" vid automatiserad dataanalys (3.2).
- Kollektivavtalen (HÖK med SKR, Arbetsgivarverket, Arbetsgivaralliansen) innehåller såvitt jag kan se inga AI-specifika skrivningar.

RESONEMANG: Att lärares upphovsrätt till eget undervisningsmaterial i förhållande till AI-tjänster och skolplattformar inte har blivit en facklig stridsfråga i Sverige är i sig ett fynd. Det är en av de mest konkreta gråzonerna för en enskild lärare - laddar du upp din egen lektionsplanering i en huvudmannaupphandlad AI-tjänst, vad händer med den? - och den saknar svenskt svar.

### 3.2 Sveriges Skolledare - tydligast av parterna

**Ställningstagande:** *AI i skolväsendet*, november 2025
**PDF:** https://www.sverigesskolledare.se/globalassets/stallningstagande---ai-i-skolvasendet_web.pdf
(Dokumentets exakta titelrad kunde inte verifieras helt - filnamnet är "Ställningstagande - AI i skolväsendet".)

**Nyhet:** *Sveriges Skolledare kräver nationellt ledarskap gällande AI i skolväsendet*, 11 december 2025
https://www.sverigesskolledare.se/nyheter2/nyheter/2025/12/sveriges-skolledare-kraver-nationellt-ledarskap-gallande-ai-i-skolvasendet/

BELAGT (siffror ur medlemsundersökningen):
- **Endast fyra av tio skolledare** uppger att de eller deras personal fått den utbildning de behöver för att använda AI säkert
- En tredjedel av lärarna använder AI i sitt arbete (enligt TALIS)
- Sex av tio barn 8-19 år använder redan AI-verktyg (enligt Internetstiftelsen)

**Sex krav:**
1. Skolväsendet ska ingå i Sveriges AI-strategi
2. Alla huvudmän ska ta fram en lokal AI-policy med utsedd ansvarig
3. Staten ska ta fram **bindande standarder** för minskad dokumentationsbörda och ökad säkerhet
4. Riktade satsningar på kompetensutveckling
5. Tydliga skrivningar om AI, informationsförståelse och etik i läroplanerna
6. Fokus på **europeiska och säkra lösningar** för att minska risker vid datadelning

Ur ställningstagandet (ANDRAHAND, formulering ej fullt verifierad): "Sverige ska prioritera användning av europeisk, säker, transparent och etisk AI". Om arbetsbelastning: AI-transformationen får inte öka arbetsbördan, och utan tillräckliga resurser "riskerar vinsterna att utebli". Dokumentet lyfter också risken för "informationsasymmetri mellan arbetsgivare och arbetstagare" vid automatiserad dataanalys.

**Reaktion på AI-strategin, 23 februari 2026:**
https://www.skolledaren.se/aktuellt/nyheter/2026/2/nya-ai-beskedet-om-skolan-positivt-overraskad
Förbundsordförande Ann-Charlotte Gavelin Rydman är "positivt överraskad": "Det var verkligen inte självklart om man tänker på hur denna regering hittills pratat om skola och AI." Hon kräver dock fortsatt konkreta åtgärder, nationella riktlinjer och standarder för att säkra jämlika förutsättningar mellan skolor.

RESONEMANG: Krav nr 1 (skolan in i AI-strategin) blev alltså uppfyllt tre månader efter att det ställdes. Det är ovanligt tydlig kausalitet i svensk skolpolitik - och Swedish Edtechs parallella kampanj (avsnitt 7) drev åt samma håll.

---

## 4. Huvudmannanivå

Här är bilden **fragmenterad** - vilket är själva poängen. Det finns ingen nationell samordning, så varje huvudman gör sitt.

### 4.1 Norrköpings kommun - den mest genomarbetade kommunala vägledningen jag hittade

**Dokument:** *Vägledning kring generativ AI vid utbildningskontoret*
**Uppdaterad:** 20 maj 2026
**URL:** https://norrkoping.se/skola-och-forskola/pedagog-norrkoping/digital-forskola-och-skola/vagledning-kring-generativ-ai-vid-utbildningskontoret

BELAGT (med reservation för ordalydelse):
- **För lärare:** Google Gemini, NotebookLM och Microsoft Copilot - måste användas med inloggning via kommunens konton.
- **För gymnasieelever:** Gemini och NotebookLM från våren 2026 som del av Google Workspace for Education.
- **Förbud:** "Privatkonton eller gratisversioner av AI-tjänster ... är inte tillåtna" - de saknar erforderliga dataskyddsavtal.
- **Personuppgifter:** personal får inte mata in "direkta personuppgifter som fullständiga namn, personnummer eller känsliga elevuppgifter".
- **Bedömning:** "bör inte elever använda GAI vid prov eller andra bedömningsuppgifter". Läraren ansvarar för att granska allt AI-genererat undervisningsmaterial.
- **Upphovsrätt:** läromedel, elevtexter, musik och konst får inte laddas upp utan tillstånd.

RESONEMANG: Det här dokumentet är i praktiken vad Skolverket **inte** har producerat. Om du behöver en modell för en lokal AI-policy är detta den bästa svenska förlagan jag hittade.

### 4.2 Göteborgs stad

All pedagogisk personal med Google-konto i Göteborgsskolan har tillgång till Gemini.
https://sites.google.com/grundskola.goteborg.se/diginn/ai-i-f%C3%B6rvaltningen

### 4.3 Stockholms stad

Stockholms stad tillhandahåller Microsoft Copilot kostnadsfritt för sina pedagogiska verksamheter.
https://pedagog.stockholm/kompetensutveckling/verktyg-resurser/anvand-ai-chatten-copilot-for-ideer-och-inspiration-i-undervisningen/

### 4.4 AV-Media Kalmar län

Regional resurssamling för AI riktad till skolan: https://avmkl.se/resurser/ai/

### 4.5 Friskolekoncerner

**Internationella Engelska Skolan (IES):** flera skolor inom koncernen har valt **EdAider** för att fortbilda lärarna i AI. Joris de Kock, Academic Manager vid IES Liljeholmen, beskriver målet som att all personal ska få grundförståelse för vad AI är, hur det används och vad elever kan använda det till.
https://www.edaider.com/kunskapsbank/Internationella-Engelska-Skolan-valjer-EdAider-for-att-utbilda-lararna-i-AI
IES omfattar läsåret 2025/26 cirka 30 000 elever på 46 grundskolor och en gymnasieskola.

**LUCKA:** Jag hittade **ingen** dokumenterad koncernövergripande AI-satsning från **AcadeMedia** - Sveriges största friskolekoncern - trots riktade sökningar. Det betyder inte att den saknas, men den är inte offentligt kommunicerad på ett sätt som går att hitta. Samma sak gäller Kunskapsskolan och Thorengruppen. **Om detta är viktigt för dig bör det följas upp med direktkontakt eller sökning i koncernernas årsredovisningar.**

### 4.6 Skolplattformarna

Samtliga stora svenska plattformar marknadsför nu AI-funktioner:
- **Unikum** (https://www.unikum.net/) - "använder data och AI för att göra det lättare att fatta rätt beslut i klassrummet och i skolans kvalitetsarbete", 4000+ skolor och förskolor
- **InfoMentor** (https://www.infomentor.se/) - beskriver sig som "framtidens AI-drivna lärplattform"
- **SchoolSoft** (https://schoolsoft.se/)
- **Vklass** (https://en.vklass.com/rad-vid-upphandling-av-larplattform/leverantoerer-av-laerplattformar/)

**Edtechkartan** (Swedish Edtech Industry) har infört ett område för **AI-funktionalitet i lärande** med en transparenschecklista, avsedd att täcka digitala tjänster som helt eller delvis använder AI för att automatiskt generera innehåll, analysera data, ge rekommendationer eller påverka beslut om elevresultat, resursfördelning eller uppföljning.
https://edtechkartan.se/skola/

RESONEMANG: Marknadsföringstexterna är genomgående vaga om **vad** AI-funktionerna gör. Jag hittade ingen svensk plattform som öppet beskriver automatiserad betygsättning eller omdömesgenerering - vilket är rimligt givet både Skolverkets råd och AI-förordningen (avsnitt 6). Men det innebär också att det är svårt för en enskild lärare att veta vad som faktiskt körs i bakgrunden på plattformen. Edtechkartans checklista är det enda transparensinstrument jag hittade.

---

## 5. Bedömning och nationella prov

Detta är området där det svenska svaret är **tydligast** - och svaret är: **inte AI.**

### 5.1 Central rättning införs - av människor

**Skolverket, 11 maj 2026:** *Skolverket föreslår stegvist införande av digitala nationella slutprov*
https://www.skolverket.se/om-skolverket/nyheter-och-pressmeddelanden/nyheter/nyheter/2026-05-11-skolverket-foreslar-stegvist-inforande-av-digitala-nationella-slutprov

**Redovisning av ändrat uppdrag (2026):** https://www.skolverket.se/sok-publikationer/publikationsserier/regeringsuppdrag/2026/redovisning-av-andring-av-uppdraget-att-digitalisera-de-nationella-proven

**Regeringsuppdrag, februari 2026:** https://www.regeringen.se/regeringsuppdrag/2026/02/andring-av-uppdraget-till-statens-skolverk-att-digitalisera-de-nationella-proven-m.m

**Regeringsuppdrag och pressmeddelande, 24 juli 2026:**
https://www.regeringen.se/pressmeddelanden/2026/07/regeringen-ger-skolverket-i-uppdrag-att-utveckla-och-tillhandahalla-digitala-nationella-slutprov-som-rattas-centralt/
https://www.regeringen.se/regeringsuppdrag/2026/07/uppdrag-till-statens-skolverk-om-digitala-prov/

BELAGT:
- Från **hösten 2026** bedöms delar av de digitala nationella proven centralt i stället för lokalt på skolorna. Syftet är mer likvärdig bedömning.
- **Central rättning införs hösten 2026 för uppsatsdelarna** i svenska och svenska som andraspråk kurs 3 samt engelska kurs 6 på gymnasiet.
- Bedömarna ska vara **certifierade och ämnesbehöriga** för aktuell årskurs eller kurs och ha genomgått Skolverkets bedömarutbildning.
- Fullt utbyggt 2028 kräver systemet cirka **3 500 lärare** som bedömer omkring **400 000 elevprestationer per år**.
- **Automaträttning** används för uppgifter med givna svarsalternativ och vissa kortsvarsuppgifter. **Uppgifter där eleven formulerar egna svar - argumentationer, längre texter, uppsatser - bedöms manuellt i provplattformen.**
- Tidsplan enligt juli 2026-uppdraget: nytt betygssystem successivt från 2028, första nationella slutproven 2029, meritvärden baserade på slutprovsresultat 2031. Inledningsvis kan proven skrivas på papper med central rättning via skanning.

**AI eller automatiserad AI-rättning nämns inte** i regeringens pressmeddelande från juli 2026.

*(Reservation: WebFetch återgav ministercitat i pressmeddelandet med attributioner jag inte kunnat dubbelkontrollera - bland annat en formulering tillskriven kulturministern, vilket verkar oväntat i sammanhanget. Substansen ovan bedömer jag som korrekt; de enskilda citaten bör verifieras mot originalet innan de används.)*

**Bakgrund - haveriet 2025:** de digitala nationella proven ställdes in, vilket väckte kraftig kritik från rektorshåll:
https://www.skolledaren.se/aktuellt/nyheter/2025/3/skolledare-om-installda-digitala-np-inte-forvanade/
https://www.vilarare.se/nyheter/digitala-nationella-prov/provplattformen-riskera-forsena-nytt-betygssystem/

### 5.2 Slutsats om AI i bedömning

**Sverige har valt mänsklig central rättning, inte AI-rättning, för de bedömningsuppgifter som kräver omdöme.** Det är ett aktivt vägval: när regeringen skulle lösa likvärdighetsproblemet i bedömning valde man 3 500 certifierade lärare framför en modell. AI-automatik begränsas till flervalsuppgifter och korta faktasvar - alltså den typ av automaträttning som funnits långt före generativ AI.

Kombinerat med Skolverkets råd (1.2) att AI inte får ersätta lärarens beslut om betyg, och med AI-förordningens högriskklassning (6.3), är det svenska läget för din del: **AI får användas som stöd i ditt förberedelsearbete, men bedömningsbeslutet måste vara ditt, dokumenterat och försvarbart.**

---

## 6. GDPR och juridik

### 6.1 IMY:s prioriteringar - skolan finns inte som eget område

**IMY, 3 februari 2026:** *IMY:s prioriteringar 2026 - AI, barn och brottsbekämpning*
https://www.imy.se/nyheter/imys-prioriteringar-2026--ai-barn-och-brottsbekampning

BELAGT: Tre prioriterade områden för 2026: **AI i offentlig sektor**, **dataskydd för barn och unga**, samt **brottsbekämpningsverktyg**. Generaldirektör Eric Leijonram: "Vi prioriterar därför områden där våra insatser kan göra mest skillnad."

**Skolan nämns inte som egen prioritering** - endast i sammanhanget barn och unga, där texten talar om "vuxna som hanterar deras uppgifter, till exempel vårdnadshavare och skolan".

Tillsyns- och vägledningsprioriteringar 2025: https://www.imy.se/publikationer/tillsyns--och-vagledningsprioriteringar-2025/

### 6.2 IMY:s befintliga skolvägledning

- **Personuppgifter i skola och förskola:** https://www.imy.se/verksamhet/dataskydd/dataskydd-pa-olika-omraden/skola-och-forskola/
- **Digital undervisning och personuppgifter:** https://www.imy.se/verksamhet/dataskydd/dataskydd-pa-olika-omraden/skola-och-forskola/digital-undervisning/
- **För personuppgiftsansvariga inom skola och förskola:** https://www.imy.se/verksamhet/dataskydd/dataskydd-pa-olika-omraden/skola-och-forskola/for-personuppgiftsansvariga-inom-skola-och-forskola

**Relevant praxis - molntjänster i skolan:**
- **Sanktionsavgift mot kommun som inte bedömt konsekvenser innan Google Workspace infördes:** https://www.imy.se/nyheter/sanktionsavgift-mot-kommun-som-inte-bedomt-konsekvenser-innan-google-workspace-infordes/
- **Tillsyn: Barn- och utbildningsnämnden, Östersunds kommun** (beslut 2023): https://www.imy.se/tillsyner/barn--och-utbildningsnamnden-ostersunds-kommun/ - nästan 6 000 elevers och 1 300 anställdas personuppgifter behandlades i en skolplattform; **konsekvensbedömning (DPIA) krävs innan så omfattande behandling av barns personuppgifter påbörjas.**
- **Skola måste sluta använda molntjänst:** https://www.imy.se/om-oss/arkiv/nyhetsarkiv/skola-maste-sluta-anvanda-molntjanst/

RESONEMANG: Östersundsbeslutet är den mest användbara analogin. Logiken - omfattande behandling av barns personuppgifter i en ny digital tjänst kräver DPIA i förväg - gäller uppenbart också när en huvudman rullar ut Gemini eller Copilot till lärare och elever. Det är förmodligen därför Norrköpings vägledning (4.1) är så tydlig med att bara kommunkonton får användas.

### 6.3 EU:s AI-förordning - det som händer om fem dagar

BELAGT (allmänt känt regelverk): AI-förordningen (AI Act) trädde i kraft 1 augusti 2024. Enligt **Annex III** klassas AI-system som används för att **utvärdera läranderesultat** inom utbildning som **högrisk**. Kraven för högrisk-AI börjar gälla **2 augusti 2026**.

För högrisksystem krävs bland annat **meningsfull mänsklig tillsyn** ("meaningful human oversight").

**VARNING OM KÄLLÄGET:** De sökträffar jag fick om AI-förordningen och svensk skola kom huvudsakligen från **kommersiella aktörer** (bedoma.se, teknikministeriet.se, aival.se) som säljer AI-bedömningsverktyg eller AI-rådgivning. Deras framställningar - till exempel att "AI:ns resultat presenteras som indikation, aldrig som beslut" - är **partsinlagor om den egna produktens laglighet**, inte myndighetsbesked. Jag har inte hittat något svenskt myndighetsdokument från Skolverket eller IMY som gör en samlad tolkning av vad AI-förordningens högriskregler betyder för svenska skolor.

**Detta är den största juridiska luckan i det svenska underlaget.** Högriskkraven träder i kraft om några dagar, och det finns ingen svensk myndighetsvägledning som säger vad en huvudman eller enskild lärare ska göra.

Även ett påstående jag såg om "skärpta bestämmelser i dataskyddsförordningen (GDPR 2.0)" bör ignoreras - jag kunde inte belägga att någon sådan ändring finns, och begreppet "GDPR 2.0" används inte av IMY eller EU-kommissionen.

**Digg:** *Bedöm upphovsrätten vid användningen av generativ AI* - https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai/bedom-upphovsratten-vid-anvandningen-av-generativ-ai (riktar sig till offentlig förvaltning brett, inte skola specifikt, men är en myndighetskälla).

---

## 7. Lärarledda nätverk, konferenser och tongivande röster

### 7.1 SETT 2026

**Datum:** 14-15 april 2026, Kistamässan, Stockholm
**Tema:** "Democratic Resilience - Our role in shaping reflective and participating citizens"
https://www.settdagarna.se/en/about-us/
https://www.mynewsdesk.com/se/easyfairs/pressreleases/sett-2026-skolans-roll-i-att-staerka-demokratin-i-en-tid-av-ai-och-polarisering-3442565

Över 170 utställare. Seminarieprogrammet innehöll bland annat AI för lärare, val av lärverktyg och elevers utsatthet på nätet, samt stationer där elever och lärare demonstrerade AI-verktyg. Skolverket hade egen närvaro: https://www.skolverket.se/kompetensutveckling/kalender-for-webbinarier-och-konferenser/skolverket-pa-sett-2026

RESONEMANG - relevant för dig: SETT 2026:s tema kopplade AI direkt till **demokratiuppdraget och polarisering inför valet**. Det är samhällskunskapens kärnområde, och det gör SETT till den svenska konferens som ligger närmast ditt ämne.

### 7.2 Swedish Edtech Industry - den mest effektiva lobbyaktören

**Debattutspel, 18 november 2025:** *Varför lämnas skolan utanför AI-strategin, statsministern?*
https://www.mynewsdesk.com/se/swedish-edtech-industry/pressreleases/debattutspel-varfoer-laemnas-skolan-utanfoer-ai-strategin-statsministern-3417006
**Avsändare:** Jannie Jeppesen, VD

BELAGT (citat, reservation för ordalydelse):
- "Att rusta elever med AI-kompetens är ett samhällsbehov, det kan inte väljas bort"
- Risken är att göra "kunskapsnationen Sverige till ett landet lättlurad"
- "Skolväsendet i princip är hälften av offentlig sektor"

Fyra problempunkter: mer än tre av fyra elever på högstadiet och gymnasiet använder redan AI-verktyg medan skolan lämnas utanför strategiarbetet; **den nya lärarutbildningen saknar krav på AI-kunskap**; AI-förordningen ska tolkas men skolväsendet måste lösa det själv; risk för ökade klyftor och försvagat kompensatoriskt uppdrag.

RESONEMANG: Notera att detta är en **branschorganisation för edtech-företag**. Kritiken är i sak träffsäker, men avsändaren har kommersiellt intresse av att skolan köper AI-verktyg. Läs den som ett välformulerat partsinlägg som råkade sammanfalla med Sveriges Skolledares krav - och tre månader senare fick regeringen att skriva in skolan i strategin.

### 7.3 Tongivande enskilda röster

Här är underlaget tunnare än jag hoppats. Den svenska AI-skoldebatten verkar inte ha kristalliserat sig kring lika tydliga namn som exempelvis skärmdebatten gjorde.

**Sara Bruun** - språklärare och samordnare för Samverkan för bästa skola i Hässleholms kommun, bloggare på Skolvärlden, en av de mest synliga lärarrösterna om digitalisering och AI.
- Blogg: https://skolvarlden.se/bloggar/sara-bruun/utbilda-sveriges-larare-nu
- Krönika i Vi Lärare: *Fokusera på lärandet - inte görandet* - https://www.vilarare.se/nyheter/kronika2/sara-bruun-fokusera-pa-larandet--inte-gorandet/
- Egen sajt: https://sarabruun.se/

**LUCKA:** Jag hittade **inga svenska Facebookgrupper eller lärarnätverk** för AI i skolan som är dokumenterade i sökbara källor. Sådana grupper existerar nästan säkert (de är centrala i svensk lärarkultur), men de är stängda eller osökbara. **Detta går inte att researcha utifrån - fråga i ditt eget kollegiala nätverk i stället.**

---

## 8. Norden - där Sverige ligger efter

Detta är rapportens tydligaste fynd. **Norge, Danmark och Finland har alla nationella riktlinjer för AI i skolan. Sverige har råd på en webbsida.**

### 8.1 Norge - mest utvecklat

**Nationella anbefalningar, regeringen:** *Kunstig intelligens skal i all hovedsak ikke brukes i barneskolen*
https://www.regjeringen.no/no/aktuelt/kunstig-intelligens-skal-i-all-hovedsak-ikke-brukes-i-barneskolen/id3166807/
*(Sidan gav HTTP 403 vid direkt hämtning; innehållet nedan är ANDRAHAND via sökresultat.)*

Se även: *Bruk av KI øker i skolen - kunnskapsministeren varsler grep* - https://www.regjeringen.no/no/aktuelt/bruk-av-ki-oker-i-skolen-kunnskapsministeren-varsler-grep/id3146819/

**Udir har fått i uppdrag att publicera åldersanpassade nationella anbefalningar** för grundopplæringen:
- **Årskurs 1-7:** eleverna ska "i all hovedsak ikke" ges tillgång till KI
- **Årskurs 8-10:** KI kan användas gradvis och försiktigt, **förutsatt att lärarna först har skaffat sig tillräcklig kompetens** innan eleverna får undervisning och tillgång
- **Videregående (motsvarande gymnasiet):** eleverna **bör** lära sig använda KI ändamålsenligt så att de är förberedda för vidare utbildning och arbete

**Udirs sidor:**
- https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/kunstig-intelligens-i-skolen/
- *Råd om kunstig intelligens i skolen* (senast ändrad 2 december 2025): https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/kunstig-intelligens-ki-i-skolen/kunstig-intelligens-ki-i-skolen/

BELAGT: Udir utvecklar råd, stöd och vägledning till lärare, ledare och skolägare, öppet tillgängligt. En **kompetansepakke** stödjer lärare, skolledare och skolägare i att ta i bruk KI tryggt och ändamålsenligt, och kopplar tekniken till läroplaner och pedagogisk praktik. Udir ska också **beskriva vilken kompetens en lärare behöver** för att använda KI ändamålsenligt i klassrummet.

**Om bedömning:** Udir råder till att kombinera flera och varierade uppgiftstyper och att basera bedömningen på flera källor, för att läraren ska få en så riktig bild som möjligt av vad eleven kan.

**Debatt och politik:**
- Stortinget, representantforslag om att förhindra fusk med KI i skolan (2025-2026): https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Representantforslag/2025-2026/dok8-202526-241s/
- Kritik från Barnevakten: *"Pinglete veileder fra Udir om kunstig intelligens i skolen"* - https://www.barnevakten.no/veileder-om-ki-i-skolen/
- Rektorer efterlyser mer kompetens och tydligare nationella föringar: https://www.utdanningsnytt.no/kunstig-intelligens-rektor-utdanningsdirektoratet/kunstig-intelligens-rektorer-etterlyser-mer-kompetanse-og-nasjonale-foringer/491799
- Kommunala initiativ, t.ex. **SkoleGPT** i Askerskolen: https://sites.google.com/askerskolen.no/undervise-digitalt/kunstig-intelligens-i-skolen/om-skolegpt

RESONEMANG: Norges konstruktion är i grunden **samma åldersgradering som Sverige argumenterar för** - men Norge har skrivit ner den, kopplat den till läroplanerna, gett Udir i uppdrag att definiera lärarkompetensen, och byggt en kompetenspaket. Sverige har principen men inte instrumenten. Notera särskilt kravet att **lärarna ska ha kompetensen innan eleverna får tillgång** - det är den enda nordiska formulering jag hittat som gör lärarfortbildning till en förutsättning snarare än en förhoppning.

### 8.2 Danmark - starkast på examensregler och juridik

**Vejledning om lovlig brug af kunstig intelligens for uddannelsesinstitutionerne**, Børne- og Undervisningsministeriet, maj 2025:
https://www.uvm.dk/-/media/filer/uvm/udd/folke/pdf25/maj/250526-vejledning-om-lovlig-brug-af-kunstig-intelligens-for-uddannelsesinstitutionerne.pdf

**Mini-guide til uddannelsesinstitutioner om lovlig brug af kunstig intelligens (AI)**, Styrelsen for It og Læring (STIL), januari 2026:
https://stil.dk/aktuelt/2026/januar/060126_mini-guide-til-uddannelsesinstitutioner-om-lovlig-brug-af-kunstig-intelligens-ai/
Syfte: skydda barns och ungas data.

**Nye initiativer skal give viden om kunstig intelligens i undervisningen i gymnasiet**, 13 maj 2025:
https://www.uvm.dk/aktuelt/nyheder/uvm/2025/maj/250513-nye-initiativer-skal-give-viden-om-kunstig-intelligens-i-undervisningen-i-gymnasiet
Styrelsen for Undervisning og Kvalitet sjösatte fyra initiativ på danska gymnasier för att få mer kunskap om hur gymnasier kan hantera generativ AI i undervisningen.

ANDRAHAND: I **juni 2026** publicerade Børne- og Undervisningsministeriet **sju rekommendationer** för hur generativ AI ska inarbetas i undervisningen i folkeskolen. (Jag hittade referenser till dessa men inte den primära dokumentsidan - **följ upp på uvm.dk om detta är viktigt.**)

**Examensregler:** ANDRAHAND, via sekundärkällor - med den nya examensbekendtgørelsen från **1 februari 2026** är förbudet mot AI-chattbottar vid gymnasieexamina formellt kodifierat, med uttryckligt förbud mot ChatGPT, Claude, Gemini och liknande vid **alla skriftliga och muntliga prov**. Undantag görs för it-ämnen och vissa tekniska ämnen där AI-användning kan ingå i läroplans- och examensmålen. Gymnasieskolen rapporterar dock att AI vid examen fått grönt ljus av GL (Gymnasieskolernes Lærerforening) och faglige foreninger i vissa sammanhang: https://gymnasieskolen.dk/articles/kunstig-intelligens-til-eksamen-faar-groent-lys-af-gl-og-faglige-foreninger/

*(De två sista punkterna kommer delvis från kommersiella danska sajter - verifiera mot uvm.dk innan de citeras.)*

### 8.3 Finland - först ut med heltäckande rekommendationer

**Tekoälysuositukset varhaiskasvatukseen, opetukseen ja koulutukseen** (AI-rekommendationer för småbarnspedagogik, undervisning och utbildning)
**Publicerade:** mars 2025, av Undervisnings- och kulturministeriet tillsammans med Utbildningsstyrelsen (OPH/EDUFI)
- Engelsk sida: https://www.oph.fi/en/artificial-intelligence-education-legislation-and-recommendations
- Nyhet: https://www.oph.fi/fi/uutiset/2025/tekoalysuositukset-varhaiskasvatukseen-opetukseen-ja-koulutukseen-julkaistu
- Remissförfarande (svenskspråkig sida): https://valtioneuvosto.fi/-/1410845/tekoaly-varhaiskasvatuksessa-ja-koulutuksessa-lainsaadanto-ja-suositukset-kokonaisuuden-keskeisin-sisalto-lausunnolle?languageId=sv_SE

BELAGT: Materialet heter *Lagstiftning och rekommendationer för artificiell intelligens inom småbarnspedagogik och utbildning* och **täcker hela kedjan** - småbarnspedagogik, grundläggande utbildning, gymnasieutbildning, yrkesutbildning och fri bildning. Det redogör för **juridiska skyldigheter som redan gäller** och ger vägledning för ansvarsfull, säker och innovativ AI-användning. Nyckelteman: AI-litteracitet, regelefterlevnad, etisk användning. **Finns på finska, svenska och engelska.**

**Utbildningsvideor** om rekommendationerna publicerades 2026: https://www.oph.fi/fi/uutiset/2026/tekoalysuosituksiin-voi-perehtya-uusien-koulutusvideoiden-avulla

RESONEMANG - och detta är praktiskt användbart för dig: **det finska materialet finns på svenska.** Det är alltså den enda nordiska nationella AI-vägledningen för hela skolväsendet som du kan läsa på ditt eget språk. Kombinationen "juridiska skyldigheter som redan gäller" plus pedagogisk vägledning är precis det som saknas i det svenska underlaget (jämför 6.3).

### 8.4 Vad Norden gjort som Sverige inte gjort - sammanställt

| | Sverige | Norge | Danmark | Finland |
|---|---|---|---|---|
| Nationella riktlinjer för AI i skolan | Nej (endast råd på webbsida) | Ja, åldersgraderade anbefalningar | Ja, vejledning + mini-guide + 7 rekommendationer | Ja, heltäckande rekommendationer |
| Nationell kompetenspaket för lärare | Nej | Ja (Udirs kompetansepakke) | Delvis (gymnasieinitiativ) | Ja (utbildningsvideor, lärarutbildning) |
| Definierad lärarkompetens för AI | Nej | Ja, Udir har uppdraget | Nej | Delvis |
| Juridisk vägledning riktad till skolan | Nej | Delvis | Ja (STIL mini-guide) | Ja (lagstiftningsdelen) |
| Reglerade AI-regler vid examina | Nej (endast råd) | Under utredning i Stortinget | Ja, kodifierat feb 2026 | Ej verifierat |

*(Tabellen är min sammanställning - RESONEMANG utifrån källorna ovan, inte ett citat ur någon jämförande studie.)*

---

## 9. Den svenska debatten - positionerna

Debatten förs framför allt i fackpressen: **Vi Lärare** (vilarare.se) och **Skolvärlden** (skolvarlden.se), samt på kultursidorna.

### Position 1: "Gå långsamt, vi har bränt oss förr"

Dominerande facklig position. Sveriges Lärare: "Vi ska inte vara rädda för det nya men vi ska skynda långsamt." Bygger på minnet av tidigare digitaliseringssatsningar som forcerades uppifrån och gick fel. Krav på tid, kompetensutveckling och riskanalys.
https://www.vilarare.se/nyheter/digitalisering/sveriges-larares-krav-nationell-ai-strategi/

### Position 2: AI-kritik från kultur- och bildningshåll

*AI-tjänsterna i skolan kommer att bli ett allt större problem*, Göteborgs-Posten kulturdebatt:
https://www.gp.se/kultur/kulturdebatt/ai-tjansterna-i-skolan-kommer-att-bli-ett-allt-storre-problem.d7db7538-3cb7-44bb-9fe7-8308d7b4340e

*"Kan vi sluta behandla AI som en frälsare?"*, Vi Lärare debatt:
https://www.vilarare.se/nyheter/vi-larare-debatt/kan-vi-sluta-behandla-ai-som-en-fralsare/

*"AI kan vänta - lärarna är viktigare än företagen"*, Vi Lärare debatt:
https://www.vilarare.se/nyheter/vi-larare-debatt/debatt-ai-kan-vanta--lararna-ar-viktigare-an-foretagen/

*Hon ger AI i skolan F i betyg*, Vi Lärare debatt:
https://www.vilarare.se/nyheter/vi-larare-debatt/hon-ger-ai-i-skolan-f-i-betyg/

### Position 3: Förespråkarna - "förbud vore värre"

*"AI-förbud i klassrummet en väg till sämre lärande"*, Vi Lärare debatt:
https://www.vilarare.se/nyheter/vi-larare-debatt/ai-forbud-en-vag-till-samre-larande/

*Lärarens rädsla: Att AI-boten förbjuds i skolan*, Skolvärlden - NO-läraren Anders Enström i Huddinge: "Min bild är att vi får ett verktyg som kommer att förändra hela skolan." Han varnar: "Den största faran är att hela verktyget stämplas som ett fuskverktyg."
https://skolvarlden.se/artiklar/lararens-radsla-att-ai-boten-forbjuds-i-skolan

*"AI kan differentiera undervisningen"* / lärare drabbas av motstridiga pedagogiska ideal:
https://www.vilarare.se/nyheter/vi-larare-debatt/larare-drabbas-av-motstridiga-pedagogiska-ideal/

### Position 4: "Debatten är för svartvit"

*Läraren om AI: "Synd att debatten är svartvit"*:
https://www.vilarare.se/nyheter/digitalisering/sveriges-larares-krav-nationell-ai-strategi/

### Ett internationellt perspektiv som spelat roll i debatten

*Internationell studie visar att lärare i Sverige inte avlastas med AI* (Almega Utbildning, 7 oktober 2025):
https://www.almegautbildning.se/2025/10/07/internationell-studie-visar-att-larare-i-sverige-inte-avlastas-med-ai/

RESONEMANG: Detta är det enskilt mest obekväma fyndet för AI-optimisterna. Om det centrala argumentet för AI i lärararbetet är arbetsbelastning - och det är det, i praktiskt taget varje svenskt policydokument - men internationell data inte visar någon avlastning för svenska lärare, då står argumentet på svag empirisk grund. **Följ upp vilken studie det rör sig om** (troligen TALIS-relaterat, se Sveriges Skolledares användning av TALIS i 3.2); jag verifierade inte primärstudien.

---

## Sammanställd källförteckning

**Skolverket**
1. *Skolverket följer upp AI-användningen i skolan*, pressmeddelande 2026-05-26 - https://www.skolverket.se/om-skolverket/nyheter-och-pressmeddelanden/pressmeddelanden/pressmeddelanden/2026-05-26-skolverket-foljer-upp-ai-anvandningen-i-skolan
2. *Artificiell intelligens i undervisningen* (2026:982), 2026-05-26 - https://www.skolverket.se/download/18.4ffcdbda19e49f0500f58fa/1779459449440/pdf13417.pdf
3. *Råd om AI, chattbottar och liknande verktyg*, uppd. 2026-06-18 - https://www.skolverket.se/kompetensutveckling/stod-i-arbetet/rad-om-ai-chattbottar-och-liknande-verktyg
4. *Artificiell intelligens i undervisningen - gymnasieskolan*, 2024 - https://www.skolverket.se/sok-publikationer/publikationsserier/ovrigt-material/2024/artificiell-intelligens-i-undervisningen---gymnasieskolan
5. *Artificiell intelligens i undervisningen - grundskolan, förskoleklass och fritidshem*, 2024 - https://www.skolverket.se/publikationsserier/ovrigt-material/2024/artificiell-intelligens-i-undervisningen---grundskolan-forskoleklass-och-fritidshem
6. *Artificiell intelligens - nytt ämne i gymnasieskolan och komvux* - https://www.skolverket.se/styrning-och-ansvar/forandringar-inom-skolomradet/sidor-tidigare-forandringar/artificiell-intelligens---nytt-amne-i-gymnasieskolan-och-komvux
7. *Undervisa i artificiell intelligens på gymnasiet*, uppd. 2026-06-18 - https://www.skolverket.se/kompetensutveckling/kurser-och-utbildningar/sok-kurser-och-utbildningar/undervisa-i-artificiell-intelligens-pa-gymnasiet
8. *Skolverket föreslår stegvist införande av digitala nationella slutprov*, 2026-05-11 - https://www.skolverket.se/om-skolverket/nyheter-och-pressmeddelanden/nyheter/nyheter/2026-05-11-skolverket-foreslar-stegvist-inforande-av-digitala-nationella-slutprov
9. *Redovisning av ändring av uppdraget att digitalisera de nationella proven*, 2026 - https://www.skolverket.se/sok-publikationer/publikationsserier/regeringsuppdrag/2026/redovisning-av-andring-av-uppdraget-att-digitalisera-de-nationella-proven

**Regeringen och riksdagen**
10. *Sveriges AI-strategi*, feb 2026 - https://www.regeringen.se/contentassets/bb4fd7346ff64e50a0b25c20ca2e2ae2/sveriges-ai-strategi.pdf | https://www.regeringen.se/regeringens-politik/sveriges-ai-strategi/
11. *Sveriges AI-strategi på fem minuter*, 2026-02-20 - https://www.regeringen.se/artiklar/2026/02/sveriges-ai-strategi-pa-fem-minuter/
12. *Regeringen ger Skolverket i uppdrag att utveckla och tillhandahålla digitala nationella slutprov som rättas centralt*, 2026-07-24 - https://www.regeringen.se/pressmeddelanden/2026/07/regeringen-ger-skolverket-i-uppdrag-att-utveckla-och-tillhandahalla-digitala-nationella-slutprov-som-rattas-centralt/
13. *Uppdrag till Statens skolverk om digitala prov*, 2026-07 - https://www.regeringen.se/regeringsuppdrag/2026/07/uppdrag-till-statens-skolverk-om-digitala-prov/
14. *Ändring av uppdraget till Statens skolverk att digitalisera de nationella proven m.m.*, 2026-02 - https://www.regeringen.se/regeringsuppdrag/2026/02/andring-av-uppdraget-till-statens-skolverk-att-digitalisera-de-nationella-proven-m.m
15. *Nytt uppdrag till Skolverket om lärverktyg ska ge mer lästid och mindre skärmtid*, 2023-11 - https://www.regeringen.se/pressmeddelanden/2023/11/nytt-uppdrag-till-skolverket-om-larverktyg-ska-ge-mer-lastid-och-mindre-skarmtid/
16. *Remiss av Skolverkets förslag till nationell digitaliseringsstrategi 2023-2027* - https://www.regeringen.se/remisser/2023/03/remiss-av-statens-skolverks-forslag-till-nationell-digitaliseringsstrategi-for-skolvasendet-20232027/
17. *AI-kommissionens Färdplan för Sverige*, SOU 2025:12 - https://www.riksdagen.se/sv/dokument-och-lagar/dokument/statens-offentliga-utredningar/ai-kommissionens-fardplan-for-sverige_hdb312/html/
18. Svar på skriftlig fråga 2025/26:96, 2025-10-21 - https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svar-pa-skriftlig-fraga/statens-stod-till-skolvasendet-vad-galler-ai_hd1296/
19. Svar på skriftlig fråga 2025/26:867, 2026-06-10 - https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svar-pa-skriftlig-fraga/ansvaret-for-att-skolan-rustar-eleverna-med_hd12867/
20. *Utbildningsdepartementets samlade budgetsatsningar 2026* - https://www.regeringen.se/regeringens-politik/utbildningsdepartementets-samlade-budgetsatsningar/utbildningsdepartementets-samlade-budgetsatsningar-2026/

**Fack och intresseorganisationer**
21. Sveriges Lärare, *Lärarledd digitalisering?*, 2024-04-11 - https://www.sverigeslarare.se/om-oss/opinion-debatt/undersokningar/lararledd-digitalisering/
22. Sveriges Skolledare, *Ställningstagande - AI i skolväsendet*, nov 2025 - https://www.sverigesskolledare.se/globalassets/stallningstagande---ai-i-skolvasendet_web.pdf
23. Sveriges Skolledare, *kräver nationellt ledarskap gällande AI*, 2025-12-11 - https://www.sverigesskolledare.se/nyheter2/nyheter/2025/12/sveriges-skolledare-kraver-nationellt-ledarskap-gallande-ai-i-skolvasendet/
24. Skolledaren, *Nya AI-beskedet om skolan: "Positivt överraskad"*, 2026-02-23 - https://www.skolledaren.se/aktuellt/nyheter/2026/2/nya-ai-beskedet-om-skolan-positivt-overraskad
25. Swedish Edtech Industry, debattutspel 2025-11-18 - https://www.mynewsdesk.com/se/swedish-edtech-industry/pressreleases/debattutspel-varfoer-laemnas-skolan-utanfoer-ai-strategin-statsministern-3417006
26. Läromedelsförfattarna, *Värna upphovsrätten i regeringens AI-satsning* - https://www.laromedelsforfattarna.se/allanyheter/varna-upphovsratten-i-regeringens-ai-satsning/

**Huvudmän och plattformar**
27. Norrköpings kommun, *Vägledning kring generativ AI vid utbildningskontoret*, uppd. 2026-05-20 - https://norrkoping.se/skola-och-forskola/pedagog-norrkoping/digital-forskola-och-skola/vagledning-kring-generativ-ai-vid-utbildningskontoret
28. Göteborgs stad grundskoleförvaltning, AI i förvaltningen - https://sites.google.com/grundskola.goteborg.se/diginn/ai-i-f%C3%B6rvaltningen
29. Pedagog Stockholm, Copilot i undervisningen - https://pedagog.stockholm/kompetensutveckling/verktyg-resurser/anvand-ai-chatten-copilot-for-ideer-och-inspiration-i-undervisningen/
30. EdAider om Internationella Engelska Skolan - https://www.edaider.com/kunskapsbank/Internationella-Engelska-Skolan-valjer-EdAider-for-att-utbilda-lararna-i-AI
31. Edtechkartan, Swedish Edtech Industry - https://edtechkartan.se/skola/

**Juridik**
32. IMY, *IMY:s prioriteringar 2026*, 2026-02-03 - https://www.imy.se/nyheter/imys-prioriteringar-2026--ai-barn-och-brottsbekampning
33. IMY, *Personuppgifter i skola och förskola* - https://www.imy.se/verksamhet/dataskydd/dataskydd-pa-olika-omraden/skola-och-forskola/
34. IMY, *Digital undervisning och personuppgifter* - https://www.imy.se/verksamhet/dataskydd/dataskydd-pa-olika-omraden/skola-och-forskola/digital-undervisning/
35. IMY, *Sanktionsavgift mot kommun som inte bedömt konsekvenser innan Google Workspace infördes* - https://www.imy.se/nyheter/sanktionsavgift-mot-kommun-som-inte-bedomt-konsekvenser-innan-google-workspace-infordes/
36. IMY, tillsyn Östersunds kommun, 2023 - https://www.imy.se/tillsyner/barn--och-utbildningsnamnden-ostersunds-kommun/
37. Digg, *Bedöm upphovsrätten vid användningen av generativ AI* - https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai/bedom-upphovsratten-vid-anvandningen-av-generativ-ai

**Norden**
38. Regjeringen.no, *Kunstig intelligens skal i all hovedsak ikke brukes i barneskolen* - https://www.regjeringen.no/no/aktuelt/kunstig-intelligens-skal-i-all-hovedsak-ikke-brukes-i-barneskolen/id3166807/
39. Regjeringen.no, *Bruk av KI øker i skolen* - https://www.regjeringen.no/no/aktuelt/bruk-av-ki-oker-i-skolen-kunnskapsministeren-varsler-grep/id3146819/
40. Udir, *Kunstig intelligens i skolen* - https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/kunstig-intelligens-i-skolen/
41. Udir, *Råd om kunstig intelligens i skolen*, uppd. 2025-12-02 - https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/kunstig-intelligens-ki-i-skolen/kunstig-intelligens-ki-i-skolen/
42. Stortinget, representantforslag om KI-fusk 2025-2026 - https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Representantforslag/2025-2026/dok8-202526-241s/
43. Børne- og Undervisningsministeriet, *Vejledning om lovlig brug af kunstig intelligens*, maj 2025 - https://www.uvm.dk/-/media/filer/uvm/udd/folke/pdf25/maj/250526-vejledning-om-lovlig-brug-af-kunstig-intelligens-for-uddannelsesinstitutionerne.pdf
44. STIL, *Mini-guide til uddannelsesinstitutioner om lovlig brug af AI*, jan 2026 - https://stil.dk/aktuelt/2026/januar/060126_mini-guide-til-uddannelsesinstitutioner-om-lovlig-brug-af-kunstig-intelligens-ai/
45. UVM, *Nye initiativer ... i gymnasiet*, 2025-05-13 - https://www.uvm.dk/aktuelt/nyheder/uvm/2025/maj/250513-nye-initiativer-skal-give-viden-om-kunstig-intelligens-i-undervisningen-i-gymnasiet
46. OPH/EDUFI, *Artificial intelligence in education - legislation and recommendations*, mars 2025 - https://www.oph.fi/en/artificial-intelligence-education-legislation-and-recommendations
47. OPH, utbildningsvideor om AI-rekommendationerna, 2026 - https://www.oph.fi/fi/uutiset/2026/tekoalysuosituksiin-voi-perehtya-uusien-koulutusvideoiden-avulla

**Debatt och konferenser**
48. SETT 2026 - https://www.settdagarna.se/en/about-us/ | https://www.mynewsdesk.com/se/easyfairs/pressreleases/sett-2026-skolans-roll-i-att-staerka-demokratin-i-en-tid-av-ai-och-polarisering-3442565
49. Skolverket på SETT 2026 - https://www.skolverket.se/kompetensutveckling/kalender-for-webbinarier-och-konferenser/skolverket-pa-sett-2026
50. Sara Bruun, Skolvärlden - https://skolvarlden.se/bloggar/sara-bruun/utbilda-sveriges-larare-nu
51. Altinget, *Utbildningens roll förbisedd i AI-kommissionens färdplan* - https://www.altinget.se/artikel/utbildningens-roll-forbisedd-i-ai-kommissionens-fardplan
52. Altinget, *Efter slopad digitaliseringsstrategi - Skolverket får nytt uppdrag* - https://www.altinget.se/artikel/efter-slopad-digitaliseringsstrategi-skolverket-faar-nytt-uppdrag
53. Almega Utbildning, *Internationell studie visar att lärare i Sverige inte avlastas med AI*, 2025-10-07 - https://www.almegautbildning.se/2025/10/07/internationell-studie-visar-att-larare-i-sverige-inte-avlastas-med-ai/

---

## Var underlaget är tunt - sammanfattat

Detta är den viktigaste delen av rapporten att läsa innan du bygger vidare på den.

1. **Sveriges AI-strategi (PDF) kunde inte läsas.** Skolavsnittet är refererat i andra hand. Öppna PDF:en själv.
2. **Skolverkets rapport 2026:982 (PDF) kunde inte läsas.** Siffrorna kommer från pressmeddelandet. Urvalet (368 lärare i grundskola/förskoleklass/fritidshem) är andrahandsuppgift.
3. **Skolforskningsinstitutet: ingen forskningsöversikt om AI hittad.** Sverige saknar, såvitt jag kan se, en systematisk forskningssyntes om AI i undervisningen.
4. **Ingen svensk myndighetstolkning av AI-förordningens högriskregler för skolan** - trots att kraven träder i kraft 2 augusti 2026. Det som finns är kommersiella aktörers tolkningar av den egna produktens laglighet.
5. **Inget fackligt ställningstagande om lärares upphovsrätt till eget material i AI-tjänster**, och inget om rätten att avstå från AI-verktyg. Frågan drivs av Läromedelsförfattarna, inte av lärarfacken.
6. **AcadeMedia, Kunskapsskolan och Thorengruppen** - inga dokumenterade koncernövergripande AI-satsningar hittades. Kräver direktkontakt eller årsredovisningar.
7. **Svenska lärarnätverk och Facebookgrupper om AI** går inte att kartlägga utifrån - de är stängda eller osökbara.
8. **Danska "sju rekommendationer" (juni 2026)** hittades bara via referens, inte primärkälla på uvm.dk.
9. **Ministercitaten i regeringens pressmeddelande 2026-07-24** kunde inte dubbelkontrolleras och en attribution verkade oväntad.
10. **Studien om att svenska lärare inte avlastas av AI** - primärstudien identifierades inte.

---

*Rapport sammanställd 2026-07-28. Firecrawl var otillgängligt; research gjord med WebSearch och WebFetch.*
