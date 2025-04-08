import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1><br></br>
      <p>Explore the range of services we offer to make your living experience better.</p><br></br>
      <div className="service-list">
        <div className="service-item">
          <h2>Roommate Matching</h2>
          <p>We help you find the perfect roommate based on your preferences and lifestyle.</p>
        </div>
        <div className="service-item">
          <h2>Brokerage-Free Listings</h2>
          <p>All our listings are 100% brokerage-free, ensuring you get the best value for your money.</p>
        </div>
        <div className="service-item">
          <h2>Secure Messaging</h2>
          <p>Communicate securely with potential roommates through our platform.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;