import type { ConfigWithExtendsArray } from "@eslint/config-helpers";

import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import prettierConfigsRecommended from "eslint-plugin-prettier/recommended";
import { configs as packageJsonConfigs } from "eslint-plugin-package-json";
import { flatConfigs as importXConfigs } from "eslint-plugin-import-x";
import { configs as deMorganConfigs } from "eslint-plugin-de-morgan";
import { configs as dependConfigs } from "eslint-plugin-depend";
import perfectionist from "eslint-plugin-perfectionist";
import gitignore from "eslint-config-flat-gitignore";
import vuePug from "eslint-plugin-vue-pug";
import markdown from "@eslint/markdown";
import jsDoc from "eslint-plugin-jsdoc";
import vue from "eslint-plugin-vue";
import json from "@eslint/json";
import js from "@eslint/js";

export default defineConfigWithVueTs(
  gitignore(),
  {
    rules: {
      // "jsdoc/require-jsdoc": [
      //   "error",
      //   {
      //     require: {
      //       ArrowFunctionExpression: true,
      //       FunctionDeclaration: true,
      //       FunctionExpression: true,
      //       ClassDeclaration: true,
      //       MethodDefinition: true,
      //       ClassExpression: true,
      //     },
      //   },
      // ],
      "jsdoc/tag-lines": ["warn", "any", { startLines: 1 }],
    },
    extends: [
      vuePug.configs["flat/recommended"],
      js.configs.recommended,
      vue.configs["flat/recommended"],
      vueTsConfigs.strictTypeChecked,
      vueTsConfigs.stylisticTypeChecked,
      perfectionist.configs["recommended-line-length"],
      jsDoc.configs["flat/recommended"],
    ],
    files: ["**/*.{ts,vue}"],
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
