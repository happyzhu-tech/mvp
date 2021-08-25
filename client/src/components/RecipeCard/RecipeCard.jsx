import React, { useState, useContext } from 'react';
import style from './RecipeCard.module.css';
import time from './time.png';
import easy from './easy.png';
import healthy from './healthy.png';
import glutenree from './gluten-free.png';

const RecipeCard = () => {
  return (
    <div className={style.card}>
      <img className={style.image} alt="food" src="" />
      <div>
        <p className={style.name}>Slated Potatoes |</p>
        <span>ingredients</span>
        <a href="#" target="_blank">see full recipe</a>
      </div>
      <div>
        <img alt="time" src={time} />
        <span>15 min</span>
        <img alt="healthy" src={healthy} />
        <span>Healthy</span>
      </div>
    </div>
  );
};

export default RecipeCard;
