const pptxgen = require("pptxgenjs");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cornelius Agent";
pres.title = "Lektion 1: Vad händer med pengarna?";

// Color palette - Ocean/Trust theme for economics
const PRIMARY = "1A3C5E";
const SECONDARY = "2E5A88";
const ACCENT = "4A90C4";
const LIGHT = "E8F0F8";
const WHITE = "FFFFFF";
const DARK = "0F2337";
const MUTED = "6B7B8D";

const HEADER_FONT = "Georgia";
const BODY_FONT = "Calibri";

// Factory functions for reusable options (avoid mutation issues)
const makeShadow = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 });

// --- SLIDE 1: Title ---
let s1 = pres.addSlide();
s1.background = { color: DARK };
s1.addText("Vad händer med\npengarna?", { x: 0.8, y: 1.0, w: 8.4, h: 2.5, fontSize: 44, fontFace: HEADER_FONT, color: WHITE, bold: true });
s1.addText("Det ekonomiska kretsloppet", { x: 0.8, y: 3.3, w: 8.4, h: 0.6, fontSize: 20, fontFace: BODY_FONT, color: ACCENT });
s1.addText("Lektion 1 | Ungas ekonomi | Samhällskunskap 1a1", { x: 0.8, y: 4.5, w: 8.4, h: 0.4, fontSize: 12, fontFace: BODY_FONT, color: MUTED });
s1.addNotes("Titelslide. Välkomna eleverna. Berätta att vi idag ska följa pengarna genom samhället. Tid: 30 sek.");

// --- SLIDE 2: Hook / Ordmoln ---
let s2 = pres.addSlide();
s2.background = { color: WHITE };
s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: PRIMARY } });
s2.addText("Vad tänker ni på när ni hör \"ekonomi\"?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
s2.addText([
  { text: "Skriv tre ord på en lapp", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Privatekonomi? Samhällsekonomi? Båda?", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Vi samlar era ord på tavlan", options: { bullet: true, fontSize: 16, fontFace: BODY_FONT } }
], { x: 0.8, y: 1.5, w: 8.4, h: 2.5, color: "333333" });
s2.addNotes("Retrieval review / förkunskapsaktivering. Dela ut lappar. Ge 2 min att skriva. Samla ord på tavlan och sortera: privatekonomi vs samhällsekonomi. Poäng: dessa hänger ihop! Tid: 5 min.");

// --- SLIDE 3: Möt Alex ---
let s3 = pres.addSlide();
s3.background = { color: LIGHT };
s3.addText("Möt Alex, 19 år", { x: 0.8, y: 0.3, w: 9, h: 0.7, fontSize: 36, fontFace: HEADER_FONT, color: PRIMARY, bold: true });
s3.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 1.3, w: 4, h: 3.2, fill: { color: WHITE }, shadow: makeShadow() });
s3.addText([
  { text: "Alex ska flytta hemifrån", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Behöver hitta jobb och bostad", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Måste göra en budget", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Navigera det ekonomiska systemet", options: { bullet: true, fontSize: 16, fontFace: BODY_FONT } }
], { x: 1.1, y: 1.6, w: 3.5, h: 2.6, color: "333333" });
s3.addShape(pres.shapes.RECTANGLE, { x: 5.4, y: 1.3, w: 4, h: 3.2, fill: { color: SECONDARY }, shadow: makeShadow() });
s3.addText("Vad behöver Alex\ntänka på\nekonomiskt?", { x: 5.7, y: 1.8, w: 3.5, h: 2.0, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true, align: "center", valign: "middle" });
s3.addNotes("Introducera Alex - vårt genomgående case. Fråga klassen öppet: vad behöver Alex tänka på? Samla svar. Presentera lektionens mål. Tid: 2 min.");

// --- SLIDE 4: Dagens mål ---
let s4 = pres.addSlide();
s4.background = { color: WHITE };
s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: PRIMARY } });
s4.addText("Vad ska ni kunna efter idag?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
s4.addText([
  { text: "Förklara hur pengar rör sig mellan hushåll, företag och stat", options: { bullet: true, breakLine: true, fontSize: 18, fontFace: BODY_FONT, bold: true } },
  { text: "Beskriva varför det spelar roll för Alex", options: { bullet: true, breakLine: true, fontSize: 18, fontFace: BODY_FONT, bold: true } },
  { text: "Visa hur en förändring sprider sig genom kretsloppet", options: { bullet: true, fontSize: 18, fontFace: BODY_FONT, bold: true } }
], { x: 0.8, y: 1.5, w: 8.4, h: 3.0, color: "333333" });
s4.addNotes("Visa målen tydligt. Gå igenom varje punkt. Betona: efter lektionen ska ni kunna förklara detta med egna ord. Tid: 1 min.");

// --- SLIDE 5: Kretsloppet steg 1 - Hushållen ---
let s5 = pres.addSlide();
s5.background = { color: WHITE };
s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s5.addText("Varifrån kommer Alex pengar?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
s5.addText("Steg 1: Hushållen", { x: 0.8, y: 1.2, w: 8.4, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: MUTED });
s5.addText([
  { text: "Alex är en del av ett hushåll", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Hushållet konsumerar varor och tjänster", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Hushållet erbjuder arbetskraft", options: { bullet: true, fontSize: 16, fontFace: BODY_FONT } }
], { x: 0.8, y: 1.8, w: 8.4, h: 2.5, color: "333333" });
s5.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 4.2, w: 5, h: 0.8, fill: { color: ACCENT }, shadow: makeShadow() });
s5.addText("Kontrollfråga: Varifrån får Alex pengar?", { x: 2.5, y: 4.2, w: 5, h: 0.8, fontSize: 14, fontFace: BODY_FONT, color: WHITE, align: "center", valign: "middle", bold: true });
s5.addNotes("Bygg kretsloppet steg för steg. Börja med hushållen. Rita på tavlan samtidigt. Alex som konsument och arbetstagare. Kontrollfråga efter steg 1. Tid: 3 min.");

