const PptxGenJS = require("pptxgenjs");

const pres = new PptxGenJS();
pres.layout = "LAYOUT_16x9";
pres.author = "Anders";
pres.title = "Mellankrigstiden";

// Colors
const BERRY = "6D2E46";
const DUSTY_ROSE = "A26769";
const CREAM = "ECE2D0";
const WHITE = "FFFFFF";
const DARK_TEXT = "2D2D2D";

// Font helpers
const headerFont = "Georgia";
const bodyFont = "Calibri";

// Factory functions for text options - NEVER reuse objects
function titleText(text, opts = {}) {
  return {
    text,
    options: {
      fontFace: headerFont,
      fontSize: opts.fontSize || 36,
      color: opts.color || WHITE,
      bold: true,
      align: "center",
      ...opts,
    },
  };
}

function bodyText(text, opts = {}) {
  return {
    text,
    options: {
      fontFace: bodyFont,
      fontSize: opts.fontSize || 18,
      color: opts.color || DARK_TEXT,
      align: opts.align || "left",
      ...opts,
    },
  };
}

function bulletItem(text, opts = {}) {
  return {
    text,
    options: {
      fontFace: bodyFont,
      fontSize: opts.fontSize || 18,
      color: opts.color || DARK_TEXT,
      bullet: true,
      align: "left",
      ...opts,
    },
  };
}

// ─── SLIDE 1: Title ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: BERRY };

  slide.addText(
    [
      titleText("Mellankrigstiden", { fontSize: 44 }),
      { text: "", options: { fontSize: 12, breakLine: true } },
      bodyText("Varfor blev demokratier diktaturer?", {
        fontSize: 22,
        color: "D4B5C0",
        italic: true,
        align: "center",
      }),
      { text: "", options: { fontSize: 10, breakLine: true } },
      bodyText("Historia 1b", {
        fontSize: 16,
        color: "D4B5C0",
        align: "center",
      }),
    ],
    { x: 0.5, y: 1.2, w: 9.0, h: 3.2, align: "center" }
  );

  // Decorative bottom line
  slide.addShape(pres.ShapeType.rect, {
    x: 3.0,
    y: 4.5,
    w: 4.0,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  slide.addNotes(
    "TIDSATGANG: 1 min\nVALKOMNA eleverna. Presentera momentets overordnade fraga: Varfor blev demokratier diktaturer under mellankrigstiden? Denna fraga ar den roda traden genom hela momentet."
  );
})();

// ─── SLIDE 2: Hook ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: BERRY };

  slide.addText(
    [
      bodyText(
        "1920: nastan alla europeiska lander var demokratier.",
        {
          fontSize: 24,
          color: WHITE,
          align: "center",
        }
      ),
      { text: "", options: { fontSize: 16, breakLine: true } },
      bodyText(
        "1939: de flesta var diktaturer.",
        {
          fontSize: 24,
          color: WHITE,
          align: "center",
          bold: true,
        }
      ),
      { text: "", options: { fontSize: 20, breakLine: true } },
      bodyText("Hur kunde det handa?", {
        fontSize: 28,
        color: DUSTY_ROSE,
        align: "center",
        italic: true,
        bold: true,
      }),
    ],
    { x: 1.0, y: 1.0, w: 8.0, h: 3.5, align: "center" }
  );

  slide.addNotes(
    "TIDSATGANG: 2 min\nLas pastaendena hogt och lat dem sjunka in. Fraga eleverna: Vad tror ni hande? Lat nagra elever svara kort. Syftet ar att vacka nyfikenhet och skapa en gemensam undran."
  );
})();

// ─── SLIDE 3: Goals ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: CREAM };

  slide.addText("Larandemal", {
    x: 0.6,
    y: 0.3,
    w: 8.8,
    h: 0.8,
    fontFace: headerFont,
    fontSize: 32,
    color: BERRY,
    bold: true,
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 1.05,
    w: 2.0,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  slide.addText(
    [
      bulletItem("Forsta orsakerna till demokratins fall under mellankrigstiden", { fontSize: 17 }),
      bulletItem("Kunna forklara vad fascism och nazism innebar", { fontSize: 17, breakLine: true }),
      bulletItem("Analysera hur propaganda anvandes for att paverka manniskor", { fontSize: 17, breakLine: true }),
      bulletItem("Diskutera sambanden mellan ekonomisk kris och politisk extremism", { fontSize: 17, breakLine: true }),
      bulletItem("Ova pa att granska kallor med kallkritiska fragor", { fontSize: 17, breakLine: true }),
    ],
    { x: 0.6, y: 1.3, w: 8.8, h: 3.5, valign: "top" }
  );

  slide.addNotes(
    "TIDSATGANG: 2 min\nGa igenom larandemalen. Forklara att momentet ar upplagt over 4 lektioner och att de kommer att arbeta med bade faktakunskap, diskussioner och kallanalys."
  );
})();

