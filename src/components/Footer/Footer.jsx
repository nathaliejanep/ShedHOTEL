import React from 'react';
import './Footer.scss';
import { NavLink, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import shedFooterLogo from '../../assets/images/logos/shed-footer-logo.svg';
const Footer = () => {
  const path = useLocation().pathname;
  return (
    <div>
      <footer
        className={path === '/caffegoomah' ? 'footer footer-goomah' : 'footer'}
      >
        {/* EDIT ADDRESS TAG\ */}
        <div className="footer-info">
          <img src={shedFooterLogo} alt="Shed Hotel Logo" />
          <address>
            <a href="tel:+41772699795">+41 77 269 97 95</a>
            {/* <a href="mailto:info@shedhotels.com">info@shedhotels.com</a> */}

            <a
              href="https://www.google.com/maps/place/Shed.+HOTEL/@46.0968015,7.2191013,15z/data=!3m1!4b1!4m8!3m7!1s0x478ecf045bc5b98b:0x51f11a6ba4cf7f63!5m2!4m1!1i2!8m2!3d46.096787!4d7.2278561"
              target="_blank"
              rel="noreferrer"
            >
              Rue de la Poste 4<br />
              {/* EDIT CREATE SPACE BTW */}
              <span>Verbier, Switzerland</span>
            </a>
          </address>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/shedhotelverbier"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/shed.hotelverbier/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="footer-links">
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/terms">Terms of Use</NavLink>
          <NavLink to="/hotelpolicy">Hotel Policy</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
