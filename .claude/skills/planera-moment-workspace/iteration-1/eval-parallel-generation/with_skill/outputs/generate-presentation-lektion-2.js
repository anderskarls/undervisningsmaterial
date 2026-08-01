const pptxgen = require("pptxgenjs");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cornelius Agent";
pres.title = "Lektion 2: Vem får jobben? — Arbetsmarknaden för unga";

// Color palette — Ocean/teal theme for economics
const C = {
  dark: "0D1B2A",
  primary: "1B4F72",
  secondary: "2E86C1",
  accent: "F39C12",
  light: "EBF5FB",
  white: "FFFFFF",
  text: "1C1C1C",
  muted: "5D6D7E",
  cardBg: "F8F9FA",
  success: "27AE60",
  warning: "E74C3C",
};

const FONT_HEAD = "Georgia";
const FONT_BODY = "Calibri";

const makeShadow = () => ({ type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 });

// ============================================================
// SLIDE 1: Title slide (dark background)
// ============================================================
let s1 = pres.addSlide();
s1.background = { color: C.dark };
// Accent bar top
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
// Title
s1.addText("Vem får jobben?", {
  x: 0.8, y: 1.2, w: 8.4, h: 1.2,
  fontSize: 44, fontFace: FONT_HEAD, color: C.white, bold: true,
});
// Subtitle
s1.addText("Arbetsmarknaden för unga", {
  x: 0.8, y: 2.3, w: 8.4, h: 0.7,
  fontSize: 24, fontFace: FONT_BODY, color: C.secondary,
});
// Meta info
s1.addText("Lektion 2  |  Samhällskunskap 1a1  |  Ungas ekonomi", {
  x: 0.8, y: 3.4, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: FONT_BODY, color: C.muted,
});
// Bottom bar
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.3, w: 10, h: 0.325, fill: { color: C.primary } });

s1.addNotes("TITELSLIDE\nTid: 0 min\nVälkomna eleverna. Visa titeln och säg: 'Förra gången tittade vi på det ekonomiska kretsloppet — idag zoomar vi in på en del som berör er direkt: arbetsmarknaden.'");

// ============================================================
// SLIDE 2: Retrieval review — Kretsloppskoll
// ============================================================
let s2 = pres.addSlide();
s2.background = { color: C.light };

s2.addText("Vad minns du om kretsloppet?", {
  x: 0.7, y: 0.3, w: 8.6, h: 0.7,
  fontSize: 36, fontFace: FONT_HEAD, color: C.primary, bold: true,
});

// Instruction card
s2.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 8.6, h: 2.8, fill: { color: C.white }, shadow: makeShadow() });
s2.addText([
  { text: "Enskilt (2 min)", options: { bold: true, fontSize: 18, fontFace: FONT_BODY, color: C.primary, breakLine: true } },
  { text: "Skriv ner tre saker du minns om det ekonomiska kretsloppet.", options: { fontSize: 16, fontFace: FONT_BODY, color: C.text, breakLine: true } },
  { text: "", options: { fontSize: 10, breakLine: true } },
  { text: "Par (2 min)", options: { bold: true, fontSize: 18, fontFace: FONT_BODY, color: C.primary, breakLine: true } },
  { text: "Jämför med din partner. Vad hade ni gemensamt? Vad hade ni missat?", options: { fontSize: 16, fontFace: FONT_BODY, color: C.text, breakLine: true } },
  { text: "", options: { fontSize: 10, breakLine: true } },
  { text: "Helklass (1 min)", options: { bold: true, fontSize: 18, fontFace: FONT_BODY, color: C.primary, breakLine: true } },
  { text: "Kort genomgång — vi bygger vidare!", options: { fontSize: 16, fontFace: FONT_BODY, color: C.text } },
], { x: 1.1, y: 1.5, w: 7.8, h: 2.4, valign: "top" });

// Timer label
s2.addShape(pres.shapes.RECTANGLE, { x: 7.8, y: 4.4, w: 1.5, h: 0.5, fill: { color: C.accent } });
s2.addText("5 min", { x: 7.8, y: 4.4, w: 1.5, h: 0.5, fontSize: 16, fontFace: FONT_BODY, color: C.white, bold: true, align: "center", valign: "middle" });

