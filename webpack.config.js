'use strict'

const webpack = require('webpack')
const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')

const configuration = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app')
  ],
  output: {
    path: path.resolve(__dirname, 'public/build/'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loaders: [ 'html-loader' ]
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(
      {
        'process.env.NODE_ENV': JSON.stringify('development')
      }
    ),
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico'),
        inject: true,
        minify: false
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    hot: true
  }
}

module.exports = configuration
