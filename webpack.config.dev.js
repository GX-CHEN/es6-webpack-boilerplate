const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(webpackConfig, {
  devtool: 'eval',

  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  },

  devServer: {
    host: '0.0.0.0'
  },

  plugins: [new OpenBrowserPlugin({ url: 'http://localhost:8080' })]
});
