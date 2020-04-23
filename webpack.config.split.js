const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/code-split/index.js',
    // another: './src/code-split/another-module.js',
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    // chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist/code-split')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "缓存"
    }),
    new webpack.HashedModuleIdsPlugin() // 保持 vendor hash 不变
  ],
  optimization: {
    runtimeChunk: 'single',

    splitChunks: {
      // chunks: "all",
      cacheGroups: { // main 不再含有来自 node_modules 目录的 vendor 代码
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  }
}
