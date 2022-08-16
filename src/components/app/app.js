import React, {useState, useEffect} from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import {checkResponse} from '../../utils/utils'
import {baseApiUrl} from '../../utils/constants'

const App = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    hasError: false
  })

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
            <BurgerConstructor data={data} />
          </main>
        </>
      )}
    </div>
  )
}

export default App