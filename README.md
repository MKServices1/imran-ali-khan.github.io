# Imran Ali Khan — Portfolio

Personal portfolio site for Imran Ali Khan, Senior Flutter Developer. Built as a fast, static, SEO-friendly site with zero client-side framework overhead.

## Tech stack

- **[Astro 4](https://astro.build)** — static site generator, ships close to zero JS by default
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling, purged at build time
- **TypeScript** — for the content data layer (`src/data/*.ts`)
- No client framework (React/Vue/etc.) — the only JavaScript shipped is a ~15-line scroll-reveal script and a mobile nav toggle, both inline and tiny

Why Astro over Next.js/plain React: this site has no interactive app state, no auth, no client-rendered dashboard — it's a content site. Astro renders it to plain HTML/CSS at build time, which means faster load, better Lighthouse scores, and simpler SEO (no hydration mismatches, no JS-dependent content).

## Folder structure

```
portfolio/
├── public/                  # Static files served as-is
│   ├── _headers             # Cloudflare Pages security/cache headers
│   ├── _redirects           # Cloudflare Pages redirects (empty, reserved)
│   ├── favicon.svg
│   ├── og-image.png         # Social share image (1200×630)
│   ├── robots.txt
│   ├── sitemap-index.xml
│   └── imran-ali-khan-flutter-developer.pdf   # Downloadable résumé
├── scripts/
│   └── og-source.svg        # Source for og-image.png (edit + re-render if needed)
├── src/
│   ├── components/          # One component per section/UI piece
│   ├── data/                 # ⭐ SOURCE OF TRUTH for all personal content
│   │   ├── profile.ts        # Name, headline, bio, achievements, contact info
│   │   ├── experience.ts      # Work history timeline
│   │   ├── projects.ts        # Case studies + "also shipped" app grid
│   │   └── skills.ts           # Categorized skills
│   ├── layouts/
│   │   └── BaseLayout.astro   # <html> shell, SEO head, nav, footer, reveal script
│   ├── pages/
│   │   ├── index.astro        # Assembles all sections in order
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css         # Design tokens applied via Tailwind layers
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.mjs        # Color palette, fonts, animation keyframes
└── package.json
```

## Local setup

Requires Node.js 20+ (see `.node-version`).

```bash
npm install
npm run dev        # http://localhost:4321
```

## Development commands

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Type-checks (`astro check`) then builds to `dist/` |
| `npm run preview` | Serves the production build locally |

## Production build

```bash
npm run build
```

Output goes to `dist/` — a fully static folder (HTML, CSS, and a handful of images/PDF). No server runtime is required.

Current build: ~350 KB total (2 HTML pages + 1 CSS file + assets), no JS framework bundle.

## Deployment

### Recommended: Cloudflare Pages (free)

Compared against the other free options for this specific site:

| | Cloudflare Pages | Vercel | Netlify | GitHub Pages |
|---|---|---|---|---|
| Bandwidth | Unlimited | 100 GB/mo (free tier) | 100 GB/mo (free tier) | Soft ~100 GB/mo |
| Build minutes | 500/mo | 6,000/mo (generous) | 300/mo | via Actions (2,000/mo) |
| Custom domain | Free, easy | Free, easy | Free, easy | Free, easy |
| Custom headers/redirects | Native (`_headers`/`_redirects`) | Native (`vercel.json`) | Native (`_headers`/`_redirects`) | Limited |
| Edge network | Cloudflare's global edge | Vercel edge | Netlify edge | GitHub's CDN |

For a static portfolio, all four would technically work. Cloudflare Pages wins here on unlimited bandwidth (no risk of a viral LinkedIn share causing an overage) and because `public/_headers` (security headers) and `public/_redirects` (future custom-domain redirects) are already wired up for it. If you'd rather use Vercel or Netlify, the same `dist/` output deploys there with zero changes — just point their dashboard at this repo with build command `npm run build` and output directory `dist`.

**Steps (Cloudflare Pages, dashboard):**

1. Push this project to a GitHub repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 20 (picked up automatically from `.node-version`)
4. Deploy. You'll get a free `<project-name>.pages.dev` URL.

### Alternative: GitHub Pages (free)

Also works well since this is a fully static site. A workflow is already set up at `.github/workflows/deploy.yml`.

1. Name your repo `<your-github-username>.github.io` — this makes the site serve at the root (`https://username.github.io/`) instead of a subpath (`username.github.io/repo-name`), which avoids having to set Astro's `base` option.
2. Push this project to that repo.
3. Repo → **Settings → Pages → Source** → select **GitHub Actions**.
4. Push to `main` — the workflow builds and deploys automatically. Re-runs on every push.

Note: GitHub Pages doesn't support the `public/_headers` file (that's Cloudflare-specific), so the extra security headers won't apply there — everything else works identically.

