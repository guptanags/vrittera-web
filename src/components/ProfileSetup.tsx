import React, { useState } from 'react';

interface ProfileSetupProps {
  onComplete: () => void;
}

const ProfileSetupProps: React.FC<ProfileSetupProps> = ({ onComplete }) => {
  const [skills, setSkills] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [goal, setGoal] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skills.length || !location || !goal) {
      setMessage('Please fill all fields.');
      return;
    }
    // Simulate profile save (replace with API call)
    setMessage('Profile saved successfully!');
    setTimeout(onComplete, 1000); // Transition to Dashboard
  };

  const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      setSkills([...skills, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  return (
    <section className="profile-setup">
      <h2>Setup Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="skills">Skills (press Enter to add):</label>
        <input
          type="text"
          id="skills"
          placeholder="e.g., Python, Java"
          onKeyPress={addSkill}
          aria-label="Add skills"
        />
        <div className="skill-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill} ×</span>
          ))}
        </div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          placeholder="e.g., Bangalore, India"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Location"
        />
        <label htmlFor="goal">Goal:</label>
        <select
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          aria-label="Career goal"
        >
          <option value="">Select a goal</option>
          <option value="job-switch">Job Switch</option>
          <option value="skill-upgrade">Skill Upgrade</option>
        </select>
        <button type="submit" className="cta-button">Save</button>
        {message && <p className="message" style={{ color: message.includes('successfully') ? '#00BFFF' : '#FF0000' }}>{message}</p>}
      </form>
      <div className="progress-bar">
        <div className="progress" style={{ width: skills.length && location && goal ? '100%' : '0%' }}></div>
      </div>
    </section>
  );
};

export default ProfileSetupProps;