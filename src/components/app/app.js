import React, {useState, useEffect} from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import {useDispatch, useSelector} from 'react-redux'
import {getIngredientsThunk} from '../../services/actions/ingredients'

const App = () => {
  const dispatch = useDispatch()
  const {ingredients, loading, error} = useSelector(store => store.ingredients)

  const [isIngredientDetailsOpen, setIngredientDetailsOpen] = useState(false)
  const [ingredient, setIngredient] = useState({})

  useEffect(() => {
    dispatch(getIngredientsThunk())
  },[])

  const handlerIngredientClick = (ingredient) => {
    setIngredient(ingredient)
    setIngredientDetailsOpen(true)
  }

  const handlerCloseDetails = () => setIngredientDetailsOpen(false)

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
              isOpen={isIngredientDetailsOpen}
              close={handlerCloseDetails}
              header='Детали ингредиента'>
              <IngredientDetails
                data={ingredients}
                ingredient={ingredient} />
            </Modal>
          </main>
        </>
      )}
    </>
  )
}

export default App