var config = require('./watch/config.img.json'),
  watch = require('./watch/watch.js');

module.exports = function(filename) {
  return watch(filename, config);
}