### Custom domain (later)

Once you buy a domain:

1. In Cloudflare Pages → your project → **Custom domains** → add the domain.
2. Update `SITE_URL` in `astro.config.mjs` to the new domain.
3. Update the `Sitemap:` line in `public/robots.txt` and the URL in `public/sitemap-index.xml` to match.
4. Rebuild and redeploy.

## SEO setup

Already configured, no extra work needed:

- Per-page `<title>` and meta description (`src/components/Seo.astro`)
- Open Graph + Twitter Card tags, including a generated 1200×630 share image (`public/og-image.png`)
- `rel="canonical"` pointing at the configured `SITE_URL`
- JSON-LD `Person` structured data (name, role, location, links, skills)
- `robots.txt` + `sitemap-index.xml` in `public/`
- Semantic HTML: one `<h1>`, ordered `<h2>`/`<h3>` hierarchy, `<nav>`/`<main>`/`<footer>` landmarks
- No content is hidden behind client-side JS — everything is in the initial HTML

If you rename the site or change the domain, update `SITE_URL` in `astro.config.mjs` — every meta tag derives from it.

## Accessibility

- Skip-to-content link, visible on keyboard focus
- All interactive elements have visible focus rings (`:focus-visible`)
- Color palette checked against WCAG AA (4.5:1) for body text on the dark background
- `prefers-reduced-motion` disables all animation (see `src/styles/global.css`)
- Icon-only links (store badges, social links) have `aria-label`s
- Mobile nav toggle meets the 44×44px minimum touch target

## How to update content

Everything text-based lives in `src/data/`. **You should never need to touch component files to update your info.**

- **Name, headline, bio, contact info, availability, achievements:** edit `src/data/profile.ts`
- **Work history:** edit the `experience` array in `src/data/experience.ts`
- **Skills:** edit the `skillGroups` array in `src/data/skills.ts`
- **Résumé PDF:** replace `public/imran-ali-khan-flutter-developer.pdf` (keep the same filename, or update `profile.resumeFile` in `profile.ts` if you rename it)

After editing, run `npm run dev` to preview, then `npm run build` before deploying.

## How to add a new project

Open `src/data/projects.ts`.

**For a deep case study** (used for your strongest, most differentiated work — currently 5 are featured): add an object to the `caseStudies` array, following the same shape as the existing entries (problem, approach, architecture, challenge, result, tech, optional store links). These render as full write-ups on the page.

**For a quick "also shipped" entry** (used for apps that don't need a full write-up, e.g. more CRM apps with similar tech): add an object to the `shipped` array with just a name, optional category, and store links. Keep descriptions factual — don't invent a category/description you can't verify from the app's own name or store listing.

## How to change personal information

All of it is in `src/data/profile.ts`:

```ts
export const profile = {
  name: 'Imran Ali Khan',
  role: 'Senior Flutter Developer',
  location: 'Lahore, Pakistan',
  email: 'imranalikhan878@gmail.com',
  phone: '+92 333 9837704',
  availability: 'Available immediately',
  links: {
    linkedin: '...',
    github: '...',
  },
  // ...
};
```

Change `availability` when your status changes (e.g. to `"Open to new opportunities"` once employed). Nothing else needs updating for that.

## Environment variables

None required. This is a fully static site with no API keys, forms, or backend calls — nothing to keep secret. If you later add a contact form or analytics, use Astro's [environment variables](https://docs.astro.build/en/guides/environment-variables/) (`import.meta.env`) rather than hardcoding any keys into `src/`.

## Code quality notes

- Each section of the page is its own small component (`src/components/*.astro`) — no file is doing too much
- All personal content is centralized in `src/data/`, not scattered across components — components only handle presentation
- No dead code, no `console.log`s, no placeholder Lorem Ipsum
- TypeScript types (`CaseStudy`, `ShippedApp`, `Role`, `SkillGroup`) keep the data files honest — a malformed entry fails `npm run build`
