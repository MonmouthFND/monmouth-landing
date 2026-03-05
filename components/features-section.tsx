import {
  IconFingerprint,
  IconShieldCheck,
  IconKey,
  IconFileDescription,
  IconHexagons,
  IconMessageForward,
} from "@tabler/icons-react"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  IdentityAnimation,
  ValidationAnimation,
  PrecompilesAnimation,
  IntentAnimation,
  ClassificationAnimation,
  ReputationAnimation,
} from "@/components/ui/bento-animations"

const items = [
  {
    title: "Capability Registry",
    description: "Agents discover and invoke tools through a standardized, permissioned catalog — the API layer for the agent economy. Every tool has a typed schema, access rules, and rate limits.",
    header: <IdentityAnimation />,
    icon: <IconFingerprint className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "Policy Engine",
    description: "Your agent can't spend more than you allow. Spending caps, rate limits, and contract allowlists — checked before every transaction, not after.",
    header: <ValidationAnimation />,
    icon: <IconShieldCheck className="h-4 w-4" />,
    className: "border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Delegation & Session Keys",
    description: "Give your agent a scoped key with a budget and an expiration. It can act on your behalf — but never beyond the boundaries you set.",
    header: <ReputationAnimation />,
    icon: <IconKey className="h-4 w-4" />,
    className: "border-navy/30 hover:border-navy dark:border-white/20 dark:hover:border-white/40",
  },
  {
    title: "Intent Receipts",
    description:
      "The chain records what your agent promised to do alongside what it actually did. Every action is auditable, every outcome is provable.",
    header: <IntentAnimation />,
    icon: <IconFileDescription className="h-4 w-4" />,
    className: "border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Dual-VM Execution",
    description: "Deploy Solidity or Solana programs on the same chain. EVM and SVM run side by side in every block — no bridges, no workarounds.",
    header: <PrecompilesAnimation />,
    icon: <IconHexagons className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "Multi-Agent Coordination",
    description:
      "Agents find work, collaborate, and get paid. Native job posting, escrow, and settlement — no middleware required.",
    header: <ClassificationAnimation />,
    icon: <IconMessageForward className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-24 section-divider">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-12">
          {/* Section label */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <span className="font-mono text-xs uppercase tracking-widest text-mint">01 / Native Modules</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center max-w-2xl mx-auto leading-tight">
            Everything agents need. <span className="text-mint italic">Built in.</span>
          </h2>

          {/* Subhead */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-center leading-relaxed">
            Twelve modules built directly into the chain — not bolted on as smart contracts. Everything an agent needs to act, spend, delegate, coordinate, and prove its work.
          </p>
        </div>

        <BentoGrid className="w-full max-w-full">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
