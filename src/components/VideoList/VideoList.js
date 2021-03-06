import React, { Component, Fragment } from 'react';
import './VideoList.scss';
import SideBar from '../../containers/SideBar/SideBar';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import VideoPreview from '../VideoPreview/VideoPreview';

class VideoList extends Component {

  getVideoPreviews() {
    if (!this.props.videos || !this.props.videos.length) {
      return null;
    }

    const firstVideo = this.props.videos[0];
    if (!firstVideo.snippet.description) {
      return null;
    }

    return this.props.videos.map(video => {
      return (
        <VideoPreview 
          horizontal={true}
          expanded={true}
          video={video}
          key={video.id}
          pathname={'/watch'}
          search={`?v=${video.id}`}
        />
      );
    })
  }


  render() {
    const videoPreviews = this.getVideoPreviews();
    return (
      <Fragment>
        <SideBar />
        <div className='video-list'>
          <InfiniteScroll bottomReachedCallback={this.props.bottomReachedCallback} showLoader={this.props.showLoader}>
            {videoPreviews}
          </InfiniteScroll>
        </div>
      </Fragment>
    );
  }
}

export default VideoList;
