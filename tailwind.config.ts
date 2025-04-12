import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00D4FF", // Neon blue
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#9900FF", // Electric purple
          foreground: "hsl(var(--secondary-foreground))",
        },
        silver: {
          DEFAULT: "#C0C0C0", // Silver
          light: "#E0E0E0",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        roboto: ["var(--font-roboto)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px #00D4FF, 0 0 30px rgba(0, 212, 255, 0.2)" },
          "50%": { boxShadow: "0 0 25px #00D4FF, 0 0 50px rgba(0, 212, 255, 0.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 3s infinite",
        float: "float 6s infinite ease-in-out",
        glow: "glow 3s infinite",
        shimmer: "shimmer 2s infinite linear",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          'linear-gradient(to bottom, rgba(10, 15, 42, 0.8), rgba(10, 15, 42, 1)), url("/placeholder.svg?height=1080&width=1920")',
        "grid-pattern":
          "linear-gradient(to right, rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 212, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
