/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from '../parts/Header.js';
import HeroTeam from '../parts/HeroTeam.js';
import AllTeam from '../parts/AllTeam.js';
import Footer from '../parts/Footer.js';

import Data from '../json/landingPage.json';

export default class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <HeroTeam {...this.props} />
        <AllTeam data={Data.team} />
        <Footer />
      </>
    );
  }
}
