import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './ingredient-item.module.css'

const IngredientItem = ({name, price, image, counter}) => {
  return (
    <li className={styles.item}>
      <img src={image} alt={name} className={`ml-4 mr-4 ${styles.image}`}/>
      <div className={styles.price}>
        <p className='text text_type_digits-default mr-2 mt-1 mb-2'>{price}</p>
        <CurrencyIcon type='primary' />
        <div className={styles.counter}>
          {counter}
        </div>
      </div>
      <p className={`text text_type_main-default ${styles.text}`}>{name}</p>
    </li>
  )
}

IngredientItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  counter: PropTypes.element.isRequired,
}

export default IngredientItem