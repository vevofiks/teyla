# Design

> Auto-generated and maintained by frontend-god-mode.
> Source of truth for typography, color, motion, layout, and component tokens.
> Read this BEFORE touching the UI in any subsequent session.

## Aesthetic direction

Cinematic Kerala travel editorial — dark, immersive full-bleed media (video hero, photo cards) with a single emerald accent, uppercase micro-labels, and Montserrat display type carrying the drama.

## Dials

- DESIGN_VARIANCE: 7 / 10
- MOTION_INTENSITY: 6 / 10
- VISUAL_DENSITY: 4 / 10

## Type stack

- Display: Montserrat (400/700), loaded via `next/font/google` in `app/font.ts`, applied with `montserrat.className`
- Body / UI: Geist Sans, loaded in `app/layout.tsx` as `--font-geist-sans`
- Mono: Geist Mono (`--font-geist-mono`) — used for prices/numerics (`font-mono` on price figures)

Banned in this project: Inter, Roboto, Arial/system-ui as primary, serif anywhere.

## Color tokens

- Background: near-black — `bg-black` (hero), `bg-zinc-950` (section backgrounds), Zinc neutral family throughout (never mix with Slate/Stone)
- Foreground: `text-white`, muted copy `text-zinc-400` / `text-zinc-500`
- Accent (single, project-wide): **Emerald** — `emerald-400` for small UI accents (icons, dots, links), `emerald-500` for solid CTAs/badges
- Borders: `border-white/10` to `border-white/20` (translucent white, not gray-500)
- Status: rating stars use `amber-400` (fill) — the only non-emerald color permitted, reserved for ratings only

Banned in this project:
- Pure `#000`/`#FFF` utility classes where a translucent/tinted alternative exists
- Purple-to-blue gradients
- Any second saturated accent besides emerald (amber reserved strictly for star ratings)

## Shadows

Diffusion shadow tinted toward the dark-emerald background, e.g. `shadow-[0_20px_45px_-20px_oklch(0.1_0.02_150/0.6)]` on cards. No pure-black `rgba(0,0,0,...)` shadows.

## Motion

- Standard spring: `{ type: "spring", stiffness: 100, damping: 20 }`
- Stagger: `0.08–0.09s` between children, small initial delay
- Card/list reveals use `whileInView` with `viewport={{ once: true }}` — never animate on mount for below-the-fold content
- Hover: `-translate-y` + image `scale-105`, both `transform`-only, `duration-500/700`
- Banned: linear easing on UI motion, bounce/elastic, animating width/height

Library: framer-motion@12.x for section-level reveals/hero crossfade; GSAP + ScrollTrigger + Lenis reserved for pinned scroll-stacking sequences (`ExperienceSection`). Never mixed in the same component tree.

## Layout

- Container: `max-w-[1400px] mx-auto`, `px-4 md:px-10`
- Section padding: `py-20 md:py-28` (daily-to-airy density)
- Hero: full-bleed video background, left-aligned content block — NOT centered
- Card grids: `grid-cols-2 lg:grid-cols-3` on desktop, one card visually distinguished (border/ring/badge/negative-margin lift) rather than 3 uniform cards; mobile drops to a horizontal `snap-x` scroll strip (`.no-scrollbar` utility in `globals.css`) instead of a forced single column, since the content is inherently comparative/swipeable
- `min-h-[100dvh]` for any full-height section, never `h-screen`

## Component inventory

- `Navbar` (`app/components/layout/Navbar.tsx`) — fixed, transparent-to-blurred-on-scroll header in root `layout.tsx` (site-wide, not per-page); `teyla-logo.png` + wordmark left, nav links right (mobile: hamburger right); scrollspy via `IntersectionObserver`, mobile hamburger panel via framer-motion
- `TourismHero` (`#home`) — full-bleed autoplay video crossfade hero with vertical nav rail
- `ExperienceSection` (`#experiences`) — GSAP ScrollTrigger pinned card-stack, data from `/api/experiences`
- `FeaturedPackages` (`#packages`) — package/pricing cards, gallery-style (image + text below, no card border), 1/2/3-col responsive grid
- `ActivityStories` (`#stories`) — one-story-at-a-time carousel on `bg-emerald-950`, big number + image left, story copy right, drag-to-swipe + arrow/dot controls + 7s autoplay, data in `STORIES` (`app/data/index.js`)
- `Footer` (`app/components/layout/Footer.tsx`) — full-bleed image footer (`min-h-[70dvh]`), dark gradient overlay, logo + "Teyla Trips" wordmark top, centered CTA heading/copy/button middle, copyright bottom; image is a `picsum.photos` placeholder (seed `teyla-kerala-backwaters`) pending a real asset from the user — swap the `src` when provided; requires `picsum.photos` in `next.config.ts` `images.remotePatterns`
- Shared: `cn()` helper (`app/lib/utils.ts`), `montserrat` export (`app/font.ts`), icons from `lucide-react`, `.no-scrollbar` utility (`globals.css`), `html { scroll-behavior: smooth }` + per-section `scroll-margin-top` for anchor nav

## Image sourcing

Real Kerala photography only — no random Unsplash IDs guessed from memory (they render as unrelated stock photos; verify by downloading and viewing before committing a URL). Wikimedia Commons works well for specific cultural/place references (Theyyam, Kalaripayattu, Kettuvallam, etc. — pull the URL straight from a WebFetch of the relevant Wikipedia article's image list). Wikimedia thumbnails only render at certain pre-generated widths — a made-up width like `1200px-` can 400 error even when a smaller one 200s; test the exact width before using it.

## Project-specific bans

- No "John Doe" / "Acme" placeholder data — package/experience data uses real Kerala place names and messy realistic pricing (e.g. ₹14,500, not ₹15,000 flat)
- No emojis (lucide-react icons only)
- No `h-screen` (always `min-h-[100dvh]`)

## Brand voice (copy)

- Tone: sensory, specific, travel-editorial — not corporate SaaS
- Banned: elevate, seamless, unleash, next-gen
- CTA labels: specific verbs ("Reserve", "View Full Details") not "Submit"/"Click here"

## Accessibility floor

- WCAG 2.2 AA contrast on all body copy (≥ 4.5:1) — verify muted zinc tones against black backgrounds
- Focus-visible rings on every interactive element
- `prefers-reduced-motion` respected
- 44×44px minimum touch targets on mobile (CTA buttons use `px-4 py-3` minimum)

## Last updated

2026-08-14 by "replaced multi-column Footer with a simple full-width image footer (logo/wordmark + CTA), wired into page.tsx, dummy picsum image pending real asset"
