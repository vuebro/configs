/**
 * UnoCSS presets configuration for Vue.js projects.
 * This module exports a function that returns an array of commonly used UnoCSS presets
 * with configurable options for each preset.
 */

import type { AttributifyOptions } from "@unocss/preset-attributify";
import type { IconsOptions } from "@unocss/preset-icons/browser";
import type { TagifyOptions } from "@unocss/preset-tagify";
import type { TypographyOptions } from "@unocss/preset-typography";
import type { WebFontsOptions } from "@unocss/preset-web-fonts";
import type { PresetWind4Options } from "@unocss/preset-wind4";
import type { PresetOrFactoryAwaitable } from "unocss";

import attributify from "@unocss/preset-attributify";
import icons from "@unocss/preset-icons/browser";
import tagify from "@unocss/preset-tagify";
import typography from "@unocss/preset-typography";
import webFonts from "@unocss/preset-web-fonts";
import wind4 from "@unocss/preset-wind4";

/**
 * Creates an array of UnoCSS presets with configurable options.
 *
 * @param {object} options - Configuration options for each UnoCSS preset
 * @param {AttributifyOptions} [options.attributifyOptions] - Options for the attributify preset
 * @param {IconsOptions} [options.iconsOptions] - Options for the icons preset, with default CDN configuration
 * @param {TagifyOptions} [options.tagifyOptions] - Options for the tagify preset
 * @param {TypographyOptions} [options.typographyOptions] - Options for the typography preset
 * @param {WebFontsOptions} [options.webFontsOptions] - Options for the web fonts preset
 * @param {PresetWind4Options} [options.wind4Options] - Options for the wind preset, with default preflight reset configuration
 * @returns {PresetOrFactoryAwaitable[]} An array of UnoCSS preset configurations
 *
 * @example
 * ```ts
 * // Usage example
 * import createPresets from "./uno.presets";
 *
 * export default defineConfig({
 *   presets: createPresets({
 *     iconsOptions: { collections: { myIcons: () => import("@iconify-json/my-icons") } },
 *     wind4Options: { preflights: { reset: false } }
 *   })
 * });
 * ```
 */
export default ({
  attributifyOptions,
  iconsOptions = { cdn: "https://cdn.jsdelivr.net/npm/" },
  tagifyOptions,
  typographyOptions,
  webFontsOptions,
  wind4Options = { preflights: { reset: true } },
}: {
  /** Options for the attributify preset */
  attributifyOptions?: AttributifyOptions;
  /** Options for the icons preset, with default CDN configuration */
  iconsOptions?: IconsOptions;
  /** Options for the tagify preset */
  tagifyOptions?: TagifyOptions;
  /** Options for the typography preset */
  typographyOptions?: TypographyOptions;
  /** Options for the web fonts preset */
  webFontsOptions?: WebFontsOptions;
  /** Options for the wind preset, with default preflight reset configuration */
  wind4Options?: PresetWind4Options;
} = {}) =>
  [
    /** Attributify preset for attribute-based utility classes */
    attributify(attributifyOptions),
    /** Icons preset with default CDN configuration */
    icons(iconsOptions),
    /** Tagify preset for element-based utility classes */
    tagify(tagifyOptions),
    /** Typography preset for styling text elements */
    typography(typographyOptions),
    /** Web fonts preset for loading Google Fonts and other web font providers */
    webFonts(webFontsOptions),
    /** Wind preset with default preflight reset configuration */
    wind4(wind4Options),
  ] as PresetOrFactoryAwaitable[];
