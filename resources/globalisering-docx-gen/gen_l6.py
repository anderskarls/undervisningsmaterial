"""Generate lektion-6.docx + elevuppgift-lektion-6.docx (reviderad version: WTO + vaccinapartheid)."""

import sys
sys.path.insert(0, "/home/anders/Second brain/resources/globalisering-docx-gen")

from docx_helper import (
    make_document, add_title, add_h1, add_h2, add_h3,
    add_para, add_rich_para, add_bullet, add_table, add_infobox, add_page_break
)

# =================== LEKTIONSPLAN ===================

OUT_PLAN = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/lektion-6.docx"

doc = make_document("Lektion 6 | Sida ")
add_title(doc, "Lektion 6: WTO och vaccinapartheid — när patenten väger tyngre än liv",
          "Lärarens lektionsplan — Samhällskunskap 3")

add_table(doc, [
    ["Kurs", "Samhällskunskap 3 (SAMSAM03)"],
    ["Moment", "Globalisering — Från vardag till världssystem"],
    ["Lektionslängd", "80 minuter"],
    ["Position i momentet", "6 av 8 — institutionsdjupdyk 1 av 2 (WTO)"],
], col_widths_cm=[5.0, 11.0])

add_h1(doc, "Syfte")
add_para(doc,
    "Konkretisera WTO som institution genom att analysera vaccinapartheid under "
    "COVID-19-pandemin. Eleverna möter Strive Masiyiwa, AU:s vaccinupphandlare som "
    "fanns på rummet när rika länder köpte upp hela 2021 års produktion, och Fatima "
    "Hassan, advokaten som drev TRIPS-waivern. Lektionen tillämpar Held + Wallerstein "
    "på en institution — inte en produktionskedja, inte en människas livsbana, utan "
    "en regelsamling som faktiskt avgör vem som lever och vem som dör."
)
add_para(doc,
    "Lektionen bygger samtidigt en bro till L7 (IMF): två institutioner som arvtagare "
    "av samma globala ordning, men med olika verktyg."
)

add_h1(doc, "Lärandemål som adresseras")
add_bullet(doc,
    "LM 1 — Tillämpa Held + Wallerstein på en internationell institution. Se vad "
    "teoriernas styrkor/svagheter blir när ramverket flyttas från produktion (L3) "
    "till regelmakt"
)
add_bullet(doc,
    "LM 2 — Flerskalanalys: en patent (mikro: enskild läkemedelsdos) → ett globalt "
    "avtal (makro: TRIPS) → konsekvens i ett enskilt land (Sydafrika 2021)"
)
add_bullet(doc,
    "LM 4 — Värdera motstridiga ståndpunkter: läkemedelsbolagens innovationsargument "
    "vs. WHO/civilsamhällets jämlikhetsargument"
)

add_h1(doc, "Förberedelse")
add_bullet(doc,
    "Läs L5:s exit ticket-svar (\"Vilken person utmanade din bild av globalisering "
    "mest?\") och sortera i tre högar: (1) personlig reaktion utan teorianvändning, "
    "(2) kopplar till en teori, (3) kopplar till båda. Datan styr fas 1."
)
add_bullet(doc, "Skriv ut 22 st arbetsblad (elevuppgift-lektion-6.docx).")
add_bullet(doc,
    "Projektorbild 1: Vaccintäckning per kontinent december 2021 (statistik som "
    "chock-öppning — Afrika ca 8 %, EU/USA ca 70 %)"
)
add_bullet(doc,
    "Projektorbild 2: Worked example-modellering på Strive Masiyiwa — Held + "
    "Wallerstein steg-för-steg"
)
add_bullet(doc,
    "Projektorbild 3: TRIPS-tidslinjen (1995 avtal → 2001 Doha-deklaration → 2020 "
    "waiver-förslag → 2022 kompromiss)"
)
add_bullet(doc, "Tavelyta förberedd: tre kolumner — aktörer / regler / konsekvenser")
add_bullet(doc, "Post-it för exit ticket")
add_bullet(doc,
    "Lärarens egna närläsning av Masiyiwa-citat före lektion: \"This is a deliberate "
    "global architecture of unfairness.\" — vad gör ordet deliberate? Vad gör architecture?"
)

