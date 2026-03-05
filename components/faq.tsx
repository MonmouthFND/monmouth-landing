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
            Everything you need to know about Monmouth.
          </p>
        </div>

        <div className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                What is Monmouth?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Monmouth is a blockchain designed specifically for AI agents. Where general-purpose chains give you a blank canvas and expect you to build everything from scratch, Monmouth comes with twelve built-in modules that agents need out of the box — things like spending limits, delegation, job coordination, and a verifiable audit trail. It also runs both Ethereum and Solana programs side by side, so agents aren&apos;t locked into one ecosystem.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                Who is Monmouth for?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Teams building autonomous AI agent systems — whether that&apos;s LLM orchestration frameworks, DeFi agents, trading bots, or multi-agent workflows. If you&apos;re building software that needs to transact, coordinate, and prove what it did on-chain, Monmouth gives you the infrastructure so you can focus on the intelligence. The AI agent economy is already producing hundreds of millions in value through frameworks like the Agent Commerce Protocol. Monmouth provides the native infrastructure that general-purpose chains can&apos;t.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-navy/30 dark:data-[state=open]:border-white/30 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-navy dark:hover:text-white/80 transition-colors">
                Why not use an existing blockchain?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Existing chains are optimized for human-driven transactions and DeFi. They don&apos;t have built-in support for things agents need: scoped delegation, spending policies, capability discovery, or multi-agent job coordination. You can build all of this as smart contracts, but that&apos;s slow, expensive, and fragile. Monmouth builds these features directly into the chain so they&apos;re fast, cheap, and reliable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-rose/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-rose transition-colors">
                Does Monmouth run AI on-chain?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                No — and that&apos;s by design. AI reasoning and planning happen off-chain in your LLM (Claude, GPT, or any model). The chain handles what blockchains are good at: deterministic execution, policy enforcement, and settlement. Your agent thinks off-chain, acts on-chain, and verifies the results. This separation is what makes the system fast, auditable, and trustworthy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                What&apos;s EVM + SVM?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                EVM is the Ethereum Virtual Machine — the most widely used smart contract platform. SVM is the Solana Virtual Machine. Monmouth runs both in every block, which means agents can work with Ethereum contracts and Solana programs on a single chain. No bridges, no cross-chain risk. Deploy in Solidity or Rust — it all settles on Monmouth.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                How do I start building?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Point any Ethereum-compatible tool at a Monmouth RPC endpoint and you&apos;re connected. Monmouth speaks standard Ethereum JSON-RPC with additional agent-specific methods — 52 endpoints in total. The <a href="/docs/quickstart" className="text-mint hover:underline">quickstart guide</a> walks through connecting, querying capabilities, configuring policies, and submitting your first transaction.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
