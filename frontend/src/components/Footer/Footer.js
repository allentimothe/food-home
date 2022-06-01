import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>
          <div>
            <p>1234 6th Ave.</p>
            <h4>New York, NY</h4>
          </div>
          </div>
            <div className='phone'>
              <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>1-212-555-5555</h4>
            </div>
            <div className='email'>
              <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>meals@restauranthome.com</h4>
            </div>
        </div>
          <div className='right'>
            <h4>About the Company</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            <div className='social'>
              <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
              <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
              <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer;