/**
 * UnoCSS configuration for Vue.js projects with Pug support.
 * This configuration includes extractors and transformers for enhanced functionality.
 */

import { extractorArbitraryVariants } from "@unocss/extractor-arbitrary-variants";
import extractorPug from "@unocss/extractor-pug";
import {
  defineConfig,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

/**
 * The default UnoCSS configuration that defines extractors and transformers
 * for processing CSS utility classes in Vue and Pug templates.
 */
export default defineConfig({
  /**
   * Defines the extractors used to identify utility classes in the source files:
   * - Pug template extractor for class detection
   * - Arbitrary variants extractor for dynamic class generation
   */
  extractors: [extractorPug(), extractorArbitraryVariants()],
  /**
   * Transformers that modify the UnoCSS output:
   * - Group variant transformer for handling variant groups
   * - Directives transformer for processing UnoCSS directives
   * - Class compilation transformer for optimizing class names
   */
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
});
