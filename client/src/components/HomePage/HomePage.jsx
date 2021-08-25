import React, { useContext } from 'react';
import style from './HomePage.module.css';
import logo from './logo.png';
import { GlobalContext } from '../App.jsx';

const HomePage = () => {
  const globalData = useContext(GlobalContext);

  const gotoIngredientPageHandler = (event) => {
    event.preventDefault();
    globalData.dispatch({ type: 'updateIsIngredientPage', data: true });
    globalData.dispatch({ type: 'updateIsHomePage', data: false });
  };

  return (
    <div className={style.homePage}>
      <h2 className={style.title}>Meal Decider</h2>
      <img src={logo} className={style.logo}></img>
      <button className={style.button} onClick={gotoIngredientPageHandler}>What should I eat?</button>
      <button className={style.button}>Add Recipe!</button>
    </div>
  );
};

export default HomePage;