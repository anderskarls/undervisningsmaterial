---
name: deep-research
description: Autonom forskningspipeline - beställer forskningsöversikter, extraherar dem till atomära wiki-noter och kopplar in dem i wikin. Använd när användaren vill utreda en pedagogisk eller ämnesmässig fråga på djupet, säger "deep research", "utred", "vad säger forskningen om", eller vill fylla en kunskapslucka i wikin. Kan också välja ämne själv utifrån vad som undervisas just nu.
argument-hint: '[ämne, eller "auto" för självvald inriktning]'
automation: gated
allowed-tools: Task, Read, Write, Bash, Glob, Grep
---

# Deep Research

Tre steg som var för sig finns som egna skills, körda i följd med resultatet från det ena som indata till det andra: **research → extraktion → inkoppling**. Slutprodukten är inte en rapport utan ett antal wiki-noter som hänger ihop med resten av wikin.

Rapporterna är mellanled. De sparas, men de är inte det som ackumuleras.

**Indata:** `$ARGUMENTS`

## Två lägen

**Riktat läge** - användaren anger ämne. `/deep-research "formativ bedömning i historia"`.

**Autonomt läge** - `$ARGUMENTS` är tomt eller `auto`. Du väljer ämne själv enligt avsnittet nedan.

---

## Fas 1: Ämnesval och avgränsning

### Riktat läge

Ämnet är givet, men det ska skärpas innan det går vidare. Två frågor avgör hela sessionens värde:

1. **Vad är den egentliga frågan?** "Formativ bedömning" är ett ämne, inte en fråga. "Håller formativ bedömning i historia när betygssättningen är summativ och ämnesbetyg gäller?" är en fråga. Frågan går att ha fel om; ämnet gör det inte.
2. **Har användaren redan en hållning?** Om ja - formulera uppdraget som en **prövning** av den, inte en bekräftelse. Sök i wikin och i minnet efter vad som redan är etablerat, och instruera forskningsagenterna att aktivt leta efter evidens som talar emot.

Detta är sessionen från 2026-07-28 om språkanpassning värd att härma: användaren hade en dokumenterad hållning, båda agenterna instruerades att pröva den, och resultatet blev att hållningen **preciserades** i stället för att bekräftas. En bekräftande session hade varit värdelös.

Stäm av avgränsningen med användaren om frågan kan läsas på flera sätt som skulle ge olika research.

### Autonomt läge

Läs, i den ordningen:

```bash
cat index.md
tail -80 log.md
cat output/planering/aktivt.md
```

`index.md` visar vad wikin täcker och vilka MOC-kandidater som ligger och väntar. `log.md` visar vad som nyligen gjorts och vad som lämnades öppet - de sista entryna innehåller ofta ett uttalat "kvarstående". `aktivt.md` visar vad som faktiskt undervisas den här veckan, vilket är den starkaste signalen om vad som skulle vara till nytta.

Välj 1-3 ämnen som uppfyller minst ett av:

- **Ansluter till ett aktivt moment** - forskning som kan användas den här terminen slår forskning som är intressant i allmänhet
- **Fyller en flaggad lucka** - `log.md` och lint-rapporter i `meta/changelogs/` namnger dem
- **Prövar något etablerat** - en wiki-sida som vilar på en enda källa, eller en hållning som aldrig utsatts för motevidens
- **Binder ihop mekanismlagret med innehållslagret** - hur människor lär sig, mot vad som undervisas

Redovisa valet med motivering innan du sätter igång. Detta läge är `automation: gated` - användaren ska kunna säga ifrån.

---

## Fas 2: Research

Datum för sessionsnamn och filnamn:

```bash
date '+%Y-%m-%d'
```

Starta Task med `subagent_type='research-specialist'` per delfråga. Agenten känner vaultets källbild, aktualitetsregler och rapportform - upprepa inte dem i prompten. Ge den i stället det den inte kan veta:

