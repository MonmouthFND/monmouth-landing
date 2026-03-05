import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconBrain, IconUserScan, IconRocket } from "@tabler/icons-react"
import {
  PurposeBuiltAnimation,
  KnowAgentsAnimation,
  ShipFasterAnimation,
} from "@/components/ui/bento-animations"

const benefitsItems = [
  {
    title: "Purpose-built, not retrofitted.",
    description:
      "General-purpose chains bolt on agent features as afterthoughts. Monmouth has capabilities, delegation, policies, and coordination built into the chain from day one — not layered on top.",
    header: <PurposeBuiltAnimation />,
    icon: <IconBrain className="h-4 w-4" />,
    className: "md:col-span-3 border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Every agent has a track record.",
    description:
      "Intent receipts, attestations, and memory anchoring create a verifiable history for every agent. What it declared, what it did, and what it remembered — transparent and on-chain.",
    header: <KnowAgentsAnimation />,
    icon: <IconUserScan className="h-4 w-4" />,
    className: "md:col-span-2 border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "You build the brain. We handle the rest.",
    description:
      "Your LLM handles reasoning and planning. The chain handles execution, policy enforcement, and settlement. Write agent logic, not infrastructure.",
    header: <ShipFasterAnimation />,
    icon: <IconRocket className="h-4 w-4" />,
    className: "md:col-span-1 border-navy/30 hover:border-navy dark:border-white/20 dark:hover:border-white/40",
  },
]

export default function BenefitsSection() {
  return (
    <section className="w-full py-24 section-divider">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-12">
          {/* Section label */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <span className="font-mono text-xs uppercase tracking-widest text-rose">02 / Why Monmouth</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center max-w-2xl mx-auto leading-tight">
            Agents need more than <span className="text-rose italic">gas</span>
          </h2>

          {/* Subhead — the best line, elevated */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-center leading-relaxed">
            General-purpose chains were designed for humans clicking buttons. Monmouth is designed for autonomous software that never sleeps.
          </p>
        </div>

        <BentoGrid className="w-full max-w-full">
          {benefitsItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className || ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
