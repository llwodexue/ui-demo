const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const port = process.env.port || 9999
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true
  },
  configureWebpack: config => {
    Object.assign(config, {
      resolve: {
        alias: {
          '@': resolve('src'),
          '@c': resolve('src/components'),
          '@v': resolve('src/views')
        }
      }
    })
  }
}
