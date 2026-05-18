const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Historia 1b";
pres.title = "Verktyg och kruttunnor - Aktör och struktur";

// Colors
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
s1.addText("VERKTYG OCH\nKRUTTUNNOR", {
  x: 0.8, y: 1.0, w: 8.4, h: 2.2,
  fontSize: 44, fontFace: HEADER_FONT, color: "FFFFFF", bold: true,
  lineSpacingMultiple: 1.1
});
s1.addText("Aktör och struktur - begrepp och orsaker", {
  x: 0.8, y: 3.2, w: 8.4, h: 0.6,
  fontSize: 18, fontFace: BODY_FONT, color: "AAAAAA"
});
s1.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 4.0, w: 1.5, h: 0.06, fill: { color: ACCENT }
});
s1.addText("Historia 1b  |  Första världskriget", {
  x: 0.8, y: 4.3, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: "888888"
});

// --- SLIDE 2: Den stora frågan ---
let s2 = pres.addSlide();
s2.background = { color: DARK };
s2.addText("DEN STORA FRÅGAN", {
  x: 0.8, y: 0.5, w: 8.4, h: 0.6,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 6
});
s2.addText("Var första världskriget\noundvikligt - eller hade det\nkunnat stoppas av andra beslut?", {
  x: 0.8, y: 1.3, w: 8.4, h: 2.5,
  fontSize: 32, fontFace: HEADER_FONT, color: "FFFFFF", italic: true,
  lineSpacingMultiple: 1.3
});
s2.addText("Den här frågan följer oss genom hela momentet.", {
  x: 0.8, y: 4.2, w: 8.4, h: 0.5,
  fontSize: 16, fontFace: BODY_FONT, color: "999999"
});

// --- SLIDE 3: Aktör och struktur - definitioner ---
let s3 = pres.addSlide();
s3.background = { color: LIGHT_BG };
s3.addText("Vad menar vi med aktör och struktur?", {
  x: 0.8, y: 0.3, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});
// Aktör card
s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.6, y: 1.3, w: 4.0, h: 3.2, fill: { color: CARD_BG },
  shadow: makeShadow()
});
s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.6, y: 1.3, w: 0.08, h: 3.2, fill: { color: ACCENT }
});
s3.addText("AKTÖR", {
  x: 1.0, y: 1.5, w: 3.4, h: 0.5,
  fontSize: 20, fontFace: HEADER_FONT, color: ACCENT, bold: true
});
s3.addText([
  { text: "En enskild person som fattar beslut och handlar", options: { breakLine: true, fontSize: 15, bold: true } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Kejsare, politiker, generaler, diplomater", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Exempel: Wilhelm II bestämmer sig för att ge Österrike sitt stöd", options: { fontSize: 13, italic: true, color: MUTED } }
], { x: 1.0, y: 2.1, w: 3.4, h: 2.2, fontFace: BODY_FONT, color: DARK, valign: "top" });

// Struktur card
s3.addShape(pres.shapes.RECTANGLE, {
  x: 5.4, y: 1.3, w: 4.0, h: 3.2, fill: { color: CARD_BG },
  shadow: makeShadow()
});
s3.addShape(pres.shapes.RECTANGLE, {
  x: 5.4, y: 1.3, w: 0.08, h: 3.2, fill: { color: "2C3E50" }
});
s3.addText("STRUKTUR", {
  x: 5.8, y: 1.5, w: 3.4, h: 0.5,
  fontSize: 20, fontFace: HEADER_FONT, color: "2C3E50", bold: true
});
s3.addText([
  { text: "Långsiktiga mönster och system som begränsar eller möjliggör", options: { breakLine: true, fontSize: 15, bold: true } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Allianser, ekonomi, nationalism, teknik", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Exempel: Allianssystemet tvingar in alla stormakter i kriget", options: { fontSize: 13, italic: true, color: MUTED } }
], { x: 5.8, y: 2.1, w: 3.4, h: 2.2, fontFace: BODY_FONT, color: DARK, valign: "top" });

s3.addText("\"Strukturer är spelreglerna - aktörerna spelar spelet.\"", {
  x: 0.8, y: 4.7, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: MUTED, italic: true, align: "center"
});

// --- SLIDE 4: Vardagsexempel ---
let s4 = pres.addSlide();
s4.background = { color: LIGHT_BG };
s4.addText("Ett vardagsexempel", {
  x: 0.8, y: 0.3, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});
