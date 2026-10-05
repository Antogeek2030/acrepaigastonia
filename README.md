# AC Repair Gastonia NC — Astro Site

Static Astro.js website for **acrepairgastonianc.com**, optimized for Cloudflare Pages.

## Features

- Cloned & adapted content from acrepairgastonia.org
- New color scheme (sky blue / teal cooling theme)
- Responsive & mobile-friendly
- Google Map embed for **503 E Franklin Blvd, Gastonia, NC 28054**
- SEO: meta tags, Open Graph, LocalBusiness JSON-LD, canonical URLs
- `robots.txt` + automatic sitemap via `@astrojs/sitemap`
- Fast static build (great for Google indexing & Core Web Vitals)
- Sticky header, floating call button on mobile, 24/7 CTA

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy the `dist` folder (or the whole project) to **Cloudflare Pages**.

### Cloudflare Pages settings

- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: 18 or 20

Or connect the repo and Cloudflare will detect Astro automatically.

## Customization

- Phone: edit `src/pages/index.astro` (`phone` / `phoneDisplay`)
- Address / map: same file, location section
- Colors: `src/styles/global.css` CSS variables
- Site URL: `astro.config.mjs` → `site`

## Project structure

```
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── layouts/Layout.astro
│   ├── pages/index.astro
│   └── styles/global.css
├── astro.config.mjs
├── package.json
└── README.md
```
