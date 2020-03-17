const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: ["babel-polyfill", "./src/App.js"]
  },
  output: {
    path: path.resolve(__dirname, "./backend/timeCard/static/templates"),
    filename: "static/js/App.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname),
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
              // options...
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        loader: "file-loader",
        options: {
          name: "static/images/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/mystyles.css"
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "./public",
    host: "localhost",
    port: 8000
  }
};
