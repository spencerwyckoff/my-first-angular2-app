var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src/main.ts'),
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    root: [path.join(__dirname, 'src')],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.ts', '.tsx'],
  },
  module: {
    preLoaders: [
      {
        loader: 'tslint-loader',
        test: /\.tsx?$/,
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
  tslint: {
    configuration: require('./tslint.json'),
  },
  stats: {
    colors: true,
    reasons: true,
  },
  devServer: {
    stats: 'errors-only',
    inline: true,
    colors: true,
  },
};
