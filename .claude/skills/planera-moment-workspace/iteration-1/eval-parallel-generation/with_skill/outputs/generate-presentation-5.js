const pptxgen = require("pptxgenjs");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cornelius Agent";
pres.title = "Lektion 5: Min ekonomi, hela samhällets ekonomi";

// --- Color palette: Ocean/trust theme for economics ---
const PRIMARY = "1B4F72";      // deep navy
const SECONDARY = "2E86C1";    // medium blue
const ACCENT = "F39C12";       // warm amber
const LIGHT_BG = "F4F6F9";     // very light grey-blue
const DARK_BG = "0E2F44";      // very dark navy
const WHITE = "FFFFFF";
const TEXT_DARK = "2C3E50";
const TEXT_MID = "5D6D7E";
const TEXT_LIGHT = "AEB6BF";

const HEADER_FONT = "Georgia";
const BODY_FONT = "Calibri";

const makeShadow = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 });

// ============================================================
// SLIDE 1: Titelslide (dark)
// ============================================================
let s1 = pres.addSlide();
s1.background = { color: DARK_BG };

// Left accent bar
s1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.08, h: 5.625, fill: { color: ACCENT }
});

s1.addText("Lektion 5", {
  x: 0.8, y: 1.0, w: 8, h: 0.6,
  fontSize: 16, fontFace: BODY_FONT, color: ACCENT, bold: true,
  charSpacing: 4, margin: 0
});

s1.addText("Min ekonomi, hela\nsamhällets ekonomi", {
  x: 0.8, y: 1.6, w: 8, h: 1.8,
  fontSize: 40, fontFace: HEADER_FONT, color: WHITE, bold: true,
  lineSpacingMultiple: 1.1, margin: 0
});

s1.addText("Syntes och fördjupning", {
  x: 0.8, y: 3.5, w: 8, h: 0.5,
  fontSize: 18, fontFace: BODY_FONT, color: TEXT_LIGHT, italic: true, margin: 0
});

s1.addText("Samhällskunskap 1a1  |  Ungas ekonomi  |  60 min", {
  x: 0.8, y: 4.6, w: 8, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: TEXT_LIGHT, margin: 0
});

s1.addNotes("Talarnoter: Välkomna eleverna. Förklara att detta är momentets sista lektion - idag kopplar vi ihop allt vi lärt oss. (1 min)");

// ============================================================
// SLIDE 2: Retrieval review (5 min)
// ============================================================
let s2 = pres.addSlide();
s2.background = { color: LIGHT_BG };

s2.addText("Vad minns ni från hela momentet?", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 32, fontFace: HEADER_FONT, color: PRIMARY, bold: true, margin: 0
});

// Four cards in 2x2 grid
const cards = [
  { label: "Lektion 1", q: "Kretsloppet", icon: "1", color: "2E86C1" },
  { label: "Lektion 2", q: "Arbetsmarknaden", icon: "2", color: "27AE60" },
  { label: "Lektion 3", q: "Budgeten", icon: "3", color: "E67E22" },
  { label: "Lektion 4", q: "Riskerna", icon: "4", color: "C0392B" },
];

cards.forEach((c, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const cx = 0.7 + col * 4.5;
  const cy = 1.3 + row * 1.8;

  s2.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: cy, w: 4.0, h: 1.4,
    fill: { color: WHITE }, shadow: makeShadow()
  });
  // Number circle
  s2.addShape(pres.shapes.OVAL, {
    x: cx + 0.2, y: cy + 0.3, w: 0.6, h: 0.6,
    fill: { color: c.color }
  });
  s2.addText(c.icon, {
    x: cx + 0.2, y: cy + 0.3, w: 0.6, h: 0.6,
    fontSize: 18, fontFace: BODY_FONT, color: WHITE, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  s2.addText(c.label, {
    x: cx + 1.0, y: cy + 0.2, w: 2.8, h: 0.4,
    fontSize: 14, fontFace: BODY_FONT, color: TEXT_MID, bold: true, margin: 0
  });
  s2.addText(`Skriv en sak om\n${c.q.toLowerCase()}`, {
    x: cx + 1.0, y: cy + 0.6, w: 2.8, h: 0.6,
    fontSize: 14, fontFace: BODY_FONT, color: TEXT_DARK, margin: 0
  });
});

