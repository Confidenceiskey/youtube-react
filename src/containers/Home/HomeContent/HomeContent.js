import React, { Component } from 'react';
import './HomeContent.scss';
import VideoGrid from '../../../components/VideoGrid/VideoGrid';
import { connect } from 'react-redux';
import { getMostPopularVideos, getVideosByCategory } from '../../../store/reducers/video';
import InfiniteScroll from '../../../components/InfiniteScroll/InfiniteScroll';

const AMOUNT_TRENDING_VIDEOS = 12;

class HomeContent extends Component {

  getTrendingVideos = () => {
    return this.props.mostPopularVideos.slice(0, AMOUNT_TRENDING_VIDEOS);
  }

  getVideoGridsForCategories() {
    const categoryTitles = Object.keys(this.props.videosByCategory || {});
    return categoryTitles.map((categoryTitle, index) => {
      const videos = this.props.videosByCategory[categoryTitle];
      // the last video grid element should not have a divider
      const hideDivider = index === categoryTitles.length - 1; 
      return (
        <VideoGrid 
          title={categoryTitle} 
          videos={videos} 
          key={categoryTitle} 
          hideDivider={hideDivider} 
        />
      );
    });
  }

  render() {
    const trendingVideos = this.getTrendingVideos();
    const categoryGrids = this.getVideoGridsForCategories();
    return (
      <main className='home-content'>
        <div className='responsive-video-grid-container'>
          <InfiniteScroll 
            bottomReachedCallback={this.props.bottomReachedCallback} 
            showLoader={this.props.showLoader}
          >
            <VideoGrid title='Trending' videos={trendingVideos} />
            {categoryGrids}
          </InfiniteScroll>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    videosByCategory: getVideosByCategory(state),
    mostPopularVideos: getMostPopularVideos(state)
  };
}

export default connect(mapStateToProps, null)(HomeContent);
