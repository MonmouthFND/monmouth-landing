"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden border-b">
      {/* Background image */}
      <div
        id="dither-canvas"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 dark:opacity-80"
        style={{
          backgroundImage: "url('/monmouth-art-1.png')",
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 dark:opacity-15" />

      {/* News banner */}
      <div className="relative w-full flex justify-center pt-32 pb-8 sm:pt-40 sm:pb-12 z-10">
        <Link
          href="/docs"
          className="group inline-flex items-center gap-3 rounded-full bg-mint/90 backdrop-blur-sm px-5 py-2.5 text-sm text-white transition-all hover:bg-mint hover:gap-4 hover:shadow-lg hover:shadow-mint/25"
        >
          <span className="rounded-full bg-white/20 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider">New</span>
          <span className="font-medium">Introducing Monmouth Foundation</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="container mx-auto px-4 flex-grow flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col justify-center relative">
            {/* Frosted backdrop for legibility */}
            <div className="absolute inset-0 bg-white/70 dark:bg-card/80 backdrop-blur-xl rounded-2xl -m-2 sm:-m-4" />

            <div className="relative z-10 p-6 sm:p-10">
              {/* Monospace label */}
              <div className="flex justify-center mb-6 opacity-0 animate-fade-up">
                <span className="label-mono text-muted-foreground">The chain for agents</span>
              </div>

              {/* Main headline */}
              <h1 className="mb-8 text-center opacity-0 animate-fade-up stagger-1">
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display text-rose leading-[0.9] mb-2">
                  Build for agents.
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display text-foreground leading-[1.1]">
                  Build with Monmouth.
                </span>
              </h1>

              {/* Description */}
              <p className="mb-10 text-lg sm:text-xl text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-2">
                The blockchain with agent-native primitives built in. Identity, reputation, intents, and coordination — at the protocol level.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-up stagger-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-mint hover:bg-mint-600 text-white shadow-lg shadow-mint/25 hover:shadow-xl hover:shadow-mint/30 transition-all px-8 h-12 text-base font-medium"
                >
                  <Link href="/docs/quickstart">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Start building
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-foreground/20 hover:border-mint hover:text-mint bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-all px-8 h-12 text-base font-medium"
                >
                  <Link href="/docs">
                    Read the docs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
