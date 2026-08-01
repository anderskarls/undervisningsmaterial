"""Generate lektion-8.docx + elevuppgift-lektion-8.docx."""

import sys
sys.path.insert(0, "/home/anders/Second brain/resources/globalisering-docx-gen")

from docx_helper import (
    make_document, add_title, add_h1, add_h2, add_h3,
    add_para, add_rich_para, add_bullet, add_table, add_infobox, add_page_break
)

# =================== LEKTIONSPLAN ===================

OUT_PLAN = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/lektion-8.docx"

doc = make_document("Lektion 8 | Sida ")
add_title(doc, "Lektion 8: Presentation, inlämning och syntes",
          "Lärarens lektionsplan — Samhällskunskap 3")

add_table(doc, [
    ["Kurs", "Samhällskunskap 3 (SAMSAM03)"],
    ["Moment", "Globalisering — Från vardag till världssystem"],
    ["Lektionslängd", "80 minuter"],
    ["Position i momentet", "8 av 8 — slutlektionen"],
], col_widths_cm=[5.0, 11.0])

add_h1(doc, "Syfte")
add_para(doc,
    "Avsluta momentet. Tre samtidiga mål: (1) låta elever som valt muntligt format "
    "genomföra sin presentation inför klass, (2) säkerställa att text-elever har "
    "lämnat in, (3) göra en syntessession som binder ihop hela momentet och kopplar "
    "tillbaka till L1:s utility-value-övning."
)

add_h1(doc, "Lärandemål som adresseras")
add_bullet(doc, "LM 4 — muntlig presentation (kärnträning för muntliga)")
add_bullet(doc, "Allt — syntessessionen knyter ihop helheten")

add_h1(doc, "Förberedelse")
add_bullet(doc, "Samla in alla texter innan lektion (digitalt)")
add_bullet(doc, "Ha listan över muntliga presentationer klar (namn + objekt + ordning)")
add_bullet(doc, "Om fler än ~5 muntliga: dela klass i två grupper")
add_bullet(doc, "Skriv ut 22 st arbetsblad (elevuppgift-lektion-8.docx)")
add_bullet(doc, "Projektor klar för muntliga presentationer")
add_bullet(doc, "Om möjligt: L1:s utility-value-skrivningar tillhanda")
add_bullet(doc, "Post-it för sista exit ticket")

add_h1(doc, "Tidsplanering")
add_table(doc, [
    ["Tid", "Fas", "Aktivitet"],
    ["0-8 min", "1. Retrieval review", "Snabb återblick + status"],
    ["8-13 min", "2. Målaktivering", "Strukturen för dagen"],
    ["13-18 min", "3. Kort intro", "Lyssnarmall + aktivt lyssnande"],
    ["18-63 min", "4. Guidad övning", "Muntliga presentationer (8-10 min + 2-3 min frågor per elev)"],
    ["63-70 min", "5. Syntessession", "Koppling tillbaka till L1:s utility-value"],
    ["70-80 min", "6. Avslut", "Slutlig exit ticket + självreflektion"],
], col_widths_cm=[2.5, 3.5, 10.0])

add_rich_para(doc, [
    ("Elevaktiv tid: ", {"bold": True}),
    ("variabel — minst 68%. Högre om många muntliga.", {})
])

add_h1(doc, "Lärarinstruktioner")

add_h2(doc, "Fas 4 — Muntliga presentationer")
add_bullet(doc, "Turordning: fråga vilka som vill börja. Slut med någon som behöver trygghet.")
add_bullet(doc, "Efter varje: 2-3 frågor från publiken. Prioritera elev-till-elev.")
add_bullet(doc, "Bedömningsanteckningar dolda — eleverna ska inte se dig anteckna betyg.")
add_bullet(doc, "Tidtagning: tydlig. 1-min-varning. Stoppa efter 10 min — vänligt men bestämt.")
add_bullet(doc, "Tekniskt strul: backup (USB, e-post med PDF). Om projektor strejkar — presentera utan slides.")

