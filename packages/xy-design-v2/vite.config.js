import { defineConfig } from "vite";
import { resolve } from "path";
import { createVuePlugin } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["vue-demi"]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  plugins: [createVuePlugin()],
  build: {
    outDir: "../xy-design/lib/v2",
    minify: true,
    lib: {
      entry: resolve(__dirname, "../xy-design/index.ts"),
      name: "xy-design",
      fileName: "xy-design",
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
