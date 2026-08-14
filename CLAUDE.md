# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Kerala tourism marketing site ("teyla" / `kerala-tourism`) built with Next.js 16 App Router, React 19, and Tailwind CSS v4.

## Commands

```bash
npm run dev      # start dev server (Next.js, Turbopack default)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config via eslint-config-next)
```

There is no test suite configured in this repo.

## Architecture

- **App Router structure**: `app/page.tsx` composes page-level sections from `app/components/home/`. Each section is a self-contained `"use client"` component (e.g. `TourismHero.tsx`, `ExperienceSection.tsx`).
- **Data flow**: Static/local content (e.g. hero slides) lives in `app/data/index.js` as plain exported arrays (`SECTIONS`). Dynamic content (e.g. experience cards) is served from route handlers under `app/api/**/route.ts` and fetched client-side with `fetch()` inside `useEffect`.
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/app/lib/utils`.
- **Styling**: Tailwind v4 via `@import "tailwindcss"` in `app/globals.css`, configured through `@theme inline` tokens (no separate `tailwind.config.*` file — theme is defined in CSS). Use the `cn()` helper from `app/lib/utils.ts` (clsx + tailwind-merge) when combining conditional class names.
- **Fonts**: `next/font/google` fonts are defined in `app/font.ts` (Montserrat, exported as `montserrat`) and in `app/layout.tsx` (Geist Sans/Mono, exposed as CSS variables `--font-geist-sans`/`--font-geist-mono`). Import `montserrat` directly from `app/font.ts` where a component needs it rather than redeclaring the font.
- **Scroll/animation stack**: Sections combine `framer-motion` for simple transitions (see `TourismHero.tsx`) and `gsap` + `@gsap/react`'s `useGSAP` + `ScrollTrigger` for scroll-driven pinning/stacking effects (see `ExperienceSection.tsx`), wrapped in `lenis`'s `ReactLenis` for smooth scrolling. When adding scroll-linked animations, follow the existing pattern: register `ScrollTrigger` inside `useGSAP`, scope the timeline to a `container` ref, and clean up the timeline/ScrollTrigger instances in the returned cleanup function.
- **Media assets**: Large video/image assets referenced by data files live in `public/` (e.g. `backwater.mp4`, `hills.mp4`) and are referenced by root-relative path.
