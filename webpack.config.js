// const path = require('path');
// module.exports = {
//   entry: './demo/index.js',
//   mode: 'none',
//   output: {
//     path: path.resolve(__dirname, 'output'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js/,
//         use: [
//           {
//             loader: './dist/index.js',
//             options: {
//               js: true,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.css$/i,
//         use: ['css-loader'],
//       },
//       // {
//       //   test: /\.(png|jpe?g|gif)$/i,
//       //   use: [
//       //     {
//       //       loader: 'file-loader',
//       //       options: {
//       //         name: '[name].[ext]',
//       //       },
//       //     },
//       //   ],
//       // },
//     ],
//   },
// };
module.exports = require('@talentui/webpack-config')({
  entry: './src/index.js',
});
