/*global require module __dirname*/
var path = require('path'),
    webpack = require('webpack'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    postcssImport = require('postcss-import'),
    precss = require('precss');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:9090',
        'webpack/hot/only-dev-server',
        './entry.js'
  ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { 
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&modules&importLoaders=1!postcss-loader')
            }
        ]
    },
    postcss: function(webpack) {
        return [
            postcssImport({ addDependencyTo: webpack }),
            precss,
            autoprefixer
        ];
    },
    plugins: [
        // new BrowserSyncPlugin(
        //     // Browser-sync options
        //     {
        //         // browse to http://localhost:3000/ during development
        //         host: 'localhost',
        //         port: 3000,
        //         // proxy the Webpack Dev Server endpoint
        //         proxy: 'http://localhost:9090/'
        //     },
        //     // plugin options 
        //     {
        //         // prevent BrowserSync from reloading the page
        //         // and let Webpack Dev Server take care of this
        //         reload: false
        //     }
        // ),
        // Set the name of the single CSS file here.
        new ExtractTextPlugin('main.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin()
    ]
};