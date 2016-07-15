import {Router, hashHistory} from 'react-router';
import {
  Simulate,
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Header from './header';
import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import routes from '../../shared/routes';

describe('Header', () => {
  beforeEach(() => {
    document.querySelector('body').innerHTML = `
<header class="header">
      <h1 class="tpbc-logo">
        <a href="/">
            <img src="/wp-content/themes/tpbc/src/components/header/components/logo/assets/img/logo.svg" alt="Twin Palm Bike Club" />
        </a>
    </h1>

    <div class="container">
  <nav class="navigationMain" role="navigation" aria-label="Primary Menu">
  <div class="menu-main-navigation-container"><ul id="menu-main-navigation" class="primary-menu"><li id="menu-item-5" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5"><a href="/sample-page/">Sample Page</a></li>
<li id="menu-item-6" class="menu-item menu-item-type-post_type_archive menu-item-object-event menu-item-6"><a href="/events/event/">Events</a></li>
<li id="menu-item-10" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10"><a href="/events/">Events</a></li>
</ul></div></nav>
<form role="search" method="get" class="search" action="/">
    <label>
        <span class="screen-reader-text">Search for:</span>
        <input type="search" class="search-field" placeholder="Search &hellip;" value="" name="s" title="Search for:" />
    </label>
    <button type="submit" class="search-submit"><span class="screen-reader-text">Search</span></button>
</form></div>    <div id="headerMount"></div>
</header>
    `;
  });

  afterEach(() => {
    document.querySelector('body').innerHTML = '';
  });

  it('component renders correct nodes', () => {
    let component;

    console.log(document.querySelector('script').src);

    component = renderIntoDocument(
      <Router history={hashHistory}>{routes}</Router>
    );

    console.log('component',component);

    // const container = ReactDOM.findDOMNode(component);

    // expect(winner).to.be.ok;
    // expect(winner.textContent).to.contain('Trainspotting');
  });
});
