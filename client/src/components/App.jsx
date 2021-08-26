import React, { useReducer } from 'react';
import HomePage from './HomePage/HomePage.jsx';
import AddIngredient from './AddIngredient/AddIngredient.jsx';
import SideBar from './SideBar/SideBar.jsx';
import ShowRecipe from './ShowRecipe/ShowRecipe.jsx';
import style from './App.module.css';

const initialState = {
  ingredients: [],
  isHomePage: true,
  isMainPage: false,
  showRecipe: false,
  recipes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateIngredients':
      return { ...state, ingredients: action.data };
    case 'updateIsHomePage':
      return { ...state, isHomePage: action.data };
    case 'updateIsMainPage':
      return { ...state, isMainPage: action.data };
    case 'updateShowRecipe':
      return { ...state, showRecipe: action.data };
    case 'updateRecipes':
      return { ...state, recipes: action.data };
    default:
      return state;
  }
};

export const GlobalContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={style.container}>
      <GlobalContext.Provider value={{ state, dispatch }}>
        {state.isHomePage && <HomePage />}
        {state.isMainPage
        && (
          <div className={style.mainContent}>
            <SideBar />
            {state.showRecipe ? <ShowRecipe /> : <AddIngredient />}
          </div>
        )}
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
