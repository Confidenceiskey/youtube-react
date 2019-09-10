import React, { Component } from 'react';
import './Home.scss';
import SideBar from '../SideBar/SideBar';
import VideoGrid from '../../components/VideoGrid/VideoGrid';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <main className='home'>
          <div className='responsive-video-grid-container'>
            <VideoGrid title='Trending' />
            <VideoGrid title='Autos & Vehicles' hideDivider={true} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
