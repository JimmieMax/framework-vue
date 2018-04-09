// const path = require('path'),
//     webpack = require('webpack'),
//     OpenBrowserPlugin = require('open-browser-webpack-plugin'),
//     config = require('../config');
//
// module.exports = {
//     entry: {
//         main: [
//             'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
//             './src/app/portal/main.js',
//         ]
//     },
//     output: {
//         path: path.join(__dirname, '../src/dist'),
//         filename: '[name].js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['es2015', 'stage-0'],
//                     plugins: ['transform-runtime']
//                 }
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['.js', '.vue', '.less'],
//         alias: {
//             'vue': 'vue/dist/vue.js'
//         }
//     },
//     plugins: [
//         new webpack.optimize.OccurrenceOrderPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//         // new OpenBrowserPlugin({
//         //     url: `http://${config.Server.host + ":" + config.Server.port}`
//         // }),
//         new webpack.NoEmitOnErrorsPlugin()
//     ],
//     mode: 'development',
//     devtool: 'source-map',
//     // watch: true
// };

const path = require('path')
    , webpack = require('webpack')
    , merge = require('webpack-merge')
    , config = require('../config')
    , baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    entry: {
        client: [
            'webpack-dev-server/client?http://localhost:5001/'
        ],
        admin: ['webpack-dev-server/client?http://localhost:5001/']
    },
    plugins: [
        //根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
        new webpack.optimize.OccurrenceOrderPlugin(),
        //模块热替换,如果不在dev-server模式下，需要记录数据，recordPath，生成每个模块的热更新模块
        new webpack.HotModuleReplacementPlugin(),
        //报错但不退出webpack进程
        new webpack.NoEmitOnErrorsPlugin()
    ],
});