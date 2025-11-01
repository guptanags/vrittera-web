import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesPage from './components/FeaturesPage';
import PricingPage from './components/PricingPage';
import ResumeUpload from './components/ResumeUpload';
import OnboardingModal from './components/OnboardingModal';
import ProfileSetup from './components/ProfileSetup';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import './styles/App.css';

const App: React.FC = () => {
  const [page, setPage] = useState<'landing' | 'features' | 'pricing' | 'about'|'onboarding' | 'profile' | 'dashboard'>('landing');

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      
      {page === 'landing' && (
        <>
          <Hero />
          <Features />
          <ResumeUpload />
          <button className="cta-button fixed-cta" onClick={() => setPage('onboarding')}>
            Get Started
          </button>
        </>
      )}

      {page === 'features' && <FeaturesPage />}
      {page === 'pricing' && <PricingPage />}
      {page === 'about' && <AboutPage />}
      {page === 'onboarding' && (
        <OnboardingModal
          onClose={() => setPage('landing')}
          onSuccess={() => setPage('profile')}
        />
      )}

      {page === 'profile' && (
        <ProfileSetup onComplete={() => setPage('dashboard')} />
      )}

      {page === 'dashboard' && <Dashboard />}

      <Footer />
    </div>
  );
};

export default App;