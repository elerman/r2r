const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {app:'./app.js'},
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules:['node_modules','bower_components'],
    descriptionFiles: ['package.json', 'bower.json']
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.less$/,
        loader: ['style-loader','css-loader', 'less-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
    lazy: false,
    historyApiFallback: {
      index: '/'
    }
  },
  plugins: [new HtmlWebpackPlugin({
    title: "React webpack test",
    template: 'index.html',
    filename: 'index.html'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new CleanWebpackPlugin(['dist'])
  ]
};
