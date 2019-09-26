const merge = require('webpack-merge')
const paths = require('./paths')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  // devServer: {
  //   contentBase: paths.dist,
  //   host: '0.0.0.0',
  //   port: 9011,
  //   historyApiFallback: {
  //     index: 'index.html',
  //   },
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': '*',
  //   },
  //   proxy: proxyConfig,
  //   hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  //   https: false, // true for self-signed, object for cert authority
  //   writeToDisk: true,
  //   // noInfo: true, // only errors & warns on hot reload
  // },
})
