 // vue.config.js
 module.exports = {
  publicPath: 'eu-vue',
  // test
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  }
}