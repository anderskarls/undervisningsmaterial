const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType
} = require("docx");

// ============================================================
// HELPER FUNCTIONS
// ============================================================

const border = { style: BorderStyle.SINGLE, size: 1, color: "999999" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "2C3E50", type: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 22 })] })],
  });
}

function cell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, font: "Arial", size: 22 })] })],
  });
}

function wideCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: cellMargins,
    children: [new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text, font: "Arial", size: 22 })] })],
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 24 })],
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: "Arial", size: 28, bold: true })],
  });
}

function bodyText(text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, font: "Arial", size: 24 })],
  });
}

function italicText(text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, font: "Arial", size: 24, italics: true })],
  });
}

function boldBodyText(label, text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({ text: label, font: "Arial", size: 24, bold: true }),
      new TextRun({ text, font: "Arial", size: 24 }),
    ],
  });
}

function spacer() {
  return new Paragraph({ spacing: { after: 60 }, children: [] });
}

function makeDoc(sections) {
  return new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 24 } } },
      paragraphStyles: [
        {
          id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 36, bold: true, font: "Arial", color: "1A1A2E" },
          paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 },
        },
        {
          id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 28, bold: true, font: "Arial", color: "2C3E50" },
          paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 },
        },
      ],
    },
    numbering: {
      config: [{
        reference: "bullets",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.BULLET, text: "\u25E6", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
        ],
      }],
    },
    sections,
  });
}

function sectionProps() {
  return {
    page: {
      size: { width: 11906, height: 16838 },
      margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Historia 1b - Mellankrigstiden", font: "Arial", size: 18, color: "888888" })],
        })],
      }),
    },
  };
}

// ============================================================
// LEKTION 3: Propagandans makt
// ============================================================

function buildLektion3() {
  const tidsRows = [
    new TableRow({ children: [headerCell("Tid", 1200), headerCell("Fas", 2000), headerCell("Aktivitet", 2200), headerCell("Beskrivning", 4306)] }),
    new TableRow({ children: [
      cell("0-5 min", 1200), cell("1. Retrieval review", 2000), cell("Snabbquiz + koppling", 2200),
      wideCell("Tre frågor: (1) Nämn ett gemensamt drag för fascism och nazism. (2) Vad skiljer dem åt? (3) Var Hitlers maktövertagande främst aktör eller struktur? Koppla: \"De hade idéerna - men hur spred de dem?\"", 4306),
    ] }),
    new TableRow({ children: [
      cell("5-7 min", 1200), cell("2. Målaktivering", 2000), cell("Visuell krok", 2200),
      wideCell("Visa en nazistisk propagandaaffisch utan kommentar. \"Vad ser ni? Vad känner ni? Vad vill avsändaren att ni ska tänka?\" Presentera mål: granska propaganda kritiskt.", 4306),
    ] }),
    new TableRow({ children: [
      cell("7-17 min", 1200), cell("3. Explicit instruktion", 2000), cell("Genomgång: propaganda som system", 2200),
      wideCell("Goebbels propagandaministerium, kontroll av press/radio/film. Nya medier: radio nådde miljoner, film som massmedium. Worked example: analysera en affisch med de fyra grundfrågorna. Tänk högt: \"Jag ser att... Syftet verkar vara... Den visar inte...\"", 4306),
    ] }),
    new TableRow({ children: [
      cell("17-42 min", 1200), cell("4. Guidad övning", 2000), cell("Källkritisk workshop (par)", 2200),
      wideCell("Elevpar får 3 propagandakällor (blandning av affischer och textutdrag). Analysera var och en med de fyra grundfrågorna. Huvudfråga: \"Vilka känslor försöker källan väcka? Vilka grupper pekas ut som fiender/hjältar? Vad utelämnas?\" Läraren cirkulerar, ställer fördjupningsfrågor.", 4306),
    ] }),
    new TableRow({ children: [
      cell("42-52 min", 1200), cell("5. Självständig övning", 2000), cell("Reflekterande skrivande", 2200),
      wideCell("\"Hur kunde propaganda bidra till att vanliga människor accepterade diktaturen? Ge ett konkret exempel från det material vi analyserat. Skriv 5-8 meningar.\"", 4306),
    ] }),
    new TableRow({ children: [
      cell("52-57 min", 1200), cell("6. Avslut", 2000), cell("Exit ticket + preview", 2200),
      wideCell("Exit ticket: \"Hur kunde propaganda bidra till att vanliga människor accepterade diktaturen? Ge ett konkret exempel.\" Preview: \"Nästa och sista lektionen knyter vi ihop allt - varför blev demokratier diktaturer?\"", 4306),
    ] }),
  ];

  return {
    properties: sectionProps(),
    children: [
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Lektion 3: Propagandans makt", font: "Arial", size: 36, bold: true })] }),
      boldBodyText("Lektionslängd: ", "60 minuter"),
      boldBodyText("Lärandemål: ", "Mål 2 (ideologier), Mål 3 (propaganda/källkritik)"),
      spacer(),

      heading2("Förberedelse"),
      bullet("Förbered 3-4 propagandaexempel (nazistiska affischer, fascistisk filmklipp-beskrivning, radiotal-utdrag)"),
      bullet("Förbered analysschema med de fyra källkritiska grundfrågorna (Vem? När? Varför? Vad?)"),
      bullet("Förbered diskussionsfrågor om propaganda och nutid"),
      spacer(),

      heading2("Retrieval review-koppling"),
      bodyText("Baserat på exit ticket lektion 2:"),
      italicText("\"Förra lektionen jämförde vi fascism och nazism. Idag undersöker vi deras hemligaste vapen - propagandan. Hur fick de vanliga människor att stödja dem?\""),
      spacer(),

      heading2("Tidsplanering"),
      new Table({ rows: tidsRows, width: { size: 9706, type: WidthType.DXA } }),
      spacer(),

      heading2("Lärarinstruktioner"),
      bullet("Worked example är centralt - modellera hela analysprocessen högt"),
      bullet("Under workshopen: uppmuntra jämförelse mellan källorna. \"Använder de olika tekniker?\" \"Riktar de sig till samma målgrupp?\""),
      bullet("Var medveten om att propaganda kan vara provocerande - skapa tryggt rum för analys"),
      spacer(),

      heading2("Differentiering"),
      boldBodyText("Stöd (mot E): ", "Analysschema med ifyllda exempelsvar för en källa. Stödfrågor: \"Vilka färger används? Vilka symboler ser du? Vad står det?\" Begreppsordlista med källkritiska termer."),
      boldBodyText("Utmaning (mot A): ", "\"Finns det propaganda i samhället idag? Hur skiljer sig moderna former av propaganda från 1930-talets?\" Tillägg: \"Analysera hur propagandan bygger på de kriser vi studerat i lektion 1.\""),
      spacer(),

      heading2("Exit ticket"),
      boldBodyText("Fråga: ", "\"Hur kunde propaganda bidra till att vanliga människor accepterade diktaturen? Ge ett konkret exempel.\""),
      boldBodyText("Användning: ", "Kvaliteten på svaren visar om eleverna förstår propaganda som system (inte bara enskilda affischer)."),
      spacer(),

      heading2("Material"),
      bullet("3-4 propagandakällor (affischer, textutdrag)"),
      bullet("Analysschema"),
      bullet("Begreppsordlista"),
    ],
  };
}

