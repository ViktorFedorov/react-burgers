import React, {useEffect} from 'react'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import Modal from '../../components/modal/modal'
import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import {closeIngredientDetails, getIngredientsThunk, setIngredientDetails} from '../../services/actions/ingredients'
import {useDispatch, useSelector} from 'react-redux'

const MainPage = () => {
  const dispatch = useDispatch()
  const ingredient = useSelector(store => store.detail.ingredient)
  const open = useSelector(store => store.detail.open)

  useEffect(() => (dispatch(getIngredientsThunk())),[dispatch])

  const handlerIngredientClick = (ingredient) => dispatch(setIngredientDetails(ingredient))
  const handlerCloseDetails = () => dispatch(closeIngredientDetails())

  return (
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
}

export default MainPage