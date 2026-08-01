"""Generate elevuppgift-lektion-2.docx — Frayer-modeller + dimensioner."""

import sys
sys.path.insert(0, "/home/anders/Second brain/resources/globalisering-docx-gen")

from docx_helper import (
    make_document, add_title, add_h1, add_h2, add_h3,
    add_para, add_rich_para, add_bullet, add_table, add_infobox, add_page_break
)

OUT = "/home/anders/undervisningsmaterial/Samhällskunskap/Globalisering - Från vardag till världssystem/elevuppgift-lektion-2.docx"

doc = make_document("Lektion 2 | Sida ")
add_title(doc, "Lektion 2: Globaliseringens fyra dimensioner",
          "Elevuppgifter — Samhällskunskap 3")

add_para(doc,
    "Idag får du ditt första teoretiska verktyg: fyra dimensioner av globalisering "
    "(Held m.fl.). Verktyget ska sitta i ryggmärgen efter denna lektion — vi använder det "
    "i resten av momentet."
)

# Uppgift 1
add_h1(doc, "Uppgift 1: Frayer-modell — en dimension i taget")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("10 min parvis", {})])

add_para(doc,
    "Din lärare tilldelar ditt par en dimension. Fyll i Frayer-modellen för den "
    "dimensionen. Den ekonomiska dimensionen är redan delvis ifylld som exempel."
)

add_h2(doc, "Vad är en Frayer-modell?")
add_para(doc, "En Frayer-modell är ett sätt att verkligen förstå ett begrepp — "
              "inte bara känna igen ordet. Den har fyra rutor:")
add_bullet(doc, "Definition — vad betyder begreppet?")
add_bullet(doc, "Egenskaper — vilka kännetecken har det?")
add_bullet(doc, "Exempel — vad är ett tydligt exempel?")
add_bullet(doc, "Icke-exempel — vad är nära men INTE detta?")
add_para(doc,
    "Icke-exempel-rutan är ofta svårast men viktigast — där testas förståelsen.")

# Frayer 1 - filled
add_h2(doc, "Frayer-modell 1: Ekonomisk globalisering (exempel, förifyllt)")
add_table(doc, [
    ["Definition", "Egenskaper"],
    [
        "Ökad handel, produktion och finansiell rörlighet över nationsgränser. "
        "Kapital, varor och tjänster flödar mer fritt än förr.",
        "Globala värdekedjor, offshoring, frihandelsavtal (EU, WTO), multinationella "
        "företag, just-in-time-produktion, valutahandel dygnet runt"
    ],
    ["Exempel", "Icke-exempel"],
    [
        "T-shirten från Shein: bomull från Indien, sömnad i Bangladesh, design i "
        "Guangzhou, försäljning i Sverige. Värdet skapas längs hela kedjan.",
        "Två grannar i Norrköping som byter äpplen mot grönsaker. Det är handel, "
        "men inte global — ingen gränsöverskridande rörlighet."
    ],
])

def empty_frayer(title, hints):
    add_h2(doc, title)
    add_table(doc, [
        ["Definition", "Egenskaper"],
        ["", ""],
        ["Exempel", "Icke-exempel"],
        ["", ""],
    ])
    add_rich_para(doc, [
        ("Stödord om du fastnar: ", {"bold": True, "italic": True}),
        (hints, {"italic": True}),
    ])

empty_frayer("Frayer-modell 2: Politisk globalisering",
    "EU, FN, WTO, internationella avtal, överstatliga institutioner, "
    "global styrning, klimatavtal (Parisavtalet)."
)

empty_frayer("Frayer-modell 3: Kulturell globalisering",
    "K-pop, Hollywood, TikTok-trender, engelska som lingua franca, "
    "globala matvanor (sushi i Norrköping), Netflix-serier."
)

empty_frayer("Frayer-modell 4: Social globalisering",
    "migration, utbytesstudenter, turism, diaspora, arbetskraftsrörlighet, "
    "familjer splittrade över länder, sociala medier som håller ihop släkter."
)

add_page_break(doc)

# Uppgift 2
add_h1(doc, "Uppgift 2: Gemensam T-shirt-kartläggning")
add_rich_para(doc, [
    ("Tid: ", {"bold": True}),
    ("20 min (enskilt 3 min → par 5 min → helklass 12 min)", {})
])

add_para(doc,
    "På tavlan finns fyra kolumner — en per dimension. Vi kartlägger T-shirten genom "
    "alla fyra."
)

add_h3(doc, "Steg 1 — Enskilt (3 min)")
add_para(doc, "Skriv 1-2 punkter per dimension i rutorna nedan. Vad ser du i T-shirten?")
add_table(doc, [
    ["Ekonomisk", "Politisk", "Kulturell", "Social"],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
])

