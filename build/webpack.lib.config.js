const webpack = require('webpack')
const config = require('./webpack.config')
const path = require('path')
config.entry = './src/index.vue'
config.output = {
  filename: 'index.js',
  library: 'VueContextMenu',
  libraryTarget: 'umd'
}
config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}))

module.exports = config