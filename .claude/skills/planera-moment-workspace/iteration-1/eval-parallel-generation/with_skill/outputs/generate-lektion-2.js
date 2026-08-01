const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, PageBreak
} = require("docx");

// --- Constants ---
const PAGE_WIDTH = 11906; // A4
const PAGE_HEIGHT = 16838;
const MARGIN = 1440;
const CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN; // 9026

const COLORS = {
  primary: "1B4F72",
  secondary: "2E86C1",
  accent: "E8F4FD",
  lightGray: "F5F5F5",
  medGray: "E0E0E0",
  darkText: "1C1C1C",
  white: "FFFFFF",
};

const border = { style: BorderStyle.SINGLE, size: 1, color: COLORS.medGray };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

// Column widths for the tidsplanering table (4 cols)
const COL_TID = 1100;
const COL_FAS = 1600;
const COL_AKT = 1800;
const COL_BESK = CONTENT_WIDTH - COL_TID - COL_FAS - COL_AKT; // ~4526

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: COLORS.primary, type: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: COLORS.white, font: "Arial", size: 20 })] })],
  });
}

function bodyCell(textOrRuns, width, shade) {
  const children = Array.isArray(textOrRuns)
    ? [new Paragraph({ spacing: { after: 40 }, children: textOrRuns })]
    : [new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: textOrRuns, font: "Arial", size: 20, color: COLORS.darkText })] })];
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: shade ? { fill: COLORS.lightGray, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children,
  });
}

function multiLineCell(lines, width, shade) {
  const children = lines.map((line) => {
    if (typeof line === "string") {
      return new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: line, font: "Arial", size: 20, color: COLORS.darkText })] });
    }
    return new Paragraph({ spacing: { after: 40 }, children: line });
  });
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: shade ? { fill: COLORS.lightGray, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children,
  });
}

function boldRun(text) {
  return new TextRun({ text, bold: true, font: "Arial", size: 20, color: COLORS.darkText });
}

function normalRun(text) {
  return new TextRun({ text, font: "Arial", size: 20, color: COLORS.darkText });
}

function italicRun(text) {
  return new TextRun({ text, italics: true, font: "Arial", size: 20, color: COLORS.darkText });
}

function heading(text, level) {
  return new Paragraph({
    heading: level,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: "Arial" })],
  });
}

function bullet(textOrRuns, ref = "bullets") {
  const children = typeof textOrRuns === "string"
    ? [normalRun(textOrRuns)]
    : textOrRuns;
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 60 },
    children,
  });
}

function bodyPara(textOrRuns) {
  const children = typeof textOrRuns === "string"
    ? [normalRun(textOrRuns)]
    : textOrRuns;
  return new Paragraph({ spacing: { after: 80 }, children });
}

