import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import viteComperssion from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: false,
    port: 8080,
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  plugins: [
    vue(),
    viteComperssion({
      algorithm: "gzip"
    })
  ],
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
