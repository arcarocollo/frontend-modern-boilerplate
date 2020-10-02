const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = 'development') => ({
  mode: env.mode,
  entry: './src/index.ts',
  output: {
    filename: `main${env.mode === 'production' ? '.[hash]' : ''}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true
      }
    })
  ]
});