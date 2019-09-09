import React, { Component } from 'react';
import VideoPreview from '../../components/VideoPreview/VideoPreview';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <main className='home'>
        <VideoPreview />
      </main>
    );
  }
}

export default Home;
