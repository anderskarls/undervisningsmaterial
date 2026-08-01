---
created: 2026-07-04
updated: 2026-07-05
created_by: claude-fable-5
updated_by: claude-fable-5
agent_version: 04.26
type: reflection
tags: [momentplan, historia-niva-1b, antiken, gy25]
---

# Momentplan: Antiken - framsteg för vem?

> **Status: STEG 5 + 5a + 5b + 6 KLARA, 5c PÅGÅR** - steg 1-4 lärargodkända 2026-07-05; lektionsplaner + elevuppgifter + källmaterial genererade som .md + .docx 2026-07-06 (16 docx validerade). 5b exporterad: kurs MSA26A Historia 1b (id 10), moment unitId 5 med 10 uppgifter + 4 klassrumsquizzar - läraren granskar frågorna senare. Steg 6: presentation-lektion-1..6.html genererade i Arkiv v2.1, alla PASS i validate_arkiv (L7 får ingen - bygger på klassens egna data). 5c KLAR: två videor genererade och nedladdade (momentöversikt + förförståelse L2) - läraren förhandsgranskar och laddar upp till Drive/Classroom, klistrar in elevlänkarna i tabellen nedan. Steg 7 KLAR (utvecklad version): momentoversikt.html genererad 2026-07-06 med datumplatshållare ("Datum meddelas") och videolänk-platshållare - läraren fyller i datum och elevlänkar. Kvar före publicering: lektionsdatum, videouppladdning + länkar, lärarens frågegranskning i appen. Därefter: Avslutning (kursminne). Momentöversikten speglas i Claude Design-projektet "Arkiv - Momentöversikt Antiken" (projectId a045c7b0-3830-46e2-9236-63c4580540ce) för visuell iteration - momentoversikt.html i vaultet är fortsatt sanningskällan; ändringar i Design synkas tillbaka manuellt via Cornelius.

## Videoöversikter (NotebookLM)
| Video | Typ | Artefakt-ID | Fil | Status | Elevlänk (klistras in) |
|---|---|---|---|---|---|
| Momentöversikt: Antiken - framsteg för vem? | Momentöversikt (explainer, heritage, sv) | 584a9815-154d-4eb3-8eca-c7bac90bf0cb | video/video-moment-oversikt.mp4 (40 MB) | klar, nedladdad 2026-07-06 | |
| Förförståelse inför Lektion 2: Verktygslådan | Förförståelse (brief, heritage, sv) | a4961db4-9724-42b2-82d2-a190cd01db36 | video/video-forforstaelse-lektion-2.mp4 (15 MB) | klar, nedladdad 2026-07-06 | |
>
> **Relation till tidigare moment:** Ett äldre Antiken-moment finns (`Antiken/`, "spår och värdering", 2026-05-26, historiebruks-rot). Detta moment är designat från ramverket utan att utgå från det - annan rot, annan frågetyp-axel, annan form. Kursminnets kursnivå-mönster användes som M-i-input.

## Grundinformation
- **Ämne/Kurs:** Historia / Historia Nivå 1b
- **System:** GY25 (betygskriterier-modellen; värdeord: godtagbara/goda/mycket goda, enkla/utvecklade/välutvecklade, välgrundade och nyanserade)
- **Momenttyp:** Brottnings-moment (sekundär inriktning: epoköversikt - blandtyp)
- **Centralt innehåll:**
  - Europeisk epokindelning (antiken) + problematisering av tidsindelningars kulturella/politiska beroende
  - Centrala globala förändringsprocesser: långa linjer med fokus på levnadsvillkor och makt
  - Samband mellan skeenden i det förflutna och nutida förhållanden
  - Begreppen kontinuitet/förändring och aktör/struktur tillämpade på det historiska innehållet
  - Tolkning, granskning och värdering av historiska källor ("vems röst saknas?" som genomgående källfråga)
  - *(Historiebruk medvetet tunt - det gamla momentets kärna; specificitetslagen)*
