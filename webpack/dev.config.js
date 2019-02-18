const path = require('path');
const webpack = require('webpack');

const host = 'localhost';
const port = 3000;

const baseDevConfig = () => ({
  entry: {
    app: [path.join(__dirname, '../chrome/extension/app')],
    background: [path.join(__dirname, '../chrome/extension/background')],
  },
  devMiddleware: {
    publicPath: `http://${host}:${port}/js`,
    stats: {
      colors: true
    },
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  output: {
    path: path.join(__dirname, '../dev/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
    new webpack.DefinePlugin({
      __HOST__: `'${host}'`,
      __PORT__: port,
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
});

const appConfig = baseDevConfig();

module.exports = [
  appConfig
];
