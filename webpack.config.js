var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: './js/app.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js',
         publicPath:'/build/'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['env']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
 };