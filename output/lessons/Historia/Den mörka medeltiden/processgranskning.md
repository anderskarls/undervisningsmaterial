---
created: 2026-06-10
updated: 2026-06-10
created_by: claude-fable-5
agent_version: 04.26
type: processgranskning
moment: Den mörka medeltiden
---

# Kritisk granskning: autonom körning av /planera-moment (v0.7.0)

Granskningen bygger på en komplett autonom körning 2026-06-09/10 (alla 7 steg + avslutning, beslutslogg fördes löpande). Perspektivet är dubbelt: hur väl fungerade **skillen som processdesign**, och vad avslöjade **autonomläget** som dialogläget döljer?

## Vad som fungerade väl

**1. Wiki-integrationen (1.5.5) var körningens enskilt viktigaste mekanism.** Utan den hade momentet fått fel namn, fel fråga och tunnare innehåll: mitt första mappnamnsbeslut (B0.2, "Medeltiden") byggde på avsaknad av momentmappar - wiki-uppslaget avslöjade att läraren redan definierat momentet ("Den mörka medeltiden", begreppet som studieobjekt, trepartsdebatten som färdig SAC) via fem bokingester gjorda dagen före. Att skillen lägger wiki-uppslaget FÖRE root-frågan är exakt rätt ordning. Detta är LLM-Wiki-mönstret när det fungerar som tänkt: planeringen skördade en kunskapsbas som ackumulerats för ändamålet.

**2. Ramverkets beslutskedja producerar verklig koherens, inte bara dokumentation.** Kedjan syntes spårbart i materialet: disciplinär frågetyp (1b) → tolknings-bedömningsmål (nivå 2) → dess syntes-DNA låste diskursmålet (nivå 5) → SAC-formen → steelman-exit ticket i L9 → examenskravet "starkaste invändningen mot din egen tolkning". Det är constructive alignment på mekaniknivå - varje nedströmsval kunde härledas ur uppströmsbeslut. Låsningskontrollen (att bedömningsmål kan låsa diskursmål) är en ovanligt sofistikerad detalj.

**3. Exit ticket-slingan som arkitektur.** Kravet att varje exit ticket mäter rollens exit + informerar nästa retrieval-öppning + fungerar som gate före brottning gav en formativ struktur som annars brukar bli efterhandskonstruktion. L8-gatens koppling till SAC-gruppindelningen är konkret användbar.

**4. Anti-hallucineringsdisciplinen höll - och gjorde mer än väntat.** [VERIFIERA]-regeln + citatförbudet ledde till att en subagent UPPTÄCKTE att lärarens egen anteckning pekade fel (Cecelia Penifader finns inte i World Societies kap. 14, bara i litteraturlistan via Bennett). Källkompendiet (L6) byggdes uteslutande på utdrag NotebookLM faktiskt återgav; hagiografi-stationen blev öppet deklarerat referat när ordagrant utdrag saknades. 27 [VERIFIERA]-taggar totalt är en rimlig ärlighetsnivå för 40+ artefakter.

**5. Återupptagande-sektionen räddade körningen.** När utgiftsgränsen dödade två agenter mitt i steg 5 fungerade exakt det skillen föreskriver: inventera disk mot checklistan, identifiera rest, fortsätt. Att skillen är designad för avbrott visade sig vara kritiskt även inom EN session.

**6. Progressiv referensladdning.** Orchestrator + stegfiler som laddas vid behov höll kontextkostnaden nere genom 7 steg. Utan den designen hade autonom helkörning inte rymts.

## Brister och friktion

**1. Kursminnet existerade inte - trots att Antiken-momentplanen påstår att det skrevs.** Antikens plan (2026-05-26) säger "Vinkel B sparad i kursminne", men `_kursminne/` var tom. Antingen kördes aldrig Avslutningen, eller fallerade skrivningen tyst. Konsekvens: Antikens inter-moment-tråd hade varit FÖRLORAD om jag inte läst Antiken-planen direkt (improviserad kursminnes-ersättning). **Patch:** (a) återupptagande-kontrollen bör verifiera att kursminnesfil finns när äldre momentplaner refererar till den, (b) Avslutningen bör bekräfta skrivningen explicit. Minnesarkitektur som inte verifierar sina skrivningar ackumulerar tysta dataförluster.

**2. Steg 5c:s CLI-beroende är skört på tre sätt.** (a) `notebooklm doctor` gav falskt positiv - cookienärvaro rapporteras som Auth pass trots att cookien är död; gaten släppte igenom en körning som sedan kraschade. (b) Enda återhämtningen är interaktiv inloggning - omöjlig autonomt, irriterande även i dialog. (c) MCP-servern kan generera video (verifierat - tre videor klara) men skillen nämner inte MCP-fallbacken, och MCP saknar download så completion-checklistans "nedladdade som .mp4" kan inte uppfyllas utan manuellt steg. **Patch:** dokumentera MCP-vägen som fallback i steg 5c, gör mp4-nedladdning till uttryckligt lärarsteg när CLI saknas, rapportera doctor-buggen uppströms till notebooklm-py.

