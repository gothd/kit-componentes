import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// necessário para __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wcDir = path.resolve(__dirname, "src/wc");
const distDir = path.resolve(__dirname, "dist/wc");

const files = fs.readdirSync(wcDir).filter((f) => f.startsWith("kc-") && f.endsWith(".ts"));

for (const file of files) {
  const name = path.basename(file, ".ts");
  const entryPath = path.join(wcDir, file);

  const config = `
    import { defineConfig } from 'vite';
    import path from 'path';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [
        react({
          babel: {
            plugins: [["babel-plugin-react-compiler"]],
          },
        }),
      ],
      css: {
        postcss: "./postcss.config.js",
      },
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
          "@components": path.resolve(__dirname, "src/components"),
          "@components/ui": path.resolve(__dirname, "src/components/ui"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@utils": path.resolve(__dirname, "src/utils"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
        },
      },
      define: {
        "process.env.NODE_ENV": JSON.stringify("production"), // necessário porque o css foi gerado com env production
      },
      publicDir: false,
      build: {
        lib: {
          entry: ${JSON.stringify(path.resolve(__dirname, entryPath))},
          name: "KitComponentes",
          formats: ["iife"],
          fileName: () => "${name}.js",
        },
        outDir: ${JSON.stringify(path.resolve(__dirname, distDir))},
        emptyOutDir: false,
      },
    });
  `;

  const tempConfigPath = path.resolve(__dirname, `.vite.temp.${name}.config.ts`);
  fs.writeFileSync(tempConfigPath, config);

  console.log(`📦 Buildando ${name} → dist/wc/${name}.js`);
  execSync(`vite build --config ${tempConfigPath}`, { stdio: "inherit" });

  fs.unlinkSync(tempConfigPath);
}
