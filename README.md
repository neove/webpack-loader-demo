# webpack loader

- loader 本质其实是一个函数，在 webpack 构建过程中，当某种类型的资源文件匹配到该 loader 之后，就会调用该函数，并将文件内容作为参数传递进去，loader 负责处理 souce code ，并将处理完结果作为返回值返回。

A loader is a node module that exports a function. This function is called when a resource should be transformed by this loader. The given function will have access to the Loader API using the this context provided to it.

```javascript
function loader(content) {} // content就是文件内容
```

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# webpack-loader

## Getting Started

To begin, you'll need to install `webpack-loader`:

```console
$ npm install webpack-loader --save-dev
```

<!-- isLoader ? use(this) : delete(isPlugin) -->

Then add the loader to your `webpack` config. For example:

<!-- isPlugin ? use(this) : delete(isLoader) -->

Then add the plugin to your `webpack` config. For example:

**file.ext**

```js
import file from 'file.ext';
```

<!-- isLoader ? use(this) : delete(isPlugin) -->

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.ext$/,
        use: [
          {
            loader: `webpack-loader`,
            options: { ...options },
          },
        ],
      },
    ],
  },
};
```

<!-- isPlugin ? use(this) : delete(isLoader) -->

**webpack.config.js**

```js
module.exports = {
  plugins: [
    new `Webpack`Plugin(options)
  ]
}
```

And run `webpack` via your preferred method.

## Options

### `[option]`

Type: `[type|other-type]`
Default: `[type|null]`

[ option description ]

<!-- isLoader ? use(this) : delete(isPlugin) -->

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        loader: `webpack-loader`,
        options: {
          [option]: '',
        },
      },
    ],
  },
};
```

<!-- isPlugin ? use(this) : delete(isLoader) -->

**webpack.config.js**

```js
module.exports = {
  plugins: [
    new `Webpack`Plugin({
      [option]: ''
    })
  ]
};
```

## Examples

[ example outline text ]

**webpack.config.js**

```js
// Example setup here..
```

**file.ext**

```js
// Source code here...
```

**bundle.js**

```js
// Bundle code here...
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/webpack-loader.svg
[npm-url]: https://npmjs.com/package/webpack-loader
[node]: https://img.shields.io/node/v/webpack-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/webpack-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/webpack-loader
[tests]: https://dev.azure.com/webpack-contrib/webpack-loader/_apis/build/status/webpack-contrib.webpack-loader?branchName=master
[tests-url]: https://dev.azure.com/webpack-contrib/webpack-loader/_build/latest?definitionId=2&branchName=master
[cover]: https://codecov.io/gh/webpack-contrib/webpack-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/webpack-loader
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=webpack-loader
[size-url]: https://packagephobia.now.sh/result?p=webpack-loader
