"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background"></div>

      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary animate-pulse particle"></div>
      <div
        className="absolute top-3/4 left-1/3 w-3 h-3 rounded-full bg-secondary animate-pulse particle"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-primary animate-pulse particle"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-secondary animate-pulse particle"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 p-8 md:p-12">
          <div className="text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
                inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <span className="text-white">Join the Education </span>
              <span className="text-primary glow-text">Revolution</span>
            </h2>
            <p
              className={`text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              Imagine a world where financial barriers don't stop dreams. With DSFS, students get fair funding, and
              donors see real impact. Be part of the change!
            </p>

            <div
              className={`flex flex-col sm:flex-row justify-center gap-4 mb-8 transition-all duration-700 delay-400 ${
                inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow animate-pulse"
                onClick={() => window.location.href = "https://dsfsbuildcheck.vercel.app/role-selection"}
              >
                Sign Up Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-silver/50 text-silver hover:border-silver hover:text-white"
                onClick={() => window.location.href = "https://dsfsbuildcheck.vercel.app/role-selection"}
              >
                Make an Impact—Donate Now
              </Button>
            </div>

            <div
              className={`transition-all duration-700 delay-600 ${
                inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              <div className="relative h-64 md:h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary/30 animate-pulse flex items-center justify-center">
                    <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-secondary/30 animate-pulse flex items-center justify-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/50 border border-silver/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-primary font-bold">Global</div>
                          <div className="text-secondary font-bold">Impact</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
