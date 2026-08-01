const pptxgen = require("pptxgenjs");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cornelius Agent";
pres.title = "Lektion 3: Racker pengarna? - Privatekonomi och budget";

// Color palette: Ocean Gradient (ekonomi-tema)
const PRIMARY = "065A82";     // deep blue
const SECONDARY = "1C7293";   // teal
const ACCENT = "21295C";      // midnight
const LIGHT_BG = "F0F5F8";    // light blue-grey
const WHITE = "FFFFFF";
const DARK_TEXT = "1E293B";
const MUTED = "64748B";
const HIGHLIGHT = "0891B2";   // cyan accent

const HEADER_FONT = "Georgia";
const BODY_FONT = "Calibri";

const makeShadow = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 });

// ============ SLIDE 1: Title slide ============
let s1 = pres.addSlide();
s1.background = { color: PRIMARY };

s1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 4.2, w: 10, h: 1.425,
  fill: { color: ACCENT }
});

s1.addText("Lektion 3", {
  x: 0.8, y: 0.8, w: 8.4, h: 0.6,
  fontSize: 16, fontFace: BODY_FONT, color: "8BC4E0",
  charSpacing: 4
});

s1.addText([
  { text: '"Racker pengarna?"', options: { fontSize: 40, bold: true, fontFace: HEADER_FONT, color: WHITE } }
], { x: 0.8, y: 1.5, w: 8.4, h: 1.5 });

s1.addText("Privatekonomi och budget", {
  x: 0.8, y: 3.0, w: 8.4, h: 0.6,
  fontSize: 20, fontFace: BODY_FONT, color: "B0D4E8", italic: true
});

s1.addText([
  { text: "Samhallskunskap 1a1  |  Ungas ekonomi", options: { fontSize: 14, fontFace: BODY_FONT, color: "8BA8C0" } }
], { x: 0.8, y: 4.5, w: 8.4, h: 0.5 });

// Speaker notes
s1.addNotes("Titelsida. Oppna med: 'Forra gangen tittade vi pa arbetsmarknaden - Alex har fatt jobb. Men racker pengarna nar man ska flytta hemifran?' Tid: ~30 sek.");

// ============ SLIDE 2: Retrieval review ============
let s2 = pres.addSlide();
s2.background = { color: LIGHT_BG };

s2.addText("Vad minns ni fran forra gangen?", {
  x: 0.6, y: 0.3, w: 8.8, h: 0.7,
  fontSize: 32, fontFace: HEADER_FONT, color: PRIMARY, bold: true
});

// Three question cards
const questions = [
  { num: "1", q: "Namm tre anstallningsformer vi pratade om" },
  { num: "2", q: "Vad ar en nackdel med timanstallning?" },
  { num: "3", q: "Vem betalar arbetsgivaravgift?" }
];

questions.forEach((item, i) => {
  const x = 0.6 + i * 3.1;
  s2.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.4, w: 2.8, h: 2.8,
    fill: { color: WHITE }, shadow: makeShadow()
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.4, w: 2.8, h: 0.06,
    fill: { color: HIGHLIGHT }
  });
  s2.addText(item.num, {
    x, y: 1.6, w: 2.8, h: 0.5,
    fontSize: 28, fontFace: HEADER_FONT, color: HIGHLIGHT, bold: true, align: "center"
  });
  s2.addText(item.q, {
    x: x + 0.2, y: 2.2, w: 2.4, h: 1.6,
    fontSize: 14, fontFace: BODY_FONT, color: DARK_TEXT, align: "center", valign: "top"
  });
});

s2.addText("Enskilt 1 min → Par 2 min → Gemensamt 2 min", {
  x: 0.6, y: 4.6, w: 8.8, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: MUTED, italic: true, align: "center"
});

s2.addNotes("Retrieval review (5 min). Lat eleverna tanka enskilt forst, sedan prata i par. Ga igenom svaren snabbt helklass. Koppla: 'Nu vet Alex vad arbetsmarknaden erbjuder - men racker pengarna?' Om manga missade arbetsgivaravgift - forklara kort att det ar ~31% utover bruttolonen.");

// ============ SLIDE 3: Malaktivering ============
let s3 = pres.addSlide();
s3.background = { color: WHITE };

