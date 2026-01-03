import type { Preset } from "@unocss/core";
import type { AttributifyOptions } from "@unocss/preset-attributify";
import type { IconsOptions } from "@unocss/preset-icons/browser";
import type { TagifyOptions } from "@unocss/preset-tagify";
import type { TypographyOptions } from "@unocss/preset-typography";
import type { WebFontsOptions } from "@unocss/preset-web-fonts";
import type { PresetWind4Options } from "@unocss/preset-wind4";

import { presetAttributify } from "@unocss/preset-attributify";
import { presetIcons } from "@unocss/preset-icons/browser";
import { presetTagify } from "@unocss/preset-tagify";
import { presetTypography } from "@unocss/preset-typography";
import { presetWebFonts } from "@unocss/preset-web-fonts";
import { presetWind4 } from "@unocss/preset-wind4";

export default ({
  attributifyOptions,
  iconsOptions,
  tagifyOptions,
  typographyOptions,
  webFontsOptions,
  wind4Options,
}: {
  attributifyOptions?: AttributifyOptions;
  iconsOptions?: IconsOptions;
  tagifyOptions?: TagifyOptions;
  typographyOptions?: TypographyOptions;
  webFontsOptions?: WebFontsOptions;
  wind4Options?: PresetWind4Options;
} = {}) =>
  [
    presetAttributify(attributifyOptions),
    presetIcons({ cdn: "https://cdn.jsdelivr.net/npm/", ...iconsOptions }),
    presetTagify(tagifyOptions),
    presetTypography(typographyOptions),
    presetWebFonts(webFontsOptions),
    presetWind4({ preflights: { reset: true }, ...wind4Options }),
  ] as Preset[];
