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

function timeTable(rows, colWidths) {
  const cw = colWidths || [900, 1200, 1800, 5126];
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
// LEKTION 5
// ============================================================
function lektion5() {
  return new Document({
    numbering: bulletConfig(),
    styles: styles(),
    sections: [{
      properties: {
        page: { size: { width: PAGE_WIDTH, height: PAGE_HEIGHT }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } }
      },
      footers: { default: footerSection("Samh\u00e4llskunskap 1a1", "Ungas ekonomi") },
      children: [
        headerPara('Lektion 5: "Min ekonomi, hela samh\u00e4llets ekonomi" \u2014 Syntes och f\u00f6rdjupning'),
        para("Kurs: Samh\u00e4llskunskap 1a1 | Moment: Ungas ekonomi | L\u00e4ngd: 60 minuter", { italics: true, color: "666666" }),

        h2("L\u00e4randem\u00e5l f\u00f6r lektionen"),
        bullet("M\u00e5l 1: Redogöra för det ekonomiska kretsloppet"),
        bullet("M\u00e5l 2: Analysera arbetsmarknadens villkor f\u00f6r unga"),
        bullet("M\u00e5l 3: Resonera om privatekonomiska val"),
        bullet("M\u00e5l 4: Diskutera sambandet individ\u2013samh\u00e4lle"),

        h2("F\u00f6rberedelse"),
        bullet("F\u00f6rbered exempelsvar (A-niv\u00e5 och E-niv\u00e5) f\u00f6r modellering \u2014 se bifogade exempelsvar nedan"),
        bullet("Skriv ut eller visa bed\u00f6mningskriterierna (E/C/A) tydligt f\u00f6r eleverna"),
        bullet("Skrivpapper eller datorer f\u00f6r analysuppgiften"),
        bullet("F\u00f6rbered sammanfattande bild av momentets r\u00f6da tr\u00e5d (kretslopp \u2192 arbetsmarknad \u2192 privatekonomi \u2192 konsekvenser \u2192 syntes)"),
        bullet("Begreppslista fr\u00e5n hela momentet (utskrift f\u00f6r elever som beh\u00f6ver st\u00f6d)"),

        h2("Retrieval review-koppling"),
        para("Baserat p\u00e5 exit ticket fr\u00e5n lektion 4: Eleverna diskuterade risker och konsekvenser av ekonomiska val (scenarioanalyser). Retreival review fokuserar p\u00e5 att \u00e5terkalla hela momentets inneh\u00e5ll \u2014 inte bara lektion 4."),
        bullet("Begrepp att \u00e5teraktualisera: ekonomiskt kretslopp, anst\u00e4llningsformer, brutto/netto, skuldf\u00e4lla, konsekvensanalys"),

        h2("Tidsplanering"),
        timeTable([
          [
            "0\u20135 min",
            "1. Retrieval",
            "Bredden-quiz",
            "\"Skriv ner en sak fr\u00e5n varje lektion: (1) kretsloppet, (2) arbetsmarknaden, (3) budgeten, (4) riskerna.\" 2 min enskilt, 2 min i par, 1 min snabb helklassgenomg\u00e5ng."
          ],
          [
            "5\u20137 min",
            "2. M\u00e5laktivering",
            "Syntes-utmaning",
            "\"Idag kopplar vi ihop ALLT. Utmaningen: kan ni visa hur Alex val p\u00e5verkar hela samh\u00e4llet \u2014 och tv\u00e4rtom?\" Visa momentets r\u00f6da tr\u00e5d p\u00e5 tavlan."
          ],
          [
            "7\u201317 min",
            "3. Instruktion",
            "Modellering av analystext",
            "Visa A-niv\u00e5-exempelsvar. Analysera tillsammans: \"Vad g\u00f6r detta till ett bra svar? Vilka kopplingar g\u00f6rs?\" Visa E-niv\u00e5: \"Vad saknas?\" Presentera skrivuppgift och bed\u00f6mningskriterier."
          ],
          [
            "17\u201332 min",
            "4. Guidad \u00f6vning",
            "Skriftlig analysuppgift",
            "Eleverna skriver individuellt med l\u00e4rarst\u00f6d. Uppgift: \"Utg\u00e5 fr\u00e5n Alex situation. Redogör f\u00f6r kretsloppet och resonera om hur ungas ekonomi p\u00e5verkar och p\u00e5verkas av samh\u00e4llsekonomin.\" L\u00e4raren cirkulerar, ger skriftlig feedback via post-its."
          ],
          [
            "32\u201342 min",
            "5. Sj\u00e4lvst\u00e4ndig",
            "Kamratbed\u00f6mning",
            "Byt text med klasskamrat. Ge feedback utifr\u00e5n: (1) F\u00f6rklaras kretsloppet? (2) Finns orsak/konsekvens-resonemang? (3) Kopplas individen till samh\u00e4llet? Muntlig feedback 5 min, 3 min f\u00f6r notering av f\u00f6rb\u00e4ttringar."
          ],
          [
            "42\u201345 min",
            "6. Avslut",
            "Summering + metakognition",
            "\"Vad tar ni med er fr\u00e5n hela momentet?\" Gemensam reflektion. L\u00e4raren sammanfattar: \"Det h\u00e4r \u00e4r kunskap ni anv\u00e4nder varje dag \u2014 som l\u00f6netagare, konsumenter och medborgare.\""
          ],
        ]),

        new Paragraph({ children: [new PageBreak()] }),

        h2("Skrivuppgiften"),
        para("Utg\u00e5 fr\u00e5n Alex situation. Redogör f\u00f6r det ekonomiska kretsloppet och resonera om hur ungas ekonomiska situation \u2014 p\u00e5 arbetsmarknaden och i privatekonomin \u2014 p\u00e5verkar och p\u00e5verkas av samh\u00e4llsekonomin.", { bold: true }),
        para(""),
        para("Bed\u00f6mningskriterier:", { bold: true }),
        boldBullet("E-niv\u00e5:", "Redogör översiktligt f\u00f6r kretsloppet. F\u00f6r enkla resonemang om arbetsmarknad och privatekonomi. Visar p\u00e5 enkla samband mellan individ och samh\u00e4lle."),
        boldBullet("C-niv\u00e5:", "Redogör utf\u00f6rligt f\u00f6r kretsloppet. F\u00f6r v\u00e4lgrundade resonemang. Visar p\u00e5 samband mellan individens val och samh\u00e4llsekonomin."),
        boldBullet("A-niv\u00e5:", "Redogör utf\u00f6rligt och nyanserat. F\u00f6r v\u00e4lgrundade och nyanserade resonemang ur flera perspektiv (individ, arbetsgivare, samh\u00e4lle). Visar p\u00e5 komplexa samband."),

        h2("Exempelsvar f\u00f6r modellering"),

        para("A-niv\u00e5 (f\u00f6rkortat):", { bold: true, color: "1B4F72" }),
        para("\"Alex situation visar hur individens ekonomi \u00e4r sammanfl\u00e4tad med samh\u00e4llets. I det ekonomiska kretsloppet fl\u00f6dar pengar mellan hush\u00e5ll, f\u00f6retag och offentlig sektor. N\u00e4r Alex arbetar bidrar hen med arbetskraft till ett f\u00f6retag och f\u00e5r l\u00f6n tillbaka. Av l\u00f6nen g\u00e5r skatt till den offentliga sektorn, som finansierar v\u00e4lf\u00e4rd. Men Alex har en os\u00e4ker timanst\u00e4llning utan garanterade timmar, vilket \u00e4r vanligt bland unga p\u00e5 arbetsmarknaden. Det p\u00e5verkar inte bara Alex privatekonomi \u2014 det p\u00e5verkar ocks\u00e5 kretsloppet. Om en hel generation unga har l\u00e5ga, os\u00e4kra inkomster minskar b\u00e5de konsumtionen och skatteint\u00e4kterna. F\u00f6retagen s\u00e4ljer mindre, staten f\u00e5r in mindre skatt. Fr\u00e5n arbetsgivarens perspektiv \u00e4r flexibla anst\u00e4llningar billigare, men fr\u00e5n samh\u00e4llets perspektiv kan det leda till \u00f6kad oj\u00e4mlikhet och l\u00e4gre tillv\u00e4xt.\"", { italics: true }),

        para("E-niv\u00e5 (f\u00f6rkortat):", { bold: true, color: "1B4F72" }),
        para("\"Det ekonomiska kretsloppet best\u00e5r av hush\u00e5ll, f\u00f6retag och offentlig sektor. Alex jobbar i ett f\u00f6retag och f\u00e5r l\u00f6n. Alex betalar skatt. Alex har sv\u00e5rt att f\u00e5 pengarna att r\u00e4cka eftersom hen har en timanst\u00e4llning. Det p\u00e5verkar Alex ekonomi.\"", { italics: true }),
        para("Analysfr\u00e5ga till klassen: \"Vad \u00e4r det A-svaret g\u00f6r som E-svaret inte g\u00f6r? Vilka kopplingar saknas?\"", { bold: true }),

        h2("L\u00e4rarinstruktioner"),
        boldBullet("Retrieval review:", "Bred \u00e5terkallelse fr\u00e5n hela momentet. Rita momentets r\u00f6da tr\u00e5d p\u00e5 tavlan medan eleverna delar i par: kretslopp \u2192 arbetsmarknad \u2192 budget \u2192 risker \u2192 syntes."),
        boldBullet("M\u00e5laktivering:", "Kort och tydlig. Visa att detta \u00e4r sista lektionen \u2014 allt ska kopplas ihop. Utmaningen \u00e4r att g\u00e5 fr\u00e5n enskilda delar till helheten."),
        boldBullet("Instruktion:", "Modelleringen \u00e4r avg\u00f6rande. Visa A-svaret f\u00f6rst \u2014 analysera tillsammans vilka kopplingar som g\u00f6rs. Visa sedan E-svaret \u2014 l\u00e5t eleverna identifiera vad som saknas. Betona: det handlar inte om l\u00e4ngd utan om kopplingar och perspektiv."),
        boldBullet("Guidad \u00f6vning:", "Under skrivtiden: cirkulera tyst. Ge individuell feedback genom post-its: \"Kan du koppla detta till kretsloppet?\" eller \"Finns det fler perspektiv?\" St\u00f6r inte skrivfl\u00f6det. Peka elever som k\u00f6r fast mot skrivmallen."),
        boldBullet("Kamratbed\u00f6mning:", "Formativ, inte summativ. Betona: \"Ni ger feedback f\u00f6r att hj\u00e4lpa varandra utvecklas.\" De tre feedbackfr\u00e5gorna \u00e4r medvetet kopplade till E/C/A-progressionen."),
        boldBullet("Avslut:", "Avsluta momentet positivt. Koppla till framtiden: \"Det h\u00e4r \u00e4r inte bara skolkunskap \u2014 det \u00e4r verktyg ni beh\u00f6ver i livet.\""),

        h2("Differentiering"),
        boldBullet("St\u00f6d (mot E):", "Skrivmall med meningsstartar: \"Det ekonomiska kretsloppet best\u00e5r av...\", \"F\u00f6r unga p\u00e5 arbetsmarknaden \u00e4r det...\", \"En konsekvens av detta \u00e4r...\", \"Sambandet mellan individens ekonomi och samh\u00e4llet visar sig genom att...\". Tillg\u00e5ng till begreppslista fr\u00e5n hela momentet. St\u00f6dfr\u00e5gor som guidar analysen steg f\u00f6r steg."),
        boldBullet("Utmaning (mot A):", "Ingen mall. Extra fråga: \"Diskutera fr\u00e5n minst tv\u00e5 perspektiv (t.ex. individ vs. samh\u00e4lle, eller ekonomisk vs. social synvinkel). Problematisera: \u00e4r det alltid negativt att unga har os\u00e4kra anst\u00e4llningar? Vilka strukturella f\u00f6r\u00e4ndringar skulle kr\u00e4vas f\u00f6r att f\u00f6rb\u00e4ttra ungas ekonomiska situation?\""),

        h2("Kamratbed\u00f6mningens feedback-fr\u00e5gor"),
        para("Anv\u00e4nd dessa tre fr\u00e5gor n\u00e4r du l\u00e4ser din klasskamrats text:", { bold: true }),
        bullet("1. F\u00f6rklaras det ekonomiska kretsloppet? (Finns hush\u00e5ll, f\u00f6retag och offentlig sektor med?)"),
        bullet("2. Finns resonemang om orsaker och konsekvenser? (Inte bara beskrivning utan \u00e4ven \"d\u00e4rf\u00f6r\" och \"det leder till\")"),
        bullet("3. Kopplas individens ekonomi till samh\u00e4llet? (G\u00e5r texten fr\u00e5n Alex situation till st\u00f6rre samh\u00e4llseffekter?)"),
        para("Ge minst en sak som \u00e4r bra och en sak som kan f\u00f6rb\u00e4ttras.", { italics: true }),

        h2("Exit ticket / Slutreflektion"),
        boldBullet("Reflektion:", "\"Vad \u00e4r det viktigaste du l\u00e4rt dig under hela momentet om ungas ekonomi? Skriv en mening.\""),
        boldBullet("Anv\u00e4ndning:", "Eftersom detta \u00e4r sista lektionen i momentet samlas dessa f\u00f6r l\u00e4rarens \u00f6vergripande reflektion \u00f6ver momentets genomf\u00f6rande."),

        h2("Material"),
        bullet("Exempelsvar (A-niv\u00e5 och E-niv\u00e5) \u2014 se ovan"),
        bullet("Bed\u00f6mningskriterier (E/C/A) \u2014 utskrift eller digitalt"),
        bullet("Skrivpapper eller datorer"),
        bullet("Begreppslista fr\u00e5n momentet (f\u00f6r st\u00f6d)"),
        bullet("Skrivmall med meningsstartar (f\u00f6r E-niv\u00e5-st\u00f6d)"),
        bullet("Post-its f\u00f6r individuell feedback under skrivtid"),

        h2("Koppling till kunskapskrav"),
        para("Synteslektionen adresserar samtliga fyra l\u00e4randem\u00e5l. Den skriftliga uppgiften fungerar som formativ bed\u00f6mning av hela momentet."),
        boldBullet("E-niv\u00e5:", "Redogör översiktligt f\u00f6r kretsloppet, f\u00f6r enkla resonemang om arbetsmarknad och privatekonomi, visar p\u00e5 enkla samband."),
        boldBullet("C-niv\u00e5:", "Redogör utf\u00f6rligt, f\u00f6r v\u00e4lgrundade resonemang, visar p\u00e5 samband mellan individ och samh\u00e4llsekonomi."),
        boldBullet("A-niv\u00e5:", "Redogör utf\u00f6rligt och nyanserat, f\u00f6r v\u00e4lgrundade och nyanserade resonemang ur flera perspektiv, visar p\u00e5 komplexa samband."),
      ]
    }]
  });
}

// ============================================================
// GENERATE
// ============================================================
async function main() {
  const outputDir = __dirname;
  const doc = lektion5();
  const buffer = await Packer.toBuffer(doc);
  const path = `${outputDir}/lektion-5.docx`;
  fs.writeFileSync(path, buffer);
  console.log(`Generated: ${path}`);
}

main().catch(err => { console.error(err); process.exit(1); });