s3.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 4.5, h: 5.625,
  fill: { color: PRIMARY }
});

s3.addText("Alex flyttar hemifran!", {
  x: 0.5, y: 0.5, w: 3.5, h: 1.0,
  fontSize: 28, fontFace: HEADER_FONT, color: WHITE, bold: true
});

s3.addText([
  { text: "Alex har fatt lagerjobbet.", options: { breakLine: true, fontSize: 15, color: "B0D4E8" } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Bruttolonen ar", options: { breakLine: true, fontSize: 15, color: "B0D4E8" } },
  { text: "22 000 kr/man", options: { breakLine: true, fontSize: 26, bold: true, color: WHITE } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Racker det for att leva?", options: { fontSize: 18, italic: true, color: "F0F5F8" } }
], { x: 0.5, y: 1.6, w: 3.5, h: 3.0, fontFace: BODY_FONT });

s3.addText("Dagens mal", {
  x: 5.2, y: 0.8, w: 4.3, h: 0.5,
  fontSize: 22, fontFace: HEADER_FONT, color: PRIMARY, bold: true
});

s3.addText([
  { text: "Ni ska kunna:", options: { breakLine: true, fontSize: 15, color: MUTED, italic: true } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Gora en realistisk budget", options: { bullet: true, breakLine: true, fontSize: 15, color: DARK_TEXT } },
  { text: "Forklara inkomst, skatt och utgifter", options: { bullet: true, breakLine: true, fontSize: 15, color: DARK_TEXT } },
  { text: "Resonera om privatekonomiska val", options: { bullet: true, fontSize: 15, color: DARK_TEXT } }
], { x: 5.2, y: 1.5, w: 4.3, h: 2.5, fontFace: BODY_FONT });

s3.addNotes("Malaktivering (2 min). Visa Alex situation - hen har fatt lagerjobbet fran forra lektionen. Fraga klassen: 'Vad tror ni - racker 22 000 for att leva sjalvstandigt?' Lat nagon svara kort. Presentera dagens mal.");

// ============ SLIDE 4: Brutto till netto ============
let s4 = pres.addSlide();
s4.background = { color: WHITE };

s4.addText("Vad hander med Alex lon?", {
  x: 0.6, y: 0.3, w: 8.8, h: 0.7,
  fontSize: 32, fontFace: HEADER_FONT, color: PRIMARY, bold: true
});

// Worked example: salary breakdown
const salarySteps = [
  { label: "Bruttoloen", value: "22 000 kr", color: SECONDARY },
  { label: "Skatt (~30%)", value: "- 4 400 kr", color: "CC4444" },
  { label: "Nettoloen", value: "= 17 600 kr", color: PRIMARY }
];

salarySteps.forEach((item, i) => {
  const y = 1.3 + i * 1.2;
  s4.addShape(pres.shapes.RECTANGLE, {
    x: 1.0, y, w: 5.0, h: 0.9,
    fill: { color: i === 2 ? "E8F4F8" : LIGHT_BG }, shadow: makeShadow()
  });
  s4.addText(item.label, {
    x: 1.3, y, w: 2.5, h: 0.9,
    fontSize: 16, fontFace: BODY_FONT, color: DARK_TEXT, valign: "middle"
  });
  s4.addText(item.value, {
    x: 3.8, y, w: 2.0, h: 0.9,
    fontSize: 22, fontFace: HEADER_FONT, color: item.color, bold: true, align: "right", valign: "middle"
  });
});

// Side box: where does the tax go?
s4.addShape(pres.shapes.RECTANGLE, {
  x: 6.8, y: 1.3, w: 2.8, h: 3.3,
  fill: { color: ACCENT }, shadow: makeShadow()
});
s4.addText("Vart gar skatten?", {
  x: 7.0, y: 1.5, w: 2.4, h: 0.5,
  fontSize: 16, fontFace: HEADER_FONT, color: WHITE, bold: true
});
s4.addText([
  { text: "Skola & utbildning", options: { bullet: true, breakLine: true, fontSize: 12, color: "B0D4E8" } },
  { text: "Sjukvard", options: { bullet: true, breakLine: true, fontSize: 12, color: "B0D4E8" } },
  { text: "Kollektivtrafik", options: { bullet: true, breakLine: true, fontSize: 12, color: "B0D4E8" } },
  { text: "Aldrevard", options: { bullet: true, breakLine: true, fontSize: 12, color: "B0D4E8" } },
  { text: "= Kretsloppet!", options: { fontSize: 14, bold: true, color: WHITE } }
], { x: 7.0, y: 2.1, w: 2.4, h: 2.2, fontFace: BODY_FONT });

s4.addText("Kalla: Skatteverket (skatteverket.se)", {
  x: 0.6, y: 5.1, w: 5, h: 0.3,
  fontSize: 10, fontFace: BODY_FONT, color: MUTED, italic: true
});

s4.addNotes("Explicit instruktion del 1 (5 min). Rakna pa tavlan: 22 000 x 0,7 = 15 400 (anvand kommunens faktiska skattesats, ca 30%). Forklara: 'Vart gar de 4 400 kr?' Koppla till kretsloppet fran lektion 1 - detta ar ETT av flodena vi ritade! Kontrollfragor: 'Vad ar skillnaden mellan brutto och netto?'");

// ============ SLIDE 5: Fasta vs rorliga utgifter ============
let s5 = pres.addSlide();
s5.background = { color: LIGHT_BG };

s5.addText("Vilka utgifter har Alex?", {
  x: 0.6, y: 0.3, w: 8.8, h: 0.7,
  fontSize: 32, fontFace: HEADER_FONT, color: PRIMARY, bold: true
});

// Two columns
// Left: Fixed costs
s5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 4.2, h: 3.5,
  fill: { color: WHITE }, shadow: makeShadow()
});
s5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.3, w: 4.2, h: 0.06,
  fill: { color: PRIMARY }
});
s5.addText("Fasta utgifter", {
  x: 0.7, y: 1.5, w: 3.8, h: 0.5,
  fontSize: 20, fontFace: HEADER_FONT, color: PRIMARY, bold: true
});
s5.addText("Samma belopp varje manad", {
  x: 0.7, y: 2.0, w: 3.8, h: 0.3,
  fontSize: 12, fontFace: BODY_FONT, color: MUTED, italic: true
});
s5.addText([
  { text: "Hyra", options: { bullet: true, breakLine: true, fontSize: 14, color: DARK_TEXT } },
  { text: "Forsakring", options: { bullet: true, breakLine: true, fontSize: 14, color: DARK_TEXT } },
  { text: "Telefon", options: { bullet: true, breakLine: true, fontSize: 14, color: DARK_TEXT } },
  { text: "Kollektivtrafik", options: { bullet: true, breakLine: true, fontSize: 14, color: DARK_TEXT } },
  { text: "El", options: { bullet: true, fontSize: 14, color: DARK_TEXT } }
], { x: 0.7, y: 2.5, w: 3.8, h: 2.0, fontFace: BODY_FONT });

