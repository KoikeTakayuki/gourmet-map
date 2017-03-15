var webpack = require("webpack");

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/app/scripts',
    filename: 'bundle.js',
        publicPath: '/app/',
  },
  devServer: {
    contentBase: 'app',
    port: 3000
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.vue$/, loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {vue: 'vue/dist/vue.js'}
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}