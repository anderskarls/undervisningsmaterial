---
created: 2026-06-08
updated: 2026-06-08
created_by: claude-opus-4-8
updated_by: claude-opus-4-8
agent_version: 04.26
type: changelog
---

# CHANGELOG - Document Analysis 2026-06-08: The Bright Ages

## Källa

- **Bok:** Matthew Gabriele & David M. Perry, *The Bright Ages: A New History of Medieval Europe* (Harper, 2021).
- **Råfil:** `raw/books/The Bright Ages_ A New History of Medieval Europe - Matthew Gabriele, David M Perry.epub`
- **Extraktion:** `raw/books/The Bright Ages - extracted/` (28 kapitelfiler, 94 028 ord; brödtext kap. 3-21 ≈ 84 000 ord)

## Process

- **Trigger:** Användarbegäran "läs in en bok till wikin... börja med en av böckerna och mina hela boken". Boken vald (av tre kandidater) för exakt matchning mot momentet "Den mörka medeltiden" (Hi 1b).
- **EPUB-extraktion:** Ingen `ebook-mcp`, pandoc eller calibre tillgänglig. Egen Python-stdlib-extraktor skriven (`resources/epub_extract.py`) som läser OPF-manifest/spine och konverterar XHTML till markdown i läsordning.
- **Läsning:** Hela boken läst (inledning, 17 kapitel, epilog).
- **Diskussion:** Nyckelinsikter lyfta med användaren; inriktning "både innehåll och historiebruk" vald; "skapa allt nu" vald.

## Sidor skapade (24 atomära + denna changelog)

Sessionsmapp: `wiki/sources/2026-06-08 The Bright Ages/`

**Historiografiska teser (5):** [[rom-foll-inte-kontinuitet-som-tes]], [[morka-medeltiden-som-uppfunnen-myt]], [[periodisering-ar-ideologisk]], [[permeabilitet-den-uppkopplade-medeltiden]], [[det-ar-mer-komplicerat-an-sa-historikerns-hallning]]

**Mytspräckning - innehåll (5):** [[slaget-vid-tours-732-raddade-inte-europa]], [[vikingar-handlade-och-bosatte-inte-bara-rovade]], [[demokratin-ar-medeltida]], [[renassansen-byggde-pa-medeltiden-den-fornekade]], [[belisarius-kontrafaktiskt-540-rom-aterstallt]]

**Religion, korståg, våld (5):** [[forsta-korstaget-var-inte-forsvar-mot-islam]], [[apokalyps-betyder-avtackning-inte-slut]], [[just-war-vs-conpelle-intrare-vem-definierar-innanfor]], [[religion-som-praktik-inte-inre-tro]], [[manga-kristendomar-manga-islam-manga-rom]]

**al-Andalus och idéhistoria (3):** [[convivencia-och-reconquista-som-trubbiga-kategorier]], [[aristoteles-kom-via-islamiska-och-judiska-tankare]], [[religiosa-institutioner-bevarade-antikens-vetande]]

**Kön och makt (1):** [[kvinnors-agens-syns-nar-kallorna-las-noga]]

**Digerdöden (3):** [[digerdoden-var-500-ar-tre-kontinenter]], [[medeltida-vetenskapligt-resonemang-om-smitta]], [[syndabockstankande-judeforfoljelse-i-kris]]

**Källkritik och ras (2):** [[medeltida-kallor-ar-retorik-inte-fonster]], [[rasbegreppets-medeltida-rotter]]

## Ny MOC

- [[MOC - Medeltiden (innehåll och historiebruk)]] - ny domän (medeltidens sakinnehåll). Tröskeln 15+ sidor passerad i en enda ingest.

## Befintliga sidor uppdaterade (8, korslänkar + `updated`-bump)

- [[counterfactuals-tay-jeong-2025-specifierade-contrast-classes]] → belisarius
- [[historiebruk-moralisk-roll-kollektivt-minne]] → morka-medeltiden + MOC
- [[nordgren-2024-decolonize-history-eurocentrisk-kritik]] → morka-medeltiden + rasbegreppet
- [[sjolund-ahsberg-2024-tolerant-nation-narrativ-sverige]] → convivencia
- [[kontrovers-far-right-recruitment-sverige-discord-tiktok]] → morka-medeltiden + rasbegreppet
- [[fran-detektion-till-navigation-paradigmskifte]] → medeltida-kallor-retorik
- [[racial-capitalism-robinson-renassans]] → rasbegreppet
- [[laslista-medeltiden]] → MOC + morka-medeltiden

## Motsägelser

**Inga direkta motsägelser** mot befintliga wiki-sidor. Boken öppnar en ny domän (innehåll) som kompletterar didaktikdomänerna. Stark förstärkning av: historiebruk (Nordgren, Sjölund Åhsberg), källkritik och counterfactuals. **Notering:** Bright Ages är en uttalad tes; balanserande motvikt (Ward-Perkins, *The Fall of Rome*, finns som `.m4b` i raw/books) saknas ännu - flaggat som forskningslucka i MOC:en.

## Epistemisk status

Populärvetenskaplig syntes av två akademiska medeltidshistoriker. Speglar bred forskningskonsensus på de flesta punkter (kontinuitet, permeabilitet, digerdödens nya forskning via Monica Green), men bär också författarnas uttalade tolkande/politiska hållning (mot "clash of civilizations", mot vit makt-historiebruk). Varje sida markerar detta i `evidence-level`.

## Huvudtes

*Medeltiden var "ljus", inte "mörk" - inte i meningen problemfri, utan i meningen synlig, sammankopplad och mänskligt komplex. "Den mörka medeltiden" är ett historiebruk, en tom yta dit varje epok projicerar det den inte vill se. Att korrigera myten är både faktakunskap och ett konkret motgift mot rasideologisk historieanvändning.*
