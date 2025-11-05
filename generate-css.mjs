import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tailwindInput = path.resolve(__dirname, "src/styles/tailwind.css");
const componentsDir = path.resolve(__dirname, "src/components");
const globalOutput = path.resolve(__dirname, "src/styles/index.css");

// 🔧 Gera CSS para X.web.tsx + XBase.tsx
function generateCSSWithBase(tsxPath) {
  const dir = path.dirname(tsxPath);
  const baseName = path.basename(tsxPath, ".web.tsx");
  const basePath = path.join(dir, `${baseName}Base.tsx`);
  const cssPath = tsxPath.replace(path.basename(tsxPath), "styles.css");

  const contentFiles = [`'${tsxPath}'`, `'${basePath}'`];

  const command = `cross-env NODE_ENV=production npx tailwindcss -i ${tailwindInput} -o ${cssPath} --minify --content ${contentFiles.join(",")}`;
  console.log(`🎨 Gerando CSS para ${baseName}.web.tsx + ${baseName}Base.tsx → ${cssPath}`);
  execSync(command, { stdio: "inherit" });
}

// 🔁 1. Arquivos soltos em src/components/
for (const entry of fs.readdirSync(componentsDir, { withFileTypes: true })) {
  const entryPath = path.join(componentsDir, entry.name);
  if (entry.isFile() && entry.name.endsWith(".web.tsx")) {
    generateCSSWithBase(entryPath);
  }
}

// 🔁 2. Subpastas de src/components/
for (const entry of fs.readdirSync(componentsDir, { withFileTypes: true })) {
  const entryPath = path.join(componentsDir, entry.name);
  if (entry.isDirectory()) {
    for (const file of fs.readdirSync(entryPath)) {
      if (file.endsWith(".web.tsx")) {
        generateCSSWithBase(path.join(entryPath, file));
      }
    }

    // 🔁 3. Subpastas de src/components/ui/
    if (entry.name === "ui") {
      for (const sub of fs.readdirSync(entryPath, { withFileTypes: true })) {
        const subPath = path.join(entryPath, sub.name);
        if (sub.isDirectory()) {
          for (const file of fs.readdirSync(subPath)) {
            if (file.endsWith(".web.tsx")) {
              generateCSSWithBase(path.join(subPath, file));
            }
          }
        }
      }
    }
  }
}

// 🌐 4. Gera CSS global index.css com base em todos os arquivos da lib
const globalCommand = `npx tailwindcss -i ${tailwindInput} -o ${globalOutput} --minify --content './src/components/**/*.{js,ts,jsx,tsx}'`;
console.log(`🧵 Gerando CSS global → ${globalOutput}`);
execSync(globalCommand, { stdio: "inherit" });