import React from 'react';
import HomePage from './HomePage/HomePage.jsx';
import AddIngredient from './AddIngredient/AddIngredient.jsx';
import SideBar from './SideBar/SideBar.jsx';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.container}>
      {/* <HomePage /> */}
      <div className={style.mainContent}>
        <SideBar />
        <AddIngredient />
      </div>
    </div>
  );
};

export default App;