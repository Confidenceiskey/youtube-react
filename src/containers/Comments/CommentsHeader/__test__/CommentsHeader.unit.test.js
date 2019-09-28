import React from 'react';
import { shallow } from 'enzyme';
import CommentsHeader from '../CommentsHeader';

describe('Comments Header', () => {
  it('CommentsHeader renders w/ amountComments=null', () => {
    const wrapper = shallow(
      <CommentsHeader />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('CommentsHeader renders w/ amountComments = number ', () => {
    const wrapper = shallow(
      <CommentsHeader amountComments={123} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});