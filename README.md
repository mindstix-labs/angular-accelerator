# angular-accelerator

## Tech Stack

- Angular 4 - Front-end language.
- Webpack - Resource bundler. Provides plugins for resource consolidations, Cache busting for static resources, SaSS to CSS plugins.
- Gulp - Tasks runner. Mainly used for multiple env support.

## Browser Support

https://angular.io/guide/browser-support

## Framework Capabilities

- Production bundling of app, dev mode should allow easy debugging.
- JS and other static assets bundling.
- Minification & consolidation of prod bundles.
- SaSS to CSS conversion and including it in prod bundling phase.
- Multiple Env Configs handling - Basic
- Properties (Locales/Language) support - Basic
- AoT and tree-shaking to improve prod bundle sizes.
- Lazy modules handling.
- Moving HTMLs, CSS into the JS bundles.
- Cache bursting URLs - new asset URL generation in each build.
- Base URL handling - Point images, APIs and all other assets base paths to given configurable domains at build time.

## Not part of this framework

- CMS driven components
- SEO
- Responsive design

## Getting Started

Install [nodejs](https://nodejs.org) version 7+ (Use [n](https://github.com/tj/n) to manage multiple Node versions)

Run `npm install` to install the dependencies required to run this project.

Config attributes based on environment are to be modified in 'dev.js' and 'prod.js'. These files are residing in 'app-config' folder.

## Dev

Run `npm run dev-start` to serve the app on http://localhost:8080.

## Prod

Run `npm run build-prod` to build the project. The build artifacts will be stored in the `dist/` directory.