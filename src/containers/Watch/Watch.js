import React, { Component, Fragment } from 'react';
import './Watch.scss';
import VideoPreview from '../../components/VideoPreview/VideoPreview';

class Watch extends Component {
  render() {
    return (
      <Fragment>
        <VideoPreview horizontal={true} />
        <VideoPreview />
      </Fragment>
    );
  }
}

export default Watch;
