'use strict'

const webpack = require('webpack')
const path = require('path')

webpack.optimize.CompressionPlugin = require('compression-webpack-plugin')

const configuration = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'react-hot-loader', include: path.join(__dirname, 'app') },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(
      {
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }
    ),
    new webpack.optimize.UglifyJsPlugin(
      {
        comments: false,
        compress: {
          unused: true,
          dead_code: true,
          warnings: false,
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: true,
          sequences: true,
          booleans: true
        }
      }
    ),
    new webpack.optimize.CompressionPlugin(
      {
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }
    ),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devtool: 'cheap-module-source-map',
  cache: true
}

module.exports = configuration
