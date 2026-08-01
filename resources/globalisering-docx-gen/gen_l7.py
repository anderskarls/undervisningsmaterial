"""Generate lektion-7.docx + elevuppgift-lektion-7.docx — IMF-versionen (2026-05-07 revidering)."""

import sys
sys.path.insert(0, "/home/anders/Second brain/resources/globalisering-docx-gen")

from docx_helper import (
    make_document, add_title, add_h1, add_h2, add_h3,
    add_para, add_rich_para, add_bullet, add_table, add_infobox, add_page_break
)

# =================== LEKTIONSPLAN ===================

OUT_PLAN = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/lektion-7.docx"

doc = make_document("Lektion 7 | Sida ")
add_title(doc, "Lektion 7: IMF och Mileis Argentina — när lånet kommer med villkor",
          "Lärarens lektionsplan — Samhällskunskap 3")

add_table(doc, [
    ["Kurs", "Samhällskunskap 3 (SAMSAM03)"],
    ["Moment", "Globalisering — Från vardag till världssystem"],
    ["Lektionslängd", "80 minuter"],
    ["Position i momentet", "7 av 8 — institutionsdjupdyk 2 av 2 (IMF)"],
], col_widths_cm=[5.0, 11.0])

add_h1(doc, "Syfte")
add_para(doc,
    "Konkretisera IMF som institution genom att analysera Argentinas senaste låneprogram "
    "(april 2025: 20 miljarder USD) och vad det betyder för en pensionär i Buenos Aires. "
    "Eleverna möter Alicia Ceresoli — 80 år, vars pension blivit utarmad efter Mileis "
    "åtstramningar — och Sonia Alesso — generalsekreterare för CTERA, Argentinas största "
    "lärarfack, som ledde nationell lärarstrejk februari 2025 mot reformer kopplade till "
    "IMF-villkoren. Lektionen tillämpar Held + Wallerstein på en institution som lånar ut — "
    "efter L6:s institution som skriver regler. Tillsammans visar L6 och L7 globaliseringens "
    "arkitektur: WTO sätter handelsreglerna, IMF villkorar nationell ekonomi. Bygger bron "
    "till L8: när institutionen är vår egen (EU) — vad ändras då?"
)

add_h1(doc, "Lärandemål som adresseras")
add_bullet(doc, "LM 1 — Tillämpa Held + Wallerstein på en internationell institution. Se vad teoriernas styrkor/svagheter blir när ramverket flyttas från regelmakt (L6) till långivarroll.")
add_bullet(doc, "LM 2 — Flerskalanalys: en pension (mikro: Alicias ekonomi i Buenos Aires) → ett låneprogram (makro: 20-miljarders-avtalet) → konsekvenser för ett samhälle (lärarstrejker, pensionärsprotester, fattigdomsökning).")
add_bullet(doc, "LM 4 — Värdera motstridiga ståndpunkter: IMF/Mileis stabiliseringsargument vs. CTERA/civilsamhällets sociala-kostnads-argument.")

add_h1(doc, "Förberedelse")
add_bullet(doc, "Läs L6:s exit ticket-svar (\"Är WTO en institution som driver globalisering eller som förhandlar dess konsekvenser?\") och sortera i tre högar: (1) driver, (2) förhandlar, (3) båda. Datan styr fas 1.")
add_bullet(doc, "Skriv ut 22 st arbetsblad (elevuppgift-lektion-7.docx).")
add_bullet(doc, "Projektorbilder: Argentinas pensionärs köpkraft 2023 → 2025 (chock-öppning); worked example-modellering på Alicia Ceresoli; Argentina-IMF-tidslinje (1956 → 2018 Macri → april 2025 nytt avtal).")
add_bullet(doc, "Tavelyta: tre kolumner — aktörer / villkor / konsekvenser.")
add_bullet(doc, "Post-it för exit ticket.")
add_bullet(doc, "Lärarens egna närläsning av Ceresoli-citatet före lektion: \"Jag saknar lukten av nya skor.\" — vad gör ordet lukten? Vad gör nya?")

