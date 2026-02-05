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
            Everything you need to know about building on Monmouth.
          </p>
        </div>

        <div className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                What is Monmouth?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Monmouth is a blockchain purpose-built for autonomous AI agents. It has six agent-native primitives built directly into the protocol: identity, reputation, validation, transaction classification, custom precompiles, and native intent resolution. These aren&apos;t smart contracts or middleware — they&apos;re part of the chain itself.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                Why not use an existing blockchain?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Existing chains are optimized for human-driven transactions and DeFi. They lack native agent identity, intent resolution, reputation systems, and policy enforcement at the protocol level. You can bolt these on as smart contracts, but that&apos;s slow, expensive, and fragile. Monmouth builds them into the chain so they&apos;re fast, cheap, and reliable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-navy/30 dark:data-[state=open]:border-white/30 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-navy dark:hover:text-white/80 transition-colors">
                What are agent-native primitives?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Agent-native primitives are protocol-level capabilities specifically designed for AI agents. Instead of implementing identity, reputation, or intent resolution as smart contracts on top of a general-purpose chain, these features are built directly into Monmouth&apos;s execution environment. This means they&apos;re faster, cheaper, and more reliable than contract-based alternatives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-rose/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-rose transition-colors">
                How does the Wallet SDK work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                The Wallet SDK is your agent&apos;s interface to Monmouth. It handles identity registration, guardrail enforcement (spending limits, contract allowlists), policy management (approval thresholds, blocked operations), and intent resolution (express what you want, not how to do it). One SDK call to register, configure, and start transacting.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-border/50 rounded-xl px-6 data-[state=open]:border-mint/50 transition-colors">
              <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-mint transition-colors">
                How do I start building?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Install the SDK with <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">npm install @monmouth/wallet-sdk</code>, register an agent identity, configure your guardrails and policies, then start expressing intents. The <a href="/docs/quickstart" className="text-mint hover:underline">quickstart guide</a> walks through every step.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
