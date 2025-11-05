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
 * This function allows customization of various UnoCSS presets including
 * attributify, icons, tagify, typography, web fonts, and wind.
 *
 * @param root0 - The configuration object for UnoCSS presets
 * @param [root0.attributifyOptions] - Options for the attributify preset
 * @param [root0.iconsOptions] - Options for the icons preset, defaults to using jsdelivr CDN
 * @param [root0.tagifyOptions] - Options for the tagify preset
 * @param [root0.typographyOptions] - Options for the typography preset
 * @param [root0.webFontsOptions] - Options for the web fonts preset
 * @param [root0.wind4Options] - Options for the wind4 preset, defaults to having reset preflights enabled
 *
 * @returns An array of UnoCSS presets that can be used in UnoCSS configuration
 */
export default ({
  attributifyOptions,
  iconsOptions = { cdn: "https://cdn.jsdelivr.net/npm/" },
  tagifyOptions,
  typographyOptions,
  webFontsOptions,
  wind4Options = { preflights: { reset: true } },
}: {
  attributifyOptions?: AttributifyOptions;
  iconsOptions?: IconsOptions;
  tagifyOptions?: TagifyOptions;
  typographyOptions?: TypographyOptions;
  webFontsOptions?: WebFontsOptions;
  wind4Options?: PresetWind4Options;
} = {}) =>
  [
    attributify(attributifyOptions),
    icons(iconsOptions),
    tagify(tagifyOptions),
    typography(typographyOptions),
    webFonts(webFontsOptions),
    wind4(wind4Options),
  ] as PresetOrFactoryAwaitable[];
