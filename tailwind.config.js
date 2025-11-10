/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/components/**/*Base.tsx",
    "./src/components/**/*.css",
    "!./src/components/**/styles.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a" /* Azul petróleo elegante */,
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
        sm: "24rem" /* 384px */,
        md: "28rem" /* 448px */,
        lg: "32rem" /* 512px */,
        xl: "36rem" /* 576px */,
        "2xl": "42rem" /* 672px */,
        "3xl": "48rem" /* 768px */,
        "4xl": "56rem" /* 896px */,
        "5xl": "64rem" /* 1024px */,
        "6xl": "72rem" /* 1152px */,
        "7xl": "80rem" /* 1280px */,
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
  plugins: [require("tailwindcss-animate")],
  safelist: [
    // === DISPLAY ===
    { pattern: /^(block|inline-block|inline|hidden)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^(flex|inline-flex)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^(grid|inline-grid)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },

    // === CORES (tema customizado) ===
    {
      pattern:
        /^(bg|text|border|ring)-(primary|primary-dark|primary-light|neutral|neutral-light|neutral-bg)$/,
    },
    {
      pattern:
        /^(bg|text|border|ring)-(primary|primary-dark|primary-light|neutral|neutral-light|neutral-bg)$/,
      variants: ["hover", "focus", "active", "sm", "md", "lg", "xl", "2xl"],
    },

    // === LARGURAS / ALTURAS / SIZE ===
    {
      pattern: /^(w|h|size)-(4|6|8|10|12|16|20|24|32|40|48|56|64)$/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
    { pattern: /^(w|h|size)-(auto|full|screen)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^min-w-(full|screen)$/ },
    { pattern: /^min-h-(full|screen)$/ },
    { pattern: /^max-w-(sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)$/ },
    { pattern: /^max-h-(sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)$/ },

    // === GAP & SPACE ===
    {
      pattern: /^(gap|gap-x|gap-y)-(0|1|2|3|4|5|6|8|10|12|16|20|24|32)$/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
    {
      pattern: /^(space-x|space-y)-(0|1|2|3|4|5|6|8|10|12|16|20|24|32)$/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },

    // === ESPAÇAMENTOS ===
    {
      pattern: /^(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml)-(xs|sm|md|lg|xl|2xl|auto)$/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
    {
      pattern: /^(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml)-(0|1|2|3|4|5|6|8|10|12|16|20|24|32)$/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },

    // === TIPOGRAFIA ===
    { pattern: /^font-(sans|serif|mono)$/ },
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^text-(left|center|right|justify)$/ },
    { pattern: /^(italic|not-italic)$/ },
    { pattern: /^(underline|line-through|no-underline)$/ },
    { pattern: /^(uppercase|lowercase|capitalize)$/ },
    { pattern: /^(truncate|text-ellipsis|whitespace-nowrap)$/ },

    // === BACKGROUND & EFFECTS ===
    { pattern: /^opacity-(0|25|50|75|100)$/ },

    // === LAYOUT & DISPLAY ===
    { pattern: /^overflow-(auto|hidden|visible|scroll)$/ },
    { pattern: /^overflow-(x|y)-(auto|hidden|visible|scroll)$/ },
    { pattern: /^object-(contain|cover|fill|none|scale-down|center|top|bottom|left|right)$/ },
    { pattern: /^aspect-(auto|square|video)$/ },

    // === POSITION & Z-INDEX ===
    { pattern: /^(absolute|relative|fixed|sticky)$/ },
    { pattern: /^z-(0|10|20|30|40|50)$/ },
    { pattern: /^inset-(0|1|2|4|8|10|12|16|20)$/ },
    { pattern: /^inset-(x|y)-(0|1|2|4|8|10|12|16|20)$/ },

    // Posicionamento individual com responsividade
    { pattern: /^top-(0|1|2|4|8|10|12|16|20)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^bottom-(0|1|2|4|8|10|12|16|20)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^left-(0|1|2|4|8|10|12|16|20)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^right-(0|1|2|4|8|10|12|16|20)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },

    // === CURSOR & INTERATIVIDADE ===
    { pattern: /^cursor-(auto|default|pointer|wait|text|move|not-allowed)$/ },
    { pattern: /^select-(none|text|all|auto)$/ },
    { pattern: /^pointer-events-(none|auto)$/ },

    // === TRANSIÇÕES & ANIMAÇÕES ===
    { pattern: /^transition(-(none|all|colors|opacity|shadow|transform))?$/ },
    { pattern: /^duration-(75|100|150|200|300|500|700|1000)$/ },
    { pattern: /^ease-(linear|in|out|in-out)$/ },
    { pattern: /^animate-(spin|ping|bounce|pulse)$/ },

    // === FLEX / GRID ===
    { pattern: /^(flex|inline-flex)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^flex-(row|col|wrap|nowrap|wrap-reverse)$/ },
    { pattern: /^(items|justify|content|self)-(start|end|center|between|around|stretch)$/ },
    { pattern: /^(grid|inline-grid)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^grid-cols-(1|2|3|4|5|6|12)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /^grid-rows-(1|2|3|4|6)$/, variants: ["sm", "md", "lg", "xl", "2xl"] },

    // === STATE/ANIMAÇÕES USADAS COM data-[state=*] ===
    { pattern: /^(animate-(in|out))$/ },
    { pattern: /^fade-(in|out)-(0|50|100)$/ },
    { pattern: /^slide-in-from-(left|right|top|bottom)$/ },
    { pattern: /^slide-out-to-(left|right|top|bottom)$/ },
    { pattern: /^zoom-in-95$/ },
    { pattern: /^zoom-out-95$/ },

    // === TRANSITION / TIMING ===
    { pattern: /^transition(-(none|all|colors|opacity|shadow|transform))?$/ },
    { pattern: /^duration-(75|100|150|200|300|500|700|1000)$/ },
    { pattern: /^ease-(linear|in|out|in-out)$/ },
    { pattern: /^delay-(75|100|150|200|300|500)$/ },

    // === TRANSFORM / OPACITY / TRANSLATE (para animações) ===
    { pattern: /^transform$/ },
    { pattern: /^opacity-(0|25|50|75|100)$/ },
    { pattern: /^translate-x-(0|full)$/ },
    { pattern: /^translate-y-(0|full)$/ },
    { pattern: /^will-change-(transform|opacity)$/ },
  ],
};
