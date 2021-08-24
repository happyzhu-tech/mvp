import React from 'react';
import style from './AddIngredient.module.css';
import ingredients from './ingredients.png';

const AddIngredient = () => {
  return (
    <div className={style.rightContent}>
      <h2>What Ingredients Do You Have At Home?</h2>
      <img src={ingredients} className={style.image}></img>
      <div>
        <label htmlFor='ingredient' className={style.label}>Ingredient you have:</label>
        <input type='text' name='ingredient' id='ingredient' className={style.inputBox}></input>
      </div>
      <button className={style.button}>Add</button>
      <button className={style.button}>Cook</button>
    </div>
  );
};

export default AddIngredient;