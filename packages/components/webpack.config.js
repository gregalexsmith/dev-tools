/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This webpack config is only used for React Cosmos
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, 'cosmos'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.join(__dirname, 'cosmos'),
    compress: true,
    port: 4000
  }
};
