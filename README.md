# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Usage

### With `@vitejs/plugin-react`

```bash
npm init vite@latest my-react-app -- --template react
# or
yarn create vite my-react-app --template react
```

### With `@vitejs/plugin-react-swc`

```bash
npm init vite@latest my-react-app -- --template react-swc
# or
yarn create vite my-react-app --template react-swc
```

## Features

- [React Fast Refresh](https://reactnative.dev/docs/fast-refresh)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [VS Code](https://code.visualstudio.com/) settings for automatic formatting on save

## Scripts

- `dev`: Start development server
- `build`: Production-ready build
- `serve`: Preview production-ready build

## Notes

- [Vite](https://vitejs.dev/) is a new frontend build tool that is fast, lean, and easy to use. It abstracts away the bundler (Rollup) and provides a set of integrations for other tools and libraries. It also provides a [rich plugin API](https://vitejs.dev/guide/api-plugin.html) for extending the build pipeline.
- [React Fast Refresh](https://reactnative.dev/docs/fast-refresh) is a new feature that lets you reload React components instantly without losing their state. It is similar to [React Hot Loader]
- [SWC](https://swc.rs/) is a super-fast TypeScript / JavaScript compiler written in Rust. It is a drop-in replacement for Babel.
- [Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) is a very light-weight solution for testing React components. It provides light utility functions on top of [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro/) by adding APIs for working with React components.
- [ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. It is configured with [Prettier](https://prettier.io/) to format code automatically.
- [VS Code](https://code.visualstudio.com/) is a popular code editor that supports [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) out of the box. It is configured to format code automatically on save.