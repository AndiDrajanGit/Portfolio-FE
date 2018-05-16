const eslintFormatter = require('react-dev-utils/eslintFormatter');
const paths = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');

const envNode = getClientEnvironment().stringified['process.env'].NODE_ENV;

module.exports = {
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      'react-native': 'react-native-web',
    },
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              compact: true,
            },
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: envNode === '"development"' ? '[local]' : '[name]__[local]__[hash:base64:5]'
                  }
                },
                'postcss-loader'
              ]
            })
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    sourceMap: true,
                    importLoaders: 2,
                    localIdentName: envNode === '"development"' ? '[local]' : '[name]__[local]__[hash:base64:5]'
                  }
                },
                'sass-loader'
              ]
            })
          },
          {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            include: paths.fonts,
            loader: require.resolve('file-loader'),
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'static/fonts/'
            }
          },
          {
            test: /\.(jpe?g|png|bmp|gif|svg)$/,
            loader: require.resolve('file-loader'),
            exclude: paths.fonts,
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'static/img/'
            }
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [
              /\.html$/,
              /\.(js|jsx|mjs)$/,
              /\.json$/,
              /\.css$/,
              /\.scss$/,
              /\.(jpe?g|png|bmp|gif|svg)$/,
              /\.(woff|woff2|eot|ttf|svg)$/,
            ],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      }
    ]
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}











