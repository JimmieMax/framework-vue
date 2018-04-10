const path = require('path')
    , webpack = require('webpack')
    , merge = require('webpack-merge')
    , OpenBrowserPlugin = require('open-browser-webpack-plugin')
    , config = require('../config')
    , baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    entry: {
        client: [
            `webpack-dev-server/client?http://${config.Server.host + ":" + config.Server.port}`
        ],
        admin: [
            `webpack-dev-server/client?http://${config.Server.host + ":" + config.Server.port}`
        ]
    },
    plugins: [
        //根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
        new webpack.optimize.OccurrenceOrderPlugin(),
        //模块热替换,如果不在dev-server模式下，需要记录数据，recordPath，生成每个模块的热更新模块
        new webpack.HotModuleReplacementPlugin(),
        //报错但不退出webpack进程
        new OpenBrowserPlugin({
            url: `http://${config.Server.host + ":" + config.Server.port}`
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    mode: 'development',
    devtool: 'source-map',
});