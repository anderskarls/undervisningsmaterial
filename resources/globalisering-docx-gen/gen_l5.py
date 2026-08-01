"""Generate lektion-5.docx + elevuppgift-lektion-5.docx."""

import sys
sys.path.insert(0, "/home/anders/Second brain/resources/globalisering-docx-gen")

from docx_helper import (
    make_document, add_title, add_h1, add_h2, add_h3,
    add_para, add_rich_para, add_bullet, add_table, add_infobox, add_page_break
)

# =================== LEKTIONSPLAN ===================

OUT_PLAN = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/lektion-5.docx"

doc = make_document("Lektion 5 | Sida ")
add_title(doc, "Lektion 5: Teoridebatt — realism vs. liberalism",
          "Lärarens lektionsplan — Samhällskunskap 3")

add_table(doc, [
    ["Kurs", "Samhällskunskap 3 (SAMSAM03)"],
    ["Moment", "Globalisering — Från vardag till världssystem"],
    ["Lektionslängd", "80 minuter"],
    ["Position i momentet", "5 av 8 — den mest krävande lektionen"],
], col_widths_cm=[5.0, 11.0])

add_h1(doc, "Syfte")
add_para(doc,
    "Introducera tredje och sista teoretiska verktyget: realism och liberalism "
    "(IR-teorier). Till skillnad från Held (deskriptivt) och Wallerstein (kritiskt) "
    "är dessa förklarande — de försöker svara på varför stater agerar som de gör. "
    "Genom en strukturerad teoridebatt tränar eleverna att argumentera från en "
    "tilldelad position, värdera motpartens argument och reflektera över teoriernas "
    "funktion."
)

add_h1(doc, "Lärandemål som adresseras")
add_bullet(doc, "LM 1 — Redogöra för realism och liberalism; diskutera styrkor/svagheter")
add_bullet(doc, "LM 4 — Argumentera, värdera andras ståndpunkter (kärnträning)")

add_h1(doc, "Förberedelse")
add_bullet(doc, "Sortera L4:s exit tickets i 3 högar")
add_bullet(doc, "Skriv ut 22 st arbetsblad (elevuppgift-lektion-5.docx)")
add_bullet(doc, "Dela klassen i två lag i förväg (balansera språkligt och deltagandemässigt)")
add_bullet(doc, "Whiteboard med debattstruktur")
add_bullet(doc, "Case-beskrivning på projektor [VERIFIERA aktualitet]")
add_bullet(doc, "Timer synlig för alla")
add_bullet(doc, "Post-it för exit ticket")

add_h1(doc, "Tidsplanering")
add_table(doc, [
    ["Tid", "Fas", "Aktivitet"],
    ["0-8 min", "1. Retrieval review", "L4-data + par-repetition av vad teorierna gör"],
    ["8-13 min", "2. Målaktivering", "Varför agerar stater? Introduktion till nya teorin"],
    ["13-28 min", "3. Explicit instruktion", "Realism vs liberalism med modellerad analys"],
    ["28-58 min", "4. Guidad övning", "Strukturerad teoridebatt (5+15+10 min)"],
    ["58-73 min", "5. Självständig övning", "Individuell skrivning om egen position"],
    ["73-80 min", "6. Avslut", "Exit ticket + preview L6"],
], col_widths_cm=[2.5, 3.5, 10.0])

add_rich_para(doc, [("Elevaktiv tid: ", {"bold": True}), ("ca 60 min av 80 = 75%.", {})])

add_h1(doc, "Lärarinstruktioner")

add_h2(doc, "Fas 3 — Explicit instruktion")
add_bullet(doc, "Rita jämförelsetabell tydligt. Två kolumner, fyra rader: antaganden, människosyn, syn på institutioner, syn på handel.")
add_bullet(doc, "Ta INTE ställning själv. Modellera båda.")
add_bullet(doc,
    "\"Realismen ser världen som en djungel där stater överlever genom makt. "
    "Liberalismen ser institutioner och handel som krafter som skapar fred.\""
)

