// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import profilePicture from 'src/assets/cv/small.jpg';

// == Composant
const Home = () => (
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
          Pour nouveau challenge, j'ai fais le choix d'un virage à 180° dans le développement
          web et mobile.
          Suite à une formation fullstack au language Javascript
          de 3 mois au sein de l'école O'clock,
          une spécialisation sur la librairie React d'un mois et
          un projet en équipe sur 1 mois, de la rédaction du cahier des charges au déploiement.
          Je suis désormais prêt pour me lancer dans cette nouvelle carrière et continuer
          à apprendre chaque jour.
        </p>
      </div>
      <div className="home__part2-picture">
        <img src={profilePicture} alt="ThomasGarraut" className="profile-picture" />
      </div>
    </section>
    <section className="home__part3">
      <div className="contact__container">
        <h3 className="contact__title">Contact</h3>
        <Link>Vers Linkedin</Link>
        <Link>Vers Github</Link>
        <Link>Par email</Link>
        <Link>Par téléphone</Link>
      </div>
    </section>
  </div>
);

// == Export
export default Home;
