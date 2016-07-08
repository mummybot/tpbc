import {Router, hashHistory} from 'react-router';
import React from 'react';
import ReactDom from 'react-dom';
import _container from './components/container/container';
import _tagline from './components/tagline/tagline';
import routes from './shared/routes';
import s from './shared/core.css';

ReactDom.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.querySelector('header')
);
