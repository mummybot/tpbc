import Hamburger from './components/hamburger/hamburger';
import React from 'react';
import _logo from './components/logo/logo';
import _navigationMain from './components/navigationMain/navigationMain';
import _search from './components/search/search';
import {hashHistory} from 'react-router';
import s from './header.css';

const OPEN = 'open';
const CLOSED = 'closed';
const TRANSITION_CLOSED = 'transitionClosed';
const TRANSITION_OPEN = 'transitionOpen';
const AUTO = 'auto';
const BREAKPOINT_TABLET = 400;

export default React.createClass({
  propTypes: {
    params: React.PropTypes.shape({
      menu: React.PropTypes.string
    })
  },
  getInitialState() {
    return {
      menu: this.props.params.menu ? OPEN : CLOSED
    };
  },
  componentDidMount() {
    this.domNode = document.querySelector('.header .container');

    window.addEventListener('hashchange', this.handleHashChange);
    window.addEventListener('resize', this.updateBrowser);

    this.updateBrowser();
  },
  componentWillUnmount() {
    this.domNode.removeAttribute('style');

    window.removeEventListener('hashchange', this.handleHashChange);
    window.removeEventListener('resize', this.updateBrowser);
  },
  setStyles(width, height, left) {
    const style = this.domNode.style;

    style.width = width;
    style.height = height;
    style.left = left;
  },
  updateBrowser() {
    // Menu is closed
    if (this.state.menu === CLOSED) {
      if (window.innerWidth >= BREAKPOINT_TABLET) {
        this.setStyles(AUTO, AUTO, AUTO);
      } else {
        this.setStyles(
          `${window.innerWidth}px`,
          `${window.innerHeight}px`,
          `${-1 * window.innerWidth}px`
        );
      }
    } else
    // Menu is open
    if (window.innerWidth >= BREAKPOINT_TABLET) {
      this.setStyles(AUTO, AUTO, AUTO);
    } else {
      this.setStyles(
        `${window.innerWidth}px`,
        `${window.innerHeight}px`,
        0
      );
    }
  },
  handleHashChange() {
    if (this.state.menu === OPEN) {
      this.setState({
        menu: TRANSITION_OPEN
      }, () => {
        setTimeout(() => {
          this.setState({
            menu: CLOSED
          }, this.updateBrowser);
        }, 150);
      });
    } else {
      this.setState({
        menu: TRANSITION_CLOSED
      }, () => {
        setTimeout(() => {
          this.setState({
            menu: OPEN
          }, this.updateBrowser);
        }, 150);
      });
    }
  },
  toggle() {
    if (this.state.menu === OPEN) {
      hashHistory.push('/');
    } else {
      hashHistory.push('/menu/open');
    }
  },
  render() {
    return <div>
      <Hamburger toggle={this.toggle} menu={this.state.menu} />
    </div>;
  }
});
