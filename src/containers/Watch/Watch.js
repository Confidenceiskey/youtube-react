import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import WatchContent from './WatchContent/WatchContent';
import * as watchActions from '../../store/actions/watch';
import { getYoutubeLibraryLoaded } from '../../store/reducers/api';
import { getChannelId } from '../../store/reducers/video';
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
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded || this.props.channelId !== prevProps.channelId) {
      this.fetchWatchContent(prevProps);
    }
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();
    if (!videoId) {
      this.props.history.push('/');
    }
    const thisChannelId = this.props.channelId;
    //for some reason this.props.channelId doesn't get passed down to fetchWatchDetails
    this.props.fetchWatchDetails(videoId, thisChannelId);
  }

  render() {
    const videoId = this.getVideoId();
    return (
      <WatchContent videoId={videoId} channelId={this.props.channelId} />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, 'v')
  };
}

const mapDispatchToProps = (dispatch) => {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators({fetchWatchDetails}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
