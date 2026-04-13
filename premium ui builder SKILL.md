---
name: premium_ui_builder
version: 2.0
description: >
  Enforces design, layout, motion, and component discipline to produce Framer-quality websites and UIs using Next.js, Tailwind CSS, and Framer Motion. Use this skill whenever the user wants to build a landing page, marketing site, portfolio, SaaS UI, dashboard, or any visually polished web interface — even if they just say "make it look premium", "Framer-style", "clean and modern", or "professional UI". Also trigger for redesigns, component libraries, or when the user shares a rough layout and wants it elevated. Do not use for purely backend code, CLI tools, or data pipelines.
---

# Premium UI Builder

A design system + execution guide for producing Framer-quality websites using Next.js, Tailwind CSS, and Framer Motion. Every output must feel intentional, restrained, and polished — not generated.

---

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Images | next/image |
| Icons | lucide-react |
| Fonts | next/font (Google Fonts) |

---

## Design Tokens (never deviate)

### Spacing Scale
Only use these values. No arbitrary px values.
```
4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128
```
In Tailwind: `p-1 p-2 p-3 p-4 p-6 p-8 p-12 p-16 p-20 p-24 p-32`

### Typography Scale
```
Font sizes (px): 12, 14, 16, 20, 24, 32, 48, 64
Line heights: 1.4 (body), 1.2 (headings), 1.6 (captions/small)
Letter spacing: tight for headings (-0.02em), normal for body
Max font families: 2 (one display, one body — or one font total)
```

### Color System
Define these tokens in `tailwind.config.ts` before writing any component:
```ts
colors: {
  brand: {
    DEFAULT: '#your-primary',   // main CTA, links
    subtle: '#lighter-tint',    // hover states, backgrounds
  },
  neutral: {
    50: '...',   // page background
    100: '...',  // card background
    200: '...',  // borders
    500: '...',  // muted text
    800: '...',  // body text
    950: '...',  // headings
  },
  accent: '#your-accent',       // 1 accent max per page
}
```
Rules:
- Max 3 colors per page section (background + text + one highlight)
- Contrast ratio ≥ 4.5:1 for body text (WCAG AA)
- Contrast ratio ≥ 3:1 for large text / decorative
- No dark mode without explicit request

### Container
```tsx
// Always wrap sections in this
<div className="mx-auto w-full max-w-[1140px] px-6 md:px-10">
```

---

## Component Contracts

Every component must have a defined interface. No freestyle props.

### Button
```tsx
type ButtonProps = {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  href?: string   // renders as <a> if provided
}
```

### Card
```tsx
type CardProps = {
  variant: 'default' | 'bordered' | 'elevated'
  padding?: 'sm' | 'md' | 'lg'   // default: md
  children: React.ReactNode
  className?: string
}
```

### Section
```tsx
type SectionProps = {
  id?: string
  background?: 'white' | 'subtle' | 'dark'
  children: React.ReactNode
  className?: string
}
// Section padding always: py-16 md:py-24 (≥48px enforced)
```

### Navbar
```tsx
type NavbarProps = {
  logo: React.ReactNode
  links: { label: string; href: string }[]
  cta?: { label: string; href: string }
  sticky?: boolean
}
```

---

## Motion Rules (Framer Motion)

### When to Animate
✅ Animate: page entry, section reveal on scroll, hover state feedback, modal/drawer open/close  
❌ Never animate: text while typing, layout shifts, background colors, decorative shapes on loop

### Animation Primitives
```tsx
// Fade up (section reveal — most common)
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
}

// Fade in (images, cards)
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: 'easeOut' }
}

// Stagger children
const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
}
```

Rules:
- Duration: 200–400ms only
- Easing: `easeOut` or cubic `[0.25, 0.1, 0.25, 1]` — never `linear`
- Use `viewport={{ once: true }}` on scroll-triggered animations
- Never nest more than 2 levels of motion components
- No infinite loops unless it's a marquee/ticker explicitly requested

---

## Folder Structure
```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, global providers
│   ├── page.tsx            # home page (composition only)
│   └── [slug]/page.tsx
├── components/
│   ├── ui/                 # Button, Card, Badge, Input, etc.
│   ├── layout/             # Navbar, Footer, Section, Container
│   └── sections/           # Hero, Features, Testimonials, CTA, etc.
├── lib/
│   └── utils.ts            # cn(), formatters
├── styles/
│   └── globals.css
└── types/
    └── index.ts
```

---

## States (required for every interactive component)

Every component that receives data or user input must handle:
- **Loading** — skeleton or spinner (use `animate-pulse` for skeletons)
- **Empty** — message + optional CTA ("No items yet. Add one →")
- **Error** — user-readable message, not raw error text
- **Success** — confirmation feedback (toast or inline)

---

## Responsiveness

Mobile-first. Every component starts at mobile, scales up.

```
Default (mobile):  < 640px
sm:                640px
md:                768px
lg:                1024px
xl:                1280px
```

Checklist:
- [ ] Text readable at 320px width
- [ ] Tap targets ≥ 44×44px
- [ ] Navbar collapses to hamburger on mobile
- [ ] No horizontal scroll at any breakpoint
- [ ] Grid collapses: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## Performance Rules

- Use `next/image` for every image — no raw `<img>` tags
- Lazy load below-fold sections with `loading="lazy"` or dynamic imports
- No animation libraries other than Framer Motion
- Keep bundle lean: no utility libraries for things Tailwind/React already handles
- Fonts via `next/font` only — no `<link>` tags to Google Fonts

---

## Anti-Patterns (auto-reject)

| ❌ Never do this | ✅ Do this instead |
|---|---|
| `style={{ marginTop: '37px' }}` | Use spacing scale: `mt-8` or `mt-10` |
| 6+ different font sizes on one page | Stick to type scale |
| Animations on every element | Animate sections, not atoms |
| Full-width `<p>` text blocks | Max `max-w-2xl` on prose |
| Inline styles for repeated UI | Extract to component |
| `position: absolute` for layout | Use flex/grid |
| Raw hex in JSX | Use design token color |
| `useEffect` to fetch on every render | Use server components or SWR |

---

## Execution Checklist

Before delivering any output, verify:

**Layout**
- [ ] All spacing uses the defined scale
- [ ] Content wrapped in max-width container
- [ ] Sections have ≥ 48px vertical padding

**Typography**
- [ ] Max 2 font families used
- [ ] All font sizes from defined scale
- [ ] Line heights 1.2–1.6 throughout

**Color**
- [ ] Tokens defined in tailwind.config
- [ ] Contrast ≥ 4.5:1 on all body text
- [ ] Max 3 colors per section

**Motion**
- [ ] All animations 200–400ms
- [ ] `viewport={{ once: true }}` on scroll animations
- [ ] No looping decorative animations

**Components**
- [ ] Props match defined contracts
- [ ] All states handled (loading/empty/error/success)
- [ ] No inline styles on repeated elements

**Responsiveness**
- [ ] Mobile-first breakpoints used
- [ ] Navbar has mobile menu
- [ ] No horizontal overflow

---

## Output Expectation

Every output should feel like it was built by a senior product designer who codes. Clean grid, intentional whitespace, restrained motion, type that breathes. If it looks like a template or a tutorial, refactor it.
