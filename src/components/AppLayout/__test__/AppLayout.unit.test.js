import React from 'react';
import { shallow } from 'enzyme';
import AppLayout from '../AppLayout';

it('renders empty <AppLayout />', () => {
  const wrapper = shallow(
    <AppLayout />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders <AppLayout /> with 1 child', () => {
  const wrapper = shallow(
    <AppLayout> 
      <div>Child 1</div>
    </AppLayout>
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders <AppLayout /> with 2 children', () => {
  const wrapper = shallow(
    <AppLayout> 
      <div>Child</div>
      <div>
        <span>Child</span>
        <p>Child</p>
      </div>
    </AppLayout>
  );
  expect(wrapper).toMatchSnapshot();
});
