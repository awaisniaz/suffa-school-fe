import React, { useState } from 'react';
import './App.scss';
import Header from './components/header';
import UserAuthntication from './components/UserAuthentication';

const App:React.FC =()=>{
  return (
    <div className="App">
      <Header/>
      <UserAuthntication/>

    </div>
  );
}

export default App;
