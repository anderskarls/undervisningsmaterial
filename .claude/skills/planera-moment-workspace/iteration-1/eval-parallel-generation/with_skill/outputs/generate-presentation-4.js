const pptxgen = require("pptxgenjs");
const fs = require("fs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cornelius Agent";
pres.title = "Lektion 4: Vad händer om...? - Risker, val och konsekvenser";

// Color palette - Warm Terracotta (economic risk/consequence theme)
const PRIMARY = "8B2500";    // dark brick red
const SECONDARY = "2E5090";  // trust blue
const ACCENT = "D4A574";     // warm sand
const DARK = "1A1A2E";       // near-black
const LIGHT = "F5F0EB";      // warm cream
const WHITE = "FFFFFF";
const MUTED = "6B7280";      // gray text
const CARD_BG = "FFFFFF";

const HEADER_FONT = "Georgia";
const BODY_FONT = "Calibri";

const makeShadow = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 });

// ==================== SLIDE 1: Title ====================
let s1 = pres.addSlide();
s1.background = { color: DARK };
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: DARK } });
// Accent bar top
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });
// Left accent line
s1.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.2, w: 0.06, h: 2.5, fill: { color: ACCENT } });

s1.addText("Lektion 4", { x: 1.1, y: 1.2, w: 8, h: 0.6, fontFace: BODY_FONT, fontSize: 16, color: ACCENT, bold: true });
s1.addText([
  { text: "\"Vad händer om...?\"", options: { fontSize: 40, fontFace: HEADER_FONT, color: WHITE, bold: true } },
], { x: 1.1, y: 1.8, w: 8, h: 1.2, margin: 0 });
s1.addText("Risker, val och konsekvenser", { x: 1.1, y: 3.0, w: 8, h: 0.5, fontFace: BODY_FONT, fontSize: 20, color: ACCENT });

s1.addText("Samhällskunskap 1a1  |  Ungas ekonomi  |  60 min", {
  x: 1.1, y: 4.6, w: 8, h: 0.4, fontFace: BODY_FONT, fontSize: 12, color: MUTED
});

s1.addNotes("TITELSLIDE\nVälkomna eleverna. Denna lektion är den mest analytiskt krävande i momentet.\nTid: 30 sekunder");

// ==================== SLIDE 2: Retrieval review ====================
let s2 = pres.addSlide();
s2.background = { color: LIGHT };
s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s2.addText("Vad minns ni från budgeten?", { x: 0.7, y: 0.3, w: 9, h: 0.7, fontFace: HEADER_FONT, fontSize: 32, color: DARK, bold: true, margin: 0 });

// Two cards side by side
s2.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 4.1, h: 2.8, fill: { color: WHITE }, shadow: makeShadow() });
s2.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 0.06, h: 2.8, fill: { color: SECONDARY } });
s2.addText("Diskutera i par (2 min)", { x: 1.1, y: 1.45, w: 3.5, h: 0.4, fontFace: BODY_FONT, fontSize: 14, color: SECONDARY, bold: true });
s2.addText([
  { text: "Hur mycket hade Alex kvar varje månad?", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT, color: "333333" } },
  { text: "Vad var den svåraste prioriteringen?", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: BODY_FONT, color: "333333" } },
  { text: "Vad skulle ni ha gjort annorlunda?", options: { bullet: true, fontSize: 14, fontFace: BODY_FONT, color: "333333" } },
], { x: 1.1, y: 2.0, w: 3.4, h: 1.8 });

s2.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.3, w: 4.1, h: 2.8, fill: { color: WHITE }, shadow: makeShadow() });
s2.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.3, w: 0.06, h: 2.8, fill: { color: PRIMARY } });
s2.addText("Koppling framåt", { x: 5.6, y: 1.45, w: 3.5, h: 0.4, fontFace: BODY_FONT, fontSize: 14, color: PRIMARY, bold: true });
s2.addText("\"Ni byggde en budget som funkade. Men vad händer när livet inte följer planen?\"", {
  x: 5.6, y: 2.0, w: 3.5, h: 1.8, fontFace: BODY_FONT, fontSize: 15, color: "333333", italic: true
});

s2.addText("Fas 1: Retrieval review  |  5 min", { x: 0.7, y: 4.8, w: 9, h: 0.3, fontFace: BODY_FONT, fontSize: 11, color: MUTED });

