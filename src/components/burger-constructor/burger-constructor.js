import React, {useEffect, useMemo, useState} from 'react'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Total from '../total/total'
import {sendData} from '../../utils/api'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import styles from './burger-constructor.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getIngredientsThunk} from '../../services/actions/ingredients'
import AppHeader from '../app-header/app-header'
import IngredientDetails from '../ingredient-details/ingredient-details'

const BurgerConstructor = () => {
  

  const {ingredients, loading, error} = useSelector(store => store.ingredients)


  // const sum = useMemo(() => {
  //   return ingredients.reduce((acc, item) => {
  //     return acc + item.price
  //   }, 0)
  // }, [ingredients])
  //
  const bun = useMemo(() => {
    return ingredients.filter(item => item.type === 'bun')[0]
  }, [ingredients, loading, error])

  const ingredientsWithoutBuns = useMemo(() => {
    return ingredients.filter(item => item.type !== 'bun')
  }, [ingredients, loading, error])

  // useEffect(() => {
  //   const res = ingredients.map(item => item._id)
  //   setIdOfIngredient(res)
  // }, [ingredients])
  //
  // const handleOpenOrder = () => {
  //   sendData(idOfIngredient)
  //     .then(setModalData)
  //     .then(() => setIsOpen(true))
  //     .catch(console.log)
  // }

  console.log(ingredients)
  console.log(bun)
  return (
    <>
      {loading && 'Загружаю...'}
      {error && 'Ошибка загрузки данных =('}
      {!loading && !error && bun && ingredientsWithoutBuns && (
        <div className='pl-5 pt-20'>
          <div className={`mt-4 ${styles.item} ${styles.bun}`}>
            <ConstructorElement
              text={`${bun.name} (верх)`}
              thumbnail={bun.image_mobile}
              price={bun.price}
              type='top'
              isLocked={true} />
          </div>
          <ul className={`pr-4 ${styles.scroll} ${styles.list}`}>
            {
              ingredientsWithoutBuns.map(ingredient => {
                const {_id, name, image_mobile, price} = ingredient

                return (
                  <li key={_id} className={`mt-4 ${styles.item}`}>
                    <div className={styles.dragndrop_icon}></div>
                    <ConstructorElement
                      text={name}
                      thumbnail={image_mobile}
                      price={price} />
                  </li>
                )
              })
            }
          </ul>
          <div className={`mt-4 ${styles.item} ${styles.bun}`}>
            {/*<ConstructorElement*/}
            {/*  text={`${bun.name} (низ)`}*/}
            {/*  thumbnail={bun.image_mobile}*/}
            {/*  price={bun.price}*/}
            {/*  type='bottom'*/}
            {/*  isLocked={true} />*/}
          </div>
          {/*<Total*/}
          {/*  openOrderDetails={handleOpenOrder}*/}
          {/*  total={sum} />*/}
          {/*<Modal*/}
          {/*  isOpen={isOpen}*/}
          {/*  close={() => setIsOpen(false)}>*/}
          {/*  {modalData && <OrderDetails orderNumber={modalData.order.number}/>}*/}
          {/*</Modal>*/}
        </div>
      )}
    </>
  )
}

export default BurgerConstructor