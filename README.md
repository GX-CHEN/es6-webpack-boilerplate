[![Build Status](https://travis-ci.com/GX-CHEN/es6-webpack-boilerplate.svg?token=TjRT75tPqCZDDBcbVzhP&branch=master)](https://travis-ci.com/GX-CHEN/es6-webpack-boilerplate)

# es6 webpack boilerplate

This boilerplate is based on open-source project https://github.com/cvgellhorn/webpack-boilerplate. The additional setup including:

1. unit test with Jest
2. formatter using prettier
3. linter setup using ESLint
4. Automatic open project link in browser

## Setup

Install required dependencies by running the following command. Notice it requires installation of NodeJS (8.x or higher) and npm (4.x or higher).

```sh
$ npm install
```

## Development

This command will run on local with hot-reload at [http://localhost:8080/](http://localhost:8080/). Browser tab will open automatically.

```sh
$ npm run dev
```

## Unit Test

The following command will run unit tests, and output coverage report.

```sh
$ npm run test
```

## Deployment

Generate production-ready build (bundled and minified).

```sh
$ npm run build
```

## Code Style

ESLint & Prettier dev-dependency as well as config files (.eslintrc & .prettierrc) are included in this project. After `npm install`, linting and formating can be fully integrated with IDE/Text Editor by install plugins (like on VSCode or Webstorm). My code fully passed linting rules, and fully formatted.
