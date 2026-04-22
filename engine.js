/* ════════════════════════════════════════════════════════════
   CONTENT ENGINE — Core JavaScript Engine
   ════════════════════════════════════════════════════════════ */

// ─── CENTRALIZED STATE ───
const STATE = {
  mode: 'quote',
  ratio: '1:1',
  mood: 'elegant',
  format: 'static',
  bgFilter: 'none',
  guideVisible: false,

  typography: {
    pairing: 'luxury',
    headingFont: "'Playfair Display', Georgia, serif",
    bodyFont: "'Inter', system-ui, sans-serif",
  },

  content: {
    headline: 'The best time to start was yesterday. The next best time is now.',
    subtext: "Focus isn't about saying yes to one thing. It's about saying no to everything else.",
    handle: '@yourhandle',
    cta: 'Save this →',
    badge: 'Insight',
    listItems: [
      'Wake up early — before the world demands your attention',
      'Write down 3 goals every morning',
      'Read for 30 minutes daily',
      'Cut one toxic habit each month',
      'Review your week every Sunday'
    ],
    leftCol: "Waiting for the perfect moment\nTrying to do everything alone\nChasing trends blindly",
    rightCol: "Starting before you feel ready\nBuilding with a team\nFollowing a clear strategy",
    bgImageUrl: '',
  },

  colors: {
    bg: '#0C0A15',
    text: '#FAFAFA',
    accent: '#A78BFA',
    accent2: '#6D28D9',
  },

  carousel: {
    currentSlide: 0,
    slides: [
      { headline: 'The best time to start was yesterday. The next best time is now.', subtext: '' }
    ],
  },
};

// ─── MOOD PALETTES ───
const MOOD_PALETTES = {
  aggressive: {
    bg: '#0F0F0F', text: '#FAFAFA', accent: '#DC2626', accent2: '#991B1B',
    glow: 'rgba(220, 38, 38, 0.2)',
  },
  calm: {
    bg: '#FDF8F0', text: '#1C1917', accent: '#A3B899', accent2: '#6B8C5E',
    glow: 'rgba(163, 184, 153, 0.2)',
  },
  elegant: {
    bg: '#0C0A15', text: '#FAFAFA', accent: '#A78BFA', accent2: '#6D28D9',
    glow: 'rgba(167, 139, 250, 0.2)',
  },
  bold: {
    bg: '#1C1917', text: '#FAFAFA', accent: '#F59E0B', accent2: '#D97706',
    glow: 'rgba(245, 158, 11, 0.2)',
  },
  minimal: {
    bg: '#FAFAFA', text: '#18181B', accent: '#6B7280', accent2: '#4B5563',
    glow: 'rgba(107, 114, 128, 0.1)',
  },
  warm: {
    bg: '#FEF3C7', text: '#1C1917', accent: '#EA580C', accent2: '#C2410C',
    glow: 'rgba(234, 88, 12, 0.2)',
  },
};

