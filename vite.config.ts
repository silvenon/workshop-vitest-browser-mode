/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [devtoolsJson(), tailwindcss(), react()],
  build: {
    assetsInlineLimit(filePath) {
      if (filePath.endsWith("icons.svg")) {
        return false;
      }
      return;
    },
  },
  test: {
    globals: true,
    restoreMocks: true,
    unstubGlobals: true,
    unstubEnvs: true,
    environment: "happy-dom",
    setupFiles: ["tests/setup.ts"],
  },
});
