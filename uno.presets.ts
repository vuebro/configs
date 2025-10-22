import type { AttributifyOptions } from "@unocss/preset-attributify";
import type { IconsOptions } from "@unocss/preset-icons/browser";
import type { TagifyOptions } from "@unocss/preset-tagify";
import type { TypographyOptions } from "@unocss/preset-typography";
import type { WebFontsOptions } from "@unocss/preset-web-fonts";
import type { PresetWind4Options } from "@unocss/preset-wind4";
import type { UserConfig } from "unocss";

import attributify from "@unocss/preset-attributify";
import icons from "@unocss/preset-icons/browser";
import tagify from "@unocss/preset-tagify";
import typography from "@unocss/preset-typography";
import webFonts from "@unocss/preset-web-fonts";
import wind4 from "@unocss/preset-wind4";

/* -------------------------------------------------------------------------- */
/*                         Пресеты UnoCSS для проекта                         */
/* -------------------------------------------------------------------------- */

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
  ] satisfies UserConfig["presets"];