// ─── FONT PAIRINGS ───
const FONT_PAIRINGS = {
  luxury: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
  },
  modern: {
    heading: "'Space Grotesk', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
  editorial: {
    heading: "'Cormorant Garamond', Georgia, serif",
    body: "'Outfit', system-ui, sans-serif",
  },
  bold: {
    heading: "'Outfit', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
};

// ─── HOOK LIBRARY ───
const HOOKS = [
  { cat: 'Curiosity', text: 'X Things Nobody Tells You About ___' },
  { cat: 'Curiosity', text: 'What Happens When You ___ Every Day' },
  { cat: 'Curiosity', text: 'The Hidden Truth About ___' },
  { cat: 'Curiosity', text: 'Why ___ Is Not What You Think' },
  { cat: 'Curiosity', text: 'X Secrets ___ Don\'t Want You to Know' },
  { cat: 'Curiosity', text: 'What ___ Taught Me About ___' },
  { cat: 'Curiosity', text: 'The Real Reason ___ Doesn\'t Work' },
  { cat: 'Curiosity', text: 'X ___ Facts That Will Blow Your Mind' },
  { cat: 'Curiosity', text: 'Why Most People Get ___ Wrong' },
  { cat: 'Curiosity', text: 'The ___ Nobody Is Talking About' },
  { cat: 'Story', text: 'I Tried ___ for 30 Days. Here\'s What Happened.' },
  { cat: 'Story', text: 'How I Went From ___ to ___' },
  { cat: 'Story', text: 'The Day I Stopped ___' },
  { cat: 'Story', text: 'I Failed at ___ So You Don\'t Have To' },
  { cat: 'Story', text: 'From ___ to ___ in X Months' },
  { cat: 'Story', text: 'What ___ Looked Like vs Reality' },
  { cat: 'Story', text: 'My Biggest Mistake Was ___' },
  { cat: 'Story', text: 'How ___ Changed Everything' },
  { cat: 'Story', text: 'The Moment I Realized ___' },
  { cat: 'Story', text: 'I Quit ___ and This Happened' },
  { cat: 'Lists', text: 'X Things I Wish I Knew Before ___' },
  { cat: 'Lists', text: 'X Rules for ___' },
  { cat: 'Lists', text: 'X Signs You\'re ___' },
  { cat: 'Lists', text: 'X Mistakes to Avoid When ___' },
  { cat: 'Lists', text: 'X Ways to ___ Without ___' },
  { cat: 'Lists', text: 'X ___ That Will Change Your ___' },
  { cat: 'Lists', text: 'The X-Step Guide to ___' },
  { cat: 'Lists', text: 'X Tools Every ___ Needs' },
  { cat: 'Lists', text: 'X Habits of Highly ___' },
  { cat: 'Lists', text: 'X Lessons From ___' },
  { cat: 'Challenge', text: 'Stop Doing ___ If You Want ___' },
  { cat: 'Challenge', text: 'You\'re Not ___. You\'re ___.' },
  { cat: 'Challenge', text: '___ Is Killing Your ___' },
  { cat: 'Challenge', text: 'If You Can\'t ___, Read This' },
  { cat: 'Challenge', text: 'The Harsh Truth About ___' },
  { cat: 'Challenge', text: 'Why You\'ll Never ___ (Unless...)' },
  { cat: 'Challenge', text: 'This Simple Shift Changed My ___' },
  { cat: 'Challenge', text: '___ Won\'t Save You. Here\'s What Will.' },
  { cat: 'Challenge', text: 'The ___ Framework That Fixed Everything' },
  { cat: 'Challenge', text: 'Do This Instead of ___' },
  { cat: 'Contrast', text: 'Before vs After ___' },
  { cat: 'Contrast', text: '___ vs ___: Which Is Better?' },
  { cat: 'Contrast', text: 'What ___ Think vs What Actually Works' },
  { cat: 'Contrast', text: 'Expectation vs Reality: ___' },
  { cat: 'Contrast', text: 'Old Way vs New Way of ___' },
  { cat: 'Contrast', text: 'What I Thought ___ Was vs What It Actually Is' },
  { cat: 'Contrast', text: 'Beginner ___ vs Pro ___' },
  { cat: 'Contrast', text: 'The Difference Between ___ and ___' },
  { cat: 'Contrast', text: 'Why ___ Works But ___ Doesn\'t' },
  { cat: 'Contrast', text: 'Rich People ___ vs Poor People ___' },
  { cat: 'Authority', text: 'The Only ___ Guide You\'ll Ever Need' },
  { cat: 'Authority', text: 'How to ___ in X Simple Steps' },
  { cat: 'Authority', text: 'Everything You Need to Know About ___' },
  { cat: 'Authority', text: 'The Ultimate ___ Cheatsheet' },
  { cat: 'Authority', text: 'Save This ___ for Later' },
];

// ─── ASPECT RATIO SIZES ───
const RATIO_SIZES = {
  '1:1':  { width: 420, height: 420 },
  '4:5':  { width: 420, height: 525 },
  '9:16': { width: 340, height: 604 },
};

// Export resolution multiplier
const EXPORT_SCALES = {
  '1:1':  1080 / 420,
  '4:5':  1080 / 420,
  '9:16': 1080 / 340,
};


// ═══════════════════════════════════════════════════════════
//  DOM REFERENCES
// ═══════════════════════════════════════════════════════════
const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

const DOM = {};

function cacheDom() {
  DOM.canvasFrame = $('canvasFrame');
  DOM.canvasInner = $('canvasInner');
  DOM.canvasBgImage = $('canvasBgImage');
  DOM.canvasBgOverlay = $('canvasBgOverlay');
  DOM.canvasGrid = $('canvasGrid');
  DOM.canvasGuide = $('canvasGuide');

  // Templates
  DOM.tplQuote = $('tplQuote');
  DOM.tplChecklist = $('tplChecklist');
  DOM.tplComparison = $('tplComparison');
  DOM.tplEditorial = $('tplEditorial');

  // Quote elements
  DOM.quoteText = $('quoteText');
  DOM.quoteAuthor = $('quoteAuthor');
  DOM.quoteBadge = $('quoteBadge');
  DOM.quoteHandle = $('quoteHandle');
  DOM.quoteCta = $('quoteCta');

  // Checklist elements
  DOM.checklistTitle = $('checklistTitle');
  DOM.checklistItems = $('checklistItems');
  DOM.checklistBadge = $('checklistBadge');
  DOM.checklistHandle = $('checklistHandle');
  DOM.checklistCta = $('checklistCta');

  // Comparison elements
  DOM.comparisonTitle = $('comparisonTitle');
  DOM.comparisonLeft = $('comparisonLeft');
  DOM.comparisonRight = $('comparisonRight');
  DOM.comparisonBadge = $('comparisonBadge');
  DOM.comparisonHandle = $('comparisonHandle');

  // Editorial elements
  DOM.editorialHeadline = $('editorialHeadline');
  DOM.editorialSubtext = $('editorialSubtext');
  DOM.editorialBadge = $('editorialBadge');
  DOM.editorialHandle = $('editorialHandle');
  DOM.editorialCta = $('editorialCta');

  // Controls
  DOM.hookSearch = $('hookSearch');
  DOM.hookDropdown = $('hookDropdown');
  DOM.dynamicContentFields = $('dynamicContentFields');
  DOM.slideManager = $('slideManager');
  DOM.slideNumberDisplay = $('slideNumberDisplay');
  DOM.carouselStrip = $('carouselStrip');
  DOM.toastContainer = $('toastContainer');
  DOM.exportProgress = $('exportProgress');
  DOM.exportProgressText = $('exportProgressText');

  // Color inputs
  DOM.colorBg = $('colorBg');
  DOM.colorText = $('colorText');
  DOM.colorAccent = $('colorAccent');
  DOM.colorAccent2 = $('colorAccent2');
  DOM.colorBgHex = $('colorBgHex');
  DOM.colorTextHex = $('colorTextHex');
  DOM.colorAccentHex = $('colorAccentHex');
  DOM.colorAccent2Hex = $('colorAccent2Hex');
}


// ═══════════════════════════════════════════════════════════
//  INITIALIZATION
// ═══════════════════════════════════════════════════════════
function init() {
  cacheDom();
  bindAccordions();
  bindMoodSelector();
  bindModeCards();
  bindFormatToggle();
  bindRatioToggle();
  bindFontPairing();
  bindContentInputs();
  bindColorInputs();
  bindBgImage();
  bindBgFilter();
  bindHookLibrary();
  bindExportButtons();
  bindGuideToggle();
  bindCarouselControls();

  // Initial render
  applyMood(STATE.mood);
  applyRatio(STATE.ratio);
  renderContentFields();
  renderCanvas();
  renderGoldenGuide();
}


// ═══════════════════════════════════════════════════════════
//  ACCORDION SYSTEM
// ═══════════════════════════════════════════════════════════
function bindAccordions() {
  $$('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const acc = trigger.closest('.accordion');
      acc.classList.toggle('open');
    });
  });
}


