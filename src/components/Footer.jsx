import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h2 className="footer-logo">Ponnusamy</h2>
            <p className="footer-tagline">High Class Vegetarian Restaurant</p>
            <p className="footer-desc">
              Tiruchengode's most trusted destination for authentic, hygienic, and delicious South Indian vegetarian dining.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#menu">Full Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#location">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Our Offerings</h3>
            <ul>
              <li><a href="#menu">Morning Breakfast</a></li>
              <li><a href="#menu">Traditional Meals</a></li>
              <li><a href="#menu">Evening Tiffins</a></li>
              <li><a href="#catering">Bulk Orders</a></li>
              <li><a href="#catering">Party Catering</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Visit Us</h3>
            <p>9VPV+2QF, Sankagiri - Tiruchengode Rd</p>
            <p>Thondikaradu, Tiruchengode</p>
            <p>Tamil Nadu 637209</p>
            <p className="mt-sm"><strong>Call:</strong> +91 98765 43210</p>
            <p><strong>Hours:</strong> 7:00 AM - 10:30 PM Daily</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ponnusamy High Class Vegetarian Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
