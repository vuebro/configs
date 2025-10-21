import extractorPug from "@unocss/extractor-pug";
import attributify from "@unocss/preset-attributify";
import icons from "@unocss/preset-icons/browser";
import tagify from "@unocss/preset-tagify";
import typography from "@unocss/preset-typography";
import wind4 from "@unocss/preset-wind4";
import { defineConfig } from "@unocss/runtime";

/* -------------------------------------------------------------------------- */
/*                        Настройки UnoCSS для проекта                        */
/* -------------------------------------------------------------------------- */

export default defineConfig({
  extractors: [extractorPug()],
  presets: [
    wind4({ preflights: { reset: true } }),
    typography(),
    icons({ cdn: "https://cdn.jsdelivr.net/npm/" }),
    tagify(),
    attributify(),
  ],
});