// Right: Variable costs
s5.addShape(pres.shapes.RECTANGLE, {
  x: 5.3, y: 1.3, w: 4.2, h: 3.5,
  fill: { color: WHITE }, shadow: makeShadow()
});
s5.addShape(pres.shapes.RECTANGLE, {
  x: 5.3, y: 1.3, w: 4.2, h: 0.06,
  fill: { color: HIGHLIGHT }
});
s5.addText("Rorliga utgifter", {
  x: 5.5, y: 1.5, w: 3.8, h: 0.5,
  fontSize: 20, fontFace: HEADER_FONT, color: HIGHLIGHT, bold: true
});
s5.addText("Varierar - har kan du paverka!", {
  x: 5.5, y: 2.0, w: 3.8, h: 0.3,
  fontSize: 12, fontFace: BODY_FONT, color: MUTED, italic: true
});
s5.addText([
  { text: "Mat", options: { bullet: true, breakLine: true, fontSize: 14, color: DARK_TEXT } },
  { text: "Klader", options: { bullet: true, breakLine: true, fontSize: 14, color: DARK_TEXT } },
  { text: "Noje/uteliv", options: { bullet: true, breakLine: true, fontSize: 14, color: DARK_TEXT } },
  { text: "Sparande", options: { bullet: true, breakLine: true, fontSize: 14, color: DARK_TEXT } },
  { text: "Ovriga kop", options: { bullet: true, fontSize: 14, color: DARK_TEXT } }
], { x: 5.5, y: 2.5, w: 3.8, h: 2.0, fontFace: BODY_FONT });

