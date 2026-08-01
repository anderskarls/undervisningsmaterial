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
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Lektion 5: \"Min ekonomi, hela samhällets ekonomi\" — Syntes och fördjupning")] }),
      boldBody("Kurs: ", "Samhällskunskap 1a1"),
      boldBody("Moment: ", "Ungas ekonomi"),
      boldBody("Lektionslängd: ", "60 minuter"),

      heading2("Lärandemål för lektionen"),
      bullet("Mål 1: Redogöra för det ekonomiska kretsloppet"),
      bullet("Mål 2: Analysera arbetsmarknadens villkor för unga"),
      bullet("Mål 3: Resonera om privatekonomiska val och deras konsekvenser"),
      bullet("Mål 4: Diskutera sambandet individ-samhälle"),

      heading2("Förberedelse"),
      bullet("Förbered skriftlig analysuppgift med tydliga instruktioner och E/C/A-kriterier"),
      bullet("Förbered kamratbedömningsformulär med konkreta bedömningspunkter"),
      bullet("Förbered sammanfattande presentation som knyter ihop momentets röda tråd"),
      bullet("Förbered konsekvenskedjemall som stödmaterial"),

      heading2("Retrieval review-koppling"),
      boldBody("Baserat på exit ticket från lektion 4: ", "Om eleverna hade svårt att koppla individ till samhälle med begreppen kretslopp och konsekvenskedja — börja med en gemensam konsekvenskedja på tavlan. Om de flesta klarade det, snabb retrieval: \"Nämn ett begrepp från varje lektion: kretsloppet (L1), arbetsmarknaden (L2), privatekonomi (L3), konsekvenser (L4).\""),

      heading2("Tidsplanering"),
      new Table({
        width: { size: TABLE_WIDTH, type: WidthType.DXA }, columnWidths: COL_WIDTHS,
        rows: [
          new TableRow({ children: [headerCell("Tid", COL_WIDTHS[0]), headerCell("Fas", COL_WIDTHS[1]), headerCell("Aktivitet", COL_WIDTHS[2]), headerCell("Beskrivning", COL_WIDTHS[3])] }),
          new TableRow({ children: [
            cell("0-5 min", COL_WIDTHS[0]), cell("1. Retrieval review", COL_WIDTHS[1]), cell("Hela momentet i fyra begrepp", COL_WIDTHS[2]),
            cell("Individuellt (2 min): \"Skriv ner ett nyckelbegrepp från varje lektion.\" Par (2 min): Jämför och komplettera. Gemensamt (1 min): Samla på tavlan — visa hur begreppen hänger ihop. \"Idag ska ni visa att ni kan koppla ihop alla dessa delar.\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("5-7 min", COL_WIDTHS[0]), cell("2. Målaktivering", COL_WIDTHS[1]), cell("Alex resa — sammanfattning", COL_WIDTHS[2]),
            cell("Kort sammanfattning av Alex resa genom momentet: kretslopp → jobbsökning → budget → val och konsekvenser. \"Nu ska ni visa att ni förstår helheten.\" Presentera uppgiften och bedömningskriterierna tydligt. Visa E/C/A-exempel med korta formuleringar.", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("7-12 min", COL_WIDTHS[0]), cell("3. Explicit instruktion", COL_WIDTHS[1]), cell("Uppgiftsinstruktion + modelltänkande", COL_WIDTHS[2]),
            cell("Visa analysuppgiften: \"Alex har bott ensam i sex månader. Han har timanställning, en budget som precis går ihop, och funderar på att ta ett lån för att köpa bil. Analysera Alex situation: (1) Beskriv Alex roll i det ekonomiska kretsloppet, (2) Analysera hur arbetsmarknadens villkor påverkar Alex ekonomi, (3) Resonera om vad som händer om Alex tar lånet — kortsiktiga och långsiktiga konsekvenser, (4) Diskutera hur Alex val påverkar samhällsekonomin.\" Modellera steg 1 kort med think-aloud: \"Om jag skulle börja med kretsloppet, tänker jag så här...\" Visa sedan E- vs A-skillnaden med ett kort exempel.", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("12-37 min", COL_WIDTHS[0]), cell("4. Guidad övning → Självständig", COL_WIDTHS[1]), cell("Skriftlig analysuppgift", COL_WIDTHS[2]),
            cell("Fas 4a - Guidad start (10 min): Eleverna planerar sin text — gör en snabb disposition. Läraren cirkulerar, hjälper med struktur. Ställ frågor: \"Vilka begrepp ska du använda? Vilka perspektiv tar du med?\" Fas 4b - Självständigt skrivande (15 min): Eleverna skriver sin analys. Läraren cirkulerar men ger minimalt stöd — detta är demonstration av lärande. Mot E: Tillgång till dispositionsmall med rubrikerna givna och meningsstarter. Ordlista tillgänglig. Mot A: Inga hjälpmedel. Förväntning på minst tre perspektiv, koppling privat→makro, och problematisering.", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("37-50 min", COL_WIDTHS[0]), cell("5. Kamratbedömning", COL_WIDTHS[1]), cell("Bedöm en kompis text", COL_WIDTHS[2]),
            cell("Byt text med en klasskamrat. Läs och bedöm med formuläret (8 min). Bedömningspunkter: (1) Nämns alla fyra delar? (kretslopp, arbetsmarknad, privatekonomi, samhällskoppling), (2) Finns resonemang med för och emot? (3) Används begrepp korrekt? (4) Finns koppling individ→samhälle? Ge skriftlig feedback: en styrka och ett förbättringsförslag (3 min). Kort muntlig återkoppling till kompisen (2 min).", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("50-55 min", COL_WIDTHS[0]), cell("5 (forts.)", COL_WIDTHS[1]), cell("Revidering", COL_WIDTHS[2]),
            cell("Eleverna får 5 minuter att förbättra sin text baserat på feedbacken. \"Välj en sak från feedbacken och förbättra den.\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("55-60 min", COL_WIDTHS[0]), cell("6. Avslut", COL_WIDTHS[1]), cell("Reflektion + exit ticket", COL_WIDTHS[2]),
            cell("Exit ticket: \"Vad är det viktigaste du lärt dig under momentet? Ge ett konkret exempel på hur du kan använda kunskapen i ditt eget liv.\" Avsluta momentet: \"Ni har följt Alex resa genom ekonomin — från kretsloppet till jobbsökning till budget till svåra val. Den kunskapen är inte bara skolkunskap — den är livkunskap.\"", COL_WIDTHS[3])
          ]}),
        ]
      }),

      heading2("Lärarinstruktioner"),
      boldBody("Retrieval review: ", "Syftet är att aktivera ALLT som behövs för den skriftliga uppgiften. Begreppsamlingen på tavlan fungerar som en visuell resurs under skrivandet."),
      boldBody("Instruktion: ", "Modellera kort men tydligt. Visa skillnaden mellan E (\"Alex betalar skatt\") och A (\"Alex skattebetalning finansierar den infrastruktur som möjliggör hans arbetsplats — utan vägar och kollektivtrafik kan han inte ta sig till jobbet, vilket illustrerar det ömsesidiga beroendet i kretsloppet\")."),
      boldBody("Guidad övning: ", "De första 10 minuterna är kritiska — hjälp elever som fastnar med struktur. Under skrivandet, cirkulera men ingrip bara vid blockeringar."),
      boldBody("Kamratbedömning: ", "Gå igenom bedömningsformuläret innan de börjar. Modellera: \"Om kompisen skrev 'Alex betalar skatt', vad saknas då för att nå C-nivå?\" Övervaka att feedbacken är specifik, inte bara \"bra text\"."),
      boldBody("Avslut: ", "Sista exit ticket i momentet — reflektiv snarare än kunskapsmätande. Svaren kan användas för framtida momentplanering."),

      heading2("Elevaktiviteter"),
      bullet("Begreppsretrieval individuellt + par (5 min)"),
      bullet("Planering/disposition (10 min, guidat)"),
      bullet("Självständigt analytiskt skrivande (15 min)"),
      bullet("Kamratbedömning med formulär (13 min)"),
      bullet("Revidering baserat på feedback (5 min)"),
      bullet("Reflektiv exit ticket (3 min)"),

      heading2("Differentiering"),
      boldBody("Stöd (mot E): ", "Dispositionsmall med rubrikerna givna (Kretsloppet, Arbetsmarknaden, Privatekonomin, Samhällskopplingen). Meningsstarter under varje rubrik. Ordlista med alla nyckelbegrepp från momentet. Bedömningsformuläret fungerar som checklista under skrivandet."),
      boldBody("Utmaning (mot A): ", "Inga hjälpmedel. Förväntning på minst tre perspektiv per fråga, koppling privat→makro, och egen problematisering. Extra utmaning: \"Finns det situationer där det som är bra för Alex är dåligt för samhället? Analysera en sådan målkonflikt.\""),

      heading2("Exit ticket"),
      boldBody("Fråga: ", "\"Vad är det viktigaste du lärt dig under momentet? Ge ett konkret exempel på hur du kan använda kunskapen i ditt eget liv.\""),
      boldBody("Användning: ", "Reflektiv exit ticket som avslutar momentet. Svaren ger information för framtida momentplanering: Vad fastnade? Vad bör justeras nästa gång momentet körs?"),

      heading2("Material"),
      bullet("Skriftlig analysuppgift med tydliga instruktioner"),
      bullet("E/C/A-kriterier (utdelade till eleverna)"),
      bullet("Kamratbedömningsformulär med konkreta bedömningspunkter"),
      bullet("Dispositionsmall (stödmaterial för E-nivå)"),
      bullet("Ordlista med momentets alla nyckelbegrepp"),
      bullet("Meningsstarter (stödmaterial)"),

      heading2("Koppling till kunskapskrav"),
      boldBody("E-nivå: ", "Eleven redogör översiktligt för kretsloppet, nämner arbetsmarknadens villkor, listar privatekonomiska begrepp och för enkla resonemang om individ-samhälle."),
      boldBody("C-nivå: ", "Eleven redogör utförligt, analyserar arbetsmarknadens påverkan med välgrundade argument, resonerar om konsekvenser av privatekonomiska val och kopplar individens val till samhällsekonomin."),
      boldBody("A-nivå: ", "Eleven redogör utförligt och nyanserat, analyserar ur flera perspektiv, för välgrundade och nyanserade resonemang om komplexa samband, och identifierar målkonflikter mellan individ och samhälle."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/lektion-5.docx", buffer);
  console.log("lektion-5.docx created successfully");
});
