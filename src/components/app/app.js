import React, {useState, useEffect} from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import {checkResponse} from '../../utils/utils'
import {baseApiUrl} from '../../utils/constants'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'

const App = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    hasError: false
  })

  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false)

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
          hasError: true
        })
      })
  },[])

  const handleOpenOrder = () => {
    setIsOrderDetailsOpen(true)
  }

  const handlerCloseOrder = () => {
    setIsOrderDetailsOpen(false)
  }

  const {loading, data, hasError} = state

  return (
    <div>
      {loading && 'Загружаю...'}
      {hasError && 'Ошибка загрузки данных =('}
      {!loading && !hasError && (
        <>
          <AppHeader />
          <main className='content columns'>
            <BurgerIngredients data={data} />
            <BurgerConstructor
              openOrderDetails={handleOpenOrder}
              data={data} />




            <Modal
              close={handlerCloseOrder}
              isOpen={isOrderDetailsOpen}>
              <OrderDetails
                orderNumber={'034536'}/>
            </Modal>




          </main>
        </>
      )}
    </div>
  )
}

export default App