s2.addNotes("FAS 1: RETRIEVAL REVIEW (0-5 min)\n\nGe eleverna 2 min att skriva enskilt. Sedan 2 min i par. Avsluta med 1 min helklass.\n\nKoppling: 'Vad händer i kretsloppet när någon får ett jobb? Vilka penningflöden aktiveras?'\n\nOm exit tickets från lektion 1 visade brister i sambandet hushåll-offentlig sektor (skatt), adressera det här.");

// ============================================================
// SLIDE 3: Målaktivering — Hook
// ============================================================
let s3 = pres.addSlide();
s3.background = { color: C.white };

s3.addText("Visste du att...?", {
  x: 0.7, y: 0.3, w: 8.6, h: 0.7,
  fontSize: 36, fontFace: FONT_HEAD, color: C.primary, bold: true,
});

// Big stat callout
s3.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 1.3, w: 7, h: 2, fill: { color: C.dark }, shadow: makeShadow() });
s3.addText("18%", {
  x: 1.5, y: 1.2, w: 7, h: 1.3,
  fontSize: 72, fontFace: FONT_HEAD, color: C.accent, bold: true, align: "center", valign: "middle",
});
s3.addText("av 18-24-åringar i EU är arbetslösa", {
  x: 1.5, y: 2.3, w: 7, h: 0.8,
  fontSize: 20, fontFace: FONT_BODY, color: C.white, align: "center", valign: "top",
});

// Question
s3.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 3.8, w: 7, h: 1.0, fill: { color: C.light } });
s3.addText("Varför drabbas unga hårdast i en lågkonjunktur?", {
  x: 1.5, y: 3.8, w: 7, h: 1.0,
  fontSize: 22, fontFace: FONT_BODY, color: C.primary, bold: true, align: "center", valign: "middle",
});

// Source
s3.addText("[VERIFIERA aktuella siffror — Eurostat/SCB]", {
  x: 0.7, y: 5.0, w: 8.6, h: 0.4,
  fontSize: 10, fontFace: FONT_BODY, color: C.muted, italic: true,
});

s3.addNotes("FAS 2: MÅLAKTIVERING (5-7 min)\n\nVisa statistiken. Fråga: 'Varför tror ni att unga drabbas hårdast?'\n\nTa 3-4 snabba svar.\n\nSäg sedan: 'Idag ska ni kunna jämföra olika anställningsformer och analysera vad de betyder för en ung persons trygghet och ekonomi.'");

// ============================================================
// SLIDE 4: Vad är arbetsmarknaden?
// ============================================================
let s4 = pres.addSlide();
s4.background = { color: C.white };

s4.addText("Vad är arbetsmarknaden?", {
  x: 0.7, y: 0.3, w: 8.6, h: 0.7,
  fontSize: 36, fontFace: FONT_HEAD, color: C.primary, bold: true,
});

// Two columns: utbud och efterfrågan
// Left card
s4.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 4.1, h: 3.2, fill: { color: C.cardBg }, shadow: makeShadow() });
s4.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 4.1, h: 0.06, fill: { color: C.secondary } });
s4.addText("Utbud", {
  x: 0.9, y: 1.5, w: 3.7, h: 0.5,
  fontSize: 22, fontFace: FONT_HEAD, color: C.secondary, bold: true,
});
s4.addText([
  { text: "Arbetstagare erbjuder", options: { bold: true, fontSize: 16, fontFace: FONT_BODY, color: C.text, breakLine: true } },
  { text: "sin arbetskraft", options: { fontSize: 16, fontFace: FONT_BODY, color: C.text, breakLine: true } },
  { text: "", options: { fontSize: 8, breakLine: true } },
  { text: "Du, jag, Alex — alla som", options: { fontSize: 14, fontFace: FONT_BODY, color: C.muted, breakLine: true } },
  { text: "söker jobb eller jobbar", options: { fontSize: 14, fontFace: FONT_BODY, color: C.muted } },
], { x: 0.9, y: 2.1, w: 3.7, h: 2.2, valign: "top" });

