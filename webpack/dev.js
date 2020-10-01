const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        contentBase: './public'
    }
})
