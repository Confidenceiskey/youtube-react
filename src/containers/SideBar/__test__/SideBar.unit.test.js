import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../Sidebar';

it('renders Sidebar', () => {
  const wrapper = shallow(
    <Sidebar />
  );
  expect(wrapper).toMatchSnapshot();
});
