---
created: 2026-07-03
tags:
  - verktygsidéer
  - arbetsflöde
type: inbox
---

# Verktygsförslag från arbetsflödesgenomgång 2026-07-03

Claude gick igenom vaultet (log, index, reflektioner, output, inbox) och den befintliga verktygsstacken (frågeappen med MCP/CLI, momentplanering-pluginen, Local Brain Search, bok-ingest-pipelinen) och föreslog verktyg att bygga. Sparat för att kunna återupptas senare.

## Övergripande diagnos

Det som fungerar bra: **ingest-sidan** (bokbatchar, 745 wikisidor, MOC:er) och **framåtriktad planering** (läsårsskisser, /planera-moment, presentationer, NotebookLM-videor, frågeappen med exit tickets och "Att öva på").

Det som är svagast: **återkopplingssidan** - informationen som flödar tillbaka från klassrummet. Konkret:

- `raw/reflections` har 15 filer på en hel termin, i sju olika format, och de matar inte systematiskt kursminnet eller wikin
- Kursminnet har en enda fil (`historia-niva-1b.md`) trots minst 14 genomförda moment
- Fem xlsx-filer med betygsstatistik ligger orörda i inbox
- Egen idélapp om elevreflektion i frågeappen ligger i inbox utan uppföljning

## Förslag 1: Stäng reflektionsslingan (störst hävstång)

Friktionen är att reflektion kräver att sitta vid datorn och skriva strukturerat. Målbild: 60 sekunders infångst efter lektion (tagga kurs + moment, diktera tre rader) → landar i `raw/reflections` → veckovis körning som sammanfattar, uppdaterar kursminnet per kurs och flaggar mönster ("tredje gången EPA-fasen spricker i MEK24B").

**OBS - byggstenar finns redan, bygg inte nytt från noll:**
- Telegram-reflektionsbotten är färdig (`resources/telegram-reflection-bot/`, avbockad i Att göra) - men den skriver till gamla sökvägen `Brain/00-Inbox/`. Kolla om den kör och peka om den till nuvarande struktur.
- F2 `/logga-lektion` och F3 `/reflektera-moment` är redan planerade i skill-trion (se Att göra, "Skill-trio för Momentplaneringsramverket").
- Det som saknas är alltså **limmet**: infångst (bot) → rätt mapp → veckodigest → kursminne.

## Förslag 2: Elevreflektion i frågeappen (egen idé från inbox)

Från `raw/inbox/Idé till funktion surveyappen.md`: självreflektionsytor i uppgifterna varje/varannan lektion. Naturlig v2 för appen:
- Reflektionsfrågetyp per lektion
- AI-sammanfattning till läraren ("vad fastnade eleverna på denna vecka")
- Kan mata samma kursminne som förslag 1
- Designunderlag finns i wikins metakognition-noter

## Förslag 3: Betygsstatistik-analys (datan väntar redan)

Fem xlsx med satta betyg 2019-2025 ligger i `raw/inbox`. Analysverktyg eller engångsanalys:
- Betygsutveckling per kurs/program/år
- Egna kurser mot skolans snitt
- Könsskillnader, effekter av kursomläggningar
- Output: HTML-dashboard i `output/`
- Kopplar till [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]] som ram inför kalibrering

## Förslag 4: Läsårskalender med tempo-uppföljning

Läsårsskisserna (Hi 1b, Hi 1a1 45h) är statiska dokument. Verktyg som mappar momenten mot faktiska veckor (lov, nationella prov, studiedagar) och räknar timmar: "moment 4 skulle vara klart v. 12, du har 18 h kvar av 45". Uppdateras när lektioner loggas - blir bäst om förslag 1 finns först. Inget i nuvarande stack följer tempot över året.

## Förslag 5: Bedömningsassistent för elevtexter

`raw/student-work` har 21 inlämningar. Frågeappens feedbackflöde täcker quiz-svar men inte längre texter. Verktyg: rubrik + elevtexter → feedbackutkast enligt feedbackreglerna (aldrig betygsbokstäver i elevriktad text, nästa-steg bär nivån) → läraren redigerar och godkänner → ev. distribution via appens befintliga feedback-pipeline.

**OBS:** överlappar delvis med "AI-feedback på elevsvar - lager 3" (classroom-tool `feedback`-verb) som redan är påbörjad i Att göra - lager 1+2 klara. Avgör om detta är samma bygge eller ett systerspår för survey-appen.

## Förslag 6: Källjakt för wikiluckor

Läsårsskissen för 1a1 flaggade luckorna (nationella minoriteter/samer ~noll täckning, 1900-talet tunt). Formaliserat flöde: lucka → /deep-research → läslista-sida → EPUB-kö → ingest. Mest en skill/ett arbetsflöde ovanpå det som finns, inte en ny app.

## Rekommenderad ordning

1. **Förslag 1 + 2 tillsammans** - delar infrastruktur (frågeappen finns, deployas från GitHub, har MCP) och stänger den svagaste slingan: klassrum → kursminne → nästa planering
2. **Förslag 3** - snabb fristående vinst, datan ligger klar
3. **Förslag 4** - mest "nytt" verktyg, blir bäst när 1 finns
4. Förslag 5 och 6 vid behov

**Återupptagning:** peka Claude på den här filen och säg vilket förslag som ska designas.
