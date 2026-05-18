---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, spacing, retrieval-practice, repetition]
source: Pedagogiska appar design research report 2026-04-11
---

# Repetera missade frågor 2-4 dagar senare, inte samma dag

Den praktiska konsekvensen av Adesope-meta-analysen (2017): retention-vinsten av testning är nästan 50% större vid 1-6 dagars fördröjning (g = .82) än vid <1 dags fördröjning (g = .56). Samma fråga som repeteras på samma lektion är pedagogiskt svagare än samma fråga 2-3 dagar senare. Detta är grunden till varför Anki-liknande spaced repetition-system fungerar.

Latimier et al. (2024) meta-analys på nio STEM-kurser visar att spaced quizzing slår massed quizzing i de flesta fall även i verkliga klassrum - men med *mindre* effektstorlekar än i labbstudier. JMIR Formative Research (2024) visar också att algoritmisk per-item spacing (ML-baserat på individuella glömskekurvor) är tekniskt genomförbart i webbappar.

Interleaving-fyndet från AERO (2024) lägger till dimensionen: det är inte bara *när* man repeterar, utan *vad* man blandar ihop. Interleaving fungerar bäst när ämnen är "tillräckligt lika för att förväxla" - t.ex. franska revolutionen vs amerikanska vs ryska. Det är exakt var gymnasiets historieundervisning lever.

## Implikationer för design
- Spaced review som separat mode: appen resurfacar automatiskt frågor eleven missat 2-4 dagar tidigare.
- Interleave frågor mellan topics inom en deck istället för blockerat per kapitel.
- Enkel algoritm räcker: missade frågor återkommer efter 2-3 dagar, rätt besvarade glesas ut (Anki SM-2 är open source, hjulet är uppfunnet).
- Läraren behöver inte orkestrera detta manuellt - det är poängen med att det är en app.

## Koppling till survey-platform
Detta är den feature som gör din plattform värd mer än en Google Forms. Google Forms kan en-shot-quiz; en riktig quizapp ger spaced review. Prioritera detta högre än fancy UI eller AI-feedback.

## Källa
- Adesope, Trevisan, Sundararajan (2017). *Review of Educational Research*.
- Latimier, A. et al. (2024). "Single-paper meta-analyses of spaced retrieval practice in nine STEM courses." *International Journal of STEM Education*.
- AERO (2024) "Practice Guide: Vary Practice."
