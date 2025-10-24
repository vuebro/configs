# @vuebro/configs

A collection of shared configuration files for Vue.js projects with TypeScript, ESLint, Prettier, UnoCSS, and Vite. This package provides a comprehensive setup for modern Vue development with Pug support, ensuring consistent code style and best practices across projects.

## Features

- **ESLint Configuration**: Comprehensive linting setup with Vue, TypeScript, and Pug support
- **Prettier Configuration**: Code formatting with plugins for Pug, JSDoc, Tailwind CSS, and package.json
- **TypeScript Configuration**: Strict TypeScript setup with Vue-specific configurations
- **UnoCSS Configuration**: Utility-first CSS framework with Pug extractor and various transformers
- **Vite Configuration**: Optimized build tool configuration for Vue projects
- **Pug Support**: Full integration with Pug templating engine

## Installation

```bash
npm install @vuebro/configs --save-dev
```

## Usage

### ESLint

To use the ESLint configuration, add this to your `eslint.config.js` or `eslint.config.ts`:

```js
import configs from "@vuebro/configs/eslint";

export default configs;
```

### Prettier

To use the Prettier configuration, add this to your `prettierrc.config.js` or `prettierrc.config.ts`:

```js
import config from "@vuebro/configs/prettierrc";

export default config;
```

### TypeScript

To use the TypeScript configuration, extend it in your `tsconfig.json`:

```json
{
  "extends": "@vuebro/configs/tsconfig.json"
}
```

### UnoCSS

To use the UnoCSS configuration, add this to your `uno.config.js` or `uno.config.ts`:

```js
import config from "@vuebro/configs/uno";

export default config;
```

You can also use the UnoCSS presets with:

```js
import presets from "@vuebro/configs/uno/presets";
```

### Vite

To use the Vite configuration, add this to your `vite.config.js` or `vite.config.ts`:

```js
import config from "@vuebro/configs/vite";

export default config;
```

## What's Included

### ESLint Config

- Vue best practices with `eslint-plugin-vue`
- TypeScript support with `@vue/eslint-config-typescript`
- Pug template support with `eslint-plugin-vue-pug`
- Import/export rules with `eslint-plugin-import-x`
- Documentation rules with `eslint-plugin-jsdoc`
- Style consistency with `eslint-plugin-perfectionist`
- Integration with Prettier using `eslint-plugin-prettier`

### Prettier Config

- Automatic line ending handling
- Pug template formatting via `@prettier/plugin-pug`
- Enhanced JSDoc formatting with `prettier-plugin-jsdoc`
- Tailwind CSS class sorting with `prettier-plugin-tailwindcss`
- package.json formatting with `prettier-plugin-packagejson`

### UnoCSS Config

- Pug template extractor
- Arbitrary variants extractor
- Transformer for variant groups
- Transformer for directives
- Transformer for class compilation

### Vite Config

- Vue plugin integration
- UnoCSS plugin integration
- Vue DevTools plugin
- Alias configuration (`@` maps to `./src`)
- Dynamic app version injection

## License

This project is licensed under the AGPL-3.0-or-later License - see the [LICENSE](LICENSE) file for details.

## Author

jbruwes

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
