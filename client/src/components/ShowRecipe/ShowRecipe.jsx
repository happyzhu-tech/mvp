import React, { useState, useContext } from 'react';
import style from './ShowRecipe.module.css';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
import { GlobalContext } from '../App.jsx';

const ShowRecipe = () => {
  const globalData = useContext(GlobalContext);

  return (
    <div className={style.rightContent}>
      <h2>You Can Eat</h2>
      {globalData.state.recipes.map((recipe, index) => (
        <RecipeCard info={recipe} key={index} />
      ))}
    </div>
  );
};

export default ShowRecipe;
