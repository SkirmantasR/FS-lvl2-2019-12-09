const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Įdeda ... <style> ... CSS ... </style></head>
          'css-loader',
          'postcss-loader', // Uždeda papildomus prefix pagal anršyklę // Paverčia css į tekstą
          'sass-loader' // Paverčia scss į css
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html'
    })
  ]
});
