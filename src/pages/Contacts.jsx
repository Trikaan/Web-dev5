import React, { useState } from 'react';
import styles from '../styles/Contacts.module.css';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ім'я: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div className={styles.container}>
      <h1>Контакти</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Ваше ім'я"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default Contacts;
