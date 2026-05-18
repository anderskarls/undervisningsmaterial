---
tags:
  - att-göra
---

# Att göra

## Denna vecka

- [x] Kör `/gsd:resume-work` och sedan `/gsd:plan-phase 1` — skapa exekverbar plan för källkritik-momentets strukturella grund 📅 2026-03-11
- [ ] Få MCP-servern med The Guardian att fungera med scheduled tasks i Claudea desktop 📅 2026-03-14
- [ ] Skapa en scheduled task för morgonbriefs inför dagens lektioner — statusuppdatering per grupp 📅 2026-03-14
- [x] Lektionsplaneringsskillen: separera sparplatser — markdown-filer i vaultet, docx-filer i Nextcloud-synkad mapp 📅 2026-03-14
- [ ] Installera superpowers-pluginen lokalt: `/plugin install superpowers@claude-plugins-official` (funkar inte över Remote Control, måste köras i lokal Claude Code-session) 📅 2026-04-13
- [x] Survey-appen: kör `npx prisma migrate dev --name add-student-auth` på deploy-enheten för att aktivera nya elevkonton ✅ 2026-03-09 ✅ 2026-03-09
- [x] Planera veckans arbete i förväg — sprida ut förberedelser ✅ 2026-03-08
- [x] Verifiera centralt innehåll för Sh1a1 på skolverket.se (demokratilektionen) ✅ 2026-03-08
- [x] Förbereda material till demokratilektionen (sorteringskort + jämförelsetabell) ✅ 2026-03-08

## Nästa vecka

- [ ] Titta på Cornelias önskemål om en hemsida eller app för närvarotagning på APL 📅 2026-03-21

## Kommande

