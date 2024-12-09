import React from 'react';
import styles from '../styles/About.module.css';
import profileImage from '../assets/abolute-beauty.jpg';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>Про мене</h1>
      <p className={styles.text}>Я, Артем Пашкетнік, студент ВоФК НУХТ, впевнено крокую до своєї мети — стати професійним Frontend-розробником. Маю ґрунтовні знання в HTML, CSS та JavaScript, а також активно вивчаю сучасні фреймворки, такі як React. Володію навичками створення адаптивних, зручних та естетично привабливих інтерфейсів, приділяючи особливу увагу деталям та оптимізації. Я прагну постійного професійного зростання, вивчаючи нові технології та вдосконалюючи свої проєкти. Вірю, що мій ентузіазм, аналітичний підхід та креативність стануть міцним фундаментом для успішної кар’єри у сфері розробки.</p>
      <div className={styles.imageWrapper}>
        <img
         src={profileImage} // Тут може бути плейсхолдер або фактичне фото
          alt="Моє фото"
          className={styles.profileImage}
        />
      </div>
    </div>
  );
};

export default About;
