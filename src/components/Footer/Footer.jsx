import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import shedFooter from '../../assets/images/shed-footer.png';
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-info">
          <img src={shedFooter} alt="Shed Hotel Logo" />

          <a href="tel:+41772699795">+41 77 269 97 95</a>
          {/* <a href="mailto:info@shedhotels.com">info@shedhotels.com</a> */}
          <a href="address:Rue de la Poste 4">Rue de la Poste 4</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="footer-links">
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/terms">Terms of Use</NavLink>
          <NavLink to="/hotelpolice">Hotel Police</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
