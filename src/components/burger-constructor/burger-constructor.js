import React, {useEffect, useMemo, useState} from 'react'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import Total from '../total/total'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import styles from './burger-constructor.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {closeOrderDetails, sendOrderDataThunk, setOrdersId} from '../../services/actions/order-details'
import {useDrop} from 'react-dnd'
import {deleteConstructorIngredient, setConstructorIngredient} from '../../services/actions/constructor'

const BurgerConstructor = () => {
  const {bun, toppings} = useSelector(store => store.ingredientConstructor)
  const {order, open, ordersId} = useSelector(store => store.order)
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

  // const sum = useMemo(() => {
  //   return ingredients.reduce((acc, item) => {
  //     return acc + item.price
  //   }, 0)
  // }, [ingredients])
  //
  // const bun = useMemo(() => {
  //   return ingredients.filter(item => item.type === 'bun')[0]
  // }, [ingredients, loading, error])
  //
  // const ingredientsWithoutBuns = useMemo(() => {
  //   return ingredients.filter(item => item.type !== 'bun')
  // }, [ingredients, loading, error])
  //
  // useEffect(() => {
  //   const res = ingredients.map(item => item._id)
  //   dispatch(setOrdersId(res))
  // }, [])

  const handleOpenOrder = (ordersIds) => {
    dispatch(sendOrderDataThunk(ordersIds))
  }

  const handleClose = () => {
    dispatch(closeOrderDetails())
  }

  const handleDeleteIngredient = (id) => {
    dispatch(deleteConstructorIngredient(id))
  }

  const backgroundColor = isHover ? 'rgba(0,0,0, .4)' : 'transparent'

  return (
    <div
      ref={dropRef}
      style={{backgroundColor}}
      className={`pl-5 mt-20`}>

      {/*{!toppings.length && !bun && 'перетащите выбранные ингредиенты'}*/}


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
            <li key={index} className={`mt-4 ${styles.item}`}>
              <div className={styles.dragndrop_icon}></div>
              <ConstructorElement
                handleClose={() => handleDeleteIngredient(topping.uid)}
                text={topping.name}
                thumbnail={topping.image_mobile}
                price={topping.price} />
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
    </div>
  )
}

export default BurgerConstructor


// <div className='pl-5 pt-20'>
//   <div className={`mt-4 ${styles.item} ${styles.bun}`}>
//   <ConstructorElement
//   text={`${bun.name} (верх)`}
//   thumbnail={bun.image_mobile}
//   price={bun.price}
//   type='top'
//   isLocked={true} />
//   </div>
// //   <ul className={`pr-4 ${styles.scroll} ${styles.list}`}>
//     {
//       ingredientsWithoutBuns.map(ingredient => {
//         const {_id, name, image_mobile, price} = ingredient
//
//         return (
//           <li key={_id} className={`mt-4 ${styles.item}`}>
//             <div className={styles.dragndrop_icon}></div>
//             <ConstructorElement
//               text={name}
//               thumbnail={image_mobile}
//               price={price} />
//           </li>
//         )
//       })
//     }
//   </ul>
//   <div className={`mt-4 ${styles.item} ${styles.bun}`}>
//     <ConstructorElement
//       text={`${bun.name} (низ)`}
//       thumbnail={bun.image_mobile}
//       price={bun.price}
//       type='bottom'
//       isLocked={true} />
// </div>
// <Total
//   openOrderDetails={() => handleOpenOrder(ordersId)}
//   total={sum} />
// <Modal
//   close={handleClose}
//   isOpen={open}>
//   {order.length !== 0 && <OrderDetails or={order} orderNumber={order.order.number}/>}
// </Modal>
// </div>


