# GEM-TypeScript

> A starter project that brings GraphQl, Express, MongoDB, and TypeScript together and makes them play nice with each other.

---

## Overview

This project bootstraps the technologies I usually use in building backends and preconfigures them to interact seamlessly right out of the box. These technologies include.

- GraphQl
- Express
- MongoDB
- TypeScript
- Eslint
- Prettier
- Husky
- Lint-staged
- Nodemon

Express handles creating the server, while GraphQl handles API requests and its resolution. MongoDB and Mongoose coordinate data persistence. And Typescript ensures far less bugs, if any, are pushed to production.
Eslint and Prettier enforce code consistency which means your code style and presentation will be uniform throughtout the project - regardless of whether you're working solo or in a team.

Lint-staged ensures that all your code is linted and checked by Prettier and Eslint. Husky is there to guarantee that each time you try to commit your code, it is meticulously squeezed through Lint-staged. This means you'll have an opportunity to address any errors or inconsistencies in your code _before_ it is commited. Nodemon provides a better developer experience with hot module reloading. It also provides a simpler way to deal with enviroment variables.

Note that this starter includes a fully functional sample GraphQl and Mongoose implementation. Feel free to do whatever you want with it

## Get started

This project uses a `nodemon.json` file to store environment variables under the `env` key. Simply remove the 'temp' in `temp.nodemon.json` filename and you'd have an environment variables template pre-populated with the keys whose values - provided by you of course - will facilitate connection to a MongoDB database. Once this necessary item is sorted, you're ready to go. Just run the following commands in order.

```bash
# Install dependencies
yarn

# Enable Husky
yarn husky install

# Start dev server
yarn dev
```

## Production

Remember to build your typescript files into javascript before deployment. Just run the following command.

```bash
# Build production files
yarn build
```

After your TypeScript compiles into JavaScript, you're ready to deploy everything in your dist folder. Just go ahead and start your server.

```bash
# Start production Server
yarn start
```
