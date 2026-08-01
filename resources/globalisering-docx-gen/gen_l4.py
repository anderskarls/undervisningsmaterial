"""Generate lektion-4.docx + elevuppgift-lektion-4.docx."""

import sys
sys.path.insert(0, "/home/anders/Second brain/resources/globalisering-docx-gen")

from docx_helper import (
    make_document, add_title, add_h1, add_h2, add_h3,
    add_para, add_rich_para, add_bullet, add_table, add_infobox, add_page_break
)

# =================== LEKTIONSPLAN ===================

OUT_PLAN = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/lektion-4.docx"

doc = make_document("Lektion 4 | Sida ")
add_title(doc, "Lektion 4: Sverige i världsekonomin",
          "Lärarens lektionsplan — Samhällskunskap 3")

add_table(doc, [
    ["Kurs", "Samhällskunskap 3 (SAMSAM03)"],
    ["Moment", "Globalisering — Från vardag till världssystem"],
    ["Lektionslängd", "80 minuter"],
    ["Position i momentet", "4 av 8 — meso-fokus (zoom ut till nationell nivå)"],
], col_widths_cm=[5.0, 11.0])

add_h1(doc, "Syfte")
add_para(doc,
    "Flytta fokus från T-shirt (mikro) till Sverige (meso). Tillämpa Held's dimensioner "
    "och Wallersteins centrum-periferi parallellt på två aktuella händelser: Trumps "
    "tullar mot EU 2024-25 och elpriser/Ukrainakrigets energieffekt. Samtidigt inleda "
    "kursens särskilda betoning (LM 3) — hur vetenskapliga begrepp används i "
    "samhällsdebatten."
)

add_h1(doc, "Lärandemål som adresseras")
add_bullet(doc, "LM 1 — Använda teorierna vid analys av Sveriges position")
add_bullet(doc, "LM 2 — Flerskalanalys (individ → Sverige → värld) med båda teorier")
add_bullet(doc, "LM 3 påbörjas — begreppsanvändning i debatten om svensk ekonomi")

add_h1(doc, "Förberedelse")
add_bullet(doc, "Sortera L3:s exit tickets i 3 högar")
add_bullet(doc, "Skriv ut 22 st arbetsblad (elevuppgift-lektion-4.docx)")
add_bullet(doc, "Projektorbilder: exportstatistik, centrum-periferi-karta, elprisdiagram [VERIFIERA källor]")
add_bullet(doc, "Fakta-rutor: Trumps tullar 2024-25 och Ukrainakrigets elpriser [VERIFIERA]")
add_bullet(doc, "Post-it-lappar för exit ticket")

add_h1(doc, "Retrieval review-koppling")
add_para(doc, "Baserat på L3:s exit ticket \"Vem är centrum, vem är periferi i T-shirtens kedja?\":")
add_bullet(doc, "Hög 1 (entydigt) → \"Centrum och periferi är positioner, inte länder. Vi testar det på Sverige idag.\"")
add_bullet(doc, "Hög 2 (flera aktörer) → \"Ni såg flera aktörer. Idag lägger vi till semi-periferin.\"")
add_bullet(doc, "Hög 3 (dynamik) → \"Ni ser att positioner skiftar. Har Sveriges skiftat?\"")

add_h1(doc, "Tidsplanering")
add_table(doc, [
    ["Tid", "Fas", "Aktivitet"],
    ["0-8 min", "1. Retrieval review", "Exit ticket-redovisning + par-delning om centrum/periferi"],
    ["8-13 min", "2. Målaktivering", "Sveriges topp-5 export + dagens två case (tullar + elpriser)"],
    ["13-28 min", "3. Explicit instruktion", "Parallell analys: Held + Wallerstein — lärarens think-aloud"],
    ["28-58 min", "4. Guidad övning", "Jämförelsematris Sverige/USA/Kina (EPA 5+15+10 min)"],
    ["58-73 min", "5. Självständig övning", "Kort skriftlig analys med stödmeningar"],
    ["73-80 min", "6. Avslut", "Exit ticket + preview L5 (teoridebatt)"],
], col_widths_cm=[2.5, 3.5, 10.0])

add_rich_para(doc, [("Elevaktiv tid: ", {"bold": True}), ("ca 58 min av 80 = 73%.", {})])

add_h1(doc, "Lärarinstruktioner")

