const path = require('path');
const copy = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  devServer: {
    port: 9000,
    hot: true,
  },
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [new copy({ patterns: [{ from: 'public' }] })],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
