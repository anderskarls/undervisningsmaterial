const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber, PageBreak
} = require('docx');

// --- Shared config ---
const FONT = "Arial";
const PAGE_WIDTH = 11906; // A4
const PAGE_HEIGHT = 16838;
const MARGIN = 1440; // 1 inch
const CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN; // 9026 DXA

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

const headerBg = { fill: "1B4F72", type: ShadingType.CLEAR };
const altRowBg = { fill: "F2F7FA", type: ShadingType.CLEAR };

function bulletConfig() {
  return {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  };
}

function styles() {
  return {
    default: { document: { run: { font: FONT, size: 24 } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: FONT, color: "1B4F72" },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: FONT, color: "2C3E50" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 }
      },
    ]
  };
}

function footerSection(kurs, moment) {
  return new Footer({
    children: [new Paragraph({
      children: [
        new TextRun({ text: `${kurs} \u2014 ${moment}`, font: FONT, size: 18, color: "999999" }),
        new TextRun({ text: "\tSida ", font: FONT, size: 18, color: "999999" }),
        new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 18, color: "999999" }),
      ],
      tabStops: [{ type: "right", position: CONTENT_WIDTH }],
    })]
  });
}

function headerPara(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
}

function h2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, font: FONT, size: 24, ...opts })]
  });
}

function richPara(runs) {
  return new Paragraph({
    spacing: { after: 120 },
    children: runs.map(r => new TextRun({ font: FONT, size: 24, ...r }))
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: FONT, size: 24 })]
  });
}

function boldBullet(label, text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: [
      new TextRun({ text: label, font: FONT, size: 24, bold: true }),
      new TextRun({ text: ` ${text}`, font: FONT, size: 24 }),
    ]
  });
}

function timeTable(rows) {
  const cw = [900, 1200, 1800, 5126];
  const headerTexts = ["Tid", "Fas", "Aktivitet", "Beskrivning"];

  const headerRow = new TableRow({
    children: headerTexts.map((t, i) => new TableCell({
      borders, shading: headerBg, width: { size: cw[i], type: WidthType.DXA }, margins: cellMargins,
      children: [new Paragraph({ children: [new TextRun({ text: t, font: FONT, size: 22, bold: true, color: "FFFFFF" })] })]
    }))
  });

  const dataRows = rows.map((row, ri) => new TableRow({
    children: row.map((cell, ci) => new TableCell({
      borders, width: { size: cw[ci], type: WidthType.DXA }, margins: cellMargins,
      shading: ri % 2 === 1 ? altRowBg : undefined,
      children: [new Paragraph({ children: [new TextRun({ text: cell, font: FONT, size: 22 })] })]
    }))
  }));

  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: cw,
    rows: [headerRow, ...dataRows]
  });
}