- **Antal lektioner:** 7 × 70 min, ~28 elever *(bekräftat 2026-07-05)*
- **Kursplacering:** Först i kursomgången (ny kohort) - inga ärvda förutsättningar; L2 etablerar både kontinuitet/förändring och källbegreppen *(bekräftat 2026-07-05)*
- **Tema/vinkel:** Epokvärdering genom perspektivlinsen "för vem?" (social bakgrund, kön, etnicitet)
- **NotebookLM:** Hi 1b-notebooken (`be38a766-...`) AKTIVERAD 2026-07-05 (MCP-vägen; CLI-auth fortsatt opålitlig, kursminnesnoteringen bekräftad). Läraren lade till fyra nya källor inför steg 5: Beard *SPQR*, Heather *The Fall of the Roman Empire*, Wickham *The Inheritance of Rome*, Ober *The Rise and Fall of Classical Greece*. Samtliga tidigare `[VERIFIERA]`-taggar är lösta mot källorna.

## Designval (Momentplaneringsramverket)

### Nivå 0 - Momenttyp
- **Vald typ:** Brottnings-moment (blandtyp med epoköversikt som sekundär inriktning)
- **Motivering:** Antiken signalerar i förstone översikts-moment, men ett rent översikts-moment saknar motkraft och blir innehållsvandring. Frågan nedan bär genuint alla lektioner (blandtyps-regeln: välj typen vars rot driver flest lektioner); epokkartan byggs som bieffekt i delområdeslektionerna. Kursens mönster (två brottnings-moment hittills) stödjer valet.

### Root: Drivande fråga
> **Var antiken ett framsteg för människan?**

- **Skärpningsfilter:**
  - *Bärighetstest:* PASS - fungerar i både Grekland- och Rom-lektionerna (till skillnad från t.ex. "Föll Rom eller förvandlades det?" som bara bär den romerska halvan).
  - *Spänningstest:* PASS - två försvarbara sidor: Ober-linjen (demokrati, filosofi, historiskt anomal tillväxt; wiki: [[grekisk-tillvaxt-var-en-malthusiansk-anomali]]) mot den kritiska linjen (slaveriet som motor, kvinnors/ofrias exkludering, imperiets våld - "framsteg för de fria männen").
  - *Default-genererings-test:* PASS (Hess-klassificering nedan gavs med säkerhet).
- **Designskäl:** frågan bär perspektiv-CI:t ("för vem?") i sin struktur och skiljer sig tydligt från gamla momentets historiebruks-rot.

### Nivå 1a - Hess-gate
- **Klassificering:** Öppen fråga
- **Default:** Öppen - ingen etablerad konsensus om epokvärdering; historiografin rymmer båda positionerna (Ober mot Finley/de Ste. Croix-traditionen - källbelagt via notebooken 2026-07-05: Finley = statisk ekonomi/status, de Ste. Croix = klasskamp/utsugning). Inte tippande: ingen utsatt elevgrupp har minoritetsposition i frågan.
- **Valt:** Öppen (default accepterad)
- **Override:** Nej

### Nivå 1b - Frågetypologi
- **Primär typ:** Etisk (eftervärldens dom över en epok)
- **Sekundär typ:** Disciplinär (vad kan källorna belägga om levnadsvillkor? vems röster saknas?) - lever vidare i bedömningsmål (2.2), källmålet (LM3) och Metareflektion
- **Default:** Etisk primär utifrån frågans formulering ("var X ett framsteg?")
- **Valt:** Default - avviker från kursminnesmönstret (disciplinär primär i båda tidigare moment). Ej M-ii-pliktigt (kursminne är input, inte ramverksdefault). **Lärarbekräftat 2026-07-05:** etisk primär.
- **Override:** Nej

### Tvärgående trådar
- **Intra-moment:** "För vem?"-linsen (social bakgrund, kön, etnicitet) aktiveras i varje delområdeslektion - momentets perspektivmotor
- **Inter-moment (sparas i kursminnet vid avslut):** (1) medeltidsmomentet - föll antiken eller förvandlades den?; (2) renässansen - antiken som ideal; (3) demokratiseringsmomentet - Aten mot modern demokrati

### Nivå 2 - Bedömningsmål
- **Lyckad brottning innebär:** Eleven kan fälla ett underbyggt omdöme om antiken som epok, där omdömet (a) väger olika gruppers levnadsvillkor mot varandra, (b) integrerar den motsatta positionens starkaste argument, och (c) skiljer på att döma epoken efter vår tids mått och att förstå människor utifrån deras tids villkor.
- **Default:** Etisk frågas default ("väga aktörers ansvar mot tidens villkor") uppskalad från aktör till epok
- **Valt:** Default. Del (b) **låser diskursmålet till Syntes** (nivå 5). Del (c) operationaliserar ämnessyftets "människor ska förstås utifrån sin tids villkor" - skiljer A-omdöme från moraliserande.
- **Override:** Nej

