---
created: 2026-07-28
updated: 2026-07-28
created_by: claude-opus-5
updated_by: claude-opus-5
agent_version: 04.26
type: source
tags: [automation-bias, bedömning, ai-detektion, lärarprofession, experiment, effektstorlek, validitet]
source: AI-i-lararabetet-Fortbildning-Forskning-Research-Report-2026-07-28.md
citation: "Du, P., Liu, T. & Xian, X. (2026). Automation bias in teachers' evaluation of student writing. Frontiers in Psychology 17, 1889402. 2x2-experiment, N = 214 universitetslärare."
---

# Automation bias hos lärare är experimentellt bekräftad

## Kärninsikt
Du, Liu och Xian (2026) lät **214 universitetslärare bedöma exakt samma uppsats** av medelgod kvalitet. Det enda som varierade var en fiktiv AI-detektionsrapport: detektionsgrad 7 procent mot 87 procent, med eller utan rödmarkering. Hög detektionsgrad sänkte signifikant både kvalitetsbedömningen och poängsättningen med **effektstorlekar ηp² = 0,579-0,745** - manipulationen förklarade alltså över hälften av variationen i bedömningen. Samma text fick väsentligt olika betyg beroende på vad en maskin påstod om den. Detta är rapportens starkaste enskilda evidens för en professionsrisk, och den är experimentell, inte korrelationell.

## Mekanism
Två separata effekter, som dessutom interagerar:

**Siffran i sig.** Den påstådda detektionsgraden ankrade hela bedömningen. Uppfattad sannolikhet för AI-författarskap steg från M = 2,23-2,92 (låg detektionsgrad) till M = 5,93-6,35 (hög). Bedömaren omvärderade texten retroaktivt i ljuset av misstanken.

**Presentationsformen.** Rödmarkering och rapportlayout påverkade **självständigt** bedömningen av språklig uttrycksförmåga (ηp² = 0,297) och ökade sannolikheten för att läraren skulle ingripa. Det vill säga: hur maskinens utsaga är visuellt inramad har egen kraft, oberoende av dess innehåll. Signifikanta interaktioner mellan varning och markering uppstod för procentbaserad poängsättning, originalitet, språklig uttrycksförmåga, logisk struktur och ingripandebenägenhet.

Det farliga är kombinationen: en osäker maskinutsaga presenteras med hög visuell auktoritet, och läraren väger in den i en bedömning där den saknar evidensvärde.

## Empiri
**Du, P., Liu, T. & Xian, X. (2026).** *Automation bias in teachers' evaluation of student writing: effects of algorithmic warnings and visual risk cues in AI detection reports.* Frontiers in Psychology 17, 1889402.
- Design: 2 × 2 mellangruppsexperiment
- Manipulationer: AI-detektionsgrad (7 % / 87 %) och rödmarkering (frånvarande / närvarande)
- Urval: N = 214 universitetslärare i fyra grupper om 52-55; 67,3 procent samhällsvetare; 68,7 procent med 4-10 års undervisningserfarenhet
- Kritisk designdetalj: **alla bedömde samma uppsats**. Endast den fiktiva rapporten varierade

**Begränsningar som ska redovisas:** universitetslärare snarare än gymnasielärare, kinesisk kontext, och en fiktiv rapport i en experimentell situation utan verkliga konsekvenser för en verklig elev. Men designen är ren och slutsatsen svår att bortförklara.

**Svagare relaterat [FYND]:** andra studier rapporterar att automation bias stod för 51 procent av besluten i simulerade bedömningssituationer (blind följsamhet mot AI-output), ankringsbias för 34 procent och tillgänglighetsbias för 20 procent. **Källan för dessa siffror är svagt specificerad i rapporten och bör verifieras mot primärkällan före citering.**

