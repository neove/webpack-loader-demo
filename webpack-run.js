const webpack = require('webpack'); // to access webpack runtime

const configuration = require('./webpack.config.js');

const compiler = webpack(configuration);

new webpack.ProgressPlugin().apply(compiler);

compiler.run(function (err, stats) {
  // ...
});
