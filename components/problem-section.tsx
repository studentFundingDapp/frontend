"use client"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Ban, Clock, FileQuestion, Landmark } from "lucide-react"

export function ProblemSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const problems = [
    {
      icon: <Ban className="h-8 w-8 text-destructive" />,
      title: "Unfair Financial Aid",
      description: "Traditional systems exclude many deserving students based on rigid criteria.",
    },
    {
      icon: <FileQuestion className="h-8 w-8 text-destructive" />,
      title: "Lack of Transparency",
      description: "Donors rarely know how their money is used or who actually benefits.",
    },
    {
      icon: <Clock className="h-8 w-8 text-destructive" />,
      title: "Slow Transactions",
      description: "Conventional scholarship systems involve lengthy delays and high fees.",
    },
    {
      icon: <Landmark className="h-8 w-8 text-destructive" />,
      title: "Limited Showcasing",
      description: "Students lack platforms to highlight achievements and attract support.",
    },
  ]

  return (
    <section id="problem" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/0 via-background/50 to-background/0"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-destructive/5 filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            <span className="text-white">Breaking Barriers in </span>
            <span className="text-primary glow-text">Student Funding</span>
          </h2>
          <p
            className={`text-lg text-foreground/80 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            DSFS addresses critical challenges in education financing, creating a more equitable and transparent system
            for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem cards */}
          {problems.map((problem, index) => (
            <Card
              key={index}
              className={`bg-muted/30 backdrop-blur-sm border border-muted hover:border-primary/30 card-hover transition-all duration-700 delay-${
                300 + index * 100
              } ${inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
            >
              <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="rounded-full bg-background/50 p-3 border border-muted">{problem.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-foreground/70">{problem.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution visualization */}
        <div
          className={`mt-16 md:mt-24 relative max-w-5xl mx-auto transition-all duration-700 delay-700 ${
            inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/30 backdrop-blur-sm rounded-lg border border-muted p-6 flex flex-col items-center">
              <div className="text-foreground/50 mb-4">Traditional System</div>
              <div className="w-full h-48 bg-muted/50 rounded-md flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-destructive mb-2">Complex & Opaque</div>
                  <div className="text-sm text-foreground/50">Slow processing, high fees, limited transparency</div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 backdrop-blur-sm rounded-lg border border-primary/30 p-6 flex flex-col items-center">
              <div className="text-primary mb-4">DSFS Solution</div>
              <div className="w-full h-48 bg-background/50 rounded-md flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-primary mb-2">Transparent & Efficient</div>
                  <div className="text-sm text-foreground/70">
                    AI-driven allocation, blockchain transparency, instant transfers
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