// ============================================================
// LEKTION 1
// ============================================================
function lektion1() {
  return new Document({
    numbering: bulletConfig(),
    styles: styles(),
    sections: [{
      properties: {
        page: { size: { width: PAGE_WIDTH, height: PAGE_HEIGHT }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } }
      },
      footers: { default: footerSection("Samh\u00e4llskunskap 1a1", "Ungas ekonomi") },
      children: [
        headerPara('Lektion 1: "Vad h\u00e4nder med pengarna?" \u2014 Det ekonomiska kretsloppet'),
        para("Kurs: Samh\u00e4llskunskap 1a1 | Moment: Ungas ekonomi | L\u00e4ngd: 60 minuter", { italics: true, color: "666666" }),

        h2("L\u00e4randem\u00e5l f\u00f6r lektionen"),
        bullet("M\u00e5l 1: Redog\u00f6ra f\u00f6r det ekonomiska kretsloppet \u2014 hur hush\u00e5ll, f\u00f6retag och offentlig sektor h\u00e4nger samman"),
        bullet("M\u00e5l 4: Diskutera sambandet individ\u2013samh\u00e4lle \u2014 hur individens ekonomiska beslut p\u00e5verkar och p\u00e5verkas av samh\u00e4llsekonomin"),

        h2("F\u00f6rberedelse"),
        bullet("F\u00f6rbered presentation om det ekonomiska kretsloppet (se presentation-lektion-1.pptx)"),
        bullet("Skriv ut eller f\u00f6rbered A3-papper och pennor f\u00f6r begreppskartan (ett per grupp om 3\u20134 elever)"),
        bullet("F\u00f6rbered Alex personbeskrivning (en kort text eller bild p\u00e5 tavlan/projicerad)"),
        bullet("F\u00f6rbered exit ticket-lappar (halva A4 eller post-it)"),

        h2("Retrieval review-koppling"),
        para("F\u00f6rsta lektionen i momentet \u2014 ingen exit ticket fr\u00e5n tidigare lektion. Ist\u00e4llet aktiveras f\u00f6rkunskaper om ekonomi fr\u00e5n elevernas vardag."),

        h2("Tidsplanering"),
        timeTable([
          ["0\u20135 min", "1. F\u00f6rkunskap", "Handuppst\u00e4llning + parkontroll",
           "L\u00e4raren st\u00e4ller tre ja/nej-fr\u00e5gor med handuppst\u00e4llning: (1) \u201CHar du k\u00f6pt n\u00e5got den h\u00e4r veckan?\u201D (2) \u201CVet du vad moms \u00e4r?\u201D (3) \u201CVet du vart pengarna g\u00e5r n\u00e4r du Swishar p\u00e5 Pressbyr\u00e5n?\u201D Sedan 1 minut i par: \u201CG\u00f6r en gissning \u2014 n\u00e4mn tre saker som h\u00e4nder med pengarna efter att du betalat.\u201D"],

          ["5\u20137 min", "2. M\u00e5l", "Lektionens m\u00e5l presenteras",
           "Projicera m\u00e5let: \u201CEfter lektionen ska du kunna f\u00f6rklara vart Alex pengar tar v\u00e4gen \u2014 och varf\u00f6r det p\u00e5verkar hela samh\u00e4llet.\u201D Introducera kort Alex: 19 \u00e5r, precis f\u00e5tt sitt f\u00f6rsta jobb, ska flytta hemifr\u00e5n."],

          ["7\u201317 min", "3. Instruktion", "Kretsloppet steg f\u00f6r steg",
           "Genomg\u00e5ng med worked example: F\u00f6lj Alex 25 000 kr-l\u00f6n genom kretsloppet. (1) Alex f\u00e5r l\u00f6n fr\u00e5n f\u00f6retaget. (2) Alex betalar skatt \u2014 vart g\u00e5r den? (3) Alex k\u00f6per mat \u2014 vad h\u00e4nder med f\u00f6retaget? (4) F\u00f6retaget betalar l\u00f6ner och skatt. Kontrollfr\u00e5gor efter varje steg: \u201CVem f\u00e5r pengarna nu?\u201D Rita p\u00e5 tavlan medan du pratar."],

          ["17\u201335 min", "4. Guidad \u00f6vning", "Begreppskartan \u2014 bygg kretsloppet",
           "Grupper om 3\u20134 f\u00e5r A3-papper. Uppgift: Rita kretsloppet utifr\u00e5n Alex vardag. Obligatoriska element: hush\u00e5ll, f\u00f6retag, offentlig sektor, pilar med text (l\u00f6n, skatt, konsumtion, v\u00e4lf\u00e4rd). L\u00e4raren cirkulerar, st\u00e4ller f\u00f6rdjupande fr\u00e5gor: \u201CVad h\u00e4nder om Alex slutar konsumera?\u201D \u201CVem betalar f\u00f6r Alex sjukv\u00e5rd?\u201D Efter 12 min: en grupp presenterar sin karta (2 min), l\u00e4raren fyller i det som saknas."],

          ["35\u201350 min", "5. Till\u00e4mpning", "Fr\u00e5n privat till samh\u00e4lle",
           "Enskild uppgift (8 min): \u201CAlex best\u00e4mmer sig f\u00f6r att spara h\u00e5rt och bara k\u00f6pa det allra n\u00f6dv\u00e4ndigaste i tre m\u00e5nader. Beskriv med egna ord: Vad h\u00e4nder med (a) f\u00f6retagen i Alex n\u00e4romr\u00e5de, (b) skatteint\u00e4kterna, (c) de anst\u00e4llda p\u00e5 f\u00f6retagen?\u201D Sedan EPA (7 min): Diskutera i par, sedan 3 par delar med helklass."],

          ["50\u201357 min", "6. Avslut", "Exit ticket + sammanfattning",
           "Exit ticket (3 min): \u201CF\u00f6rklara med egna ord: Varf\u00f6r p\u00e5verkas hela samh\u00e4llet n\u00e4r en enda person \u00e4ndrar sina k\u00f6pvanor?\u201D L\u00e4mna in p\u00e5 lapp. Sedan: \u00c5terkoppla till m\u00e5let, preview av n\u00e4sta lektion: \u201CN\u00e4sta g\u00e5ng ska Alex s\u00f6ka jobb \u2014 vi tittar p\u00e5 arbetsmarknaden f\u00f6r unga.\u201D"],
        ]),

        new Paragraph({ children: [new PageBreak()] }),

        h2("Alex \u2014 Personbeskrivning"),
        para("Alex \u00e4r 19 \u00e5r och har precis g\u00e5tt ut gymnasiet. Hen har f\u00e5tt sitt f\u00f6rsta riktiga jobb \u2014 en fast anst\u00e4llning p\u00e5 ett lager med en bruttol\u00f6n p\u00e5 25 000 kr/m\u00e5nad. Alex funderar p\u00e5 att flytta hemifr\u00e5n, men vet inte riktigt hur pengarna r\u00e4cker till hyra, mat, telefon och allt annat. Alex har aldrig gjort en budget och f\u00f6rst\u00e5r inte riktigt varf\u00f6r det dras s\u00e5 mycket skatt p\u00e5 l\u00f6nen."),
        para("Alex \u00e4r nyfiken, lite os\u00e4ker och vill g\u00f6ra r\u00e4tt \u2014 men vet inte alltid hur. Under hela momentet f\u00f6ljer vi Alex i olika ekonomiska situationer och utmaningar.", { italics: true }),

        h2("Uppgiftsinstruktion: Begreppskartan"),
        para("Ni ska rita det ekonomiska kretsloppet utifr\u00e5n Alex vardag.", { bold: true }),
        bullet("Anv\u00e4nd ett stort papper (A3). Rita tre cirklar eller rutor: HUSH\u00c5LL (Alex), F\u00d6RETAG, OFFENTLIG SEKTOR."),
        bullet("Dra pilar mellan dem. Varje pil ska ha en text som f\u00f6rklarar vad som fl\u00f6dar: l\u00f6n, skatt, konsumtion, v\u00e4lf\u00e4rdstj\u00e4nster, arbetsgivaravgift."),
        bullet("Utg\u00e5 fr\u00e5n Alex: Alex f\u00e5r l\u00f6n \u2014 varifrfr\u00e5n? Alex betalar skatt \u2014 vart g\u00e5r den? Alex handlar mat \u2014 vem f\u00e5r pengarna?"),
        bullet("F\u00f6rs\u00f6k f\u00e5 med minst 5 pilar med beskrivande text."),

        h2("L\u00e4rarinstruktioner"),
        boldBullet("F\u00f6rkunskapsaktivering:", "Handuppst\u00e4llningsfr\u00e5gorna \u00e4r snabba temperaturm\u00e4tare \u2014 reagera p\u00e5 vad du ser. Om f\u00e5 vet vad moms \u00e4r, l\u00e4gg extra tid p\u00e5 det i genomg\u00e5ngen."),
        boldBullet("Instruktion:", "Anv\u00e4nd tavlan och rita kretsloppet successivt medan du pratar. Stoppa efter varje steg och st\u00e4ll kontrollfr\u00e5ga till hela klassen (\u201CVem f\u00e5r pengarna nu?\u201D). Anv\u00e4nd Alex som konkret exempel hela v\u00e4gen."),
        boldBullet("Guidad \u00f6vning:", "Cirkulera aktivt. Vanliga missf\u00f6rst\u00e5nd: elever gl\u00f6mmer offentlig sektor, ritar bara tv\u00e5v\u00e4gspil mellan hush\u00e5ll och f\u00f6retag. Puffa: \u201CVart g\u00e5r skatten?\u201D \u201CVem betalar f\u00f6r sjukv\u00e5rden?\u201D Om grupper blir klara tidigt: \u201CVad h\u00e4nder om ett f\u00f6retag g\u00e5r i konkurs \u2014 visa det i ert kretslopp.\u201D"),
        boldBullet("Till\u00e4mpning:", "Den enskilda uppgiften \u00e4r analysera/v\u00e4rdera-niv\u00e5. Elever som k\u00e4mpar f\u00e5r anv\u00e4nda sin begreppskarta som hj\u00e4lp."),
        boldBullet("Avslut:", "Exit ticket-fr\u00e5gan m\u00e4ter m\u00e5l 4 (sambandet individ\u2013samh\u00e4lle). Sortera snabbt i tre h\u00f6gar: f\u00f6rstod/os\u00e4ker/missade. H\u00f6g 2\u20133 informerar lektion 2:s retrieval review."),

        h2("Differentiering"),
        boldBullet("St\u00f6d (mot E):", "F\u00f6rifylld begreppskarta med akt\u00f6rerna redan utritade och 2 av 5 pilar ifyllda som modell. Meningsstartar f\u00f6r den enskilda uppgiften: \u201CN\u00e4r Alex slutar handla p\u00e5verkas f\u00f6retagen genom att...\u201D, \u201CDet leder till att skatteint\u00e4kterna...\u201D, \u201CF\u00f6r de anst\u00e4llda inneb\u00e4r det att...\u201D"),
        boldBullet("Utmaning (mot A):", "\u201CL\u00e4gg till banker och l\u00e5n i ert kretslopp. Vad h\u00e4nder med kretsloppet om r\u00e4ntan h\u00f6js? Diskutera fr\u00e5n minst tv\u00e5 akt\u00f6rers perspektiv: hush\u00e5llet OCH f\u00f6retaget.\u201D F\u00f6r den enskilda uppgiften: \u201CVad h\u00e4nder om ALLA i samh\u00e4llet g\u00f6r som Alex? Koppla till begreppen h\u00f6g- och l\u00e5gkonjunktur.\u201D"),

        h2("Exit ticket"),
        boldBullet("Fr\u00e5ga:", "\u201CF\u00f6rklara med egna ord: Varf\u00f6r p\u00e5verkas hela samh\u00e4llet n\u00e4r en enda person \u00e4ndrar sina k\u00f6pvanor?\u201D"),
        boldBullet("Anv\u00e4ndning:", "Resultaten informerar lektion 2:s retrieval review. Om m\u00e5nga missar kopplingen hush\u00e5ll \u2192 f\u00f6retag \u2192 samh\u00e4lle, \u00f6ppna lektion 2 med en kort repetitions\u00f6vning kring just det."),

        h2("Koppling till kunskapskrav"),
        boldBullet("E-niv\u00e5:", "Redogöra översiktligt för det ekonomiska kretsloppet och visa på enkla samband mellan hushåll, företag och offentlig sektor."),
        boldBullet("C-niv\u00e5:", "Redogöra utförligt för kretsloppet och visa på samband, inklusive hur förändrat konsumtionsbeteende påverkar andra aktörer."),
        boldBullet("A-niv\u00e5:", "Redogöra utförligt och nyanserat, visa på komplexa samband. Analysera kedjeeffekter ur flera aktörers perspektiv och koppla till konjunkturbegreppet."),
      ]
    }]
  });
}

// ============================================================
// GENERATE
// ============================================================
async function main() {
  const outputDir = __dirname;
  const doc = lektion1();
  const buffer = await Packer.toBuffer(doc);
  const path = `${outputDir}/lektion-1.docx`;
  fs.writeFileSync(path, buffer);
  console.log(`Generated: ${path}`);
}

main().catch(err => { console.error(err); process.exit(1); });
