"use client"

// import { SparklesText } from "@/components/ui/sparkles-text"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden dark:to-background border-b py-2">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 dark:opacity-90"
        style={{
          backgroundImage: "url('/monmouth-art-1.png')",
        }}
      />
      
      {/* News banner positioned between navbar and hero content */}
      <div className="relative w-full flex justify-center pt-32 pb-12 sm:pt-40 sm:pb-16 z-10">
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

      <div className="container mx-auto px-4 flex-grow flex items-center">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center justify-center max-w-6xl mx-auto pt-4 sm:pt-0 max-[425px]:pt-0">
          {/* <div className="relative aspect-square lg:aspect-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-full blur-3xl" />
            <div className="relative h-full w-full rounded-full bg-purple-100 dark:bg-purple-950/50">
              // This would be where your 3D visualization would go
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/10" />
            </div>
          </div> */}

          <div className="flex flex-col justify-center lg:col-span-2 relative">
            {/* Glassmorphism backdrop for text readability */}
            <div className="absolute inset-0 bg-white/20 dark:bg-black/60 backdrop-blur-md rounded-3xl border border-white/30 dark:border-white/10 shadow-xl -m-4"></div>
            
            <div className="relative z-10 p-6">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-center">
                <span className="block text-[#FF66CC] dark:text-[#FF66CC]">Intelligence at scale.</span>
                <span className="block text-gray-900 dark:text-white">Welcome to Monmouth.</span>
              </h1>
              <p className="mb-8 text-xl text-gray-800 dark:text-gray-100 text-center">
                Monmouth is the <em className="font-bold italic text-[#1034A6] dark:text-blue-300">first AI-native blockchain infrastructure</em>, enabling <em className="font-bold italic text-[#1034A6] dark:text-blue-300">real-time execution</em> for AI agents with <em className="font-bold italic text-[#1034A6] dark:text-blue-300">seamless EVM and SVM compatibility</em>, decentralized security, and <em className="font-bold italic text-[#1034A6] dark:text-blue-300">lightning-fast performance</em>.
              </p>
              <p className="mb-8 text-lg text-gray-700 dark:text-gray-200 text-center">
                Step into the <em className="font-bold italic text-[#1034A6] dark:text-blue-300">next evolution</em> of intelligent blockchain computing.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-[#82d173] hover:bg-[#82d173]/80 dark:text-white shadow-lg">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Start building
                </Button>
                <Button variant="outline" size="lg" className="rounded-full text-[#1034A6] hover:text-[#FF66CC] dark:text-white hover:border-[#FF66CC] dark:border-white/30 hover:bg-pink-100 dark:hover:text-[#FF66CC] bg-white/80 dark:bg-black/40 shadow-lg">
                  How it works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