add_h2(doc, "Fas 4 — Debatten — centralt")
add_rich_para(doc, [("Viktiga regler (skriv på tavlan):", {"bold": True})])
add_bullet(doc, "Ni argumenterar för tilldelad position — inte egen åsikt.")
add_bullet(doc, "Respekt. Inga avbrott.")
add_bullet(doc, "Använd begreppen.")
add_bullet(doc, "Tal innebär inget personligt.")

add_h3(doc, "Case-förslag (välj ett innan lektion)")
add_bullet(doc, "Alt A: Ska Sverige/EU fortsätta militärt stöd till Ukraina?")
add_bullet(doc, "Alt B (rekommenderat): Ska EU införa tullar på kinesiska elbilar?")
add_bullet(doc, "Alt C: Ska sanktioner mot Ryssland hävas vid fredsavtal?")
add_rich_para(doc, [
    ("Rekommendation: ", {"bold": True}),
    ("alt B är minst emotionellt laddat och ger utrymme för strukturerad argumentation.", {})
])

add_h3(doc, "Dina roller under debatten")
add_bullet(doc, "Moderator — håll tid, ge ordet, se till att alla lag kommer till tals")
add_bullet(doc, "Notera — skriv upp bästa argumenten på tavlan för meta-reflektion")
add_bullet(doc, "Korrigera begreppsanvändning försiktigt: \"Bra argument. Begreppet för det är maktbalans.\"")

add_h3(doc, "Meta-reflektion — centrala frågor")
add_bullet(doc, "Vilka begrepp användes mest från respektive teori?")
add_bullet(doc, "Vilket argument från motståndarsidan var starkast?")
add_bullet(doc, "Finns det case där båda teorierna gav samma svar?")
add_bullet(doc, "⭐ Är det en tredje teori vi skulle behövt? Vad saknas?")

add_h2(doc, "Fas 5 — Skriftlig reflektion")
add_bullet(doc, "Eleven tar egen position efter debatten.")
add_bullet(doc,
    "Om elever skriver \"Jag höll med det jag argumenterade för\" — pressa: "
    "\"Skriv varför. Vilket argument från andra sidan övervägde du?\""
)
add_bullet(doc, "Tränar A-nivåns \"nyanserade omdömen\" explicit.")

add_h1(doc, "Differentiering")
add_h2(doc, "Stöd (mot E)")
add_bullet(doc, "Roll-korten har förberedda argument att bygga vidare på")
add_bullet(doc, "Par med starkare elev vid förberedelse")
add_bullet(doc, "Stödmeningar: \"Ett centralt argument från realismen är ___. Ett motargument är ___.\"")
add_bullet(doc, "Erbjud anteckningsansvarig-roll för motvilliga talare")

add_h2(doc, "Utmaning (mot A)")
add_bullet(doc, "⭐ Hitta en svaghet i er egen tilldelade teori")
add_bullet(doc, "⭐ Behövs en tredje teori? Konstruktivism? Kritisk teori?")
add_bullet(doc, "⭐ Skriv egen analys med motargument du hittat själv")

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Vilken teori passar bäst med din egen syn — och varför? Ge ETT argument.\"",
     {"italic": True}),
])

add_h1(doc, "Koppling till kunskapskrav")
add_table(doc, [
    ["Nivå", "Vad tränas"],
    ["LM 1 — E", "Roll-kortens argument visar grundförståelse"],
    ["LM 1 — C", "Meta-reflektionen — styrkor/svagheter utförligt"],
    ["LM 1 — A", "⭐-frågorna + skrivuppgift med motargument"],
    ["LM 4 — E", "Enkla argument i debatten"],
    ["LM 4 — C", "Välgrundade argument i strukturerad debatt"],
    ["LM 4 — A", "Välgrundade, nyanserade argument via ⭐-utmaning"],
], col_widths_cm=[3.0, 13.0])

