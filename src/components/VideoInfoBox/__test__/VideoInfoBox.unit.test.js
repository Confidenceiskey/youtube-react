import React from 'react';
import { shallow } from 'enzyme';
import VideoInfoBox from '../VideoInfoBox';

describe('VideoInfoBox', () => {
  it('renders collapsed', () => {
    const wrapper = shallow(
      <VideoInfoBox />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders expanded', () => {
    const wrapper = shallow(
      <VideoInfoBox />
    );
    wrapper.setState({collapsed: false});
    expect(wrapper).toMatchSnapshot();
  });
});