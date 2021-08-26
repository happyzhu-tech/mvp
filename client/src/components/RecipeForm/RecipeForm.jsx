import React, { useState } from 'react';
import axios from 'axios';
import style from './RecipeForm.module.css';

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [features, setFeatures] = useState([]);
  const [cookTime, setCookTime] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [recipeUrl, setRecipeUrl] = useState('');
  const [easyCheck, setEasyCheck] = useState(false);
  const [glutenCheck, setGlutenCheck] = useState(false);
  const [healthyCheck, setHealthyCheck] = useState(false);

  // const Ref1 = React.createRef();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ingredientChangeHandler = (event) => {
    setIngredients(event.target.value);
  };

  // const checkboxHandler = (event) => {
  //   const newArr = features.slice();
  //   newArr.push(event.target.getAttribute('name'));
  //   setFeatures(newArr);
  // };
  const easyCheckHandler = () => {
    const newArr = features.slice();
    newArr.push('easy');
    setFeatures(newArr);
    setEasyCheck(!easyCheck);
  };

  const glutenCheckHandler = () => {
    const newArr = features.slice();
    newArr.push('gluten-free');
    setFeatures(newArr);
    setGlutenCheck(!glutenCheck);
  };

  const healthyCheckHandler = () => {
    const newArr = features.slice();
    newArr.push('healthy');
    setFeatures(newArr);
    setHealthyCheck(!healthyCheck);
  };

  const cookTimeChangeHandler = (event) => {
    setCookTime(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const recipeChangeHandler = (event) => {
    setRecipeUrl(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const obj = {
      name,
      ingredients,
      features,
      cook_time: cookTime,
      recipe_url: recipeUrl,
      image_url: imageUrl,
    };

    axios({
      method: 'post',
      url: 'http://localhost:3000/addRecipe',
      data: obj,
    })
      .then(() => {
        console.log('successfully submit form!');
      })
      .catch((err) => {
        console.log('form submit error', err);
      });

    setName('');
    setIngredients([]);
    setFeatures([]);
    setCookTime('');
    setImageUrl('');
    setRecipeUrl('');
    setEasyCheck(false);
    setGlutenCheck(false);
    setHealthyCheck(false);
  };

  return (
    <form className={style.form}>
      <div className={style.entry}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" className={style.input} value={name} onChange={nameChangeHandler} />
        </label>
      </div>
      <div className={style.entry}>
        <label htmlFor="ingredients">
          Ingredients:
          <input type="text" id="ingredients" className={style.input} value={ingredients} onChange={ingredientChangeHandler} />
        </label>
      </div>
      <div className={style.entry}>
        <p className={style.feature}>Features:</p>
        <div className={style.checkboxs}>
          <span>
            <label htmlFor="easy">
              easy
              <input type="checkbox" id="easy" name="easy" className={style.checkbox} onChange={easyCheckHandler} checked={easyCheck} />
            </label>
          </span>
          <span>
            <label htmlFor="gluten-free">
              gluten-free
              <input type="checkbox" id="gluten-free" name="gluten-free" className={style.checkbox} onChange={glutenCheckHandler} checked={glutenCheck} />
            </label>
          </span>
          <span>
            <label htmlFor="healthy">
              healthy
              <input type="checkbox" id="healthy" name="healthy" className={style.checkbox} onChange={healthyCheckHandler} checked={healthyCheck} />
            </label>
          </span>
        </div>
      </div>
      <div className={style.entry}>
        <label htmlFor="cook_time">
          Cook Time:
          <input type="text" id="cook_time" className={style.input} value={cookTime} onChange={cookTimeChangeHandler} />
        </label>
      </div>
      <div className={style.entry}>
        <label htmlFor="image_url">
          Image URL:
          <input type="text" id="image_url" className={style.input} value={imageUrl} onChange={imageChangeHandler} />
        </label>
      </div>
      <div className={style.entry}>
        <label htmlFor="recipe_url">
          Recipe URL:
          <input type="text" id="recipe_url" className={style.input} value={recipeUrl} onChange={recipeChangeHandler} />
        </label>
      </div>
      <button type="submit" className={style.button} onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default RecipeForm;
