import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

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
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "xy-design",
      fileName: "xy-design"
    },
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