**3. Skillen saknar autonom mod - och praktiska fakta frågas aldrig samlat.** Dialogtvånget ("Gå ALDRIG vidare utan godkännande") är rätt default men har ingen definierad batch-/autonomväg; denna körning fick improvisera ett beslutslogg-protokoll. Värre: klasstorlek (behövs för formvalsprincip 2), lektionsdatum (behövs för steg 7 och spacing-formeln i 5b), vilken klass/vilka klasser (behövs för 5b-exporten) frågas sent, utspritt eller aldrig. I autonomläge blev det [VERIFIERA]-antaganden och platshållare. **Patch:** ett "praktiska fakta"-block i steg 1 (klass(er), storlek, datumserie, sal) + en formell autonom mod vars kontrakt är: följ defaults, logga varje beslut, flagga allt ovaliderat.

**4. Produktionsvolymen saknar vägledning.** Steg 5-6 producerar ~50 filer. "En lektion i taget med godkännande" är orealistiskt som enda mönster - det betyder 20+ dialogvändor. Denna körning delegerade till subagenter via en produktionsbrief (momentdesign + stilregler + kvalitetschecklista i en fil som varje agent läser), vilket fungerade väl: jämn kvalitet, parallellism, ~100-200k tokens/lektion. **Patch:** dokumentera brief-mönstret som skillens skalningsväg, med central stickprovskontroll (em-dash-grep, exit ticket-läckage, frontmatter) som kvalitetsgolv.

**5. Kunskap som bara finns i användarminnet, inte i skillen.** Regeln "exit tickets aldrig i elevarbetsblad" kom från Claude-minnet (`feedback_exit_tickets_i_appen`), inte från någon stegfil. En körning på en maskin utan det minnet hade tryckt exit tickets i arbetsbladen. **Patch:** flytta in regeln i steg 5a-referensen (och generellt: lärarens stående regler hör hemma i skillen/kursminnet, inte i agentens privata minne).

**6. Flera-klasser-per-kurs-frågan är odokumenterad i 5b.** Hi 1b läses av MEK24B och MEK24C; exporten gick till kurs 1 (MEK24B) och MEK24C står utan quizzar. Referensen nämner inte valet alls. **Patch:** 5b bör fråga "vilka klasser?" och stödja export till flera kurser.

**7. Levande artefakter saknar ägare.** Triadmatrisen är momentets bärande mekanik men byggs av klassen under 7 lektioner - ett dokument som ingen artefakt FÖRVALTAR (positionskorten i L9 och examen refererar den som färdig). **Patch:** skillen kunde märka sådana "levande artefakter" i momentplanen med underhållsansvar per lektion (nu löst ad hoc i lärarinstruktionerna).

**8. Mindre redundansrisker.** M-i-M-iv beskrivs i tre filer (drift-risk vid patchar); steg-5-filen upprepar delar av lektionsplanering.md; sekundär-typ-fältet (patchat efter Antikens friktionsnotering - bra!) visar att loopen skill-friktion → patch fungerar, men det finns ingen systematisk plats där friktionsnoteringar samlas (Antikens låg inbäddad i momentplanen).

## Incidenter utanför skillens kontroll (men relevanta för robusthet)

- **Månatlig utgiftsgräns** dödade 2 av 3 agenter i steg 5-batch 3; examination.md hann skrivas, docx:en inte. Restproduktion dagen efter, idempotent. Lärdom: skriv md före docx (agenterna gjorde rätt ordning av en slump - värd att kodifiera i briefen).
- **NotebookLM-auth** krävde tre om-autentiseringar under en körning (MCP-cookies kortlivade). `notebooklm-mcp-auth` med sparad Chrome-profil fungerade headless varje gång - duglig, men varje stegfil som rör NotebookLM borde nämna den.
- **Användaravbrott** av L3-presentationsagenten - filen var redan komplett skriven; disk-verifiering före omkörning undvek dubbelarbete.

## Sammantaget omdöme

Skillen är ovanligt mogen som pedagogisk processdesign: beslutsträdet ger spårbar koherens från brottningsfråga till examenskrav, wiki/NotebookLM-arbetsfördelningen är rätt tänkt, och evidensprinciperna (retrieval, elevaktiv tid, exit tickets, pretesting, specificitetslagen) är operationaliserade snarare än deklamerade. Svagheterna är nästan alla **infrastrukturella**: tysta skrivfel (kursminnet), sköra externa beroenden (CLI-auth), odefinierat autonomläge och saknad skalningsväg för produktionsvolymen. Inget av detta kräver omdesign - det är patchbara kanter på en fungerande kärna.

**Prioriterade patchar (förslag till momentplanering-pluginen):**
1. Praktiska fakta-block i steg 1 (klasser, storlek, datum) - åtgärdar 3 nedströmsproblem på en gång
2. Kursminnes-verifiering (återupptagande + avslutning)
3. Exit ticket-regeln in i steg 5a-referensen
4. MCP-fallback + ärlig video-checklista i steg 5c
5. Autonom mod med beslutslogg-protokoll (denna körnings improvisation som spec)
6. Produktionsbrief-mönstret som dokumenterad skalningsväg för steg 5-6
