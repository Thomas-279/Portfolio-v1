// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import profilePicture from 'src/assets/cv/small.jpg';
import linkedin from 'src/assets/images/img-logo/linkedin.svg';
import github from 'src/assets/images/img-logo/github.svg';
import email from 'src/assets/images/img-logo/email.svg';

// == Composant
const Home = () => (
  <div className="home">
    <div className="home__container">
      {/* Partie 1 présentation globale */}
      <section className="home__part">
        <div className="home__part-part">
          <p className="home__part-precontent">Bonjour, je suis</p>
          <h1 className="home__part-title">Thomas GARRAUT</h1>
          <h2 className="home__part-subtitle">Développeur web fullstack Javascript</h2>
          <p className="home__part-content">Node.js / React - Redux</p>
        </div>
      </section>
      {/* Partie 2 contactez moi */}
      <section className="home__part2">
        <div className="home__part2-content">
          <p>Après une carrière en restauration, dont 5 en tant que directeur de restaurant,
            j'ai pu acquérir de solides compétences en gestion d'entreprise,
            en organisation et en management d'équipe.
          </p>
          <p>Pour nouveau challenge, j'ai fais le choix d'un virage à 180° dans le développement
            web et mobile au cours de l'année 2020.
          </p>
        </div>
        <div className="home__part2-picture">
          <img src={profilePicture} alt="ThomasGarraut" className="profile-picture" />
        </div>
      </section>
      <section className="home__part3">
        <div className="contact__container">
          <h3 className="contact__title">Contact</h3>
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
      </section>
    </div>
  </div>
);

// == Export
export default Home;
