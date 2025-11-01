import React from 'react';
import rocketIcon from '../images/rocket.png';
import targetIcon from '../images/target.png';
import gradIcon from '../images/education.png';
import brainIcon from '../images/brain.png';
import handshakeIcon from '../images/handshake.png';
import briefcaseIcon from '../images/suitcase.png';


const AboutPage: React.FC = () => {
  return (
    <section className="about-page" id="about">
      <div className="container">
        <h1>Orbiting Careers with AI</h1>
        <p className="intro">
        <strong>Vrittera AI</strong> is your <em>intelligent career co-pilot</em> — whether you're a fresh graduate stepping into the job market or a seasoned professional aiming for the next leap.        </p>

        <div className="vision-mission">
          {/* Vision */}
          <div className="card">
          <img src={rocketIcon} alt="Vision" className="icon" />

            
            <h3>Our Vision</h3>
            <p>
                To empower <strong>1 million Indian professionals</strong> — from campus to C-suite — with AI-driven tools that accelerate career success.            </p>
          </div>

          {/* Mission */}
          <div className="card">
            <img src={targetIcon} alt="Mission" className="icon" />
            <h3>Our Mission</h3>
            <p>
                Deliver <strong>real-time, personalized career intelligence</strong> using AI trained on 100,000+ live job postings — making every transition faster and smarter.            </p>
          </div>
        </div>

        <div className="grad-spotlight">
            <h2>Built for Every Career Stage</h2> 
            <div className="grad-grid">
            <div className="grad-item">
              <img src={gradIcon} alt="Grad" className="icon" />
              <h4>Fresh Graduates</h4>
             <p className="tagline">From Campus to Offer Letter</p>
              <ul className="benefits">
                <li>Turn projects & internships into ATS-winning bullets</li>
                <li>Close skill gaps with 7-day learning paths</li>
                <li>Land your first role in <strong>under 30 days</strong></li>
              </ul>
            </div>
            <div className="grad-item pro">
              <img src={briefcaseIcon} alt="professinals" className="icon" />

              <h4>Experienced Professionals</h4>
              <p className="tagline">From Good to Great</p>
              <ul className="benefits">
                <li>Master high-stakes interviews with AI feedback</li>
                <li>Identify & fill skill gaps for promotion/switch</li>
                <li>Negotiate <strong>₹2L+ salary hikes</strong> with data</li>
              </ul>
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