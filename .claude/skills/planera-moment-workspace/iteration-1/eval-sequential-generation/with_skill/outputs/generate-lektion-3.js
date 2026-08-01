const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
        BorderStyle, WidthType, ShadingType, PageNumber } = require("docx");

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };
const TABLE_WIDTH = 9026;
const COL_WIDTHS = [1200, 1800, 2013, 4013];

function headerCell(text, width) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: "2E5A88", type: ShadingType.CLEAR }, margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 22 })] })]
  });
}
function cell(text, width) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA }, margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, font: "Arial", size: 22 })] })]
  });
}
function heading2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
}
function bullet(text) {
  return new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun({ text, font: "Arial", size: 24 })] });
}
function boldBody(label, text) {
  return new Paragraph({ spacing: { after: 120 }, children: [
    new TextRun({ text: label, bold: true, font: "Arial", size: 24 }),
    new TextRun({ text, font: "Arial", size: 24 })
  ]});
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "1A3C5E" },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2E5A88" },
        paragraph: { spacing: { before: 180, after: 180 }, outlineLevel: 1 } },
    ]
  },
  numbering: { config: [
    { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
  ]},
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: { default: new Header({ children: [new Paragraph({ children: [new TextRun({ text: "Samhällskunskap 1a1 — Ungas ekonomi", font: "Arial", size: 18, color: "888888" })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
      new TextRun({ text: "Samhällskunskap 1a1 | Ungas ekonomi | Sida ", font: "Arial", size: 18, color: "888888" }),
      new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "888888" })
    ]})] }) },
    children: [
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Lektion 3: \"Räcker pengarna?\" — Privatekonomi och budget")] }),
      boldBody("Kurs: ", "Samhällskunskap 1a1"),
      boldBody("Moment: ", "Ungas ekonomi"),
      boldBody("Lektionslängd: ", "60 minuter"),

      heading2("Lärandemål för lektionen"),
      bullet("Mål 3: Resonera om privatekonomiska val och deras konsekvenser — inkomst, skatt, utgifter, sparande, lån, ränta"),

      heading2("Förberedelse"),
      bullet("Förbered budgetmall (digital eller papper) med kategorier: boende, mat, transport, nöjen, sparande, oförutsedda utgifter"),
      bullet("Förbered Alex ekonomiska förutsättningar: lön 22 000 kr/mån brutto (timanställning i butik), visa nettolön efter skatt"),
      bullet("Samla verkliga priser: hyror från Blocket/Hemnet för orter i närheten, matbudget från Konsumentverket, SL-kort/busskort"),
      bullet("Förbered händelsekort (oväntade utgifter: tandläkare, trasig mobil, höjd elräkning)"),
      bullet("Förbered exit ticket-lappar"),

      heading2("Retrieval review-koppling"),
      boldBody("Baserat på exit ticket från lektion 2: ", "Om eleverna hade svårt att väga argument — börja med att lyfta ett bra exempel från exit tickets (anonymiserat) och visa hur man bygger ett resonemang med för/emot. Om de flesta kunde argumentera, snabb retrieval: \"Alex valde timanställning i butik. Nämn en fördel och en nackdel med det valet.\""),

      heading2("Tidsplanering"),
      new Table({
        width: { size: TABLE_WIDTH, type: WidthType.DXA }, columnWidths: COL_WIDTHS,
        rows: [
          new TableRow({ children: [headerCell("Tid", COL_WIDTHS[0]), headerCell("Fas", COL_WIDTHS[1]), headerCell("Aktivitet", COL_WIDTHS[2]), headerCell("Beskrivning", COL_WIDTHS[3])] }),
          new TableRow({ children: [
            cell("0-5 min", COL_WIDTHS[0]), cell("1. Retrieval review", COL_WIDTHS[1]), cell("Argumentationsövning", COL_WIDTHS[2]),
            cell("Visa ett anonymiserat elevsvar från lektion 2:s exit ticket. Fråga: \"Vad gör detta till ett bra/dåligt resonemang?\" Koppla till Alex val: \"Alex valde timanställning. Nu ska han flytta hemifrån — hur påverkar det hans ekonomi?\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("5-7 min", COL_WIDTHS[0]), cell("2. Målaktivering", COL_WIDTHS[1]), cell("Gissa Alex nettolön", COL_WIDTHS[2]),
            cell("Visa Alex bruttolön: 22 000 kr. Fråga: \"Hur mycket tror ni Alex får ut efter skatt?\" Låt eleverna gissa. Visa sedan nettolönen (ca 17 500 kr). Reaktion? Presentera målet: \"Efter lektionen ska ni kunna göra en realistisk budget och resonera om vilka val som påverkar ekonomin.\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("7-17 min", COL_WIDTHS[0]), cell("3. Explicit instruktion", COL_WIDTHS[1]), cell("Privatekonomi steg för steg", COL_WIDTHS[2]),
            cell("Tre steg med Alex som exempel: (1) Inkomst och skatt — brutto vs netto, kommunalskatt, arbetsgivaravgift. Primärkälla: Skatteverkets tabell för 2024/25. Kontrollfråga: \"Vart går skatten? Koppla tillbaka till kretsloppet!\" (2) Fasta vs rörliga utgifter — hyra, mat, transport vs nöjen, kläder. Visa Konsumentverkets beräkningar. (3) Sparande och lån — ränta, amortering, skuldfälla. Kontrollfråga: \"Varför kostar ett lån mer ju längre man betalar?\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("17-42 min", COL_WIDTHS[0]), cell("4. Guidad övning", COL_WIDTHS[1]), cell("Bygg Alex budget", COL_WIDTHS[2]),
            cell("I par: Gör en månadsbudget för Alex med verkliga priser. Steg 1 (8 min): Fyll i fasta utgifter med verkliga siffror (hyr lägenhet från lokala annonser, mat enligt Konsumentverket). Steg 2 (7 min): Fördela resterande pengar på rörliga utgifter och sparande. Steg 3 (5 min): Dra ett händelsekort — oväntad utgift (tandläkare 1 800 kr, trasig mobil 3 000 kr, höjd elräkning 500 kr). Hur hanterar Alex det? Steg 4 (5 min): Diskutera i par — vilka val var svårast? Vad prioriterade ni? Läraren cirkulerar, ställer frågor: \"Vad hände med sparandet? Varför valde ni att skära ner på just det?\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("42-52 min", COL_WIDTHS[0]), cell("5. Självständig övning", COL_WIDTHS[1]), cell("Snabbskrivning", COL_WIDTHS[2]),
            cell("Individuellt (8 min): \"Alex kompis säger: 'Varför spara? Lev nu, du kan alltid ta ett lån.' Skriv ett resonemang om huruvida Alex borde spara eller leva för stunden. Väg för och emot med koppling till konkreta ekonomiska konsekvenser.\" Mot E: Meningsstarter (\"En fördel med att spara är... En risk med lån är... Å andra sidan...\"). Mot A: Koppla till makroekonomi — vad händer om alla unga slutar spara? Hur påverkar det kretsloppet? Delning (2 min): 2-3 elever delar kort.", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("52-57 min", COL_WIDTHS[0]), cell("5 (forts.)", COL_WIDTHS[1]), cell("Delning", COL_WIDTHS[2]),
            cell("2-3 elever delar sina resonemang. Lyfta: Vilka konsekvenser nämndes? Kort vs lång sikt?", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("57-60 min", COL_WIDTHS[0]), cell("6. Avslut", COL_WIDTHS[1]), cell("Exit ticket + preview", COL_WIDTHS[2]),
            cell("Exit ticket: \"Nämn tre saker Alex måste tänka på innan han tar ett lån. Förklara varför varje sak är viktig.\" Preview: \"Nästa lektion ställs Alex inför svåra val med riktiga konsekvenser — skuldfällan, oväntade utgifter och ånger.\"", COL_WIDTHS[3])
          ]}),
        ]
      }),

      heading2("Lärarinstruktioner"),
      boldBody("Retrieval review: ", "Välj ett elevsvar som visar bra argumentation (eller ett som kan förbättras). Fokus på hur man bygger resonemang, inte bara rätt svar."),
      boldBody("Instruktion: ", "Använd verkliga siffror genomgående. Visa Skatteverkets tabell, Konsumentverkets referensvärden, riktiga hyresannonser. Gör explicit att detta är primärkällor. Koppla tillbaka till kretsloppet: \"Skatten som Alex betalar — vart går den?\""),
      boldBody("Guidad övning: ", "Händelsekorten skapar en realistisk känsla av ekonomisk osäkerhet. Lyssna efter hur paren prioriterar — det avslöjar värderingar och förståelse. Fråga \"Varför?\" ofta."),
      boldBody("Avslut: ", "Exit tickets visar om eleverna förstår lånets mekanismer eller bara ytliga risker. De som svarar ytligt behöver mer stöd i lektion 4:s scenarioanalys."),

      heading2("Elevaktiviteter"),
      bullet("Argumentationsövning med anonymiserat elevsvar (5 min)"),
      bullet("Gissa nettolön — aktiv förkunskapsaktivering (2 min)"),
      bullet("Budgetövning i par med verkliga priser + händelsekort (25 min)"),
      bullet("Snabbskrivning: Spara eller leva? (10 min)"),
      bullet("Exit ticket (3 min)"),

      heading2("Differentiering"),
      boldBody("Stöd (mot E): ", "Förifyld budgetmall med fasta utgifter redan ifyllda. Meningsstarter för snabbskrivningen. Begreppsordlista (brutto, netto, ränta, amortering, fast utgift, rörlig utgift)."),
      boldBody("Utmaning (mot A): ", "Tom budgetmall — eleverna söker själva upp priser. Snabbskrivningen utan stödstruktur, med krav på koppling till makroekonomi och kretsloppet. Extra: \"Vad händer med kretsloppet om räntan höjs med 2 procentenheter?\""),

      heading2("Exit ticket"),
      boldBody("Fråga: ", "\"Nämn tre saker Alex måste tänka på innan han tar ett lån. Förklara varför varje sak är viktig.\""),
      boldBody("Användning: ", "Visar om eleverna förstår lånemekanismer (ränta, amortering, löptid) eller bara ytliga svar (\"det är dyrt\"). Informerar lektion 4:s scenarioanalys — de som inte förstod ränta behöver extra stöd."),

      heading2("Material"),
      bullet("Presentation med privatekonomiska begrepp och verkliga siffror"),
      bullet("Skatteverkets tabell för inkomstskatt (primärkälla)"),
      bullet("Konsumentverkets beräkningar av levnadskostnader (primärkälla)"),
      bullet("Lokala hyresannonser (Blocket/Hemnet) för realistiska boendekostnader"),
      bullet("Budgetmall (tom + förifyld version)"),
      bullet("Händelsekort (4-6 oväntade utgiftsscenarier)"),
      bullet("Exit ticket-lappar"),
      bullet("Meningsstarter (stödmaterial)"),

      heading2("Koppling till kunskapskrav"),
      boldBody("E-nivå: ", "Eleven redogör översiktligt för privatekonomiska begrepp (inkomst, skatt, utgifter) och för enkla resonemang om konsekvenser av ekonomiska val."),
      boldBody("C-nivå: ", "Eleven redogör utförligt för begreppen och för välgrundade resonemang om konsekvenser — kan väga kortsiktigt mot långsiktigt."),
      boldBody("A-nivå: ", "Eleven redogör utförligt och nyanserat, kopplar privatekonomiska val till samhällsekonomiska konsekvenser och resonerar om komplexa samband (t.ex. ränta-inflation-konsumtion)."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/lektion-3.docx", buffer);
  console.log("lektion-3.docx created successfully");
});
