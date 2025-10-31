import React from 'react';
import careerImage from '../images/career.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>Launch Your Career with AI</h1>
      <p className="subheadline">Optimize Resumes, Master Interviews, and Plan Your Future</p>
      <img src={careerImage} alt="Career Growth" className="hero-image" />
      <div className="cta-buttons">
        <button className="cta-button">Try Free</button>
        <button className="cta-button">Premium ₹799/month</button>
      </div>
    </section>
  );
};

export default Hero;