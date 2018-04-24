module.exports = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  }
}
