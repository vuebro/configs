import vueDevTools from "vite-plugin-vue-devtools";
// import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import unoCSS from "@unocss/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "./src",
      // fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env["npm_package_version"]),
  },
  plugins: [vue(), vueDevTools(), unoCSS()],
});
