import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve, dirname } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths()],
  server: {
    host: true,
    port: 5173,
  },
  resolve: { alias: [{ find: "@", replacement: resolve(__dirname, "./src") }] },
  test: {
    environment: "jsdom",
    setupFiles: "./src/__tests__/setupTests.ts",
    globals: true,

    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});
