# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **Monmouth L2 Node** - an agent-aware Layer 2 blockchain built on Reth, designed for AI agents to transact safely and efficiently. Built with Next.js 13 App Router, Tailwind CSS, and shadcn/ui components.

### What Monmouth Does

- **Agent-Aware Wallet SDK**: Guardrails, spending limits, and policy enforcement for autonomous AI agents
- **Off-Chain AI, On-Chain Settlement**: AI/ML via LLM API calls; blockchain handles verification and settlement
- **Custom Precompiles**: SVM Router for Solana cross-chain, L2 Message Passer for L1↔L2 bridging
- **L2 Sequencer**: Production-ready sequencer with batch compression and L1 data availability
- **Prague EVM**: Latest EVM features with custom precompile extensions

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
  - `api/` - API routes (`data/`, `login/`, `me/`)
  - `providers/` - Context providers (auth, theme)
  - `services/` - Service utilities
- `components/` - React components
  - `ui/` - Base shadcn/ui primitives (button, input, accordion, etc.)
  - Root level: Page sections (hero, navbar, footer, faq, features-section, etc.)
- `lib/utils.ts` - Utility functions including `cn()` for className merging

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
