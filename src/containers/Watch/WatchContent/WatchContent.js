import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../../Comments/Comments';
import RelatedVideos from '../../../components/RelatedVideos/RelatedVideos';
import InfiniteScroll from '../../../components/InfiniteScroll/InfiniteScroll';
import Video from '../../../components/Video/Video';
import VideoInfoBox from '../../../components/VideoInfoBox/VideoInfoBox';
import VideoMetadata from '../../../components/VideoMetadata/VideoMetadata';
import { getChannel } from '../../../store/reducers/channels';
import { getAmountComments, getRelatedVideos, getVideoById } from '../../../store/reducers/video';
import { getCommentsForVideo } from '../../../store/reducers/comment';
import './WatchContent.scss';

class WatchContent extends Component {

  shouldShowLoader = () => {
    return !!this.props.nextPageToken;
  }

  render() {
    if (!this.props.videoId) {
      return <div />
    }
    return (
      <InfiniteScroll
        bottomReachedCallback={this.props.bottomReachedCallback}
        showLoader={this.shouldShowLoader()}
      >
        <div className='watch-grid'>
          <Video className='video' id={this.props.videoId} />
          <VideoMetadata className='metadata' video={this.props.video} />
          <VideoInfoBox className='video-info-box' video={this.props.video} channel={this.props.channel} />
          <Comments className='comments' comments={this.props.comments} amountComments={this.props.amountComments} />
          <RelatedVideos className='relatedVideos' videos={this.props.relatedVideos} /> 
        </div>
      </InfiniteScroll>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    relatedVideos: getRelatedVideos(state, props.videoId),
    video: getVideoById(state, props.videoId),
    channel: getChannel(state, props.channelId),
    comments: getCommentsForVideo(state, props.videoId),
    amountComments: getAmountComments(state, props.videoId)
  };
}

export default connect(mapStateToProps, null)(WatchContent);
