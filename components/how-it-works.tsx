import { ArrowRight, Database, Clock, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HowItWorks() {
  return (
    <section className="w-full py-24 mt-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 space-y-4">
          <Badge className="w-fit mx-auto border border-[#ff66cc] text-[#ff66cc] bg-transparent">How It Works</Badge>
          <div className="flex gap-2 flex-col items-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
              Redefining <span className="text-[#82d173]">Blockchain Execution</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Monmouth&apos;s neural infrastructure isn&apos;t just another L1—it&apos;s purpose-built for AI agents to operate autonomously with intelligence, memory, and real-time decision-making capabilities.
          </p>

          <div className="space-y-4 max-w-2xl mx-auto mt-12 mb-12 p-6 rounded-lg border bg-background/50 backdrop-blur">
            <h3 className="text-2xl font-bold">Execution Extensions (ExEx)</h3>
            <p className="text-muted-foreground">
              Monmouth&apos;s ExEx modules are built in Rust and integrated at the binary level, allowing AI agents to execute directly at the chain level with near-instantaneous state access and reaction times—eliminating JSON-RPC or external communication overhead.
            </p>
            <Button variant="outline">
              Learn about the technology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
              <Database className="h-12 w-12 text-[#82d173] mb-4" />
              <h3 className="text-xl font-bold mb-2">Memory-Optimized Storage</h3>
              <p className="text-muted-foreground">
                Inspired by QMDB&apos;s append-only state model, our storage architecture is optimized for ephemeral AI state management with minimal write amplification and efficient SSD/NVMe utilization.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
              <Clock className="h-12 w-12 text-[#82d173] mb-4" />
              <h3 className="text-xl font-bold mb-2">Sub-250ms Finality</h3>
              <p className="text-muted-foreground">
                Monmouth&apos;s memory-optimized consensus ensures block finality in under 250ms, enabling real-time AI decision-making and responsiveness that traditional blockchains cannot match.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
              <Layout className="h-12 w-12 text-[#82d173] mb-4" />
              <h3 className="text-xl font-bold mb-2">Memory-Persistent Contracts</h3>
              <p className="text-muted-foreground">
                Unlike traditional stateless contracts, Monmouth introduces persistent execution layers that maintain memory and vector embeddings, allowing AI to learn and adapt over time.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground">
            Monmouth&apos;s neural infrastructure enables AI agents to run directly on-chain with persistent memory and state.
          </p>
        </div>
      </div>
    </section>
  )
} 