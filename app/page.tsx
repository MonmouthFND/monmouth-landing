import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorks />
      <FAQSection />
      <Footer />
    </main>
  )
}

