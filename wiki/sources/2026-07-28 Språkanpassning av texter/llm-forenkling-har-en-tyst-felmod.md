---
created: 2026-07-28
updated: 2026-07-28
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: document-insight
source: sprakanpassning-internationell-forskning-2026-07-28.md
tags: [llm, textforenkling, ai-i-undervisning, riskbedomning, 2025]
evidence-level: medium
---

# LLM-förenkling har en tyst felmod - texten tappar innehåll utan att någon märker det

## Kärninsikt

Agrawal och Carpuat (2024) lät 112 modersmålstalare läsa original eller förenklade versioner från nio automatiska system, med ett femte svarsalternativ - "går inte att besvara" - tillagt för att fånga betydelseförlust.

**Även de bästa systemen gjorde minst 14 procent av frågorna obesvarbara** utifrån den förenklade texten. Sämsta systemet: 20 procent. Huvudorsaken var **överradering** - felaktig strykning av hela eller delar av fraser.

Det är kärnproblemet: eleven som läser en LLM-förenklad text kan ha en text där den efterfrågade informationen helt enkelt inte finns kvar, och varken eleven eller läraren ser det.

## Varför man inte kan kvalitetssäkra med mätvärden

Vendeville, Ermakova och De Loor (2025) byggde den första formella taxonomin över fel i automatisk textförenkling. Deras centrala fynd för praktiken: **befintliga mätvärden för automatisk textförenkling korrelerar inte med förekomsten av fel.** En text som scorar bra på förenklingsmått kan alltså vara felaktig.

TSAR 2025 (48 bidrag från 20 lag) flaggar dessutom att systemen börjar **mätta** de automatiska måtten - måtten mäter inte längre det som skiljer systemen åt.

GPT-4 gör färre felaktiga förenklingar än tidigare system men **har svårt med lexikal parafrasering** - alltså precis den operation som är kärnan i att göra svåra ord begripliga.

## Vad som ändå fungerar

Guidroz m.fl. (2025, Google Research) är den största och metodologiskt starkaste studien i hela översikten: randomiserat, 4 563 deltagare, 31 texter i sex ämnesområden. Resultat **+3,9 procentenheter** fler rätt (p < 0,05), störst för medicinska abstracts (+14,6).

Men: vuxna crowdsourcingdeltagare, inte gymnasieelever. Utfallsmåttet är flervalsfrågor om innehåll, inte lärande över tid eller språkutveckling. Störst effekt fick den mest extremt fackspråkliga genren, vilket antyder att effekten kommer från **jargongavlägsnande** snarare än syntaktisk förenkling. Och det som testades var iterativ, kvalitetskontrollerad förenkling - inte "be ChatGPT förenkla den här texten".

## Implikation

Om du ändå använder LLM är den säkrare användningen att generera **stöttningen** - ordlista, förförståelseruta, läsguide, frågor, sammanfattning som eftertext - snarare än en **ersatt text**.

Skälet är felmodernas asymmetri: felmoden vid stöttning är "ett dåligt hjälpmedel bredvid en korrekt text". Felmoden vid ersättning är "en korrekt hjälptext bredvid en text som tappat 14 procent av innehållet utan att någon märker det".

**Detta är ett riskargument, inte ett effektargument.** Evidensen säger inte att stöttning ger bättre förståelse än förenkling. Den säger att förenkling har en tystare felmod.

Praktiskt användbart om du nivåstyr: explicit nivåangivelse **plus nivåbeskrivningar** i prompten gav högre träffsäkerhet än nivåetiketten ensam (TSAR 2025).

## Spänningar

Svenska ingår inte i TSAR 2025 eller i de multilinguala ramverk som hittats. All utvärdering av nivåstyrd förenkling är gjord på engelska och några stora språk.

En obehaglig komplikation: eleverna översätter och förenklar redan texter själva med telefonen, med exakt de felmoder som beskrivs ovan och utan lärarens granskning. Frågan om läraren ska förenkla kan vara delvis överspelad.

## Kopplingar

- [[den-direkta-jamforelsen-saknas]] - ingen har jämfört LLM-förenkling mot LLM-genererad stöttning
- [[forenkling-och-elaborering-konvergerar-mot-kohesion]] - vad en bra bearbetning gör
- [[aha-2025-ai-guidelines-historia-stodjer-ej-ersatter]]

## Källa

Agrawal, S., & Carpuat, M. (2024). arXiv:2312.10126.
Guidroz m.fl. (2025). arXiv:2505.01980, Google Research.
Vendeville, Ermakova & De Loor (2025). arXiv:2505.16392.
TSAR 2025 Shared Task, ACL Anthology 2025.tsar-1.8.