// ─── SLIDE 4: Versaillesfreden ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: CREAM };

  slide.addText("Vilka konsekvenser fick Versaillesfreden?", {
    x: 0.6,
    y: 0.3,
    w: 8.8,
    h: 0.8,
    fontFace: headerFont,
    fontSize: 28,
    color: BERRY,
    bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 1.05,
    w: 2.5,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  // Left column - key points
  slide.addText(
    [
      bulletItem("Krigsskulden - Tyskland fick hela skulden for kriget", { fontSize: 16, breakLine: true }),
      bulletItem("Territoriefrluster - Alsace-Lorraine, kolonier, polska korridoren", { fontSize: 16, breakLine: true }),
      bulletItem("Ekonomiska krav - enorma skadestand som krossade ekonomin", { fontSize: 16, breakLine: true }),
    ],
    { x: 0.6, y: 1.3, w: 5.5, h: 3.0, valign: "top" }
  );

  // Right column - context box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.5,
    y: 1.3,
    w: 3.2,
    h: 2.5,
    fill: { color: WHITE },
    rectRadius: 0.1,
    shadow: { type: "outer", blur: 4, offset: 2, color: "CCCCCC", opacity: 0.3 },
  });

  slide.addText(
    [
      bodyText("Nyckelfakta", {
        fontSize: 15,
        color: BERRY,
        bold: true,
        align: "center",
      }),
      { text: "", options: { fontSize: 6, breakLine: true } },
      bodyText("132 miljarder guldmark i skadestand", {
        fontSize: 13,
        align: "center",
      }),
      { text: "", options: { fontSize: 4, breakLine: true } },
      bodyText("Artikel 231 - krigsansvarsparagrafen", {
        fontSize: 13,
        align: "center",
      }),
    ],
    { x: 6.6, y: 1.4, w: 3.0, h: 2.3, valign: "middle" }
  );

  slide.addNotes(
    "TIDSATGANG: 5-7 min\nForklara Versaillesfredens tre huvudkonsekvenser. Betona att manga tyskar upplevde freden som orattvis - detta ar avgirande for att forsta vad som hander sedan. Fraga: Hur skulle ni kanna om ert land behandlades sa har?"
  );
})();

// ─── SLIDE 5: Weimarrepubliken ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: CREAM };

  slide.addText("Varfor hade Weimarrepubliken sa svart?", {
    x: 0.6,
    y: 0.3,
    w: 8.8,
    h: 0.8,
    fontFace: headerFont,
    fontSize: 28,
    color: BERRY,
    bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 1.05,
    w: 2.5,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  // Three cards layout
  const cards = [
    { title: "Hyperinflation", body: "1923 kostade ett brod miljarder mark. Sparpengar blev vardelosa over en natt.", x: 0.4 },
    { title: "Politisk instabilitet", body: "Extremister fran bade hoger och vanster hotade republiken. Kuppforsok och mord.", x: 3.5 },
    { title: "Ny demokrati", body: "Inget demokratisk tradition. Manga saknade den gamla kejsardomen och ville ha en stark ledare.", x: 6.6 },
  ];

  cards.forEach((card) => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: card.x,
      y: 1.3,
      w: 2.8,
      h: 3.2,
      fill: { color: WHITE },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 4, offset: 2, color: "CCCCCC", opacity: 0.3 },
    });

    slide.addText(card.title, {
      x: card.x + 0.15,
      y: 1.5,
      w: 2.5,
      h: 0.5,
      fontFace: headerFont,
      fontSize: 18,
      color: BERRY,
      bold: true,
    });

    slide.addShape(pres.ShapeType.rect, {
      x: card.x + 0.15,
      y: 2.0,
      w: 1.5,
      h: 0.03,
      fill: { color: DUSTY_ROSE },
    });

    slide.addText(card.body, {
      x: card.x + 0.15,
      y: 2.2,
      w: 2.5,
      h: 2.0,
      fontFace: bodyFont,
      fontSize: 14,
      color: DARK_TEXT,
      valign: "top",
    });
  });

  slide.addNotes(
    "TIDSATGANG: 5-7 min\nForklara de tre utmaningarna en i taget. Anvand hyperinflationen som konkret exempel - visa hur priserna forandrades fran dag till dag. Koppla till elevernas varld: tanke er att era sparpengar blev vardelosa."
  );
})();

