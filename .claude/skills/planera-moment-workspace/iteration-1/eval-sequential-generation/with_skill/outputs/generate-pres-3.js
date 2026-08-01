const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cornelius Agent";
pres.title = "Lektion 3: Räcker pengarna?";

const PRIMARY = "1A3C5E";
const SECONDARY = "2E5A88";
const ACCENT = "4A90C4";
const LIGHT = "E8F0F8";
const WHITE = "FFFFFF";
const DARK = "0F2337";
const MUTED = "6B7B8D";
const WARN = "C4524A";
const HEADER_FONT = "Georgia";
const BODY_FONT = "Calibri";
const makeShadow = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 });

// SLIDE 1: Title
let s1 = pres.addSlide();
s1.background = { color: DARK };
s1.addText("Räcker pengarna?", { x: 0.8, y: 1.2, w: 8.4, h: 2.0, fontSize: 44, fontFace: HEADER_FONT, color: WHITE, bold: true });
s1.addText("Privatekonomi och budget", { x: 0.8, y: 3.2, w: 8.4, h: 0.6, fontSize: 20, fontFace: BODY_FONT, color: ACCENT });
s1.addText("Lektion 3 | Ungas ekonomi | Samhällskunskap 1a1", { x: 0.8, y: 4.5, w: 8.4, h: 0.4, fontSize: 12, fontFace: BODY_FONT, color: MUTED });
s1.addNotes("Titelslide. Koppla till lektion 2: Alex har valt jobb. Nu ska han flytta hemifrån. Räcker pengarna? Tid: 30 sek.");