add_h1(doc, "Retrieval review-koppling")
add_para(doc,
    "Baserat på L5:s exit ticket \"Vilken av de fem personerna utmanade din bild av "
    "globalisering mest — och varför?\"."
)
add_rich_para(doc, [
    ("Lärarens öppning: ", {"bold": True}),
    ("\"Igår mötte ni fem personer i världssystemet. Idag möter ni en sjätte — men "
     "han representerar inte sig själv. Han representerade 1,3 miljarder afrikaner "
     "när han satt vid bordet med läkemedelsbolagen 2020. Han fick veta: 'allt är "
     "sålt'. Idag undersöker vi VEM som beslutar om sådant.\"", {"italic": True}),
])
add_bullet(doc,
    "Hög 1 (personlig reaktion, ingen teori) → påminn: \"Att reagera är lätt. Att "
    "se HUR systemet är byggt är svårare. Idag tittar vi på BYGGNADEN — institutionen "
    "som sätter reglerna.\""
)
add_bullet(doc,
    "Hög 2-3 (kopplar till teorier) → brygga: \"Ni använder begreppen. Idag möter ni "
    "institutionen som faktiskt skriver dem — WTO.\""
)

add_h1(doc, "Tidsplanering")
add_table(doc, [
    ["Tid", "Fas", "Aktivitet", "Beskrivning"],
    ["0-8 min", "1. Retrieval review", "Exit ticket-redovisning + öppning",
        "Visa L5-fördelningen. \"Hittills: T-shirt → Sverige → människor. Idag: "
        "institutionen som sätter ramen för allt.\""],
    ["8-13 min", "2. Målaktivering", "Vaccintäckningsstatistiken (chock-öppning)",
        "Visa kartan: Afrika 8 %, EU/USA 70 % i december 2021. Tystnad. Läraren: "
        "\"Vad är det vi ser? Vad förklarar denna skillnad?\" Låt eleverna spekulera. "
        "Skriv hypoteser på tavlan. \"Idag ska vi pröva en förklaring: WTO.\""],
    ["13-28 min", "3. Explicit instruktion", "Worked example: Strive Masiyiwa december 2020",
        "Läraren tillämpar Held + Wallerstein steg-för-steg på Masiyiwas berättelse om "
        "förhandlingen med läkemedelsbolagen (think-aloud). Visa TRIPS-tidslinjen. "
        "Förklara TRIPS-waiver-förslaget oktober 2020. Eleverna ser HUR man tillämpar "
        "teorierna på en institution."],
    ["28-58 min", "4. Guidad övning", "Källanalys i par: två motstridiga texter",
        "Två texter (~½ A4 vardera) — (A) läkemedelsindustrins position om varför "
        "TRIPS-waivern var fel, (B) Fatima Hassan + WHO:s position om varför den var "
        "nödvändig. Eleverna fyller i analysmall (begrepp/teorier-implicit/antaganden/"
        "luckor). 20 min par + 10 min helklass på tavla i tre spalter."],
    ["58-73 min", "5. Självständig övning", "Skriftlig analys (10-12 meningar)",
        "\"Tillämpa Held + Wallerstein på WTO. Var sitter centrum, semi-periferi och "
        "periferi i vaccinapartheid-konflikten? Vilken av Helds dimensioner dominerar "
        "institutionen — och vilka dimensioner får den att 'försvinna'?\" Skrivmall "
        "med stödmeningar i elevuppgiften."],
    ["73-80 min", "6. Avslut", "Exit ticket + preview L7",
        "Exit ticket: \"Är WTO en institution som driver globalisering eller som "
        "förhandlar dess konsekvenser?\" Preview: \"Idag: WTO sätter handelns regler. "
        "Imorgon: IMF — vad händer när ett land inte kan betala sina skulder? Vi "
        "möter en argentinsk pensionär.\""],
], col_widths_cm=[1.8, 2.2, 4.0, 8.0])

add_rich_para(doc, [("Elevaktiv tid: ", {"bold": True}), ("ca 60 min av 80 = 75 %.", {})])

add_h1(doc, "Lärarinstruktioner")

