import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BenefitsSection() {
  return (
    <section className="w-full py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 space-y-4">
          <Badge className="w-fit mx-auto border border-[#ff66cc] text-[#ff66cc] bg-transparent">Benefits</Badge>
          <div className="flex gap-2 flex-col items-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
              Neural <span className="text-[#82d173]">Infrastructure</span> for Web3
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            While others merely add AI as a feature, Monmouth is building the first true neural infrastructure layer—blockchain native and AI-first, enabling real-time AI decision-making with sub-250ms finality.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4 p-6 rounded-lg border bg-background/50 backdrop-blur">
              <h3 className="text-2xl font-bold">Built for AI, not just transactions.</h3>
              <p className="text-muted-foreground">
                Monmouth offers true AI-native blockchain infrastructure, capable of full neural workloads directly at block-time, powering embedded AI agents with real-time inference, autonomous operation, and intelligent consensus.
              </p>
              <Button variant="outline" className="mt-4">
                Learn about the technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-8">
              <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Neural Execution</h3>
                <p className="text-muted-foreground">
                  AI agents run directly on-chain, leveraging stateful intelligence with memory-persistent smart contracts that allow AI to recall and adapt, unlike traditional stateless contracts.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Enterprise-Grade Reliability</h3>
                <p className="text-muted-foreground">
                  Built by infrastructure experts who scaled Verizon's edge computing, Monmouth brings industrial-grade AI performance and enterprise-level reliability to decentralized finance and autonomous apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 