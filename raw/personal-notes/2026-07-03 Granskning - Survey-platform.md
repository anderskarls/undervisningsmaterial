---
created: 2026-07-03
updated: 2026-07-03
created_by: claude-fable-5
updated_by: claude-fable-5
agent_version: 04.26
type: reflection
tags: [survey-platform, granskning, kodgranskning, pedagogik, ux, säkerhet]
---

# Kritisk granskning av survey-platform (2026-07-03)

Trepersektivsgranskning (kod, pedagogik, UX) utförd av tre parallella granskningsagenter mot commit `b4890ff` (origin/main, i synk med prod på Vercel). Det allvarligaste fyndet verifierades manuellt.

**OBS: Denna rapport listar opatchade sårbarheter och ska inte committas till survey-platform-repot (som är publikt).**

---

## Sammanfattning

Appen är ovanligt väldesignad i sin kärna - behörighetskontrollerna sitter, ominlärningsalgoritmen är forskningstrogen och "Jag är inte säker"-designen är bättre än de flesta kommersiella plattformar. Men det finns ett akut fynd: **GitHub-repot är publikt, och den nya dagliga rapport-workflowen kommer committa elevdata dit.** Därutöver en handfull riktiga problem: dubblettinlämningar vid nätverkshickor, två motstridiga "behärsknings"-system, en gambar ominlärning, och att E/C/A-principen bara lever i användarens minne - inte i koden.

---

## 🔴 Akut: elevdata på väg till publikt GitHub-repo

Manuellt verifierat. `.github/workflows/daily-feedback.yml` kör varje skoldag kl 17 (cron `0 15 * * 1-5`) och gör `git add reports/ && git push`. Rapporten som genereras (`scripts/generate-daily-report.ts`) innehåller "Elev 3 svarade fel", elevers fritextsvar ordagrant, och listor över "Elever som kan behöva extra stöd". Repot `anderskarl929/survey-platform` är **PUBLIC**.

Läget vid granskningstillfället: **inga rapporter hade committats ännu** (`reports/` finns inte i något commit i historiken). Men workflowen är schemalagd och första lyckade körningen publicerar bedömningsdata om identifierbara elever (elevnummer + kurskod räcker för identifiering inom skolan) öppet och oåterkalleligt i git-historiken.

**Åtgärd:** inaktivera workflowen eller gör repot privat före nästa vardag kl 17. Låt rapporten levereras någon annanstans (mail, privat gist, Vercel blob) i stället för att committas.

---

## Kodperspektivet (topfynd)

1. **Rate limiting är en no-op i drift** (`src/lib/rate-limit.ts`) - in-memory på serverless Vercel, minnet nollställs mellan anrop. Admin-inloggningen (NextAuth Credentials) har ingen bromsning alls. Admin-lösenordet kan brute-forcas ostört.
2. **CSV-formelinjektion i exporten** (`src/app/api/surveys/[id]/export/route.ts:6`) - elevsvar som börjar med `=`, `+`, `-`, `@` blir formler i Excel. Elever kontrollerar innehållet.
3. **Ingen idempotens vid inlämning** (`respond/route.ts:93`) - dubbelklick eller retry efter timeout skapar två Response-rader som dubbelräknas i rapporter och mastery. Klienten visar dessutom "Kunde inte skicka" även när svaret gick in, så elevens naturliga retry skapar dubbletten.
4. **CSV-import kan tyst göra frågor orättbara** (`src/lib/csv.ts:32`) - om `correctAnswer` inte exakt matchar en options text (versaler, å/ä/ö) markeras inget alternativ som rätt; frågan poängsätts aldrig och hamnar aldrig i övningspoolen. Inget fel vid import.
5. **Buggig flervalsanalys i dagsrapporten** (`generate-daily-report.ts:258`) - matchar på options-ID men svaren lagras som text (`parseInt("Ja")` = NaN), så alla SURVEY-fördelningar visar 0.
6. Mindre: 30-dagars elev-JWT utan återkallning (kurs-ID inbakat, ingen koll att eleven finns kvar), osaltad SHA-256-fallback i lösenordsverifieringen (`auth.ts:12-34`), `prisma migrate deploy` med sleep-retries i buildsteget, survey-skapande verifierar inte att frågorna tillhör kursen, inga tester trots att `relearning.ts` är den mest buggkänsliga logiken.

**Verifierat, ej problem:** `mcp-server/.env` är korrekt gitignored (`.env*` matchar rekursivt). IDOR-skydden i student-routes är konsekventa och korrekta.

**Genuint bra:** behörighetsdisciplinen sitter överallt (varje route ägarskapskollar på rätt nivå); `relearning.ts` är en ren DB-fri testbar modul med korrekta intervall; sunt säkerhetshantverk där det räknas (konstanttidsjämförelser, bcrypt cost 12, `randomInt`/`nanoid` för koder).

