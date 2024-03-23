const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}