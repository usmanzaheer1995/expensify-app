const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
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
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }, 
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      CSSExtract
    ],

    // devtool is used for debugging
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
};
