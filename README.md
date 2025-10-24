# @vuebro/configs

A comprehensive collection of shared configuration files for Vue.js projects with TypeScript, ESLint, Prettier, UnoCSS, and Vite. This package provides a complete setup for modern Vue development with Pug support, ensuring consistent code style and best practices across projects.

## Features

- **ESLint Configuration**: Comprehensive linting setup with Vue, TypeScript, and Pug support
- **Prettier Configuration**: Code formatting with plugins for Pug, JSDoc, Tailwind CSS, and package.json
- **TypeScript Configuration**: Strict TypeScript setup with Vue-specific configurations
- **UnoCSS Configuration**: Utility-first CSS framework with Pug extractor and various transformers
- **UnoCSS Presets**: Collection of presets for attributify, icons, typography, web fonts, and wind
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

To use the Prettier configuration, add this to your `prettierrc.config.js` or `.prettierrc`:

```js
import config from "@vuebro/configs/prettierrc";

export default config;
```

Alternatively, you can reference it in your `package.json`:

```json
{
  "prettier": "@vuebro/configs/prettierrc"
}
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

// Example usage with options
import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  presets: [
    ...presets({
      // Custom options for presets
      iconsOptions: { cdn: "https://cdn.jsdelivr.net/npm/" },
      wind4Options: { preflights: { reset: true } },
    }),
    presetUno(),
  ],
});
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
- Support for JSON and Markdown files

### Prettier Config

- Automatic line ending handling
- Pug template formatting via `@prettier/plugin-pug`
- Enhanced JSDoc formatting with `prettier-plugin-jsdoc`
- Tailwind CSS class sorting with `prettier-plugin-tailwindcss`
- package.json formatting with `prettier-plugin-packagejson`
- TS Doc support enabled

### UnoCSS Config

- Pug template extractor for class detection
- Arbitrary variants extractor
- Transformer for variant groups
- Transformer for directives
- Transformer for class compilation

### UnoCSS Presets

- **Attributify**: Use utility attributes directly in your templates
- **Icons**: Access thousands of icons from icon collections
- **Typography**: Style text content with opinionated defaults
- **Web Fonts**: Use web fonts from Google Fonts and other providers
- **Tagify**: Use actual HTML tags as selectors
- **Wind**: UnoCSS interpretation of Tailwind CSS

### Vite Config

- Vue plugin integration
- UnoCSS plugin integration
- Vue DevTools plugin
- Path alias configuration (`@` maps to `./src`)
- Dynamic app version injection with `__APP_VERSION__`
- Base path set to relative "./" for proper deployment

## Development Scripts

```bash
npm run build    # Compiles TypeScript to JavaScript
npm run lint     # Runs ESLint to check code quality
```

## Philosophy

This package follows modern best practices for Vue.js development:

- Strict TypeScript settings for type safety
- Comprehensive linting to maintain code quality
- Consistent code formatting with Prettier
- On-demand utility CSS with UnoCSS
- Fast build process with Vite
- Integration with Pug templating engine

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the GNU AGPL-3.0-or-later License - see the [LICENSE](LICENSE) file for details.

## Author

jbruwes

## Support

If you encounter any issues or have questions about using these configurations, please open an issue in the GitHub repository.
