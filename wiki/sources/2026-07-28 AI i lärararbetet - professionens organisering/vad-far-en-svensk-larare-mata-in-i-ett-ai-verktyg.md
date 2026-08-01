---
created: 2026-07-28
updated: 2026-07-28
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: source
tags: [gdpr, imy, dataskydd, personuppgifter, upphovsrätt, ai-förordningen, huvudman, praktisk-juridik, sverige]
source: AI-i-lararabetet-Sverige-Norden-Research-Report-2026-07-28.md
citation: "Skolverket, Råd om AI, chattbottar och liknande verktyg (uppd. 2026-06-18); Norrköpings kommun, Vägledning kring generativ AI (uppd. 2026-05-20); IMY tillsyn Östersunds kommun (2023); IMY, prioriteringar 2026 (2026-02-03); EU AI Act Annex III."
---

# Vad en svensk lärare faktiskt får mata in i ett AI-verktyg - och vem som inte svarat

## Kärninsikt
Ingen svensk myndighet har gett en samlad regel för vad en enskild lärare får mata in i ett AI-verktyg. Det som finns är Skolverkets **råd** (inte föreskrifter), IMY:s allmänna dataskyddspraxis, och enstaka kommunala vägledningar. Den mest användbara operativa regeln kommer därför inte från staten utan från **Norrköpings kommun**: bara tjänster med kommunkonto och dataskyddsavtal, inga direkta personuppgifter, inget upphovsrättsskyddat material utan tillstånd. Att detta är den bästa svenska förlagan säger något om styrningsluckan - och den luckan kvarstår fram till att AI-förordningens högriskkrav för skolans bedömningssystem börjar gälla **2 december 2027** (framflyttat från 2 augusti 2026 genom Digital Omnibus, se [[eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare]]).

## Mekanism
Fyra lager avgör vad du får göra, och bara det understa är tydligt:

**1. Skolverkets råd** (uppdaterad 18 juni 2026, BELAGT med reservation för exakt ordalydelse):
- Skolor **bör** ha nedskrivna riktlinjer som täcker organisation, etik, juridik, pedagogik, kompetensutveckling och risker.
- "AI-tjänster skickar ofta data till andra länder. Lämna därför inte ut personuppgifter eller elevtexter utan tillåtelse."
- Skolverket avråder från att använda **inlämningsuppgifter som betygsunderlag utan kontroll**, eftersom AI kan producera texter av hög kvalitet vars äkthet inte kan verifieras.
- "AI-genererade texter kan vara övertygande men ändå innehålla fel."
- AI får inte ersätta lärarens professionella kompetens eller beslut om betyg.

Detta är **råd, inte föreskrifter** - vilket är exakt vad Sveriges Skolledare och Swedish Edtech kritiserar.

**2. Huvudmannens regler** - och här finns den enda konkretionen. Norrköpings kommuns vägledning (uppdaterad 20 maj 2026), BELAGT med reservation för ordalydelse:
- Tillåtna verktyg för lärare: **Google Gemini, NotebookLM, Microsoft Copilot** - och endast med inloggning via kommunens konton.
- För gymnasieelever: Gemini och NotebookLM från våren 2026 som del av Google Workspace for Education.
- **"Privatkonton eller gratisversioner av AI-tjänster ... är inte tillåtna"** - de saknar erforderliga dataskyddsavtal.
- Personal får inte mata in "direkta personuppgifter som fullständiga namn, personnummer eller känsliga elevuppgifter".
- "bör inte elever använda GAI vid prov eller andra bedömningsuppgifter"; läraren ansvarar för att granska allt AI-genererat undervisningsmaterial.
- **Upphovsrätt:** läromedel, elevtexter, musik och konst får inte laddas upp utan tillstånd.

**3. IMY och dataskyddspraxis.** IMY:s prioriteringar 2026 är AI i offentlig sektor, dataskydd för barn och unga samt brottsbekämpningsverktyg - **skolan finns inte som eget prioriterat område**, bara som sammanhang under barn och unga. Den mest användbara analogin är tillsynen mot **Barn- och utbildningsnämnden i Östersunds kommun (2023)**: nästan 6 000 elevers och 1 300 anställdas personuppgifter behandlades i en skolplattform, och IMY:s slutsats var att **konsekvensbedömning (DPIA) krävs innan så omfattande behandling av barns personuppgifter påbörjas**. IMY har också utfärdat sanktionsavgift mot en kommun som inte bedömt konsekvenserna innan Google Workspace infördes. RESONEMANG: samma logik gäller uppenbart när en huvudman rullar ut Gemini eller Copilot till lärare och elever - vilket sannolikt förklarar varför Norrköping är så strikt med kommunkonton.

