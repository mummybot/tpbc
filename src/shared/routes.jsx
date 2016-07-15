import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import React from 'react';
import {Route} from 'react-router';

export default <Route path="/" component={Header}>
  <Route path="/menu/:menu" component={Header} />
</Route>;
