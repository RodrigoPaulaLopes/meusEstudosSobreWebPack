const modoDEV = process.env.NODE_ENV !== "production" 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const optmizeCssAssetsPlugin = require('optmize-css-assets-webpack-plugin')
module.exports = {
     mode: modoDEV ? 'devolopment': 'production',
     entry: './src/principal.js',
     output: {
          filename: 'principal.js',
          path: __dirname + '/public'
     },
     devServer: {
          contentBase: './public',
          port: 9000
     },
     optimization: {
          minimizer: [
               new uglifyJsPlugin({
                    cache: true,
                    parallel: true
               }),
               new optmizeCssAssetsPlugin({})

               
          ]
     },
     plugins: [
          new MiniCssExtractPlugin({
               filename: "style.css",

          })
     ],
     modules: [{
          test: /\.s?[ac]ss$/,
          use: [
               MiniCssExtractPlugin.loader,
               //'style-loader', //adiciona style na dom injetando a tag <style>
               'css-loader', //responsavel pelos imports
               'sass-loader',
          ]
     }, {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
     }]
}