s2.addText("2 min enskilt \u2192 2 min i par \u2192 1 min helklass", {
  x: 0.5, y: 5.0, w: 9, h: 0.4,
  fontSize: 13, fontFace: BODY_FONT, color: TEXT_MID, italic: true, align: "center", margin: 0
});

s2.addNotes("Talarnoter (5 min): Retrieval review som täcker HELA momentet. Ge eleverna 2 min att skriva enskilt, sedan 2 min i par att dela och komplettera. Avsluta med 1 min snabb helklassgenomgång. Rita momentets röda tråd på tavlan medan de delar.");

// ============================================================
// SLIDE 3: Målaktivering (2 min)
// ============================================================
let s3 = pres.addSlide();
s3.background = { color: DARK_BG };

s3.addText("Dagens utmaning", {
  x: 0.5, y: 0.4, w: 9, h: 0.6,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, bold: true,
  charSpacing: 3, margin: 0
});

s3.addText("Kan ni visa hur Alex val\npåverkar hela samhället\n- och tvärtom?", {
  x: 0.5, y: 1.0, w: 9, h: 2.5,
  fontSize: 36, fontFace: HEADER_FONT, color: WHITE, bold: true,
  align: "center", valign: "middle", margin: 0
});

// Progression arrows
s3.addText("Individens val  \u2192  Arbetsmarknaden  \u2192  Kretsloppet  \u2192  Samhället", {
  x: 0.5, y: 3.8, w: 9, h: 0.5,
  fontSize: 16, fontFace: BODY_FONT, color: ACCENT, align: "center", margin: 0
});

s3.addText("Idag kopplar vi ihop allt vi lärt oss under momentet", {
  x: 0.5, y: 4.6, w: 9, h: 0.4,
  fontSize: 14, fontFace: BODY_FONT, color: TEXT_LIGHT, italic: true, align: "center", margin: 0
});

s3.addNotes("Talarnoter (2 min): Presentera dagens mål. Visa att detta är momentets sista lektion - allt ska kopplas ihop. Visa den röda tråden. Utmaningen: gå från enskilda delar till helheten.");

// ============================================================
// SLIDE 4: Instruktion - Så skriver man en bra analys
// ============================================================
let s4 = pres.addSlide();
s4.background = { color: WHITE };

s4.addText("Vad skiljer ett starkt svar från ett svagt?", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 30, fontFace: HEADER_FONT, color: PRIMARY, bold: true, margin: 0
});

