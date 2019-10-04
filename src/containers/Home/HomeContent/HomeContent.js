import React, { Component } from 'react';
import './HomeContent.scss';
import VideoGrid from '../../../components/VideoGrid/VideoGrid';
import { connect } from 'react-redux';
import { getMostPopularVideos } from '../../../store/reducers/video';

const AMOUNT_TRENDING_VIDEOS = 12;

class HomeContent extends Component {

  getTrendingVideos = () => {
    return this.props.mostPopularVideos.slice(0, AMOUNT_TRENDING_VIDEOS);
  }

  render() {
    const trendingVideos = this.getTrendingVideos();
    return (
      <main className='home-content'>
        <div className='responsive-video-grid-container'>
          <VideoGrid title='Trending' videos={trendingVideos} />
          <VideoGrid title='Autos & Vehicles' hideDivider={true} />
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    mostPopularVideos: getMostPopularVideos(state)
  };
}

export default connect(mapStateToProps, null)(HomeContent);
