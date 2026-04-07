# Know TWICE 🎵

A fan website for the K-pop group TWICE: member profiles, discography, streaming links, and structured data for search.

[![Live Site](https://img.shields.io/badge/Live-Site-ff5fa2?style=for-the-badge&logo=astro)](https://www.knowtwice.com/)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=for-the-badge&logo=astro)](https://astro.build)

## ✨ Features

- **Member profiles**: All nine members with bios, facts, and social links
- **Member browsing**: Responsive cards and detail pages (`/members`, `/members/[id]`)
- **Discography**: Full release list with client-side filters, plus per-release pages (`/discography`, `/discography/[id]`)
- **Music links**: Solo and release links across YouTube, Spotify, Apple Music, and YouTube Music where available
- **Performance & SEO**: Astro static output, sitemap integration, Open Graph, and JSON-LD where layouts support it
- **Responsive UI**: Tailwind-based layout and components

## 🛠️ Tech stack

- **[Astro](https://astro.build)** — Static site generator (v6)
- **[TypeScript](https://www.typescriptlang.org/)** — Types for content and utilities
- **[Tailwind CSS](https://tailwindcss.com/)** — Styling via `@tailwindcss/vite` (Tailwind v4)
- **[Preact](https://preactjs.com/)** — Lightweight islands for interactive UI (e.g. discography filters)
- **[Sharp](https://sharp.pixelplumbing.com/)** — Image processing (Astro pipeline)
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — Generated sitemap
- **[Vitest](https://vitest.dev/)** — Unit tests
- **[Playwright](https://playwright.dev/)** — End-to-end tests

## 🚀 Project structure

```text
/
├── public/
│   ├── images/              # Logo, member and album art (referenced by routes)
│   ├── robots.txt
│   ├── og.jpg
│   └── _headers             # Deploy headers (e.g. Netlify)
├── src/
│   ├── components/          # Astro components + Preact islands under Preact/
│   ├── const/               # members.ts, discography data
│   ├── layouts/             # Layout.astro (meta, schema, chrome)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── members/
│   │   ├── discography/
│   │   └── 404.astro
│   ├── styles/
│   ├── tests/               # unit/ and e2e/ specs
│   ├── types/
│   └── utils/
├── astro.config.mjs
├── playwright.config.ts
├── vitest.config.ts
└── package.json
```

## 🧞 Development commands

Run from the repository root:

| Command          | Action                                                       |
| :--------------- | :----------------------------------------------------------- |
| `pnpm install`   | Install dependencies                                         |
| `pnpm dev`       | Dev server at [http://localhost:4321](http://localhost:4321) |
| `pnpm build`     | Production build to `./dist/`                                |
| `pnpm preview`   | Preview the production build locally                         |
| `pnpm test:unit` | Unit tests (Vitest)                                          |
| `pnpm test:e2e`  | E2E tests (Playwright)                                       |
| `pnpm format`    | Format with Prettier (Astro + Tailwind plugins)              |

Useful extras:

| Command                | Action             |
| :--------------------- | :----------------- |
| `pnpm test:e2e:ui`     | Playwright UI mode |
| `pnpm test:e2e:debug`  | Playwright debug   |
| `pnpm test:unit:watch` | Vitest watch mode  |

## 🚀 Getting started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Brian06/know-twice.git
   cd know-twice
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the dev server**

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:4321](http://localhost:4321).

## 🧪 Testing

- **Unit tests** cover data integrity, helpers, and DOM utilities.
- **E2E tests** cover navigation and key user flows.

```bash
pnpm test:unit
pnpm test:e2e
```

Pull requests and pushes to `main` run unit and E2E jobs in GitHub Actions (see `.github/workflows/check-tests.yml`).

## 📝 License

This project is licensed under the MIT License; see [LICENSE](LICENSE).

## ⚠️ Disclaimer

This is an **unofficial fan site**. Member names, images, and trademarks belong to **JYP Entertainment Co., Ltd.** The site is not affiliated with or endorsed by JYP Entertainment or TWICE.

## 🤝 Contributing

Contributions are welcome. Open a pull request, or an issue first for larger changes.

---

Made with 💖 by ONCE for ONCE