**4. EU:s AI-förordning.** AI-system som används för att **utvärdera läranderesultat** klassas som högrisk enligt Annex III, med krav på meningsfull mänsklig tillsyn. Skyldigheterna för fristående Annex III-system börjar gälla **2 december 2027**, framflyttat från 2 augusti 2026 genom Digital Omnibus (verifierat 2026-07-28 mot Jones Walker, Gibson Dunn och aiactblog.nl). **Men augusti 2026 är inte tomt:** artikel 50 om transparens och artikel 4 om AI-kunnighet flyttades inte, och tillsynen över artikel 4 börjar 2 augusti 2026. Se [[eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare]] för fristerna och [[eu-ai-act-quiz-plattform-hogrisk-klassificering]] för klassificeringen i detalj.

## Empiri
- Skolverket, *Råd om AI, chattbottar och liknande verktyg*, uppd. 2026-06-18.
- Norrköpings kommun, *Vägledning kring generativ AI vid utbildningskontoret*, uppd. 2026-05-20.
- IMY, tillsyn Barn- och utbildningsnämnden Östersunds kommun (2023) - DPIA-kravet.
- IMY, sanktionsavgift mot kommun som inte gjort konsekvensbedömning före Google Workspace.
- IMY (2026-02-03), *IMY:s prioriteringar 2026 - AI, barn och brottsbekämpning*. GD Eric Leijonram: "Vi prioriterar därför områden där våra insatser kan göra mest skillnad."
- Digg, *Bedöm upphovsrätten vid användningen av generativ AI* - myndighetskälla, men riktad till offentlig förvaltning brett, inte skola.
- Övriga huvudmannaexempel: Göteborgs stad (Gemini till all pedagogisk personal med Google-konto), Stockholms stad (Copilot kostnadsfritt).

## Implikation för klassrummet
Det här är den mest direkt användbara delen. Arbetsregel tills din huvudman säger annat:

- **Kolla först vilket konto du är inloggad med.** Om det är ett privatkonto eller en gratisversion är svaret enligt Norrköpingsmodellen nej, oavsett vad du tänkte mata in. Det är en enda kontroll och den avgör mest.
- **Elevtexter: utgå från nej utan tillåtelse.** Skolverkets formulering nämner elevtexter uttryckligen och separat från personuppgifter - alltså inte bara namnet utan texten i sig. Ska du ändå använda en elevtext som exempel, avidentifiera den helt och ta bort allt som gör eleven identifierbar via innehållet, inte bara via namnet.
- **Pseudonymisera i stället för att avstå.** Elev-ID i stället för namn är den principiellt rena vägen och den du redan använder i Elevlägesbilden. Se [[pseudonyma-id-som-default-i-svenska-skolor]] och [[gdpr-datafminimering-ar-designconstraint-i-sverige]].
- **Läromedel och andras material: ladda inte upp.** Skannade kapitel, förlagsmaterial och kollegors prov är upphovsrättsskyddat och Norrköping förbjuder det uttryckligen. Detta gäller även när syftet är att "bara sammanfatta".
- **Ditt eget material är den olösta frågan.** Att ladda upp din egen momentplanering i en huvudmannaupphandlad AI-tjänst är inte förbjudet, men det saknas svenskt svar på vad som händer med den. Inget svenskt lärarfack har tagit ställning - frågan drivs av Läromedelsförfattarna. Se [[parterna-drev-fram-skolans-plats-i-ai-strategin]]. Praktiskt: behåll originalen lokalt, och betrakta uppladdning som publicering tills någon säger annat.
- **Bedömning: AI som stöd i förberedelsen, aldrig som beslut.** Skolverkets råd, AI-förordningens högriskklassning och Sveriges val av mänsklig central rättning pekar åt samma håll - se [[sverige-valde-manskliga-bedomare-framfor-ai-rattning]]. Bedömningsbeslutet ska vara ditt, dokumenterat och försvarbart.
- **Om din skola ska skriva en lokal AI-policy: föreslå Norrköpingsdokumentet som utgångspunkt.** Det är kortare arbete att anpassa än att skriva från noll, och det är genomarbetat på precis de punkter Skolverket bara nämner.