add_h1(doc, "Retrieval review-koppling")
add_para(doc,
    "Baserat på L6:s exit ticket \"Är WTO en institution som driver globalisering eller "
    "förhandlar dess konsekvenser?\":"
)
add_rich_para(doc, [
    ("Lärarens öppning: ", {"bold": True}),
    ("\"Igår: WTO sätter ramen för handeln. Det var konstruerad ojämlikhet i tillverkning. "
     "Idag: en annan institution. När ett land inte kan betala sina räkningar — vem rycker "
     "in? Med vilka villkor? Idag möter ni en pensionär i Buenos Aires.\"", {"italic": True}),
])
add_bullet(doc, "Hög 1 (\"driver\") → bygg på: \"Ni såg WTO som regelskapare. IMF är annorlunda — den ställer villkor. Är det också att 'driva'?\"")
add_bullet(doc, "Hög 2 (\"förhandlar\") → utmana: \"Ni såg WTO som arena där länder förhandlar. IMF är ofta den enda långivaren när alla andra säger nej. Är det fortfarande 'bara förhandling'?\"")
add_bullet(doc, "Hög 3 (\"båda\") → använd som ingång: \"Ni ser dialektiken. Idag: hur ser samma dialektik ut när institutionen lånar ut pengar?\"")

add_h1(doc, "Tidsplanering")
add_table(doc, [
    ["Tid", "Fas", "Aktivitet"],
    ["0-8 min", "1. Retrieval review", "Exit ticket-redovisning + öppning (\"Igår: regler. Idag: pengar med villkor.\")"],
    ["8-13 min", "2. Målaktivering", "Köpkraftskartan (chock-öppning) + hypoteser"],
    ["13-28 min", "3. Explicit instruktion", "Worked example: Alicia Ceresoli — Held + Wallerstein steg-för-steg"],
    ["28-58 min", "4. Guidad övning", "Källanalys i par: två motstridiga texter (IMF/Milei vs. CTERA/Alesso)"],
    ["58-73 min", "5. Självständig övning", "Skriftlig analys: Held + Wallerstein på IMF (10-12 meningar)"],
    ["73-80 min", "6. Avslut", "Exit ticket + preview L8 (Katarina Wolf, EU)"],
], col_widths_cm=[2.5, 3.5, 10.0])

add_rich_para(doc, [("Elevaktiv tid: ", {"bold": True}), ("ca 60 min av 80 min = 75 %.", {})])

add_h1(doc, "Lärarinstruktioner")

add_h2(doc, "Fas 2 — Målaktivering (chocköppning)")
add_para(doc,
    "Köpkraftsdiagrammet är hooken. Kör tystnad. 10-15 sekunder efter att diagrammet "
    "visas. Låt siffran landa."
)
add_para(doc,
    "Sedan: \"Det här är en pensionär som arbetat 40 år. Hennes pension har inte minskat "
    "på papperet — den har minskat i vad den kan köpa. Det är inte en olycka. Det är "
    "resultatet av VILLKOR. Idag undersöker vi vilka villkor — och vem som ställde dem.\""
)

add_h2(doc, "Fas 3 — Worked example (Alicia Ceresoli)")
add_para(doc,
    "Centralt: visa rörelsen mellan teorierna OCH systemets logik — Mileis åtstramningar "
    "är inte godtyckliga. De är direkt kopplade till IMF:s krav på primärt överskott "
    "(att staten ska ta in mer än den ger ut, exklusive räntor på skulden). Det är poängen."
)
add_para(doc, "Föreslagen think-aloud:")
add_para(doc,
    "\"Alicia Ceresoli är 80 år. Hon är pensionär i Buenos Aires. Hennes pension har inte "
    "sänkts i pesos — pesos är fler nu än 2023. Men inflationen har varit över 200 procent "
    "under perioder. Hennes verkliga köpkraft är ungefär 60 procent av vad den var december "
    "2023. Hon säger: 'Jag saknar lukten av nya skor. Jag drömmer om att få äta en biff.' "
    "Hon kommer hem från pensionärsprotester med blåmärken efter polisens batonger."
)
add_para(doc,
    "Stoppa. Vad händer här? En medborgare som arbetat hela livet i ett land i Sydamerika "
    "kan inte längre köpa kött eller skor. Varför? Vilka beslut ledde hit?"
)
add_para(doc,
    "Helds dimensioner: Vilken dimension dominerar? Ekonomisk är förstås där — pension, "
    "mat, mediciner. Men politisk är minst lika tung — Mileis åtstramningar är lagstiftade, "
    "drivna av politiska beslut. Och social — pensionärsprotesterna, lärarstrejkerna, "
    "fattigdomsökningen är sociala konsekvenser av ekonomiska beslut. Här blir Helds modell "
    "stark: dimensionerna är inte separata, de är inbakade i varandra."
)
add_para(doc,
    "Wallerstein: Var är centrum, periferi? IMF har sitt huvudkontor i Washington. Dess "
    "största röststyrka tillhör USA, EU, Japan. Det är centrum. Argentina — historiskt "
    "rikt, semiperifert — befinner sig nu i en periferi-position: beroende av lån som "
    "ingen annan vill ge."
)
add_para(doc,
    "Men det centrala: pengarna kommer inte rakt över. De kommer med konditionalitet — "
    "politiska villkor. Pensioner ska frysas. FONID (lärarnas extra-fond) ska avskaffas. "
    "Subventioner ska bort. Statliga företag ska privatiseras. Det är inte IMF:s pengar "
    "som påverkar Alicia direkt — det är IMF:s villkor som omformar den argentinska lagen, "
    "som omformar hennes pension.\""
)

