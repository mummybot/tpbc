import _hamburger from './components/hamburger/hamburger.js';
import _logo from './components/logo/logo.js';
import _navigationMain from './components/navigationMain/navigationMain.js';
import _search from './components/search/search.js';
import s from './header.css';

// If screen resolution is < tablet show hamburger.
// Hamburger click shows navigation menu
// Navigation slides in from left. Contains menu items + search + close icon.
// Close icon hides navigation menu
// When screen resolution/orientation changes, if width > tablet set normal menu

// domNode
// onResize event
// if width < tabletwidth
// Set width and height of domNode
// else remove width and height

const auto = 'auto',
  breakpointTablet = 400;

export default class Header {
  constructor(domNode) {
    this.domNode = domNode;
    window.addEventListener('resize', (evt) => {
      this.resize(evt);
    });

    this.resize();
  }

  width(width) {
    this.domNode.style.width = width;
  }

  height(height) {
    this.domNode.style.height = height;
  }

  resize() {
    if (window.innerWidth > breakpointTablet) {
      this.width(auto);
      this.height(auto);
    } else {
      this.height(`${window.innerHeight}px`);
      this.width(`${window.innerWidth}px`);
    }
  }
}
