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
function bodyText(text) {
  return new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text, font: "Arial", size: 24 })] });
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
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Lektion 2: \"Vem får jobben?\" — Arbetsmarknaden för unga")] }),
      boldBody("Kurs: ", "Samhällskunskap 1a1"),
      boldBody("Moment: ", "Ungas ekonomi"),
      boldBody("Lektionslängd: ", "60 minuter"),

      heading2("Lärandemål för lektionen"),
      bullet("Mål 2: Analysera arbetsmarknadens villkor för unga — förändringar, anställningsformer, rättigheter"),

      heading2("Förberedelse"),
      bullet("Förbered presentation om arbetsmarknaden med statistik från SCB/Arbetsförmedlingen om ungdomsarbetslöshet"),
      bullet("Skriv ut eller förbered jämförelsetabell över anställningsformer (tillsvidare, visstid, tim, gig)"),
      bullet("Förbered Alex jobbsökningsscenario med tre jobberbjudanden"),
      bullet("Förbered exit ticket-lappar"),

      heading2("Retrieval review-koppling"),
      boldBody("Baserat på exit ticket från lektion 1: ", "Om många elever hade svårt att koppla individ till samhällsekonomi — börja med en kort repetition av kretsloppet med fokus på arbete som flöde. Om de flesta förstod — snabb retrieval quiz: \"Nämn tre aktörer i kretsloppet och ett pengaflöde mellan dem.\""),

      heading2("Tidsplanering"),
      new Table({
        width: { size: TABLE_WIDTH, type: WidthType.DXA }, columnWidths: COL_WIDTHS,
        rows: [
          new TableRow({ children: [headerCell("Tid", COL_WIDTHS[0]), headerCell("Fas", COL_WIDTHS[1]), headerCell("Aktivitet", COL_WIDTHS[2]), headerCell("Beskrivning", COL_WIDTHS[3])] }),
          new TableRow({ children: [
            cell("0-5 min", COL_WIDTHS[0]), cell("1. Retrieval review", COL_WIDTHS[1]), cell("Kretsloppet snabbquiz", COL_WIDTHS[2]),
            cell("Tre snabba frågor: (1) Vilka tre aktörer finns i kretsloppet? (2) Vart går Alex lön? (3) Vad får Alex tillbaka av skatten? Eleverna skriver svar individuellt, sedan jämför i par. Gemensam genomgång. Koppla till dagens tema: \"En av pilarna i kretsloppet var lönen — men hur får man ett jobb?\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("5-7 min", COL_WIDTHS[0]), cell("2. Målaktivering", COL_WIDTHS[1]), cell("Alex söker jobb", COL_WIDTHS[2]),
            cell("Visa tre jobbannonser som Alex har hittat: (1) Fast anställning på lager, (2) Visstidsanställning i butik, (3) Gig-jobb som matleverans. Fråga: \"Vilket jobb borde Alex välja? Varför?\" Låt eleverna tycka till snabbt. Presentera målet: \"Efter lektionen ska ni kunna analysera vad som skiljer dessa anställningsformer och vad det betyder för en ung person.\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("7-17 min", COL_WIDTHS[0]), cell("3. Explicit instruktion", COL_WIDTHS[1]), cell("Arbetsmarknaden i siffror", COL_WIDTHS[2]),
            cell("Presentation i tre steg: (1) Ungdomsarbetslöshet — visa SCB-statistik, jämför med vuxna, diskutera varför. Kontrollfråga: \"Varför tror ni att unga har svårare att få jobb?\" (2) Anställningsformer — tillsvidare, visstid, tim, gig-ekonomi. Primärkälla: LAS (Lagen om anställningsskydd) § 4-5 om anställningsformer. (3) Rättigheter — LAS, semester, sjuklön, fackföreningens roll. Kontrollfråga: \"Vilka rättigheter tror ni att Alex har som timanställd jämfört med fast anställd?\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("17-40 min", COL_WIDTHS[0]), cell("4. Guidad övning", COL_WIDTHS[1]), cell("EPA: Jämförande analys", COL_WIDTHS[2]),
            cell("EPA-struktur (Enskilt-Par-Alla). Enskilt (5 min): Eleverna fyller i en jämförelsetabell med fyra kolumner (tillsvidare, visstid, tim, gig) och rader (trygghet, lön, rättigheter, flexibilitet, karriärmöjligheter). Par (8 min): Jämför tabeller, diskutera: \"Vilken anställningsform är bäst för Alex? Beror det på vad Alex prioriterar?\" Alla (10 min): Strukturerad klassdiskussion — läraren lyfter intressanta resonemang från paren. Fördjupningsfrågor: \"Vad händer med arbetsmarknaden om fler jobb blir gig-jobb? Vem vinner, vem förlorar?\" Läraren cirkulerar under par-fasen, identifierar bra resonemang att lyfta.", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("40-52 min", COL_WIDTHS[0]), cell("5. Självständig övning", COL_WIDTHS[1]), cell("Analysera ur perspektiv", COL_WIDTHS[2]),
            cell("Individuellt: \"Skriv ett resonemang om huruvida gig-ekonomin är bra eller dålig för unga. Analysera ur minst två perspektiv: den unge arbetstagaren och arbetsgivaren. Koppla till kretsloppet — hur påverkas samhällsekonomin?\" Mot E: Meningsstarter och stödfrågor (\"En fördel för den unge är att... En nackdel är att... För arbetsgivaren innebär det...\"). Mot A: Ingen stödstruktur. Analysera ur tre perspektiv (arbetstagare, arbetsgivare, samhälle/stat) och problematisera: finns det situationer där gig-ekonomi är bättre respektive sämre?", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("52-57 min", COL_WIDTHS[0]), cell("5 (forts.)", COL_WIDTHS[1]), cell("Delning", COL_WIDTHS[2]),
            cell("2-3 elever delar sina resonemang. Klassen identifierar: vilka perspektiv nämndes? Saknades något?", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("57-60 min", COL_WIDTHS[0]), cell("6. Avslut", COL_WIDTHS[1]), cell("Exit ticket + preview", COL_WIDTHS[2]),
            cell("Exit ticket: \"Alex har fått erbjudande om timanställning i butik och gig-jobb som matleverans. Ge Alex ett råd och motivera med minst två argument.\" Preview: \"Nästa lektion ska Alex flytta hemifrån och göra en budget — hur långt räcker pengarna?\"", COL_WIDTHS[3])
          ]}),
        ]
      }),

      heading2("Lärarinstruktioner"),
      boldBody("Retrieval review: ", "Anpassa baserat på lektion 1:s exit ticket-data. Om kopplingen individ-samhälle var svag, gör kretsloppet synligt igen med fokus på arbete som nyckelflöde."),
      boldBody("Instruktion: ", "Använd verklig statistik — undvik att generalisera. Visa SCB:s siffror om ungdomsarbetslöshet. Läs kort från LAS om anställningsformer. Gör explicit att detta är primärkällor."),
      boldBody("Guidad övning: ", "Under par-diskussionen — lyssna efter elever som bara listar fakta vs. de som analyserar. Lyft analysexempel: \"Lyssna på hur Karin resonerar — hon jämför inte bara fakta utan väger för och emot.\""),
      boldBody("Avslut: ", "Samla exit tickets. Sortera: Kan eleven väga argument (C/A)? Eller bara lista fakta (E)?"),

      heading2("Elevaktiviteter"),
      bullet("Retrieval quiz individuellt + par (5 min)"),
      bullet("EPA: Jämförelsetabell + pardiskussion + klassdiskussion (23 min)"),
      bullet("Analysera gig-ekonomin ur flera perspektiv (12 min)"),
      bullet("Exit ticket (3 min)"),

      heading2("Differentiering"),
      boldBody("Stöd (mot E): ", "Förifyld jämförelsetabell med några celler redan ifyllda. Meningsstarter för den skriftliga analysen. Begreppsordlista (anställningsform, visstid, LAS, fackförening)."),
      boldBody("Utmaning (mot A): ", "Tom jämförelsetabell. Analysera gig-ekonomin ur tre perspektiv med problematisering. Extra fråga: \"Hur borde samhället reglera gig-ekonomin? Motivera med koppling till kretsloppet.\""),

      heading2("Exit ticket"),
      boldBody("Fråga: ", "\"Alex har fått erbjudande om timanställning i butik och gig-jobb som matleverans. Ge Alex ett råd och motivera med minst två argument.\""),
      boldBody("Användning: ", "Svaren visar om eleverna kan väga för och nackdelar (C/A) eller bara lista fakta (E). De som bara listar — ge extra stöd i argumentation nästa lektion. Koppla till lektion 3: de ekonomiska konsekvenserna av Alex val."),

      heading2("Material"),
      bullet("Presentation med arbetsmarknadsstatistik (SCB, Arbetsförmedlingen)"),
      bullet("Tre jobbannonser för Alex (tillsvidare, visstid, gig)"),
      bullet("Jämförelsetabell: anställningsformer (tom + förifyld version)"),
      bullet("Utdrag ur LAS § 4-5 om anställningsformer (primärkälla)"),
      bullet("Exit ticket-lappar"),
      bullet("Meningsstarter (stödmaterial)"),

      heading2("Koppling till kunskapskrav"),
      boldBody("E-nivå: ", "Eleven för enkla resonemang om arbetsmarknadens villkor — namnger anställningsformer och listar grundläggande skillnader."),
      boldBody("C-nivå: ", "Eleven för välgrundade resonemang med jämförelser och argument för och emot olika anställningsformer."),
      boldBody("A-nivå: ", "Eleven för välgrundade och nyanserade resonemang, analyserar ur flera perspektiv (arbetstagare, arbetsgivare, samhälle) och kopplar till samhällsekonomiska konsekvenser."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/lektion-2.docx", buffer);
  console.log("lektion-2.docx created successfully");
});