add_h3(doc, "Pedagogiska poänger att lyfta tydligt")
add_bullet(doc, "Konditionalitet är inte en teknisk detalj — det är hjärtat i hur IMF utövar makt.")
add_bullet(doc, "Helds dimensioner är inbäddade i varandra: ekonomi → politik → social → individuell vardag, i en oavbruten kedja.")
add_bullet(doc, "Wallersteins centrum-periferi gäller även suveränitet — inte bara pengar och varor.")
add_bullet(doc, "IMF är globaliseringens villkorsskrivare, parallell till L6:s WTO som dess regelskrivare.")

add_h3(doc, "Pekaktivitet — gemensam tavellinje")
add_para(doc,
    "Före fas 4: rita en linje på tavlan. Vänster ände: \"IMF (Washington)\". Höger ände: "
    "\"Alicia (Buenos Aires)\". Mellan: pilar med namn på mekanismerna — konditionalitet, "
    "lag, budgetbeslut, subventionsstopp. Visa rörelsen från institution till individ. "
    "Detta är den \"kedja\" eleverna ska kunna se — och tillämpa Held + Wallerstein på."
)

add_h2(doc, "Fas 4 — Källanalys i par")
add_para(doc,
    "De två texterna är konstruerade så att de använder samma begrepp (stabilisering, "
    "framtid, ansvar, jämlikhet) men med olika riktning. Det är pedagogisk poäng:"
)
add_bullet(doc, "Cirkulera och pressa: \"Båda texter använder ordet 'ansvar'. Vad menar var och en med det? Ansvar mot vem?\"")
add_bullet(doc, "Om par fastnar på \"vad sägs inte\" — peka på exempel: \"IMF/Milei-texten nämner 'långsiktig stabilitet'. Vad nämns INTE? Hur lång tid det tar för pensionären innan den långa sikten kommer. Det är en lucka.\"")
add_bullet(doc, "Differentiering uppåt: \"Vilket av de två argumenten är ekonomiskt mest sammanhängande? Och vilket är politiskt mest övertygande? De är inte samma sak.\"")
add_bullet(doc, "Var beredd på att en del elever instinktivt sympatiserar med Alicias berättelse och därmed Källa B. Det är pedagogiskt OK — men pressa: \"Du sympatiserar. Bra. Nu: vilket är det starkaste argumentet hos den andra sidan? Du måste kunna reproducera det innan du dömer det.\"")

add_h2(doc, "Fas 5 — Skriftlig analys")
add_bullet(doc, "Skrivandet är fortsatt svagt. Återanvänd L6:s skrivmall — eleverna känner igen formen.")
add_bullet(doc, "Om elev fastnar: \"Glöm inte — ni har redan tillämpat båda teorierna på WTO i L6. Idag samma rörelse — fast på en annan typ av institution.\"")
add_bullet(doc, "Differentiering mot E: skrivmall med fyra rubriker (centrum-periferi / Helds dimensioner / agens / institutionens roll). Eleven fyller i 2-3 meningar per rubrik.")
add_bullet(doc, "Differentiering mot A: ⭐-fråga — \"Jämför IMF (idag) med WTO (igår). Vilken institution har störst makt över ett enskilt lands inrikespolitik — och varför?\"")

add_h2(doc, "Fas 6 — Exit ticket")
add_para(doc,
    "Frågan är medvetet dikotom (lånar ut vs. kräver reformer) — speglar L6:s "
    "driver/förhandlar. Sortera i 3 högar:"
)
add_bullet(doc, "\"Lånar ut\" — institutionen ses som passiv finansiär.")
add_bullet(doc, "\"Kräver reformer\" — institutionen ses som politisk påtryckare.")
add_bullet(doc, "\"Båda\" — institutionen ses som dialektisk. Detta är A-nivå.")
add_para(doc,
    "Hög 1 och 2 är båda C-nivå om motiveringen är teoretisk. Eleverna har övat denna "
    "form i L6 — förvänta dig fler i hög 3 nu än då."
)