### Nivå 3 - Förutsättningar

| Förutsättning | Kategori | Leveransstatus |
|---|---|---|
| Kronologisk grundkarta (arkaisk tid → klassisk tid → hellenism → republik → kejsardöme → västroms upplösning) | Innehåll | Förförståelsepaket + L2 befäster |
| Atens demokratis mekanik och dess exkluderingar (kvinnor, slavar, metoiker) | Innehåll | L3 etablerar |
| Slaveriets och hushållets roll i antik ekonomi | Innehåll | L3-L4 etablerar |
| Romerska imperiets struktur (medborgarskap, provinser, gränszon) | Innehåll | L4 etablerar |
| Begreppen epok, polis, medborgare, republik/kejsardöme, slavsamhälle | Begrepp | Förförståelsepaket + L2 |
| Kontinuitet/förändring, aktör/struktur | Begrepp | L2 etablerar *(momentet ligger först i kursen, ny kohort - kursminnets "ärvd" gällde förra kohorten)* |
| Källbegrepp (primärkälla, tendens, representativitet) | Begrepp | L2 etablerar (första momentet - inget ärvt) |

- **Leveransprincip:** ETT förförståelsepaket (strukturell kontextläsning kategori 4: ett utskick ger bättre vidhäftning än flera). Allt levereras före brottningslektionen (L5).
- **Verifikationsregel:**
  - *Andel/spridning:* mäts via exit tickets L1-L4; L4:s ticket är formell checkpoint
  - *Konsekvens av lucka:* framstegs-omdöme utan levnadsvillkors-fakta = tomt tyckande → medium-hög konsekvens
  - *Frågetypens tolerans:* etisk fråga tål luckor bättre än disciplinär källfråga → medium tolerans; gruppindelning i L5 kompenserar luckor som checkpointen avslöjar
- **Princip 3 bekräftad:** Ja - brottningen väntar inte; förutsättningar i förväg; differentierad tillämpning för elever med dokumenterat stöd. Ingen override.

## Lärandemål (E/C/A-progression)

1. Eleven visar **godtagbara → goda → mycket goda** kunskaper om antikens förändringsprocesser, händelser och aktörer (polis, Atens demokrati, hellenism, republik → kejsardöme, västroms upplösning) utifrån olika tolkningar och perspektiv.
2. Eleven för **enkla → utvecklade → utvecklade och nyanserade** resonemang om antikens förändringsprocesser med hjälp av begreppen kontinuitet/förändring och aktör/struktur.
3. Eleven använder historiska källor för att undersöka olika gruppers levnadsvillkor under antiken och för **enkla → välgrundade → välgrundade och nyanserade** resonemang om källornas innehåll och användbarhet - särskilt vems perspektiv källan bär och vems som saknas.
4. Eleven ger exempel på och förklarar **översiktligt → utförligt → utförligt och nyanserat** samband mellan antiken och nutida förhållanden (demokratibegreppet, medborgarskapstanken, bilden av "civilisationens vagga").

*Fyra mål, inte fem - varje mål har egen lektionsbärare och egen plats i frågebanken (specificitetslagen). Mål 3 formulerat så att källkritiken tjänar brottningsfrågan.*

### Nivå 4 - Rollsekvens
1. **Frågeförankring** - eleven exit:ar med: förståelse av varför frågan är svår och värd att brottas med (framsteg *för vem*, mätt *hur*?)
2. **Provokation** - eleven exit:ar med: produktiv dissonans - "civilisationens vagga" krockad med slavekonomins omfattning; alt. Obers anomali (tillväxt var det onormala) som kontraintuitiv öppning
3. **Begreppsbygge** - eleven exit:ar med: korrekt användning av epok-, samhälls- och analysbegreppen
4. **Perspektivbygge** (×2: Grekland, Rom) - eleven exit:ar med: perspektivinventering av levnadsvillkor per grupp (medborgare, kvinna, slav, metoik/provinsbo) - UTAN egen position
5. **Brottning** - eleven exit:ar med: en prövad position i framstegsfrågan
6. **Syntes** - eleven exit:ar med: ett integrerat skriftligt omdöme
7. **Metareflektion** - eleven exit:ar med: insikt om hur det egna omdömet förändrades och vad det säger om att döma det förflutna (sekundär-axelns hem)

