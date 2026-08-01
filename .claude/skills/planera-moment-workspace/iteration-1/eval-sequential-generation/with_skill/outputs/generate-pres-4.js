const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cornelius Agent";
pres.title = "Lektion 4: Vad händer om...?";

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
s1.addText("Vad händer om...?", { x: 0.8, y: 1.2, w: 8.4, h: 2.0, fontSize: 44, fontFace: HEADER_FONT, color: WHITE, bold: true });
s1.addText("Risker, val och konsekvenser", { x: 0.8, y: 3.2, w: 8.4, h: 0.6, fontSize: 20, fontFace: BODY_FONT, color: ACCENT });
s1.addText("Lektion 4 | Ungas ekonomi | Samhällskunskap 1a1", { x: 0.8, y: 4.5, w: 8.4, h: 0.4, fontSize: 12, fontFace: BODY_FONT, color: MUTED });
s1.addNotes("Titelslide. Idag handlar det om konsekvenser - vad händer när det inte går som planerat? Tid: 30 sek.");

// SLIDE 2: Retrieval - Ränteräkning
let s2 = pres.addSlide();
s2.background = { color: WHITE };
s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: PRIMARY } });
s2.addText("Snabbräkning: Vad kostar lånet?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
s2.addShape(pres.shapes.RECTANGLE, { x: 2, y: 1.5, w: 6, h: 2.0, fill: { color: LIGHT }, shadow: makeShadow() });
s2.addText("Alex lånade 10 000 kr med 15% ränta.\nHur mycket kostar lånet efter ett år?", { x: 2.3, y: 1.8, w: 5.4, h: 1.2, fontSize: 20, fontFace: BODY_FONT, color: PRIMARY, align: "center", bold: true });
s2.addText("Räkna individuellt, sedan kolla med din granne", { x: 0.8, y: 4.0, w: 8.4, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: MUTED });
s2.addText("Följdfråga: Vad händer om Alex bara betalar minimibeloppet?", { x: 0.8, y: 4.5, w: 8.4, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: SECONDARY, italic: true });
s2.addNotes("Retrieval review. Räkneövning kopplad till L3. Svar: 11 500 kr. Om bara minimum: ränta-på-ränta, kan bli mycket mer. Koppla till dagens tema: konsekvenser. Tid: 5 min.");

// SLIDE 3: Kronofogden-statistik
let s3 = pres.addSlide();
s3.background = { color: WHITE };
s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: WARN } });
s3.addText("Skuldsatta unga i Sverige", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
// Big stat
s3.addText("~100 000", { x: 1.5, y: 1.5, w: 7, h: 1.2, fontSize: 60, fontFace: HEADER_FONT, color: WARN, bold: true, align: "center" });
s3.addText("18-25-åringar med skulder hos Kronofogden", { x: 1.5, y: 2.7, w: 7, h: 0.5, fontSize: 18, fontFace: BODY_FONT, color: "333333", align: "center" });
s3.addText([
  { text: "Vanligaste orsakerna:", options: { breakLine: true, fontSize: 16, fontFace: BODY_FONT, bold: true } },
  { text: "Telefonabonnemang, snabblån, obetalda räkningar", options: { fontSize: 16, fontFace: BODY_FONT } }
], { x: 1.5, y: 3.5, w: 7, h: 1.0, color: "333333", align: "center" });
s3.addText("Källa: Kronofogden — Skuldsättning bland unga", { x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 11, fontFace: BODY_FONT, color: MUTED });
s3.addNotes("Visa statistiken. Låt det sjunka in. Fråga: Hur hamnar man där? Kan det hända Alex? Presentera lektionens mål. Tid: 2 min.");

// SLIDE 4: Diskussion
let s4 = pres.addSlide();
s4.background = { color: PRIMARY };
s4.addText("Diskutera med din granne (1 min)", { x: 0.5, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s4.addText("Hur hamnar en 19-åring\nhos Kronofogden?", { x: 0.8, y: 1.5, w: 8.4, h: 2.0, fontSize: 36, fontFace: HEADER_FONT, color: WHITE, bold: true });
s4.addText("Tänk steg för steg: vad händer först, sedan, till slut?", { x: 0.8, y: 4.0, w: 8.4, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: ACCENT });
s4.addNotes("Diskussionspaus. Lyssna efter kedjeresonemang: köper på kredit → kan inte betala → inkasso → Kronofogden. De som tänker i steg förstår konsekvenskedjor. Tid: 2 min.");

// SLIDE 5: Skuldfällan
let s5 = pres.addSlide();
s5.background = { color: WHITE };
s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s5.addText("Hur fungerar skuldfällan?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
// Chain visualization
s5.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 1.3, w: 2.0, h: 1.2, fill: { color: LIGHT }, shadow: makeShadow() });
s5.addText("Köp på\nkredit", { x: 0.3, y: 1.3, w: 2.0, h: 1.2, fontSize: 13, fontFace: BODY_FONT, color: "333333", align: "center", valign: "middle", bold: true });

s5.addText("->", { x: 2.3, y: 1.5, w: 0.4, h: 0.8, fontSize: 24, fontFace: BODY_FONT, color: MUTED, align: "center", valign: "middle" });

s5.addShape(pres.shapes.RECTANGLE, { x: 2.7, y: 1.3, w: 2.0, h: 1.2, fill: { color: LIGHT }, shadow: makeShadow() });
s5.addText("Kan inte\nbetala", { x: 2.7, y: 1.3, w: 2.0, h: 1.2, fontSize: 13, fontFace: BODY_FONT, color: "333333", align: "center", valign: "middle", bold: true });

s5.addText("->", { x: 4.7, y: 1.5, w: 0.4, h: 0.8, fontSize: 24, fontFace: BODY_FONT, color: MUTED, align: "center", valign: "middle" });

s5.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.3, w: 2.0, h: 1.2, fill: { color: LIGHT }, shadow: makeShadow() });
s5.addText("Inkasso\n+ avgifter", { x: 5.1, y: 1.3, w: 2.0, h: 1.2, fontSize: 13, fontFace: BODY_FONT, color: WARN, align: "center", valign: "middle", bold: true });

