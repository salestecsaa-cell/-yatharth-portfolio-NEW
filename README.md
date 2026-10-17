# Yatharth Sharma — Portfolio

Source for https://www.yatharth114.com/, the portfolio of Yatharth Sharma, Performance AI Video Editor (Top Rated Plus on Upwork).

Built with React 18, TypeScript, Vite, Three.js / React Three Fiber and GSAP. Hosted on Vercel.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — type-check and production build into `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint

## SEO files

- `index.html` — title, meta description, canonical, Open Graph, JSON-LD (Person, ProfessionalService, WebSite) and a plain-HTML summary inside `#root` for crawlers that do not run JavaScript. Keep that summary in sync with the visible page content.
- `public/robots.txt` and `public/sitemap.xml` — update `<lastmod>` when the page content changes.

## 3D character

`public/models/character.enc` is the encrypted character model. `scripts/encrypt-model.cjs` re-creates it from a `character.glb`; it is kept out of `public/` so it is not served.

Originally adapted from an open-source 3D portfolio template (MIT, see `LICENSE`).