add_h2(doc, "Fas 2 — Målaktivering (chocköppning)")
add_para(doc,
    "Statistiken är hooken. Kör tystnad. Säg ingenting i 10-15 sekunder efter att "
    "kartan visas. Låt skillnaden landa."
)
add_rich_para(doc, [
    ("Sedan: ", {"bold": True}),
    ("\"Det här är inte en katastrof som råkade hända. Det här är resultatet av "
     "REGLER. Idag undersöker vi vilka regler — och vem som skrev dem.\"",
     {"italic": True}),
])

add_h2(doc, "Fas 3 — Worked example (Strive Masiyiwa)")
add_rich_para(doc, [
    ("Detta är lektionens pedagogiska kärna. ", {"bold": True}),
    ("Centralt: visa rörelsen mellan teorierna OCH agensen — Masiyiwa hade pengar, "
     "vilja, kontrakt-kapacitet. Det räckte inte. Det är poängen.", {})
])

add_rich_para(doc, [("Föreslagen think-aloud:", {"bold": True})])
add_para(doc,
    "\"Strive Masiyiwa är en miljardär. Han har Econet Wireless, ett av Afrikas "
    "största företag. December 2020 sitter han vid bordet med Pfizer, Moderna, "
    "AstraZeneca. Han representerar Afrikanska Unionen — 1,3 miljarder människor. "
    "Han säger: 'Vi har pengar. Vi vill betala kontant. Upfront.' Svaret: 'All "
    "kapacitet 2021 är såld.'",
    italic=True
)
add_para(doc,
    "Stoppa. Vad händer här? En person med agens — pengar, makt, kontakter — kan "
    "inte köpa det som de facto inte finns till salu. Varför?",
    italic=True
)
add_para(doc,
    "Helds dimensioner: Vilken dimension dominerar? Ekonomisk är förstås där — "
    "handel, varor, betalning. Men politisk är minst lika tung — VEM får köpa? VEM "
    "får inte? Det är inte marknaden ensam, det är politiska beslut i avtalsform.",
    italic=True
)
add_para(doc,
    "Wallerstein: Var är centrum, periferi? EU och USA är centrum — de hade "
    "förhandsbeställt. Indien är semi-periferi och kunde själv tillverka generika. "
    "Afrika är periferi — utan tillverkningskapacitet, beroende av centrums beslut.",
    italic=True
)
add_para(doc,
    "Men ÄVEN MED PENGAR — Afrika kunde inte köpa. Det är en nyans Wallerstein "
    "bygger ut: centrum-periferi handlar inte bara om vem som har resurser. Det "
    "handlar om vem som har TILLGÅNG till strukturerna.",
    italic=True
)
add_para(doc,
    "Och här kommer institutionen in. WTO:s TRIPS-avtal från 1995 säger: patent ska "
    "skyddas i 20 år. Tillverkning av generika är förbjudet utan licens. När pandemin "
    "kom 2020, föreslog Sydafrika och Indien en TILLFÄLLIG WAIVER — låt fattigare "
    "länder tillverka. EU och Tyskland blockerade. Förslaget gick i 20 månader innan "
    "en kompromiss kom — alldeles för sent.",
    italic=True
)
add_para(doc,
    "Vad är WTO då, i Helds termer? En politisk dimension av globaliseringen som "
    "DRIVER den ekonomiska. Och i Wallersteins termer? En strukturell mekanism som "
    "låser fast centrum-periferi-positionerna.\"",
    italic=True
)

add_rich_para(doc, [("Pedagogiska poänger att lyfta tydligt:", {"bold": True})])
add_bullet(doc, "Agens räcker inte — institutioner sätter ramen")
add_bullet(doc, "Helds politiska dimension är inte separat från ekonomisk — den är inbäddad i den")
add_bullet(doc, "Wallersteins centrum-periferi handlar om TILLGÅNG till strukturer, inte bara resurser")
add_bullet(doc, "WTO är en av globaliseringens arkitekter, inte bara en passiv arena")

add_h2(doc, "Fas 4 — Källanalys i par")
add_para(doc,
    "De två texterna är konstruerade så att de använder samma begrepp (innovation, "
    "frihandel, jämlikhet) men med olika riktning. Det är pedagogisk poäng:"
)
add_bullet(doc,
    "Cirkulera och pressa: \"Båda texter använder ordet 'frihandel'. Vad menar var "
    "och en med det?\""
)
add_bullet(doc,
    "Om par fastnar på \"vad sägs inte\" — peka på exempel: \"Pfizer-texten nämner "
    "forskningskostnader. Vad nämns INTE? Vinstmarginalerna. Det är en lucka.\""
)
add_bullet(doc,
    "Differentiering uppåt: \"Vilket av de två argumenten är teoretiskt mest "
    "sammanhängande? Och vilket är politiskt mest övertygande? De är inte samma sak.\""
)