add_h2(doc, "Fas 2 — Målaktivering")
add_bullet(doc, "Sverigekartan med exportvarorna är provokationen — eleverna tror ofta att Sverige är \"bara ett litet land\". Siffrorna visar en nyanserad position.")
add_bullet(doc, "[VERIFIERA siffror från SCB:s senaste handelsstatistik innan lektion]")

add_h2(doc, "Fas 3 — Think-aloud")
add_bullet(doc, "Centralt: visa hur du använder båda teorier samtidigt. Modellera rörelsen.")
add_bullet(doc, "Tabell på tavlan: rader = dimensioner, kolumner = Sverige/USA/Kina.")
add_bullet(doc,
    "Trumps tullar: \"Sverige säljer mycket till USA — tullarna kostar svenska företag. "
    "Men Sveriges produkter är ofta hög-värde (fordon, läkemedel, telekom). Vi är inte "
    "bara offer. Vi är också centrum för viss teknik. Det är en komplex position.\""
)
add_bullet(doc,
    "Elpriserna: \"Ukrainakriget ökade elpriset. Sverige importerar viss energi, "
    "exporterar el från vattenkraft. Dubbel position. EU:s gemensamma energimarknad. "
    "Konsumenter drabbas olika beroende på var de bor.\" [VERIFIERA]"
)

add_h2(doc, "Fas 4 — Jämförelsematris")
add_bullet(doc, "Kolla: använder eleverna begrepp eller bara vardagsord?")
add_bullet(doc, "Om bara vardagsord — påminn om begreppslistorna från L2-L3.")
add_bullet(doc, "Helklass: plocka exempel som visar E/C/A-nivåer, tala explicit om vad som är välargumenterat.")

add_h2(doc, "Fas 5 — Skriftlig analys")
add_bullet(doc, "Skrivandet är svagt hos klassen — var aktiv med stödmeningar och modellering.")
add_bullet(doc,
    "Om elever fastnar: peka på matrisen de just fyllde i. \"Du har analysen. Skriv "
    "den som sammanhängande text — börja med 'Sverige påverkas av ___ eftersom ___'.\""
)
add_bullet(doc, "Utmana snabba: \"Kan du använda alla fyra dimensioner OCH centrum-periferi i samma text?\"")

add_h2(doc, "Fas 6 — Exit ticket")
add_bullet(doc, "Sortera: (1) svag motivering, (2) ser olika jobb, (3) ser komplementaritet. Datan styr L5:s öppning.")

add_h1(doc, "Differentiering")
add_h2(doc, "Alternativa representationsformer (UDL)")
add_bullet(doc, "Visuellt: Exportdiagram, världskarta, elprisdiagram")
add_bullet(doc, "Auditivt: Lärarens think-aloud med parallell analys")
add_bullet(doc, "Textbaserat: Fakta-rutor + skrivmall")

add_h2(doc, "Stöd (mot E)")
add_bullet(doc, "Skrivmall med stödmeningar")
add_bullet(doc, "Begreppslista på tavlan under skrivfasen")
add_bullet(doc, "Ett delvis ifyllt exempel i matrisen")

add_h2(doc, "Utmaning (mot A)")
add_bullet(doc, "⭐ Har Sveriges position förändrats de senaste 30 åren? Ge exempel.")
add_bullet(doc, "⭐ Kan teorierna säga olika saker om samma fenomen? Konkret exempel.")
add_bullet(doc, "⭐ Skriv om samma analys från Kinas perspektiv.")

add_h1(doc, "Material")
add_bullet(doc, "22 st arbetsblad (elevuppgift-lektion-4.docx)")
add_bullet(doc, "Projektorbilder: exportstatistik, centrum-periferi-karta, elprisdiagram [VERIFIERA]")
add_bullet(doc, "Fakta-rutor: Trumps tullar, elpriser [VERIFIERA]")
add_bullet(doc, "L3:s exit tickets (sorterade)")
add_bullet(doc, "Post-it-lappar")

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Vilken teori förklarar bäst Sveriges roll — Held's dimensioner eller "
     "Wallersteins centrum-periferi? Motivera.\"", {"italic": True}),
])

add_h1(doc, "Koppling till kunskapskrav")
add_table(doc, [
    ["Nivå", "Vad tränas"],
    ["LM 1 — C", "Matrisdiskussion + exit ticket visar styrkor/svagheter"],
    ["LM 2 — E/C/A", "Hela lektionen: matris + skrift visar progression"],
    ["LM 3 — E", "Begreppsidentifiering i debatten (kort i fas 3)"],
    ["LM 4 — C", "Välgrundade argument + reflektioner i skriften"],
], col_widths_cm=[3.0, 13.0])

