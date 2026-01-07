# Am Predicts Design System v1.0
**Official Design Specification**
**Date**: January 7, 2026
**Status**: Master Reference - Ready for Implementation

---

## Philosophy

### Core Principles

**1. Sciemo-Inspired Sophistication**
- Clean, minimal, technical aesthetic
- Monospace typography for precision
- Strong geometric structure
- Generous whitespace

**2. Functional Multicolor**
- Base layer: 80% neutral (Sciemo-style)
- Accent layer: 10% coral (primary actions)
- Functional layer: 10% category colors (information hierarchy)

**3. Technical Precision**
- Every decision is measurable
- Consistent spacing scale
- Predictable component behavior
- No arbitrary values

**4. Institutional Grade**
- Professional, not playful
- Data-focused, not decorative
- Trustworthy, not trendy
- Scalable, not experimental

---

## Design Tokens

### Color System

```css
:root {
    /* ============================================
       NEUTRALS (80% of design)
       Base layer - Sciemo-inspired
       ============================================ */

    /* Backgrounds */
    --color-bg-primary: #FFFFFF;        /* Pure white */
    --color-bg-secondary: #F7F7F7;      /* Off-white page background */
    --color-bg-tertiary: #E8E8E8;       /* Light gray for cards, sections */
    --color-bg-dark: #6B6B6B;           /* Dark sections */

    /* Text */
    --color-text-primary: #1B1C1C;      /* Near-black, all body text */
    --color-text-secondary: #6B6B6B;    /* Gray, secondary text */
    --color-text-inverted: #FFFFFF;     /* White on dark backgrounds */

    /* Borders */
    --color-border: #1B1C1C;            /* Black borders everywhere */

    /* ============================================
       PRIMARY ACCENT (10% of design)
       Coral - for primary actions and emphasis
       ============================================ */

    --color-accent-primary: #E8846B;    /* Coral/salmon */

    /* ============================================
       FUNCTIONAL COLORS (10% of design)
       Category identification and status
       Usage: Border accents, badges, subtle highlights
       NOT for: Large backgrounds, primary UI
       ============================================ */

    /* Category Colors (from LV Multicolor palette) */
    --color-politics: #5B8FD4;          /* Blue */
    --color-crypto: #9B6BB8;            /* Purple */
    --color-sports: #6AB86A;            /* Green */
    --color-entertainment: #E8A4C9;     /* Pink */
    --color-business: #D4A44A;          /* Yellow */
    --color-science: #4AB8B8;           /* Teal */

    /* Status Colors */
    --color-success: #6AB86A;           /* Green */
    --color-warning: #D4A44A;           /* Yellow */
    --color-danger: #D94444;            /* Red */
    --color-info: #5B8FD4;              /* Blue */

    /* ============================================
       SEMANTIC ALIASES
       For consistent usage across components
       ============================================ */

    /* Quality Levels (for market quality scores) */
    --color-quality-high: var(--color-success);
    --color-quality-medium: var(--color-warning);
    --color-quality-low: var(--color-danger);

    /* Trends (for market movement) */
    --color-trend-up: var(--color-success);
    --color-trend-down: var(--color-danger);
    --color-trend-neutral: var(--color-text-secondary);
}
```

### Color Usage Rules

**Rule 1: Neutral First**
- All structure is black/white/gray (nav, cards, text, borders)
- No colored backgrounds except: footer (coral), dark sections (gray)
- White and light gray are interchangeable for surfaces

**Rule 2: Coral for Action**
- Primary CTAs (Book Demo, Browse Markets)
- Active states (selected nav item, active filter)
- Decorative elements (SVG circles, plus signs)
- Footer background

**Rule 3: Categories are Subtle**
```css
/* ✅ GOOD - Subtle accent */
.category-badge {
    background: transparent;
    border: 1px solid var(--color-politics);
    color: var(--color-politics);
}

.category-bar {
    background: var(--color-bg-tertiary);
    border-left: 3px solid var(--color-politics);
}

/* ❌ BAD - Too bold */
.category-badge {
    background: var(--color-politics); /* NO - too strong */
    color: white;
}
```

**Rule 4: Never Mix Colors**
- One functional color per component
- Don't combine category colors in same element
- Exception: Dashboard showing multiple categories

---

## Typography

### Font Stack

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans:wght@400;500;700&display=swap');

