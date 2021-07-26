module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:6060',
        pathRewrite: { 
          '^/api': '' 
        },
        changeOrigin: true
      }
    }
  }
}