// ─── SLIDE 6: Discussion 1 ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: DUSTY_ROSE };

  slide.addText("Diskutera", {
    x: 0.5,
    y: 0.5,
    w: 9.0,
    h: 0.7,
    fontFace: headerFont,
    fontSize: 20,
    color: WHITE,
    italic: true,
    align: "center",
  });

  slide.addText(
    "Var demokratins fall oundvikligt\n- eller kunde det ha gatt annorlunda?",
    {
      x: 1.0,
      y: 1.5,
      w: 8.0,
      h: 2.5,
      fontFace: headerFont,
      fontSize: 30,
      color: WHITE,
      bold: true,
      align: "center",
      valign: "middle",
    }
  );

  slide.addShape(pres.ShapeType.rect, {
    x: 3.5,
    y: 4.3,
    w: 3.0,
    h: 0.04,
    fill: { color: WHITE },
  });

  slide.addText("Prata i par, 3 minuter", {
    x: 1.0,
    y: 4.5,
    w: 8.0,
    h: 0.6,
    fontFace: bodyFont,
    fontSize: 16,
    color: WHITE,
    align: "center",
    italic: true,
  });

  slide.addNotes(
    "TIDSATGANG: 5 min (3 min pardiskussion + 2 min helklass)\nLat eleverna diskutera i par. Paminn om att de ska anvanda det de lart sig om Versaillesfreden och Weimarrepubliken. Samla nagra svar i helklass efterat."
  );
})();

// ─── SLIDE 7: Den stora depressionen ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: CREAM };

  slide.addText("Hur paverkade depressionen politiken?", {
    x: 0.6,
    y: 0.3,
    w: 8.8,
    h: 0.8,
    fontFace: headerFont,
    fontSize: 28,
    color: BERRY,
    bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 1.05,
    w: 2.5,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  slide.addText(
    [
      bulletItem("Massarbetsloshet - miljontals manniskor forlorade jobbet och hoppet", { fontSize: 16, breakLine: true }),
      bulletItem("Forlorat fortroende - demokratiska politiker verkade maktlosa", { fontSize: 16, breakLine: true }),
      bulletItem("Extremism vaxte - bade kommunister och fascister lovade enkla losningar", { fontSize: 16, breakLine: true }),
    ],
    { x: 0.6, y: 1.3, w: 5.8, h: 2.5, valign: "top" }
  );

  // Timeline box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.5,
    y: 1.3,
    w: 3.2,
    h: 3.0,
    fill: { color: WHITE },
    rectRadius: 0.1,
    shadow: { type: "outer", blur: 4, offset: 2, color: "CCCCCC", opacity: 0.3 },
  });

  slide.addText(
    [
      bodyText("Tidslinje", {
        fontSize: 15,
        color: BERRY,
        bold: true,
        align: "center",
      }),
      { text: "", options: { fontSize: 6, breakLine: true } },
      bodyText("1929 - Borskraschen", { fontSize: 13, align: "center" }),
      bodyText("1930 - Arbetslosheten exploderar", { fontSize: 13, align: "center", breakLine: true }),
      bodyText("1932 - 6 milj. arbetslosa i Tyskland", { fontSize: 13, align: "center", breakLine: true }),
      bodyText("1933 - Hitler blir rikskansler", { fontSize: 13, align: "center", breakLine: true }),
    ],
    { x: 6.6, y: 1.4, w: 3.0, h: 2.8, valign: "middle" }
  );

  slide.addNotes(
    "TIDSATGANG: 5-7 min\nForklara sambandet mellan ekonomisk kris och politisk radikalisering. Nyckelpoang: nar manniskor ar desperata blir de mottagliga for extrema losningar. Anvand tidslinjen for att visa hur snabbt det gick."
  );
})();

