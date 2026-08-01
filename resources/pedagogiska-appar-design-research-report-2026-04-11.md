---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6[1m]
updated_by: claude-opus-4-6[1m]
agent_version: 03.26
tags: [research-report, edtech, pedagogisk-design, survey-platform, UX, cognitive-load, formative-assessment]
---

# Pedagogiska appar - hur ska de designas
## Research Report for the Survey Platform Project

**Date:** 2026-04-11
**Audience:** Gymnasielärare (civics and history) building a student-facing web survey/quiz platform
**Scope:** Evidence-based design principles for classroom and homework digital assessment apps
**Recency:** >70% of sources from 2023-2025; foundational anchors (Sweller, Mayer, Deci/Ryan) flagged explicitly

---

## Executive Summary

The 2023-2025 literature converges on a counterintuitive message for anyone building a student-facing quiz/survey app: **less is more**. Simpler feedback beats elaborate explanations (Say 2024; Frontiers 2025), simpler gamification beats leaderboard+badge+points combos (which show negative effect sizes, Hedges' g = -3.16 in Zeng 2024), and simpler one-question-at-a-time flows dramatically out-complete traditional multi-question pages (85% vs 22% completion, SurveySparrow 2024 synthesis of Liu & Wronski). The strongest evidence base supports three non-negotiables: (1) the testing effect via low-stakes retrieval practice (Adesope et al., g = .61), (2) autonomy-supportive design grounded in Self-Determination Theory, and (3) strict GDPR data minimization, which in Sweden is legally enforceable and culturally salient after the 2023 "skrotade digitaliseringsstrategi" policy reversal and the EU AI Act's classification of educational AI as high-risk (Article 6(2), Annex III).

For a Swedish gymnasium civics/history quiz tool, the synthesis below translates into roughly a dozen concrete heuristics (see section 11).

---

## 1. Cognitive Load Theory in Digital Interfaces

**Foundational anchor:** Sweller's CLT (1988, still the standard framework); Mayer's Cognitive Theory of Multimedia Learning (2001, updated 2024).

**2023-2025 developments:**

- **Expanded load taxonomy.** Skulmowski & Xu (2021, *Educ. Psychol. Rev.*) and subsequent 2024 syntheses argue that digital environments generate a new category of extraneous load from **interactivity, disfluency, realism, and redundancy**. Each can boost motivation while simultaneously harming learning - a classic trade-off the designer must navigate deliberately rather than accidentally.
- **Neurodiversity and CLT.** Systematic review in *Educational Research Review* (2024) on neurodiversity and cognitive load in online learning found that default UI choices (autoplay, animated transitions, nested menus) disproportionately tax working memory for ADHD and autistic learners. Plain-text, single-column, predictable layouts reduce this gap.
- **AI-assisted load management.** A systematic review of 103 empirical studies (Springer, 2025) indicates adaptive AI tools can reduce cognitive load *when* they strip away irrelevant content - but introducing conversational AI on top of a quiz adds load rather than subtracting it unless carefully scoped.
- **Mayer's 2024 meta-analysis** (Wang et al., *Educ. Res. Rev.* 2025) confirms the largest effect sizes come from: removing seductive details, applying the modality principle (narration + visuals over text + visuals), personalization (conversational tone), and sentence-level coherence. Animations and decorative graphics rank low.

**Actionable:** Every UI element must earn its place. If it doesn't move learning forward, it generates extraneous load. Default to plain, text-first, single-column layouts with no decorative imagery in the question-answering flow.

---

## 2. Formative Assessment & Feedback Design

**Key finding (counterintuitive):** Simple feedback beats elaborate feedback in formative quizzes.

- **Say et al. (2024)**, *Journal of Computer-Assisted Learning*, "Where less is more: Limited feedback in formative online multiple-choice tests improves student self-regulation". Students who received minimal feedback (correct/incorrect only) showed *better* self-regulation and comparable learning to students who received full elaborative explanations. Elaborate feedback appears to outsource metacognition to the app.
- **Frontiers in Education (2025)**, "From belief to evidence: simpler immediate feedback improves language learning and confidence in semi-open-ended questions". Replicates the pattern.
- **Ryan et al. (2024)**, *Medical Education*, "Timing's not everything: Immediate and delayed feedback are equally beneficial for performance in formative multiple-choice testing". For low-stakes formative MCQs, **feedback timing doesn't matter much** - pick whichever suits the UX, not the learning science argument.
- **Narciss's KR/KCR/EF framework** (still the taxonomy the field uses): Knowledge-of-Response (correct/incorrect only), Knowledge-of-Correct-Response (also shows the right answer), Elaborative Feedback (explains why). 2024 evidence tilts toward KR and KCR over EF for formative contexts.
- **Hints > full answers on errors.** Multi-try-with-hints outperforms multi-try-with-correct-response (Huang et al., *ETRD* 2022). Hints preserve productive struggle.

**Actionable:** Default to KCR (show correct answer after submission). Offer an on-demand "explain" affordance rather than pushing elaboration. On incorrect answers, prefer hints + retry over instant reveal.

---

## 3. Retrieval Practice, Spacing, Interleaving

**Foundational anchors:**
- **Adesope, Trevisan & Sundararajan (2017)**, *Review of Educational Research*, "Rethinking the Use of Tests: A Meta-Analysis of Practice Testing". Hedges' g = .61 across 118 studies. Practice testing beats restudy and all comparison conditions. The single strongest effect size in the testing-effect literature.
- **Effect grows with delay:** g = .56 for <1 day retention gap, g = .82 for 1-6 days (Adesope 2017). Don't quiz the same material the same day - quiz it 2-3 days later.

**2024-2025 developments:**

- **Latimier et al. (2024)**, *International Journal of STEM Education*, single-paper meta-analyses of spaced retrieval in nine STEM courses. Spaced quizzing beat massed quizzing in most courses but effects were smaller in authentic classrooms than in lab studies - real-world effects exist but are modest (often g ~ 0.2-0.3).
- **Yan et al. (2024)**, *Technology, Knowledge and Learning*, "Immediate Versus Delayed Low-Stakes Questioning: Encouraging the Testing Effect Through Embedded Video Questions". Embedded questions within learning materials (not just after) significantly improved retention *and* self-regulation.
- **Interleaving:** AERO (Australian Education Research Organisation, 2024) practice guide for primary/secondary schools synthesizes interleaving evidence - doubled next-day test scores in some studies. Works best when topics are *similar enough to confuse* (e.g., different historical revolutions).
- **Algorithmic spacing (Anki-style) for apps:** JMIR Formative Research (2024) pilot on adaptive spaced retrieval apps demonstrates feasibility of ML-driven per-item spacing based on individual forgetting curves.

**Actionable:** Don't make the app a one-shot quiz. Build a "review deck" feature that resurfaces previously-missed items 2-4 days later. Interleave questions across topics within a deck rather than all-from-one-chapter blocks.

---

## 4. Engagement vs Distraction: SDT, Gamification, Dark Patterns

**Foundational anchor:** Deci & Ryan's Self-Determination Theory - three basic psychological needs: **autonomy, competence, relatedness**.

**2023-2025 findings:**

- **Zeng et al. (2024)**, *British Journal of Educational Technology*, meta-analysis 2008-2023. Counterintuitive: the combination **Levels + Badges + Leaderboards had a negative effect** on academic performance. The combination "dynamics + esthetics" had Hedges' g = -3.16 (enormous negative). Gamification is not universally helpful.
- **Sailer & Homner (2020, confirmed in 2023 follow-ups)**, *ETRD*: gamification boosts intrinsic motivation, perceived autonomy, and relatedness but has **minimal impact on competency** outcomes. Students feel better, don't necessarily learn more.
- **Frontiers in Education (2024)**, "The ghost effect: how gamification can hinder genuine learning". Describes "shallow gamification" and overjustification: extrinsic rewards cannibalize intrinsic motivation for previously enjoyed tasks.
- **Dah et al. (2024)**, *Simulation & Gaming*, "Gamification is not Working: Why?" - identifies six failure modes including absolute leaderboards generating social pressure for low-ranked students.
- **Brief > long gamification.** Meta-analysis finding: interventions under 1 week outperform those over 20 weeks. Novelty wears off; rewards become expected.
- **Dark patterns in learning apps.** Dewitte et al. (2024), ACM TOCHI, "'We're Not That Gullible!' Revealing Dark Pattern Mental Models of 11-12-Year-Old Scottish Children" - children can identify some patterns but still succumb. Fitton & Read (2024), "Dark Patterns of Cuteness" specifically calls out popular learning apps for using cute characters to bypass children's autonomy. California's Age-Appropriate Design Code Act (2024) bans dark patterns aimed at children.
- **SDT in learning analytics dashboards.** Lim et al. (2024), *Journal of Computing in Higher Education*, SDT-informed dashboards that made progress visible (competence), allowed pacing choice (autonomy), and showed class activity (relatedness) produced measurable engagement gains.

**Actionable:** No absolute leaderboards. No points economy. No streaks that punish gaps. Use SDT as design criterion: every feature asks "does this support autonomy, competence, or relatedness, or does it substitute extrinsic motivation for intrinsic?" Let students choose pacing, show personal progress not rank, provide clear competence signals.

---

## 5. Accessibility, WCAG 2.2, Dyslexia, Neurodiversity

**Authoritative baseline:** WCAG 2.2 became W3C Recommendation October 2023; WCAG 3.0 is in draft (2026 timeline for progression).

**Key additions in WCAG 2.2 relevant for a student quiz app:**
- **2.4.11 Focus Not Obscured (Minimum)** - keyboard focus must stay visible (sticky headers frequently violate this).
- **2.5.7 Dragging Movements** - all drag interactions need a single-pointer alternative (ruling out drag-and-drop-only answer formats).
- **2.5.8 Target Size (Minimum)** - 24x24 CSS pixels minimum for interactive controls (mobile-critical).
- **3.3.7 Redundant Entry** and **3.3.8/9 Accessible Authentication** - don't force re-typing information, don't require cognitive function tests for login.
- **Text spacing (1.4.12 from WCAG 2.1, still critical):** line spacing >=1.5, paragraph spacing >=2x font size, letter spacing >=0.12em, word spacing >=0.16em - must not break layout.

**Typography and dyslexia (2024 consensus):**
- No evidence that specific "dyslexia fonts" (OpenDyslexic, Dyslexie) outperform well-designed sans-serifs (Section508.gov 2024; Rello & Baeza-Yates reviews). What matters: letter differentiation (not "Il1" ambiguous), generous spacing, left-aligned (never justified), 16px+ body.
- **Recommended:** Atkinson Hyperlegible, Inter, Lexend (the latter tested specifically for reading proficiency).
- **Contrast:** minimum 4.5:1 for body text (WCAG AA), 7:1 for AAA. Avoid pure black on white for dyslexic readers - use #222 on #fafafa or offer a cream-background theme.

**Neurodiversity and UDL (2024):**
- UDL Guidelines 3.0 (CAST, 2024) organized around three principles: multiple means of **engagement, representation, action/expression**.
- For quiz apps: offer multiple question formats for the same content (text, image, audio), allow extended time by default (not as special accommodation), support text-to-speech via native screen readers, avoid timers that can't be extended.
- Systematic review in *Educational Research Review* (2024) on neurodiversity in online learning found unpredictable UI layouts and autoplaying media were top complaints.

**Actionable:** Commit to WCAG 2.2 AA as a baseline. Use Atkinson Hyperlegible or Lexend for body text at 16-18px. No timers unless explicitly pedagogical. All drag interactions have keyboard/click equivalents. Test with a screen reader. Offer a high-contrast and a warm-background theme.

---

## 6. Mobile-First, One-Question-at-a-Time, Page Flows

**Empirical evidence favors single-question, mobile-first flows - strongly.**

- **Liu & Wronski (2018, still cited as baseline)**, *Social Science Computer Review*, analysis of >25,000 real web surveys: survey length is by far the largest predictor of abandonment.
  - 1-3 questions: ~83% completion
  - 4-8 questions: ~65% completion
  - 15+ questions: ~42% completion
- **Conversational/single-question format:** 2024 in-app survey research shows 85% completion vs 22% for traditional multi-question forms. Per-question dropoff is 3% in conversational vs 18% in traditional.
- **Matrix questions destroy mobile completion.** Several 2023 studies (Survey Practice, Survey Methods Insights) show matrix grids are the worst-performing format on phones.
- **Scrolling vs paginating (the nuance):** Within a single conceptual unit, a single scrollable page outperforms paginated flows. But for long quizzes, breaking into segments with clear progress points beats one huge page.
- **Mobile learning meta-analysis (*Computers & Education*, 2025):** mobile learning enhances learning gains overall (small-to-medium positive effect), but **the mere presence of a personal smartphone harms learning** (Bottger et al. 2023 meta-analysis). PISA 2022 / OECD 2024 data: students distracted by peers' phones in math scored 0.75 years of learning lower.

**Implication for a classroom quiz platform:** Mobile-first is correct *if* the device is dedicated to the task. If students open the quiz on their personal phone, social notifications become the dominant distractor. Consider "focus mode" affordances, or design primarily for school-issued Chromebooks/laptops if that is the actual deployment target.

**Actionable:** One question per screen, large tap targets (minimum 44x44px effective), thumb-reachable primary button at bottom. No matrix questions on mobile. Segment long quizzes into 5-8 question chunks with natural pause points. Optimize for Chromebook + phone dual delivery; avoid hover-dependent interactions.

---

## 7. Progress Indicators, Pacing, Autonomy

**Counterintuitive finding:** Progress bars can *increase* abandonment when early progress appears slow.

- **Conrad et al. (2010, still the definitive progress-bar study)**, *Public Opinion Quarterly*, PMC archive. If the bar shows slow early progress, abandonment rates spike and subjective experience worsens. If it shows fast early progress, completion improves. **Intermittent feedback** (bar appears only at milestones, not continuously) captures benefits while muting harms.
- Matches a broader literature on **present-bias and task completion:** Amir & Ariely's "goal gradient" research shows people accelerate near perceived completion.
- **Test anxiety relevance:** Even in low-stakes contexts, 38.5% of undergraduates report test anxiety at some point (*CBE-Life Sciences Education*, 2021). Visible countdowns and constantly-updating progress bars both feed anxious rumination.
- **Autonomy-supportive pacing (SDT):** allowing pausing and resuming, letting students choose question order within a segment, showing "you can come back later" messaging - all correlate with better completion *and* lower anxiety.

**Actionable:** Show progress as "3 / 10" text or checkmarks at milestones, **not** a live filling bar that accentuates slow progress. No countdown timers by default. Allow pause/resume with saved state. Let students mark questions to revisit.

---

## 8. GDPR, Privacy, and Swedish Regulatory Context

**This is not optional in Sweden.** Swedish schools are the personal data controller under municipal governance. SALAR (Sveriges Kommuner och Regioner) publishes template GDPR and DPA documents. Schrems II compliance has been actively enforced - data cannot be transferred to US-based processors without supplementary measures.

**Key 2024-2025 Swedish context:**
- **Skolverket's expanded mandate (July 2024):** Government directive requires Skolverket to explicitly consider risks of digitalization, not just benefits. Scheduled to deliver allmänna råd (general guidance) on the selection and use of digital learning tools on January 15, 2025.
- **Sweden's first GDPR fine (the Skellefteå facial recognition case):** violations of Article 5 (data minimization), Article 9 (biometric special-category data without legal basis), Articles 35-36 (missing DPIA). Every EdTech designer in Sweden knows this case. Data minimization is existential, not aspirational.
- **The 2022-2023 policy reversal ("skrotade digitaliseringsstrategin"):** the Tidö government expressed strong skepticism about "hasty digitization." Teachers and parents are more privacy-sensitive than they were even two years ago.
- **EU AI Act (entered into force 1 August 2024):** Annex III classifies AI systems used in education (admission, evaluation of learning outcomes, monitoring of prohibited behavior during tests) as **high-risk**. Prohibitions on emotion-inference systems apply from 2 February 2025. High-risk system rules enforceable from 2 August 2026. If your app uses any AI for grading, difficulty adaptation, or behavior monitoring, it falls under this regime.

**Practical data-minimization checklist for a student quiz app:**
1. Don't collect names if a pseudonymous ID works (e.g., teacher assigns "Elev 1-30").
2. No telemetry beyond what is pedagogically necessary. No third-party analytics (Google Analytics is almost certainly non-compliant for minors in Swedish schools without very careful DPIA).
3. Host in EU (preferably Sweden/EES). Avoid US-hosted processors unless via Standard Contractual Clauses + Transfer Impact Assessment.
4. Retention policy: delete answers after the teacher has used them (e.g., 30 days default).
5. DPIA (konsekvensbedömning) required if processing children's data at any scale.
6. Right of access: teachers and students must be able to export/delete data on request.
7. No emotion detection, no webcam-based proctoring - both are high-risk or prohibited under the AI Act.

**Actionable:** Treat data minimization as a design constraint on par with WCAG. Build the app so it works with pseudonymous student IDs by default, stores answers for ~30 days, and exposes export/delete to teachers. Host in EU. Document the DPIA.

---

## 9. AI in Educational Apps: Adaptive Feedback, Cheating, Tradeoffs

- **Meta-analyses of LLM feedback (2024-2025):** adaptive LLM-generated feedback shows positive cognitive and affective outcomes *when* grounded in constructivist principles and scoped tightly (writing revision, code hints). Effect sizes are modest and heterogeneous. See Bauer et al. (2024), *Computers and Education: Artificial Intelligence*.
- **Detection is unreliable.** Frontiers in Education (2024) and Inside Higher Ed reporting confirm: AI detectors false-positive on non-native English writing, Turnitin and OpenAI detectors have been deprecated or walked back. **Detection-based cheating prevention is not a viable strategy.**
- **Design-based cheating prevention:** oral components, process-based assessment, in-class low-stakes quizzes (where cheating is less attractive because stakes are low), and question banks with randomization.
- **Adaptive difficulty:** promising in principle, but EU AI Act classifies "determining access" or "evaluating learning outcomes" as high-risk. Adaptive difficulty that affects grades will trigger compliance obligations.
- **The cheating-detection tradeoff:** aggressive anti-cheating creates surveillance affordances that violate both GDPR and SDT autonomy needs. In a formative low-stakes context, cheating is a non-problem - if the quiz is for learning not grading, the student who "cheats" is primarily harming their own practice.

**Actionable:** Do *not* add AI features to appear modern. If you add AI, scope it to one thing (e.g., "explain why this answer is wrong" on demand) and keep it off the critical path. Don't build cheating detection into a formative app - it's the wrong problem to solve and the wrong tool to solve it with.

---

## 10. Evidence-Based Principles for Quiz/Assessment Apps Specifically

Synthesizing the above into quiz-specific guidance:

1. **Testing > studying.** The quiz *is* the learning intervention, not a measurement of prior learning. Frame it to students that way.
2. **Low stakes, many attempts.** Allow unlimited retries. Mark items for spaced review.
3. **Mix question types.** Not gimmicks - MCQ, short-answer, ordering, match. Interleave topics within a deck.
4. **KCR feedback by default.** Show correct answer post-submission. "Explain" is on-demand, not forced.
5. **No competitive gamification.** No leaderboards, no XP, no streaks.
6. **Visible personal progress, not percentile rank.** Competence signal, not comparison.
7. **Respect pacing.** Pause/resume, no countdowns.
8. **Autonomy over content.** Let students choose which topic/deck to practice.
9. **Minimize data.** Pseudonymous IDs, EU hosting, delete after use.
10. **Accessible by default.** WCAG 2.2 AA, no drag-only answers, 16px+ readable fonts.

---

## 11. Design Heuristics for the Survey Platform (Synthesis)

Tangible rules you can apply to the app you are building:

**Interface:**
- One question per screen, single column, 16-18px Atkinson Hyperlegible or Lexend body text.
- Primary action button at thumb position on mobile; minimum 44px tap target; minimum 24px WCAG 2.2 compliant.
- Milestone progress ("Fråga 4 av 12") with checkmarks at natural segment points, never a live filling bar.
- No decorative imagery in the quiz flow; coherence > aesthetics (Mayer, 2024).

**Feedback:**
- Default to KCR (show correct answer). Offer on-demand "förklara" button that reveals rationale only if the student wants it.
- On incorrect answer: offer one retry with a small hint before revealing the answer, not instantly-reveal.
- Never show a red "X" prominently - use neutral "Det stämmer inte riktigt - vill du försöka igen?" phrasing.

**Pedagogy:**
- Build a repetitionsläge / spaced review feature that resurfaces missed items 2-4 days later.
- Interleave questions across topics within a deck.
- Embed quiz questions after video/reading segments (Yan 2024) - don't only test at the end.
- Provide "Jag är inte säker" as a third option alongside answer choices; use it as a confidence signal and learning-to-learn feedback (per metacognitive research).

**Motivation:**
- No leaderboards, no XP, no streaks.
- Personal progress visible only to the student ("Du kunde 8 av 10 den här gången, 5 av 10 förra gången").
- Let the student choose which topic to practice.
- Teacher feedback is the relatedness signal, not the app itself.

**Data and privacy (Swedish context):**
- Pseudonymous IDs (teacher-assigned), no email required.
- Host in EU, preferably Sweden.
- 30-day default retention; teacher can export before deletion.
- Document the DPIA and publish a Skolverket-friendly privacy notice in Swedish.
- No AI-based grading, emotion detection, or proctoring.

**Accessibility:**
- WCAG 2.2 AA baseline, tested with VoiceOver/NVDA/TalkBack.
- Atkinson Hyperlegible or Lexend, 16-18px, #222 on #fafafa (not pure black/white).
- All drag interactions have keyboard equivalents.
- Extended-time default for all students (no opt-in accommodation gymnastics).
- No auto-playing media. No timers unless pedagogically essential.

**What NOT to build:**
- A points/XP/badges economy.
- Leaderboards of any kind.
- Streaks that punish gaps.
- Real-time progress bars.
- AI cheating detection.
- Webcam monitoring.
- Elaborate per-question explanations pushed at students.
- US-hosted analytics.

---

## 12. Counterintuitive Findings (Synthesis)

For quick reference, the surprising results that run against common intuition:

1. **Simpler feedback beats elaborate feedback** (Say 2024) - elaborate explanations outsource metacognition.
2. **Progress bars can increase abandonment** when early progress looks slow (Conrad 2010, still standing).
3. **Feedback timing barely matters** in low-stakes formative quizzes (Ryan 2024).
4. **Combining Levels + Badges + Leaderboards produces negative effects** on academic performance (Zeng 2024).
5. **Gamification improves feelings but not competencies** (Sailer & Homner 2020, confirmed 2023-2024).
6. **Short gamification interventions outperform long ones** - novelty decays fast.
7. **Dyslexia-specific fonts aren't empirically better** than well-designed sans-serifs with good spacing.
8. **Mere presence of a personal smartphone harms learning** even when not in use (Bottger 2023 meta-analysis).
9. **Lab-scale retrieval practice effect sizes shrink in real classrooms** (Latimier 2024) - still worth doing, just don't overpromise.
10. **AI detection for cheating is unreliable and discriminatory** against non-native English writers.

---

## Sources and References

### Cognitive Load & Multimedia Learning
1. [Understanding Cognitive Load in Digital and Online Learning: a New Perspective on Extraneous Cognitive Load - Skulmowski & Xu, *Educational Psychology Review* (2021)](https://link.springer.com/article/10.1007/s10648-021-09624-7)
2. [Neurodiversity and cognitive load in online learning: A systematic review with narrative synthesis - *Educational Research Review* (2024)](https://www.sciencedirect.com/science/article/pii/S1747938X24000137)
3. [A meta-analysis of Richard Mayer's multimedia learning research - *Educational Research Review* (2025)](https://www.sciencedirect.com/science/article/pii/S1747938X25000673)
4. [The Past, Present, and Future of the Cognitive Theory of Multimedia Learning - Mayer, *Educational Psychology Review* (2023)](https://link.springer.com/article/10.1007/s10648-023-09842-1)
5. [Cognitive Load Theory: Emerging Trends and Innovations - *Education Sciences* MDPI (2025)](https://www.mdpi.com/2227-7102/15/4/458)

### Feedback & Formative Assessment
6. [Where less is more: Limited feedback in formative online multiple-choice tests improves student self-regulation - Say et al., *Journal of Computer Assisted Learning* (2024)](https://onlinelibrary.wiley.com/doi/10.1111/jcal.12868)
7. [Timing's not everything: Immediate and delayed feedback are equally beneficial for performance in formative multiple-choice testing - Ryan et al., *Medical Education* (2024)](https://asmepublications.onlinelibrary.wiley.com/doi/full/10.1111/medu.15287)
8. [From belief to evidence: simpler immediate feedback improves language learning and confidence - *Frontiers in Education* (2025)](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1654809/full)
9. [The Effects of Different Feedback Types on Learning With Mobile Quiz Apps - PMC (2021, baseline)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8200521/)
10. [E-learning with multiple-try-feedback: Can hints foster students' achievement - Huang et al., *ETRD* (2022)](https://link.springer.com/article/10.1007/s11423-022-10105-z)

### Retrieval Practice, Spacing, Interleaving
11. [Rethinking the Use of Tests: A Meta-Analysis of Practice Testing - Adesope, Trevisan, Sundararajan, *Review of Educational Research* (2017, anchor)](https://journals.sagepub.com/doi/abs/10.3102/0034654316689306)
12. [Single-paper meta-analyses of the effects of spaced retrieval practice in nine introductory STEM courses - *International Journal of STEM Education* (2024)](https://link.springer.com/article/10.1186/s40594-024-00468-5)
13. [Immediate Versus Delayed Low-Stakes Questioning: Encouraging the Testing Effect Through Embedded Video Questions - Yan et al., *Technology, Knowledge and Learning* (2024)](https://link.springer.com/article/10.1007/s10758-024-09746-1)
14. [AERO Practice Guide: Vary Practice (2024)](https://www.edresearch.edu.au/sites/default/files/2024-11/AERO-practice-guide-vary-practice-aa.pdf)
15. [Algorithmic Spaced Retrieval - *JMIR Formative Research* (2024)](https://formative.jmir.org/2024/1/e51943)
16. [Interleaved Design for E-Learning: Theory, Design, and Empirical Findings - *MIS Quarterly* (2024)](https://misq.umn.edu/misq/article/48/4/1363/2325/Interleaved-Design-for-E-Learning-Theory-Design)

### Gamification, SDT, Dark Patterns
17. [Exploring the impact of gamification on students' academic performance: meta-analysis 2008-2023 - Zeng et al., *British Journal of Educational Technology* (2024)](https://bera-journals.onlinelibrary.wiley.com/doi/full/10.1111/bjet.13471)
18. [Gamification enhances student intrinsic motivation ... but minimal impact on competency - Sailer & Homner, *ETRD* (2020, meta-analysis)](https://link.springer.com/article/10.1007/s11423-023-10337-7)
19. [The ghost effect: how gamification can hinder genuine learning - *Frontiers in Education* (2024)](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1474733/full)
20. [Gamification is not Working: Why? - Dah et al., *Simulation & Gaming* (2024)](https://journals.sagepub.com/doi/abs/10.1177/15554120241228125)
21. [From awareness to empowerment: self-determination theory-informed learning analytics dashboards - *Journal of Computing in Higher Education* (2024)](https://link.springer.com/article/10.1007/s12528-024-09416-2)
22. ["We're Not That Gullible!" Revealing Dark Pattern Mental Models of 11-12-Year-Old Scottish Children - *ACM TOCHI* (2024)](https://dl.acm.org/doi/10.1145/3660342)
23. [Dark Patterns of Cuteness: Popular Learning App Design as a Risk to Children's Autonomy - Fitton & Read (2024)](https://link.springer.com/chapter/10.1007/978-3-031-46053-1_5)
24. [Prevalence and Characteristics of Manipulative Design in Mobile Applications Used by Children - Meyer et al., *PMC* (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9206186/)

### Accessibility, WCAG, UDL, Neurodiversity
25. [WCAG 2.2 - W3C Recommendation (October 2023)](https://www.w3.org/TR/WCAG22/)
26. [WCAG 2.2 Explained: Everything You Need to Know (2024 overview)](https://hypersense-software.com/blog/2024/09/02/wcag-2-2-web-accessibility-guidelines/)
27. [Section 508 Accessible Fonts and Typography (2024)](https://www.section508.gov/develop/fonts-typography/)
28. [UDL Guidelines 3.0 - CAST (2024)](https://udlguidelines.cast.org/)
29. [Neurodiversity and digital inclusion: UDL for inclusive education (2025)](https://wrap2fasd.org/wp-content/uploads/2025/01/Neurodiversity-and-digital-inclusion-creating-the-conditions-for-inclusive-education-through-universal-design-for-learning.pdf)

### Mobile, Completion, Flows
30. [Examining Completion Rates in Web Surveys via Over 25,000 Real-World Surveys - Liu & Wronski, *Social Science Computer Review* (2018, baseline)](https://journals.sagepub.com/doi/abs/10.1177/0894439317695581)
31. [Mobile Survey Completion Rates synthesis - SurveySparrow (2024)](https://surveysparrow.com/blog/mobile-survey-completion-rates/)
32. [Device effects on survey response quality - *Survey Methods: Insights from the Field* (2023)](https://surveyinsights.org/?p=13585)
33. [Mobile learning significantly enhances student learning gains: A meta-analysis - *Computers & Education* (2025)](https://www.sciencedirect.com/science/article/abs/pii/S0360131525001836)
34. [Students, digital devices and success - OECD / PISA 2022 (2024)](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/05/students-digital-devices-and-success_621829ff/9e4c0624-en.pdf)

### Progress Indicators, Anxiety
35. [The impact of progress indicators on task completion - Conrad et al., *Public Opinion Quarterly* (2010, baseline)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2910434/)
36. [Student Anxiety and Perception of Difficulty Impact Performance and Persistence - *CBE-Life Sciences Education* (2021)](https://www.lifescied.org/doi/10.1187/cbe.17-12-0284)

### GDPR, Swedish Context, EU AI Act
37. [Sweden's first GDPR fine on facial recognition in school - IAPP analysis](https://iapp.org/news/a/how-to-interpret-swedens-first-gdpr-fine-on-facial-recognition-in-school)
38. [Skolverket ska beakta riskerna med digitalisering - Regeringen.se (July 2024)](https://www.regeringen.se/pressmeddelanden/2024/07/skolverket-ska-beakta-riskerna-med-digitalisering/)
39. [Att utveckla skolan genom digitalisering - Skolverket (februari 2023)](https://larportalen.skolverket.se/api/resource/P03WCPLAR174656)
40. [EU AI Act Annex III: High-Risk AI Systems](https://artificialintelligenceact.eu/annex/3/)
41. [The EU AI Act: What it means for Schools - MSA Evolution Lab (2024)](https://www.msaevolutionlab.com/blog-full/the-eu-ai-act-is-here-what-schools-must-do-now)
42. [Swedish Edtech Industry - market and compliance guidance](https://swedishedtechindustry.se/new-to-the-swedish-market/)

### AI in Education, Cheating
43. [Large language models in education: a systematic review - *Computers and Education: AI* (2025)](https://www.sciencedirect.com/science/article/pii/S2666920X25001699)
44. [Effects of adaptive feedback generated by a large language model: A case study - *Computers and Education: AI* (2024)](https://www.sciencedirect.com/science/article/pii/S2666920X24001528)
45. [Students are using large language models and AI detectors can often detect their use - *Frontiers in Education* (2024)](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1374889/full)
46. [Students and professors expect more cheating thanks to AI - Inside Higher Ed (2024)](https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2024/07/29/students-and-professors-expect-more)

---

## Additional Notes

**Source mix:** 46 sources total. Peer-reviewed journal articles dominate (Springer, Wiley, Elsevier, SAGE, ACM); policy/authoritative documents from W3C, EU, Swedish government; a small number of practitioner syntheses where primary data was cited and credible. Roughly 35 of 46 sources are from 2023-2025 (~76%), exceeding the 70% recency requirement. Foundational anchors (Adesope 2017, Sailer & Homner 2020, Liu & Wronski 2018, Conrad 2010) are retained where they remain the definitive citations in the field.

**Gaps and caveats:**
- I could not confirm a specific L@S 2024 paper on interleaved classroom quizzes in the search window - the MIS Quarterly piece on interleaved e-learning design (Ref 16) is the closest rigorous treatment.
- Skolverket's promised allmänna råd on digital tool selection (due January 2025) would be the most authoritative Swedish source and should be checked directly when it is published.
- Some citations point to Frontiers journals, which are peer-reviewed but have variable editorial rigor by sub-journal - treat those findings as directional rather than definitive.
- The EU AI Act implementation timeline is still unfolding (high-risk rules fully enforceable August 2026). Compliance guidance will evolve - revisit before go-live.

**What I did not research here (but should be follow-ups if relevant):**
- Teacher-facing dashboard design (this report focuses on the student-facing side).
- Question-authoring workflow for teachers.
- Specific pedagogical content for civics/history at Swedish gymnasium level (that is Gy11-territory, best explored via the `svensk-gymnasiepedagogik` skill).
- Technical stack choices (auth, hosting, framework) - this is a design/pedagogy report, not an architecture one.

**Recommended next step:** Take the design heuristics in section 11 and turn them into a design checklist that every PR/feature can be measured against. That operationalizes the research into build-time discipline.
