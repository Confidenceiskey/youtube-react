import React from 'react';
import './Rating.scss';
import { Icon, Progress } from 'semantic-ui-react';
import { getShortNumberString } from '../../services/number/number-format';

const Rating = ({ likeCount, dislikeCount }) => {
  let rating = null;
  let likedCount = likeCount !== 0 ? likeCount : null;
  let dislikedCount = null;

  if (likeCount && dislikeCount) {
    const amountLikes = parseFloat(likeCount);
    const amountDislikes = parseFloat(dislikeCount);
    const percentPositiveRating = 100 * (amountLikes / (amountLikes + amountDislikes));

    // Now we have calculated the percentage, we can bring the numbers into 
    // a better readable format
    likedCount = getShortNumberString(amountLikes);
    dislikedCount = getShortNumberString(amountDislikes);
    rating = <Progress className='progress' percent={percentPositiveRating} size='tiny' />;
  }

  return (
    <div className='rating'>
      <div className='thumbs-up'>
        <Icon name='thumbs outline up' />
        <span>{likedCount}</span>
      </div>
      <div className='thumbs-down'>
        <Icon name='thumbs outline down' />
        <span>{dislikedCount}</span>
      </div>
      {rating}
    </div>
  );
}

export default Rating;