:root {
    /* ============================================
       FONT FAMILIES
       IBM Plex Mono = Headlines, labels, technical
       Noto Sans = Body text, descriptions
       ============================================ */

    --font-headline: 'IBM Plex Mono', 'Courier New', monospace;
    --font-body: 'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'IBM Plex Mono', 'Courier New', monospace;

    /* Note: IBM Plex Mono is used for BOTH headlines and UI labels */
}
```

### Type Scale

```css
:root {
    /* ============================================
       FONT SIZES
       Systematic scale based on Sciemo
       ============================================ */

    --text-hero: 96px;          /* Hero headlines (desktop) */
    --text-section: 64px;       /* Section headlines */
    --text-subsection: 48px;    /* Subsection headlines */
    --text-page-title: 36px;    /* Page titles */
    --text-card-title: 20px;    /* Card titles */
    --text-body-large: 18px;    /* Large body, subheadings */
    --text-body: 16px;          /* Body text */
    --text-small: 14px;         /* Small text */
    --text-label: 13px;         /* Navigation, buttons */
    --text-tiny: 12px;          /* Section labels */
    --text-mini: 11px;          /* Form labels, captions */

    /* ============================================
       LINE HEIGHTS
       ============================================ */

    --leading-tight: 1.1;       /* Hero headlines */
    --leading-snug: 1.2;        /* Section headlines */
    --leading-normal: 1.3;      /* Large text blocks */
    --leading-relaxed: 1.6;     /* Body text */
    --leading-loose: 1.7;       /* Comfortable reading */

    /* ============================================
       LETTER SPACING
       Key to Sciemo aesthetic - generous spacing
       ============================================ */

    --tracking-tight: -0.02em;  /* Large headlines (96px+) */
    --tracking-normal: 0em;     /* Default, body text */
    --tracking-wide: 0.02em;    /* Subheadings */
    --tracking-wider: 0.04em;   /* Card titles */
    --tracking-widest: 0.08em;  /* Navigation, buttons */
    --tracking-mega: 0.12em;    /* Section labels (+ MARKETS) */

    /* ============================================
       FONT WEIGHTS
       IBM Plex Mono: 400, 500
       Noto Sans: 400, 500, 700
       ============================================ */

    --weight-regular: 400;
    --weight-medium: 500;
    --weight-bold: 700;
}
```

### Typography Classes

```css
/* ============================================
   HEADLINES - All monospace
   ============================================ */

