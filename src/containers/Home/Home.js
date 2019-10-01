import React, { Component } from 'react';
import './Home.scss';
import SideBar from '../SideBar/SideBar';
import HomeContent from './HomeContent/HomeContent';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <HomeContent />
      </React.Fragment>
    );
  }
}

export default Home;