```
ÄMNE: [den skärpta frågan]

BAKGRUND: [vad wikin redan har, med sidnamn - så att rapporten kan
prövas mot det befintliga i stället för att upprepa det]

HÅLLNING SOM SKA PRÖVAS: [användarens position, om det finns en.
Sök aktivt efter evidens som talar emot den.]

DELFRÅGOR:
1. [...]
2. [...]

SPARA SOM: resources/research/[amne-slug]-YYYY-MM-DD.md
```

**Flera spår när ämnet är brett.** Sessionen om AI i lärararbetet delades i fem spår - fack, policy, nätverk, fortbildning, Norden - och kördes parallellt. Att spåren var oberoende var poängen: när fem agenter som inte läst varandras rapporter landar i samma mönster är det ett starkt fynd. Dela på **aktör eller perspektiv**, inte på delämne, om du vill ha den effekten.

Kör sekventiellt i stället när ett spår behöver bygga på ett annat.

Kontrollera varje rapport innan den går vidare: har den årtal på fynden, effektstorlekar där de finns, ett avsnitt om vad som inte hittades, och något som talar emot? Saknas motevidens helt, skicka tillbaka agenten på den frågan.

---

## Fas 3: Extraktion

Sessionsmapp: `wiki/sources/[YYYY-MM-DD Ämne på svenska]/`.

Starta Task med `subagent_type='document-insight-extractor'` per rapport - parallellt när spåren är oberoende. Agenten kan notformatet, evidensmarkeringarna och dedupliceringen. Ge den:

```
KÄLLA: resources/research/[filnamn]
SESSIONSMAPP: wiki/sources/[YYYY-MM-DD Ämne]

BEFINTLIG TÄCKNING: [wiki-sidor som ligger nära, med namn - läs dem
innan du skriver, både för att undvika dubbletter och för att kunna
flagga när källan motsäger dem]

SÄRSKILT EFTERSÖKT: [negativa fynd, preciseringar, motsägelser mot
wikin - det som gör sessionen värd mer än en sammanfattning]
```

Kör flera extraktorer mot samma sessionsmapp bara om rapporterna är tydligt åtskilda. Annars skriver de dubbletter av varandra, eftersom ingen av dem ser den andras noter under körningen.

Kontrollera efteråt:

```bash
ls wiki/sources/[SESSIONSMAPP]/ | wc -l
grep -L "^type:" wiki/sources/[SESSIONSMAPP]/*.md
```

Andra kommandot ska ge tom output - alla filer ska ha frontmatter.

---

## Fas 4: Inkoppling

Indexet måste byggas om först, annars är de nya noterna osynliga för sökningen:

```bash
./resources/local-brain-search/run_index.sh
```

Starta sedan Task med `subagent_type='connection-finder'` mot sessionsmappen:

```
SESSIONSMAPP: wiki/sources/[YYYY-MM-DD Ämne]

FOKUS: [de fynd som verkar ha störst räckvidd utanför sitt eget ämne]

SÖK SÄRSKILT: broar mellan mekanismlagret och innehållslagret, och
motsägelser mot befintliga sidor.
```

Agenten skriver in kopplingarna i noterna, uppdaterar topic-sida och `index.md`, och lägger changelogen i `meta/changelogs/`.

**Verifiera att länkarna landar** när agenten är klar:

```bash
grep -oh "\[\[[^]]*\]\]" wiki/sources/[SESSIONSMAPP]/*.md | sort -u | \
  sed 's/\[\[//;s/\]\]//' | while read -r l; do
    f=$(printf '%s' "$l" | sed 's/|.*//;s|.*/||')
    find wiki output raw -name "$f.md" -print -quit | grep -q . || echo "SAKNAS: $l"
  done
```

Länkar till sidor som inte finns är tillåtna och markerar framtida sidor. Men de ska vara **avsiktliga**. Träffar listan något som uppenbart är en felstavning av en befintlig sida, rätta det.

---

## Fas 5: Syntes och bokföring

### Sessionssyntes

Om sessionen körde flera spår: skriv en syntes **tvärs över** dem, inte en sammanfattning av vart och ett. Den ska svara på tre frågor:

