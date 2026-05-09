import React from 'react';
import { ShieldCheck, Wind } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience section-padding">
      <div className="container">
        
        <div className="exp-row">
          <div className="exp-content">
            <div className="exp-icon"><Wind size={40} /></div>
            <h2 className="section-title">Comfortable Family Dining</h2>
            <p className="exp-desc">
              Whether you're taking a break from a long highway drive or celebrating with family, our spacious AC dining hall provides the perfect oasis of comfort.
            </p>
            <p className="exp-desc">
              With ample seating and a warm, inviting atmosphere, we ensure that every guest feels right at home.
            </p>
          </div>
          <div className="exp-image">
            <img src="/comfortable-family-dining.png" alt="Family Dining Ambience" />
          </div>
        </div>

        <div className="exp-row reverse mt-xl">
          <div className="exp-content">
            <div className="exp-icon"><ShieldCheck size={40} /></div>
            <h2 className="section-title">Uncompromising Hygiene</h2>
            <p className="exp-desc">
              Trust is our most important ingredient. Our kitchen operates under the strictest hygiene standards, ensuring that every meal is prepared in a spotless environment.
            </p>
            <p className="exp-desc">
              From fresh daily sourcing of ingredients to impeccable staff cleanliness, we maintain absolute purity in our vegetarian kitchen.
            </p>
          </div>
          <div className="exp-image">
            <img src="/uncompromising-hygiene.png" alt="Hygienic Kitchen Preparation" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
