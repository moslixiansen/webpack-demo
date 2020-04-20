const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/manager-resource/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist/manager-resource')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|gif|jpg)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      },
      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },
      {
        test: /\.xml$/,
        use: 'xml-loader'
      }
    ]
  }
}
