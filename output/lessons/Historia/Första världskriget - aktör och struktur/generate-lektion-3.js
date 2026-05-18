const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber
} = require("docx");

const border = { style: BorderStyle.SINGLE, size: 1, color: "999999" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };
const colWidths = [1200, 1600, 2000, 4226];
const tableWidth = colWidths.reduce((a, b) => a + b, 0);

function headerCell(text, width) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: "2C3E50", type: ShadingType.CLEAR, val: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })]
  });
}

function cell(text, width, opts = {}) {
  const { shading, ...runOpts } = opts;
  const runs = Array.isArray(text) ? text : [new TextRun({ text, font: "Arial", size: 20, ...runOpts })];
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA }, margins: cellMargins,
    shading: shading ? { fill: shading, type: ShadingType.CLEAR, val: ShadingType.CLEAR } : undefined,
    children: [new Paragraph({ children: runs })]
  });
}

function timeRow(tid, fas, aktivitet, beskrivning, shading) {
  return new TableRow({ children: [
    cell(tid, colWidths[0], { bold: true, shading }),
    cell(fas, colWidths[1], { shading }),
    cell(aktivitet, colWidths[2], { bold: true, shading }),
    cell(beskrivning, colWidths[3], { shading }),
  ]});
}

function h2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 }, children: [new TextRun({ text, font: "Arial" })] });
}

function bullet(text, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level }, spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 24 })]
  });
}