---

## Pedagogiska perspektivet (topfynd)

1. **Ominlärningen kan gamas** (`relearning.ts:74`) - dagens utfall är *sista* försöket den dagen, och practice-API:et avvisar varken icke-due-frågor eller omförsök (returnerar dessutom `correctAnswer` vid fel). Elev kan svara fel, se facit, skicka nytt korrekt försök samma dag - streaken byggs utan verklig framplockning. Fix: räkna *första* försöket per dag (standard i relearning-litteraturen, nästan en enrading i `buildQuestionState`).
2. **Två motstridiga behärskningsmodeller.** Dashboardens progressbar drivs av gamla `mastery.ts` (2 rätt i rad, även samma sittning = massed practice) medan övningsvyn kräver 3 spacade dagar. Snabbaste vägen till grön bar är exakt det korttidsplugg spacing-forskningen dömer ut. Utpekat som v2-kandidat i eget designdokument (`docs/ovning/01-successiv-ominlarning.md`) - viktigaste pedagogiska skulden.
3. **"Öva igen" förorenar formativ data.** Omkörningar går via samma respond-endpoint och räknas in i momentrapportens svarsfördelningar (`units/[unitId]/report/route.ts:63-72`, flatMap utan dedupe per elev). Fix: räkna endast första response per elev i rapporter, eller styr om till PracticeAttempt-banan.
4. **"Jag är inte säker" krymper nämnaren** (`respond/route.ts:84,110`) - osäker på alla svåra + rätt på de lätta ger 100 %. Incitament att använda knappen som poängskydd. Fix: visa "X rätt, Y osäkra, Z fel av N".
5. **E/C/A-principen finns inte i koden.** Inga betygsbokstäver läcker idag, men momentrapporten instruerar Claude att producera E/C/A per elev (`report/route.ts:115`, `get-moment-report.ts:94`) och feedback-verktygens prompter (`give-feedback.ts:57`, tool-beskrivningar i `server.ts:289-357`) saknar spärr. Samma Claude-session genererar rapport och bulk-postar feedback - ett slarvigt varv och "du ligger på C-nivå" landar hos eleven. Fix: spärr i prompterna + regex-varning före skrivning.
6. **Facit utan förklaring.** Inget `explanation`-fält i datamodellen; eleven ser bara "Det rätta svaret: X". Elaborerad feedback ger bättre transfer (Hattie & Timperley; Butler). Låg kostnad: extra kolumn i AI-genererings-CSV:n.
7. **Facit visas omedelbart även i låst provläge** (`respond/route.ts:148`) - den som blir klar först kan sprida facit. Fix: vid lockMode, släpp resultaten först efter provfönstret.
8. **Övningspoolen tar aldrig in frågor eleven kunde från början, och aldrig fritext** - testing-effekten gäller även det man kunde; högre ordningens innehåll får ingen ominlärning. v2: stickprov aldrig-missade frågor med långt intervall; fritext som själv-förhör med facit-exempel.
9. **Streak kan byggas utan respekterat intervall** när skarpa quiz råkar innehålla poolfrågor täta dagar (due-logiken styr bara övningspasset). Lågprioriterat.
10. **Rött/stjärn-färgkodning på totalpoäng driver prestationsorientering** (`QuizResultsDisplay.tsx:41-50`, trösklar 80/50) - i kontrast till övningsvyns lärandeorienterade språk. Fix: neutral formatering + framåtriktad rad ("X frågor lades i din övningspool").
11. **Fritext-feedbackens prompt saknar uppgiftsfokus-styrning** - "Var uppmuntrande" utan precisering ger personberöm (nära noll effekt enligt feedbackforskningen). Skriv om till uppgifts-/processnivå med treledsstruktur. Byt även "🤖 AI-feedback"-etiketten till "Återkoppling" (redan rekommenderat i eget designdokument, ej genomfört).
12. **Fritextens kvalitetsutveckling är osynlig för eleven** - `Answer.feedback` saknar läst-spår, eleven får ingen notis när per-svar-feedback landar (endast AssignmentFeedback har `readAt`).

**Genuint bra:** algoritmkärnan forskningstrogen (kalenderdag = session, 3 spacade korrekta, expanderande intervall 1-2-4-28 dagar, miss nollställer) med explicita referenser i koden; transparens mot eleven ("rätt tre olika dagar - det är då minnet byggs på riktigt") är exakt vad implementationsforskningen efterlyser; disciplinerad gräns mot betygsmaskinen - handlingsbara lärarindikatorer, aldrig automatiska betyg, olåst elevväg med vänliga knuffar (SDT).

---

## UX-perspektivet (topfynd)