add_h1(doc, "Elevaktiviteter")
add_bullet(doc, "Hypotesdiskussion (5 min, helklass) — vad förklarar köpkraftsförlusten?")
add_bullet(doc, "Närläsning + understrykning (10 min, par) — i de två texterna: aktörer, begrepp, antaganden.")
add_bullet(doc, "Mall-ifyllning (10 min, par) — analysmall: begrepp / teorier-implicit / antaganden / luckor (samma som L6).")
add_bullet(doc, "Helklass-diskussion (10 min) — samla i tre spalter på tavlan.")
add_bullet(doc, "Skriftlig analys (12-15 min) — Held + Wallerstein på IMF.")
add_bullet(doc, "Exit ticket (5 min) — lånar ut eller kräver reformer?")

add_h1(doc, "Differentiering")

add_h2(doc, "Alternativa representationsformer (UDL)")
add_bullet(doc, "Visuellt: köpkraftsdiagram, Argentina-IMF-tidslinje, tavellinjen IMF→Alicia, tavelspalter.")
add_bullet(doc, "Auditivt: lärarens worked-example-think-aloud, helklass-diskussion.")
add_bullet(doc, "Textbaserat: två motstridiga texter + analysmall, skrivmall med stödmeningar.")

add_h2(doc, "Stöd (mot E)")
add_bullet(doc, "Analysmall med en förifylld rad som exempel (samma som L6 — bekant form).")
add_bullet(doc, "Begreppslista från L2-L6 på tavlan (centrum, periferi, dimension, agens, institution, regel — kompletterad med: konditionalitet, primärt överskott, strukturanpassning, devalvering, motosierra, FONID).")
add_bullet(doc, "Skrivmall med fyra rubriker + stödmeningar (mirror av L6).")
add_bullet(doc, "Par med starkare elev vid källanalysen.")
add_bullet(doc, "Tavellinjen IMF → Alicia visar rörelsen visuellt — peka tillbaka under fas 5 om elev fastnar.")

add_h2(doc, "Utmaning (mot A)")
add_bullet(doc, "⭐-fråga: \"Jämför IMF (idag) med WTO (igår). Vilken institution har störst makt över ett enskilt lands inrikespolitik — och varför?\"")
add_bullet(doc, "Fördjupningsfråga: \"IMF har funnits sedan 1944. Argentina har haft 22 program sedan 1956. Hur länge ska 'tillfällig hjälp' kunna pågå innan vi måste kalla det något annat? Föreslå ett begrepp.\"")
add_bullet(doc, "Källkritisk vinkel: \"Båda texter är konstruerade. Vilken är mer manipulerad? Och hur ser man det?\"")
add_bullet(doc, "Historisk parallell: utdelad text om Macris IMF-lån 2018 (57 miljarder USD) — \"samma drama, åtta år tidigare. Vad upprepas? Vad är annorlunda?\"")

add_h1(doc, "Material")
add_bullet(doc, "22 st arbetsblad (elevuppgift-lektion-7.docx) — två motstridiga texter + analysmall + skrivmall + begreppslista.")
add_bullet(doc, "Projektorbilder: köpkraftsdiagram 2023→2025, Argentina-IMF-tidslinje 1956-2025, worked example-bilder på Ceresoli, tavellinjen IMF → konditionalitet → argentinsk lag → Alicias pension, tre-kolumner-tabell för helklass-fasen.")
add_bullet(doc, "L6:s exit tickets (sorterade i 3 högar).")
add_bullet(doc, "Post-it för exit ticket.")
add_bullet(doc, "Valfritt fördjupningsmaterial: kort text om Macris 2018-lån (för A-elever, historisk parallell).")

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Är IMF en institution som lånar ut pengar eller som kräver politiska reformer? "
     "Motivera kort med ett exempel från lektionen. (3-4 meningar)\"", {"italic": True}),
])

add_h2(doc, "Användning i L8")
add_bullet(doc, "Hög 1 (\"lånar ut\") → bygg på: \"Ni såg IMF som finansiär. EU är annorlunda — den är vår egen institution. Är medlemskapet villkor eller delaktighet?\"")
add_bullet(doc, "Hög 2 (\"kräver reformer\") → utmana: \"Ni såg IMF som påtryckare. Är EU också det — bara mjukare? Eller är det något annat?\"")
add_bullet(doc, "Hög 3 (\"båda\") → använd som ingång: \"Ni ser dialektiken. EU bär den vidare — men vi är inne i den. Hur känns det?\"")

