import React from 'react';
import './BreakfastSpecials.css';

const BreakfastSpecials = () => {
  return (
    <section className="breakfast-specials section-padding">
      <div className="container">
        <div className="breakfast-grid">
          <div className="breakfast-content">
            <span className="section-subtitle">Morning Delights</span>
            <h2 className="section-title">Tiruchengode's Favorite Breakfast Spot</h2>
            <p className="breakfast-desc">
              Start your day with the comforting aroma of freshly ground filter coffee and steaming hot idlis. Our breakfast service is a celebrated local tradition, offering an array of crispy dosas, fluffy idlis, and crispy vadas.
            </p>
            <p className="breakfast-desc">
              Every dish is accompanied by our signature sambar and an assortment of freshly prepared chutneys, guaranteeing a perfect start to your morning journey.
            </p>
            
            <ul className="breakfast-list">
              <li>Malli Poo Idly</li>
              <li>Crispy Vada</li>
              <li>Pongal with Ghee</li>
              <li>Filter Coffee</li>
            </ul>
          </div>
          
          <div className="breakfast-images">
            <div className="img-wrapper large">
              <img 
                src="/south-indian-breakfast-idly-vada.png" 
                alt="South Indian Breakfast Idli Vada" 
              />
            </div>
            <div className="img-wrapper small offset">
              <img 
                src="/chutney-and-sambar.png" 
                alt="Chutneys and Sambar" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakfastSpecials;