add_h1(doc, "Kommentar till läraren")
add_para(doc,
    "Om debatten havererar (en sida dominerar, eleverna tappar fokus): avbryt efter "
    "runda 2 och kör en kort par-reflektion (\"Vad har ni hört? Vad saknas?\") innan "
    "runda 3. Alternativt — byt till \"fishbowl\": 4 elever från varje lag i mitten, "
    "övriga observerar och tar över vid paus."
)
add_para(doc,
    "Om debatten går för bra och ni får slut på tid — kör meta-reflektionen kortare "
    "(5 min) och flytta tid till skrivfasen."
)

doc.save(OUT_PLAN)
print(f"Saved: {OUT_PLAN}")


# =================== ELEVUPPGIFT ===================

OUT_ELEV = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/elevuppgift-lektion-5.docx"

doc = make_document("Lektion 5 | Sida ")
add_title(doc, "Lektion 5: Teoridebatt — realism vs. liberalism",
          "Elevuppgifter — Samhällskunskap 3")

add_para(doc,
    "Idag är det momentets mest krävande lektion. Du ska argumentera för en tilldelad "
    "position — inte din egen åsikt. Det är en övning i att värdera argument, använda "
    "begrepp och förstå teoriernas logik."
)

add_h1(doc, "Debattregler")
add_bullet(doc, "Du argumenterar för din tilldelade position — inte din egen åsikt. Vi tränar argumentation, inte \"vinna\".")
add_bullet(doc, "Respekt alltid. Inga avbrott. Notera motargument, svara i nästa runda.")
add_bullet(doc, "Använd begreppen. Poäng (symboliskt) ges för korrekt användning.")
add_bullet(doc, "Talartid respekteras. Släpp ordet när klockan går.")
add_bullet(doc, "Rollen är inte du. \"Realisten\" eller \"liberalen\" är ett argument.")

add_h2(doc, "Debattstruktur (15 min totalt)")
add_table(doc, [
    ["Runda", "Innehåll", "Tid"],
    ["Runda 1", "Öppningsargument — varje lag presenterar huvudtes", "2 min per lag"],
    ["Runda 2", "Motargument och replik", "2 min per lag"],
    ["Runda 3", "Avslutande argument + öppen diskussion", "1 min per lag + 3 min öppet"],
    ["Meta-reflektion", "Helklass — vilket argument var starkast?", "10 min efteråt"],
], col_widths_cm=[3.5, 9.5, 3.0])

add_page_break(doc)

add_h1(doc, "Roll-kort A: Du tillhör Realism-laget")

add_h2(doc, "Kärnantaganden")
add_bullet(doc, "Världen är anarkisk. Ingen övermakt finns ovanför staten.")
add_bullet(doc, "Stater är rationella aktörer — söker överlevnad och makt, inte moral.")
add_bullet(doc, "Makt balanseras. När en stat blir för stark söker andra allianser mot den.")
add_bullet(doc, "Institutioner är svaga. FN, EU, WTO fungerar bara så länge starka stater vill det.")

add_h2(doc, "Centrala begrepp att använda")
add_bullet(doc, "Anarki (internationella systemet) — frånvaro av överordnad auktoritet")
add_bullet(doc, "Maktbalans")
add_bullet(doc, "Säkerhetsdilemma — en stats upprustning tvingar andra rusta upp")
add_bullet(doc, "Egenintresse / nationellt intresse")
add_bullet(doc, "Rationell aktör")

add_h2(doc, "Argument du kan använda (bygg vidare)")
add_para(doc,
    "1. \"Stater agerar alltid i eget intresse. Ukrainakriget är ett tydligt exempel — "
    "Ryssland agerar för att skydda sina strategiska intressen.\""
)
add_para(doc,
    "2. \"Institutioner som WTO fungerar bara så länge starka stater vill ha dem. "
    "Trumps tullar visar hur snabbt systemet kan röras om.\""
)
add_para(doc,
    "3. \"Handelsberoende skapar inte fred — det skapar sårbarhet. Tysklands beroende "
    "av rysk gas var en strategisk missbedömning.\""
)
add_para(doc,
    "4. \"Global styrning är en illusion. Det som kallas 'internationellt samhälle' "
    "är egentligen starka staters konsensus.\""
)