add_h2(doc, "Fas 5 — Skriftlig analys")
add_bullet(doc, "Skrivandet är fortsatt svagt. Ge stödmeningar generöst.")
add_bullet(doc,
    "Om elev fastnar: \"Glöm inte — ni har redan tillämpat båda teorierna i L5 (på "
    "människor). Idag samma rörelse — fast på en institution.\""
)
add_bullet(doc,
    "Differentiering mot E: skrivmall med fyra rubriker (centrum-periferi / Helds "
    "dimensioner / agens / institutionens roll). Eleven fyller i 2-3 meningar per rubrik."
)
add_bullet(doc,
    "Differentiering mot A: ⭐-fråga: \"Vilket teoriskap räcker INTE till för att "
    "förklara WTO? Behöver vi ett tredje begrepp utöver Held och Wallerstein?\""
)

add_h2(doc, "Fas 6 — Exit ticket")
add_para(doc,
    "Exit ticket-frågan är medvetet dikotom (driver vs. förhandlar) — det tvingar "
    "eleven att ta ställning. Men sortera i 3 högar:"
)
add_bullet(doc, "\"Driver\" — institutionen ses som aktivt skapande")
add_bullet(doc, "\"Förhandlar\" — institutionen ses som passiv arena")
add_bullet(doc, "\"Båda\" — institutionen ses som dialektisk (sett av eleven)")
add_para(doc,
    "Hög 3 är A-nivå. Hög 1 och 2 är båda C-nivå om motiveringen är teoretisk."
)

add_h1(doc, "Elevaktiviteter")
add_bullet(doc, "Hypotesdiskussion (5 min, helklass) — vad förklarar vaccintäckningsskillnaderna?")
add_bullet(doc, "Närläsning + understrykning (10 min, par) — i de två texterna: aktörer, begrepp, antaganden")
add_bullet(doc, "Mall-ifyllning (10 min, par) — analysmall: begrepp/teorier-implicit/antaganden/luckor")
add_bullet(doc, "Helklass-diskussion (10 min) — samla i tre spalter på tavlan")
add_bullet(doc, "Skriftlig analys (12-15 min) — Held + Wallerstein på WTO")
add_bullet(doc, "Exit ticket (5 min) — driver eller förhandlar?")

add_h1(doc, "Differentiering")

add_h2(doc, "Stöd (mot E)")
add_bullet(doc, "Analysmall med en förifylld rad som exempel")
add_bullet(doc,
    "Begreppslista från L2-L5 på tavlan (centrum, periferi, dimension, agens, "
    "transnationell aktör — kompletterad med: institution, regel, patent, generika, waiver)"
)
add_bullet(doc, "Skrivmall med fyra rubriker + stödmeningar")
add_bullet(doc, "Par med starkare elev vid källanalysen")

add_h2(doc, "Utmaning (mot A)")
add_bullet(doc,
    "⭐-fråga: \"Vilket teoriskap räcker inte? Behöver vi ett tredje begrepp utöver "
    "Held och Wallerstein?\""
)
add_bullet(doc,
    "Fördjupningsfråga: \"WTO bildades 1995. Hur hade Wallerstein själv (skrev 1974) "
    "reagerat på TRIPS? Är centrum-periferi-modellen tillräckligt dynamisk för att "
    "fånga institutioners roll?\""
)
add_bullet(doc,
    "Källkritisk vinkel: \"Båda texter är manipulerade — vilken är mer manipulerad? "
    "Och hur ser man det?\""
)

