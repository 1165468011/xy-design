import { defineConfig } from "vite";
import { resolve } from "path";
import { existsSync, readdirSync, lstatSync, rmdirSync, unlinkSync } from "fs";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";

emptyDir(resolve(__dirname, "./packages/xy-design/types"));
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
  plugins: [
    vue(),
    dts({
      outputDir: "./packages/xy-design/types",
      staticImport: true,
      insertTypesEntry: true
    })
  ],
  build: {
    outDir: "lib/v3",
    lib: {
      entry: resolve(__dirname, "./packages/xy-design/index.ts"),
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

function emptyDir(dir) {
  if (!existsSync(dir)) {
    return;
  }

  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file);
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      rmdirSync(abs);
    } else {
      unlinkSync(abs);
    }
  }
}