s5.addText("Kontrollfragor: Ge ett exempel pa en fast utgift. Varfor ar sparande en utgift i budgeten?", {
  x: 0.6, y: 5.0, w: 8.8, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: MUTED, italic: true
});

s5.addNotes("Explicit instruktion del 2 (5 min). Ga igenom skillnaden mellan fasta och rorliga utgifter. Betona: 'Fasta utgifter maste du betala oavsett - de ar icke-forhandlingsbara.' Fraga klassen: 'Vilka av dessa kan man paverka?' Introduktionera sparande som en 'utgift' - betala dig sjalv forst. Kontrollfragor till alla, inte bara frivilliga.");

// ============ SLIDE 6: Discussion pause ============
let s6 = pres.addSlide();
s6.background = { color: ACCENT };

s6.addText("Diskutera med din granne (2 min)", {
  x: 0.6, y: 0.5, w: 8.8, h: 0.6,
  fontSize: 16, fontFace: BODY_FONT, color: "8BA8C0", charSpacing: 2
});

s6.addText("Om Alex far 17 600 kr efter skatt - hur mycket tror du gar till hyra? Till mat? Vad blir kvar?", {
  x: 1.0, y: 1.5, w: 8.0, h: 2.0,
  fontSize: 24, fontFace: HEADER_FONT, color: WHITE, bold: true, align: "center", valign: "middle"
});

s6.addText("Var beredd att dela ert resonemang.", {
  x: 1.0, y: 4.0, w: 8.0, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: "8BA8C0", italic: true, align: "center"
});

s6.addNotes("Diskussionspaus (2 min). Bro mellan instruktion och guidad ovning. Lat eleverna gissa - de behover inte ha ratt. Syftet ar att de borjar tanka pa proportioner. Lyssna pa nagra svar: 'Vad sa ni? Var det mer eller mindre an ni tankt?'");

// ============ SLIDE 7: Alex tre livsstilar - intro ============
let s7 = pres.addSlide();
s7.background = { color: WHITE };

s7.addText("Tre satt att leva pa 17 600 kr", {
  x: 0.6, y: 0.3, w: 8.8, h: 0.7,
  fontSize: 32, fontFace: HEADER_FONT, color: PRIMARY, bold: true
});

const lifestyles = [
  { name: "Sparsam Alex", desc: "Delar lagenhet, lagar mat, sparar", icon: "Sparar 2 500 kr/man", color: "0D9488" },
  { name: "Har-och-nu-Alex", desc: "Egen etta, ater ute, fullt socialliv", icon: "Sparar 0 kr/man", color: "DC2626" },
  { name: "Investerar-Alex", desc: "Delar lagenhet, satsar pa framtiden", icon: "3 000 kr till korkort/studier", color: "7C3AED" }
];

lifestyles.forEach((ls, i) => {
  const x = 0.4 + i * 3.2;
  s7.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.3, w: 3.0, h: 3.5,
    fill: { color: LIGHT_BG }, shadow: makeShadow()
  });
  s7.addShape(pres.shapes.RECTANGLE, {
    x, y: 1.3, w: 3.0, h: 0.06,
    fill: { color: ls.color }
  });
  s7.addText(ls.name, {
    x, y: 1.5, w: 3.0, h: 0.5,
    fontSize: 18, fontFace: HEADER_FONT, color: ls.color, bold: true, align: "center"
  });
  s7.addText(ls.desc, {
    x: x + 0.2, y: 2.2, w: 2.6, h: 1.0,
    fontSize: 14, fontFace: BODY_FONT, color: DARK_TEXT, align: "center"
  });
  s7.addShape(pres.shapes.RECTANGLE, {
    x: x + 0.3, y: 3.5, w: 2.4, h: 0.7,
    fill: { color: WHITE }
  });
  s7.addText(ls.icon, {
    x: x + 0.3, y: 3.5, w: 2.4, h: 0.7,
    fontSize: 13, fontFace: BODY_FONT, color: ls.color, bold: true, align: "center", valign: "middle"
  });
});

s7.addText("Gemensamt: telefon 399 kr + forsakring 150 kr + SL 950 kr + el 400 kr = 1 899 kr", {
  x: 0.6, y: 5.0, w: 8.8, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: MUTED, align: "center"
});

