"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Globe, Rocket, Shield, Zap } from "lucide-react"

export function BenefitsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const benefits = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Fair & AI-Powered",
      description: "Unbiased fund allocation via AI classification ensures every deserving student gets support.",
      color: "primary",
    },
    {
      icon: <Zap className="h-10 w-10 text-secondary" />,
      title: "Fast & Low-Cost",
      description: "Near-instant transfers with minimal fees via Stellar blockchain technology.",
      color: "secondary",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Transparent & Accountable",
      description: "Every transaction is logged on the blockchain for complete visibility and trust.",
      color: "primary",
    },
    {
      icon: <Rocket className="h-10 w-10 text-secondary" />,
      title: "Achievement Recognition",
      description: "Students can showcase progress and attract direct sponsorships based on merit.",
      color: "secondary",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Empowerment",
      description: "Accessible to students and donors worldwide, breaking down geographical barriers.",
      color: "primary",
    },
  ]

  return (
    <section id="benefits" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/0 via-background/50 to-background/0"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-secondary/5 filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            <span className="text-white">Why DSFS </span>
            <span className="text-primary glow-text">Stands Out</span>
          </h2>
          <p
            className={`text-lg text-foreground/80 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            Our platform combines cutting-edge technology with a mission to democratize education funding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`bg-muted/30 backdrop-blur-sm border border-${benefit.color}/20 hover:border-${benefit.color}/50 card-hover transition-all duration-700 delay-${
                300 + index * 100
              } ${inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`rounded-full bg-${benefit.color}/10 p-4 mb-4 border border-${benefit.color}/30`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison chart */}
        <div
          className={`mt-20 max-w-4xl mx-auto transition-all duration-700 delay-800 ${
            inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="bg-muted/30 backdrop-blur-sm rounded-lg border border-muted p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">DSFS vs Traditional Funding</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-muted">
                    <th className="text-left py-3 px-4">Feature</th>
                    <th className="text-center py-3 px-4">Traditional Systems</th>
                    <th className="text-center py-3 px-4 text-primary">DSFS Platform</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 px-4 text-foreground/80">Processing Time</td>
                    <td className="py-3 px-4 text-center text-foreground/60">Weeks to Months</td>
                    <td className="py-3 px-4 text-center text-primary">Minutes</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 px-4 text-foreground/80">Transaction Fees</td>
                    <td className="py-3 px-4 text-center text-foreground/60">High (3-5%)</td>
                    <td className="py-3 px-4 text-center text-primary">Minimal (&lt;0.1%)</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 px-4 text-foreground/80">Transparency</td>
                    <td className="py-3 px-4 text-center text-foreground/60">Limited</td>
                    <td className="py-3 px-4 text-center text-primary">Complete</td>
                  </tr>
                  <tr className="border-b border-muted/50">
                    <td className="py-3 px-4 text-foreground/80">Selection Process</td>
                    <td className="py-3 px-4 text-center text-foreground/60">Often Biased</td>
                    <td className="py-3 px-4 text-center text-primary">AI-Driven & Fair</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground/80">Global Accessibility</td>
                    <td className="py-3 px-4 text-center text-foreground/60">Geographically Limited</td>
                    <td className="py-3 px-4 text-center text-primary">Worldwide</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
