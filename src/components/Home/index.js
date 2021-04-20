// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import profilePicture from 'src/assets/cv/small.jpg';

// == Composant
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
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
            <p>Après une carrière en restauration,
              dont 5 années en tant que directeur de restaurant,
              j'ai pu acquérir de solides compétences en gestion d'entreprise,
              en organisation et en management d'équipe.
            </p>
            <p>Pour nouveau challenge, j'ai fait le choix d'un virage à 180°
              dans le domaine du développement web et mobile au cours de l'année 2020.
            </p>
            <Link
              to={{ pathname: 'https://www.linkedin.com/in/thomas-garraut/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABS9U2YBgGJQx8VCfPht1Mynjo38caJyzdU,1635452955800)' }}
              target="_blank"
            >
              <button type="button" className="button type1">
                Consulter mon CV sur Linkedin
              </button>
            </Link>
          </div>
          <div className="home__part2-picture">
            <img src={profilePicture} alt="ThomasGarraut" className="profile-picture" />
          </div>
        </section>
      </div>
    </div>
  );
};

// == Export
export default Home;