s2.addNotes("FAS 1: RETRIEVAL REVIEW (5 min)\n\nLåt eleverna diskutera i par i 2 minuter. Gå runt och lyssna.\nHelklass 2 min: samla svar. De flesta kommer nämna att det var tight.\n\nNyckel: bygga bro till dagens tema - \"Ni hade en plan, men vad händer när verkligheten inte stämmer?\"\n\nBaserat på lektion 3 exit ticket: om många elever hade svårt med sparande/buffert, lyft det specifikt.");

// ==================== SLIDE 3: Målaktivering ====================
let s3 = pres.addSlide();
s3.background = { color: DARK };
s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s3.addText("En trasig tand.\nEtt snabblån.\nEn kompis som behöver hjälp.", {
  x: 1, y: 0.8, w: 8, h: 2.2, fontFace: HEADER_FONT, fontSize: 30, color: WHITE, bold: true, lineSpacingMultiple: 1.5
});

s3.addText("Vad gör du?", {
  x: 1, y: 3.2, w: 8, h: 0.8, fontFace: HEADER_FONT, fontSize: 36, color: ACCENT, bold: true
});

s3.addText("Fas 2: Målaktivering  |  2 min", { x: 0.7, y: 4.8, w: 9, h: 0.3, fontFace: BODY_FONT, fontSize: 11, color: MUTED });

s3.addNotes("FAS 2: MÅLAKTIVERING (2 min)\n\nLåt frågan hänga i luften en stund. Be 2-3 elever reagera spontant.\n\nSäg sedan: \"Idag ska ni resonera om privatekonomiska val och konsekvenser, och diskutera hur individens val påverkar samhället.\"\n\nDetta är en provocerande öppning - syftet är att skapa engagemang innan instruktionen.");

// ==================== SLIDE 4: Lärandemål ====================
let s4 = pres.addSlide();
s4.background = { color: LIGHT };
s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s4.addText("Idag ska ni kunna...", { x: 0.7, y: 0.3, w: 9, h: 0.7, fontFace: HEADER_FONT, fontSize: 32, color: DARK, bold: true, margin: 0 });

// Goal cards
s4.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 4.1, h: 2.5, fill: { color: WHITE }, shadow: makeShadow() });
s4.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 4.1, h: 0.06, fill: { color: SECONDARY } });
s4.addText("Mål 3", { x: 1.0, y: 1.5, w: 3.5, h: 0.4, fontFace: BODY_FONT, fontSize: 13, color: SECONDARY, bold: true });
s4.addText("Resonera om privatekonomiska val och deras konsekvenser", {
  x: 1.0, y: 2.0, w: 3.5, h: 1.5, fontFace: BODY_FONT, fontSize: 16, color: "333333"
});

s4.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.3, w: 4.1, h: 2.5, fill: { color: WHITE }, shadow: makeShadow() });
s4.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.3, w: 4.1, h: 0.06, fill: { color: PRIMARY } });
s4.addText("Mål 4", { x: 5.5, y: 1.5, w: 3.5, h: 0.4, fontFace: BODY_FONT, fontSize: 13, color: PRIMARY, bold: true });
s4.addText("Diskutera hur individens ekonomiska beslut påverkar och påverkas av samhällsekonomin", {
  x: 5.5, y: 2.0, w: 3.5, h: 1.5, fontFace: BODY_FONT, fontSize: 16, color: "333333"
});

s4.addText("Fas 2: Målaktivering  |  2 min", { x: 0.7, y: 4.8, w: 9, h: 0.3, fontFace: BODY_FONT, fontSize: 11, color: MUTED });

s4.addNotes("Visa målen tydligt. Förklara: \"Det här handlar om att RESONERA - ni ska inte hitta ett rätt svar, utan väga olika argument.\"\n\nTid: 1 minut på denna slide.");

// ==================== SLIDE 5: Skuldfällan - intro ====================
let s5 = pres.addSlide();
s5.background = { color: LIGHT };
s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s5.addText("Vad är skuldfällan?", { x: 0.7, y: 0.3, w: 9, h: 0.7, fontFace: HEADER_FONT, fontSize: 32, color: DARK, bold: true, margin: 0 });

// Big stat callout
s5.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 3.5, h: 3.0, fill: { color: PRIMARY } });
s5.addText("83 783", { x: 0.7, y: 1.6, w: 3.5, h: 1.2, fontFace: HEADER_FONT, fontSize: 48, color: WHITE, bold: true, align: "center" });
s5.addText("unga (18-25 år) med\nskulder hos Kronofogden", { x: 0.7, y: 2.7, w: 3.5, h: 0.8, fontFace: BODY_FONT, fontSize: 14, color: ACCENT, align: "center" });
s5.addText("[VERIFIERA - Kronofogden.se]", { x: 0.7, y: 3.5, w: 3.5, h: 0.4, fontFace: BODY_FONT, fontSize: 10, color: "CCAAAA", align: "center", italic: true });

// Content on right
s5.addText([
  { text: "Oväntade utgifter", options: { bold: true, breakLine: true, fontSize: 15, fontFace: BODY_FONT, color: "333333" } },
  { text: "Tandvård, trasig mobil, höjd hyra", options: { breakLine: true, fontSize: 13, fontFace: BODY_FONT, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Låneformer", options: { bold: true, breakLine: true, fontSize: 15, fontFace: BODY_FONT, color: "333333" } },
  { text: "Snabblån, avbetalning, kontokredit", options: { breakLine: true, fontSize: 13, fontFace: BODY_FONT, color: MUTED } },
  { text: "", options: { breakLine: true, fontSize: 8 } },
  { text: "Konsumenträtt", options: { bold: true, breakLine: true, fontSize: 15, fontFace: BODY_FONT, color: "333333" } },
  { text: "Ångerrätt 14 dagar, reklamation 3 år", options: { fontSize: 13, fontFace: BODY_FONT, color: MUTED } },
], { x: 4.7, y: 1.3, w: 4.8, h: 3.0 });

s5.addText("Fas 3: Explicit instruktion  |  10 min", { x: 0.7, y: 4.8, w: 9, h: 0.3, fontFace: BODY_FONT, fontSize: 11, color: MUTED });

s5.addNotes("FAS 3: EXPLICIT INSTRUKTION (10 min)\n\nBörja med statistiken - låt eleverna reagera. \"Nästan 84 000 unga har skulder hos Kronofogden.\"\n[VERIFIERA denna siffra på kronofogden.se - uppdatera vid behov]\n\nGå igenom de tre typerna av oväntade utgifter.\nFörklara låneformer kort - snabblån, avbetalning (Klarna), kontokredit.\nKonsumenträtt: ångerrätt vid distansköp (14 dagar), reklamationsrätt (3 år).\n\nKälla: Kronofogden.se, Konsumentverket.se\nTid: 3 min på denna slide");

// ==================== SLIDE 6: Worked example ====================
let s6 = pres.addSlide();
s6.background = { color: LIGHT };
s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s6.addText("Vad kostar ett snabblån egentligen?", { x: 0.7, y: 0.3, w: 9, h: 0.7, fontFace: HEADER_FONT, fontSize: 30, color: DARK, bold: true, margin: 0 });

// Calculation card
s6.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.2, w: 5.5, h: 3.2, fill: { color: WHITE }, shadow: makeShadow() });
s6.addText("Alex behöver 10 000 kr", { x: 1.0, y: 1.35, w: 5.0, h: 0.4, fontFace: BODY_FONT, fontSize: 16, color: "333333", bold: true });

s6.addTable([
  [
    { text: "Lånebelopp", options: { fontFace: BODY_FONT, fontSize: 13, color: MUTED } },
    { text: "10 000 kr", options: { fontFace: BODY_FONT, fontSize: 13, color: "333333", bold: true } },
  ],
  [
    { text: "Ränta (effektiv)", options: { fontFace: BODY_FONT, fontSize: 13, color: MUTED } },
    { text: "35%", options: { fontFace: BODY_FONT, fontSize: 13, color: PRIMARY, bold: true } },
  ],
  [
    { text: "Återbetalningstid", options: { fontFace: BODY_FONT, fontSize: 13, color: MUTED } },
    { text: "12 månader", options: { fontFace: BODY_FONT, fontSize: 13, color: "333333", bold: true } },
  ],
  [
    { text: "Total kostnad", options: { fontFace: BODY_FONT, fontSize: 15, color: PRIMARY, bold: true } },
    { text: "13 500 kr", options: { fontFace: BODY_FONT, fontSize: 15, color: PRIMARY, bold: true } },
  ],
], { x: 1.0, y: 1.9, w: 5.0, h: 2.2, border: { pt: 0 }, colW: [2.5, 2.5], rowH: [0.45, 0.45, 0.45, 0.55] });

