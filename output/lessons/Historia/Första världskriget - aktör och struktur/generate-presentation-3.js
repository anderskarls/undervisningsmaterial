const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Historia 1b";
pres.title = "Skyttegravarna och världen";

const DARK = "1A1A2E";
const ACCENT = "C0392B";
const LIGHT_BG = "F8F5F0";
const CARD_BG = "FFFFFF";
const MUTED = "5D6D7E";
const HEADER_FONT = "Georgia";
const BODY_FONT = "Calibri";

const makeShadow = () => ({ type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.10 });

// --- SLIDE 1: Title ---
let s1 = pres.addSlide();
s1.background = { color: DARK };
s1.addText("SKYTTEGRAVARNA\nOCH VÄRLDEN", {
  x: 0.8, y: 1.0, w: 8.4, h: 2.2,
  fontSize: 44, fontFace: HEADER_FONT, color: "FFFFFF", bold: true,
  lineSpacingMultiple: 1.1
});
s1.addText("Krigets förlopp, teknik och konsekvenser", {
  x: 0.8, y: 3.2, w: 8.4, h: 0.6,
  fontSize: 18, fontFace: BODY_FONT, color: "AAAAAA"
});
s1.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 4.0, w: 1.5, h: 0.06, fill: { color: ACCENT }
});
s1.addText("Historia 1b  |  Första världskriget - aktör och struktur", {
  x: 0.8, y: 4.3, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: "888888"
});

// --- SLIDE 2: Chocksiffror ---
let s2 = pres.addSlide();
s2.background = { color: DARK };
s2.addText("SIFFROR SOM CHOCKAR", {
  x: 0.8, y: 0.3, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 6
});

const stats = [
  { num: "60 000", desc: "brittiska soldater föll på EN dag\nSlaget vid Somme, 1 juli 1916" },
  { num: "315 000", desc: "franska soldater dog vid Verdun\n10 månaders helvete, 1916" },
  { num: "400 000", desc: "man offrades för 8 kilometer\nPasschendaele, 1917" },
];

stats.forEach((s, i) => {
  const y = 1.1 + i * 1.4;
  s2.addText(s.num, {
    x: 0.8, y, w: 3.0, h: 1.0,
    fontSize: 48, fontFace: HEADER_FONT, color: ACCENT, bold: true, valign: "middle", margin: 0
  });
  s2.addText(s.desc, {
    x: 4.0, y, w: 5.5, h: 1.0,
    fontSize: 15, fontFace: BODY_FONT, color: "CCCCCC", valign: "middle",
    lineSpacingMultiple: 1.3
  });
});

s2.addText("Varför fortsatte generalerna skicka soldater?", {
  x: 0.8, y: 4.8, w: 8.4, h: 0.4,
  fontSize: 16, fontFace: BODY_FONT, color: "999999", italic: true, align: "center"
});

// --- SLIDE 3: Tre dimensioner ---
let s3 = pres.addSlide();
s3.background = { color: LIGHT_BG };
s3.addText("Krigets tre dimensioner", {
  x: 0.8, y: 0.3, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});

const dims = [
  { title: "TEKNIKEN", subtitle: "struktur", items: "Kulsprutor, taggtråd\nStridsvagnar, giftgas\nUbåtar drog in USA", color: ACCENT },
  { title: "DET GLOBALA", subtitle: "struktur", items: "Koloniala soldater\nOsmanska rikets fall\nArabiska revolten 1916", color: "2C3E50" },
  { title: "HEMMAFRONTEN", subtitle: "aktör + struktur", items: "Kvinnor i fabriker\nPropaganda\nBlockad, ransonering", color: "8E44AD" },
];

dims.forEach((d, i) => {
  const x = 0.6 + i * 3.1;
  s3.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.3, w: 2.9, h: 3.5, fill: { color: CARD_BG },
    shadow: makeShadow()
  });
  s3.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.3, w: 2.9, h: 0.06, fill: { color: d.color }
  });
  s3.addText(d.title, {
    x: x + 0.2, y: 1.5, w: 2.5, h: 0.5,
    fontSize: 16, fontFace: HEADER_FONT, color: d.color, bold: true
  });
  s3.addText(d.subtitle, {
    x: x + 0.2, y: 1.9, w: 2.5, h: 0.3,
    fontSize: 11, fontFace: BODY_FONT, color: MUTED, italic: true
  });
  s3.addText(d.items, {
    x: x + 0.2, y: 2.4, w: 2.5, h: 2.2,
    fontSize: 13, fontFace: BODY_FONT, color: DARK, lineSpacingMultiple: 1.5
  });
});

// --- SLIDE 4: Teknik i detalj ---
let s4 = pres.addSlide();
s4.background = { color: LIGHT_BG };
s4.addText("TEKNIKEN", {
  x: 0.8, y: 0.3, w: 3, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 4
});
s4.addText("Nya vapen förändrade kriget", {
  x: 0.8, y: 0.6, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});

const weapons = [
  { name: "Kulsprutor + taggtråd", effect: "Försvar överlägset anfall - skapade dödläget" },
  { name: "Stridsvagnar", effect: "Försök att bryta skyttegravskriget" },
  { name: "Giftgas", effect: "Nytt terrordvapen - kemisk krigföring" },
  { name: "Flygplan", effect: "Spaning och bombning - ny dimension" },
  { name: "Ubåtar", effect: "Sänkte civila fartyg - drog in USA" },
];

