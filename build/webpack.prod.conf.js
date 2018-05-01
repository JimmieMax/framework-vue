const
    path = require('path'),
    webpack = require('webpack'),
    Merge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    utils = require('./utils'),
    baseConfig = require('./webpack.base.conf');

module.exports = Merge(baseConfig, {
    output: {
        //根据config模块得知是根目录下的dist文件夹
        path: path.join(__dirname, '../src/dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: true
        })
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Webpack Koa Vue Element-ui',
            filename: path.resolve(__dirname, '../src/dist/index.html'),
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true,
            chunks: ['client'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        new HtmlWebpackPlugin({
            title:'Admin',
            filename: path.resolve(__dirname, '../src/dist/admin.html'),
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true,
            chunks: ['admin'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // extract css into its own file
        // new ExtractTextPlugin('css/[name].[contenthash].css'),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
            allChunks: true
        })
    ],
    mode: 'production',
});