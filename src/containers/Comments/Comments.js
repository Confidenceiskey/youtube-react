import React, { Component } from 'react';
import './Comments.scss';
import AddComment from './AddComment/AddComment';
import Comment from './Comment/Comment';
import CommentsHeader from './CommentsHeader/CommentsHeader';

class Comments extends Component {
  render() {
    return (
      <div className='comments-header'>
        <CommentsHeader amountComments={this.props.amountComments} />
        <AddComment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default Comments;
