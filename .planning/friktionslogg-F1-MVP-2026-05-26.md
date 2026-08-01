---
created: 2026-05-26
created_by: claude-opus-4-7
type: praxis-test-log
kurs: Hi Nivå 1b (GY25)
moment: Antiken — "Vad i antiken är värt att bevara som vårt arv, och vad behöver vi göra oss av med?"
---

# Friktionslogg — F1 MVP praxis-test (Hi Nivå 1b)

Notera friktion löpande under `/planera-moment`-körningen. Punkter formuleras tight nog att direkt översättas till SKILL.md-patcher.

## Observationer (löpande)

### [1.1-1.2] Ämne + kurs redan satt utanför skill-flödet
- **Vad hände:** Användare valde kurs via förfrågning innan dialogen startade. SKILL.md Steg 1.1-1.2 antar att skillen själv frågar.
- **Friktion-grad:** Mild
- **Patch-förslag:** Lägg en mening i 1.1: "Om kursen redan är känd (t.ex. via tidigare turn eller $ARGUMENTS), hoppa direkt till 1.3 och bekräfta."

### [1.5] Kursminne presenterat som hårda preferenser → läraren korrigerade
- **Vad hände:** Jag listade kursminnets innehåll som rena preferenser ("föredrar X", "vill alltid ha Y"). Läraren bröt in direkt och sa "bortse från målet med primärkälla för varje lektion" och "problembaserat lärande fungerar inte alltid".
- **Rot:** Kursminnesfilen själv hade generaliserat för hårt ("vill alltid ha primärkällor med", "föredrar problembaserat") — den är skriven som om varje observation = stående regel. SKILL.md säger bara "presentera kort" utan att kvalificera defaulternas tentativa status.
- **Friktion-grad:** Medium — bryter dialogflödet, läraren tvingas korrigera innan brottningsfrågan ens är ställd.
- **Patch-förslag (två lager):**
  1. **SKILL.md 1.5:** Ändra exempelfras från "Jag har minnen från tidigare moment ... Bland annat vet jag att du [1-2 viktigaste preferenserna]" till en form som signalerar *tentativ* default-status: "Tidigare moment i [kursnamn] visar mönster — t.ex. [1-2 saker]. Jag använder dem som **default men inte tvång** — säg till om något inte passar detta moment innan vi börjar."
  2. **`references/kursminne.md` (parkerat patch-spår):** Kursminnesformatet behöver en kolumn/markering för "stabil preferens" vs "moment-specifik observation". Att skriva "vill alltid" i historik-rad gör att framtida moment ärver hårdheten. Inte MVP-blockande men noteras.

### [1.5] Inget M-ii override-utlöst trots att läraren avvek från default
- **Vad hände:** Läraren avvek från två kursminne-defaults (primärkälla per lektion, PBL) men SKILL.md säger bara M-ii ska aktiveras på 1.7 och 1.8 (Hess-gate och frågetypologi). Avvikelser från kursminnes-defaults i 1.5 har ingen M-ii-prompt.
- **Friktion-grad:** Mild men strukturellt viktig — Princip 2:s kontextprimat säger att varje avvikelse från default ska kunna artikuleras. Om kursminnet räknas som default-källa, borde avvikelser från det också krävas motiverade?
- **Patch-förslag:** Klargör i SKILL.md (eller pedagogik-ramverk.md sektion 6): M-ii triggas på avvikelser från **defaults i ramverkets noder** (Hess, frågetyp, bedömningsmål, etc.) — INTE från kursminnes-preferenser. Kursminnet är *input* till defaultgenerering, inte en default i sig. Läraren ska fritt kunna avfärda kursminnesmönster utan kategori-2-5-prompt. → Detta är ett designbeslut som bör skrivas ut explicit.

### [1.6] Saknad skärpningsfas — vag kandidatfråga går direkt till klassificering
- **Vad hände:** Lärarens första kandidat ("Vad kan antiken lära oss om vårt liv idag?") var reflektivt sund men för bred för att driva 5-8 lektioners brottning. SKILL.md 1.6 har bara "Spara frågan ordagrant" + två stöd-frågor, och går sedan direkt till 1.7 Hess-gate.
- **Rot:** Skillen saknar ett **kvalitetsfilter på frågan innan klassificering**. Hess-gate testar *typ*, inte *brottnings-tryck*. En öppen-men-vag fråga klarar Hess men ger inte brottning.
- **Friktion-grad:** Medium-hög — utan skärpning hade momentet låsts på en luddig fråga och nedströms-defaults (bedömningsmål, lektionsstruktur) skulle ärvt vagheten.
- **Patch-förslag:** Ny delsektion **1.6.5 Skärpningsfilter** mellan 1.6 och 1.7. Tre tester:
  1. **Spänningstest:** Har frågan en inbyggd spänning (X *vs* Y) eller är den öppet undersökande? Om bara undersökande → föreslå skärpning med spänning.
  2. **Bärighetstest:** Kan frågan driva varje lektion i momentet, eller bara introducera momentet? Om bara intro → skärpa eller välja nedslagspunkt.
  3. **Defaults-genererings-test:** Om jag (skillen) inte kan ge en konkret default-Hess-klassificering med säkerhet eftersom frågan är för vag, då är den för vag.
  Om ett test fallerar: presentera 2-3 skärpningar enligt M-i (default + alternativ), be läraren välja innan 1.7.

### [1.7-1.8] M-ii-prompt + val i samma turn → otydligt vad som besvaras
- **Vad hände:** Jag formulerade både M-ii-kontextläsningsfråga ("kategori 5?") och en frågevalsprompt i samma turn. Läraren svarade med val, M-ii fick ingen explicit bekräftelse — jag fick anta kategori 5.
- **Friktion-grad:** Mild.
- **Patch-förslag:** SKILL.md 1.7-1.8: skilj M-ii-prompten från eventuell omformulerings-prompt i två turns, eller kräv ett explicit M-ii-svar innan frågevalet behandlas.