// Right card
s4.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.3, w: 4.1, h: 3.2, fill: { color: C.cardBg }, shadow: makeShadow() });
s4.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.3, w: 4.1, h: 0.06, fill: { color: C.accent } });
s4.addText("Efterfrågan", {
  x: 5.4, y: 1.5, w: 3.7, h: 0.5,
  fontSize: 22, fontFace: FONT_HEAD, color: C.accent, bold: true,
});
s4.addText([
  { text: "Arbetsgivare söker", options: { bold: true, fontSize: 16, fontFace: FONT_BODY, color: C.text, breakLine: true } },
  { text: "kompetens och arbetskraft", options: { fontSize: 16, fontFace: FONT_BODY, color: C.text, breakLine: true } },
  { text: "", options: { fontSize: 8, breakLine: true } },
  { text: "ICA, McDonald's, Volvo —", options: { fontSize: 14, fontFace: FONT_BODY, color: C.muted, breakLine: true } },
  { text: "alla som anställer", options: { fontSize: 14, fontFace: FONT_BODY, color: C.muted } },
], { x: 5.4, y: 2.1, w: 3.7, h: 2.2, valign: "top" });

// Koppling
s4.addText("Koppling till kretsloppet: arbetsmarknaden är där hushåll och företag möts.", {
  x: 0.7, y: 4.8, w: 8.6, h: 0.5,
  fontSize: 14, fontFace: FONT_BODY, color: C.muted, italic: true,
});

s4.addNotes("FAS 3: EXPLICIT INSTRUKTION — Steg 1 (7-10 min)\n\nFörklara utbud och efterfrågan på arbetsmarknaden. Koppla tillbaka till kretsloppet: 'Var möts hushåll och företag? På arbetsmarknaden!'\n\nKontrollfråga: 'Om många söker få jobb — vem har makten, arbetsgivaren eller arbetstagaren?'\n\nTa 2-3 snabba svar.");

// ============================================================
// SLIDE 5: Anställningsformer
// ============================================================
let s5 = pres.addSlide();
s5.background = { color: C.white };

s5.addText("Vilka anställningsformer finns?", {
  x: 0.7, y: 0.3, w: 8.6, h: 0.7,
  fontSize: 36, fontFace: FONT_HEAD, color: C.primary, bold: true,
});

// 2x2 grid of cards
const cards = [
  { title: "Fast anställning", desc: "Tillsvidare, uppsägningstid, sjuklön, semester", color: C.success, x: 0.7, y: 1.2 },
  { title: "Visstidsanställning", desc: "Tidsbegränsad, kan övergå till fast, viss trygghet", color: C.secondary, x: 5.2, y: 1.2 },
  { title: "Timanställning", desc: "Inga garanterade timmar, kallas in vid behov, osäkert", color: C.accent, x: 0.7, y: 3.2 },
  { title: "Gig/plattformsjobb", desc: "Helt flexibelt, inga rättigheter, egenföretagare", color: C.warning, x: 5.2, y: 3.2 },
];

cards.forEach((c) => {
  s5.addShape(pres.shapes.RECTANGLE, { x: c.x, y: c.y, w: 4.1, h: 1.7, fill: { color: C.cardBg }, shadow: makeShadow() });
  s5.addShape(pres.shapes.RECTANGLE, { x: c.x, y: c.y, w: 0.08, h: 1.7, fill: { color: c.color } });
  s5.addText(c.title, {
    x: c.x + 0.3, y: c.y + 0.15, w: 3.5, h: 0.5,
    fontSize: 18, fontFace: FONT_HEAD, color: C.text, bold: true,
  });
  s5.addText(c.desc, {
    x: c.x + 0.3, y: c.y + 0.7, w: 3.5, h: 0.8,
    fontSize: 14, fontFace: FONT_BODY, color: C.muted,
  });
});