// ═══════════════════════════════════════════════════════════
//  MOOD SELECTOR
// ═══════════════════════════════════════════════════════════
function bindMoodSelector() {
  $$('.mood-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const mood = pill.dataset.mood;
      STATE.mood = mood;
      $$('.mood-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      applyMood(mood);
      renderCanvas();
    });
  });
}

function applyMood(mood) {
  const palette = MOOD_PALETTES[mood];
  if (!palette) return;

  STATE.colors.bg = palette.bg;
  STATE.colors.text = palette.text;
  STATE.colors.accent = palette.accent;
  STATE.colors.accent2 = palette.accent2;

  // Update CSS variables on canvas
  const ci = DOM.canvasInner;
  ci.style.setProperty('--canvas-bg', palette.bg);
  ci.style.setProperty('--canvas-text', palette.text);
  ci.style.setProperty('--canvas-accent', palette.accent);
  ci.style.setProperty('--canvas-accent2', palette.accent2);
  ci.style.setProperty('--canvas-muted', isLightColor(palette.bg) ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)');
  ci.style.setProperty('--canvas-subtle', isLightColor(palette.bg) ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)');
  ci.style.setProperty('--canvas-glow', palette.glow);
  ci.style.background = palette.bg;

  // Update canvas frame glow
  DOM.canvasFrame.style.setProperty('--canvas-glow', palette.glow);

  // Sync color pickers
  DOM.colorBg.value = palette.bg;
  DOM.colorText.value = palette.text;
  DOM.colorAccent.value = palette.accent;
  DOM.colorAccent2.value = palette.accent2;
  DOM.colorBgHex.value = palette.bg;
  DOM.colorTextHex.value = palette.text;
  DOM.colorAccentHex.value = palette.accent;
  DOM.colorAccent2Hex.value = palette.accent2;

  // Adjust grid opacity for light backgrounds
  if (DOM.canvasGrid) {
    DOM.canvasGrid.style.opacity = isLightColor(palette.bg) ? '0.3' : '0.6';
  }
}

function isLightColor(hex) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}


// ═══════════════════════════════════════════════════════════
//  MODE SELECTION
// ═══════════════════════════════════════════════════════════
function bindModeCards() {
  $$('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      const mode = card.dataset.mode;
      STATE.mode = mode;
      $$('.mode-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      renderContentFields();
      renderCanvas();
    });
  });
}


