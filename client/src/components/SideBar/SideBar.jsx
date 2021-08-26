import React, { useContext } from 'react';
import axios from 'axios';
import qs from 'qs';
import style from './SideBar.module.css';
import { GlobalContext } from '../App.jsx';

const SideBar = () => {
  const globalData = useContext(GlobalContext);

  const backToHomePageHandler = (event) => {
    event.preventDefault();
    globalData.dispatch({ type: 'updateIsMainPage', data: false });
    globalData.dispatch({ type: 'updateIsHomePage', data: true });
    globalData.dispatch({ type: 'updateIngredients', data: [] });
    globalData.dispatch({ type: 'updateRecipes', data: [] });
  };

  const removeClickHandler = (event) => {
    const targetIdx = globalData.state.ingredients.indexOf(event.target.textContent);
    const newArr = globalData.state.ingredients.slice();
    newArr.splice(targetIdx, 1);
    if (globalData.state.showRecipe) {
      axios.get('http://localhost:3000/recipes', {
        params: {
          ingredients: newArr,
        },
        paramsSerializer: (params) => (
          qs.stringify(params, { arrayFormat: 'repeat' })
        ),
      })
        .then((res) => {
          globalData.dispatch({ type: 'updateRecipes', data: res.data });
          globalData.dispatch({ type: 'updateIngredients', data: newArr });
        })
        .catch((err) => {
          console.log('update recipes err', err);
        });
    } else {
      globalData.dispatch({ type: 'updateIngredients', data: newArr });
    }
  };

  return (
    <div className={style.sideBar}>
      <button type="submit" className={style.button} onClick={backToHomePageHandler}>Home Page</button>
      <h5>Ingredients you have added:</h5>
      <ul>
        {globalData.state.ingredients.map((ingredient, index) => (
          <li key={index} className={style.listItem} onDoubleClick={removeClickHandler}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
