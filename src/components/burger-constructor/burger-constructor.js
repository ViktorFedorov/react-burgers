import React, {useEffect, useMemo, useState} from 'react'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Total from '../total/total'
import {sendData} from '../../utils/api'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import styles from './burger-constructor.module.css'

const BurgerConstructor = ({ingredients}) => {
  const [modalData, setModalData] = useState(null)
  const [idOfIngredient, setIdOfIngredient] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const sum = useMemo(() => {
    return ingredients.reduce((acc, item) => {
      return acc + item.price
    }, 0)
  }, [ingredients])

  const bun = useMemo(() => {
    return ingredients.filter(item => item.type === 'bun')[0]
  }, [ingredients])

  const ingredientsWithoutBuns = useMemo(() => {
    return ingredients.filter(item => item.type !== 'bun')
  }, [ingredients])

  useEffect(() => {
    const res = ingredients.map(item => item._id)
    setIdOfIngredient(res)
  }, [ingredients])

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

export default BurgerConstructor