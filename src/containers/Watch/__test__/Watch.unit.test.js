import React from 'react';
import { shallow } from 'enzyme';
import Watch from '../Watch';

describe('Watch', () => {
  it('renders', () => {
    const wrapper = (
      <Watch />
    );
    expect(wrapper).toMatchSnapshot();
  });
});