- [x] **Telegram-bot för lektionsreflektioner — slutför setup:** Botens kod, systemd-unit och config-mall är klara i `resources/telegram-reflection-bot/`. Återstår:
  - [x] Skapa bot via @BotFather på mobilen (`/newbot`), kopiera token
  - [x] `cp .secrets/telegram-bot.json.example .secrets/telegram-bot.json` och klistra in token
  - [x] `cd resources/telegram-reflection-bot && python3 -m venv venv && ./venv/bin/pip install -r requirements.txt`
  - [x] Kör `./venv/bin/python bot.py`, skicka `/start` från mobilen, kopiera chat_id till `allowed_chat_ids` i config
  - [x] Testa: skicka `#sh1a Test` från mobilen, verifiera att fil dyker upp i `Brain/00-Inbox/`
  - [x] Installera systemd-tjänst: `mkdir -p ~/.config/systemd/user && cp resources/telegram-reflection-bot/telegram-reflection-bot.service ~/.config/systemd/user/ && systemctl --user daemon-reload && systemctl --user enable --now telegram-reflection-bot.service`
  - [x] (Valfritt) `sudo loginctl enable-linger anders` så tjänsten kör utan inloggning
  - [x] Senare: lägg till röststöd (Whisper-transkribering)
  - Full guide: resources/telegram-reflection-bot/README.md`
- [ ] **Deep research 2026-05-06 (Feedback för inlärning) — uppföljning:**
  - [ ] Re-indexera Local Brain Search: `./resources/local-brain-search/run_index.sh`
  - [ ] Skriv syntesartikel: *"Den interna jämförelsen — varför Nicol förändrar feedback-debatten"* (bygger om lärararbetet från "skriva bättre feedback" till "designa rikare jämförelseobjekt")
  - [ ] Skriv syntesartikel: *"Feedback för vuxna — varför 80% av rejicering inte handlar om språk"* (Lipnevichs 5-mekanismer som diagnostiskt verktyg)
  - [ ] Skapa **MOC - Feedback för lärande** (35+ noter har passerat tröskeln; spinnar av från befintlig MOC - Bedömning och betygssättning)
  - [ ] Lucka att fylla: översätt/anpassa Nature 2025-instrument för **lärar-feedback-literacy** till svensk gymnasiekontext
  - [ ] Lucka att fylla: utveckla **samhällskunskapsspecifik feedback-design** för argumentation, källkritik och demokratiresonemang (de generella principerna behöver ämnesanpassning)
  - [ ] Testa videofeedback-workflow i nästa skrivuppgift (89% revisionsfrekvens vs 72% skriftlig — Máñez 2024)
  - [ ] Experimentera med exemplar-EFTER-utkast i nästa skrivmoment (Nicol & Rose 2025 — vänder konventionen)
  - Full sessionssammanfattning: `Brain/05-Meta/Changelogs/CHANGELOG - Connection Discovery Feedback för inlärning 2026-05-06.md`
- [ ] **Deep research 2026-04-15 (Frågedesign) — uppföljning:**
  - [ ] Re-indexera Local Brain Search: `./resources/local-brain-search/run_index.sh`
  - [ ] Kör connection-finder på `pretesting-effekten-d-06-till-12-aven-med-fordrojd-feedback.md`, `ai-bedomning-av-essaer-nar-manniskoniva-icc-094.md` och `rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen.md`
  - [ ] Uppdatera `MOC - Evidensbaserad lektionsarkitektur.md` med pretesting- och desirable-difficulty-klustret
  - [ ] Skriv syntesartikel: "Frågedesign för gymnasiet — 2025 års evidens om MCQ, essäer och AI" (kombinera med 2026-04-12 AI-feedback-klustret)
  - [ ] Integrera desirable difficulty-formeln (60–85% retrieval success) och spacing-formeln (10% av retentionsintervall) i `planera-moment`-skillen
  - [ ] Graduate till 02-Permanent: `pretesting-effekten-d-06-till-12-aven-med-fordrojd-feedback.md`, `desirable-difficulty-sweet-spot-60-till-85-procent.md`, `rubrikkalibrering-ar-villkoret-for-reliabel-bedomning-i-tolkande-amnen.md`, `prompt-verb-effekten-vardera-slar-forklara.md`
- [x] Fortsätt momentplanering Geografi 1 — Ekonomisk geografi och globalisering. Klar t.o.m. steg 2 (lärandemål), fortsätt från steg 3 (pedagogiskt upplägg). Momentplan: `Undervisningsmaterial/Geografi/Ekonomisk geografi och globalisering/momentplan.md`
- [x] Frågeappen: Gör det tydligare vilka svar som är rätt och fel under "Mina resultat" — eleverna ska kunna se sina misstag direkt utan att gissa
- [x] Frågeappen: Bugg med "ruta om obesvarade frågor" — ta bort den funktionen helt
- [ ] Eleven Fanny: hennes omdömen saknas något — kolla upp och ge henne info om vad som behövs
- [ ] Återbesök momentet Världskrigen (Historia 1a1) — eventuellt planera om med NotebookLM-stöd. Förbättringsområden: ersätta [VERIFIERA]-taggar, lägga till krigets karaktär/förlopp, fördjupa konsekvenserna
- [ ] **Se över nya cross-domain-trådar från auto-discovery 2026-04-29** ([Changelog](Brain/05-Meta/Changelogs/CHANGELOG%20-%20Auto-Discovery%20Session%202026-04-29.md)):
  - [ ] Discovery 1: Utvidga Konsilienszon 4 "Kalibrering" (2026-04-23) med lärar-elev-gapet (62/15) som lärar-dimension av DKE
  - [ ] Discovery 2: Lägg till semantisk koppling mellan [[historiematerialismens-renassans-tre-kriser]] och [[Ungdomars sarbarhet for desinformation - identitetsbildning som riskfaktor]] (mikro-makro-isomorfi: kris→narrativ-mottaglighet)
  - [ ] Discovery 3: Reconcile [[andra-ordningens-begrepp-historisk-frageteknik]] med [[historiematerialism-som-metod-mot-andra-historiesyner]] — metodpluralism på didaktisk vs akademisk nivå
  - [ ] Överväg artikel: *"Klassrummets dubbla DKE - när läraren tror sig diskutera och eleven tror sig kunna källkritik"*
  - [x] Överväg moment-design (Sh3): *"Kris och ideologisk mottaglighet"* — eleverna analyserar parallellt egen identitetsfas och samtidens narrativs-marknad
- [x] **Bygg verktyg som läser Google Classroom-data** (idé från 2026-05-06): Byggt i `resources/classroom-tool/` — gws-baserad arkitektur, anonymiserad sammanställning (`Elev N`), HTML-nyckel för fysisk utskrift. Se README.md i mappen. ✅ 2026-05-06
- [x] **Classroom-tool: läsa elev-inlämningar via Drive** — Implementerat i `resources/classroom-tool/`. Två nya kommandon: `./run.sh read <courseId> <workId> <Elev N>` (en inlämning) och `./run.sh dump <courseId> <workId>` (hela klassen, anonymiserat). Endast Google Docs exporteras (text/plain). Cache 24 h i `cache/` (gitignored). GDPR: banner i toppen + generiska bilage-labels (Classroom auto-namnger kopior med fullt namn — vi visar aldrig de råa filtitlarna). Smoke-testat mot IR-kursens "Kartlägga nuläget" (4 inlämningar). ✅ 2026-05-06
- [ ] **AI-feedback på elevsvar — lager 3 (classroom-tool `feedback`-verb):** Lager 1+2 klara 2026-05-10. **Lager 1:** admin-endpoint `POST /api/courses/{courseId}/assignment-feedback` deployad (commit `0c0b443`), smoketestat (negativa paths + all-skipped). **Lager 2:** OpenAPI-spec + regenererad CLI (commit `0d2c355`), kommando `survey-platform-pp-cli courses assignment-feedback create <courseId> --stdin` verifierat end-to-end mot Vercel. **Lager 3 kvar:** `./run.sh feedback <courseId> <courseworkId> --rubrik <fil>` i `resources/classroom-tool/` — återanvänd `forms.py`/`submissions.py` för dump, LLM per elev mot kunskapskrav + few-shot, översätt `Elev N` → `student_number` (OBS: `aliases.json` mappar `userId → "Elev N"` per Classroom-kurs, men surveyappens `student_number` är separat per-kurs-nummer — de stämmer inte automatiskt, designfråga). POSTa via CLI:n. Default `--review` (öppna i $EDITOR innan utskick). **Tre öppna pedagogiska frågor att avgöra först:** (a) review-default på/av, (b) var rubriken bor, (c) few-shot-format. **Pilot före CLI-bygge:** kör rubrik+few-shot manuellt mot en `dump`-output på en uppgift du redan bedömt och jämför kvaliteten. Långsiktigt mål: flytta enkäter helt till surveyappen (väg C). Memory: `project_classroom_survey_bridge.md`. 📅 2026-05-10
- [ ] Kokboks-MCP: Köra vinbok-extraktion sekventiellt (6 EPUB-böcker, rå text redan i wines.db). Koden är klar — kör `uv run python3 -c "from kokboks_mcp.wine_db import init_wine_db; from kokboks_mcp.wine_recipe_extractor import extract_wine_for_book; db = init_wine_db(); [extract_wine_for_book(db, i) for i in range(1,7)]"` i kokboks-mcp/
- [x] **Firecrawl MCP + DN-scraper:** Sätt upp Firecrawl MCP i `.mcp.json`, skapa `.secrets/` med gitignore för DN-inloggningscookies, bygg skill `/hamta-dn-artikel <url>` som scrapear paywalled DN-artiklar med mina cookies och sparar som markdown i `Brain/01-Sources/Artiklar/` med YAML-frontmatter. Cookies måste förnyas ~månadsvis. Kör lugnt (1 req / 3-5 sek) för att inte trigga DN:s anti-bot. Ska kunna användas av `document-insight-extractor` för att bygga research-bas om t.ex. betygsdebatten/Henrekson-reformen. 📅 2026-04-20 ✅ 2026-04-15
- [x] Planera nästa lektion Sh1a1: Sveriges politiska system ✅ 2026-03-08
- [x] Skriva första lektionsreflektionen efter demokratilektionen ✅ 2026-03-08

## Pedagogisk utveckling

- [ ] Reflektera kring Claude Codes roll i arbetsflödet — var går gränsen? 🔁 every week
- [ ] Testa att göra en veckoreflektion varje fredag 🔁 every friday
- [ ] **Återuppta grilling: pedagogiskt momentramverk** 📅 2026-05-23 — Påbörjad 2026-05-15, fortsatt 2026-05-16. **Utkast 2 sparat:** `Brain/02-Permanent/ramverk-momentdesign-utkast-2.md` (ersätter utkast 1). Project memory: `project_pedagogiskt_ramverk_grilling.md`.
  - **Stora beslut sedan utkast 1:**
    - Y-framing (avgörande): ramverket är *pragmatiskt slimmad momentdesign*, inte principiellt deliberativt. Hess/Alexander/Wineburg/Klafki är inspirationskällor för rollerna brottning + syntes, inte teoretisk gravitationskraft.
    - Avvisningen av sex-fasen är pragmatisk (genomförbarhet), inte ideologisk. "Fel DNA" struken som grund.
    - Ramverket är *strävan*, inte hård struktur — hårda regler på enskilda punkter (ordningsregler nivå 4), men helheten är standard mot vilken avvikelser mäts.
  - **Nivå 3 KLAR:**
    - Taxonomi (2 kategorier): innehåll + begrepp. Argumentation och disciplinära färdigheter åker ut — de är utvecklingsbåge över moment (bedöms på nivå 2).
    - Definition omformulerad: förutsättning = *optimerande* villkor, inte nödvändigt. Brottning kan ske utan att alla är redo.
    - Verifikationsregel (mjuk + spårbar): tre dimensioner — andel/spridning, konsekvens av lucka, frågetypens tolerans (Hess tål mer än disciplinär källfråga).
    - Princip 3 — Förberedelseintegritet: brottning väntar inte, just-in-time-recap starkt begränsat (undergräver förberedelsekultur). Differentierad tillämpning: undantag för elever med dokumenterat stöd.
  - **Att grilla nästa gång** (prioritetsordning):
    - Princip 2: forskningsevidens vs kontextkänsla (andra live-konflikten)
    - Brottningsformer (nivå 5): SAC, sokratiskt seminarium, debatt, fishbowl + valkriterier
    - Aktivering: när konsulteras ramverket? (momentbeslut / embedded i planera-moment-skillen / vid reflektion?)
    - Vault-hygien: 53+ sex-fas-noter, MOC, planera-moment-skill
    - Namnfråga: arbetsförslag "Lättviktigt momentramverk" / "Slimmad momentdesign" / "Momentramverk med brottning som kärna"
  - **Öppen tråd noterad (ej grillad):** Mellangruppen — elever utan formellt stöd som *just denna gång* är utsatta. Princip 3 betyder att de får finna sig i konsekvenserna. Accepterad konsekvens av förberedelsekultur.
  - **Återupptagning:** "fortsätt grilling pedagogiskt ramverk" — vi börjar med Princip 2 om inget annat sägs.

## Klart
