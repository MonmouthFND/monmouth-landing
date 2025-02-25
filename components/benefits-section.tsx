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
              Reinventing the <span className="text-[#82d173]">Layer 1</span> Blockchain
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Monad ushers in a new paradigm of blockchain technology. Rebuilt from the ground up to be the most efficient
            chain in the world— all while being 100% EVM compatible.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4 p-6 rounded-lg border bg-background/50 backdrop-blur">
              <h3 className="text-2xl font-bold">Work and play with what you've got.</h3>
              <p className="text-muted-foreground">
                With Monad, developers, users, and researchers can reuse the wealth of existing applications, libraries,
                addresses and applied cryptography research that have all been built for the EVM.
              </p>
              <Button variant="outline" className="mt-4">
                Learn about the technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-8">
              <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Extreme Scalability</h3>
                <p className="text-muted-foreground">
                  Take advantage of 10,000 TPS, 1s block times, 1s single-slot finality and near zero gas fees for extreme
                  scalability while maintaining your existing Solidity codebase.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-background/50 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Scalable Decentralization</h3>
                <p className="text-muted-foreground">
                  Monad's low hardware requirements allow consumer-grade hardware to sufficiently run nodes— creating a
                  clear path to decentralization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 