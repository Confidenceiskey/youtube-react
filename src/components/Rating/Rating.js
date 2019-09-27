import React from 'react';
import './Rating.scss';
import { Icon, Progress } from 'semantic-ui-react';

const Rating = ({ likeCount, dislike }) => {
  let progress = null;

  if (likeCount && dislike) {
    const percent = 100 * (likeCount / (likeCount + dislike));
    progress = <Progress className='progress' percent={percent} size='tiny' />;
  }

  return (
    <div className='rating'>
      <div className='thumbs-up'>
        <Icon name='thumbs outline up' />
        <span>{likeCount}</span>
      </div>
      <div className='thumbs-down'>
        <Icon name='thumbs outline down' />
        <span>{dislike}</span>
      </div>
      {progress}
    </div>
  );
}

export default Rating;
