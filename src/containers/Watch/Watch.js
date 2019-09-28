import React, { Component } from 'react';
import './Watch.scss';
import Comments from '../Comments/Comments';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Video from '../../components/Video/Video';
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';

class Watch extends Component {
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

export default Watch;
