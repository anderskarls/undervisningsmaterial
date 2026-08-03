---
created: 2026-08-03
updated: 2026-08-03
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: connection-discovery-changelog
session: 2026-08-03 Historiskt evidensresonemang
---

# Connection Discovery - Historiskt evidensresonemang (2026-08-03)

## Uppdrag och utgångspunkt

Sessionen `wiki/sources/2026-08-03 Historiskt evidensresonemang/` (33 noter + 3 changelogar) kördes som en **verifiering** av en befintlig wiki-sida: [[evidence-based-reasoning-intervention-d-205-historia]] (skapad 2026-04-21), som hade hävdat att en "evidence-based reasoning"-intervention gav en "exceptionell" effektstorlek (d=2,05) direkt tillämpbar på svensk historieundervisning. Verifieringen mot primärkällorna (Du, H. & List, A. 2024; Kraft 2020; med flera) fällde 5 av 19 kontrollerade påståenden på den sidan. Detta är inte en vanlig ingest-session - den centrala uppgiften var att rätta ett dokumenterat fel i wikin, inte att lägga till ny kunskap ovanpå ett antaget korrekt fundament. FAISS-indexet var inte uppdaterat under arbetet (byggdes om i bakgrunden); alla kopplingar hittades genom grep, glob och läsning av sessionens 33 noter samt de befintliga sidor de refererar till.

## Antal kopplingar inskrivna

**Den obligatoriska rättelsen:**
- [[evidence-based-reasoning-intervention-d-205-historia]] - helt omskriven. `evidence-level` sänkt från `high` till `low`. Författarnamn rättade (Du, H. inte Du, C.; Matthew A. Kraft inte Thomas Kraft). Population/domän tillagd (amerikanska collegestudenter i pedagogisk psykologi, N=107/218, inte gymnasieelever i historia; orden "history"/"historical" förekommer inte i originalartikeln). Kraft-benchmarken korrigerad (han varnar för exakt detta effektstorleksintervall, sätter ingen "tröskel för signifikans"). Du & Lists egen RCT (2022) tillagd som starkaste motvikt. Avsnittet "Koppling till undervisning" - den femdelade taxonomin och rekommendationen om ett separat moment - struket och ersatt med vad som faktiskt följer av materialet. `updated`, `updated_by` (claude-opus-5) och `agent_version` (04.26) uppdaterade; `created`/`created_by` orörda enligt instruktion. 11 nya wikilänkar till sessionens noter tillagda i sidans kropp och Kopplingar-avsnitt.

