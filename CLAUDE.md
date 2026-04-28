# VIQTORY Website Redesign Prototype

This is a same-day prototype built for a sales meeting with **Rich McCormack** (Co-Founder, President of Staffing & Government Solutions at VIQTORY; CEO of Assured LogIQ; CIO of Military Friendly).

## Purpose & Strategy

This is **not** a generic recruitment marketing site refresh. It is a strategic repositioning of viqtory.com from "we do recruitment marketing" to **"the data and marketing layer for the U.S. military community."**

Three strategic moves baked into the prototype:

1. **Reposition the homepage around the data asset** (22M+ first-party military profiles), not the services menu.
2. **Productize the Command Platform** (currently buried in nav on the live site) as a real SaaS product page.
3. **Elevate Government & Cybersecurity** to a peer service line of Recruitment Marketing — because Rich McCormack runs that business, and his sister company Assured LogIQ delivers the cyber capability.

The interactive **Military Talent Pipeline Estimator** (`components/pipeline-estimator.tsx`) is the meeting's centerpiece. It demonstrates the data thesis with a working tool, not slides.

## Stack

- **Next.js 15** (App Router) + React 19 RC
- **TypeScript** strict mode
- **Tailwind CSS v3** with custom design tokens
- **Framer Motion** for the calculator transitions
- **Lucide React** icons
- **Recharts** (installed; not yet used — available for future viz expansion)

## Design System

Direction: **modern data SaaS** — clean white surfaces, electric accent, Stripe/Linear energy with military proof points layered in. Light military touch (SDVOSB credential, flag-gold accent on a single highlight). Avoids "charity / patriotic" aesthetic.

### Typography
- **Display** (`--font-display`): Fraunces — editorial serif with optical sizing. Headlines and large numbers.
- **Sans** (`--font-sans`): IBM Plex Sans — body text and UI.
- **Mono** (`--font-mono`): IBM Plex Mono — eyebrows, metrics labels, technical detail.

Configured in `app/layout.tsx`. CSS variables exposed in `tailwind.config.ts`.

### Color Tokens (Tailwind)
- `ink` → core text/surface palette (50–900). Primary text is `ink-900`, secondary is `ink-500`.
- `navy` → brand authority color, used sparingly.
- `electric` → the data-SaaS accent. Use for emphasis, not decoration.
- `flag.gold`, `flag.red` → reserved for military credential moments only. Do not use casually.

CSS variables in `app/globals.css` mirror the most-used tokens.

### Spacing & Layout Patterns
- All major sections use `<Section>` wrapper (`components/ui/section.tsx`) — `py-24 md:py-32`.
- All horizontal containers use `<Container>` with `max-w-7xl` (default), `narrow`, or `wide`.
- Section CTAs use a contained dark hero card pattern (see `FinalCTA` on home).
- Eyebrow labels (`<Eyebrow>`) above all section headlines. Variants: `default`, `electric`, `light`.

### Motion
- Page-load reveals: `.reveal` class with `animation-delay` inline style. Stagger by 120ms.
- Hover micro-interactions: 200–300ms, `ease-out` curves.
- Animated counters: custom `useCountUp` hook in the estimator. Use cubic ease-out, ~1.2–1.6s.
- Don't add motion for decoration. Add it only when it conveys state change or hierarchy.

## File Structure

```
app/
  layout.tsx              # Root layout, fonts, header/footer
  globals.css             # Design tokens, base styles, utilities
  page.tsx                # Homepage
  recruitment-marketing/  # Service page with pricing tiers
  government-solutions/   # GovCon page (Rich McCormack target)
  command-platform/       # Productized SaaS page
components/
  site-header.tsx         # Sticky header with scroll state
  site-footer.tsx         # Dark footer with credential strip
  pipeline-estimator.tsx  # The interactive calculator (centerpiece)
  ui/
    button.tsx            # Button primitive (variants: primary/secondary/ghost/outline)
    eyebrow.tsx           # Eyebrow label
    section.tsx           # Section + Container wrappers
lib/
  utils.ts                # cn() class merger
  estimator-data.ts       # Calculator lookup tables and estimate function
```

## Running

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. All four pages are routed and linked from the header.

## What's Real vs. Placeholder

- **Numbers** in the calculator (`lib/estimator-data.ts`) are *directional, not random*. They're anchored on SHRM cost-per-hire benchmarks and VIQTORY's public reach claims. The sales head should be able to defend them in conversation.
- **Case study metrics** are pulled from the live VIQTORY site (AECOM 221 applicants, Signal 88 −65.8% CPL, Division I 175% over enrollment goal, DynCorp 4× scale). These are real.
- **Pricing tiers** ($4,500 / $12,500 / Custom) are *plausible market-rate placeholders*. Treat them as anchor points for the meeting conversation, not committed pricing.
- **GovCon contract vehicle status** (CAGE Code, NAICS codes, vehicle list) is *plausible-looking placeholder*. Replace with VIQTORY's real values before any external use.
- **Command Platform product** is positioned aspirationally. The dashboard mockup is a static visual — there is no real Command Platform v2 yet. This is intentional — it shows VIQTORY what their product page *could* look like.

## Critical: Things to Verify Before the Meeting

1. **CAGE / DUNS / NAICS** on the Government page need real values from VIQTORY's SAM.gov registration.
2. **Pricing on the Recruitment page** — these numbers should be sanity-checked with the sales head before the prototype is shown.
3. **Cleared talent breakdown** numbers (540K / 142K / 184K / 174K / 40K) on the Government page are illustrative.
4. **Contract vehicles list** (GSA Schedule, SeaPort, etc.) needs verification — these are guesses.

## Extending This Prototype

If you're adding pages or components, follow these patterns:

- New section: wrap in `<Section>` + `<Container>`. Lead with `<Eyebrow>`, then a `font-display text-display-lg` H2.
- New data card: white surface, `rounded-2xl`, `border-[var(--border-soft)]`, optional `hover:shadow-sharp`.
- New metric block: `font-display text-[28px–48px] font-semibold tracking-tight tabular-nums` for the number; mono uppercase eyebrow above.
- New page: copy the structure of `recruitment-marketing/page.tsx`. Hero → strip → 3–5 content sections → CTA.

## What This Prototype Argues (the meeting subtext)

> "Rich, viqtory.com today is selling a services menu. The site that wins your next chapter sells a *data asset*. Here's what that looks like, here's a working tool that demonstrates it, and here's how Government & Cyber gets the page real it deserves. We built G.I. Jobs. We've been thinking about where this goes next."

That is the meeting. The prototype is the artifact.
