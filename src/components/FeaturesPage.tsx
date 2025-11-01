import React from 'react';
import cvIcon from '../images/cv.png';
import interviewIcon from '../images/job-interview.png';
import jobIcon from '../images/suitcase.png';
import chartIcon from '../images/bar-chart.png';
import linkedInIcon from '../images/linkedin.png';
import salaryIcon from '../images/budget.png';

const FeaturesPage: React.FC = () => {
  return (
    <section className="features-page" id="features">
      <div className="container">
        <h1>AI-Powered Career Tools</h1>
        <p className="subtitle">Everything you need to land your dream job — in one orbit.</p>

        <div className="features-grid">
          {/* Resume Optimizer */}
          <div className="feature-item">
            <img src={cvIcon} alt="Resume Icon" className="icon" />
            <h3>Resume Optimizer</h3>
            <ul>
              <li>Boost ATS score by <strong>30%</strong></li>
              <li>Keyword matching with live suggestions</li>
              <li>PDF/TXT upload, &lt; 5MB</li>
              <li>Export optimized resume</li>
            </ul>
            <span className="badge">3 free/month</span>
          </div>

          {/* Interview Coach */}
          <div className="feature-item">
            <img src={interviewIcon} alt="Interview Icon" className="icon" />
            <h3>Virtual Interview Coach</h3>
            <ul>
              <li>Real-time voice/text practice</li>
              <li>95% accurate feedback</li>
              <li>Technical & behavioral questions</li>
              <li>Confidence + clarity scoring</li>
            </ul>
            <span className="badge">2 free/month</span>
          </div>

          {/* Job Tracker */}
          <div className="feature-item">
            <img src={jobIcon} alt="Job Icon" className="icon" />
            <h3>Job Matching & Tracker</h3>
            <ul>
              <li>10+ personalized job matches</li>
              <li>Apply with one tap</li>
              <li>Status tracking + reminders</li>
              <li>Interview scheduler</li>
            </ul>
            <span className="badge">10 free/month</span>
          </div>

          {/* === ADVANCED FEATURES (Premium Only) === */}

          {/* Skill Gap Analyzer */}
          <div className="feature-item premium">
            <img src={chartIcon} alt="Skill Gap Analyzer Icon" className="icon" />
            <h3>Skill Gap Analyzer</h3>
            <ul>
              <li>Compare your skills vs job descriptions</li>
              <li>Get personalized learning paths</li>
              <li>Udemy/Coursera course recommendations</li>
              <li>Track progress over time</li>
            </ul>
            <span className="badge premium">Premium Only</span>
          
          </div>

          {/* LinkedIn Optimizer */}
          <div className="feature-item premium">
            <img src={linkedInIcon} alt="LinkedIn Icon" className="icon" />
            <h3>LinkedIn Profile Booster</h3>
            <ul>
              <li>AI-generated headline & summary</li>
              <li>Keyword-rich experience bullets</li>
              <li>Profile completeness score</li>
              <li>Export to LinkedIn</li>
            </ul>
            <span className="badge premium">Premium Only</span>
            
          </div>

          {/* Salary Negotiator */}
          <div className="feature-item premium">
            <img src={salaryIcon} alt="Salary Negotiator Icon" className="icon" />
            <h3>AI Salary Negotiator</h3>
            <ul>
              <li>Market salary insights (India)</li>
              <li>Generate counter-offer scripts</li>
              <li>Negotiation confidence score</li>
              <li>Save negotiation history</li>
            </ul>
            <span className="badge premium">Premium Only</span>
            
          </div>

        </div>

        <div className="cta-section">
          <button className="cta-button" onClick={() => window.location.href = 'vrittera://dashboard'}>
            Open in App
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;