import { build } from "bun";

await build({
  entrypoints: ["./index.ts"], // Your entry point
  outdir: "./dist", // Where you want your built files to be placed
  minify: true, // Minify your output for production
  target: "bun", // Targeting Bun platform
  sourcemap: "external", // Generate external source maps
});

export {};
