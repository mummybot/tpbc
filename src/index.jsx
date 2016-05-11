import {Route, Router, hashHistory} from 'react-router';
import Header from './components/header/header';
import React from 'react';
import ReactDom from 'react-dom';
import _container from './components/container/container';
import _tagline from './components/tagline/tagline';
import s from './shared/core.css';

const routes = <Route path="/" component={Header}>
  <Route path="/menu/:menu" component={Header} />
</Route>;

ReactDom.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('headerMount')
);