### [1.8] Frågetypologi tvingar enkelval på genuint blandade frågor
- **Vad hände:** Brottningsfrågan är fundamentalt etisk+disciplinär (eller disciplinär+etisk). Ramverket tillåter bara ett val. Läraren löste det genom att override:a default och välja disciplinär, men nedströms-konsekvensen (att etisk sekundär-axel finns) lever vidare implicit utan plats i designvalstabellen.
- **Friktion-grad:** Medium — ramverkets enkelval underspecificerar reella brottningsfrågor.
- **Patch-förslag:** Lägg fält "Sekundär frågetyp" i frågetypologi-noden. Kan vara tomt. Spårdokumentationsformatet (1.11) ska ha rad för primär + sekundär. Aktiverar nedströms-konsekvenser: bedömningsmål kan väva in båda; syntes-roll i nivå 4 kan adressera den sekundära.

### [1.10] "Bivinkel som överlagring" har ingen plats i ramverket
- **Vad hände:** Läraren valde Vinkel A som ryggrad + ville först ha Vinkel B som överlagring genom momentet. Senare korrigerade hen till "B sparas i kursminnet som framtida koppling". I bägge fallen saknar ramverket en explicit slot för bivinklar/överlagringar/återbesöksspår.
- **Friktion-grad:** Medium — designval läraren faktiskt gör fångas inte av ramverkets noder, dyker upp på fel ställe (kursminnet) eller försvinner.
- **Patch-förslag:** Ny valfri nod efter 1.10: **"Tvärgående trådar"** — bivinkel som löper genom momentet, eller framtida koppling till andra moment i kursen. Två sub-fält: *intra-moment* (vävs in genom momentet) och *inter-moment* (sparas i kursminnet för framtida väckning).

### [Mid-flight] Kursminne kan inte uppdateras mid-moment enligt SKILL.md
- **Vad hände:** Läraren bad mig "spara ner det i kursminnet" mitt i Steg 1. SKILL.md säger kursminnet uppdateras bara i Avslutning (steg efter 7). Jag bröt mot skillen och uppdaterade ändå — vilket var rätt mot lärarens intent men avvek från specifikationen.
- **Friktion-grad:** Medium — designintention från läraren riskerar tappas om kursminnet är låst tills slutet av momentet.
- **Patch-förslag:** SKILL.md bör tillåta **mid-flight kursminnes-uppdateringar** för explicit-instruerade saker ("spara detta i kursminnet"). Avslutningens uppdatering blir då en sammanfattning + utfyllnad, inte enda tillfället. Lägg ett notiskommando: när läraren säger "spara i kursminnet" → uppdatera direkt + bekräfta + dokumentera i momentplan.md.

### [2.4] Förutsättnings-lista har ingen leveranskontroll → cirkularitet kan uppstå
- **Vad hände:** Jag listade "grundläggande kännedom om antika samhällsformer" som förutsättning för L2-3, samtidigt som L2-3 är *just* lektionerna där samhällsformer behandlas. Läraren fångade cirkulariteten: "när ska eleverna tillskansa sig dessa kunskaper?"
- **Rot:** SKILL.md 2.4 begär att förutsättningar ska listas men har **ingen leveranskontroll** — ingen koppling till var/när varje förutsättning faktiskt levereras (förförståelse innan moment / tidig lektion i moment / ärvd från tidigare moment). Lärarens Princip 3 ("levereras i förväg") kan brytas oavsiktligt.
- **Friktion-grad:** Medium-hög — kunde lett till en momentdesign där L2-3 är dubbeluppgiftade (lära ny + spåra) och spårningsarbetet kvävs.
- **Patch-förslag:** Lägg en **leveranskolumn** i 2.4:s förutsättnings-tabell. För varje förutsättning, kräv att skillen pekar ut leveransplan (Förförståelse / L1 etablerar / Ärvd / Bygg-upp-under-momentet med kompromiss noterad). Om en förutsättning saknar leveransplan, eller om leveransplanen är "samma lektion som den används" → flagga som intern konflikt och be läraren välja designstrategi.

### [2.5] Principer refereras utan att packas upp
- **Vad hände:** Jag pratade om "Princip 3" upprepade gånger i Steg 2.4 och 2.5-dialogen utan att förklara vad principen säger. Läraren frågade rakt ut: "Kan du påminna mig vad princip 3 är". Med all rätta — jag hade tre stycken där principen togs för given.
- **Rot:** SKILL.md 2.5 säger bara "Bekräfta principen: *'Brottning väntar inte på att alla ska vara redo...'*" men i den löpande dialogen (i 2.4-prompts, i alternativens motiveringar) refereras principen utan ompackning. Skillen antar att läraren har principen aktivt i huvudet.
- **Friktion-grad:** Medium — för en lärare som planerar 4 moment per termin är detta antagande orealistiskt.
- **Patch-förslag:** SKILL.md ska aktivt **packa upp en princip första gången den nämns i en ny dialog-turn** (även om den nämnts tidigare i samma moment). Korta one-liners räcker: *"Princip 3 = förutsättningar levereras i förväg, elevens ansvar att tillägna sig."* Samma för Princip 1 och 2. Lägg också till en kort princip-kortlek i pedagogik-ramverk.md som skillen kan citera ordagrant istället för att paraphrasera.

## Vidare punkter
(fylls på)

## Sammanfattande mönster
(skrivs i slutet)
