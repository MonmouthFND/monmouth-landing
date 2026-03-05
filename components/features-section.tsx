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
    description: "A typed catalog of every tool an agent can call. Schemas, permissions, and rate limits — enforced at the protocol level.",
    header: <IdentityAnimation />,
    icon: <IconFingerprint className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "Policy Engine",
    description: "Spending caps, rate limits, allowlists, and confirmation flags. Your agent operates autonomously — within boundaries you define.",
    header: <ValidationAnimation />,
    icon: <IconShieldCheck className="h-4 w-4" />,
    className: "border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Delegation & Session Keys",
    description: "Scoped, time-limited session keys with secp256k1 crypto. Grant an agent authority to act on your behalf without sharing private keys.",
    header: <ReputationAnimation />,
    icon: <IconKey className="h-4 w-4" />,
    className: "border-navy/30 hover:border-navy dark:border-white/20 dark:hover:border-white/40",
  },
  {
    title: "Intent Receipts",
    description:
      "Every agent declares what it intends before it acts. The chain records the declared intent alongside the actual outcome — a verifiable audit trail.",
    header: <IntentAnimation />,
    icon: <IconFileDescription className="h-4 w-4" />,
    className: "border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Dual-VM Execution",
    description: "Run EVM and SVM side by side in the same block. Deploy Solidity or Solana programs — one chain, two execution environments.",
    header: <PrecompilesAnimation />,
    icon: <IconHexagons className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "Multi-Agent Coordination",
    description:
      "Native job posting, escrow, and multi-party settlement. Agents find work, collaborate, and get paid — without middleware.",
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
            Agent-native. <span className="text-mint italic">Protocol-level.</span>
          </h2>

          {/* Subhead */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-center leading-relaxed">
            Twelve native modules built directly into the chain. Not smart contracts. Not middleware. Protocol.
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