// ─── SLIDE 8: Fascismen ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: CREAM };

  slide.addText("Vad ar fascism?", {
    x: 0.6,
    y: 0.3,
    w: 8.8,
    h: 0.8,
    fontFace: headerFont,
    fontSize: 32,
    color: BERRY,
    bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 1.05,
    w: 2.0,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  // Three characteristic cards
  const chars = [
    {
      title: "Ledarkultur",
      body: "En stark ledare som star over lagen. Folket ska lyda, inte ifragasatta.",
      x: 0.4,
    },
    {
      title: "Nationalism",
      body: "Nationen over allt. Vi mot dom. Det egna folket ar overlagset.",
      x: 3.5,
    },
    {
      title: "Antidemokrati",
      body: "Demokrati ses som svagt. Parlamentet ersatts av enpartistyre.",
      x: 6.6,
    },
  ];

  chars.forEach((c) => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: c.x,
      y: 1.3,
      w: 2.8,
      h: 3.2,
      fill: { color: WHITE },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 4, offset: 2, color: "CCCCCC", opacity: 0.3 },
    });

    slide.addText(c.title, {
      x: c.x + 0.15,
      y: 1.5,
      w: 2.5,
      h: 0.5,
      fontFace: headerFont,
      fontSize: 20,
      color: BERRY,
      bold: true,
      align: "center",
    });

    slide.addShape(pres.ShapeType.rect, {
      x: c.x + 0.6,
      y: 2.0,
      w: 1.6,
      h: 0.03,
      fill: { color: DUSTY_ROSE },
    });

    slide.addText(c.body, {
      x: c.x + 0.15,
      y: 2.2,
      w: 2.5,
      h: 2.0,
      fontFace: bodyFont,
      fontSize: 15,
      color: DARK_TEXT,
      align: "center",
      valign: "top",
    });
  });

  slide.addNotes(
    "TIDSATGANG: 5-7 min\nPresentera fascismens tre kannetecken. Borja med att fraga eleverna vad de redan vet om fascism. Anvand Mussolinis Italien som huvudexempel. Betona att fascism ar en ideologi som foraktar demokrati."
  );
})();

// ─── SLIDE 9: Nazismen ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: CREAM };

  slide.addText("Vad skiljer nazismen fran fascismen?", {
    x: 0.6,
    y: 0.3,
    w: 8.8,
    h: 0.8,
    fontFace: headerFont,
    fontSize: 28,
    color: BERRY,
    bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 1.05,
    w: 2.5,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  slide.addText(
    [
      bulletItem("Rasideologi - tron pa en arisk overras, pseudovetenskaplig rasbiologi", {
        fontSize: 16,
        breakLine: true,
      }),
      bulletItem("Antisemitism - judar utpekades som syndabockar for alla Tysklands problem", {
        fontSize: 16,
        breakLine: true,
      }),
      bulletItem("Hitlers vag till makten - fran olkallarkupp till rikskansler genom demokratiska val", {
        fontSize: 16,
        breakLine: true,
      }),
    ],
    { x: 0.6, y: 1.3, w: 8.8, h: 2.5, valign: "top" }
  );

  // Bottom emphasis box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.5,
    y: 3.8,
    w: 7.0,
    h: 1.2,
    fill: { color: BERRY },
    rectRadius: 0.1,
  });

  slide.addText(
    "Viktigt: Hitler kom till makten genom demokratiska val - inte genom en statskupp.",
    {
      x: 1.7,
      y: 3.9,
      w: 6.6,
      h: 1.0,
      fontFace: bodyFont,
      fontSize: 16,
      color: WHITE,
      bold: true,
      align: "center",
      valign: "middle",
    }
  );

  slide.addNotes(
    "TIDSATGANG: 5-7 min\nForklara hur nazismen bygger pa fascismen men lagger till rasideologin. Betona antisemitismen som central del. Viktigt att lyfta att Hitler anvande demokratin for att avskaffa den - detta ar en viktig lxa for vara dagar."
  );
})();

// ─── SLIDE 10: Discussion 2 ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: DUSTY_ROSE };

  slide.addText("Diskutera", {
    x: 0.5,
    y: 0.5,
    w: 9.0,
    h: 0.7,
    fontFace: headerFont,
    fontSize: 20,
    color: WHITE,
    italic: true,
    align: "center",
  });

  slide.addText(
    "Blev Hitler diktator tack vare sin skicklighet (aktor)\n- eller samhallets kriser (struktur)?",
    {
      x: 1.0,
      y: 1.3,
      w: 8.0,
      h: 2.5,
      fontFace: headerFont,
      fontSize: 28,
      color: WHITE,
      bold: true,
      align: "center",
      valign: "middle",
    }
  );

  slide.addShape(pres.ShapeType.rect, {
    x: 3.5,
    y: 4.0,
    w: 3.0,
    h: 0.04,
    fill: { color: WHITE },
  });

  slide.addText("Tips: Tanka pa bade personliga egenskaper och omstandigheter i samhallet", {
    x: 1.0,
    y: 4.2,
    w: 8.0,
    h: 0.8,
    fontFace: bodyFont,
    fontSize: 15,
    color: WHITE,
    align: "center",
    italic: true,
  });

  slide.addNotes(
    "TIDSATGANG: 5 min (3 min pardiskussion + 2 min helklass)\nDetta ar en central historievetenskaplig fraga: aktor vs struktur. Lat eleverna argumentera for bada sidor. I helklassdiskussionen, lyft att svaret ofta ar en kombination."
  );
})();