s4.addShape(pres.shapes.RECTANGLE, {
  x: 1.5, y: 1.3, w: 7.0, h: 3.0, fill: { color: CARD_BG },
  shadow: makeShadow()
});
s4.addText([
  { text: "Du bestämmer dig för att köpa en glass", options: { breakLine: true, fontSize: 18, bold: true, color: ACCENT } },
  { text: "= aktörens val", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 12 } },
  { text: "Men priset, butikens öppettider och din plånbok sätter ramarna", options: { breakLine: true, fontSize: 18, bold: true, color: "2C3E50" } },
  { text: "= strukturens begränsningar", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 12 } },
  { text: "Du väljer - men inte fritt. Strukturen bestämmer vad som är möjligt.", options: { fontSize: 15, italic: true, color: DARK } }
], { x: 2.0, y: 1.6, w: 6.0, h: 2.5, fontFace: BODY_FONT, valign: "middle" });

// --- SLIDE 5: Strukturell orsak 1 - Allianssystemet ---
let s5 = pres.addSlide();
s5.background = { color: LIGHT_BG };
s5.addText("STRUKTUR 1", {
  x: 0.8, y: 0.3, w: 3, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 4
});
s5.addText("Allianssystemet", {
  x: 0.8, y: 0.6, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});
s5.addText([
  { text: "Trippelalliansen", options: { breakLine: true, fontSize: 18, bold: true, color: ACCENT } },
  { text: "Tyskland, Österrike-Ungern, Italien", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "Trippelententen", options: { breakLine: true, fontSize: 18, bold: true, color: "2C3E50" } },
  { text: "Frankrike, Ryssland, Storbritannien", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "Konsekvens: En lokal konflikt drar automatiskt in alla stormakter", options: { breakLine: true, fontSize: 15, bold: true, color: DARK } },
], { x: 0.8, y: 1.5, w: 5.0, h: 3.0, fontFace: BODY_FONT, valign: "top" });

