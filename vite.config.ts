/**
 * Vite configuration for Vue.js projects with UnoCSS, Vue DevTools, and TypeScript path resolution.
 * This configuration sets up the build environment with necessary plugins and features.
 */

import unoCSS from "@unocss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * The default Vite configuration for Vue.js projects with integrated UnoCSS,
 * Vue DevTools support, and TypeScript path alias resolution.
 */
export default defineConfig({
  /** Defines global constants available to the application */
  define: {
    /**
     * Injects the current application version from package.json into the build.
     * This value can be accessed in the application as __APP_VERSION__.
     */
    __APP_VERSION__: JSON.stringify(process.env["npm_package_version"]),
  },
  /**
   * List of Vite plugins that enhance the build process:
   * - Vue plugin for handling Vue SFC files
   * - Vue DevTools plugin for enhanced debugging
   * - UnoCSS plugin for atomic CSS processing
   * - TypeScript path resolution plugin
   */
  plugins: [vue(), vueDevTools(), unoCSS(), tsconfigPaths()],
});
