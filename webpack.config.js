/*global require module __dirname*/
var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
var precss = require('precss');
var stripInlineComments = require('postcss-strip-inline-comments');

var buildPath = '/wp-content/themes/tpbc/build/';
var webpackServerURL = 'http://localhost:8080';
var externalServerURL = 'http://tpbc.dev';

var config = {
  entry: [
    'webpack-dev-server/client?' + webpackServerURL + '/',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'wp-content/themes/tpbc/build'),
    filename: 'index.js',
    publicPath: buildPath
  },
  devtool: 'eval-source-map',
  resolve: { alias: {} },
  devServer: {
    contentBase: buildPath,
    proxy: {
      '*': {
        target: externalServerURL,
        bypass: function(req) {
          // Make sure that non-webpack assets have the correct host header so any vhost works correctly.
          if (req.headers && req.headers.accept) {
            // Detect requests that do not contain the build directory
            if (req.url.indexOf(buildPath) === -1) {
              req.headers.host = externalServerURL.split('/')[2];
            }
          }
        }
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
      { 
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        noParse: [],
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { 
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&importLoaders=1!postcss-loader?parser=postcss-scss')
      }
    ]
  },
  postcss: function(webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      stripInlineComments,
      precss,
      autoprefixer
    ];
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: webpackServerURL
      },
      {
        reload: false
      }
    ),
    // Output the CSS as a single CSS file and set its name.
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;