import UnoCSS from "@unocss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

/* -------------------------------------------------------------------------- */
/*                         Настройки vite для проекта                         */
/* -------------------------------------------------------------------------- */

export default defineConfig({
  base: "./",
  define: {
    __APP_VERSION__: JSON.stringify(process.env["npm_package_version"]),
  },
  plugins: [vue(), vueDevTools(), UnoCSS()],
  resolve: { alias: { "@": "./src" } },
});
