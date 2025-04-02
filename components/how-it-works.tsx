import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconClock, IconDatabase, IconCode } from "@tabler/icons-react"

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

const howItWorksItems = [
  {
    title: "Execution Extensions (ExEx)",
    description: (
      <div>
        <p>Monmouth&apos;s ExEx modules enable AI-native execution at the blockchain&apos;s core—integrated at the binary level for sub-250ms execution, eliminating JSON-RPC overhead while enabling persistent, memory-aware AI agents to operate on-chain.</p>
        <a
          href="#"
          className="inline-flex items-center mt-4 text-sm font-medium text-[#1034A6] hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
        >
          Learn about the technology
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    ),
    header: <Skeleton />,
    icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "md:col-span-2 border-[#FF66CC] hover:border-[#FF66CC]/80 dark:bg-transparent dark:border-[#FF66CC]",
  },
  {
    title: "Memory-Optimized Storage",
    description:
      "Inspired by QMDB's append-only state model, our storage architecture is optimized for ephemeral AI state management with minimal write amplification and efficient SSD/NVMe utilization.",
    header: <Skeleton />,
    icon: <IconDatabase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "border-[#82D173] hover:border-[#82D173]/80 dark:bg-transparent dark:border-[#82D173]",
  },
  {
    title: "Sub-250ms Finality",
    description:
      "Monmouth's memory-optimized consensus ensures block finality in under 250ms, enabling real-time AI decision-making and responsiveness that traditional blockchains cannot match.",
    header: <Skeleton />,
    icon: <IconClock className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "md:col-span-1 border-[#1034A6] hover:border-[#FF66CC]/80 dark:bg-transparent dark:border-zinc-50",
  },
  {
    title: "Memory-Persistent Contracts",
    description:
      "Monmouth redefines smart contracts with stateful execution—integrating memory persistence and vector embeddings to enable AI agents that recall, learn, and evolve with every transaction.",
    header: <Skeleton />,
    icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "md:col-span-2 border-[#82D173] hover:border-[#82D173]/80 dark:bg-transparent dark:border-[#82D173]",
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-10 my-4 mt-16">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 space-y-2">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-[#FF66CC] font-medium text-sm mb-2 w-fit mx-auto">
            How It Works
          </div>
          <div className="flex gap-1.5 flex-col items-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tighter max-w-xl font-medium text-center mb-2">
              Redefining <span className="text-[#82d173]">Blockchain Execution</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground dark:text-zinc-50 max-w-2xl mx-auto text-center mb-3">
            Monmouth&apos;s neural infrastructure isn&apos;t just another L1—it&apos;s purpose-built for AI agents to operate <em className="font-bold italic dark:text-zinc-50 text-[#1034A6]">autonomously with intelligence</em>, <em className="font-bold italic dark:text-zinc-50 text-[#1034A6]">memory</em>, and <em className="font-bold italic dark:text-zinc-50 text-[#1034A6]">real-time decision-making</em> capabilities.
          </p>

          <BentoGrid className="w-full mt-6 mb-6 max-w-full">
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

          <p className="text-xs md:text-sm text-muted-foreground dark:text-zinc-50 text-center">
            Monmouth&apos;s neural infrastructure enables AI agents to run directly on-chain with <em className="font-bold italic dark:text-zinc-50 text-[#1034A6]">persistent memory</em> and <em className="font-bold italic dark:text-zinc-50 text-[#1034A6]">adaptive state</em>.
          </p>
        </div>
      </div>
    </section>
  )
} 