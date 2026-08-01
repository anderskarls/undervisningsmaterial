// Arkiv v2.1 deck — större och fetare text för presentation
const t = {
  ink: '#1f1a15', ink2: '#4a3f33',
  paper: '#f4ede1', paper2: '#ebe1cf',
  rule: '#2a221a',
  bordeaux: '#7a2e2e', marin: '#2c3e55', oliv: '#5a6a3a',
  ocker: '#b8862f', kritbla: '#5a7a9a', mossgron: '#3e5a3e', tegel: '#c96442',
  serif: '"Cormorant Garamond", Georgia, serif',
  sans: '"Inter Tight", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

function fmt(str) {
  if (!str) return null;
  const tokens = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|==[^=]+==|__[^_]+__)/g;
  let last = 0, m;
  while ((m = re.exec(str)) !== null) {
    if (m.index > last) tokens.push(str.slice(last, m.index));
    tokens.push(m[0]);
    last = m.index + m[0].length;
  }
  if (last < str.length) tokens.push(str.slice(last));
  return tokens.map((tok, i) => {
    if (tok.startsWith('**')) return <b key={i} style={{ fontWeight: 800 }}>{tok.slice(2, -2)}</b>;
    if (tok.startsWith('*')) return <i key={i} style={{ fontFamily: t.serif, fontStyle: 'italic', fontWeight: 600 }}>{tok.slice(1, -1)}</i>;
    if (tok.startsWith('==')) return <span key={i} style={{ background: t.ocker + '66', padding: '0 8px', borderRadius: 2, fontWeight: 700 }}>{tok.slice(2, -2)}</span>;
    if (tok.startsWith('__')) return <span key={i} style={{ textDecoration: 'underline', textDecorationColor: t.bordeaux, textDecorationThickness: '4px', textUnderlineOffset: '6px', fontWeight: 700 }}>{tok.slice(2, -2)}</span>;
    return <React.Fragment key={i}>{tok}</React.Fragment>;
  });
}

function Chrome({ metaLeft, metaRight, page, total, dark, children, bg = t.paper }) {
  const fg = dark ? t.paper : t.ink2;
  const line = dark ? `2px solid ${t.paper}44` : `2px solid ${t.rule}`;
  return (
    <div style={{ width: '100%', height: '100%', background: bg, color: dark ? t.paper : t.ink, fontFamily: t.sans, padding: '32px 56px 28px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: t.mono, fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: fg, borderBottom: line, paddingBottom: 12, fontWeight: 600 }}>
        <span>{metaLeft}</span><span>{metaRight}</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, padding: '32px 0' }}>{children}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: t.mono, fontSize: 15, letterSpacing: 2, textTransform: 'uppercase', color: fg, borderTop: line, paddingTop: 12, fontWeight: 600 }}>
        <span>Arkiv · v2</span><span>{String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

function SlideCover({ title, subtitle, course, term, page, total }) {
  return (
    <div style={{ width: '100%', height: '100%', background: t.bordeaux, padding: 36, fontFamily: t.sans }}>
      <div style={{ width: '100%', height: '100%', background: t.paper, padding: '56px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: t.mono, fontSize: 17, letterSpacing: 2, textTransform: 'uppercase', color: t.bordeaux, fontWeight: 700 }}>
          <span>Arkiv · Kursomslag</span><span>{course}</span>
        </div>
        <div>
          <h1 style={{ fontFamily: t.serif, fontSize: 116, lineHeight: 0.95, fontWeight: 600, letterSpacing: -2, margin: 0, color: t.ink }}>{fmt(title)}</h1>
          <div style={{ fontFamily: t.serif, fontSize: 36, fontStyle: 'italic', color: t.ink2, marginTop: 18, maxWidth: '28ch', fontWeight: 500 }}>{fmt(subtitle)}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: t.mono, fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: t.ink2, fontWeight: 600 }}>
          <span>{term}</span><span>{String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}

function SlideSection({ number, title, lede, bg = t.bordeaux, page, total, metaLeft, metaRight }) {
  return (
    <Chrome bg={bg} dark metaLeft={metaLeft} metaRight={metaRight} page={page} total={total}>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40, alignItems: 'center', position: 'relative' }}>
        <div style={{ fontFamily: t.serif, fontSize: 340, fontWeight: 500, color: t.paper, opacity: 0.2, lineHeight: 0.8, letterSpacing: -8 }}>{number}</div>
        <div>
          <div style={{ fontFamily: t.mono, fontSize: 18, letterSpacing: 2, textTransform: 'uppercase', color: t.ocker, marginBottom: 20, fontWeight: 700 }}>§ Kapitel {number}</div>
          <h1 style={{ fontFamily: t.serif, fontSize: 96, lineHeight: 0.98, fontWeight: 600, letterSpacing: -1.5, margin: 0, color: t.paper }}>{fmt(title)}</h1>
          <div style={{ fontFamily: t.serif, fontSize: 32, fontStyle: 'italic', color: t.paper, opacity: 0.9, marginTop: 22, maxWidth: '26ch', lineHeight: 1.3, fontWeight: 500 }}>{fmt(lede)}</div>
        </div>
      </div>
    </Chrome>
  );
}

function SlideQuestion({ title, lede, bg = t.mossgron, page, total, metaLeft, metaRight }) {
  return (
    <Chrome bg={bg} dark metaLeft={metaLeft} metaRight={metaRight} page={page} total={total}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: t.mono, fontSize: 18, letterSpacing: 2, textTransform: 'uppercase', color: t.ocker, marginBottom: 24, fontWeight: 700 }}>▸ Dagens fråga</div>
        <h1 style={{ fontFamily: t.serif, fontSize: 104, lineHeight: 1, fontWeight: 600, letterSpacing: -1.5, margin: 0, color: t.paper, maxWidth: '15ch' }}>{fmt(title)}</h1>
        <div style={{ fontFamily: t.serif, fontSize: 34, fontStyle: 'italic', color: t.paper, opacity: 0.92, marginTop: 32, maxWidth: '38ch', lineHeight: 1.35, fontWeight: 500 }}>{fmt(lede)}</div>
      </div>
    </Chrome>
  );
}

