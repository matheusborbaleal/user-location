const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/user-location/'
    : '/',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: {
    extract: false
  },

  devServer: {
    proxy: {
      '/place': {
        target: 'https://maps.googleapis.com/maps/api/'
      },
      '/api': {
        target: 'https://reqres.in/'
      }
    }
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/core_style/all.styl'),
      ],
    })
}