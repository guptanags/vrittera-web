import React, { useState } from 'react';

interface Props {
  onComplete: () => void;
}

const ProfileSetup: React.FC<Props> = ({ onComplete }) => {
  const [skills, setSkills] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [goal, setGoal] = useState('');

  const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      setSkills([...skills, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (skills.length && location && goal) {
      onComplete();
    }
  };

  return (
    <section className="profile-setup">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Skills (Enter to add):</label>
        <input type="text" onKeyPress={addSkill} placeholder="e.g., React, Python" />
        <div className="skill-list">
          {skills.map((s, i) => <span key={i} className="skill-tag">{s} ×</span>)}
        </div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., Bangalore" />
        <label>Goal:</label>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="">Select</option>
          <option value="job">Job Switch</option>
          <option value="skill">Skill Upgrade</option>
        </select>
        <button type="submit" className="cta-button">Save & Continue</button>
      </form>
    </section>
  );
};

export default ProfileSetup;