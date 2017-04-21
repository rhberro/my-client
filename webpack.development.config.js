'use strict'

const webpack = require('webpack')
const path = require('path')

const configuration = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '8080',
    hot: true
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
        'process.env.NODE_ENV': JSON.stringify('development')
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: 'eval',
  cache: false
}

module.exports = configuration
