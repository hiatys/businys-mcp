import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  outDir: "dist",
  bundle: true,
  // Bundle all @hiatys/* workspace packages into the output
  noExternal: [/^@hiatys\//],
  esbuildOptions(options) {
    // Resolve @/ alias to the Hiatys app src directory
    options.alias = {
      ...(options.alias ?? {}),
      "@": path.resolve(__dirname, "../../apps/hiatys/src"),
    };
  },
  banner: {
    js: "#!/usr/bin/env node",
  },
});
