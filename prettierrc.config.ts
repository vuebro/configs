import type { Config } from "prettier";

/* -------------------------------------------------------------------------- */
/*                       Настройки prettier для проекта                       */
/* -------------------------------------------------------------------------- */

export default {
  endOfLine: "auto",
  jsdocCommentLineStrategy: "keep",
  plugins: [
    "@prettier/plugin-pug",
    "prettier-plugin-jsdoc",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-packagejson",
  ],
  tsdoc: true,
} satisfies Config;
