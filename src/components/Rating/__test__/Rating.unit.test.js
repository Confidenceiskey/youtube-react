import React from 'react';
import { shallow } from 'enzyme';
import Rating from '../Rating';

describe('Rating', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Rating />
    );
    expect(wrapper).toMatchSnapshot();
  });
});