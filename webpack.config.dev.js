const path = require('path');
const webpack = require('webpack');

const base = require('./webpack.config.base.js');
const merge = require('webpack-merge');

module.exports = merge(base, {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'react-hot!babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './build',
        hot: 'true',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
