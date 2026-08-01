# AI-Powered Formative Assessment and Automated Feedback in Education

## Research Report - Recent Evidence (2024-2025)

**Date:** 2026-04-12
**Purpose:** Inform design of a quiz/survey platform with AI feedback for free-text answers
**Context:** Swedish upper secondary education (gymnasiet)

---

## Executive Summary

The evidence base on AI-powered formative feedback in education has grown rapidly since 2024, with multiple meta-analyses and large-scale RCTs now available. The overall picture is cautiously optimistic: AI feedback produces small-to-moderate positive effects on learning outcomes (g = 0.19-0.87 depending on measure and context), is roughly comparable to human feedback on performance metrics, but is perceived as less trustworthy by students. The most critical finding for platform design is that **how students use AI feedback matters more than whether they receive it** - structured engagement, teacher scaffolding, and feedback literacy are essential moderators. AI feedback works best for lower-performing students with structured guidance, for surface-level writing improvements, and when combined with human feedback in hybrid models. It risks undermining self-regulation in high-achievers when mandatory, and can promote cognitive offloading when poorly designed.

---

## 1. Effect Sizes: AI Feedback and Learning Outcomes

### 1.1 Meta-Analyses of Generative AI on Learning

| Study | N (studies) | Outcome | Effect Size (g) | Notes |
|-------|-------------|---------|-----------------|-------|
| Wang & Fan (2025) | 51 | Learning performance | 0.867 | ChatGPT specifically; large effect |
| Wang & Fan (2025) | 51 | Learning perception | 0.456 | Moderate effect |
| Wang & Fan (2025) | 51 | Higher-order thinking | 0.457 | Moderate effect |
| Liu (2025) | N/A | Academic achievement | 0.577 | ChatGPT meta-analysis |
| Ma (2025) | N/A | Learning outcomes (GenAI broadly) | 1.02 | Chatbots/GenAI highest effect |
| Wang, W. et al. (2026) | N/A | Learning outcomes (AI personalized feedback) | Positive (specific g pending) | AI-supported personalized feedback |

**Key caveat:** The Wang & Fan (2025) meta-analysis has been criticized for methodological issues (see WinsSolutions, 2025). Effect sizes of g > 0.8 should be interpreted with caution given heterogeneity across studies, publication bias, and varying control conditions.

