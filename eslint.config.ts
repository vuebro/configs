import type { ConfigWithExtendsArray } from "@eslint/config-helpers";

import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
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
import perfectionist from "eslint-plugin-perfectionist";
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
      perfectionist.configs["recommended-natural"],
      jsDoc.configs["flat/recommended"],
    ],
    files: ["**/*.{ts,vue}"],
    rules: {
      "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
      /** @see {@link https://github.com/eslint/eslint/issues/20272 }*/
      "@typescript-eslint/unified-signatures": "off",
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
      // "jsdoc/require-jsdoc": [
      //   "error",
      //   {
      //     require: {
      //       ArrowFunctionExpression: true,
      //       ClassDeclaration: true,
      //       ClassExpression: true,
      //       FunctionDeclaration: true,
      //       FunctionExpression: true,
      //       MethodDefinition: true,
      //     },
      //   },
      // ],
      "jsdoc/tag-lines": ["warn", "any", { startLines: 1 }],
    },
  },
  deMorganConfigs.recommended,
  importXConfigs.recommended,
  importXConfigs.typescript,
  dependConfigs["flat/recommended"],
  json.configs.recommended,
  markdown.configs.recommended,
  packageJsonConfigs.recommended,
  prettierConfigsRecommended,
) as ConfigWithExtendsArray;