**Övriga sidor med nya, ömsesidiga kopplingar (9 filer utöver rättelsen och MOC:erna):**
- [[Källkritik som checklista undergräver det som skulle mätas]] - tre nya länkar till [[rosenlunds-tvangstroja-ar-en-essa-inte-en-studie]], [[marino-2022-historiker-korroborerar-opalitliga-kallor-forkastar-dem-inte]] och [[svensk-kallkritik-och-anglosaxiskt-historiskt-tankande-ar-tva-olika-projekt]], med en tydlig markering av att denna sidas Skolinspektions-/Skolforskningsinstitut-grund är starkare evidens än Rosenlunds essä - de ska inte buntas ihop som likvärdiga källor.
- [[andra-ordningens-begrepp-historisk-frageteknik]] - länk till [[ingen-historisk-evidenstypologi-anvander-jamforande-korrelativt-kausalt]], med en explicit varning att hålla isär Seixas Big Six-linjen (som denna sida representerar) från den felaktigt importerade samhällsvetenskapliga typologin.
- [[gy25-amnesbetyg-progressionsorienterad-historieundervisning]] - länk till [[gy25-tillater-integrerad-kallkritik-kraver-den-inte]] med en not om att sidan granskats och lämnas oförändrad (den bygger inte på de falska Gy25-fraserna).
- [[mdpi-observationsstudie-2025-expositorisk-dominerar-historia]] - länkar till [[doströskeln-mellan-korta-och-uthålliga-källkritikinsatser-är-fältets-öppna-fråga]] och [[nygren-efimova-2025-en-enda-skola-ingen-direkt-eftermatning]].
- [[nordisk-jamforelse-tre-lararplanstraditioner-khawaja-2025]] - länk till [[svensk-kallkritik-och-anglosaxiskt-historiskt-tankande-ar-tva-olika-projekt]] som noterar att denna sidas läroplansjämförelse är den empiriska grunden för RESONEMANGET om två skilda källkritiska projekt.
- [[wineburg-2025-weblitteracitet-lart-fel-i-decennier]] - länk till [[marino-2022-historiker-korroborerar-opalitliga-kallor-forkastar-dem-inte]] (samma kritik mot checklistebaserad källkritik, för historiska källor snarare än webbkällor).
- [[marino-2024-historisk-empati-maste-vara-affektiv-inte-bara-kognitiv]] - länk till [[marino-2022-historiker-korroborerar-opalitliga-kallor-forkastar-dem-inte]] med en explicit namnförväxlingsvarning (två olika Marino-forskare, olika ämnen).
- [[lab-till-klassrum-effektstorlekar-krymper]] - länkar till [[den-generaliserbara-lardomen-vad-fallet-lar-om-effektstorlekar]] och [[cheung-slavin-2-1-forhallande-forskarkonstruerade-matt-obalanserat-underlag]] - krympningsmönstret som denna sida beskriver (labb→klassrum) generaliseras till mått-till-mått-krympning inom en och samma studie (Du & Lists egna två deltest).
- [[gy25-digital-kompetens-kallkritik-integration]] - granskad enligt uppdrag; **inte fälld** (gäller samhällskunskapens digitala kompetens-skrivningar, en annan källa än historieämnets ämnesplan). Länk tillagd som förtydligar distinktionen explicit, så framtida läsning inte förväxlar de två.

**Totalt:** 1 sida helt omskriven, 9 befintliga sidor med nya ömsesidiga länkar, 2 MOC:er uppdaterade (se nedan), `index.md` uppdaterad. Samtliga tillägg är dubbelriktade: varje ny länk från en 2026-08-03-not till en äldre sida har en motsvarande länk tillbaka, inte bara ett omnämnande.

## Bron mellan mekanismlagret och innehållslagret

Sessionens tydligaste tvärgående fynd: [[blindflacken-fungerar-evidenstaxonomin-som-kognitiv-stottning-hypotes]] är en explicit HYPOTES (inte fynd) om att en evidenstaxonomi skulle kunna fungera som kognitiv stöttning - schema, avlastad extraneous load - oavsett om den är disciplinärt äkta för historieämnet. Tre av fem oberoende historiedidaktiska/psykologiska granskningar i researchunderlaget efterlyste, oberoende av varandra, precis denna fråga - men ingen ställde den i CLT-termer, trots att vaultet har en egen mekanismdomän för exakt detta.

Bron är skriven i båda riktningarna:
- **Från innehållslagret:** [[MOC - Historiedidaktik och kontroversiella frågor]], nytt avsnitt under punkt 6, länkar till [[MOC - Lärandevetenskap och kognition]] och namnger de fyra CLT-begrepp hypotesen bygger på (worked examples, schema-first-discrimination-later, expertise reversal, PAAS-skalan).
- **Från mekanismlagret:** [[MOC - Lärandevetenskap och kognition]] har fått en ny post under "Bryggor till andra MOC:er och domäner" och en ny rad under "Forskningsluckor", båda pekande tillbaka mot [[blindflacken-fungerar-evidenstaxonomin-som-kognitiv-stottning-hypotes]] och [[MOC - Historiedidaktik och kontroversiella frågor]].

Detta är en genuin bro: två domäner med olika vokabulär (historiedidaktik och kognitionsvetenskap) som beskriver en möjlig gemensam mekanism, formulerad som en obesvarad, falsifierbar fråga snarare än en slutsats.

