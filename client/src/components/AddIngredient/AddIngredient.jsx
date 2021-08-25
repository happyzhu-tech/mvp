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
    //dispatch
    globalData.dispatch({ type: 'updateIngredients', data: newArr });
    setInputValue('');
  };

  return (
    <div className={style.rightContent}>
      <h2>What Ingredients Do You Have At Home?</h2>
      <img src={ingredientImg} className={style.image}></img>
      <div>
        <label htmlFor='ingredient' className={style.label}>Ingredient you have:</label>
        <input type='text' name='ingredient' id='ingredient' className={style.inputBox} value={inputValue}
          onChange={inputChangeHandler}></input>
      </div>
      <div className={style.buttons}>
        <div className={style.bigButton}>
          <button className={style.button} disabled={!inputValue} onClick={addClickHandler}>Add</button>
          <img src={add} className={style.icon}></img>
        </div>
        <div className={style.bigButton}>
          <button className={style.button} disabled={!globalData.state.ingredients.length}>Cook</button>
          <img src={cook} className={style.icon}></img>
        </div>
      </div>
    </div>
  );
};

export default AddIngredient;