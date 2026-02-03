# Monmouth Landing Page

Marketing site for [Monmouth](https://github.com/monmouth/monmouth-node) — the settlement layer for autonomous AI agents. Consensus infrastructure designed for agents to transact safely across blockchain ecosystems, settling to Ethereum for security.

## What is Monmouth?

Monmouth provides consensus infrastructure for the autonomous agent economy:

- **Agent Identity Registry**: Canonical DIDs with cross-chain verification
- **Native Intent Resolution**: Agent intents as first-class transaction types
- **Multi-Agent Coordination**: On-chain settlement of agent collectives
- **Cross-Runtime Execution**: Route agent operations to optimal VM (EVM, SVM, and more)
- **Agent-Aware Wallet SDK**: Guardrails, spending limits, and policy enforcement
- **Ethereum Settlement**: Inherits Ethereum's security for final settlement

## Technologies Used

- [Next.js 13](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Bun](https://bun.sh/) as the package manager
- [Vercel](https://vercel.com/) for deployment

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Run linting
bun run lint
```

## Adding Components

```bash
# Add shadcn/ui components
bunx shadcn-ui@latest add <component>

# Add v0 AI components
bunx v0 add <id>
```

## Links

- Node Repository: [github.com/monmouth/monmouth-node](https://github.com/monmouth/monmouth-node)
- Documentation: [docs.monmouth.io](https://docs.monmouth.io)
- Discord: [discord.gg/monmouth](https://discord.gg/monmouth)
