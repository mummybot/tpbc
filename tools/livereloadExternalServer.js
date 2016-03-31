/*global require module  __dirname*/
/*
  Add livereload for external server
  https://github.com/napcs/node-livereload
 */
const path = require('path'),
  livereload = require('livereload');

function createServer() {
  // Directory location of external files to be watched.
  const port = 3003,
    dir = path.join(__dirname, '/../build'),
    config = {
      port: port,
      usePolling: true
    },
    server = livereload.createServer(config);
  
  server.watch(dir);
  console.log('livereload server running on http://localhost:' + port);
  console.log('Watching ' + dir);
};

createServer();