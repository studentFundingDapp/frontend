"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary glow-text">DSFS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#problem" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Problem
            </Link>
            <Link href="#how-it-works" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#benefits" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Benefits
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-silver/50 text-silver hover:border-silver hover:text-white"
                onClick={() => window.location.href = "https://dsfsbuildcheck.vercel.app/"}
              >
                Donate Today
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow"
                onClick={() => window.location.href = "https://dsfsbuildcheck.vercel.app/"}
              >
                Join DSFS Now
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link
              href="#problem"
              className="block py-2 text-foreground/80 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Problem
            </Link>
            <Link
              href="#how-it-works"
              className="block py-2 text-foreground/80 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#benefits"
              className="block py-2 text-foreground/80 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button
                variant="outline"
                className="w-full border-silver/50 text-silver hover:border-silver hover:text-white"
                onClick={() => {
                  setIsMenuOpen(false)
                  window.location.href = "https://dsfsbuildcheck.vercel.app/role-selection"
                }}
              >
                Donate Today
              </Button>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow"
                onClick={() => {
                  setIsMenuOpen(false)
                  window.location.href = "https://dsfsbuildcheck.vercel.app/role-selection"
                }}
              >
                Join DSFS Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
