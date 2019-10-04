import React from 'react';
import './VideoGrid.scss';
import VideoGridHeader from './VideoGridHeader/VideoGridHeader';
import { Divider } from 'semantic-ui-react';
import VideoPreview from '../VideoPreview/VideoPreview';

const VideoGrid = ({ hideDivider, title, videos }) => {
  if (!videos || !videos.length) {
    return <div />;
  }

  const gridItems = videos.map(video => {
    return ( 
      <VideoPreview video={video} key={video.id} />
    );
  });

  const divider = hideDivider ? null : <Divider />;
  return (
    <React.Fragment>
      <VideoGridHeader title={title} />
      <div className='video-grid'>
        {gridItems}
      </div>
      {divider}
    </React.Fragment>
  );
}

export default VideoGrid;