// SLIDE 2: Retrieval + Gissa nettolön
let s2 = pres.addSlide();
s2.background = { color: WHITE };
s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: PRIMARY } });
s2.addText("Alex tjänar 22 000 kr i månaden", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
s2.addText("Bruttolön", { x: 3.5, y: 1.5, w: 3, h: 0.8, fontSize: 48, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s2.addText("22 000 kr", { x: 3.0, y: 2.3, w: 4, h: 0.8, fontSize: 44, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s2.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 3.5, w: 5, h: 0.8, fill: { color: ACCENT }, shadow: makeShadow() });
s2.addText("Hur mycket tror ni Alex får ut efter skatt?", { x: 2.5, y: 3.5, w: 5, h: 0.8, fontSize: 16, fontFace: BODY_FONT, color: WHITE, align: "center", valign: "middle", bold: true });
s2.addText("Skriv din gissning på en lapp!", { x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED });
s2.addNotes("Engagerande öppning. Låt alla gissa. De flesta unga har ingen aning om hur mycket skatt man betalar. Samla gissningar. Visa sedan svaret på nästa slide. Tid: 2 min.");

// SLIDE 3: Svaret - nettolön
let s3 = pres.addSlide();
s3.background = { color: LIGHT };
s3.addText("Svaret:", { x: 0.8, y: 0.5, w: 9, h: 0.5, fontSize: 18, fontFace: BODY_FONT, color: MUTED });
// Two columns: brutto vs netto
s3.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 1.3, w: 4, h: 3.0, fill: { color: WHITE }, shadow: makeShadow() });
s3.addText("Brutto", { x: 0.8, y: 1.5, w: 4, h: 0.5, fontSize: 16, fontFace: BODY_FONT, color: MUTED, align: "center" });
s3.addText("22 000 kr", { x: 0.8, y: 2.2, w: 4, h: 0.8, fontSize: 36, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s3.addText("Innan skatt", { x: 0.8, y: 3.2, w: 4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED, align: "center" });

s3.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.3, w: 4, h: 3.0, fill: { color: SECONDARY }, shadow: makeShadow() });
s3.addText("Netto", { x: 5.2, y: 1.5, w: 4, h: 0.5, fontSize: 16, fontFace: BODY_FONT, color: ACCENT, align: "center" });
s3.addText("~17 500 kr", { x: 5.2, y: 2.2, w: 4, h: 0.8, fontSize: 36, fontFace: HEADER_FONT, color: WHITE, bold: true, align: "center" });
s3.addText("Det Alex faktiskt får", { x: 5.2, y: 3.2, w: 4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: LIGHT, align: "center" });

s3.addText("Källa: Skatteverkets tabell 2024/25 — kommunalskatt ca 32%", { x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 11, fontFace: BODY_FONT, color: MUTED });
s3.addNotes("Avslöja svaret. Reaktion? Koppla tillbaka till kretsloppet: vart går skatten? Mål: efter lektionen ska ni kunna göra en realistisk budget. Tid: 2 min.");

// SLIDE 4: Fasta vs rörliga utgifter
let s4 = pres.addSlide();
s4.background = { color: WHITE };
s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s4.addText("Vilka utgifter kan Alex inte undvika?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
// Two columns
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.3, w: 4.2, h: 3.2, fill: { color: LIGHT } });
s4.addText("Fasta utgifter", { x: 0.5, y: 1.4, w: 4.2, h: 0.5, fontSize: 18, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s4.addText([
  { text: "Hyra: 6 500 kr", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "Mat: 3 500 kr", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "Transport: 900 kr", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "Mobil/internet: 400 kr", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "Försäkring: 200 kr", options: { bullet: true, fontSize: 14, fontFace: BODY_FONT } }
], { x: 0.8, y: 2.1, w: 3.6, h: 2.2, color: "333333" });

s4.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.3, w: 4.2, h: 3.2, fill: { color: LIGHT } });
s4.addText("Rörliga utgifter", { x: 5.3, y: 1.4, w: 4.2, h: 0.5, fontSize: 18, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s4.addText([
  { text: "Nöjen/fika: ?", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "Kläder: ?", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "Sparande: ?", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "Oförutsett: ?", options: { bullet: true, fontSize: 14, fontFace: BODY_FONT } }
], { x: 5.6, y: 2.1, w: 3.6, h: 2.2, color: "333333" });

s4.addText("Källa: Konsumentverket — Referensvärden för hushållsutgifter", { x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 11, fontFace: BODY_FONT, color: MUTED });
s4.addNotes("Visa fasta utgifter med verkliga siffror. Rörliga är frågetecken - det är vad eleverna ska bestämma i budgetövningen. Kontrollfråga: vad händer om hyran höjs? Tid: 3 min.");

// SLIDE 5: Diskussion
let s5 = pres.addSlide();
s5.background = { color: PRIMARY };
s5.addText("Diskutera med din granne (1 min)", { x: 0.5, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s5.addText("Alex har 17 500 kr.\nFasta utgifter: ~11 500 kr.\nKvar: 6 000 kr.", { x: 0.8, y: 1.3, w: 8.4, h: 1.5, fontSize: 28, fontFace: HEADER_FONT, color: WHITE, bold: true });
s5.addText("Hur borde Alex fördela\nde sista 6 000 kronorna?", { x: 0.8, y: 3.2, w: 8.4, h: 1.2, fontSize: 28, fontFace: HEADER_FONT, color: ACCENT, bold: true });
s5.addNotes("Snabb diskussion. Väck känslan av att 6000 kr inte är mycket. Lyft 2 svar. Övergång till budgetövning. Tid: 2 min.");

// SLIDE 6: Lån och ränta
let s6 = pres.addSlide();
s6.background = { color: WHITE };
s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s6.addText("Varför kostar ett lån mer ju längre man betalar?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 20, fontFace: HEADER_FONT, color: WHITE, bold: true });
// Example card
s6.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 1.3, w: 7, h: 3.0, fill: { color: LIGHT }, shadow: makeShadow() });
s6.addText("Exempel: Alex lånar 10 000 kr", { x: 1.5, y: 1.5, w: 7, h: 0.5, fontSize: 18, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s6.addText([
  { text: "Ränta 5%: Betalar tillbaka 10 500 kr", options: { breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Ränta 15% (snabblån): Betalar tillbaka 11 500 kr", options: { breakLine: true, fontSize: 16, fontFace: BODY_FONT, color: WARN, bold: true } },
  { text: "Om Alex bara betalar minimum: kan bli 15 000+ kr", options: { fontSize: 16, fontFace: BODY_FONT, color: WARN, bold: true } }
], { x: 2.0, y: 2.3, w: 6, h: 1.8, color: "333333" });
s6.addNotes("Förklara ränta med konkret exempel. Visa skillnaden mellan banklån och snabblån. Kontrollfråga: varför erbjuder företag snabblån om det kostar så mycket? Tid: 3 min.");

// SLIDE 7: Budgetövning
let s7 = pres.addSlide();
s7.background = { color: LIGHT };
s7.addText("Gör Alex budget!", { x: 0.8, y: 0.3, w: 9, h: 0.7, fontSize: 36, fontFace: HEADER_FONT, color: PRIMARY, bold: true });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.3, w: 4.3, h: 3.5, fill: { color: WHITE }, shadow: makeShadow() });
s7.addText([
  { text: "Steg 1 (8 min): Fyll i fasta utgifter", options: { breakLine: true, fontSize: 14, fontFace: BODY_FONT, bold: true } },
  { text: "med verkliga siffror", options: { breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Steg 2 (7 min): Fördela resten", options: { breakLine: true, fontSize: 14, fontFace: BODY_FONT, bold: true } },
  { text: "nöjen, sparande, oförutsett", options: { breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Steg 3 (5 min): Dra ett händelsekort!", options: { breakLine: true, fontSize: 14, fontFace: BODY_FONT, bold: true } },
  { text: "Oväntat: tandläkare, trasig mobil...", options: { fontSize: 14, fontFace: BODY_FONT } }
], { x: 0.8, y: 1.6, w: 3.7, h: 3.0, color: "333333" });

s7.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.3, w: 4.3, h: 3.5, fill: { color: SECONDARY }, shadow: makeShadow() });
s7.addText("Steg 4 (5 min):\nDiskutera i paret", { x: 5.5, y: 1.8, w: 3.7, h: 1.0, fontSize: 18, fontFace: HEADER_FONT, color: WHITE, bold: true });
s7.addText("Vilka val var svårast?\nVad prioriterade ni?\nVad offrade ni?", { x: 5.5, y: 3.0, w: 3.7, h: 1.5, fontSize: 16, fontFace: BODY_FONT, color: LIGHT });

s7.addText("25 minuter | Jobba i par", { x: 0.8, y: 5.0, w: 8.4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED });
s7.addNotes("Dela ut budgetmallar och verkliga priser. Händelsekorten skapar realism och engagemang. Cirkulera, ställ 'varför?'-frågor. Tid: 25 min totalt.");

// SLIDE 8: Exit ticket
let s8 = pres.addSlide();
s8.background = { color: DARK };
s8.addText("Exit ticket", { x: 0.8, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s8.addText("Nämn tre saker Alex\nmåste tänka på\ninnan han tar ett lån.", { x: 0.8, y: 1.3, w: 8.4, h: 1.8, fontSize: 28, fontFace: HEADER_FONT, color: WHITE, bold: true });
s8.addText("Förklara varför varje sak är viktig.", { x: 0.8, y: 3.3, w: 8.4, h: 0.6, fontSize: 20, fontFace: BODY_FONT, color: ACCENT, italic: true });
s8.addText("Nästa lektion: Alex ställs inför svåra val med riktiga konsekvenser", { x: 0.8, y: 4.8, w: 8.4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED });
s8.addNotes("Exit ticket. Tre saker + varför. Visar om de förstår lånemekanismer (ränta, amortering, löptid) eller bara ytliga svar. Tid: 3 min.");

pres.writeFile({ fileName: "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/presentation-lektion-3.pptx" })
  .then(() => console.log("presentation-lektion-3.pptx created successfully"));