.headline-hero {
    font-family: var(--font-headline);
    font-size: var(--text-hero);
    font-weight: var(--weight-regular);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.headline-section {
    font-family: var(--font-headline);
    font-size: var(--text-section);
    font-weight: var(--weight-regular);
    line-height: var(--leading-snug);
    letter-spacing: var(--tracking-normal);
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.headline-subsection {
    font-family: var(--font-headline);
    font-size: var(--text-subsection);
    font-weight: var(--weight-regular);
    line-height: var(--leading-normal);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.headline-page {
    font-family: var(--font-headline);
    font-size: var(--text-page-title);
    font-weight: var(--weight-regular);
    line-height: var(--leading-normal);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-text-primary);
}

/* ============================================
   BODY TEXT - Sans serif
   ============================================ */

.text-body {
    font-family: var(--font-body);
    font-size: var(--text-body);
    font-weight: var(--weight-regular);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
}

.text-body-large {
    font-family: var(--font-body);
    font-size: var(--text-body-large);
    font-weight: var(--weight-regular);
    line-height: var(--leading-loose);
    color: var(--color-text-primary);
}

.text-small {
    font-family: var(--font-body);
    font-size: var(--text-small);
    font-weight: var(--weight-regular);
    line-height: var(--leading-relaxed);
    color: var(--color-text-secondary);
}

/* ============================================
   LABELS - Monospace, uppercase, wide spacing
   ============================================ */

.label {
    font-family: var(--font-mono);
    font-size: var(--text-label);
    font-weight: var(--weight-regular);
    letter-spacing: var(--tracking-widest);
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.label-section {
    font-family: var(--font-mono);
    font-size: var(--text-tiny);
    font-weight: var(--weight-regular);
    letter-spacing: var(--tracking-mega);
    text-transform: uppercase;
    color: var(--color-text-secondary);
}

.label-form {
    font-family: var(--font-mono);
    font-size: var(--text-mini);
    font-weight: var(--weight-regular);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    color: var(--color-text-secondary);
}

/* ============================================
   CARD TITLES - Monospace (not sans!)
   ============================================ */

.card-title {
    font-family: var(--font-mono);
    font-size: var(--text-card-title);
    font-weight: var(--weight-regular);
    letter-spacing: var(--tracking-wider);
    text-transform: uppercase;
    color: var(--color-text-primary);
}
```

### Typography Usage Rules

**Rule 1: Headlines Get Periods**
```html
<!-- ✅ GOOD -->
<h1>PREDICT. ANALYZE. WIN.</h1>

<!-- ❌ BAD -->
<h1>Predict, Analyze, Win</h1>
```

**Rule 2: All Headlines Uppercase**
- No sentence case for headlines
- Exception: Body text, descriptions

**Rule 3: Monospace = Technical**
- Headlines: monospace (precision, data)
- Body: sans-serif (readability)
- Labels/UI: monospace (technical interface)

**Rule 4: Wide Letter-Spacing**
- Navigation: 0.08em minimum
- Section labels: 0.12em (very wide)
- Creates breathing room, sophistication

---

## Spacing System

```css
:root {
    /* ============================================
       SPACING SCALE
       Based on 4px base unit
       ============================================ */

    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 12px;
    --space-lg: 16px;
    --space-xl: 24px;
    --space-2xl: 32px;
    --space-3xl: 48px;
    --space-4xl: 80px;
    --space-5xl: 120px;

    /* ============================================
       COMPONENT-SPECIFIC SPACING
       Named for clarity
       ============================================ */

    /* Padding */
    --padding-card: var(--space-2xl);           /* 32px */
    --padding-section: var(--space-3xl);        /* 48px */
    --padding-nav: var(--space-3xl);            /* 48px horizontal */

    /* Margins */
    --margin-section: var(--space-4xl);         /* 80px between sections */
    --margin-hero: var(--space-5xl);            /* 120px hero padding */

    /* Gaps */
    --gap-grid: var(--space-4xl);               /* 80px grid gap */
    --gap-nav: 40px;                            /* 40px nav link gap */
    --gap-card-grid: var(--space-xl);           /* 24px card grid */
}
```

### Spacing Usage Rules

**Rule 1: Always Use Variables**
```css
/* ✅ GOOD */
padding: var(--space-2xl);
gap: var(--gap-grid);

/* ❌ BAD */
padding: 32px;
gap: 80px;
```

**Rule 2: Spacing Scale**
- Tight elements: xs (4px), sm (8px)
- Component internals: md (12px), lg (16px), xl (24px)
- Component spacing: 2xl (32px), 3xl (48px)
- Section spacing: 4xl (80px), 5xl (120px)

**Rule 3: Consistent Vertical Rhythm**
- Sections always: 80px margin
- Hero sections: 120px padding
- Cards: 32px padding
- Never arbitrary values

---

## Layout System

```css
:root {
    /* ============================================
       CONTAINER WIDTHS
       ============================================ */

    --container-max: 1600px;        /* Absolute max-width */
    --container-standard: 1400px;   /* Standard page width */
    --content-max: 1200px;          /* Content blocks */
    --text-max: 900px;              /* Headline max-width */
    --narrow-max: 600px;            /* Forms, narrow content */

    /* ============================================
       BREAKPOINTS
       ============================================ */

    --breakpoint-mobile: 768px;
    --breakpoint-tablet: 1024px;
    --breakpoint-desktop: 1440px;

    /* ============================================
       NAVIGATION
       ============================================ */

    --nav-height: 80px;             /* Sticky nav height */

    /* ============================================
       GRID
       ============================================ */

    --grid-cols-desktop: 12;
    --grid-cols-tablet: 8;
    --grid-cols-mobile: 4;
}
```

### Layout Classes

```css
/* ============================================
   CONTAINERS
   ============================================ */

.container {
    max-width: var(--container-standard);
    margin: 0 auto;
    padding: 0 var(--padding-section);
}

.container--full {
    max-width: var(--container-max);
}

.container--narrow {
    max-width: var(--content-max);
}

.container--text {
    max-width: var(--text-max);
}

/* ============================================
   SECTIONS
   ============================================ */

.section {
    padding: var(--margin-section) 0;
}

.section--hero {
    padding: var(--margin-hero) 0;
}

.section--large {
    padding: var(--space-5xl) 0;
}

/* ============================================
   GRID SYSTEM
   ============================================ */

.grid {
    display: grid;
    gap: var(--gap-grid);
}

.grid--cards {
    gap: var(--gap-card-grid);
}

.grid--2col {
    grid-template-columns: repeat(2, 1fr);
}

.grid--3col {
    grid-template-columns: repeat(3, 1fr);
}

.grid--4col {
    grid-template-columns: repeat(4, 1fr);
}

/* Responsive breakpoints */
@media (max-width: 1024px) {
    .grid--4col {
        grid-template-columns: repeat(2, 1fr);
    }
    .grid--3col {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .grid--2col,
    .grid--3col,
    .grid--4col {
        grid-template-columns: 1fr;
    }

    .container {
        padding: 0 var(--space-xl);
    }
}
```

---

## Borders & Dividers

```css
:root {
    /* ============================================
       BORDER SYSTEM
       All borders are solid black
       ============================================ */

    --border-width-thin: 1px;
    --border-width-thick: 2px;
    --border-width-bar: 4px;

    --border-style: solid;
    --border-color: var(--color-border);

    /* Shorthand utilities */
    --border-thin: var(--border-width-thin) var(--border-style) var(--border-color);
    --border-thick: var(--border-width-thick) var(--border-style) var(--border-color);
}
```

### Border Usage Rules

**Rule 1: Always Black**
- No colored borders except category accents
- Always solid (no dashed, dotted)
- Always full opacity

**Rule 2: Border Widths**
- 1px: Cards, containers, inputs, badges
- 2px: CTA buttons, emphasis
- 4px: Dividers, card header bars

**Rule 3: Dividers**
```css
.divider {
    width: 100%;
    height: var(--border-width-bar);
    background: var(--color-border);
    margin: var(--margin-section) 0;
}

/* Use as visual element, not HR tag */
```

---

## Transitions & Animations

```css
:root {
    /* ============================================
       TRANSITIONS
       Minimal, purposeful motion
       ============================================ */

    --transition-fast: 0.15s ease;
    --transition-base: 0.2s ease;
    --transition-slow: 0.3s ease;

    /* Easing functions */
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

### Animation Rules

**Rule 1: Minimal Motion**
- Only opacity, background, color changes
- NO: transforms, scales, rotations (except subtle hover lifts)
- NO: Complex keyframe animations

**Rule 2: Hover States**
```css
/* Sciemo signature: opacity fade */
.link {
    transition: opacity var(--transition-base);
}

.link:hover {
    opacity: 0.5;
}

/* Button invert */
.btn {
    transition: all var(--transition-base);
}

.btn:hover {
    /* Swap background and text color */
}
```

**Rule 3: No Shadows**
- Sciemo doesn't use box-shadow
- Exception: Very subtle lift on market cards
```css
.market-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(27, 28, 28, 0.08);
}
```

---

## Component Library

### 1. Navigation

**File**: `components/navigation.css`

```html
<nav class="nav">
    <a href="/" class="nav__logo">am predicts</a>
    <div class="nav__menu">
        <a href="#markets" class="nav__link">Markets</a>
        <a href="/ai-chat" class="nav__link nav__link--active">AI Chat</a>
        <a href="/research" class="nav__link">Research</a>
        <a href="/about" class="nav__link">About</a>
        <a href="#demo" class="nav__cta">Book Demo</a>
    </div>
</nav>
```

```css
.nav {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--color-bg-primary);
    border: var(--border-thin);
    height: var(--nav-height);
    padding: 0 var(--padding-nav);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__logo {
    font-family: var(--font-body);
    font-size: 28px;
    font-weight: var(--weight-regular);
    color: var(--color-text-primary);
    text-decoration: none;
    text-transform: lowercase;
    letter-spacing: -0.01em;
}

.nav__menu {
    display: flex;
    gap: var(--gap-nav);
    align-items: center;
}

.nav__link {
    font-family: var(--font-mono);
    font-size: var(--text-label);
    font-weight: var(--weight-regular);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    color: var(--color-text-primary);
    text-decoration: none;
    transition: opacity var(--transition-base);
}

.nav__link:hover {
    opacity: 0.5;
}

.nav__link--active {
    background: var(--color-text-primary);
    color: var(--color-text-inverted);
    padding: var(--space-sm) var(--space-lg);
}

.nav__cta {
    background: var(--color-accent-primary);
    color: var(--color-text-primary);
    border: var(--border-thick);
    padding: 14px 28px;
    font-family: var(--font-mono);
    font-size: var(--text-label);
    font-weight: var(--weight-regular);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    text-decoration: none;
    transition: all var(--transition-base);
}

.nav__cta:hover {
    background: var(--color-text-primary);
    color: var(--color-accent-primary);
}
```

---

### 2. Section Label

**File**: `components/section-label.css`

```html
<div class="section-label">Markets</div>
```

```css
.section-label {
    font-family: var(--font-mono);
    font-size: var(--text-tiny);
    font-weight: var(--weight-regular);
    text-transform: uppercase;
    letter-spacing: var(--tracking-mega);
    color: var(--color-text-secondary);
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-xl);
}

.section-label::before {
    content: '+';
    color: var(--color-accent-primary);
    font-size: 16px;
    font-weight: var(--weight-regular);
}
```

**Usage Pattern**:
```html
<section class="section">
    <div class="container">
        <div class="section-label">Markets</div>
        <h2 class="headline-section">Browse Active Markets</h2>
        <!-- Content -->
    </div>
</section>
```

---

### 3. Buttons

**File**: `components/buttons.css`

```html
<button class="btn btn--primary">Browse Markets</button>
<button class="btn btn--secondary">Learn More</button>
<button class="btn btn--ghost">Cancel</button>
```

```css
.btn {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: var(--text-label);
    font-weight: var(--weight-regular);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    padding: 14px 28px;
    border: var(--border-thick);
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all var(--transition-base);
}

.btn--primary {
    background: var(--color-text-primary);
    color: var(--color-text-inverted);
    border-color: var(--color-text-primary);
}

.btn--primary:hover {
    background: var(--color-accent-primary);
    color: var(--color-text-primary);
    border-color: var(--color-text-primary);
}

.btn--secondary {
    background: transparent;
    color: var(--color-text-primary);
    border-color: var(--color-text-primary);
}

.btn--secondary:hover {
    background: var(--color-text-primary);
    color: var(--color-text-inverted);
}

.btn--ghost {
    background: transparent;
    color: var(--color-text-secondary);
    border-color: var(--color-text-secondary);
}

.btn--ghost:hover {
    color: var(--color-text-primary);
    border-color: var(--color-text-primary);
}
```

---

### 4. Market Card

**File**: `components/market-card.css`

```html
<article class="market-card" data-category="politics">
    <div class="market-card__header">
        <span>ACTIVE MARKET</span>
        <span>QUALITY: 85/100</span>
    </div>
    <div class="market-card__category-bar">
        Politics • ↑ High Activity
    </div>
    <div class="market-card__body">
        <h3 class="market-card__title">
            Will the 2024 election be decided before December?
        </h3>
        <div class="market-card__probability">68.5%</div>
        <p class="market-card__insight">
            High liquidity and narrow spread suggest strong market confidence.
        </p>
        <div class="market-card__stats">
            <div class="stat">
                <span class="stat__label">Volume</span>
                <span class="stat__value">$1.2M</span>
            </div>
            <div class="stat">
                <span class="stat__label">Confidence</span>
                <span class="stat__value">High</span>
            </div>
            <div class="category-badge" data-category="politics">
                <span class="category-badge__dot"></span>
                <span>Politics</span>
            </div>
        </div>
    </div>
    <button class="market-card__cta">Place Prediction</button>
</article>
```

```css
.market-card {
    background: var(--color-bg-primary);
    border: var(--border-thin);
    position: relative;
    cursor: pointer;
    transition: transform var(--transition-base),
                box-shadow var(--transition-base);
}

.market-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(27, 28, 28, 0.08);
}

/* Header with quality score */
.market-card__header {
    background: var(--color-text-primary);
    color: var(--color-text-inverted);
    padding: 12px 20px;
    font-family: var(--font-mono);
    font-size: var(--text-tiny);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Category bar with subtle color */
.market-card__category-bar {
    padding: var(--space-sm) var(--space-lg);
    background: var(--color-bg-tertiary);
    border-left: 3px solid transparent;
    font-family: var(--font-mono);
    font-size: var(--text-tiny);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    color: var(--color-text-secondary);
}

/* Category colors applied via data attribute */
.market-card[data-category="politics"] .market-card__category-bar {
    border-left-color: var(--color-politics);
}

.market-card[data-category="crypto"] .market-card__category-bar {
    border-left-color: var(--color-crypto);
}

.market-card[data-category="sports"] .market-card__category-bar {
    border-left-color: var(--color-sports);
}

.market-card[data-category="entertainment"] .market-card__category-bar {
    border-left-color: var(--color-entertainment);
}

.market-card[data-category="business"] .market-card__category-bar {
    border-left-color: var(--color-business);
}

.market-card[data-category="science"] .market-card__category-bar {
    border-left-color: var(--color-science);
}

/* Card body */
.market-card__body {
    padding: var(--space-xl);
}

.market-card__title {
    font-family: var(--font-body);
    font-size: var(--text-body-large);
    font-weight: var(--weight-medium);
    line-height: var(--leading-normal);
    color: var(--color-text-primary);
    margin-bottom: var(--space-lg);
}

.market-card__probability {
    font-family: var(--font-headline);
    font-size: var(--text-subsection);
    font-weight: var(--weight-medium);
    color: var(--color-accent-primary);
    line-height: var(--leading-tight);
    margin: var(--space-lg) 0;
}

.market-card__insight {
    font-family: var(--font-body);
    font-size: var(--text-small);
    line-height: var(--leading-relaxed);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-lg);
}

.market-card__stats {
    display: flex;
    gap: var(--space-lg);
    padding-top: var(--space-lg);
    border-top: 1px solid var(--color-bg-tertiary);
    align-items: center;
}

.stat {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.stat__label {
    font-family: var(--font-mono);
    font-size: var(--text-mini);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    color: var(--color-text-secondary);
}

.stat__value {
    font-family: var(--font-mono);
    font-size: var(--text-small);
    font-weight: var(--weight-medium);
    color: var(--color-text-primary);
}

/* CTA button */
.market-card__cta {
    width: 100%;
    background: var(--color-text-primary);
    color: var(--color-text-inverted);
    border: none;
    border-top: var(--border-thin);
    padding: var(--space-lg);
    font-family: var(--font-mono);
    font-size: var(--text-label);
    font-weight: var(--weight-regular);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    cursor: pointer;
    transition: background var(--transition-base);
}

.market-card__cta:hover {
    background: var(--color-accent-primary);
    color: var(--color-text-primary);
}
```

---

### 5. Category Badge

**File**: `components/badge.css`

```html
<div class="category-badge" data-category="politics">
    <span class="category-badge__dot"></span>
    <span>Politics</span>
</div>
```

```css
.category-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    border: 1px solid transparent;
    background: transparent;
    font-family: var(--font-mono);
    font-size: var(--text-mini);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
}

.category-badge__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
}

/* Category colors */
.category-badge[data-category="politics"] {
    color: var(--color-politics);
    border-color: var(--color-politics);
}

.category-badge[data-category="crypto"] {
    color: var(--color-crypto);
    border-color: var(--color-crypto);
}

.category-badge[data-category="sports"] {
    color: var(--color-sports);
    border-color: var(--color-sports);
}

.category-badge[data-category="entertainment"] {
    color: var(--color-entertainment);
    border-color: var(--color-entertainment);
}

.category-badge[data-category="business"] {
    color: var(--color-business);
    border-color: var(--color-business);
}

.category-badge[data-category="science"] {
    color: var(--color-science);
    border-color: var(--color-science);
}
```

---

### 6. Metric Pill

**File**: `components/pill.css`

```html
<div class="metric-pill">High Quality</div>
<div class="metric-pill metric-pill--success">5-15% Revenue Lift</div>
```

```css
.metric-pill {
    display: inline-flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-md) var(--space-xl);
    border: var(--border-thin);
    background: transparent;
    font-family: var(--font-mono);
    font-size: var(--text-label);
    font-weight: var(--weight-regular);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    color: var(--color-text-primary);
}

.metric-pill::before {
    content: '✓';
    color: var(--color-text-primary);
    font-size: 16px;
}

/* Color variants */
.metric-pill--success {
    border-color: var(--color-success);
    color: var(--color-success);
}

.metric-pill--success::before {
    color: var(--color-success);
}

.metric-pill--warning {
    border-color: var(--color-warning);
    color: var(--color-warning);
}

.metric-pill--warning::before {
    color: var(--color-warning);
}
```

---

### 7. Filter Bar

**File**: `components/filter-bar.css`

```html
<div class="filter-bar">
    <div class="filter-bar__chips">
        <button class="filter-chip filter-chip--active">All Markets</button>
        <button class="filter-chip">High Quality</button>
        <button class="filter-chip">High Volume</button>
        <button class="filter-chip">High Confidence</button>
    </div>
    <div class="filter-bar__sort">
        <label class="label-form">Sort by</label>
        <select class="filter-select">
            <option>Quality Score</option>
            <option>24h Volume</option>
            <option>Probability</option>
            <option>Newest First</option>
        </select>
    </div>
</div>
```

```css
.filter-bar {
    position: sticky;
    top: var(--nav-height);
    z-index: 100;
    background: var(--color-bg-tertiary);
    border-bottom: var(--border-thin);
    padding: var(--space-md) var(--space-xl);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-lg);
}

.filter-bar__chips {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
}

.filter-chip {
    padding: var(--space-sm) var(--space-lg);
    border: var(--border-thin);
    background: transparent;
    font-family: var(--font-mono);
    font-size: var(--text-tiny);
    font-weight: var(--weight-regular);
    text-transform: uppercase;
    letter-spacing: var(--tracking-widest);
    color: var(--color-text-primary);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.filter-chip:hover {
    background: var(--color-bg-primary);
}

.filter-chip--active {
    background: var(--color-text-primary);
    color: var(--color-text-inverted);
}

.filter-bar__sort {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.filter-select {
    padding: var(--space-sm) var(--space-lg);
    border: var(--border-thin);
    background: var(--color-bg-primary);
    font-family: var(--font-mono);
    font-size: var(--text-tiny);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    color: var(--color-text-primary);
    cursor: pointer;
}
```

---

### 8. Stats Dashboard

**File**: `components/stats.css`

```html
<div class="stats-dashboard">
    <div class="stat-card">
        <div class="stat-card__icon" style="color: var(--color-info)">
            📊
        </div>
        <div class="stat-card__content">
            <div class="stat-card__label">Live Markets</div>
            <div class="stat-card__value">12</div>
        </div>
    </div>
    <!-- Repeat for other stats -->
</div>
```

```css
.stats-dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-lg);
    padding: var(--space-xl);
    background: var(--color-bg-tertiary);
    border: var(--border-thin);
}

.stat-card {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    padding: var(--space-lg);
    background: var(--color-bg-primary);
    border: var(--border-thin);
}

.stat-card__icon {
    font-size: 32px;
}

.stat-card__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.stat-card__label {
    font-family: var(--font-mono);
    font-size: var(--text-mini);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    color: var(--color-text-secondary);
}

.stat-card__value {
    font-family: var(--font-headline);
    font-size: var(--text-page-title);
    font-weight: var(--weight-medium);
    color: var(--color-text-primary);
}

@media (max-width: 768px) {
    .stats-dashboard {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

### 9. Divider

**File**: `components/divider.css`

```html
<div class="divider"></div>
```

```css
.divider {
    width: 100%;
    height: var(--border-width-bar);
    background: var(--color-border);
    margin: var(--margin-section) 0;
}

.divider--narrow {
    margin: var(--space-3xl) 0;
}

.divider--wide {
    margin: var(--space-5xl) 0;
}
```

---

### 10. Footer

**File**: `components/footer.css`

```html
<footer class="footer">
    <div class="container">
        <div class="footer__content">
            <div class="footer__brand">
                <div class="footer__logo">am predicts</div>
                <p class="footer__copyright">
                    © 2026 Am Predicts.<br>
                    All rights reserved.
                </p>
            </div>
            <div class="footer__menu">
                <div class="footer__menu-col">
                    <div class="footer__menu-title">Menu</div>
                    <a href="#" class="footer__menu-link">Markets</a>
                    <a href="#" class="footer__menu-link">AI Chat</a>
                    <a href="#" class="footer__menu-link">Research</a>
                </div>
                <!-- More columns -->
            </div>
        </div>
        <div class="footer__wordmark">am predicts</div>
    </div>
</footer>
```

```css
.footer {
    background: var(--color-accent-primary);
    padding: var(--space-4xl) 0 var(--space-5xl);
    position: relative;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--border-width-bar);
    background: var(--color-border);
}

.footer__content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--space-4xl);
    margin-bottom: var(--space-4xl);
}

.footer__logo {
    font-family: var(--font-body);
    font-size: 20px;
    font-weight: var(--weight-regular);
    color: var(--color-text-primary);
    text-transform: lowercase;
    margin-bottom: var(--space-lg);
}

.footer__copyright {
    font-family: var(--font-body);
    font-size: var(--text-small);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
}

.footer__menu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-3xl);
}

