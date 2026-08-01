const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, LevelFormat,
        HeadingLevel, BorderStyle, WidthType, ShadingType,
        PageNumber, PageBreak } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const headerBorder = { style: BorderStyle.SINGLE, size: 1, color: "2E5090" };
const headerBorders = { top: headerBorder, bottom: headerBorder, left: headerBorder, right: headerBorder };

const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

// A4 dimensions
const PAGE_WIDTH = 11906;
const MARGIN_LEFT = 1440;
const MARGIN_RIGHT = 1440;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT; // 9026

function headerCell(text, width) {
  return new TableCell({
    borders: headerBorders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "2E5090", type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })]
  });
}

function bodyCell(textOrParagraphs, width, opts = {}) {
  const children = Array.isArray(textOrParagraphs) ? textOrParagraphs :
    [new Paragraph({ children: [new TextRun({ text: textOrParagraphs, font: "Arial", size: 20, ...opts.runOpts })] })];
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children
  });
}

function bullet(text, ref = "bullets") {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, font: "Arial", size: 20 })]
  });
}

function boldParagraph(label, text) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    children: [
      new TextRun({ text: label, bold: true, font: "Arial", size: 20 }),
      new TextRun({ text, font: "Arial", size: 20 })
    ]
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: "Arial", size: 28, bold: true })]
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 180, after: 80 },
    children: [new TextRun({ text, font: "Arial", size: 24, bold: true })]
  });
}

function normalPara(text) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 20 })]
  });
}

// Time table columns: Tid, Fas, Aktivitet, Beskrivning
const colWidths = [1000, 1600, 2000, 4426];

