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
                        <AccordionTrigger>What services do you offer?</AccordionTrigger>
                        <AccordionContent>
                            We offer a wide range of digital services including web development, mobile app development, UI/UX design, and digital marketing solutions.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>How can I get started?</AccordionTrigger>
                        <AccordionContent>
                            Getting started is easy! Simply reach out to us through our contact form or send us an email, and our team will get back to you within 24 hours.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>What is your typical process?</AccordionTrigger>
                        <AccordionContent>
                            Our process typically involves an initial consultation, project planning, development phase, testing, and deployment. We maintain clear communication throughout the entire journey.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Do you offer support after project completion?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide ongoing support and maintenance services to ensure your project continues to run smoothly after launch.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default FAQSection 