function SlideContent({ eyebrow, title, body, bullets, page, total, metaLeft, metaRight }) {
  return (
    <Chrome metaLeft={metaLeft} metaRight={metaRight} page={page} total={total}>
      <div style={{ fontFamily: t.mono, fontSize: 18, letterSpacing: 2, textTransform: 'uppercase', color: t.bordeaux, marginBottom: 16, fontWeight: 700 }}>▸ {eyebrow}</div>
      <h1 style={{ fontFamily: t.serif, fontSize: 72, lineHeight: 1, fontWeight: 600, letterSpacing: -1, margin: '0 0 36px', color: t.ink, maxWidth: '18ch' }}>{fmt(title)}</h1>
      {body && <div style={{ fontSize: 28, lineHeight: 1.45, maxWidth: '32em', color: t.ink, fontWeight: 500 }}>{fmt(body)}</div>}
      {bullets && (
        <div style={{ marginTop: 28 }}>
          {bullets.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: 22, padding: '16px 0', borderTop: i > 0 ? `2px solid ${t.ink2}33` : 'none', alignItems: 'baseline' }}>
              <span style={{ fontFamily: t.mono, fontSize: 24, color: t.ocker, fontWeight: 700, width: 44, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: 28, lineHeight: 1.4, color: t.ink, fontWeight: 500 }}>{fmt(b)}</span>
            </div>
          ))}
        </div>
      )}
    </Chrome>
  );
}

