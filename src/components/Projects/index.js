// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';
import todolist from 'src/assets/images/img-projects/todolist.png';
import converter from 'src/assets/images/img-projects/converter.png';
import search from 'src/assets/images/img-projects/search.png';

// == data
const dataProjects = [
  {
    id: 1,
    title: 'Todolist',
    content: 'React/SCSS',
    img: `${todolist}`,
    slug: 'https://github.com/Thomas-279/Todolist-React',
  },
  {
    id: 2,
    title: 'Converter currencies',
    content: 'React/SCSS',
    img: `${converter}`,
    slug: 'https://github.com/Thomas-279/Converter-React',
  },
  {
    id: 3,
    title: 'Github search',
    content: 'React/SCSS/Semantic-Ui/API',
    img: `${search}`,
    slug: 'https://github.com/Thomas-279/Github-search-api',
  },
];

// == Composant
const Projects = () => (
  <div className="projects-container">
    <h2>Projets réalisés</h2>
    <div className="projects">
      {dataProjects.map((data) => (
        <div className="projects__details" key={data.id}>
          <h3 className="projects__details-title">{data.title}</h3>
          <Link to={{ pathname: `${data.slug}` }} target="_blank">
            <img src={data.img} alt={data.title} className="projects__details-img" />
          </Link>
          <p className="projects__details-content">{data.content}</p>
        </div>
      ))}
    </div>
  </div>
);

// == Export
export default Projects;
