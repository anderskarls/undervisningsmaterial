const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, PageBreak
} = require("docx");

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const headerBorder = { style: BorderStyle.SINGLE, size: 1, color: "2E5090" };
const headerBorders = { top: headerBorder, bottom: headerBorder, left: headerBorder, right: headerBorder };

const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

// A4: 11906 x 16838 DXA, 1" margins => content width 9026
const PAGE_WIDTH = 11906;
const CONTENT_WIDTH = 9026;

// Column widths for tidsplanering table
const COL_TID = 1200;
const COL_FAS = 1600;
const COL_AKT = 2000;
const COL_BESK = CONTENT_WIDTH - COL_TID - COL_FAS - COL_AKT; // 4226

function headerCell(text, width) {
  return new TableCell({
    borders: headerBorders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "2E5090", type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({
      children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 20 })],
    })],
  });
}

function cell(content, width, opts = {}) {
  const children = Array.isArray(content) ? content : [
    new Paragraph({
      children: [new TextRun({ text: content, font: "Arial", size: 20, ...opts.run })],
      ...(opts.paragraph || {}),
    }),
  ];
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    verticalAlign: "top",
    children,
  });
}

function bulletParagraph(text, runOpts = {}) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, font: "Arial", size: 20, ...runOpts })],
  });
}

function heading(text, level) {
  return new Paragraph({
    heading: level,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: "Arial" })],
  });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    children: [new TextRun({ text, font: "Arial", size: 22, ...opts })],
  });
}

function boldPara(label, text) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    children: [
      new TextRun({ text: label, font: "Arial", size: 22, bold: true }),
      new TextRun({ text, font: "Arial", size: 22 }),
    ],
  });
}

