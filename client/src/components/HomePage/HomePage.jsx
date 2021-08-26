import React, { useContext } from 'react';
import style from './HomePage.module.css';
import logo from './logo.png';
import { GlobalContext } from '../App.jsx';

const HomePage = () => {
  const globalData = useContext(GlobalContext);

  const gotoMainPageHandler = (event) => {
    event.preventDefault();
    globalData.dispatch({ type: 'updateIsMainPage', data: true });
    globalData.dispatch({ type: 'updateIsHomePage', data: false });
    globalData.dispatch({ type: 'updateShowRecipe', data: false });
  };

  const gotoFormHandler = (event) => {
    event.preventDefault();
    globalData.dispatch({ type: 'updateIsHomePage', data: false });
    globalData.dispatch({ type: 'updateIsFormPage', data: true });
  };

  return (
    <div className={style.homePage}>
      <h2 className={style.title}>Meal Decider</h2>
      <img src={logo} alt="homepage_logo" className={style.logo} />
      <button type="submit" className={style.button} onClick={gotoMainPageHandler}>
        What should I eat?
      </button>
      <button type="submit" className={style.button} onClick={gotoFormHandler}>Add Recipe!</button>
    </div>
  );
};

export default HomePage;
