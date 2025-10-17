## My-Website — Copilot Instructions

This repo is a small React site (Create React App) with a lightweight Express server used for simple API proxies during development. The goal of this file is to give AI coding agents the minimal, actionable context needed to be productive quickly.

- Project layout (important files/directories):
  - `package.json` — root React app scripts. `npm start` runs CRA on port 3000. Proxy config points to `http://localhost:5000`.
  - `server/index.js` and `server/package.json` — small Express server. Start with `cd server && npm start` (listens on PORT or 5000). Example API: `GET /api/message`.
  - `src/` — React sources. `src/App.js` contains routing (React Router v6) and main layout. `src/index.js` bootstraps the app.
  - `src/components/nav.js` — site nav; uses `react-collapsed` and demonstrates internal vs external links (uses `<Link>` for internal routes, `<a>` with `target="_blank"` for externals).
  - `src/pages/*` — pages. Example: `src/pages/music.js` fetches `/api/message` (uses CRA proxy to server).
  - `tailwind.config.js` and `src/index.css` — Tailwind is used for styling (custom palette and font `Tomasa`).

- Big picture architecture and data flows:
  - Single-page React frontend served by CRA during development. Production is built into `/build` (static files ready for hosting).
  - A tiny Node/Express dev server provides simple JSON endpoints and can be used as a proxy target; CRA's `proxy` setting forwards API calls from the frontend to `http://localhost:5000` in development. Example flow: browser -> CRA dev server (3000) -> proxy -> Express (5000) -> responds JSON.
  - No database or external backend in this repo — integration points are mostly third-party embeds (YouTube, Mixcloud, Nina Protocol) and external links listed in the nav.

- Developer workflows, commands and tips (explicit):
  - Start frontend dev server: `npm start` from repository root (CRA on port 3000).
  - Start backend dev server: `cd server && npm start` (Express on PORT or default 5000). Ensure both are running if you want frontend fetches to resolve via the proxy.
  - Build production bundle: `npm run build` (outputs `build/`). The repo already contains a pre-built `build/` directory.
  - Tests: `npm test` uses CRA test runner (no repo-specific tests beyond default). Server has no tests.
  - Debugging tip: pages use CRA proxy; if fetch to `/api/*` returns 404 in dev, check that `server` is running on port 5000 and that the route exists (see `server/index.js`).

- Project-specific conventions and patterns:
  - Routing: uses `react-router-dom` v6. `App.js` maps paths to components. Use `<Link to="/path">` for internal nav; `nav.js` shows when to use external anchors.
  - Styling: Tailwind utility classes are used heavily. The author created a `wrapper` utility class in CSS (see `src/index.css`) to compute viewport height via `calc(...)` and avoid scrollbar overflow — maintain that wrapper when editing page layout.
  - Image imports: pages use `require('../images/filename.jpg')` in some components. When adding images prefer using `import` at top or `require` where used; ensure files live under `src/images`.
  - Fonts: `Tomasa` is referenced in `tailwind.config.js`; license files are not included — avoid bundling or redistributing the font unless you have a license.
  - Collapsible nav sections: `src/components/nav.js` uses `react-collapsed` via `useCollapse()` — preserve the `getCollapseProps` / `getToggleProps` pattern when modifying.

- Integration points and external dependencies:
  - Third-party packages: See root `package.json` — notable libraries: `@vercel/analytics`, `@mux/mux-player*`, `react-router-dom`, `tailwindcss` and `react-collapsed`.
  - External embeds: Several pages include iframes and external embeds (e.g., Nina Protocol, YouTube). These are static includes; for security, ensure `rel="noreferrer"` and `target="_blank"` are used for external anchors (already used in `nav.js`).

- Concrete examples to follow when editing or adding features:
  - Adding a new page: create `src/pages/newpage.js`, export a default React component, then add a `<Route path='/newpage' element={<NewPage/>} />` entry in `src/App.js` and a link in `src/components/nav.js` (or add to a collapsible section).
  - Fetching from the dev server: use fetch('/api/your-route') from a component's `useEffect` — rely on CRA proxy. To test server-only routes hit `http://localhost:5000/api/...` directly.
  - Styling the main content: wrap page content in the existing `wrapper` div (see `App.js`) to preserve the calculated height behavior and avoid visual regressions.

- What NOT to change without owner confirmation:
  - `tailwind.config.js` color and font definitions — these are intentionally tailored to the site's look.
  - `wrapper` CSS calculation and the `shadows` `bg-roundy` classes — they handle scrollbars and border-radius behavior across layouts.

If anything above is unclear or you want more detail (CI, deploy steps, or mapping of all routes/pages), tell me which area to expand and I will iterate.
