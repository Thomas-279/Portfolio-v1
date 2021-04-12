// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == data
const skillsData = [
  {
    id: 1,
    title: 'Développeur front-end',
    date: 'Février 2021 - Mars 2021',
    content: 'O’clock - Projet de fin de formation',
    object: 'Création d’une application web fonctionnelle',
    team: 'Equipe de 5 développeurs',
    tasks: 'Rédaction de cahier des charges / Userstories / Wireframes / Chartre graphique',
    techno: 'Nodejs + Express / PostgreSql / Sqitch / ReactJs + Redux / SemanticUi',
    techno2: 'Test via : Mocha + Chai, Déploiement via Heroku + Surge',
  },
  {
    id: 2,
    title: 'Directeur de restaurant',
    date: 'Juillet 2015 - Avril 2020',
    content: 'McDonald’s (Poissy - Yvelines )',
    object: 'Pilotage de l’exploitation ( 2,2 m€ CA )',
    team: 'Management, développement et animation des équipes ( 30 salariés )',
    tasks: 'Gestion des coûts et produits, optimisation de marge d’exploitation',
    techno: 'Garant de l\'hygiène et respect du plan HACCP',
    techno2: 'Relation clientèle / fournisseurs',
  },
  {
    id: 3,
    title: 'Manager / Directeur-adjoint',
    date: 'Novembre 2005 - Juin 2015',
    content: 'McDonald’s ( Saint-Germain-en-laye - Yvelines )',
    object: 'Pilotage de l’exploitation ( 2,2 m€ CA )',
    team: 'Management, développement et animation des équipes ( 30 salariés )',
    techno: 'Garant de l\'hygiène et respect du plan HACCP',
    techno2: 'Relation clientèle / fournisseurs',
  },
];
const trainingsData = [
  {
    id: 1,
    title: 'Certification Maîtrise de la qualité en projet Web - Niveau Confirmé',
    content: 'Certificat Opquast® N° Q763X9',
    date: 'Mars 2021',
  },
  {
    id: 2,
    title: 'Développeur Full Stack Javascript ( spécialisation React )',
    content: 'Ecole O\’clock - Label Grande Ecole du Numérique - Téléprésentiel',
    content2: 798 + 'h de formation : 3 mois de socle Javascript + 1 mois de Spécialisation React + 1 mois de projet',
    date: 'Octobre 2020 - Mars 2021',
  },
  {
    id: 3,
    title: 'BTS Management des unités commerciales',
    content: 'Candidat libre',
    date: '2014',
  },
];


// == Composant
const Skills = () => (
  <div className="skills-container">
    {trainingsData.map((training) => (
      <div className="trainings" key={training.id}>
        <h2>{training.title}</h2>
        <p>{training.content}</p>
        <p>{training.content2}</p>
        <p>{training.date}</p>
      </div>
    ))}
    {skillsData.map((data) => (
      <div className="skills" key={data.id}>
        <h2>{data.title}</h2>
        <p>{data.date}</p>
        <p>{data.content}</p>
        <p>{data.object}</p>
        <p>{data.team}</p>
        <p>{data.tasks}</p>
        <p>{data.techno}</p>
        <p>{data.techno2}</p>
      </div>
    ))}
  </div>
);

// == Export
export default Skills;
