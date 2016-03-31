module.exports = function (fileName, config) {
  var curExtension,
     include = (config.include || []).join(),
     exclude = (config.exclude || []).join();

  // Is a file
  if (fileName.indexOf('.') !== -1) {
    curExtension = fileName.split('.')[1];

    if (include.indexOf(curExtension) === -1) {
      // Is not in the include extensions, do not watch
      return false;
    }

    if (exclude.indexOf(curExtension) !== -1) {
      // Is in the exclude extensions, do not watch
      return false;
    }
  }
  // Watch this file or folder
  return true;
};