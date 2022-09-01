import React, {useState, useEffect} from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'
import {getData} from '../../utils/api'
import {BurgerIngredientsContext} from '../../context/burger-ingredients-context'

const App = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    hasError: false
  })

  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false)
  const [isIngredientDetailsOpen, setIngredientDetailsOpen] = useState(false)
  const [ingredient, setIngredient] = useState({})

  useEffect(() => {
    getData()
      .then(({data}) => {
        setState({
          ...state,
          data,
          loading: false
        })
      })
      .catch((err) => {
        console.log(err)
        setState({
          ...state,
          hasError: true,
          loading: false
        })
      })
  },[])

  const handlerIngredientClick = (ingredient) => {
    setIngredient(ingredient)
    setIngredientDetailsOpen(true)
  }

  const handleOpenOrder = () => setIsOrderDetailsOpen(true)
  const handlerCloseOrder = () => setIsOrderDetailsOpen(false)
  const handlerCloseDetails = () => setIngredientDetailsOpen(false)

  const {loading, data, hasError} = state

  return (
    <>
      {loading && 'Загружаю...'}
      {hasError && 'Ошибка загрузки данных =('}
      {!loading && !hasError && (
        <>
          <AppHeader />
          <main className='content columns'>
            <BurgerIngredientsContext.Provider value={state.data}>
              <BurgerIngredients
                onClick={handlerIngredientClick} />
              <BurgerConstructor />
            </BurgerIngredientsContext.Provider>

            <Modal
              isOpen={isIngredientDetailsOpen}
              close={handlerCloseDetails}
              header='Детали ингредиента'>
              <IngredientDetails
                data={data}
                ingredient={ingredient} />
            </Modal>
          </main>
        </>
      )}
    </>
  )
}

export default App