add_h1(doc, "Koppling till kunskapskrav")
add_table(doc, [
    ["Nivå", "Vad tränas"],
    ["LM 1 — C/A", "Utförligt diskutera styrkor/svagheter — i analysen av IMF syns vad teorierna räcker till och var de saknar (t.ex. att fånga konditionalitetens normativa kraft över tid)."],
    ["LM 2 — E/C/A", "Flerskalanalys i den skriftliga analysen — pension (mikro) → låneprogram (makro) → ett samhälles vardag (lärarstrejker, pensionärsprotester)."],
    ["LM 4 — C", "Värdera motstridiga ståndpunkter (de två texterna i fas 4)."],
], col_widths_cm=[3.0, 13.0])

add_para(doc,
    "Formativt mål: alla elever ska kunna placera IMF i centrum-periferi-modellen och "
    "peka på minst en av Helds dimensioner som dominerar institutionen. ⭐-elever ska "
    "kunna jämföra WTO och IMF som globaliseringsinstitutioner — vad gör de likt, vad "
    "gör de olikt?"
)

add_h1(doc, "Anmärkning om revidering")
add_para(doc,
    "Lektionen är reviderad 2026-05-07. Den ursprungliga lektionen var en arbetslektion "
    "med handledning — strukturerad skrivtid för slutuppgiften. Den togs bort eftersom "
    "L7 behövdes för andra institutionsdjupdyket (efter L6:s WTO). Skrivtid för "
    "slutuppgiften löses utanför lektionssalen. Det mänskliga ankaret (Alicia Ceresoli "
    "som primär berättelse + Sonia Alesso som institutionell motvikt) speglar L5:s och "
    "L6:s metod — institutionen blir konkret genom människor som möter den."
)
add_rich_para(doc, [
    ("OBS — påverkar L8: ", {"bold": True}),
    ("L8:s nuvarande retrieval review-koppling refererar till L7:s gamla exit ticket "
     "(om källor). Detta behöver uppdateras vid nästa L8-revidering. Tills vidare: använd "
     "L7:s nya exit ticket (lånar ut / kräver reformer) som retrieval-data i L8.", {}),
])

doc.save(OUT_PLAN)
print(f"Saved: {OUT_PLAN}")


# =================== ELEVUPPGIFT ===================

OUT_ELEV = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/elevuppgift-lektion-7.docx"

doc = make_document("Lektion 7 | Sida ")
add_title(doc, "Lektion 7: IMF och Mileis Argentina",
          "Elevuppgifter — Samhällskunskap 3")

add_para(doc,
    "Idag möter du IMF — Internationella Valutafonden — som institution. Vi använder "
    "Argentina under president Javier Milei (tillträtt december 2023) som lins. Två "
    "personer guidar dig:"
)
add_bullet(doc,
    "Alicia Ceresoli — 80 år, pensionär i Buenos Aires. Hennes pension har inte sänkts "
    "på papperet, men inflationen har ätit upp dess köpkraft. Hon kommer hem från "
    "pensionärsprotester med blåmärken efter polisens batonger. Hon säger: \"Jag saknar "
    "lukten av nya skor. Jag drömmer om att få äta en biff.\""
)
add_bullet(doc,
    "Sonia Alesso — generalsekreterare för CTERA, Argentinas största lärarfack (cirka "
    "1,2 miljoner medlemmar). Hon ledde nationell lärarstrejk i februari 2025 mot Mileis "
    "avskaffande av FONID — den nationella fonden för läraromersättning som motsvarade "
    "ungefär 10 % av lärarlönen. Mileis åtstramningar är direkt kopplade till IMF:s "
    "villkor för det 20-miljarders-USD-lån som Argentina tog april 2025."
)
add_para(doc,
    "Du ska tillämpa Held + Wallerstein på en institution som lånar ut — efter att igår "
    "ha tillämpat dem på en institution som skriver regler (WTO). Frågan: Vilken "
    "globalisering bygger IMF?"
)

add_page_break(doc)

add_h1(doc, "Uppgift 1: Källanalys — två motstridiga texter")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("20 min parvis", {})])
add_para(doc,
    "Läs båda texterna noga. Stryk under begrepp. Fyll i analysmallen. Båda texter är "
    "konstruerade utifrån verkliga argument från debatten 2024-2025 men kondenserade."
)

