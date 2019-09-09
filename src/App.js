import React from 'react';
import './containers/HeaderNav/HeaderNav.scss';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import Home from './containers/Home/Home';
import SideBar from './containers/SideBar/SideBar';

function App() {
  return (
    <React.Fragment>
      <HeaderNav />
      <SideBar />
      <Home />
    </React.Fragment>
  );
}

export default App;