add_h1(doc, "Material")
add_bullet(doc,
    "22 st arbetsblad (elevuppgift-lektion-6.docx) — två motstridiga texter + "
    "analysmall + skrivmall + begreppslista"
)
add_bullet(doc, "Projektorbild: Vaccintäckningsstatistik per kontinent december 2021")
add_bullet(doc, "Projektorbild: TRIPS-tidslinje (1995-2022)")
add_bullet(doc, "Projektorbild: Worked example-bilder på Masiyiwa-berättelsen")
add_bullet(doc, "Projektorbild: Tre-kolumner-tabell för helklass-fasen")
add_bullet(doc, "L5:s exit tickets (sorterade i 3 högar)")
add_bullet(doc, "Post-it för exit ticket")

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Är WTO en institution som driver globalisering eller som förhandlar dess "
     "konsekvenser? Motivera kort med ett exempel från lektionen.\"", {"italic": True}),
])
add_para(doc, "")
add_rich_para(doc, [("Användning i L7:", {"bold": True})])
add_bullet(doc,
    "Hög 1 (\"driver\") → bygg på i L7: \"Ni såg WTO som regelskapare. Idag möter "
    "vi en annan typ av institution — IMF, som lånar ut pengar. Vad gör den?\""
)
add_bullet(doc,
    "Hög 2 (\"förhandlar\") → utmana i L7: \"Ni såg WTO som arena. IMF är annorlunda "
    "— den ställer villkor. Är det också 'bara förhandling'?\""
)
add_bullet(doc,
    "Hög 3 (\"båda\") → använd som ingång: \"Ni ser dialektiken. Imorgon: hur ser "
    "samma dialektik ut i IMF?\""
)

add_h1(doc, "Koppling till kunskapskrav")
add_bullet(doc,
    "LM 1 — C/A: \"utförligt diskutera styrkor/svagheter\" — i analysen av WTO syns "
    "vad teorierna räcker till och var de saknar (t.ex. att fånga institutionens "
    "dynamik över tid)"
)
add_bullet(doc,
    "LM 2 — E/C/A: flerskalanalys i den skriftliga analysen — patent (mikro) → "
    "TRIPS (makro) → enskilda länders verklighet"
)
add_bullet(doc,
    "LM 4 — C: värdera motstridiga ståndpunkter (de två texterna i fas 4)"
)
add_bullet(doc,
    "Formativt mål: alla elever ska kunna placera WTO i centrum-periferi-modellen "
    "och peka på minst en av Helds dimensioner som dominerar institutionen. "
    "⭐-elever ska kunna diskutera vad teorierna inte räcker till för att förklara."
)

add_h1(doc, "Anmärkning om revidering")
add_para(doc,
    "Lektionen är reviderad 2026-05-05. Den ursprungliga lektionen handlade om "
    "vetenskap i samhällsdebatten (LM 3 ⭐) med analys av ett debattinlägg om "
    "frihandel. Den togs bort eftersom momentet revideras till att fokusera på "
    "internationella organisationer och institutioners roll i globaliseringen "
    "(L6 WTO, L7 IMF, L8 slutsyntes). LM 3:s särskilda betoning lämnar momentet i "
    "denna revidering. Det mänskliga ankaret (Strive Masiyiwa + Fatima Hassan som "
    "sekundär röst) speglar L5:s metod — institutionen blir konkret genom människor "
    "som möter den."
)

doc.save(OUT_PLAN)
print(f"Saved: {OUT_PLAN}")


# =================== ELEVUPPGIFT ===================

OUT_ELEV = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/elevuppgift-lektion-6.docx"

doc = make_document("Elevuppgift 6 | Sida ")
add_title(doc, "Lektion 6: WTO och vaccinapartheid — elevuppgifter",
          "Samhällskunskap 3 — Globalisering")

add_para(doc,
    "Idag möter du WTO — Världshandelsorganisationen — som institution. Vi använder "
    "COVID-19-pandemin som lins. Två personer guidar dig:"
)
add_bullet(doc,
    "Strive Masiyiwa — Afrikanska Unionens vaccinupphandlare 2020-2022. När pandemin "
    "kom representerade han 1,3 miljarder afrikaner i förhandlingarna med Pfizer, "
    "Moderna och AstraZeneca. Han hade pengar, vilja och mandat. Han fick beskedet: "
    "\"all kapacitet 2021 är såld.\""
)
add_bullet(doc,
    "Fatima Hassan — sydafrikansk människorättsadvokat, grundare Health Justice "
    "Initiative. Hon drev kravet på en TRIPS-waiver — ett tillfälligt undantag från "
    "WTO:s patentregler — så att fattigare länder kunde tillverka egna vaccin."
)
add_para(doc,
    "Du ska tillämpa Held + Wallerstein på en institution, inte längre på en T-shirt "
    "eller en människa. Frågan: Vilken globalisering bygger WTO?"
)

