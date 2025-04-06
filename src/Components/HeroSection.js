import React, { useState } from 'react';
import './HeroSection.css';
import { Button } from './Button';
import '../App.css';
import { Link } from 'react-router-dom';

function closeMobileMenu() {
  // Logic to close the mobile menu
  console.log('Mobile menu closed');
}

function HeroSection() {
  const [showCities, setShowCities] = useState(false);

  const toggleCities = () => {
    setShowCities(!showCities);
  };

  return (
    <div>
      <div className='hero-container'>
        <video src='/public/video_1.mp4' autoPlay loop muted />
        <h1>Find Your Perfect Roommate!</h1>
        <p>SWIPE, MATCH, MOVE IN</p>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            <Link to='/SignUp' className='nav-links' onClick={closeMobileMenu}>
              Create Account
            </Link>
          </Button>
        </div>
      </div>
      
      <div className='info-section'>
        <h2>Discover Your Future Roommate Here</h2>
        <img src='/images/map.png' alt='World Map' />
        <p>Made 50,000+ Matches With verified profiles</p>
        <br></br>
        <p onClick={toggleCities} style={{ cursor: 'pointer', color: '#000000' }}>See Top Cities</p>
        <br></br>
        {showCities && (
          <ul className='cities-list'>
            <li>Mumbai</li>
            <li>Delhi</li>
            <li>Bangalore</li>
            <li>Hyderabad</li>
            <li>Ahmedabad</li>
            <li>Chennai</li>
            <li>Kolkata</li>
            <li>Pune</li>
            <li>Jaipur</li>
            <li>Surat</li>
          </ul>
          
        )
        }
        <br></br>
      </div>
    </div>
  );
}

export default HeroSection;