## Spänningar
- **Den största juridiska luckan i det svenska underlaget:** researchen hittade **inget svenskt myndighetsdokument från Skolverket eller IMY** som gör en samlad tolkning av vad AI-förordningens högriskregler betyder för svenska skolor. Framflyttningen till december 2027 ger utrymme att täppa luckan, men tar inte bort den - och den tar inte bort artikel 4-tillsynen som börjar augusti 2026.
- **Det som finns i tomrummet är partsinlagor.** Sökträffarna om AI-förordningen och svensk skola kom huvudsakligen från kommersiella aktörer som säljer AI-bedömningsverktyg eller AI-rådgivning. Formuleringar som "AI:ns resultat presenteras som indikation, aldrig som beslut" är argument om den egna produktens laglighet, inte myndighetsbesked. Läs dem därefter.
- **Ignorera påståenden om "GDPR 2.0".** Researchen kunde inte belägga att någon sådan ändring finns; begreppet används varken av IMY eller EU-kommissionen.
- **Skolplattformarna är den blinda fläcken.** Unikum (4000+ skolor), InfoMentor, SchoolSoft och Vklass marknadsför alla AI-funktioner, men marknadsföringstexterna är genomgående vaga om **vad** funktionerna gör. Researchen hittade ingen svensk plattform som öppet beskriver automatiserad betygsättning eller omdömesgenerering - men det gör det också svårt för dig att veta vad som körs i bakgrunden på den plattform du redan matar med elevdata varje dag. Edtechkartans transparenschecklista för AI-funktionalitet är det enda transparensinstrument som hittades.
- **Att ingen kontrollerar betyder inte att inget gäller.** IMY prioriterar inte skolan som eget område 2026, men Östersundsbeslutet visar att tillsyn kommer när den kommer, och då mot huvudmannen.

## Kopplingar
- [[skolverket-imy-riktlinjer-ai-i-skolan-2025]] - föregående års version av samma regelbild; denna not uppdaterar den med 2026 års läge
- [[eu-ai-act-quiz-plattform-hogrisk-klassificering]] - högriskklassificeringen i detalj
- [[eu-ai-forordningen-vad-den-praktiskt-binder-for-en-larare]] - vad förordningen faktiskt binder på lärarnivå
- [[bindande-reglering-traffar-systemen-vagledning-traffar-lararen]] - varför du bara möter råd och inte regler
- [[lararnas-upphovsratt-som-ai-traningsdata]] - vad som händer med material du laddar upp
- [[gdpr-datafminimering-ar-designconstraint-i-sverige]] - dataminimering som utgångspunkt
- [[pseudonyma-id-som-default-i-svenska-skolor]] - den praktiska vägen runt personuppgiftsproblemet
- [[sverige-valde-manskliga-bedomare-framfor-ai-rattning]] - varför bedömningsbeslutet måste vara ditt
- [[parterna-drev-fram-skolans-plats-i-ai-strategin]] - upphovsrättsfrågan som ingen driver
- [[svenska-policyomsvangningen-ai-i-skolan-2023-2026]] - varför råd och inte föreskrifter
- [[norden-har-nationella-riktlinjer-sverige-har-rad]] - Finland har juridisk vägledning på svenska
- [[MOC - Källkritik och digital kompetens]]

## Källa
Skolverket. *Råd om AI, chattbottar och liknande verktyg* (uppd. 2026-06-18). https://www.skolverket.se/kompetensutveckling/stod-i-arbetet/rad-om-ai-chattbottar-och-liknande-verktyg
Norrköpings kommun. *Vägledning kring generativ AI vid utbildningskontoret* (uppd. 2026-05-20). https://norrkoping.se/skola-och-forskola/pedagog-norrkoping/digital-forskola-och-skola/vagledning-kring-generativ-ai-vid-utbildningskontoret
IMY. Tillsyn: Barn- och utbildningsnämnden, Östersunds kommun (2023). https://www.imy.se/tillsyner/barn--och-utbildningsnamnden-ostersunds-kommun/
IMY (2026-02-03). *IMY:s prioriteringar 2026 - AI, barn och brottsbekämpning*. https://www.imy.se/nyheter/imys-prioriteringar-2026--ai-barn-och-brottsbekampning
Digg. *Bedöm upphovsrätten vid användningen av generativ AI*. https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai/bedom-upphovsratten-vid-anvandningen-av-generativ-ai
