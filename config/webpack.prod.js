var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var envConfig = require('../app-config/prod.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

commonConfig.module.rules.push({
  test: /\.ts$/,
  loaders: [{
    loader: 'awesome-typescript-loader',
    options: { configFileName: helpers.root('src', 'tsconfig.json') }
  },
    'angular2-template-loader',
    'angular-router-loader?aot=true&genDir=src/aot'
  ]
},
  {
    test: /\.js$/,
    loader: 'rollup-loader',
    options: {
      plugins: [nodeResolve({ jsnext: true, module: true },
        commonjs({ include: 'node_modules/rxjs/**' }), )]
    },
  });

module.exports = webpackMerge(commonConfig, {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main-aot.ts'
  },
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: envConfig.AppConfig.basePath,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        properties: true, //rewrite property access using the dot notation, for example foo["bar"] → foo.bar
        sequences: true,  // join consecutive simple statements using the comma operator
        dead_code: true,  // remove unreachable code
        conditionals: true, // apply optimizations for if-s and conditional expressions
        booleans: true, // various optimizations for boolean context
        unused: true, // drop unreferenced functions and variables
        if_return: true,  // optimizations for if/return and if/continue
        join_vars: true,  // join consecutive var statements
        drop_console: true // discard calls to console.* functions
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
});
