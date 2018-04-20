const path = require('path');

module.exports = {
    //设置入口文件
    entry: {
        client: ['./src/client/main.js'],
        admin: ['./src/admin/main.js']
    },
    //出口文件
    output: {
        //根据config模块得知是根目录下的dist文件夹
        path: path.join(__dirname, '../src/dist'),
        filename: '[name].bundle.js',
    }, module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            //精准匹配，使用vue来替代vue/dist/vue.esm.js路径
            'vue$': 'vue/dist/vue.esm.js',
            //使用@替代src路径，当你引入src下的文件是可以使用import xx from "@/XX.js"
            '@': path.resolve(__dirname, '../src'),
            '_': path.resolve(__dirname, '../node_modules')
        }
    },
    mode: 'none'
};
