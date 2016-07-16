/*global __dirname*/
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import calcFunction from 'postcss-calc-function';
import path from 'path';
import postcssImport from 'postcss-import';
import precss from 'precss';
import stripInlineComments from 'postcss-strip-inline-comments';
import webpack from 'webpack';

const browserSyncPort = 3000,
  buildPath = '/wp-content/themes/tpbc/build/',
  externalServerURL = 'http://tpbc.local',
  webpackServerURL = 'http://' + require('ip').address() + ':8080',
  config = {
    entry: {
      app: [
        `webpack-dev-server/client?${webpackServerURL}/`,
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/index.jsx')
      ]
    },
    output: {
      path: path.resolve(__dirname, buildPath),
      filename: '[name]-bundle.js',
      publicPath: buildPath
    },
    devtool: 'source-map',
    devServer: {
      contentBase: buildPath,
      proxy: {
        '*': {
          target: externalServerURL,
          bypass: function bypass(req) {
            // Make sure that non-webpack assets have the
            // correct host header so any vhost works correctly.
            if (req.headers && req.headers.accept) {
              // Detect requests that do not contain the build directory
              if (req.url.indexOf(buildPath) === -1) {
                const domainIndex = 2;

                req.headers.host = externalServerURL.split('/')[domainIndex];
              }
            }
          }
        }
      }
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'tools')
          ],
          exclude: [
            /node_modules/,
            path.resolve(__dirname, 'js'),
            path.resolve(__dirname, 'build')
          ],
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url-loader?limit=8192'
        },
        {
          test: /\.s?css$/,
          loader: ExtractTextPlugin.extract('style-loader',
          `css-loader?sourceMap&importLoaders=1
          !postcss-loader?parser=postcss-scss`)
        }
      ]
    },
    // Pass in webpack instance
    postcss: function postcss(wp) {
      return [
        postcssImport({addDependencyTo: wp}),
        stripInlineComments,
        precss,
        calcFunction,
        autoprefixer
      ];
    },
    plugins: [
      // Required for htmltojsx to use JSDom instead of Node environment
      new webpack.DefinePlugin(
        {
          IN_BROWSER: true
        }
      ),
      new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: browserSyncPort,
          proxy: webpackServerURL
        },
        {
          reload: false
        }
      ),
      // Output the CSS as a single CSS file and set its name.
      new ExtractTextPlugin('styles.css', {allChunks: true}),
      new webpack.HotModuleReplacementPlugin()
    ]
  };

export default config;
