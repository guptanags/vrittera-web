import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <ul>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div><i className="fab fa-linkedin"></i><i className="fab fa-twitter"></i></div>
      <p>© 2025 Vrittera AI | Made in India</p>
    </footer>
  );
};

export default Footer;