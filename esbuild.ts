import { build } from "esbuild"

await build({
  entryPoints: ["main.w.ts", "main.wo.ts"],
  target: "es2024",
  outdir: "dist/esbuild",
  format: "esm",
  bundle: true,
  mainFields: ["browser", "module", "main"],
  conditions: ["workerd", "worker", "browser"],
  platform: "browser",
  loader: {
    ".wasm": "file",
  }
})