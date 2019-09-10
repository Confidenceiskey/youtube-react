import React from 'react';
import './VideoGrid.scss';
import VideoGridHeader from './VideoGridHeader/VideoGridHeader';
import { Divider } from 'semantic-ui-react';
import VideoPreview from '../VideoPreview/VideoPreview';

const VideoGrid = ({ hideDivider, title }) => {
  const divider = hideDivider ? null : <Divider />;
  return (
    <React.Fragment>
      <VideoGridHeader title={title} />
      <div className='video-grid'>
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </React.Fragment>
  );
}

export default VideoGrid;
