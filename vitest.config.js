import { defineConfig } from "vitest/config";
import config from "./vite.config";

export default defineConfig({
  plugins: [...config.plugins],
  test: {
    // This means we don't have to import `describe`,
    // `it`, and `expect` into every test file
    globals: true,
  },
});
