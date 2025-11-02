/**
 * Prettier configuration for Vue.js projects.
 * This configuration includes plugins for Pug, JSDoc, Tailwind CSS, and package.json formatting.
 */

import type { Config } from "prettier";

/**
 * The default Prettier configuration object for Vue.js projects with Pug support.
 */
export default {
  /** Sets the end of line character to auto, which uses the system default */
  endOfLine: "auto",
  /** Preserves JSDoc comment formatting with the 'keep' strategy */
  jsdocCommentLineStrategy: "keep",
  /**
   * List of plugins that extend Prettier's functionality:
   * - Pug template formatting
   * - JSDoc comment formatting
   * - Tailwind CSS class sorting
   * - package.json formatting
   */
  plugins: [
    "@prettier/plugin-pug",
    "prettier-plugin-jsdoc",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-packagejson",
  ],
  /** Enables TSDoc formatting */
  tsdoc: true,
} satisfies Config;
