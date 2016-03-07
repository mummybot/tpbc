/*global require module  __dirname*/
/*
  Add livereload for external server
  https://github.com/napcs/node-livereload
 */
var path = require('path');
var livereloadExternalServer = require('livereload');

module.exports = function() {
  // Directory location of external files to be watched.
  var dir = path.join(__dirname, '/../');
  var config = {
    exclusions: [/\\html\//,/\\.css\//,/\\.js\//,/\\.png\//,/\\.gif\//,/\\.jpg\//,/\\.php5\//,/\\.py\//,/\\.rb\//,/\\.erb\//,/\\.coffee\//],
    port: 3002,
    usePolling: true
  };
  var server = livereloadExternalServer.createServer(config);
  server.watch(dir);
  console.log('livereload server running on http://localhost:3002');
  console.log('Watching ' + dir);
};