add_h2(doc, "Källa A: IMF och Mileis ekonomiska team")
add_para(doc,
    "Sammanställd från IMF:s officiella press releases om Argentina-programmet, "
    "ekonomiminister Luis Caputos uttalanden, Mileis tal vid World Economic Forum 2024, "
    "och IMF:s managing director Kristalina Georgievas pressmeddelanden."
)
add_para(doc,
    "Argentina har levt över sina tillgångar i decennier. När president Milei tillträdde "
    "december 2023 ärvde han en ekonomi i fritt fall: inflation över 200 procent, "
    "valutareserver i botten, ett offentligt underskott som lapades med sedelpressen. "
    "Detta är inte ett land som råkat ut för otur — det är en ekonomi som under ett "
    "halvsekel byggts på populistiska transfereringar och statliga subventioner som ingen "
    "ekonomi i längden kan bära."
)
add_para(doc,
    "IMF:s nya program på 20 miljarder USD från april 2025 är inte ett straff. Det är "
    "en livlina till ett land som annars riskerade att gå i statsbankrutt — default — "
    "för andra gången på fyra år. Programmet bygger på principen om primärt "
    "budgetöverskott: staten måste ta in mer än den ger ut, exklusive räntor på skulden. "
    "Det är grundläggande ekonomisk disciplin — samma princip som styr varje "
    "hushållsbudget."
)
add_para(doc,
    "Reformerna är inte populära, men de är nödvändiga. Pensioner som tidigare automatiskt "
    "indexerats efter inflationen har frysts tillfälligt — annars skulle subventionerna "
    "konsumera reformutrymmet. Subventioner till el, gas och kollektivtrafik har "
    "minskats — annars hade ekonomin fortsatt vara upphängd på ett luftslott. Statliga "
    "företag som under decennier varit förlustcentrum har börjat omstruktureras. Den "
    "argentinska peson har devalverats — men det betyder att exporten åter blir "
    "konkurrenskraftig, vilket på sikt skapar jobb."
)
add_para(doc,
    "Resultaten är redan synliga. Inflationen — som var 25 procent per månad december "
    "2023 — föll till 2,4 procent per månad första kvartalet 2025. Statsbudgeten visar "
    "för första gången på årtionden ett primärt överskott. Internationella investerare "
    "har börjat återvända. Riskpremien på argentinsk statskuld har halverats."
)
add_para(doc,
    "Att kortsiktiga sociala kostnader uppstår är beklagligt, men det är priset för att "
    "inte gå under. Den verkliga orättvisan vore att fortsätta vägen som inte fungerar — "
    "och låta nästa generation argentinare ärva en bankrutt stat utan trovärdighet, utan "
    "investeringar, utan jobb. IMF har inte uppfunnit reglerna för en sund ekonomi. Vi "
    "följer dem. Vi lånar ut till länder som väljer att göra detsamma. Det är inte "
    "påtvingat — Argentina valde att teckna avtalet, för att alternativet var värre."
)

add_h2(doc, "Källa B: Sonia Alesso, CTERA")
add_para(doc,
    "Sammanställd från CTERA:s pressmeddelanden 2025, Alessos tal vid lärarstrejken "
    "februari 2025, Education Internationals rapporter om Argentina, och Buenos Aires "
    "Times-intervjuer."
)
add_para(doc,
    "December 2023: en pensionär i Buenos Aires kunde köpa en hel kasse mat med sin "
    "pension. April 2025: hon räcker till hälften av samma kasse. Detta är inte ett "
    "resultat av \"ekonomisk disciplin\". Det är organiserad utarmning — möjlig endast "
    "för att en internationell institution villkorat sitt lån på just dessa nedskärningar."
)
add_para(doc,
    "IMF:s 20-miljardersavtal från april 2025 ser ut som ett finansiellt avtal. Det är "
    "en politisk text. Avtalet kräver att Argentina genomför specifika reformer: "
    "avskaffande av FONID — den nationella fonden för läraromersättning som motsvarade "
    "10 % av en lärares lön. Frysning av pensionerna. Borttagande av subventioner för "
    "el, gas och transport som låginkomsthushåll byggt sin vardag på. Privatisering av "
    "statliga företag. Detta är inte beslut som Argentinas folkvalda riksdag fritt kommit "
    "fram till. Det är villkor för att överhuvudtaget få lånet. När IMF skriver i avtalet "
    "att FONID ska bort — då försvinner FONID. Det är inte demokrati. Det är "
    "konditionalitet."
)
add_para(doc,
    "Vi är inte naiva. Vi vet att Argentina har strukturella problem som måste hanteras. "
    "Men IMF:s recept har vi sett förut — 22 program sedan 1956. Macris 57-miljarderslån "
    "2018 ledde till ekonomisk kollaps inom tre år. Mönstret upprepas: lån → åtstramning "
    "→ recession → nytt lån. Det är inte ett botemedel. Det är ett beroende."
)
add_para(doc,
    "Vad döljs bakom siffran \"primärt överskott på 1,8 procent av BNP\"? Den döljer "
    "76-årige Rubén Cocorullo, post-hjärtattack med tre stentar, som tvingas betala för "
    "mediciner som tidigare var gratis. Den döljer barn som kommer hungriga till skolan "
    "eftersom matprogrammet har skurits ned. Den döljer 1,2 miljoner lärare vars löner "
    "sänkts realt med över 30 procent under ett år. Den döljer pensionärer som kommer "
    "hem från demonstrationer med blåmärken efter polisens batonger — för regeringen har "
    "skärpt repressionen mot just denna grupp."
)
add_para(doc,
    "IMF säger att Argentina \"valde\" avtalet. Men vad valde Argentina mellan? Mellan "
    "IMF:s villkor och statsbankrutt. Det är inte ett val. Det är utpressning med "
    "juridisk form. Den verkliga frågan är inte om Argentina kan följa programmet. "
    "Frågan är: vem har suveränitet över argentinsk politik — Argentinas väljare, eller "
    "en institution i Washington vars röststyrka domineras av USA, EU och Japan?"
)
add_para(doc,
    "Vi i CTERA tar inte ställning mot internationellt samarbete. Vi tar ställning för "
    "att en institution som påverkar 45 miljoner människors vardag måste vara demokratiskt "
    "redovisningsskyldig — och att de som drabbas hårdast inte är de som beslutar. Just "
    "nu är det tvärtom."
)

