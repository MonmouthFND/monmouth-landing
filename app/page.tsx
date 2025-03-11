import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />
      
      <section id="hero" className="snap-start min-h-screen w-full flex items-center justify-center">
        <div className="w-full">
          <Hero />
        </div>
      </section>
      
      <section id="features" className="snap-start min-h-screen w-full flex items-center justify-center">
        <div className="w-full">
          <FeaturesSection />
        </div>
      </section>
      
      <section id="benefits" className="snap-start min-h-screen w-full flex items-center justify-center">
        <div className="w-full">
          <BenefitsSection />
        </div>
      </section>
      
      <section id="how-it-works" className="snap-start min-h-screen w-full flex items-center justify-center">
        <div className="w-full">
          <HowItWorks />
        </div>
      </section>
      
      <section id="faq" className="snap-start min-h-screen w-full flex items-center justify-center">
        <div className="w-full">
          <FAQSection />
        </div>
      </section>
      
      <section id="footer" className="snap-end min-h-screen w-full flex items-center justify-center">
        <div className="w-full">
          <Footer />
        </div>
      </section>
    </div>
  )
}

