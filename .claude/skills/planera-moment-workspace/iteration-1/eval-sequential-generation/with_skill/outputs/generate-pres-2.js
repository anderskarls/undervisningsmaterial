const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cornelius Agent";
pres.title = "Lektion 2: Vem får jobben?";

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
s1.addText("Vem får jobben?", { x: 0.8, y: 1.2, w: 8.4, h: 2.0, fontSize: 44, fontFace: HEADER_FONT, color: WHITE, bold: true });
s1.addText("Arbetsmarknaden för unga", { x: 0.8, y: 3.2, w: 8.4, h: 0.6, fontSize: 20, fontFace: BODY_FONT, color: ACCENT });
s1.addText("Lektion 2 | Ungas ekonomi | Samhällskunskap 1a1", { x: 0.8, y: 4.5, w: 8.4, h: 0.4, fontSize: 12, fontFace: BODY_FONT, color: MUTED });
s1.addNotes("Titelslide. Koppla till förra lektionen: vi pratade om kretsloppet. En av pilarna var lön - men hur får man ett jobb? Tid: 30 sek.");

// SLIDE 2: Retrieval review
let s2 = pres.addSlide();
s2.background = { color: WHITE };
s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: PRIMARY } });
s2.addText("Kan ni kretsloppet?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
s2.addText([
  { text: "1. Vilka tre aktörer finns i kretsloppet?", options: { breakLine: true, fontSize: 18, fontFace: BODY_FONT, bold: true } },
  { text: "2. Vart går Alex lön?", options: { breakLine: true, fontSize: 18, fontFace: BODY_FONT, bold: true } },
  { text: "3. Vad får Alex tillbaka av skatten?", options: { fontSize: 18, fontFace: BODY_FONT, bold: true } }
], { x: 0.8, y: 1.5, w: 8.4, h: 2.5, color: "333333" });
s2.addText("Skriv svar individuellt, sedan jämför med din granne", { x: 0.8, y: 4.5, w: 8.4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED });
s2.addNotes("Retrieval review. Ge 2 min individuellt, 1 min i par. Gemensam genomgång. Koppla svaren till dagens tema. Tid: 5 min.");

// SLIDE 3: Alex söker jobb - 3 erbjudanden
let s3 = pres.addSlide();
s3.background = { color: LIGHT };
s3.addText("Alex söker jobb - tre erbjudanden", { x: 0.8, y: 0.3, w: 9, h: 0.7, fontSize: 30, fontFace: HEADER_FONT, color: PRIMARY, bold: true });
// Three cards side by side
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.3, w: 2.8, h: 3.2, fill: { color: WHITE }, shadow: makeShadow() });
s3.addText("Fast anställning\npå lager", { x: 0.5, y: 1.5, w: 2.8, h: 0.8, fontSize: 16, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s3.addText("Trygg men tung\n25 000 kr/mån", { x: 0.7, y: 2.5, w: 2.4, h: 1.5, fontSize: 14, fontFace: BODY_FONT, color: "333333", align: "center" });

s3.addShape(pres.shapes.RECTANGLE, { x: 3.6, y: 1.3, w: 2.8, h: 3.2, fill: { color: WHITE }, shadow: makeShadow() });
s3.addText("Visstidsanställning\ni butik", { x: 3.6, y: 1.5, w: 2.8, h: 0.8, fontSize: 16, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s3.addText("6 månader\n22 000 kr/mån", { x: 3.8, y: 2.5, w: 2.4, h: 1.5, fontSize: 14, fontFace: BODY_FONT, color: "333333", align: "center" });

s3.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 1.3, w: 2.8, h: 3.2, fill: { color: WHITE }, shadow: makeShadow() });
s3.addText("Gig-jobb\nmatleverans", { x: 6.7, y: 1.5, w: 2.8, h: 0.8, fontSize: 16, fontFace: HEADER_FONT, color: PRIMARY, bold: true, align: "center" });
s3.addText("Flexibelt men osäkert\nca 150 kr/timme", { x: 6.9, y: 2.5, w: 2.4, h: 1.5, fontSize: 14, fontFace: BODY_FONT, color: "333333", align: "center" });

s3.addText("Vilket jobb borde Alex välja? Varför?", { x: 0.8, y: 4.8, w: 8.4, h: 0.4, fontSize: 14, fontFace: BODY_FONT, color: SECONDARY, bold: true, italic: true });
s3.addNotes("Målaktivering. Visa de tre jobben. Låt eleverna reagera snabbt - handuppräckning eller snabbt svar. Fånga intresse: 'Vi ska ta reda på vad som egentligen skiljer dessa jobb åt.' Tid: 2 min.");

// SLIDE 4: Diskussion
let s4 = pres.addSlide();
s4.background = { color: PRIMARY };
s4.addText("Diskutera med din granne (1 min)", { x: 0.5, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s4.addText("Vilket jobb väljer ni\nåt Alex? Varför?", { x: 0.8, y: 1.5, w: 8.4, h: 2.5, fontSize: 36, fontFace: HEADER_FONT, color: WHITE, bold: true });
s4.addText("Tänk på: trygghet, pengar, framtid", { x: 0.8, y: 4.3, w: 8.4, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: ACCENT });
s4.addNotes("Kort diskussionspaus. Alla har en åsikt. Lyft 2-3 svar. Notera argument som återkommer i instruktionen. Tid: 2 min.");

// SLIDE 5: Ungdomsarbetslöshet
let s5 = pres.addSlide();
s5.background = { color: WHITE };
s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s5.addText("Varför har unga svårare att få jobb?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
s5.addText([
  { text: "Ungdomsarbetslösheten är 3x högre än för vuxna", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Unga saknar erfarenhet och kontakter", options: { bullet: true, breakLine: true, fontSize: 16, fontFace: BODY_FONT } },
  { text: "Många unga har otrygga anställningar", options: { bullet: true, fontSize: 16, fontFace: BODY_FONT } }
], { x: 0.8, y: 1.5, w: 8.4, h: 2.5, color: "333333" });
s5.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 4.2, w: 8.4, h: 0.6, fill: { color: LIGHT } });
s5.addText("Källa: SCB, Arbetsförmedlingen — Arbetsmarknadsstatistik 2024", { x: 0.8, y: 4.2, w: 8.4, h: 0.6, fontSize: 11, fontFace: BODY_FONT, color: MUTED, align: "center", valign: "middle" });
s5.addNotes("Visa verklig statistik. Betona att detta inte är abstrakt - det handlar om dem. Kontrollfråga: varför tror ni att unga har svårare att få jobb? Tid: 3 min.");

// SLIDE 6: Anställningsformer - jämförelse
let s6 = pres.addSlide();
s6.background = { color: WHITE };
s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: SECONDARY } });
s6.addText("Vad skiljer anställningsformerna åt?", { x: 0.5, y: 0.1, w: 9, h: 0.6, fontSize: 22, fontFace: HEADER_FONT, color: WHITE, bold: true });
// Table
s6.addTable([
  [{ text: "", options: { fill: { color: PRIMARY }, color: WHITE, bold: true, fontSize: 12 } },
   { text: "Tillsvidare", options: { fill: { color: PRIMARY }, color: WHITE, bold: true, fontSize: 12 } },
   { text: "Visstid", options: { fill: { color: PRIMARY }, color: WHITE, bold: true, fontSize: 12 } },
   { text: "Tim", options: { fill: { color: PRIMARY }, color: WHITE, bold: true, fontSize: 12 } },
   { text: "Gig", options: { fill: { color: PRIMARY }, color: WHITE, bold: true, fontSize: 12 } }],
  [{ text: "Trygghet", options: { bold: true, fontSize: 11 } }, "Hög", "Medel", "Låg", "Ingen"],
  [{ text: "Rättigheter", options: { bold: true, fontSize: 11 } }, "Fulla", "Fulla", "Begränsade", "Inga (egenföretagare)"],
  [{ text: "Flexibilitet", options: { bold: true, fontSize: 11 } }, "Låg", "Låg", "Medel", "Hög"],
  [{ text: "Karriär", options: { bold: true, fontSize: 11 } }, "God", "Osäker", "Svag", "Oklar"],
], { x: 0.5, y: 1.2, w: 9, h: 3.0, border: { pt: 0.5, color: "CCCCCC" }, fontSize: 12, fontFace: BODY_FONT, colW: [1.5, 1.875, 1.875, 1.875, 1.875], rowH: [0.5, 0.5, 0.5, 0.5, 0.5] });
s6.addText("Primärkälla: LAS — Lagen om anställningsskydd § 4-5", { x: 0.8, y: 4.6, w: 8.4, h: 0.4, fontSize: 11, fontFace: BODY_FONT, color: MUTED });
s6.addNotes("Gå igenom tabellen kolumn för kolumn. Betona: gig-ekonomin har ingen arbetsrätt - du är egenföretagare. Kontrollfråga: vilka rättigheter tror ni att Alex har som timanställd jämfört med fast anställd? Tid: 4 min.");

// SLIDE 7: Diskussion
let s7 = pres.addSlide();
s7.background = { color: PRIMARY };
s7.addText("Diskutera med din granne (2 min)", { x: 0.5, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s7.addText("Vad händer med\narbetsmarknaden\nom fler jobb blir gig-jobb?", { x: 0.8, y: 1.5, w: 8.4, h: 2.5, fontSize: 32, fontFace: HEADER_FONT, color: WHITE, bold: true });
s7.addText("Vem vinner? Vem förlorar?", { x: 0.8, y: 4.3, w: 8.4, h: 0.5, fontSize: 14, fontFace: BODY_FONT, color: ACCENT });
s7.addNotes("Deliberativ diskussion. Tvinga perspektivbyte: vem vinner och vem förlorar? Lyssna efter resonemang som kopplar till kretsloppet (t.ex. mindre skatteintäkter om fler gig-jobb). Tid: 2 min.");

// SLIDE 8: EPA-uppgift
let s8 = pres.addSlide();
s8.background = { color: LIGHT };
s8.addText("Er tur: Jämförande analys", { x: 0.8, y: 0.3, w: 9, h: 0.7, fontSize: 30, fontFace: HEADER_FONT, color: PRIMARY, bold: true });
s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.3, w: 4.2, h: 3.5, fill: { color: WHITE }, shadow: makeShadow() });
s8.addText("Enskilt (5 min)", { x: 0.7, y: 1.5, w: 3.8, h: 0.5, fontSize: 16, fontFace: HEADER_FONT, color: SECONDARY, bold: true });
s8.addText("Fyll i jämförelsetabellen:\ntrygghet, lön, rättigheter,\nflexibilitet, karriär", { x: 0.7, y: 2.2, w: 3.8, h: 1.8, fontSize: 14, fontFace: BODY_FONT, color: "333333" });

s8.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.3, w: 4.2, h: 1.5, fill: { color: WHITE }, shadow: makeShadow() });
s8.addText("Par (8 min)", { x: 5.5, y: 1.5, w: 3.8, h: 0.4, fontSize: 16, fontFace: HEADER_FONT, color: SECONDARY, bold: true });
s8.addText("Jämför och diskutera:\nVilken form passar Alex bäst?", { x: 5.5, y: 2.0, w: 3.8, h: 0.7, fontSize: 14, fontFace: BODY_FONT, color: "333333" });

