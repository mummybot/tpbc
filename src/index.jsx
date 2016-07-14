import {Router, hashHistory} from 'react-router';
import React from 'react';
import ReactDom from 'react-dom';
import _container from './components/container/container';
import _navigationSecondary from
'./components/navigationSecondary/navigationSecondary';
import _tagline from './components/tagline/tagline';
import _eventsHome from './components/eventsHome/eventsHome';
import _eventsPage from './components/eventsPage/eventsPage';
import routes from './shared/routes';
import s from './shared/core.css';
import _swiper from './components/swiper/swiper';

ReactDom.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.querySelector('header')
);
