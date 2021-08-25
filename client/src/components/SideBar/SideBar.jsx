import React, { useContext } from 'react';
import style from './SideBar.module.css';
import { GlobalContext } from '../App.jsx';

const SideBar = () => {
  const globalData = useContext(GlobalContext);

  const backToHomePageHandler = (event) => {
    event.preventDefault();
    globalData.dispatch({ type: 'updateIsIngredientPage', data: false });
    globalData.dispatch({ type: 'updateIsHomePage', data: true });
  };

  return (
    <div className={style.sideBar}>
      <button className={style.button} onClick={backToHomePageHandler}>Home Page</button>
      <h5>Ingredients you have added:</h5>
      <ul>
        <li>milk</li>
      </ul>
    </div>
  );
};

export default SideBar;