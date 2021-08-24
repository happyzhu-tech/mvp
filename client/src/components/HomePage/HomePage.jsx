import React from 'react';
import style from './HomePage.module.css';
import logo from './logo.png';

const HomePage = () => {
  return (
    <div className={style.homePage}>
      <h2 className={style.title}>Meal Decider</h2>
      <img src={logo} className={style.logo}></img>
      <button className={style.button}>What should I eat?</button>
      <button className={style.button}>Add Recipe!</button>
    </div>
  );
};

export default HomePage;