import React from 'react';
import s from './hamburger.css';

export default React.createClass({
  propTypes: {
    toggle: React.PropTypes.func,
    menu: React.PropTypes.string
  },
  render() {
    return (
      <a href="#"
        className={`hamburger ${this.props.menu}`}
        onClick={(e) => {
          e.preventDefault();
          this.props.toggle();
        }
      }>Show navigation</a>
    );
  }
});
