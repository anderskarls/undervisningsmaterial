"""Generate lektion-3.docx + elevuppgift-lektion-3.docx."""

import sys
sys.path.insert(0, "/home/anders/Second brain/resources/globalisering-docx-gen")

from docx_helper import (
    make_document, add_title, add_h1, add_h2, add_h3,
    add_para, add_rich_para, add_bullet, add_table, add_infobox, add_page_break
)

# =================== LEKTIONSPLAN ===================

OUT_PLAN = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/lektion-3.docx"

doc = make_document("Lektion 3 | Sida ")
add_title(doc, "Lektion 3: Produktionskedjan — vem vinner, vem förlorar?",
          "Lärarens lektionsplan — Samhällskunskap 3")

add_table(doc, [
    ["Kurs", "Samhällskunskap 3 (SAMSAM03)"],
    ["Moment", "Globalisering — Från vardag till världssystem"],
    ["Lektionslängd", "80 minuter"],
    ["Position i momentet", "3 av 8 — andra teorilektionen"],
], col_widths_cm=[5.0, 11.0])

add_h1(doc, "Syfte")
add_para(doc,
    "Introducera andra teoretiska verktyget: Wallersteins centrum-periferi-teori. Till "
    "skillnad från Held's dimensioner — som är deskriptiva — är centrum-periferi ett "
    "kritiskt verktyg som ställer frågan vem vinner och vem förlorar. Eleverna ska "
    "även använda källkritiken från föregående moment på två motstridiga källor om "
    "textilindustrin i Bangladesh."
)

add_h1(doc, "Lärandemål som adresseras")
add_bullet(doc, "LM 1 — Redogöra för centrum-periferi-teorin; diskutera styrkor och svagheter")
add_bullet(doc, "LM 2 — Tillämpa teorin på T-shirtens produktionskedja")
add_bullet(doc, "LM 4 — Söka, granska och tolka källor (kärntillfälle för källanalys)")

add_h1(doc, "Förberedelse")
add_bullet(doc, "Sortera L2:s exit tickets om mobilen i 3 högar")
add_bullet(doc, "Skriv ut 22 st arbetsblad (elevuppgift-lektion-3.docx)")
add_bullet(doc, "Whiteboard med förberedd tom 3-rings-modell (centrum-periferi)")
add_bullet(doc, "Projektorbild: produktionskedjan med aktörer i fokus")
add_bullet(doc, "Valfritt: kort ILO/FN-klipp om textilarbetares villkor (1-2 min) [VERIFIERA länk]")

add_h1(doc, "Retrieval review-koppling")
add_para(doc,
    "Baserat på L2:s exit ticket \"Vilken dimension dominerar i din egen mobiltelefon?\":"
)
add_bullet(doc,
    "Om hög 1 (svag motivering) dominerar → snabb repetition av alla fyra dimensionerna "
    "innan Wallerstein introduceras (2-3 min extra)."
)
add_bullet(doc,
    "Om hög 2-3 dominerar → kortare repetition (2 min), snabbare in i L3:s innehåll."
)

add_h1(doc, "Tidsplanering")
add_table(doc, [
    ["Tid", "Fas", "Aktivitet"],
    ["0-8 min", "1. Retrieval review",
     "L2-exit ticket-data visas + par-retrieval av dimensioner"],
    ["8-13 min", "2. Målaktivering",
     "Fråga som öppnar det kritiska lagret; Wallerstein introduceras; dagens kärnfråga"],
    ["13-28 min", "3. Explicit instruktion",
     "Centrum-periferi-modellen ritas; T-shirtens aktörer placeras med think-aloud"],
    ["28-58 min", "4. Guidad övning",
     "Källanalys av två motstridiga källor (EPA 5+15+10 min)"],
    ["58-73 min", "5. Självständig övning",
     "Placera T-shirtens aktörer i centrum-periferi-modellen"],
    ["73-80 min", "6. Avslut",
     "Exit ticket + preview L4"],
], col_widths_cm=[2.5, 3.5, 10.0])

add_rich_para(doc, [
    ("Elevaktiv tid: ", {"bold": True}),
    ("ca 58 min av 80 = 73%.", {})
])

add_h1(doc, "Lärarinstruktioner")

add_h2(doc, "Fas 1 — Retrieval review")
add_bullet(doc,
    "Använd L2-datan som levande material. \"Ni såg att ekonomin dominerar i mobilen. "
    "Men vilken ekonomi? Vems ekonomi? Det är dagens fråga.\""
)
add_bullet(doc,
    "Om hög 1 dominerar, snabbrepetition av alla fyra dimensionerna — 2 min."
)

