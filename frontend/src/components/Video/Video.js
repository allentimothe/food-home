import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';

import chefVideo from '../../assets/chefkitchen.mp4'



const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={chefVideo} type='video/mp4'/>;
      </video>
    <div className='content'>
      <h1>Welcome To The Employee Home</h1>
    <div className='btnArea'>
      <Link to='/' className='btn'>Login</Link>
    </div>
    </div>
    </div>
  )
}

export default Video