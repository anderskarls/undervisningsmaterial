---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, retrieval-practice, video, lasning]
source: Pedagogiska appar design research report 2026-04-11
---

# Frågor inbäddade mitt i material slår frågor bara efter materialet

Yan et al. (2024) i *Technology, Knowledge and Learning* visar att **inbäddade frågor inom läromaterialet** (video, text, podd) signifikant förbättrar både retention *och* självreglering jämfört med frågor som bara kommer efter materialet. Mekanismen: den korta retrieval-practice-impulsen mitt i konsumtionen skapar två effekter samtidigt - den tvingar eleven att processa aktivt (istället för passivt konsumera) och den signalerar vad som är viktigt i resten av materialet.

Det här är skillnaden mellan "se videon och gör sedan ett quiz" och "se videon som pausas vid fråga 3, fråga 7 och fråga 12". Den andra är pedagogiskt starkare trots att de inbäddade frågorna oftast är *färre* och *kortare* än slutquizet.

För gymnasielärare i historia/samhällskunskap är detta direkt applicerbart: när en elev läser en källtext, en artikel eller ser en dokumentär, bäddar appen in 2-3 korta frågor mitt i. Det fångar elevens uppmärksamhet bättre än ett långt slutprov och fördelar den kognitiva belastningen jämnare.

## Implikationer för design
- Stöd för att bädda in frågor mitt i text eller video, inte bara efter.
- För textmaterial: en fråga efter varje avsnitt/underrubrik.
- För video: timestamp-baserade pauspunkter där appen stannar och ställer en fråga.
- Frågan ska vara kort (1 MCQ eller en enmeningsfråga), inte en hel quiz.
- Pausen ska kännas som en mikro-reflektion, inte ett test.

## Koppling till survey-platform
Detta är en differentierande feature mot Google Forms: inbäddade frågor i ett "moment"-flöde där appen visar material + frågor om vartannat. Kräver att du har ett koncept av "lesson" eller "module", inte bara "quiz". Kan vara värt att prioritera högt om du vill att appen ska vara ett *lärande*verktyg, inte bara ett bedömningsverktyg.

## Källa
- Yan, V. X. et al. (2024). "Immediate Versus Delayed Low-Stakes Questioning: Encouraging the Testing Effect Through Embedded Video Questions." *Technology, Knowledge and Learning*. https://link.springer.com/article/10.1007/s10758-024-09746-1
