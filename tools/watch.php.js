var config = require('./watch/config.php.json'),
  watch = require('./watch/watch.js');

module.exports = function(filename) {
  return watch(filename, config);
}