add_h1(doc, "Uppgift 1: Källanalys — två motstridiga texter")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("20 min parvis", {})])
add_para(doc,
    "Läs båda texterna noga. Stryk under begrepp. Fyll i analysmallen. Båda texter "
    "är konstruerade utifrån verkliga argument från debatten 2020-2022 men kondenserade."
)

add_h2(doc, "Källa A: Läkemedelsindustrins ståndpunkt")
add_rich_para(doc, [
    ("Sammanställd från IFPMA:s officiella ståndpunkter, Pfizer-VD:n Albert Bourlas "
     "tal, och Brookings-debatten 2021", {"italic": True})
])

add_para(doc,
    "Pandemin har visat något extraordinärt: på mindre än ett år utvecklade "
    "läkemedelsbranschen vaccin med över 90 procents effektivitet. Det är "
    "innovationens triumf. Bakom den triumfen ligger ett system: starka patentskydd, "
    "stora investeringar i forskning, fria marknader. Pfizer/BioNTech investerade "
    "över 2 miljarder dollar i utvecklingen utan offentliga garantier — ett "
    "risktagande som bara är möjligt eftersom patentet ger 20 års ensamrätt på "
    "avkastningen."
)
add_para(doc,
    "Förslaget om en TRIPS-waiver — att tillfälligt suspendera patenten — riskerar "
    "att rasera detta system. Patenten är inte ett hinder. De är fundamentet. Utan "
    "patentskydd hade ingen företagsledning vågat satsa miljarder på forskning. Vi "
    "är beredda att dela kunskap genom frivillig licensiering — vi har redan slutit "
    "avtal med över 20 tillverkare i 12 länder, från Indien till Sydafrika. Men "
    "frivillig licensiering är något helt annat än tvångsdelning, där en stat helt "
    "enkelt river upp en annan parts patent."
)
add_para(doc,
    "Den verkliga flaskhalsen i Afrika är inte patenten. Det är logistik, kylkedjor "
    "och vaccinationsprogram. När doser landade i flera afrikanska länder första "
    "halvåret 2021 fanns inte alltid kylkedja för att distribuera dem. WHO "
    "rapporterade att vissa länder fick vaccin förstörda i hamnen. Att skylla på "
    "patenten är en bekväm avledning från en mer obehaglig fråga om mottagarländernas "
    "kapacitet."
)
add_para(doc,
    "Vår industri har redan donerat hundratals miljoner doser genom COVAX. Pfizer "
    "har förbundit sig att leverera 2 miljarder doser till låginkomstländer 2021-2022 "
    "till självkostnadspris. Vi tror på partnerskap mellan globala företag och lokala "
    "myndigheter. Vi tror på det som globaliseringen alltid har stått för: att "
    "marknader, frihandel och innovation lyfter fattiga länder. Att rasera "
    "patentskyddet skulle skicka en signal till investerare: innovation belönas inte "
    "längre. Det vore en katastrof för nästa pandemi."
)
add_para(doc,
    "Pandemin är en test. Vi måste lösa den utan att förstöra det system som "
    "producerade vaccinet på rekordtid. Den som vill bygga om huset bör först förstå "
    "varför det står upprätt."
)

add_page_break(doc)

add_h2(doc, "Källa B: Fatima Hassan / Health Justice Initiative")
add_rich_para(doc, [
    ("Sammanställd från Hassans tal vid Calgary Peace Prize 2022, Geneva Health "
     "Files-intervjun, och Lancets ledare om vaccinapartheid", {"italic": True})
])

