const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',  // Coloque a URL do seu servidor Nest.js
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',  // Remova '/api' do caminho da URL
        },
      },
    },
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
