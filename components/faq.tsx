"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";


const FAQSection = () => {
    return (
        <section className="container mx-auto px-4 py-16 space-y-4">
            <div className="flex justify-center">
                <Badge className="w-fit border border-[#ff66cc] text-[#ff66cc] bg-transparent">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col items-center">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is Monmouth&apos;s neural infrastructure?</AccordionTrigger>
                        <AccordionContent>
                            Monmouth&apos;s neural infrastructure is a purpose-built L2 blockchain architecture designed specifically for AI agents to operate autonomously. Our infrastructure integrates AI execution capabilities at the binary level, enabling intelligent agents with persistent memory and real-time decision-making capabilities directly on-chain.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>How do Execution Extensions (ExEx) work?</AccordionTrigger>
                        <AccordionContent>
                            Execution Extensions (ExEx) are core modules that enable AI-native execution at the blockchain&apos;s binary level. They eliminate traditional JSON-RPC overhead, achieving sub-250ms execution times while allowing memory-aware AI agents to operate directly on-chain with persistent state and intelligence.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>What makes Monmouth different from other L2 solutions?</AccordionTrigger>
                        <AccordionContent>
                            Unlike traditional L2s that focus primarily on scaling transactions, Monmouth is designed from the ground up for AI operations. Our memory-optimized storage, sub-250ms finality, and persistent memory contracts allow AI agents to recall, learn, and evolve with each transaction. This creates an environment where AI can operate autonomously with both intelligence and state persistence while benefiting from L2 scalability.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>How does Monmouth achieve such fast finality?</AccordionTrigger>
                        <AccordionContent>
                            Monmouth achieves sub-250ms finality through our innovative memory-optimized consensus mechanism. Our L2 storage architecture is inspired by QMDB&apos;s append-only state model, which minimizes write amplification and optimizes for SSD/NVMe utilization. This approach eliminates the bottlenecks found in traditional blockchains, enabling real-time AI decision-making and responsiveness.
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5">
                        <AccordionTrigger>What are memory-persistent contracts?</AccordionTrigger>
                        <AccordionContent>
                            Memory-persistent contracts redefine traditional smart contracts by integrating stateful execution capabilities. These contracts incorporate both memory persistence and vector embeddings, allowing AI agents to maintain context, recall past interactions, learn from experiences, and evolve with every transaction. This creates a fundamentally more intelligent contract layer on our L2 than what&apos;s possible on conventional blockchains.
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-6">
                        <AccordionTrigger>How does Monmouth connect to Ethereum?</AccordionTrigger>
                        <AccordionContent>
                            As an L2 solution, Monmouth inherits the security guarantees of Ethereum while providing specialized infrastructure for AI agent operations. We leverage Ethereum for settlement and security while offering a highly optimized execution environment with sub-250ms finality, memory persistence, and AI-native capabilities that aren&apos;t possible on the base layer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default FAQSection 