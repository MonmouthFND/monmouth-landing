"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Cross2Icon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-md rounded-full border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full dark:border-white">
              Start building
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
              <path d="M60 8L68 16L60 24L52 16L60 8Z" fill="#FF66CC" />
              {/* <text x="75" y="22" className="text-xl font-bold">
                MONMOUTH
              </text> */}
            </svg>
          </div>

          <Button variant="ghost" className="rounded-full" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="ml-2">MENU</span>
          </Button>
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
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl mx-auto",
        "bg-background/80 backdrop-blur-md rounded-3xl border border-gray-200 shadow-lg",
        "transition-all duration-500 overflow-auto",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
      )}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" className="rounded-full">
            Start building
          </Button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
              <path d="M60 8L68 16L60 24L52 16L60 8Z" fill="#FF66CC" />
              {/* <text x="75" y="22" className="text-xl font-bold">
                MONMOUTH
              </text> */}
            </svg>
          </div>

          <Button variant="ghost" className="rounded-full" onClick={onClose}>
            <Cross2Icon className="h-6 w-6" />
            <span className="ml-2">CLOSE</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-medium mb-6">Navigation</h2>
            <nav className="space-y-4">
              <a href="#" className="block text-3xl font-semibold hover:text-[#82d173]">
                Home
              </a>
              <a href="#" className="block text-3xl font-semibold hover:text-[#82d173]">
                Technology
              </a>
              <a href="#" className="block text-3xl font-semibold hover:text-[#82d173]">
                Documentation
              </a>
            </nav>

            <div className="mt-12">
              <h3 className="font-medium mb-4">Resources</h3>
              <nav className="space-y-2">
                <a href="#" className="block hover:text-[#82d173]">
                  Blog
                </a>
                <a href="#" className="block hover:text-[#82d173]">
                  Newsletter
                </a>
                <a href="#" className="block hover:text-[#82d173]">
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-6">Featured Blogs</h2>
            <div className="space-y-4">
              <a href="#" className="block p-6 rounded-xl bg-[#82d173] text-white">
                <h3 className="text-xl font-semibold mb-4">Introducing: Monmouth Foundation</h3>
                <span className="inline-flex items-center">
                  Read post
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="mt-12 space-x-4">
              <Button variant="outline" size="sm" className="rounded-full">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Discord
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

