"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQSection = () => {
    return (
        <section className="w-full py-10 my-4 mt-16">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col gap-2 space-y-2">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-[#FF66CC] font-medium text-sm mb-2 w-fit mx-auto">
                        FAQ
                    </div>
                    <div className="flex gap-1.5 flex-col items-center">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tighter max-w-xl font-medium text-center mb-2">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-center mb-3">
                        Get answers to common questions about Monmouth&apos;s neural infrastructure and blockchain technology.
                    </p>
                    <div className="w-full max-w-3xl mx-auto mt-6">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b border-neutral-200 dark:border-neutral-700">
                                <AccordionTrigger className="text-left font-medium text-base py-4">What is Monmouth&apos;s neural infrastructure?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Monmouth&apos;s neural infrastructure is a purpose-built L2 blockchain architecture designed specifically for AI agents to operate autonomously. Our infrastructure integrates AI execution capabilities at the binary level, enabling intelligent agents with persistent memory and real-time decision-making capabilities directly on-chain.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border-b border-neutral-200 dark:border-neutral-700">
                                <AccordionTrigger className="text-left font-medium text-base py-4">How do Execution Extensions (ExEx) work?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Execution Extensions (ExEx) are core modules that enable AI-native execution at the blockchain&apos;s binary level. They eliminate traditional JSON-RPC overhead, achieving sub-250ms execution times while allowing memory-aware AI agents to operate directly on-chain with persistent state and intelligence.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border-b border-neutral-200 dark:border-neutral-700">
                                <AccordionTrigger className="text-left font-medium text-base py-4">What makes Monmouth different from other L2 solutions?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Unlike traditional L2s that focus primarily on scaling transactions, Monmouth is designed from the ground up for AI operations. Our memory-optimized storage, sub-250ms finality, and persistent memory contracts allow AI agents to recall, learn, and evolve with each transaction. This creates an environment where AI can operate autonomously with both intelligence and state persistence while benefiting from L2 scalability.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border-b border-neutral-200 dark:border-neutral-700">
                                <AccordionTrigger className="text-left font-medium text-base py-4">How does Monmouth achieve such fast finality?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Monmouth achieves sub-250ms finality through our innovative memory-optimized consensus mechanism. Our L2 storage architecture is inspired by QMDB&apos;s append-only state model, which minimizes write amplification and optimizes for SSD/NVMe utilization. This approach eliminates the bottlenecks found in traditional blockchains, enabling real-time AI decision-making and responsiveness.
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="item-5" className="border-b border-neutral-200 dark:border-neutral-700">
                                <AccordionTrigger className="text-left font-medium text-base py-4">What are memory-persistent contracts?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Memory-persistent contracts redefine traditional smart contracts by integrating stateful execution capabilities. These contracts incorporate both memory persistence and vector embeddings, allowing AI agents to maintain context, recall past interactions, learn from experiences, and evolve with every transaction. This creates a fundamentally more intelligent contract layer on our L2 than what&apos;s possible on conventional blockchains.
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="item-6" className="border-b border-neutral-200 dark:border-neutral-700">
                                <AccordionTrigger className="text-left font-medium text-base py-4">How does Monmouth connect to Ethereum?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    As an L2 solution, Monmouth inherits the security guarantees of Ethereum while providing specialized infrastructure for AI agent operations. We leverage Ethereum for settlement and security while offering a highly optimized execution environment with sub-250ms finality, memory persistence, and AI-native capabilities that aren&apos;t possible on the base layer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection 