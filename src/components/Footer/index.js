// == Import npm
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// == Import
import { ImArrowUp } from 'react-icons/im';
import './style.scss';
import linkedin from 'src/assets/images/img-logo/linkedin.svg';
import github from 'src/assets/images/img-logo/github.svg';
import email from 'src/assets/images/img-logo/email.svg';

// == Composant
const Footer = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    }
    else if (scrolled <= 100) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
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
      <div className="button-backtop">
        <ImArrowUp
          className="top-button"
          onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }}
          name="Back to top"
        />
      </div>
    </div>
  );
};

// == Export
export default Footer;
