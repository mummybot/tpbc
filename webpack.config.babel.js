/*global __dirname,process*/
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import calcFunction from 'postcss-calc-function';
import path from 'path';
import postcssImport from 'postcss-import';
import precss from 'precss';
import stripInlineComments from 'postcss-strip-inline-comments';
import webpack from 'webpack';

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const config = ENV === 'production' ?
  require('./webpack.config.prod.js') : require('./webpack.config.dev.js');

export default config;
