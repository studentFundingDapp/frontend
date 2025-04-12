"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Coins, Landmark, LineChart, User, Users } from "lucide-react"

export function HowItWorksSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const [activeTab, setActiveTab] = useState("students")

  return (
    <section id="how-it-works" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/0 via-background/50 to-background/0"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-secondary/5 filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            <span className="text-white">A Transparent, Fair, and </span>
            <span className="text-primary glow-text">Fast Funding Ecosystem</span>
          </h2>
          <p
            className={`text-lg text-foreground/80 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}
          >
            DSFS leverages blockchain technology and AI to create a seamless connection between students and donors.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          }`}
        >
          <Tabs defaultValue="students" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="students"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                For Students
              </TabsTrigger>
              <TabsTrigger
                value="donors"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                For Donors
              </TabsTrigger>
            </TabsList>

            <TabsContent value="students" className="mt-0">
              <div className="bg-muted/30 backdrop-blur-sm rounded-lg border border-muted p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-primary">Student Journey</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Sign Up</h4>
                          <p className="text-sm text-foreground/70">
                            Create an account and get categorized by our AI agent based on financial need
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">AI Classification</h4>
                          <p className="text-sm text-foreground/70">
                            Our AI system fairly categorizes students based on need and merit
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Coins className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Receive Funding</h4>
                          <p className="text-sm text-foreground/70">
                            Get funds directly to your Stellar wallet based on AI allocation or direct sponsorship
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <LineChart className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Track Progress</h4>
                          <p className="text-sm text-foreground/70">
                            Share milestones and achievements to attract additional sponsorship
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-md h-80 bg-background/50 rounded-lg border border-muted p-4 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-10 bg-background/80 border-b border-muted flex items-center px-4">
                        <div className="w-3 h-3 rounded-full bg-destructive mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <div className="text-xs text-foreground/70 ml-2">Student Dashboard</div>
                      </div>
                      <div className="mt-12 grid grid-cols-2 gap-4">
                        <div className="bg-primary/10 rounded-md p-3 border border-primary/20">
                          <div className="text-xs text-primary/70 mb-1">Wallet Balance</div>
                          <div className="text-lg font-semibold">2,450 XLM</div>
                        </div>
                        <div className="bg-secondary/10 rounded-md p-3 border border-secondary/20">
                          <div className="text-xs text-secondary/70 mb-1">Funding Status</div>
                          <div className="text-lg font-semibold">Active</div>
                        </div>
                        <div className="col-span-2 bg-muted/30 rounded-md p-3 border border-muted">
                          <div className="text-xs text-foreground/70 mb-1">Recent Transactions</div>
                          <div className="space-y-2 mt-2">
                            <div className="flex justify-between text-xs">
                              <span>Scholarship Fund</span>
                              <span className="text-primary">+500 XLM</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Direct Sponsor</span>
                              <span className="text-primary">+250 XLM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="donors" className="mt-0">
              <div className="bg-muted/30 backdrop-blur-sm rounded-lg border border-muted p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-secondary">Donor Journey</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Users className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Choose How to Donate</h4>
                          <p className="text-sm text-foreground/70">
                            Contribute to the general fund or sponsor specific students directly
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Landmark className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Easy Payments</h4>
                          <p className="text-sm text-foreground/70">
                            Donate in KSH via Stellar's path-to-path system, automatically converted to XLM
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <LineChart className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Track Impact</h4>
                          <p className="text-sm text-foreground/70">
                            Monitor how your donations are distributed and the progress of sponsored students
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Brain className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">AI-Driven Allocation</h4>
                          <p className="text-sm text-foreground/70">
                            Trust our AI system to distribute funds fairly based on student needs
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-md h-80 bg-background/50 rounded-lg border border-muted p-4 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-10 bg-background/80 border-b border-muted flex items-center px-4">
                        <div className="w-3 h-3 rounded-full bg-destructive mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <div className="text-xs text-foreground/70 ml-2">Donor Dashboard</div>
                      </div>
                      <div className="mt-12 grid grid-cols-2 gap-4">
                        <div className="bg-secondary/10 rounded-md p-3 border border-secondary/20">
                          <div className="text-xs text-secondary/70 mb-1">Total Donated</div>
                          <div className="text-lg font-semibold">15,000 KSH</div>
                        </div>
                        <div className="bg-primary/10 rounded-md p-3 border border-primary/20">
                          <div className="text-xs text-primary/70 mb-1">Students Supported</div>
                          <div className="text-lg font-semibold">12</div>
                        </div>
                        <div className="col-span-2 bg-muted/30 rounded-md p-3 border border-muted">
                          <div className="text-xs text-foreground/70 mb-1">Impact Tracking</div>
                          <div className="space-y-2 mt-2">
                            <div className="flex justify-between text-xs">
                              <span>General Fund</span>
                              <span className="text-secondary">10,000 KSH</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Direct Sponsorships</span>
                              <span className="text-secondary">5,000 KSH</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Stellar Integration */}
        <div
          className={`mt-16 max-w-5xl mx-auto bg-gradient-to-r from-background via-primary/5 to-background p-6 rounded-lg border border-primary/20 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Powered by Stellar Blockchain</h3>
              <p className="text-sm text-foreground/70 max-w-md">
                Fast, secure, and low-cost transactions with complete transparency and global accessibility
              </p>
            </div>
            <div className="flex items-center justify-center bg-background/50 p-4 rounded-full border border-primary/20">
              <div className="text-primary font-bold text-xl">Stellar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