// Callout on right
s6.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 1.2, w: 2.8, h: 1.5, fill: { color: PRIMARY } });
s6.addText("+ 3 500 kr", { x: 6.7, y: 1.3, w: 2.8, h: 0.8, fontFace: HEADER_FONT, fontSize: 36, color: WHITE, bold: true, align: "center" });
s6.addText("i ren räntekostnad", { x: 6.7, y: 2.0, w: 2.8, h: 0.4, fontFace: BODY_FONT, fontSize: 13, color: ACCENT, align: "center" });

s6.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 3.0, w: 2.8, h: 1.4, fill: { color: SECONDARY } });
s6.addText("Kontrollfråga", { x: 6.7, y: 3.1, w: 2.8, h: 0.4, fontFace: BODY_FONT, fontSize: 12, color: ACCENT, bold: true, align: "center" });
s6.addText("Vad skulle Alex totalt betala tillbaka?", { x: 6.9, y: 3.5, w: 2.4, h: 0.7, fontFace: BODY_FONT, fontSize: 14, color: WHITE, align: "center" });

s6.addText("Fas 3: Explicit instruktion  |  10 min", { x: 0.7, y: 4.8, w: 9, h: 0.3, fontFace: BODY_FONT, fontSize: 11, color: MUTED });

s6.addNotes("WORKED EXAMPLE (7 min)\n\nRäkna steg för steg på tavlan:\n1. Alex behöver 10 000 kr akut\n2. Snabblåneföretag erbjuder 35% effektiv ränta\n3. 10 000 x 1.35 = 13 500 kr totalt\n4. Alltså 3 500 kr bara i ränta!\n\nKontrollfråga: \"Vad blir totalkostnaden?\" - Låt alla räkna/diskutera kort.\n\nPoängen: \"3 500 kr - det är nästan en hel veckas matpengar för Alex.\"\n\nKälla: Konsumentverket.se om effektiv ränta\nTid: 5 min");

// ==================== SLIDE 7: Diskussion before scenarios ====================
let s7 = pres.addSlide();
s7.background = { color: DARK };
s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: ACCENT } });

s7.addText("Diskutera med din granne (1 min)", { x: 0.7, y: 0.5, w: 9, h: 0.5, fontFace: BODY_FONT, fontSize: 14, color: ACCENT, bold: true });

s7.addText("Har du eller någon du känner\nbetalat med \"köp nu, betala senare\"?", {
  x: 1, y: 1.5, w: 8, h: 2, fontFace: HEADER_FONT, fontSize: 28, color: WHITE, bold: true, align: "center", lineSpacingMultiple: 1.4
});

s7.addText("Vad hände?", {
  x: 1, y: 3.5, w: 8, h: 0.6, fontFace: HEADER_FONT, fontSize: 24, color: ACCENT, align: "center"
});

s7.addNotes("DISKUSSIONSPAUS (1 min)\n\nKort paus innan scenarioarbetet. Aktiverar elevernas egna erfarenheter.\nLyssna efter intressanta exempel att referera till senare.\nIngen helklassgenomgång - gå direkt vidare till scenarierna.\nTid: 1 min");

// ==================== SLIDE 8: Scenario instructions ====================
let s8 = pres.addSlide();
s8.background = { color: LIGHT };
s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s8.addText("Scenarioanalys i par", { x: 0.7, y: 0.3, w: 9, h: 0.7, fontFace: HEADER_FONT, fontSize: 32, color: DARK, bold: true, margin: 0 });

// Three instruction cards
const cardW = 2.7;
const cardGap = 0.3;
const startX = 0.7;

for (let i = 0; i < 3; i++) {
  const cx = startX + i * (cardW + cardGap);
  s8.addShape(pres.shapes.RECTANGLE, { x: cx, y: 1.3, w: cardW, h: 2.8, fill: { color: WHITE }, shadow: makeShadow() });
  s8.addShape(pres.shapes.RECTANGLE, { x: cx, y: 1.3, w: cardW, h: 0.06, fill: { color: [SECONDARY, PRIMARY, ACCENT][i] } });
}

