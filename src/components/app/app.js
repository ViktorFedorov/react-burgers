import React from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import data from '../../utils/data'

const App = () => {
  return (
    <div>
      <AppHeader />
      <main className="content">
        <BurgerIngredients data={data} />
      </main>
    </div>
  );
};

export default App;