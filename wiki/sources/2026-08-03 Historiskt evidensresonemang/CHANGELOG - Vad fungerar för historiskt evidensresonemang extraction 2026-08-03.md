---
created: 2026-08-03
updated: 2026-08-03
created_by: claude-sonnet-5
updated_by: claude-sonnet-5
agent_version: 04.26
type: changelog
tags: [changelog, historiedidaktik, kallkritik, evidensresonemang]
---

# CHANGELOG - Vad fungerar för historiskt evidensresonemang (extraction 2026-08-03)

**Denna changelog dokumenterar en avgränsad delextraktion ur sessionen `2026-08-03 Historiskt evidensresonemang`.** Uppdraget var specifikt: vad som faktiskt fungerar för att lära gymnasieelever historiskt evidensresonemang, och vad evidensen för det är värd. Två systerextraktioner ur samma källmaterial täcker andra delar av samma session - dels berättelsen om den omtvistade d=2,05-effektstorleken (Du & List 2024, Kraft-benchmarken), dels historiens egen evidenslogik och styrdokumenten (Gy25, funktionell källkritik). De områdena har medvetet inte rörts här.

## Uppdraget som det formulerades

Täck verifieringsfilens punkter F3, B9, B10, D1, D2, D3, D4 och O1, med särskilt fokus på: (1) doströskeln mellan overksamma korta insatser och verksamma uthålliga interventioner som fältets öppna fråga, (2) rättelsen som visar att verifiering gick emot skepsisen på två punkter (Reisman, Wilke), (3) exakt återgivning av Nygren & Efimova (2025), (4) De La Paz-forskningens tre studier hållna isär, (5) det negativa fyndet att fältet tror sig sakna en RCT fast en finns, och (6) Marino (2022) om korroborering snarare än sortering.

## Källor

Läst i denna ordning, med verifieringsfilen som auktoritativ:

1. `resources/research/historiskt-evidensresonemang-VERIFIERING-2026-08-03.md` (huvudkälla för samtliga sju noter)
2. `resources/research/historiskt-evidensresonemang-forskaren-2026-08-03.md`
3. `resources/research/historiskt-evidensresonemang-amnesdidaktikern-2026-08-03.md`
4. `resources/research/historiskt-evidensresonemang-praktikern-2026-08-03.md`

## Antal noter

7 atomära noter.

## Noterna

1. [[doströskeln-mellan-korta-och-uthålliga-källkritikinsatser-är-fältets-öppna-fråga]] - RESONEMANG: var brytpunkten går mellan Nygren & Efimovas nollresultat (kort insats) och Reismans d≈0,49 (sex månaders intervention) är obesvarad; ingen studie varierar dos systematiskt.
2. [[reismans-och-wilkes-effekter-visar-att-skepsis-mot-faltet-var-for-hard]] - Reismans effekt på historiskt tänkande är beräknat ≈0,49, inte 0,29 (som gäller faktakunskap); Wilke m.fl. (2022) gav signifikant effekt på undersökningsfärdigheter, inte bara nollresultat.
3. [[nygren-efimova-2025-en-enda-skola-ingen-direkt-eftermatning]] - precisering: matchat urval vid en enda skola, kvasiexperimentell, ingen direkt-eftermätning - "effekten höll inte i tre månader" är fel eftersom ingen effekt någonsin mättes upp.
4. [[de-la-paz-tre-studier-som-inte-far-blandas-ihop]] - 2022 års studie randomiserade mellan två aktiva undervisningssätt utan obehandlad kontroll; "0,3-0,4 SD" är en skillnad mellan metoder, inte en effekt av undervisning mot ingenting.
5. [[det-cirkulerar-att-fältet-saknar-rct-fast-en-finns]] - negativt fynd: fyra av fem oberoende forskningsöversikter hävdade att ingen RCT finns i fältet; Wilke m.fl. (2022) är en klusterrandomiserad RCT som samtliga missade.
6. [[marino-2022-historiker-korroborerar-opalitliga-kallor-forkastar-dem-inte]] - N=30 kvalitativ studie: historiker sorterar inte bort opålitliga källor utan korroborerar dem - motsäger sorteringsbaserad källkritikundervisning.
7. [[skolforskningsinstitutet-2023-02-saknar-effektstorlekar-andrahand]] - ANDRAHAND: sannolikt men overifierat att Sveriges egen systematiska översikt om historisk förståelse (2023:02) inte innehåller ett enda Cohen's d.

