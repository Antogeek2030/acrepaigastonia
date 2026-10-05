# AC Repair Gastonia NC — Astro Site (Multi-Page)

Static Astro.js website for **acrepairgastonianc.com**, optimized for Cloudflare Pages.

## Structure (mirrors acrepairgastonia.org style)

### Pages
- **Home** (`/`) — hero, why us, problem teasers, service grid, CTAs
- **Services** (dropdown menu)
  - Emergency AC Repair
  - Central AC Repair
  - Mini-Split Repair
  - Compressor Repair
  - Refrigerant Leak Repair
  - Thermostat Repair
  - Same-Day AC Repair
  - Drain Line Cleaning
- **AC Problems** (dropdown menu)
  - All problems index
  - Weak Airflow, Frozen Coils, Blowing Warm Air, Leaking Water, Strange Noises, Thermostat Issues
- **Location** (`/location/`) — address + Google Map embed for 503 E Franklin Blvd

### Features
- Dropdown navigation (Services + AC Problems) on desktop; accordion-style mobile menu
- In-depth content on service and problem pages
- Sky blue / teal color scheme
- Responsive, sticky header, floating call button on mobile
- SEO: meta, OG, LocalBusiness JSON-LD, robots.txt, @astrojs/sitemap
- Address: **503 E Franklin Blvd, Gastonia, NC 28054**
- Phone: **+1 (704) 469-6658**

## Deploy to Cloudflare Pages

```bash
npm install
npm run build
```

- Build command: `npm run build`
- Output directory: `dist`
- Node: 18 or 20
