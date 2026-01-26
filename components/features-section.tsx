import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

const FeatureImage = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/features/features-1.png"
      alt="Monmouth Features Visualization"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const FeatureImage2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/features/features-2.png"
      alt="Monmouth Performance Visualization"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const FeatureImage3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/features/features-3.png"
      alt="ExEx System"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const FeatureImage4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/features/features-4.png"
      alt="Developer-First SDK"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const FeatureImage5 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <Image
      src="/features/features-5.png"
      alt="Layer 3 Framework"
      fill
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
)

const items = [
  {
    title: "Agent-Aware Wallet SDK",
    description: "Guardrails, spending limits, and policy enforcement for autonomous AI agents to transact safely.",
    header: <FeatureImage />,
    icon: <IconClipboardCopy className="h-4 w-4" />,
    className: "border-mint/50 hover:border-mint dark:border-mint/30 dark:hover:border-mint",
  },
  {
    title: "Built on Reth",
    description: "Extends Reth without forking — ensuring compatibility and zero fork maintenance burden.",
    header: <FeatureImage2 />,
    icon: <IconFileBroken className="h-4 w-4" />,
    className: "border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "ExEx Host Service",
    description: "gRPC streaming of blockchain events with real-time header, block, receipt, and log notifications.",
    header: <FeatureImage3 />,
    icon: <IconSignature className="h-4 w-4" />,
    className: "border-navy/30 hover:border-navy dark:border-white/20 dark:hover:border-white/40",
  },
  {
    title: "Custom Precompiles",
    description:
      "SVM Router for Solana cross-chain operations and L2 Message Passer for L1↔L2 deposits, withdrawals, and messaging.",
    header: <FeatureImage4 />,
    icon: <IconTableColumn className="h-4 w-4" />,
    className: "md:col-span-2 border-rose/50 hover:border-rose dark:border-rose/30 dark:hover:border-rose",
  },
  {
    title: "Prague EVM",
    description: "Latest EVM features with custom precompile extensions for agent-native operations.",
    header: <FeatureImage5 />,
    icon: <IconArrowWaveRightUp className="h-4 w-4" />,
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
            <span className="font-mono text-xs uppercase tracking-widest text-mint">01 / Features</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center max-w-2xl mx-auto leading-tight">
            The <span className="text-mint italic">agent-aware</span> L2 built on Reth
          </h2>

          {/* Subhead */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-center leading-relaxed">
            Purpose-built for AI agents to transact safely.{" "}
            <span className="font-mono text-sm text-navy dark:text-mint">Off-chain reasoning</span>,{" "}
            <span className="font-mono text-sm text-navy dark:text-mint">on-chain settlement</span>.
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
  );
}