## Huvudfyndet i klartext

Fältet historiskt evidensresonemang är svagare på kontrollerade effektstorlekar än forskningskommunikationen om det antyder åt båda hållen samtidigt: en cirkulerande föreställning att ingen RCT finns är falsk (Wilke 2022 existerar), men de reella effekterna som finns (Reisman ≈0,49, Wilke signifikant på delfärdighet, De La Paz 0,3-0,4 som armjämförelse) är måttliga, inte extraordinära, och ingen studie besvarar den prakiskt viktigaste frågan - hur lång och hur återkommande en insats måste vara för att ge bestående effekt. Den enda svenska gymnasiedatapunkten (Nygren & Efimova) visar att en kort insats inte gav mätbar effekt efter tre-fyra månader, men det är inte samma sak som att effekten "klingade av" - ingen effekt mättes någonsin upp.

## Korsdomänfynd

Marino (2022) om att historiker korroborerar snarare än förkastar opålitliga källor konvergerar med Reismans Document-Based Lesson-design (sourcing + kontextualisering + korroborering tillsammans, aldrig isolerat) och med kritiken av checklistebaserad webbkällkritik (Wineburg 2025, befintlig wikisida) - tre oberoende linjer som alla pekar mot att sorteringslogik ("tillförlitlig/otillförlitlig") är en systematisk missuppfattning av vad källkritiskt arbete faktiskt är, oavsett om källan är historisk eller digital.

## De negativa fynden, separat

- Det finns ingen studie som varierar interventionsdos (antal lektioner/veckor) systematiskt inom samma design, samma population och samma utfallsmått - dosfrågan är obesvarad, inte bara obesvarad i detta material utan sannolikt i hela fältet.
- Fyra av fem oberoende forskningsöversikter i samma session hävdade felaktigt att ingen RCT finns i fältet historiskt tänkande.
- De La Paz (2022) testade aldrig undervisning mot en obehandlad kontrollgrupp - frågan "fungerar detta bättre än att inte undervisa alls" förblir obesvarad av den studien.
- Skolforskningsinstitutets 2023:02-slutsats om avsaknad av effektstorlekar kunde inte verifieras direkt (lösenordsskyddad fulltext) och är märkt ANDRAHAND.

## Länkverifiering

Kommando kört mot samtliga `.md`-filer i sessionsmappen:

```
grep -oh "\[\[[^]]*\]\]" "wiki/sources/2026-08-03 Historiskt evidensresonemang"/*.md | sort -u | \
  sed 's/\[\[//;s/\]\]//' | while read -r l; do
    f=$(printf '%s' "$l" | sed 's/|.*//;s|.*/||')
    find wiki output raw -name "$f.md" -print -quit | grep -q . || echo "SAKNAS: $l"
  done
```

**Resultat: 0 saknade länkar av samtliga unika wikilänkar i de sju noterna.** Länkar till befintliga sidor ([[wineburg-2025-weblitteracitet-lart-fel-i-decennier]], [[mdpi-observationsstudie-2025-expositorisk-dominerar-historia]], [[marino-2024-historisk-empati-maste-vara-affektiv-inte-bara-kognitiv]]) verifierade mot disk. Interna länkar mellan de sju nya noterna verifierade mot varandra.

## Ej rört

`index.md`, MOC-filen `wiki/topics/MOC - Historiedidaktik och kontroversiella frågor.md`, och den befintliga sidan `wiki/sources/2026-04-21 Historiedidaktik och kontroversiella fragor/evidence-based-reasoning-intervention-d-205-historia.md` (d=2,05-korrigeringen hör till systerextraktionen om Du & List/Kraft) har medvetet lämnats orörda av denna delextraktion. Konsolidering av index/MOC för hela sessionen `2026-08-03 Historiskt evidensresonemang` förutsätts ske efter att samtliga tre delextraktioner är klara.