// --- SLIDE 6: Kretsloppet steg 2 - Företagen ---
let s6 = pres.addSlide();
s6.background = { color: WHITE };
s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s6.addText("Vart tar pengarna vägen när Alex handlar?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
s6.addText("Steg 2: Företagen", { x: 0.8, y: 1.2, w: 8.4, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: MUTED });
s6.addText([
  { text: "Företag säljer varor och tjänster till hushållen", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Företag betalar lön till sina anställda (som Alex)", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Företag betalar skatt till staten", options: { bullet: true, fontSize: 16, fontFace: BODY_FONT } }
], { x: 0.8, y: 1.8, w: 8.4, h: 2.5, color: "333333" });
s6.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 4.2, w: 5, h: 0.8, fill: { color: ACCENT }, shadow: makeShadow() });
s6.addText("Kontrollfråga: Vart går pengarna härifrån?", { x: 2.5, y: 4.2, w: 5, h: 0.8, fontSize: 14, fontFace: BODY_FONT, color: WHITE, align: "center", valign: "middle", bold: true });
s6.addNotes("Lägg till företagen i kretsloppet på tavlan. Visa flödena: konsumtion från hushåll → företag, lön från företag → hushåll. Kontrollfråga. Tid: 3 min.");

// --- SLIDE 7: Diskussionsslide ---
let s7 = pres.addSlide();
s7.background = { color: PRIMARY };
s7.addText("Diskutera med din granne (1 min)", { x: 0.5, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s7.addText("Om Alex förlorar jobbet\n- vilka pengaflöden\npåverkas?", { x: 0.8, y: 1.5, w: 8.4, h: 2.5, fontSize: 32, fontFace: HEADER_FONT, color: WHITE, bold: true });
s7.addText("Tänk på alla aktörer i kretsloppet", { x: 0.8, y: 4.3, w: 8.4, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: ACCENT });
s7.addNotes("Diskussionspaus. Låt eleverna diskutera i 1 minut. Lyssna efter: nämner de effekten på företag, stat, andra hushåll? Lyft 1-2 svar. Tid: 2 min.");

// --- SLIDE 8: Kretsloppet steg 3 - Offentlig sektor ---
let s8 = pres.addSlide();
s8.background = { color: WHITE };
s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s8.addText("Vad får Alex tillbaka av skatten?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
s8.addText("Steg 3: Offentlig sektor", { x: 0.8, y: 1.2, w: 8.4, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: MUTED });
s8.addText([
  { text: "Staten samlar in skatt från hushåll och företag", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Omfördelar genom bidrag, a-kassa, studiestöd", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Finansierar vård, skola, infrastruktur", options: { bullet: true, fontSize: 16, fontFace: BODY_FONT } }
], { x: 0.8, y: 1.8, w: 8.4, h: 2.5, color: "333333" });
s8.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 4.2, w: 5, h: 0.8, fill: { color: ACCENT }, shadow: makeShadow() });
s8.addText("Källa: SCB — Hushållens utgifter 2024", { x: 2.5, y: 4.2, w: 5, h: 0.8, fontSize: 12, fontFace: BODY_FONT, color: WHITE, align: "center", valign: "middle" });
s8.addNotes("Sista steget i kretsloppet. Visa att skatten inte 'försvinner' utan kommer tillbaka. Nämn SCB-statistik om hushållens utgifter. Koppla: Alex betalar skatt → får tillbaka sjukvård, vägar, eventuellt studiestöd. Tid: 4 min.");

// --- SLIDE 9: Uppgiftsinstruktion ---
let s9 = pres.addSlide();
s9.background = { color: LIGHT };
s9.addText("Nu är det er tur!", { x: 0.8, y: 0.3, w: 9, h: 0.7, fontSize: 36, fontFace: HEADER_FONT, color: PRIMARY, bold: true });
s9.addText("Bygg Alex kretslopp i par", { x: 0.8, y: 1.2, w: 9, h: 0.5, fontSize: 20, fontFace: BODY_FONT, color: SECONDARY, bold: true });
s9.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 2.0, w: 8.4, h: 2.8, fill: { color: WHITE }, shadow: makeShadow() });
s9.addText([
  { text: "1. Placera aktörerna: Alex hushåll, arbetsgivaren, kommunen", options: { breakLine: true, fontSize: 15, fontFace: BODY_FONT } },
  { text: "2. Rita pengaflöden med pilar (lön, skatt, konsumtion...)", options: { breakLine: true, fontSize: 15, fontFace: BODY_FONT } },
  { text: "3. Diskutera: Vad händer om Alex förlorar jobbet?", options: { fontSize: 15, fontFace: BODY_FONT } }
], { x: 1.1, y: 2.3, w: 7.8, h: 2.2, color: "333333" });
s9.addText("25 minuter | A3-papper | Jobba i par", { x: 0.8, y: 5.0, w: 8.4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED });
s9.addNotes("Ge tydliga instruktioner. Dela ut A3-papper. Visa stegen på sliden. Betona steg 3 - det är analysfrågan. Cirkulera och ställ fördjupande frågor. Tid: 25 min för uppgiften.");

