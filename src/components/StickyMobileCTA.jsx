import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import './StickyMobileCTA.css';

const StickyMobileCTA = () => {
  return (
    <div className="sticky-mobile-cta">
      <a href="tel:+919876543210" className="cta-btn call-btn">
        <Phone size={20} />
        <span>Call</span>
      </a>
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="cta-btn wa-btn">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
      <a href="https://maps.google.com/?q=9VPV+2QF,Sankagiri-Tiruchengode+Rd,Thondikaradu,Tiruchengode,Tamil+Nadu+637209" target="_blank" rel="noreferrer" className="cta-btn map-btn">
        <MapPin size={20} />
        <span>Directions</span>
      </a>
    </div>
  );
};

export default StickyMobileCTA;
