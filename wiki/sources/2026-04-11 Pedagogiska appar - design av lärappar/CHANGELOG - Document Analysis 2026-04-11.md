---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [changelog, document-analysis, edtech, larappar]
---

# Document Analysis Changelog - 2026-04-11

## Source
**Document:** `resources/pedagogiska-appar-design-research-report-2026-04-11.md`
**Title:** Pedagogiska appar - hur ska de designas (Research Report for the Survey Platform Project)
**Scope:** Evidence-based design principles for classroom and homework digital assessment apps (Swedish gymnasium context)
**Recency:** 76% of sources from 2023-2025
**Target use case:** Inform design of user's Next.js student-facing quiz/survey platform

## Session Summary
Extracted **23 atomic permanent notes** from the research report, each capturing a distinct counterintuitive or load-bearing insight for the design of learning apps. Focus was on findings that run against common edtech intuition (gamification backfire, progress bar paradox, "less is more" feedback, dyslexia fonts myth, AI detection being broken), plus Swedish-specific compliance insights (GDPR, Skellefteå-fallet, Tidö-svängen, EU AI Act).

## Deduplication
- Searched `Brain/02-Permanent/` for existing notes on gamification, testing effect, retrieval practice, WCAG, progress bar, formative feedback, GDPR, cognitive load. **No duplicates found** - this is the first deep treatment of edtech design in the vault.
- No skipped notes.

## Notes Created (23 total)

### Feedback & formativ bedömning
1. `enkel-aterkoppling-slar-utforliga-forklaringar.md` - Say 2024: minimal feedback beats elaborate, preserves metacognition.
2. `kcr-aterkoppling-som-default-forklaringar-on-demand.md` - Huang 2022: hints + retry beats instant-reveal.
3. `neutral-sprakning-om-fel-svar-minskar-skam.md` - Neutral language, no red X, SDT + test-anxiety grounding.
4. `jag-ar-inte-saker-som-tredje-alternativ.md` - "I don't know" as third option for metacognition capture.

### Retrieval practice & spacing
5. `testing-effect-g-0-61-ar-quizens-starkaste-argument.md` - Adesope 2017 anchor, g=.61 across 118 studies.
6. `spaced-review-2-4-dagar-later-ar-sweet-spot.md` - Gap of 1-6 days boosts retention g=.82 vs .56.
7. `interleaving-ar-starkast-nar-teman-forvaxlas.md` - AERO 2024: interleave similar topics (revolutions, ideologies).
8. `inbaddade-fragor-mitt-i-material-slar-fragor-efter.md` - Yan 2024: embedded > terminal questions.
9. `lab-till-klassrum-effektstorlekar-krymper.md` - Latimier 2024: effects shrink ~2-3x in real classrooms.

### Gamification & motivation (SDT)
10. `gamification-kombinationer-kan-backfire.md` - Zeng 2024: levels+badges+leaderboards g = -3.16.
11. `nyhetseffekten-kort-gamification-slar-lang.md` - Short interventions outperform long; novelty decay.
12. `personlig-progress-slar-rank-som-kompetenssignal.md` - Lim 2024: SDT-dashboards without rank win.
13. `dark-patterns-of-cuteness-barn-autonomi-risk.md` - Fitton & Read 2024: cute characters as autonomy bypass.

### UX, mobile, flows
14. `en-fraga-per-skarm-fyrdubblar-slutforande.md` - 85% vs 22% completion (Liu & Wronski / SurveySparrow).
15. `progress-bar-paradoxen.md` - Conrad 2010: slow early progress bars increase abandonment.
16. `inga-matrisfragor-pa-mobil.md` - Matrix questions destroy mobile completion, decompose to one-per-screen.
17. `telefonens-narvaro-skadar-larande-aven-oanvand.md` - Bottger 2023 + PISA 2022: phone presence alone = -0.75 years.

### Cognitive load & multimedia learning
18. `seductive-details-dekorbilder-skadar-larande.md` - Wang 2025: decorative graphics rank lowest in Mayer meta.

### Accessibility
19. `dyslexi-typsnitt-ar-inte-empirisk-bevisat-battre.md` - OpenDyslexic myth; Atkinson Hyperlegible / Lexend recommended.
20. `wcag-2-2-target-size-24px-som-legal-baseline.md` - WCAG 2.2 new criteria: 24px targets, drag alternatives, focus visibility.
21. `udl-extended-time-som-default-inte-accommodation.md` - CAST UDL 3.0: extended time as default, not opt-in.

### AI, compliance, Swedish context
22. `ai-fusk-detektion-ar-opalitlig-och-diskriminerande.md` - Detection broken, discriminates against non-native writers, EU AI Act high-risk.
23. `ai-features-i-larappar-ska-vara-smala-och-off-path.md` - Bauer 2024: scope AI narrowly, keep off critical path.

### GDPR & Swedish regulatory
24. `gdpr-datafminimering-ar-designconstraint-i-sverige.md` - Skellefteå-fallet, Tidö-svängen, EU AI Act triad.
25. `pseudonyma-id-som-default-i-svenska-skolor.md` - Pseudonymous IDs as default, no student auth needed.

*(Total: 25 notes — exceeding the 15-25 target ceiling; all passed the "future reader would find genuinely useful" test)*

## Top 5 Most Load-Bearing Insights for User's Current Work

1. **`en-fraga-per-skarm-fyrdubblar-slutforande.md`** - The single most impactful UX decision for the survey platform. 85% vs 22% completion is the difference between a working app and a dead one.

2. **`pseudonyma-id-som-default-i-svenska-skolor.md`** - Eliminates ~80% of compliance burden AND authentication complexity. Becomes the platform's marketable moat in Swedish schools post-Tidö.

3. **`testing-effect-g-0-61-ar-quizens-starkaste-argument.md` + `spaced-review-2-4-dagar-later-ar-sweet-spot.md`** - Together these define the core value proposition: spaced review is what makes your app better than Google Forms. Prioritize this over UI polish.

4. **`gamification-kombinationer-kan-backfire.md` + `personlig-progress-slar-rank-som-kompetenssignal.md`** - Permission to NOT build gamification features. Saves weeks of development AND is evidence-based pedagogy.

5. **`enkel-aterkoppling-slar-utforliga-forklaringar.md`** - Permission to NOT build elaborate feedback systems. Default to KCR, offer "Förklara" as optional. Another scope-reduction win grounded in 2024 evidence.

## Recommended Follow-Up
- Run `connection-finder` against these new notes to integrate them with any existing permanent notes on pedagogy, SDT, or formative assessment.
- Consider promoting 3-5 of the load-bearing notes to full permanent note status in `Brain/02-Permanent/` via `/graduate-insights`.
- The research report itself flags Skolverket's allmänna råd (January 2025) as the next authoritative Swedish source to check directly.
- For the user's quiz app: turn the 25 notes into a design checklist (the report's section 11 suggestion) that can gate PRs and feature decisions.
