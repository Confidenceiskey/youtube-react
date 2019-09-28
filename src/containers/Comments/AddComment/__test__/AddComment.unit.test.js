import React from 'react';
import { shallow } from 'enzyme';
import AddComment from '../AddComment';

describe('Add Comment', () => {
  it('AddComment component renders', () => {
    const wrapper = shallow(
      <AddComment />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
