import React, {useContext, useEffect, useState} from 'react'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Total from '../total/total'
import PropTypes from 'prop-types'
import ingredientPropTypes from '../../utils/types'
import {BurgerIngredientsContext} from '../../context/burger-ingredients-context'
import {sendData} from '../../utils/api'
import styles from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'

const BurgerConstructor = () => {
  const data = useContext(BurgerIngredientsContext)

  const [modalData, setModalData] = useState(null)
  const [idOfIngredient, setIdOfIngredient] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  let sum = data.reduce((acc, item) => {
    return acc + item.price
  }, 0)

  const bun = data.filter(item => item.type === 'bun')[0]
  const ingredients = data.filter(item => item.type !== 'bun')

  useEffect(() => {
    const res = data.map(item => item._id)
    setIdOfIngredient(res)
  }, [data])

  const handleOpenOrder = () => {
    sendData(idOfIngredient)
      .then(setModalData)
      .then(() => setIsOpen(true))
      .catch(console.log)
  }

  return (
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
          ingredients.map(ingredient => {
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
        <ConstructorElement
          text={`${bun.name} (низ)`}
          thumbnail={bun.image_mobile}
          price={bun.price}
          type='bottom'
          isLocked={true} />
      </div>
      <Total
        openOrderDetails={handleOpenOrder}
        total={sum} />
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}>
        {modalData && <OrderDetails orderNumber={modalData.order.number}/>}
      </Modal>
    </div>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
}

export default BurgerConstructor