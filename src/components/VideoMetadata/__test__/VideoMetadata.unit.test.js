import React from 'react';
import { shallow } from 'enzyme';
import VideoMetadata from '../VideoMetadata';

describe('VideoMetadata', () => {
  it('renders without props', () => {
    const wrapper = shallow(
      <VideoMetadata />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with props', () => {
    const wrapper = shallow(
      <VideoMetadata viewCount={100234} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});