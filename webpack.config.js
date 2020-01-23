const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './public/index.html', 
          filename: 'index.html', 
        }),
    ],
    devServer:{
        contentBase:'./public',
        host:'localhost',
        port:8080
    }
}