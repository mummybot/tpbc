import Htmltojsx from 'htmltojsx';
import reactTools from 'react-tools';

const converter = new Htmltojsx({
  createClass: false
});

function convertToJSX(str) {
  const ret = reactTools.transform(converter.convert(str));

  return eval(ret);
}

function removeNode(node) {
  node.parentNode.removeChild(node);
}

const cache = {};

export default function insertExistingHTML(query, dontRemoveOriginal) {
  if (cache[query]) {
    return cache[query];
  }

  const node = document.querySelector(query);

  if (!node || node.constructor === NodeList) {
    return null;
  }

  // Modern browsers support outerHTML
  const DIV = document.createElement('div');

  if ('outerHTML' in DIV) {
    cache[query] = convertToJSX(node.outerHTML);
  } else {
    // Older browsers, wrap elemnt in parent DIV and get innerHTML
    const div = DIV.cloneNode();

    div.appendChild(node.cloneNode(true));

    cache[query] = convertToJSX(div.innerHTML);
  }

  if (!dontRemoveOriginal) {
    removeNode(node);
  }

  return cache[query];
}
