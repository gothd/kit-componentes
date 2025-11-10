import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  css: {
    postcss: "./postcss.config.js", // garante que o PostCSS seja usado
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@components/ui": path.resolve(__dirname, "src/components/ui"),
      "@wc": path.resolve(__dirname, "src/wc"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"), // o CSS é gerado em production
    "import.meta.env.VITE_SHEET": JSON.stringify("global"),
  },
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/wc/kit-componentes.ts"),
      name: "KitComponentes",
      formats: ["iife"], // 👈 gera um único arquivo que se autoexecuta e registra tudo no window
      fileName: () => "kit-componentes.js",
    },
    outDir: process.env.COMPONENTS_ENV === "playground" ? "public" : "dist/wc",
    emptyOutDir: false,
    rollupOptions: {
      // React e ReactDOM ficam embutidos no bundle
    },
  },
});
