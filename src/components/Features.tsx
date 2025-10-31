import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <i className="fas fa-file-alt"></i>
          <h3>Resume Optimizer</h3>
          <p>Boost ATS scores by 30%</p>
          <p>Upload and optimize </p>
        </div>
        <div className="feature-card">
          <i className="fas fa-microphone"></i>
          <h3>Interview Coach</h3>
          <p>Practice with 95% accurate feedback</p>
          <p>Text or voice mode</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-check-square"></i>
          <h3>Job Tracker</h3>
          <p>Match 10+ jobs monthly</p>
          <p>Track with reminders</p>
        </div>
      </div>
    </section>
  );
};

export default Features;