add_h2(doc, "Analysmall")
add_para(doc,
    "Fyll i tillsammans. Mål: se hur samma begrepp används i olika riktningar och vad "
    "var och en utelämnar."
)
add_table(doc, [
    ["Fråga", "Källa A (IMF/Milei)", "Källa B (Alesso/CTERA)"],
    ["Vilka centrala begrepp används? (Disciplin, ansvar, suveränitet, framtid osv.)", "", ""],
    ["Vilken teori syns i texten? (Liberalism / Wallerstein / blandat)", "", ""],
    ["Vilket är textens centrala antagande?", "", ""],
    ["Vilka aktörer ges agens? (Vem \"gör\" något — vem är subjektet i meningarna?)", "", ""],
    ["Vilka aktörer är osynliga?", "", ""],
    ["Vad sägs INTE? (Det strategiskt utelämnade)", "", ""],
    ["Vem är \"vi\" i texten?", "", ""],
    ["Hur används ordet val? (vem väljer, mellan vad?)", "", ""],
], col_widths_cm=[5.5, 5.25, 5.25])

add_h3(doc, "⭐ Utmaning mot A")
add_para(doc,
    "Båda texter använder ordet suveränitet (eller relaterade begrepp som \"val\", "
    "\"demokrati\", \"ansvar\"). Hur skiljer sig betydelsen? När samma ord flyttas mellan "
    "två teoretiska ramar — vad händer? Skriv 3-4 meningar."
)

add_page_break(doc)

add_h1(doc, "Uppgift 2: Skriftlig analys — Tillämpa Held och Wallerstein på IMF")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("12-15 min enskilt", {})])
add_para(doc,
    "Du ska nu göra det som vi gjorde på WTO i L6: tillämpa båda teoriverktygen — fast "
    "på IMF."
)

add_h2(doc, "Frågeställning")
add_rich_para(doc, [
    ("Var sitter centrum, semi-periferi och periferi i Mileis-Argentina-konflikten? "
     "Vilken av Helds fyra dimensioner dominerar institutionen IMF — och vilken eller "
     "vilka dimensioner får den att 'försvinna'?", {"italic": True}),
])

add_h2(doc, "Skrivmall (fyll i 2-3 meningar per rubrik)")

add_h3(doc, "Centrum-periferi-position (Wallerstein)")
add_rich_para(doc, [("Centrum: ", {"bold": True}), ("__________________________ är centrum i denna konflikt eftersom __________________________", {})])
add_para(doc, "_______________________________________________________________")
add_para(doc, "")
add_rich_para(doc, [("Semi-periferi: ", {"bold": True}), ("__________________________ kan placeras i semi-periferi eftersom __________________________", {})])
add_para(doc, "_______________________________________________________________")
add_para(doc, "")
add_rich_para(doc, [("Periferi: ", {"bold": True}), ("__________________________ befinner sig i periferi eftersom __________________________", {})])
add_para(doc, "_______________________________________________________________")

