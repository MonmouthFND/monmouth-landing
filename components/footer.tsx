import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, MessageSquare, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-card border-t">
      {/* Large CTA */}
      <div className="container px-4 md:px-6 mb-20">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Ready to build?</span>
          <Button
            size="lg"
            className="group rounded-full bg-mint hover:bg-mint-600 text-white text-2xl sm:text-3xl md:text-4xl py-8 sm:py-10 px-12 sm:px-16 h-auto shadow-xl shadow-mint/20 hover:shadow-2xl hover:shadow-mint/30 transition-all"
          >
            <svg className="mr-4 sm:mr-6 h-8 sm:h-10 w-8 sm:w-10 transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-display">Start building</span>
          </Button>
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo */}
            <Link href="#" className="flex items-center group">
              <span className="text-2xl font-display group-hover:text-mint transition-colors">Monmouth</span>
            </Link>

            <p className="text-muted-foreground max-w-sm leading-relaxed">
              The settlement layer for autonomous AI agents. Agent-native consensus. Cross-chain identity. Multi-agent coordination.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <Link href="#" className="p-2.5 rounded-full border-2 border-border/50 text-muted-foreground hover:border-mint hover:text-mint transition-all">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="p-2.5 rounded-full border-2 border-border/50 text-muted-foreground hover:border-mint hover:text-mint transition-all">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="p-2.5 rounded-full border-2 border-border/50 text-muted-foreground hover:border-mint hover:text-mint transition-all">
                <MessageSquare className="w-4 h-4" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="p-2.5 rounded-full border-2 border-border/50 text-muted-foreground hover:border-mint hover:text-mint transition-all">
                <Send className="w-4 h-4" />
                <span className="sr-only">Telegram</span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Newsletter Section */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Stay updated</span>
              <h3 className="text-xl font-display">Join the Monmouth Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Stay up to date with the latest news, announcements and events.
              </p>
              <Button className="w-full sm:w-auto rounded-full bg-foreground text-background hover:bg-foreground/90 px-6">
                Subscribe to newsletter
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-8">
              <nav className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">Navigation</span>
                <Link href="#" className="block text-sm hover:text-mint transition-colors">
                  Home
                </Link>
                <Link href="#" className="block text-sm hover:text-mint transition-colors">
                  Technology
                </Link>
                <Link href="/docs" className="block text-sm hover:text-mint transition-colors">
                  Documentation
                </Link>
              </nav>
              <nav className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">Resources</span>
                <Link href="#" className="block text-sm hover:text-mint transition-colors">
                  Blog
                </Link>
                <Link href="#" className="block text-sm hover:text-mint transition-colors">
                  Newsletter
                </Link>
                <Link href="#" className="block text-sm hover:text-mint transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block text-sm hover:text-mint transition-colors">
                  Cookie Preferences
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Monmouth. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built on <span className="text-mint">Reth</span> · Deployed on <span className="text-rose">Sepolia</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
