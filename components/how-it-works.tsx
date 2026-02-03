import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconClock, IconDatabase, IconCode } from "@tabler/icons-react"
import { ArrowRight } from "lucide-react"
import Image from "next/image";

const HowItWorksImage = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/how-it-works/how-it-works-1.png"
      alt="Execution Extensions (ExEx)"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const HowItWorksImage2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/how-it-works/how-it-works-2.png"
      alt="Memory-Optimized Storage"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const HowItWorksImage3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/how-it-works/how-it-works-3.png"
      alt="Sub-250ms Finality"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const HowItWorksImage4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/how-it-works/how-it-works-4.png"
      alt="Memory-Persistent Contracts"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const howItWorksItems = [
  {
    title: "Off-Chain AI, On-Chain Settlement",
    description: (
      <div>
        <p className="mb-4">AI agents connect to LLMs (Claude, GPT, etc.) for reasoning and planning off-chain. The Wallet SDK enforces guardrails and policies. Monmouth handles the settlement and verification — because on-chain ML isn&apos;t feasible at consensus speeds.</p>
        <a
          href="#"
          className="group/link inline-flex items-center gap-2 text-sm font-medium text-navy dark:text-mint hover:gap-3 transition-all"
        >
          Read the architecture docs
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
        </a>
      </div>
    ),
    header: <HowItWorksImage />,
    icon: <IconCode className="h-4 w-4" />,
    className: "md:col-span-2 border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "ExEx Host Service",
    description:
      "gRPC streaming of blockchain events — real-time headers, blocks, receipts, and logs. Health monitoring, service discovery, and configurable filtering for building reactive agent systems.",
    header: <HowItWorksImage2 />,
    icon: <IconDatabase className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "L1 Integration",
    description:
      "Deployed to Sepolia with SequencerInbox, StateCommitmentChain, L1StandardBridge, and CrossDomainMessenger contracts for deposits, withdrawals, and cross-layer messaging.",
    header: <HowItWorksImage3 />,
    icon: <IconClock className="h-4 w-4" />,
    className: "md:col-span-1 border-navy/30 hover:border-navy dark:border-white/20 dark:hover:border-white/40",
  },
  {
    title: "Custom Precompiles",
    description:
      "SVM Router (0x1003) for Solana VM program execution and cross-chain operations. Message Passer (0x4200) for Ethereum deposits, withdrawals, and cross-layer messaging.",
    header: <HowItWorksImage4 />,
    icon: <IconCode className="h-4 w-4" />,
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
            <span className="font-mono text-xs uppercase tracking-widest text-navy dark:text-white/60">03 / Architecture</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center max-w-2xl mx-auto leading-tight">
            How <span className="text-rose italic">Monmouth</span> Works
          </h2>

          {/* Technical flow diagram */}
          <div className="flex items-center justify-center gap-2 text-sm font-mono text-muted-foreground flex-wrap">
            <span className="px-3 py-1.5 rounded-lg bg-card border">AI Agent</span>
            <span className="text-mint">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-card border">Wallet SDK</span>
            <span className="text-mint">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-rose/10 border border-rose/30 text-rose">LLM API</span>
            <span className="text-mint">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-card border">Tool calls</span>
            <span className="text-mint">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-mint/10 border border-mint/30 text-mint-600 dark:text-mint">Monmouth</span>
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

        {/* Footer note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Built on Reth without forking —{" "}
          <span className="font-mono text-xs text-navy dark:text-mint">zero maintenance burden</span>,{" "}
          <span className="font-mono text-xs text-navy dark:text-mint">full compatibility</span>.
        </p>
      </div>
    </section>
  )
}
