const path = require('path')

module.exports = {
  publicPath: '/aftvc/dist/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    devServer: {
      // proxy: {
      //   '/api': {
      //     target: 'http://127.0.0.1:8080',
      //     ws: true,
      //     changeOrigin: true
      //   }
      // }
    }
  }
}
