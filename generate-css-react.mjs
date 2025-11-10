import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tailwindInput = path.resolve(__dirname, "src/styles/tailwind.css");
const reactOutput = path.resolve(__dirname, "src/styles/react.css");

// 🌐 Gera CSS global React (Base + React)
const reactContentGlob = "'./src/components/**/*Base.tsx','./src/components/**/*react.tsx'";
const reactCommand = `cross-env NODE_ENV=production npx tailwindcss -i ${tailwindInput} -o ${reactOutput} --minify --content ${reactContentGlob} --no-watch`;
console.log(`🧵 Gerando CSS global React → ${reactOutput}`);
execSync(reactCommand, { stdio: "inherit" });
