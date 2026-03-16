import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crystal: {
          rose: "#D4A0B0",
          blush: "#E8C4CF",
          silver: "#C8C0D0",
          chrome: "#B8B0C8",
        },
        slate: {
          50: "#F5F3FA",
          100: "#E8E4F0",
          200: "#C8C2D8",
          300: "#A099B4",
          400: "#7B728F",
          500: "#5E5674",
          600: "#3D3652",
          700: "#2A2538",
          800: "#1E1A2A",
          900: "#16131F",
          950: "#0F0D15",
        },
        prismatic: {
          cyan: "#40E0D0",
          blue: "#7B8FE8",
        },
        lavender: {
          DEFAULT: "#C9B8E8",
          bright: "#DBC8FF",
        },
        verdant: "#6CAA5C",
        solar: "#E8C84A",
        "warm-white": "#FAF8F5",
        paper: "#F2F0EC",
      },
      fontFamily: {
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
