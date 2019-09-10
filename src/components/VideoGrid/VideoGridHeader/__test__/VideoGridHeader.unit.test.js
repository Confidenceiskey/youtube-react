import React from 'react';
import { shallow } from 'enzyme';
import VideoGridHeader from '../VideoGridHeader';

describe('', () => {
  it('renders VideoGridHeader w/o props', () => {
    const wrapper = shallow(
      <VideoGridHeader />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders VideoGridHeader w/ title prop', () => {
    const wrapper = shallow(
      <VideoGridHeader title='Trending' />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders VideoGridHeader w/ blank title prop', () => {
    const wrapper = shallow(
      <VideoGridHeader title='' />
    );
    expect(wrapper).toMatchSnapshot();
  });
});