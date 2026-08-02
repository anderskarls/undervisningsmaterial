# Bearbetning till läsmaterial

Procedur för att göra en hämtad DN-artikel till elevmaterial i markdown plus Arkiv-HTML. Körs automatiskt efter varje lyckad hämtning.

Sju steg. Detta är inte "gör texten lättare". Det är två bestämda operationer med experimentellt stöd, plus en stödapparat runt originalet, plus en kontroll som fångar den felmod som mätvärden missar.

---

## Varför just så här

Fyra fynd ur `wiki/sources/2026-07-28 Språkanpassning av texter/` styr designen. Läs dem om något nedan känns godtyckligt.

**Nyhetstext får bearbetas.** [[primarkallans-sprak-ar-studieobjektet]] avgränsar explicit: principen "sänk aldrig språknivån" gäller primärkällor, där språket är studieobjektet. För nyhetstext, lärobokstext och rapporter är språket transport, och bearbetning är en legitim avvägning. DN-artiklar hör till det senare fallet.

**Det som fungerar är röst och kausalitet, inte enklare ord.** [[rost-och-kausalitet-utraderade-andrasprakgapet]]: Reichenberg (2000) lät 833 elever läsa fyra versioner. Originalet gav lägst resultat för alla grupper. För versionen med både röst och utskriven kausalitet fanns **ingen signifikant skillnad kvar** mellan andraspråks- och förstaspråksläsare. Var för sig räckte ingen av operationerna.

**Ämnesbegreppen ska stanna.** [[reichenberg-forklarar-amnesbegrepp-byter-inte-ut-dem]]: "Däremot har inte de ämnesspecifika orden ersatts eftersom jag anser att det är viktigt att eleverna lär sig dem. I stället har dessa ord försetts med en förklaring." [[olvegard-amnesspraket-inte-svenskan-ar-troskeln]] visar varför: det är ämnesspråket som är tröskeln, inte svenskan.

**LLM-förenkling har en tyst felmod.** [[llm-forenkling-har-en-tyst-felmod]]: 14-20 procent av innehållsfrågorna blev obesvarbara ur automatiskt förenklad text, genom överradering. Förenklingsmått korrelerar inte med felen. Därför steg 5 nedan, och därför ligger tyngdpunkten på stöttning snarare än ersättning.

---

## Vad som får ändras och inte

| Får ändras | Ska aldrig ändras |
|---|---|
| Kanslisvenska, verbalsubstantiv, s-passiv | Ämnesbegrepp (*utsläppsrätt*, *civilrätt*, *civilskyddsmekanism*) |
| Ovanliga allmänspråkliga ord (*villebråd* → *djur*) | Text inom citattecken eller efter talstreck |
| Satsordning, för att sätta följden efter orsaken | Siffror, datum, procenttal, egennamn |
| Långa perioder som får delas | Sakinnehåll, inklusive det som talar emot artikelns vinkel |
| Vaga subjekt (*man*, *det*) → konkreta aktörer | Vem som påstår vad |

**Citatregeln är absolut.** Ett omskrivet citat tillskriver en verklig människa ord hen inte sagt. Behöver ett citat förklaras, sätt förklaringen bredvid, aldrig i stället.

**Att artikeln nämner motargument är sakinnehåll.** Nyhetstext bygger ofta motsättningar. Stryks den ena sidan för att korta ner har du inte förenklat utan tagit ställning.

---

## Steg 1 - Läs och kartlägg

Läs originalet i `raw/articles/` i sin helhet. Notera under läsningen:

- **Ämnesbegrepp** som en Sh1b- eller Hi1b-elev inte säkert kan. Skilj dem från ord som bara är ovanliga.
- **Det som tas för givet.** [[olvegard-amnesspraket-inte-svenskan-ar-troskeln]]: den underförstådda referensramen är en självständig svårighet vid sidan av språket. Aktörer, institutioner, konflikter och förkortningar som artikeln förutsätter att läsaren känner igen.
- **Orsakskedjan.** Vilka led påstår artikeln, och vilka mellanled hoppar den över? De överhoppade leden är kärnan i steg 3.
- **Extraktionsskräp.** Nyhetsbrevsrutor, avbrutna länkar där ett ord delats mitt itu, dubblerade bildtexter. Rensa dem ur den bearbetade versionen. Rör inte råfilen - `raw/` är immutabelt.

