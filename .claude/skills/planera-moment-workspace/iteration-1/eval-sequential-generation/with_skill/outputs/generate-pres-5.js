const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cornelius Agent";
pres.title = "Lektion 5: Min ekonomi, hela samhällets ekonomi";

const PRIMARY = "1A3C5E";
const SECONDARY = "2E5A88";
const ACCENT = "4A90C4";
const LIGHT = "E8F0F8";
const WHITE = "FFFFFF";
const DARK = "0F2337";
const MUTED = "6B7B8D";
const HEADER_FONT = "Georgia";
const BODY_FONT = "Calibri";
const makeShadow = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 });

// SLIDE 1: Title
let s1 = pres.addSlide();
s1.background = { color: DARK };
s1.addText("Min ekonomi,\nhela samhällets\nekonomi", { x: 0.8, y: 0.8, w: 8.4, h: 2.5, fontSize: 40, fontFace: HEADER_FONT, color: WHITE, bold: true });
s1.addText("Syntes och fördjupning", { x: 0.8, y: 3.3, w: 8.4, h: 0.6, fontSize: 20, fontFace: BODY_FONT, color: ACCENT });
s1.addText("Lektion 5 | Ungas ekonomi | Samhällskunskap 1a1", { x: 0.8, y: 4.5, w: 8.4, h: 0.4, fontSize: 12, fontFace: BODY_FONT, color: MUTED });
s1.addNotes("Sista lektionen. Allt knyts ihop. Idag visar ni vad ni kan. Tid: 30 sek.");

// SLIDE 2: Retrieval - hela momentet
let s2 = pres.addSlide();
s2.background = { color: WHITE };
s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: PRIMARY } });
s2.addText("Hela momentet i fyra begrepp", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
// Four boxes
s2.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 1.3, w: 2.2, h: 1.5, fill: { color: LIGHT }, shadow: makeShadow() });
s2.addText("L1\nKretsloppet", { x: 0.3, y: 1.3, w: 2.2, h: 1.0, fontSize: 16, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center", valign: "middle" });
s2.addText("Skriv ett begrepp", { x: 0.3, y: 2.2, w: 2.2, h: 0.5, fontSize: 12, fontFace: BODY_FONT, color: MUTED, align: "center" });

s2.addShape(pres.shapes.RECTANGLE, { x: 2.7, y: 1.3, w: 2.2, h: 1.5, fill: { color: LIGHT }, shadow: makeShadow() });
s2.addText("L2\nArbetsmarknad", { x: 2.7, y: 1.3, w: 2.2, h: 1.0, fontSize: 16, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center", valign: "middle" });
s2.addText("Skriv ett begrepp", { x: 2.7, y: 2.2, w: 2.2, h: 0.5, fontSize: 12, fontFace: BODY_FONT, color: MUTED, align: "center" });

s2.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.3, w: 2.2, h: 1.5, fill: { color: LIGHT }, shadow: makeShadow() });
s2.addText("L3\nPrivatekonomi", { x: 5.1, y: 1.3, w: 2.2, h: 1.0, fontSize: 16, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center", valign: "middle" });
s2.addText("Skriv ett begrepp", { x: 5.1, y: 2.2, w: 2.2, h: 0.5, fontSize: 12, fontFace: BODY_FONT, color: MUTED, align: "center" });

s2.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 1.3, w: 2.2, h: 1.5, fill: { color: LIGHT }, shadow: makeShadow() });
s2.addText("L4\nKonsekvenser", { x: 7.5, y: 1.3, w: 2.2, h: 1.0, fontSize: 16, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center", valign: "middle" });
s2.addText("Skriv ett begrepp", { x: 7.5, y: 2.2, w: 2.2, h: 0.5, fontSize: 12, fontFace: BODY_FONT, color: MUTED, align: "center" });

s2.addText("Individuellt 2 min, sedan jämför med din granne", { x: 0.8, y: 3.3, w: 8.4, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: MUTED });
s2.addText("Hur hänger dessa fyra delar ihop?", { x: 0.8, y: 4.0, w: 8.4, h: 0.5, fontSize: 18, fontFace: BODY_FONT, color: SECONDARY, bold: true, italic: true });
s2.addNotes("Retrieval review som aktiverar ALLT. Individuellt 2 min, par 2 min, gemensamt 1 min. Samla begrepp på tavlan - de kan användas som stöd under skrivandet. Tid: 5 min.");

// SLIDE 3: Alex resa
let s3 = pres.addSlide();
s3.background = { color: LIGHT };
s3.addText("Alex resa genom ekonomin", { x: 0.8, y: 0.3, w: 9, h: 0.7, fontSize: 30, fontFace: HEADER_FONT, color: PRIMARY, bold: true });
// Timeline
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.5, w: 2.0, h: 2.5, fill: { color: WHITE }, shadow: makeShadow() });
s3.addText("L1", { x: 0.5, y: 1.6, w: 2.0, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: ACCENT, align: "center", bold: true });
s3.addText("Kretsloppet\nAktörer och\nflöden", { x: 0.5, y: 2.1, w: 2.0, h: 1.5, fontSize: 13, fontFace: BODY_FONT, color: "333333", align: "center" });

s3.addShape(pres.shapes.RECTANGLE, { x: 2.8, y: 1.5, w: 2.0, h: 2.5, fill: { color: WHITE }, shadow: makeShadow() });
s3.addText("L2", { x: 2.8, y: 1.6, w: 2.0, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: ACCENT, align: "center", bold: true });
s3.addText("Jobbsökning\nAnställnings-\nformer", { x: 2.8, y: 2.1, w: 2.0, h: 1.5, fontSize: 13, fontFace: BODY_FONT, color: "333333", align: "center" });

s3.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.5, w: 2.0, h: 2.5, fill: { color: WHITE }, shadow: makeShadow() });
s3.addText("L3", { x: 5.1, y: 1.6, w: 2.0, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: ACCENT, align: "center", bold: true });
s3.addText("Budget\nInkomst, skatt,\nutgifter", { x: 5.1, y: 2.1, w: 2.0, h: 1.5, fontSize: 13, fontFace: BODY_FONT, color: "333333", align: "center" });

