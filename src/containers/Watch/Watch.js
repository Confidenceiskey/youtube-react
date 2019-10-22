import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import WatchContent from './WatchContent/WatchContent';
import * as watchActions from '../../store/actions/watch';
import * as commentActions from '../../store/actions/comment';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import { getChannelId } from '../../store/reducers/video';
import { getCommentNextPageToken } from '../../store/reducers/comment';
import { getSearchParam } from '../../services/url';

class Watch extends Component {

  getVideoId() {
    return getSearchParam(this.props.location, 'v');
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent(prevProps);
    }
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();
    if (!videoId) {
      this.props.history.push('/');
    }

    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }

  fetchMoreComments = () => {
    if (this.props.nextPageToken) {
      this.props.fetchCommentThread(this.getVideoId(), this.props.nextPageToken);
    }
  };

  render() {
    const videoId = this.getVideoId();
    return (
      <WatchContent 
        videoId={videoId} 
        channelId={this.props.channelId}
        bottomReachedCallback={this.fetchMoreComments}
        nextPageToken={this.props.nextPageToken} 
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, 'v'),
    nextPageToken: getCommentNextPageToken(state, props.location)
  };
}

const mapDispatchToProps = (dispatch) => {
  const fetchWatchDetails = watchActions.details.request;
  const fetchCommentThread = commentActions.thread.request;
  return bindActionCreators({fetchWatchDetails, fetchCommentThread}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