doc.save(OUT_PLAN)
print(f"Saved: {OUT_PLAN}")


# =================== ELEVUPPGIFT ===================

OUT_ELEV = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/elevuppgift-lektion-4.docx"

doc = make_document("Lektion 4 | Sida ")
add_title(doc, "Lektion 4: Sverige i världsekonomin",
          "Elevuppgifter — Samhällskunskap 3")

add_para(doc,
    "Idag zoomar vi ut från T-shirten till Sverige. Vi ska använda båda teoretiska "
    "verktygen (Held's dimensioner + Wallersteins centrum-periferi) på två aktuella "
    "händelser."
)

add_h1(doc, "Fakta-rutor: två aktuella händelser")

add_h2(doc, "Case 1 — Trumps tullar mot EU (2024-2025)")
add_infobox(doc,
    "Bakgrund",
    "Under 2024-25 införde USA under president Donald Trump nya tullar på en rad varor "
    "från EU, bland annat stål, fordon och vissa livsmedel. Syftet som angavs var att "
    "\"skydda amerikansk industri\" och få bort vad Trump kallade \"orättvisa "
    "handelsöverskott\". EU svarade med motsatta tullar på amerikanska produkter. "
    "För Sverige, som exporterar fordon (Volvo, Scania), stål och telekom-utrustning "
    "till USA, innebär detta ökade kostnader och risk för uteblivna order. "
    "EU-kommissionen har försökt förhandla men positionerna har stelnat.\n\n"
    "Källa: EU-kommissionens handelspolitiska rapporter 2024-25 (faktaruta för klassrumsbruk).",
    "e1f5fe"
)

add_h2(doc, "Case 2 — Elprischocken efter Ukrainakriget (2022-2025)")
add_infobox(doc,
    "Bakgrund",
    "När Ryssland invaderade Ukraina i februari 2022 stoppades gasleveranser från "
    "Ryssland till Europa. Tyskland och flera andra länder som använt rysk gas för "
    "elproduktion fick akut brist på energi. Eftersom Sverige är sammankopplat med "
    "Europas elmarknad via Nord Pool steg elpriserna dramatiskt även i södra Sverige "
    "(SE3, SE4). Vintern 2022-23 var elräkningarna flera gånger högre än tidigare. "
    "Samtidigt exporterar Sverige betydande mängder el från vattenkraft och kärnkraft "
    "i norr (SE1, SE2). Regeringen införde högkostnadsskydd. Debatten blev intensiv: "
    "borde Sverige vara mer självförsörjande? Är sammankopplingen med Europa ett ok "
    "eller en sårbarhet?\n\n"
    "Källa: Energimyndigheten, Energimarknadsinspektionen 2022-25 (faktaruta för klassrumsbruk).",
    "fff4e0"
)

add_page_break(doc)

add_h1(doc, "Uppgift 1: Jämförelsematris Sverige-USA-Kina")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("30 min (5 min enskilt + 15 min par + 10 min helklass)", {})])
add_para(doc, "Välj ett av de två casen (tullar eller elpriser). Fyll i matrisen med båda teorier.")

add_h2(doc, "Steg 1 — Välj case")
add_bullet(doc, "☐ Case 1: Trumps tullar")
add_bullet(doc, "☐ Case 2: Elprischocken")

add_h2(doc, "Steg 2 — Fyll i matrisen")
add_table(doc, [
    ["", "Sverige", "USA", "Kina"],
    ["Ekonomisk dimension", "", "", ""],
    ["Politisk dimension", "", "", ""],
    ["Kulturell dimension", "", "", ""],
    ["Social dimension", "", "", ""],
    ["Position (centrum / semi / periferi) + motivering", "", "", ""],
], col_widths_cm=[4.5, 3.8, 3.8, 3.8])

add_h2(doc, "Steg 3 — Par (15 min)")
add_para(doc, "Byt matris med ett par som valt det andra caset. Diskutera:")
add_bullet(doc, "Vad ser de som ni missade?")
add_bullet(doc, "Finns det mönster mellan de två casen?")
add_bullet(doc, "Var hamnar Sverige — samma eller olika position i båda casen?")