// ============================================================
// LEKTION 4: Vägen mot avgrunden - sammanfattning och analys
// ============================================================

function buildLektion4() {
  const tidsRows = [
    new TableRow({ children: [headerCell("Tid", 1200), headerCell("Fas", 2000), headerCell("Aktivitet", 2200), headerCell("Beskrivning", 4306)] }),
    new TableRow({ children: [
      cell("0-8 min", 1200), cell("1. Retrieval review", 2000), cell("Momentöversikt + feedback", 2200),
      wideCell("Visa tidslinje för hela momentet: kriser \u2192 ideologier \u2192 propaganda \u2192 ?. Ge kort feedback på lektion 3:s analyser. Lyft starka formuleringar. Adressera vanliga brister.", 4306),
    ] }),
    new TableRow({ children: [
      cell("8-10 min", 1200), cell("2. Målaktivering", 2000), cell("Återkoppla till den angelägna frågan", 2200),
      wideCell("\"Vi har nu tre pusselbitar: ekonomiska kriser, nya ideologier och propaganda. Idag sätter vi ihop pusslet.\" Presentera skrivuppgiften.", 4306),
    ] }),
    new TableRow({ children: [
      cell("10-15 min", 1200), cell("3. Explicit instruktion", 2000), cell("E/C/A-modellering", 2200),
      wideCell("Visa ett A-nivå-exempelsvar på \"Varför blev demokratier diktaturer?\" Analysera: vad gör det till A-nivå? (Flera perspektiv, komplexa samband, nyansering.) Visa E-nivå-svar - vad skiljer? Kontrollfråga: \"Vad behöver ni lägga till för att höja ert svar?\"", 4306),
    ] }),
    new TableRow({ children: [
      cell("15-35 min", 1200), cell("4. Guidad övning", 2000), cell("Skriftlig analys (EPA)", 2200),
      wideCell("E (8 min): Enskilt - skriv ett första utkast på: \"Varför blev demokratier diktaturer under mellankrigstiden? Diskutera med hjälp av ekonomiska, ideologiska och propagandistiska faktorer.\" P (7 min): Par - läs varandras texter, ge feedback: \"Visar texten på samband? Finns flera perspektiv?\" A (5 min): Bearbeta och förbättra.", 4306),
    ] }),
    new TableRow({ children: [
      cell("35-50 min", 1200), cell("5. Självständig övning", 2000), cell("Färdigställ analys", 2200),
      wideCell("Slutför och förbättra den skriftliga analysen (minst 150 ord). Denna text fungerar som formativ checkpoint för hela momentet.", 4306),
    ] }),
    new TableRow({ children: [
      cell("50-57 min", 1200), cell("6. Avslut", 2000), cell("Exit ticket + momentavslut", 2200),
      wideCell("Exit ticket: \"Sammanfatta i 3-5 meningar: Varför blev demokratier diktaturer under mellankrigstiden?\" Momentavslut: \"Titta på vad ni skrev lektion 1 om vad ni visste om mellankrigstiden. Hur har er förståelse förändrats?\"", 4306),
    ] }),
  ];

  return {
    properties: sectionProps(),
    children: [
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Lektion 4: Vägen mot avgrunden - sammanfattning och analys", font: "Arial", size: 36, bold: true })] }),
      boldBodyText("Lektionslängd: ", "60 minuter"),
      boldBodyText("Lärandemål: ", "Alla mål (syntes)"),
      spacer(),

      heading2("Förberedelse"),
      bullet("Sammanställ exit ticket-data från lektion 3"),
      bullet("Förbered E/C/A-exempelsvar på frågan \"Varför blev demokratier diktaturer?\""),
      bullet("Förbered slutskrivningsuppgift med skrivmall"),
      spacer(),

      heading2("Retrieval review-koppling"),
      bodyText("Baserat på exit ticket lektion 3 och skriftliga analyser. Lyft starka exempel, adressera vanliga brister."),
      spacer(),

      heading2("Tidsplanering"),
      new Table({ rows: tidsRows, width: { size: 9706, type: WidthType.DXA } }),
      spacer(),

      heading2("Lärarinstruktioner"),
      bullet("E/C/A-modelleringen är central - visa tydligt vad som skiljer nivåerna"),
      bullet("Under EPA: cirkulera under E-steget och uppmuntra, under P-steget ge feedback-frågor"),
      bullet("Samla in de skriftliga analyserna - de ger formativ information om var eleverna befinner sig"),
      spacer(),

      heading2("Differentiering"),
      boldBodyText("Stöd (mot E): ", "Skrivmall: \"Under mellankrigstiden föll flera demokratier. En viktig orsak var... [ekonomisk kris]. Detta ledde till att... [extrema rörelser växte]. Dessutom spelade... [propaganda] en roll genom att... Sammanfattningsvis...\" Begreppsordlista tillgänglig."),
      boldBodyText("Utmaning (mot A): ", "\"Problematisera: var demokratins fall oundvikligt, eller kunde det ha gått annorlunda? Diskutera ur aktörs- och strukturperspektiv. Finns det paralleller till demokratiska utmaningar idag?\""),
      spacer(),

      heading2("Exit ticket"),
      boldBodyText("Fråga: ", "\"Sammanfatta i 3-5 meningar: Varför blev demokratier diktaturer under mellankrigstiden?\""),
      boldBodyText("Användning: ", "Avslutande formativ bedömning för hela momentet."),
      spacer(),

      heading2("Material"),
      bullet("E/C/A-exempelsvar"),
      bullet("Skrivmall"),
      bullet("Tidslinje för hela momentet"),
      bullet("Begreppsordlista"),
    ],
  };
}

// ============================================================
// GENERATE BOTH DOCUMENTS
// ============================================================

async function main() {
  const doc3 = makeDoc([buildLektion3()]);
  const doc4 = makeDoc([buildLektion4()]);

  const buf3 = await Packer.toBuffer(doc3);
  fs.writeFileSync("lektion-3.docx", buf3);
  console.log("lektion-3.docx created (" + buf3.length + " bytes)");

  const buf4 = await Packer.toBuffer(doc4);
  fs.writeFileSync("lektion-4.docx", buf4);
  console.log("lektion-4.docx created (" + buf4.length + " bytes)");
}

main().catch(err => { console.error(err); process.exit(1); });
