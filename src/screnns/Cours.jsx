import React from 'react';
import Herolist from '../components/Herolist';
import Courslist from '../components/Courslist';
import Footer from '../components/Footer';
import Chat from '../components/Chat';

function Hero() {
  return (
    <div>
      <Herolist/>
      <Courslist/>
      <Chat/>
      <Footer/>
    </div>
  );
}

export default Hero;
