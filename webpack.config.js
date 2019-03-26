const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const devMode = process.env.NODE_ENV !== 'production';
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');


module.exports = {
  entry: ['./src/js/index.jsx', './src/scss/main.scss'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
  },

  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin([
      { from: 'src/fonts', to: 'fonts' },
      { from: 'src/img', to: 'img' },
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify('https://github.com/OlegBabiuk/test-task-zazend/dist'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true,
  },
};
