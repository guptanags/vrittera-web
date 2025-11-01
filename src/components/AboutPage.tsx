import React from 'react';
import rocketIcon from '../images/rocket.png';
import targetIcon from '../images/target.png';
import gradIcon from '../images/education.png';
import brainIcon from '../images/brain.png';
import handshakeIcon from '../images/handshake.png';


const AboutPage: React.FC = () => {
  return (
    <section className="about-page" id="about">
      <div className="container">
        <h1>Orbiting Careers with AI</h1>
        <p className="intro">
          <strong>Vrittera AI</strong> is not just a tool — it's your <em>career co-pilot</em> designed to turn fresh graduates into job-ready professionals in weeks, not years.
        </p>

        <div className="vision-mission">
          {/* Vision */}
          <div className="card">
          <img src={rocketIcon} alt="Vision" className="icon" />

            
            <h3>Our Vision</h3>
            <p>
              To place <strong>1 million Indian graduates</strong> in their dream roles by 2030 — using AI to bridge the gap between campus and corporate.
            </p>
          </div>

          {/* Mission */}
          <div className="card">
            <img src={targetIcon} alt="Mission" className="icon" />
            <h3>Our Mission</h3>
            <p>
              Deliver <strong>instant, personalized career guidance</strong> — from resume to offer letter — using real-time AI that learns from 100,000+ job postings monthly.
            </p>
          </div>
        </div>

        <div className="grad-spotlight">
          <h2>Built for New Graduates</h2>
          <div className="grad-grid">
            <div className="grad-item">
              <img src={gradIcon} alt="Grad" className="icon" />
              <h4>No Experience? No Problem.</h4>
              <p>AI turns your projects, internships, and coursework into ATS-optimized bullet points.</p>
            </div>
            <div className="grad-item">
                <img src={brainIcon} alt="Skills" className="icon" />
              <h4>Skill Gap? Closed in 7 Days.</h4>
              <p>Get a custom learning path with free/paid courses — complete before your next interview.</p>
            </div>
            <div className="grad-item">
                <img src={handshakeIcon} alt="Practice" className="icon" />              <h4>Interview Confidence in 2 Sessions.</h4>
              <p>Practice with AI that gives feedback like a senior recruiter — 95% accuracy.</p>
            </div>
          </div>
        </div>

        <div className="ai-power">
          <h2>How AI Makes the Difference</h2>
          <ul className="ai-list">
            <li><strong>100K+</strong> job descriptions analyzed monthly</li>
            <li><strong>30%</strong> average ATS score boost</li>
            <li><strong>2.4x</strong> faster interview prep</li>
            <li><strong>₹1.2L</strong> avg. salary increase (users report)</li>
          </ul>
        </div>

        <div className="cta-section">
          <button 
            className="cta-button"
            onClick={() => window.location.href = 'vrittera://dashboard'}
          >
            Start Your Orbit Now
          </button>
          <p className="note">Free for all new graduates • Premium unlocks full AI power</p>
        </div>

        <div className="founder-note">
          <p>
            “I was a 2023 CSE grad with zero offers. Vrittera AI got me 3 interviews in 10 days.”<br />
            <strong>— Priya Sharma, Placed at Zomato</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;