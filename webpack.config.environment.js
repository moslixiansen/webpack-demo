const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/environment/index.js',
    print: './src/environment/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/environment', // --open 的参数， 要打开文件的路径
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "开发环境"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist/environment'),
    publicPath: "/"
  }
}
