import React from 'react'
import styles from './order-details.module.css'

const OrderDetails = ({orderNumber}) => {
  return (
    <div className={styles.order}>
      <h2 className={`mt-30 text text_type_digits-large ${styles.numbers}`}>{orderNumber}</h2>
      <p className='mt-8 text text_type_main-medium'>Идентификатор заказа</p>
      <div className={`mt-15 ${styles.done}`}></div>
      <p className='mt-15 text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className='mt-2 mb-30 text text_type_main-default text_color_inactive'>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}

export default OrderDetails