add_para(doc,
    "December 2021: Europa hade vaccinerat 70 procent av sin befolkning. Afrika: "
    "8 procent. Detta är inte en olycka. Det är konstruerad ojämlikhet — manmade "
    "scarcity. WTO:s TRIPS-avtal från 1995 säger att patent är ekonomins ryggrad. "
    "Under en pandemi blir den ryggraden ett gravstöd."
)
add_para(doc,
    "Vi i Sydafrika och Indien föreslog en TRIPS-waiver i oktober 2020 — ett "
    "tillfälligt undantag från patentreglerna under pandemin. Förslaget hade stöd "
    "av över 100 av WTO:s 164 medlemsländer. EU, ledd av Tyskland och Storbritannien, "
    "blockerade förslaget i 20 månader. Under den tiden dog över 6 miljoner människor "
    "av COVID-19, många i låginkomstländer som hade kunnat tillverka vaccin om "
    "förbudet lyfts. Den kompromiss som till slut antogs i juni 2022 var så urvattnad "
    "att Médecins Sans Frontières kallade den för \"en illusion av lättnad\"."
)
add_para(doc,
    "Argumentet att vi \"saknar tillverkningskapacitet\" är förolämpande. Indien "
    "tillverkar mer än 60 procent av världens vacciner. Sydafrika har biofarmaceutisk "
    "industri — det var här Aspen Pharmacare på licens fyllde Johnson & Johnson-doser, "
    "men kontraktet förbjöd försäljning till andra afrikanska länder. Tänk på det: "
    "ett afrikanskt företag tillverkade vaccin på afrikansk mark, men patentavtalet "
    "förbjöd försäljning till grannländer. Det vi saknar är inte fabriker. Det vi "
    "saknar är patentlicens. Det vi saknar är teknologisk kunskapsöverföring. Patenten "
    "är inte naturliga — de är ett politiskt val, inskrivet i ett internationellt "
    "avtal som rika länder förhandlat fram bakom stängda dörrar 1995."
)
add_para(doc,
    "När vi i Health Justice Initiative genom domstol tvingade fram Sydafrikas "
    "hemliga vaccinkontrakt visade dokumenten en bitter sanning: Sydafrika betalade "
    "ungefär 30 procent mer per Pfizer-dos än Tyskland. Vi tvingades teckna avtal "
    "som krävde att vi avstod från statlig immunitet, accepterade godtyckliga "
    "prishöjningar, och förbjöd oss att donera överskott. Vi är inte fattiga "
    "eftersom vi är fattiga. Vi är fattiga eftersom systemet är riggat."
)
add_para(doc,
    "WTO är inte neutral. WTO är arkitektur — och arkitekter har namn. De som ritade "
    "TRIPS 1995 var amerikanska och europeiska läkemedelsbolags advokater, som hade "
    "fått oförhandlat tillträde till förhandlingsrummet. Den arkitekturen behöver "
    "byggas om. Inte raseras — byggas om för en värld där liv inte ska säljas till "
    "högstbjudande, och där en pandemi inte ska kunna avgöras av vem som hann "
    "förhandla först."
)

add_page_break(doc)

add_h2(doc, "Analysmall")
add_para(doc,
    "Fyll i tillsammans. Mål: se hur samma begrepp används i olika riktningar och "
    "vad var och en utelämnar."
)
add_table(doc, [
    ["Fråga", "Källa A (industrin)", "Källa B (Hassan)"],
    ["Vilka centrala begrepp används? (Innovation, frihandel, patent, jämlikhet osv.)", "", ""],
    ["Vilken teori syns i texten? (Liberalism / Wallerstein / blandat)", "", ""],
    ["Vilket är textens centrala antagande?", "", ""],
    ["Vilka aktörer ges agens? (Vem \"gör\" något?)", "", ""],
    ["Vilka aktörer är osynliga?", "", ""],
    ["Vad sägs INTE? (Det strategiskt utelämnade)", "", ""],
    ["Vem är \"vi\" i texten?", "", ""],
], col_widths_cm=[5.0, 5.5, 5.5])

add_h3(doc, "⭐ Utmaning mot A")
add_para(doc,
    "Båda texter använder ordet innovation. Hur skiljer sig betydelsen? När samma "
    "ord flyttas mellan två teoretiska ramar — vad händer? Skriv 3-4 meningar."
)

add_page_break(doc)

add_h1(doc, "Uppgift 2: Skriftlig analys — Tillämpa Held och Wallerstein på WTO")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("12-15 min enskilt", {})])
add_para(doc,
    "Du ska nu göra det som L5 gjorde med människor: tillämpa båda teoriverktygen — "
    "fast på en institution."
)

add_h2(doc, "Frågeställning")
add_rich_para(doc, [
    ("Var sitter centrum, semi-periferi och periferi i vaccinapartheid-konflikten? "
     "Vilken av Helds fyra dimensioner dominerar institutionen WTO — och vilken "
     "eller vilka dimensioner får den att 'försvinna'?", {"italic": True})
])