// ═══════════════════════════════════════════════════════════
//  FORMAT (STATIC / CAROUSEL)
// ═══════════════════════════════════════════════════════════
function bindFormatToggle() {
  $$('#formatGroup .btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const format = btn.dataset.format;
      STATE.format = format;
      $$('#formatGroup .btn-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (format === 'carousel') {
        DOM.slideManager.classList.remove('hidden');
        DOM.carouselStrip.classList.add('visible');
        // Ensure at least 1 slide
        if (STATE.carousel.slides.length === 0) {
          STATE.carousel.slides.push({ headline: STATE.content.headline, subtext: STATE.content.subtext });
        }
        STATE.carousel.currentSlide = 0;
        renderCarouselStrip();
        loadSlideContent(0);
      } else {
        DOM.slideManager.classList.add('hidden');
        DOM.carouselStrip.classList.remove('visible');
      }
      renderContentFields();
      renderCanvas();
    });
  });
}


// ═══════════════════════════════════════════════════════════
//  ASPECT RATIO
// ═══════════════════════════════════════════════════════════
function bindRatioToggle() {
  $$('#ratioGroup .btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const ratio = btn.dataset.ratio;
      STATE.ratio = ratio;
      $$('#ratioGroup .btn-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyRatio(ratio);
      renderGoldenGuide();
      renderCanvas();
    });
  });
}

function applyRatio(ratio) {
  const size = RATIO_SIZES[ratio];
  DOM.canvasFrame.style.setProperty('--canvas-width', size.width + 'px');
  DOM.canvasFrame.style.setProperty('--canvas-height', size.height + 'px');
}


// ═══════════════════════════════════════════════════════════
//  FONT PAIRING
// ═══════════════════════════════════════════════════════════
function bindFontPairing() {
  $('fontPairing').addEventListener('change', (e) => {
    const key = e.target.value;
    STATE.typography.pairing = key;
    const pair = FONT_PAIRINGS[key];
    STATE.typography.headingFont = pair.heading;
    STATE.typography.bodyFont = pair.body;

    DOM.canvasInner.style.setProperty('--font-heading', pair.heading);
    DOM.canvasInner.style.setProperty('--font-body', pair.body);
    renderCanvas();
  });
}


// ═══════════════════════════════════════════════════════════
//  TYPOGRAPHY AUTO-SCALING
// ═══════════════════════════════════════════════════════════
function getAutoFontSize(text, baseSize) {
  const len = text.length;
  if (len <= 30) return baseSize;
  if (len <= 60) return Math.round(baseSize * 0.82);
  if (len <= 90) return Math.round(baseSize * 0.68);
  if (len <= 130) return Math.round(baseSize * 0.58);
  return Math.round(baseSize * 0.5);
}

function getAutoFontSizeForRatio(text) {
  const bases = { '1:1': 30, '4:5': 32, '9:16': 28 };
  const base = bases[STATE.ratio] || 30;
  return getAutoFontSize(text, base);
}


// ═══════════════════════════════════════════════════════════
//  CONTENT FIELDS (dynamic based on mode)
// ═══════════════════════════════════════════════════════════
function bindContentInputs() {
  // Static inputs that are always visible
  $('inputHandle').addEventListener('input', (e) => {
    STATE.content.handle = e.target.value;
    renderCanvas();
  });
  $('inputCta').addEventListener('input', (e) => {
    STATE.content.cta = e.target.value;
    renderCanvas();
  });
  $('inputBadge').addEventListener('input', (e) => {
    STATE.content.badge = e.target.value;
    renderCanvas();
  });
}