add_h2(doc, "⭐ Svagheter du måste vara beredd att möta")
add_bullet(doc, "Varför fungerar FN ibland? Varför finns EU? → Samarbete sker när det gynnar egenintresse.")
add_bullet(doc, "Varför har Europa inte haft krig på 80 år? → Kärnvapenavskräckning + USA:s säkerhetsparaply.")
add_bullet(doc, "Klimatavtalen? → Stater lovar men följer inte upp när det kostar.")

add_h2(doc, "Klassiska realister")
add_bullet(doc, "Hans Morgenthau, Politics Among Nations (1948)")
add_bullet(doc, "Kenneth Waltz, Theory of International Politics (1979)")
add_bullet(doc, "John Mearsheimer (offensiv realism, nu levande)")

add_page_break(doc)

add_h1(doc, "Roll-kort B: Du tillhör Liberalism-laget")

add_h2(doc, "Kärnantaganden")
add_bullet(doc, "Samarbete är möjligt. Stater har gemensamma intressen.")
add_bullet(doc, "Institutioner fungerar. FN, EU, WTO stabiliserar relationer.")
add_bullet(doc, "Handel skapar fred. Sammanflätade länder har incitament att undvika krig.")
add_bullet(doc, "Demokratier krigar inte med andra demokratier (demokratisk fred-tesen).")

add_h2(doc, "Centrala begrepp att använda")
add_bullet(doc, "Interdependens (ömsesidigt beroende)")
add_bullet(doc, "Institutionalism")
add_bullet(doc, "Demokratisk fred")
add_bullet(doc, "Kollektiva handlingsproblem")
add_bullet(doc, "Mjuk makt — övertygelse genom attraktion, inte tvång")
add_bullet(doc, "Global styrning")

add_h2(doc, "Argument du kan använda (bygg vidare)")
add_para(doc,
    "1. \"EU är själva exemplet. Frankrike-Tyskland krigade tre gånger på 80 år — "
    "nu är det otänkbart. Institutioner och handel har format relationen.\""
)
add_para(doc,
    "2. \"Parisavtalet, FN:s barnrättskonvention, WTO-regler är imperfekta men "
    "existerar och spelar roll. Världen utan dessa skulle vara sämre.\""
)
add_para(doc,
    "3. \"Ukrainas kamp är inte bara militär — den är också institutionell. "
    "EU-medlemskapsansökan, internationella sanktioner, ICC-åtal.\""
)
add_para(doc,
    "4. \"Beroende är inte sårbarhet — det är kostnader för att gå till krig. "
    "Kina och USA är så sammanflätade att direkt militär konflikt är osannolik.\""
)

add_h2(doc, "⭐ Svagheter du måste vara beredd att möta")
add_bullet(doc, "Men EU har ändå konflikter — Brexit, tullar. → Friktion inom institutioner är bättre än krig utan dem.")
add_bullet(doc, "Vad med Ryssland? → Misslyckande att integrera Ryssland — liberalismen behöver institutioner få förankra sig.")
add_bullet(doc, "Institutioner är väststaternas dominans. → Erkänn — reform, inte avskaffning, är svaret.")

add_h2(doc, "Klassiska liberaler")
add_bullet(doc, "Immanuel Kant, Om den eviga freden (1795)")
add_bullet(doc, "Robert Keohane & Joseph Nye, Power and Interdependence (1977)")
add_bullet(doc, "Joseph Nye, Soft Power (2004)")

add_page_break(doc)

add_h1(doc, "Case för debatten")

add_infobox(doc,
    "Alternativ B (rekommenderat): Ska EU införa tullar på kinesiska elbilar?",
    "Kina har genom statliga subventioner byggt upp en enorm produktionskapacitet av "
    "elbilar. Priserna är 20-30% lägre än europeiska motsvarigheter. Europeiska "
    "biltillverkare (Volkswagen, Volvo, Renault) varnar för konkurs om inget görs. "
    "EU-kommissionen har infört tullar på 17-38% på kinesiska elbilar från 2024. "
    "Kritiker säger detta bryter mot frihandelsprincipen och kommer fördröja "
    "klimatomställningen. Kina har signalerat motåtgärder.\n\n"
    "Frågan: Är detta en klok EU-policy?",
    "e8f5e9"
)

