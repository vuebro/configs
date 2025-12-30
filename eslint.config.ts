import type { ConfigWithExtendsArray } from "@eslint/config-helpers";

import js from "@eslint/js";
import json from "@eslint/json";
import unocss from "@unocss/eslint-config/flat";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import gitignore from "eslint-config-flat-gitignore";
import { configs as deMorganConfigs } from "eslint-plugin-de-morgan";
import { configs as dependConfigs } from "eslint-plugin-depend";
import { flatConfigs as importXConfigs } from "eslint-plugin-import-x";
import jsDoc from "eslint-plugin-jsdoc";
import { configs as packageJsonConfigs } from "eslint-plugin-package-json";
import { configs as perfectionistConfigs } from "eslint-plugin-perfectionist";
import prettierConfigsRecommended from "eslint-plugin-prettier/recommended";
import vue from "eslint-plugin-vue";
import vuePug from "eslint-plugin-vue-pug";

export default defineConfigWithVueTs(
  gitignore(),
  {
    extends: [
      vuePug.configs["flat/recommended"],
      js.configs.recommended,
      vue.configs["flat/recommended"],
      vueTsConfigs.strictTypeChecked,
      vueTsConfigs.stylisticTypeChecked,
      perfectionistConfigs?.["recommended-natural"],
      unocss,
      jsDoc.configs["flat/recommended-typescript"],
    ],
    files: ["**/*.{ts,vue}"],
    rules: {
      "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
      "import-x/no-extraneous-dependencies": [
        "error",
        {
          bundledDependencies: false,
          devDependencies: ["*.config.ts"],
          optionalDependencies: false,
          peerDependencies: false,
          whitelist: ["electron", "@vuebro/configs"],
        },
      ],
      "jsdoc/tag-lines": ["warn", "any", { startLines: 1 }],
      "vue/attributes-order": ["warn", { alphabetical: true }],
    },
  },
  deMorganConfigs.recommended,
  importXConfigs.recommended,
  importXConfigs.typescript,
  dependConfigs["flat/recommended"],
  json.configs.recommended,
  packageJsonConfigs.recommended,
  packageJsonConfigs.stylistic,
  prettierConfigsRecommended,
) as ConfigWithExtendsArray;
