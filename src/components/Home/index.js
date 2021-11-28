/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import profilePicture from 'src/assets/cv/small.jpeg';
import Resume from 'src/assets/cv/ThomasGARRAUT.pdf';

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
            <h1 className="home__part-title typing-demo">Thomas GARRAUT</h1>
            <h2 className="home__part-subtitle">Développeur web fullstack Javascript</h2>
            <p className="home__part-content">Node.js / React - Redux</p>
            {/* test button */}
            {/* <button data-tooltip="Hello World">Hover Me</button> */}

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
            <p>Depuis 2020, ma passion pour le développement web est au coeur de ma carrière professionnelle. Entre formations et veille quotidienne, je reste sensible et curieux de toute nouveauté liée au web.
            </p>
            <div className="home__part2-link">
              <Link
                to={Resume}
                target="_blank"
              >
                <button type="button" className="button type1">
                  Consulter mon CV
                </button>
              </Link>
            </div>
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
