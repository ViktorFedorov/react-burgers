import React from 'react'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Total from '../total/total'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import styles from './burger-constructor.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {closeOrderDetails, sendOrderDataThunk} from '../../services/actions/order-details'
import {useDrop} from 'react-dnd'
import {
  deleteConstructorIngredient,
  moveConstructorIngredient,
  setConstructorIngredient
} from '../../services/actions/constructor'
import SelectedIngredient from '../selected-ingredient/selected-ingredient'

const BurgerConstructor = () => {
  const {bun, toppings} = useSelector(store => store.ingredientConstructor)
  const {order, open} = useSelector(store => store.order)
  const dispatch = useDispatch()

  const [{isHover}, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (droppedElement) => {
      handleDrop(droppedElement)
    },
    collect: (monitor) => ({
      isHover: monitor.isOver()
    })
  })

  const handleDrop = (droppedElement) => {
    // добавляем уникальный id (если выбраны одинаковые ингредиенты - удаляется только один)
    const modifyElement = {...droppedElement, uid: Math.random()}
    dispatch(setConstructorIngredient(modifyElement))
  }

  const sum = () => {
    return toppings.reduce((acc, topping) => topping.price + acc, 0) + bun.price * 2
  }

  const handleOpenOrder = () => {
    const ids = toppings.map(topping => topping._id)
    dispatch(sendOrderDataThunk([...ids, bun._id]))
  }

  const handleClose = () => {
    dispatch(closeOrderDetails())
  }

  const handleDeleteIngredient = (id) => {
    dispatch(deleteConstructorIngredient(id))
  }

  const moveIngredient = (hoverIndex, dragIndex) => {
    dispatch(moveConstructorIngredient(hoverIndex, dragIndex))
  }

  const backgroundColor = isHover ? 'rgba(0,0,0, .4)' : 'transparent'

  return (
    <div
      ref={dropRef}
      style={{backgroundColor}}
      className={`pl-5 mt-20`}>
      {
        bun &&
        <div className={`mt-4 ${styles.item} ${styles.bun}`}>
          <ConstructorElement
            text={`${bun.name} (верх)`}
            thumbnail={bun.image_mobile}
            price={bun.price}
            type='top'
            isLocked={true} />
        </div>
      }
      <ul className={`pr-4 ${styles.scroll} ${styles.list}`}>
        {
          toppings.map((topping, index) => (
            <li key={topping.uid} className={`mt-4 ${styles.item}`}>
              <div className={styles.dragndrop_icon}></div>
              <SelectedIngredient
                index={index}
                text={topping.name}
                thumbnail={topping.image_mobile}
                price={topping.price}
                handleClose={() => handleDeleteIngredient(topping.uid)}
                moveIngredient={moveIngredient}/>
            </li>
          ))
        }
      </ul>
      {
        bun &&
        <div className={`mt-4 ${styles.item} ${styles.bun}`}>
          <ConstructorElement
            text={`${bun.name} (низ)`}
            thumbnail={bun.image_mobile}
            price={bun.price}
            type='bottom'
            isLocked={true} />
        </div>
      }
      {
        bun &&
        <Total
          openOrderDetails={handleOpenOrder}
          total={sum()} />
      }
      <Modal
        close={handleClose}
        isOpen={open}>
        {order.length !== 0 && <OrderDetails or={order} orderNumber={order.order.number}/>}
      </Modal>
    </div>
  )
}

export default BurgerConstructor