add_h2(doc, "Fas 3 — Centrum-periferi")
add_bullet(doc,
    "Rita ringarna i den ordning du pratar: centrum → periferi → semi-periferi."
)
add_bullet(doc,
    "Think-aloud: \"Jag placerar Shein-företaget i centrum — de äger varumärket, "
    "designbeslut och kundrelationen. Jag placerar bomullsodlaren i periferin — "
    "låg förhandlingsstyrka, värdet skapas någon annanstans.\""
)
add_bullet(doc,
    "Nyckelformulering: \"Centrum och periferi är inte länder — det är positioner. "
    "Ett land kan ha centrum- och periferi-verksamhet samtidigt.\""
)
add_bullet(doc,
    "Osäkerhetsmodellering: \"Är Shein-fabriken i Kina periferi eller semi-periferi? "
    "Det är omstritt. Kina har blivit mer av ett centrum de senaste 20 åren.\""
)

add_h2(doc, "Fas 4 — Källanalys")
add_bullet(doc,
    "Poängen är INTE att välja den \"rätta\" källan — det är att se att olika "
    "positioner ger olika bilder."
)
add_bullet(doc,
    "Cirkulera. Kolla efter elever som stannar vid \"de ljuger\" — pressa vidare: "
    "\"Varför väljer de att framställa det så? Vad tjänar de på det?\""
)
add_bullet(doc,
    "Koppla tillbaka till källkritikmomentet: \"Ni frågade vem? när? varför? "
    "Använd det nu.\""
)

add_h2(doc, "Fas 5 — Placeringsövning")
add_bullet(doc,
    "Vanligaste misstaget: placering efter land istället för funktion. Korrigera: "
    "\"Vi placerar aktörer, inte länder.\""
)
add_bullet(doc,
    "Utmanande fråga: \"Var hamnar konsumenten? Är du i centrum eller periferi?\""
)

add_h2(doc, "Fas 6 — Exit ticket")
add_bullet(doc,
    "Sortera svaren i 3 högar: (1) entydigt utan nyans, (2) flera aktörer men "
    "saknar semi-periferi, (3) ser dynamik. Datan styr L4:s öppning."
)

add_h1(doc, "Differentiering")

add_h2(doc, "Alternativa representationsformer (UDL)")
add_bullet(doc, "Visuellt: Ringdiagram på tavlan; projektorbild av produktionskedjan")
add_bullet(doc, "Auditivt: Lärarens think-aloud; ev. kort ILO-klipp")
add_bullet(doc, "Textbaserat: Två A4-källor (pressmeddelande + intervju); analysmall")

add_h2(doc, "Stöd (mot E)")
add_bullet(doc, "Förifylld första rad i källanalysmallen som exempel")
add_bullet(doc, "Aktörslistan på projektorn under hela placeringsövningen")
add_bullet(doc, "Stödmeningar: \"Jag placerar ___ i centrum/periferi eftersom ___.\"")
add_bullet(doc, "Par med starkare elev under källanalysen")

add_h2(doc, "Utmaning (mot A)")
add_bullet(doc,
    "⭐ Kan samma aktör tillhöra olika ringar beroende på vilken del av verksamheten?"
)
add_bullet(doc,
    "⭐ Stämmer Wallersteins modell idag? Vad kritiseras? (valfritt utdrag, [VERIFIERA])"
)
add_bullet(doc,
    "⭐ Hur skulle centrum-periferi se ut för ett tjänstebaserat företag (Spotify)?"
)

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Vem är centrum, vem är periferi i T-shirtens kedja? Vilken aktör har mest makt?\"",
     {"italic": True}),
])
add_para(doc, "Sorteras i 3 högar. Styr L4:s öppning.")

add_h1(doc, "Koppling till kunskapskrav")
add_table(doc, [
    ["Nivå", "Vad tränas"],
    ["LM 1 — E", "Placeringsövningen visar grundförståelse av teorin"],
    ["LM 1 — C", "⭐-fråga om Wallerstein-kritik"],
    ["LM 2 — E", "Placeringsövningens motiveringar"],
    ["LM 2 — A", "Fördjupningsfrågan om modellen idag"],
    ["LM 4 — E", "Söker och granskar källor med enkla omdömen"],
    ["LM 4 — C", "Välgrundade omdömen vid helklassjämförelse"],
    ["LM 4 — A", "Nyanserade omdömen via ⭐-frågor"],
], col_widths_cm=[3.0, 13.0])

doc.save(OUT_PLAN)
print(f"Saved: {OUT_PLAN}")


# =================== ELEVUPPGIFT ===================

OUT_ELEV = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/elevuppgift-lektion-3.docx"

doc = make_document("Lektion 3 | Sida ")
add_title(doc, "Lektion 3: Produktionskedjan",
          "Elevuppgifter — Samhällskunskap 3")

