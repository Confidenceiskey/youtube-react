import React from 'react';
import { shallow } from 'enzyme';
import VideoPreview from '../VideoPreview';

describe('VideoPreview', () => {
  it('renders vertically', () => {
    const wrapper = shallow(
      <VideoPreview />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders horizontally', () => {
    const wrapper = shallow(
      <VideoPreview horizontally={true} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
