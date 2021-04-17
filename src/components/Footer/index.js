// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import linkedin from 'src/assets/images/img-logo/linkedin.svg';
import github from 'src/assets/images/img-logo/github.svg';
import email from 'src/assets/images/img-logo/email.svg';

// == Composant
const Footer = () => (
  <div className="footer__container">
    <h3 className="footer__title">Contact</h3>
    <div className="link__container">
      <div className="link__content">
        <Link to={{ pathname: 'https://www.linkedin.com/in/thomas-garraut/' }} target="_blank">
          <img src={linkedin} alt="linkedin" />
        </Link>
      </div>
      <div className="link__content">
        <a href="mailto:thomas.garraut@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="email" className="link__images" />
        </a>
      </div>
      <div className="link__content">
        <Link to={{ pathname: 'https://github.com/Thomas-279' }} target="_blank">
          <img src={github} alt="github" />
        </Link>
      </div>
    </div>
  </div>
);

// == Export
export default Footer;