s5.addNotes("FAS 3: EXPLICIT INSTRUKTION — Steg 2 (10-14 min)\n\nGå igenom de fyra anställningsformerna. Använd konkreta exempel:\n- Fast: Lagerjobbare på PostNord\n- Visstid: Sommarjobb på café\n- Tim: Extra i butik\n- Gig: Foodora-bud\n\nWorked example: 'Om jag har fast anställning och blir sjuk — vad händer? Sjuklön. Men timanställd? Inga timmar = ingen lön.'\n\nKontrollfråga: 'Om Alex blir sjuk en vecka — vilken anställningsform ger mest skydd?'");

// ============================================================
// SLIDE 6: Fackföreningar och rättigheter
// ============================================================
let s6 = pres.addSlide();
s6.background = { color: C.white };

s6.addText("Vem skyddar arbetstagaren?", {
  x: 0.7, y: 0.3, w: 8.6, h: 0.7,
  fontSize: 36, fontFace: FONT_HEAD, color: C.primary, bold: true,
});

// Three key concepts
const concepts = [
  { title: "Kollektivavtal", desc: "Avtal mellan fack och arbetsgivare om lön, semester, arbetstider", y: 1.2 },
  { title: "LAS", desc: "Lagen om anställningsskydd — regler för uppsägning och turordning", y: 2.5 },
  { title: "Semesterlagen", desc: "Rätt till 25 dagars semester per år — men bara med anställning", y: 3.8 },
];

concepts.forEach((c, i) => {
  // Number circle
  s6.addShape(pres.shapes.OVAL, { x: 0.7, y: c.y + 0.1, w: 0.6, h: 0.6, fill: { color: C.primary } });
  s6.addText(String(i + 1), {
    x: 0.7, y: c.y + 0.1, w: 0.6, h: 0.6,
    fontSize: 20, fontFace: FONT_HEAD, color: C.white, bold: true, align: "center", valign: "middle",
  });
  // Text
  s6.addText(c.title, {
    x: 1.6, y: c.y, w: 7.6, h: 0.45,
    fontSize: 20, fontFace: FONT_HEAD, color: C.text, bold: true, margin: 0,
  });
  s6.addText(c.desc, {
    x: 1.6, y: c.y + 0.45, w: 7.6, h: 0.5,
    fontSize: 15, fontFace: FONT_BODY, color: C.muted, margin: 0,
  });
});

s6.addNotes("FAS 3: EXPLICIT INSTRUKTION — Steg 3 (14-17 min)\n\nGå igenom tre nyckelbegrepp: kollektivavtal, LAS, semesterlagen.\n\nPoängen: dessa skydd gäller olika mycket beroende på anställningsform. Gig-arbetare har i princip inget av detta.\n\nKontrollfråga: 'Vad händer om det inte finns något kollektivavtal?'\n\nTa 2-3 svar. Poängtera att utan kollektivavtal bestämmer arbetsgivaren mer ensidigt.");

// ============================================================
// SLIDE 7: Diskussionspaus
// ============================================================
let s7 = pres.addSlide();
s7.background = { color: C.primary };

s7.addText("Diskutera med din granne", {
  x: 0.7, y: 0.5, w: 8.6, h: 0.7,
  fontSize: 32, fontFace: FONT_HEAD, color: C.white, bold: true, align: "center",
});

s7.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 1.6, w: 7, h: 2.5, fill: { color: C.white }, shadow: makeShadow() });
s7.addText([
  { text: "Om många söker få jobb —", options: { fontSize: 22, fontFace: FONT_BODY, color: C.text, breakLine: true } },
  { text: "vem har makten?", options: { fontSize: 28, fontFace: FONT_HEAD, color: C.primary, bold: true, breakLine: true } },
  { text: "", options: { fontSize: 10, breakLine: true } },
  { text: "Arbetstagaren eller arbetsgivaren?", options: { fontSize: 18, fontFace: FONT_BODY, color: C.muted } },
], { x: 1.7, y: 1.8, w: 6.6, h: 2.1, align: "center", valign: "middle" });

