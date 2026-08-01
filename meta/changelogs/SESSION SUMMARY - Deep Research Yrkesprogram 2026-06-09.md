---
created: 2026-06-09
updated: 2026-06-09
created_by: claude-opus-4-8
updated_by: claude-opus-4-8
agent_version: 04.26
type: session-summary
---

# Deep Research Pipeline - Session Summary

**Datum:** 2026-06-09
**Exekveringsläge:** Directed (`/deep-research Undervisning på yrkesprogram`)
**Pipeline:** Research (3 parallella agenter) -> Extract (18 noter) -> Connect (MOC + korslänkar)

---

## Fas 1: Research

Tre research-specialist-agenter kördes parallellt med webbsökning och primärkällsverifiering (tyngdpunkt 2024-2026):

| Delrapport | Fokus | Källor | Fil |
|-----------|-------|--------|-----|
| A | Yrkesprogrammens systemkontext + Gy25 | 31 | `resources/yrkesprogram-systemkontext-gy25-research-report-2026-06-09.md` |
| B | Didaktik, motivation, relationer | 29 | `resources/yrkesprogram-didaktik-motivation-research-report-2026-06-09.md` |
| C | Internationell VET-forskning | 30 | `resources/vet-internationell-forskning-research-report-2026-06-09.md` |

Totalt ~90 källor. Primärkällor: Skolverket, Regeringen, Riksdagen, Skolinspektionen, SCB, Skolforskningsinstitutet, Möllenborg 2023, ICCS 2022, Billett 2025, OECD 2025, CEDEFOP, WEF 2025, Schindler 2024, NJVET/IJRVET/ERVET.

---

## Fas 2: Insiktsextraktion

**Sessionsmapp:** `wiki/sources/2026-06-09 Undervisning på yrkesprogram/`

- Unika noter: **18** (5 systemkontext, 7 didaktik/motivation, 6 internationell VET)
- Dubbletter undvikna: 3 (Möllenborg A-lag/B-lag, deliberativ undervisning x2, ICCS 2022 - alla redan i vaulten)
- Berikade befintliga noter: 1 ([[kontrovers-mollenborg-a-lag-b-lag-demokrati]])
- Sessionschangelog: `CHANGELOG - Document Analysis 2026-06-09.md`

**Topp-insikter (mest värdefulla):**
1. [[hoga-forvantningar-inte-sankta-krav-yrkesprogram]] - sänkta krav är skadliga (d=0,92); eleverna vill ha mer
2. [[yrkeselevers-motivation-ar-kontextuell-inte-inneboende]] - motivationen är kontextuell, inte inneboende
3. [[mer-apl-ar-inte-automatiskt-battre]] - mer arbetsplatsförläggning kan ge negativa utfall
4. [[infargning-yrkeskontext-som-ingang-inte-tak]] - infärgning som ingång, inte tak
5. [[kognitiv-aktivering-slar-att-prata-om-aktuellt]] - utmanande uppgifter > aktualitetsprat

---

## Fas 3: Connection Discovery

**Ny MOC:** [[MOC - Undervisning på yrkesprogram]] - 18 nya + 6 tidigare noter i 8 sektioner.

### Starkaste kluster
- **Demokratiuppdraget:** Möllenborg <-> deliberativ undervisning (Andersson) <-> kognitiv aktivering (Abs) <-> APL-medborgarlärande (Lundahl/Visser). Samlat narrativ: yrkeselever har mest att vinna på just den undervisning de får minst av.
- **"Förenkla inte"-tråden:** höga förväntningar <-> motivation kontextuell <-> deliberation gynnar yrkeselever <-> eleverna efterfrågar utmaning. Konvergens från fyra oberoende studier.
- **Integration:** infärgning <-> satellitlärar-samverkan <-> TPP/TSP/ITP <-> boundary objects. Den didaktiska ambitionen begränsas av organisatorisk struktur.

### Cross-domän-broar
- Pygmalion/förväntningar (denna session) <-> [[growth-mindset-teorin-har-kollapsat-2025]] - var förväntanseffekten faktiskt har stark evidens
- Disciplinär läsning <-> [[forforstaelse-av-begrepp-sanker-intrinsic-load-i-historia]] + CLT
- AI/automatisering <-> [[genai-starkar-problemlosning-inte-kreativitet-higher-order-thinking]]

### Synthes-/artikelmöjligheter
1. **Artikel:** "Samma teori, andra format" - evidensbaserad guide till SO på yrkesprogram. Källor: höga-förväntningar, deliberativ undervisning, kognitiv aktivering, motivation kontextuell.
2. **Artikel:** "Infärgning utan urvattning" - yrkeskontext som ingång till medborgaruppdraget.
3. **Momentdesign:** yrkesklass-anpassad mall (deliberation + kognitiv aktivering + öppet klimat) - kan matas in i [[MOC - Momentplaneringsramverket]].

---

## Impact

**Nytt territorium i vaulten:** yrkesprogrammens systemkontext (Gy25-struktur, behörighetsreform, dimensionering, statistik) saknades helt; internationell VET-forskning saknades helt.

**Förstärkta domäner:** demokratiuppdraget, elevmotivation, bedömning/Gy25, lärandevetenskap (läsning).

**Mest signifikanta fynd:**
- Den strukturella diagnosen: 50 vs 100 p + 1a/1b-spårlåsning + halverat ideologiinnehåll = kodifierad ojämlikhet.
- Den kontraintuitiva tråden: eleverna vill ha mer, mer APL kan skada, avskaffad spårning eliminerar inte ojämlikhet.

---

## Rekommenderade nästa steg

1. **Skriv artikel** "Samma teori, andra format" (sources: de 7 didaktiknoterna)
2. **Bygg moment** för en yrkesklass via /planera-moment med MOC:en som källa
3. **Lint:** kontrollera om [[MOC - Elevmotivation och engagemang]] och [[MOC - Historiedidaktik och kontroversiella frågor]] bör peka tillbaka på den nya MOC:en (broar är inlagda men dubbelriktning kan stärkas)

---

## Statistik

| Metric | Före | Efter |
|--------|------|-------|
| Source sessions | 21 | 22 |
| Source notes | 488 | 506 |
| MOCs | 9 | 10 |
| Research-rapporter (resources/) | - | +3 |

---

**End of Deep Research Pipeline Session**
