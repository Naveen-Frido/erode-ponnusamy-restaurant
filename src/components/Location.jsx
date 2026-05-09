import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section className="location section-padding" id="location">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Visit Us</span>
          <h2 className="section-title">Find Us in Tiruchengode</h2>
        </div>

        <div className="location-grid">
          <div className="location-info">
            <div className="info-card">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h3>Address</h3>
                <p>9VPV+2QF, Sankagiri - Tiruchengode Rd,<br/>Thondikaradu, Tiruchengode,<br/>Tamil Nadu 637209</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <h3>Contact</h3>
                <p>+91 98765 43210</p>
                <p>+91 98765 43211</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><Clock size={24} /></div>
              <div>
                <h3>Hours</h3>
                <p>Open Daily: 7:00 AM - 10:30 PM</p>
                <p>Breakfast: 7:00 AM - 11:00 AM</p>
              </div>
            </div>

            <div className="location-actions">
              <a href="https://maps.google.com/?q=9VPV+2QF,Sankagiri-Tiruchengode+Rd,Thondikaradu,Tiruchengode,Tamil+Nadu+637209" target="_blank" rel="noreferrer" className="primary-btn">
                <MapPin size={18} /> Get Directions
              </a>
            </div>
          </div>
          
          <div className="location-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15642.50209477017!2d77.8931583!3d11.3888371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95d461cdb6fb3%3A0x6b4fb43e743a12a5!2sPonnusamy%20High%20Class%20Vegetarian%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
