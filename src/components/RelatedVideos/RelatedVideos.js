import React from 'react';
import './RelatedVideos.scss';
import VideoPreview from '../VideoPreview/VideoPreview';
import NextUpVideo from './NextUpVideo/NextUpVideo';

const RelatedVideos = (props) => {
  if (!props.videos || !props.videos.length) {
    return <div className='related-videos' />;
  }

  // safe as we check if the array has at least 1 element
  const nextUpVideo = props.videos[0];
  const remainingVideos = props.videos.slice(1);

  const relatedVideosPreviews = remainingVideos.map(relatedVideo => (
    <VideoPreview 
      video={relatedVideo}
      key={relatedVideo.id}
      pathname='/watch'
      search={`?v=${relatedVideo.id}`}
      horizontal={true}
    />
  ));

  return (
    <div className='related-videos'>
      <NextUpVideo video={nextUpVideo} />
      {relatedVideosPreviews}
    </div>
  );
}

export default RelatedVideos;
