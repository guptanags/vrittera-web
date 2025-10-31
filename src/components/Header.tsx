import React from 'react';

const Header: React.FC = () => {
  const toggleLanguage = () => {
    // Placeholder for language toggle logic (to be enhanced)
    alert('Language toggle functionality to be implemented');
  };

  return (
    <header className="header">
      <div className="logo">Vrittera AI</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      </header>
  );
};

export default Header;