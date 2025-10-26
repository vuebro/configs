import vueDevTools from "vite-plugin-vue-devtools";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import unoCSS from "@unocss/vite";

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(process.env["npm_package_version"]),
  },
  plugins: [vue(), vueDevTools(), unoCSS(), tsconfigPaths()],
});
