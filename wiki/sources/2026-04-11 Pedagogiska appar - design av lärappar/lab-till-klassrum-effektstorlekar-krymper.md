---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, evidens, metaanalys, realism]
source: Pedagogiska appar design research report 2026-04-11
---

# Effektstorlekar krymper från labb till klassrum - overprovocka inte

En nyansering av hela den evidensbaserade inlärningslitteraturen: Latimier et al. (2024) i *International Journal of STEM Education* gjorde single-paper meta-analyses på spaced retrieval practice i nio autentiska STEM-kurser. Resultatet: **spaced quizzing slog massed quizzing i de flesta kurser, men effektstorlekarna var signifikant mindre** än i labbstudier - ofta g ~ 0,2-0,3 istället för labbens g > 0,6.

Detta är ett *allmänt* mönster i utbildningsforskning, inte ett fel med en specifik studie. När en pedagogisk metod flyttas från labb (med perfekt kontroll, motiverade deltagare, obegränsad tid) till verkligt klassrum (med distraktioner, varierande motivation, tidsbudget) krymper effekterna. Ibland försvinner de. Ibland håller de sig.

Praktisk implikation för designern: **forskningens effektstorlekar är en övre gräns, inte en förväntning**. Om en studie säger "testing effect g = 0,61", ska du planera för att du får något som 0,2-0,3 i verkligt klassrum. Det är fortfarande värt att göra - en liten-medelstor effekt över hundratals elever och terminer är meningsfull - men det är inte magi.

Det här skyddar dig också mot hype: när en ny studie påstår en stor effektstorlek från en pilot, anta att den krymper 2-3x vid deployment. Om appen designas runt den ursprungliga effektstorleken blir du besviken. Om den designas runt den krympta, blir du nöjd när den håller måttet.

## Implikationer för design
- Kommunikera försiktigt till lärare och skolledning. "Quizen kan ge ~5-10% förbättring på retention" är ärligare än "bevisat effekt g = .61".
- Ha ett evidens-FAQ i appen som refererar både labb- och fältstudier, med öppen diskussion av krympningen.
- Var skeptisk till lockarstudier som rapporterar enorma effekter. Vänta på fältreplikationer.
- Bygg telemetri (pseudonym!) som tillåter dig att mäta faktiska effektstorlekar i din egen app över tid.

## Koppling till survey-platform
Ett epistemiskt försvar: bygg inte hajp i din marknadsföring. Skriv "evidensbaserad design med ödmjuka förväntningar" - det är mer trovärdigt för lärare och skolledare än "vi har bevisat att din klass lär sig 61% mer". Den första säljer; den andra möts med skepsis.

## Källa
- Latimier, A. et al. (2024). "Single-paper meta-analyses of the effects of spaced retrieval practice in nine introductory STEM courses." *International Journal of STEM Education*. https://link.springer.com/article/10.1186/s40594-024-00468-5
- Adesope, Trevisan, Sundararajan (2017). *Review of Educational Research*.