function renderContentFields() {
  const container = DOM.dynamicContentFields;
  container.innerHTML = '';

  if (STATE.mode === 'quote') {
    container.innerHTML = `
      <div class="field-group">
        <label class="field-label" for="inputHeadline">Quote Text</label>
        <textarea class="field-textarea" id="inputHeadline" rows="3" placeholder="Your powerful quote...">${STATE.content.headline}</textarea>
      </div>
    `;
  } else if (STATE.mode === 'checklist') {
    container.innerHTML = `
      <div class="field-group">
        <label class="field-label" for="inputHeadline">List Title</label>
        <input class="field-input" id="inputHeadline" type="text" value="${escapeAttr(STATE.content.headline)}" placeholder="5 Habits That Changed My Life">
      </div>
      <div class="field-group">
        <label class="field-label">List Items (one per line)</label>
        <textarea class="field-textarea" id="inputListItems" rows="6" placeholder="Item 1\nItem 2\nItem 3">${STATE.content.listItems.join('\n')}</textarea>
      </div>
    `;
    $('inputListItems')?.addEventListener('input', (e) => {
      STATE.content.listItems = e.target.value.split('\n').filter(l => l.trim());
      renderCanvas();
    });
  } else if (STATE.mode === 'comparison') {
    container.innerHTML = `
      <div class="field-group">
        <label class="field-label" for="inputHeadline">Title</label>
        <input class="field-input" id="inputHeadline" type="text" value="${escapeAttr(STATE.content.headline)}" placeholder="Old Way vs New Way">
      </div>
      <div class="field-group">
        <label class="field-label" for="inputLeftCol">Left Column (Don't)</label>
        <textarea class="field-textarea" id="inputLeftCol" rows="4" placeholder="Bad practice 1\nBad practice 2">${STATE.content.leftCol}</textarea>
      </div>
      <div class="field-group">
        <label class="field-label" for="inputRightCol">Right Column (Do)</label>
        <textarea class="field-textarea" id="inputRightCol" rows="4" placeholder="Good practice 1\nGood practice 2">${STATE.content.rightCol}</textarea>
      </div>
    `;
    $('inputLeftCol')?.addEventListener('input', (e) => {
      STATE.content.leftCol = e.target.value;
      renderCanvas();
    });
    $('inputRightCol')?.addEventListener('input', (e) => {
      STATE.content.rightCol = e.target.value;
      renderCanvas();
    });
  } else if (STATE.mode === 'editorial') {
    container.innerHTML = `
      <div class="field-group">
        <label class="field-label" for="inputHeadline">Headline</label>
        <textarea class="field-textarea" id="inputHeadline" rows="2" placeholder="Your editorial headline...">${STATE.content.headline}</textarea>
      </div>
      <div class="field-group">
        <label class="field-label" for="inputSubtext">Subtext</label>
        <textarea class="field-textarea" id="inputSubtext" rows="3" placeholder="Supporting text...">${STATE.content.subtext}</textarea>
      </div>
    `;
    $('inputSubtext')?.addEventListener('input', (e) => {
      STATE.content.subtext = e.target.value;
      renderCanvas();
    });
  }

  // Bind the headline input (exists in all modes)
  const headlineInput = $('inputHeadline');
  if (headlineInput) {
    headlineInput.addEventListener('input', (e) => {
      STATE.content.headline = e.target.value;
      // If in carousel mode, also update the current slide
      if (STATE.format === 'carousel') {
        const idx = STATE.carousel.currentSlide;
        if (STATE.carousel.slides[idx]) {
          STATE.carousel.slides[idx].headline = e.target.value;
        }
      }
      renderCanvas();
    });
  }
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


// ═══════════════════════════════════════════════════════════
//  COLOR INPUTS
// ═══════════════════════════════════════════════════════════
function bindColorInputs() {
  const pairs = [
    ['colorBg', 'colorBgHex', 'bg', '--canvas-bg'],
    ['colorText', 'colorTextHex', 'text', '--canvas-text'],
    ['colorAccent', 'colorAccentHex', 'accent', '--canvas-accent'],
    ['colorAccent2', 'colorAccent2Hex', 'accent2', '--canvas-accent2'],
  ];

  pairs.forEach(([swatchId, hexId, stateKey, cssVar]) => {
    const swatch = $(swatchId);
    const hex = $(hexId);

    swatch.addEventListener('input', (e) => {
      STATE.colors[stateKey] = e.target.value;
      hex.value = e.target.value;
      DOM.canvasInner.style.setProperty(cssVar, e.target.value);
      if (stateKey === 'bg') {
        DOM.canvasInner.style.background = e.target.value;
        DOM.canvasInner.style.setProperty('--canvas-muted',
          isLightColor(e.target.value) ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)');
        DOM.canvasInner.style.setProperty('--canvas-subtle',
          isLightColor(e.target.value) ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)');
      }
      renderCanvas();
    });

    hex.addEventListener('input', (e) => {
      let val = e.target.value;
      if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
        STATE.colors[stateKey] = val;
        swatch.value = val;
        DOM.canvasInner.style.setProperty(cssVar, val);
        if (stateKey === 'bg') {
          DOM.canvasInner.style.background = val;
        }
        renderCanvas();
      }
    });
  });
}


// ═══════════════════════════════════════════════════════════
//  BACKGROUND IMAGE
// ═══════════════════════════════════════════════════════════
function bindBgImage() {
  $('inputBgUrl').addEventListener('input', debounce((e) => {
    const url = e.target.value.trim();
    STATE.content.bgImageUrl = url;

    if (url) {
      DOM.canvasBgImage.style.backgroundImage = `url(${url})`;
      DOM.canvasBgImage.classList.add('visible');
      DOM.canvasBgOverlay.classList.add('visible');
      DOM.canvasGrid.style.opacity = '0.15';
    } else {
      DOM.canvasBgImage.classList.remove('visible');
      DOM.canvasBgOverlay.classList.remove('visible');
      DOM.canvasGrid.style.opacity = isLightColor(STATE.colors.bg) ? '0.3' : '0.6';
    }
    applyBgFilter();
  }, 400));
}

