import React from 'react';
import './home.css';
import Intro from '../components/intro';
import AboutMe from '../components/about';
import Links from '../components/links';

function HomePage() {
  return (
    <div className='parent'>
    <Intro />
    <AboutMe />
    </div>
  );
  }


export default HomePage;