function SlideContentHighlight({ eyebrow, title, body, statLabel, statNumber, statCaption, bg = t.marin, page, total, metaLeft, metaRight }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1.3fr 1fr' }}>
      <div style={{ background: t.paper, padding: '32px 56px 28px', display: 'flex', flexDirection: 'column', fontFamily: t.sans }}>
        <div style={{ fontFamily: t.mono, fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: t.ink2, borderBottom: `2px solid ${t.rule}`, paddingBottom: 12, fontWeight: 600 }}>{metaLeft}</div>
        <div style={{ flex: 1, padding: '32px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: t.mono, fontSize: 18, letterSpacing: 2, textTransform: 'uppercase', color: t.bordeaux, marginBottom: 16, fontWeight: 700 }}>▸ {eyebrow}</div>
          <h1 style={{ fontFamily: t.serif, fontSize: 62, lineHeight: 1, fontWeight: 600, letterSpacing: -0.8, margin: '0 0 28px', color: t.ink, maxWidth: '14ch' }}>{fmt(title)}</h1>
          <div style={{ fontSize: 25, lineHeight: 1.45, color: t.ink, fontWeight: 500 }}>{fmt(body)}</div>
        </div>
        <div style={{ fontFamily: t.mono, fontSize: 15, letterSpacing: 2, textTransform: 'uppercase', color: t.ink2, borderTop: `2px solid ${t.rule}`, paddingTop: 12, fontWeight: 600 }}>Arkiv · v2</div>
      </div>
      <div style={{ background: bg, padding: '32px 48px 28px', color: t.paper, fontFamily: t.sans, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: t.mono, fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: t.ocker, borderBottom: `2px solid ${t.paper}44`, paddingBottom: 12, fontWeight: 700 }}>{metaRight}</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: t.mono, fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: t.ocker, marginBottom: 14, fontWeight: 700 }}>{statLabel}</div>
          <div style={{ fontFamily: t.serif, fontSize: 190, fontWeight: 600, lineHeight: 0.9, letterSpacing: -4, color: t.paper }}>{statNumber}</div>
          <div style={{ fontFamily: t.serif, fontSize: 26, fontStyle: 'italic', color: t.paper, opacity: 0.92, marginTop: 18, lineHeight: 1.35, fontWeight: 500 }}>{fmt(statCaption)}</div>
        </div>
        <div style={{ fontFamily: t.mono, fontSize: 15, letterSpacing: 2, textTransform: 'uppercase', color: t.paper, opacity: 0.8, borderTop: `2px solid ${t.paper}44`, paddingTop: 12, textAlign: 'right', fontWeight: 600 }}>{String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
      </div>
    </div>
  );
}

