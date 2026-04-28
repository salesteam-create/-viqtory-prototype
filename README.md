# VIQTORY Prototype

Same-day prototype redesign of viqtory.com for an in-person meeting with Rich McCormack (Co-Founder, VIQTORY).

> **For full context** on the strategy, design system, and what's real vs. placeholder, read [`CLAUDE.md`](./CLAUDE.md). This README is just enough to get it running.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Pages

| Route | What it does |
| --- | --- |
| `/` | Homepage — repositions VIQTORY around its data asset, embeds the Pipeline Estimator |
| `/recruitment-marketing` | Flagship service page with three pricing tiers (anchors the upsell conversation) |
| `/government-solutions` | GovCon + cybersecurity page — built specifically for Rich McCormack |
| `/command-platform` | Productized SaaS page for VIQTORY's Command Platform |

## Stack

- Next.js 15 (App Router) · React 19 RC · TypeScript strict
- Tailwind CSS v3 with custom design tokens (see `tailwind.config.ts` + `app/globals.css`)
- Framer Motion · Lucide React · Recharts (installed, not yet used)

## File map

```
app/                       # Routes
components/                # Header, footer, Pipeline Estimator
components/ui/             # Button, Eyebrow, Section primitives
lib/estimator-data.ts      # Calculator lookup tables and estimate()
lib/utils.ts               # cn() helper
```

## Heads up before you ship this anywhere

The prototype contains placeholder values that look real but aren't verified. Before the meeting (or any external use), confirm:

1. CAGE / DUNS / NAICS codes on `/government-solutions`
2. Pricing tier numbers on `/recruitment-marketing`
3. Cleared talent breakdown on `/government-solutions`
4. Contract vehicles list on `/government-solutions`

See `CLAUDE.md` for the full list.

## Common edits

- **Change a color**: edit the token in `tailwind.config.ts` and the matching CSS variable in `app/globals.css`.
- **Add a page**: copy `app/recruitment-marketing/page.tsx` as the template. Hero → strip → 3–5 content sections → CTA.
- **Tweak calculator math**: `lib/estimator-data.ts`. Multipliers, base audiences, and the `estimate()` function are all in one file.
