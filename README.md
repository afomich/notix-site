# notix-ai.app

Marketing site for Notix, built with [Astro](https://astro.build). Static output,
no client framework — the only JavaScript shipped is the FAQ accordion, the scroll
reveal and the analytics/consent script.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/ locally
```

Requires Node 22.12 or newer.

## Layout

| Path | What |
|---|---|
| `src/pages/` | one file per route |
| `src/layouts/Base.astro` | head, header, footer — every page's shell |
| `src/styles/styles.css` | the whole stylesheet |
| `src/scripts/` | `site.js` (FAQ, reveal), `analytics.js` (consent + GA4) |
| `public/` | copied to the site root verbatim: icons, fonts, `robots.txt`, `llms.txt`, `_headers`, `CNAME` |

`sitemap-index.xml` is generated at build time by `@astrojs/sitemap` — do not write
it by hand. Asset URLs are fingerprinted by the build, so there is no version query
to bump.

## Deploy

Cloudflare Pages builds from this repository: `npm run build`, output directory
`dist`. `public/_headers` sets caching and security headers.