// --- SLIDE 10: Diskussionsslide 2 ---
let s10 = pres.addSlide();
s10.background = { color: PRIMARY };
s10.addText("Diskutera i paret (2 min)", { x: 0.5, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s10.addText("Vilka pilar i ert\nkretslopp förändras\nom skatten höjs?", { x: 0.8, y: 1.5, w: 8.4, h: 2.5, fontSize: 32, fontFace: HEADER_FONT, color: WHITE, bold: true });
s10.addText("Vem vinner? Vem förlorar?", { x: 0.8, y: 4.3, w: 8.4, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: ACCENT });
s10.addNotes("Övergång till scenarioanalys. Diskutera kort i par utifrån deras ritade kretslopp. Sedan övergång till individuell scenarioanalys. Tid: 2 min.");

// --- SLIDE 11: Exit ticket ---
let s11 = pres.addSlide();
s11.background = { color: DARK };
s11.addText("Exit ticket", { x: 0.8, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s11.addText("Förklara med egna ord varför\ndet som händer i Alex plånbok\npåverkar hela samhällsekonomin.", { x: 0.8, y: 1.5, w: 8.4, h: 2.0, fontSize: 28, fontFace: HEADER_FONT, color: WHITE, bold: true });
s11.addText("Ge ett konkret exempel.", { x: 0.8, y: 3.5, w: 8.4, h: 0.6, fontSize: 20, fontFace: BODY_FONT, color: ACCENT, italic: true });
s11.addText("Nästa lektion: Alex söker jobb — vi tittar på arbetsmarknaden", { x: 0.8, y: 4.8, w: 8.4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED });
s11.addNotes("Exit ticket. Dela ut lappar. Ge 3 minuter att skriva. Samla in. Preview av nästa lektion om arbetsmarknaden. Tid: 3 min.");

pres.writeFile({ fileName: "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/presentation-lektion-1.pptx" })
  .then(() => console.log("presentation-lektion-1.pptx created successfully"))
  .catch(err => console.error(err));
