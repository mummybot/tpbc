/*global require module __dirname*/
var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
var precss = require('precss');

var buildPath = 'wp-content/themes/tpbc/build/';
var webpackServerURL = 'http://localhost:8080';
var externalServerURL = 'http://tpbc.dev';

var config = {
  // The entry point for your src code.
  entry: [
    // Tell the webpack dev server about this entry point.
    'webpack-dev-server/client?' + webpackServerURL + '/',
    // Enable hot module reloading (HMR) for this entry point
    'webpack/hot/only-dev-server',
    // The location of the initial JS file.
    path.join(__dirname, 'src/index.js')
  ],
  // The location where your built code will be served from, either:
  // - Development: in memory from the webpack-dev-server,
  // - Build: output in the file system by webpack.
  output: {
    // The path to write the files to.
    path: path.resolve(__dirname, 'wp-content/themes/tpbc/build'),
    filename: 'index.js',
    // Tell the webpack dev server the absolute URL from where to serve the files.
    publicPath: webpackServerURL + '/' + buildPath
  },
  // Add aliases for vendor assets.
  resolve: { alias: {} },
  // Configuration options for the Webpack Dev Server
  devServer: {
    // Tell the webpack dev server from where to find the files to serve.
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
        noParse: [],
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { 
        test: /\.s?css$/,
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
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: webpackServerURL
    },
    {
      reload: false
    }),
    // Output the CSS as a single CSS file and set its name.
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;