// Card 1 content
s8.addText("1", { x: 1.0, y: 1.5, w: 0.5, h: 0.5, fontFace: HEADER_FONT, fontSize: 28, color: SECONDARY, bold: true });
s8.addText("Identifiera alternativ", { x: 1.5, y: 1.55, w: 1.6, h: 0.4, fontFace: BODY_FONT, fontSize: 14, color: "333333", bold: true });
s8.addText("Vilka val har Alex? Lista minst tre alternativ.", { x: 1.0, y: 2.2, w: 2.2, h: 1.5, fontFace: BODY_FONT, fontSize: 13, color: "555555" });

// Card 2 content
const c2x = startX + cardW + cardGap;
s8.addText("2", { x: c2x + 0.3, y: 1.5, w: 0.5, h: 0.5, fontFace: HEADER_FONT, fontSize: 28, color: PRIMARY, bold: true });
s8.addText("Analysera konsekvenser", { x: c2x + 0.8, y: 1.55, w: 1.6, h: 0.4, fontFace: BODY_FONT, fontSize: 14, color: "333333", bold: true });
s8.addText("Vad händer på kort sikt? Lång sikt? För Alex och för samhället?", { x: c2x + 0.3, y: 2.2, w: 2.2, h: 1.5, fontFace: BODY_FONT, fontSize: 13, color: "555555" });

// Card 3 content
const c3x = startX + 2 * (cardW + cardGap);
s8.addText("3", { x: c3x + 0.3, y: 1.5, w: 0.5, h: 0.5, fontFace: HEADER_FONT, fontSize: 28, color: "8B6914", bold: true });
s8.addText("Ta ställning", { x: c3x + 0.8, y: 1.55, w: 1.6, h: 0.4, fontFace: BODY_FONT, fontSize: 14, color: "333333", bold: true });
s8.addText("Diskutera den öppna frågan. Väg argument. Det finns inget \"rätt svar\".", { x: c3x + 0.3, y: 2.2, w: 2.2, h: 1.5, fontFace: BODY_FONT, fontSize: 13, color: "555555" });

s8.addText("Ni har fyra scenariokort. Hinn minst tre. Börja med valfritt kort.", {
  x: 0.7, y: 4.3, w: 9, h: 0.4, fontFace: BODY_FONT, fontSize: 14, color: "333333", italic: true, align: "center"
});

s8.addText("Fas 4: Guidad övning  |  15 min", { x: 0.7, y: 4.8, w: 9, h: 0.3, fontFace: BODY_FONT, fontSize: 11, color: MUTED });

s8.addNotes("FAS 4: GUIDAD ÖVNING (15 min)\n\nDela ut scenariokorten - ett set per par.\nFörklara de tre stegen: identifiera alternativ, analysera konsekvenser, ta ställning.\n\nBetona: \"Det finns inget rätt svar. Jag vill höra era resonemang.\"\n\nCirculera mellan paren:\n- Scenario 1: \"Spelar det roll att Alex inte har föräldrar som kan hjälpa?\"\n- Scenario 3: \"Är Klarna problemet - eller sociala förväntningar?\"\n- Scenario 4: \"Vems ansvar är anställningsformerna?\"\n\nFormativ checkpoint efter 8 min: \"Vilket scenario skapar mest oenighet?\"\n\nMot E: Peka på stödfrågorna på korten\nMot A: \"Hur kopplar detta till kretsloppet?\"\n\nTid: 15 min");

// ==================== SLIDE 9: Scenario 1 ====================
let s9 = pres.addSlide();
s9.background = { color: LIGHT };
s9.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s9.addText("Scenario 1: Tandläkaren", { x: 0.7, y: 0.3, w: 9, h: 0.6, fontFace: HEADER_FONT, fontSize: 28, color: DARK, bold: true, margin: 0 });

s9.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.1, w: 5.5, h: 3.0, fill: { color: WHITE }, shadow: makeShadow() });
s9.addText("Alex har ont i en tand. Akuttandvård kostar 4 200 kr. Alex har 1 800 kr på kontot. Nästa lön kommer om 18 dagar.", {
  x: 1.0, y: 1.2, w: 5.0, h: 1.0, fontFace: BODY_FONT, fontSize: 14, color: "333333"
});
s9.addText([
  { text: "(A) Ta ett snabblån", options: { bullet: true, breakLine: true, fontSize: 13, fontFace: BODY_FONT } },
  { text: "(B) Vänta till lönen", options: { bullet: true, breakLine: true, fontSize: 13, fontFace: BODY_FONT } },
  { text: "(C) Fråga föräldrarna", options: { bullet: true, breakLine: true, fontSize: 13, fontFace: BODY_FONT } },
  { text: "(D) Gå till vårdcentral", options: { bullet: true, fontSize: 13, fontFace: BODY_FONT } },
], { x: 1.0, y: 2.3, w: 5.0, h: 1.5 });

