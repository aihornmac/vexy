const webpack = require('webpack');
const path = require('path');

const projectPath = path.join(__dirname, '..', '..');
const sourcePath = path.join(projectPath, 'src');
const buildPath = path.join(projectPath, 'build');
const basePath = path.join(sourcePath, 'exhibition');

const devServer = {
  publicPath: 'http://localhost:56121/static',
  host: 'localhost',
  hot: true,
  historyApiFallback: true,
  compress: true,
  port: 56121,
  stats: {
    colors: true,
    chunkModules: false,
    modules: false
  }
};

module.exports = {
  target: 'web',
  cache: true,
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${devServer.host}:${devServer.port}`,
      'webpack/hot/dev-server',
      'babel-polyfill',
      path.join(basePath, 'client')
    ]
  },
  output: {
    path: buildPath,
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: `http://${devServer.host}:${devServer.port}/static/`
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react'
          ],
          plugins: [
            'transform-decorators-legacy'
          ]
        },
        include: sourcePath
      },
      {
        test: /\.s(a|c)ss$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=newa_[local]_[hash:base64:5]!postcss!sass',
        include: sourcePath
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=newa_[local]_[hash:base64:5]!postcss',
        include: sourcePath,
      }
    ]
  },
  postcss: () => [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('postcss-nested'),
    require('postcss-discard-comments')({
      removeAll: true
    })
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer
};
