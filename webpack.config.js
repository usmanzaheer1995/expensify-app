const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // loaders
  module: {
    rules: [
      {
        // this rule says that whenever you see a file ending with .js and it's not in
        // the node_modules folder, go ahead and run it through babel

        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        // the ? in s?css means that the s is optional
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  // devtool is used for debugging
  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
