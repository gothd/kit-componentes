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
  root: "src/playground",
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@components/ui": path.resolve(__dirname, "src/components/ui"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  build: {
    outDir: "../../dist-playground",
  },
  server: {
    port: 5173,
    open: "/", // abre direto o playground
  },
});
