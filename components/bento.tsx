import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    Icon: FileTextIcon,
    name: "AI-Native Architecture",
    description: "Built from the ground up for AI agent interactions with embedded RAG infrastructure.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Rust-Powered Performance",
    description: "High-performance Layer 2 implementation with blazing speed and reliability.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "ExEx System",
    description: "Revolutionary execution extension system embedding AI reasoning into the blockchain.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Developer-First SDK",
    description: "Comprehensive tools and templates for building AI-enhanced DApps.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Layer 3 Framework",
    description: "Deploy customized chains with embedded AI infrastructure for your specific needs.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function Bento() {
  return (
    <section className="w-full py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 space-y-4">
          <Badge className="w-fit mx-auto border border-[#ff66cc] text-[#ff66cc] bg-transparent">Features</Badge>
          <div className="flex gap-2 flex-col items-center">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
              The first <span className="text-[#82d173]">AI-native</span> Layer 2 platform for Ethereum
              </h2>
          </div>
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
} 