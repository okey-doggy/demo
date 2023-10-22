import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});

// Install the @types/node package to fix the "Cannot find module 'path'" error
// Run the following command in your terminal:
// npm install --save-dev @types/node
