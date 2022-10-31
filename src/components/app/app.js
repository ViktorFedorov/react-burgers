import React, {useEffect} from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import {useDispatch, useSelector} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
  closeIngredientDetails,
  getIngredientsThunk,
  setIngredientDetails
} from '../../services/actions/ingredients'
import LoginPage from '../../pages/login/login'

const App = () => {
  const dispatch = useDispatch()
  const ingredient = useSelector(store => store.detail.ingredient)
  const open = useSelector(store => store.detail.open)

  useEffect(() => (dispatch(getIngredientsThunk())),[])

  const handlerIngredientClick = (ingredient) => dispatch(setIngredientDetails(ingredient))

  const handlerCloseDetails = () => dispatch(closeIngredientDetails())

  return (
    <>
    <Router>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <Switch>
          <Route path="/" exact>
            <main className='content columns'>
              <BurgerIngredients
                onClick={handlerIngredientClick} />
              <BurgerConstructor />
              <Modal
                isOpen={open}
                close={handlerCloseDetails}
                header='Детали ингредиента'>
                <IngredientDetails
                  ingredient={ingredient} />
              </Modal>
            </main>
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Switch>
      </DndProvider>
      </Router>
    </>
  )
}

export default App