// Build document
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: COLORS.primary },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: COLORS.secondary },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial", color: COLORS.darkText },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
      {
        reference: "numbers",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: PAGE_WIDTH, height: PAGE_HEIGHT },
        margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "Samhällskunskap 1a1 — Ungas ekonomi", font: "Arial", size: 16, color: "888888", italics: true })],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Sida ", font: "Arial", size: 16, color: "888888" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "888888" }),
          ],
        })],
      }),
    },
    children: [
      // TITLE
      heading('Lektion 2: "Vem får jobben?" — Arbetsmarknaden för unga', HeadingLevel.HEADING_1),
      bodyPara([
        boldRun("Kurs: "), normalRun("Samhällskunskap 1a1    "),
        boldRun("Moment: "), normalRun("Ungas ekonomi    "),
        boldRun("Tid: "), normalRun("60 minuter"),
      ]),

      // LÄRANDEMÅL
      heading("Lärandemål", HeadingLevel.HEADING_2),
      bullet([boldRun("Mål 2: "), normalRun("Analysera arbetsmarknadens villkor för unga — arbetsmarknadens förändringar och villkor med fokus på ungas situation.")]),
      bodyPara([
        boldRun("E: "), normalRun("Eleven för enkla resonemang om arbetsmarknadens villkor och hur de påverkar unga."),
      ]),
      bodyPara([
        boldRun("C: "), normalRun("Eleven för välgrundade resonemang om arbetsmarknadens villkor och förändringar samt hur de påverkar unga."),
      ]),
      bodyPara([
        boldRun("A: "), normalRun("Eleven för välgrundade och nyanserade resonemang om arbetsmarknadens villkor och förändringar samt hur de påverkar unga, och belyser frågan ur flera perspektiv."),
      ]),

      // FÖRBEREDELSE
      heading("Förberedelse", HeadingLevel.HEADING_2),
      bullet("Skriv ut eller ha digitalt: jämförelsetabell för anställningsformer (en per par)"),
      bullet("Förbered Alex tre jobbdilemma (se bilaga) — ett dokument per par"),
      bullet("Ha SCB-statistik om ungdomsarbetslöshet redo [VERIFIERA aktuella siffror]"),
      bullet("Presentation klar (se medföljande pptx)"),

      // RETRIEVAL REVIEW-KOPPLING
      heading("Retrieval review-koppling", HeadingLevel.HEADING_2),
      bodyPara([
        boldRun("Baserat på exit ticket från lektion 1: "), normalRun("Elevernas förståelse av det ekonomiska kretsloppet — vilka aktörer som finns och hur pengar flödar mellan dem."),
      ]),
      bodyPara([
        boldRun("Begrepp att återaktualisera: "), normalRun("Hushåll, företag, offentlig sektor, inkomst, skatt, varor/tjänster."),
      ]),

      // TIDSPLANERING
      heading("Tidsplanering", HeadingLevel.HEADING_2),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [COL_TID, COL_FAS, COL_AKT, COL_BESK],
        rows: [
          // Header
          new TableRow({
            children: [
              headerCell("Tid", COL_TID),
              headerCell("Fas", COL_FAS),
              headerCell("Aktivitet", COL_AKT),
              headerCell("Beskrivning", COL_BESK),
            ],
          }),
          // Fas 1
          new TableRow({
            children: [
              bodyCell("0-5 min", COL_TID, true),
              bodyCell("1. Retrieval review", COL_FAS, true),
              bodyCell("Kretsloppskoll", COL_AKT, true),
              multiLineCell([
                [boldRun("Enskilt (2 min):"), normalRun(' "Skriv ner tre saker du minns om det ekonomiska kretsloppet från förra lektionen."')],
                [boldRun("Par (2 min):"), normalRun(" Jämför era svar. Vad hade ni gemensamt? Vad hade ni missat?")],
                [boldRun("Helklass (1 min):"), normalRun(' Snabb genomgång. Koppling: "Idag tittar vi på en central del av kretsloppet — arbetsmarknaden. Vad händer i kretsloppet när någon får ett jobb?"')],
              ], COL_BESK, true),
            ],
          }),
          // Fas 2
          new TableRow({
            children: [
              bodyCell("5-7 min", COL_TID, false),
              bodyCell("2. Målaktivering", COL_FAS, false),
              bodyCell("Hook + mål", COL_AKT, false),
              multiLineCell([
                [boldRun("Hook:"), normalRun(' "18% av alla 18-24-åringar i EU är arbetslösa. I Sverige varierar det — men unga drabbas alltid hårdast i en lågkonjunktur. Varför tror ni det?"')],
                [boldRun("Mål:"), normalRun(' "Idag ska ni kunna jämföra olika anställningsformer och analysera vad de betyder för en ung persons trygghet och ekonomi."')],
              ], COL_BESK, false),
            ],
          }),
          // Fas 3
          new TableRow({
            children: [
              bodyCell("7-17 min", COL_TID, true),
              bodyCell("3. Explicit instruktion", COL_FAS, true),
              bodyCell("Arbetsmarknaden för unga", COL_AKT, true),
              multiLineCell([
                [boldRun("Steg 1 — Utbud och efterfrågan (3 min):"), normalRun(" Vad är arbetsmarknaden? Arbetstagare erbjuder arbetskraft, arbetsgivare efterfrågar den. Enkel modell med koppling till kretsloppet.")],
                [boldRun("Kontrollfråga:"), italicRun(' "Om många söker få jobb — vem har makten, arbetsgivaren eller arbetstagaren?"')],
                [boldRun("Steg 2 — Anställningsformer (4 min):"), normalRun(" Fast anställning, visstid, timanställning, gig-/plattformsjobb. Visa worked example: jämför trygghet, rättigheter och flexibilitet för varje form.")],
                [boldRun("Kontrollfråga:"), italicRun(' "Om Alex blir sjuk en vecka — vilken anställningsform ger mest skydd?"')],
                [boldRun("Steg 3 — Fackföreningar och rättigheter (3 min):"), normalRun(" Kollektivavtal, LAS, semesterlag. Varför organiserar sig arbetstagare? Vad har unga för rättigheter?")],
                [boldRun("Kontrollfråga:"), italicRun(' "Vad händer om det inte finns något kollektivavtal?"')],
              ], COL_BESK, true),
            ],
          }),
          // Fas 4
          new TableRow({
            children: [
              bodyCell("17-37 min", COL_TID, false),
              bodyCell("4. Guidad övning", COL_FAS, false),
              bodyCell("Jämförelse + EPA", COL_AKT, false),
              multiLineCell([
                [boldRun("Del 1 — Jämförelsetabell (8 min):"), normalRun(" I par: fyll i tabellen med tre anställningsformer (fast, timanställning, gig). Jämförelsepunkter: trygghet, lön, semester, sjukpenning, framtidsplanering.")],
                [boldRun("Läraren:"), normalRun(" Cirkulerar. Ställer fördjupande frågor till par som kommit långt. Stöttar E-elever med ifyllt exempel i en kolumn.")],
                "",
                [boldRun("Del 2 — EPA: Alex tre jobbdilemma (12 min):")],
                [boldRun("Enskilt (3 min):"), normalRun(' Läs Alex tre erbjudanden. Välj ett och skriv kort: "Jag väljer X för att..."')],
                [boldRun("Par (4 min):"), normalRun(" Jämför val med din partner. Argumentera för ert val. Lyft minst ett motargument.")],
                [boldRun("Alla (5 min):"), normalRun(" Handuppräckning: vem valde vad? Läraren lyfter 2-3 välformulerade argument. Pusha: vems perspektiv har ni tagit — individens, arbetsgivarens eller samhällets?")],
              ], COL_BESK, false),
            ],
          }),
          // Fas 5
          new TableRow({
            children: [
              bodyCell("37-52 min", COL_TID, true),
              bodyCell("5. Självständig övning", COL_FAS, true),
              bodyCell("Perspektiv-analys", COL_AKT, true),
              multiLineCell([
                [boldRun("Snabbskrivning (7 min):"), normalRun(' "Alex kompis säger: \'Gig-jobb är framtiden — frihet är viktigare än trygghet.\' Alex mamma säger: \'Ta lagerjobbet, du behöver stabilitet.\' Vem har rätt? Motivera. Och — vem betalar priset om det går fel?"')],
                [boldRun("Mot E:"), normalRun(" Stödmallar: 'Jag håller med ___ för att... Ett argument mot är att...'")],
                [boldRun("Mot A:"), normalRun(" Tillägg: 'Diskutera hur gig-ekonomins tillväxt påverkar samhällsekonomin. Vad händer med skatteintäkterna och välfärden?'")],
                "",
                [boldRun("Delning (3 min):"), normalRun(" 3-4 elever delar sina svar. Läraren lyfter mångfald i perspektiv.")],
                [boldRun("Läraren:"), normalRun(" Poängen är att svaret beror på vilka värderingar man prioriterar — det finns inget entydigt rätt svar.")],
              ], COL_BESK, true),
            ],
          }),
          // Fas 6
          new TableRow({
            children: [
              bodyCell("52-57 min", COL_TID, false),
              bodyCell("6. Avslut", COL_FAS, false),
              bodyCell("Exit ticket + preview", COL_AKT, false),
              multiLineCell([
                [boldRun("Exit ticket (3 min):"), normalRun(' "Förklara med egna ord: varför är det svårare för unga att få trygga anställningar jämfört med äldre arbetstagare? Ge minst två orsaker."')],
                [boldRun("Preview (2 min):"), normalRun(' "Nu vet Alex vad arbetsmarknaden erbjuder. Nästa gång ska Alex flytta hemifrån — vi räknar på om pengarna räcker. Ta med mobilen — ni får göra en riktig budget!"')],
              ], COL_BESK, false),
            ],
          }),
        ],
      }),

      // LÄRARINSTRUKTIONER
      heading("Lärarinstruktioner", HeadingLevel.HEADING_2),
      heading("Retrieval review", HeadingLevel.HEADING_3),
      bodyPara("Utgå från exit ticket-data från lektion 1. Om många elever missade sambandet mellan hushåll och offentlig sektor (skatt), börja med det. Bekräfta att eleverna minns aktörerna (hushåll, företag, offentlig sektor) och flödena (pengar, varor/tjänster, skatt, löner)."),
      heading("Instruktion", HeadingLevel.HEADING_3),
      bodyPara("Håll det relevant. Använd exempel eleverna känner igen: McDonald's, Foodora, ICA, butiksjobb. Visa tydligt att anställningsformer har olika konsekvenser — det handlar inte bara om lön utan om trygghet, rättigheter och framtidsplanering."),
      bodyPara([boldRun("Worked example: "), normalRun('Visa en jämförelse mellan fast anställning och timanställning. Tänk högt: "Om jag har fast anställning och blir sjuk — vad händer? Jag får sjuklön. Men om jag är timanställd — vad händer då? Inga timmar, ingen lön." Visa att analysen handlar om konsekvenser, inte bara beskrivning.')]),
      heading("Guidad övning", HeadingLevel.HEADING_3),
      bodyPara("Cirkulera aktivt under jämförelsearbetet. Ställ fördjupande frågor till par som kommit långt:"),
      bullet('"Vad händer med Alex budget om hen är sjuk en vecka med varje anställningsform?" (mot C/A)'),
      bullet('"Kan Alex planera att flytta hemifrån med en timanställning? Varför/varför inte?" (mot A)'),
      bullet('"Vem tjänar på att unga har osäkra anställningar — individen, arbetsgivaren eller samhället?" (mot A)'),
      bodyPara("Under EPA:n — pusha elever att motivera med kopplingar till trygghet, ekonomi OCH livskvalitet. Ingen anställningsform ska framstå som entydigt rätt."),
      heading("Avslut", HeadingLevel.HEADING_3),
      bodyPara("Samla in exit tickets. Sortera snabbt i tre högar: förstod, osäkra, missade. Använd resultaten för att planera retrieval review inför lektion 3."),

      // ALEX TRE JOBBDILEMMA
      new Paragraph({ children: [new PageBreak()] }),
      heading("Bilaga: Alex tre jobbdilemma", HeadingLevel.HEADING_2),
      bodyPara("Alex har fått erbjudande om tre jobb. Inget är perfekt — alla har fördelar och nackdelar:"),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 80 },
        children: [
          boldRun("Fast anställning på lager"), normalRun(" — 25 500 kr/mån brutto, nattskift, 40 min pendling, heltid. Tryggt men dåliga arbetstider och tungt fysiskt."),
        ],
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 80 },
        children: [
          boldRun("Timanställning i butik"), normalRun(" — ca 18 000 kr/mån (om Alex får tillräckligt med timmar), nära hemmet, trevlig arbetsmiljö, men inga garanterade timmar. Chefen sms:ar kvällen innan."),
        ],
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 80 },
        children: [
          boldRun("Frilansare via plattform (Foodora/Uber)"), normalRun(" — helt flexibelt, potentiellt 20 000+ kr/mån om Alex kör mycket, men ingen semester, ingen sjukpenning, egen skatteinbetalning, slitage på egen cykel/bil."),
        ],
      }),

      bodyPara(""),
      bodyPara([boldRun("EPA-fråga: "), normalRun("Vilket jobb ska Alex välja — och varför? Tänk på trygghet, lön, hälsa, frihet och framtid.")]),

      // DIFFERENTIERING
      heading("Differentiering", HeadingLevel.HEADING_2),
      bodyPara([boldRun("Stöd (mot E):")]),
      bullet("Jämförelsetabellen har en kolumn redan ifylld som modell"),
      bullet('Stödfrågor vid jobbvalet: "Lista tre fördelar med varje jobb. Lista tre nackdelar. Vilket väger tyngst för dig?"'),
      bullet('Meningsstartar: "Jag tycker Alex borde välja... för att..."'),

      bodyPara([boldRun("Utmaning (mot A):")]),
      bullet('Perspektivväxling: "Diskutera Alex val ur arbetsgivarens perspektiv — varför erbjuder företag olika anställningsformer?"'),
      bullet('"Hur påverkar gig-ekonomins tillväxt samhällsekonomin? Vad händer med skatteintäkterna och välfärden om fler jobbar som frilansare?"'),
      bullet("Koppla till kretsloppet från lektion 1 — visa att arbetsmarknaden inte är isolerad."),

      // EXIT TICKET
      heading("Exit ticket", HeadingLevel.HEADING_2),
      bodyPara([boldRun("Fråga: "), normalRun('"Förklara med egna ord: varför är det svårare för unga att få trygga anställningar jämfört med äldre arbetstagare? Ge minst två orsaker."')]),
      bodyPara([boldRun("Användning: "), normalRun("Resultaten visar om eleverna förstår strukturella orsaker (erfarenhet, LAS-regler, konjunktur) eller fastnar i individförklaringar. Styr retrieval review i lektion 3.")]),

      // KOPPLING TILL KUNSKAPSKRAV
      heading("Koppling till kunskapskrav", HeadingLevel.HEADING_2),
      bullet([boldRun("E-nivå: "), normalRun("Beskriva olika anställningsformer och ge enkla resonemang om fördelar/nackdelar.")]),
      bullet([boldRun("C-nivå: "), normalRun("Jämföra anställningsformer utförligt och ge välgrundade resonemang om konsekvenser.")]),
      bullet([boldRun("A-nivå: "), normalRun("Analysera arbetsmarknadens villkor ur flera perspektiv (individ, arbetsgivare, samhälle) och visa på komplexa samband med samhällsekonomin.")]),
    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-parallel-generation/with_skill/outputs/lektion-2.docx", buffer);
  console.log("lektion-2.docx created");
});
