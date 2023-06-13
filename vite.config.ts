import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: true,
    port: 5173,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/__tests__/setupTests.ts",
    globals: true,
  },
});
