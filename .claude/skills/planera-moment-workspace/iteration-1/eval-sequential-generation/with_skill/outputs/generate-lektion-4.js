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
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Lektion 4: \"Vad händer om...?\" — Risker, val och konsekvenser")] }),
      boldBody("Kurs: ", "Samhällskunskap 1a1"),
      boldBody("Moment: ", "Ungas ekonomi"),
      boldBody("Lektionslängd: ", "60 minuter"),

      heading2("Lärandemål för lektionen"),
      bullet("Mål 3: Resonera om privatekonomiska val och deras konsekvenser — skuldfällan, konsumenträtt, långsiktiga konsekvenser"),
      bullet("Mål 4: Diskutera sambandet individ-samhälle — hur individuella ekonomiska kriser påverkar samhällsekonomin"),

      heading2("Förberedelse"),
      bullet("Förbered 4-6 scenariokort med Alex dilemman (skuldfälla, impulsköp på kredit, oväntat jobbförlust, bilreparation)"),
      bullet("Förbered konsekvenskedjemall (visuell: val → kortsiktig konsekvens → långsiktig konsekvens → samhällseffekt)"),
      bullet("Förbered presentation med verkliga exempel på skuldfällan (Kronofogdens statistik om 18-25-åringar)"),
      bullet("Förbered information om konsumenträtt: ångerrätt, reklamation, ARN (primärkällor)"),

      heading2("Retrieval review-koppling"),
      boldBody("Baserat på exit ticket från lektion 3: ", "Om eleverna kunde nämna tre saker om lån men inte förklara varför — fokusera retrieval på ränta och amortering med konkret räkneexempel. Om de förstod mekanismerna, snabb retrieval: \"Vad är skillnaden mellan fast och rörlig utgift? Ge exempel ur Alex budget.\""),

      heading2("Tidsplanering"),
      new Table({
        width: { size: TABLE_WIDTH, type: WidthType.DXA }, columnWidths: COL_WIDTHS,
        rows: [
          new TableRow({ children: [headerCell("Tid", COL_WIDTHS[0]), headerCell("Fas", COL_WIDTHS[1]), headerCell("Aktivitet", COL_WIDTHS[2]), headerCell("Beskrivning", COL_WIDTHS[3])] }),
          new TableRow({ children: [
            cell("0-5 min", COL_WIDTHS[0]), cell("1. Retrieval review", COL_WIDTHS[1]), cell("Ränteräkning", COL_WIDTHS[2]),
            cell("Snabb övning: \"Alex lånade 10 000 kr med 15% ränta. Hur mycket kostar lånet efter ett år?\" Eleverna räknar individuellt, sedan kollar i par. Visa svaret. Kontrollfråga: \"Vad händer om Alex bara betalar minimibeloppet varje månad?\" Koppla till dagens tema: konsekvenser av ekonomiska val.", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("5-7 min", COL_WIDTHS[0]), cell("2. Målaktivering", COL_WIDTHS[1]), cell("Kronofogden-statistik", COL_WIDTHS[2]),
            cell("Visa statistik: \"X antal 18-25-åringar har skulder hos Kronofogden. Vanligaste orsaken: telefonabonnemang och snabblån.\" Fråga: \"Hur hamnar man där? Kan det hända Alex?\" Presentera målet: \"Efter lektionen ska ni kunna analysera konsekvenser av ekonomiska val — inte bara för Alex, utan för hela samhället.\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("7-17 min", COL_WIDTHS[0]), cell("3. Explicit instruktion", COL_WIDTHS[1]), cell("Risker och skyddsnät", COL_WIDTHS[2]),
            cell("Tre steg: (1) Skuldfällan — hur snabblån, avbetalning och kreditkort fungerar. Räkneexempel: vad kostar en mobil på avbetalning vs kontant? Primärkälla: Konsumentverkets jämförelse. Kontrollfråga: \"Varför erbjuder företag avbetalning om det kostar mer?\" (Perspektivväxling: företagets vs konsumentens intresse.) (2) Konsumenträtt — ångerrätt 14 dagar, reklamation 3 år, ARN. Primärkälla: Konsumentköplagen. (3) Konsekvenskedjan — modellera en kedja: Alex köper ny mobil på kredit → kan inte betala → inkasso → Kronofogden → svårt att hyra lägenhet → bor kvar hemma → påverkar arbetsmarknad.", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("17-42 min", COL_WIDTHS[0]), cell("4. Guidad övning", COL_WIDTHS[1]), cell("Scenarioanalys i par", COL_WIDTHS[2]),
            cell("Varje par drar ett scenariokort med ett dilemma för Alex. Scenarion: (A) Alex bil går sönder, reparation 8 000 kr — ta snabblån eller åka buss i 3 månader? (B) Alex kompis startar företag och vill att Alex investerar 15 000 kr — möjlighet eller risk? (C) Alex tappar jobbet — prioritera hyra eller mat? Söka nytt jobb eller a-kassa? (D) Alex vill köpa ny mobil 12 000 kr på avbetalning — smart eller fälla? Steg 1 (8 min): Analysera valet ur Alex perspektiv — vad händer kortsiktigt vs långsiktigt? Steg 2 (7 min): Byt perspektiv — analysera ur arbetsgivarens/statens/samhällets perspektiv. Steg 3 (5 min): Rita konsekvenskedja (val → konsekvens → konsekvens → samhällseffekt). Steg 4 (5 min): Presentera för ett annat par — de andra paret ger feedback: \"Missade ni något perspektiv?\" Läraren cirkulerar, ställer djupfrågor: \"Vad händer om 100 000 unga gör samma val som Alex?\"", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("42-55 min", COL_WIDTHS[0]), cell("5. Självständig övning", COL_WIDTHS[1]), cell("Konsekvensanalys", COL_WIDTHS[2]),
            cell("Individuellt (10 min): \"Välj ett av scenarierna ni arbetade med. Skriv en konsekvensanalys: (1) Vad borde Alex göra? (2) Vilka konsekvenser får valet på kort och lång sikt? (3) Hur påverkas samhällsekonomin om många unga gör samma val?\" Delning (3 min): 2-3 elever delar. Fokus på kvaliteten i resonemanget — kan de koppla individ till samhälle? Mot E: Konsekvenskedjemall med ifyllda steg att komplettera. Mot A: Ingen mall. Diskutera om det finns val som är bra för individen men dåliga för samhället (eller tvärtom). Koppla till specifik del av kretsloppet.", COL_WIDTHS[3])
          ]}),
          new TableRow({ children: [
            cell("55-60 min", COL_WIDTHS[0]), cell("6. Avslut", COL_WIDTHS[1]), cell("Exit ticket + preview", COL_WIDTHS[2]),
            cell("Exit ticket: \"Förklara med ett konkret exempel hur en ung persons ekonomiska problem kan påverka samhällsekonomin. Använd begreppen kretslopp och konsekvenskedja.\" Preview: \"Nästa lektion knyter vi ihop allt — från kretsloppet till Alex budget till samhället. Ni kommer att visa vad ni kan.\"", COL_WIDTHS[3])
          ]}),
        ]
      }),

      heading2("Lärarinstruktioner"),
      boldBody("Retrieval review: ", "Ränteräkningen kopplar direkt till lektion 3:s innehåll. Om många hade ytliga exit ticket-svar, lägg extra tid på att förklara ränta-på-ränta med räkneexempel."),
      boldBody("Instruktion: ", "Konsekvenskedjan är central — modellera den tydligt steg för steg. Visa att varje val har ripple effects. Använd perspektivväxling explicit: \"Ur Alex synvinkel... Men ur samhällets synvinkel...\""),
      boldBody("Guidad övning: ", "Scenariokorten skapar engagemang. Cirkulera och ställ den kritiska frågan: \"Vad händer om 100 000 unga gör samma val?\" Den tvingar eleverna att koppla individ till samhälle. Identifiera par som fastnar i enbart individperspektiv."),
      boldBody("Avslut: ", "Exit tickets visar om eleverna klarar syntes (individ → samhälle). De som inte kan — ge extra stöd med konsekvenskedjemall i lektion 5."),

      heading2("Elevaktiviteter"),
      bullet("Ränteräkning individuellt + par (5 min)"),
      bullet("Scenarioanalys i par med konsekvenskedja + perspektivbyte (25 min)"),
      bullet("Presentation för annat par med feedback (del av guidad övning)"),
      bullet("Skriftlig konsekvensanalys individuellt (13 min)"),
      bullet("Exit ticket (3 min)"),

      heading2("Differentiering"),
      boldBody("Stöd (mot E): ", "Scenariokort med stödfrågor (\"Vad händer direkt? Vad händer om ett år? Vem mer påverkas?\"). Konsekvenskedjemall med pilar och rutor att fylla i. Begreppsordlista (skuldfälla, ränta, inkasso, konsekvenskedja, ångerrätt)."),
      boldBody("Utmaning (mot A): ", "Scenariokort utan stödfrågor. Ingen konsekvenskedjemall — rita egen. Analysera om det finns val som är rationella för individen men skadliga för samhället (social dilemma/tragedy of the commons-koppling). Problematisera: borde samhället hindra unga från att ta snabblån?"),

      heading2("Exit ticket"),
      boldBody("Fråga: ", "\"Förklara med ett konkret exempel hur en ung persons ekonomiska problem kan påverka samhällsekonomin. Använd begreppen kretslopp och konsekvenskedja.\""),
      boldBody("Användning: ", "Mäter syntesförmåga — kan eleven koppla individ till system? Informerar lektion 5: om många missar systemkopplingen, börja med en gemensam konsekvenskedja innan den självständiga analysuppgiften."),

      heading2("Material"),
      bullet("Scenariokort (4-6 dilemman med Alex)"),
      bullet("Konsekvenskedjemall (tom + med stödfrågor)"),
      bullet("Presentation med Kronofogdens statistik om unga skuldsatta (primärkälla)"),
      bullet("Konsumentverkets jämförelse: avbetalning vs kontant (primärkälla)"),
      bullet("Utdrag ur Konsumentköplagen om ångerrätt och reklamation (primärkälla)"),
      bullet("Exit ticket-lappar"),

      heading2("Koppling till kunskapskrav"),
      boldBody("E-nivå: ", "Eleven för enkla resonemang om konsekvenser av ekonomiska val och visar på enkla samband mellan individ och samhälle."),
      boldBody("C-nivå: ", "Eleven för välgrundade resonemang om kortsiktiga och långsiktiga konsekvenser och kopplar individens val till samhällsekonomiska effekter."),
      boldBody("A-nivå: ", "Eleven för välgrundade och nyanserade resonemang, analyserar konsekvenser ur flera perspektiv (individ, samhälle, stat), identifierar målkonflikter och visar på komplexa samband i kretsloppet."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/lektion-4.docx", buffer);
  console.log("lektion-4.docx created successfully");
});
