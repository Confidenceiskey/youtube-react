import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../Comment';

describe('Comment', () => {
  it('renders Comment', () => {
    const wrapper = shallow(
      <Comment />
    );
    expect(wrapper).toMatchSnapshot();
  });
});