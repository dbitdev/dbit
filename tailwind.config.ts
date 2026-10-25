import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "#0a0a16",
        "surface-2": "#0d0d1c",
        navy: {
          50: "#eef2f8",
          100: "#cbd6e8",
          200: "#9fb2d0",
          300: "#6f8bb0",
          400: "#4a6690",
          500: "#324b70",
          600: "#1f3355",
          700: "#141f38",
          800: "#0c1526",
          900: "#080e1a",
          950: "#04070d",
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "\"SF Pro Display\"", "var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "-apple-system", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 8px 24px -8px rgba(0,0,0,0.5)",
        "glow-lg": "0 16px 40px -12px rgba(0,0,0,0.55)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
