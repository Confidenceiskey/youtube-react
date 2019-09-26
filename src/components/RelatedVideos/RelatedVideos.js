import React from 'react';
import './RelatedVideos.scss';
import VideoPreview from '../VideoPreview/VideoPreview';
import NextUpVideo from './NextUpVideo/NextUpVideo';

const RelatedVideos = (props) => {
  return (
    <div className='related-videos'>
      <NextUpVideo />
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
    </div>
  );
}

export default RelatedVideos;
