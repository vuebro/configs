import {
  transformerCompileClass,
  transformerVariantGroup,
  transformerDirectives,
  defineConfig,
} from "unocss";
import { extractorArbitraryVariants } from "@unocss/extractor-arbitrary-variants";
import extractorPug from "@unocss/extractor-pug";

/* -------------------------------------------------------------------------- */
/*                        Настройки UnoCSS для проекта                        */
/* -------------------------------------------------------------------------- */

export default defineConfig({
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
  extractors: [extractorPug(), extractorArbitraryVariants()],
});
