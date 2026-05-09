import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img 
              src="/traditional-south-indian-thali.png" 
              alt="Traditional South Indian Thali" 
              className="about-img"
            />
            <div className="about-experience-badge">
              <span className="years">Established</span>
              <span className="text">in Tiruchengode</span>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">A Legacy of Authentic Taste and Warm Hospitality</h2>
            
            <p className="about-desc">
              At Ponnusamy High Class Vegetarian Restaurant, we believe that food is more than just a meal—it is a cherished family experience. For years, we have been serving the vibrant community of Tiruchengode and travelers along the Sankagiri road with uncompromising quality and taste.
            </p>
            
            <p className="about-desc">
              Our recipes have been passed down through generations, ensuring every dish brings you the true essence of South Indian tradition. We pride ourselves on using the freshest ingredients, prepared daily in our spotless, highly hygienic kitchen.
            </p>

            <ul className="about-features">
              <li>Traditional Recipes</li>
              <li>Premium Ingredients</li>
              <li>Immaculate Hygiene</li>
              <li>Family-First Ambience</li>
            </ul>

            <a href="#menu" className="primary-btn about-btn">Discover Our Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