// Discussion question
s9.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 1.1, w: 2.8, h: 3.0, fill: { color: SECONDARY } });
s9.addText("Diskussionsfråga", { x: 6.9, y: 1.3, w: 2.4, h: 0.3, fontFace: BODY_FONT, fontSize: 12, color: ACCENT, bold: true, align: "center" });
s9.addText("Alla har inte föräldrar som kan hjälpa. Hur påverkar det Alex valmöjligheter? Är det rättvist?", {
  x: 6.9, y: 1.8, w: 2.4, h: 2.0, fontFace: BODY_FONT, fontSize: 14, color: WHITE, italic: true, align: "center"
});

s9.addNotes("Scenario 1 visas som referens på projektorn medan eleverna arbetar.\n\nFördjupningsfråga mot C/A: \"Spelar det roll att Alex inte har föräldrar som kan hjälpa?\"\nMot A: \"Vilken strukturell förändring skulle ge Alex fler alternativ?\"\n\nFaktaunderlag: Tandvård för 20-29 år har visst tandvårdsstöd (ATB). Akutbesök kostar ofta 600-900 kr + eventuell behandling.");

// ==================== SLIDE 10: Scenario 3 (most debatable) ====================
let s10 = pres.addSlide();
s10.background = { color: LIGHT };
s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s10.addText("Scenario 3: \"Alla andra har det\"", { x: 0.7, y: 0.3, w: 9, h: 0.6, fontFace: HEADER_FONT, fontSize: 28, color: DARK, bold: true, margin: 0 });

s10.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.1, w: 5.5, h: 3.0, fill: { color: WHITE }, shadow: makeShadow() });
s10.addText("Alex jobbarkompisar åker på en weekend till Köpenhamn. Det kostar 4 000 kr. Alex har inte råd, men vill inte vara den som alltid säger nej. En kompis säger: \"Lägg det på Klarna, betala senare.\"", {
  x: 1.0, y: 1.2, w: 5.0, h: 1.8, fontFace: BODY_FONT, fontSize: 14, color: "333333"
});

s10.addText([
  { text: "Analysera:", options: { bold: true, breakLine: true, fontSize: 13, fontFace: BODY_FONT, color: "333333" } },
  { text: "Vilka alternativ? Konsekvenser? Vem tjänar på \"köp nu, betala senare\"?", options: { fontSize: 13, fontFace: BODY_FONT, color: "555555" } },
], { x: 1.0, y: 2.8, w: 5.0, h: 1.0 });

s10.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 1.1, w: 2.8, h: 3.0, fill: { color: PRIMARY } });
s10.addText("Diskussionsfråga", { x: 6.9, y: 1.3, w: 2.4, h: 0.3, fontFace: BODY_FONT, fontSize: 12, color: ACCENT, bold: true, align: "center" });
s10.addText("Är det ett individuellt problem eller ett samhällsproblem att företag som Klarna gör det lätt att skuldsätta sig?", {
  x: 6.9, y: 1.8, w: 2.4, h: 2.0, fontFace: BODY_FONT, fontSize: 14, color: WHITE, italic: true, align: "center"
});

s10.addNotes("Scenario 3 - ofta det mest engagerande.\n\nMot C/A: \"Är Klarna problemet - eller sociala förväntningar?\"\nMot A: \"Borde politikerna reglera 'köp nu, betala senare'-tjänster hårdare?\"\n\nFakta: Klarna har ca 4 miljoner svenska användare. Konsumentverket har varnat för att unga underskattar kostnaden. [VERIFIERA aktuella siffror]");

// ==================== SLIDE 11: Självständig övning ====================
let s11 = pres.addSlide();
s11.background = { color: LIGHT };
s11.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s11.addText("Fördjupning: Individ och samhälle", { x: 0.7, y: 0.3, w: 9, h: 0.7, fontFace: HEADER_FONT, fontSize: 30, color: DARK, bold: true, margin: 0 });

