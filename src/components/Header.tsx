import React from 'react';

interface HeaderProps {
  page: string;
  setPage: (page: 'landing' | 'features' | 'pricing' | 'about'| 'onboarding' | 'profile' | 'dashboard') => void;
}

const Header: React.FC<HeaderProps> = ({ page, setPage }) => {
  const toggleLanguage = () => {
    alert('Language toggle: EN | हिंदी (to be implemented)');
  };

  return (
    <header className="header">
      <div className="logo">Vrittera AI</div>
      <nav>
        <ul>
          <li><a href="#" className={page === 'landing' ? 'active' : ''} onClick={() => setPage('landing')}>Home</a></li>
          <li><a href="#" className={page === 'features' ? 'active' : ''} onClick={() => setPage('features')}>Features</a></li>
          <li><a href="#" className={page === 'pricing' ? 'active' : ''} onClick={() => setPage('pricing')}>Pricing</a></li>
          <li><a href="#" className={page === 'about' ? 'active' : ''} onClick={() => setPage('about')}>About</a></li>
        </ul>
      </nav>
      <button className="lang-toggle" onClick={toggleLanguage}>EN | हिंदी</button>
      <button className="cta-button" onClick={() => setPage('onboarding')}>Get Started</button>
    </header>
  );
};

export default Header;