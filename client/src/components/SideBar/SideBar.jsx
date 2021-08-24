import React from 'react';
import style from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={style.sideBar}>
      <button className={style.button}>Home Page</button>
      <h5>Ingredients you have added:</h5>
      <ul>
        <li>milk</li>
      </ul>
    </div>
  );
};

export default SideBar;