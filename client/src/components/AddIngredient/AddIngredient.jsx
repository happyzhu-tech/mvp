import React, { useState, useContext } from 'react';
import style from './AddIngredient.module.css';
import ingredientImg from './ingredients.png';
import add from './add.png';
import cook from './cook.png';
import { GlobalContext } from '../App.jsx';

const AddIngredient = () => {
  const globalData = useContext(GlobalContext);
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addClickHandler = (event) => {
    event.preventDefault();
    const newArr = globalData.state.ingredients.slice();
    newArr.push(inputValue);
    // update ingredients array of the global state
    globalData.dispatch({ type: 'updateIngredients', data: newArr });
    setInputValue('');
  };

  const cookClickHanlder = (event) => {
    event.preventDefault();
    // TODO: axios request
    globalData.dispatch({ type: 'updateShowRecipe', data: true });
  };

  return (
    <div className={style.rightContent}>
      <h2>What Ingredients Do You Have At Home?</h2>
      <img src={ingredientImg} alt="ingredients" className={style.image} />
      <div>
        <label htmlFor="ingredient" className={style.label}>
          Ingredient you have:
          <input
            type="text"
            name="ingredient"
            id="ingredient"
            className={style.inputBox}
            value={inputValue}
            onChange={inputChangeHandler}
          />
        </label>
      </div>
      <div className={style.buttons}>
        <div className={style.bigButton}>
          <button type="submit" className={style.button} disabled={!inputValue} onClick={addClickHandler}>Add</button>
          <img src={add} alt="add_button" className={style.icon} />
        </div>
        <div className={style.bigButton}>
          <button type="submit" className={style.button} disabled={!globalData.state.ingredients.length} onClick={cookClickHanlder}>Cook</button>
          <img src={cook} alt="cook_button" className={style.icon} />
        </div>
      </div>
    </div>
  );
};

export default AddIngredient;