## Mönstret "korrekt siffra, falskt påstående" - generaliserad

[[d-205-korrekt-siffra-fel-tillskrivning]] och [[den-generaliserbara-lardomen-vad-fallet-lar-om-effektstorlekar]] destillerar fyra kontrollfrågor (studiedesign mot benchmark, måttets oberoende, avstånd labb-fält, attributionskedjan) som nu är skrivna in i tre befintliga sidor utanför sessionen: [[lab-till-klassrum-effektstorlekar-krymper]] (labb→fält-krympning generaliserad till mått-till-mått-krympning), samt indirekt i den rättade [[evidence-based-reasoning-intervention-d-205-historia]] själv, som nu fungerar som det konkreta exemplet lärdomen är destillerad ur. Rekommendationen till läsaren: detta mönster bör vägas in varje gång en ny effektstorlek citeras i wikin framöver - det är inte specifikt för Du & List-fallet.

## Motsägelser (flaggade, ojämkade)

Inga nya, ojämkade motsägelser mellan wiki-sidor identifierades i denna genomgång. Det som hittades var ett **internt** fel på en enda sida (den rättade sidan höll inte mot sin egen åberopade källa) snarare än en konflikt mellan två sidor som båda har fog för sina positioner. De två fallen som kom närmast en motsägelse visade sig vid närmare läsning vara skenbara:

- **Reismans siffra (0,29 vs 0,49):** ingen befintlig wiki-sida använder 0,29 som mått på "historiskt tänkande" - sökningen bekräftade att detta felaktiga bruk inte redan cirkulerar i wikin. Ingen ändring behövdes utanför den nya sessionen.
- **Gy25-digital-kompetens-sidan:** initialt flaggad som möjligen bärande en formulering nära den falska historia-frasen ("källkritik inte längre isolerat moment"). Vid granskning gäller den en annan källa (Lgy25:s digitala kompetens-skrivningar) och ett annat ämne (samhällskunskap). Inte en motsägelse - en förtydligande länk är tillagd i stället för en rättelse.

## Föråldrade påståenden som uppdaterats

- [[evidence-based-reasoning-intervention-d-205-historia]] (se ovan) - det enda föråldrade/felaktiga påståendet i wikin som denna genomgång identifierade och åtgärdade.
- [[MOC - Historiedidaktik och kontroversiella frågor]] - avsnitt 6 kallade tidigare Du & List "det enskilt starkaste empiriska fyndet i hela sessionen" och "direkt implementerbart"; båda formuleringarna är strukna och ersatta med en förklarad rättelse. "Topp-insikter"-listans förstaplats bytt från "d=2,05 - direkt implementerbart" till "mönstret korrekt siffra, falsk attribution". En död länk till `MOC - Evidensbaserad lektionsarkitektur` (ersatt redan 2026-05-24 av [[MOC - Momentplaneringsramverket]], men aldrig uppdaterad i denna MOC:s "Kopplingar till andra MOC:er") rättades i samma veva, eftersom den byggde direkt på den nu ogiltiga d=2,05-motiveringen.

## Spridningskontroll (genomförd enligt uppdrag)

Sökt igenom hela wikin (`wiki/`, `output/`, `raw/`) efter samma fel på andra ställen:

- **"Thomas Kraft"** - träffar bara i den rättade sidan och i den nya sessionens egna noter. Ingen ytterligare spridning.
- **d=2,05 / Du & List** - träffar bara i den rättade sidan, dess egen ursprungliga session-changelog (`CHANGELOG - Historiedidaktik extraction 2026-04-21.md`, lämnad orörd som historisk journal - den dokumenterar vad som begicks 2026-04-21, inte ett nutida sanningsanspråk) och MOC:en (nu rättad).
- **Reismans d=0,29 som mått på historiskt tänkande** - ingen träff utanför den nya sessionen. Ingen spridning att åtgärda.
- **Påståenden om att Gy25 kräver integrerad källkritik** - ingen ytterligare sida utanför den redan granskade `gy25-digital-kompetens-kallkritik-integration.md` hittades bära denna formulering.