s7.addShape(pres.shapes.RECTANGLE, { x: 4, y: 4.5, w: 2, h: 0.5, fill: { color: C.accent } });
s7.addText("2 min", { x: 4, y: 4.5, w: 2, h: 0.5, fontSize: 18, fontFace: FONT_BODY, color: C.white, bold: true, align: "center", valign: "middle" });

s7.addNotes("DISKUSSIONSPAUS\n\nGe eleverna 2 minuter att diskutera i par.\n\nLyssna efter:\n- Förstår de maktbalansen utbud/efterfrågan?\n- Nämner de erfarenhet som faktor?\n- Kopplar de till ungas situation?\n\nTa 2-3 svar från helklass innan du går vidare.");

// ============================================================
// SLIDE 8: Guidad övning — Jämförelsetabell
// ============================================================
let s8 = pres.addSlide();
s8.background = { color: C.white };

s8.addText("Jämför anställningsformerna", {
  x: 0.7, y: 0.3, w: 8.6, h: 0.7,
  fontSize: 36, fontFace: FONT_HEAD, color: C.primary, bold: true,
});

// Table
const tableRows = [
  [
    { text: "", options: { fill: { color: C.primary } } },
    { text: "Fast anställning", options: { bold: true, color: "FFFFFF", fill: { color: C.primary }, align: "center" } },
    { text: "Timanställning", options: { bold: true, color: "FFFFFF", fill: { color: C.primary }, align: "center" } },
    { text: "Gig-jobb", options: { bold: true, color: "FFFFFF", fill: { color: C.primary }, align: "center" } },
  ],
  [
    { text: "Trygghet", options: { bold: true } },
    { text: "?" }, { text: "?" }, { text: "?" },
  ],
  [
    { text: "Lön", options: { bold: true } },
    { text: "?" }, { text: "?" }, { text: "?" },
  ],
  [
    { text: "Semester", options: { bold: true } },
    { text: "?" }, { text: "?" }, { text: "?" },
  ],
  [
    { text: "Sjukpenning", options: { bold: true } },
    { text: "?" }, { text: "?" }, { text: "?" },
  ],
  [
    { text: "Framtidsplanering", options: { bold: true } },
    { text: "?" }, { text: "?" }, { text: "?" },
  ],
];

s8.addTable(tableRows, {
  x: 0.7, y: 1.2, w: 8.6, h: 3.5,
  colW: [2.2, 2.13, 2.13, 2.14],
  border: { pt: 1, color: "CCCCCC" },
  fontSize: 14, fontFace: FONT_BODY, color: C.text,
  rowH: [0.5, 0.55, 0.55, 0.55, 0.55, 0.55],
  autoPage: false,
});

// Timer
s8.addShape(pres.shapes.RECTANGLE, { x: 7.8, y: 4.9, w: 1.5, h: 0.5, fill: { color: C.accent } });
s8.addText("8 min", { x: 7.8, y: 4.9, w: 1.5, h: 0.5, fontSize: 16, fontFace: FONT_BODY, color: C.white, bold: true, align: "center", valign: "middle" });

s8.addText("Arbeta i par. Fyll i tabellen med det ni vet.", {
  x: 0.7, y: 4.9, w: 6.5, h: 0.5,
  fontSize: 15, fontFace: FONT_BODY, color: C.muted, italic: true,
});

s8.addNotes("FAS 4: GUIDAD ÖVNING — Del 1 (17-25 min)\n\nEleverna arbetar i par med jämförelsetabellen.\n\nStöd (mot E): En kolumn är redan ifylld på deras papper som modell.\n\nUtmaning (mot A): 'Vad händer med Alex budget om hen är sjuk en vecka med varje anställningsform?'\n\nCirkulera aktivt. Ställ fördjupande frågor. Identifiera missförstånd att adressera.");

// ============================================================
// SLIDE 9: Alex tre jobbdilemma
// ============================================================
let s9 = pres.addSlide();
s9.background = { color: C.light };

s9.addText("Alex har fått tre jobberbjudanden", {
  x: 0.7, y: 0.2, w: 8.6, h: 0.6,
  fontSize: 32, fontFace: FONT_HEAD, color: C.primary, bold: true,
});

