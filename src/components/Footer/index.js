// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
// import github from 'src/assets/images/github_logo.png';
import linkedin from 'src/assets/images/linkedinsvg.svg';
import email from 'src/assets/images/emailsvg.svg';
import github from 'src/assets/images/githubsvg.svg';

// == Composant
const Footer = () => (
  <div className="footer">
    <ul className="footer__logo">
      <li className="footer__logo-list">
        <Link to={{ pathname: 'https://www.linkedin.com/in/thomas-garraut/' }} target="_blank">
          <img className="footer__logo-img" src={linkedin} alt="github" />
        </Link>
      </li>
      <li className="footer__logo-list">
        <Link to={{ pathname: 'https://github.com/Thomas-279' }} target="_blank">
          <img className="footer__logo-img" src={github} alt="linkedin" />
        </Link>
      </li>
      <li className="footer__logo-list">
        <a href="mailto:thomas.garraut@gmail.com">
          <img className="footer__logo-img" src={email} alt="email" />
        </a>
      </li>
    </ul>
  </div>
);

// == Export
export default Footer;