add_infobox(doc,
    "⭐ Utmaning mot A",
    "Har Sveriges position i världssystemet förändrats de senaste 30 åren? "
    "Ge ett exempel som stödjer din tes.",
    "ffe66d"
)

add_page_break(doc)

add_h1(doc, "Uppgift 2: Kort skriftlig analys")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("15 min enskilt skrivande", {})])
add_para(doc, "Skriv 8-12 meningar som svarar på:")
add_rich_para(doc, [
    ("\"Hur påverkas Sverige av [ditt valda case]? Använd både dimensionsbegreppen "
     "och centrum-periferi.\"", {"bold": True, "italic": True})
])

add_h2(doc, "Skrivmall med stödmeningar")
add_para(doc, "Här är en startstruktur. Ersätt rutorna med ditt eget innehåll.")

add_rich_para(doc, [("Inledning (1-2 meningar):", {"bold": True})])
add_para(doc, "Sverige påverkas av __________ eftersom __________________________________.")
add_para(doc, "")

add_rich_para(doc, [("Ekonomisk dimension (2-3 meningar):", {"bold": True})])
add_para(doc, "En ekonomisk aspekt är __________. Detta betyder för Sverige att __________.")
add_para(doc, "Ett konkret exempel är __________.")
add_para(doc, "")

add_rich_para(doc, [("Politisk dimension (1-2 meningar):", {"bold": True})])
add_para(doc, "Politiskt är __________ inblandat. Detta påverkar Sverige genom __________.")
add_para(doc, "")

add_rich_para(doc, [("Centrum-periferi-positionering (2-3 meningar):", {"bold": True})])
add_para(doc,
    "I Wallersteins modell positionerar jag Sverige som __________ eftersom __________.")
add_para(doc,
    "Samtidigt kan man säga att Sverige också har drag av __________ när det gäller __________.")
add_para(doc, "")

add_rich_para(doc, [("Avslutning (1-2 meningar):", {"bold": True})])
add_para(doc,
    "Sammanfattningsvis visar casen att Sveriges position är __________, och "
    "globaliseringen påverkar oss genom __________.")

add_infobox(doc,
    "⭐ Utmaning mot A",
    "Skriv samma analys igen — men från ett motsatt perspektiv. Hur skulle en "
    "analytiker i Kina se Sveriges position i samma case?",
    "ffe66d"
)

add_page_break(doc)

add_h1(doc, "Uppgift 3 (valfritt): Hur används ordet \"globalisering\" i debatten?")
add_para(doc, "Läs en valfri debattartikel eller ledare om något av casen. Notera:")
add_bullet(doc, "Används ordet \"globalisering\" positivt eller negativt?")
add_bullet(doc, "Vilka andra begrepp (\"frihandel\", \"självförsörjning\", \"beroende\") används?")
add_bullet(doc, "Vad sägs egentligen när någon säger \"globaliseringen har gått för långt\"?")
add_rich_para(doc, [("Skriv 3-4 meningar. Detta blir centralt i lektion 6.", {"bold": True})])

add_h1(doc, "Begreppslista — lektion 4")
add_table(doc, [
    ["Begrepp", "Enkel förklaring"],
    ["Tull", "Skatt på en vara när den passerar en landsgräns. Skyddar inhemsk industri eller används som förhandlingsvapen."],
    ["Handelsöverskott / underskott", "Överskott = exporterar mer än importerar. Används politiskt — men ekonomer är oense om hur viktigt det är."],
    ["Nord Pool", "Nordiska elbörsen där elen prissätts. Länkar samman nordiska elmarknader med kontinentala Europa."],
    ["Högkostnadsskydd", "Statlig ersättning till hushåll/företag för höga elkostnader (infördes 2022-23)."],
    ["Suveränitet", "En stats rätt att fatta egna beslut utan att andra lägger sig i."],
    ["Strategisk autonomi", "Att en stat/union kan agera utan att vara beroende av andra (EU:s strategiska autonomi)."],
    ["Frihandel", "Handel utan tullar eller kvoter."],
    ["Proteksjonism", "Motsats till frihandel — staten skyddar inhemsk industri."],
], col_widths_cm=[5.0, 11.0])

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Vilken teori förklarar bäst Sveriges roll — Held's dimensioner eller "
     "Wallersteins centrum-periferi? Motivera kort.\" (2-3 meningar)", {"italic": True}),
])

doc.save(OUT_ELEV)
print(f"Saved: {OUT_ELEV}")