// Three job cards side by side
const jobs = [
  { title: "1. Lagerjobb", subtitle: "Fast anställning", details: "25 500 kr/mån\nNattskift, 40 min pendling\nHeltid, tungt fysiskt", color: C.success, x: 0.5 },
  { title: "2. Butiksjobb", subtitle: "Timanställning", details: "~18 000 kr/mån\nNära hemmet, trevligt\nInga garanterade timmar", color: C.accent, x: 3.6 },
  { title: "3. Plattformsjobb", subtitle: "Gig/frilans", details: "20 000+ kr/mån?\nHelt flexibelt\nIngen semester/sjuklön", color: C.warning, x: 6.7 },
];

jobs.forEach((j) => {
  s9.addShape(pres.shapes.RECTANGLE, { x: j.x, y: 1.1, w: 2.8, h: 3.5, fill: { color: C.white }, shadow: makeShadow() });
  s9.addShape(pres.shapes.RECTANGLE, { x: j.x, y: 1.1, w: 2.8, h: 0.06, fill: { color: j.color } });
  s9.addText(j.title, {
    x: j.x + 0.15, y: 1.3, w: 2.5, h: 0.4,
    fontSize: 17, fontFace: FONT_HEAD, color: C.text, bold: true, margin: 0,
  });
  s9.addText(j.subtitle, {
    x: j.x + 0.15, y: 1.7, w: 2.5, h: 0.35,
    fontSize: 13, fontFace: FONT_BODY, color: j.color, bold: true, margin: 0,
  });
  s9.addText(j.details, {
    x: j.x + 0.15, y: 2.2, w: 2.5, h: 2.0,
    fontSize: 13, fontFace: FONT_BODY, color: C.muted, valign: "top", margin: 0,
  });
});

s9.addText("Vilket jobb ska Alex välja — och varför?", {
  x: 0.7, y: 4.8, w: 8.6, h: 0.5,
  fontSize: 18, fontFace: FONT_BODY, color: C.primary, bold: true, align: "center",
});

s9.addNotes("FAS 4: GUIDAD ÖVNING — Del 2 (25-37 min)\n\nEPA: Alex tre jobbdilemma.\n\nEnskilt (3 min): Läs erbjudandena. Välj ett. Skriv: 'Jag väljer X för att...'\n\nPar (4 min): Jämför val. Argumentera. Lyft minst ett motargument.\n\nAlla (5 min): Handuppräckning — vem valde vad? Lyft 2-3 argument. Pusha: 'Vems perspektiv tar ni — individens, arbetsgivarens eller samhällets?'\n\nIngen anställning ska framstå som rätt svar.");

// ============================================================
// SLIDE 10: EPA-instruktioner
// ============================================================
let s10 = pres.addSlide();
s10.background = { color: C.white };

s10.addText("EPA — Så gör vi", {
  x: 0.7, y: 0.3, w: 8.6, h: 0.7,
  fontSize: 36, fontFace: FONT_HEAD, color: C.primary, bold: true,
});

// Three steps
const steps = [
  { letter: "E", label: "Enskilt", time: "3 min", desc: "Läs Alex erbjudanden.\nVälj ett jobb.\nSkriv: 'Jag väljer ___ för att...'", color: C.secondary },
  { letter: "P", label: "Par", time: "4 min", desc: "Jämför med din partner.\nArgumentera för ditt val.\nLyft minst ett motargument.", color: C.primary },
  { letter: "A", label: "Alla", time: "5 min", desc: "Handuppräckning: vem valde vad?\nVi lyssnar på 2-3 argument.\nVems perspektiv tog ni?", color: C.accent },
];

