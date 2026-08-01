---
created: 2026-07-28
updated: 2026-07-28
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: source
tags: [bedömning, bedömarreliabilitet, llm, qwk, self-enhancement-bias, validitet, uppsatsbedömning]
source: AI-i-lararabetet-Fortbildning-Forskning-Research-Report-2026-07-28.md
citation: "Agreement Between Large Language Models and Human Raters in Essay Scoring: A Research Synthesis (2025), syntes av 65 studier jan 2022 - aug 2025; Education Sciences 16(7), 1147 (2026)."
---

# LLM-bedömarreliabilitet: spannet 0,30-0,80 är svaret, inte medelvärdet

## Kärninsikt
En forskningssyntes över 65 publicerade och opublicerade studier (januari 2022 - augusti 2025) finner att samstämmigheten mellan LLM och mänskliga bedömare i uppsatsbedömning är "generellt måttlig till god", med samstämmighetsindex (quadratic weighted kappa, Pearsons r, Spearmans rho) mestadels **mellan 0,30 och 0,80**. Spannet är svaret. QWK 0,30 är dålig samstämmighet, i praktiken oanvändbar för högriskbedömning. QWK 0,80 är god. Att medianstudien landar däremellan innebär att "AI kan bedöma lika bra som lärare" är **sant i vissa uppgiftstyper och falskt i andra**, och att det inte går att veta vilket utan att pröva i den specifika kontexten.

## Mekanism
Prestandan är **konstruktberoende**, inte generell. GPT:s överensstämmelse med mänskliga bedömare är starkast för **ordförråd och struktur**, mest stabil i absolut samstämmighet för **innehåll**, och **svagast för grammatik**. Det betyder att en LLM är mest tillförlitlig just där bedömningen är mest ytlig, och minst tillförlitlig där reglerna är mest explicita - vilket är motsatsen till vad man intuitivt förväntar sig.

Ovanpå detta ligger fem dokumenterade systematiska bias:
- **Positionsbias** - var i texten något står påverkar bedömningen
- **Verbositetsbias** - längre svar premieras
- **Self-enhancement bias** - LLM-baserad bedömning ger **GPT-genererad text högre betyg än mänskligt skriven text**
- **Systematiskt strängare** bedömningsmönster och **minskad spridning** i poäng jämfört med mänskliga bedömare
- **Proportionell bias** - mildare bedömning av svaga uppsatser, hårdare av starka

Proportionell bias är särskilt lömsk i ett betygssystem: den komprimerar skalan mot mitten och gör det svårare att skilja C från A än att skilja E från C.

## Empiri
- **Forskningssyntes (2025)**, 65 studier jan 2022 - aug 2025: samstämmighetsindex mestadels 0,30-0,80.
- **"Do AI Grading Systems Systematically Differ from Human Teachers' Grading? Evidence of Bias and Consistency in Educational Assessment"**, *Education Sciences* 16(7), 1147 (2026) - biaslistan ovan.
- **"Comparing GPT and human raters in essay assessment: Variability, bias, and the potential of LLM-based scoring"**, *Studies in Educational Evaluation* (2026).

**Motstridigt [FYND] som ska redovisas som motstridigt:** andra sammanställningar rapporterar att moderna hybrid- och LLM-baserade modeller når **QWK 0,75-0,86** på K-12-uppsatser, vilket är stark samstämmighet med mänskliga bedömare. Detta motsäger inte spannet 0,30-0,80 - det är den övre delen av samma fördelning, uppnådd med **specialiserade och finjusterade system** snarare än generella chattmodeller. Man ska alltså inte generalisera från optimerade forskningssystem till ChatGPT i lärarens webbläsare, och inte heller avfärda att höga värden är möjliga med rätt konstruktion.

**Explicit lucka:** all bedömarreliabilitetsforskning i materialet gäller engelskspråkig uppsatsbedömning med **analytiska rubriker**. Svenska kunskapskrav med sina värdeord och helhetsbedömning är en annan konstruktion. Överförbarheten är oprövad.

## Implikation för klassrummet
- **Self-enhancement bias är den post som ska oroa dig mest.** Om AI-baserad bedömning systematiskt premierar AI-genererad text, och elever i ökande grad använder AI, uppstår en självförstärkande loop där det maskinlika belönas. För historia, där bedömningen ska fånga elevens egen resonemangsförmåga och källhantering, är det ett **validitetshot, inte bara ett reliabilitetsproblem**.
- **Din delfärdighetstaxonomi är rätt konstruktion för det här problemet.** Spannet 0,30-0,80 gäller helhetsbedömning av uppsatser. Smala, väldefinierade delfärdigheter med exemplars ligger närmare de förhållanden där höga QWK uppnås. Men det är ett skäl att pröva empiriskt, inte att anta.
- **Testa samstämmigheten i din egen kontext innan du litar på den.** Konkret: bedöm 20 elevsvar själv, låt flödet bedöma samma 20, och jämför. Utan den mätningen vet du inte var i spannet 0,30-0,80 du befinner dig, och litteraturen kan inte tala om det.
- **Verbositetsbias är omedelbart praktiskt.** Om ditt system premierar längre svar lär sig eleverna skriva längre, inte bättre. Det är mätbart och åtgärdbart i feedbackmallarna.
- **Kalibrera mot dina egna exemplars, inte mot en generell modell.** Se [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]].

## Spänningar
"AI kan bedöma lika bra som lärare" och "AI kan inte bedöma pålitligt" är båda försvarbara sammanfattningar av samma 65 studier, beroende på vilken del av fördelningen man citerar och vilket system man menar. Att sammanfatta till ett medelvärde vore att förstöra informationen.

En andra spänning gäller jämförelseobjektet: **mänskliga bedömare är själva inte särskilt samstämmiga**. Att en LLM når QWK 0,60 mot en mänsklig bedömare säger lika mycket om den mänskliga bedömarens instabilitet som om modellens. Materialet i rapporten adresserar inte detta, men det är den fråga som avgör om siffrorna är dåliga eller normala.

## Kopplingar
- [[automation-bias-hos-larare-experimentellt-bekraftad]] - varför ett opålitligt maskinomdöme ändå får genomslag
- [[bedomning-lagst-i-alla-matningar-professionens-egen-grans]] - kårens gränsdragning ser klok ut i ljuset av dessa siffror
- [[ai-stod-i-tolkande-amnen-konstaterad-evidenslucka]] - varför spannet troligen är sämre i historia
- [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]]
- [[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]]
- [[Lärarens ämneskunskap är en förutsättning för valid bedömning]]
- [[Lärar-feedback-literacy som parallell konstruktion]]
- [[Delfardighetstaxonomin-operationaliserad]]
- [[dawson-validitet-slar-fusk-som-central-fraga]]
- [[MOC - Bedömning och betygssättning]]

## Källa
*Agreement Between Large Language Models and Human Raters in Essay Scoring: A Research Synthesis* (2025). https://www.researchgate.net/publication/398766141_Agreement_Between_Large_Language_Models_and_Human_Raters_in_Essay_Scoring_A_Research_Synthesis
*Do AI Grading Systems Systematically Differ from Human Teachers' Grading?* (2026). Education Sciences 16(7), 1147. https://doi.org/10.3390/educsci16071147
