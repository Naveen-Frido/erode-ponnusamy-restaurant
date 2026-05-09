import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-area">
          <h1 className="logo-text">Ponnusamy</h1>
          <span className="logo-subtext">High Class Veg Restaurant</span>
        </div>

        <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a></li>
            <li><a href="#banquet hall" onClick={() => setIsMobileMenuOpen(false)}>Banquet hall</a></li>
            <li><a href="#catering" onClick={() => setIsMobileMenuOpen(false)}>Catering</a></li>
          </ul>
          <div className="nav-actions">
            <a href="tel:+919876543210" className="nav-contact">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </a>
            <a href="#location" className="primary-btn">
              <MapPin size={18} />
              Directions
            </a>
          </div>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
