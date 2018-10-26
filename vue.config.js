// vue.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    chainWebpack: config => {
        config.plugin("html")
        .tap(options => {
            options[0].filename = 'index.ejs';
            return options;
        })
      }
    
}