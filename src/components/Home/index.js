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
        <p>Présentation ici: </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum turpis ac risus consequat sollicitudin. Nam nec ultricies dolor. Nulla facilisi. Nam imperdiet enim in tristique hendrerit. Suspendisse potenti. Nam eu scelerisque ex. Nam varius est nec bibendum tempus. Quisque sit amet finibus odio. Nam commodo feugiat aliquam. Pellentesque sed est nisi.
        </p>
      </div>
      <div className="home__part2-picture">
        <img src={profilePicture} alt="ThomasGarraut" className="profile-picture" />
      </div>
    </section>
  </div>
);

// == Export
export default Home;
