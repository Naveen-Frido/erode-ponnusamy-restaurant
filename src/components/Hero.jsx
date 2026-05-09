import React from 'react';
import { MapPin, BookOpen, Phone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/hero.png" alt="Ponnusamy Restaurant Ambience" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text-box fade-in">
          <span className="hero-subtitle">Welcome to Ponnusamy</span>
          <h1 className="hero-title">Authentic Vegetarian Dining in Tiruchengode</h1>
          <p className="hero-desc">
            Hygienic family restaurant serving traditional South Indian and North Indian favorites.
          </p>
          
          <div className="hero-actions">
            <a href="#location" className="primary-btn">
              <MapPin size={20} /> Get Directions
            </a>
            <a href="#menu" className="secondary-btn hero-sec-btn">
              <BookOpen size={20} /> View Menu
            </a>
            <a href="tel:+919876543210" className="secondary-btn hero-sec-btn">
              <Phone size={20} /> Call Now
            </a>
          </div>

          <div className="hero-trust-indicators">
            <span className="trust-item">✓ Pure Veg</span>
            <span className="trust-item">✓ Family Dining</span>
            <span className="trust-item">✓ Hygienic Kitchen</span>
            <span className="trust-item">✓ Spacious Parking</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
