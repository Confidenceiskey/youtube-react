import React from 'react';
import { shallow } from 'enzyme';
import Subscription from '../Subscription';

describe('various cases for Subscription', () => {
  it('renders empty subscription', () => {
    const wrapper = (
      <Subscription />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders subscription that is broadcasting', () => {
    const wrapper = (
      <Subscription broadcasting label='freeCodeCamp' />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders non-broadcasting subscription with new vids', () => {
    const wrapper = (
      <Subscription amountNewVideos={7} label='Red Bull TV' />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
