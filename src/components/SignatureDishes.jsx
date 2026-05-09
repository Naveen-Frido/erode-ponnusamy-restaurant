import React from 'react';
import './SignatureDishes.css';

const SignatureDishes = () => {
  const dishes = [
    {
      name: "Special Ghee Roast Dosa",
      description: "Crispy, golden dosa roasted in pure ghee, served with three signature chutneys and sambar.",
      image: "/special-ghee-roast-dosa.png"
    },
    {
      name: "Ponnusamy Veg Meals",
      description: "An authentic South Indian feast featuring rice, traditional curries, kootu, poriyal, and payasam.",
      image: "/ponnusamy-veg-meals.png"
    },
    {
      name: "Paneer Maharani",
      description: "Soft paneer cubes simmered in a rich, creamy, and mildly spiced cashew-tomato gravy.",
      image: "/paneer-maharani.png"
    },
    {
      name: "Fresh Juice ",
      description: "Fresh fruit juices blended daily with handpicked fruits for a refreshing natural taste.",
      image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="signature-dishes section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Pride</span>
          <h2 className="section-title">Signature Dishes</h2>
        </div>

        <div className="dishes-grid">
          {dishes.map((dish, index) => (
            <div key={index} className="dish-card">
              <div className="dish-img-wrapper">
                <img src={dish.image} alt={dish.name} className="dish-img" />
              </div>
              <div className="dish-content">
                <h3 className="dish-title">{dish.name}</h3>
                <p className="dish-desc">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
