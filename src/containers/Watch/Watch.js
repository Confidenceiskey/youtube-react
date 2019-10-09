import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Watch.scss';
import Comments from '../Comments/Comments';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import * as watchActions from '../../store/actions/watch';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';

class Watch extends Component {

  getVideoId() {
    const searchParams = new URLSearchParams(this.props.location.search);
    return searchParams.get('v');
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();
    if (!videoId) {
      this.props.history.push('/');
    }
    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }

  render() {
    return (
      <div className='watch-grid'>
        <Video className='video' id='-7fuHEEmEjs' />
        <VideoMetadata className='metadata' viewCount={1000} />
        <VideoInfoBox className='video-info-box' />
        <Comments className='comments' />
        <RelatedVideos className='relatedVideos' /> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators({fetchWatchDetails}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
