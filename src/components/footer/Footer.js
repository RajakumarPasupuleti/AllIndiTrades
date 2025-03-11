import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-section">
            <h4>Other Links</h4>
            <ul>
              <li><a href="/#terms-conditionsions">Terms & Conditions</a></li>
              <li><a href="/#cancellation-refund-policy">Cancellation & Refund Policy</a></li>
              <li><a href="/#privacy-policy">Privacy Policy</a></li>
              <li><a href="/#regulatory-compliance">Regulatory Compliance</a></li>
              {/* <li><a href="#">Investor Charter</a></li> */}
              {/* <li><a href="#">ODR Link</a></li>
              <li><a href="#">ODR Circular Link</a></li> */}
              {/* <li><a href="#">Disclosures</a></li> */}
              <li><a href="/#">Risks with short-term trading</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>All India Traders Pvt Ltd Limited</p>
            <p>Email: <a href="mailto:allindiatraderspvtltd@gmail.com"></a>allindiatraderspvtltd@gmail.com</p>
            <p>Phone: <a href="tel:+917981235137">+917981235137</a></p>
            <p>Address: Magadi Main Road, next to Prasanna Theater, Cholapalya, Bangalore, Karnataka, 560023
            </p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>We accept payments only in our registered bank accounts as displayed on our website.</p>
          <p>We do not have any other branches or sub-branches.</p>
          <p>Customers are advised to reach out to us on our registered number:+917981235137.</p>
          <p>Investment / Trading are subject to market risks. SEBI Registration Number:INA300003883 .</p>
          <p>&copy; 2025 All India Traders Pvt Ltd Financials-Investment Adviser. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