function bindBgFilter() {
  $$('#bgFilterGroup .btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      STATE.bgFilter = btn.dataset.filter;
      $$('#bgFilterGroup .btn-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyBgFilter();
    });
  });
}

function applyBgFilter() {
  const f = STATE.bgFilter;
  if (f === 'duotone') {
    DOM.canvasBgImage.style.filter = 'url(#duotone) contrast(1.1)';
  } else if (f === 'grayscale') {
    DOM.canvasBgImage.style.filter = 'grayscale(1) contrast(1.1)';
  } else {
    DOM.canvasBgImage.style.filter = 'none';
  }
}


// ═══════════════════════════════════════════════════════════
//  HOOK LIBRARY
// ═══════════════════════════════════════════════════════════
function bindHookLibrary() {
  const search = DOM.hookSearch;
  const dropdown = DOM.hookDropdown;

  // Build initial dropdown content
  buildHookDropdown(HOOKS);

  search.addEventListener('focus', () => {
    dropdown.classList.add('visible');
    buildHookDropdown(filterHooks(search.value));
  });

  search.addEventListener('input', () => {
    buildHookDropdown(filterHooks(search.value));
    dropdown.classList.add('visible');
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hook-library')) {
      dropdown.classList.remove('visible');
    }
  });
}

function filterHooks(query) {
  if (!query.trim()) return HOOKS;
  const q = query.toLowerCase();
  return HOOKS.filter(h => h.text.toLowerCase().includes(q) || h.cat.toLowerCase().includes(q));
}

function buildHookDropdown(hooks) {
  const dropdown = DOM.hookDropdown;
  let html = '';
  let lastCat = '';

  hooks.forEach(h => {
    if (h.cat !== lastCat) {
      html += `<div class="hook-category">${h.cat}</div>`;
      lastCat = h.cat;
    }
    html += `<div class="hook-item" data-hook="${escapeAttr(h.text)}">${h.text}</div>`;
  });

  if (!hooks.length) {
    html = '<div class="hook-item" style="color:var(--text-dim);cursor:default">No matches found</div>';
  }

  dropdown.innerHTML = html;

  // Bind clicks
  dropdown.querySelectorAll('.hook-item[data-hook]').forEach(item => {
    item.addEventListener('click', () => {
      const hook = item.dataset.hook;
      STATE.content.headline = hook;

      // Update input field
      const headlineInput = $('inputHeadline');
      if (headlineInput) {
        headlineInput.value = hook;
      }

      DOM.hookSearch.value = '';
      dropdown.classList.remove('visible');
      renderCanvas();
      showToast('Hook applied! Fill in the blanks.', 'info');
    });
  });
}


// ═══════════════════════════════════════════════════════════
//  GOLDEN RATIO GUIDE
// ═══════════════════════════════════════════════════════════
function bindGuideToggle() {
  $('guideToggle').addEventListener('click', () => {
    STATE.guideVisible = !STATE.guideVisible;
    DOM.canvasGuide.classList.toggle('visible', STATE.guideVisible);
    $('guideToggle').classList.toggle('active', STATE.guideVisible);
  });
}

function renderGoldenGuide() {
  const size = RATIO_SIZES[STATE.ratio];
  const w = size.width;
  const h = size.height;

  // Golden ratio ≈ 0.618
  const phi = 0.618;
  const lines = [
    { cls: 'h', top: Math.round(h * phi) },
    { cls: 'h', top: Math.round(h * (1 - phi)) },
    { cls: 'v', left: Math.round(w * phi) },
    { cls: 'v', left: Math.round(w * (1 - phi)) },
  ];

  DOM.canvasGuide.innerHTML = lines.map(l => {
    if (l.cls === 'h') {
      return `<div class="canvas-guide-line h" style="top:${l.top}px"></div>`;
    }
    return `<div class="canvas-guide-line v" style="left:${l.left}px"></div>`;
  }).join('');
}


// ═══════════════════════════════════════════════════════════
//  CAROUSEL MANAGEMENT
// ═══════════════════════════════════════════════════════════
function bindCarouselControls() {
  $('btnAddSlide').addEventListener('click', () => {
    STATE.carousel.slides.push({ headline: '', subtext: '' });
    STATE.carousel.currentSlide = STATE.carousel.slides.length - 1;
    loadSlideContent(STATE.carousel.currentSlide);
    renderCarouselStrip();
    renderContentFields();
    showToast(`Slide ${STATE.carousel.slides.length} added`, 'success');
  });

  $('btnRemoveSlide').addEventListener('click', () => {
    if (STATE.carousel.slides.length <= 1) {
      showToast('Need at least 1 slide', 'error');
      return;
    }
    STATE.carousel.slides.splice(STATE.carousel.currentSlide, 1);
    STATE.carousel.currentSlide = Math.min(STATE.carousel.currentSlide, STATE.carousel.slides.length - 1);
    loadSlideContent(STATE.carousel.currentSlide);
    renderCarouselStrip();
    renderContentFields();
    renderCanvas();
    showToast('Slide removed', 'info');
  });

  $('btnPrevSlide').addEventListener('click', () => {
    if (STATE.carousel.currentSlide > 0) {
      saveCurrentSlide();
      STATE.carousel.currentSlide--;
      loadSlideContent(STATE.carousel.currentSlide);
      renderCarouselStrip();
      renderContentFields();
      renderCanvas();
    }
  });

  $('btnNextSlide').addEventListener('click', () => {
    if (STATE.carousel.currentSlide < STATE.carousel.slides.length - 1) {
      saveCurrentSlide();
      STATE.carousel.currentSlide++;
      loadSlideContent(STATE.carousel.currentSlide);
      renderCarouselStrip();
      renderContentFields();
      renderCanvas();
    }
  });
}

