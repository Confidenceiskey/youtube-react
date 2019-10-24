import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import VideoPreview from '../../components/VideoPreview/VideoPreview';
import SideBar from '../SideBar/SideBar';
import * as videoActions from '../../store/actions/video';
import { 
  allMostPopularVideosLoaded, 
  getMostPopularVideos,
  getMostPopularVideosNextPageToken
} from '../../store/reducers/video';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import './Trending.scss';

class Trending extends Component {

  componentDidMount() {
    this.fetchTrendingVideos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.youtubeLibraryLoaded !== this.props.youtubeLibraryLoaded) {
      this.fetchTrendingVideos();
    }
  }

  fetchTrendingVideos = () => {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos(20, true);
    }
  }

  fetchMoreVideos = () => {
    const { nextPageToken, youtubeLibraryLoaded } = this.props;
    if (youtubeLibraryLoaded && nextPageToken) {
      this.props.fetchMostPopularVideos(12, true, nextPageToken);
    }
  }

  getVideoPreviews = () => {
    return this.props.videos.map(video => {
      return (
        <VideoPreview 
          horizontal={true} 
          expanded={true}
          video={video}
          key={video.id}
          pathname='/watch'
          search={`?v=${video.id}`}
        />
      );
    });
  }

  shouldShowLoader = () => {
    return !this.props.allMostPopularVideosLoaded;
  }

  render() {
    const previews = this.getVideoPreviews();
    const loaderActive = this.shouldShowLoader();
    return (  
      <Fragment>
        <SideBar />
        <div className='trending'>
          <InfiniteScroll 
            bottomReachedCallback={this.fetchMoreVideos} 
            showLoader={loaderActive}
          >
            {previews}
          </InfiniteScroll>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: getMostPopularVideos(state),
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    allMostPopularVideosLoaded: allMostPopularVideosLoaded(state),
    nextPageToken: getMostPopularVideosNextPageToken(state)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  return bindActionCreators({fetchMostPopularVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
