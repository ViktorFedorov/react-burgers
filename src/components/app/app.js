import React, {useState, useEffect} from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import {checkResponse} from '../../utils/utils'
import {baseApiUrl} from '../../utils/constants'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'

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
    fetch(baseApiUrl)
      .then(checkResponse)
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
            <BurgerIngredients
              onClick={handlerIngredientClick}
              data={data} />
            <BurgerConstructor
              openOrderDetails={handleOpenOrder}
              data={data} />
            <Modal
              isOpen={isOrderDetailsOpen}
              close={handlerCloseOrder}>
              <OrderDetails
                orderNumber={'034536'}/>
            </Modal>
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