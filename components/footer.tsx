import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, Linkedin, MessageSquare, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-background border-t">
      <div className="container px-4 md:px-6 mb-8">
        <div className="flex flex-col items-center text-center">
          <Button size="lg" className="rounded-full bg-[#82d173] hover:bg-[#82d173]/80 text-5xl py-12 px-24 h-auto">
            <svg className="mr-6 h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Start building
          </Button>
        </div>
      </div>

      <div className="container grid gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Logo */}
          <Link href="#" className="flex items-center">
            {/* <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
              <path d="M60 8L68 16L60 24L52 16L60 8Z" fill="#FF66CC" />
            </svg> */}
            <span className="text-xl font-bold -ml-2">Monmouth</span>
          </Link>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <MessageSquare className="w-5 h-5" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Send className="w-5 h-5" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Join the Monmouth Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay up to date with the latest news, announcements and events.
            </p>
            <div className="space-y-2">
              <Button variant="secondary" className="w-full">
                Subscribe to the Monmouth Newsletter
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <nav className="space-y-2">
              <Link href="#" className="block text-sm hover:underline">
                Home
              </Link>
              <Link href="#" className="block text-sm hover:underline">
                Technology
              </Link>
            </nav>
            <nav className="space-y-2">
              <Link href="#" className="block text-sm hover:underline">
                Blog
              </Link>
              <Link href="#" className="block text-sm hover:underline">
                Newsletter
              </Link>
              <Link href="#" className="block text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-sm hover:underline">
                Cookie Preferences
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

