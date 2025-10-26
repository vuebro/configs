import type { AttributifyOptions } from "@unocss/preset-attributify";
import type { TypographyOptions } from "@unocss/preset-typography";
import type { IconsOptions } from "@unocss/preset-icons/browser";
import type { WebFontsOptions } from "@unocss/preset-web-fonts";
import type { PresetWind4Options } from "@unocss/preset-wind4";
import type { TagifyOptions } from "@unocss/preset-tagify";
import type { PresetOrFactoryAwaitable } from "unocss";

import attributify from "@unocss/preset-attributify";
import typography from "@unocss/preset-typography";
import icons from "@unocss/preset-icons/browser";
import webFonts from "@unocss/preset-web-fonts";
import tagify from "@unocss/preset-tagify";
import wind4 from "@unocss/preset-wind4";

export default ({
  iconsOptions = { cdn: "https://cdn.jsdelivr.net/npm/" },
  wind4Options = { preflights: { reset: true } },
  attributifyOptions,
  typographyOptions,
  webFontsOptions,
  tagifyOptions,
}: {
  attributifyOptions?: AttributifyOptions;
  typographyOptions?: TypographyOptions;
  webFontsOptions?: WebFontsOptions;
  wind4Options?: PresetWind4Options;
  tagifyOptions?: TagifyOptions;
  iconsOptions?: IconsOptions;
} = {}) =>
  [
    attributify(attributifyOptions),
    icons(iconsOptions),
    tagify(tagifyOptions),
    typography(typographyOptions),
    webFonts(webFontsOptions),
    wind4(wind4Options),
  ] as PresetOrFactoryAwaitable[];