function saveCurrentSlide() {
  const idx = STATE.carousel.currentSlide;
  const slide = STATE.carousel.slides[idx];
  if (slide) {
    slide.headline = STATE.content.headline;
    slide.subtext = STATE.content.subtext;
  }
}

function loadSlideContent(idx) {
  const slide = STATE.carousel.slides[idx];
  if (slide) {
    STATE.content.headline = slide.headline;
    STATE.content.subtext = slide.subtext;
  }
  DOM.slideNumberDisplay.textContent = `Slide ${idx + 1} / ${STATE.carousel.slides.length}`;
}

function renderCarouselStrip() {
  let html = '';
  STATE.carousel.slides.forEach((_, i) => {
    const active = i === STATE.carousel.currentSlide ? 'active' : '';
    html += `<div class="slide-thumb ${active}" data-slide-idx="${i}">${i + 1}</div>`;
  });
  html += `<div class="slide-thumb slide-thumb-add" id="thumbAddSlide">+</div>`;

  DOM.carouselStrip.innerHTML = html;

  // Bind thumb clicks
  DOM.carouselStrip.querySelectorAll('.slide-thumb[data-slide-idx]').forEach(thumb => {
    thumb.addEventListener('click', () => {
      saveCurrentSlide();
      STATE.carousel.currentSlide = parseInt(thumb.dataset.slideIdx);
      loadSlideContent(STATE.carousel.currentSlide);
      renderCarouselStrip();
      renderContentFields();
      renderCanvas();
    });
  });

  // Bind add button in strip
  const addBtn = $('thumbAddSlide');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      $('btnAddSlide').click();
    });
  }
}


// ═══════════════════════════════════════════════════════════
//  CANVAS RENDERING
// ═══════════════════════════════════════════════════════════
function renderCanvas() {
  const mode = STATE.mode;

  // Toggle template visibility
  DOM.tplQuote.classList.toggle('active', mode === 'quote');
  DOM.tplChecklist.classList.toggle('active', mode === 'checklist');
  DOM.tplComparison.classList.toggle('active', mode === 'comparison');
  DOM.tplEditorial.classList.toggle('active', mode === 'editorial');

  // Show bg overlay only for editorial with image
  const hasImage = STATE.content.bgImageUrl && STATE.content.bgImageUrl.trim();
  DOM.canvasBgOverlay.classList.toggle('visible', mode === 'editorial' && hasImage);

  // Render per-mode content
  if (mode === 'quote') renderQuote();
  else if (mode === 'checklist') renderChecklist();
  else if (mode === 'comparison') renderComparison();
  else if (mode === 'editorial') renderEditorial();
}

function renderQuote() {
  const s = STATE.content;
  const fontSize = getAutoFontSizeForRatio(s.headline);
  DOM.quoteText.textContent = s.headline;
  DOM.quoteText.style.fontSize = fontSize + 'px';
  DOM.quoteAuthor.textContent = '— ' + s.handle;
  DOM.quoteBadge.textContent = s.badge;
  DOM.quoteHandle.textContent = s.handle;
  DOM.quoteCta.textContent = s.cta;
}

function renderChecklist() {
  const s = STATE.content;
  const titleSize = getAutoFontSize(s.headline, 26);
  DOM.checklistTitle.textContent = s.headline;
  DOM.checklistTitle.style.fontSize = titleSize + 'px';
  DOM.checklistBadge.textContent = s.badge;
  DOM.checklistHandle.textContent = s.handle;
  DOM.checklistCta.textContent = s.cta;

  // Render list items
  const items = s.listItems.slice(0, 7); // Max 7 for space
  DOM.checklistItems.innerHTML = items.map((item, i) => `
    <div class="checklist-item">
      <span class="item-marker">${String(i + 1).padStart(2, '0')}</span>
      <span class="item-text">${escapeHtml(item)}</span>
    </div>
  `).join('');
}

