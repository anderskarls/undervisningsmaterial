const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
        BorderStyle, WidthType, ShadingType, PageNumber, PageBreak } = require("docx");

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

// Table width: A4 with 1" margins = 11906 - 2880 = 9026 DXA
const TABLE_WIDTH = 9026;
const COL_WIDTHS = [1200, 1800, 2013, 4013]; // Tid, Fas, Aktivitet, Beskrivning

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "2E5A88", type: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 22 })] })]
  });
}

function cell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, font: "Arial", size: 22 })] })]
  });
}

function heading1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
}

function heading2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 240, after: 120 }, children: [new TextRun(text)] });
}

function bullet(text, ref = "bullets") {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    children: [new TextRun({ text, font: "Arial", size: 24 })]
  });
}

function bodyText(text) {
  return new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text, font: "Arial", size: 24 })] });
}

function boldBodyText(label, text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({ text: label, bold: true, font: "Arial", size: 24 }),
      new TextRun({ text, font: "Arial", size: 24 })
    ]
  });
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
  numbering: {
    config: [
      { reference: "bullets",
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
          children: [new TextRun({ text: "Samhällskunskap 1a1 — Ungas ekonomi", font: "Arial", size: 18, color: "888888" })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Samhällskunskap 1a1 | Ungas ekonomi | Sida ", font: "Arial", size: 18, color: "888888" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "888888" })
          ]
        })]
      })
    },
    children: [
      heading1("Lektion 1: \"Vad händer med pengarna?\" — Det ekonomiska kretsloppet"),

      boldBodyText("Kurs: ", "Samhällskunskap 1a1"),
      boldBodyText("Moment: ", "Ungas ekonomi"),
      boldBodyText("Lektionslängd: ", "60 minuter"),

      heading2("Lärandemål för lektionen"),
      bullet("Mål 1: Redogöra för det ekonomiska kretsloppet — hur hushåll, företag och offentlig sektor hänger samman"),
      bullet("Mål 4: Diskutera sambandet individ-samhälle — hur individens ekonomiska beslut påverkar och påverkas av samhällsekonomin"),

      heading2("Förberedelse"),
      bullet("Förbered presentation med kretsloppsbild (tom mall + komplett version)"),
      bullet("Skriv ut eller förbered digital version av Alex personbeskrivning"),
      bullet("Förbered A3-papper och pennor för begreppskartan (alternativt digital whiteboard)"),
      bullet("Förbered exit ticket-lappar eller digital form"),

      heading2("Retrieval review-koppling"),
      bodyText("Första lektionen i momentet — ingen exit ticket-data att utgå från. Aktivera förkunskaper om ekonomi istället: \"Vad tänker ni på när ni hör ordet ekonomi? Skriv tre ord på en lapp.\""),

      heading2("Tidsplanering"),
      new Table({
        width: { size: TABLE_WIDTH, type: WidthType.DXA },
        columnWidths: COL_WIDTHS,
        rows: [
          new TableRow({ children: [
            headerCell("Tid", COL_WIDTHS[0]),
            headerCell("Fas", COL_WIDTHS[1]),
            headerCell("Aktivitet", COL_WIDTHS[2]),
            headerCell("Beskrivning", COL_WIDTHS[3]),
          ]}),
          new TableRow({ children: [
            cell("0-5 min", COL_WIDTHS[0]),
            cell("1. Retrieval review", COL_WIDTHS[1]),
            cell("Ordmoln", COL_WIDTHS[2]),
            cell("Eleverna skriver tre ord de associerar med \"ekonomi\" på en lapp. Samla på tavlan. Sortera gemensamt: vilka handlar om privatekonomi? Samhällsekonomi? Båda? Detta skapar en bro till kretsloppet.", COL_WIDTHS[3]),
          ]}),
          new TableRow({ children: [
            cell("5-7 min", COL_WIDTHS[0]),
            cell("2. Målaktivering", COL_WIDTHS[1]),
            cell("Introduktion av Alex", COL_WIDTHS[2]),
            cell("Presentera Alex (19 år, ska flytta hemifrån). Visa dagens mål: \"Efter lektionen ska ni kunna förklara hur pengar rör sig mellan hushåll, företag och stat — och varför det spelar roll för Alex.\" Fråga: \"Vad behöver Alex tänka på ekonomiskt?\"", COL_WIDTHS[3]),
          ]}),
          new TableRow({ children: [
            cell("7-17 min", COL_WIDTHS[0]),
            cell("3. Explicit instruktion", COL_WIDTHS[1]),
            cell("Kretsloppet steg för steg", COL_WIDTHS[2]),
            cell("Bygg kretsloppet på tavlan/presentation i tre steg: (1) Hushållen — Alex som konsument och arbetstagare. (2) Företagen — Alex arbetsgivare och de butiker han handlar i. (3) Offentlig sektor — skatt, bidrag, tjänster. Kontrollfrågor efter varje steg: \"Vart går pengarna härifrån?\" Använd primärkälla: SCB:s statistik om hushållens utgifter.", COL_WIDTHS[3]),
          ]}),
          new TableRow({ children: [
            cell("17-42 min", COL_WIDTHS[0]),
            cell("4. Guidad övning", COL_WIDTHS[1]),
            cell("Bygg Alex kretslopp", COL_WIDTHS[2]),
            cell("I par: Rita Alex ekonomiska kretslopp på A3-papper. Steg 1: Placera aktörerna (Alex hushåll, hans arbetsgivare, kommunen). Steg 2: Rita pengaflöden med pilar (lön, skatt, konsumtion, offentliga tjänster). Steg 3: Diskutera — vad händer om Alex förlorar jobbet? Vilka pilar påverkas? Läraren cirkulerar, ställer fördjupande frågor till varje par, identifierar missförstånd om t.ex. skattens roll.", COL_WIDTHS[3]),
          ]}),
          new TableRow({ children: [
            cell("42-52 min", COL_WIDTHS[0]),
            cell("5. Självständig övning", COL_WIDTHS[1]),
            cell("Analysera ett scenario", COL_WIDTHS[2]),
            cell("Individuellt: \"Alex kommun höjer skatten med 1 krona. Följ pengarna genom kretsloppet — vem påverkas och hur?\" Skriv ett kort resonemang (5-8 meningar). Mot E: Använd meningsstarter (\"När skatten höjs...\", \"Det påverkar företagen genom att...\"). Mot A: Analysera ur tre perspektiv (Alex, hans arbetsgivare, kommunen) och diskutera om höjningen är positiv eller negativ.", COL_WIDTHS[3]),
          ]}),
          new TableRow({ children: [
            cell("52-57 min", COL_WIDTHS[0]),
            cell("5 (forts.)", COL_WIDTHS[1]),
            cell("Delning", COL_WIDTHS[2]),
            cell("2-3 elever delar sina resonemang. Klassen ger kort feedback: \"Vilka aktörer nämndes? Saknades någon?\"", COL_WIDTHS[3]),
          ]}),
          new TableRow({ children: [
            cell("57-60 min", COL_WIDTHS[0]),
            cell("6. Avslut", COL_WIDTHS[1]),
            cell("Exit ticket + preview", COL_WIDTHS[2]),
            cell("Exit ticket: \"Förklara med egna ord varför det som händer i Alex plånbok påverkar hela samhällsekonomin. Ge ett konkret exempel.\" Preview: \"Nästa lektion ska Alex söka jobb — vi tittar på arbetsmarknaden.\"", COL_WIDTHS[3]),
          ]}),
        ]
      }),

      heading2("Lärarinstruktioner"),
      boldBodyText("Retrieval review: ", "Samla in ordlapparna snabbt. Peka på ord som återkommer och gruppera dem. Använd detta som språngbräda: \"Ni nämner lön, skatt, hyra — alla de här sakerna hänger ihop i ett system som vi kallar det ekonomiska kretsloppet.\""),
      boldBodyText("Instruktion: ", "Bygg kretsloppet visuellt — börja med en tom bild och lägg till en aktör i taget. Använd Alex som genomgående exempel. Kontrollfråga efter hushåll: \"Varifrån får Alex pengar?\" Efter företag: \"Vart tar pengarna vägen när Alex handlar?\" Efter offentlig sektor: \"Vad får Alex tillbaka av skatten?\""),
      boldBodyText("Guidad övning: ", "Cirkulera aktivt. Vanliga missförstånd: att skatt \"försvinner\" (visa att den kommer tillbaka som tjänster), att kretsloppet bara går åt ett håll. Ställ frågor som \"Vad händer om vi tar bort en pil?\" för att testa förståelse."),
      boldBodyText("Avslut: ", "Samla in exit tickets. Sortera i tre högar: förstod kopplingen (vidare), osäkra (ta upp i retrieval review nästa gång), missade helt (adressera explicit)."),

      heading2("Elevaktiviteter"),
      bullet("Ordassociation (individuellt, 2 min): Tre ord om \"ekonomi\""),
      bullet("Begreppskarta i par (25 min): Rita Alex ekonomiska kretslopp med aktörer och pengaflöden"),
      bullet("Scenarioanalys (individuellt, 10 min): Analysera skattehöjningens effekter genom kretsloppet"),
      bullet("Exit ticket (individuellt, 3 min): Förklara kopplingen individ-samhällsekonomi"),

      heading2("Differentiering"),
      boldBodyText("Stöd (mot E): ", "Förifyld begreppskarta med aktörerna redan utplacerade — eleverna ritar bara pilarna. Meningsstarter för scenarioanalysen. Ordlista med nyckelbegrepp (hushåll, konsumtion, offentlig sektor, skatt, transfereringar)."),
      boldBodyText("Utmaning (mot A): ", "Tom begreppskarta — eleverna placerar aktörer själva och lägger till fler (t.ex. banker, utlandet). Scenarioanalysen utan stödstruktur, med krav på tre perspektiv och problematisering av om skattehöjningen är positiv eller negativ beroende på perspektiv."),

      heading2("Exit ticket"),
      boldBodyText("Fråga: ", "\"Förklara med egna ord varför det som händer i Alex plånbok påverkar hela samhällsekonomin. Ge ett konkret exempel.\""),
      boldBodyText("Användning: ", "Om många elever missar kopplingen individ-samhälle, inled lektion 2 med en kort repetition av kretsloppets flöden med fokus på hur en förändring sprider sig. Om de flesta förstår, gå vidare med kort retrieval quiz om aktörerna."),

      heading2("Material"),
      bullet("Presentation med kretsloppsbild (tom mall + komplett version)"),
      bullet("Alex personbeskrivning (utskriven eller digital)"),
      bullet("A3-papper och färgpennor (eller digital whiteboard)"),
      bullet("Exit ticket-lappar eller digital form"),
      bullet("Meningsstarter (stödmaterial, utskrivet för de som behöver)"),
      bullet("SCB:s statistik om hushållens utgifter (källa till instruktionsmomentet)"),

      heading2("Koppling till kunskapskrav"),
      boldBodyText("E-nivå: ", "Eleven redogör översiktligt för kretsloppet genom att namnge aktörerna och visa på enkla samband (pengar går från hushåll till företag)."),
      boldBodyText("C-nivå: ", "Eleven redogör utförligt för kretsloppet och visar hur förändringar i en del påverkar andra delar."),
      boldBodyText("A-nivå: ", "Eleven redogör utförligt och nyanserat för kretsloppet, visar på komplexa samband och analyserar ur flera perspektiv (individ, företag, samhälle)."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/lektion-1.docx", buffer);
  console.log("lektion-1.docx created successfully");
});
