import type { Config } from "prettier";

/* -------------------------------------------------------------------------- */
/*                       Настройки prettier для проекта                       */
/* -------------------------------------------------------------------------- */

export default {
  endOfLine: "auto",
  plugins: [
    "@prettier/plugin-pug",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-packagejson",
  ],
} satisfies Config;