s5.addText("->", { x: 7.1, y: 1.5, w: 0.4, h: 0.8, fontSize: 24, fontFace: BODY_FONT, color: MUTED, align: "center", valign: "middle" });

s5.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 1.3, w: 2.2, h: 1.2, fill: { color: WARN }, shadow: makeShadow() });
s5.addText("Kronofogden\n= betalningsanm.", { x: 7.5, y: 1.3, w: 2.2, h: 1.2, fontSize: 12, fontFace: BODY_FONT, color: WHITE, align: "center", valign: "middle", bold: true });

s5.addText([
  { text: "Med betalningsanmärkning kan Alex inte:", options: { breakLine: true, fontSize: 16, fontFace: BODY_FONT, bold: true } },
  { text: "Hyra lägenhet, teckna mobilabonnemang, ta vanliga lån", options: { fontSize: 16, fontFace: BODY_FONT } }
], { x: 0.8, y: 3.2, w: 8.4, h: 1.2, color: "333333" });
s5.addText("Källa: Konsumentverket — jämförelse avbetalning vs kontant", { x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 11, fontFace: BODY_FONT, color: MUTED });
s5.addNotes("Modellera konsekvenskedjan visuellt. Betona: varje steg gör det värre. Kontrollfråga: varför erbjuder företag avbetalning om det kostar mer? (Perspektivväxling!) Tid: 4 min.");

