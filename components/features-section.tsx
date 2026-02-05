import {
  IconFingerprint,
  IconChartBar,
  IconShieldCheck,
  IconCategory,
  IconHexagons,
  IconMessageForward,
} from "@tabler/icons-react"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  IdentityAnimation,
  ReputationAnimation,
  ValidationAnimation,
  ClassificationAnimation,
  PrecompilesAnimation,
  IntentAnimation,
} from "@/components/ui/bento-animations"

const items = [
  {
    title: "Agent Identity",
    description: "Every agent gets a permanent, verifiable identity. One ID that works everywhere — no more anonymous wallets.",
    header: <IdentityAnimation />,
    icon: <IconFingerprint className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "Reputation System",
    description: "Agents build trust over time. Every transaction adds to a public track record that other agents and protocols can check.",
    header: <ReputationAnimation />,
    icon: <IconChartBar className="h-4 w-4" />,
    className: "border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Validation Framework",
    description: "Before an agent is trusted to do something, it has to prove it can. Built-in capability checks, not just permissions.",
    header: <ValidationAnimation />,
    icon: <IconShieldCheck className="h-4 w-4" />,
    className: "border-navy/30 hover:border-navy dark:border-white/20 dark:hover:border-white/40",
  },
  {
    title: "Transaction Classification",
    description:
      "Monmouth automatically understands what each transaction is trying to do — swap, transfer, lend — and routes it accordingly.",
    header: <ClassificationAnimation />,
    icon: <IconCategory className="h-4 w-4" />,
    className: "border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Custom Precompiles",
    description: "Specialized operations baked directly into the chain. Faster and cheaper than anything you could build with a smart contract.",
    header: <PrecompilesAnimation />,
    icon: <IconHexagons className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "Native Intents",
    description:
      "Tell Monmouth what you want, not how to get it. Say \"swap 1 ETH for USDC\" and the chain figures out the rest.",
    header: <IntentAnimation />,
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
            <span className="font-mono text-xs uppercase tracking-widest text-mint">01 / Primitives</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center max-w-2xl mx-auto leading-tight">
            Agent-native. <span className="text-mint italic">Protocol-level.</span>
          </h2>

          {/* Subhead */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-center leading-relaxed">
            Six primitives built directly into the chain. Not smart contracts. Not middleware. Protocol.
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
