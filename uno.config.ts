import { extractorArbitraryVariants } from "@unocss/extractor-arbitrary-variants";
import extractorPug from "@unocss/extractor-pug";
import {
  defineConfig,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  extractors: [extractorPug(), extractorArbitraryVariants()],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
});
