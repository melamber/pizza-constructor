const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './client/app.js'],
    output: {
        path: __dirname + '/public/static/build/',
        filename: 'main.js',
        publicPath: '/static/build/',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader', 'css-loader!autoprefixer-loader'
                )
            }, {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract(
                    'style-loader','css-loader!autoprefixer-loader!resolve-url!sass-loader?sourceMap'
                )
            }, {
                test: /\.jsx$/,
                loader: 'react-hot!babel',
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.(woff|woff2|ttf|eot)/,
                loader: 'url-loader?limit=1'
            }, {
                test: /\.svg/,
                loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.WatchIgnorePlugin([
            path.resolve(__dirname, './pizza_files/'),
        ]),
    ],
};