// SLIDE 6: Konsumenträtt
let s6 = pres.addSlide();
s6.background = { color: WHITE };
s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s6.addText("Vilka rättigheter har Alex som konsument?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 20, fontFace: HEADER_FONT, color: WHITE, bold: true });
// Three cards
s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.3, w: 2.8, h: 2.5, fill: { color: LIGHT }, shadow: makeShadow() });
s6.addText("Ångerrätt", { x: 0.5, y: 1.5, w: 2.8, h: 0.5, fontSize: 18, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s6.addText("14 dagar vid\ndistansköp", { x: 0.7, y: 2.2, w: 2.4, h: 1.2, fontSize: 14, fontFace: BODY_FONT, color: "333333", align: "center" });

s6.addShape(pres.shapes.RECTANGLE, { x: 3.6, y: 1.3, w: 2.8, h: 2.5, fill: { color: LIGHT }, shadow: makeShadow() });
s6.addText("Reklamation", { x: 3.6, y: 1.5, w: 2.8, h: 0.5, fontSize: 18, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s6.addText("3 år om\nvaran är felaktig", { x: 3.8, y: 2.2, w: 2.4, h: 1.2, fontSize: 14, fontFace: BODY_FONT, color: "333333", align: "center" });

s6.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 1.3, w: 2.8, h: 2.5, fill: { color: LIGHT }, shadow: makeShadow() });
s6.addText("ARN", { x: 6.7, y: 1.5, w: 2.8, h: 0.5, fontSize: 18, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s6.addText("Gratis prövning\nvid tvist", { x: 6.9, y: 2.2, w: 2.4, h: 1.2, fontSize: 14, fontFace: BODY_FONT, color: "333333", align: "center" });

s6.addText("Primärkälla: Konsumentköplagen", { x: 0.8, y: 4.3, w: 8.4, h: 0.4, fontSize: 11, fontFace: BODY_FONT, color: MUTED });
s6.addNotes("Kort genomgång av skyddsnätet. Ångerrätt, reklamation, ARN. Alex rättigheter som konsument. Tid: 2 min.");

// SLIDE 7: Scenariouppgift
let s7 = pres.addSlide();
s7.background = { color: LIGHT };
s7.addText("Scenarioanalys: Alex dilemma", { x: 0.8, y: 0.3, w: 9, h: 0.7, fontSize: 30, fontFace: HEADER_FONT, color: PRIMARY, bold: true });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.3, w: 9, h: 3.5, fill: { color: WHITE }, shadow: makeShadow() });
s7.addText([
  { text: "1. Analysera valet ur Alex perspektiv (8 min)", options: { breakLine: true, fontSize: 15, fontFace: BODY_FONT, bold: true } },
  { text: "   Kortsiktigt vs långsiktigt - vad händer?", options: { breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "2. Byt perspektiv: arbetsgivare/stat/samhälle (7 min)", options: { breakLine: true, fontSize: 15, fontFace: BODY_FONT, bold: true } },
  { text: "   Vem mer påverkas av Alex val?", options: { breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "3. Rita konsekvenskedja (5 min)", options: { breakLine: true, fontSize: 15, fontFace: BODY_FONT, bold: true } },
  { text: "   Val -> konsekvens -> konsekvens -> samhällseffekt", options: { breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "4. Presentera för ett annat par (5 min)", options: { breakLine: true, fontSize: 15, fontFace: BODY_FONT, bold: true } },
  { text: "   De ger feedback: missade ni något perspektiv?", options: { fontSize: 14, fontFace: BODY_FONT } }
], { x: 0.8, y: 1.5, w: 8.4, h: 3.0, color: "333333" });
s7.addText("25 minuter | Dra ett scenariokort | Jobba i par", { x: 0.8, y: 5.0, w: 8.4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED });
s7.addNotes("Dela ut scenariokort. Varje par drar ett kort. Fyra steg. Cirkulera och ställ nyckelfragan: 'Vad händer om 100 000 unga gör samma val?' Tid: 25 min.");

// SLIDE 8: Diskussion
let s8 = pres.addSlide();
s8.background = { color: PRIMARY };
s8.addText("Reflektera (2 min)", { x: 0.5, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s8.addText("Finns det val som är\nbra för Alex men\ndåliga för samhället?", { x: 0.8, y: 1.5, w: 8.4, h: 2.5, fontSize: 32, fontFace: HEADER_FONT, color: WHITE, bold: true });
s8.addText("Eller tvärtom?", { x: 0.8, y: 4.0, w: 8.4, h: 0.5, fontSize: 18, fontFace: BODY_FONT, color: ACCENT, italic: true });
s8.addNotes("Djupare diskussionsfråga. Här testas syntesförmåga - att se konflikten mellan individ och samhälle. Övergång till skrivuppgift. Tid: 2 min.");

// SLIDE 9: Exit ticket
let s9 = pres.addSlide();
s9.background = { color: DARK };
s9.addText("Exit ticket", { x: 0.8, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s9.addText("Förklara med ett konkret\nexempel hur en ung persons\nekonomiska problem kan\npåverka samhällsekonomin.", { x: 0.8, y: 1.2, w: 8.4, h: 2.2, fontSize: 24, fontFace: HEADER_FONT, color: WHITE, bold: true });
s9.addText("Använd begreppen kretslopp och konsekvenskedja.", { x: 0.8, y: 3.5, w: 8.4, h: 0.6, fontSize: 18, fontFace: BODY_FONT, color: ACCENT, italic: true });
s9.addText("Nästa lektion: Vi knyter ihop allt - ni visar vad ni kan!", { x: 0.8, y: 4.8, w: 8.4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED });
s9.addNotes("Exit ticket. Kräver syntes: individ -> samhälle med begrepp. Visar om eleverna är redo för synteslektionen. Preview av avslutande lektion. Tid: 3 min.");

pres.writeFile({ fileName: "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/presentation-lektion-4.pptx" })
  .then(() => console.log("presentation-lektion-4.pptx created successfully"));