add_h3(doc, "Nervositet")
add_para(doc,
    "Om elev är uppenbart nervös: \"Ta en djup andning. Vi är här för att lyssna. "
    "Berätta om ditt objekt.\" Rädda inte från obehagliga pauser — de är naturliga."
)

add_h2(doc, "Fas 5 — Syntessession (pedagogiskt viktigaste avslutningen)")
add_bullet(doc, "\"I L1 bad jag er skriva varför detta kan vara relevant. Ta fram den anteckningen. Läs den. Vad tänker du nu?\"")
add_bullet(doc, "Par 2 min, helklass 5 min")
add_bullet(doc, "Frågor: Är det relevant på annat sätt? Vilket begrepp sitter kvar? Ser ni era vardagsval annorlunda?")
add_bullet(doc, "⭐ \"Förklara globalisering för en 12-åring — hur? Med vilket exempel?\"")

add_h2(doc, "Fas 6 — Exit ticket + självreflektion")
add_bullet(doc, "Exit ticket är kumulativ — bad eleven minnas L1")
add_bullet(doc, "Samla in noggrant — använd för momentgenomlysning")
add_bullet(doc, "Självreflektionsformuläret användbart i betygssamtal")

add_h1(doc, "Differentiering")
add_h2(doc, "Stöd (mot E)")
add_bullet(doc, "Nervösa: erbjud ordning (inte först, inte sist)")
add_bullet(doc, "Läs-svårigheter: stickord på kort tillåtet i muntligt")
add_bullet(doc, "Text-elever med saknade krav: kort möte innan lektion om komplettering")

add_h2(doc, "Utmaning (mot A)")
add_bullet(doc, "Uppmaning inför muntliga: \"Inkludera ett motargument du bemöter.\"")
add_bullet(doc, "Publikfråga: \"Vilken teori är svagast för ditt case — varför?\"")

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Vad visste du inte vid lektion 1 som du vet nu? Ge ett konkret exempel. "
     "Och: vilken av de tre teorierna tyckte du var mest användbar?\"", {"italic": True}),
])

add_h1(doc, "Koppling till kunskapskrav")
add_para(doc, "Lektionen är slutpunkten. Bedömning av slutuppgiften sker utifrån:")
add_bullet(doc, "LM 1 — E/C/A: teorianvändning (redogöra, diskutera)")
add_bullet(doc, "LM 2 — E/C/A: tillämpning på objektet")
add_bullet(doc, "LM 3 — E/C/A: begreppsanvändning i debatten")
add_bullet(doc, "LM 4 — E/C/A: argumentation, källhantering, presentationsform")
add_para(doc, "Full kunskapskravsmatris finns i examination-instruktion.docx.")

add_h1(doc, "Efter lektionen")
add_bullet(doc, "Samma dag / dagen efter: bedöm alla slutuppgifter")
add_bullet(doc, "Återkoppla inom 1 vecka — skriftlig kommentar + betygsindikation")
add_bullet(doc, "Samla data (exit tickets, självreflektioner) som underlag för momentgenomlysning")
add_bullet(doc, "Uppdatera kursminnet (samhallskunskap-3.md) baserat på erfarenheterna")

add_h1(doc, "Om tid saknas / går snabbare")
add_bullet(doc, "Presentationer tar längre än 45 min → kapa syntessession (3 min par + 2 min helklass)")
add_bullet(doc, "Exit ticket ska alltid göras, även om lektionen överskjuter 2 min")
add_bullet(doc, "Om snabbare än väntat → längre meta-reflektion + mer tid på syntessessionen")

doc.save(OUT_PLAN)
print(f"Saved: {OUT_PLAN}")


# =================== ELEVUPPGIFT ===================

OUT_ELEV = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/elevuppgift-lektion-8.docx"

doc = make_document("Lektion 8 | Sida ")
add_title(doc, "Lektion 8: Presentation, inlämning och syntes",
          "Elevuppgifter — Samhällskunskap 3")

add_para(doc,
    "Sista lektionen. Idag presenterar några av er muntligt, andra har lämnat in text. "
    "Vi avslutar med syntes och reflektion."
)