function SlideTimeline({ title, events, page, total, metaLeft, metaRight }) {
  return (
    <Chrome metaLeft={metaLeft} metaRight={metaRight} page={page} total={total}>
      <h1 style={{ fontFamily: t.serif, fontSize: 62, lineHeight: 1, fontWeight: 600, letterSpacing: -1, margin: '0 0 60px', color: t.ink }}>{fmt(title)}</h1>
      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 34, height: 4, background: t.ocker }} />
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${events.length}, 1fr)`, width: '100%', gap: 20 }}>
          {events.map((e, i) => (
            <div key={i} style={{ position: 'relative', paddingTop: 64 }}>
              <div style={{ position: 'absolute', left: 0, top: 24, width: 22, height: 22, borderRadius: 11, background: t.paper, border: `5px solid ${t.bordeaux}` }} />
              <div style={{ fontFamily: t.mono, fontSize: 26, color: t.bordeaux, fontWeight: 700, letterSpacing: 1 }}>{e.year}</div>
              <div style={{ fontFamily: t.serif, fontSize: 32, fontStyle: 'italic', fontWeight: 600, color: t.ink, marginTop: 8, lineHeight: 1.1 }}>{fmt(e.title)}</div>
              <div style={{ fontSize: 22, color: t.ink, marginTop: 12, lineHeight: 1.4, fontWeight: 500 }}>{fmt(e.note)}</div>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

function SlideQuote({ quote, attribution, context, bg = t.ink, page, total, metaLeft, metaRight }) {
  return (
    <Chrome bg={bg} dark metaLeft={metaLeft} metaRight={metaRight} page={page} total={total}>
      <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 96 }}>
        <div style={{ position: 'absolute', top: -40, left: -10, fontFamily: t.serif, fontSize: 240, lineHeight: 1, color: t.ocker, fontWeight: 600 }}>"</div>
        <div style={{ fontFamily: t.serif, fontSize: 62, fontStyle: 'italic', lineHeight: 1.2, color: t.paper, maxWidth: '22ch', letterSpacing: -0.5, fontWeight: 600 }}>{fmt(quote)}</div>
        <div style={{ marginTop: 44, fontSize: 30, fontWeight: 700, color: t.ocker }}>— {attribution}</div>
        <div style={{ marginTop: 10, fontFamily: t.mono, fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: t.paper, opacity: 0.8, fontWeight: 600 }}>{context}</div>
      </div>
    </Chrome>
  );
}

function SlideCallout({ variant = 'fakta', title, body, page, total, metaLeft, metaRight }) {
  const variantColor = { fakta: t.marin, tips: t.oliv, varning: t.bordeaux, kalla: t.ink, begrepp: t.ocker }[variant];
  const variantLabel = { fakta: 'FAKTA', tips: 'TIPS', varning: 'VARNING', kalla: 'KÄLLA', begrepp: 'BEGREPP' }[variant];
  return (
    <div style={{ width: '100%', height: '100%', background: variantColor, padding: 36, fontFamily: t.sans }}>
      <div style={{ width: '100%', height: '100%', background: t.paper2, padding: '56px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: t.mono, fontSize: 18, letterSpacing: 2, textTransform: 'uppercase', color: variantColor, fontWeight: 800 }}>
          <span>▸ {variantLabel}</span><span>{metaRight}</span>
        </div>
        <div>
          <h1 style={{ fontFamily: t.serif, fontSize: 64, fontStyle: 'italic', fontWeight: 600, lineHeight: 1.05, margin: 0, color: t.ink, maxWidth: '22ch' }}>{fmt(title)}</h1>
          <div style={{ fontSize: 30, lineHeight: 1.45, color: t.ink, marginTop: 28, maxWidth: '26em', fontWeight: 500 }}>{fmt(body)}</div>
        </div>
        <div style={{ fontFamily: t.mono, fontSize: 15, letterSpacing: 2, textTransform: 'uppercase', color: t.ink2, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
          <span>Arkiv · v2 · Callout</span><span>{String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}

function SlideData({ eyebrow, number, caption, body, color = t.bordeaux, page, total, metaLeft, metaRight }) {
  return (
    <Chrome metaLeft={metaLeft} metaRight={metaRight} page={page} total={total}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: t.mono, fontSize: 18, letterSpacing: 2, textTransform: 'uppercase', color: t.ink2, marginBottom: 8, fontWeight: 700 }}>{eyebrow}</div>
        <div style={{ fontFamily: t.serif, fontSize: 260, lineHeight: 0.85, fontWeight: 600, letterSpacing: -6, color: color }}>{number}</div>
        <div style={{ fontFamily: t.serif, fontSize: 46, fontStyle: 'italic', color: t.ink, marginTop: 14, maxWidth: '24ch', lineHeight: 1.15, fontWeight: 600 }}>{fmt(caption)}</div>
        <div style={{ fontSize: 26, color: t.ink, marginTop: 22, maxWidth: '36em', lineHeight: 1.5, fontWeight: 500 }}>{fmt(body)}</div>
      </div>
    </Chrome>
  );
}

function SlideDiscuss({ title, questions, page, total, metaLeft, metaRight }) {
  const roman = ['I', 'II', 'III', 'IV', 'V'];
  return (
    <Chrome bg={t.mossgron} dark metaLeft={metaLeft} metaRight={metaRight} page={page} total={total}>
      <div style={{ fontFamily: t.mono, fontSize: 18, letterSpacing: 2, textTransform: 'uppercase', color: t.ocker, marginBottom: 16, fontWeight: 700 }}>▸ Diskutera</div>
      <h1 style={{ fontFamily: t.serif, fontSize: 62, fontWeight: 600, lineHeight: 1, margin: '0 0 40px', color: t.paper, letterSpacing: -0.8 }}>{fmt(title)}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {questions.map((q, i) => (
          <div key={i} style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
            <span style={{ fontFamily: t.serif, fontSize: 40, fontStyle: 'italic', color: t.ocker, width: 60, flexShrink: 0, fontWeight: 600 }}>{roman[i]}.</span>
            <span style={{ fontSize: 30, lineHeight: 1.35, color: t.paper, fontWeight: 500 }}>{fmt(q)}</span>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

window.ArkivDeck = { SlideCover, SlideSection, SlideQuestion, SlideContent, SlideContentHighlight, SlideTimeline, SlideQuote, SlideCallout, SlideData, SlideDiscuss, tokens: t };
