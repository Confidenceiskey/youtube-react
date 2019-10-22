import React, { Component } from 'react';
import './Comments.scss';
import AddComment from './AddComment/AddComment';
import Comment from './Comment/Comment';
import CommentsHeader from './CommentsHeader/CommentsHeader';

class Comments extends Component {
  render() {
    if (!this.props.comments) {
      return <div />;
    }

    const comments = this.props.comments.map((comment) => {
      return <Comment comment={comment} key={comment.id} />
    });

    return (
      <div className='comments-header'>
        <CommentsHeader amountComments={this.props.amountComments} />
        <AddComment key='add-comment' />
        {comments}
      </div>
    );
  }
}

export default Comments;