s11.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 8.6, h: 2.0, fill: { color: WHITE }, shadow: makeShadow() });
s11.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.3, w: 0.06, h: 2.0, fill: { color: PRIMARY } });
s11.addText("Er uppgift:", { x: 1.1, y: 1.45, w: 8, h: 0.3, fontFace: BODY_FONT, fontSize: 14, color: PRIMARY, bold: true });
s11.addText("Vilket scenario visar tydligast att privatekonomiska val påverkar samhället? Motivera med begrepp från lektionen.", {
  x: 1.1, y: 1.9, w: 7.8, h: 1.0, fontFace: BODY_FONT, fontSize: 16, color: "333333"
});

// Differentiation boxes
s11.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 3.6, w: 4.1, h: 1.2, fill: { color: "E8F4E8" }, shadow: makeShadow() });
s11.addText("Stöd", { x: 1.0, y: 3.7, w: 3.5, h: 0.3, fontFace: BODY_FONT, fontSize: 12, color: "2D6A2D", bold: true });
s11.addText("\"En konsekvens av detta val är att...\"\n\"På kort sikt innebär det att...\"", {
  x: 1.0, y: 4.0, w: 3.5, h: 0.7, fontFace: BODY_FONT, fontSize: 12, color: "555555", italic: true
});

s11.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 3.6, w: 4.1, h: 1.2, fill: { color: "FCE8E8" }, shadow: makeShadow() });
s11.addText("Utmaning", { x: 5.5, y: 3.7, w: 3.5, h: 0.3, fontFace: BODY_FONT, fontSize: 12, color: PRIMARY, bold: true });
s11.addText("Koppla till kretsloppet. Föreslå en politisk åtgärd som förebygger problemet.", {
  x: 5.5, y: 4.0, w: 3.5, h: 0.7, fontFace: BODY_FONT, fontSize: 12, color: "555555", italic: true
});

s11.addText("Fas 5: Självständig övning  |  10 min", { x: 0.7, y: 4.95, w: 9, h: 0.3, fontFace: BODY_FONT, fontSize: 11, color: MUTED });

s11.addNotes("FAS 5: SJÄLVSTÄNDIG ÖVNING (10 min)\n\nParen arbetar vidare utan aktivt lärarstöd.\nVarje par ska kunna motivera sitt val.\n\nSista 5 min: helklassdiskussion.\nSamla argument: \"Vilket scenario valde ni? Varför?\"\n\nLyft att ekonomiska beslut aldrig är rent rationella - de påverkas av relationer, normer och strukturer.\n\nAvslutande fråga: \"Vems ansvar är det att unga inte hamnar i skuldfällan?\"\n\nTid: 5 min pararbete + 5 min helklass");

// ==================== SLIDE 12: Helklassdiskussion ====================
let s12 = pres.addSlide();
s12.background = { color: DARK };
s12.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: ACCENT } });

s12.addText("Vems ansvar?", { x: 0.7, y: 0.4, w: 9, h: 0.7, fontFace: HEADER_FONT, fontSize: 34, color: WHITE, bold: true, margin: 0 });

// Three perspective columns
const perspectives = [
  { title: "Individen", desc: "\"Var och en ansvarar\nför sina egna val\"", color: ACCENT },
  { title: "Företagen", desc: "\"Klarna, snabblåne-\nföretag gör vinst\npå skuldsättning\"", color: PRIMARY },
  { title: "Samhället", desc: "\"Politiken borde\nskydda konsumenter\nbättre\"", color: SECONDARY },
];

perspectives.forEach((p, i) => {
  const px = 0.7 + i * 3.1;
  s12.addShape(pres.shapes.RECTANGLE, { x: px, y: 1.4, w: 2.8, h: 2.8, fill: { color: "2A2A40" }, shadow: makeShadow() });
  s12.addShape(pres.shapes.RECTANGLE, { x: px, y: 1.4, w: 2.8, h: 0.06, fill: { color: p.color } });
  s12.addText(p.title, { x: px + 0.2, y: 1.6, w: 2.4, h: 0.4, fontFace: BODY_FONT, fontSize: 16, color: p.color, bold: true, align: "center" });
  s12.addText(p.desc, { x: px + 0.2, y: 2.2, w: 2.4, h: 1.5, fontFace: BODY_FONT, fontSize: 13, color: "CCCCCC", align: "center", italic: true });
});

s12.addText("Ekonomiska beslut är aldrig bara rationella", {
  x: 0.7, y: 4.5, w: 9, h: 0.4, fontFace: BODY_FONT, fontSize: 14, color: ACCENT, italic: true, align: "center"
});

