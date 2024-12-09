import React from 'react';
import styles from '../styles/Skills.module.css';

// Імпортуємо іконки Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faCss3Alt, faHtml5, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'JavaScript', icon: faJs, link: 'https://uk.wikipedia.org/wiki/JavaScript' },
  { name: 'React', icon: faReact, link: 'https://uk.wikipedia.org/wiki/React' },
  { name: 'CSS', icon: faCss3Alt, link: 'https://uk.wikipedia.org/wiki/CSS' },
  { name: 'HTML', icon: faHtml5, link: 'https://uk.wikipedia.org/wiki/HTML' },
  { name: 'Node.js', icon: faNodeJs, link: 'https://uk.wikipedia.org/wiki/Node.js' },
  { name: 'Git', icon: faGitAlt, link: 'https://uk.wikipedia.org/wiki/Git' }
];

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1>Навички</h1>
      <div className={styles.skillsList}>
        {skills.map(skill => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <FontAwesomeIcon icon={skill.icon} className={styles.icon} />
            {skill.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
