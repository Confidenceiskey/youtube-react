import React from 'react';
import { shallow } from 'enzyme';
import VideoGrid from '../VideoGrid';

describe('VideoGrid', () => {
  it('renders VideoGrid w/o props', () => {
    const wrapper = shallow(
      <VideoGrid />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders VideoGrid w/ title prop', () => {
    const wrapper = shallow(
      <VideoGrid title='Trending' />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders VideoGrid w/o divider', () => {
    const wrapper = shallow(
      <VideoGrid hideDivider={true} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
