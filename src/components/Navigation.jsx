import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
        Про мене
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : '')}>
        Проєкти
      </NavLink>
      <NavLink to="/skills" className={({ isActive }) => (isActive ? styles.active : '')}>
        Навички
      </NavLink>
      <NavLink to="/contacts" className={({ isActive }) => (isActive ? styles.active : '')}>
        Контакти
      </NavLink>
    </nav>
  );
};

export default Navigation;
