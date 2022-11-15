import React, { useState } from 'react'
import Autonomous from './Components/Autonomous/Autonomous';
import CloudService from './Components/CloudService/CloudService';
import Footer from './Components/Footer/Footer';
import Jeptix from './Components/Jeptix/Jeptix';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import Order from './Components/Order.jsx/Order';
import Solutions from './Components/Solutions/Solutions';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Jeptix/>
      <Autonomous/>
      <CloudService/>
      <Solutions/>
      <Order/>
      <Footer/>
    </div>
  );
}

export default App;
