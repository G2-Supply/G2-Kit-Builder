import React from 'react';
import './App.scss';

// component imports 
import TopBar from './components/Navigation/TopBar'; 
import SideNav from './components/Navigation/SideNav';
import TopNav from './components/Navigation/TopNav';
import AppMain from './components/AppMain/AppMain'; 

function App() {
  return (
    <div className="App">
      <TopBar /> 
      <div className="nav-wrapper">
        <SideNav />
        <div className="main-div">
          <TopNav />
          <AppMain />
        </div>
      </div>
    </div>
  );
}

export default App;
