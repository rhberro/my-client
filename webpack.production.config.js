'use strict'

const webpack = require('webpack')
const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CompressionPlugin = require('compression-webpack-plugin')

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
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader' ]
          }
        )
      }
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
    new webpack.optimize.UglifyJsPlugin(
      {
        sourceMap: true,
        compress: {
          warnings: false
        },
        comments: false
      }
    ),
    new ExtractTextPlugin('[hash].css'),
    new CompressionPlugin(
      {
        test: /\.js$|\.css$|\.html$/
      }
    ),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devtool: 'cheap-module-source-map'
}

module.exports = configuration