1. **Vilka mönster återkommer i flera spår oberoende av varandra?** Ett mönster som tre spår landar i utan att citera varandra är sessionens starkaste fynd.
2. **Var motsäger spåren varandra?** Redovisa motsägelsen **och asymmetrin i evidenskvalitet**. En RCT och en konferensslutsats är inte två jämbördiga positioner, och det ska stå.
3. **Vad ändrar detta i vad användaren gör?** Konkret, för historia eller samhällskunskap på svenskt gymnasium.

Sparas som `meta/changelogs/SESSION SUMMARY - Deep Research [Ämne] YYYY-MM-DD.md`.

Vid en enda rapport räcker extraktionens changelog - skriv ingen syntes för sakens skull.

### Bokföring

Fyra ställen, alla obligatoriska:

| Fil | Vad som skrivs |
|-----|----------------|
| `index.md` | Nya sidor i rätt domänsektion, statistiken i frontmatter uppdaterad, MOC-kandidat noterad vid 15+ noter |
| `log.md` | Entry `## [YYYY-MM-DD] deep-research \| [Ämne]` i prosa - huvudfyndet, det som förvånade, det som kvarstår. Se de senaste entryna för tonen |
| `CHANGELOG.md` | Kort sessionsentry |
| `meta/changelogs/` | Connection-changelogen (av agenten) och syntesen |

### Rapport till användaren

Kort, i löptext:

- Huvudfyndet i två meningar
- Vad som ändrade eller preciserade något som redan stod i wikin
- Motsägelser som lämnades öppna
- Sökväg till sessionsmappen, plus `xdg-open` på den
- Vad som inte gick att svara på

---

## Sökvägar

Alltid dessa. Skillen refererade tidigare fyra mappar som inte finns i det här vaultet.

| Vad | Var |
|-----|-----|
| Forskningsöversikter | `resources/research/` |
| Extraherade noter | `wiki/sources/[YYYY-MM-DD Ämne]/` |
| Extraktionens changelog | i sessionsmappen |
| Connection-changelog och syntes | `meta/changelogs/` |
| Graduerade begrepp | `wiki/concepts/` (via `/graduate-insights`, inte här) |
| Topics och MOC:er | `wiki/topics/` |
| Innehållskatalog | `index.md` |
| Operationslogg | `log.md` |

---

## När något går fel

**Rapporten är tunn.** Fältet kan vara genuint tomt - det är ett fynd och ska skrivas som en not, inte döljas. Bredda annars sökningen till angränsande discipliner eller till internationella källor och översätt till svensk kontext.

**Extraktionen ger mest dubbletter.** Ämnet var redan täckt. Byt riktning mot det som faktiskt är nytt - preciseringar, motevidens, gränsfall - i stället för att skapa varianter av det som finns.

**Inkopplingen hittar nästan inget.** Två möjligheter, och de ska skiljas åt: ämnet är nytt för wikin, eller sökningen utgick från den nya notens vokabulär i stället för den befintligas. Sök om från den befintliga sidans ord innan du drar slutsatsen.

**En fas misslyckas.** Fortsätt med de övriga, leverera delresultat och skriv i loggen vad som saknas. En halv session som säger att den är halv är användbar.

---

## Checklista

- [ ] Frågan skärpt till något som går att ha fel om
- [ ] Motevidens aktivt eftersökt, och resultatet av den sökningen redovisat
- [ ] Rapporter i `resources/research/` med årtal och evidenstyp på fynden
- [ ] Sessionsmapp i `wiki/sources/` med frontmatter på varje not
- [ ] Hypoteser och egna resonemang markerade som sådana i texten
- [ ] Index ombyggt före inkopplingen
- [ ] Kopplingar inskrivna i noterna, ömsesidigt
- [ ] Wikilänkar verifierade mot disk
- [ ] Motsägelser flaggade, ojämkade
- [ ] `index.md`, `log.md`, `CHANGELOG.md` uppdaterade
