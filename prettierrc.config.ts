import type { Config } from "prettier";

export default {
  endOfLine: "auto",
  jsdocCommentLineStrategy: "keep",
  plugins: [
    "@prettier/plugin-pug",
    "prettier-plugin-jsdoc",
    "prettier-plugin-packagejson",
  ],
  tsdoc: true,
} satisfies Config;
