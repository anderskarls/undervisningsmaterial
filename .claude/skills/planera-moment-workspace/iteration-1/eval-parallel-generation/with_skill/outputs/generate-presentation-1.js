const pptxgen = require("pptxgenjs");
const fs = require("fs");

// --- Color palette: Teal Trust (economy/money theme) ---
const PRIMARY = "028090";      // teal
const SECONDARY = "00A896";    // seafoam
const ACCENT = "02C39A";       // mint
const DARK = "1A1A2E";         // near-black
const LIGHT = "F0F7F4";        // off-white green tint
const WHITE = "FFFFFF";
const TEXT_DARK = "1A1A2E";
const TEXT_LIGHT = "F0F7F4";
const TEXT_MUTED = "5A7A7A";

// --- Fonts ---
const HEADER_FONT = "Georgia";
const BODY_FONT = "Calibri";

// --- Helpers ---
const makeShadow = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 });

function addTitleSlide(pres, title, subtitle) {
  let slide = pres.addSlide();
  slide.background = { color: DARK };

  // Accent bar top
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08, fill: { color: ACCENT }
  });

  // Title
  slide.addText(title, {
    x: 0.8, y: 1.2, w: 8.4, h: 1.8,
    fontSize: 40, fontFace: HEADER_FONT, color: WHITE,
    bold: true, align: "left", valign: "middle", margin: 0
  });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.8, y: 3.1, w: 8.4, h: 0.8,
    fontSize: 18, fontFace: BODY_FONT, color: ACCENT,
    align: "left", valign: "top", margin: 0
  });

  // Bottom info bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.8, w: 10, h: 0.825, fill: { color: PRIMARY }
  });
  slide.addText("Samh\u00e4llskunskap 1a1  |  Ungas ekonomi  |  Lektion 1 av 5", {
    x: 0.8, y: 4.85, w: 8.4, h: 0.7,
    fontSize: 14, fontFace: BODY_FONT, color: WHITE,
    align: "left", valign: "middle", margin: 0
  });

  slide.addNotes("TITELSLIDE (0 min)\nV\u00e4lkomna eleverna. Presentera att detta \u00e4r f\u00f6rsta lektionen i ett nytt moment om ekonomi \u2014 men inte torr teori, utan konkret: vad h\u00e4nder med pengarna n\u00e4r du k\u00f6per n\u00e5got?");
  return slide;
}

function addContentSlide(pres, title, bullets, notes, opts = {}) {
  let slide = pres.addSlide();
  slide.background = { color: opts.dark ? DARK : WHITE };

  const textColor = opts.dark ? WHITE : TEXT_DARK;
  const mutedColor = opts.dark ? "8ABFB0" : TEXT_MUTED;

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.06, h: 5.625, fill: { color: ACCENT }
  });

  // Title
  slide.addText(title, {
    x: 0.8, y: 0.3, w: 8.4, h: 0.7,
    fontSize: 28, fontFace: HEADER_FONT, color: textColor,
    bold: true, align: "left", valign: "middle", margin: 0
  });

  // Bullet content
  const bulletItems = bullets.map((b, i) => ({
    text: b,
    options: {
      bullet: true,
      breakLine: i < bullets.length - 1,
      fontSize: 16, fontFace: BODY_FONT, color: textColor,
      paraSpaceAfter: 10
    }
  }));

  slide.addText(bulletItems, {
    x: 0.8, y: 1.2, w: 8.4, h: 3.5,
    valign: "top", margin: 0
  });

  slide.addNotes(notes);
  return slide;
}