s3.addShape(pres.shapes.RECTANGLE, { x: 7.4, y: 1.5, w: 2.0, h: 2.5, fill: { color: WHITE }, shadow: makeShadow() });
s3.addText("L4", { x: 7.4, y: 1.6, w: 2.0, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: ACCENT, align: "center", bold: true });
s3.addText("Val och\nkonsekvenser\nIndivid -> samhälle", { x: 7.4, y: 2.1, w: 2.0, h: 1.5, fontSize: 13, fontFace: BODY_FONT, color: "333333", align: "center" });

s3.addText("Begrepp -> Tillämpning -> Analys -> Nu: Syntes", { x: 0.8, y: 4.5, w: 8.4, h: 0.5, fontSize: 16, fontFace: BODY_FONT, color: SECONDARY, bold: true });
s3.addNotes("Sammanfatta Alex resa. Visa progressionen: begrepp -> tillämpning -> analys -> syntes. Nu ska ni visa att ni förstår helheten. Tid: 2 min.");

// SLIDE 4: Uppgiften
let s4 = pres.addSlide();
s4.background = { color: WHITE };
s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: PRIMARY } });
s4.addText("Analysuppgift: Alex efter sex månader", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 20, fontFace: HEADER_FONT, color: WHITE, bold: true });
s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 9, h: 3.5, fill: { color: LIGHT }, shadow: makeShadow() });
s4.addText("Alex har bott ensam i sex månader. Han har timanställning, en budget som precis går ihop, och funderar på att ta ett lån för att köpa bil.", { x: 0.8, y: 1.3, w: 8.4, h: 0.8, fontSize: 14, fontFace: BODY_FONT, color: "333333", italic: true });
s4.addText([
  { text: "1. Beskriv Alex roll i det ekonomiska kretsloppet", options: { bullet: true, breakLine: true, fontSize: 15, fontFace: BODY_FONT, bold: true } },
  { text: "2. Analysera hur arbetsmarknadens villkor påverkar Alex", options: { bullet: true, breakLine: true, fontSize: 15, fontFace: BODY_FONT, bold: true } },
  { text: "3. Resonera: Vad händer om Alex tar lånet? Kort och lång sikt", options: { bullet: true, breakLine: true, fontSize: 15, fontFace: BODY_FONT, bold: true } },
  { text: "4. Diskutera: Hur påverkar Alex val samhällsekonomin?", options: { bullet: true, fontSize: 15, fontFace: BODY_FONT, bold: true } }
], { x: 0.8, y: 2.3, w: 8.4, h: 2.2, color: "333333" });
s4.addNotes("Visa uppgiften. Gå igenom alla fyra delar. Betona att alla delar ska besvaras. Visa dispositionsmall för de som behöver. Tid: 3 min.");

// SLIDE 5: E vs A skillnaden
let s5 = pres.addSlide();
s5.background = { color: WHITE };
s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s5.addText("Vad skiljer ett E-svar från ett A-svar?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
// Two columns
s5.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 4.2, h: 3.2, fill: { color: LIGHT } });
s5.addText("E-nivå", { x: 0.5, y: 1.3, w: 4.2, h: 0.5, fontSize: 18, fontFace: HEADER_FONT, color: MUTED, bold: true, align: "center" });
s5.addText("\"Alex betalar skatt\noch handlar i butiker.\nHan är en del av\nkretsloppet.\"", { x: 0.8, y: 2.0, w: 3.6, h: 2.0, fontSize: 15, fontFace: BODY_FONT, color: "555555", italic: true, align: "center" });

