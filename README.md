# arcade-website

Small, front-end JavaScript project for an arcade-style website (games, high scores, demo pages). Contains static assets, game code, and a simple dev/build workflow.

## Features

- Lightweight single-page or multi-page arcade site
- Game demos written in vanilla JS (or frameworks)
- Asset pipeline for images/audio
- Basic routing and score persistence (localStorage)

## Tech stack

- JavaScript (ES6+)
- HTML, CSS
- Node.js + npm for tooling (bundler/dev server/test runner)
- Optional: Vite / Webpack / Rollup (recommended: Vite for fast dev)

## Getting started

Prerequisites

- Node.js 16+ (or the version pinned in .nvmrc / engines)
- npm or yarn

Install

```bash
# from repo root
npm install
```

Run dev server

```bash
npm run dev
# or
npm run start
```

Build for production

```bash
npm run build
```

Serve production build (example)

```bash
npm run serve
# or use any static file server, e.g.:
npx serve dist
```

Tests & lint

```bash
npm test
npm run lint
```

## Suggested npm scripts

Add these to package.json (example)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "start": "npm run dev",
    "test": "vitest",
    "lint": "eslint . --ext .js,.ts"
  }
}
```

## Project structure (suggested)

```
/
├─ public/          # static assets (index.html, favicon)
├─ src/
│  ├─ index.js
│  ├─ styles/
│  ├─ games/         # each game in its own folder
│  └─ assets/
├─ dist/             # production build output
├─ package.json
└─ README.md
```

## Contributing

- Fork, create a feature branch, open a PR
- Write clear commit messages and follow existing code style
- Add tests for new functionality

## License

MIT — see LICENSE file.

## Contact

Open issues or PRs on the repository for questions or contributions.
