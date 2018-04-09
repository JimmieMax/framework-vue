const path = require('path')
    , webpack = require('webpack')
    , merge = require('webpack-merge')
    , baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    plugins: [
        //压缩js
        new webpack.optimize.UglifyJsPlugin(),
    ],
    mode: 'production',
});