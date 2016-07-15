import Hamburger from './components/hamburger/hamburger';
import React from 'react';
import Search from './components/search/search';
import _logo from './components/logo/logo';
import _navigationMain from './components/navigationMain/navigationMain';
import {hashHistory} from 'react-router';
import insertExistingHTML from '../../shared/insertExistingHTML';
import s from './header.css';

const OPEN = 'open';
const CLOSED = 'closed';
const TRANSITION_CLOSED = 'transitionClosed';
const TRANSITION_OPEN = 'transitionOpen';
const AUTO = 'auto';
const BREAKPOINT_TABLET = 800;

export default React.createClass({
  propTypes: {
    params: React.PropTypes.shape({
      menu: React.PropTypes.string
    })
  },
  getInitialState() {
    return {
      menu: this.props.params.menu ? OPEN : CLOSED,
      isMobile: false
    };
  },
  componentDidMount() {
    this.domNode = document.querySelector('.header .container');
    this.bodyNode = document.querySelector('body');
    this.headerNode = document.querySelector('header');

    window.addEventListener('hashchange', this.handleHashChange);
    window.addEventListener('resize', this.updateBrowser);
    window.addEventListener('orientationchange', this.updateBrowser);

    this.updateBrowser();
  },
  componentWillUnmount() {
    this.domNode.removeAttribute('style');

    window.removeEventListener('hashchange', this.handleHashChange);
    window.removeEventListener('resize', this.updateBrowser);
    window.removeEventListener('orientationchange', this.updateBrowser);
  },
  setStyles(width, height, left) {
    const style = this.domNode.style;

    style.width = width;
    style.height = height;
    style.left = left;

    this.bodyNode.style.paddingTop = `${this.headerNode.offsetHeight}px`;
  },
  isMobile(callback) {
    if (window.innerWidth >= BREAKPOINT_TABLET) {
      this.setState({isMobile: false}, callback);
    } else {
      this.setState({isMobile: true}, callback);
    }
  },
  updateBrowser() {
    this.isMobile(() => {
      // Menu is closed
      if (this.state.menu === CLOSED) {
        if (this.state.isMobile === false) {
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
      if (this.state.isMobile === false) {
        this.setStyles(AUTO, AUTO, AUTO);
      } else {
        this.setStyles(
          `${window.innerWidth}px`,
          `${window.innerHeight}px`,
          0
        );
      }
    });
  },
  handleHashChange() {
    if (window.location.hash && window.location.hash.indexOf('menu') !== -1) {
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
    }
  },
  toggle() {
    if (this.state.menu === OPEN) {
      hashHistory.push('/menu/close');
    } else {
      hashHistory.push('/menu/open');
    }
  },
  render() {
    return <div>
      {insertExistingHTML('.tpbc-logo')}
      <div className="container">
        {insertExistingHTML(
          'header .container .navigationMain'
        )}
      </div>
      <Search />
      <Hamburger toggle={this.toggle} menu={this.state.menu} />
    </div>;
  }
});
