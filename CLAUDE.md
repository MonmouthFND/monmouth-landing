# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **Monmouth** — the settlement layer for autonomous AI agents. Consensus infrastructure designed for agents to transact safely across blockchain ecosystems, settling to Ethereum for security. Built with Next.js 13 App Router, Tailwind CSS, and shadcn/ui components.

### What Monmouth Does

- **Agent Identity Registry**: Canonical DIDs with cross-chain verification
- **Native Intent Resolution**: Agent intents as first-class transaction types
- **Multi-Agent Coordination**: On-chain settlement of agent collectives
- **Agent-Aware Wallet SDK**: Guardrails, spending limits, and policy enforcement for autonomous AI agents
- **Cross-Runtime Execution**: Route agent operations to optimal VM (EVM, SVM, and more)
- **Ethereum Settlement**: Inherits Ethereum's security while providing agent-specific execution environments

## Documentation Practice

For every project, write a detailed `FOR[yourname].md` file that explains the whole project in plain language.

Include: technical architecture, codebase structure and how parts connect, technologies used, why we made these technical decisions, and lessons learned (bugs encountered and fixes, potential pitfalls, new technologies, how good engineers think and work, best practices).

Make it engaging to read - not boring technical documentation. Use analogies and anecdotes to make it understandable and memorable.

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start development server
bun run build        # Production build
bun run lint         # Run ESLint

# Adding UI components
bunx shadcn-ui@latest add <component>   # Add shadcn component
bunx v0 add <id>                        # Add v0 AI component
```

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages and layouts
  - `(protected)/` - Route group for authenticated pages (uses layout with auth checks)
  - `api/` - API routes (`data/`, `login/`, `me/`, `search/`)
  - `docs/` - Documentation pages (powered by Fumadocs)
  - `providers/` - Context providers (auth, theme)
  - `services/` - Service utilities
- `components/` - React components
  - `ui/` - Base shadcn/ui primitives (button, input, accordion, etc.)
  - Root level: Page sections (hero, navbar, footer, faq, features-section, etc.)
- `content/docs/` - MDX documentation content
  - `index.mdx` - What is Monmouth
  - `quickstart.mdx` - Getting started guide
  - `architecture/` - Architecture documentation
  - `wallet-sdk/` - Wallet SDK documentation
  - `precompiles/` - Custom precompiles documentation
  - `api/` - API reference
- `lib/` - Utility functions
  - `utils.ts` - `cn()` for className merging
  - `source.ts` - Fumadocs content source configuration

### Key Patterns

- **Styling**: Uses shadcn/ui "new-york" style with CSS variables for theming. Colors defined as HSL values in `globals.css`, referenced in `tailwind.config.js`.
- **Path Aliases**: `@/*` maps to project root (e.g., `@/components`, `@/lib/utils`)
- **Theme Support**: Dark/light mode via `next-themes` with ThemeProvider wrapper
- **Snap Scrolling**: Main page uses CSS snap scrolling (`snap-y snap-mandatory`) on desktop

### Landing Page Structure

The main page (`app/page.tsx`) renders full-screen snap-scrolling sections:
1. Hero
2. Features
3. Benefits
4. How It Works
5. FAQ
6. Footer

### Documentation (Fumadocs)

Technical documentation is powered by [Fumadocs](https://fumadocs.vercel.app):
- Content lives in `content/docs/` as MDX files
- Configuration in `source.config.ts`
- Source loader in `lib/source.ts`
- Docs layout in `app/docs/layout.tsx`
- Search API in `app/api/search/route.ts`

To add new documentation:
1. Create MDX file in `content/docs/`
2. Add to `content/docs/meta.json` for sidebar ordering
3. Rebuild to generate routes