// Two columns: A-nivå vs E-nivå
// A-column
s4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 3.6,
  fill: { color: "EBF5FB" }, shadow: makeShadow()
});
s4.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.2, w: 4.3, h: 0.5,
  fill: { color: "27AE60" }
});
s4.addText("A-nivå", {
  x: 0.5, y: 1.2, w: 4.3, h: 0.5,
  fontSize: 16, fontFace: BODY_FONT, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
});
s4.addText([
  { text: "Kopplingar", options: { bold: true, breakLine: true, fontSize: 13 } },
  { text: "individ \u2192 kretslopp \u2192 samhälle", options: { breakLine: true, fontSize: 13 } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Flera perspektiv", options: { bold: true, breakLine: true, fontSize: 13 } },
  { text: "individ, arbetsgivare, samhälle", options: { breakLine: true, fontSize: 13 } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Komplexa samband", options: { bold: true, breakLine: true, fontSize: 13 } },
  { text: "\"om en hel generation har\nosäkra inkomster minskar\nbåde konsumtion och skatteintäkter\"", options: { italic: true, fontSize: 12 } },
], {
  x: 0.8, y: 1.85, w: 3.7, h: 2.8,
  fontFace: BODY_FONT, color: TEXT_DARK, valign: "top", margin: 0
});

// E-column
s4.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 3.6,
  fill: { color: "FDEBD0" }, shadow: makeShadow()
});
s4.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.2, w: 4.3, h: 0.5,
  fill: { color: "E67E22" }
});
s4.addText("E-nivå", {
  x: 5.2, y: 1.2, w: 4.3, h: 0.5,
  fontSize: 16, fontFace: BODY_FONT, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
});
s4.addText([
  { text: "Beskrivning utan koppling", options: { bold: true, breakLine: true, fontSize: 13 } },
  { text: "\"Alex jobbar och får lön\"", options: { italic: true, breakLine: true, fontSize: 13 } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Ett perspektiv", options: { bold: true, breakLine: true, fontSize: 13 } },
  { text: "bara individens", options: { breakLine: true, fontSize: 13 } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Enkla samband", options: { bold: true, breakLine: true, fontSize: 13 } },
  { text: "\"Det påverkar Alex ekonomi\"", options: { italic: true, fontSize: 12 } },
], {
  x: 5.5, y: 1.85, w: 3.7, h: 2.8,
  fontFace: BODY_FONT, color: TEXT_DARK, valign: "top", margin: 0
});

s4.addText("Nyckeln: det handlar inte om längd - det handlar om kopplingar och perspektiv", {
  x: 0.5, y: 5.0, w: 9, h: 0.4,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, bold: true, align: "center", margin: 0
});

s4.addNotes("Talarnoter (5 min): Visa A-nivå exempelsvaret först. Läs högt, markera kopplingarna: 'Här kopplar skribenten privatekonomin till kretsloppet - det är ett komplext samband.' Visa sedan E-nivå: 'Vad saknas?' Låt eleverna identifiera skillnaderna. Betona att det handlar om kopplingar och perspektiv, inte längd.");

// ============================================================
// SLIDE 5: Diskussionsslide
// ============================================================
let s5 = pres.addSlide();
s5.background = { color: PRIMARY };

s5.addText("Diskutera med din granne (2 min)", {
  x: 0.5, y: 0.5, w: 9, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: TEXT_LIGHT, margin: 0
});

s5.addText("Vad gör A-svaret som\nE-svaret inte gör?", {
  x: 0.5, y: 1.5, w: 9, h: 2.0,
  fontSize: 36, fontFace: HEADER_FONT, color: WHITE, bold: true,
  align: "center", valign: "middle", margin: 0
});

s5.addText("Vilka kopplingar saknas i E-svaret?", {
  x: 0.5, y: 3.8, w: 9, h: 0.5,
  fontSize: 18, fontFace: BODY_FONT, color: ACCENT, align: "center", margin: 0
});

s5.addNotes("Talarnoter (2 min): Låt eleverna diskutera i par. Lyssna efter om de identifierar: kopplingar mellan nivåer (individ-samhälle), perspektivväxling, och orsak-konsekvens-resonemang. Sammanfatta kort efteråt.");

// ============================================================
// SLIDE 6: Skrivuppgiften
// ============================================================
let s6 = pres.addSlide();
s6.background = { color: LIGHT_BG };

s6.addText("Skrivuppgiften", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 3, margin: 0
});

// Main task box
s6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.0, w: 9, h: 2.0,
  fill: { color: WHITE }, shadow: makeShadow()
});
s6.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.0, w: 0.08, h: 2.0,
  fill: { color: ACCENT }
});

s6.addText("Utgå från Alex situation. Redogör för det ekonomiska kretsloppet och resonera om hur ungas ekonomiska situation - på arbetsmarknaden och i privatekonomin - påverkar och påverkas av samhällsekonomin.", {
  x: 0.9, y: 1.1, w: 8.4, h: 1.8,
  fontSize: 16, fontFace: BODY_FONT, color: TEXT_DARK, valign: "middle", margin: 0
});

// Three criteria as small cards
const criteria = [
  { level: "E", desc: "Översiktligt + enkla\nsamband", color: "E67E22" },
  { level: "C", desc: "Utförligt + välgrundade\nresonemang", color: "2E86C1" },
  { level: "A", desc: "Nyanserat + komplexa\nsamband + flera perspektiv", color: "27AE60" },
];