s7.addNotes("Introduktion av budgetovningen (2 min). Presentera de tre livsstilarna kort. 'Varje par far TVA av tre livsstilar att budgetera for.' Dela ut materialet. Peka pa de gemensamma fasta utgifterna langst ner.");

// ============ SLIDE 8: Budgetuppgiften ============
let s8 = pres.addSlide();
s8.background = { color: LIGHT_BG };

s8.addText("Er uppgift: Gor Alex budget", {
  x: 0.6, y: 0.3, w: 8.8, h: 0.7,
  fontSize: 32, fontFace: HEADER_FONT, color: PRIMARY, bold: true
});

const steps = [
  { num: "1", text: "Rakna ihop alla fasta utgifter for BADA livsstilarna", time: "" },
  { num: "2", text: "Lagg till rorliga utgifter - hur mycket blir kvar?", time: "" },
  { num: "3", text: "Jamfor: Vad vinner och forlorar Alex med respektive val?", time: "" }
];

steps.forEach((step, i) => {
  const y = 1.3 + i * 1.2;
  s8.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y, w: 0.6, h: 0.6,
    fill: { color: PRIMARY }
  });
  s8.addText(step.num, {
    x: 0.8, y, w: 0.6, h: 0.6,
    fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true, align: "center", valign: "middle"
  });
  s8.addText(step.text, {
    x: 1.6, y, w: 7.6, h: 0.6,
    fontSize: 16, fontFace: BODY_FONT, color: DARK_TEXT, valign: "middle", margin: 0
  });
});

// Differentiation box
s8.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 4.3, w: 8.4, h: 0.9,
  fill: { color: WHITE }, shadow: makeShadow()
});
s8.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 4.3, w: 0.06, h: 0.9,
  fill: { color: HIGHLIGHT }
});
s8.addText("Ni har 15 minuter. Borja med steg 1 - se till att siffrorna stammer innan ni jamfor!", {
  x: 1.2, y: 4.3, w: 7.8, h: 0.9,
  fontSize: 14, fontFace: BODY_FONT, color: DARK_TEXT, valign: "middle"
});

s8.addNotes("Guidad ovning start (15 min). Dela ut livsstilsbeskrivningarna. Varje par far TVA av tre. Betona: borja med fasta utgifter! Cirkulera: stall fragor som 'Vad offrar Sparsam Alex?' (mot C), 'Kan man saga att en livsstil ar objektivt battre?' (mot A). Stod mot E: 'Borja med att lista alla fasta utgifter.' Tidsvarning vid 10 min.");
// ============ SLIDE 9: Discussion - comparison ============
let s9 = pres.addSlide();
s9.background = { color: ACCENT };

s9.addText("Diskutera i paret (3 min)", {
  x: 0.6, y: 0.5, w: 8.8, h: 0.6,
  fontSize: 16, fontFace: BODY_FONT, color: "8BA8C0", charSpacing: 2
});

s9.addText("Vilken livsstil ar 'smartast'?", {
  x: 1.0, y: 1.3, w: 8.0, h: 1.0,
  fontSize: 30, fontFace: HEADER_FONT, color: WHITE, bold: true, align: "center"
});

s9.addText([
  { text: "Tanke 1: Smartast for vem? Pa kort eller lang sikt?", options: { breakLine: true, fontSize: 16, color: "B0D4E8" } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Tanke 2: Vilka varderingar ligger bakom varje val?", options: { breakLine: true, fontSize: 16, color: "B0D4E8" } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Tanke 3: Har Alex verkligen ett fritt val?", options: { fontSize: 16, color: "B0D4E8" } }
], { x: 1.0, y: 2.5, w: 8.0, h: 2.5, fontFace: BODY_FONT, align: "center" });

s9.addNotes("Diskussionspaus under guidad ovning (3 min). Byt fran rakne-uppgift till reflektion. Lyssna pa resonemang - notera vilka par som ar kvar pa E-niva (bara jamfor siffror) vs C/A-niva (diskuterar varderingar och perspektiv). Uppfoljning: 'Nagot par som vill dela?'");

// ============ SLIDE 10: Sjalvstandig ovning ============
let s10 = pres.addSlide();
s10.background = { color: WHITE };

