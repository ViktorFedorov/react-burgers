import React from 'react'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './total.module.css'

const Total = ({total, openModal}) => {
  return (
    <div className={`mt-10 pr-4 ${styles.total}`}>
      <div className={`mr-10 ${styles.price}`}>
        <p className='mr-2 text text_type_digits-medium'>{total}</p>
        <CurrencyIcon type='primary' />
      </div>
      <Button type='primary' size='large' onClick={openModal} >
        Оформить заказ
      </Button>
    </div>
  )
}

Total.propTypes = {
  total: PropTypes.number.isRequired
}

export default Total