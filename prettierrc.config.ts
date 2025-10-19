import type { Config } from "prettier";

export default {
  endOfLine: "auto",
  plugins: [
    "@prettier/plugin-pug",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-packagejson",
  ],
} as Config;
