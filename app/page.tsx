import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import Bento  from "@/components/bento"
import FAQSection from "@/components/faq"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Bento />
      <FAQSection />
      <Footer />
    </main>
  )
}