function addDiscussionSlide(pres, question, instruction, notes) {
  let slide = pres.addSlide();
  slide.background = { color: PRIMARY };

  // Icon-like circle
  slide.addShape(pres.shapes.OVAL, {
    x: 4.25, y: 0.5, w: 1.5, h: 1.5,
    fill: { color: ACCENT, transparency: 20 }
  });
  slide.addText("\uD83D\uDCAC", {
    x: 4.25, y: 0.55, w: 1.5, h: 1.4,
    fontSize: 40, align: "center", valign: "middle", margin: 0
  });

  // Question
  slide.addText(question, {
    x: 0.8, y: 2.2, w: 8.4, h: 1.5,
    fontSize: 24, fontFace: HEADER_FONT, color: WHITE,
    bold: true, align: "center", valign: "middle", margin: 0
  });

  // Instruction
  slide.addText(instruction, {
    x: 1.5, y: 4.0, w: 7, h: 0.8,
    fontSize: 14, fontFace: BODY_FONT, color: TEXT_LIGHT,
    italic: true, align: "center", valign: "top", margin: 0
  });

  slide.addNotes(notes);
  return slide;
}

function addTwoColumnSlide(pres, title, leftTitle, leftItems, rightTitle, rightItems, notes) {
  let slide = pres.addSlide();
  slide.background = { color: WHITE };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.06, h: 5.625, fill: { color: ACCENT }
  });

  // Title
  slide.addText(title, {
    x: 0.8, y: 0.3, w: 8.4, h: 0.7,
    fontSize: 28, fontFace: HEADER_FONT, color: TEXT_DARK,
    bold: true, align: "left", valign: "middle", margin: 0
  });

  // Left card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 1.3, w: 4.0, h: 3.5,
    fill: { color: LIGHT }, shadow: makeShadow()
  });
  slide.addText(leftTitle, {
    x: 1.0, y: 1.4, w: 3.6, h: 0.5,
    fontSize: 18, fontFace: HEADER_FONT, color: PRIMARY,
    bold: true, margin: 0
  });
  const leftBullets = leftItems.map((item, i) => ({
    text: item,
    options: { bullet: true, breakLine: i < leftItems.length - 1, fontSize: 14, fontFace: BODY_FONT, color: TEXT_DARK, paraSpaceAfter: 6 }
  }));
  slide.addText(leftBullets, {
    x: 1.0, y: 2.0, w: 3.6, h: 2.5, valign: "top", margin: 0
  });

  // Right card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 1.3, w: 4.0, h: 3.5,
    fill: { color: LIGHT }, shadow: makeShadow()
  });
  slide.addText(rightTitle, {
    x: 5.4, y: 1.4, w: 3.6, h: 0.5,
    fontSize: 18, fontFace: HEADER_FONT, color: PRIMARY,
    bold: true, margin: 0
  });
  const rightBullets = rightItems.map((item, i) => ({
    text: item,
    options: { bullet: true, breakLine: i < rightItems.length - 1, fontSize: 14, fontFace: BODY_FONT, color: TEXT_DARK, paraSpaceAfter: 6 }
  }));
  slide.addText(rightBullets, {
    x: 5.4, y: 2.0, w: 3.6, h: 2.5, valign: "top", margin: 0
  });

  slide.addNotes(notes);
  return slide;
}

