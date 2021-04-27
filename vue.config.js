const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const port = 9999
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
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
          '@v': resolve('src/views'),
          '@s': resolve('src/styles')
        }
      }
    })
  }
}