add_h3(doc, "Helds dimension som dominerar")
add_para(doc, "Den dimension som dominerar IMF är _____________________ (ekonomisk / politisk / kulturell / social).")
add_para(doc, "Detta syns när _______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h3(doc, "Helds dimension som \"försvinner\"")
add_para(doc, "Den dimension som blir osynlig i IMF:s arbete är _____________________ .")
add_para(doc, "Detta märks genom _______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h3(doc, "Sammanfattande slutsats")
add_para(doc, "IMF är en institution som _____________________ globaliseringen genom att")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h2(doc, "⭐ Utmaning mot A")
add_para(doc,
    "Jämför IMF (idag) med WTO (igår). Vilken institution har störst makt över ett "
    "enskilt lands inrikespolitik — och varför? Skriv 3-5 meningar. Tips: tänk på hur "
    "WTO fungerar genom regler och hur IMF fungerar genom konditionalitet. Vad är "
    "skillnaden i mekanism?"
)
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_page_break(doc)

add_h1(doc, "Exit ticket (skrivs i slutet av lektionen)")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Är IMF en institution som lånar ut pengar eller som kräver politiska reformer? "
     "Motivera kort med ett exempel från lektionen. (3-4 meningar)\"", {"italic": True}),
])

add_h1(doc, "Begreppslista — lektion 7")
add_table(doc, [
    ["Begrepp", "Enkel förklaring"],
    ["IMF", "Internationella Valutafonden, etablerad 1944 (Bretton Woods). 190 medlemsländer. Lånar ut till länder med betalningsproblem. Röststyrkan är viktad efter ekonomiska bidrag — USA, EU, Japan dominerar."],
    ["Konditionalitet", "De villkor IMF ställer på låntagaren: vilka politiska och ekonomiska reformer landet måste genomföra för att få (eller fortsätta få) lånet."],
    ["Strukturanpassningsprogram (SAP)", "Term för IMF:s typiska reformpaket från 1980-talet och framåt: nedskärningar, privatiseringar, devalvering, öppning för utländsk handel."],
    ["Primärt budgetöverskott", "Statens inkomster minus utgifter, innan räntor på statsskulden räknas in. Mått på underliggande budgetdisciplin."],
    ["Default (statsbankrutt)", "När en stat inte kan eller vägrar betala sina skulder. Argentina har \"default-at\" sju gånger sedan självständigheten 1816 — senast 2020."],
    ["Hyperinflation", "Mycket hög inflation (i regel >50 % per månad enligt klassisk definition). Argentina hade tvåsiffrig månadsinflation under delar av 2023-24."],
    ["Devalvering", "När en valuta avsiktligt sänks i värde mot andra valutor. Mileis regering devalverade peson kraftigt december 2023."],
    ["La motosierra (\"motorsågen\")", "Mileis valsymbol och regeringens metafor för åtstramningar — han bar bokstavligen en motorsåg på valmöten. Står för \"att skära bort statsapparaten\"."],
    ["FONID", "Fondo Nacional de Incentivo Docente — den nationella läraromersättningen, motsvarade ca 10 % av lärarlönen. Avskaffades 2024 som del av Mileis åtstramningar."],
    ["CTERA", "Argentinas största lärarfack, ca 1,2 miljoner medlemmar. Generalsekreterare: Sonia Alesso. Ledde nationell strejk februari 2025."],
    ["Suveränitet", "Ett lands rätt att själv besluta över sin politik. Centralt begrepp i debatten om IMF: när villkor blir lag, vart tar suveräniteten vägen?"],
    ["Bretton Woods-systemet", "Det internationella ekonomiska ramverk som etablerades 1944 vid Bretton Woods-konferensen. IMF + Världsbanken är dess två kvarvarande institutioner."],
], col_widths_cm=[4.5, 11.5])

add_h1(doc, "Källor du kan följa upp i (om du vill veta mer)")
add_bullet(doc, "Buenos Aires Times (engelskspråkig argentinsk dagstidning) — nyheter om Argentinas ekonomi och pensionärernas situation: batimes.com.ar")
add_bullet(doc, "IMF Country Pages — Argentina — IMF:s officiella ramverk för programmet, med Article IV-rapporter: imf.org/en/Countries/ARG")
add_bullet(doc, "Education International — internationell takorganisation för lärarfack, rapporterar om Argentinas lärarstrejker: ei-ie.org")
add_bullet(doc, "CTERA — argentinska lärarfackets egna ställningstaganden: ctera.org.ar")
add_bullet(doc, "Buenos Aires Herald (engelska) — facklig och social dokumentation: buenosairesherald.com")
add_bullet(doc, "Centre for Economic and Policy Research (CEPR) — kritisk analys av IMF-program: cepr.net")
add_bullet(doc, "Al Jazeera English — Argentina coverage — internationell journalistik om pensionärsprotester: aljazeera.com")

doc.save(OUT_ELEV)
print(f"Saved: {OUT_ELEV}")
