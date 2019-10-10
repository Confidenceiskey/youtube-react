import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './VideoInfoBox.scss';
import { Button, Image } from 'semantic-ui-react';
import { getPublishedAtDateString } from '../../services/date/date-format';

class VideoInfoBox extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }

  onToggleCollapseButtonClick = () => {
    this.setState((prevState) => {
      return {
        collapsed: !prevState.collapsed
      };
    });
  }

  getDescriptionParagraphs() {
    const videoDescription = this.props.video.snippet ? this.props.video.snippet.description : null;
    if (!videoDescription) {
      return null;
    }
    return videoDescription.split('\n').map((paragraph, i) => {
      return <p key={i}><Linkify>{paragraph}</Linkify></p>;
    })
  }

  getConfig() {
    let descriptionTextClass = 'collapsed';
    let buttonTitle = 'Show More';

    if (!this.state.collapsed) {
      descriptionTextClass = 'expanded';
      buttonTitle = 'Show Less';
    }
    return {
      descriptionTextClass,
      buttonTitle
    };
  }

  render() {
    if (!this.props.video) {
      return <div />;
    }

    const descriptionParagraphs = this.getDescriptionParagraphs();
    const { descriptionTextClass, buttonTitle } = this.getConfig();
    const publishedAtString = getPublishedAtDateString(this.props.video.snippet.publishedAt);

    return (
      <div className='video-info-box'>
        <Image 
          className='channel-image' 
          src='http://via.placeholder.com/48x48' 
          circular 
        />
        <div className='video-info'>
          <div className='channel-name'>Channel Name</div>
          <div className='video-publication-date'>{publishedAtString}</div>
        </div>
        <Button color='youtube'>91.5K Subscribers</Button>
        <div className='video-description'>
          <div className={descriptionTextClass}>
            {descriptionParagraphs}
          </div>
          <Button compact onClick={this.onToggleCollapseButtonClick}>{buttonTitle}</Button>
        </div>
      </div>
    );
  }
}

export default VideoInfoBox;
