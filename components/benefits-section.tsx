import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconBrain, IconServer, IconShield } from "@tabler/icons-react"
import { ArrowRight } from "lucide-react"

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

const benefitsItems = [
  {
    title: "Built for AI, not just transactions.",
    description: (
      <div>
        <p>Monmouth provides the first AI-native blockchain infrastructure, enabling real-time execution of neural workloads, on-chain inference, and memory-persistent AI contracts — all without off-chain dependencies.</p>
        <a
          href="#"
          className="inline-flex items-center mt-4 text-sm font-medium text-[#1034A6] hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
        >
          Learn about the technology
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    ),
    header: <Skeleton />,
    icon: <IconBrain className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "md:col-span-3 border-[#FF66CC] hover:border-[#FF66CC]/80 dark:bg-transparent dark:border-[#FF66CC]",
  },
  {
    title: "Neural Execution",
    description:
      "AI agents run directly on-chain, leveraging stateful intelligence with memory-persistent smart contracts that allow AI to recall and adapt, unlike traditional stateless contracts.",
    header: <Skeleton />,
    icon: <IconServer className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "md:col-span-2 border-[#82D173] hover:border-[#82D173]/80 dark:bg-transparent dark:border-[#82D173]",
  },
  {
    title: "Enterprise-Grade Reliability",
    description:
      "Built by infrastructure experts who scaled Verizon's edge computing, Monmouth brings industrial-grade AI performance and enterprise-level reliability to decentralized finance and autonomous apps.",
    header: <Skeleton />,
    icon: <IconShield className="h-4 w-4 text-neutral-500 dark:text-white" />,
    className: "md:col-span-1 border-[#1034A6] hover:border-[#FF66CC]/80 dark:bg-transparent dark:border-zinc-50",
  },
]

export default function BenefitsSection() {
  return (
    <section className="w-full py-10 my-4 mt-20">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 space-y-2">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-[#FF66CC] font-medium text-sm mb-2 w-fit mx-auto">
            Benefits
          </div>
          <div className="flex gap-1.5 flex-col items-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tighter max-w-xl font-medium text-center mb-2">
              Neural <span className="text-[#82d173]">Infrastructure</span> for Web3
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground dark:text-zinc-50 max-w-2xl mx-auto text-center mb-3">
            Monmouth isn&apos;t just adding AI on top of blockchain — it&apos;s <em className="font-bold italic dark:text-zinc-50 text-[#1034A6]">rethinking blockchain for AI</em>. Our neural infrastructure enables <em className="font-bold italic dark:text-zinc-50 text-[#1034A6]">real-time AI execution</em> with sub-250ms finality, setting the foundation for autonomous on-chain intelligence.
          </p>

          <BentoGrid className="w-full mt-6 mb-6 max-w-full">
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
      </div>
    </section>
  )
} 