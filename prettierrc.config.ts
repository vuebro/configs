import type { Config } from "prettier";

/* -------------------------------------------------------------------------- */
/*                       Настройки prettier для проекта                       */
/* -------------------------------------------------------------------------- */

export default {
  plugins: [
    "@prettier/plugin-pug",
    "prettier-plugin-jsdoc",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-packagejson",
  ],
  jsdocCommentLineStrategy: "keep",
  endOfLine: "auto",
  tsdoc: true,
} satisfies Config;
