# MindMosaic

MindMosaic is a monorepo that combines:

- **packages/site** – Astro + MDX knowledge base site
- **packages/extension** – Chrome extension for highlighting glossary terms
- **packages/shared** – Shared TypeScript utilities and types
- **scripts** – Utility scripts (e.g., glossary export)

## Getting Started

```bash
# Install all workspace dependencies
yarn install # or pnpm install / npm install

# Run the Astro site
yarn workspace site dev

# Build the Chrome extension
yarn workspace extension build
```

See individual package READMEs for more details.
