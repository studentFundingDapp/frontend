import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  )
}
