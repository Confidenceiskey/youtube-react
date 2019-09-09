import React from 'react';
import { shallow } from 'enzyme';
import VideoPreview from '../VideoPreview';

describe('VideoPreview', () => {
  it('renders VideoPreview', () => {
    const wrapper = shallow(
      <VideoPreview />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