- **Core verifierad:** Frågeförankring + Brottning + Syntes finns - Ja
- **Ordningsregler:** uppfyllda (Frågeförankring först, Brottning före Syntes, Metareflektion sist)
- **Rollmotiveringar:** Provokation på (stark ingångshändelse: klichébilden); Perspektivbygge på (frågans "för vem?"-axel); Metareflektion på (etisk frågetyp, default-regeln); Applikation av - transfer sker som planterade Återbesök i senare moment
- **Default/Valt:** identiska
- **Override:** Nej

### Nivå 5 - Brottningsform
- **Diskursmål:** Syntes (**låst av bedömningsmålet**, del b). Felton-poängen: syntes-diskursmål motverkar my-side-bias - exakt risken i en framstegsfråga där elever väljer "rätt sida" snabbt.
- **Form:** "Eftervärldens rådslag" - tvåstegs strukturerad perspektivdeliberation: (1) perspektivgrupper (medborgaren, kvinnan, slaven, provinsbon/metoiken) förbereder beläggkort ur sitt perspektiv utifrån L3-L4:s källarbete; (2) tvärgrupper (jigsaw) med alla perspektiv representerade väger samman till gemensamt preliminärt omdöme, med obligatorisk "starkaste motargument"-runda.
- **Gruppstorlek + strukturmekanism:** smågrupper om 4 (exploratory talk-storlek) med strukturerade talturer/rundor (Larsson 2007: utan struktur dominerar 3-5 elever talutrymmet). ~28 elever bekräftat → steg 1: 4 perspektiv × 7 elever (delas i par/triader inom perspektivet), steg 2: 7 tvärgrupper om 4 med alla perspektiv representerade.
- **Position-tilldelning (Hess):** Ej tillämpligt som skydd (öppen fråga, ej tippande) - men perspektivtilldelning ingår ändå i formen av pedagogiska skäl: tvingar fram inventering av perspektiv som annars tystnar (kön, social bakgrund, etnicitet = CI-punkten).
- **Variering:** SAC använd i Medeltiden-momentet → formvalsprincip 4 talar för ny form. Sokratiskt seminarium övervägt (wiki: [[sokrates-seminarium-for-primärkallsanalys]] - starkt för svårtolkade primärkällor) men förkastat: kollapsar över 18 deltagare, och frågan är ett värderande helhetsomdöme, inte texttolkning. Triadmatrisen (kursminnet) medvetet ej återanvänd - momentet ska inte bygga på tidigare moment.
- **Default:** Syntes-DNA + etisk familj + skriftligt omdöme → deliberativ jigsaw-form / **Valt:** Eftervärldens rådslag / **Override:** Nej

### Differentiering och formativa avstämningar
- **Differentiering (E/A) per tung roll:**
  - Golv universellt: beläggkort per perspektiv, skrivmall för omdömet (påstående - belägg - motargument - vägning), ordbank för värderande resonemang
  - Tak selektivt: namngivna historikerpositioner att bryta mot varandra (Ober mot Finley/de Ste. Croix - källbelagt); A-sikte: "vems antik?" - jämför samtida Kina/Persien, prövar om "antiken" är universell epok (CI: tidsindelningars kulturberoende)
  - Mognadsprincip (kursminne): tolkningsperspektiv konkreta (namngivna historiker, beläggkort), inte abstrakt historiografi
  - Princip 3-undantag: elever med dokumenterat stöd har explicit undantag i Brottning-rollen
- **UDL alternativa representationsformer:** tidslinje + kartor visuellt; källor i text och uppläst form; begreppsordlista i förförståelsepaketet
- **Formativ avstämning före Brottning:** L4:s exit ticket = formell verifikations-checkpoint (nivå 3) - 2 innehållsfrågor + självskattning "vilket perspektiv känner du dig minst säker på?" → styr L5:s gruppindelning
- **Exit tickets:** alltid digitalt via frågeappen, aldrig i arbetsblad (stående regel)

## Lektionssekvens (rollmappning)

