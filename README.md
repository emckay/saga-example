## React Re-enact

This application shows examples of how to use [Redux Saga](https://github.com/yelouafi/redux-saga) to manage sever communcation and other asynchronous actions.

The application retrieves famous speeches from a Firebase database and plays them back to the user phrase-by-phrase with a variable-length pause between each phrase.

## Packages Used

Build: Webpack, Babel (es2015 and React), webpack-dev-server, react-hot-loader

Test: Mocha, Chai

Front-end: React, React-Dom, Redux, Redux Saga

## How to Run Things

Install all dependencies:

```
npm install
```

Build production version:

```
npm run webpack:prod
```

Run tests automatically when files change:

```
npm run test:watch
```

Run webpack-dev-server (`master` branch is configuration for Cloud9. `local` branch has configuration for running on localhost).

You don't need to run `webpack:watch` if you are running the dev server.

```
npm run webpack-dev-server
```