s5.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.2, w: 4.2, h: 3.2, fill: { color: SECONDARY } });
s5.addText("A-nivå", { x: 5.3, y: 1.3, w: 4.2, h: 0.5, fontSize: 18, fontFace: HEADER_FONT, color: WHITE, bold: true, align: "center" });
s5.addText("\"Alex skattebetalning\nfinansierar infrastruktur\nsom möjliggör hans\narbetsplats — ett\növsesidigt beroende.\"", { x: 5.6, y: 2.0, w: 3.6, h: 2.0, fontSize: 15, fontFace: BODY_FONT, color: LIGHT, italic: true, align: "center" });

s5.addText("Skillnaden: konkreta kopplingar, flera perspektiv, problematisering", { x: 0.8, y: 4.6, w: 8.4, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: SECONDARY, bold: true });
s5.addNotes("Modellera skillnaden med kort think-aloud. E: listar fakta. A: analyserar kopplingar, byter perspektiv, problematiserar. Tid: 2 min.");

// SLIDE 6: Diskussion
let s6 = pres.addSlide();
s6.background = { color: PRIMARY };
s6.addText("Innan ni börjar skriva (1 min)", { x: 0.5, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s6.addText("Vilka begrepp\nska du använda?\nVilka perspektiv\ntar du med?", { x: 0.8, y: 1.3, w: 8.4, h: 2.5, fontSize: 32, fontFace: HEADER_FONT, color: WHITE, bold: true });
s6.addText("Planera din text kort innan du börjar skriva", { x: 0.8, y: 4.3, w: 8.4, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: ACCENT });
s6.addNotes("Kort planeringspaus. Eleverna gör disposition. Cirkulera och hjälp de som fastnar med struktur. Tid: 1 min + sedan 10 min guidad planering.");

// SLIDE 7: Kamratbedömning
let s7 = pres.addSlide();
s7.background = { color: LIGHT };
s7.addText("Kamratbedömning", { x: 0.8, y: 0.3, w: 9, h: 0.7, fontSize: 36, fontFace: HEADER_FONT, color: PRIMARY, bold: true });
s7.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.3, w: 9, h: 3.2, fill: { color: WHITE }, shadow: makeShadow() });
s7.addText("Bedöm din kompis text:", { x: 0.8, y: 1.5, w: 8.4, h: 0.5, fontSize: 18, fontFace: BODY_FONT, color: SECONDARY, bold: true });
s7.addText([
  { text: "1. Nämns alla fyra delar? (kretslopp, arbetsmarknad, privatekonomi, samhälle)", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "2. Finns resonemang med för och emot?", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "3. Används begrepp korrekt?", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT } },
  { text: "4. Finns koppling individ till samhälle?", options: { bullet: true, fontSize: 14, fontFace: BODY_FONT } }
], { x: 0.8, y: 2.2, w: 8.4, h: 2.0, color: "333333" });
s7.addText("Ge skriftlig feedback: en styrka och ett förbättringsförslag", { x: 0.8, y: 4.0, w: 8.4, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: SECONDARY, bold: true, italic: true });
s7.addNotes("Gå igenom bedömningspunkterna. Modellera: om kompisen skrev 'Alex betalar skatt', vad saknas för C-nivå? Ge 8 min att läsa och bedöma, 3 min skriftlig feedback, 2 min muntligt. Tid: 13 min.");

// SLIDE 8: Exit ticket / Avslut
let s8 = pres.addSlide();
s8.background = { color: DARK };
s8.addText("Avslutande reflektion", { x: 0.8, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s8.addText("Vad är det viktigaste du\nlärt dig under momentet?", { x: 0.8, y: 1.3, w: 8.4, h: 1.5, fontSize: 28, fontFace: HEADER_FONT, color: WHITE, bold: true });
s8.addText("Ge ett konkret exempel på hur du kan\nanvända kunskapen i ditt eget liv.", { x: 0.8, y: 3.0, w: 8.4, h: 1.0, fontSize: 20, fontFace: BODY_FONT, color: ACCENT, italic: true });
s8.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 4.3, w: 7, h: 0.8, fill: { color: SECONDARY } });
s8.addText("Ni har följt Alex resa genom ekonomin — den kunskapen är livkunskap.", { x: 1.5, y: 4.3, w: 7, h: 0.8, fontSize: 14, fontFace: BODY_FONT, color: WHITE, align: "center", valign: "middle" });
s8.addNotes("Avslutande exit ticket. Reflektiv - inte kunskapsmätande. Ge 3 min att skriva. Avsluta momentet med uppmuntrande ord. Tid: 5 min.");

pres.writeFile({ fileName: "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/presentation-lektion-5.pptx" })
  .then(() => console.log("presentation-lektion-5.pptx created successfully"));
