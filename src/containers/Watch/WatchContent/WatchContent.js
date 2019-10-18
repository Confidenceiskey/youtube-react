import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../../Comments/Comments';
import RelatedVideos from '../../../components/RelatedVideos/RelatedVideos';
import Video from '../../../components/Video/Video';
import VideoInfoBox from '../../../components/VideoInfoBox/VideoInfoBox';
import VideoMetadata from '../../../components/VideoMetadata/VideoMetadata';
import { getChannel } from '../../../store/reducers/channels';
import { getRelatedVideos, getVideoById } from '../../../store/reducers/video';
import './WatchContent.scss';

class WatchContent extends Component {
  render() {
    if (!this.props.videoId) {
      return <div />
    }
    return (
      <div className='watch-grid'>
        <Video className='video' id={this.props.videoId} />
        <VideoMetadata className='metadata' video={this.props.video} />
        <VideoInfoBox className='video-info-box' video={this.props.video} channel={this.props.channel} />
        <Comments className='comments' amountComments={112499} />
        <RelatedVideos className='relatedVideos' videos={this.props.relatedVideos} /> 
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    relatedVideos: getRelatedVideos(state, props.videoId),
    video: getVideoById(state, props.videoId),
    channel: getChannel(state, props.channelId)
  };
}

export default connect(mapStateToProps, null)(WatchContent);
