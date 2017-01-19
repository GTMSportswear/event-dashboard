module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
};