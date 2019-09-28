import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const CommentsHeader = ({ amountComments }) => {
  return (
    <div className='comments-header'>
      <h4>{amountComments} Comments</h4>
      <Button basic compact icon labelPosition='left'>
        <Icon name='align left' />
        Sort by
      </Button>
    </div>
  );
}

export default CommentsHeader;