**Motstridigt [FYND] som är själva poängen:** enkätstudier visar samtidigt att lärare rapporterar **hög** oro för transparens, bias och överdriven tillit till automatiserade system, och att de starkt föredrar human-in-the-loop-modeller. Lärare säger sig alltså misstro AI och accepterar ändå dess felaktiga bedömningar. Diskrepansen mellan uttryckt attityd och faktiskt beteende är väl dokumenterad i angränsande fält, särskilt medicinsk diagnostik.

## Implikation för klassrummet
- **Human-in-the-loop är inte ett skydd i sig.** Det är den viktigaste praktiska slutsatsen. Din förmågeträning är byggd så att servern aldrig anropar en LLM och att feedback passerar dig via CLI-flödet. Experimentet visar att en människa i loopen ändå ankras hårt av vad maskinen redan sagt. Skyddet ligger inte i att du är där, utan i **i vilken ordning du ser saker**.
- **Konkret designregel: bilda din egen bedömning innan du ser AI:s.** Om ditt feedbackflöde visar dig maskinens förslag först är du redan ankrad. Att först läsa elevsvaret och notera din bedömning, och därefter öppna förslaget, är den enda kända motåtgärden mot ankringen.
- **Rör aldrig AI-detektionssiffror i betygsunderlag.** Effektstorlekarna här är så stora att en detektionssiffra i praktiken sätter betyget åt dig. Det gäller även om du "bara tar den som en signal bland flera" - det var precis vad deltagarna i experimentet trodde att de gjorde.
- **Var uppmärksam på visuell inramning i verktygen.** Rödmarkering hade egen effekt utöver innehållet. Ett gränssnitt som färgkodar risk gör dig strängare, oavsett om färgen betyder något.
- **För sh1b och hi1b specifikt:** i tolkande ämnen är den ankrade bedömningen extra farlig, eftersom det inte finns ett facit som kan korrigera dig tillbaka. I ett matematiksvar syns felet. I ett historiskt resonemang gör det inte det.

## Spänningar
Experimentet gäller AI-**detektion**, inte AI-**bedömning**. Överföringen till "AI föreslår ett omdöme och läraren godkänner" är rimlig men är en extrapolering. Å andra sidan pekar den i den mer oroande riktningen: en detektionssiffra är en främmande signal om textens ursprung, medan ett AI-genererat bedömningsförslag är formulerat i bedömningens eget språk och därför sannolikt ännu svårare att stå emot.

Det finns också en spänning mot deskilling-litteraturen. Selwyn m.fl. hävdar att granskningsarbetet tränar omdömet. Du m.fl. visar att granskningen kan vara systematiskt förorenad av det man granskar. Båda kan vara sanna: granskning tränar omdömet, men bara om granskaren inte redan sett maskinens svar.

## Kopplingar
- [[deskilling-tesen-vilar-pa-analogi-inte-pa-longitudinella-data]] - den mekanism som avgör om deskilling inträffar
- [[llm-bedomarreliabilitet-spannet-030-080]] - hur pålitligt maskinens omdöme faktiskt är
- [[detektionsparadigmets-sammanbrott-2024-2026]] - detektionssiffrorna som ankrar bedömningen är i sig otillförlitliga
- [[ai-detektor-bias-mot-esl-elever]] - vem som drabbas av de falska positiva
- [[bedomning-lagst-i-alla-matningar-professionens-egen-grans]]
- [[rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen]] - kalibrering som motmedel mot ankring
- [[Den tysta bedömarkunskapen är viktigare än tydligare kriterier]]
- [[Delfardighetstaxonomin-operationaliserad]]
- [[Formagetraningens-utvecklingsplan-2026-07]]
- [[MOC - Bedömning och betygssättning]]

## Källa
Du, P., Liu, T. & Xian, X. (2026). *Automation bias in teachers' evaluation of student writing: effects of algorithmic warnings and visual risk cues in AI detection reports.* Frontiers in Psychology, 17, 1889402. https://doi.org/10.3389/fpsyg.2026.1889402
