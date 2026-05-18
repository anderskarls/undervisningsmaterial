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

function bodyText(text) {
  return new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text, font: "Arial", size: 24 })] });
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
            new TextRun({ text: "Historia 1b  |  Första världskriget - aktör och struktur", font: "Arial", size: 18, color: "888888" }),
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
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Lektion 2: Julikrisen - 37 dagar som förändrade världen", font: "Arial" })] }),
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
      boldBullet("Mål 1: ", "Redogöra för julikrisens händelseförlopp och centrala aktörer"),
      boldBullet("Mål 2: ", "Förklara samband mellan strukturella faktorer och aktörers beslut under julikrisen"),

      // RETRIEVAL-KOPPLING
      h2("Retrieval review-koppling"),
      boldBullet("Baserat på exit ticket från lektion 1: ", "Kontrollera om eleverna kan skilja mellan aktörs- och strukturförklaringar. Om många var osäkra: börja med kort begreppsuppfräschning (1 min extra). Om de flesta förstod: gå direkt till retrieval-quizet."),
      bullet("Begrepp att återaktualisera: aktör, struktur, allianssystem, nationalism, imperialism, kapprustning"),

      // FÖRBEREDELSE
      h2("Förberedelse"),
      bullet("Förbered primärkällor: 4-5 korta utdrag/citat från julikrisen (se material nedan)"),
      bullet("Skriv ut tidslinje-mallen (tom tidslinje 28 juni - 4 augusti med tomma rutor för händelser)"),
      bullet("Förbered Schlieffenplan-karta (visar den planerade anfallsvägen genom Belgien)"),
      bullet("Förbered EPA-frågor och meningsstartare"),

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
          timeRow("0-8 min", "1. Retrieval", "Begreppskort + quiz", "Eleverna får 2 min att enskilt besvara: (1) \"Nämn två strukturella orsaker till första världskriget\" (2) \"Vad är skillnaden mellan en aktörsförklaring och en strukturförklaring?\" Sedan snabb genomgång i par (2 min) och helklass (4 min). Läraren bekräftar/korrigerar och knyter an: \"Idag ska vi se hur dessa strukturer och aktörer möttes i verkligheten sommaren 1914.\"", "F2F7FB"),
          timeRow("8-11 min", "2. Målaktivering", "\"Ormen måste krossas i ägget\"", "Visa citatet: \"Ormen måste krossas i ägget\" (österrikisk inställning till Serbien). Fråga: \"Vem sa detta, och varför? Är detta en aktör som talar - eller en struktur som driver?\" Kort tänketid. Presentera dagens mål: \"Vi ska följa 37 dagar som förändrade världen - och vid varje steg fråga oss: var detta ett val eller en oundviklighet?\""),
          timeRow("11-19 min", "3. Instruktion", "Julikrisens tidslinje", "Kort genomgång (8 min) av julikrisens kronologi med fokus på nyckelbesluten: (1) Mordet i Sarajevo 28 juni, (2) Tysklands blankofullmakt till Österrike, (3) Österrikes ultimatum till Serbien 23 juli, (4) Krigsförklaring mot Serbien 28 juli, (5) Rysk mobilisering, (6) Schlieffenplanen aktiveras - Tyskland anfaller Frankrike genom Belgien, (7) Storbritannien går in 4 augusti. Vid varje steg: markera om det primärt var en aktör eller en struktur som drev beslutet. Kontrollfråga efter kronologin: \"Vid vilken punkt tror ni det var för sent att stoppa kriget?\""),
          timeRow("19-47 min", "4. Guidad övning", "EPA: Primärkällor från julikrisen", "Steg 1 - Introduktion (3 min): Dela ut 4-5 korta primärkällor/citat: (A) Blankofullmakten - Tysklands löfte till Österrike, (B) Det österrikiska ultimatumets krav, (C) Sir Edward Greys dilemma - britterna tvekar, (D) Schlieffenplanens logik - \"när tågen rullar\", (E) Wilhelm II:s retorik.\n\nSteg 2 - Enskilt (5 min): Varje elev läser sin källa och besvarar: \"Vilken aktör framträder? Vilka strukturer begränsar eller driver aktörens handlande?\"\n\nSteg 3 - Par (8 min): Eleverna paras ihop (olika källor). De presenterar sina källor för varandra och diskuterar: \"Hade aktören i din källa kunnat handla annorlunda? Vad hindrade dem?\"\n\nSteg 4 - Alla (12 min): Helklassdiskussion. Placera aktörerna på tidslinjen. Bygg ett mönster: vid varje steg - vem beslutade, och vad tvingade dem? Fokus på Schlieffenplanen som vändpunkt: \"Här tog strukturen över - eller?\""),
          timeRow("47-65 min", "5. Självständig övning", "Aktör-struktur-analys", "Eleverna fyller i en analysmatris med kolumnerna: Händelse | Aktör(er) | Struktur(er) | Vem/vad drev beslutet? De ska analysera minst tre nyckelhändelser från julikrisen. Avsluta med ett kort resonemang (3-5 meningar): \"Vid vilken punkt var kriget oundvikligt - om det någonsin var det?\""),
          timeRow("65-72 min", "6. Avslut", "Summering + preview", "Återkoppla till den stora frågan: \"Vi har nu sett hur 37 dagar tog Europa från fred till krig. Var det aktörerna eller strukturerna som avgjorde?\" Snabb handuppräckning: \"Mest aktör? Mest struktur? Lika mycket?\" Preview: \"Nästa lektion tittar vi på vad som hände NÄR kriget väl brutit ut - och frågar samma sak om skyttegravarna, tekniken och människorna.\""),
          timeRow("72-80 min", "", "Exit ticket", "\"Ge ett exempel på ett beslut under julikrisen där en aktör begränsades av en struktur. Förklara hur strukturen påverkade aktörens val.\" Samla in."),
        ]
      }),

      new Paragraph({ children: [] }),

      // LÄRARINSTRUKTIONER
      h2("Lärarinstruktioner"),
      boldBullet("Retrieval review: ", "Om exit ticket-data från L1 visar att många inte kunde skilja aktör/struktur: lägg 1 extra minut på att visa glasexemplet igen. Om de flesta kunde: gå snabbt vidare."),
      boldBullet("Målaktivering: ", "Citatet \"ormen måste krossas i ägget\" ska väcka nyfikenhet. Låt eleverna gissa - avslöja sedan att det var inställningen i Wien. Poängtera dubbelnaturen: en aktör (österrikiska ledare) som drevs av en struktur (panslavisk nationalism som hotade imperiet)."),
      boldBullet("Kronologin: ", "Håll 8 min. Använd tavlan/digitalt med tidslinjen synlig. Vid varje steg, pausa kort: \"Aktör eller struktur?\" Signalera tydligt att det inte alltid är svart-vitt - det är just det som gör frågan intressant."),
      boldBullet("EPA-primärkällor: ", "Cirkulera under par-fasen. Lyssna efter elever som fastnar i \"det var bara aktörens fel\" eller \"det var oundvikligt\". Ställ motviktsfrågor: \"Men vad hade hänt om Wilhelm inte gett blankofullmakten?\" eller \"Kunde Grey ha agerat tidigare?\""),
      boldBullet("Schlieffenplanen som nyckelmoment: ", "Detta är lektionens starkaste aktör-struktur-exempel. Betona: planen var skapad av aktörer (Schlieffen, generalstaben) men blev en struktur som tvingade framtida aktörer. Fråga: \"Kan en aktörs beslut bli en struktur?\""),
      boldBullet("Vanligt missförstånd: ", "Elever kan tro att mobilisering = krigsförklaring. Förklara att mobilisering var en militär förberedelse som i praktiken tolkades som en krigshandling på grund av tidens militära logik."),

      // ELEVAKTIVITETER
      h2("Elevaktiviteter"),
      boldBullet("Retrieval quiz (8 min): ", "Enskilt skrivande, par-diskussion, helklassgenomgång."),
      boldBullet("EPA - primärkällor (28 min): ", "Läs primärkälla, besvara analysfrågor enskilt, diskutera i par, delta i helklassdiskussion vid tidslinjen."),
      boldBullet("Analysmatris (18 min): ", "Fyll i matris med tre händelser + skriv kort resonemang om oundviklighet."),
      boldBullet("Exit ticket (8 min): ", "Skriv svar på exit ticket-frågan."),

      // DIFFERENTIERING
      h2("Differentiering"),
      boldBullet("Stöd mot E: ", "Meningsstartare för analysmatrisen: \"Under julikrisen beslutade [aktör] att... Detta påverkades av [struktur] eftersom...\" Förifylld tidslinje med händelserna redan markerade - eleven fyller i aktör/struktur-kolumnerna. Primärkällorna förses med ordförklaringar för svåra termer (ultimatum, mobilisering, blankofullmakt)."),
      boldBullet("Utmaning mot A: ", "Extra analysuppgift: \"Schlieffenplanen skapades av aktörer men blev en struktur. Hitta fler exempel på detta mönster i julikrisen.\" I det skriftliga resonemanget: kräv att eleven väger minst två perspektiv mot varandra och tar ställning med motivering."),
      boldBullet("UDL-anpassning: ", "Visuellt: tidslinje + Schlieffenplan-karta. Muntligt: EPA-diskussion. Textbaserat: primärkällor med analysfrågor."),

      // EXIT TICKET
      h2("Exit ticket"),
      boldBullet("Fråga: ", "\"Ge ett exempel på ett beslut under julikrisen där en aktör begränsades av en struktur. Förklara hur strukturen påverkade aktörens val.\""),
      boldBullet("Användning: ", "Denna fråga mäter mål 2 (samband aktör-struktur). Sortera i tre högar. Elever som inte kan ge ett exempel behöver mer stöd i L3 - ge dem en påminnelse-lapp med ett exempel att utgå ifrån. Elever som ger nyanserade svar kan utmanas vidare i L3."),

      // MATERIAL
      h2("Material"),
      bullet("Primärkällor/citat (4-5 st): Blankofullmakten, österrikiska ultimatumets krav, Sir Edward Greys dilemma, Schlieffenplanens logik, Wilhelm II:s retorik"),
      bullet("Tom tidslinje-mall: 28 juni - 4 augusti 1914"),
      bullet("Karta: Schlieffenplanens anfallsväg genom Belgien"),
      bullet("Analysmatris (tom): Händelse | Aktör(er) | Struktur(er) | Vem/vad drev beslutet?"),
      bullet("Meningsstartare och ordförklaringar för E-stöd"),
      bullet("Förifylld tidslinje för E-stöd"),

      // KOPPLING TILL KUNSKAPSKRAV
      h2("Koppling till kunskapskrav"),
      boldBullet("Mål 1 (redogöra): ", "Eleverna lär sig julikrisens händelseförlopp och centrala aktörer. Tidslinjen och analysmatrisen tränar förmågan att redogöra i kronologisk ordning."),
      boldBullet("Mål 2 (förklara samband): ", "Hela lektionens kärna - varje primärkälla och EPA-diskussion kräver att eleven identifierar samband mellan aktörer och strukturer. E: enkla samband (\"aktören påverkades av strukturen\"). C: samband med samverkan (\"flera strukturer begränsade aktören\"). A: komplexa samband (\"aktörens beslut blev en ny struktur\")."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("lektion-2.docx", buffer);
  console.log("lektion-2.docx generated successfully");
});
