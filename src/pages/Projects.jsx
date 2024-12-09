import React from 'react';
import styles from '../styles/Projects.module.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

const Projects = () => {
    const projects = [
      { id: 1, image: project1 },
      { id: 2, image: project2 }
      
    ];
  
    return (
      <div className={styles.container}>
        <h1>Проєкти</h1>
        <div className={styles.gallery}>
          {projects.map(project => (
            <div key={project.id} className={styles.item}>
              <img src={project.image} alt={`Project ${project.id}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;