1. **Draft-inladdning kan radera det eleven just skrivit** (`StudentQuizForm.tsx:60-73`, samma i `SurveyForm.tsx`) - `setAnswers(loaded)` ersätter hela svarstillståndet när fetchen löser. Segt wifi + elev som börjar skriva direkt = gammalt utkast skriver över dagens svar. Fix: merga draften under befintliga svar (`{...loaded, ...prev}`).
2. **Tyst partiell inlämning** (`StudentQuizForm.tsx:134-141, 275-283`) - obesvarade frågor filtreras bort utan varning, en-fråga-i-taget-navigering utan översikt, "Skicka" aktiv efter en besvarad fråga. Fix: bekräftelsedialog "Du har 2 obesvarade frågor" + klickbara frågeprickar.
3. **Timeout + retry = dubblett** (samma rot som kodfynd 3). Felmeddelandet renderas dessutom högst upp medan eleven står vid knapparna längst ner på mobilen (`StudentQuizForm.tsx:241-245`; SurveyForm gör rätt).
4. **Återupptaget utkast startar alltid på fråga 1** - `currentStep` sparas inte, autosave debouncad 2 s utan flush vid unload. Fix: spara currentStep, hoppa till första obesvarade, `sendBeacon` vid visibilitychange.
5. **"Repetera" på avklarad uppgift redirectar tyst till dashboarden** (`quiz/[surveyId]/page.tsx:74-76` vs momentsidans Repetera-knapp) - eleven tror appen är trasig. Fix: "Alla frågor bemästrade"-vy med möjlighet att köra om.
6. **Låst läge räknar falska fusk-avvikelser** (`LockOverlay.tsx:68-70`) - varje window.blur (OS-notis, Teams-popup) registreras och visas för läraren; på iPhone failar fullscreen tyst. Fix: grace-period, skilj visibilitychange från blur, tona ner språket.
7. **Läraren kan inte redigera någonting** - frågor/enkäter har bara Skapa/Radera; stavfel i besvarad fråga kan bara fixas genom att radera frågan och alla elevsvar. Fix: PATCH-endpoint + redigeringsläge.
8. **Destruktiva raderingar skyddas bara av window.confirm** utan att visa antal elevsvar som försvinner (`_count.responses` finns redan i datat); bulk-radering kör N sekventiella DELETE.
9. **"Fortsätt"-knappen på momentsidan är dold på mobil** (`moment/[unitId]/page.tsx:300`, `hidden sm:inline-flex`) - elevernas primära enhet saknar huvudhandlingen.
10. **Kontrastbrister på bärande texter** - "Utkast sparat" i `--muted-light` (~2,5:1) är elevens enda kvitto på att svaren är säkra; `--warning` (~3,1:1) på småtext. Under WCAG AA.
11. **FlagButton misslyckas tyst** (ingen catch), saknar aria-pressed, sm-varianten under 44 px touchhöjd.
12. **Fritextsvar visas med grön styling** som kan tolkas som "rätt"; inget säger att läraren återkopplar senare.
13. **Feltoasts försvinner efter 4 sekunder** även för allvarliga admin-fel (`Toast.tsx:25-28`).
14. Språk: "dashboard" blandas med svenska rubriker i elev-UI:t; annars genomgående välskriven svenska.

**Genuint bra:** draft-systemet som helhet (serverpersistent autosave, synlig status, "Fortsätt"-badge, "Pågår 11/14") överlever siduppdatering och enhetsbyte; "Jag är inte säker" är pedagogiskt förstklassig UX med korrekt hantering i rättningen; practice-flödet och moment-tidslinjen kommunicerar på elevens nivå (streak-prickar, "Du är här", varm icke-anklagande ton) med solid a11y-bas (skip-link, aria-live, radiogroups, 1,5 rem-radioknappar).

---

## Prioriterad åtgärdslista

1. **Omedelbart:** inaktivera daily-feedback-workflowen eller gör repot privat (körs vardagar kl 17).
2. **Kort sikt (små ändringar, stor effekt på datakvalitet):**
   - Idempotensskydd i respond-endpointen (löser kod 3 + UX 3)
   - Draft-merge i stället för overwrite (UX 1)
   - "Första försöket per dag räknas" i relearning (ped 1)
3. **Nästa iteration:**
   - E/C/A-spärr i MCP-prompter och tool-beskrivningar
   - Varning för obesvarade frågor vid submit
   - Upstash/Vercel KV för rate limiting + rate limit på admin-login
   - `explanation`-fält på frågor + kolumn i genererings-prompten
   - Ena behärskningsmodellerna (låt relearning driva dashboarden)
   - CSV-escaping mot formelinjektion i exporten
   - Redigeringsläge för frågor/enkäter i admin

---

*Granskningen utfördes 2026-07-03 av tre parallella granskningsagenter (Claude Fable 5) plus manuell verifiering av det akuta fyndet. Kodbas: `anderskarl929/survey-platform` @ `b4890ff`.*
