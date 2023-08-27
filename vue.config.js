// const { defineConfig } = require("@vue/cli-service")

const path = require("path")
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
      
      },
    },
    externals: {
      react: "var window.React",
      "react-dom": "var window.ReactDOM",
      "prop-types": "var window.PropTypes",
      "@alifd/next": "var window.Next",
      "@alilc/lowcode-engine": "var window.AliLowCodeEngine",
      "@alilc/lowcode-engine-ext": "var window.AliLowCodeEngineExt",
      moment: "var window.moment",
      lodash: "var window._",
    },
  },
  devServer: {
    overlay: {
      errors: false ,
      warnings: false
     }
  },
}