function renderComparison() {
  const s = STATE.content;
  const titleSize = getAutoFontSize(s.headline, 24);
  DOM.comparisonTitle.textContent = s.headline;
  DOM.comparisonTitle.style.fontSize = titleSize + 'px';
  DOM.comparisonBadge.textContent = s.badge;
  DOM.comparisonLeft.textContent = s.leftCol;
  DOM.comparisonRight.textContent = s.rightCol;
  DOM.comparisonHandle.textContent = s.handle;
}

function renderEditorial() {
  const s = STATE.content;
  const headSize = getAutoFontSize(s.headline, 32);
  DOM.editorialHeadline.textContent = s.headline;
  DOM.editorialHeadline.style.fontSize = headSize + 'px';
  DOM.editorialSubtext.textContent = s.subtext;
  DOM.editorialBadge.textContent = s.badge;
  DOM.editorialHandle.textContent = s.handle;
  DOM.editorialCta.textContent = s.cta;
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}


// ═══════════════════════════════════════════════════════════
//  EXPORT PIPELINE
// ═══════════════════════════════════════════════════════════
function bindExportButtons() {
  $('btnExportPng').addEventListener('click', exportSinglePng);
  $('btnExportZip').addEventListener('click', exportCarouselZip);
}

async function exportSinglePng() {
  showExportProgress('Rendering high-resolution PNG...');
  try {
    // Temporarily hide guide and toggle
    const guideWasVisible = STATE.guideVisible;
    DOM.canvasGuide.classList.remove('visible');
    $('guideToggle').style.display = 'none';

    const scale = EXPORT_SCALES[STATE.ratio] || 2.5;
    const canvas = await html2canvas(DOM.canvasInner, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
    });

    // Restore guide
    if (guideWasVisible) DOM.canvasGuide.classList.add('visible');
    $('guideToggle').style.display = '';

    canvas.toBlob((blob) => {
      hideExportProgress();
      if (blob) {
        const link = document.createElement('a');
        link.download = `content-engine-${STATE.mode}-${Date.now()}.png`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
        showToast('PNG exported successfully!', 'success');
      }
    }, 'image/png');
  } catch (err) {
    hideExportProgress();
    showToast('Export failed: ' + err.message, 'error');
    console.error('Export error:', err);
  }
}

async function exportCarouselZip() {
  if (STATE.format !== 'carousel' || STATE.carousel.slides.length < 2) {
    showToast('Switch to Carousel mode with 2+ slides first', 'error');
    return;
  }

  showExportProgress('Preparing carousel export...');
  try {
    const zip = new JSZip();
    const scale = EXPORT_SCALES[STATE.ratio] || 2.5;
    const originalSlide = STATE.carousel.currentSlide;

    // Temporarily hide guide
    const guideWasVisible = STATE.guideVisible;
    DOM.canvasGuide.classList.remove('visible');
    $('guideToggle').style.display = 'none';

    for (let i = 0; i < STATE.carousel.slides.length; i++) {
      DOM.exportProgressText.textContent = `Rendering slide ${i + 1} of ${STATE.carousel.slides.length}...`;

      // Load slide content
      STATE.carousel.currentSlide = i;
      loadSlideContent(i);
      renderContentFields();
      renderCanvas();

      // Wait a tick for DOM to update
      await new Promise(r => setTimeout(r, 100));

      const canvas = await html2canvas(DOM.canvasInner, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
      });

      const dataUrl = canvas.toDataURL('image/png');
      const base64 = dataUrl.split(',')[1];
      zip.file(`slide-${String(i + 1).padStart(2, '0')}.png`, base64, { base64: true });
    }

    // Restore original slide
    STATE.carousel.currentSlide = originalSlide;
    loadSlideContent(originalSlide);
    renderCarouselStrip();
    renderContentFields();
    renderCanvas();
    if (guideWasVisible) DOM.canvasGuide.classList.add('visible');
    $('guideToggle').style.display = '';

    DOM.exportProgressText.textContent = 'Compressing ZIP...';
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, `carousel-${STATE.mode}-${Date.now()}.zip`);

    hideExportProgress();
    showToast(`${STATE.carousel.slides.length} slides exported as ZIP!`, 'success');
  } catch (err) {
    hideExportProgress();
    showToast('ZIP export failed: ' + err.message, 'error');
    console.error('ZIP export error:', err);
  }
}

function showExportProgress(text) {
  DOM.exportProgressText.textContent = text;
  DOM.exportProgress.classList.add('visible');
}

function hideExportProgress() {
  DOM.exportProgress.classList.remove('visible');
}


// ═══════════════════════════════════════════════════════════
//  TOAST NOTIFICATIONS
// ═══════════════════════════════════════════════════════════
function showToast(message, type = 'info') {
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ'}</span>${message}`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}


// ═══════════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════════
function debounce(fn, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}


// ═══════════════════════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', init);