weapons.forEach((w, i) => {
  const y = 1.5 + i * 0.75;
  s4.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y, w: 8.4, h: 0.6, fill: { color: i % 2 === 0 ? CARD_BG : LIGHT_BG },
    shadow: i % 2 === 0 ? makeShadow() : undefined
  });
  s4.addText(w.name, {
    x: 1.1, y, w: 3.2, h: 0.6,
    fontSize: 15, fontFace: BODY_FONT, color: DARK, bold: true, valign: "middle", margin: 0
  });
  s4.addText(w.effect, {
    x: 4.5, y, w: 4.5, h: 0.6,
    fontSize: 14, fontFace: BODY_FONT, color: MUTED, valign: "middle", margin: 0
  });
});

s4.addText("Tekniken var en struktur - ingen enskild general valde dödläget", {
  x: 0.8, y: 4.8, w: 8.4, h: 0.4,
  fontSize: 13, fontFace: BODY_FONT, color: ACCENT, italic: true, align: "center"
});

// --- SLIDE 5: Det globala kriget ---
let s5 = pres.addSlide();
s5.background = { color: LIGHT_BG };
s5.addText("DET GLOBALA", {
  x: 0.8, y: 0.3, w: 3, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: "2C3E50", bold: true, charSpacing: 4
});
s5.addText("Inte bara Europas krig", {
  x: 0.8, y: 0.6, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});
s5.addText([
  { text: "Koloniala soldater", options: { breakLine: true, fontSize: 16, bold: true } },
  { text: "Miljontals soldater från Indien, Afrika och Australien stred på fronterna", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "Mellanöstern", options: { breakLine: true, fontSize: 16, bold: true } },
  { text: "Osmanska rikets fall och arabiska revolten 1916 formade regionen", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "USA:s inträde 1917", options: { breakLine: true, fontSize: 16, bold: true } },
  { text: "Ubåtskriget drog in världens mäktigaste ekonomi", options: { breakLine: true, fontSize: 14, color: MUTED } },
], { x: 0.8, y: 1.5, w: 8.4, h: 3.5, fontFace: BODY_FONT, color: DARK, valign: "top" });

// --- SLIDE 6: Hemmafronten ---
let s6 = pres.addSlide();
s6.background = { color: LIGHT_BG };
s6.addText("HEMMAFRONTEN", {
  x: 0.8, y: 0.3, w: 3, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: "8E44AD", bold: true, charSpacing: 4
});
s6.addText("Aktörer inom nya strukturer", {
  x: 0.8, y: 0.6, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});

// Two cards side by side
s6.addShape(pres.shapes.RECTANGLE, {
  x: 0.6, y: 1.5, w: 4.2, h: 2.8, fill: { color: CARD_BG },
  shadow: makeShadow()
});
s6.addText([
  { text: "Kvinnors nya roller", options: { breakLine: true, fontSize: 16, bold: true, color: "8E44AD" } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Kontorister, fabriksarbetare, lärare", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "Sjuksköterskeyrket professionaliserades", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Vera Brittain:", options: { breakLine: true, fontSize: 13, bold: true } },
  { text: "\"Krigets personliga kostnader\"", options: { fontSize: 13, italic: true, color: MUTED } },
], { x: 0.9, y: 1.7, w: 3.7, h: 2.4, fontFace: BODY_FONT, color: DARK, valign: "top" });

s6.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.5, w: 4.2, h: 2.8, fill: { color: CARD_BG },
  shadow: makeShadow()
});
s6.addText([
  { text: "Propaganda och blockad", options: { breakLine: true, fontSize: 16, bold: true, color: "8E44AD" } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Massläskunnighet + film = folkopinion styrs", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "Zeppelinare kallades \"baby-killers\"", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Tysk barndödlighet:", options: { breakLine: true, fontSize: 13, bold: true } },
  { text: "+50% mellan 1915 och 1917", options: { fontSize: 13, color: ACCENT, bold: true } },
], { x: 5.5, y: 1.7, w: 3.7, h: 2.4, fontFace: BODY_FONT, color: DARK, valign: "top" });

s6.addText("Var kvinnornas nya roller ett aktörsval eller en strukturell förändring?", {
  x: 0.8, y: 4.6, w: 8.4, h: 0.4,
  fontSize: 13, fontFace: BODY_FONT, color: MUTED, italic: true, align: "center"
});

// --- SLIDE 7: Diskussionsfråga ---
let s7 = pres.addSlide();
s7.background = { color: DARK };
s7.addText("DISKUTERA", {
  x: 0.8, y: 0.5, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 6
});
s7.addText("Kunde enskilda generaler\nha ändrat krigets förlopp,\neller var det strukturerna\nsom bestämde?", {
  x: 0.8, y: 1.3, w: 8.4, h: 2.5,
  fontSize: 30, fontFace: HEADER_FONT, color: "FFFFFF",
  lineSpacingMultiple: 1.3
});
s7.addText("Perspektivanalys: Soldaten | Generalen | Hemmafronten", {
  x: 0.8, y: 4.2, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: "999999", align: "center"
});

// --- SLIDE 8: Preview ---
let s8 = pres.addSlide();
s8.background = { color: DARK };
s8.addText("NÄSTA LEKTION", {
  x: 0.8, y: 0.5, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 6
});
s8.addText("Var kriget oundvikligt?\nNi tar ställning.", {
  x: 0.8, y: 1.5, w: 8.4, h: 2.0,
  fontSize: 30, fontFace: HEADER_FONT, color: "FFFFFF",
  lineSpacingMultiple: 1.3
});
s8.addText("Vi samlar ihop allt - strukturer, aktörer, julikrisen, krigets förlopp.\nNi besvarar den stora frågan.", {
  x: 0.8, y: 3.8, w: 8.4, h: 0.8,
  fontSize: 16, fontFace: BODY_FONT, color: "999999",
  lineSpacingMultiple: 1.4
});

pres.writeFile({ fileName: "presentation-lektion-3.pptx" })
  .then(() => console.log("presentation-lektion-3.pptx generated"))
  .catch(e => console.error(e));
