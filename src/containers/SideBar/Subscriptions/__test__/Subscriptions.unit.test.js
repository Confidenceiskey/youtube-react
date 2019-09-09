import React from 'react';
import { shallow } from 'enzyme';
import Subscriptions from '../Subscriptions';

it('renders Subscriptions', () => {
  const wrapper = (
    <Subscriptions />
  );
  expect(wrapper).toMatchSnapshot();
});
