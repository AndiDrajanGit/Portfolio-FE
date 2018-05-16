'use strict';

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('./polyfills'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.appIndexJs,
  ],
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  // module: {
  //   rules: [
  //     {
  //       oneOf: [
  //         {
  //           test: /\.css$/,
  //           use: ExtractTextPlugin.extract({
  //             use: [
  //               {
  //                 options: {
  //                   localIdentName: '[local]'
  //                 }
  //               },
  //             ]
  //           })
  //         },
  //         {
  //           test: /\.scss$/,
  //           use: ExtractTextPlugin.extract({
  //             use: [
  //               {
  //                 options: {
  //                   localIdentName: '[local]'
  //                 }
  //               },
  //             ]
  //           })
  //         },
  //       ]
  //     }
  //   ]
  // },
  plugins: [
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ExtractTextPlugin({filename: 'style.css', allChunks: true})
  ],
});