.footer__menu-title {
    font-family: var(--font-mono);
    font-size: var(--text-mini);
    text-transform: uppercase;
    letter-spacing: var(--tracking-mega);
    color: var(--color-text-primary);
    margin-bottom: var(--space-lg);
}

.footer__menu-link {
    display: block;
    font-family: var(--font-body);
    font-size: var(--text-body);
    color: var(--color-text-primary);
    text-decoration: underline;
    margin-bottom: var(--space-sm);
}

.footer__wordmark {
    font-family: var(--font-body);
    font-size: 200px;
    font-weight: var(--weight-bold);
    color: var(--color-text-primary);
    text-transform: lowercase;
    line-height: 1;
    text-align: center;
    opacity: 0.3;
}

@media (max-width: 1024px) {
    .footer__content {
        grid-template-columns: 1fr;
    }

    .footer__menu {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer__wordmark {
        font-size: 120px;
    }
}
```

---

## File Structure

### Proposed Architecture

```
vercel-frontend/
└── public/
    ├── css/
    │   ├── main.css                    (Imports everything)
    │   ├── 01-design-tokens.css        (All CSS variables)
    │   ├── 02-reset.css                (Normalize/reset)
    │   ├── 03-base.css                 (HTML element styles)
    │   ├── 04-typography.css           (Typography classes)
    │   ├── 05-layout.css               (Container, grid, section)
    │   ├── components/
    │   │   ├── navigation.css
    │   │   ├── section-label.css
    │   │   ├── buttons.css
    │   │   ├── market-card.css
    │   │   ├── badge.css
    │   │   ├── pill.css
    │   │   ├── filter-bar.css
    │   │   ├── stats.css
    │   │   ├── divider.css
    │   │   ├── footer.css
    │   │   └── chat-widget.css         (Keep existing)
    │   └── 06-utilities.css            (Utility classes)
    │
    ├── js/
    │   ├── main.js                     (Global functionality)
    │   ├── market-card.js              (Market card logic)
    │   ├── filters.js                  (Filter/sort logic)
    │   ├── stats.js                    (Stats dashboard)
    │   ├── api-client.js               (Centralized API)
    │   └── chat-widget.js              (Keep existing)
    │
    └── [HTML files]
        ├── index.html
        ├── ai-insights.html
        ├── research.html
        └── about.html
```

### main.css (Import File)

```css
/* Main CSS - Import all modules */

/* 1. Design Tokens (variables) */
@import url('./01-design-tokens.css');

/* 2. Reset/Normalize */
@import url('./02-reset.css');

/* 3. Base HTML elements */
@import url('./03-base.css');

/* 4. Typography */
@import url('./04-typography.css');

/* 5. Layout */
@import url('./05-layout.css');

/* 6. Components */
@import url('./components/navigation.css');
@import url('./components/section-label.css');
@import url('./components/buttons.css');
@import url('./components/market-card.css');
@import url('./components/badge.css');
@import url('./components/pill.css');
@import url('./components/filter-bar.css');
@import url('./components/stats.css');
@import url('./components/divider.css');
@import url('./components/footer.css');
@import url('./components/chat-widget.css');

/* 7. Utilities */
@import url('./06-utilities.css');
```

### HTML Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Am Predicts MVP - AI-Enhanced Prediction Markets</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans:wght@400;500;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <!-- Nav content -->
    </nav>

    <!-- Hero -->
    <section class="section section--hero">
        <div class="container">
            <!-- Hero content -->
        </div>
    </section>

    <!-- Stats Dashboard -->
    <section class="section">
        <div class="container">
            <div class="stats-dashboard">
                <!-- Stats -->
            </div>
        </div>
    </section>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- Markets Section -->
    <section class="section">
        <div class="container">
            <div class="section-label">Markets</div>
            <h2 class="headline-section">Active Markets</h2>

            <!-- Filter Bar -->
            <div class="filter-bar">
                <!-- Filters -->
            </div>

            <!-- Market Grid -->
            <div class="grid grid--3col grid--cards">
                <!-- Market cards -->
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <!-- Footer content -->
    </footer>

    <!-- Scripts -->
    <script src="js/main.js"></script>
</body>
</html>
```

---

## Implementation Roadmap

### Phase 1: Foundation (Days 1-3)

**Day 1: Design Tokens & File Structure**
- [ ] Create CSS file structure
- [ ] Create `01-design-tokens.css` with all variables
- [ ] Create `02-reset.css`
- [ ] Create `03-base.css`
- [ ] Create `main.css` with imports
- [ ] Test import structure works

**Day 2: Typography & Layout**
- [ ] Update font imports (IBM Plex Mono)
- [ ] Create `04-typography.css` with all classes
- [ ] Create `05-layout.css` (container, grid, section)
- [ ] Update all HTML files to use new fonts
- [ ] Test typography on all pages

**Day 3: Color System**
- [ ] Audit all color usage in current CSS
- [ ] Replace hardcoded colors with variables
- [ ] Implement refined multicolor rules
- [ ] Update category color mappings
- [ ] Test color consistency

### Phase 2: Core Components (Days 4-6)

**Day 4: Navigation & Labels**
- [ ] Create `components/navigation.css`
- [ ] Update nav height to 80px
- [ ] Fix letter-spacing (0.08em)
- [ ] Make CTA border 2px
- [ ] Create `components/section-label.css`
- [ ] Add section labels to all pages

**Day 5: Cards & Badges**
- [ ] Create `components/market-card.css`
- [ ] Update card backgrounds to #E8E8E8
- [ ] Implement category bar styling
- [ ] Create `components/badge.css`
- [ ] Create `components/pill.css`
- [ ] Test card variations

**Day 6: Buttons & Filter Bar**
- [ ] Create `components/buttons.css`
- [ ] Standardize button hierarchy
- [ ] Create `components/filter-bar.css`
- [ ] Implement filter chip styling
- [ ] Test interactive states

### Phase 3: Advanced Components (Days 7-8)

**Day 7: Stats & Dividers**
- [ ] Create `components/stats.css`
- [ ] Style stats dashboard
- [ ] Create `components/divider.css`
- [ ] Add dividers between sections
- [ ] Test responsive layouts

**Day 8: Footer**
- [ ] Create `components/footer.css`
- [ ] Implement coral background
- [ ] Add 4-column menu layout
- [ ] Add giant wordmark
- [ ] Test footer responsiveness

### Phase 4: Polish & Testing (Days 9-10)

**Day 9: Utilities & Cleanup**
- [ ] Create `06-utilities.css`
- [ ] Remove all inline styles from HTML
- [ ] Extract JS to separate files
- [ ] Clean up HTML structure
- [ ] Test all pages

**Day 10: QA & Refinement**
- [ ] Cross-browser testing
- [ ] Mobile responsiveness check
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Final polish

---

## Quality Checklist

### Design Fidelity

- [ ] IBM Plex Mono used for all headlines
- [ ] All headlines are uppercase
- [ ] All headlines include periods where appropriate
- [ ] Section labels (+ PREFIX) on every major section
- [ ] Letter-spacing follows specification (0.08em nav, 0.12em labels)
- [ ] Nav height is 80px
- [ ] Card backgrounds are #E8E8E8
- [ ] Card header bars are 4px
- [ ] CTA buttons have 2px borders
- [ ] All borders are black (except category accents)
- [ ] Dividers are 4px black bars
- [ ] Footer is coral with black top bar
- [ ] Category colors used only for accents (borders, dots)
- [ ] Hover states use opacity: 0.5 for links
- [ ] No gradients or shadows (except subtle card lift)

### Code Quality

- [ ] No inline styles in HTML
- [ ] All spacing uses variables
- [ ] All colors use variables
- [ ] All typography uses classes
- [ ] Components are modular and reusable
- [ ] CSS follows naming convention
- [ ] JavaScript is separated from HTML
- [ ] Files are logically organized

### Responsiveness

- [ ] Mobile breakpoint (< 768px) tested
- [ ] Tablet breakpoint (768-1024px) tested
- [ ] Desktop (> 1024px) tested
- [ ] Touch targets are 44px minimum
- [ ] Text is readable at all sizes
- [ ] Navigation works on mobile
- [ ] Grids collapse appropriately

### Performance

- [ ] CSS files concatenated and minified
- [ ] Unused CSS removed
- [ ] Fonts loaded efficiently
- [ ] Images optimized
- [ ] No layout shift on load

---

## Success Metrics

**Sciemo Fidelity**: 95%
**Component Reusability**: 90%
**CSS Maintainability**: 95%
**Visual Consistency**: 100%
**Code Quality**: 95%

---

## Approval Checklist

Before starting implementation:

- [ ] Color philosophy approved (refined multicolor)
- [ ] Typography system approved (IBM Plex Mono)
- [ ] Component library approved
- [ ] File structure approved
- [ ] Timeline approved (10 days)
- [ ] Design tokens finalized
- [ ] All questions resolved

---

**Ready for Implementation**: ✅

Once approved, we will execute this plan systematically, day by day, until completion.
