import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core surface palette
        ink: {
          DEFAULT: "#0A0E1A",
          900: "#0A0E1A",
          800: "#111729",
          700: "#1B2235",
          600: "#2A3148",
          500: "#404863",
          400: "#6B7390",
          300: "#9AA0B8",
          200: "#C4C8D8",
          100: "#E6E8F0",
          50: "#F5F6FA",
        },
        // Brand navy — anchors authority
        navy: {
          DEFAULT: "#0B1B3D",
          900: "#050B1F",
          800: "#0B1B3D",
          700: "#142A5C",
          600: "#1F3D7A",
          500: "#2E5299",
          400: "#5377BD",
          300: "#8AA5D6",
        },
        // Electric accent — the "data SaaS" signal
        electric: {
          DEFAULT: "#3D5AFE",
          600: "#2640F5",
          500: "#3D5AFE",
          400: "#6E80FF",
          300: "#A0AFFF",
          200: "#D0D8FF",
          100: "#EAEEFF",
        },
        // Service-disabled veteran owned — used as a subtle credential color
        flag: {
          red: "#B91C2C",
          gold: "#C8A24B",
        },
      },
      fontFamily: {
        // Display: editorial-feeling serif for headlines
        display: ["var(--font-display)", "Georgia", "serif"],
        // Body: technical sans
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Mono: data tables, metrics
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.75rem, 5.5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(11,27,61,0.04) 0%, rgba(11,27,61,0) 100%)",
        "electric-glow":
          "radial-gradient(circle at 50% 0%, rgba(61,90,254,0.18) 0%, transparent 60%)",
        "ink-glow":
          "radial-gradient(circle at 50% 50%, rgba(11,27,61,0.7) 0%, #050B1F 80%)",
      },
      boxShadow: {
        sharp: "0 1px 0 0 rgba(11,27,61,0.06), 0 12px 32px -12px rgba(11,27,61,0.18)",
        elevated: "0 24px 48px -16px rgba(11,27,61,0.22)",
        electric: "0 0 0 1px rgba(61,90,254,0.4), 0 8px 24px -8px rgba(61,90,254,0.5)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "ticker": "ticker 40s linear infinite",
        "pulse-soft": "pulseSoft 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