| Lektion | Roll(er) | Eleven exit:ar med | Form/metod | Lärandemål | Exit ticket (digitalt) |
|---|---|---|---|---|---|
| 1 | Frågeförankring + Provokation | Förståelse av varför frågan är svår | Pretest (myter rättas inte direkt) + bildkrock "vaggan vs slavmarknaden" + EPA kring frågan | 4 | "Vad skulle behöva vara sant för att antiken ska räknas som ett framsteg? Ge två olika gruppers svar." |
| 2 | Begreppsbygge | Begreppslig precision + kronologisk karta | Kort genomgång + tidslinjebygge i par + begreppsträning med retrieval | 1, 2 | Begreppstillämpning: kontinuitet/förändring på ett antikens exempel |
| 3 | Perspektivbygge I (Grekland) | Perspektivinventering: levnadsvillkor i polis-samhället | Källstationer (medborgare/kvinna/slav/metoik) med scaffoldat källschema | 1, 3 | "Vems perspektiv bar din källa - och vems saknades? En mening var." |
| 4 | Perspektivbygge II (Rom) | Perspektivinventering: imperiets levnadsvillkor | Källstationer forts. + gränszon i stället för mur (wiki: [[romersk-gransekonomi-och-en-porods-limes]]) | 1, 2, 3 | **Verifikations-checkpoint:** 2 innehållsfrågor + "vilket perspektiv känner du dig minst säker på?" → styr L5:s grupper |
| 5 | Brottning | En prövad position | Eftervärldens rådslag: perspektivgrupper → tvärgrupper, talturer i rundor | 1, 2, 3, 4 | "Vilket motargument mot din egen position var starkast? Varför?" |
| 6 | Syntes | Utkast till integrerat omdöme | Individuell skrivning med skrivmall, byggd på klassens beläggkort och rådslagsprotokoll (hyperkontextualiserad = AI-säker examination) | 2, 3, 4 | "Vilken vägning är du mest osäker på i ditt omdöme?" |
| 7 | Syntes (färdigställande) + Metareflektion | Färdigt omdöme + insikt om det egna dömandet | Färdigställande + strukturerad metareflektion "dömde du epoken eller förstod du den?" + nutidskoppling | 4 | "Hur förändrades ditt svar på momentfrågan från L1 till nu - och vad fick dig att ändra dig?" |

**Röd tråd (rolltermer):** Frågan öppnas och görs svår (L1), verktygen byggs (L2), inventeringen görs utan positionstagande (L3-L4), positionen prövas mot motstånd (L5), integreras (L6) och granskas metakognitivt (L7). Analytiska kravet stiger monotont mot L5; alla förutsättningar före brottningen; exit ticket-slingan sluten - varje ticket informerar nästa lektions retrieval-öppning, L4:s ticket är formell verifikation. Naturlig stoppunkt vid schemakrymp: L6-L7 kan slås ihop (syntesen kortas) - aldrig L3-L4 (då kollapsar perspektivinventeringen och därmed brottningen).

## Kunskapsunderlag (wiki)
- [[grekisk-tillvaxt-var-en-malthusiansk-anomali]] - Ober-positionen i brottningsfrågan + provokationsmaterial (tillväxt som historisk anomali) → påverkade frågeformulering (Root) och Provokation-rollen
- [[den-grekiska-efflorescensen]] - Obers siffror (befolkning 25x, hus +350 %, reallöner 2,6-4,6x, urbanisering 32 %) → L1:s krok + L5:s Ober-ankarkort
- [[fair-rules-sanker-transaktionskostnader]] - Obers mekanism i elevvänlig form → L5-differentiering
- [[medborgarskap-som-ekonomisk-uppfinning-sparta-aten]] - fördjupning A-spåret → L5
- [[romersk-gransekonomi-och-en-porods-limes]] - gränsen som zon, mot kartklichén → påverkade L4:s innehåll
- [[sokrates-seminarium-for-primärkallsanalys]] - formval-evidens → övervägd och förkastad form (nivå 5), dokumenterat varför
- [[pretesting-effekten-d-06-till-12-aven-med-fordrojd-feedback]] - pretestmekaniken med fördröjd rättning → L1:s pretest + L2:s facit-öppning
- [[retrieval-baserad-begreppskartlaggning-hybrid-strategi]] - karta-utan-text-hybriden → L2:s begreppskärna
- [[hinge-questions-diagnostiska-fragor-vid-vagskalen]] - informativa distraktorer + vägskälslogik → L4:s verifikations-checkpoint
- [[kallkritik-som-motivationsverktyg-inte-bara-kognitivt]] - relevansframing av källfrågan → L3-L4:s lärarinstruktioner
- [[marino-2024-historisk-empati-maste-vara-affektiv-inte-bara-kognitiv]] - kognitiv+affektiv balans med strukturerat efterarbete → L7:s metareflektionsdesign + bedömningsmålets del (c)
- [[prompt-verb-effekten-vardera-slar-forklara]] - uppgiftsverb → L6:s skrivuppgift
- [[exit-ticket-planering-aterkopplingsslinga]] - slingans stängning → L7
- `raw/personal-notes/historia-1b-momentforslag-perspektivkriteriet.md` - stärkte perspektiv-vinkeln ("för vem?") som momentets motor

