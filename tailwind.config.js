module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", /* Azul petróleo elegante */
        "primary-dark": "#0c1420",
        "primary-light": "#1e293b",
        neutral: "#374151",
        "neutral-light": "#6b7280",
        "neutral-bg": "#f9fafb",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      maxWidth: {
        sm: "24rem", /* 384px */
        md: "28rem", /* 448px */
        lg: "32rem", /* 512px */
        xl: "36rem", /* 576px */
        "2xl": "42rem", /* 672px */
        "3xl": "48rem", /* 768px */
        "4xl": "56rem", /* 896px */
        "5xl": "64rem", /* 1024px */
        "6xl": "72rem", /* 1152px */
        "7xl": "80rem", /* 1280px */
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  safelist: [
    // Cores (bg, text, border, ring)
    { pattern: /^(bg|text|border|ring)-(primary|primary-dark|primary-light|neutral|neutral-light|neutral-bg)$/ },
    { pattern: /^(bg|text|border|ring)-(primary|primary-dark|primary-light|neutral|neutral-light|neutral-bg)$/, variants: ['hover', 'focus'] },

    // Max-widths
    { pattern: /^max-w-(sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)$/ },

    // Espaçamentos (padding, margin, gap)
    { pattern: /^(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|gap)-(xs|sm|md|lg|xl|2xl)$/ },

    // Fontes e tamanhos
    { pattern: /^font-(sans)$/ },
    { pattern: /^text-(base|lg|xl|2xl|3xl|4xl)$/ },

    // Bordas e radius
    { pattern: /^rounded-(sm|md|lg)$/ },

    // Sombras
    { pattern: /^shadow-(sm|md|lg)$/ },
  ],
  plugins: [],
}