add_para(doc, "")
add_rich_para(doc, [
    ("Realism-laget: ", {"bold": True}),
    ("argumentera att tullarna är rationell skyddspolitik för europeisk industri "
     "och strategisk autonomi. Kina agerar strategiskt — EU måste också göra det.",
     {})
])
add_rich_para(doc, [
    ("Liberalism-laget: ", {"bold": True}),
    ("argumentera att tullarna skadar frihandeln, fördröjer klimatomställningen och "
     "skapar onödig konfliktrisk. EU bör istället investera i konkurrenskraft och "
     "använda WTO.", {})
])

add_page_break(doc)

add_h1(doc, "Uppgift: Meta-reflektion (efter debatten)")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("10 min helklass", {})])
add_para(doc, "Diskutera tillsammans:")
add_bullet(doc, "Vilka begrepp användes mest från respektive teori?")
add_bullet(doc, "Vilket argument från motståndarsidan var starkast?")
add_bullet(doc, "Fanns det ett argument där båda teorierna gav samma svar?")
add_bullet(doc, "⭐ Behöver vi en tredje teori? Vad skulle den säga?")
add_para(doc, "Anteckna 2-3 meningar i ditt häfte.")

add_h1(doc, "Uppgift: Individuell skrivning")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("15 min enskilt", {})])
add_para(doc, "Skriv 5-8 meningar som svarar på:")
add_rich_para(doc, [
    ("\"Vilken teori stämmer bäst med DIN egen syn? Motivera med ETT konkret exempel.\"",
     {"bold": True, "italic": True})
])

add_h2(doc, "Skrivmall")
add_rich_para(doc, [("Min syn: ", {"bold": True})])
add_para(doc, "Jag tycker __________ teorin stämmer bäst med min egen förståelse.")
add_rich_para(doc, [("Motivering: ", {"bold": True})])
add_para(doc, "Det beror på att __________________________________.")
add_rich_para(doc, [("Konkret exempel: ", {"bold": True})])
add_para(doc, "Ett tydligt exempel är __________. I den situationen förklarar [teorin] att __________.")
add_rich_para(doc, [("Det motargument som övertygade mig mest: ", {"bold": True})])
add_para(doc, "Trots min huvudtes fick [motsatt teori] mig att tänka på __________. Det är en viktig invändning eftersom __________.")

add_infobox(doc,
    "⭐ Utmaning mot A",
    "Skriv som om du argumenterar på A-nivå: inkludera motargument du själv hittat på, "
    "inte bara från debatten.",
    "ffe66d"
)

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Vilken teori passar bäst med din egen syn — och varför? Ge ETT argument.\" (2-3 meningar)",
     {"italic": True}),
])

add_h1(doc, "Begreppslista — lektion 5")
add_table(doc, [
    ["Begrepp", "Teori", "Enkel förklaring"],
    ["Anarki", "Realism", "Frånvaro av överordnad auktoritet — inte kaos"],
    ["Maktbalans", "Realism", "Starka stater balanseras av allianser av svagare"],
    ["Säkerhetsdilemma", "Realism", "En stats upprustning tvingar andra rusta upp"],
    ["Rationell aktör", "Realism", "Stater antas räkna kostnad/vinst"],
    ["Interdependens", "Liberalism", "Ömsesidigt beroende som minskar konfliktrisk"],
    ["Demokratisk fred", "Liberalism", "Tesen att demokratier inte krigar mot varandra"],
    ["Mjuk makt", "Liberalism", "Inflytande genom attraktion istället för tvång"],
    ["Institutionalism", "Liberalism", "Tron på att FN/EU/WTO stabiliserar relationer"],
    ["Global styrning", "Liberalism", "Internationell politik styrs genom regler, inte bara makt"],
], col_widths_cm=[3.5, 3.0, 9.5])

doc.save(OUT_ELEV)
print(f"Saved: {OUT_ELEV}")
