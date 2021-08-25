import React, { useReducer } from 'react';
import HomePage from './HomePage/HomePage.jsx';
import AddIngredient from './AddIngredient/AddIngredient.jsx';
import SideBar from './SideBar/SideBar.jsx';
import style from './App.module.css';

const initialState = {
  ingredients: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateIngredients':
      return { ...state, ingredients: action.data };
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
        {/* <HomePage /> */}
        <div className={style.mainContent}>
          <SideBar />
          <AddIngredient />
        </div>
      </GlobalContext.Provider>
    </div>
  );
};

export default App;