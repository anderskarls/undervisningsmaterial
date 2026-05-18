---
created: 2026-04-12
updated: 2026-04-12
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
---

# CHANGELOG - Document Analysis: AI-Powered Formative Feedback Research

**Datum:** 2026-04-12
**Kalldokument:** `/resources/ai-formative-feedback-research-2026-04-12.md`
**Session:** 2026-04-12 Retrieval Practice och AI Feedback i undervisning
**Antal kallor i rapporten:** 28+ (meta-analyser, RCT:er, systematiska oversikter, policydokument 2024-2026)

---

## Sammanfattande statistik

| Metrik | Antal |
|--------|-------|
| **Noter skapade** | 19 |
| **Duplikater identifierade och undvikna** | 3 |
| **Befintliga noter som uppdaterats** | 0 |

---

## Duplikater identifierade och undvikna

1. **AI i formativ bedomning - generella mojligheter och risker** - Redan tackts av `ai-formativ-bedomning-mojligheter-och-risker.md` (2026-03-07, uppdaterad 2026-04-12). Ny session fokuserar pa *specifika* fynd som gar bortom den notens generella analys.

2. **AI-features ska vara smala och off-path** - Redan tackts av `ai-features-i-larappar-ska-vara-smala-och-off-path.md` (2026-04-11). Ny session refererar till denna not istallet for att duplicera.

3. **GDPR-dataminimering som designconstraint** - Redan tackts av `gdpr-datafminimering-ar-designconstraint-i-sverige.md` (2026-04-11). Nya noterna om EU AI Act och Skolverket/IMY *kompletterar* den befintliga noten med AI-specifika krav.

---

## Skapade noter

### Empiriska fynd med effektstorlekar

1. **ai-feedback-differentiell-effekt-lagpresterande-vs-hogpresterande.md**
   Xie et al. (2025) RCT: lagpresterande behover tvingad feedback (+0,673 SD), hogpresterande behover on-demand (+0,378 SD). Fel leveranssatt skadar sjalvreglering.

2. **meyer-rct-llm-feedback-gymnasieniva-effektstorlekar.md**
   Mest relevanta RCT:n for gymnasieniva: d = 0,19 (text), d = 0,36 (motivation), d = 0,34 (positiva emotioner). Motivation > larande.

3. **tillitsparadoxen-ai-feedback-lagre-tillit-hogre-revidering.md**
   Elever litar mindre pa AI (60% vs 90%) men reviderar mer. Algoritmaversion: blindad AI-feedback betygsatts hogre. Designmöjlighet for lagre affektiv barriar.

4. **adaptiv-ai-feedback-overtraffar-statisk-expertfeedback.md**
   Bauer et al. (2025): Adaptiv AI-feedback overtraffar statisk for komplexa uppgifter. Sarskilt relevant for resonemangsfragor.

5. **meta-analyser-effektstorlekar-ai-larande-kritisk-oversikt.md**
   Sex meta-analyser: effektstorlekar fran g = 0,19 till 1,02 med stora forbehall. AI vs manniska: ej signifikant skillnad. Realitetskoll.

6. **tutor-copilot-ai-stodjer-svagare-larare-mest.md**
   Forsta RCT:t av manniska-AI-tutoring: AI kompenserar for svagare handledare (upp till 9 p.e.). AI som larar-stod, inte larar-ersattare.

7. **interventionslangd-5-10-veckor-optimal-for-ai-feedback.md**
   Wang & Fan (2025): 5-10 veckor ar optimalt, langre kan ge samre resultat. Nyhetseffekt-avmattning. Matchar momentstruktur.

8. **ai-feedback-motivation-vs-larande-asymmetri.md**
   Konsekvent monster: motivationseffekten ar starkare an larandeeffekten. Designimplikation: salja inte "battre betyg" utan "okat engagemang".

9. **ai-feedback-deklarativ-vs-procedurkunskap.md**
   AI-feedback effektivare for deklarativ kunskap (fakta, definitioner) an for procedurkunskap (resonemang, tillampning). E-niva > A-niva.

### Risker och misslyckanden

10. **kognitiva-paradoxen-ai-forbattrar-prestation-forsamrar-forstaelse.md**
    17% samre konceptuell forstaelse trots procedurella framgangar. Aldersgrupp 17-25 sarskilt mottaglig. Systematisk illusion av larande.

