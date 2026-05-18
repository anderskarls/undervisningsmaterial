const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber, PageBreak
} = require("docx");

const border = { style: BorderStyle.SINGLE, size: 1, color: "999999" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

// Column widths for time table: Tid(1200) Fas(1600) Aktivitet(2000) Beskrivning(4226)
const colWidths = [1200, 1600, 2000, 4226];
const tableWidth = colWidths.reduce((a, b) => a + b, 0);

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "2C3E50", type: ShadingType.CLEAR, val: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })]
  });
}

function cell(text, width, opts = {}) {
  const { shading, ...runOpts } = opts;
  const runs = Array.isArray(text) ? text : [new TextRun({ text, font: "Arial", size: 20, ...runOpts })];
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: cellMargins,
    shading: shading ? { fill: shading, type: ShadingType.CLEAR, val: ShadingType.CLEAR } : undefined,
    children: [new Paragraph({ children: runs })]
  });
}

function timeRow(tid, fas, aktivitet, beskrivning, shading) {
  return new TableRow({
    children: [
      cell(tid, colWidths[0], { bold: true, shading }),
      cell(fas, colWidths[1], { shading }),
      cell(aktivitet, colWidths[2], { bold: true, shading }),
      cell(beskrivning, colWidths[3], { shading }),
    ]
  });
}

function h2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 }, children: [new TextRun({ text, font: "Arial" })] });
}

function bullet(text, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 24 })]
  });
}

function boldBullet(label, text, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { after: 60 },
    children: [
      new TextRun({ text: label, bold: true, font: "Arial", size: 24 }),
      new TextRun({ text, font: "Arial", size: 24 })
    ]
  });
}

function bodyText(text) {
  return new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text, font: "Arial", size: 24 })] });
}

