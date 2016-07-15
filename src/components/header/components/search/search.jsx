import React from 'react';
import classNames from 'classnames';
import s from './search.css';

export default React.createClass({
  propTypes: {
    toggle: React.PropTypes.func,
    menu: React.PropTypes.string
  },
  getInitialState() {
    return {
      open: false
    };
  },
  render() {
    const searchClass = classNames({
      'searchComponent': true,
      'open': this.state.open
    });

    return (
      <form role="search" method="get"
        className={searchClass} action="/">
        <div>
            <input type="search" placeholder="Search &hellip;" name="s" />
            <button type="submit">Search</button>
        </div>
        <span onClick={(e) => {
          e.preventDefault();

          this.state.open ?
            this.setState({open: false}) :
            this.setState({open: true});
        }
        }></span>
      </form>
    );
  }
});