steps.forEach((s, i) => {
  const x = 0.7 + i * 3.1;
  s10.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.8, h: 3.8, fill: { color: C.cardBg }, shadow: makeShadow() });
  // Letter circle
  s10.addShape(pres.shapes.OVAL, { x: x + 0.9, y: 1.5, w: 1, h: 1, fill: { color: s.color } });
  s10.addText(s.letter, {
    x: x + 0.9, y: 1.5, w: 1, h: 1,
    fontSize: 36, fontFace: FONT_HEAD, color: C.white, bold: true, align: "center", valign: "middle",
  });
  s10.addText(s.label, {
    x, y: 2.7, w: 2.8, h: 0.4,
    fontSize: 18, fontFace: FONT_HEAD, color: C.text, bold: true, align: "center",
  });
  s10.addText(s.time, {
    x, y: 3.05, w: 2.8, h: 0.3,
    fontSize: 14, fontFace: FONT_BODY, color: s.color, bold: true, align: "center",
  });
  s10.addText(s.desc, {
    x: x + 0.2, y: 3.45, w: 2.4, h: 1.4,
    fontSize: 13, fontFace: FONT_BODY, color: C.muted, valign: "top",
  });
});

s10.addNotes("INSTRUKTIONSSLIDE FÖR EPA\n\nVisa denna slide medan eleverna arbetar. Gå igenom stegen snabbt innan de börjar.\n\nTips för mot E: Stödfrågor: 'Lista tre fördelar. Lista tre nackdelar. Vilket väger tyngst?'\n\nTips för mot A: 'Diskutera ur arbetsgivarens perspektiv — varför erbjuder företag olika anställningsformer?'");

// ============================================================
// SLIDE 11: Perspektivfråga (självständig övning)
// ============================================================
let s11 = pres.addSlide();
s11.background = { color: C.dark };

s11.addText("Vem har rätt?", {
  x: 0.7, y: 0.3, w: 8.6, h: 0.7,
  fontSize: 36, fontFace: FONT_HEAD, color: C.white, bold: true, align: "center",
});

// Two contrasting quotes
s11.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 4.1, h: 2.5, fill: { color: "1A3C5E" } });
s11.addText([
  { text: "Alex kompis:", options: { bold: true, fontSize: 14, fontFace: FONT_BODY, color: C.secondary, breakLine: true } },
  { text: "", options: { fontSize: 6, breakLine: true } },
  { text: '"Gig-jobb är framtiden — frihet är viktigare än trygghet."', options: { fontSize: 18, fontFace: FONT_HEAD, color: C.white, italic: true } },
], { x: 1.0, y: 1.5, w: 3.5, h: 2.1, valign: "middle" });

s11.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.3, w: 4.1, h: 2.5, fill: { color: "1A3C5E" } });
s11.addText([
  { text: "Alex mamma:", options: { bold: true, fontSize: 14, fontFace: FONT_BODY, color: C.accent, breakLine: true } },
  { text: "", options: { fontSize: 6, breakLine: true } },
  { text: '"Ta lagerjobbet — du behöver stabilitet."', options: { fontSize: 18, fontFace: FONT_HEAD, color: C.white, italic: true } },
], { x: 5.5, y: 1.5, w: 3.5, h: 2.1, valign: "middle" });

// Question
s11.addText("Motivera. Och — vem betalar priset om det går fel?", {
  x: 0.7, y: 4.1, w: 8.6, h: 0.6,
  fontSize: 20, fontFace: FONT_BODY, color: C.accent, bold: true, align: "center",
});

// Timer
s11.addShape(pres.shapes.RECTANGLE, { x: 4, y: 4.9, w: 2, h: 0.5, fill: { color: C.accent } });
s11.addText("7 min skrivtid", { x: 4, y: 4.9, w: 2, h: 0.5, fontSize: 14, fontFace: FONT_BODY, color: C.white, bold: true, align: "center", valign: "middle" });

s11.addNotes("FAS 5: SJÄLVSTÄNDIG ÖVNING (37-52 min)\n\nSnabbskrivning — 7 minuter.\n\nMot E: Stödmallar: 'Jag håller med ___ för att... Ett argument mot är att...'\n\nMot A: Tillägg: 'Diskutera hur gig-ekonomins tillväxt påverkar samhällsekonomin. Vad händer med skatteintäkterna och välfärden?'\n\nEfter skrivtiden: 3-4 elever delar sina svar (3 min). Lyft mångfald i perspektiv.\n\nPoängen: svaret beror på vilka värderingar man prioriterar. Det finns inget entydigt rätt svar.");

