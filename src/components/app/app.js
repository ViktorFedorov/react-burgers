import React from 'react'
import AppHeader from "../app-header/app-header"
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import data from '../../utils/data'
import BurgerConstructor from "../burger-constructor/burger-constructor"

const App = () => {
  return (
    <div>
      <AppHeader />
      <main className="content columns">
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data}/>
      </main>
    </div>
  )
}

export default App