add_para(doc,
    "Idag får du verktyg nummer 2: centrum-periferi-teorin (Wallerstein). Och du ska "
    "använda källkritiken från föregående moment på två motstridiga källor om "
    "textilindustrin i Bangladesh."
)

add_h1(doc, "Uppgift 1: Läs två källor — om samma fenomen")
add_rich_para(doc, [
    ("Tid: ", {"bold": True}),
    ("5 min enskild läsning + 15 min parvis analys", {})
])
add_para(doc,
    "Nedan följer två källor om textilindustrin i Bangladesh. Båda handlar om samma "
    "typ av fabriker. Men bilderna är inte desamma."
)

add_h2(doc, "Källa A: Pressmeddelande från GlobalTextile Group (fiktivt exempel)")
add_rich_para(doc, [("GlobalTextile lanserar lokalt partnerskap i Dhaka", {"bold": True})])
add_rich_para(doc, [("Pressmeddelande, november 2025", {"italic": True})])
add_para(doc,
    "GlobalTextile Group är stolta över att meddela att vårt tioåriga partnerskap "
    "med fabrikerna i Dhaka nu övergår till nästa fas: ett formellt \"Local "
    "Partnership Program\"."
)
add_para(doc,
    "Programmet innebär fortsatt investering i utbildning för över 12 000 anställda "
    "på våra tre partner-fabriker, liksom moderniserad utrustning som lever upp till "
    "internationella säkerhetsstandarder. Sedan 2015 har vi bidragit till att över "
    "40 000 personer fått stabila jobb i regionen — flertalet kvinnor som tidigare "
    "saknade arbetsmarknadstillträde."
)
add_para(doc,
    "\"Det är en vinst-vinst-relation,\" säger CEO Lars Petersson. \"Våra kunder får "
    "produkter av världsklass till tillgängliga priser. Våra partners i Bangladesh "
    "får ekonomisk tillväxt och kompetensutveckling. Och kvinnorna får möjlighet "
    "till ekonomiskt oberoende.\""
)
add_para(doc,
    "Fabrikerna är certifierade enligt SA8000-standarden och genomgår regelbundna "
    "oberoende revisioner."
)
add_para(doc,
    "GlobalTextile Group omsatte 4,8 miljarder kronor 2024 och har huvudkontor i Stockholm."
)

add_h2(doc, "Källa B: Intervju med Rina, fackrepresentant (fiktivt exempel)")
add_rich_para(doc, [("\"De kallar det partnerskap — vi kallar det löneslaveri\"", {"bold": True})])
add_rich_para(doc, [("Intervju publicerad i Arbetsrätt Global, januari 2026", {"italic": True})])
add_para(doc,
    "Rina Akhter, 34, är fackrepresentant för ett oberoende textilfack i Dhaka. Hon "
    "har arbetat i branschen sedan hon var 15 år. Idag representerar hon omkring "
    "2 000 anställda på tre fabriker som producerar åt europeiska märken."
)
add_rich_para(doc, [("Vad säger du om företagens \"lokala partnerskap\"?", {"bold": True})])
add_para(doc,
    "\"Det är marknadsföring. Vi ser certifikaten på väggen, men när inspektörerna "
    "kommer vet alla exakt vad de ska säga. Minimilönen i vår bransch är 12 500 taka "
    "i månaden — ungefär 1 100 svenska kronor. Det räcker inte till hyra, mat och "
    "skolavgifter. En kvinna med två barn har nästan inget kvar.\""
)
add_rich_para(doc, [("Men jobben fanns inte innan — är det inte bättre nu än ingenting?", {"bold": True})])
add_para(doc,
    "\"Det är en farlig logik. Vi jämför inte med ingenting. Vi jämför med rättvis "
    "lön för det arbete vi gör. Tröjan säljs för 79 kronor i Sverige. Min syster syr "
    "hundra i timmen. Räkna på det.\""
)
add_rich_para(doc, [("Vad vill ni?", {"bold": True})])
add_para(doc,
    "\"Tre saker. Kollektiv förhandlingsrätt som respekteras. Skyddad arbetstid — 48 "
    "timmar i veckan, inte 72. Och lön som möter levnadskostnaderna. Det är inte "
    "utopier. Det är internationell arbetsrätt.\""
)
add_para(doc,
    "Rina deltog i strejkerna 2023 som ledde till en höjning av minimilönen med 56% — "
    "enligt facket är den ändå inte tillräcklig."
)

add_page_break(doc)

add_h1(doc, "Uppgift 2: Källanalys — parvis")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("15 min parvis", {})])
add_para(doc,
    "Fyll i analysmallen nedan för båda källorna. Använd källkritiken från tidigare "
    "moment."
)