criteria.forEach((c, i) => {
  const cx = 0.5 + i * 3.1;
  s6.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: 3.4, w: 2.8, h: 1.4,
    fill: { color: WHITE }, shadow: makeShadow()
  });
  s6.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: 3.4, w: 2.8, h: 0.4,
    fill: { color: c.color }
  });
  s6.addText(c.level + "-nivå", {
    x: cx, y: 3.4, w: 2.8, h: 0.4,
    fontSize: 13, fontFace: BODY_FONT, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
  });
  s6.addText(c.desc, {
    x: cx + 0.15, y: 3.9, w: 2.5, h: 0.8,
    fontSize: 12, fontFace: BODY_FONT, color: TEXT_DARK, valign: "middle", margin: 0
  });
});

s6.addText("15 minuter skrivtid", {
  x: 0.5, y: 5.0, w: 9, h: 0.4,
  fontSize: 14, fontFace: BODY_FONT, color: TEXT_MID, bold: true, align: "center", margin: 0
});

s6.addNotes("Talarnoter (3 min instruktion, sedan 15 min skrivtid): Presentera uppgiften och bedömningskriterierna. Påminn om skrivmallen för de som behöver stöd. Under skrivtiden: cirkulera tyst, ge individuell feedback via post-its ('Kan du koppla detta till kretsloppet?'). Stör inte skrivflödet.");

// ============================================================
// SLIDE 7: Stöd - meningsstartar (för E-nivå)
// ============================================================
let s7 = pres.addSlide();
s7.background = { color: WHITE };

s7.addText("Behöver du hjälp att komma igång?", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: PRIMARY, bold: true, margin: 0
});

s7.addText("Meningsstartar", {
  x: 0.5, y: 0.9, w: 9, h: 0.4,
  fontSize: 13, fontFace: BODY_FONT, color: TEXT_MID, margin: 0
});

const starters = [
  "\"Det ekonomiska kretsloppet består av...\"",
  "\"För unga på arbetsmarknaden är det...\"",
  "\"En konsekvens av detta är...\"",
  "\"Sambandet mellan individens ekonomi\noch samhället visar sig genom att...\"",
];

starters.forEach((s, i) => {
  const cy = 1.5 + i * 0.95;
  s7.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: cy, w: 8.4, h: 0.7,
    fill: { color: LIGHT_BG }, shadow: makeShadow()
  });
  s7.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: cy, w: 0.06, h: 0.7,
    fill: { color: SECONDARY }
  });
  s7.addText(s, {
    x: 1.1, y: cy, w: 7.9, h: 0.7,
    fontSize: 14, fontFace: BODY_FONT, color: TEXT_DARK, italic: true, valign: "middle", margin: 0
  });
});

s7.addNotes("Talarnoter: Denna slide visas för elever som behöver stöd. Peka de som kör fast hit. Meningsstartarna guidar dem genom analysens delar: kretslopp, arbetsmarknad, konsekvenser, samband.");

// ============================================================
// SLIDE 8: Kamratbedömning
// ============================================================
let s8 = pres.addSlide();
s8.background = { color: LIGHT_BG };

s8.addText("Kamratbedömning", {
  x: 0.5, y: 0.3, w: 9, h: 0.7,
  fontSize: 32, fontFace: HEADER_FONT, color: PRIMARY, bold: true, margin: 0
});

s8.addText("Byt text med en klasskamrat. Läs och ge feedback:", {
  x: 0.5, y: 1.0, w: 9, h: 0.4,
  fontSize: 15, fontFace: BODY_FONT, color: TEXT_DARK, margin: 0
});

const fbQuestions = [
  { num: "1", q: "Förklaras det ekonomiska kretsloppet?", sub: "Finns hushåll, företag och offentlig sektor?" },
  { num: "2", q: "Finns resonemang om orsaker och konsekvenser?", sub: "Inte bara beskrivning - även \"därför\" och \"det leder till\"" },
  { num: "3", q: "Kopplas individens ekonomi till samhället?", sub: "Går texten från Alex till större samhällseffekter?" },
];

