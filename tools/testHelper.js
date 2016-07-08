/*global global*/
import jsdom from 'jsdom';

const doc = jsdom.jsdom(
  '<!doctype html><html><head></head><body></body></html>',
  {
    url: 'http://localhost:3000/',
    // url: 'file://',
    virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }
);
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// const jsReact = '/wp-content/themes/tpbc/node_modules/react/dist/react.min.js';
// const scriptEl = window.document.createElement('script');

// scriptEl.src = jsReact;
// window.document.head.appendChild(scriptEl);

// Prevent mocha from interpreting CSS @import files
function noop() {
  return null;
}

require.extensions['.css'] = noop;
