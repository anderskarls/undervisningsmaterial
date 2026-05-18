---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, UX, progress-indikatorer, slutforande, ångest]
source: Pedagogiska appar design research report 2026-04-11
---

# Live progress-bars kan öka avhopp - inte minska dem

Conrad et al. (2010) i *Public Opinion Quarterly* är fortfarande den definitiva studien på progress-indikatorer, och resultatet är kontraintuitivt: en progress-bar hjälper bara när den visar *snabb* initial progress. När den visar långsam initial progress **ökar avhoppsfrekvensen** och den subjektiva upplevelsen försämras. Den designkonvention som alla bygger in reflexmässigt kan alltså aktivt skada slutförande.

Lösningen enligt samma studie: **intermittent återkoppling**. Progress visas vid milstolpar ("Fråga 4 av 12", checkmarks vid segmentgränser) istället för kontinuerligt fyllande animation. Detta fångar motivationsvinsten från "goal gradient"-effekten (Amir & Ariely: människor accelererar nära upplevt slut) utan att skapa den ångestdrivna ruminationen.

Relaterat: 38,5% av högstadie-/gymnasieelever rapporterar testångest någon gång (*CBE-Life Sciences Education*, 2021). Synliga nedräkningar och ständigt uppdaterande progress-bars är båda triggers för samma typ av ruminerande ångest, även i lågstakes-kontext.

## Implikationer för design
- Visa progress som text ("Fråga 4 av 12") eller checkmarks vid milstolpar - inte en live fyllande stapel.
- Inga nedräkningstimers som default.
- Tillåt pausa/återuppta med sparad state.
- Låt eleven markera frågor att återkomma till senare.
- Om progress-bar måste finnas: visa den bara vid segmentgränser, inte kontinuerligt.

## Koppling till survey-platform
I din quizapp: skippa den fyllande progress-baren. Använd "Fråga 4 av 12" som textindikator och checkmarks vid naturliga segment. Det är både mindre kod och bättre pedagogik.

## Källa
- Conrad, F. G. et al. (2010). "The impact of progress indicators on task completion." *Public Opinion Quarterly*. https://pmc.ncbi.nlm.nih.gov/articles/PMC2910434/
- *CBE-Life Sciences Education* (2021). "Student Anxiety and Perception of Difficulty Impact Performance and Persistence."
