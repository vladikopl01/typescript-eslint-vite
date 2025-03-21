import * as path from "node:path";
import { defineConfig, configDefaults } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: [path.resolve(__dirname, "tsconfig.json")],
    }),
  ],
  test: {
    exclude: [...configDefaults.exclude],
    coverage: { enabled: true, provider: "v8" },
  },
});
