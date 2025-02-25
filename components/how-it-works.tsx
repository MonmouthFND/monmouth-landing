import { ArrowRight, Database, Clock, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HowItWorks() {
  return (
    <section className="w-full py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 space-y-4">
          <Badge className="w-fit mx-auto border border-[#ff66cc] text-[#ff66cc] bg-transparent">How It Works</Badge>
          <div className="flex gap-2 flex-col items-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
              Redesigning the <span className="text-[#82d173]">EVM</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Monad is a redesign of both the consensus and execution systems of Ethereum that preserves compatibility for
            EVM smart contracts and Ethereum's RPC API.
          </p>

          <div className="space-y-4 max-w-2xl mx-auto mt-12 mb-12 p-6 rounded-lg border bg-background/50 backdrop-blur">
            <h3 className="text-2xl font-bold">Optimistic Parallel Execution</h3>
            <p className="text-muted-foreground">
              Monad employs optimistic parallel execution, executing transactions in parallel before previous ones are
              completed. Results are committed in the original order and checked against the current state to ensure
              accuracy.
            </p>
            <Button variant="outline">
              Learn about the technology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
              <Database className="h-12 w-12 text-[#82d173] mb-4" />
              <h3 className="text-xl font-bold mb-2">State access with MonadDB</h3>
              <p className="text-muted-foreground">
                A custom database for storing blockchain state, using Patricia Trie data structure, both on-disk and
                in-memory— reducing hardware requirements.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
              <Clock className="h-12 w-12 text-[#82d173] mb-4" />
              <h3 className="text-xl font-bold mb-2">Asynchronous Execution</h3>
              <p className="text-muted-foreground">
                Execution is decoupled from consensus, allowing single-shard blockchain to scale to millions of users.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
              <Layout className="h-12 w-12 text-[#82d173] mb-4" />
              <h3 className="text-xl font-bold mb-2">Single-slot Finality</h3>
              <p className="text-muted-foreground">
                A high-performance POS consensus mechanism with 1s block times on MonadDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 