add_h3(doc, "Steg 2 — Par (5 min)")
add_para(doc,
    "Jämför med din bänkkompis. Fyll på där den andra har hittat något du missat."
)

add_h3(doc, "Steg 3 — Helklass (12 min)")
add_para(doc,
    "Läraren samlar exempel på tavlan. Räck upp handen när du har ett bidrag till en "
    "kolumn. Lyssna på vad andra säger — kopiera ner det du själv missat."
)

add_infobox(doc,
    "⭐ Utmaning mot A",
    "Kan en dimension dominera över en annan i T-shirten? T.ex. — styr den ekonomiska "
    "logiken de politiska besluten (tullar, arbetsrätt, miljökrav)? Skriv en mening om det.",
    "ffe66d"
)

add_page_break(doc)

# Uppgift 3
add_h1(doc, "Uppgift 3: Eget objekt — alla fyra dimensioner")
add_rich_para(doc, [("Tid: ", {"bold": True}), ("15 min enskilt skrivande", {})])

add_para(doc,
    "Välj ett objekt/fenomen från urvalet nedan. Skriv 2-3 meningar per dimension. "
    "Målet är att träna språket — använd dimensionernas namn och de begrepp läraren "
    "har introducerat."
)

add_h3(doc, "Välj ett av följande:")
add_bullet(doc, "Din kaffekopp (kaffebönorna, koppen, varumärket)")
add_bullet(doc, "Din favorit-Netflix-serie (var görs den, vem producerar, vem tittar)")
add_bullet(doc, "En Champions League-match (spelare, klubbar, sändningsrättigheter, publik)")
add_bullet(doc, "En McDonalds-meny (samma logotyp världen över, men olika menyer i olika länder)")

add_h3(doc, "Mall att följa")
add_para(doc, "Mitt objekt är: ___________________________________")

for dim in ["Ekonomisk", "Politisk", "Kulturell", "Social"]:
    add_rich_para(doc, [
        (f"{dim} dimension:", {"bold": True})
    ])
    add_para(doc, f"Jag ser den {dim.lower()}a dimensionen i mitt objekt genom ___________________________________")
    add_para(doc, "Ett konkret exempel är ___________________________________")
    add_para(doc, "")

add_infobox(doc,
    "⭐ Utmaning mot A",
    "Hitta en dimension som verkar \"osynlig\" i ditt objekt men som ändå är viktig. "
    "Motivera varför den är dold och ändå central.\n\n"
    "Svar: ___________________________________",
    "ffe66d"
)

add_page_break(doc)

# Begreppslista
add_h1(doc, "Begreppslista — lektion 2")
add_para(doc,
    "Lägg gärna till dessa i din egen ordlista från L1. Du kommer använda dem resten "
    "av momentet."
)
add_table(doc, [
    ["Begrepp", "Enkel förklaring"],
    ["Dimension (globalisering)", "En aspekt eller ett \"lager\" av globaliseringen — fyra är identifierade av Held m.fl."],
    ["Ekonomisk globalisering", "Gränsöverskridande rörlighet av varor, kapital och tjänster"],
    ["Politisk globalisering", "Framväxten av överstatliga institutioner och regelverk (EU, FN, WTO)"],
    ["Kulturell globalisering", "Spridning och blandning av värderingar, uttryck och idéer över gränser"],
    ["Social globalisering", "Gränsöverskridande rörelser av människor och kontakter (migration, utbyten)"],
    ["Överstatlig organisation", "Organisation som har vissa beslutsrätter över nationalstater (t.ex. EU-domstolen, WTO)"],
    ["Lingua franca", "Gemensamt språk för kommunikation mellan olika språkgrupper — idag oftast engelska"],
    ["Diaspora", "Människor med gemensam ursprungskultur som bor spridda i flera länder"],
    ["Kulturell homogenisering", "När lokala uttryck försvinner till förmån för globala (t.ex. amerikanisering)"],
    ["Kulturell hybridisering", "När globala och lokala uttryck blandas till nya former (t.ex. K-pop)"],
], col_widths_cm=[5.0, 11.0])

# Exit ticket
add_h1(doc, "Exit ticket (skrivs i slutet av lektionen)")
add_rich_para(doc, [
    ("Fråga: ", {"bold": True}),
    ("\"Vilken dimension dominerar i din egen mobiltelefon? Motivera kort med ett exempel.\"",
     {"italic": True}),
])
add_para(doc,
    "Skriv svaret på en post-it-lapp (2-3 meningar) och lämna till läraren när du går ut."
)

doc.save(OUT)
print(f"Saved: {OUT}")
