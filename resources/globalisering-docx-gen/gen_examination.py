"""Generate examination-instruktion.docx."""

import sys
sys.path.insert(0, "/home/anders/Second brain/resources/globalisering-docx-gen")

from docx_helper import (
    make_document, add_title, add_h1, add_h2, add_h3,
    add_para, add_rich_para, add_bullet, add_table, add_infobox, add_page_break
)

OUT = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/examination-instruktion.docx"

doc = make_document("Slutuppgift | Sida ")
add_title(doc, "Slutuppgift — Globalisering", "Från vardag till världssystem")

add_table(doc, [
    ["Kurs", "Samhällskunskap 3 (SAMSAM03)"],
    ["Moment", "Globalisering — Från vardag till världssystem"],
], col_widths_cm=[5.0, 11.0])

add_rich_para(doc, [
    ("Slutuppgiften är individuell. Du väljer själv format — men ", {}),
    ("analyskraven är identiska.", {"bold": True})
])

add_h1(doc, "Syfte")
add_para(doc,
    "Du ska visa att du kan använda samhällsvetenskapliga teorier för att analysera "
    "globaliseringens påverkan på ett konkret objekt genom tre skalor (individ → "
    "Sverige → värld). Uppgiften tränar alla fyra lärandemål i momentet."
)

add_h1(doc, "Format — du väljer ett")

add_h2(doc, "Alternativ A: Utredande text (2-3 sidor)")
add_bullet(doc, "Cirka 1 000-1 500 ord")
add_bullet(doc, "Sammanhängande text med rubriker om det hjälper strukturen")
add_bullet(doc, "Källhänvisningar löpande (Oxford eller Harvard — välj ett system)")
add_bullet(doc, "Källförteckning sist")
add_bullet(doc, "Lämnas in digitalt senast L8 morgon (exakt deadline meddelas)")

add_h2(doc, "Alternativ B: Muntlig presentation (8-10 min)")
add_bullet(doc, "Presenteras inför klass i L8")
add_bullet(doc, "Får gärna använda fysiskt objekt + slides (stöd, inte manus)")
add_bullet(doc, "Besvarar 2-3 frågor från publik/lärare (ca 2-3 min)")
add_bullet(doc, "Källor redovisas muntligt (3-5 centrala) — gärna på slut-slide")

add_h1(doc, "Krav — gäller båda formaten")
add_bullet(doc, "Objekt/fenomen: ett specifikt vardagsobjekt eller aktuellt globaliseringsfenomen")
add_bullet(doc, "Tre skalor: individ/vardag, Sverige, värld")
add_bullet(doc, "Tre teorier används (inte bara nämns): Held, Wallerstein, realism/liberalism")
add_bullet(doc, "Minst två källor — varav minst en akademisk / statistik / kvalitativ journalistisk")
add_bullet(doc, "Diskussion av teoriernas styrkor och svagheter — minst en teori")
add_bullet(doc, "Egen ståndpunkt med argument (fakta + resonemang)")
add_bullet(doc, "Strukturerad form: inledning → huvuddel → värdering → slutsats")

add_page_break(doc)

add_h1(doc, "Kunskapskravsmatris")

add_h2(doc, "LM 1 — Redogöra för och kritiskt diskutera teorier")
add_table(doc, [
    ["Nivå", "Vad som krävs"],
    ["E", "Översiktligt redogör för teorierna. Översiktligt diskuterar styrkor/svagheter "
          "hos någon teori, med någon vetenskapsteoretisk koppling."],
    ["C", "Utförligt redogör. Utförligt diskuterar styrkor/svagheter."],
    ["A", "Utförligt och nyanserat redogör ur olika perspektiv. Utförligt och nyanserat "
          "diskuterar styrkor/svagheter."],
], col_widths_cm=[2.0, 14.0])

add_h2(doc, "LM 2 — Tillämpa teorier i flerskalanalys")
add_table(doc, [
    ["Nivå", "Vad som krävs"],
    ["E", "Använder begrepp/teorier med viss säkerhet. Identifierar orsaker och "
          "konsekvenser. Diskuterar översiktligt möjliga lösningar."],
    ["C", "Använder med viss säkerhet. Diskuterar utförligt orsaker, konsekvenser, lösningar."],
    ["A", "Använder med säkerhet. Diskuterar utförligt och nyanserat."],
], col_widths_cm=[2.0, 14.0])

add_h2(doc, "LM 3 — Vetenskapliga begrepp i samhällsdebatten ⭐")
add_table(doc, [
    ["Nivå", "Vad som krävs"],
    ["E", "Ger något exempel på hur vetenskapliga begrepp används i debatten. Översiktligt."],
    ["C", "Ger några exempel. Utförligt."],
    ["A", "Ger några exempel. Utförligt och nyanserat."],
], col_widths_cm=[2.0, 14.0])

