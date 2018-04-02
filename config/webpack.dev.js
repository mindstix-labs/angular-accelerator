var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var envConfig = require('../app-config/dev.js');

commonConfig.module.rules.push({
  test: /\.ts$/,
  loaders: [
    {
      loader: 'awesome-typescript-loader',
      options: { configFileName: helpers.root('src', 'tsconfig.json') }
    },
    'angular2-template-loader',
    'angular-router-loader'
  ]
});

module.exports = webpackMerge(commonConfig, {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: envConfig.AppConfig.basePath,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});