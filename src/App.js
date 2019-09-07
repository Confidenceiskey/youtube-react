import React from 'react';
import './containers/HeaderNav/HeaderNav.scss';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';


function App() {
  return (
    <React.Fragment>
      <HeaderNav />
      <SideBar />
    </React.Fragment>
  );
}

export default App;
