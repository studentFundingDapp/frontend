"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with hexagon grid */}
      <div className="absolute inset-0 hexagon-grid opacity-20"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            <span className="text-white">Empowering Education with </span>
            <span className="text-primary glow-text">AI</span>
            <span className="text-white"> & </span>
            <span className="text-secondary glow-purple-text">Blockchain</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            The Decentralized Student Fund System (DSFS) connects students with donors transparently, fairly, and
            instantly—powered by Stellar Blockchain and AI.
          </p>

          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow animate-pulse">
              Join DSFS Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-silver/50 text-silver hover:border-silver hover:text-white"
            >
              Donate Today
            </Button>
          </div>

          {/* Animated fund flow visualization */}
          <div
            className={`relative h-64 md:h-80 mt-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="absolute left-0 right-0 top-0 bottom-0">
              <FundFlowAnimation />
            </div>
          </div>

          {/* Stellar logo */}
          <div
            className={`mt-8 flex justify-center items-center transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            <span className="text-sm text-foreground/60 mr-2">Powered by</span>
            <div className="text-primary font-bold">Stellar Blockchain</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-[float_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  )
}

function FundFlowAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-between px-4 md:px-12">
      {/* Donor side */}
      <div className="relative z-10 bg-muted/30 backdrop-blur-sm p-4 rounded-lg border border-muted w-32 md:w-48 h-32 md:h-48 flex flex-col items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/20 border border-secondary/50 mb-2 flex items-center justify-center">
          <span className="text-xl md:text-2xl">👤</span>
        </div>
        <span className="text-sm md:text-base font-medium text-foreground/90">Donors</span>
      </div>

      {/* Flow animation */}
      <div className="flex-1 relative h-full flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-primary to-primary"></div>

        {/* Animated particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 h-2 w-2 rounded-full bg-primary animate-pulse"
            style={{
              left: `${i * 20}%`,
              animationDelay: `${i * 0.2}s`,
              animation: "moveRight 3s infinite linear",
              transform: "translateY(-50%)",
            }}
          ></div>
        ))}
      </div>

      {/* Student side */}
      <div className="relative z-10 bg-muted/30 backdrop-blur-sm p-4 rounded-lg border border-muted w-32 md:w-48 h-32 md:h-48 flex flex-col items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 border border-primary/50 mb-2 flex items-center justify-center">
          <span className="text-xl md:text-2xl">🎓</span>
        </div>
        <span className="text-sm md:text-base font-medium text-foreground/90">Students</span>
      </div>

      <style jsx>{`
        @keyframes moveRight {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