s5.addShape(pres.shapes.RECTANGLE, {
  x: 6.2, y: 1.5, w: 3.3, h: 2.8, fill: { color: CARD_BG },
  shadow: makeShadow()
});
s5.addText([
  { text: "Bismarcks system", options: { breakLine: true, fontSize: 14, bold: true } },
  { text: "Komplex jämvikt som isolerade Frankrike", options: { breakLine: true, fontSize: 12, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "↓ Efter Bismarck", options: { breakLine: true, fontSize: 14, bold: true, color: ACCENT } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Europa delades i två fasta, väpnade läger", options: { fontSize: 12, color: MUTED } },
], { x: 6.5, y: 1.7, w: 2.8, h: 2.4, fontFace: BODY_FONT, color: DARK, valign: "top" });

// --- SLIDE 6: Strukturell orsak 2 - Nationalism ---
let s6 = pres.addSlide();
s6.background = { color: LIGHT_BG };
s6.addText("STRUKTUR 2", {
  x: 0.8, y: 0.3, w: 3, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 4
});
s6.addText("Nationalism", {
  x: 0.8, y: 0.6, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});
s6.addText([
  { text: "Alsace-Lorraine", options: { breakLine: true, fontSize: 16, bold: true } },
  { text: "Frankrike ville ha revansch efter förlusten 1871", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "Panslavism på Balkan", options: { breakLine: true, fontSize: 16, bold: true } },
  { text: "Serbisk nationalism hotade Österrike-Ungerns existens", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "Mordet i Sarajevo: inte slump utan struktur", options: { breakLine: true, fontSize: 15, bold: true, color: ACCENT } },
  { text: "Det osmanska rikets sönderfall skapade en krutdurk", options: { fontSize: 13, color: MUTED } },
], { x: 0.8, y: 1.5, w: 8.4, h: 3.5, fontFace: BODY_FONT, color: DARK, valign: "top" });

// --- SLIDE 7: Strukturell orsak 3 - Imperialism ---
let s7 = pres.addSlide();
s7.background = { color: LIGHT_BG };
s7.addText("STRUKTUR 3", {
  x: 0.8, y: 0.3, w: 3, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 4
});
s7.addText("Imperialism", {
  x: 0.8, y: 0.6, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});
s7.addText([
  { text: "\"En plats i solen\"", options: { breakLine: true, fontSize: 18, bold: true, italic: true, color: ACCENT } },
  { text: "Tysklands strävan efter global prestige", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "Marockokriserna (1905, 1911)", options: { breakLine: true, fontSize: 16, bold: true } },
  { text: "Tyskland försökte splittra Frankrike och Storbritannien", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "Istället drevs de närmare varandra", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "Koloniala tvister i Afrika påverkade maktbalansen i Europa", options: { fontSize: 15, bold: true, color: DARK } },
], { x: 0.8, y: 1.5, w: 8.4, h: 3.5, fontFace: BODY_FONT, color: DARK, valign: "top" });

// --- SLIDE 8: Strukturell orsak 4 - Kapprustning ---
let s8 = pres.addSlide();
s8.background = { color: LIGHT_BG };
s8.addText("STRUKTUR 4", {
  x: 0.8, y: 0.3, w: 3, h: 0.4,
  fontSize: 12, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 4
});
s8.addText("Kapprustning", {
  x: 0.8, y: 0.6, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});
s8.addText([
  { text: "Flottkapprustningen", options: { breakLine: true, fontSize: 16, bold: true } },
  { text: "Tysklands flottbygge tolkades som direkt hot av Storbritannien", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "Drev Storbritannien ur sin isolering och in i allianser", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "Schlieffenplanen", options: { breakLine: true, fontSize: 16, bold: true, color: ACCENT } },
  { text: "Snabbt anfall på Frankrike genom Belgien vid krig med Ryssland", options: { breakLine: true, fontSize: 14, color: MUTED } },
  { text: "\"När tågen börjat rulla gick det inte att stoppa\"", options: { breakLine: true, fontSize: 14, italic: true, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 10 } },
  { text: "Militär logik tog över diplomatisk kontroll", options: { fontSize: 15, bold: true, color: DARK } },
], { x: 0.8, y: 1.5, w: 8.4, h: 3.5, fontFace: BODY_FONT, color: DARK, valign: "top" });

// --- SLIDE 9: Diskussionsfråga ---
let s9 = pres.addSlide();
s9.background = { color: DARK };
s9.addText("DISKUTERA", {
  x: 0.8, y: 0.5, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 6
});
s9.addText("Vilken av de fyra\nstrukturerna var viktigast\nför att göra krig\nmer sannolikt?", {
  x: 0.8, y: 1.3, w: 8.4, h: 2.5,
  fontSize: 32, fontFace: HEADER_FONT, color: "FFFFFF",
  lineSpacingMultiple: 1.3
});
s9.addText([
  { text: "EPA: Tänk enskilt (2 min) → Diskutera i par (3 min) → Dela i helklass", options: { fontSize: 14, color: "999999" } }
], { x: 0.8, y: 4.2, w: 8.4, h: 0.5, fontFace: BODY_FONT });

// --- SLIDE 10: Sammanfattning ---
let s10 = pres.addSlide();
s10.background = { color: LIGHT_BG };
s10.addText("Fyra kruttunnor", {
  x: 0.8, y: 0.3, w: 8.4, h: 0.7,
  fontSize: 28, fontFace: HEADER_FONT, color: DARK, bold: true
});

const summaryItems = [
  { label: "1. Allianssystemet", desc: "Europa delat i två väpnade läger" },
  { label: "2. Nationalism", desc: "Revanschlust och panslavism" },
  { label: "3. Imperialism", desc: "Kamp om prestige och kolonier" },
  { label: "4. Kapprustning", desc: "Flottkapprustning och Schlieffenplanen" },
];

summaryItems.forEach((item, i) => {
  const y = 1.3 + i * 1.0;
  s10.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y, w: 8.4, h: 0.8, fill: { color: CARD_BG },
    shadow: makeShadow()
  });
  s10.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y, w: 0.08, h: 0.8, fill: { color: ACCENT }
  });
  s10.addText(item.label, {
    x: 1.2, y, w: 3.0, h: 0.8,
    fontSize: 16, fontFace: HEADER_FONT, color: DARK, bold: true, valign: "middle", margin: 0
  });
  s10.addText(item.desc, {
    x: 4.5, y, w: 4.5, h: 0.8,
    fontSize: 14, fontFace: BODY_FONT, color: MUTED, valign: "middle", margin: 0
  });
});

s10.addText("Alla fyra pekade mot krig. Men räcker det som förklaring?", {
  x: 0.8, y: 4.8, w: 8.4, h: 0.4,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, italic: true, align: "center"
});

// --- SLIDE 11: Preview ---
let s11 = pres.addSlide();
s11.background = { color: DARK };
s11.addText("NÄSTA LEKTION", {
  x: 0.8, y: 0.5, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: BODY_FONT, color: ACCENT, bold: true, charSpacing: 6
});
s11.addText("Julikrisen\n37 dagar som förändrade världen", {
  x: 0.8, y: 1.5, w: 8.4, h: 2.0,
  fontSize: 30, fontFace: HEADER_FONT, color: "FFFFFF",
  lineSpacingMultiple: 1.3
});
s11.addText("Vi tittar på vad som faktiskt hände sommaren 1914 -\noch vilka aktörer som fattade de avgörande besluten.", {
  x: 0.8, y: 3.8, w: 8.4, h: 0.8,
  fontSize: 16, fontFace: BODY_FONT, color: "999999",
  lineSpacingMultiple: 1.4
});

pres.writeFile({ fileName: "presentation-lektion-1.pptx" })
  .then(() => console.log("presentation-lektion-1.pptx generated"))
  .catch(e => console.error(e));