// Tidsplanering rows
const tidsRows = [
  ["0-5 min", "1. Retrieval review", "Par-retrieval + helklass",
    "Eleverna diskuterar i par (2 min): \"Vad var den svåraste prioriteringen i Alex budget? Hur mycket hade Alex kvar varje månad?\" Sedan kort helklassgenomgång (2 min) där läraren samlar svar och kopplar framåt: \"Idag ska vi se vad som händer när det oväntade inträffar.\""],
  ["5-7 min", "2. Målaktivering", "Provocerande fråga",
    "Visa slide: \"En trasig tand, ett snabblån, en kompis som behöver hjälp - vad gör du?\" Presentera lärandemål: Resonera om privatekonomiska val (mål 3) och koppla individ till samhälle (mål 4)."],
  ["7-17 min", "3. Explicit instruktion", "Worked example: Skuldfällan",
    "Läraren räknar på tavlan: Alex lånar 10 000 kr till 35% ränta - vad kostar det? Visa ränta-på-ränta med konkreta siffror. Presentera begrepp: snabblån, avbetalning, kontokredit, effektiv ränta. Visa konsumenträttigheter (ångerrätt 14 dagar, reklamationsrätt). Kontrollfråga: \"Vad skulle Alex totalt betala tillbaka?\""],
  ["17-32 min", "4. Guidad övning", "Scenarioanalys i par",
    "Eleverna arbetar i par med fyra scenariokort. Varje kort: (1) Identifiera Alex alternativ, (2) Analysera kort- och långsiktiga konsekvenser, (3) Diskutera den öppna frågan. Läraren cirkulerar och ställer fördjupande frågor. Paren hinner minst 2-3 kort under guidad fas. Formativ checkpoint halvvägs: \"Vilket scenario skapar mest oenighet?\""],
  ["32-42 min", "5. Självständig övning", "Fördjupad analys + helklass",
    "Paren arbetar vidare med resterande kort utan lärarstöd. Varje par formulerar: \"Vilket scenario visar tydligast att privatekonomiska val påverkar samhället?\" Avslutande helklassdiskussion (5 min): Läraren samlar argument och lyfter perspektiv individ/företag/samhälle."],
  ["42-45 min", "6. Avslut", "Exit ticket + preview",
    "Exit ticket (individuell, skriftlig): \"Ge ett exempel på hur en individs ekonomiska val kan påverka samhället i stort - och tvärtom. Resonera med hjälp av begrepp från lektionen.\" Preview: \"Nästa lektion kopplar vi ihop allt - kretslopp, arbetsmarknad, privatekonomi - i en skriftlig analys.\""],
];

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "2E5090" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "2E5090" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial", color: "333333" },
        paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
      {
        reference: "numbers",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: PAGE_WIDTH, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E5090", space: 1 } },
          children: [
            new TextRun({ text: "Samhällskunskap 1a1 | Ungas ekonomi | Lektion 4", font: "Arial", size: 16, color: "666666" }),
          ],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [
            new TextRun({ text: "Sida ", font: "Arial", size: 16, color: "666666" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "666666" }),
          ],
        })],
      }),
    },
    children: [
      // Title
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Lektion 4: \"Vad händer om...?\"", font: "Arial", size: 36, bold: true, color: "2E5090" })],
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Risker, val och konsekvenser", font: "Arial", size: 28, color: "555555" })],
      }),

      // Meta info
      boldPara("Kurs: ", "Samhällskunskap 1a1"),
      boldPara("Moment: ", "Ungas ekonomi"),
      boldPara("Lektionslängd: ", "60 minuter"),
      boldPara("Lektion: ", "4 av 5"),

      // Lärandemål
      heading("Lärandemål", HeadingLevel.HEADING_1),
      bulletParagraph("Mål 3: Resonera om privatekonomiska val och deras konsekvenser"),
      bulletParagraph("Mål 4: Diskutera sambandet individ-samhälle - hur individens ekonomiska beslut påverkar och påverkas av samhällsekonomin"),

      // Förberedelse
      heading("Förberedelse", HeadingLevel.HEADING_1),
      bulletParagraph("Skriv ut fyra scenariokort (ett set per par) - se scenariokort nedan"),
      bulletParagraph("Förbered kort presentation om låneformer och ränta (worked example)"),
      bulletParagraph("Miniwhiteboard eller papper för uträkningar"),
      bulletParagraph("Valfritt: skriv ut snabblåne-reklam och Klarna-reklam för diskussion"),
      bulletParagraph("Ha koll på aktuella siffror: Kronofogdens statistik om ungdomar med skulder"),

      // Retrieval review-koppling
      heading("Retrieval review-koppling", HeadingLevel.HEADING_1),
      boldPara("Baserat på exit ticket från lektion 3: ", "Elevernas budgetresultat och prioriteringar. Identifiera vanliga misstag eller insikter."),
      boldPara("Begrepp att återaktualisera: ", "Budget, inkomst, utgifter, sparande, buffert, fasta/rörliga kostnader."),

      // Tidsplanering
      heading("Tidsplanering", HeadingLevel.HEADING_1),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [COL_TID, COL_FAS, COL_AKT, COL_BESK],
        rows: [
          new TableRow({
            children: [
              headerCell("Tid", COL_TID),
              headerCell("Fas", COL_FAS),
              headerCell("Aktivitet", COL_AKT),
              headerCell("Beskrivning", COL_BESK),
            ],
          }),
          ...tidsRows.map((row, i) => new TableRow({
            children: [
              cell(row[0], COL_TID, { shading: i % 2 === 0 ? "F2F6FC" : undefined, run: { bold: true } }),
              cell(row[1], COL_FAS, { shading: i % 2 === 0 ? "F2F6FC" : undefined }),
              cell(row[2], COL_AKT, { shading: i % 2 === 0 ? "F2F6FC" : undefined, run: { bold: true } }),
              cell(row[3], COL_BESK, { shading: i % 2 === 0 ? "F2F6FC" : undefined }),
            ],
          })),
        ],
      }),

      // Note about timing
      new Paragraph({
        spacing: { before: 120, after: 80 },
        children: [new TextRun({ text: "Elevaktiv tid: ca 35 minuter av 45 (78%) - fas 1 (5 min) + fas 4 (15 min) + fas 5 (10 min) + delar av fas 6 (5 min)", font: "Arial", size: 18, italics: true, color: "555555" })],
      }),

      // Lärarinstruktioner
      heading("Lärarinstruktioner", HeadingLevel.HEADING_1),

      heading("Retrieval review (fas 1)", HeadingLevel.HEADING_2),
      bulletParagraph("Fråga: \"Hur mycket hade Alex kvar varje månad i er budget? Vad var den svåraste prioriteringen?\""),
      bulletParagraph("Låt eleverna diskutera i par i 2 minuter, sedan kort helklass i 2 minuter"),
      bulletParagraph("Samla vanliga svar och koppla framåt: \"Idag ska vi se vad som händer när det oväntade inträffar\""),

      heading("Explicit instruktion (fas 3)", HeadingLevel.HEADING_2),
      bulletParagraph("Räkna konkret på tavlan: snabblån 10 000 kr med 35% ränta. Visa totalkostnaden steg för steg"),
      bulletParagraph("Presentera begrepp: snabblån, avbetalning, kontokredit, effektiv ränta"),
      bulletParagraph("Visa konsumenträttigheter: ångerrätt (14 dagar), reklamationsrätt (3 år)"),
      bulletParagraph("Kontrollfråga halvvägs: \"Vad skulle Alex totalt betala tillbaka på det här lånet?\""),
      bulletParagraph("Hänvisa till Kronofogden och Konsumentverket som källor"),

      heading("Guidad övning (fas 4)", HeadingLevel.HEADING_2),
      bulletParagraph("Dela ut scenariokort - ett set per par"),
      bulletParagraph("Instruera: för varje scenario, diskutera alternativen, analysera konsekvenserna, ta ställning till diskussionsfrågan"),
      bulletParagraph("Cirkulera aktivt mellan paren och ställ fördjupande frågor:"),
      bulletParagraph("  - Scenario 1: \"Spelar det roll att Alex inte har föräldrar som kan hjälpa?\""),
      bulletParagraph("  - Scenario 3: \"Är Klarna problemet - eller sociala förväntningar?\""),
      bulletParagraph("  - Scenario 4: \"Vems ansvar är det att anställningsformerna ser ut så?\""),
      bulletParagraph("Formativ checkpoint halvvägs: \"Vilket scenario skapar mest oenighet?\""),

      heading("Självständig övning och helklassdiskussion (fas 5)", HeadingLevel.HEADING_2),
      bulletParagraph("Paren arbetar vidare utan aktivt lärarstöd med resterande kort"),
      bulletParagraph("Varje par formulerar: \"Vilket scenario visar tydligast att privatekonomiska val påverkar samhället?\""),
      bulletParagraph("Helklassdiskussion (5 min): samla argument, lyft att ekonomiska beslut aldrig är rent rationella"),
      bulletParagraph("Avslutande fråga: \"Vems ansvar är det att unga inte hamnar i skuldfällan - individens, företagens eller samhällets?\""),

      heading("Exit ticket (fas 6)", HeadingLevel.HEADING_2),
      bulletParagraph("Individuell skriftlig uppgift: \"Ge ett exempel på hur en individs ekonomiska val kan påverka samhället i stort - och tvärtom. Resonera med hjälp av begrepp från lektionen.\""),
      bulletParagraph("Sortera svar i tre högar: förstod / osäker / missade - informerar lektion 5 retrieval review"),
      bulletParagraph("Preview: \"Nästa lektion kopplar vi ihop allt i en skriftlig analys\""),

      // Page break before scenarios
      new Paragraph({ children: [new PageBreak()] }),

      // Scenariokort
      heading("Scenariokort", HeadingLevel.HEADING_1),
      para("Skriv ut och dela ut ett set per par. Eleverna behöver inte hinna alla fyra - minst tre räcker.", { italics: true, color: "555555" }),

      heading("Scenario 1: Tandläkaren", HeadingLevel.HEADING_2),
      para("Alex har ont i en tand. Akuttandvård kostar 4 200 kr. Alex har 1 800 kr på kontot. Nästa lön kommer om 18 dagar."),
      para("Alternativ:", { bold: true }),
      bulletParagraph("(A) Ta ett snabblån och fixa det direkt"),
      bulletParagraph("(B) Vänta till lönen - men riskera att det blir värre och dyrare"),
      bulletParagraph("(C) Fråga föräldrarna om pengar"),
      bulletParagraph("(D) Gå till vårdcentral och se om det räknas som akutvård"),
      boldPara("Diskussionsfråga: ", "Alla har inte föräldrar som kan hjälpa. Hur påverkar det Alex valmöjligheter? Är det rättvist?"),

      heading("Scenario 2: Kompisen som behöver hjälp", HeadingLevel.HEADING_2),
      para("Alex kompis Dani har blivit av med sitt jobb och kan inte betala hyran. Dani frågar om att låna 5 000 kr - \"bara till nästa månad\". Alex har pengarna på sparkontot, men det är hela buffertsparandet."),
      boldPara("Diskussionsfråga: ", "Vad är skillnaden mellan att vara en bra vän och att fatta kloka ekonomiska beslut? Kan man vara båda?"),

      heading("Scenario 3: \"Alla andra har det\"", HeadingLevel.HEADING_2),
      para("Alex jobbarkompisar åker på en weekend till Köpenhamn. Det kostar ca 4 000 kr. Alex har egentligen inte råd, men vill inte vara den som alltid säger nej. En kompis säger \"lägg det på Klarna, betala senare\"."),
      boldPara("Diskussionsfråga: ", "Hur påverkar sociala förväntningar ekonomiska beslut? Är det ett individuellt problem eller ett samhällsproblem att företag som Klarna gör det lätt att skuldsätta sig?"),

      heading("Scenario 4: Systemfrågan", HeadingLevel.HEADING_2),
      para("Alex kollega Fatima jobbar lika många timmar men får 2 000 kr mindre i månaden - hon är inhyrd via bemanningsföretag medan Alex är direktanställd. Fatima har inga semesterdagar och ingen sjukpenning."),
      boldPara("Diskussionsfråga: ", "Är det rättvist? Vems ansvar är det att lösa det - Fatimas, företagets, fackets eller politikernas?"),

      // Differentiering
      heading("Differentiering", HeadingLevel.HEADING_1),
      heading("Stöd (mot E)", HeadingLevel.HEADING_2),
      bulletParagraph("Varje scenariokort har stödfrågor: \"Vilka alternativ har Alex?\" och \"Vad händer om Alex väljer alternativ A? Alternativ B?\""),
      bulletParagraph("Meningsstartar: \"En konsekvens av detta val är att...\" / \"På kort sikt innebär det att...\""),
      bulletParagraph("Eleverna bearbetar frågorna steg för steg med tydlig struktur"),
      bulletParagraph("Fokus på att identifiera alternativ och ge enkla resonemang om konsekvenser"),

      heading("Utmaning (mot A)", HeadingLevel.HEADING_2),
      bulletParagraph("Extra dimension: \"Diskutera frågan ur både individens och samhällets perspektiv\""),
      bulletParagraph("Krav på koppling privat till makro: \"Hur kopplar detta till det ekonomiska kretsloppet?\""),
      bulletParagraph("Politisk analys: \"Föreslå en politisk åtgärd som skulle kunna förebygga situationen\""),
      bulletParagraph("Problematisering av skuldsättning ur samhällsperspektiv: strukturella orsaker, inte bara individuella val"),

      // Koppling till kunskapskrav
      heading("Koppling till kunskapskrav", HeadingLevel.HEADING_1),
      bulletParagraph("E-nivå: Identifiera alternativ och ge enkla resonemang om konsekvenser av ekonomiska val"),
      bulletParagraph("C-nivå: Föra välgrundade resonemang om kort- och långsiktiga konsekvenser och visa på samband"),
      bulletParagraph("A-nivå: Föra välgrundade och nyanserade resonemang ur flera perspektiv (individ, företag, samhälle) och visa på komplexa samband mellan privatekonomi och samhällsekonomi"),

      // Material
      heading("Material och källor", HeadingLevel.HEADING_1),
      bulletParagraph("Fyra scenariokort (utskrift, ett set per par)"),
      bulletParagraph("Presentation om låneformer och ränta"),
      bulletParagraph("Kronofogden: statistik om skuldsättning bland unga (kronofogden.se)"),
      bulletParagraph("Konsumentverket: information om konsumenträtt (konsumentverket.se)"),
      bulletParagraph("Konsumentköplagen (2022:260): ångerrätt och reklamationsrätt"),
      bulletParagraph("Valfritt: Klarna-reklam och snabblåne-reklam för diskussion"),
    ],
  }],
});

const OUTPUT = "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-parallel-generation/with_skill/outputs/lektion-4.docx";

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(OUTPUT, buffer);
  console.log("Wrote " + OUTPUT);
});
