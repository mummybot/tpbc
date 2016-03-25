import React from 'react';
import ReactDOM from 'react-dom';

import styles from './hamburger.css';

var Hamburger = React.createClass({
  render: function() {
    return (
      <a href="#" className="hamburger closed">Show navigation</a>
    );
  }
});
ReactDOM.render(
  <Hamburger />,
  document.querySelector('.hamburgerMount')
);
