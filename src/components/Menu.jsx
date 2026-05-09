import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Breakfast');

  const categories = ['Breakfast', 'Tiffin', 'South Indian', 'Meals'];

  const menuData = {
    'Breakfast': [
      { name: 'Malli Poo Idly (2 pcs)', price: '₹40', desc: 'Soft, fluffy steamed rice cakes.' },
      { name: 'Ghee Roast Dosa', price: '₹70', desc: 'Crispy crepe roasted in pure ghee.' },
      { name: 'Pongal', price: '₹55', desc: 'Traditional rice and lentil dish tempered with pepper and cumin.' },
      { name: 'Medu Vada (1 pc)', price: '₹20', desc: 'Crispy lentil donut.' }
    ],
    'Tiffin': [
      { name: 'Rava Dosa', price: '₹65', desc: 'Crispy semolina crepe with onions and herbs.' },
      { name: 'Onion Uthappam', price: '₹60', desc: 'Thick pancake topped with chopped onions.' },
      { name: 'Poori Masala (2 pcs)', price: '₹50', desc: 'Deep-fried wheat bread served with potato curry.' },
      { name: 'Mini Tiffin', price: '₹90', desc: 'A combo of mini idly, pongal, sweet, and dosa.' }
    ],
    'South Indian': [
      { name: 'Bisi Bele Bath', price: '₹70', desc: 'Spicy, tangy rice dish with lentils and vegetables.' },
      { name: 'Curd Rice', price: '₹55', desc: 'Comforting yogurt rice tempered with mustard and curry leaves.' },
      { name: 'Lemon Rice', price: '₹50', desc: 'Tangy rice dish flavored with lemon juice and peanuts.' },
      { name: 'Special Filter Coffee', price: '₹25', desc: 'Authentic South Indian degree coffee.' }
    ],
    'Meals': [
      { name: 'South Indian Veg Meals', price: '₹120', desc: 'Unlimited rice, sambar, rasam, kootu, poriyal, appalam, sweet.' },
      { name: 'Mini Meals', price: '₹80', desc: 'A compact meal with variety rice, chapathi, and curries.' },
      { name: 'Special Meals', price: '₹150', desc: 'Elaborate meal with payasam, vadai, and special curries.' }
    ]
  };

  return (
    <section className="menu section-padding" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Offerings</span>
          <h2 className="section-title">Explore Our Menu</h2>
        </div>

        <div className="menu-categories">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-items fade-in" key={activeCategory}>
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-header">
                <h4 className="menu-item-name">{item.name}</h4>
                <div className="menu-item-dots"></div>
                <span className="menu-item-price">{item.price}</span>
              </div>
              <p className="menu-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="#" className="secondary-btn">Download Full Menu (PDF)</a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
