const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'App.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include:path.resolve(__dirname),
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader'
                    },
                    {
                      loader: 'sass-loader',
                      options: {
                        sourceMap: true,
                        // options...
                      }
                    }
                  ]
              }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './public/index.html', 
          filename: 'index.html', 
        }),
        new MiniCssExtractPlugin({
            filename: 'mystyles.css'
          })
    ],
    devServer:{
        contentBase:'./public',
        host:'localhost',
        port:8000
    }
}