add_h1(doc, "Lyssnarmall (fylls i under presentationerna)")
add_para(doc,
    "För varje muntlig presentation du lyssnar på, fyll i nedan. Detta är inte betyg "
    "— det är ditt aktiva lyssnande. Du lär dig genom att analysera andra arbeten."
)

for i in range(1, 6):
    add_h2(doc, f"Presentation {i}")
    add_table(doc, [
        ["Fråga", "Ditt svar"],
        ["Presentatörens namn", ""],
        ["Objekt/fenomen", ""],
        ["Frågeställning (kort)", ""],
        ["Vilka dimensioner syntes (Held)?", ""],
        ["Använde centrum-periferi? Hur?", ""],
        ["Realism eller liberalism nämnd?", ""],
        ["Minst två källor redovisade?", ""],
        ["Det starkaste i presentationen:", ""],
        ["En fråga jag ställer:", ""],
    ], col_widths_cm=[6.0, 10.0])
    if i < 5:
        add_para(doc, "")

add_page_break(doc)

add_h1(doc, "Slutreflektionsformulär")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("10 min i slutet av lektionen", {})])
add_para(doc, "Skriv 1-3 meningar per fråga. Ärlighet är viktigare än längd.")

add_h2(doc, "1. Vad kan du nu som du inte kunde vid L1?")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h2(doc, "2. Vilken av de tre teorierna tycker du är mest användbar? Varför?")
add_bullet(doc, "☐ Globaliseringsdimensioner (Held m.fl.)")
add_bullet(doc, "☐ Centrum-periferi (Wallerstein)")
add_bullet(doc, "☐ Realism/liberalism (IR-teorier)")
add_rich_para(doc, [("Motivering:", {"bold": True})])
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h2(doc, "3. Vilken teori var svårast att förstå? Varför?")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h2(doc, "4. Vad kommer du minnas från momentet om 1 år?")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h2(doc, "5. Om du skulle göra slutuppgiften igen — vad skulle du göra annorlunda?")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h2(doc, "6. ⭐ Hur har ditt tänkande om globalisering förändrats?")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_page_break(doc)

add_h1(doc, "Självvärdering (valfri)")
add_para(doc, "Fyll i om du vill få syn på ditt eget arbete inför betygssamtal.")

add_h2(doc, "Hur tycker du att du ligger — med kunskapskraven i åtanke?")
add_table(doc, [
    ["Lärandemål", "Din självvärdering"],
    ["LM 1: Redogöra för teorierna + diskutera styrkor/svagheter", "☐ E ☐ C ☐ A ☐ osäker"],
    ["LM 2: Tillämpa teorierna i flerskalanalys", "☐ E ☐ C ☐ A ☐ osäker"],
    ["LM 3: Ge exempel på hur vetenskapliga begrepp används i debatten", "☐ E ☐ C ☐ A ☐ osäker"],
    ["LM 4: Argumentera, värdera, källhantera, presentera", "☐ E ☐ C ☐ A ☐ osäker"],
], col_widths_cm=[9.0, 7.0])

add_h2(doc, "Kommentar om var din styrka ligger")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h2(doc, "Kommentar om vad du skulle behöva utveckla mer")
add_para(doc, "_______________________________________________________________")
add_para(doc, "_______________________________________________________________")

add_h1(doc, "Exit ticket (skrivs i slutet av lektionen)")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Vad visste du inte vid lektion 1 som du vet nu? Ge ett konkret exempel. Och: "
     "vilken av de tre teorierna tyckte du var mest användbar?\" (3-5 meningar)",
     {"italic": True}),
])

add_h1(doc, "Efter momentet — vad händer?")
add_bullet(doc, "Text-elever: bedömning av din inlämning inom 1 vecka")
add_bullet(doc, "Muntliga: bedömning utifrån presentation + lyssnarmallen som stödverktyg")
add_bullet(doc, "Återkoppling kommer skriftligt med kommentarer")

add_para(doc, "")
add_rich_para(doc, [
    ("Tack för momentet! ", {"bold": True}),
    ("Ni har rört er från en T-shirt till tre teorier — till er egen analys. "
     "Det är bildning i handling.", {})
])

doc.save(OUT_ELEV)
print(f"Saved: {OUT_ELEV}")
