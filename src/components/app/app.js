import React, {useState, useEffect} from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import {checkResponse} from '../../utils/utils'
import {baseApiUrl} from '../../utils/constants'
import ModalOverlay from '../modal-overlay/modal-overlay'
import OrderDetails from '../order-details/order-details'

const App = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    hasError: false
  })

  const [modalOrderOpen, setModalOrderOpen] = useState(false)

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

  const handleOpenModal = () => {
    setModalOrderOpen(true)
  }

  const handleCloseModal = (e) => {
    if(e.target.classList.contains('closed') || e.key === 'Escape') {
      setModalOrderOpen(false)
    }
  }

  document.addEventListener('keydown', handleCloseModal)

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
            <BurgerConstructor data={data} openModal={handleOpenModal} />
            <ModalOverlay isOpen={modalOrderOpen} closeOverlay={handleCloseModal} >
              <OrderDetails />
            </ModalOverlay>
          </main>
        </>
      )}
    </div>
  )
}

export default App