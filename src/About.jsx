import React from 'react';
import web from '../src/images/mobile-app.png';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const About = () => {
  return(
      <div>
        <Common 
        name="Welcome to About Page" 
        imgsrc={web} 
        visit="/contact" 
        btname="Contact Now" />
      </div>
  );
}

export default About;