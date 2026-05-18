---
created: 2026-05-11
updated: 2026-05-11
created_by: claude-opus-4-7
updated_by: claude-opus-4-7
agent_version: 03.26
tags: [reflektion, historia, mek24b, forsta-varldskriget, versaillesfreden, aktor-struktur, formativ-bedomning]
---

# Reflektion - Repetition Första världskriget (enkät 31)

**Klass:** Mek24b (historia)
**Enkät:** 31 "Repetition Första världskriget"
**Datum:** 2026-05-11
**Frågor:**
1. (590) Förklara varför Versaillesfördraget ses som en "dålig fred" — minst 200 ord, ≥3 villkor, begreppen aktör/struktur, avsluta med vad beslutsfattarna missade.
2. (583) Förklara dominoeffekten i alliansavtalen aug 1914, ≥2 länder.
3. (540) Var FVK:s utbrott aktör (Sarajevo) eller struktur (imperialism/nationalism)?

**Antal fritextsvar:** 32 (29 substantiella + 3 triviala)

## Klassens övergripande mönster

Klassen behärskar **de stora kausalkedjorna** men brister i **historisk konkretion**. De vet *att* Versailles ledde till VK2 och *att* alliansavtalen drog in fler länder — men de namnger inte villkor, summor, paragrafer eller länder.

## Fråga 590 — Versaillesfördraget (17 svar)

### Det klassen kan
- Den övergripande kausallogiken: hårda villkor → tysk ilska → revanschism → VK2. Nästan alla landar där.
- Att Hitler är aktören som utnyttjar missnöjet. ~8 av 14 namnger honom.
- Att skadeståndet är ett centralt villkor — nämns av i princip alla.

### Genomgående svagheter
- **Inga namngivna villkor.** Krigsskuldsparagrafen §231, skadeståndssumman (132 mrd guldmark), Polska korridoren, Saar, Elsass-Lothringen — nästan ingen nämner något av detta.
- **Begreppen aktör/struktur nämns men används inte analytiskt.** Starka undantag: s32, s67, s40.
- **Reflektionsfrågan** ("vad missade beslutsfattarna?") hoppas över av nästan alla. Bara s71 svarar utförligt.
- **Längdkravet 200 ord** uppfylls bara av ~3 elever (s71, s50, s32).

### Sakfel värda att repetera
- **s72 blandar ihop Versailles med Berlinkonferensen 1884** (delningen av Afrika). Vanligt missförstånd.
- **s71 blandar VK1/VK2** i slutet av svaret.

### Starkaste svar
s32, s67, s50 — analytisk koppling aktör/struktur, flera villkor, mekanismförklaring.

## Fråga 583 — Dominoeffekten (13 svar)

### Det klassen kan
- Själva principen — att alliansavtal drar in fler länder. Förstås av nästan alla.
- Kedjan Österrike-Ungern → Serbien → Ryssland → Tyskland — många har den.

### Genomgående svagheter
- **Kedjan stannar vid Tyskland.** Frankrike (via fransk-ryska alliansen) och Storbritannien (via Belgiens neutralitet) saknas hos i princip alla. Det är just där dominoeffekten blir europeisk. Endast s52 har hela kedjan.
- **Förväxling med kapprustning.** s72, s45, s44 beskriver vapenupprustning istället för alliansaktivering — två olika fenomen.

### Sakfel värda att repetera
- **s44 tror Tyskland och Storbritannien var allierade** — de var rivaler (Trippelententen vs Trippelalliansen).
- **s68 säger "Soviet" 1914** — Sovjet bildades 1922.
- **s52 svarar med blandning av engelska och svenska** ("Austria-Hungary", "Russia", "World War II"). Värt att påpeka som språkkrav i historieuppgifter.

## Fråga 540 — Aktör eller struktur? (2 svar)

Få elever besvarade frågan (kanske för att den låg sist?). Båda landade i *både och*, vilket är historievetenskapligt rätt. **s50 har en skarp kontrafaktisk formulering** ("utan strukturerna hade aktörerna inte kunnat handla") — den är värd att lyfta som modellsvar nästa gång.

## Förslag till nästa lektion

1. **10 min konkretionsövning:** Namnge fem villkor i Versaillesfördraget vid namn, med årtal och paragraf där tillämpligt (§231, 132 mrd guldmark, 100 000 mans armé, Saar under NF-mandat, Polska korridoren).
2. **Fortsätt dominokedjan:** 5 min-genomgång där vi tillsammans skriver ut hela kedjan från Sarajevo till Storbritannien — med vilket *alliansavtal* som aktiverar vilket land. Schlieffenplanen + Belgiens neutralitet som länk till UK.
3. **Skilj kapprustning från alliansaktivering.** Två separata orsakstyper (struktur respektive utlösningsmekanism) — värt att ställa upp dem sida vid sida på tavlan.
4. **Visa s50 (eller s37) på fråga 540 anonymt** som modellsvar för aktör/struktur-samspelet. Använd dem som mall.
5. **Återkommande mönster från enkät 25:** Eleverna kan begreppen aktör/struktur men tillämpar dem inte analytiskt. Samma sak ser jag igen här. Värt att börja kräva en *fast mall* i skrivuppgifter: "begrepp → definition → namngivet historiskt fall → hur begreppet syns i fallet" (se reflektion 2026-05-08).

## Pedagogisk insikt

Detta är **andra gången på en vecka** jag ser samma mönster i Mek24b: stark begreppsförståelse, svag konkretion. De kan kausalitet (X ledde till Y) men inte specificera *vad* X består av. Det är inte ett kunskapsproblem utan ett **skrivproblem** — de tänker rätt men preciserar inte.

Misstänker att problemet är att de skriver fritt utan struktur. En tvingande mall ("Villkor 1: ___ Effekt: ___ ... ") skulle kanske hjälpa fler att leverera konkretion. Värt att testa nästa skrivuppgift.

## Bonus: tekniska upptäckter (utanför pedagogiken)

Två buggar i survey-platformens admin-API hittade och fixade under feedback-genereringen:
- Skippade elever som submittat enkäten flera gånger (`.find()` på student_number utan answers-koll).
- Feedback hamnade bara på *ett* av flera dubblettsvar per elev/fråga.

Båda fixade och pushade. Värt att veta: när elever submittar fritextenkäter två gånger får jag nu rätt feedback på alla deras svar.
