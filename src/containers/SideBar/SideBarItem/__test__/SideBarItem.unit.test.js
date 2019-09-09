import React from 'react';
import { shallow } from 'enzyme';
import SideBarItem from '../SideBarItem';

describe('Various cases for SideBarItem', () => {
  it('renders empty SideBarItem', () => {
    const wrapper = (
      <SideBarItem />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders highlighted SideBarItem', () => {
    const wrapper = (
      <SideBarItem highlighted icon='fire' label='Trending' />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders SideBarItem w/ icon & label', () => {
    const wrapper = (
      <SideBarItem icon='fire' label='Trending' />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
