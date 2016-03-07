/*global require*/
var livereloadExternalServer = require('./livereloadExternalServer.js');

// Run livereload for external server.
// Useful if files in external server that are not watched by webpack are modified,
// specifically any rendered server side templates
livereloadExternalServer();