11. **hallucinationsrisker-ai-feedback-utbildning-fem-motstrategier.md**
    Fem evidensbaserade motstrategier: RAG, rubrikforankring, temperaturkontroll, larargranskningslager, elevkallkritik.

12. **sprakbias-i-ai-feedback-aave-och-icke-standard-svenska.md**
    AAVE-bias dokumenterad. Okant hur LLM:er hanterar invandrsvenska och kodvaxling. Under-undersokt for svenska.

13. **feedback-beroende-risk-fading-scaffolding-som-motatgard.md**
    Fyra faser av fading scaffolding: full feedback -> ledtradar -> kvantitativ -> sjalvbedomning. ZPD-baserad progression.

### Designramverk

14. **cognitive-mirror-ramverk-ai-som-larbar-novis.md**
    Kasneci et al. (2025): AI som "larbar novis" med fyra nivaer (M0-M3). Pedagogiskt användbart underskott. Protege-effekten.

15. **rubrik-baserad-prompting-forbattrar-ai-feedback-112-procent.md**
    GPT-4 + rubrik = 112-114% forbattring. Tre tekniker: rubrik+instruktioner, RPE, CoTAL. Fragspecifika rubriker.

16. **deeva-ramverk-fyra-nivaer-ai-feedback.md**
    Systematisk oversikt av 129 artiklar. Fyra feedbacknivaer: uppgift, process, sjalvreglering, sjalv. De flesta system opererar bara pa niva 1.

17. **metakognitiv-stallning-sjalvbedomning-fore-ai-feedback.md**
    Sex designprinciper for metakognitiv stallning. Sjalvbedomning fore feedback som enklaste implementation.

18. **praktisk-prompt-mall-ai-feedback-quiz-plattform.md**
    Femstegs promptmall: kontext, exempelsvar, feedbackfokus, begransning, sprakanpassning. Parametriserbar.

### Regulatoriska insikter

19. **eu-ai-act-quiz-plattform-hogrisk-klassificering.md**
    Utbildnings-AI ar hogrisk under Annex III. Tidslinje till aug 2027. "Formativt larstod" vs "bedomningsverktyg" ar regulatoriskt avgörande.

20. **skolverket-imy-riktlinjer-ai-i-skolan-2025.md**
    Skolverkets och IMY:s konkreta krav. "Explorativa aktiviteter" som rekommendation. DPIA kravs.

21. **ai-feedback-battre-pa-yta-an-djup-implikation-for-samhallskunskap.md**
    AI starkare pa yta (ordförrad, grammatik) an djup (argumentation, multiperspektivitet). Tredelad strategi for quiz-plattform.

22. **forskningsgap-sekundarniva-humaniora-svenska-ai-feedback.md**
    Atta identifierade forskningsgap. Explorativt territorium for svensk kontext. Implikation: bygg in datainsamling.

---

## Teman och monster over insikterna

### 1. Differentiering ar nyckeln
Genomgaende monster: AI-feedback ar inte universellt bra eller dalig - effekten beror pa *vem* som tar emot den (lag/hog-presterande), *hur* den levereras (tvingad/on-demand), *vad* den avser (deklarativ/procedur, yta/djup), och *hur lange* (5-10 veckor optimalt).

### 2. Motivation > direkt larande
AI-feedbackens starkaste mätbara effekt ar motivationell och affektiv, inte kognitiv. Designa for engagemang, inte for betygsförbattring.

### 3. Hybrid slar alla
AI-only ar svagare an AI + larare i alla jámforelser. AI:ns roll ar "skalbar forstapasse" - inte lararersattare.

### 4. Metakognitiv risk ar fundamental
Utan medveten design undergraver AI-feedback precis de sjalvregleringsformaga den ar tänkt att stodja. Sjalvbedomning fore feedback, reflektionsprompts, och fading scaffolding ar inte "nice to have" utan nödvandiga skyddsatgarder.

### 5. Regulatorisk kontext skarps
EU AI Act + Skolverket + IMY skapar en tydlig ram: formativ on-demand-feedback ar kompatibel, automatisk bedömning av laranderesultat ar hogrisk. Designvalet ar bade pedagogiskt och regulatoriskt.

### 6. Forskningslackorna ar stora
Sarskilt for: sekundarniva, humaniora, svensk sprakkontext, langtidseffekter och equity. En quiz-plattform opererar i explorativt territorium och bor bygga in systematisk utvardering.