function addBigNumberSlide(pres, number, label, subtitle, notes) {
  let slide = pres.addSlide();
  slide.background = { color: DARK };

  slide.addText(number, {
    x: 0.8, y: 0.8, w: 8.4, h: 2.5,
    fontSize: 72, fontFace: HEADER_FONT, color: ACCENT,
    bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addText(label, {
    x: 0.8, y: 3.2, w: 8.4, h: 0.8,
    fontSize: 22, fontFace: BODY_FONT, color: WHITE,
    align: "center", valign: "top", margin: 0
  });

  slide.addText(subtitle, {
    x: 1.5, y: 4.1, w: 7.0, h: 0.6,
    fontSize: 14, fontFace: BODY_FONT, color: TEXT_MUTED,
    italic: true, align: "center", valign: "top", margin: 0
  });

  slide.addNotes(notes);
  return slide;
}

// ============================================================
// BUILD PRESENTATION
// ============================================================
async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "Cornelius Agent";
  pres.title = "Lektion 1: Vad h\u00e4nder med pengarna?";

  // --- SLIDE 1: Title ---
  addTitleSlide(
    pres,
    '"Vad h\u00e4nder med pengarna?"',
    "Det ekonomiska kretsloppet \u2014 f\u00f6lj Alex pengar genom samh\u00e4llet"
  );

  // --- SLIDE 2: Hook / F\u00f6rkunskapsaktivering ---
  addDiscussionSlide(
    pres,
    "Du Swishar 35 kr p\u00e5 Pressbyr\u00e5n.\nVart tar pengarna v\u00e4gen?",
    "R\u00e4ck upp handen: Kan du n\u00e4mna tre saker som h\u00e4nder med pengarna?",
    "FAS 1: F\u00d6RKUNSKAPSAKTIVERING (0\u20135 min)\n\nTre handuppst\u00e4llningsfr\u00e5gor:\n1. \u201CHar du k\u00f6pt n\u00e5got den h\u00e4r veckan?\u201D\n2. \u201CVet du vad moms \u00e4r?\u201D\n3. \u201CVet du vart pengarna g\u00e5r n\u00e4r du Swishar p\u00e5 Pressbyr\u00e5n?\u201D\n\nSedan 1 min i par: \u201CG\u00f6r en gissning \u2014 vad h\u00e4nder med pengarna?\u201D\n\nSyfte: Aktivera f\u00f6rkunskaper, skapa nyfikenhet. Notera vad eleverna redan vet."
  );

  // --- SLIDE 3: M\u00e5laktivering + Alex ---
  {
    let slide = pres.addSlide();
    slide.background = { color: WHITE };
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 0.06, h: 5.625, fill: { color: ACCENT }
    });

    slide.addText("Idag ska du kunna f\u00f6rklara:", {
      x: 0.8, y: 0.3, w: 8.4, h: 0.6,
      fontSize: 22, fontFace: HEADER_FONT, color: TEXT_DARK,
      bold: true, align: "left", margin: 0
    });
    slide.addText("Vart Alex pengar tar v\u00e4gen \u2014 och varf\u00f6r det p\u00e5verkar hela samh\u00e4llet.", {
      x: 0.8, y: 0.9, w: 8.4, h: 0.6,
      fontSize: 18, fontFace: BODY_FONT, color: PRIMARY,
      italic: true, align: "left", margin: 0
    });

    // Alex card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.8, y: 1.8, w: 8.4, h: 3.0,
      fill: { color: LIGHT }, shadow: makeShadow()
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.8, y: 1.8, w: 0.08, h: 3.0,
      fill: { color: SECONDARY }
    });
    slide.addText("M\u00f6t Alex, 19 \u00e5r", {
      x: 1.2, y: 1.9, w: 7.8, h: 0.5,
      fontSize: 20, fontFace: HEADER_FONT, color: DARK,
      bold: true, margin: 0
    });
    slide.addText([
      { text: "Precis klar med gymnasiet", options: { bullet: true, breakLine: true, fontSize: 15, fontFace: BODY_FONT, color: TEXT_DARK } },
      { text: "F\u00f6rsta riktiga jobbet \u2014 lager, 25 000 kr/m\u00e5n brutto", options: { bullet: true, breakLine: true, fontSize: 15, fontFace: BODY_FONT, color: TEXT_DARK } },
      { text: "Funderar p\u00e5 att flytta hemifr\u00e5n", options: { bullet: true, breakLine: true, fontSize: 15, fontFace: BODY_FONT, color: TEXT_DARK } },
      { text: "Har aldrig gjort en budget", options: { bullet: true, fontSize: 15, fontFace: BODY_FONT, color: TEXT_DARK } },
    ], {
      x: 1.2, y: 2.5, w: 7.8, h: 2.0, valign: "top", margin: 0
    });

    slide.addNotes("FAS 2: M\u00c5LAKTIVERING (5\u20137 min)\n\nProjicera m\u00e5let. Introducera Alex \u2014 detta \u00e4r karakta\u0308ren vi f\u00f6ljer genom hela momentet (5 lektioner).\n\nBer\u00e4tta kort: \u201CAlex \u00e4r 19, precis f\u00e5tt sitt f\u00f6rsta jobb. Hen ska flytta hemifr\u00e5n och har aldrig gjort en budget. Vi ska f\u00f6lja Alex ekonomiska resa.\u201D");
  }

  // --- SLIDE 4: Kretsloppets akt\u00f6rer ---
  addContentSlide(
    pres,
    "Vilka \u00e4r spelarna i ekonomin?",
    [
      "Hush\u00e5ll \u2014 du, din familj, Alex (konsumerar och arbetar)",
      "F\u00f6retag \u2014 ICA, Volvo, det lager Alex jobbar p\u00e5 (producerar och anst\u00e4ller)",
      "Offentlig sektor \u2014 staten, regionen, kommunen (sjukv\u00e5rd, skola, polis)"
    ],
    "FAS 3: EXPLICIT INSTRUKTION (7\u201317 min)\n\nB\u00f6rja rita p\u00e5 tavlan: tre rutor/cirklar. Fr\u00e5ga eleverna: \u201CVilka tre grupper tror ni \u00e4r viktiga i ekonomin?\u201D\n\nF\u00f6rklara varje akt\u00f6r med vardagsexempel. Kontrollfr\u00e5ga: \u201CTill vilken akt\u00f6r h\u00f6r din familj?\u201D\n\nTidsuppskattning: 3 min"
  );

  // --- SLIDE 5: Worked example \u2014 F\u00f6lj Alex l\u00f6n ---
  addBigNumberSlide(
    pres,
    "25 000 kr",
    "Alex bruttol\u00f6n. Men vart tar pengarna v\u00e4gen?",
    "Vi f\u00f6ljer pengarna steg f\u00f6r steg genom kretsloppet.",
    "FAS 3 forts. (worked example)\n\n\u201CAlex f\u00e5r 25 000 kr i bruttol\u00f6n. Men hur mycket landar p\u00e5 kontot? Och vart g\u00e5r resten?\u201D\n\nRita p\u00e5 tavlan medan du pratar. Varje steg \u00e4r en pil i kretsloppet.\n\nTidsuppskattning: 2 min"
  );

  // --- SLIDE 6: Kretsloppet steg f\u00f6r steg ---
  addContentSlide(
    pres,
    "F\u00f6lj pengarna genom kretsloppet",
    [
      "Steg 1: F\u00f6retaget betalar l\u00f6n till Alex (f\u00f6retag \u2192 hush\u00e5ll)",
      "Steg 2: Alex betalar skatt (hush\u00e5ll \u2192 offentlig sektor)",
      "Steg 3: Alex k\u00f6per mat p\u00e5 ICA (hush\u00e5ll \u2192 f\u00f6retag)"
    ],
    "FAS 3 forts.\n\nRita varje pil p\u00e5 tavlan successivt. Stoppa efter varje steg:\n\u2022 \u201CVem f\u00e5r pengarna nu?\u201D\n\u2022 \u201CVad g\u00f6r de med dem?\u201D\n\nKontrollfr\u00e5ga till klassen efter steg 2: \u201CVad anv\u00e4nder staten skatten till?\u201D\n\nTidsuppskattning: 3 min"
  );

  // --- SLIDE 7: Cirkeln sluts ---
  addContentSlide(
    pres,
    "Cirkeln sluts \u2014 pengarna stannar aldrig",
    [
      "Steg 4: F\u00f6retaget betalar l\u00f6ner och skatt (f\u00f6retag \u2192 offentlig sektor)",
      "Steg 5: Offentlig sektor ger v\u00e4lf\u00e4rd tillbaka (skola, v\u00e5rd, v\u00e4gar)",
      "D\u00e4rf\u00f6r kallas det ett kretslopp \u2014 pengarna g\u00e5r runt och runt"
    ],
    "FAS 3 forts.\n\nKomplettera tavlans rita. Visa att det \u00e4r en cirkel, inte en rak linje.\n\nKontrollfr\u00e5ga: \u201CVad f\u00e5r Alex tillbaka fr\u00e5n den skatt hen betalar?\u201D (sjukv\u00e5rd, v\u00e4gar, polis, etc.)\n\nSammanfatta: \u201CAllt h\u00e4nger ihop. N\u00e4r Alex k\u00f6per mat p\u00e5verkar det inte bara ICA utan hela kedjan.\u201D\n\nTidsuppskattning: 2 min"
  );

  // --- SLIDE 8: Diskussionspaus ---
  addDiscussionSlide(
    pres,
    "Vad h\u00e4nder om Alex slutar handla p\u00e5 ICA?",
    "Diskutera med din granne i 1 minut. T\u00e4nk p\u00e5 alla tre akt\u00f6rerna.",
    "KORT DISKUSSIONSPAUS (inne i fas 3)\n\nL\u00e5t eleverna prata 1 minut. Lyssna p\u00e5 vad de s\u00e4ger. Lyft 1\u20132 r\u00f6ster.\n\nSyfte: Kontrollera f\u00f6rst\u00e5else innan vi g\u00e5r vidare till guidad \u00f6vning.\n\nTidsuppskattning: 1\u20132 min"
  );

  // --- SLIDE 9: Uppgift \u2014 Begreppskartan ---
  {
    let slide = pres.addSlide();
    slide.background = { color: WHITE };
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 0.06, h: 5.625, fill: { color: ACCENT }
    });

    slide.addText("Er uppgift: Bygg kretsloppet!", {
      x: 0.8, y: 0.3, w: 8.4, h: 0.7,
      fontSize: 28, fontFace: HEADER_FONT, color: TEXT_DARK,
      bold: true, align: "left", margin: 0
    });

    // Instruction card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.8, y: 1.2, w: 8.4, h: 3.8,
      fill: { color: LIGHT }, shadow: makeShadow()
    });

    slide.addText([
      { text: "Rita tre rutor: HUSH\u00c5LL (Alex), F\u00d6RETAG, OFFENTLIG SEKTOR", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT, color: TEXT_DARK, bold: true } },
      { text: "Dra pilar mellan dem med text: l\u00f6n, skatt, konsumtion, v\u00e4lf\u00e4rd", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT, color: TEXT_DARK, bold: true } },
      { text: "Utg\u00e5 fr\u00e5n Alex vardag \u2014 f\u00f6lj pengarna!", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT, color: TEXT_DARK, bold: true } },
      { text: "M\u00e5l: minst 5 pilar med beskrivande text", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT, color: TEXT_DARK, bold: true } },
      { text: " ", options: { breakLine: true, fontSize: 8 } },
      { text: "Tid: 15 minuter i grupper om 3\u20134", options: { fontSize: 14, fontFace: BODY_FONT, color: PRIMARY, italic: true } },
    ], {
      x: 1.2, y: 1.5, w: 7.6, h: 3.2, valign: "top", margin: 0
    });

    slide.addNotes("FAS 4: GUIDAD \u00d6VNING (17\u201335 min)\n\nDela in i grupper om 3\u20134. Dela ut A3-papper.\n\nL\u00e4rarens roll:\n\u2022 Cirkulera aktivt\n\u2022 \u201CVart g\u00e5r skatten?\u201D \u201CVem betalar f\u00f6r sjukv\u00e5rden?\u201D\n\u2022 Vanligt missf\u00f6rst\u00e5nd: elever gl\u00f6mmer offentlig sektor\n\u2022 Klara tidigt? \u201CVad h\u00e4nder om f\u00f6retaget g\u00e5r i konkurs?\u201D\n\nEfter 12 min: en grupp presenterar (2 min), du fyller i det som saknas.\n\nDifferentiering mot E: f\u00f6rifylld karta med 2 pilar redan ifyllda.\nDifferentiering mot A: l\u00e4gg till banker och l\u00e5n i kretsloppet.");
  }

  // --- SLIDE 10: Till\u00e4mpningsuppgift ---
  {
    let slide = pres.addSlide();
    slide.background = { color: DARK };

    slide.addText("Alex sparar h\u00e5rt i tre m\u00e5nader", {
      x: 0.8, y: 0.3, w: 8.4, h: 0.7,
      fontSize: 28, fontFace: HEADER_FONT, color: WHITE,
      bold: true, align: "left", margin: 0
    });

    slide.addText("Alex best\u00e4mmer sig f\u00f6r att bara k\u00f6pa det allra n\u00f6dv\u00e4ndigaste.", {
      x: 0.8, y: 1.1, w: 8.4, h: 0.5,
      fontSize: 16, fontFace: BODY_FONT, color: TEXT_LIGHT,
      italic: true, align: "left", margin: 0
    });

    // Three question cards
    const questions = [
      { letter: "a", q: "Vad h\u00e4nder med\nf\u00f6retagen i Alex\nn\u00e4romr\u00e5de?" },
      { letter: "b", q: "Vad h\u00e4nder med\nskatteint\u00e4kterna?" },
      { letter: "c", q: "Vad h\u00e4nder med\nde anst\u00e4llda\np\u00e5 f\u00f6retagen?" },
    ];

    questions.forEach((item, i) => {
      const x = 0.8 + i * 3.0;
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x, y: 1.9, w: 2.6, h: 2.8,
        fill: { color: PRIMARY }, shadow: makeShadow()
      });
      slide.addText(item.letter + ")", {
        x: x + 0.2, y: 2.0, w: 2.2, h: 0.5,
        fontSize: 24, fontFace: HEADER_FONT, color: ACCENT,
        bold: true, margin: 0
      });
      slide.addText(item.q, {
        x: x + 0.2, y: 2.5, w: 2.2, h: 2.0,
        fontSize: 15, fontFace: BODY_FONT, color: WHITE,
        align: "left", valign: "top", margin: 0
      });
    });

    slide.addText("Skriv med egna ord. Anv\u00e4nd g\u00e4rna er begreppskarta!", {
      x: 0.8, y: 5.0, w: 8.4, h: 0.4,
      fontSize: 13, fontFace: BODY_FONT, color: ACCENT,
      italic: true, margin: 0
    });

    slide.addNotes("FAS 5: SJ\u00c4LVST\u00c4NDIG \u00d6VNING (35\u201350 min)\n\nEnskilt (8 min): Eleverna skriver svar p\u00e5 alla tre fr\u00e5gor.\n\nSedan EPA (7 min):\n\u2022 Par: diskutera 3 min\n\u2022 3 par delar med helklass\n\nDifferentiering mot E: Meningsstartar:\n\u201CN\u00e4r Alex slutar handla p\u00e5verkas f\u00f6retagen genom att...\u201D\n\u201CDet leder till att skatteint\u00e4kterna...\u201D\n\u201CF\u00f6r de anst\u00e4llda inneb\u00e4r det att...\u201D\n\nDifferentiering mot A:\n\u201CVad h\u00e4nder om ALLA i samh\u00e4llet g\u00f6r som Alex? Koppla till h\u00f6g- och l\u00e5gkonjunktur.\u201D");
  }

  // --- SLIDE 11: Exit ticket ---
  {
    let slide = pres.addSlide();
    slide.background = { color: PRIMARY };

    slide.addText("Exit ticket", {
      x: 0.8, y: 0.4, w: 8.4, h: 0.6,
      fontSize: 16, fontFace: BODY_FONT, color: ACCENT,
      bold: true, align: "left", margin: 0
    });

    slide.addText("F\u00f6rklara med egna ord:", {
      x: 0.8, y: 1.2, w: 8.4, h: 0.5,
      fontSize: 18, fontFace: BODY_FONT, color: WHITE,
      align: "center", margin: 0
    });

    slide.addText("Varf\u00f6r p\u00e5verkas hela samh\u00e4llet\nn\u00e4r en enda person \u00e4ndrar sina k\u00f6pvanor?", {
      x: 0.8, y: 1.8, w: 8.4, h: 1.5,
      fontSize: 28, fontFace: HEADER_FONT, color: WHITE,
      bold: true, align: "center", valign: "middle", margin: 0
    });

    // Instruction box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2.0, y: 3.8, w: 6.0, h: 1.2,
      fill: { color: DARK, transparency: 30 }
    });
    slide.addText([
      { text: "Skriv p\u00e5 en lapp (3 minuter)", options: { breakLine: true, fontSize: 15, fontFace: BODY_FONT, color: WHITE, bold: true } },
      { text: "L\u00e4mna in till l\u00e4raren n\u00e4r du g\u00e5r", options: { fontSize: 14, fontFace: BODY_FONT, color: TEXT_LIGHT } },
    ], {
      x: 2.2, y: 3.9, w: 5.6, h: 1.0, align: "center", valign: "middle", margin: 0
    });

    slide.addNotes("FAS 6: AVSLUT (50\u201357 min)\n\nExit ticket: 3 minuter tyst skrivande.\n\nLappar in till l\u00e4raren.\n\nSortera snabbt i tre h\u00f6gar:\n1. F\u00f6rstod (klar koppling individ \u2192 samh\u00e4lle)\n2. Os\u00e4ker (n\u00e4mner n\u00e5got men otydlig koppling)\n3. Missade (bara om individen, inte samh\u00e4llet)\n\nH\u00f6g 2\u20133 informerar lektion 2:s retrieval review.");
  }

  // --- SLIDE 12: Preview + avslut ---
  {
    let slide = pres.addSlide();
    slide.background = { color: DARK };

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: ACCENT }
    });

    slide.addText("N\u00e4sta g\u00e5ng:", {
      x: 0.8, y: 1.5, w: 8.4, h: 0.6,
      fontSize: 18, fontFace: BODY_FONT, color: ACCENT,
      bold: true, align: "left", margin: 0
    });

    slide.addText("Alex ska s\u00f6ka jobb.\nVem f\u00e5r jobben \u2014 och p\u00e5 vilka villkor?", {
      x: 0.8, y: 2.2, w: 8.4, h: 1.5,
      fontSize: 32, fontFace: HEADER_FONT, color: WHITE,
      bold: true, align: "left", valign: "top", margin: 0
    });

    slide.addText("Lektion 2: Arbetsmarknaden f\u00f6r unga", {
      x: 0.8, y: 4.2, w: 8.4, h: 0.5,
      fontSize: 14, fontFace: BODY_FONT, color: TEXT_MUTED,
      italic: true, margin: 0
    });

    slide.addNotes("AVSLUT (sista minuten)\n\n\u00c5terkoppla till m\u00e5let: \u201CTitta p\u00e5 m\u00e5let igen \u2014 kan ni nu f\u00f6rklara vart Alex pengar tar v\u00e4gen?\u201D\n\nPreview: \u201CN\u00e4sta g\u00e5ng ska Alex s\u00f6ka jobb. Vi tittar p\u00e5 arbetsmarknaden f\u00f6r unga.\u201D");
  }

  // --- WRITE FILE ---
  const outputPath = __dirname + "/presentation-lektion-1.pptx";
  await pres.writeFile({ fileName: outputPath });
  console.log("Generated: " + outputPath);
}

main().catch(err => { console.error(err); process.exit(1); });