s8.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 3.1, w: 4.2, h: 1.5, fill: { color: WHITE }, shadow: makeShadow() });
s8.addText("Alla (10 min)", { x: 5.5, y: 3.3, w: 3.8, h: 0.4, fontSize: 16, fontFace: HEADER_FONT, color: SECONDARY, bold: true });
s8.addText("Klassdiskussion: bästa\nargumenten lyfts", { x: 5.5, y: 3.8, w: 3.8, h: 0.7, fontSize: 14, fontFace: BODY_FONT, color: "333333" });
s8.addNotes("EPA-uppgift. Dela ut jämförelsetabellen. Ge tydliga tider. Cirkulera under par-fasen. Under alla-fasen: lyft intressanta resonemang, inte bara fakta. Tid: 23 min totalt.");

// SLIDE 9: Exit ticket
let s9 = pres.addSlide();
s9.background = { color: DARK };
s9.addText("Exit ticket", { x: 0.8, y: 0.5, w: 9, h: 0.6, fontSize: 16, fontFace: BODY_FONT, color: ACCENT });
s9.addText("Alex har fått erbjudande om\ntimanställning i butik och\ngig-jobb som matleverans.", { x: 0.8, y: 1.3, w: 8.4, h: 1.5, fontSize: 24, fontFace: HEADER_FONT, color: WHITE, bold: true });
s9.addText("Ge Alex ett råd och motivera\nmed minst två argument.", { x: 0.8, y: 3.0, w: 8.4, h: 1.0, fontSize: 22, fontFace: BODY_FONT, color: ACCENT, italic: true });
s9.addText("Nästa lektion: Alex flyttar hemifrån — hur långt räcker pengarna?", { x: 0.8, y: 4.8, w: 8.4, h: 0.4, fontSize: 13, fontFace: BODY_FONT, color: MUTED });
s9.addNotes("Exit ticket. Ge 3 minuter. Betona: motivera med argument, inte bara 'jag tycker'. Samla in. Preview av nästa lektion. Tid: 3 min.");

pres.writeFile({ fileName: "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-sequential-generation/with_skill/outputs/presentation-lektion-2.pptx" })
  .then(() => console.log("presentation-lektion-2.pptx created successfully"));
