const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const config = {
  mode:"development",
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  devServer: {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
	      include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'env', 'react' ] },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [htmlPlugin]
};
module.exports = config;
