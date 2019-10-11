import React, { Fragment } from 'react';
import './NextUpVideo.scss';
import { Checkbox, Divider } from 'semantic-ui-react';
import VideoPreview from '../../VideoPreview/VideoPreview';

const NextUpVideo = ({ video }) => {
  return (
    <Fragment>
      <div className='next-up-container'>
        <h4>Up next</h4>
        <div className='up-next-toggle'>
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked />
        </div>
      </div>
      <VideoPreview 
        horizontal={true} 
        video={video}
        pathname='/watch'
        search={`?v=${video.id}`} 
      />
      <Divider />
    </Fragment>
  );
}

export default NextUpVideo;
