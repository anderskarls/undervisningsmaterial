---
created: 2026-04-11
updated: 2026-04-11
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
tags: [pedagogik, larappar, WCAG, tillganglighet, mobile]
source: Pedagogiska appar design research report 2026-04-11
---

# WCAG 2.2 tvingar 24px target size, single-pointer alternativ och synlig fokus

WCAG 2.2 blev W3C Recommendation oktober 2023 och införde flera nya framgångskriterier som direkt påverkar quiz-apparens design. Tre av dem är särskilt avgörande:

**2.5.8 Target Size (Minimum) - 24×24 CSS-pixlar minimum** för interaktiva kontroller. Det är mindre än de 44×44 som Apple och Material rekommenderar, men det är en *juridisk* baseline. Många gamla quizappar har små radiobuttons (18-20px) som direkt bryter mot WCAG 2.2 AA.

**2.5.7 Dragging Movements.** Alla drag-interaktioner måste ha ett **single-pointer-alternativ**. Det utesluter de populära "dra för att sortera"-svarformaten om de bara fungerar med drag. Man måste erbjuda en klick-baserad fallback (upp/ner-knappar, eller "flytta till position 3"-dropdown).

**2.4.11 Focus Not Obscured (Minimum).** Keyboard-fokuset måste vara synligt - sticky headers som täcker det fokuserade elementet bryter mot detta. En vanlig fälla: en "sticky bottom bar" som täcker fokusringen när användaren tabbar till input-fältet underst.

**Nya autentiseringsregler (3.3.8, 3.3.9 Accessible Authentication):** man får inte kräva att användare löser kognitiva tester (memorera koder, räkna ut, lösa captcha) för att logga in. Magic link eller OAuth räcker.

**Textspacing (1.4.12, kvarstår från WCAG 2.1):** användarens custom spacing (radavstånd 1.5, ordavstånd 0.16em) får inte bryta layouten. Testa genom att applicera en bookmarklet.

## Implikationer för design
- Radiobuttons och checkboxar: minst 24×24px, helst 44×44px.
- Ingen drag-only sortering - alltid klickbar alternativrörelse.
- Ingen sticky header/footer som kan täcka fokus.
- Ingen captcha, inget "skriv in koden du fick på SMS + dagens datum".
- Testa med user stylesheet som sätter radavstånd 2, ordavstånd 0.2em - allt ska fortfarande funka.

## Koppling till survey-platform
Gå igenom komponentbiblioteket i din Next.js-app och verifiera: är radioknapparna minst 24px? Har alla drag-komponenter click-fallback? Täcker din sticky footer fokusringen vid tab-navigering? Detta är juridisk baseline i skolkontext, inte bara "nice-to-have".

## Källa
- W3C (2023). "Web Content Accessibility Guidelines (WCAG) 2.2." https://www.w3.org/TR/WCAG22/
- Hypersense Software (2024). "WCAG 2.2 Explained." https://hypersense-software.com/blog/2024/09/02/wcag-2-2-web-accessibility-guidelines/
