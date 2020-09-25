const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
//minimize style files size..convert it to inline
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// compress the minimized style files to smallest size 
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
//service worker ..to allow browser still opened when server is offline
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
           },
           {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8000,
                  name: 'images/[hash]-[name].[ext]',
                  publicPath: 'assets',
                }
              }
            ]
          }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxPlugin.GenerateSW()


    ]

}