## NotebookLM-underlag (steg 5)
Sex innehållsfrågor ställda 2026-07-05 mot Hi 1b-notebooken (8 källor efter lärarens tillägg). Källgrundade nyckelfakta i lektionsplanerna: Atens fyra gruppers villkor (var fjärde slav, gynaeceum, metoikers skatt utan rösträtt), Roms medborgarskapsexpansion (asylum-myten → bundsförvantskriget → Caracalla 212 → honestiores/humiliores), slavsiffror (1,5-2 milj/20 % i Italien; manumission → medborgarskap), limes som kontrollerad zon, kronologin + epokbegreppet som renässanskonstruktion, Wickhams transformationstes, Ober mot Finley/de Ste. Croix, primärkällebank (Perikles gravtal, Claudia-gravskriften, Eurysaces, Regina, Vindolanda, De tolv tavlorna, Justinianus om slaveri), missuppfattningar + Skolverkets presentism/anakronism-didaktik.

## Frågeapp (Survey Platform)

**Kurs:** MSA26A Historia 1b (id 10, elevkod för kursanslutning: `Y7SHJD`) - skapad 2026-07-06, ny kohort. Exporterat 2026-07-06, läraren granskar frågorna i appen vid senare tillfälle.

### Klassrumsquizzar
| Quiz | Delningskod | Antal frågor |
|------|-------------|--------------|
| Antiken - Lektion 2: Begrepp och kronologi (retrieval L3) | `we3oF3wY` | 6 |
| Antiken - Lektion 3: Grekland-perspektiven (retrieval L4) | `AsAy9Miu` | 6 |
| Antiken - Lektion 4: Rom-perspektiven (blixtretrieval L5) | `w0Gx93IE` | 6 |
| Antiken - framsteg för vem? - Momentquiz | `pThQgL4Z` | 8 |

### Moment i frågeappen
- **unitId: 5** - elevmomentsida: `/student/moment/5`

| Uppgift | Lektion | Läge | Delningskod |
|---------|---------|------|-------------|
| Pretest - vad tror du om antiken? | 1 | SURVEY (rättas ej) | `BZonkyZ-` |
| Exit ticket | 1 | SURVEY | `1g6BT8WX` |
| Pretest-omkörning - nu med facit | 2 | QUIZ | `Nrv1CHaQ` |
| Exit ticket | 2 | SURVEY | `1plTvr3g` |
| Exit ticket | 3 | SURVEY | `pIqhYmaP` |
| Checkpoint inför rådslaget | 4 | QUIZ | `v3F0KMBw` |
| Exit ticket | 5 | SURVEY | `nR0E6RFq` |
| Exit ticket | 6 | SURVEY | `_bwp1Ht_` |
| Ditt omdöme - inlämning | 7 | SURVEY | `DTXw08f1` |
| Exit ticket | 7 | SURVEY | `vP1ZZ66S` |

*Momentrapport efter genomförandet: `get_moment_report` (unitId 5), t.ex. i samband med /reflektera-moment.*

## Override-räknare
- **Antal overrides hittills:** 0 (alla ramverksdefaults följda)
- **Mönsterlarm:** Inte triggat
- **Noterade kursminnes-avvikelser (ej M-ii-pliktiga):** (1) etisk primär i stället för disciplinär; (2) ny brottningsform i stället för triadmatris/SAC. **Båda aktivt lärarbekräftade 2026-07-05.**

## Avgjorda designfrågor (2026-07-05)
1. **Lektionslängd och klasstorlek:** 7 × 70 min, ~28 elever
2. **Primär axel:** Etisk (bekräftad avvikelse från kursminnesmönstret)
3. **Kursplacering:** Först i kursomgången - L2 etablerar källbegrepp och kontinuitet/förändring, inget ärvt
