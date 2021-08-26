import React, { useState, useContext } from 'react';
import style from './RecipeCard.module.css';
import time from './time.png';
import easy from './easy.png';
import healthy from './healthy.png';
import glutenFree from './gluten-free.png';

const RecipeCard = ({ info }) => (
  <div className={style.card}>
    <img className={style.image} alt="food" src={info.image_url} />
    <div>
      <p className={style.name}>
        {info.name}
        :
      </p>
      {info.ingredients.map((ingredient, index) => (
        <span key={index} className={style.ingredient}>{ingredient}</span>
      ))}
      <a href={info.recipe_url} target="_blank" className={style.link}>see full recipe</a>
    </div>
    <div>
      <img alt="time" src={time} className={style.icon} />
      <span className={style.description}>{info.cook_time}</span>
      {info.features.map((feature, index) => (
        <span key={index}>
          <img alt={feature} src={feature === 'easy' ? easy : (feature === 'gluten-free' ? glutenFree : healthy)} className={style.icon} />
          <span className={style.description}>{feature}</span>
        </span>
      ))}
    </div>
  </div>
);

export default RecipeCard;
