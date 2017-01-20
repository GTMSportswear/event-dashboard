// const ExtractTextPlugin = require('extract-text-plus-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: 'index.js'
  },
  // plugins: [
  //   new ExtractTextPlugin('styles/styles.css'),
  //   new CleanWebpackPlugin(['dist'], {
  //     verbose: true,
  //     dry: false
  //   })
  // ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};