import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

const items = [
  {
    title: "AI-Native Architecture",
    description: "Built from the ground up for AI agent interactions with embedded RAG infrastructure.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "border-[#82D173] hover:border-[#82D173]/80 dark:bg-transparent dark:border-[#82D173]",
  },
  {
    title: "Rust-Powered Performance",
    description: "High-performance Layer 2 implementation with blazing speed and reliability.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "border-[#FF66CC] hover:border-[#FF66CC]/80 dark:bg-transparent dark:border-[#FF66CC]",
  },
  {
    title: "ExEx System",
    description: "Revolutionary execution extension system embedding AI reasoning into the blockchain.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "border-[#1034A6] hover:border-[#82D173]/80 dark:bg-transparent dark:border-zinc-50",
  },
  {
    title: "Developer-First SDK",
    description:
      "A fully modular SDK designed for AI-enhanced smart contracts, enabling developers to embed RAG-powered agents into decentralized applications.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "md:col-span-2 border-[#FF66CC] hover:border-[#FF66CC]/80 dark:bg-transparent dark:border-[#FF66CC]",
  },
  {
    title: "Layer 3 Framework",
    description: "Deploy customized chains with embedded AI infrastructure for your specific needs.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "border-[#82D173] hover:border-[#82D173]/80 dark:bg-transparent dark:border-[#82D173]",
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-10 my-4 mt-20">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 space-y-2">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-[#FF66CC] font-medium text-sm mb-2 w-fit mx-auto">
            Features
          </div>
          <div className="flex gap-1.5 flex-col items-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tighter max-w-xl font-medium text-center mb-2">
              The first <span className="text-[#82d173]">AI-native</span> Layer 2 platform for Ethereum
              </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground dark:text-zinc-50 max-w-2xl mx-auto text-center mb-3">
            Designed from the ground up for AI agent interactions, Monmouth combines <em className="font-bold italic dark:text-zinc-50 text-[#1034A6]">blazing performance</em> with <em className="font-bold italic dark:text-zinc-50 text-[#1034A6]">embedded neural capabilities</em>.
          </p>
          <BentoGrid className="w-full mt-6 mb-6 max-w-full">
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
      </div>
    </section>
  );
} 