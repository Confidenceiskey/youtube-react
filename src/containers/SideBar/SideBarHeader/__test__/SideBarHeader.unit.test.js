import React from 'react';
import { shallow } from 'enzyme';
import SideBarHeader from '../SideBarHeader';

describe('Various cases for SideBarHeader', () => {
  it('renders SideBarHeader with props.title=""', () => {
    const wrapper = (
      <SideBarHeader title='' />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders SideBarHeader with props.title="Heading"', () => {
    const wrapper = (
      <SideBarHeader title='Heading' />
    );
    expect(wrapper).toMatchSnapshot();
  });
});