## Steg 2 - Bygg stödapparaten

Byggs före bearbetningen, eftersom den avgör vad bearbetningen behöver lösa.

**Kontextruta.** Tre till sex meningar om det artikeln tar för givet. Inte en sammanfattning av artikeln - då läser eleven bara den. Skriv det som behövs för att artikeln ska gå att förstå, och stanna där.

**Ordlista.** Ämnesbegreppen, förklarade i den betydelse artikeln använder. Fem till tolv poster. Ta med ord som *ser* bekanta ut men betyder annat i sammanhanget - de är farligast, eftersom eleven inte märker att hen missförstått.

**Läsprocedur.** [[metakognitiv-forkunskap-slar-amnesforkunskap]]: att aktivera metakognitiv förkunskap har effekt, att aktivera ämnesförkunskap har det inte efter kontroll för faktisk förkunskap. Skriv alltså inte "vad vet ni om EU?" utan procedurer: "leta efter vem som talar och vilka orsakssamband artikeln påstår finns". Den andra fungerar för eleven som inte vet något om EU.

Strukturera som innan, under och efter. Enligt [[lasstrategiundervisning-gynnar-svaga-lasare-mest]] ska strategierna vara **fördjupnings- och kontrollstrategier** - förutsäga, hitta luckor, sammanfatta, kontrollera egen förståelse. Ta **inte** med memoreringsstrategier: understrykning, återberättande och omläsning har inget samband med god läsförståelse, och understrykning är den eleverna ändå gör spontant.

## Steg 3 - Bearbeta texten

De två operationerna, som behöver varandra.

**Kausalitet.** Gör implicita orsakssamband explicita. Sätt ut *därför att*, *eftersom*, *vilket ledde till*, *trots att*, *så att*. Kasta om satsordning så att följden kommer efter orsaken. Skriv ut det mellanled originalet förutsätter att läsaren själv sluter sig till. Reichenbergs exempel ur *Nilens gåva*: bearbetningen **lade till** satsen "Då kunde inte jägare och samlare vara kvar där längre".

**Röst.** Tre komponenter:
- *Agency* - konkreta handlingsverb och namngivna aktörer i stället för passiver och vaga subjekt. "Företagen föreslås få rabatt" → "Kommissionen föreslår att företagen ska få rabatt".
- *Orality* - talspråkliga drag, dialogiskt tilltal, hellre fullständiga satser än satsförkortningar.
- *Connectivity* - synliggör vem som säger vad och hur påståendena förhåller sig till varandra.

**Ämnesbegreppen stannar i texten.** De förklaras första gången de dyker upp, i en inskjuten bisats eller en efterföljande mening, och finns dessutom i ordlistan. Byt aldrig ut dem.

**Förvänta dig en längre text.** Att skriva ut mellanled och förklara begrepp lägger till ord. [[lix-stiger-nar-texten-blir-begripligare]]: varje bearbetning som har stöd höjer LIX-värdet.

> **Blev bearbetningen kortare än originalet har du sannolikt raderat, inte bearbetat.** Gå tillbaka och kontrollera vad som försvann.

**Använd aldrig LIX för att utvärdera bearbetningen.** Måttet ser meningslängd och ordlängd, inte om orsakssambanden finns kvar. Det pekar systematiskt åt fel håll här.

## Steg 4 - Skriv filen

Till `output/lasmaterial/`, aldrig till `raw/`. Bearbetningen är en artefakt, inte en källa. Samma datum-slug som råartikeln så att paret går att hitta. Mall: `mall-lasmaterial.md` i samma mapp som denna fil.

### Märkning för Arkiv-HTML

Markdownfilen är sanningskällan; HTML-versionen genereras ur den i steg 6. Använd därför Arkivs betoningsverktyg redan när du skriver bearbetningen. Alla fyra är Obsidian-native och ser rimliga ut även i markdown.

