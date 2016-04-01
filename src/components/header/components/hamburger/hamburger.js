import React from 'react';
import ReactDOM from 'react-dom';

import s from './hamburger.css';

const Hamburger = React.createClass({
  render: function render() {
    return (
      <a href="#" className="hamburger closed">Show navigation</a>
    );
  }
});

ReactDOM.render(
  <Hamburger />,
  document.querySelector('.hamburgerMount')
);
