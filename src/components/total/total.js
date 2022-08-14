import React from 'react'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './total.module.css'

const Total = ({total}) => {
  return (
    <div className={`mt-10 pr-4 ${styles.total}`}>
      <div className={`mr-10 ${styles.price}`}>
        <p className='mr-2 text text_type_digits-medium'>{total}</p>
        <CurrencyIcon type='primary' />
      </div>
      <Button type='primary' size='large'>
        Оформить заказ
      </Button>
    </div>
  )
}

export default Total