add_h2(doc, "LM 4 — Argumentera, värdera, källhantera, presentera")
add_table(doc, [
    ["Nivå", "Vad som krävs"],
    ["E", "Enkla argument. Enkla omdömen. Enkla reflektioner. Strukturerat. Minst två "
          "källor med grundläggande hänvisning."],
    ["C", "Välgrundade argument. Enkla omdömen. Välgrundade reflektioner utifrån syftet. "
          "Strukturerat + självständigt."],
    ["A", "Välgrundade och nyanserade argument. Nyanserade omdömen. Välgrundade och "
          "nyanserade reflektioner. Med säkerhet + självständigt."],
], col_widths_cm=[2.0, 14.0])

add_page_break(doc)

add_h1(doc, "Exempel på bra frågeställningar")

add_h2(doc, "Svagare (för brett eller vag):")
add_bullet(doc, "❌ \"Är globaliseringen bra?\"")
add_bullet(doc, "❌ \"Hur påverkar globaliseringen världen?\"")

add_h2(doc, "Bättre (avgränsat och svarbart):")
add_bullet(doc, "✓ \"Hur formar globaliseringens fyra dimensioner produktion och konsumtion av kaffe i Sverige?\"")
add_bullet(doc, "✓ \"Var placerar sig Volvo Cars i världssystemet — och vilka aktörer vinner/förlorar?\"")
add_bullet(doc, "✓ \"Hur förklarar realism respektive liberalism EU:s tullar på kinesiska elbilar?\"")
add_bullet(doc, "✓ \"Vad blir synligt — och vad osynligt — när vi analyserar ett Netflix-abonnemang genom alla tre teorier?\"")

add_h2(doc, "Starkare (inbjuder motargument):")
add_bullet(doc, "⭐ \"Förklaras svensk elprischock 2022-25 bättre av Wallerstein eller liberalism — varför?\"")
add_bullet(doc, "⭐ \"Är Sveriges position i världssystemet dubbel — hur kan det hanteras analytiskt?\"")

add_h1(doc, "Struktur — förslag")

add_h2(doc, "För utredande text")
add_rich_para(doc, [("Inledning (ca 10%): ", {"bold": True}),
    ("Konkret ingång med ditt objekt + frågeställning + relevans + kort om teorier.", {})])
add_rich_para(doc, [("Huvudanalys (ca 65%): ", {"bold": True}),
    ("Individnivå → Sverige → värld. Alla tre teorier används.", {})])
add_rich_para(doc, [("Värdering (ca 15%): ", {"bold": True}),
    ("Styrkor och svagheter hos teorierna. Vad förklarade bäst?", {})])
add_rich_para(doc, [("Slutsats + ståndpunkt (ca 10%): ", {"bold": True}),
    ("Svar på frågan. Argument för din ståndpunkt.", {})])

add_h2(doc, "För muntlig presentation")
add_para(doc, "Samma struktur. Tidsfördelning finns i elevuppgift-lektion-7.docx.")

add_page_break(doc)

add_h1(doc, "Timing")
add_table(doc, [
    ["Lektion", "Vad du ska ha gjort"],
    ["L6", "Val av objekt, format, första frågeställning"],
    ["L7", "Första utkast + minst 2 källor + peer-feedback"],
    ["L8", "Inlämning (text) eller presentation (muntligt)"],
], col_widths_cm=[3.0, 13.0])

add_h1(doc, "Vanliga fallgropar — undvik dem")
add_table(doc, [
    ["Fallgrop", "Åtgärd"],
    ["För brett objekt", "Välj en specifik sak — din kaffekopp, inte \"kaffe-industrin\""],
    ["Beskriver teorier utan att tillämpa", "Använd teorin aktivt (\"enligt Held...\", \"i Wallersteins modell...\")"],
    ["Glömmer en av tre skalor", "Checklista: individ, Sverige, värld?"],
    ["Skriver inget om teoriernas svagheter", "Minst en teori ska få en \"men\""],
    ["Saknar egen ståndpunkt", "Efter analysen — vad tycker DU? Argumentera."],
    ["Otydliga källor", "Författare, år, titel, utgivare. Webb: URL + hämtdatum."],
    ["Bara en källa", "Minst två. Varav en \"tung\""],
], col_widths_cm=[6.0, 10.0])

add_h1(doc, "Hur bedöms det?")
add_para(doc,
    "Bedömningen sker holistiskt utifrån kunskapskravsmatrisen. Läraren ser hela "
    "arbetet och väger in alla fyra lärandemål. Du kan få olika nivå i olika "
    "lärandemål. Betyget på slutuppgiften är sammantaget."
)
add_para(doc,
    "Betyg på kursen bygger på hela kursens underlag, inte bara denna uppgift."
)

add_h1(doc, "Om något är oklart")
add_para(doc, "Kontakta läraren senast L6 om du är osäker på:")
add_bullet(doc, "Objektval")
add_bullet(doc, "Formatval")
add_bullet(doc, "Frågeställning")
add_bullet(doc, "Källor")
add_para(doc, "Efter L6 är sen kontakt OK — men tiden är kortare.")

add_para(doc, "")
add_rich_para(doc, [("Lycka till!", {"bold": True, "italic": True})])

doc.save(OUT)
print(f"Saved: {OUT}")
