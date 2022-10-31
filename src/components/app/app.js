import React, {useEffect} from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import {useDispatch, useSelector} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {
  closeIngredientDetails,
  getIngredientsThunk,
  setIngredientDetails
} from '../../services/actions/ingredients'
import RegisterPage from '../../pages/register/register'
import LoginPage from '../../pages/login/login'
import ForgotPassword from '../../pages/forgot-password/forgot-password'

const App = () => {
  const dispatch = useDispatch()
  const ingredient = useSelector(store => store.detail.ingredient)
  const open = useSelector(store => store.detail.open)

  useEffect(() => (dispatch(getIngredientsThunk())),[])

  const handlerIngredientClick = (ingredient) => dispatch(setIngredientDetails(ingredient))

  const handlerCloseDetails = () => dispatch(closeIngredientDetails())

  const content = (
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
  )

  return (
    <>
    <Router>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path='/' element={content}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </DndProvider>
      </Router>
    </>
  )
}

export default App