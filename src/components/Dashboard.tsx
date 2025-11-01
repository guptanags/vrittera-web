import React from 'react';
 
const Dashboard: React.FC = () => {
  return (
    <section className="dashboard">
      <h2>Welcome back to Vrittera AI</h2>
      <div className="dashboard-grid">
        <div className="card" onClick={() => alert('Resume Upload')}>
          <h3>Resume Optimizer</h3>
          <p>2/3 uploads used</p>
        </div>
        <div className="card" onClick={() => alert('Interview Coach')}>
          <h3>Interview Coach</h3>
          <p>1/2 sessions used</p>
        </div>
        <div className="card" onClick={() => alert('Job Tracker')}>
          <h3>Job Tracker</h3>
          <p>8/10 matches</p>
        </div>
      </div>
      <button className="cta-button">Upgrade to Premium</button>
    </section>
  );
};

export default Dashboard;