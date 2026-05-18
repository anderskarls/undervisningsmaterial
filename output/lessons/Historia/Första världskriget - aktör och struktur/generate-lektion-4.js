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
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Lektion 4: Var kriget oundvikligt?", font: "Arial" })] }),
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
      boldBullet("Mål 2: ", "Förklara komplexa samband mellan strukturella orsaker och aktörers handlande genom att väga dem mot varandra"),
      boldBullet("Mål 3: ", "Resonera om aktörs- och strukturförklaringar som historiska förklaringsmodeller och problematisera uppdelningen"),

      // RETRIEVAL-KOPPLING
      h2("Retrieval review-koppling"),
      boldBullet("Baserat på exit ticket från lektion 3: ", "Eleverna skulle nämna en strukturdriven och en aktörsdriven konsekvens. Använd svaren för att bygga en sammanfattande tavla: \"Strukturer vi hittat\" vs \"Aktörer vi hittat\" genom hela momentet."),
      bullet("Begrepp att återaktualisera: hela momentets begreppsapparat - aktör, struktur, allianssystem, nationalism, imperialism, Schlieffenplanen, julikrisen, skyttegravskrig"),

      // FÖRBEREDELSE
      h2("Förberedelse"),
      bullet("Förbered aktör-struktur-skalan på tavlan: en linje från \"Helt aktörsstyrt\" till \"Helt strukturstyrt\" med markering i mitten"),
      bullet("Förbered argumentkort (8 st): 4 med strukturargument, 4 med aktörsargument (se material)"),
      bullet("Förbered skrivmallen för det avslutande resonemanget (med meningsstartare för E-stöd)"),
      bullet("Sammanställ en kort \"argumentbank\" på en A4 - nyckelexempel från L1-L3 som eleverna kan använda"),

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
          timeRow("0-10 min", "1. Retrieval", "Momentets röda tråd", "Steg 1 (3 min): Enskilt. Eleverna skriver tre nyckelinsikter - en från varje lektion (L1: strukturer, L2: julikrisen, L3: krigets förlopp). Steg 2 (3 min): Par. Jämför med en partner - komplettera varandras listor. Steg 3 (4 min): Helklass. Läraren bygger en dubbel lista på tavlan: \"Strukturer\" (allianser, nationalism, imperialism, Schlieffenplan, teknik) och \"Aktörer\" (Wilhelm II, Grey, Berchtold, generaler, soldater, kvinnor). \"Titta på listan. Vilken sida väger tyngst?\"", "F2F7FB"),
          timeRow("10-13 min", "2. Målaktivering", "Tillbaka till den stora frågan", "Visa den stora frågan igen: \"Var första världskriget oundvikligt - eller hade det kunnat stoppas av andra beslut?\" Påminn: \"Den här frågan ställde vi lektion 1. Nu har ni verktygen att besvara den. Idag tar ni ställning - och motiverar ert svar med hjälp av allt ni lärt er.\""),
          timeRow("13-21 min", "3. Instruktion", "Två historikerperspektiv", "Kort genomgång (8 min) av hur historiker faktiskt debatterar frågan:\n\n1. STRUKTURPERSPEKTIVET (Fischer m.fl.): Kriget var en logisk konsekvens av imperialism, allianser och militär planering. Systemet var så instabilt att det bara var en tidsfråga. Argument: allianssystemets automatik, Schlieffenplanens tvång, nationalismens sprängkraft.\n\n2. AKTÖRSPERSPEKTIVET (Clark m.fl.): Europas ledare \"sömngick\" in i kriget - de missade chanserna att stoppa det. Ingen ville egentligen ha ett storkrig. Argument: blankofullmakten var ett val, mobiliseringen kunde ha stoppats, Grey kunde ha agerat tidigare.\n\n3. MELLANLINJE: Strukturerna skapade förutsättningarna, men aktörernas beslut i julikrisen avgjorde om det faktiskt BLEV krig. Båda behövs för att förstå.\n\nKontrollfråga: \"Vilken position ligger närmast det ni själva tror just nu?\""),
          timeRow("21-48 min", "4. Guidad övning", "Ställningstagande + EPA", "Steg 1 - Positionering (3 min): Eleverna ställer sig fysiskt på aktör-struktur-skalan i klassrummet (eller markerar sin position på en digital skala). Läraren noterar fördelningen.\n\nSteg 2 - Argumentkort i par (10 min): Varje par får 2 argumentkort (ett struktur, ett aktör) med konkreta historiska exempel. De ska: (a) identifiera vilken typ av argument det är, (b) bedöma hur starkt argumentet är (1-5), (c) formulera ett motargument.\n\nSteg 3 - EPA-diskussion (14 min):\n- Enskilt (3 min): Skriv ditt starkaste argument för din position på skalan.\n- Par (4 min): Diskutera med någon som står på ANDRA sidan skalan. Försök övertyga varandra.\n- Alla (7 min): Helklassdiskussion. Läraren faciliterar: \"Hörde någon ett argument som fick er att flytta er position?\" Låt elever som ändrat sig förklara varför. Lyft fram att det BÄSTA svaret ofta ligger i en nyanserad mellanposition.\n\nSteg 4 - Ompositionering (1 min): Eleverna får flytta sig på skalan om de vill. Kommentera eventuella förskjutningar."),
          timeRow("48-68 min", "5. Självständig övning", "Avslutande resonemang", "Eleverna skriver ett självständigt resonemang (ca 15-20 meningar) som besvarar den stora frågan: \"Var första världskriget oundvikligt - eller hade det kunnat stoppas av andra beslut?\"\n\nKrav:\n- Ta en tydlig ställning\n- Använd minst två konkreta historiska exempel\n- Visa att du förstår BÅDA förklaringsmodellerna (aktör och struktur)\n- Resonera om hur de förhåller sig till varandra\n\nDetta är momentets avslutande skrivuppgift och ger formativ information om samtliga tre lärandemål."),
          timeRow("68-75 min", "6. Avslut", "Metakognitiv summering", "Återkoppla till momentet som helhet: \"Vi började med att lära oss verktygen aktör och struktur. Sedan använde vi dem på julikrisen, på krigets förlopp, och nu har ni tagit ställning i den stora frågan.\"\n\nMetakognitiv fråga till klassen: \"Hur tänker ni annorlunda om historiska förklaringar nu jämfört med när vi startade? Kan man alltid säga att DET var orsaken?\""),
          timeRow("75-80 min", "", "Exit ticket", "\"Vad tar du med dig från detta moment? Beskriv kort hur ditt sätt att tänka om historiska förklaringar har förändrats (eller inte förändrats) under dessa fyra lektioner.\" Samla in."),
        ]
      }),

      new Paragraph({ children: [] }),

      // LÄRARINSTRUKTIONER
      h2("Lärarinstruktioner"),
      boldBullet("Retrieval review: ", "Den dubbla listan på tavlan (strukturer vs aktörer) fungerar som visuell sammanfattning av hela momentet. Låt eleverna bidra - det är deras kunskap som ska synas. Om listan blir ojämn (t.ex. fler strukturer), kommentera det: \"Intressant - betyder det att strukturer var viktigare?\""),
      boldBullet("Historikerperspektiv: ", "Syftet är inte att eleverna ska memorera Fischer eller Clark, utan att förstå att historiker FORTFARANDE debatterar frågan. Det legitimerar att det inte finns ett enkelt svar. Nämn namnen kort men fokusera på argumenten."),
      boldBullet("Fysisk positionering: ", "Att ställa sig fysiskt på en skala tvingar till ställningstagande och synliggör klassens fördelning. Om alla står i mitten: utmana med \"Om ni MÅSTE välja en sida, vilken?\" Poängtera att det är tillåtet att ändra sig - det visar intellektuell mognad."),
      boldBullet("Par-diskussion med motståndare: ", "Para ihop elever som står på olika sidor av skalan. Detta tvingar dem att argumentera och lyssna på motargument - direkt träning mot A-nivåns \"ur flera perspektiv\"."),
      boldBullet("Det avslutande resonemanget: ", "Detta är momentets viktigaste formativa uppgift. Cirkulera under skrivtiden. Ge stöd till E-elever via meningsstartarna men undvik att ge dem svaret. Uppmuntra A-elever att problematisera uppdelningen aktör/struktur: \"Kan ett beslut vara BÅDE aktörsstyrt och strukturstyrt?\""),
      boldBullet("Metakognitiv avslutning: ", "Frågan \"hur tänker ni annorlunda nu\" stänger momentets lärcirkel. Om elever svarar \"jag vet inte\" - fråga \"tänkte du på aktör och struktur innan vi började?\" Poängen är att de nu har analytiska verktyg de inte hade förut."),

      // ELEVAKTIVITETER
      h2("Elevaktiviteter"),
      boldBullet("Retrieval + dubbel lista (10 min): ", "Skriv tre insikter enskilt, jämför i par, bygg lista i helklass."),
      boldBullet("Positionering + argumentkort + EPA (27 min): ", "Ställ dig på skalan, arbeta med argumentkort i par, diskutera med motståndare, delta i helklassdiskussion, ompositionera."),
      boldBullet("Avslutande resonemang (20 min): ", "Skriv självständigt resonemang som besvarar den stora frågan."),
      boldBullet("Exit ticket (5 min): ", "Reflektera över hur ditt tänkande har förändrats."),

      // DIFFERENTIERING
      h2("Differentiering"),
      boldBullet("Stöd mot E: ", "Argumentbank (A4-blad) med nyckelexempel från L1-L3 som eleverna kan använda i sitt resonemang. Skrivmall med meningsstartare: \"Jag anser att kriget [var/inte var] oundvikligt. En viktig strukturell orsak var... [exempel]. Samtidigt visar [aktörsexempel] att... Sammanfattningsvis anser jag att...\" Enklare argumentkort med kortare texter och markerade nyckelord."),
      boldBullet("Utmaning mot A: ", "I det avslutande resonemanget: kräv att eleven problematiserar själva uppdelningen aktör/struktur. \"Är det alltid möjligt att skilja aktör från struktur? Ge ett exempel där gränsen är oklar.\" Uppmuntra att använda historikernamnen (Fischer, Clark) som stöd för sina argument. Extra reflektion: \"Hur påverkar vårt val av förklaringsmodell vår syn på ansvarsfrågan? Om kriget var oundvikligt - var då ingen ansvarig?\""),
      boldBullet("UDL-anpassning: ", "Visuellt: aktör-struktur-skalan (fysisk eller digital), argumentkort. Muntligt: EPA-diskussion med motståndare. Textbaserat: skriftligt resonemang med argumentbank som stöd."),

      // EXIT TICKET
      h2("Exit ticket"),
      boldBullet("Fråga: ", "\"Vad tar du med dig från detta moment? Beskriv kort hur ditt sätt att tänka om historiska förklaringar har förändrats (eller inte förändrats) under dessa fyra lektioner.\""),
      boldBullet("Användning: ", "Denna exit ticket är metakognitiv och mäter mål 3 (resonera om förklaringsmodeller). Den ger formativ information om huruvida momentet nått sitt övergripande syfte. Elever som kan artikulera en förändring i sitt tänkande visar att de internaliserat aktör/struktur som analytiskt verktyg. Svaren kan också användas som underlag för att uppdatera kursminnet."),

      // MATERIAL
      h2("Material"),
      bullet("Aktör-struktur-skala: linje på tavlan eller golvet, alternativt digital skala (t.ex. Mentimeter)"),
      bullet("Argumentkort (8 st): 4 strukturargument och 4 aktörsargument med konkreta historiska exempel"),
      bullet("Argumentbank (A4): sammanfattning av nyckelexempel från L1-L3 (allianser, blankofullmakten, Schlieffenplanen, Somme, kvinnors roller, etc.)"),
      bullet("Skrivmall med meningsstartare (E-stöd)"),
      bullet("Den stora frågan på tavla/slide: \"Var första världskriget oundvikligt - eller hade det kunnat stoppas av andra beslut?\""),

      // KOPPLING TILL KUNSKAPSKRAV
      h2("Koppling till kunskapskrav"),
      boldBullet("Mål 2 (förklara samband): ", "Det avslutande resonemanget kräver att eleven förklarar samband mellan strukturer och aktörer med konkreta exempel. E: enkla samband med ett perspektiv. C: samband som visar samverkan. A: komplexa samband ur flera perspektiv med problematisering."),
      boldBullet("Mål 3 (resonera om förklaringsmodeller): ", "Hela lektionen tränar och mäter denna förmåga. Positioneringen kräver ställningstagande, EPA-diskussionen kräver argumentation, och det skriftliga resonemanget kräver att eleven väger båda modellerna mot varandra. E: enkelt resonemang om skillnaden. C: välgrundat resonemang med båda modellerna. A: välgrundat och nyanserat resonemang som problematiserar uppdelningen."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("lektion-4.docx", buffer);
  console.log("lektion-4.docx generated successfully");
});
