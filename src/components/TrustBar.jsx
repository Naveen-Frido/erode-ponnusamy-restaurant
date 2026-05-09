import React from 'react';
import { Users, Leaf, Heart, ShieldCheck, Maximize, Truck } from 'lucide-react';
import './TrustBar.css';

const TrustBar = () => {
  const trustItems = [
    { icon: <Users size={32} />, title: "4000+", subtitle: "Happy Customers" },
    { icon: <Leaf size={32} />, title: "100%", subtitle: "Pure Vegetarian" },
    { icon: <Heart size={32} />, title: "Family", subtitle: "Friendly Dining" },
    { icon: <ShieldCheck size={32} />, title: "Hygienic", subtitle: "Clean Kitchen" },
    { icon: <Maximize size={32} />, title: "Spacious", subtitle: "AC Seating" },
    { icon: <Truck size={32} />, title: "Highway", subtitle: "Friendly Stop" },
  ];

  return (
    <section className="trust-bar section-padding">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-card">
              <div className="trust-icon">{item.icon}</div>
              <h3 className="trust-title">{item.title}</h3>
              <p className="trust-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
