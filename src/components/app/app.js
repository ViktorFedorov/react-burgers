import React, {useEffect} from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import {useDispatch, useSelector} from 'react-redux'
import {
  closeIngredientDetails,
  getIngredientsThunk,
  setIngredientDetails
} from '../../services/actions/ingredients'

const App = () => {
  const dispatch = useDispatch()
  const {ingredients, loading, error} = useSelector(store => store.ingredients)

  const ingredient = useSelector(state => state.detail.ingredient)
  const open = useSelector(state => state.detail.open)

    useEffect(() => {
    dispatch(getIngredientsThunk())
  },[])

  const handlerIngredientClick = (ingredient) => {
    dispatch(setIngredientDetails(ingredient))
  }

  const handlerCloseDetails = () => dispatch(closeIngredientDetails())

  return (
    <>
      {loading && 'Загружаю...'}
      {error && 'Ошибка загрузки данных =('}
      {!loading && !error && (
        <>
          <AppHeader />
          <main className='content columns'>
              <BurgerIngredients
                ingredients={ingredients}
                onClick={handlerIngredientClick} />
              {/*<BurgerConstructor ingredients={ingredients} />*/}
            <Modal
              isOpen={open}
              close={handlerCloseDetails}
              header='Детали ингредиента'>
              <IngredientDetails
                ingredient={ingredient} />
            </Modal>
          </main>
        </>
      )}
    </>
  )
}

export default App