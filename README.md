# Monmouth Landing Page

Marketing site for [Monmouth L2 Node](https://github.com/monmouth/monmouth-node) - an agent-aware Layer 2 blockchain built on Reth, designed for AI agents to transact safely and efficiently.

## What is Monmouth?

Monmouth is an L2 blockchain purpose-built for AI agents:

- **Agent-Aware Wallet SDK**: Guardrails, spending limits, and policy enforcement for autonomous AI agents
- **Off-Chain AI, On-Chain Settlement**: AI/ML happens via LLM API calls; blockchain handles verification and settlement
- **Custom Precompiles**: SVM Router for Solana cross-chain, L2 Message Passer for L1↔L2 bridging
- **L2 Sequencer**: Production-ready sequencer with batch compression and L1 data availability
- **Prague EVM**: Latest EVM features with custom precompile extensions
- **No Fork Maintenance**: Extends Reth without forking, ensuring compatibility

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