**Slutsats av spridningskontrollen:** felet var innehållet i en enda sida, inte ett mönster som spridit sig i wikin. Det gör rättelsen avgränsad men desto viktigare att den faktiskt genomfördes - sidan har länkats till från minst tre andra platser (MOC:en, den ursprungliga session-changeloggen, och nu åtta nya sidor i denna genomgång) och skulle annars ha fortsatt sprida en felaktig slutsats vidare.

## MOC-kandidater

Ingen ny MOC föreslås. Sessionen passerar 15-noterströskeln (33 noter) men mappas mot den befintliga [[MOC - Historiedidaktik och kontroversiella frågor]] snarare än att utgöra en egen domän - materialet är en fördjupning/rättelse av ett ämne som redan har en MOC, inte ett nytt tema. Detta är noterat explicit i `index.md`.

## Sidor som blev kvar utan inkommande länkar

Ingen av sessionens 33 noter är orphans - samtliga har minst en inkommande länk, antingen från en systernot i samma session eller (efter denna genomgång) från en befintlig sida eller MOC. Kontrollerat genom att grep:a hela wikin efter `[[<basnamn>]]`-mönster för varje not, exklusive filens egen utgående länk.

## Statistik

| Metric | Värde |
|--------|-------|
| Noter i sessionen | 33 (+ 3 changelogar) |
| Wiki-sidor rättade (fel åtgärdat) | 1 ([[evidence-based-reasoning-intervention-d-205-historia]]) |
| Befintliga sidor med nya ömsesidiga länkar | 9 |
| MOC:er uppdaterade | 2 ([[MOC - Historiedidaktik och kontroversiella frågor]], [[MOC - Lärandevetenskap och kognition]]) |
| Bro mellan mekanism- och innehållslager | 1 (blindfläcken/CLT-hypotesen) |
| Motsägelser funna (nya, ojämkade) | 0 |
| Skenbara motsägelser kontrollerade och avskrivna | 2 |
| Föråldrade påståenden åtgärdade | 1 (plus MOC-avsnittet som byggde på det) |
| MOC-kandidater föreslagna | 0 (mappas mot befintlig MOC) |
| Orphans bland de 33 nya noterna | 0 |
| `index.md` uppdaterad | Ja - ny sessionsentry + omräknade totals (906 sidor, 42 källsessioner, 820 källnoter, 51 sessionschangelogar) |

## Slutreflektion

Detta var inte en session om att hitta nya kopplingar i första hand - det var en session om att skriva in en redan gjord verifiering så att den överlever i wikin. Den viktigaste lärdomen generaliserar långt bortom historiedidaktiken: en siffra kan vara exakt rätt och ändå bära ett falskt påstående, om det som omger den (population, domän, studiedesign, författarnamn, jämförelsepunkt) inte kontrolleras lika hårt som siffran själv. Den lärdomen är nu skriven in inte bara i den rättade sidan utan i en existerande, ämnesoberoende sida ([[lab-till-klassrum-effektstorlekar-krymper]]) - vilket är precis den typ av koppling som ger fyndet en räckvidd utanför sin egen session.

Den näst viktigaste lärdomen är metodologisk snarare än innehållslig: verifiering är inte enkelriktad. Samma researchunderlag som fällde d=2,05 rättade också två punkter där en tidigare skeptisk sammanställning hade varit för hård mot fältet (Reismans faktiska effekt på historiskt tänkande, Wilkes faktiska resultat) - se [[reismans-och-wilkes-effekter-visar-att-skepsis-mot-faltet-var-for-hard]]. En granskningsprocess som bara kan hitta överdrifter, aldrig underskattningar, är inte en granskningsprocess - den är en annan sorts bias.
