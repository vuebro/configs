import vueDevTools from "vite-plugin-vue-devtools";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import unoCSS from "@unocss/vite";

/* -------------------------------------------------------------------------- */
/*                         Настройки vite для проекта                         */
/* -------------------------------------------------------------------------- */

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(process.env["npm_package_version"]),
  },
  plugins: [vue(), vueDevTools(), unoCSS()],
  resolve: { alias: { "@": "./src" } },
  base: "./",
});
