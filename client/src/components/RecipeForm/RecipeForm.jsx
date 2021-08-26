import React, { useState } from 'react';
import style from './RecipeForm.module.css';

const RecipeForm = () => {
  const [name, setName] = useState('');

  return (
    <form className={style.form}>
      <div className={style.entry}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" className={style.input} />
        </label>
      </div>
      <div className={style.entry}>
        <label htmlFor="ingredients">
          Ingredients:
          <input type="text" id="ingredients" className={style.input} />
        </label>
      </div>
      <div className={style.entry}>
        <p className={style.feature}>Features:</p>
        <div className={style.checkboxs}>
          <span>
            <label htmlFor="easy">
              easy
              <input type="checkbox" id="easy" name="easy" className={style.checkbox} />
            </label>
          </span>
          <span>
            <label htmlFor="gluten-free">
              gluten-free
              <input type="checkbox" id="gluten-free" name="gluten-free" className={style.checkbox} />
            </label>
          </span>
          <span>
            <label htmlFor="healthy">
              healthy
              <input type="checkbox" id="healthy" name="healthy" className={style.checkbox} />
            </label>
          </span>
        </div>
      </div>
      <div className={style.entry}>
        <label htmlFor="cook_time">
          Cook Time:
          <input type="text" id="cook_time" className={style.input} />
        </label>
      </div>
      <div className={style.entry}>
        <label htmlFor="image_url">
          Image URL:
          <input type="text" id="image_url" className={style.input} />
        </label>
      </div>
      <div className={style.entry}>
        <label htmlFor="recipe_url">
          Recipe URL:
          <input type="text" id="recipe_url" className={style.input} />
        </label>
      </div>
      <button type="submit" className={style.button}>Submit</button>
    </form>
  );
};

export default RecipeForm;