function italicBody(text) {
  return new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text, italics: true, font: "Arial", size: 24 })] });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: "2C3E50" },
        paragraph: { spacing: { before: 240, after: 240 } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2C3E50" },
        paragraph: { spacing: { before: 240, after: 120 } } },
    ]
  },
  numbering: {
    config: [{
      reference: "bullets",
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "\u2013", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
      ]
    }]
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
          children: [
            new TextRun({ text: "Historia 1b", font: "Arial", size: 18, color: "888888" }),
            new TextRun({ text: "  |  Första världskriget - aktör och struktur", font: "Arial", size: 18, color: "888888" }),
          ]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Sida ", font: "Arial", size: 18, color: "888888" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "888888" }),
          ]
        })]
      })
    },
    children: [
      // TITLE
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Lektion 1: Verktyg och kruttunnor", font: "Arial" })] }),
      new Paragraph({ spacing: { after: 60 }, children: [
        new TextRun({ text: "Kurs: ", bold: true, font: "Arial", size: 24 }),
        new TextRun({ text: "Historia 1b", font: "Arial", size: 24 }),
      ]}),
      new Paragraph({ spacing: { after: 60 }, children: [
        new TextRun({ text: "Moment: ", bold: true, font: "Arial", size: 24 }),
        new TextRun({ text: "Första världskriget - aktör och struktur", font: "Arial", size: 24 }),
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "Lektionslängd: ", bold: true, font: "Arial", size: 24 }),
        new TextRun({ text: "80 minuter", font: "Arial", size: 24 }),
      ]}),

      // LÄRANDEMÅL
      h2("Lärandemål för lektionen"),
      boldBullet("Mål 1: ", "Redogöra för första världskrigets strukturella orsaker (allianser, nationalism, imperialism, kapprustning)"),
      boldBullet("Mål 3: ", "Förstå skillnaden mellan aktörsförklaringar och strukturförklaringar som analytiska verktyg"),

      // FÖRBEREDELSE
      h2("Förberedelse"),
      bullet("Förbered en enkel begreppskarta på tavlan/digitalt med \"Aktör\" och \"Struktur\" som två noder (fylls i under lektionen)"),
      bullet("Skriv ut eller förbered digital tillgång till kartan \"Europa 1914 - allianssystemen\" (Trippelalliansen och Trippelententen markerade i olika färger)"),
      bullet("Förbered den stora frågan på en slide/tavlan: \"Var första världskriget oundvikligt - eller hade det kunnat stoppas av andra beslut?\""),
      bullet("Förbered EPA-frågan och meningsstartare (se differentiering)"),

      // TIDSPLANERING
      h2("Tidsplanering"),
      new Table({
        width: { size: tableWidth, type: WidthType.DXA },
        columnWidths: colWidths,
        rows: [
          new TableRow({ children: [
            headerCell("Tid", colWidths[0]),
            headerCell("Fas", colWidths[1]),
            headerCell("Aktivitet", colWidths[2]),
            headerCell("Beskrivning", colWidths[3]),
          ]}),
          timeRow("0-8 min", "1. Retrieval", "Förkunskaps-aktivering", "Eleverna skriver enskilt: \"Vad vet du redan om första världskriget? Skriv minst tre saker.\" Sedan delar de i par. Läraren samlar 5-6 punkter i helklass och skriver på tavlan.", "F2F7FB"),
          timeRow("8-11 min", "2. Målaktivering", "Den stora frågan", "Visa den stora frågan: \"Var första världskriget oundvikligt - eller hade det kunnat stoppas av andra beslut?\" Låt eleverna fundera 30 sek. Förklara att momentet handlar om att bygga verktyg för att besvara denna fråga. Presentera dagens mål: \"Idag lär vi oss två verktyg historiker använder - aktör och struktur.\""),
          timeRow("11-19 min", "3. Instruktion", "Aktör och struktur - begreppen", "Kort genomgång (max 8 min): Definiera aktör (enskild person som fattar beslut och handlar) och struktur (långsiktiga mönster, system och krafter som begränsar/möjliggör). Ge ett vardagsexempel: \"Du väljer att köpa en glass (aktör) men priset, butikens öppettider och din plånbok sätter ramarna (struktur).\" Visa sedan ett historiskt exempel: Wilhelm II ville ha en stor flotta (aktör) - men kapprustningen mellan stormakterna (struktur) gjorde att detta tolkades som hot. Kontrollfråga: \"Ge mig ett eget exempel på aktör och struktur.\""),
          timeRow("19-47 min", "4. Guidad övning", "EPA: Strukturella orsaker", "Steg 1 - Instruktion (3 min): Presentera de fyra strukturella orsakerna med allianskarta: (1) Allianssystemet - Europa delat i två läger, (2) Nationalism - Alsace-Lorraine, panslavism på Balkan, (3) Imperialism - \"plats i solen\", Marockokriser, (4) Kapprustning - flottkapprustningen, Schlieffenplanen.\n\nSteg 2 - Enskilt (5 min): Varje elev får en kort text om EN strukturell orsak och skriver: \"Hur bidrog denna struktur till att göra krig mer sannolikt?\"\n\nSteg 3 - Par (8 min): Eleverna paras ihop (olika strukturer). De presenterar sin struktur för varandra och diskuterar: \"Vilken av era strukturer var viktigast? Varför?\"\n\nSteg 4 - Alla (12 min): Helklassdiskussion. Läraren bygger begreppskarta på tavlan med de fyra strukturerna och deras kopplingar. Elaborativ interrogation: \"Varför är det rimligt att just allianssystemet bidrog till kriget? Vilka kopplingar ser ni till de andra strukturerna?\""),
          timeRow("47-62 min", "5. Självständig övning", "Begreppskarta", "Eleverna skapar en egen begreppskarta med begreppen: aktör, struktur, allianssystem, nationalism, imperialism, kapprustning. De ska visa kopplingar mellan begreppen med pilar och korta förklaringar. Mot A: Lägg till minst en aktör (t.ex. Bismarck, Wilhelm II) och visa hur aktören påverkade eller påverkades av strukturerna."),
          timeRow("62-72 min", "6. Avslut", "Summering + preview", "Återkoppla till den stora frågan: \"Vi har nu sett fyra strukturer som alla pekade mot krig. Men räcker det som förklaring? Nästa lektion tittar vi på vad som faktiskt hände sommaren 1914 - och vilka aktörer som fattade de avgörande besluten.\""),
          timeRow("72-80 min", "", "Exit ticket", "Eleverna skriver på en lapp: \"Förklara med egna ord skillnaden mellan en aktörsförklaring och en strukturförklaring. Ge ett exempel från dagens lektion.\" Samla in."),
        ]
      }),

      new Paragraph({ children: [] }),

      // LÄRARINSTRUKTIONER
      h2("Lärarinstruktioner"),
      boldBullet("Förkunskapsaktivering: ", "Syftet är att kartlägga vad gruppen redan vet. Notera om det finns missförstånd att adressera. Skriv upp elevernas svar synligt - det motiverar och visar att deras kunskap värdesätts."),
      boldBullet("Begreppsgenomgång: ", "Håll det kort (max 8 min). Vardagsexemplet (glass) är viktigt för att göra begreppen konkreta innan de historiska exemplen. Kontrollfrågan \"ge mig ett eget exempel\" ska riktas till flera elever, inte bara frivilliga - använd no-hands-up."),
      boldBullet("EPA-övning: ", "Under par-diskussionen: cirkulera och lyssna. Ställ elaborativa frågor: \"Varför tror du det?\" och \"Hur hänger det ihop med den andra strukturen?\" I helklassdiskussionen: bygg begreppskartan successivt, låt eleverna bidra med kopplingar."),
      boldBullet("Nyckelformulering vid genomgång: ", "\"Strukturer är som spelreglerna - aktörerna spelar spelet, men reglerna bestämmer vad som är möjligt. Frågan är: kunde någon ha ändrat reglerna innan det var för sent?\""),
      boldBullet("Vanligt missförstånd att bemöta: ", "Elever tenderar att se strukturer som oundvikliga (\"det var dömt att hända\"). Betona att strukturer skapar förutsättningar men inte determinerar utfallet - det är just det momentet handlar om att undersöka."),

      // ELEVAKTIVITETER
      h2("Elevaktiviteter"),
      boldBullet("Förkunskapsaktivering (8 min): ", "Skriv enskilt, dela i par, samla i helklass."),
      boldBullet("EPA - strukturella orsaker (28 min): ", "Läs kort text om en strukturell orsak. Skriv svar enskilt. Presentera och diskutera i par. Delta i helklassdiskussion."),
      boldBullet("Begreppskarta (15 min): ", "Skapa egen begreppskarta med sex begrepp och kopplingar mellan dem."),
      boldBullet("Exit ticket (8 min): ", "Skriv svar på exit ticket-frågan."),

      // DIFFERENTIERING
      h2("Differentiering"),
      boldBullet("Stöd mot E: ", "Meningsstartare för EPA-skrivandet: \"Den strukturella orsaken jag har läst om är... Den bidrog till att göra krig mer sannolikt eftersom...\" Ifylld begreppskarta med begreppen redan placerade - eleven skriver kopplingarna. Kortare texter om strukturella orsaker med nyckelord markerade."),
      boldBullet("Utmaning mot A: ", "Vid EPA-diskussionen: \"Kan en struktur vara viktigare än en annan? Hur avgör vi det?\" Vid begreppskartan: lägg till aktörer och visa hur de påverkade/påverkades av strukturerna. Fördjupningsmaterial: kort utdrag om Bismarcks allianssystem vs. post-Bismarck-eran."),
      boldBullet("UDL-anpassning: ", "Visuellt: allianskarta i färg. Muntligt: EPA-diskussion. Textbaserat: korta faktatexter om strukturerna."),

      // EXIT TICKET
      h2("Exit ticket"),
      boldBullet("Fråga: ", "\"Förklara med egna ord skillnaden mellan en aktörsförklaring och en strukturförklaring. Ge ett exempel från dagens lektion.\""),
      boldBullet("Användning: ", "Sortera i tre högar: (1) förstår begreppen, (2) osäker, (3) missade. Elever i hög 2-3 adresseras i lektion 2:s retrieval review med extra begreppsrepetition. Om många hamnar i hög 3 - börja lektion 2 med en kort uppfräschning av begreppen."),

      // MATERIAL
      h2("Material"),
      bullet("Karta: \"Europa 1914 - allianssystemen\" (digital eller utskriven)"),
      bullet("Korta faktatexter (4 st) om strukturella orsaker: allianssystem, nationalism, imperialism, kapprustning"),
      bullet("Den stora frågan på slide/tavla"),
      bullet("Meningsstartare (utskrivna eller digitala) för E-stöd"),
      bullet("Ifylld begreppskarta (mall) för E-stöd"),
      bullet("Fördjupningstext om Bismarcks allianssystem för A-utmaning"),
      bullet("Lappar för exit ticket"),

      // KOPPLING TILL KUNSKAPSKRAV
      h2("Koppling till kunskapskrav"),
      boldBullet("Mål 1 (redogöra): ", "Lektionen bygger faktabasen om strukturella orsaker. Eleverna tränar att redogöra genom EPA-övningen och begreppskartan."),
      boldBullet("Mål 3 (resonera om förklaringsmodeller): ", "Eleverna introduceras till aktör/struktur som analysverktyg. Exit ticket mäter om de kan skilja mellan de två förklaringsmodellerna. E-nivå: kunna ge en enkel förklaring av skillnaden. C/A-nivå: ge exempel och börja resonera om hur de hänger ihop."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("lektion-1.docx", buffer);
  console.log("lektion-1.docx generated successfully");
});