const timeRows = [
  ["0-5 min", "1. Retrieval review", "Arbetsmarknads-quiz", "Tre snabbfragor fran lektion 2: (1) Namn tre anstallningsformer, (2) Vad ar en nackdel med timanstallning? (3) Vem betalar arbetsgivaravgift? Enskilt 1 min, sedan par. Larargenomgang 2 min."],
  ["5-7 min", "2. Malaktivering", "Alex flyttar hemifrån", "Visa: 'Alex har fatt sitt forsta jobb och ska flytta hemifran. Bruttolonen ar 22 000 kr. Racker det?' Dagens mal: Ni ska kunna gora en realistisk budget och resonera om ekonomiska val."],
  ["7-17 min", "3. Explicit instruktion", "Fran brutto till budget", "Worked example pa tavlan: 22 000 brutto - skatt (ca 30%) = 17 600 netto. Kategorisera utgifter: fasta (hyra, forsakring, telefon) vs rorliga (mat, noje). Visa sparkvot och buffert. Kontrollfragor: Vart gar skatten? Vad ar skillnaden mellan fast och rorlig utgift?"],
  ["17-32 min", "4. Guidad ovning", "Budgetovning i par", "Varje par far TVA av tre livsstilar att budgetera for (Sparsam, Har-och-nu, Investerar). Steg 1: Rakna ihop fasta utgifter. Steg 2: Lagg till rorliga. Steg 3: Jamfor - vad vinner/forlorar Alex? Lararen cirkulerar, staller fordjupande fragor."],
  ["32-47 min", "5. Sjalvstandig ovning", "Analys och argumentation", "Paren argumenterar skriftligt: Vilken livsstil ar 'smartast' - och for vem? Krav: ange minst tva perspektiv (kort sikt/lang sikt, eller individ/samhalle). Avsluta med EPA (5 min): Vems ansvar ar det om Alex hamnar i ekonomiska problem?"],
  ["47-52 min", "6. Avslut", "Summering + Exit ticket", "Aterkoppla till malet. Exit ticket: 'Alex overraskande bilreparation kostar 8 000 kr. Beskriv hur respektive livsstil klarar det - och vad det sager om privatekonomiska val.' Preview: Nasta gang - vad hander nar det gar fel?"]
];

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: "2E5090" },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2E5090" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "444444" },
        paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbers",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets2",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E5090", space: 4 } },
          children: [
            new TextRun({ text: "Samhallskunskap 1a1 | Ungas ekonomi | Lektion 3", font: "Arial", size: 18, color: "666666" })
          ]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          border: { top: { style: BorderStyle.SINGLE, size: 6, color: "2E5090", space: 4 } },
          alignment: AlignmentType.RIGHT,
          children: [
            new TextRun({ text: "Sida ", font: "Arial", size: 18, color: "666666" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "666666" })
          ]
        })]
      })
    },
    children: [
      // Title
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: 'Lektion 3: "Racker pengarna?"', font: "Arial", size: 36, bold: true, color: "2E5090" })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Privatekonomi och budget", font: "Arial", size: 28, color: "444444", italics: true })]
      }),

      // Meta info
      boldParagraph("Kurs: ", "Samhallskunskap 1a1"),
      boldParagraph("Moment: ", "Ungas ekonomi"),
      boldParagraph("Lektionslangd: ", "60 minuter"),
      boldParagraph("Larandemal: ", "Mal 3 - Resonera om privatekonomiska val och deras konsekvenser"),
      new Paragraph({ spacing: { after: 200 }, children: [] }),

      // Larandemal section
      heading2("Larandemal for lektionen"),
      normalPara("Eleven ska kunna resonera om privatekonomiska val och deras konsekvenser."),
      bullet("E: Redogor oversiktligt for privatekonomiska begrepp och for enkla resonemang om konsekvenser av ekonomiska val.", "bullets"),
      bullet("C: Redogor utforligt for privatekonomiska begrepp och for valgrundade resonemang om konsekvenser av ekonomiska val.", "bullets"),
      bullet("A: Redogor utforligt och nyanserat for privatekonomiska begrepp och for valgrundade och nyanserade resonemang om konsekvenser av ekonomiska val, med koppling till komplexa samband i samhallsekonomin.", "bullets"),
      new Paragraph({ spacing: { after: 120 }, children: [] }),

      // Forberedelse
      heading2("Forberedelse"),
      bullet("Forbered presentation om privatekonomiska grunder (brutto/netto, skatt, fasta/rorliga utgifter)", "bullets2"),
      bullet("Skriv ut livsstilsbeskrivningar med utgiftsposter (tva per par)", "bullets2"),
      bullet("Miniwhiteboard eller papper for utrakning", "bullets2"),
      bullet("Ha aktuella siffror for kommunalskatt tillgangliga (ca 30%, Skatteverket)", "bullets2"),
      new Paragraph({ spacing: { after: 120 }, children: [] }),

      // Retrieval review-koppling
      heading2("Retrieval review-koppling"),
      normalPara("Baserat pa exit ticket fran lektion 2 om arbetsmarknaden. Repeterar anstallningsformer och deras konsekvenser for inkomst, vilket ar en bro till dagens tema om privatekonomi."),
      new Paragraph({ spacing: { after: 120 }, children: [] }),

      // Tidsplanering
      heading2("Tidsplanering"),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: colWidths,
        rows: [
          new TableRow({
            children: [
              headerCell("Tid", colWidths[0]),
              headerCell("Fas", colWidths[1]),
              headerCell("Aktivitet", colWidths[2]),
              headerCell("Beskrivning", colWidths[3]),
            ]
          }),
          ...timeRows.map((row, i) => new TableRow({
            children: row.map((cell, j) => bodyCell(cell, colWidths[j], {
              shading: i % 2 === 0 ? "F2F6FC" : undefined
            }))
          }))
        ]
      }),
      new Paragraph({ spacing: { after: 200 }, children: [] }),

      // Lararinstruktioner
      heading2("Lararinstruktioner"),

      heading3("Fas 1: Retrieval review"),
      normalPara("Koppla till lektion 2: 'Vilka anstallningsformer pratade vi om? Vad hade de for konsekvenser for trygghet och lon?' Anvand resultaten fran snabbskrivningen om kompis vs. mamma som utgangspunkt. Koppla till idag: 'Nu vet Alex vad arbetsmarknaden erbjuder - men racker pengarna?'"),

      heading3("Fas 3: Explicit instruktion"),
      normalPara("Rakna konkret pa tavlan: 22 000 brutto x 0,7 = ca 15 400 netto (anvand kommunens faktiska skattesats). Visa varifrån siffrorna kommer (Skatteverket). Forklara vart skatten gar - koppla till kretsloppet fran lektion 1. Kontrollfragor efter varje steg: 'Vad ar skillnaden mellan brutto och netto?' 'Ge ett exempel pa en fast utgift.'"),

      heading3("Fas 4: Guidad ovning"),
      normalPara("Cirkulera aktivt. Kontrollera att paren inte bara radar upp siffror utan faktiskt jamfor: 'Vad offrar Sparsam Alex som Har-och-nu-Alex far?' (mot C). 'Kan man saga att en livsstil ar objektivt battre - eller beror det pa vad man varderar?' (mot A). Om par fastnar: ge stodfragan 'Borja med de fasta utgifterna - hur mycket blir kvar?'"),

      heading3("Fas 5: Sjalvstandig ovning"),
      normalPara("Argumentationsuppgiften kraver att elever tar stallning och motiverar. Pusha mot perspektivvaxling: 'Tanker du bara kort sikt eller lang sikt?' EPA-fragan om ansvar ar medvetet polariserande - lat bada sidor komma till tals."),

      heading3("Fas 6: Exit ticket"),
      normalPara("Exit ticket-fragan om bilreparation testar forstaelse for buffert, prioritering och konsekvenstankande. Samla in och sortera i tre hogar: forstod, osaker, missade. Informerar lektion 4 om risker och skuldfalla."),
      new Paragraph({ spacing: { after: 120 }, children: [] }),

      // Alex tre livsstilar
      new Paragraph({ children: [new PageBreak()] }),
      heading2("Alex tre livsstilar"),
      normalPara("Alex nettoinkomst: ca 17 600 kr/man. Tre mojliga satt att leva:"),
      new Paragraph({ spacing: { after: 80 }, children: [] }),

      heading3("1. Sparsam Alex"),
      normalPara("Delar lagenhet med en kompis (4 200 kr var), lagar all mat hemma (2 800 kr), ingen prenumeration, inget gym, begransat nojesliv (500 kr). Sparar 2 500 kr/man."),

      heading3("2. Har-och-nu-Alex"),
      normalPara("Egen etta (7 500 kr), ater ute 2-3 ggr/vecka (4 500 kr mat totalt), gym (399 kr), Spotify+streaming (250 kr), klader varje manad (800 kr), noje/uteliv (1 500 kr). Sparar 0 kr."),

      heading3("3. Investerar-Alex"),
      normalPara("Delar lagenhet (4 200 kr), snalar pa noje (300 kr), lagar mat hemma (2 800 kr), men lagger 3 000 kr/man pa att ta korkort + sparar till utlandsstudier. Lever stramt nu for framtida mojligheter."),

      normalPara("Gemensamma fasta utgifter for alla: telefon (399 kr), hemforsakring (150 kr), kollektivtrafik (950 kr), el (andel, 300-500 kr)."),
      new Paragraph({ spacing: { after: 120 }, children: [] }),

      // Differentiering
      heading2("Differentiering"),

      heading3("Stod (mot E)"),
      bullet("Livsstilsbeskrivningarna har tydliga siffror", "bullets"),
      bullet("Stodfragor: 'Rakna ihop alla fasta utgifter forst. Hur mycket blir kvar?'", "bullets"),
      bullet("Forifylld mall med kategorierna redan upplagda", "bullets"),
      bullet("Jamforelsefraga med tva alternativ: 'Vilken livsstil ger mest pengar over?'", "bullets"),

      heading3("Utmaning (mot A)"),
      bullet("Perspektivvaxling: 'Vad hander om en hel generation unga lever som Sparsam Alex - vad hander med konsumtionen och kretsloppet?'", "bullets"),
      bullet("Oppen analys: 'Gar det att saga att en livsstil ar objektivt battre - eller beror det alltid pa varderingar?'", "bullets"),
      bullet("Koppling privat till makro: 'Hur paverkar Alex sparande samhallsekonomin?'", "bullets"),
      bullet("Tillaggsuppgift: 'Vad hander om Alex bara jobbar halvtid - hur forandras de tre livsstilarna?'", "bullets"),
      new Paragraph({ spacing: { after: 120 }, children: [] }),

      // Exit ticket
      heading2("Exit ticket"),
      boldParagraph("Fraga: ", "'Alex overraskande bilreparation kostar 8 000 kr. Beskriv hur respektive livsstil klarar det - och vad det sager om privatekonomiska val.'"),
      boldParagraph("Anvandning: ", "Sorteras i tre hogar (forstod/osaker/missade). Resultaten informerar lektion 4 om risker, ovantade utgifter och skuldfalla."),
      new Paragraph({ spacing: { after: 120 }, children: [] }),

      // Material
      heading2("Material"),
      bullet("Presentation om privatekonomiska grunder (medfoljande PPTX)", "bullets2"),
      bullet("Tre livsstilsbeskrivningar med utgiftsposter (utskrift, tva per par)", "bullets2"),
      bullet("Miniwhiteboard eller papper for utrakning", "bullets2"),
      bullet("Skattetabell fran Skatteverket (skatteverket.se)", "bullets2"),
      bullet("SCB:s data om hushallens utgifter (scb.se)", "bullets2"),
      new Paragraph({ spacing: { after: 120 }, children: [] }),

      // Koppling till kunskapskrav
      heading2("Koppling till kunskapskrav"),
      normalPara("Lektionen bygger mal 3 (resonera om privatekonomiska val) genom praktisk tillamping."),
      bullet("E-niva: Redogora oversiktligt for privatekonomiska begrepp (inkomst, utgift, budget) och gora en enkel budget.", "bullets"),
      bullet("C-niva: Redogora utforligt och resonera valgrundat om konsekvenser av olika prioriteringar i budgeten.", "bullets"),
      bullet("A-niva: Resonera valgrundat och nyanserat om privatekonomiska val, koppla till komplexa samband i samhallsekonomin (kretsloppet, valfard).", "bullets"),

      // AI-svaghetscheck
      new Paragraph({ spacing: { after: 120 }, children: [] }),
      heading2("AI-svaghetscheck"),
      bullet(">50% aktiviteter pa analysera/vardera/skapa-niva? Ja - budgetovning (tillampa), argumentation (vardera), perspektivvaxling (analysera), EPA ansvarsdiskussion (vardera)", "bullets2"),
      bullet("Flera perspektiv? Ja - individ vs samhalle, kort sikt vs lang sikt, tre livsstilar med olika varderingar", "bullets2"),
      bullet("Primarskallor? Ja - Skatteverket (skattesatser), SCB (hushallsutgifter), Konsumentverket (budgetrad)", "bullets2"),
      bullet("Deliberativa diskussionsuppgifter? Ja - EPA om ansvar (individ vs samhalle), argumentationsuppgift med perspektivkrav", "bullets2"),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  const outPath = "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-parallel-generation/with_skill/outputs/lektion-3.docx";
  fs.writeFileSync(outPath, buffer);
  console.log("Created: " + outPath);
});
