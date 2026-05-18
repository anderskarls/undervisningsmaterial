---
tags:
  - att-göra
  - översikt
created: 2026-04-14
updated: 2026-04-14
created_by: claude-opus-4-6
updated_by: claude-opus-4-6
agent_version: 03.26
---

# Alla uppgifter — samlad översikt

> **Snapshot 2026-04-14.** Den här filen är en sammanställning av alla öppna uppgifter jag hittade i vaultet. Den primära levande listan är [[Att göra]] — den här filen ska läsas för att få *överblick*, inte för att hantera dagligen. Uppdatera manuellt eller be Claude regenerera.

---

## 🔥 Denna vecka (från Att göra.md)

- [ ] Få MCP-servern med The Guardian att fungera med scheduled tasks i Claudes desktop 📅 2026-03-14 *(förfallen)*
- [ ] Skapa en scheduled task för morgonbriefs inför dagens lektioner — statusuppdatering per grupp 📅 2026-03-14 *(förfallen)*
- [ ] Lektionsplaneringsskillen: separera sparplatser — markdown-filer i vaultet, docx-filer i Nextcloud-synkad mapp 📅 2026-03-14 *(förfallen)*
- [ ] Installera superpowers-pluginen lokalt: `/plugin install superpowers@claude-plugins-official` (funkar inte över Remote Control, måste köras i lokal Claude Code-session) 📅 2026-04-13 *(förfallen)*

---

## 📅 Nästa vecka (från Att göra.md)

- [ ] Titta på Cornelias önskemål om en hemsida eller app för närvarotagning på APL 📅 2026-03-21 *(förfallen — från mars)*

---

## 📋 Kommande (från Att göra.md)

- [ ] **Fortsätt momentplanering Geografi 1** — Ekonomisk geografi och globalisering. Klar t.o.m. steg 2 (lärandemål), fortsätt från steg 3 (pedagogiskt upplägg). Momentplan: `Undervisningsmaterial/Geografi/Ekonomisk geografi och globalisering/momentplan.md`

- [ ] **Återbesök momentet Världskrigen (Historia 1a1)** — eventuellt planera om med NotebookLM-stöd. Förbättringsområden: ersätta [VERIFIERA]-taggar, lägga till krigets karaktär/förlopp, fördjupa konsekvenserna

- [ ] **Kokboks-MCP — vinbok-extraktion** (6 EPUB-böcker, rå text redan i wines.db). Koden är klar. Kör i `kokboks-mcp/`:
  ```bash
  uv run python3 -c "from kokboks_mcp.wine_db import init_wine_db; from kokboks_mcp.wine_recipe_extractor import extract_wine_for_book; db = init_wine_db(); [extract_wine_for_book(db, i) for i in range(1,7)]"
  ```

- [ ] **Firecrawl MCP + DN-scraper** 📅 2026-04-20
  - Sätt upp Firecrawl MCP i `.mcp.json`
  - Skapa `.secrets/` med gitignore för DN-inloggningscookies
  - Bygg skill `/hamta-dn-artikel <url>` som scrapear paywalled DN-artiklar med cookies och sparar som markdown i `Brain/01-Sources/Artiklar/` med YAML-frontmatter
  - Cookies måste förnyas ~månadsvis
  - Kör lugnt (1 req / 3-5 sek) för att undvika DN:s anti-bot
  - Ska kunna användas av `document-insight-extractor` för att bygga research-bas (t.ex. betygsdebatten/Henrekson-reformen)

---

## 🧠 Pedagogisk utveckling (återkommande)

- [ ] Reflektera kring Claude Codes roll i arbetsflödet — var går gränsen? 🔁 varje vecka
- [ ] Testa att göra en veckoreflektion varje fredag 🔁 varje fredag

---

## 📚 Följa upp från Henrekson-reflektionen (2026-04-14)

Från [[Henrekson-reformen och källkritikmomentet 2026-04-14]]:

- [ ] **Skriv om `bedomningskriterier.md`** för källkritikmomentet med en helhetsbedömningsparagraf överst. Behåll E/C/A-språket som språkbro, men gör matrisen till *ledstjärna* istället för *summa*. Fil: `Undervisningsmaterial/Samhällskunskap/Källkritik AI och konspirationsteorier/bedomningskriterier.md`
- [ ] **Planera in en skrivuppgift där lateral läsning är bedömningsobjekt** inför nästa körning av källkritikmomentet. Lateral läsning ska inte bara undervisas utan också testas och bedömas.
- [ ] **Följ Prop. 2025/26:197 (Henrekson-utredningen)** löpande — läs propositionen när den publiceras, följ Skola och Samhälles och Kvartals bevakning, ta upp frågan i samhällskunskapsträffen
- [ ] **Läs igenom artikeln [[reduktionismens-tre-ansikten]]** och avgör om den är redo att skickas till Skola och Samhälle (eventuellt korta ned — 2400 ord är i högsta laget)

---

## 🧹 Frivilliga uppföljningar från deep research-sessionen (2026-04-13/14)

- [ ] Committa deep research-sessionen till git som en sammanhållen session (23 nya permanentnoter, MOC, artikel, reflektion, bakåtlänkar)
- [ ] Överväg att lägga till bedömningsdimension per fas i sexfasstrukturen i [[MOC - Evidensbaserad lektionsarkitektur]] (framework-utökning från connection discovery)

---

## ⚠️ Möjligen inaktuella punkter (från äldre filer — granska/arkivera)

### Från `Reflektioner/Vecka 10/Veckoplanering — vecka 10 2026.md` (2026-03-01)
- [ ] Boka tid med Cornelia för att prata om AI-arbetet på skolan
- [ ] Formulera en första skiss: vad behöver AI-policyn innehålla? Vilka frågor ska den besvara?
- [ ] Gå igenom varje kurs: genomförda moment, pågående, kommande
- [ ] Identifiera var det är trångt i schemat framåt
- [ ] Gå igenom centralt innehåll — vad har behandlats och vad återstår?
- [ ] Skissa på nästa moment: tema, omfattning, examination
- [ ] Boka upp tider för utvecklingssamtal med mentorseleverna

### Från `Brain/00-Inbox/Lärdomar från lektion HT25A 2026-03-09.md`
- [x] Boka tid med rektor för att prata om hur många elever som riskerar underkänt i kursen — **deadline: fredag 2026-03-13** *(förfallen)*

---

## 🗺️ Läsning — så använder du den här filen

1. **Daglig:** arbeta i [[Att göra]] — checka av där
2. **Veckovis:** öppna den här filen för att få överblick över *allt* som ligger och väntar, inklusive uppgifter från reflektioner och gamla planeringar som annars lätt glöms
3. **Uppdatering:** den här filen är en *snapshot* — be Claude regenerera när den känns inaktuell, eller uppdatera manuellt

## 📊 Sammanfattning

- **Förfallna punkter:** 5 (från mars — behöver antingen göras eller arkiveras)
- **Aktiva punkter (Att göra.md):** 6 kommande + 2 återkommande
- **Från dagens session:** 4 uppföljningar + 2 frivilliga
- **Möjligt inaktuella (äldre filer):** 8 (granska)

**Totalt öppna punkter:** ~27

---

*Sammanställd 2026-04-14 | Källor: Att göra.md, Tankar och planer/Henrekson-reformen..., Reflektioner/Vecka 10/..., Brain/00-Inbox/Lärdomar...*
