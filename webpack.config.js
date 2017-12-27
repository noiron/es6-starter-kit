var path = require('path');
var webpack = require('webpack');
var PorgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index'],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    devServer: {
        stats: 'errors-only',
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),
    },
    plugins: [
        // new PorgressBarPlugin(),
        new HtmlWebpackPlugin({
            title: 'demo',
            template: 'src/index.html'
        })
    ]
};
