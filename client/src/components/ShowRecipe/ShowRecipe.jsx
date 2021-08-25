import React, { useState, useContext } from 'react';
import style from './ShowRecipe.module.css';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
import { GlobalContext } from '../App.jsx';

const ShowRecipe = () => {
  return (
    <div className={style.rightContent}>
      <h2>You Can Eat</h2>
      <RecipeCard />
    </div>
  );
};

export default ShowRecipe;
