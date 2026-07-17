/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F8FAFC",
        "bg-level-1": "#FFFFFF",
        "bg-level-2": "#F8FAFC",
        "bg-secondary": "#F1F5F9",
        "bg-tertiary": "#E2E8F0",
        "bg-quaternary": "#CBD5E1",
        "text-primary": "#0F2747",
        "text-secondary": "#243B5A",
        "text-tertiary": "#5E7286",
        "text-quaternary": "#8493A3",
        "border-primary": "#E2E8F0",
        "border-secondary": "#CBD5E1",
        "border-tertiary": "#94A3B8",
        brand: "#CFE3FF",
        "brand-strong": "#2563EB",
        "brand-link": "#1E3A8A",
        "brand-hover": "#EAF2FF",
        navy: "#0F2747",
        blue: "#2F9BD7",
        teal: "#2BBCC6",
        green: "#2F855A",
        yellow: "#B7791F",
        orange: "#C05621",
        red: "#C53030",
      },
      boxShadow: {
        tiny: "0 1px 2px rgba(16, 42, 67, 0.04)",
        low: "0 2px 8px rgba(16, 42, 67, 0.06)",
        medium: "0 8px 24px rgba(16, 42, 67, 0.08)",
        high: "0 16px 36px rgba(16, 42, 67, 0.10)",
      },
      fontFamily: {
        sans: ["Inter", "Geist", "SF Pro Display", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "SF Mono", "ui-monospace", "Menlo", "monospace"],
      },
      borderRadius: {
        panel: "20px",
        control: "12px",
      },
    },
  },
  plugins: [],
};