function boldBullet(label, text, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level }, spacing: { after: 60 },
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
          children: [new TextRun({ text: "Historia 1b  |  Första världskriget - aktör och struktur", font: "Arial", size: 18, color: "888888" })]
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
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Lektion 3: Skyttegravarna och världen", font: "Arial" })] }),
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
      boldBullet("Mål 1: ", "Redogöra för krigets förlopp, karaktär och konsekvenser"),
      boldBullet("Mål 2: ", "Förklara samband mellan strukturella krafter (teknik, allianser, ekonomi) och aktörers handlingsutrymme under kriget"),

      // RETRIEVAL-KOPPLING
      h2("Retrieval review-koppling"),
      boldBullet("Baserat på exit ticket från lektion 2: ", "Eleverna skulle ge ett exempel på ett beslut där en aktör begränsades av en struktur. Använd 2-3 elevexempel (anonymiserade) som utgångspunkt för retrieval review. Om många inte kunde ge ett tydligt exempel: repetitionsfokus. Om de flesta klarade det: bygg vidare med frågan \"Kan samma mönster finnas under krigets förlopp?\""),
      bullet("Begrepp att återaktualisera: julikrisen, blankofullmakten, Schlieffenplanen, mobilisering"),

      // FÖRBEREDELSE
      h2("Förberedelse"),
      bullet("Förbered tre rollkort: Soldaten, Generalen, Hemmafronten (se material)"),
      bullet("Förbered korta faktatexter till varje perspektiv med konkreta exempel och siffror"),
      bullet("Förbered bildmaterial: skyttegravar, ny teknik (stridsvagnar, giftgas), kvinnor i fabriker"),
      bullet("Förbered analysmatrisen för perspektivanalysen"),

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
          timeRow("0-8 min", "1. Retrieval", "Elevexempel + koppling framåt", "Visa 2-3 anonymiserade elevsvar från L2:s exit ticket. \"Förra lektionen såg vi hur strukturer begränsade aktörer INNAN kriget. Idag frågar vi: hände samma sak NÄR kriget pågick?\" Snabb par-diskussion (2 min): \"Ge ett exempel från julikrisen där en aktör hade kunnat välja annorlunda.\" Samla 2-3 svar i helklass.", "F2F7FB"),
          timeRow("8-11 min", "2. Målaktivering", "Siffror som chockar", "Visa tre siffror på tavlan: \"60 000 brittiska soldater föll på EN dag vid Somme. 315 000 franska soldater dog vid Verdun. 400 000 man offrades för 8 kilometer vid Passchendaele.\" Låt siffrorna sjunka in (tystnad). Fråga: \"Varför fortsatte generalerna skicka soldater? Var de dumma - eller fanns det strukturer som tvingade dem?\" Presentera dagens mål."),
          timeRow("11-19 min", "3. Instruktion", "Krigets tre dimensioner", "Kort genomgång (8 min) av krigets förlopp genom tre linser:\n\n1. TEKNIKEN (struktur): Kulsprutor, taggtråd och artilleri gjorde försvar överlägset anfall. Stridsvagnar, giftgas och flygplan var försök att bryta dödläget. Ubåtar drog in USA.\n\n2. DET GLOBALA (struktur): Kriget var inte bara europeiskt - koloniala soldater från Indien, Afrika, Australien. Osmanska rikets fall öppnade Mellanöstern. Arabiska revolten 1916.\n\n3. HEMMAFRONTEN (aktör + struktur): Kvinnor tog över arbetsmarknaden (aktörer inom nya strukturer). Propaganda styrde folkopinionen. Blockad och ransonering - tysk barndödlighet +50%.\n\nKontrollfråga: \"Ge ett exempel på ny teknik som förändrade kriget. Var det en aktör eller en struktur?\""),
          timeRow("19-50 min", "4. Guidad övning", "Perspektivanalys i EPA", "Steg 1 - Introduktion (3 min): Dela klassen i tre grupper. Varje grupp får ett rollkort med faktatext och frågor:\n- SOLDATEN: Livet i skyttegravarna, ny teknik, rädsla och kamratskap. \"Hur mycket kunde en enskild soldat påverka sin situation?\"\n- GENERALEN: Militär strategi, Schlieffenplanens misslyckande, nya taktiker. \"Var generalernas beslut styrda av militär logik (struktur) eller personliga misstag (aktör)?\"\n- HEMMAFRONTEN: Kvinnors nya roller, propaganda, ransonering. \"Förändrade kriget samhällets strukturer - eller var det aktörer som drev förändringen?\"\n\nSteg 2 - Enskilt (5 min): Läs rollkortet. Besvara frågorna med stöd av texten.\n\nSteg 3 - Par/grupp (10 min): Diskutera inom perspektivgruppen. Sammanfatta: \"Hur såg aktör/struktur-balansen ut ur vårt perspektiv?\"\n\nSteg 4 - Korsgrupper (8 min): Nya grupper bildas med en representant från varje perspektiv. Varje person presenterar sitt perspektiv (2 min var). Gruppen diskuterar: \"Vilken aktör hade störst handlingsutrymme? Vilken hade minst?\"\n\nSteg 5 - Helklass (5 min): Samla insikter. Läraren faciliterar: \"Ser ni ett mönster? Ju längre kriget pågick - ökade eller minskade aktörernas handlingsutrymme?\""),
          timeRow("50-65 min", "5. Självständig övning", "Skriftligt resonemang", "Eleverna skriver ett resonemang (8-12 meningar): \"Kunde enskilda generaler eller ledare ha förkortat eller stoppat kriget, eller var det strukturerna (teknik, allianser, ekonomi) som bestämde krigets förlopp?\" Använd minst ett konkret exempel från dagens lektion."),
          timeRow("65-72 min", "6. Avslut", "Summering + preview", "Återkoppla: \"Vi har nu sett tre perspektiv på kriget. Från skyttegraven såg det annorlunda ut än från generalens kontor eller från hemmafronten.\" Preview: \"Nästa lektion samlar vi ihop allt - från strukturerna innan kriget, via julikrisen, till krigets förlopp. Ni ska ta ställning: var kriget oundvikligt?\""),
          timeRow("72-80 min", "", "Exit ticket", "\"Nämn en konsekvens av kriget som berodde mest på strukturer (t.ex. teknik, allianser), och en som berodde mest på aktörers beslut. Förklara kort varför.\" Samla in."),
        ]
      }),

      new Paragraph({ children: [] }),

      // LÄRARINSTRUKTIONER
      h2("Lärarinstruktioner"),
      boldBullet("Retrieval review: ", "Att visa anonymiserade elevsvar från L2 visar att du tar deras arbete på allvar och skapar kontinuitet. Välj ett starkt svar, ett medel och ett svagt - diskutera vad som gör svaret bra utan att peka ut någon."),
      boldBullet("Målaktivering: ", "Siffrorna från Somme/Verdun/Passchendaele ska skapa emotionell resonans. Ge tystnad efter att du visat dem - låt eleverna reagera. Frågan \"var generalerna dumma?\" provocerar och öppnar för struktur-förklaringen."),
      boldBullet("Genomgång: ", "Håll 8 min. Tre tydliga punkter, inte mer. Använd bilder om möjligt - skyttegravar, stridsvagnar, kvinnor i ammunitionsfabriker."),
      boldBullet("Perspektivanalys: ", "Under gruppdiskussionerna: cirkulera och ställ fördjupande frågor. Utmana grupp Soldaten: \"Var det moraliskt rätt att soldaterna lydde order?\" Utmana grupp Generalen: \"Hade Haig kunnat göra något annat vid Somme?\" Utmana grupp Hemmafronten: \"Var kvinnornas nya roller permanenta eller tillfälliga?\""),
      boldBullet("Korsgrupper: ", "Denna fas är central - här möts perspektiven. Se till att varje representant verkligen får presentera innan diskussionen börjar. Frågan om handlingsutrymme leder naturligt till aktör/struktur-analys."),
      boldBullet("Mönsterfrågan: ", "I helklassdelen: frågan \"ökade eller minskade aktörernas handlingsutrymme under kriget?\" är en viktig insikt. Kriget skapade nya strukturer (teknik, total mobilisering) som minskade individuellt handlingsutrymme - men samtidigt öppnade nya möjligheter (kvinnor på arbetsmarknaden)."),

      // ELEVAKTIVITETER
      h2("Elevaktiviteter"),
      boldBullet("Retrieval + par-diskussion (8 min): ", "Diskutera elevsvar från L2, ge eget exempel."),
      boldBullet("Perspektivanalys (31 min): ", "Läs rollkort enskilt, diskutera i perspektivgrupp, presentera i korsgrupp, delta i helklassdiskussion."),
      boldBullet("Skriftligt resonemang (15 min): ", "Skriv 8-12 meningar om aktör vs struktur under krigets förlopp."),
      boldBullet("Exit ticket (8 min): ", "Identifiera en strukturdriven och en aktörsdriven konsekvens."),

      // DIFFERENTIERING
      h2("Differentiering"),
      boldBullet("Stöd mot E: ", "Meningsstartare för det skriftliga resonemanget: \"Under krigets förlopp spelade strukturer en stor/liten roll. Ett exempel är... Detta visar att [aktör/struktur] var viktigast eftersom...\" Rollkorten förses med nyckelord markerade och enklare frågor som leder steg för steg. I korsgruppen: ge E-elever rollen att anteckna (lägre krav på improvisation)."),
      boldBullet("Utmaning mot A: ", "I det skriftliga resonemanget: kräv att eleven jämför minst två perspektiv (t.ex. soldaten vs. generalen) och resonerar om hur samma händelse kunde vara aktörsstyrd ur ett perspektiv men strukturstyrd ur ett annat. Extra fråga: \"Skapade kriget nya strukturer som inte fanns innan?\" (t.ex. kvinnors arbetsmarknadsdeltagande, propagandaapparaten)."),
      boldBullet("UDL-anpassning: ", "Visuellt: bildmaterial av skyttegravar, teknik, hemmafronten. Muntligt: perspektivdiskussioner i grupp. Textbaserat: rollkort med faktatext."),

      // EXIT TICKET
      h2("Exit ticket"),
      boldBullet("Fråga: ", "\"Nämn en konsekvens av kriget som berodde mest på strukturer (t.ex. teknik, allianser), och en som berodde mest på aktörers beslut. Förklara kort varför.\""),
      boldBullet("Användning: ", "Denna fråga mäter mål 2 med fokus på konsekvenser. Den förbereder också L4 där eleverna ska syntetisera hela momentet. Elever som ger tydliga exempel med motivering är redo för L4:s syntes. Elever som har svårt att skilja kan behöva extra stöd via en sammanfattningslapp inför L4."),

      // MATERIAL
      h2("Material"),
      bullet("Rollkort: Soldaten (faktatext om skyttegravsliv, ny teknik, siffror från Somme/Verdun)"),
      bullet("Rollkort: Generalen (militär strategi, Schlieffenplanens misslyckande, dödläget, nya taktiker)"),
      bullet("Rollkort: Hemmafronten (kvinnors roller, propaganda, ransonering, barndödlighet, Vera Brittain)"),
      bullet("Bildmaterial: skyttegravar, stridsvagnar, giftgasattack, kvinnor i ammunitionsfabriker"),
      bullet("Meningsstartare för skriftligt resonemang (E-stöd)"),
      bullet("2-3 anonymiserade elevsvar från L2:s exit ticket"),

      // KOPPLING TILL KUNSKAPSKRAV
      h2("Koppling till kunskapskrav"),
      boldBullet("Mål 1 (redogöra): ", "Perspektivanalysen kräver att eleverna redogör för krigets förlopp ur tre perspektiv. E: översiktligt från ett perspektiv. C: utförligt med kopplingar. A: utförligt och nyanserat med jämförelser mellan perspektiv."),
      boldBullet("Mål 2 (förklara samband): ", "Det skriftliga resonemanget mäter direkt förmågan att förklara samband mellan strukturer och aktörer. E: enkla samband med ett exempel. C: samband med flera exempel som visar samverkan. A: komplexa samband ur flera perspektiv med ställningstagande."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("lektion-3.docx", buffer);
  console.log("lektion-3.docx generated successfully");
});
