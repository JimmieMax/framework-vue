const path = require('path')
    , webpack = require('webpack')
    , merge = require('webpack-merge')
    , baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    optimization: {
        minimize: true
    },
    mode: 'production',
});