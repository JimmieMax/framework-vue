const path = require('path'),
    webpack = require('webpack');
    // ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ['transform-runtime']
                }
            },

            // 为了统计代码覆盖率，对 js 文件加入 istanbul-instrumenter-loader
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                include: /src|packages/,
                enforce: 'post',
                use: [{
                    loader: "istanbul-instrumenter-loader",
                    options: {
                        esModules: true
                    },
                }]
            },

            // vue loader
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        // 为了统计代码覆盖率，对 vue 文件加入 istanbul-instrumenter-loader
                        preLoaders: {
                            js: 'istanbul-instrumenter-loader?esModules=true'
                        }
                    }
                }]
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    mode: 'development',
}