// ─── SLIDE 11: Propaganda ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: CREAM };

  slide.addText("Hur fungerade propagandan?", {
    x: 0.6,
    y: 0.3,
    w: 8.8,
    h: 0.8,
    fontFace: headerFont,
    fontSize: 30,
    color: BERRY,
    bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 1.05,
    w: 2.5,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  const items = [
    {
      title: "Goebbels - propagandaministern",
      body: "Joseph Goebbels kontrollerade all information. Hans uppdrag: fa folket att alska Hitler.",
      x: 0.4,
    },
    {
      title: "Kontroll av media",
      body: "Tidningar, bocker och konst censurerades. Bara det godkanda budskapet fick spridas.",
      x: 3.5,
    },
    {
      title: "Film och radio",
      body: "Nya medier anvandes for att na massorna. Leni Riefenstahls filmer glorifierade nazismen.",
      x: 6.6,
    },
  ];

  items.forEach((item) => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: item.x,
      y: 1.3,
      w: 2.8,
      h: 3.2,
      fill: { color: WHITE },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 4, offset: 2, color: "CCCCCC", opacity: 0.3 },
    });

    slide.addText(item.title, {
      x: item.x + 0.15,
      y: 1.5,
      w: 2.5,
      h: 0.6,
      fontFace: headerFont,
      fontSize: 16,
      color: BERRY,
      bold: true,
      align: "center",
    });

    slide.addShape(pres.ShapeType.rect, {
      x: item.x + 0.6,
      y: 2.1,
      w: 1.6,
      h: 0.03,
      fill: { color: DUSTY_ROSE },
    });

    slide.addText(item.body, {
      x: item.x + 0.15,
      y: 2.3,
      w: 2.5,
      h: 2.0,
      fontFace: bodyFont,
      fontSize: 14,
      color: DARK_TEXT,
      align: "center",
      valign: "top",
    });
  });

  slide.addNotes(
    "TIDSATGANG: 5-7 min\nForklara hur nazisterna anvande propaganda systematiskt. Visa konkreta exempel om mojligt (affischer, filmklipp). Betona att propaganda handlar om att kontrollera vad manniskor tanker genom att kontrollera vad de ser och hor."
  );
})();

// ─── SLIDE 12: Source Analysis ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: CREAM };

  slide.addText("Att granska kallor - propagandaanalys", {
    x: 0.6,
    y: 0.3,
    w: 8.8,
    h: 0.8,
    fontFace: headerFont,
    fontSize: 26,
    color: BERRY,
    bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 1.05,
    w: 2.5,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  // Four question cards in 2x2 grid
  const questions = [
    { q: "1. Vem?", detail: "Vem har skapat kallan? Vilken organisation eller person star bakom?", x: 0.5, y: 1.3 },
    { q: "2. Varfor?", detail: "Vad ar syftet? Vill avsandaren informera, overtyga eller manipulera?", x: 5.1, y: 1.3 },
    { q: "3. Nar?", detail: "I vilken tid skapades kallan? Vad hande da som kan paverka innehallet?", x: 0.5, y: 3.2 },
    { q: "4. Hur?", detail: "Vilka metoder anvands? Kanslor, overdrifter, utelamnanden?", x: 5.1, y: 3.2 },
  ];

  questions.forEach((item) => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: item.x,
      y: item.y,
      w: 4.3,
      h: 1.6,
      fill: { color: WHITE },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 3, offset: 2, color: "CCCCCC", opacity: 0.3 },
    });

    slide.addText(item.q, {
      x: item.x + 0.2,
      y: item.y + 0.1,
      w: 3.9,
      h: 0.5,
      fontFace: headerFont,
      fontSize: 20,
      color: BERRY,
      bold: true,
    });

    slide.addText(item.detail, {
      x: item.x + 0.2,
      y: item.y + 0.6,
      w: 3.9,
      h: 0.9,
      fontFace: bodyFont,
      fontSize: 14,
      color: DARK_TEXT,
    });
  });

  slide.addNotes(
    "TIDSATGANG: 5-7 min\nIntroducera de fyra kallkritiska fragorna. Forklara att dessa fragor hjalper oss att avsloja propaganda. Ge ett konkret exempel: visa en propagandaaffisch och ga igenom fragorna tillsammans."
  );
})();

