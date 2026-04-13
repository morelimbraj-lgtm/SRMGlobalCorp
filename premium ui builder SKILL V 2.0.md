
-----

## name: premium_ui_builder
version: 3.2
description: >
Enforces strict design, layout, typography, motion, and component discipline to produce Framer-quality websites using Next.js, Tailwind CSS, and Framer Motion. Automatically applies when the user requests premium UI, modern design, landing pages, SaaS interfaces, dashboards, portfolios, or visual polish — even if they just say “make it look clean”, “Framer-style”, or “professional UI”. Also trigger for redesigns, component libraries, or when the user shares a rough layout and wants it elevated. Not applicable for backend-only tasks, CLI tools, or data pipelines.

# Premium UI Builder

Every output must feel intentional, restrained, and polished — not generated. If it looks like a template or a tutorial, refactor it.

-----

## Stack

|Layer    |Tool                    |
|---------|------------------------|
|Framework|Next.js (App Router)    |
|UI       |React                   |
|Styling  |Tailwind CSS            |
|Animation|Framer Motion           |
|Images   |next/image              |
|Icons    |lucide-react            |
|Fonts    |next/font (Google Fonts)|

-----

## Design Tokens (STRICT — never deviate)

### Spacing Scale + Tailwind Mapping

```
px value → Tailwind class
4   → gap-1 / p-1 / m-1
8   → gap-2 / p-2 / m-2
12  → gap-3 / p-3 / m-3
16  → gap-4 / p-4 / m-4
24  → gap-6 / p-6 / m-6
32  → gap-8 / p-8 / m-8
48  → gap-12 / p-12 / m-12
64  → gap-16 / p-16 / m-16
96  → gap-24 / p-24 / m-24
```

No arbitrary px values. Ever.

### Typography

```
Font sizes (px): 14, 16, 18, 20, 24, 32, 40, 48
Line heights:    1.4 (body), 1.2 (headings), 1.6 (captions)
Font weights:    400, 500, 600, 700
Letter spacing:  -0.02em (headings), normal (body)
Max families:    2 (display + body, or 1 total)
```

### Text Width Constraints

```
body text:    max-width 700px  (max-w-[700px])
heading:      max-width 800px  (max-w-[800px])
subheading:   max-width 600px  (max-w-[600px])
```

Never allow full-width paragraphs.

### Color System

Define in `tailwind.config.ts` before writing any component:

```ts
colors: {
  primary:    '#000000',  // headings, primary text
  secondary:  '#666666',  // body text, muted
  background: '#FFFFFF',  // page background
  accent:     '#4F46E5',  // CTA, links, highlights — 1 per section max
  neutral: {
    100: '...',           // card background
    200: '...',           // borders
  }
}
```

Rules:

- Max 3 colors per section (background + text + one highlight)
- Max 1 accent color per section
- Body text contrast ≥ 4.5:1 (WCAG AA)
- Large text / decorative contrast ≥ 3:1
- No gradients except hero section
- Avoid heavy shadows — max `shadow-md`; prefer borders over shadows
- Max 2 visual effects per section
- No dark mode unless explicitly requested

### Container

```tsx
<div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
```

-----

## Layout System

```
rules:
  - flex or grid only — no absolute positioning for layout
  - no arbitrary widths or fixed widths
  - all content centered in container
  - section padding ≥ 48px (py-16 md:py-24)
```

### Primitives

```tsx
// Container
<div className="mx-auto w-full max-w-[1200px] px-6 md:px-10" />

// Stack (vertical)
<div className="flex flex-col gap-6" />

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
```

### Density Rules

```
Desktop:  max 4 items per row
Tablet:   max 2 items per row
Mobile:   1 column always
Min gap:  16px (gap-4)
```

-----

## Section Structure

### Default Order (hero, feature, CTA sections)

```
1. eyebrow       — small label/tag above heading
2. heading       — max-width: 800px
3. subheading    — max-width: 600px
4. content       — follows spacing scale
5. primary_cta   — always last
```

Not all sections follow this order (testimonials, footers, grids). Apply where it fits.

### Hero Rules (required)

```
must include:   heading, subheading, primary CTA
optional:       secondary CTA, image or illustration
alignment:      vertically centered on desktop
text max-width: 600px
element gap:    16–24px (gap-4 to gap-6)
gradients:      allowed in hero only
```

### CTA Rules

```
- max 1 primary CTA per section
- max 1 CTA pair per section (primary + secondary)
- secondary CTA must be visually weaker: ghost or text link only
- never place two equal-weight buttons side by side
```

### Consistency Rules

```
- reuse spacing patterns across all sections
- reuse component variants globally — no one-off styles
- maintain identical button styles throughout
- do not introduce new design patterns mid-page
  (e.g. switching from card borders to shadows halfway through)
```

-----

## Component System

```
rules:
  - every section is a separate component
  - no repeated JSX blocks
  - no inline styles
  - all variants centralized
```

### Component Contracts (required — no freestyle props)

```tsx
// Button
type ButtonProps = {
  variant:    'primary' | 'secondary' | 'ghost'
  size:       'sm' | 'md' | 'lg'
  children:   React.ReactNode
  onClick?:   () => void
  disabled?:  boolean
  href?:      string  // renders <a> if provided
}

// Card
type CardProps = {
  variant:    'default' | 'bordered' | 'elevated'
  padding?:   'sm' | 'md' | 'lg'  // default: md
  children:   React.ReactNode
  className?: string
}

// Section
type SectionProps = {
  id?:         string
  background?: 'white' | 'subtle' | 'dark'
  children:    React.ReactNode
  className?:  string
}
// Always: py-16 md:py-24

// Navbar
type NavbarProps = {
  logo:    React.ReactNode
  links:   { label: string; href: string }[]
  cta?:    { label: string; href: string }
  sticky?: boolean
}
```

