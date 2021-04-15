// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// == data
import dataProjects from 'src/data/dataProjects';

// == Composant
const Projects = () => (
  <div className="projects-container">
    <h2 className="projects__title">Projets réalisés</h2>
    <div className="projects">
      {dataProjects.map((data) => (
        <Link to={{ pathname: `${data.slug}` }} target="_blank" key={data.id}>
          <div className="projects__details">
            <img src={data.img} alt={data.title} className="projects__details-img" />
            <h4 className="projects__details-title">{data.title}</h4>
            <span className="projects__details-content">{data.content}</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

// == Export
export default Projects;
