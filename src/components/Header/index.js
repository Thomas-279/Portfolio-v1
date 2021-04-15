// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Header = () => (
  <header className="header">
    <div className="header__top">
      {/* <span className="header__top-logo">
        <Link to="/">TG</Link>
      </span> */}
      <nav>
        <ul className="header__top-nav">
          <Link to="/">
            <li className="header__top-nav-link">
              Accueil
            </li>
          </Link>
          <Link to="/projects">
            <li className="header__top-nav-link">
              Projets
            </li>
          </Link>
          <Link to="/skills">
            <li className="header__top-nav-link">
              A propos
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  </header>
);

// == Export
export default Header;