// ─── SLIDE 13: Discussion 3 ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: DUSTY_ROSE };

  slide.addText("Diskutera", {
    x: 0.5,
    y: 0.5,
    w: 9.0,
    h: 0.7,
    fontFace: headerFont,
    fontSize: 20,
    color: WHITE,
    italic: true,
    align: "center",
  });

  slide.addText(
    "Finns det propaganda i samhallet idag?\nHur skiljer den sig fran 1930-talets?",
    {
      x: 1.0,
      y: 1.3,
      w: 8.0,
      h: 2.5,
      fontFace: headerFont,
      fontSize: 28,
      color: WHITE,
      bold: true,
      align: "center",
      valign: "middle",
    }
  );

  slide.addShape(pres.ShapeType.rect, {
    x: 3.5,
    y: 4.0,
    w: 3.0,
    h: 0.04,
    fill: { color: WHITE },
  });

  slide.addText("Tanka pa: sociala medier, reklam, politiska budskap", {
    x: 1.0,
    y: 4.2,
    w: 8.0,
    h: 0.8,
    fontFace: bodyFont,
    fontSize: 15,
    color: WHITE,
    align: "center",
    italic: true,
  });

  slide.addNotes(
    "TIDSATGANG: 5 min (3 min pardiskussion + 2 min helklass)\nDenna diskussion kopplar historien till nutiden. Lat eleverna jamfora 1930-talets propaganda med dagens informationspaverkan. Lyft exempel som deepfakes, trollfabriker, algoritmstyrda floden."
  );
})();

// ─── SLIDE 14: Closing ───
(function () {
  const slide = pres.addSlide();
  slide.background = { fill: BERRY };

  slide.addText("Varfor blev demokratier diktaturer?", {
    x: 0.5,
    y: 0.3,
    w: 9.0,
    h: 1.0,
    fontFace: headerFont,
    fontSize: 32,
    color: WHITE,
    bold: true,
    align: "center",
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 3.5,
    y: 1.3,
    w: 3.0,
    h: 0.04,
    fill: { color: DUSTY_ROSE },
  });

  slide.addText(
    [
      bulletItem("En orattvis fred som skapade bitterhet och hamndbegar", {
        fontSize: 17,
        color: WHITE,
        breakLine: true,
      }),
      bulletItem("Ekonomiska kriser som krossade manniskors trygghet", {
        fontSize: 17,
        color: WHITE,
        breakLine: true,
      }),
      bulletItem("Extrema ideologier som lovade ordning och storhet", {
        fontSize: 17,
        color: WHITE,
        breakLine: true,
      }),
      bulletItem("Propaganda som tystade kritik och manipulerade massorna", {
        fontSize: 17,
        color: WHITE,
        breakLine: true,
      }),
      bulletItem("Ledare som anvande demokratin for att avskaffa den", {
        fontSize: 17,
        color: WHITE,
        breakLine: true,
      }),
    ],
    { x: 1.5, y: 1.6, w: 7.0, h: 3.0, valign: "top" }
  );

  // Bottom reflection
  slide.addText("Kan det handa igen?", {
    x: 1.0,
    y: 4.6,
    w: 8.0,
    h: 0.6,
    fontFace: headerFont,
    fontSize: 22,
    color: DUSTY_ROSE,
    italic: true,
    align: "center",
  });

  slide.addNotes(
    "TIDSATGANG: 3-5 min\nSammanfatta momentets viktigaste lardomar. Ga igenom punkterna och koppla tillbaka till den overgripande fragan. Avsluta med den provocerande fragan 'Kan det handa igen?' - lat den hanga i luften som en reflektion."
  );
})();

// Generate the file
const outputPath = "/home/anders/Second brain/Undervisningsmaterial/Historia/Mellankrigstiden/presentation-mellankrigstiden.pptx";
pres.writeFile({ fileName: outputPath }).then(() => {
  console.log("Presentation saved to:", outputPath);
  console.log("Slides:", pres.slides.length);
}).catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
