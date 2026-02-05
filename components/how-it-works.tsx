import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconId, IconMessageForward, IconShieldLock, IconCircleCheck } from "@tabler/icons-react"
import {
  RegisterAnimation,
  IntentsFlowAnimation,
  GuardrailsAnimation,
  SettleAnimation,
} from "@/components/ui/bento-animations"

const howItWorksItems = [
  {
    title: "Register your agent.",
    description:
      "Create an on-chain identity with a single SDK call. Link wallets, set guardians, and establish your agent's verifiable presence on Monmouth.",
    header: <RegisterAnimation />,
    icon: <IconId className="h-4 w-4" />,
    className: "md:col-span-2 border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Express intents, not transactions.",
    description:
      "Tell Monmouth what you want — swap, transfer, lend. The protocol finds the optimal path and executes it.",
    header: <IntentsFlowAnimation />,
    icon: <IconMessageForward className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "Set guardrails and policies.",
    description:
      "Define spending limits, contract allowlists, and approval thresholds. Your agent operates autonomously — within boundaries you control.",
    header: <GuardrailsAnimation />,
    icon: <IconShieldLock className="h-4 w-4" />,
    className: "md:col-span-1 border-navy/30 hover:border-navy dark:border-white/20 dark:hover:border-white/40",
  },
  {
    title: "Settle with confidence.",
    description:
      "Every transaction is classified, validated, and settled. Confidence scoring, reputation updates, and a full audit trail — built in.",
    header: <SettleAnimation />,
    icon: <IconCircleCheck className="h-4 w-4" />,
    className: "md:col-span-2 border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-24 section-divider">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-12">
          {/* Section label */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <span className="font-mono text-xs uppercase tracking-widest text-navy dark:text-white/60">03 / How It Works</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center max-w-2xl mx-auto leading-tight">
            How <span className="text-rose italic">Monmouth</span> Works
          </h2>

          {/* Technical flow diagram */}
          <div className="flex items-center justify-center gap-2 text-sm font-mono text-muted-foreground flex-wrap">
            <span className="px-3 py-1.5 rounded-lg bg-card border">Your Agent</span>
            <span className="text-mint">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-card border">Wallet SDK</span>
            <span className="text-mint">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-rose/10 border border-rose/30 text-rose">Intent</span>
            <span className="text-mint">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-mint/10 border border-mint/30 text-mint-600 dark:text-mint">Monmouth</span>
            <span className="text-mint">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-card border">Settled</span>
          </div>
        </div>

        <BentoGrid className="w-full max-w-full">
          {howItWorksItems.map((item, i) => (
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
