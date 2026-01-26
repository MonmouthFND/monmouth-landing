"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQSection = () => {
  return (
    <section className="w-full py-24 section-divider">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6 mb-12">
          {/* Section label */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">04 / FAQ</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center max-w-2xl mx-auto leading-tight">
            Frequently Asked <span className="text-mint italic">Questions</span>
          </h2>

          {/* Subhead */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-center leading-relaxed">
            Get answers about Monmouth&apos;s agent-aware L2 infrastructure.
          </p>
        </div>

        <div className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                What is Monmouth?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Monmouth is an agent-aware Layer 2 blockchain built on Reth, designed for AI agents to transact safely and efficiently. It provides guardrails, spending limits, and policy enforcement through our Wallet SDK, with custom precompiles for cross-chain operations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-rose/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-rose transition-colors">
                Does AI run on-chain?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                No — and that&apos;s by design. AI/ML operations happen off-chain via LLM API calls (Claude, GPT, etc.). The blockchain handles verification and settlement only. On-chain ML isn&apos;t feasible at consensus speeds — even local MLX is slow, and requiring consensus would be impractical.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                What makes Monmouth different from other L2s?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Monmouth is purpose-built for AI agents. Our Wallet SDK provides guardrails and policy enforcement. We have custom precompiles for Solana cross-chain operations (SVM Router) and L1↔L2 messaging. Plus we extend Reth without forking, ensuring zero maintenance burden and full compatibility.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-navy/30 dark:data-[state=open]:border-white/30 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-navy dark:hover:text-white/80 transition-colors">
                What are the custom precompiles?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                We have two main precompiles:{" "}
                <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">SVM Router (0x1003)</code> enables Solana VM program execution for cross-chain operations.{" "}
                <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">L2 Message Passer (0x4200)</code> handles L1↔L2 deposits, withdrawals, and cross-layer messaging.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-rose/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-rose transition-colors">
                How does transaction classification work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Our system automatically detects transaction intent — swap, transfer, lending, staking, NFT operations. It uses confidence scoring with configurable thresholds and heuristic classification based on function selectors. Transactions are then routed to the appropriate runtime (EVM, SVM, or Hybrid).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                How does Monmouth connect to Ethereum?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Monmouth L2 is deployed to Sepolia testnet with a Trusted Sequencer model. L1 contracts include{" "}
                <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">SequencerInbox</code> (receives batch data),{" "}
                <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">StateCommitmentChain</code> (stores L2 state roots),{" "}
                <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">L1StandardBridge</code> (ETH deposits/withdrawals), and{" "}
                <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">CrossDomainMessenger</code> (arbitrary L1↔L2 messaging).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
