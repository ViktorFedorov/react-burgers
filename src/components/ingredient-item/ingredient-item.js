import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './ingredient-item.module.css'
import {useDrag} from 'react-dnd'

const IngredientItem = ({counter, onClick, ingredient}) => {
  const {image, name, price} = ingredient
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient
  })

  return (
    <li
      ref={dragRef}
      onClick={() => onClick(ingredient)}
      className={styles.item}>
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
  counter: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  ingredient: PropTypes.object.isRequired
}

export default IngredientItem