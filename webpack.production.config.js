'use strict'

const webpack = require('webpack')
const path = require('path')

const configuration = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'react-hot-loader', include: path.join(__dirname, 'app') },
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(
      {
        'process.env.NODE_ENV': JSON.stringify('production')
      }
    ),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devtool: 'cheap-source-map',
  cache: true
}

module.exports = configuration
