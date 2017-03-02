'use strict'

const webpack = require('webpack')
const path = require('path')

const configuration = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'react-hot', include: path.join(__dirname, 'app') },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'sourcemap',
  cache: true
}

module.exports = configuration