| Skrivs | Blir i HTML | Använd på |
|---|---|---|
| `==text==` | Ockermarkering | Kausalkonnektiver och utskrivna mellanled - alltså precis det bearbetningen tillför |
| `__text__` | Bordeauxunderstruken | Nyckelmeningen i ett avsnitt, särskilt där artikeln byter perspektiv |
| `**text**` | Fet | Siffror och namn som ska gå att hitta igen |
| `*text*` | Kursiv | Uttryck som citeras eller diskuteras som uttryck |

Håll Arkivs egen regel: högst fem betonade ord per stycke. Markerar du allt markerar du ingenting.

**Marginalglossor** skrivs som en egen rad direkt efter det stycke de hör till:

```
» Mellanledet | Den här förklaringen står inte i originalet. Där förutsätts du sluta dig till den själv.
```

De ämnesbegrepp som står i ordlistan markeras automatiskt vid sin första förekomst och får gloss utan att du gör något. Skriv egna `»`-glossor för sådant ordlistan inte täcker: att ett mellanled är tillagt, att två förklaringar står mot varandra, att ett citat är någons påstående och inte artikelns.

## Steg 5 - Obesvarbarhetstestet

Kontrollen som fångar överradering. Bygger på metoden i Agrawal och Carpuat (2024), se [[llm-forenkling-har-en-tyst-felmod]].

1. Formulera **sex innehållsfrågor på originalet**. Inte på bearbetningen - då testar testet ingenting. Frågorna ska täcka: två sakuppgifter (vem, vad, hur mycket), två orsakssamband, en detalj långt ned i texten, ett påstående som talar emot artikelns huvudvinkel.
2. Besvara var och en **enbart** ur den bearbetade versionen. Tredje svarsalternativet "går inte att besvara" måste vara tillåtet, annars fångar testet inget.
3. **Varje obesvarbar fråga är överradering.** Återställ det som saknas och kör om testet.
4. Redovisa resultatet i filen. Läraren ska kunna se att kontrollen gjordes, inte lita på att den gjordes.

Faktarutor räknas som text. Siffrorna i dem är ofta det enda konkreta underlaget i artikeln.

## Steg 6 - Bygg HTML-versionen

```bash
python3 .claude/skills/hamta-dn-artikel/bygg-html.py "output/lasmaterial/<fil>.md"
```

HTML:en genereras ur markdownen och skrivs bredvid den med samma namn. **Skriv aldrig HTML för hand** - då finns texten på två ställen och versionerna glider isär vid första rättelsen. Ändrar du bearbetningen, kör om scriptet.

Sidan ger två saker markdownen inte kan:

- **Växeln "Med stöd / Originalet".** Båda versionerna ligger på samma plats och byts med ett knapptryck. Det gör fadingen i steg 7 till något eleven kan göra själv.
- **Marginalglossor** i högermarginalen på stora skärmar, infällda under sitt stycke på telefon.

Designen ligger i `arkiv-lasmaterial.css` bredvid scriptet. Ändra utseendet där, aldrig i Python och aldrig i den genererade filen.

Kontrollera efteråt att `==`- och `»`-märkningarna slog igenom. Är antalet `<mark>` noll har du sannolikt glömt betoningsverktygen i steg 3.

## Steg 7 - Notera fadingen

[[reverse-cohesion-och-expertise-reversal-samma-mekanism]]: hög kohesion hjälper läsaren med låga förkunskaper och kan skada den med höga. Kohesion är scaffolding inbyggd i texten, och scaffolds ska plockas bort när schemat är byggt. Att ge samma elev den bearbetade versionen hela läsåret är samma fel som att aldrig fada worked examples.

Filen ska därför bära en rad om detta i sidfoten. Det är en påminnelse till läraren, inte en instruktion till eleven.

---

## Epistemisk hederlighet

[[den-direkta-jamforelsen-saknas]]: ingen har jämfört förenklad text utan stöttning mot originaltext med stöttning, med gymnasieelever i ett ämnesklassrum. Effektstorlekarna i fältet är små och kortsiktiga, och Reichenbergs studie är från 2000, gjord i årskurs 7, aldrig replikerad på gymnasiet.

Den här proceduren är alltså en välgrundad konstruktion, inte ett bevisat recept. Skriv inte i elevmaterialet, och inte till kollegor, att "forskningen visar" att den fungerar.