fbQuestions.forEach((fb, i) => {
  const cy = 1.6 + i * 1.15;
  s8.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: cy, w: 8.6, h: 0.95,
    fill: { color: WHITE }, shadow: makeShadow()
  });
  s8.addShape(pres.shapes.OVAL, {
    x: 0.9, y: cy + 0.2, w: 0.5, h: 0.5,
    fill: { color: SECONDARY }
  });
  s8.addText(fb.num, {
    x: 0.9, y: cy + 0.2, w: 0.5, h: 0.5,
    fontSize: 16, fontFace: BODY_FONT, color: WHITE, bold: true,
    align: "center", valign: "middle", margin: 0
  });
  s8.addText(fb.q, {
    x: 1.6, y: cy + 0.1, w: 7.5, h: 0.4,
    fontSize: 14, fontFace: BODY_FONT, color: TEXT_DARK, bold: true, margin: 0
  });
  s8.addText(fb.sub, {
    x: 1.6, y: cy + 0.5, w: 7.5, h: 0.35,
    fontSize: 12, fontFace: BODY_FONT, color: TEXT_MID, italic: true, margin: 0
  });
});

s8.addText("Ge minst en sak som är bra och en sak som kan förbättras", {
  x: 0.5, y: 5.0, w: 9, h: 0.4,
  fontSize: 13, fontFace: BODY_FONT, color: ACCENT, bold: true, align: "center", margin: 0
});

s8.addNotes("Talarnoter (10 min): Formativ, inte summativ. Betona: 'Ni ger feedback för att hjälpa varandra utvecklas.' Muntlig feedback 5 min, sedan 3 min för att notera förbättringar. De tre frågorna är medvetet kopplade till E/C/A-progressionen.");

// ============================================================
// SLIDE 9: Avslutning - summering (dark)
// ============================================================
let s9 = pres.addSlide();
s9.background = { color: DARK_BG };

s9.addText("Vad tar ni med er?", {
  x: 0.5, y: 0.4, w: 9, h: 0.8,
  fontSize: 36, fontFace: HEADER_FONT, color: WHITE, bold: true, align: "center", margin: 0
});

// Progression summary
const summary = [
  { label: "Kretsloppet", desc: "Hur hushåll, företag och det offentliga hänger ihop" },
  { label: "Arbetsmarknaden", desc: "Villkoren och utmaningarna för unga" },
  { label: "Privatekonomin", desc: "Att göra en budget och prioritera" },
  { label: "Risker och val", desc: "Konsekvenser av ekonomiska beslut" },
  { label: "Helheten", desc: "Individens val påverkar samhället - och tvärtom" },
];

summary.forEach((s, i) => {
  const cy = 1.3 + i * 0.65;
  s9.addShape(pres.shapes.RECTANGLE, {
    x: 1.5, y: cy, w: 7.0, h: 0.55,
    fill: { color: "FFFFFF", transparency: 10 }
  });
  s9.addText(s.label, {
    x: 1.7, y: cy, w: 2.2, h: 0.55,
    fontSize: 13, fontFace: BODY_FONT, color: ACCENT, bold: true, valign: "middle", margin: 0
  });
  s9.addText(s.desc, {
    x: 4.0, y: cy, w: 4.3, h: 0.55,
    fontSize: 13, fontFace: BODY_FONT, color: WHITE, valign: "middle", margin: 0
  });
});

s9.addText("Det här är kunskap ni använder varje dag -\nsom lönetagare, konsumenter och medborgare.", {
  x: 0.5, y: 4.5, w: 9, h: 0.8,
  fontSize: 16, fontFace: BODY_FONT, color: ACCENT, italic: true, align: "center", margin: 0
});

s9.addNotes("Talarnoter (3 min): Gemensam reflektion. Fråga: 'Vad tar ni med er från hela momentet?' Sammanfatta den röda tråden. Avsluta positivt: 'Det här är inte bara skolkunskap - det är verktyg ni behöver i livet.'");

// ============================================================
// SAVE
// ============================================================
const outputPath = __dirname + "/presentation-lektion-5.pptx";
pres.writeFile({ fileName: outputPath }).then(() => {
  console.log("Generated:", outputPath);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
