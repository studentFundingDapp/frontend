import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-muted/20 py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hexagon-grid opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col">
              <Link href="/" className="text-2xl font-bold text-primary glow-text mb-4">
                DSFS
              </Link>
              <p className="text-sm text-foreground/70 mb-4 max-w-xs">
                The Decentralized Student Fund System connects students with donors transparently, fairly, and
                instantly.
              </p>
              <div className="flex space-x-4 mt-2">
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    About DSFS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    For Students
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    For Donors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Blockchain Explorer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DSFS. All rights reserved.
          </div>

          <div className="flex items-center">
            <div className="text-sm text-foreground/60 mr-2">Built on</div>
            <Link
              href="https://stellar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium flex items-center"
            >
              Stellar Blockchain
            </Link>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-foreground/60 max-w-xs text-center md:text-right">
            Secure transactions protected by Stellar's blockchain technology
          </div>
        </div>
      </div>
    </footer>
  )
}
