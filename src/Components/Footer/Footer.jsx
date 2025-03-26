import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Did you know?</h3>
          <p>If you're not ready to set up just yet, but know someone who is</p>
          <p className="guaranteed">GUARANTEED</p>
          <p className="amount">Satisfied</p>
          <p>Believe On Our Machineries</p>
        </div>
        <div className="footer-right">
          <p>
            Simply drop us an email to <a href="mailto:abdullah.bhatti_14@icloud.com">abdullah.bhatti_14@icloud.com</a>
          </p>
          <p>with your and your friend's details, and we will take care of the rest.</p>
        </div>
      </div>
      <div className="footer-contact">
        <p>Office 201, Building B6, Diera, Saudia Arabia</p>
        <p>
          <a href="tel:+0581618133">+0581618133</a> | <a href="mailto:abdullah.bhatti_14@icloud.com">abdullah.bhatti_14@icloud.com</a>
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Star Operations & Maintenance Est. – All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