add_h2(doc, "Skrivmall (fyll i 2-3 meningar per rubrik)")

add_h3(doc, "Centrum-periferi-position (Wallerstein)")
add_para(doc,
    "Centrum: _________________________________________________ är centrum i denna "
    "konflikt eftersom _________________________________________________"
)
add_para(doc,
    "Semi-periferi: _________________________________________________ kan placeras "
    "i semi-periferi eftersom _________________________________________________"
)
add_para(doc,
    "Periferi: _________________________________________________ befinner sig i "
    "periferi eftersom _________________________________________________"
)

add_h3(doc, "Helds dimension som dominerar")
add_para(doc,
    "Den dimension som dominerar WTO är _____________________ (ekonomisk / politisk "
    "/ kulturell / social)."
)
add_para(doc,
    "Detta syns när _________________________________________________"
)

add_h3(doc, "Helds dimension som försvinner")
add_para(doc,
    "Den dimension som blir osynlig i WTO:s arbete är _____________________ ."
)
add_para(doc,
    "Detta märks genom _________________________________________________"
)

add_h3(doc, "Sammanfattande slutsats")
add_para(doc,
    "WTO är en institution som _____________________ globaliseringen genom att "
    "_________________________________________________"
)

add_h3(doc, "⭐ Utmaning mot A")
add_para(doc,
    "Identifiera något som varken Held eller Wallerstein fångar. Behöver vi ett "
    "tredje begrepp för att förklara WTO:s roll? Föreslå begreppet och motivera "
    "(3-4 meningar). Tips: tänk på begrepp som agens, legitimitet, normmakt, "
    "väpnade hot, kunskapsmonopol."
)

add_page_break(doc)

add_h1(doc, "Exit ticket")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Är WTO en institution som driver globalisering eller som förhandlar dess "
     "konsekvenser? Motivera kort med ett exempel från lektionen. (3-4 meningar)\"",
     {"italic": True}),
])

add_h1(doc, "Begreppslista — lektion 6")
add_table(doc, [
    ["Begrepp", "Förklaring"],
    ["WTO", "Världshandelsorganisationen, etablerad 1995. 164 medlemsländer. Sätter regler för internationell handel."],
    ["TRIPS", "Trade-Related Aspects of Intellectual Property Rights. WTO-avtalet om patentskydd. Garanterar 20 års patent."],
    ["Patent", "Juridiskt skydd som ger uppfinnaren ensamrätt att tillverka och sälja under viss tid (vanligen 20 år)."],
    ["Generika", "Kopia av ett läkemedel, tillverkat när patentet upphört eller med licens. Ofta mycket billigare."],
    ["TRIPS-waiver", "Tillfälligt undantag från patentskyddet. Förslogs av Sydafrika + Indien okt 2020. Kompromiss kom juni 2022."],
    ["Vaccinapartheid", "Begrepp som beskriver den extrema skillnaden i vaccintillgång mellan rika och fattiga länder under COVID-pandemin."],
    ["Manmade scarcity", "\"Konstruerad brist\" — att brist är ett resultat av politiska/institutionella beslut, inte naturlagar."],
    ["Compulsory licensing", "När ett land ger sig själv (eller sina företag) rätt att tillverka ett patenterat läkemedel utan ägarens samtycke, ofta vid hälsokriser."],
    ["Frivillig licensiering", "När patentägaren själv ger andra rätt att tillverka — ofta mot royalty."],
    ["AVAT", "Africa Vaccine Acquisition Trust — den juridiska enheten Strive Masiyiwa ledde för att köpa vacciner åt Afrika."],
    ["COVAX", "Globalt initiativ (WHO + Gavi + CEPI) för rättvisare vaccinfördelning. Underleverans erkändes redan 2021."],
    ["Institution", "Etablerad organisation eller regelverk som styr beteende. WTO är både organisation och regelverk."],
    ["Arkitektur (institutionell)", "Hassans bild av WTO som byggd struktur — inte naturlag, utan något människor konstruerat."],
], col_widths_cm=[5.0, 11.0])

doc.save(OUT_ELEV)
print(f"Saved: {OUT_ELEV}")
