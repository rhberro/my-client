'use strict'

const webpack = require('webpack')
const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')

const configuration = {
  entry: [
    path.resolve(__dirname, 'app')
  ],
  output: {
    path: path.resolve(__dirname, 'public/build/'),
    filename: '[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.html$/, loaders: [ 'html-loader' ] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(
      {
        'process.env.NODE_ENV': JSON.stringify('production')
      }
    ),
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico'),
        inject: true,
        minify: {}
      }
    ),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devtool: 'cheap-source-map',
  cache: true
}

module.exports = configuration
