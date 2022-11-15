import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './ingredient-item.module.css'
import {useDrag} from 'react-dnd'
import ingredientPropTypes from'../../utils/types'
import {Link} from 'react-router-dom'

const IngredientItem = ({counter, onClick, ingredient}) => {
  const {image, name, price, _id} = ingredient
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient
  })


  return (
    <Link to={`/ingredients/${_id}`} className={styles.item}>
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
    </Link>
  )
}

IngredientItem.propTypes = {
  counter: PropTypes.element,
  onClick: PropTypes.func.isRequired,
  ingredient: ingredientPropTypes
}

export default IngredientItem