add_h2(doc, "Analysmall")
add_table(doc, [
    ["Fråga", "Källa A (Pressmeddelande)", "Källa B (Intervju)"],
    ["Vem står bakom källan?", "", ""],
    ["När är den publicerad?", "", ""],
    ["Varför skrevs den? Vad är syftet?", "", ""],
    ["Vilka fakta presenteras?", "", ""],
    ["Vad sägs INTE? Vilka aspekter utelämnas?", "", ""],
    ["Vilken bild av fabriken får läsaren?", "", ""],
], col_widths_cm=[5.0, 5.5, 5.5])

add_h2(doc, "Jämförelsefrågor (skriv 2-3 meningar per fråga)")
add_para(doc,
    "1. Båda källor är \"sanna\" i någon mening. Men hur kan de säga så olika saker "
    "om samma sak?"
)
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")
add_para(doc, "")
add_para(doc,
    "2. Vilken källa skulle du lita mest på om du skulle skriva ett seriöst inlägg "
    "om textilindustrin? Motivera."
)
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")
add_para(doc, "")

add_infobox(doc,
    "⭐ Utmaning mot A",
    "Kan en läsare förstå hela situationen genom att bara läsa den ena källan? "
    "Varför är det kritiskt att jämföra olika perspektiv?",
    "ffe66d"
)

add_page_break(doc)

add_h1(doc, "Uppgift 3: Placera aktörerna i centrum-periferi-modellen")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("15 min enskilt", {})])
add_para(doc,
    "Rita tre koncentriska ringar (eller använd mallen från läraren). Den innersta "
    "ringen är centrum, den mellersta är semi-periferi, den yttersta är periferi."
)
add_para(doc,
    "Placera varje aktör nedan i en ring. Skriv en kort motivering (1 mening) för "
    "varje placering."
)

add_h2(doc, "Aktörer att placera")
add_table(doc, [
    ["Aktör", "Ring (centrum / semi / periferi)", "Motivering"],
    ["Bomullsbonden i Indien", "", ""],
    ["Fabriksarbetaren i Dhaka", "", ""],
    ["Fabrikens ägare i Bangladesh", "", ""],
    ["Shein-företaget (ägarna)", "", ""],
    ["Plattformens utvecklare (kodare, designers)", "", ""],
    ["Konsumenten i Norrköping", "", ""],
    ["Lokala myndigheter i Dhaka", "", ""],
    ["En svensk fackförening (IF Metall)", "", ""],
], col_widths_cm=[5.0, 3.5, 7.5])

add_h2(doc, "Tips")
add_bullet(doc, "Centrum = hög-värde-aktiviteter, hög förhandlingsstyrka")
add_bullet(doc, "Periferi = låg-värde-aktiviteter, svag förhandlingsstyrka")
add_bullet(doc, "Semi-periferi = industriproduktion, växande makt men inte högsta beslutsnivå")
add_rich_para(doc, [
    ("Det handlar om position — inte om land. ", {"bold": True, "italic": True}),
    ("Ett land kan ha aktörer i flera ringar samtidigt.", {"italic": True})
])

add_infobox(doc,
    "⭐ Utmaning mot A",
    "Kan samma aktör tillhöra olika ringar beroende på vilken del av verksamheten man ser? "
    "Ge ett konkret exempel.",
    "ffe66d"
)

add_page_break(doc)

add_h1(doc, "Begreppslista — lektion 3")
add_table(doc, [
    ["Begrepp", "Enkel förklaring"],
    ["Centrum (Wallerstein)",
     "Positioner i världssystemet som fångar högst värde: design, varumärke, kapital"],
    ["Periferi",
     "Positioner som producerar råvaror eller standardiserad arbetskraft med svag förhandlingsposition"],
    ["Semi-periferi",
     "Mellannivå med industriproduktion och växande makt (t.ex. delar av Kina idag)"],
    ["Världssystem",
     "Wallersteins idé: världens ekonomi är ETT system där länder/aktörer är olika positionerade"],
    ["Ojämlikt utbyte",
     "Att värde systematiskt flödar från periferi till centrum"],
    ["Global värdekedja",
     "Kedjan från råvara till färdig produkt; varje led skapar olika mycket värde"],
    ["Partssammansatt analys",
     "Att analysera en fråga genom flera motstridiga perspektiv"],
], col_widths_cm=[5.0, 11.0])

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Vem är centrum, vem är periferi i T-shirtens kedja? Vilken aktör har mest makt?\" (2-3 meningar)",
     {"italic": True}),
])

doc.save(OUT_ELEV)
print(f"Saved: {OUT_ELEV}")
