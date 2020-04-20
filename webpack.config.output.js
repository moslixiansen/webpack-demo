const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/manager-output/index.js',
    print: './src/manager-output/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "管理输出"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist/manager-output')
  }
}
