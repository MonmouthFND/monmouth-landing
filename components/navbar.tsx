"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Cross2Icon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-background/70 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg shadow-black/5">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-2 border-mint text-mint hover:bg-mint hover:text-white transition-all md:hidden font-medium"
          >
            <Link href="/docs/quickstart">Start building</Link>
          </Button>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-2 border-mint text-mint hover:bg-mint hover:text-white transition-all font-medium"
            >
              <Link href="/docs/quickstart">Start building</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-muted"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center justify-center">
              <Image
                src="/monmouth-logo.png"
                alt="Monmouth Logo"
                width={48}
                height={48}
                className="dark:invert"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden hover:bg-muted"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              className="rounded-full hover:bg-muted font-medium"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="ml-2 hidden md:inline font-mono text-xs uppercase tracking-wider">Menu</span>
            </Button>
          </div>
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

function MenuOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl mx-auto",
        "bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl",
        "transition-all duration-500 ease-out overflow-hidden",
        isOpen ? "translate-y-0 opacity-100 max-h-[90vh]" : "-translate-y-4 opacity-0 max-h-0 pointer-events-none",
      )}
    >
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-10">
          <Button asChild variant="outline" className="rounded-full border-2 border-mint text-mint hover:bg-mint hover:text-white transition-all font-medium">
            <Link href="/docs/quickstart">Start building</Link>
          </Button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center justify-center">
              <Image
                src="/monmouth-logo.png"
                alt="Monmouth Logo"
                width={36}
                height={36}
                className="dark:invert"
              />
            </div>
          </div>

          <Button variant="ghost" className="rounded-full hover:bg-muted font-medium" onClick={onClose}>
            <Cross2Icon className="h-5 w-5" />
            <span className="ml-2 font-mono text-xs uppercase tracking-wider">Close</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 block">Navigation</span>
            <nav className="space-y-4">
              <a href="#" className="block text-3xl sm:text-4xl font-display hover:text-mint transition-colors">
                Home
              </a>
              <a href="/docs" className="block text-3xl sm:text-4xl font-display hover:text-mint transition-colors">
                Documentation
              </a>
              <a href="/docs/quickstart" className="block text-3xl sm:text-4xl font-display hover:text-mint transition-colors">
                Quickstart
              </a>
            </nav>

            <div className="mt-12">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">Resources</span>
              <nav className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Newsletter
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 block">Featured</span>
            <div className="space-y-4">
              <a href="/docs" className="group block p-6 rounded-xl bg-mint text-white hover:shadow-lg hover:shadow-mint/25 transition-all">
                <h3 className="text-xl font-display mb-3">Explore Monmouth Docs</h3>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  Read the docs
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="rounded-full border-2 hover:border-mint hover:text-mint transition-all">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-2 hover:border-mint hover:text-mint transition-all">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-2 hover:border-mint hover:text-mint transition-all">
                Discord
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-2 hover:border-mint hover:text-mint transition-all">
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
