import tailwindcss from "@tailwindcss/vite";
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
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/register.tsx"),
      name: "KitComponentesWC",
      fileName: () => `kit-componentes-wc.js`,
      formats: ["iife"], // 👈 gera um único arquivo que se autoexecuta e registra tudo no window
    },
    outDir: "dist/wc",
    emptyOutDir: false,
    rollupOptions: {
      // React e ReactDOM ficam embutidos no bundle
    },
  },
});
