import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ResumeUpload from './components/ResumeUpload';
import Footer from './components/Footer';
import OnboardingModal from './components/OnboardingModal';
import ProfileSetup from './components/ProfileSetup';
import './styles/App.css';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <ResumeUpload />
      {showProfile ? (
        <ProfileSetup onComplete={() => setShowProfile(false)} />
      ) : showModal ? (
        <OnboardingModal onClose={() => setShowModal(false)} onSuccess={() => setShowProfile(true)} />
      ) : (
        <button className="cta-button fixed-cta" onClick={() => setShowModal(true)}>Get Started</button>
      )}
      <Footer />
    </div>
  );
};

export default App;