### Required States

Every interactive component must handle all four:

- **Loading** — `animate-pulse` skeleton or spinner
- **Empty** — message + optional CTA (“No items yet. Add one →”)
- **Error** — user-readable message, not raw error string
- **Success** — toast or inline confirmation

-----

## Motion System

```
library:        Framer Motion only
duration_range: 200–400ms
easing:         easeOut or [0.25, 0.1, 0.25, 1] — never linear

allowed:        fade, slide_up, scale_subtle
disallowed:     bounce, exaggerated transforms, infinite loops, random delays
```

### Animation Primitives

```tsx
// Fade up — section reveal (most common)
const fadeUp = {
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
}

// Fade in — images, cards
const fadeIn = {
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { duration: 0.3, ease: 'easeOut' }
}

// Stagger — lists, feature grids
const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
}
```

Rules:

- `viewport={{ once: true }}` on all scroll-triggered animations
- Never nest more than 2 levels of motion components
- No infinite loops unless marquee/ticker explicitly requested

### When to Animate

```
✅ page entry, section scroll reveal, hover feedback, modal/drawer transitions
❌ text while typing, layout shifts, background colors, decorative shapes on loop
```

-----

## Responsiveness

```
mobile-first mandatory
breakpoints: sm(640) md(768) lg(1024) xl(1280)

rules:
  - no fixed widths
  - layouts must scale, not break
  - tap targets ≥ 44×44px
  - text readable at 320px
  - navbar collapses to hamburger on mobile
  - no horizontal scroll at any breakpoint
```

-----

## Accessibility

```
- all buttons must have accessible labels (aria-label if icon-only)
- all images must include descriptive alt text
- all interactive elements must be keyboard accessible
- visible focus states required on all focusable elements
- color contrast ≥ 4.5:1 on body text (WCAG AA)
```

-----

## Performance

```
- next/image for all images — no raw <img> tags
- next/font only — no <link> Google Fonts tags
- lazy load below-fold sections
- no animation libraries besides Framer Motion
- avoid unnecessary re-renders
- minimize JS; prefer server components
- minimize DOM depth; no unnecessary wrappers
- no unused Tailwind classes
```

-----

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, global providers
│   ├── page.tsx            # composition only
│   └── [slug]/page.tsx
├── components/
│   ├── ui/                 # Button, Card, Badge, Input
│   ├── layout/             # Navbar, Footer, Section, Container
│   └── sections/           # Hero, Features, Testimonials, CTA
├── lib/
│   └── utils.ts            # cn(), formatters
├── styles/
│   └── globals.css
└── types/
    └── index.ts
```

-----

## Anti-Patterns (STRICTLY FORBIDDEN)

|❌ Never                           |✅ Instead                       |
|----------------------------------|--------------------------------|
|`style={{ marginTop: '37px' }}`   |Spacing scale: `mt-8`           |
|6+ font sizes on one page         |Stick to type scale             |
|Animate every element             |Animate sections, not atoms     |
|Full-width `<p>` blocks           |`max-w-[700px]` on prose        |
|Inline styles on repeated UI      |Extract to component            |
|`position: absolute` for layout   |Use flex/grid                   |
|Raw hex in JSX                    |Use design token                |
|`useEffect` to fetch every render |Server components or SWR        |
|Duplicated JSX blocks             |Shared component                |
|Gradients outside hero            |Hero only                       |
|Heavy shadows (`shadow-xl+`)      |`shadow-md` max or border       |
|5+ items per row                  |Max 4 desktop                   |
|New pattern introduced mid-page   |Reuse existing components       |
|Two equal-weight CTAs side by side|Primary + ghost only            |
|3+ CTAs in one section            |Max 1 pair (primary + secondary)|

-----

## Enforcement Layer

```
reject_if:
  - spacing not from token scale
  - font size outside defined scale
  - layout not using flex/grid
  - more than 2 font families
  - animation outside 200–400ms
  - inconsistent padding across sections
  - non-responsive layout
  - missing component states (loading/empty/error)
  - gradient outside hero section
  - grid columns exceed density rules (max 4 desktop)
  - more than 1 CTA pair per section
  - equal-weight buttons side by side
  - full-width paragraph text
  - missing alt text or accessible labels

correction_strategy:
  - normalize values to nearest token
  - refactor repeated UI into components
  - replace custom styles with system rules
  - simplify layout structure
  - refactor, never patch
```

-----

## Refinement Triggers

When user says “make it better”, “not premium enough”, or “feels off”:

```
actions:
  1. increase whitespace — bump padding up exactly one token step
  2. simplify layout — remove visual noise, reduce element count
  3. reduce shadows — replace with borders
  4. align strictly to grid
  5. check accent color usage — reduce if overused
  6. check text widths — constrain any full-width prose
```

### Spacing Adjustment Rule

When refining spacing: move up exactly one token step at a time.
Never skip a scale level. (e.g. gap-6 → gap-8, not gap-6 → gap-16)

-----

## Output Format

```
- return full working code
- no explanations unless asked
- clean component structure
- production-ready JSX
- consistent Tailwind usage
```

-----

## Execution Mode

```
enforce over flexibility
reject invalid outputs
refactor instead of patching
prioritize consistency over creativity
```