s12.addNotes("HELKLASSDISKUSSION\n\nLyft det scenario som skapade mest debatt.\nAnvänd de tre perspektiven som struktur.\n\nPoängen: ekonomiska beslut påverkas av relationer, normer, klass och strukturer.\n\"Det här är en fråga utan enkelt svar - och det är precis så samhällskunskap fungerar.\"\n\nMot A: Be elever problematisera alla tre perspektiv.\nTid: Del av fas 5 (5 min)");

// ==================== SLIDE 13: Exit ticket ====================
let s13 = pres.addSlide();
s13.background = { color: LIGHT };
s13.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: PRIMARY } });

s13.addText("Exit ticket", { x: 0.7, y: 0.3, w: 9, h: 0.6, fontFace: HEADER_FONT, fontSize: 30, color: DARK, bold: true, margin: 0 });

s13.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 1.2, w: 7, h: 2.5, fill: { color: WHITE }, shadow: makeShadow() });
s13.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 1.2, w: 7, h: 0.06, fill: { color: PRIMARY } });

s13.addText("Ge ett exempel på hur en individs ekonomiska val kan påverka samhället i stort - och tvärtom.", {
  x: 2.0, y: 1.5, w: 6, h: 1.0, fontFace: BODY_FONT, fontSize: 18, color: "333333", align: "center"
});
s13.addText("Resonera med hjälp av begrepp från lektionen.", {
  x: 2.0, y: 2.5, w: 6, h: 0.5, fontFace: BODY_FONT, fontSize: 15, color: MUTED, italic: true, align: "center"
});

// Hint box
s13.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 4.0, w: 7, h: 0.8, fill: { color: "FFF8F0" } });
s13.addText("Begrepp att använda: skuldfällan, snabblån, ränta, konsumenträtt, ekonomiskt kretslopp, individ-samhälle", {
  x: 1.7, y: 4.1, w: 6.6, h: 0.6, fontFace: BODY_FONT, fontSize: 12, color: MUTED, italic: true, align: "center"
});

s13.addText("Fas 6: Avslut  |  3 min", { x: 0.7, y: 4.95, w: 9, h: 0.3, fontFace: BODY_FONT, fontSize: 11, color: MUTED });

s13.addNotes("FAS 6: AVSLUT (3 min)\n\nExit ticket - individuell, skriftlig. Alla skriver.\n\nDetta mäter mål 4 direkt: kopplingen individ-samhälle.\n\nEfter insamling: sortera i tre högar (förstod / osäker / missade).\nHög 2 och 3 informerar lektion 5 retrieval review.\n\nTid: 2 min skrivande + 1 min insamling");

// ==================== SLIDE 14: Preview next lesson ====================
let s14 = pres.addSlide();
s14.background = { color: DARK };
s14.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: ACCENT } });

s14.addText("Nästa gång", { x: 0.7, y: 0.5, w: 9, h: 0.5, fontFace: BODY_FONT, fontSize: 14, color: ACCENT, bold: true });

s14.addText("Lektion 5: Syntes", { x: 1, y: 1.5, w: 8, h: 0.8, fontFace: HEADER_FONT, fontSize: 32, color: WHITE, bold: true, align: "center" });
s14.addText("\"Min ekonomi, hela samhällets ekonomi\"", { x: 1, y: 2.3, w: 8, h: 0.6, fontFace: HEADER_FONT, fontSize: 22, color: ACCENT, align: "center", italic: true });

s14.addText("Ni kopplar ihop allt: kretsloppet, arbetsmarknaden, privatekonomin - i en skriftlig analys.", {
  x: 1.5, y: 3.3, w: 7, h: 0.8, fontFace: BODY_FONT, fontSize: 16, color: "CCCCCC", align: "center"
});

s14.addNotes("PREVIEW\n\n\"Nästa lektion är den sista i momentet. Då kopplar ni ihop allt ni lärt er - kretsloppet, arbetsmarknaden och privatekonomin - i en skriftlig analys med kamratbedömning.\"\n\nTid: 30 sekunder");

const OUTPUT = "/home/anders/Second brain/.claude/skills/planera-moment-workspace/iteration-1/eval-parallel-generation/with_skill/outputs/presentation-lektion-4.pptx";
pres.writeFile({ fileName: OUTPUT }).then(() => {
  console.log("Wrote " + OUTPUT);
});
