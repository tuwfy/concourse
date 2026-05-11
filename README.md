# Concourse

**The operating layer for group hospitality.** A marketplace, a benchmarking workspace, and a research practice — a category rebuild of platforms like Cvent and Hotel Planner for the next decade of group business.

Static site, no build step, fully functional.

---

## Pages

| Page | What it is |
| --- | --- |
| `index.html` | Editorial homepage. Hero, three-product overview, four-step process, coverage grid, quote carousel, stats, CTA, footer with big wordmark. |
| `venues.html` | Working venue marketplace — live search, region / type / capacity filters, sort, inquiry modal. |
| `dashboard.html` | Interactive preview of the paid **Insights** workspace — KPI tiles, comp-set bar chart, closed-lost analysis, buyer-signal panels. Period tabs (7d / 30d / 90d / YTD) repaint live. |
| `seminars.html` | AI-in-hospitality seminar catalog, registration modal, speaker grid, format filter. |
| `growth.html` | **Growth watchlist** — 14 cities (Las Vegas, Chicago, LA / SF / Napa, NYC / Lake George / Hamptons, Tampa / Polk / Orlando / Miami, Dallas / Austin) with 10-year SVG line-chart forecasts, confirmed conference pipeline, development notes, horizontal comparison chart, and a news feed. |
| `pricing.html` | Three tiers, monthly / annual toggle, bordered comparison table, FAQ accordion. |
| `contact.html` | Demo request form with role chips + separate planner-brief form. |

## Design

Built in a single design system inspired by [Hedge Specialty](https://www.hedgespecialty.com/).

- **Palette** — paper white `#fff`, warm off-white `#f6f5f1`, ink `#111`, muted `#76736c`, forest green accent `#1f4e3a`, gold `#a67b2e`.
- **Type** — Geist (all weights), Geist Mono for eyebrows / labels / dates.
- **Layout** — faint 12-column gridlines fixed behind every page, hard-edged bordered card grids (one outer border + internal dividers), pill buttons on ink black, big serif headlines with a single accent-green clause.
- **Eyebrows** — monospace, uppercase, with a `/ ` prefix in green.

## Tech

Plain HTML / CSS / JS. No bundler.

```
concourse/
├── index.html
├── venues.html
├── seminars.html
├── dashboard.html
├── growth.html
├── pricing.html
├── contact.html
├── styles/
│   ├── main.css          # design system
│   └── components.css    # page-specific components
├── scripts/
│   ├── data.js           # mock venues, seminars, markets, news
│   └── main.js           # shared nav, modal, toast, form intercept
└── README.md
```

## Running it

Open `index.html` directly — everything works on `file://`.

For clean URLs:

```sh
cd concourse
python3 -m http.server 8000
# visit http://localhost:8000
```

## What's interactive

- Venue search + filters + sort (live, no reload).
- Inquiry / seminar registration / contact / brief forms — all intercepted, validated, and confirm via toast.
- Insights dashboard period tabs repaint KPIs + bar chart.
- Pricing — monthly / annual cycle swaps prices.
- FAQ accordion on pricing.
- Growth — market selector tiles drive a live SVG line chart, KPI tiles, pipeline list, and development notes.
- Quote carousel on the homepage auto-rotates.
- Sticky nav that hides on scroll-down and reappears on scroll-up.
