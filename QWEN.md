# @vuebro/configs - Project Context

## Project Overview

`@vuebro/configs` is a collection of shared configuration files for Vue.js projects with TypeScript, ESLint, Prettier, UnoCSS, and Vite. This package provides a comprehensive setup for modern Vue development with Pug support, ensuring consistent code style and best practices across projects.

## Project Structure

- **ESLint Configuration** (`eslint.config.ts`): Comprehensive linting setup with Vue, TypeScript, and Pug support
- **Prettier Configuration** (`prettierrc.config.ts`): Code formatting with plugins for Pug, JSDoc, Tailwind CSS, and package.json
- **TypeScript Configuration** (`tsconfig.json`): Strict TypeScript setup with Vue-specific configurations
- **UnoCSS Configuration** (`uno.config.ts`): Utility-first CSS framework with Pug extractor and various transformers
- **UnoCSS Presets** (`uno.presets.ts`): Collection of UnoCSS presets including attributify, icons, typography, web fonts, and wind
- **Vite Configuration** (`vite.config.ts`): Optimized build tool configuration for Vue projects
- **Environment Declarations** (`env.d.ts`): Type declarations for specific modules

## Key Technologies & Dependencies

- **Vue.js**: Framework for building user interfaces
- **TypeScript**: Type-safe superset of JavaScript
- **ESLint**: JavaScript/TypeScript linting tool
- **Prettier**: Code formatting tool
- **UnoCSS**: Instant on-demand Atomic CSS engine
- **Vite**: Next-generation build tool
- **Pug**: Template engine for Node.js
- **Vue DevTools**: Browser extension for debugging Vue.js applications

## Building and Running

### Build Process

```bash
npm run build  # Compiles TypeScript to JavaScript with declaration files
```

### Linting

```bash
npm run lint   # Runs ESLint to check code quality
```

### Project Build System

The project uses TypeScript to compile configuration files into distributable format located in the `dist/` directory.

## Development Conventions

### Code Style & Formatting

- Uses Prettier with specific plugins for Pug, JSDoc, Tailwind CSS, and package.json
- Automatic line ending handling set to 'auto'
- JSDoc comments preserved with 'keep' strategy
- Tailwind CSS class sorting enabled

### Code Quality & Linting

- ESLint configured with Vue best practices and TypeScript support
- Pug template support through `eslint-plugin-vue-pug`
- Import/export rules with `eslint-plugin-import-x`
- JSDoc documentation rules enforced
- Style consistency through `eslint-plugin-perfectionist`
- Integration with Prettier using `eslint-plugin-prettier`

### TypeScript Configuration

- Strictest TypeScript settings from `@tsconfig/strictest`
- Vue-specific configurations from `@vue/tsconfig`
- DOM and library configurations included
- Path alias `@/*` maps to `./src`
- Vue compiler options configured with Pug plugin support

### UnoCSS Configuration

- Pug template extractor for class detection
- Arbitrary variants extractor
- Transformer for variant groups
- Transformer for directives
- Transformer for class compilation

### Vite Configuration

- Vue plugin integration
- UnoCSS plugin integration
- Vue DevTools plugin
- Path alias configuration (`@` maps to `./src`)
- Dynamic app version injection using `__APP_VERSION__`
- Base path set to relative "./"

## Package Exports

The package exports multiple configuration files for different tools:

- `"./eslint"`: ESLint configuration
- `"./prettierrc"`: Prettier configuration
- `"./tsconfig"`: TypeScript configuration
- `"./uno"`: UnoCSS configuration
- `"./uno/presets"`: UnoCSS presets
- `"./vite"`: Vite configuration

## Key Features

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

This project is licensed under the GNU AGPL-3.0-or-later License (see [LICENSE](LICENSE) file for details).

## Author

jbruwes

## Usage Instructions for Future Interactions

When working with this project:

- Remember the focus is on providing shared configurations for Vue projects
- The configurations are designed to work together for a cohesive development experience
- All configurations are written in TypeScript and compiled to JavaScript
- The package supports Pug templating engine alongside traditional Vue templates
- For changes to configuration, update the source files and run `npm run build` to compile
- The project follows strict TypeScript settings and comprehensive ESLint rules