s10.addText("Argumentera skriftligt", {
  x: 0.6, y: 0.3, w: 8.8, h: 0.7,
  fontSize: 32, fontFace: HEADER_FONT, color: PRIMARY, bold: true
});

s10.addShape(pres.shapes.RECTANGLE, {
  x: 0.6, y: 1.2, w: 8.8, h: 2.5,
  fill: { color: LIGHT_BG }, shadow: makeShadow()
});

s10.addText("Skriv ett kort svar (5 min):", {
  x: 0.8, y: 1.3, w: 8.4, h: 0.4,
  fontSize: 14, fontFace: BODY_FONT, color: MUTED, italic: true
});

s10.addText('"Vilken livsstil borde Alex valja - och varfor? Ange minst tva perspektiv (t.ex. kort sikt/lang sikt, eller individ/samhalle)."', {
  x: 0.8, y: 1.8, w: 8.4, h: 1.5,
  fontSize: 18, fontFace: HEADER_FONT, color: DARK_TEXT, bold: true
});

// E/C/A guidance
const levels = [
  { level: "E", hint: "Beskriv for- och nackdelar med minst en livsstil", color: "059669" },
  { level: "C", hint: "Jamfor tva livsstilar och resonera om konsekvenser", color: "D97706" },
  { level: "A", hint: "Koppla privatekonomiska val till samhallsekonomin", color: "DC2626" }
];

levels.forEach((l, i) => {
  const x = 0.6 + i * 3.1;
  s10.addShape(pres.shapes.RECTANGLE, {
    x, y: 4.0, w: 2.9, h: 1.0,
    fill: { color: WHITE }, shadow: makeShadow()
  });
  s10.addShape(pres.shapes.RECTANGLE, {
    x, y: 4.0, w: 0.06, h: 1.0,
    fill: { color: l.color }
  });
  s10.addText(l.level, {
    x: x + 0.15, y: 4.05, w: 0.5, h: 0.4,
    fontSize: 18, fontFace: HEADER_FONT, color: l.color, bold: true
  });
  s10.addText(l.hint, {
    x: x + 0.15, y: 4.4, w: 2.6, h: 0.5,
    fontSize: 11, fontFace: BODY_FONT, color: DARK_TEXT
  });
});

s10.addNotes("Sjalvstandig ovning (5 min skrivande + 5 min EPA). Lat eleverna skriva enskilt forst. De som ar klara snabbt kan lagga till: 'Vad hander om Alex bara jobbar halvtid?' Efter 5 min: EPA - Enskilt klart, Par 2 min, Alla 3 min. Fraga: 'Vems ansvar ar det om Alex hamnar i ekonomiska problem - individens eller samhallets?'");

// ============ SLIDE 11: EPA - Ansvarsfragen ============
let s11 = pres.addSlide();
s11.background = { color: PRIMARY };

s11.addText("EPA: Vem bar ansvaret?", {
  x: 0.6, y: 0.3, w: 8.8, h: 0.6,
  fontSize: 16, fontFace: BODY_FONT, color: "8BA8C0", charSpacing: 2
});

s11.addText('"Ar det Alex eget fel om hen hamnar i ekonomiska problem - eller handlar det om vilken lon arbetsmarknaden erbjuder unga?"', {
  x: 0.8, y: 1.0, w: 8.4, h: 1.5,
  fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true, align: "center"
});

// Two perspectives
s11.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.0, w: 4.2, h: 1.8,
  fill: { color: "0A4B6E" }
});
s11.addText("Individens ansvar", {
  x: 0.7, y: 3.1, w: 3.8, h: 0.4,
  fontSize: 16, fontFace: HEADER_FONT, color: HIGHLIGHT, bold: true
});
s11.addText([
  { text: "Man valjer sin livsstil", options: { bullet: true, breakLine: true, fontSize: 13, color: "B0D4E8" } },
  { text: "Sparande ar ett val", options: { bullet: true, breakLine: true, fontSize: 13, color: "B0D4E8" } },
  { text: "Kunskap om ekonomi hjalper", options: { bullet: true, fontSize: 13, color: "B0D4E8" } }
], { x: 0.7, y: 3.5, w: 3.8, h: 1.2, fontFace: BODY_FONT });