**Source:** [Wang & Fan, 2025 - Nature HSS Communications](https://www.nature.com/articles/s41599-025-04787-y)

### 1.2 AI Feedback vs. Human Feedback

A meta-analysis of **41 studies (N = 4,813)** found **no statistically significant difference** in learning performance between AI and human feedback conditions, with the pooled effect size being small and statistically insignificant.

However, teacher feedback produced **stronger improvements in scientific argumentation and formal quality** in a randomized field experiment (N = 90), while LLM feedback yielded the smallest improvement among teacher, peer, and LLM conditions.

**Sources:**
- [Meta-analysis: AI vs. Human Feedback - Educational Psychology](https://www.tandfonline.com/doi/full/10.1080/01443410.2025.2553639)
- [Teacher, Peer, or AI - Computers & Education: AI](https://www.sciencedirect.com/science/article/pii/S266655732500059X)

### 1.3 LLM Feedback in Secondary Education (Key Study for Platform Design)

**Meyer et al. (2024)** conducted a landmark RCT with **459 upper secondary students** (Grade 10, English as a foreign language) comparing LLM-generated feedback (GPT-3.5-turbo) vs. no feedback on argumentative essay revision:

| Outcome | Effect Size (d) |
|---------|-----------------|
| Text revision quality | 0.19 (small) |
| Task motivation | 0.36 (moderate) |
| Positive emotions | 0.34 (moderate) |

This is the most directly relevant study for quiz platform design in secondary education - it demonstrates that even relatively simple LLM feedback produces meaningful gains in motivation and affect, with modest learning gains.

**Source:** [Meyer et al., 2024 - Computers & Education: AI](https://www.sciencedirect.com/science/article/pii/S2666920X23000784)

### 1.4 AI Tutoring RCTs

**Kestin et al. (2025, Harvard):** RCT in physics found AI tutoring produced **2x the learning gains** compared to in-class active learning, while spending 20% less time. The AI tutor used GPT-4 and was designed following evidence-based pedagogical principles. However, the sample was Harvard undergraduates, raising generalizability concerns.

**LearnLM Study (UK secondary, 2025):** RCT with **165 students aged 13-15** found students using supervised AI tutors solved novel problems successfully **66.2% of the time vs. 60.7% with human tutors**.

**Tutor CoPilot (2024):** First RCT of human-AI tutoring system showed students were **4 percentage points more likely to progress** through math assessments, with lower-rated tutors' students improving **up to 9 percentage points**.

**Sources:**
- [Kestin et al., 2025 - Scientific Reports](https://www.nature.com/articles/s41598-025-97652-6)
- [Google LearnLM Study, 2025](https://storage.googleapis.com/deepmind-media/LearnLM/learnLM_nov25.pdf)
- [Tutor CoPilot, 2024 - EdWorkingPapers](https://edworkingpapers.com/sites/default/files/ai24_1054_v2.pdf)

---

## 2. Moderating Variables: When AI Feedback Works (and When It Doesn't)

### 2.1 Student Achievement Level (Critical Finding)

**Xie et al. (2025)** conducted two RCTs (N = 387 high school students, 5-week intervention) and found a striking interaction:

| Student Level | Condition | Achievement Effect | Autonomy Effect |
|---------------|-----------|-------------------|-----------------|
| Low-achieving | Compulsory AI recommendations + hints | +0.673 SD | Maintained |
| High-achieving | Compulsory AI recommendations | No gain | -0.477 SD (autonomy loss) |
| High-achieving | Autonomous on-demand help | +0.378 SD | Maintained |
| Low-achieving | Autonomous on-demand help | No gain | -0.383 SD |

**Design implication:** Low achievers need structured, guided AI feedback. High achievers need autonomy and on-demand access. **Forcing either pattern on the wrong group undermines self-regulation.**

**Source:** [Xie et al., 2025 - arXiv](https://arxiv.org/html/2505.08672v2)

### 2.2 Task Type

- AI feedback is **more effective for surface-level writing** improvements (vocabulary, grammar, spelling, organization) than for higher-order skills (argumentation structure, textual coherence).
- ChatGPT performs well providing feedback on **lower-quality writing** but its accuracy diminishes with higher-quality texts.
- AI feedback is more effective for **declarative knowledge** than **procedural knowledge**.
- AWE (Automated Writing Evaluation) is more effective for **post-secondary than secondary** students, and for **EFL/ESL learners** than native speakers.

### 2.3 Intervention Duration

- Wang & Fan (2025): Duration **significantly moderates** ChatGPT's effect on learning performance (QB = 55.998, P < 0.001).
- **5-10 weeks** has a larger impact on academic achievement compared to other durations.
- Longer interventions may suffer from **implementation fidelity** problems and novelty effects wearing off.

### 2.4 Feedback Design (Adaptive vs. Static)

- Adaptive (personalized) AI feedback outperforms static expert feedback on **writing justification quality** and perceived usefulness (Bauer et al., 2025).
- Students spend more time processing adaptive feedback and produce longer responses.
- Task complexity moderates: adaptive feedback shows larger advantages for **complex, ambiguous reasoning tasks**.

**Source:** [Bauer et al., 2025 - BJET](https://bera-journals.onlinelibrary.wiley.com/doi/full/10.1111/bjet.13609)

### 2.5 Feedback Literacy and Intrinsic Motivation

Students with **higher feedback literacy** and intrinsic motivation benefit significantly more from feedback across all sources. Specifically, students with "more productive attitudes toward feedback achieved higher argumentation quality after receiving teacher feedback."

**Design implication:** Platform should include explicit support for developing feedback literacy - helping students understand how to interpret and act on feedback.

---

## 3. Design Principles for Effective AI Feedback

### 3.1 Evidence-Based Framework (from systematic review of 129 studies)

The systematic review by Deeva et al. (2025) of 129 peer-reviewed articles (2014-2023) identified effective AI feedback operates across multiple dimensions:

1. **Task-level feedback:** Specific corrections and guidance on the immediate task
2. **Process-level feedback:** Guidance on strategies and approaches
3. **Self-regulation feedback:** Metacognitive prompts (planning, monitoring, evaluation)
4. **Self-level feedback:** Identity and motivation support

**Source:** [Deeva et al., 2025 - Education and Information Technologies](https://www.sciencedirect.com/science/article/pii/S2666557325000436)

### 3.2 Prompt Engineering for Educational Feedback

Research identifies key strategies for generating effective AI feedback:

**Rubric-Based Prompting:**
- Providing the LLM with explicit rubrics, assignment instructions, and grading criteria significantly improves scoring accuracy and feedback quality.
- **GPT-4 with rubric-based prompts** achieved 112-114% improvement over GPT-3.5 in scoring accuracy.
- Question-specific rubrics outperform generic prompts for code evaluation.

**Prompt Composition vs. Decomposition:**
- Research investigates whether generating scoring and feedback together (composition) or separately (decomposition) affects performance.
- **Reflective Prompt Engineering (RPE)** - iterative human-AI collaboration through discussion and reflection - enhances scoring performance.

**Chain-of-Thought Prompting:**
- CoTAL (Chain-of-Thought + Active Learning) leverages Evidence-Centered Design for curriculum-aligned formative assessments.
- Structured prompting strategies significantly reduce hallucinations.

**Practical Template for Quiz Platform:**
```
1. Provide: Assignment question + rubric criteria + student level expectations
2. Include: 2-3 exemplar responses at different quality levels with model feedback
3. Specify: Feedback should address what was done well, what needs improvement, 
   and suggest next steps
4. Constrain: "Do not provide the answer directly. Guide the student toward 
   understanding through questions and hints."
5. Language: Match feedback language to student's proficiency level
```

**Sources:**
- [Rubric-Based LLM Evaluation - ACM ICER 2025](https://dl.acm.org/doi/10.1145/3702652.3744220)
- [Prompt-Based LLMs for Scoring & Feedback - Computers & Education](https://www.sciencedirect.com/science/article/pii/S0360131525002799)
- [Reflective Prompt Engineering - Int. J. Science Education](https://www.tandfonline.com/doi/full/10.1080/09500693.2025.2523571)

### 3.3 The "Cognitive Mirror" Design Paradigm

Kasneci et al. (2025) propose the **Cognitive Mirror Framework** - a paradigm shift where AI acts as a "teachable novice" rather than an omniscient expert:

- **M0:** Mirrors confusion back to surface ambiguity
- **M1:** Poses clarifying questions
- **M2:** Identifies logical gaps Socratically
- **M3:** Provides accurate reformulation once understanding is demonstrated

This design deliberately constrains AI's knowledge to create "pedagogically useful deficit" - preventing the AI from simply providing answers. It integrates the Protege Effect (learning by teaching), Schon's Reflective Practice, and metacognitive monitoring.

**Design implication:** Consider implementing response modes that scaffold rather than answer - especially for higher-order questions in social studies.

**Source:** [Kasneci et al., 2025 - Frontiers in Education](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1697554/full)

### 3.4 Hybrid Feedback Models

Multiple studies converge on the recommendation that **hybrid feedback (AI + human) outperforms either alone:**

- Integrating ChatGPT with teacher feedback significantly improved EFL argumentative writing over ChatGPT feedback alone.
- In Hong Kong, hybrid feedback showed stronger effects on motivation, quality, and performance than AI-only or human-only conditions.
- The recommended model: AI provides immediate, scalable first-pass feedback; teachers provide deeper, contextualized follow-up.

**Source:** [Lo, Chan & Wong, 2025 - SAGE Open](https://journals.sagepub.com/doi/10.1177/21582440251352907)

---

## 4. AI vs. Human vs. Peer Feedback Comparisons

### 4.1 Summary of Comparative Evidence

| Dimension | AI Feedback | Teacher Feedback | Peer Feedback |
|-----------|-------------|------------------|---------------|
| **Learning gains** | Small-moderate (d = 0.19-0.36) | Moderate-large (strongest for argumentation) | Variable |
| **Speed** | Immediate | Days-weeks delay | Variable |
| **Scalability** | Unlimited | Limited by workload | Moderate |
| **Specificity** | Broad, descriptive | Targeted, nuanced | Variable quality |
| **Trust** | ~60% trust rate | >90% trust rate | Moderate |
| **Perceived fairness** | Rated as fair | Rated as less fair (paradoxically) | Rated as fair |
| **Willingness to revise** | Higher | Lower (despite better outcomes) | Higher |
| **Best for** | Surface-level corrections, vocabulary, grammar | Higher-order skills, argumentation | Collaborative learning, perspective-taking |

### 4.2 The Trust Paradox

Students trust AI feedback less than teacher feedback (60% vs. >90%) but rate it as fairer and are more willing to revise based on it. Teacher feedback produces better learning outcomes but students resist it more. This creates a design opportunity: **AI feedback may lower affective barriers to revision.**

### 4.3 Source Bias Effects

**Nazaretsky et al. (2026)** (N = 472) found that when students don't know who provided feedback, they rate AI feedback higher. But when told it's from AI, ratings drop - demonstrating **algorithm aversion**. Despite this, the authors argue teachers should be transparent about AI use.

**Source:** [Nazaretsky et al., 2026 - JCAL](https://onlinelibrary.wiley.com/doi/10.1111/jcal.70153)

---

## 5. Risks and Failure Modes

### 5.1 Risk Taxonomy

| Risk Category | Severity | Evidence Base | Mitigation |
|---------------|----------|---------------|------------|
| **Cognitive offloading** | High | Multiple studies show 17% lower conceptual understanding with over-reliance | Require student reflection before revealing feedback; use scaffolded hints |
| **Self-regulation erosion** | High | 0.477 SD autonomy loss in high-achievers with mandatory AI (Xie 2025) | Provide on-demand rather than mandatory feedback for advanced students |
| **Hallucination/inaccuracy** | Medium-High | LLMs produce convincing but factually incorrect feedback | Use RAG, rubric grounding, teacher review of flagged responses |
| **Surface learning bias** | Medium | AI better at surface corrections than deep argumentation feedback | Combine with teacher feedback for higher-order skills |
| **Feedback dependency** | Medium | Students may stop developing independent revision skills | Include self-assessment before AI feedback; fade feedback over time |
| **Equity/bias** | Medium | AAVE and non-standard language penalized; access divide | Audit feedback for bias; ensure accessibility; test across demographics |
| **Privacy/data leakage** | Medium | Student data may be used to train models | Use local/EU-hosted models; DPIA required; minimize data collection |
| **Academic integrity erosion** | Medium | Skolverket notes increased need for controlled assessment | Use AI for formative only; summative requires controlled conditions |
| **Motivation decline** | Low-Medium | Some evidence of reduced intrinsic motivation with prolonged use | Vary feedback sources; maintain teacher presence |

### 5.2 The Cognitive Paradox (Key Concern)

Research documents a fundamental paradox: AI can simultaneously improve immediate performance while undermining long-term cognitive development:

- Students using ChatGPT for exam practice scored **17% lower on conceptual understanding** despite procedural success.
- "Cognitive inertia" - repeated outsourcing of thinking leads to diminished intellectual effort.
- Ages 17-25 are **particularly susceptible** to cognitive outsourcing effects.
- Prolonged AI exposure is associated with **memory decline**.

**Design implication:** The quiz platform should be designed to promote thinking, not replace it. AI feedback should prompt reflection, not provide answers.

**Sources:**
- [Cognitive Paradox of AI in Education - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12036037/)
- [Over-reliance on AI - Cogent Education](https://www.tandfonline.com/doi/full/10.1080/2331186X.2025.2591503)

### 5.3 Hallucination Risks in Educational Feedback

LLM hallucinations in educational contexts can:
- Reinforce misconceptions with confident-sounding but incorrect feedback
- Provide inconsistent feedback across similar responses
- Generate factually inaccurate claims (especially in humanities/social science)

**Mitigation strategies:**
1. **Retrieval-Augmented Generation (RAG):** Ground LLM responses in verified course materials
2. **Rubric anchoring:** Constrain feedback to predefined rubric criteria
3. **Temperature control:** Lower temperature settings reduce creative but inaccurate outputs
4. **Teacher review layer:** Flag low-confidence responses for human review
5. **Student source criticism:** Teach students to evaluate AI feedback critically

---

## 6. Student Perceptions and Feedback Literacy

### 6.1 Perception Patterns

- **6,960 respondents** in a large-scale study: half sought feedback from AI, but rated teacher feedback as more helpful and trustworthy.
- Students perceive AI feedback as **more specific but less motivating** than instructor comments.
- AI feedback was perceived as **fairer and more acceptable** than teacher feedback (paradoxically), with students more willing to revise based on it.
- When feedback source is **blinded**, students rate AI feedback higher than when they know it's from AI.

### 6.2 Feedback Literacy Gap

A critical finding is that students often lack the skills to productively engage with AI feedback:

- Some students do not use comparison strategies when engaging with ChatGPT feedback, engaging **superficially**.
- Students are **less critical when evaluating AI-generated feedback** than human feedback, relying on source perceptions rather than content analysis.
- Students lack necessary content knowledge to **accurately assess feedback correctness**, leading to inaccurate evaluations.

**Design implication:** The platform needs explicit feedback literacy scaffolding:
1. Prompt students to evaluate feedback before acting on it
2. Teach comparison between AI feedback and rubric criteria
3. Include metacognitive prompts ("What did you learn from this feedback?")

**Sources:**
- [Student engagement with ChatGPT feedback - Assessment & Evaluation in HE](https://www.tandfonline.com/doi/full/10.1080/02602938.2025.2471821)
- [Can students judge like experts? - Computers & Education: AI](https://www.sciencedirect.com/science/article/pii/S2666920X25001730)
- [AI feedback literacy in HE - Assessment & Evaluation in HE](https://www.tandfonline.com/doi/full/10.1080/02602938.2025.2587924)

---

## 7. Equity and Bias in AI Feedback

### 7.1 Language Bias

- Students using **African American Vernacular English (AAVE)** receive less favorable AI recommendations and grades.
- AI tools may show bias **preferring phrasing and cultural perspectives used in dominant-culture essays**.
- For Swedish context: unclear how well LLMs handle Swedish dialects, immigrant Swedish, or code-switching - this is an under-researched area.

### 7.2 Access and Digital Divide

- Students from **lower-income backgrounds** and rural areas face technology access barriers.
- The **OECD (2024)** report on AI and equity highlights that AI's dependence on training data reflecting historical inequalities can perpetuate discrimination.
- **Bias feedback loops** can reduce challenge for certain demographics, perpetuating cycles of reduced opportunity.

### 7.3 Adaptive Learning as Equity Tool

On the positive side, AI-based adaptive programs can create **more inclusive learning environments** for disadvantaged students where mainstream models fall short:
- Immediate, tailored feedback partially compensates for lack of individualized teacher attention in large classes.
- Can provide additional support outside school hours.
- Can be particularly beneficial for students who struggle to ask for help in class.

**Design implication for Swedish context:**
- Test feedback quality across student demographics
- Ensure the platform works well for students with varying Swedish proficiency
- Monitor for systematic bias in feedback quality
- Consider offline/low-bandwidth accessibility

**Sources:**
- [OECD 2024 - AI, Equity, and Inclusion](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/08/the-potential-impact-of-artificial-intelligence-on-equity-and-inclusion-in-education_0d7e9e00/15df715b-en.pdf)
- [FairAIED: Navigating Fairness and Bias - arXiv](https://arxiv.org/html/2407.18745v1)

---

## 8. EU AI Act and Swedish Regulatory Context

### 8.1 EU AI Act Classification

**Educational AI systems are classified as "high-risk"** under the EU AI Act (Annex III). This applies to:

1. AI systems used to **evaluate learning outcomes** (including automated grading)
2. Systems to **determine access or admission** to education
3. AI for **assessment of educational levels**
4. Systems for **detecting prohibited student behavior**

**Prohibited outright:**
- Emotion inference from biometric data in educational settings
- Social scoring systems
- Real-time biometric surveillance

### 8.2 Timeline for Compliance

| Date | Obligation |
|------|-----------|
| August 1, 2024 | Regulation enters into force |
| February 2, 2025 | Prohibitions and AI literacy obligations take effect |
| August 2, 2025 | Governance rules and GPAI model obligations |
| August 2, 2026 | Full application of AI-forordningen in Sweden |
| August 2, 2027 | Extended transition for high-risk AI systems |

### 8.3 Obligations for Schools (as "Deployers")

Under Article 29, schools must:
1. **Maintain human oversight** of AI systems (Article 14)
2. Ensure **transparency** in AI use
3. Conduct **risk assessments** for high-risk systems
4. Implement **quality management systems**
5. Ensure **AI literacy** training for staff (Article 4) - effective from February 2025
6. Use **representative datasets** and prohibit discrimination by race, gender, or socioeconomic status

### 8.4 Swedish Context (Skolverket + IMY)

**Skolverket recommendations:**
- Schools should establish **clear guidelines for AI usage**
- AI-generated text should **not be used as grading basis** without oversight
- AI tools carry risks of **factual errors, bias, and data security** issues
- AI best used for **exploratory classroom activities** with shared discussion
- Schools should designate **AI-responsible staff** to monitor developments

**IMY (Integritetsskyddsmyndigheten) guidance:**
- **DPIA (Data Protection Impact Assessment)** required for AI projects processing student data
- Children's personal data receives **enhanced protection** under GDPR
- Valid legal basis required - typically **"public task"** for core educational activities
- Monitor for **bias and discriminatory outcomes**
- Document all processing activities

**Key implication for platform design:**
- A quiz platform with AI feedback likely qualifies as **high-risk** under the EU AI Act if it evaluates learning outcomes
- Must implement human oversight, transparency, and bias monitoring
- Student data cannot be sent to US-based LLM providers without adequate safeguards
- Consider EU-hosted or local LLM deployment
- Parental consent may be needed for under-16 students (Sweden follows GDPR age 16 for digital consent, though "public task" basis may apply)

**Sources:**
- [EU AI Act: What Schools Must Do - MSA EvolutionLab](https://www.msaevolutionlab.com/blog-full/the-eu-ai-act-is-here-what-schools-must-do-now)
- [EU AI Act and Education - Swiss Cyber Institute](https://swisscyberinstitute.com/blog/eu-ai-act-implications-ethical-ai-education/)
- [Skolverket AI-rad](https://www.skolverket.se/kompetensutveckling/stod-i-arbetet/rad-om-ai-chattbottar-och-liknande-verktyg)
- [IMY GDPR och AI](https://www.imy.se/verksamhet/dataskydd/innovationsportalen/vagledning-om-gdpr-och-ai/gdpr-och-ai/)
- [Skolledaren - AI-forordning och skolledare](https://www.skolledaren.se/aktuellt/nyheter/2025/3/ai-forordning-staller-krav-pa-skolledare--sa-hanterar-du-tekniken/)

---

## 9. Metacognitive Effects: Self-Regulation and AI Feedback

### 9.1 Can AI Support Metacognition?

**Yes, with intentional design:**
- AI can improve **metacognitive monitoring accuracy** by providing objective external data that calibrates self-assessment bias.
- Metacognitive support has **significant advantages in enhancing self-regulated learning** in generative AI environments (Xu, 2025).
- AI feedback with **quantitative evaluation** serves as critical external data for metacognitive accuracy.

### 9.2 Can AI Undermine Metacognition?

**Yes, without safeguards:**
- Students demonstrated **relatively low self-monitoring** in AI-assisted learning environments.
- Conventional "AI as Oracle" designs foster **cognitive offloading** - learners redirect effort away from internal problem-solving toward tool dependence.
- This suppresses **retrieval practice, knowledge reconstruction, and error analysis**.

### 9.3 Design Principles for Metacognitive Support

Based on the Cognitive Mirror Framework and related research:

1. **Require self-assessment before AI feedback:** Students predict their own performance/quality before seeing feedback
2. **Scaffolded disclosure:** Start with hints, progress to specific feedback only if needed
3. **Reflection prompts:** "What did you learn?" "What would you do differently?"
4. **Comparison tasks:** Ask students to compare their self-assessment with AI feedback
5. **Fade support:** Gradually reduce AI scaffolding as students develop self-regulation
6. **Teaching Quality Index:** Provide quantitative metacognitive feedback on explanation quality

**Sources:**
- [Xu, 2025 - BJET Metacognitive Support in GenAI](https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.13599)
- [Cognitive Mirror Framework - Frontiers](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1697554/full)
- [AI-powered Metacognitive Calibration - CHI 2025](https://dl.acm.org/doi/10.1145/3706598.3713960)

---

## 10. Discipline-Specific: AI Feedback in Humanities and Social Studies

### 10.1 Current Evidence

The evidence base for AI feedback in humanities and social studies is **thinner than for STEM and language learning**. Most studies focus on writing quality in EFL contexts. Key findings:

- AI feedback improves **surface-level writing** (vocabulary, grammar, organization) but is weaker on **argumentation structure and textual coherence** - precisely the skills most valued in social studies.
- **Hybrid feedback** (AI + teacher) significantly outperforms AI-alone for argumentative writing.
- Teachers in humanities identified both opportunities ("dual exploration" between AI and disciplinary learning) and limitations (AI potentially distracting from deep engagement).

### 10.2 Implications for Social Studies/Samhallskunskap

For a quiz platform focused on social studies and history:

1. **AI feedback is most useful for:**
   - Checking factual accuracy in free-text answers
   - Identifying whether key concepts/terms are addressed
   - Providing structured feedback on essay organization
   - Giving immediate feedback on lower-complexity questions

2. **AI feedback is less reliable for:**
   - Evaluating nuanced argumentation quality
   - Assessing multiperspectivity (ability to see different viewpoints)
   - Judging the quality of source criticism/analysis
   - Evaluating original thinking vs. surface-level reproduction

3. **Recommended approach:**
   - Use rubric-grounded AI feedback for structured questions with clear criteria
   - For complex analytical questions, use AI to flag responses for teacher review
   - Implement the "Cognitive Mirror" approach for discussion-type questions
   - Combine AI feedback with peer feedback for argumentation tasks

---

## 11. Practical Implications for Quiz Platform Design

### 11.1 Core Design Recommendations

Based on the synthesized evidence:

1. **Differentiate by question type:**
   - **Factual recall questions:** AI can provide reliable, immediate feedback
   - **Conceptual understanding questions:** AI can provide scaffolded hints, but flag for teacher review if confidence is low
   - **Analytical/argumentative questions:** Use AI for structural feedback + rubric checklist, but combine with teacher/peer feedback for quality assessment

2. **Differentiate by student level:**
   - **Struggling students:** Structured, guided feedback with specific suggestions
   - **Advanced students:** On-demand feedback, Socratic questioning, autonomy-preserving design

3. **Build in metacognitive scaffolding:**
   - Self-assessment before AI feedback
   - Reflection prompts after AI feedback
   - Comparison tasks (self vs. AI assessment)

4. **Implement hybrid feedback workflow:**
   - AI provides immediate first-pass feedback (scalability)
   - Teacher reviews AI feedback for accuracy and adds depth (quality)
   - Students can request peer feedback for argumentation tasks (perspective)

5. **Transparency and trust:**
   - Be explicit that feedback is AI-generated
   - Explain the rubric/criteria the AI uses
   - Provide confidence indicators
   - Allow students to flag inaccurate feedback

### 11.2 Technical Design Considerations

1. **Prompt engineering:**
   - Always include rubric criteria in the prompt
   - Use few-shot examples with model feedback
   - Constrain to avoid giving direct answers
   - Use structured output (JSON) for consistent feedback format

2. **Hallucination mitigation:**
   - Implement RAG with course materials
   - Lower temperature for factual feedback
   - Teacher pre-approves "model answers" for common question types
   - Confidence scoring with human review threshold

3. **Data and privacy:**
   - Consider EU-hosted LLM providers (e.g., Mistral, local deployment)
   - Minimize personal data in prompts (anonymize where possible)
   - Conduct DPIA before deployment
   - Don't use student data for model training
   - Implement data retention policies

4. **Bias monitoring:**
   - Regular audits of feedback quality across student demographics
   - Test with varying Swedish proficiency levels
   - Monitor for systematic patterns in feedback scores

### 11.3 What to Avoid

1. **Don't replace teacher feedback entirely** - hybrid models consistently outperform AI-alone
2. **Don't make AI feedback mandatory for advanced students** - provide it on-demand
3. **Don't use AI for high-stakes summative assessment** - Skolverket explicitly warns against this
4. **Don't assume AI handles argumentation well** - it's weakest in the areas most valued in social studies
5. **Don't ignore feedback literacy** - students need training to use AI feedback productively
6. **Don't send identifiable student data to US-based APIs** without GDPR-compliant safeguards

---

## 12. Summary of Key Papers and Sources

### Meta-Analyses and Systematic Reviews

1. **Wang, J. & Fan, W. (2025).** The effect of ChatGPT on students' learning performance, learning perception, and higher-order thinking: insights from a meta-analysis. *Humanities and Social Sciences Communications*, 12, 621. [Link](https://www.nature.com/articles/s41599-025-04787-y) - 51 studies, g = 0.867 for learning performance

2. **AI vs. Human Feedback Meta-Analysis (2025).** How does artificial intelligence compare to human feedback? *Educational Psychology*. [Link](https://www.tandfonline.com/doi/full/10.1080/01443410.2025.2553639) - 41 studies, N = 4,813, no significant difference in performance

3. **Deeva et al. (2025).** Unraveling the mechanisms and effectiveness of AI-assisted feedback in education: A systematic literature review. *Education and Information Technologies*. [Link](https://www.sciencedirect.com/science/article/pii/S2666557325000436) - 129 articles, conceptual framework for AIFB

4. **Wang, W. et al. (2026).** The Effectiveness of AI-Supported Personalized Feedback on Students' Learning Outcomes and Motivation: A Meta-Analysis. *Journal of Educational Computing Research*. [Link](https://journals.sagepub.com/doi/10.1177/07356331251410020)

5. **Ma (2025).** A Meta-Analysis of the Impact of Generative AI on Learning Outcomes. *JCAL*. [Link](https://onlinelibrary.wiley.com/doi/10.1111/jcal.70117) - GenAI chatbots highest effect size (1.02)

6. **Liu (2025).** The Impact of ChatGPT on Students' Academic Achievement: A Meta-Analysis. *JCAL*. [Link](https://onlinelibrary.wiley.com/doi/10.1111/jcal.70096) - g = 0.577

7. **GenAI Motivation & Engagement Meta-Analysis (2025).** *Computers & Education: AI*. [Link](https://www.sciencedirect.com/science/article/pii/S2666920X25000955)

8. **Educators' Reflections on AI Feedback (2025).** Structured integrative review. *Frontiers in Education*. [Link](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1704820/full) - FATE framework for ethical AI feedback

### Randomized Controlled Trials

9. **Meyer et al. (2024).** Using LLMs to bring evidence-based feedback into the classroom. *Computers & Education: AI*. [Link](https://www.sciencedirect.com/science/article/pii/S2666920X23000784) - N = 459 secondary students, d = 0.19-0.36

10. **Xie et al. (2025).** How Students Use AI Feedback Matters: Experimental Evidence on Physics Achievement and Autonomy. *arXiv*. [Link](https://arxiv.org/html/2505.08672v2) - N = 387 high school students, critical interaction effects

11. **Feedback Sources Comparison (2025).** Teacher, peer, or AI? *Computers & Education: AI*. [Link](https://www.sciencedirect.com/science/article/pii/S266655732500059X) - N = 90, teacher feedback best for learning

12. **Bauer et al. (2025).** Effects of AI-generated adaptive feedback on statistical skills. *BJET*. [Link](https://bera-journals.onlinelibrary.wiley.com/doi/full/10.1111/bjet.13609) - N = 90, adaptive vs. static feedback

13. **Kestin et al. (2025).** AI tutoring outperforms in-class active learning. *Scientific Reports*. [Link](https://www.nature.com/articles/s41598-025-97652-6) - 2x learning gains at Harvard

14. **LearnLM RCT (2025).** UK secondary school AI tutoring. [Link](https://storage.googleapis.com/deepmind-media/LearnLM/learnLM_nov25.pdf) - N = 165, 66.2% vs. 60.7%

15. **Tutor CoPilot (2024).** Human-AI tutoring system. [Link](https://edworkingpapers.com/sites/default/files/ai24_1054_v2.pdf) - 4-9 percentage point improvement

### Student Perception and Bias Studies

16. **Nazaretsky et al. (2026).** Who Gives Feedback Matters: Student Biases. *JCAL*. [Link](https://onlinelibrary.wiley.com/doi/10.1111/jcal.70153) - N = 472, algorithm aversion effects

17. **Can Students Judge Like Experts? (2025).** Large-scale feedback quality study. *Computers & Education: AI*. [Link](https://www.sciencedirect.com/science/article/pii/S2666920X25001730) - N = 979/472, students less critical of AI

18. **AI Feedback Literacy in HE (2025).** *Assessment & Evaluation in HE*. [Link](https://www.tandfonline.com/doi/full/10.1080/02602938.2025.2587924)

### Metacognition and Self-Regulation

19. **Xu (2025).** Enhancing self-regulated learning and learning experience in generative AI environments. *BJET*. [Link](https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.13599)

20. **Cognitive Mirror Framework (2025).** AI-powered metacognition and SRL. *Frontiers in Education*. [Link](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1697554/full)

21. **Cognitive Paradox of AI (2025).** Enhancement vs. erosion. *PMC*. [Link](https://pmc.ncbi.nlm.nih.gov/articles/PMC12036037/)

### Equity, Bias, and Over-Reliance

22. **OECD (2024).** The Potential Impact of AI on Equity and Inclusion in Education. [Link](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/08/the-potential-impact-of-artificial-intelligence-on-equity-and-inclusion-in-education_0d7e9e00/15df715b-en.pdf)

23. **Over-Reliance on AI and Critical Thinking (2025).** *Cogent Education*. [Link](https://www.tandfonline.com/doi/full/10.1080/2331186X.2025.2591503) - Over-reliance moderating effects

24. **FairAIED (2024).** Navigating Fairness, Bias, and Ethics in Educational AI. *arXiv*. [Link](https://arxiv.org/html/2407.18745v1)

### Regulatory and Policy

25. **EU AI Act and Education.** [MSA EvolutionLab](https://www.msaevolutionlab.com/blog-full/the-eu-ai-act-is-here-what-schools-must-do-now)

26. **Skolverket (2024-2025).** Rad om AI, chattbottar och liknande verktyg. [Link](https://www.skolverket.se/kompetensutveckling/stod-i-arbetet/rad-om-ai-chattbottar-och-liknande-verktyg)

27. **IMY (2025).** GDPR och AI - Vagledning. [Link](https://www.imy.se/verksamhet/dataskydd/innovationsportalen/vagledning-om-gdpr-och-ai/gdpr-och-ai/)

28. **European Schools AI Guidelines (2025).** Legal and pedagogical guidelines for educational use. [Link](https://www.eursc.eu/BasicTexts/2025-01-D-66-en-2.pdf)

---

## 13. Research Gaps and Future Directions

1. **Secondary education is under-represented** - most studies are in higher education
2. **Humanities/social studies specifically** - very few studies on AI feedback for argumentation in social science
3. **Swedish language context** - no studies on AI feedback quality in Swedish
4. **Long-term effects** - most studies are 2-10 weeks; no evidence on semester/year-long effects
5. **Equity impacts** - minimal research on how AI feedback affects different student populations differentially
6. **Feedback literacy interventions** - few studies on how to train students to use AI feedback effectively
7. **Platform design studies** - limited evidence on optimal UX patterns for AI feedback delivery
8. **Cost-effectiveness** - no rigorous cost-benefit analyses comparing AI feedback to other interventions

---

*Report compiled from 28+ sources spanning meta-analyses, RCTs, systematic reviews, and policy documents from 2024-2026. Priority given to empirical studies with control conditions and reported effect sizes.*
