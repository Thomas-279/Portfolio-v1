// == Import npm
import React, { useEffect } from 'react';

// == Import
import './style.scss';

// == data
import skillsData from 'src/data/skillsData';
import trainingsData from 'src/data/trainingsData';

// == Composant
const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="skills__container">
        <h2 className="skills__container-title">Expériences</h2>
        <div className="skills__container-cards">
          {skillsData.map((data) => (
            <div className="skills" key={data.id}>
              <h3 className="skills__title">{data.title}</h3>
              <p className="skills__date">{data.date}</p>
              <p className="skills__content">{data.content}</p>
              <p className="skills__object">{data.object}</p>
              <p className="skills__team">{data.team}</p>
              <p className="skills__tasks">{data.tasks}</p>
              <p className="skills__techno">{data.techno}</p>
              <p className="skills__techno2">{data.techno2}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="trainings__container">
        <h2 className="trainings__container-title">Formation</h2>
        <div className="trainings__container-cards">
          {trainingsData.map((training) => (
            <div className="trainings" key={training.id}>
              <h3 className="trainings__title">{training.title}</h3>
              <p className="trainings__date">{training.date}</p>
              <p className="trainings__content">{training.content}</p>
              <p className="trainings__content2">{training.content2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// == Export
export default Skills;