s11.addShape(pres.shapes.RECTANGLE, {
  x: 5.3, y: 3.0, w: 4.2, h: 1.8,
  fill: { color: "0A4B6E" }
});
s11.addText("Samhallets ansvar", {
  x: 5.5, y: 3.1, w: 3.8, h: 0.4,
  fontSize: 16, fontFace: HEADER_FONT, color: HIGHLIGHT, bold: true
});
s11.addText([
  { text: "Loner satts av marknaden", options: { bullet: true, breakLine: true, fontSize: 13, color: "B0D4E8" } },
  { text: "Hyresmarknaden ar svartillganglig", options: { bullet: true, breakLine: true, fontSize: 13, color: "B0D4E8" } },
  { text: "Socialforsakringar finns av en anledning", options: { bullet: true, fontSize: 13, color: "B0D4E8" } }
], { x: 5.5, y: 3.5, w: 3.8, h: 1.2, fontFace: BODY_FONT });

s11.addText("Enskilt 2 min → Par 2 min → Helklass 3 min", {
  x: 0.6, y: 5.1, w: 8.8, h: 0.3,
  fontSize: 12, fontFace: BODY_FONT, color: "8BA8C0", italic: true, align: "center"
});

s11.addNotes("EPA-diskussion (5 min). Medvetet polariserande fraga. Poang: ekonomisk situation ar sallan bara eget ansvar ELLER bara samhallets - det ar en blandning. Lyft strukturella begransningar (lon, hyresmarknad) och individuella val. Undvik att ta stallning sjalv - lat eleverna resonera. Samla 2-3 svar fran helklass.");

// ============ SLIDE 12: Exit ticket ============
let s12 = pres.addSlide();
s12.background = { color: WHITE };

s12.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.4,
  fill: { color: PRIMARY }
});

s12.addText("Exit ticket", {
  x: 0.6, y: 0.7, w: 8.8, h: 0.6,
  fontSize: 32, fontFace: HEADER_FONT, color: PRIMARY, bold: true
});

s12.addShape(pres.shapes.RECTANGLE, {
  x: 1.0, y: 1.6, w: 8.0, h: 2.5,
  fill: { color: LIGHT_BG }, shadow: makeShadow()
});
s12.addShape(pres.shapes.RECTANGLE, {
  x: 1.0, y: 1.6, w: 8.0, h: 0.06,
  fill: { color: HIGHLIGHT }
});

s12.addText('"Alex overraskande bilreparation kostar 8 000 kr."', {
  x: 1.3, y: 1.8, w: 7.4, h: 0.6,
  fontSize: 18, fontFace: HEADER_FONT, color: DARK_TEXT, bold: true, align: "center"
});

s12.addText("Beskriv hur respektive livsstil klarar det - och vad det sager om privatekonomiska val.", {
  x: 1.3, y: 2.5, w: 7.4, h: 0.8,
  fontSize: 16, fontFace: BODY_FONT, color: DARK_TEXT, align: "center"
});

s12.addText("Skriv ditt svar pa lappen.", {
  x: 1.3, y: 3.4, w: 7.4, h: 0.4,
  fontSize: 14, fontFace: BODY_FONT, color: MUTED, italic: true, align: "center"
});

// Preview next lesson
s12.addShape(pres.shapes.RECTANGLE, {
  x: 1.5, y: 4.5, w: 7.0, h: 0.7,
  fill: { color: ACCENT }
});
s12.addText("Nasta gang: 'Vad hander om...?' - Risker, val och konsekvenser", {
  x: 1.7, y: 4.5, w: 6.6, h: 0.7,
  fontSize: 14, fontFace: BODY_FONT, color: "B0D4E8", italic: true, valign: "middle", align: "center"
});

s12.addNotes("Avslut (3 min). Dela ut lappar. Exit ticket testar forstaelse for buffert, prioritering och konsekvenstankande. Samla in och sortera i tre hogar: forstod, osaker, missade. Resultaten informerar lektion 4 om risker och skuldfalla. Preview: 'Nasta gang staller vi Alex infor svara val - vad hander nar ovantade utgifter dyker upp?'");

// Save
const outPath = "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-parallel-generation/with_skill/outputs/presentation-lektion-3.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("Created: " + outPath);
});
