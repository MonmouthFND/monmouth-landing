"use client"

// import { SparklesText } from "@/components/ui/sparkles-text"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative pt-32 pb-32 overflow-hidden dark:to-background border-b">
      <div className="absolute top-32 left-1/2 -translate-x-1/2">
        <a
          href="#"
          className="inline-flex items-center rounded-full bg-[#82d173] px-6 py-2 text-sm text-white hover:bg-[#82d173]/80"
        >
          <span className="mr-2 rounded-full bg-white/20 px-2 py-0.5">News</span>
          Introducing: Monmouth Foundation
          <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="relative aspect-square lg:aspect-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-full blur-3xl" />
            <div className="relative h-full w-full rounded-full bg-purple-100 dark:bg-purple-950/50">
              {/* This would be where your 3D visualization would go */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/10" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-[#FF66CC] dark:text-[#FF66CC]">Intelligence at scale.</span>
              <span className="block">Welcome to Monmouth.</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground dark:text-white">
            Monmouth delivers unparalleled EVM compatibility, combining cutting-edge performance, genuine decentralization, robust security, and exceptional throughput.
            </p>
            <p className="mb-8 text-lg text-muted-foreground dark:text-white">Embrace a new era of blockchain innovation.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-[#82d173] hover:bg-[#82d173]/80 dark:text-white">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Start building
              </Button>
              <Button variant="outline" size="lg" className="rounded-full dark:border-[#FF66CC]">
                How it works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

