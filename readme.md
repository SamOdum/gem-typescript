# GEM-TypeScript

> A starter project that brings GraphQl, Express, MongoDB, and TypeScript together and makes them play nice with each other.

---

## Overview

This project lays out the technologies I regularly use in a comprehensive and pre-cofigured plug-and-play way. These technologies include.

- GraphQl
- Express
- MongoDB
- TypeScript
- Eslint
- Prettier
- Husky
- Lint-staged
- Nodemon

Express handles creating the server, while GraphQl handles the API requests and their resolution. MongoDB and Mongoose coordinate data persistence. And Typescript ensures you'll push far less bugs, if any, to production.
Eslint and Prettier handle code consistency, style, and presentation. Lint-staged ensures that all your code is linted and checked by Prettier and Eslint, especially when you modify any files. Husky just makes sure that each time you try to commit your code, it is ran through Lint-staged and any errors or inconsistencies addressed _before_ it is commited. Nodemon just gives youa better developer experience with hot module reloading.

## Get started

```bash
# Install dependencies
yarn

# Enable Husky
yarn husky install

# Start dev server
yarn dev
```

## Production

Rememeber to build your typescript files into javascript before deployment.

```bash
# Build production files
yarn build
```