// ============================================================
// SLIDE 12: Exit ticket
// ============================================================
let s12 = pres.addSlide();
s12.background = { color: C.light };

s12.addText("Exit ticket", {
  x: 0.7, y: 0.3, w: 8.6, h: 0.6,
  fontSize: 32, fontFace: FONT_HEAD, color: C.primary, bold: true, align: "center",
});

// Question card
s12.addShape(pres.shapes.RECTANGLE, { x: 1.2, y: 1.3, w: 7.6, h: 2.5, fill: { color: C.white }, shadow: makeShadow() });
s12.addText([
  { text: "Förklara med egna ord:", options: { bold: true, fontSize: 20, fontFace: FONT_BODY, color: C.primary, breakLine: true } },
  { text: "", options: { fontSize: 10, breakLine: true } },
  { text: "Varför är det svårare för unga att få trygga anställningar jämfört med äldre arbetstagare?", options: { fontSize: 20, fontFace: FONT_BODY, color: C.text, breakLine: true } },
  { text: "", options: { fontSize: 10, breakLine: true } },
  { text: "Ge minst två orsaker.", options: { fontSize: 18, fontFace: FONT_BODY, color: C.accent, bold: true } },
], { x: 1.5, y: 1.5, w: 7, h: 2.1, valign: "middle", align: "center" });

// Timer
s12.addShape(pres.shapes.RECTANGLE, { x: 4, y: 4.2, w: 2, h: 0.5, fill: { color: C.primary } });
s12.addText("3 min", { x: 4, y: 4.2, w: 2, h: 0.5, fontSize: 16, fontFace: FONT_BODY, color: C.white, bold: true, align: "center", valign: "middle" });

s12.addNotes("FAS 6: AVSLUT (52-57 min)\n\nExit ticket — 3 minuter skrivtid.\n\nSamla in. Sortera snabbt i tre högar:\n1. Förstod (strukturella orsaker som erfarenhet, LAS, konjunktur)\n2. Osäkra\n3. Missade (fastnade i individförklaringar)\n\nHög 2 och 3 informerar retrieval review i lektion 3.");

// ============================================================
// SLIDE 13: Preview nästa lektion
// ============================================================
let s13 = pres.addSlide();
s13.background = { color: C.dark };
s13.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.3, w: 10, h: 0.325, fill: { color: C.primary } });

s13.addText("Nästa gång...", {
  x: 0.7, y: 1.0, w: 8.6, h: 0.7,
  fontSize: 36, fontFace: FONT_HEAD, color: C.white, bold: true,
});

s13.addText([
  { text: "Alex ska flytta hemifrån.", options: { fontSize: 22, fontFace: FONT_BODY, color: C.white, breakLine: true } },
  { text: "", options: { fontSize: 10, breakLine: true } },
  { text: "Räcker pengarna?", options: { fontSize: 28, fontFace: FONT_HEAD, color: C.accent, bold: true, breakLine: true } },
  { text: "", options: { fontSize: 10, breakLine: true } },
  { text: "Vi gör en riktig budget.", options: { fontSize: 20, fontFace: FONT_BODY, color: C.muted } },
], { x: 0.7, y: 2.0, w: 8.6, h: 2.5, valign: "top" });

s13.addNotes("PREVIEW (57-60 min)\n\nSäg: 'Nu vet Alex vad arbetsmarknaden erbjuder. Nästa gång ska Alex flytta hemifrån — vi räknar på om pengarna räcker. Ta med mobilen — ni får göra en riktig budget!'\n\nSyftet: skapa förväntning och ge eleverna något att tänka på till nästa gång.");

// Write file
const outPath = "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-parallel-generation/with_skill/outputs/presentation-lektion-2.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("presentation-lektion-2.pptx created at: " + outPath);
}).catch(err => {
  console.error("Error:", err);
});
