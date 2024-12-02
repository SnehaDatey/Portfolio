import React from 'react';
import TechStackData from './TechStackData';
import "./TechStackStyles.css";

const TechStack = () => {
  return (
    <div className='techstack-cotainer'>
      {TechStackData.map((skill, id) => (
        <div key={id} className='imageBox'>
          <img src={skill.imgsrc} title={skill.title} alt={skill.title || `Skill ${id}`} />
        </div>
      ))}
    </div>
  );
};

export default TechStack;

