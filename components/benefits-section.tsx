import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconBrain, IconServer, IconShield } from "@tabler/icons-react"
import { ArrowRight } from "lucide-react"
import Image from "next/image";

const BenefitsImage = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/benefits/benefits-1.png"
      alt="Built for AI, not just transactions."
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const BenefitsImage2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/benefits/benefits-2.png"
      alt="Built for AI, not just transactions."
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const BenefitsImage3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/benefits/benefits-3.png"
      alt="Built for AI, not just transactions."
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const benefitsItems = [
  {
    title: "Built for AI agents, not just transactions.",
    description: (
      <div>
        <p className="mb-4">Monmouth separates concerns: LLMs handle reasoning and planning off-chain, while the blockchain handles verification and settlement. The Wallet SDK enforces guardrails so agents can operate autonomously within safe boundaries.</p>
        <a
          href="#"
          className="group/link inline-flex items-center gap-2 text-sm font-medium text-navy dark:text-mint hover:gap-3 transition-all"
        >
          Learn about the architecture
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
        </a>
      </div>
    ),
    header: <BenefitsImage />,
    icon: <IconBrain className="h-4 w-4" />,
    className: "md:col-span-3 border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Transaction Classification",
    description:
      "Automatic intent detection for swaps, transfers, lending, staking, and NFT operations. Confidence scoring with configurable thresholds and multi-runtime routing across EVM, SVM, and hybrid environments.",
    header: <BenefitsImage2 />,
    icon: <IconServer className="h-4 w-4" />,
    className: "md:col-span-2 border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "Production-Ready Sequencer",
    description:
      "L2 sequencer with batch compression, L1 data availability, configurable block time, and state root management for reliable operation.",
    header: <BenefitsImage3 />,
    icon: <IconShield className="h-4 w-4" />,
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
            <span className="font-mono text-xs uppercase tracking-widest text-rose">02 / Benefits</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center max-w-2xl mx-auto leading-tight">
            Agent <span className="text-mint italic">Infrastructure</span> for Web3
          </h2>

          {/* Subhead */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-center leading-relaxed">
            AI agents need{" "}
            <span className="font-mono text-sm text-navy dark:text-mint">guardrails</span>, not just gas.
            Infrastructure for agents to operate safely across chains.
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
