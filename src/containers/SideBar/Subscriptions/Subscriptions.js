import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import SideBarHeader from '../SideBarHeader/SideBarHeader';
import Subscription from './Subscription/Subscription';

class Subscriptions extends Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title='Subscriptions' />
        <Subscription label='Music Channel' broadcasting />
        <Subscription label='Coursera' amountNewVideos={10} />
        <Subscription label='TEDx Talks' amountNewVideos={23}/>
        <Subscription label='Standford iOs' amountNewVideos={4} />
        <Subscription label='Udacity' amountNewVideos={114} />
        <Divider />
      </React.Fragment>
    );
  }
}

export default Subscriptions;
