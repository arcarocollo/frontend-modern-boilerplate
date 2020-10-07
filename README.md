# Frontend Modern Boilerplate #

Frontend Modern Boilerplate is a simple frontend template for building modern web apps or sites using `Typescript` and `lit-html`.

The project is using the following tools:
- [node js](https://nodejs.org/it/)
- [typescript](https://www.typescriptlang.org/)
- [webpack](https://webpack.js.org/) as static module bundler
- [jest](https://jestjs.io/) as test suite
- [eslint](https://eslint.org/) as javascript linter
- [sass](https://sass-lang.com/) as css preprocessor
- [lit-html](https://lit-html.polymer-project.org/) as HTML templating library 

## Set up ##

- `npm i`
- `npm start`

### npm tasks:

- `npm start`
- `npm run build`
- `npm test`
- `npm test-watch`
- `npm run lint`

### - npm start

Runs the app in development mode and open browser window on http://localhost:9000.

The page will automatically reload if you make changes to the code.

You will see the build errors and lint warnings in the console.

### - npm run build

Builds the app for production.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

### - npm test

Runs all tests.

### - npm run test-watch

Runs all tests in an interactive mode.

### - npm run lint

Runs the linter.

## Features

* TypeScript extends JavaScript by adding types, saving you time catching errors and providing fixes before you run code.
* A fast and modern interactive unit test runner.
* A live development server that warns about common mistakes.
* A build script to bundle TS, CSS, and images for production, with hashes and sourcemaps.
* A lightweight and fast templating library for render and update javascript templates.

## Browser support

All the modern browsers are supported.

This doesn't mean that the Frontend Modern Boilerplate cannot be used in older browsers!

If you need legacy browser support I suggest you to use [Webpack Postcss loader](https://webpack.js.org/loaders/postcss-loader/) with [Autoprefixer](https://github.com/postcss/autoprefixer).

Also you need to use [Babel](https://babeljs.io/) to convert ES6 code into a backwards compatible version of JavaScript.

